"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, Nav, OverlayTrigger, Pagination, Row, Tooltip } from "react-bootstrap";

const Refunds = () => {
return( 
    <Fragment>
<div className="main-content landing-main ecommerce-main">

        {/* Start:: Breadcrumb*/}
        <div className="border-bottom py-3">
        <div className="container">
        {/* Page Header */}
        <Seo title={"Refund Requests"} />
        <Pageheader Heading="" Pagetitle={true} Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true},{title:"Customer", active:true}, {title:"Refund Requests", active:false}]} />
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
                <div className="d-sm-flex align-items-center p-3">
                    <div>
                        <span className="avatar avatar-lg avatar-rounded online me-3">
                            <img src="../../../assets/images/faces/9.jpg" alt="" />
                        </span>
                    </div>
                    <div className="main-profile-info flex-fill">
                        <h6 className="fw-semibold mb-1">Jack Miller
                        <OverlayTrigger placement="top" overlay={<Tooltip>Verified User</Tooltip>}>
                            <i className="bi bi-check-circle-fill text-success fs-14 ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Verified User"></i>
                        </OverlayTrigger>
                        </h6>
                        <p className="mb-0">Member Since 2005</p>
                    </div>
                </div>
            </Card>
            <Card className="custom-card overflow-hidden">
                <Card.Body className="p-0">
                    <Nav className="nav-tabs flex-column candidateprofile-nav"> 
                        <Link className="nav-link" href="/ecommerce/customer/customer/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="32" y="72" width="192" height="136" rx="8" opacity="0.2"/><rect x="32" y="72" width="192" height="136" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M88,96V64a40,40,0,0,1,80,0V96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>My Orders</Link>
                        <Link className="nav-link" href="/ecommerce/customer/wishlist/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,224S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54C232,168,128,224,128,224Z" opacity="0.2"/><path d="M128,224S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54C232,168,128,224,128,224Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>My Wishlist</Link>
                        <Link className="nav-link" href="/ecommerce/customer/ordertracking/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="200" cy="200" r="24" opacity="0.2"/><circle cx="200" cy="200" r="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M72,56h96a32,32,0,0,1,0,64H72a40,40,0,0,0,0,80H176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Order Tracking</Link>
                        <Link className="nav-link active" href="/ecommerce/customer/refunds/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,128h24a40,40,0,0,1,0,80H128Z" opacity="0.2"/><path d="M128,48H112a40,40,0,0,0,0,80h16Z" opacity="0.2"/><line x1="128" y1="24" x2="128" y2="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="208" x2="128" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Refunds</Link>
                        <Link className="nav-link" href="/ecommerce/customer/address/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,32H64a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V40A8,8,0,0,0,208,32ZM136,144a32,32,0,1,1,32-32A32,32,0,0,1,136,144Z" opacity="0.2"/><circle cx="136" cy="112" r="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="32" y1="72" x2="56" y2="72" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="32" y1="128" x2="56" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="32" y1="184" x2="56" y2="184" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M88,168a60,60,0,0,1,96,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><rect x="40" y="48" width="192" height="160" rx="8" transform="translate(264 -8) rotate(90)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Address Book</Link>
                        <Link className="nav-link" href="/ecommerce/customer/settings/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2"/><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M130.05,206.11c-1.34,0-2.69,0-4,0L94,224a104.61,104.61,0,0,1-34.11-19.2l-.12-36c-.71-1.12-1.38-2.25-2-3.41L25.9,147.24a99.15,99.15,0,0,1,0-38.46l31.84-18.1c.65-1.15,1.32-2.29,2-3.41l.16-36A104.58,104.58,0,0,1,94,32l32,17.89c1.34,0,2.69,0,4,0L162,32a104.61,104.61,0,0,1,34.11,19.2l.12,36c.71,1.12,1.38,2.25,2,3.41l31.85,18.14a99.15,99.15,0,0,1,0,38.46l-31.84,18.1c-.65,1.15-1.32,2.29-2,3.41l-.16,36A104.58,104.58,0,0,1,162,224Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Settings</Link>
                    </Nav>
                </Card.Body>
            </Card>
        </Col>
        <Col xl={9}>
            <Card className="custom-card">
                <Card.Header className="justify-content-between">
                    <Card.Title>
                        Refund Requests
                    </Card.Title>
                    <div className="d-flex">
                        <div className="me-3">
                            <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example"/>
                        </div>
                        <Dropdown>
                            <Dropdown.Toggle variant="" href="#!" className="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort By<i className="ri-arrow-down-s-line align-middle ms-1"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu role="menu">
                                <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Card.Header>
                <Card.Body className="p-0">
                    <div className="table-responsive">
                        <table className="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                    <th scope="col">Order Id</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Ordered Date</th>
                                    <th scope="col">Cost</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#19878</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="avatar avatar-sm avatar-square bg-gray-300"><img src="../../../assets/images/ecommerce/png/32.png" className="w-100 h-100" alt="..."/></span>
                                            <div className="ms-2">
                                                <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!"> Digital Clock</a></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        23 Mar 2022
                                    </td>
                                    <td className="fw-semibold">$54.00</td>
                                    <td><span className="badge bg-success-transparent">Accepted</span></td>
                                    <td>
                                        <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light me-1">
                                            <i className="ri-eye-line"></i>
                                        </Button>
                                        <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light me-1">
                                            <i className="ri-close-line"></i>
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#19879</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="avatar avatar-sm avatar-square bg-gray-300"><img src="../../../assets/images/ecommerce/png/15.png" className="w-100 h-100" alt="..."/></span>
                                            <div className="ms-2">
                                                <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!"> Men's Shoes</a></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        17 Aug 2022
                                    </td>
                                    <td className="fw-semibold">$87.00</td> 
                                    <td><span className="badge bg-danger-transparent">Rejected</span></td>
                                    <td>
                                        <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light me-1">
                                            <i className="ri-eye-line"></i>
                                        </Button>
                                        <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light me-1">
                                            <i className="ri-close-line"></i>
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#19876</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="avatar avatar-sm avatar-square bg-gray-300"><img src="../../../assets/images/ecommerce/png/30.png" className="w-100 h-100" alt="..."/></span>
                                            <div className="ms-2">
                                                <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!"> SQL Headphones</a></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        09 Jan 2022
                                    </td>
                                    <td className="fw-semibold">$76.00</td> 
                                    <td><span className="badge bg-success-transparent">Accepted</span></td>
                                    <td>
                                        <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light me-1">
                                            <i className="ri-eye-line"></i>
                                        </Button>
                                        <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light me-1">
                                            <i className="ri-close-line"></i>
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#19376</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="avatar avatar-sm avatar-square bg-gray-300"><img src="../../../assets/images/ecommerce/png/31.png" className="w-100 h-100" alt="..."/></span>
                                            <div className="ms-2">
                                                <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!"> Western Bag</a></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        12 Feb 2022
                                    </td>
                                    <td className="fw-semibold">$13.00</td>
                                    <td><span className="badge bg-warning-transparent">Pending</span></td>
                                    <td>
                                        <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light me-1">
                                            <i className="ri-eye-line"></i>
                                        </Button>
                                        <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light me-1">
                                            <i className="ri-close-line"></i>
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#19880</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="avatar avatar-sm avatar-square bg-gray-300"><img src="../../../assets/images/ecommerce/png/16.png" className="w-100 h-100" alt="..."/></span>
                                            <div className="ms-2">
                                                <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!"> Smart Watch</a></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        21 Oct 2022
                                    </td>
                                    <td className="fw-semibold">$78.00</td> 
                                    <td><span className="badge bg-success-transparent">Accepted</span></td>
                                    <td>
                                        <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light me-1">
                                            <i className="ri-eye-line"></i>
                                        </Button>
                                        <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light me-1">
                                            <i className="ri-close-line"></i>
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Card.Body>
                <Card.Footer className="border-top-0">
                    <div className="d-flex align-items-center flex-wrap overflow-auto">
                        <div className="mb-2 mb-sm-0">
                            Showing <b>1</b> to <b>10</b> of <b>10</b> entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                        </div>
                        <div className="ms-auto">
                            <Pagination className="pagination mb-0 overflow-auto">
                                <Pagination.Item disabled>Previous</Pagination.Item>
                                <Pagination.Item active>1</Pagination.Item>
                                <Pagination.Item>2</Pagination.Item>
                                <Pagination.Item>3</Pagination.Item>
                                <Pagination.Item>4</Pagination.Item>
                                <Pagination.Item>5</Pagination.Item>
                                <Pagination.Item className="pagination-next">Next</Pagination.Item>
                            </Pagination>
                        </div>
                    </div>
                </Card.Footer>
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

export default Refunds;