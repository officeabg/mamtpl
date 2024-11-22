"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Accordion, Card, Col, Nav, OverlayTrigger, Row, Tooltip } from "react-bootstrap";

const Ordertarcking = () => {
return ( 
    <Fragment>
<div className="main-content landing-main ecommerce-main">

        {/* Start:: Breadcrumb*/}
        <div className="border-bottom py-3">
            <div className="container">
                {/* Page Header */}
                    <Seo title={"Order Tracking"} />
                    <Pageheader Heading="" Pagetitle={true}  Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true},{title:"Customer", active:true}, {title:"Order Tracking", active:false}]} />
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
                                        <img src="../../../assets/images/faces/9.jpg" alt=""/>
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
                        <Card className="custom-card">
                            <Card.Body className="p-0">
                                <Nav className="nav nav-tabs flex-column candidateprofile-nav"> 
                                    <Link  className="nav-link" href="/ecommerce/customer/customer/">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="32" y="72" width="192" height="136" rx="8" opacity="0.2"/><rect x="32" y="72" width="192" height="136" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M88,96V64a40,40,0,0,1,80,0V96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>My Orders</Link>
                                    <Link  className="nav-link" href="/ecommerce/customer/wishlist/">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,224S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54C232,168,128,224,128,224Z" opacity="0.2"/><path d="M128,224S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54C232,168,128,224,128,224Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>My Wishlist</Link>
                                    <Link  className="nav-link active" href="/ecommerce/customer/ordertracking/">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="200" cy="200" r="24" opacity="0.2"/><circle cx="200" cy="200" r="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M72,56h96a32,32,0,0,1,0,64H72a40,40,0,0,0,0,80H176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Order Tracking</Link>
                                    <Link  className="nav-link" href="/ecommerce/customer/refunds/">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,128h24a40,40,0,0,1,0,80H128Z" opacity="0.2"/><path d="M128,48H112a40,40,0,0,0,0,80h16Z" opacity="0.2"/><line x1="128" y1="24" x2="128" y2="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="208" x2="128" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Refunds</Link>
                                    <Link className="nav-link" href="/ecommerce/customer/address/">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,32H64a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V40A8,8,0,0,0,208,32ZM136,144a32,32,0,1,1,32-32A32,32,0,0,1,136,144Z" opacity="0.2"/><circle cx="136" cy="112" r="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="32" y1="72" x2="56" y2="72" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="32" y1="128" x2="56" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="32" y1="184" x2="56" y2="184" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M88,168a60,60,0,0,1,96,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><rect x="40" y="48" width="192" height="160" rx="8" transform="translate(264 -8) rotate(90)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Address Book</Link>
                                    <Link  className="nav-link" href="/ecommerce/customer/settings/">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2"/><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M130.05,206.11c-1.34,0-2.69,0-4,0L94,224a104.61,104.61,0,0,1-34.11-19.2l-.12-36c-.71-1.12-1.38-2.25-2-3.41L25.9,147.24a99.15,99.15,0,0,1,0-38.46l31.84-18.1c.65-1.15,1.32-2.29,2-3.41l.16-36A104.58,104.58,0,0,1,94,32l32,17.89c1.34,0,2.69,0,4,0L162,32a104.61,104.61,0,0,1,34.11,19.2l.12,36c.71,1.12,1.38,2.25,2,3.41l31.85,18.14a99.15,99.15,0,0,1,0,38.46l-31.84,18.1c-.65,1.15-1.32,2.29-2,3.41l-.16,36A104.58,104.58,0,0,1,162,224Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Settings</Link>
                                </Nav>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={9}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Order Tracking
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <div className="d-flex align-items-center mb-2">
                                            <label className="form-label mb-0">Enter your order ID</label>
                                            <Link scroll={false} href="#!" data-bs-toggle="tooltip" className="text-primary ms-2" aria-label="Help?"><i className="ti ti-info-circle fs-18"></i></Link>
                                        </div>
                                        <div className="custom-form-group mb-3">
                                            <input type="text" className="form-control form-control-lg" placeholder="Order ID" aria-label="Order ID"/>
                                            <button className="btn btn-primary border-0 custom-form-btn" type="button">Track Order</button>
                                        </div>
                                    </Col>
                                    <Col md={12}>
                                        <div className="d-flex align-items-center gap-4">
                                            <p className="mb-0">
                                                <span className="">Order ID :</span>
                                                <span className="text-primary ms-1 d-inline-flex">#115876</span>
                                            </p>
                                            <p className="mb-0">
                                                <span className="">Product :</span>
                                                <span className="text-primary ms-1 d-inline-flex"> Men's Sports Shoes</span>
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                                <div className=" order-track-accordion order-track mt-4">
                                    <Accordion defaultActiveKey="first" className="accordion" id="basicAccordion">
                                        <Accordion.Item eventKey="first" className=" border-0 bg-transparent">
                                            <Accordion.Header id="headingOne">
                                                    <div className="d-flex mb-0">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <img src="../../../assets/images/ecommerce/png/18.png" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="fw-semibold mb-0 fs-15">Order Placed</p>
                                                            <span className=" text-success">Nov 03, 2024</span>
                                                        </div>
                                                    </div>
                                            </Accordion.Header>
                                                <Accordion.Body className="pt-0 ps-5">
                                                    <div className="">
                                                        <p className="mb-0">Order placed successfully by <a href="#!" className="font-weight-semibold text-primary">Sansa Taylor</a></p>
                                                        <span className="text-muted fs-12">Nov 03, 2024, 15:36</span>
                                                    </div>
                                                </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <Accordion defaultActiveKey="first" className="accordion" id="basicAccordion1">
                                        <Accordion.Item eventKey="first" className=" border-0 bg-transparent">
                                            <Accordion.Header id="headingTwo">
                                            
                                                    <div className="d-flex mb-0">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <img src="../../../assets/images/ecommerce/png/8.png" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="fw-semibold mb-0 fs-15">Picked</p>
                                                            <span className="fs-12">Nov 03, 15:10</span>
                                                        </div>
                                                    </div>
                                            </Accordion.Header>
                                                <Accordion.Body className="pt-0 ps-5">
                                                    <div className="">
                                                        <p className="mb-0">Your order has been picked up by <span className="font-weight-semibold">Smart Good Services</span></p>
                                                        <span className="text-muted fs-12">Nov 03, 2024, 15:36</span>
                                                    </div>
                                                </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <Accordion defaultActiveKey="first" className="accordion" id="basicAccordion2">
                                        <Accordion.Item eventKey="first" className=" border-0 bg-transparent">
                                            <Accordion.Header id="headingThree">
                                                    <div className="d-flex mb-0">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <img src="../../../assets/images/ecommerce/png/19.png" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="fw-semibold mb-0 fs-15">Shipping</p>
                                                            <span className="fs-12">Nov 03, 15:10</span>
                                                        </div>
                                                    </div>
                                            </Accordion.Header>
                                                <Accordion.Body className="pt-0 ps-5">
                                                    <div className=" mb-3">
                                                        <p className="mb-0">Arrived USA <span className="font-weight-semibold">SGS Warehouse</span></p>
                                                        <span className="text-muted fs-12">Nov 03, 2024, 15:36</span>
                                                    </div>
                                                    <div className=" mb-3">
                                                        <p className="mb-0">picked up by <span className="font-weight-semibold">SGS Agent</span> and on the way to Hyderabad</p>
                                                        <span className="text-muted fs-12">Nov 03, 2024, 15:36</span>
                                                    </div>
                                                    <div className="">
                                                        <p className="mb-0">Arrived in Hyderabad and expected Delivery is <span className="font-weight-semibold">Apr 16, 2024</span> </p>
                                                        <span className="text-muted fs-12">Nov 03, 2024, 15:36</span>
                                                    </div>
                                                </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <Accordion className="accordion" id="basicAccordion3">
                                        <Accordion.Item eventKey="" className=" border-0 bg-transparent next-step">
                                            <Accordion.Header id="headingFour">
                                            
                                                    <div className="d-flex mb-2">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md avatar-rounded bg-light text-default"><i className="fe fe-package"></i></span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="fw-semibold mb-0 fs-15">Out For Delivery</p>
                                                            <span className="text-muted fs-12">Nov 03, 15:10 (expected)</span>
                                                        </div>
                                                    </div>
                                            </Accordion.Header>
                                                <Accordion.Body className="pt-0 ps-5">
                                                    <div className="">
                                                        <p className="mb-0">Your order is out for devlivery</p>
                                                        <span className="text-muted fs-12">Nov 03, 2024, 15:36 (expected)</span>
                                                    </div>
                                                </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <Accordion className="accordion" id="basicAccordion4">
                                        <Accordion.Item eventKey="" className=" border-0 bg-transparent next-step">
                                            <Accordion.Header id="headingFive">
                                                    <div className="d-flex mb-2">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md avatar-rounded bg-light text-default"><i className="fe fe-package"></i></span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="fw-semibold mb-0 fs-15">Delivered</p>
                                                            <span className="fs-12 text-muted">Nov 03, 18:42</span>
                                                        </div>
                                                    </div>
                                            </Accordion.Header>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </Card.Body>
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
                            <img src="../../../assets/images/media/apps/play-store.png" alt=""/>
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

export default Ordertarcking;