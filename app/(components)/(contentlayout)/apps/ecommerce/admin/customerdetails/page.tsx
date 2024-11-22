"use client"
import Link from "next/link";
import React, { Fragment } from "react";
import { Accordion, Button, Card, Col, Dropdown, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Customerdetailsdata from '@/shared/data/apps/ecommerce/admin/customerdetailsdata';
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Customerdetails = () => {
return ( 
    <Fragment>
        
                {/* Page Header */}
                    <Seo title={"Customer Details"} />
                    <Pageheader Heading="Customer Details" Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true}, {title:"Admin", active:true}, {title:"Customer Details", active:false},]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xxl={6} xl={12}>
                        <Row>
                            <Col lg={6}>
                                <Card className="custom-card">
                                    <Card.Body className="p-4">
                                        <div className="d-flex align-items-start gap-3">
                                            <div className="main-card-icon primary p-0">
                                                <div className="avatar avatar-lg bg-primary-transparent border border-primary border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M216,64H176a48,48,0,0,0-96,0H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm88,168H40V80H80V96a8,8,0,0,0,16,0V80h64V96a8,8,0,0,0,16,0V80h40Z"></path></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-fill">
                                                <div className="mb-2">Total Orders</div>
                                                <div className="text-muted mb-0 fs-12 d-flex align-items-end justify-content-between flex-wrap gap-1">
                                                    <span className="text-dark fw-medium h4 mb-0 lh-1 vertical-bottom flex-grow-1">
                                                        14,732
                                                    </span>
                                                    <Link scroll={false} href="#!" className="text-primary fw-semibold">View All <i className="fe fe-arrow-right d-inline-block"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={6}>
                                <Card className="custom-card">
                                    <Card.Body className="p-4">
                                        <div className="d-flex align-items-start gap-3">
                                            <div className="main-card-icon secondary p-0">
                                                <div className="avatar avatar-lg bg-secondary-transparent border border-secondary border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,224S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54C232,168,128,224,128,224Z" opacity="0.2"/><path d="M128,224S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54C232,168,128,224,128,224Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-fill">
                                                <div className="mb-2">Total Wishlist</div>
                                                <div className="text-muted mb-0 fs-12 d-flex align-items-end justify-content-between flex-wrap gap-1">
                                                    <span className="text-dark fw-medium h4 mb-0 lh-1 vertical-bottom flex-grow-1">
                                                        34,732
                                                    </span>
                                                    <Link scroll={false} href="#!" className="text-primary fw-semibold">View All <i className="fe fe-arrow-right d-inline-block"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className="custom-card overflow-hidden">
                                    <Card.Header className="justify-content-between">
                                    <Card.Title>ORDER SUMMARY</Card.Title>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 no-caret border-0 d-inline-flex" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
                                        </Dropdown.Toggle>
                                    <Dropdown.Menu role="menu">
                                            <li><Dropdown.Item href="#!">Today</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <div className="row border-bottom border-block-end-dashed">
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={4} className="col-12">
                                            <div className="p-4 border-sm-end border-inline-end-dashed text-sm-start text-center">
                                                <p className="fs-20 fw-medium mb-0">1,117</p>
                                                <p className="mb-0 text-muted">Total Orders</p>
                                            </div>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={4} className="col-12">
                                            <div className="p-4 border-sm-end border-inline-end-dashed text-sm-start text-center">
                                                <p className="fs-20 fw-medium mb-0"><span className="basic-subscription">742</span></p>
                                                <p className="mb-0 text-muted">Delivered Orders</p>
                                            </div>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={4} className="col-12">
                                            <div className="p-4 text-sm-start text-center">
                                                <p className="fs-20 fw-medium mb-0"><span className="pro-subscription">259</span></p>
                                                <p className="mb-0 text-muted">Cancelled Orders</p>
                                            </div>
                                        </Col>
                                    </div>
                                    <div className="p-2" id="order-summary">
                                        <ReactApexChart options={Customerdetailsdata.Ordersummary.options} series={Customerdetailsdata.Ordersummary.series} type="line" width={"100%"} height={290} />
                                    </div>
                                </Card.Body>
                            </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xxl={6} xl={12}>
                        <Row>
                            <Col xxl={6} xl={6}>
                                <Card className="custom-card overflow-hidden">
                                    <Card.Body className="p-0">
                                        <div className="d-sm-flex align-items-center p-3 border-bottom flex-wrap gap-2">
                                            <div>
                                                <span className="avatar avatar-lg avatar-rounded online">
                                                    <img src="../../../../assets/images/faces/9.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill main-profile-info">
                                                    <h6 className="fw-semibold mb-1">Jack Miller 
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Verified User</Tooltip>}>
                                                             <i className="bi bi-check-circle-fill text-success fs-14 ms-1"></i>
                                                        </OverlayTrigger>
                                                    </h6>
                                                <p className="mb-0">Member Since 2005</p>
                                            </div>
                                            <Button variant="" className="btn btn-sm btn-primary-light btn-wave">
                                                <i className="ri-edit-line"></i>
                                                Edit
                                            </Button>
                                        </div>
                                        <div className="p-3 border-bottom border-block-end-dashed">
                                            <div className="d-flex mb-0 justify-content-center flex-wrap gap-3">
                                                <div>
                                                    <h6 className="fw-semibold mb-0">113</h6>
                                                    <p className="mb-0 fs-12 text-muted">Orders</p>
                                                </div>
                                                <div>
                                                    <h6 className="fw-semibold mb-0">12.2k</h6>
                                                    <p className="mb-0 fs-12 text-muted">Delivered</p>
                                                </div>
                                                <div>
                                                    <h6 className="fw-semibold mb-0">128</h6>
                                                    <p className="mb-0 fs-12 text-muted">Cancelled</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-3 border-bottom border-block-end-dashed">
                                            <div className="fs-12">
                                                <p className="mb-1 d-flex align-items-center mb-2">
                                                    <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-default border">
                                                        <i className="ri-community-line align-middle fs-14"></i>
                                                    </span>
                                                    jackmiller@gmail.com
                                                </p>
                                                <p className="mb-1 d-flex align-items-center mb-2">
                                                    <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-default border">
                                                        <i className="ri-briefcase-2-line align-middle fs-14"></i>
                                                    </span>
                                                    +91 7658543897
                                                </p>
                                                <p className="mb-0 d-flex align-items-center">
                                                    <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-default border">
                                                        <i className="ri-map-pin-line align-middle fs-14"></i>
                                                    </span>
                                                    USA,20071
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card icon-overlay">
                                    <span className="icon svg-success">
                                        <svg className="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 6h16v2H4zm2-4h12v2H6zm14 8H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm0 10H4v-8h16v8zm-10-7.27v6.53L16 16z"/></svg>
                                    </span>
                                    <Card.Body>
                                        <div className="d-flex align-items-top">
                                            <div className="main-card-icon success me-3">
                                                <div className="avatar avatar-lg bg-success-transparent border border-success border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg className="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 6h16v2H4zm2-4h12v2H6zm14 8H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm0 10H4v-8h16v8zm-10-7.27v6.53L16 16z"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-fill">
                                                <h5 className="fw-medium mb-1">1,116</h5>
                                                <div className="d-flex align-items-top">
                                                    <p className="mb-0 me-2">Total Views</p>
                                                    <div className="text-success fw-medium"><i
                                                        className="ri-arrow-up-s-fill align-middle"></i>+0.21%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card icon-overlay">
                                    <span className="icon svg-orange">
                                        <svg className="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
                                    </span>
                                    <Card.Body>
                                        <div className="d-flex align-items-top">
                                            <div className="main-card-icon orange me-3">
                                                <div className="avatar avatar-lg bg-orange-transparent border border-orange border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg className="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-fill">
                                                <h5 className="fw-medium mb-1">1,468</h5>
                                                <div className="d-flex align-items-top">
                                                    <p className="mb-0 me-2">Products in Cart</p>
                                                    <div className="text-danger fw-medium"><i className="ri-arrow-down-s-fill align-middle"></i>-0.153%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card icon-overlay">
                                    <span className="icon svg-info">
                                        <svg className="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                                    </span>
                                    <Card.Body>
                                        <div className="d-flex align-items-top">
                                            <div className="main-card-icon info me-3">
                                                <div className="avatar avatar-lg bg-info-transparent border border-info border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg className="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-fill">
                                                <h5 className="fw-medium mb-1">2,468</h5>
                                                <div className="d-flex align-items-top">
                                                    <p className="mb-0 me-2">Pending Orders</p>
                                                    <div className="text-danger fw-medium"><i className="ri-arrow-down-s-fill align-middle"></i>-0.153%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={6} xl={6}>
                                <Card className="custom-card earning-card">
                                    <Card.Body className="text-fixed-white">
                                        <div className="d-flex gap-3 align-items-start">
                                            <span className="avatar avatar-lg p-2 bg-white-transparent avatar-square shadow-sm svg-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,11H10a2,2,0,0,1,0-4h5a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3H13V3a1,1,0,0,0-2,0V5H10a4,4,0,0,0,0,8h4a2,2,0,0,1,0,4H9a1,1,0,0,1-1-1,1,1,0,0,0-2,0,3,3,0,0,0,3,3h2v2a1,1,0,0,0,2,0V19h1a4,4,0,0,0,0-8Z"/></svg>
                                            </span>
                                            <div>
                                                <h5 className="fw-medium d-block text-fixed-white mb-1">Wallet Summary</h5>
                                                <p className="mb-0 fs-12">Total Recharge : <span className="fw-medium">$567.00</span></p>
                                                <p className="mb-0 fs-12">Total Balance : <span className="fw-medium">$345.00</span></p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>  
                                <Card className="custom-card">
                                    <Card.Header className="justify-content-between">
                                        <Card.Title>
                                            ORDER TRACKING
                                        </Card.Title>
                                        <div>
                                            ID : <Link scroll={false} href="#!" className="text-primary">#115876</Link>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="d-flex align-items-center gap-4 mb-4">
                                            <p className="mb-0">
                                                <span className="">Product :</span>
                                                <span className="text-primary"> Men's Sports Shoes</span>
                                            </p>
                                        </div>
                                        <div className="order-track-accordion order-track mt-1">
                                            <Accordion className="" defaultActiveKey="first" id="basicAccordion">
                                                <Accordion.Item eventKey="first" className="accordion-item border-0 bg-transparent mb-2">
                                                    <Accordion.Header id="headingOne">
                                                            <div className="d-flex mb-0 lh-1">
                                                                <div className="me-2">
                                                                    <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                                        <img src="../../../../assets/images/ecommerce/png/18.png" alt="" />
                                                                    </span>
                                                                </div>
                                                                <div className="flex-fill d-flex align-items-center gap-1 justify-content-between">
                                                                    <p className="fw-semibold mb-0 fs-14">Order Placed</p>
                                                                    <span className=" text-success">Nov 03</span>
                                                                </div>
                                                            </div>
                                                    </Accordion.Header>
                                                        <Accordion.Body className=" pt-0 ps-5 mb-0 pb-0">
                                                            <div className="">
                                                                <p className="mb-0">Order placed successfully by <Link scroll={false} href="#!" className="font-weight-semibold text-primary">Sansa Taylor</Link></p>
                                                            </div>
                                                        </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                            <Accordion className="" id="basicAccordion1">
                                                <Accordion.Item eventKey="first" className="border-0 bg-transparent mb-2">
                                                    <Accordion.Header id="headingTwo">
                                                            <div className="d-flex mb-0 lh-1">
                                                                <div className="me-2">
                                                                    <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                                        <img src="../../../../assets/images/ecommerce/png/8.png" alt="" />
                                                                    </span>
                                                                </div>
                                                                <div className="flex-fill d-flex align-items-center gap-1 justify-content-between">
                                                                    <p className="fw-semibold mb-0 fs-14">Picked</p>
                                                                    <span className="fs-12">Nov 03, 15:10</span>
                                                                </div>
                                                            </div>
                                                    </Accordion.Header>
                                                        <Accordion.Body className="pt-0 ps-5 mb-0 pb-0">
                                                            <div className="">
                                                                <p className="mb-0">Your order has been picked up by <span className="font-weight-semibold">Smart Good Services</span></p>
                                                            </div>
                                                        </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                            <Accordion defaultActiveKey="first" id="basicAccordion2">
                                                <Accordion.Item eventKey="first" className="border-0 bg-transparent mb-2">
                                                    <Accordion.Header id="headingThree">
                                                            <div className="d-flex mb-0 lh-1">
                                                                <div className="me-2">
                                                                    <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                                        <img src="../../../../assets/images/ecommerce/png/19.png" alt="" />
                                                                    </span>
                                                                </div>
                                                                <div className="flex-fill d-flex align-items-center gap-1 justify-content-between">
                                                                    <p className="fw-semibold mb-0 fs-14">Shipping</p>
                                                                    <span className="fs-12">Nov 03, 15:10</span>
                                                                </div>
                                                            </div>
                                                    </Accordion.Header>
                                                        <Accordion.Body className="pt-0 ps-5 mb-0 pb-0">
                                                            <div className="">
                                                                <p className="mb-0">picked up by <span className="font-weight-semibold">SGS Agent</span> and on the way to Hyderabad</p>
                                                            </div>
                                                        </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                            <Accordion defaultActiveKey="first" id="basicAccordion3">
                                                <Accordion.Item eventKey="first" className="border-0 bg-transparent next-step mb-2">
                                                    <Accordion.Header id="headingFour">
                                                            <div className="d-flex mb-0 lh-1">
                                                                <div className="me-2">
                                                                    <span className="avatar avatar-md avatar-rounded bg-light border text-default"><i className="fe fe-package"></i></span>
                                                                </div>
                                                                <div className="flex-fill d-flex align-items-center justify-content-between gap-1 flex-wrap">
                                                                    <p className="fw-semibold mb-0 fs-14">Out For Delivery</p>
                                                                    <span className="text-muted fs-12">Nov 03, 15:10 (expected)</span>
                                                                </div>
                                                            </div>
                                                    </Accordion.Header>
                                                        <Accordion.Body className="pt-0 ps-5 mb-0 pb-0">
                                                            <div className="mb-1">
                                                                <p className="mb-0">Your order is out for delivery</p>
                                                                <span className="text-muted fs-12">Nov 03, 2022, 15:36</span>
                                                            </div>
                                                        </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                            <Accordion defaultActiveKey="first" id="basicAccordion4">
                                                <Accordion.Item eventKey="first" className="border-0 bg-transparent next-step">
                                                    <Accordion.Header id="headingFive">
                                                            <div className="d-flex mb-0 lh-1">
                                                                <div className="me-2">
                                                                    <span className="avatar avatar-md avatar-rounded bg-light border text-default"><i className="fe fe-package"></i></span>
                                                                </div>
                                                                <div className="flex-fill d-flex align-items-center gap-1 justify-content-between">
                                                                    <p className="fw-semibold mb-0 fs-14">Delivered</p>
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
                    </Col>
                </Row>
                {/*End::row-1 */}

                {/* Start::row-2 */}
                <Row>
                    <Col xl={8}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    RECENT ORDERS
                                </Card.Title>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 no-caret border-0 d-inline-flex" data-bs-toggle="dropdown" aria-expanded="false">
                                        View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu role="menu">
                                        <li><Dropdown.Item href="#!">Today</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col">Order Id</th>
                                                <th scope="col">Product</th>
                                                <th scope="col">Ordered Date</th>
                                                <th scope="col">Payment Mode</th>
                                                <th scope="col">Cost</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>#19876</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/jpg/1.jpg" className="" alt="..."/></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">Flower Pot</a></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    09 Jan 2022
                                                </td>
                                                <td>Cash On Delivery</td>
                                                <td className="fw-semibold">$76.00</td> 
                                                <td><span className="badge bg-success-transparent">Shippped</span></td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-sm btn-outline-light btn-wave">
                                                        <i className="fe fe-eye text-muted"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#19376</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/jpg/4.jpg" className="" alt="..."/></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">Kiwi Fruit</a></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    12 Feb 2022
                                                </td>
                                                <td>Online Payment</td>
                                                <td className="fw-semibold">$13.00</td>
                                                <td><span className="badge bg-warning-transparent">Pending</span></td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-sm btn-outline-light btn-wave">
                                                        <i className="fe fe-eye text-muted"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#19878</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/jpg/3.jpg" className="" alt="..."/></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">Camera</a></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    23 Mar 2022
                                                </td>
                                                <td>Cash On Delivery</td>
                                                <td className="fw-semibold">$54.00</td>
                                                <td><span className="badge bg-success-transparent">Shipped</span></td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-sm btn-outline-light btn-wave">
                                                        <i className="fe fe-eye text-muted"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#19879</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/jpg/5.jpg" className="" alt="..."/></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">Donut</a></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    17 Aug 2022
                                                </td>
                                                <td>Online Payment</td>
                                                <td className="fw-semibold">$87.00</td> 
                                                <td><span className="badge bg-danger-transparent">Cancelled</span></td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-sm btn-outline-light btn-wave">
                                                        <i className="fe fe-eye text-muted"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#19880</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/jpg/2.jpg" className="" alt="..."/></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">Head Phones</a></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    21 Oct 2022
                                                </td>
                                                <td>Cash On Delivery</td>
                                                <td className="fw-semibold">$78.00</td> 
                                                <td><span className="badge bg-success-transparent">Shipped</span></td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-sm btn-outline-light btn-wave">
                                                        <i className="fe fe-eye text-muted"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <div className="card-header">
                                <div className="card-title flex-grow-1">
                                    SHIPPING ADDRESS
                                </div>
                                <Link scroll={false} href="#!" className="text-primary fw-medium"><u>View Address</u></Link>
                            </div>
                            <Card.Body className="p-4">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="flex-grow-1">
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="min-w-fit-content">
                                                <span className="avatar bg-primary rounded-circle"><i className="ti ti-home fs-16"></i></span>
                                            </div>
                                            <h6 className="fs-16 mb-0 fw-semibold">Home</h6>
                                        </div>
                                    </div>
                                    <div className="min-w-fit-content">
                                        <div className="btn btn-sm btn-light btn-icon border"><i className="ri-edit-line"></i></div>
                                    </div>
                                </div>
                                <h6 className="mb-2 fw-semibold">Ruby Disousa</h6>
                                <p className="mb-2 fw-500 fs-13">rubyakuner@ginna.mail</p>
                                <p className="mb-2 fw-500 fs-13">+11-23-1116773</p>
                                <p className="mb-0">
                                    H.No: 3-116/458, Golden Park, Marias St.,
                                    Near 12Amet Residency, 14756, United States Of America
                                </p>
                            </Card.Body>
                            <div className="card-footer text-end">
                                <div className="btn btn-primary"><i className="ti ti-plus me-1"></i>Add New Address</div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                {/* End::row-2 */}
    </Fragment>
    )
};

export default Customerdetails;