"use client"
import { Manageinvoices } from "@/shared/data/pages/invoice/invoicelistdata";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Dropdown, Pagination, Row } from "react-bootstrap";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Invoicedata from '@/shared/data/pages/invoice/invoicelistdata';
import CountUp from "react-countup";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Link from "next/link";
const Invoicelist = () => {
    //Delete function
    const [manageCompanydata, setManageCompanydata] = useState([...Manageinvoices]);
    const handleDelete = (idToRemove: string) => {
        const updatedInvoiceData = manageCompanydata.filter((item) => item.id !== idToRemove);
        setManageCompanydata(updatedInvoiceData);
    };
return (
<Fragment>
                {/* Page Header */}
                    <Seo title={"Invoice List"} />
                    <Pageheader Heading="Invoice List" Pages={[{title:"Pages", active:true},{title:"Invoice", active:true},{title:"Invoice List", active:false},]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={12}>
                        <Row>
                            <Col xl={6}>
                                <Row>
                                    <Col xxl={6}>
                                        <Card className="custom-card">
                                            <Card.Body className="p-4">
                                                <div className="d-flex align-items-start gap-3">
                                                    <div className="main-card-icon primary mb-3">
                                                        <div className="avatar avatar-lg bg-primary-transparent border border-primary border-opacity-10">
                                                            <div className="avatar avatar-sm svg-white">
                                                                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"/></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <h6 className="mb-2 fs-12">Total Amount</h6> 
                                                        <div className="pb-0 mt-0"> 
                                                            <div> 
                                                                <div className="d-flex align-items-center gap-2 mb-2">
                                                                    <h4 className="fw-medium mb-0">$
                                                                    <CountUp className="count-up" end={471.87} />k</h4> 
                                                                    <span className="badge bg-primary">12,345</span>
                                                                </div>
                                                                <p className="text-muted fs-11 mb-0 lh-1">
                                                                    <span className="text-success me-1 fw-medium d-inline-block">
                                                                        <i className="ri-arrow-up-s-line me-1 align-middle"></i>3.25%
                                                                    </span>
                                                                    <span>this month</span>
                                                                </p>
                                                            </div> 
                                                        </div> 
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={6}>
                                        <Card className="custom-card">
                                            <Card.Body className="p-4">
                                                <div className="d-flex align-items-start gap-3">
                                                    <div className="main-card-icon secondary mb-3">
                                                        <div className="avatar avatar-lg bg-secondary-transparent border border-secondary border-opacity-10">
                                                            <div className="avatar avatar-sm svg-white">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z"/></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <h6 className="mb-2 fs-12">Total Paid</h6> 
                                                        <div> 
                                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                                <h4 className="fw-medium mb-0">$<CountUp className="count-up" end={320.87} />k</h4> 
                                                                <span className="badge bg-secondary">4,176</span>
                                                            </div>    
                                                            <p className="text-muted fs-11 mb-0 lh-1">
                                                                <span className="text-danger me-1 fw-medium d-inline-block">
                                                                    <i className="ri-arrow-down-s-line me-1 align-middle"></i>1.16%
                                                                </span>
                                                                <span>this month</span>
                                                            </p>
                                                        </div> 
                                                    </div>
                                                </div>    
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={6}>
                                        <Card className="custom-card">
                                            <Card.Body className="p-4">
                                                <div className="d-flex align-items-start gap-3">
                                                    <div className="main-card-icon success mb-3">
                                                        <div className="avatar avatar-lg bg-success-transparent border border-success border-opacity-10">
                                                            <div className="avatar avatar-sm svg-white">
                                                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z"/></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <h6 className="mb-2 fs-12">Pending Invoices</h6> 
                                                        <div> 
                                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                                <h4 className="fw-medium mb-0"><CountUp className="count-up" end={80.87} /></h4> 
                                                                <span className="badge bg-success">7,064</span>
                                                            </div>    
                                                            <p className="text-muted fs-11 mb-0 lh-1">
                                                                <span className="text-success me-1 fw-medium d-inline-block">
                                                                    <i className="ri-arrow-up-s-line me-1 align-middle"></i>0.25%
                                                                </span>
                                                                <span>this month</span>
                                                            </p>
                                                        </div> 
                                                    </div>
                                                </div>    
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={6}>
                                        <Card className="custom-card">
                                            <Card.Body className="p-4">
                                                <div className="d-flex align-items-start gap-3">
                                                    <div className="main-card-icon orange mb-3">
                                                        <div className="avatar avatar-lg bg-orange-transparent border border-orange border-opacity-10">
                                                            <div className="avatar avatar-sm svg-white">
                                                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z"/></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <h6 className="mb-2 fs-12">Overdue Invoices</h6> 
                                                        <div> 
                                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                                <h4 className="fw-medium mb-0"><CountUp className="count-up" end={32.87} />K</h4> 
                                                                <span className="badge bg-orange border">1,105</span>
                                                            </div>    
                                                            <p className="text-muted fs-11 mb-0 lh-1">
                                                                <span className="text-success me-1 fw-semibFold d-inline-block">
                                                                    <i className="ri-arrow-down-s-line me-1 align-middle"></i>0.46%
                                                                </span>
                                                                <span>this month</span>
                                                            </p>
                                                        </div> 
                                                    </div>
                                                </div>    
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={6}>
                                <Card className="custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                            Invoice Statistics
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body className="px-0 pb-0">
                                        <div id="invoice-list-stats">
                                            <ReactApexChart options={Invoicedata.Invoicestatistics.options} series={Invoicedata.Invoicestatistics.series} type="bar" width={"100%"} height={180} />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    Manage Invoices
                                </Card.Title>
                                <div className="d-flex">
                                    <Link scroll={false} href="/pages/invoice/createinvoice/" className="btn btn-sm btn-primary btn-wave waves-light"><i className="ri-add-line fw-medium align-middle me-1"></i> Create Invoice</Link>
                                    <Dropdown className="ms-2">
                                        <Dropdown.Toggle variant="" className="btn btn-icon btn-secondary-light btn-sm btn-wave waves-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ti ti-dots-vertical"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <li><Dropdown.Item href="#!">All Invoices</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Paid Invoices</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Pending Invoices</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Overdue Invoices</Dropdown.Item></li>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col">Client</th>
                                                <th scope="col">Invoice ID</th>
                                                <th scope="col">Issued Date</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Due Date</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {manageCompanydata.map((idx)=>(
                                                <tr className="invoice-list" key={Math.random()}>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2 lh-1">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <img src={idx.src} alt="" />
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <p className="mb-0 fw-medium">{idx.name}</p>
                                                                <p className="mb-0 fs-11 text-muted">{idx.mail}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#!" className="fw-medium text-primary">
                                                            {idx.invoiceid}
                                                        </a>
                                                    </td>
                                                    <td>
                                                        {idx.issueddate}
                                                    </td>
                                                    <td>
                                                        {idx.amount}
                                                    </td>
                                                    <td>
                                                        <span className={`badge bg-${idx.color}-transparent`}>{idx.status}</span>
                                                    </td>
                                                    <td>
                                                        {idx.duedate}
                                                    </td>
                                                    <td>
                                                        <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-printer-line"></i></Button>
                                                        <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm invoice-btn" onClick={() => handleDelete(idx.id)}><i className="ri-delete-bin-5-line"></i></Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                            <Card.Footer className="border-top-0">
                                <nav aria-label="Page navigation">
                                    <Pagination className="pagination mb-0 float-end">
                                        <Pagination.Item disabled>Previous
                                        </Pagination.Item>
                                        <Pagination.Item >1</Pagination.Item>
                                        <Pagination.Item active aria-current="page">2</Pagination.Item>
                                        <Pagination.Item>3</Pagination.Item>
                                        <Pagination.Item className="pagination-next">Next</Pagination.Item>
                                    </Pagination>
                                </nav>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
</Fragment>
);
};

export default Invoicelist;