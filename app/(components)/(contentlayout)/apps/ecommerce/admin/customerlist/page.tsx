"use client"
import { Customerlistdata } from "@/shared/data/apps/ecommerce/admin/customerlistdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import {  Card, Col, Dropdown, Pagination, Row } from "react-bootstrap";

const Customerlist = () => {
return ( 
    <Fragment>
                {/* Page Header */}
                    <Seo title={"Customers List"} />
                    <Pageheader Heading="Customers List" Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true}, {title:"Admin", active:true}, {title:"Customers List", active:false},]} />
                {/* Page Header Close */}
                
                {/* Start:: row-1 */}
                <Row>
                    <Col xxl={12} xl={12}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    Customers List
                                </Card.Title>
                                <div className="d-flex gap-3 align-items-center flex-wrap">
                                    <div className="btn-group">
                                       <Dropdown>
                                        <Dropdown.Toggle  variant="" className="btn btn-outline-light border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="ti ti-sort-descending-2 me-1"></i> Sort By
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <li><Dropdown.Item href="#!">Created Date</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Status</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Featured</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Customer Name</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Newest</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Oldest</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                       </Dropdown>
                                    </div>
                                    <div className="custom-form-group flex-grow-1">
                                        <input type="text" className="form-control form-control-sm" placeholder="Search Resume Template s.." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                        <Link scroll={false} href="#!" className="text-muted custom-form-btn"><i className="ti ti-search"></i></Link>
                                    </div> 
                                    <Link scroll={false} href="/apps/ecommerce/admin/addcustomer/" className="btn btn-primary btn-wave waves-effect waves-light">
                                        <i className="bi bi-plus-circle"></i>  Add Customer
                                    </Link> 
                                </div>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <table className="table table-hover text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col">Customer</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Mobile Number</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Total Orders</th>
                                                <th scope="col">Wallet Balance</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Customerlistdata.map((idx)=>(
                                                <tr key={Math.random()}>
                                                    <th scope="row">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-md p-1 bg-light avatar-rounded">
                                                                    <img src={idx.src} alt="" />
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <Link scroll={false} href="/apps/ecommerce/admin/customerdetails/" className="fw-semibold mb-0">{idx.name}</Link>
                                                                <p className="fs-12 text-muted mb-0"><i className="bi bi-geo-alt"></i> {idx.location}</p>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>{idx.mail}</td>
                                                    <td>{idx.mobilenumber}</td>
                                                    <td><span className={`badge bg-${idx.statuscolor}-transparent`}>{idx.status}</span></td>
                                                    <td>{idx.totalorders}</td>
                                                    <td>
                                                        {idx.walletblc}
                                                    </td>
                                                    <td>
                                                        <Link scroll={false} href="/apps/ecommerce/admin/customerdetails/" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                            <i className="ri-eye-line"></i>
                                                        </Link>
                                                        <Link scroll={false} href="/apps/ecommerce/admin/addcustomer/" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                                                            <i className="ri-edit-line"></i>
                                                        </Link>
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                            <i className="ri-delete-bin-line"></i>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                            <Card.Footer className="border-top-0">
                                <nav aria-label="Page navigation" className="pagination-style-4 float-end">
                                    <Pagination className=" mb-0">
                                        <Pagination.Item disabled>Prev</Pagination.Item>
                                        <Pagination.Item active>1</Pagination.Item>
                                        <Pagination.Item>2</Pagination.Item>
                                        <Pagination.Item className="page-item"><i className="bi bi-three-dots"></i></Pagination.Item>
                                        <Pagination.Item>16</Pagination.Item>
                                        <Pagination.Item>17</Pagination.Item>
                                        <Pagination.Item className="pagination-next" href="#!">
                                                next
                                        </Pagination.Item>
                                    </Pagination>
                                </nav>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-1 */}
    </Fragment>
    )
};

export default Customerlist;