"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Nav, Pagination, Row, Table } from "react-bootstrap";

const Vendor = () => {
return ( 
    <Fragment>
          {/* Start:: Breadcrumb*/}
            <div className="border-bottom py-3">
                <div className="container">
                    {/* Page Header */}
                        <Seo title={"Vendor"} />
                        <Pageheader Heading="" Pagetitle={true} Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true},{title:"Vendor", active:true}, {title:"Vendor", active:false}]} />
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
                                        <h6 className="fw-semibold mb-1"><Link scroll={false} href="/ecommerce/vendor/profile">Jack Miller</Link><i className="bi bi-check-circle-fill text-success fs-14 ms-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Verified User"></i></h6>
                                        <p className="mb-1">Member Since 2005</p>
                                        <div className="d-flex align-items-center gap-3">
                                            <span className="badge badge-md bg-warning-transparent"><i className="ri-vip-crown-2-line vertical-middle"></i> Basic</span>
                                            <Link scroll={false} href="/ecommerce/vendor/packages/" className="text-danger"><u>Upgrade Plan</u></Link>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            <Card className="custom-card overflow-hidden">
                                <Card.Body className="p-0">
                                    <Nav className="nav-tabs flex-column candidateprofile-nav"> 
                                        <Link className="nav-link active" href="/ecommerce/vendor/vendor/">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,129.09,32.7,76.93a8,8,0,0,0-.7,3.25v95.64a8,8,0,0,0,4.16,7l88,48.18a8,8,0,0,0,3.84,1Z" opacity="0.2"/><polyline points="32.7 76.92 128 129.08 223.3 76.92" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="129.09" x2="128" y2="231.97" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M219.84,182.84l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18a8,8,0,0,1,7.68,0l88,48.18a8,8,0,0,1,4.16,7v95.64A8,8,0,0,1,219.84,182.84Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><polyline points="81.56 48.31 176 100 176 152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>All Products</Link>
                                        <Link className="nav-link" href="/ecommerce/vendor/invoices/">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M168,200V104h56v88a8,8,0,0,1-8,8Z" opacity="0.2"/><path d="M64,56H40A16,16,0,0,0,24,72h0A16,16,0,0,0,40,88H56a16,16,0,0,1,16,16h0a16,16,0,0,1-16,16H28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="48" y1="48" x2="48" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="48" y1="120" x2="48" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M96,56H224V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="104" y1="104" x2="224" y2="104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="80" y1="152" x2="224" y2="152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="168" y1="104" x2="168" y2="200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Invoices</Link>
                                        <Link className="nav-link" href="/ecommerce/vendor/orders/">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="32" y="48" width="192" height="160" rx="8" opacity="0.2"/><rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M168,88a40,40,0,0,1-80,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Orders</Link>
                                        <Link className="nav-link" href="/ecommerce/vendor/refundrequests/">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,128h24a40,40,0,0,1,0,80H128Z" opacity="0.2"/><path d="M128,48H112a40,40,0,0,0,0,80h16Z" opacity="0.2"/><line x1="128" y1="24" x2="128" y2="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="208" x2="128" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Refunds</Link>
                                        <Link className="nav-link" href="/ecommerce/vendor/settings/">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2"/><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M130.05,206.11c-1.34,0-2.69,0-4,0L94,224a104.61,104.61,0,0,1-34.11-19.2l-.12-36c-.71-1.12-1.38-2.25-2-3.41L25.9,147.24a99.15,99.15,0,0,1,0-38.46l31.84-18.1c.65-1.15,1.32-2.29,2-3.41l.16-36A104.58,104.58,0,0,1,94,32l32,17.89c1.34,0,2.69,0,4,0L162,32a104.61,104.61,0,0,1,34.11,19.2l.12,36c.71,1.12,1.38,2.25,2,3.41l31.85,18.14a99.15,99.15,0,0,1,0,38.46l-31.84,18.1c-.65,1.15-1.32,2.29-2,3.41l-.16,36A104.58,104.58,0,0,1,162,224Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Settings</Link>
                                    </Nav>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={9}>
                            <Row>                                                                            
                                <Col lg={4}>
                                    <Card className="custom-card earning-card">
                                        <Link scroll={false} href="/ecommerce/vendor/vendor/" className="stretched-link"></Link>
                                        <Card.Body className="p-4">
                                            <div className="d-flex gap-3">
                                                <div className="main-card-icon primary">
                                                    <div className="avatar avatar-lg bg-white-transparent border border-primary border-opacity-10">
                                                        <div className="avatar avatar-sm svg-white">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,129.09,32.7,76.93a8,8,0,0,0-.7,3.25v95.64a8,8,0,0,0,4.16,7l88,48.18a8,8,0,0,0,3.84,1Z" opacity="0.2"/><polyline points="32.7 76.92 128 129.08 223.3 76.92" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="129.09" x2="128" y2="231.97" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M219.84,182.84l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18a8,8,0,0,1,7.68,0l88,48.18a8,8,0,0,1,4.16,7v95.64A8,8,0,0,1,219.84,182.84Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><polyline points="81.56 48.31 176 100 176 152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-fixed-white">
                                                    <div className="mb-1">Total Products</div>
                                                    <h5 className="fs-4 text-fixed-white mb-0">
                                                        14,732
                                                    </h5>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4}>
                                    <Card className="custom-card">
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                        <Card.Body className="p-4">
                                            <div className="d-flex gap-3">
                                                <div className="main-card-icon secondary">
                                                    <div className="avatar avatar-lg bg-secondary-transparent border border-secondary border-opacity-10">
                                                        <div className="avatar avatar-sm svg-white">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="32" y="48" width="192" height="160" rx="8" opacity="0.2"/><rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M168,88a40,40,0,0,1-80,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-muted">
                                                    <div className="mb-1">Total Orders</div>
                                                    <h5 className="fs-4 mb-0">
                                                        17,290
                                                    </h5>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4}>
                                    <Card className="custom-card">
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                        <Card.Body className="p-4">
                                            <div className="d-flex gap-3">
                                                <div className="main-card-icon success">
                                                    <div className="avatar avatar-lg bg-success-transparent border border-success border-opacity-10">
                                                        <div className="avatar avatar-sm svg-white">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="80 120 32 168 80 216 80 120" opacity="0.2"/><polygon points="80 120 32 168 80 216 80 120" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M80,56h88a56,56,0,0,1,56,56h0a56,56,0,0,1-56,56H80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-muted">
                                                    <div className="mb-1">Refund Requests</div>
                                                    <h5 className="fs-4 mb-0">
                                                        12,345
                                                    </h5>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        All Products List
                                    </Card.Title>
                                    <div className="d-flex gap-3 align-items-center flex-wrap">
                                        <div className="custom-form-group flex-grow-1">
                                            <input type="text" className="form-control" placeholder="Search Products.." aria-label="Recipient's username"/>
                                            <Link scroll={false} href="#!" className="text-muted custom-form-btn"><i className="ti ti-search"></i></Link>
                                        </div> 
                                        <Link scroll={false} href="/ecommerce/vendor/addproduct/" className="btn btn-primary btn-wave waves-effect waves-light">
                                            <i className="bi bi-plus-circle me-1"></i>  Add Product
                                        </Link> 
                                    </div>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <div className="table-responsive">
                                        <Table className="table-hover text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th scope="row" className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob1" value="" aria-label="..."/></th>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Stock Qty</th>
                                                    <th scope="col">Total Sales</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob2" value="" aria-label="..."/></td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <span className="avatar avatar-md avatar-square bg-light"><img src="../../../assets/images/ecommerce/png/30.png" className="" alt="..."/></span>
                                                            <div className="ms-2">
                                                                <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!"> SoundSync Headphones</Link></p>
                                                                <p className="fs-12 text-muted mb-0">Accusam Brand</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td><span className="badge rounded-pill badge-sm bg-success-transparent">Published</span></td>
                                                    <td>
                                                       60
                                                    </td>
                                                    <td>
                                                       10
                                                    </td>
                                                    <td className="fw-semibold">$15,000</td>
                                                    <td>
                                                        <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                            <i className="ri-eye-line"></i>
                                                        </Link>
                                                        <Link scroll={false} href="/ecommerce/vendor/addproduct/" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                                                            <i className="ri-edit-line"></i>
                                                        </Link>
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                            <i className="ri-delete-bin-line"></i>
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob3" value="" aria-label="..." defaultChecked/></td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <span className="avatar avatar-md avatar-square bg-light"><img src="../../../assets/images/ecommerce/png/31.png" className="" alt="..."/></span>
                                                            <div className="ms-2">
                                                                <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!"> Western Ladies Bag</Link></p>
                                                                <p className="fs-12 text-muted mb-0">Vellintn Brand</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="badge rounded-pill badge-sm bg-danger-transparent">Unpublished</span>
                                                    </td>
                                                    <td>
                                                        120
                                                    </td>
                                                    <td>
                                                        20
                                                    </td>
                                                    <td className="fw-semibold">$25,000</td>
                                                    <td>
                                                        <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                            <i className="ri-eye-line"></i>
                                                        </Link>
                                                        <Link scroll={false} href="/ecommerce/vendor/addproduct/" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                                                            <i className="ri-edit-line"></i>
                                                        </Link>
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                            <i className="ri-delete-bin-line"></i>
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob44" value="" aria-label="..." defaultChecked/></td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <span className="avatar avatar-md avatar-square bg-light"><img src="../../../assets/images/ecommerce/png/32.png" className="" alt="..."/></span>
                                                            <div className="ms-2">
                                                                <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!"> Digital Alarm Clock</Link></p>
                                                                <p className="fs-12 text-muted mb-0">Top Brand</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="badge rounded-pill badge-sm bg-success-transparent">Published</span>
                                                    </td>
                                                    <td>
                                                        279
                                                    </td>
                                                    <td>
                                                        27
                                                    </td>
                                                    <td className="fw-semibold">$43,000</td>
                                                    <td>
                                                        <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                            <i className="ri-eye-line"></i>
                                                        </Link>
                                                        <Link scroll={false} href="/ecommerce/vendor/addproduct/" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                                                            <i className="ri-edit-line"></i>
                                                        </Link>
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                            <i className="ri-delete-bin-line"></i>
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob55" value="" aria-label="..."/></td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <span className="avatar avatar-md avatar-square bg-light"><img src="../../../assets/images/ecommerce/png/33.png" className="" alt="..."/></span>
                                                            <div className="ms-2">
                                                                <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!"> Men's Running Shoes</Link></p>
                                                                <p className="fs-12 text-muted mb-0">Erat Brand</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="badge rounded-pill badge-sm bg-danger-transparent">Unpublished</span>
                                                    </td>
                                                    <td>
                                                        270
                                                    </td>
                                                    <td>
                                                        34
                                                    </td>
                                                    <td className="fw-semibold">$10,000</td>
                                                    <td>
                                                        <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                            <i className="ri-eye-line"></i>
                                                        </Link>
                                                        <Link scroll={false} href="/ecommerce/vendor/addproduct/" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                                                            <i className="ri-edit-line"></i>
                                                        </Link>
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                            <i className="ri-delete-bin-line"></i>
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob4" value="" aria-label="..." defaultChecked/></td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <span className="avatar avatar-md avatar-square bg-light"><img src="../../../assets/images/ecommerce/png/11.png" className="" alt="..."/></span>
                                                            <div className="ms-2">
                                                                <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!"> Men's Hoodie</Link></p>
                                                                <p className="fs-12 text-muted mb-0">Top Brand</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="badge rounded-pill badge-sm bg-success-transparent">Published</span>
                                                    </td>
                                                    <td>
                                                        279
                                                    </td>
                                                    <td>
                                                        27
                                                    </td>
                                                    <td className="fw-semibold">$43,000</td>
                                                    <td>
                                                        <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                            <i className="ri-eye-line"></i>
                                                        </Link>
                                                        <Link scroll={false} href="/ecommerce/vendor/addproduct/" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                                                            <i className="ri-edit-line"></i>
                                                        </Link>
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                            <i className="ri-delete-bin-line"></i>
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob5" value="" aria-label="..."/></td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <span className="avatar avatar-md avatar-square bg-light"><img src="../../../assets/images/ecommerce/png/12.png" className="" alt="..."/></span>
                                                            <div className="ms-2">
                                                                <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!"> Men's Sweater</Link></p>
                                                                <p className="fs-12 text-muted mb-0">Erat Brand</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="badge rounded-pill badge-sm bg-danger-transparent">Unpublished</span>
                                                    </td>
                                                    <td>
                                                        270
                                                    </td>
                                                    <td>
                                                        34
                                                    </td>
                                                    <td className="fw-semibold">$10,000</td>
                                                    <td>
                                                        <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                            <i className="ri-eye-line"></i>
                                                        </Link>
                                                        <Link scroll={false} href="/ecommerce/vendor/addproduct/" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                                                            <i className="ri-edit-line"></i>
                                                        </Link>
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                            <i className="ri-delete-bin-line"></i>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                                <Card.Footer className="border-top-0">
                                    <div className="d-flex align-items-center flex-wrap overflow-auto">
                                        <div className="mb-2 mb-sm-0">
                                            Showing <b>1</b> to <b>6</b> of <b>10</b> entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                        </div>
                                        <div className="ms-auto">
                                            <Pagination className="mb-0 overflow-auto">
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

    </Fragment>
    )
};

export default Vendor;