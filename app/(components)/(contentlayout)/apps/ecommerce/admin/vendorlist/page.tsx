"use client"
import { vendorlistloopdata } from "@/shared/data/apps/ecommerce/admin/vendorlistdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import {  Card, Col, Dropdown, Pagination, Row } from "react-bootstrap";

const Vendorlist = () => {
return ( 
    <Fragment>
            {/* Page Header */}
                <Seo title={"Vendors List"} />
                <Pageheader Heading="Vendors List" Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true}, {title:"Admin", active:true}, {title:"Vendors List", active:false},]} />
            {/* Page Header Close */}
                
                {/* Start::row-1 */}
                <Row>
                    <Col xxl={12} xl={12} className="">
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    VENDORS LIST
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
                                                <li><Dropdown.Item href="#!">Vendor Name</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Newest</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Oldest</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="custom-form-group flex-grow-1">
                                        <input type="text" className="form-control" placeholder="Search Resume Templates.." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <Link scroll={false} href="#!" className="text-muted custom-form-btn"><i className="ti ti-search"></i></Link>
                                    </div> 
                                    <Link scroll={false} href="/apps/ecommerce/admin/addvendor/" className="btn btn-primary btn-wave waves-effect waves-light">
                                        <i className="bi bi-plus-circle"></i>  Add Vendor
                                    </Link> 
                                </div>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <table className="table table-hover text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col">Vendor</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Joined Date</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Total Products</th>
                                                <th scope="col">Total Orders</th>
                                                <th scope="col">Subscription</th>
                                                <th scope="col" className="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {vendorlistloopdata.map((idx)=>(
                                                <tr key={Math.random()}>
                                                    <th scope="row">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-md p-1 bg-light avatar-rounded">
                                                                    <img src={idx.src} alt="" />
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <Link scroll={false} href="/apps/ecommerce/admin/vendordetails/" className="fw-semibold mb-0">{idx.title}</Link>
                                                                <p className="fs-12 text-muted mb-0"><i className="bi bi-geo-alt"></i> {idx.location}</p>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>{idx.mail}</td>
                                                    <td>{idx.joineddate}</td>
                                                    <td><span className={`badge bg-${idx.statuscolor}-transparent`}>{idx.status}</span></td>
                                                    <td>{idx.totalproducts}</td>
                                                    <td>{idx.totalorders}</td>
                                                    <td><span className={`badge bg-${idx.badgecolor}-transparent`}><i className="ri-vip-crown-2-line vertical-middle"></i> {idx.badgetxt}</span></td>
                                                    <td className="text-center">
                                                        <Dropdown>
                                                            <Dropdown.Toggle variant="" className="btn btn-icon btn-sm border btn-light btn-wave waves-effect waves-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ti ti-dots-vertical"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <li><Dropdown.Item href="#!"><i className="ri-eye-line me-2"></i>View</Dropdown.Item></li>
                                                                <li><Dropdown.Item href="#!"><i className="ri-edit-line me-2"></i>Edit</Dropdown.Item></li>
                                                                <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-2"></i>Delete</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                            <Card.Footer className="border-top-0">
                                <nav aria-label="Page navigation" className="pagination-style-4">
                                    <Pagination className="mb-0">
                                        <Pagination.Item disabled>Prev</Pagination.Item>
                                        <Pagination.Item active>1</Pagination.Item>
                                        <Pagination.Item>2</Pagination.Item>
                                        <Pagination.Item><i className="bi bi-three-dots"></i></Pagination.Item>
                                        <Pagination.Item>16</Pagination.Item>
                                        <Pagination.Item>17</Pagination.Item>
                                        <Pagination.Item className="pagination-next">next</Pagination.Item>
                                    </Pagination>
                                </nav>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    )
};

export default Vendorlist;