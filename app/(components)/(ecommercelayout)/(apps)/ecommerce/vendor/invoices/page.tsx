"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Nav, OverlayTrigger, Pagination, Row, Tooltip } from "react-bootstrap";

const Invoices = () => {
return ( 
    <Fragment>
<div className="main-content landing-main ecommerce-main">

        {/* Start:: Breadcrumb*/}
        <div className="border-bottom py-3">
            <div className="container">
                {/* Page Header */}
                    <Seo title={"Invoices"} />
                    <Pageheader Heading="" Pagetitle={true} Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true},{title:"Vendor", active:true}, {title:"Invoices", active:false}]} />
                {/* Page Header Close */}
            </div>
        </div>
        {/* End:: Breadcrumb*/}

        {/* Start:: Section-1 */}
        <section className="section py-4">
            <div className="container"> 
                <Row>
                    <Col xl={3}>
                        <Card className="custom-card">
                            <div className="d-sm-flex align-items-start p-3">
                                <div>
                                    <span className="avatar avatar-lg avatar-rounded online me-3">
                                        <img src="../../../assets/images/faces/9.jpg" alt="" />
                                    </span>
                                </div>
                                <div className="main-profile-info flex-fill">
                                    <h6 className="fw-semibold mb-1"><Link scroll={false} href="/ecommerce/vendor/profile/">Jack Miller</Link>
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Verified User</Tooltip>}>
                                            <i className="bi bi-check-circle-fill text-success fs-14 ms-2 d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Verified User"></i>
                                    </OverlayTrigger>
                                    </h6>
                                    <p className="mb-1">Member Since 2005</p>
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="badge badge-md bg-warning-transparent"><i className="ri-vip-crown-2-line vertical-middle"></i> Basic</span>
                                        <Link scroll={false} href="/ecommerce/vendor/packages/" className="text-danger"><u>Upgrade Plan</u></Link>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body className="p-0">
                                <Nav className="nav-tabs flex-column candidateprofile-nav"> 
                                    <Link scroll={false} className="nav-link" href="/ecommerce/vendor/vendor/">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,129.09,32.7,76.93a8,8,0,0,0-.7,3.25v95.64a8,8,0,0,0,4.16,7l88,48.18a8,8,0,0,0,3.84,1Z" opacity="0.2"/><polyline points="32.7 76.92 128 129.08 223.3 76.92" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="129.09" x2="128" y2="231.97" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M219.84,182.84l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18a8,8,0,0,1,7.68,0l88,48.18a8,8,0,0,1,4.16,7v95.64A8,8,0,0,1,219.84,182.84Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><polyline points="81.56 48.31 176 100 176 152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>All Products</Link>
                                    <Link scroll={false} className="nav-link active" href="/ecommerce/vendor/invoices/">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M168,200V104h56v88a8,8,0,0,1-8,8Z" opacity="0.2"/><path d="M64,56H40A16,16,0,0,0,24,72h0A16,16,0,0,0,40,88H56a16,16,0,0,1,16,16h0a16,16,0,0,1-16,16H28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="48" y1="48" x2="48" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="48" y1="120" x2="48" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M96,56H224V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="104" y1="104" x2="224" y2="104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="80" y1="152" x2="224" y2="152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="168" y1="104" x2="168" y2="200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Invoices</Link>
                                    <Link scroll={false} className="nav-link" href="/ecommerce/vendor/orders/">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="32" y="48" width="192" height="160" rx="8" opacity="0.2"/><rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M168,88a40,40,0,0,1-80,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Orders</Link>
                                    <Link scroll={false} className="nav-link" href="/ecommerce/vendor/refundrequests/">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,128h24a40,40,0,0,1,0,80H128Z" opacity="0.2"/><path d="M128,48H112a40,40,0,0,0,0,80h16Z" opacity="0.2"/><line x1="128" y1="24" x2="128" y2="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="208" x2="128" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Refunds</Link>
                                    <Link scroll={false} className="nav-link" href="/ecommerce/vendor/settings/">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2"/><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M130.05,206.11c-1.34,0-2.69,0-4,0L94,224a104.61,104.61,0,0,1-34.11-19.2l-.12-36c-.71-1.12-1.38-2.25-2-3.41L25.9,147.24a99.15,99.15,0,0,1,0-38.46l31.84-18.1c.65-1.15,1.32-2.29,2-3.41l.16-36A104.58,104.58,0,0,1,94,32l32,17.89c1.34,0,2.69,0,4,0L162,32a104.61,104.61,0,0,1,34.11,19.2l.12,36c.71,1.12,1.38,2.25,2,3.41l31.85,18.14a99.15,99.15,0,0,1,0,38.46l-31.84,18.1c-.65,1.15-1.32,2.29-2,3.41l-.16,36A104.58,104.58,0,0,1,162,224Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Settings</Link>
                                </Nav>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={9}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title className="flex-fill">
                                    Invoices List <span className="text-primary"></span>
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col">Invoice ID</th>
                                                <th scope="col">Issued Date</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Due Date</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <Link scroll={false} href="/ecommerce/vendor/invoicedetails/" className="fw-semibold text-primary">
                                                        #SPK12032901
                                                    </Link>
                                                </td>
                                                <td>
                                                    25,Nov 2022
                                                </td>
                                                <td>
                                                    $212.45
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Paid</span>
                                                </td>
                                                <td>
                                                    25,Dec 2022
                                                </td>
                                                <td>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Print</Tooltip>}>
                                                    <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-printer-line"></i></Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm"><i className="ri-delete-bin-5-line"></i></Button>
                                                </OverlayTrigger>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link scroll={false} href="/ecommerce/vendor/invoicedetails/" className="fw-semibold text-primary">
                                                        #SPK12032912
                                                    </Link>
                                                </td>
                                                <td>
                                                    13,Nov 2022
                                                </td>
                                                <td>
                                                    $512.99
                                                </td>
                                                <td>
                                                    <span className="badge bg-warning-transparent">Pending</span>
                                                </td>
                                                <td>
                                                    13,Dec 2022
                                                </td>
                                                <td>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Print</Tooltip>}>
                                                        <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-printer-line"></i></Button>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                    <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm"><i className="ri-delete-bin-5-line"></i></Button>
                                                    </OverlayTrigger>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link scroll={false} href="/ecommerce/vendor/invoicedetails/" className="fw-semibold text-primary">
                                                        #SPK12032945
                                                    </Link>
                                                </td>
                                                <td>
                                                    30,Nov 2022
                                                </td>
                                                <td>
                                                    $2199.49
                                                </td>
                                                <td>
                                                    <span className="badge bg-danger-transparent">Overdue</span>
                                                </td>
                                                <td>
                                                    30,Dec 2022
                                                </td>
                                                <td>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Print</Tooltip>}>
                                                        <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-printer-line"></i></Button>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                        <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm"><i className="ri-delete-bin-5-line"></i></Button>
                                                    </OverlayTrigger>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link scroll={false} href="/ecommerce/vendor/invoicedetails/" className="fw-semibold text-primary">
                                                        #SPK12032922
                                                    </Link>
                                                </td>
                                                <td>
                                                    18,Nov 2022
                                                </td>
                                                <td>
                                                    $1569.99
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Paid</span>
                                                </td>
                                                <td>
                                                    18,Dec 2022
                                                </td>
                                                <td>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Print</Tooltip>}>
                                                    <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-printer-line"></i></Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                    <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm"><i className="ri-delete-bin-5-line"></i></Button>
                                                </OverlayTrigger>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link scroll={false} href="/ecommerce/vendor/invoicedetails/" className="fw-semibold text-primary">
                                                        #SPK12032932
                                                    </Link>
                                                </td>
                                                <td>
                                                    18,Nov 2022
                                                </td>
                                                <td>
                                                    $4,873.99
                                                </td>
                                                <td>
                                                    <span className="badge bg-primary-transparent">Due By 1 Day</span>
                                                </td>
                                                <td>
                                                    18,Dec 2022
                                                </td>
                                                <td>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Print</Tooltip>}>
                                                    <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-printer-line"></i></Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm"><i className="ri-delete-bin-5-line"></i></Button>
                                                </OverlayTrigger>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link scroll={false} href="/ecommerce/vendor/invoicedetails/" className="fw-semibold text-primary">
                                                        #SPK12032978
                                                    </Link>
                                                </td>
                                                <td>
                                                    02,Nov 2022
                                                </td>
                                                <td>
                                                    $1923.99
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Paid</span>
                                                </td>
                                                <td>
                                                    18,Dec 2022
                                                </td>
                                                <td>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Print</Tooltip>}>
                                                    <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-printer-line"></i></Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                    <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm"><i className="ri-delete-bin-5-line"></i></Button>
                                                </OverlayTrigger>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link scroll={false} href="/ecommerce/vendor/invoicedetails/" className="fw-semibold text-primary">
                                                        #SPK12032919
                                                    </Link>
                                                </td>
                                                <td>
                                                    15,Nov 2022
                                                </td>
                                                <td>
                                                    $1,623.99
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Paid</span>
                                                </td>
                                                <td>
                                                    15,Dec 2022
                                                </td>
                                                <td>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Print</Tooltip>}>
                                                    <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-printer-line"></i></Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm"><i className="ri-delete-bin-5-line"></i></Button>
                                                </OverlayTrigger>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link scroll={false} href="/ecommerce/vendor/invoicedetails/" className="fw-semibold text-primary">
                                                        #SPK12032931
                                                    </Link>
                                                </td>
                                                <td>
                                                    21,Nov 2022
                                                </td>
                                                <td>
                                                    $3,423.99
                                                </td>
                                                <td>
                                                    <span className="badge bg-warning-transparent">Pending</span>
                                                </td>
                                                <td>
                                                    21,Dec 2022
                                                </td>
                                                <td>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Print</Tooltip>}>
                                                    <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-printer-line"></i></Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                    <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm"><i className="ri-delete-bin-5-line"></i></Button>
                                                </OverlayTrigger>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Link scroll={false} href="/ecommerce/vendor/invoicedetails/" className="fw-semibold text-primary">
                                                        #SPK12032958
                                                    </Link>
                                                </td>
                                                <td>
                                                    15,Oct 2022
                                                </td>
                                                <td>
                                                    $2,982.99
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Paid</span>
                                                </td>
                                                <td>
                                                    15,Nov 2022
                                                </td>
                                                <td>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Print</Tooltip>}>
                                                    <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-printer-line"></i></Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                    <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm"><i className="ri-delete-bin-5-line"></i></Button>
                                                </OverlayTrigger>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>                                
                            </Card.Body>
                            <div className="card-footer border-top-0">
                                <nav aria-label="Page navigation" className="pagination-style-4 float-end">
                                    <Pagination className="pagination mb-0">
                                        <Pagination.Item disabled>Prev</Pagination.Item>
                                        <Pagination.Item active>1</Pagination.Item>
                                        <Pagination.Item>2</Pagination.Item>
                                        <Pagination.Item><i className="bi bi-three-dots"></i></Pagination.Item>
                                        <Pagination.Item>16</Pagination.Item>
                                        <Pagination.Item>17</Pagination.Item>
                                        <Pagination.Item className="pagination-next">Next</Pagination.Item>
                                    </Pagination>  
                                </nav>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </section> 
        {/* End:: Section-1 */}

        {/* Start:: Section-2 */}
        <section className="section bg-banner px-lg-0 px-4">
            <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                    <div className="mb-4">
                        <h3 className="fw-semibold mb-2 text-fixed-white">&#128073; Download our free mobile apps today</h3>
                    </div>
                    <h6 className="mb-4 op-9 text-fixed-white">Labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore..</h6>
                    <div className="btn-list">
                        <Link scroll={false} href="#!" className="btn btn-dark app-store">
                            <img src="../../../assets/images/media/apps/play-store.png" alt="" />
                            Google Play
                        </Link>
                        <Link scroll={false} href="#!" className="btn btn-dark app-store">
                            <img src="../../../assets/images/media/apps/apple-store.png" alt="" className="invert-1"/>
                            App Store
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        {/* End:: Section-2 */}

</div>
    </Fragment>
    )
};

export default Invoices;