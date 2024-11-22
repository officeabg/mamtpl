"use client"
import React, { Fragment } from "react";
import { Card, Col, Dropdown, Row } from "react-bootstrap";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Ecommercedata from '@/shared/data/dashboards/ecommercedata';
import Link from "next/link";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";

const Ecommerce = () => {
return (
<Fragment>
                {/*  Start::page-header */}
                <Seo title={"Ecommerce"} />
                <Pageheader Heading="Ecommerce" Pages={[{title:"Dashboards", active:true}, {title:"Ecommerce", active:false},]} />
                {/*  End::page-header */}

                {/*  Start:: row-1 */}
                <Row>
                    <Col xl={9}>
                        <Row>
                            <Col xxl={3} xl={3} lg={3} md={6}>
                                <Card className="custom-card">
                                    <Card.Body className="p-4">
                                        <div className="main-card-icon primary mb-4">
                                            <div className="avatar avatar-lg bg-primary-transparent border border-primary border-opacity-10">
                                                <div className="avatar avatar-sm svg-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="32" y="72" width="192" height="136" rx="8" opacity="0.2"/><rect x="32" y="72" width="192" height="136" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M88,96V64a40,40,0,0,1,80,0V96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="d-block mb-2">Total Sales</span>
                                        <h4 className="mb-2">14,356</h4>
                                        <span className="text-success">0.45%<i className="ti ti-arrow-narrow-up ms-1 d-inline-block"></i></span><span className="fs-12 text-muted ms-1">This week</span>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={3} xl={3} lg={3} md={6}>
                                <Card className="custom-card">
                                    <Card.Body className="p-4">
                                        <div className="main-card-icon secondary mb-4">
                                            <div className="avatar avatar-lg bg-secondary-transparent border border-secondary border-opacity-10">
                                                <div className="avatar avatar-sm svg-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M32,208V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V208l-32-16-32,16-32-16L96,208,64,192Z" opacity="0.2"/><line x1="80" y1="104" x2="176" y2="104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="80" y1="136" x2="176" y2="136" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M32,208V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V208l-32-16-32,16-32-16L96,208,64,192Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="d-block mb-2">Total Expenses</span>
                                        <h4 className="mb-2">$281K</h4>
                                        <span className="text-success">1.27%<i className="ti ti-arrow-narrow-up ms-1 d-inline-block"></i></span><span className="fs-12 text-muted ms-1">This week</span>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={3} xl={3} lg={3} md={6}>
                                <Card className="custom-card">
                                    <Card.Body className="p-4">
                                        <div className="main-card-icon success mb-4">
                                            <div className="avatar avatar-lg bg-success-transparent border border-success border-opacity-10">
                                                <div className="avatar avatar-sm svg-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M62.55,144H188.1a16,16,0,0,0,15.74-13.14L216,64H48Z" opacity="0.2"/><path d="M180,184H83.17a16,16,0,0,1-15.74-13.14L41.92,30.57A8,8,0,0,0,34.05,24H16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="84" cy="204" r="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="180" cy="204" r="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M62.55,144H188.1a16,16,0,0,0,15.74-13.14L216,64H48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="d-block mb-2">Total Orders</span>
                                        <h4 className="mb-2">2,352</h4>
                                        <span className="text-danger">0.69%<i className="ti ti-arrow-narrow-down ms-1 d-inline-block"></i></span><span className="fs-12 text-muted ms-1">This week</span>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={3} xl={3} lg={3} md={6}>
                                <Card className="custom-card">
                                    <Card.Body className="p-4">
                                        <div className="main-card-icon orange mb-4">
                                            <div className="avatar avatar-lg bg-orange-transparent border border-orange border-opacity-10">
                                                <div className="avatar avatar-sm svg-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,128h24a40,40,0,0,1,0,80H128Z" opacity="0.2"/><path d="M128,48H112a40,40,0,0,0,0,80h16Z" opacity="0.2"/><line x1="128" y1="24" x2="128" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="d-block mb-2">Daily Revenue</span>
                                        <h4 className="mb-2">$2,565</h4>
                                        <span className="text-success">0.82%<i className="ti ti-arrow-narrow-up ms-1 d-inline-block"></i></span><span className="fs-12 text-muted ms-1">This week</span>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <div className="card-header justify-content-between">
                                        <Card.Title>
                                            ORDERS STATUS
                                        </Card.Title>
                                        <Dropdown> 
                                            <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 text-muted no-caret border-0 d-inline" data-bs-toggle="dropdown" aria-expanded="true"> Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </Dropdown.Toggle> 
                                            <Dropdown.Menu role="menu" 
                                            // style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 28px);"
                                             data-popper-placement="bottom-end"> 
                                                <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                                 <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li> 
                                                 <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li> 
                                            </Dropdown.Menu> 
                                        </Dropdown>
                                    </div>
                                    <Card.Body>
                                        <div id="order-status">
                                            <ReactApexChart options={Ecommercedata.Orderstatus.options} series={Ecommercedata.Orderstatus.series} type="line" width={"100%"} height={310} />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={3}>
                        <Row>
                            <Col xxl={12} xl={12}  lg={6} >
                                <Card className="custom-card overflow-hidden audience-report-card">
                                    <Card.Header>
                                        <div className="card-title">
                                            AUDIENCE REPORT
                                        </div>
                                    </Card.Header>
                                    <Card.Body className="p-0">
                                        <div className="d-flex align-items-center justify-content-between p-3 audience-report-content flex-wrap gap-3">
                                            <div>
                                                <span className="text-fixed-white d-block fs-12 audience male">Male</span>
                                                <h6 className="mb-0 fw-medium text-fixed-white">10,182</h6>
                                            </div>
                                            <div>
                                                <span className="text-fixed-white d-block fs-12 audience female">Female</span>
                                                <h6 className="mb-0 fw-medium text-fixed-white">6,352</h6>
                                            </div>
                                            <div>
                                                <span className="text-fixed-white d-block fs-12 audience others">Others</span>
                                                <h6 className="mb-0 fw-medium text-fixed-white">1,234</h6>
                                            </div>
                                        </div>
                                        <div id="audience-report">
                                             <ReactApexChart options={Ecommercedata.Audiencereport.options} series={Ecommercedata.Audiencereport.series} type="area" width={"100%"} height={263} />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={12} xl={12}  lg={6} >
                                <Card className="custom-card">
                                    <Card.Header className="justify-content-between">
                                        <Card.Title>
                                            Recent Orders
                                        </Card.Title>
                                        <Dropdown> 
                                            <Dropdown.Toggle variant="" href="#!" className="btn btn-sm btn-primary-light btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">Today
                                                <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> 
                                            </Dropdown.Toggle> 
                                            <Dropdown.Menu role="menu"> 
                                                <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li> 
                                                <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">This Year</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="row g-0">
                                            <Col xxl={6} xl={12} className="my-auto">
                                                <span className="d-block mb-3 recent-orders-content delivered fs-13">Delivered - <span className="fw-medium">1754</span></span>
                                                <span className="d-block mb-3 recent-orders-content cancelled fs-13">Cancelled - <span className="fw-medium">1234</span></span>
                                                <span className="d-block recent-orders-content pending fs-13">Pending - <span className="fw-medium">878</span></span>
                                            </Col>
                                            <Col xxl={6} xl={12}>
                                                <div id="recent-orders">
                                                     <ReactApexChart options={Ecommercedata.Recentorders.options} series={Ecommercedata.Recentorders.series} type="donut" width={"100%"} height={180} />
                                                </div>
                                            </Col>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/*  End:: row-1 */}

                {/*  Start:: row-2 */}
                <Row>
                    <Col xxl={3} xl={3} lg={6} md={6} className="">
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    TRANSACTIONS
                                </Card.Title>
                                <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                            </Card.Header>
                            <Card.Body>
                                <ul className="list-unstyled transactions-list">
                                    <li>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-start flex-wrap gap-2">
                                                <div>
                                                    <span className="avatar avatar-sm bg-primary-transparent">
                                                        <i className="ri-paypal-line fs-18"></i> 
                                                    </span>
                                                </div>
                                                <div>
                                                    <Link scroll={false} href="#!">
                                                        <span className="d-block fw-medium mb-1">Paypal ****2783</span>
                                                    </Link>
                                                    <span className="d-block fs-11 text-muted">24,Jul 2024 at 2:45PM</span>
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <span className="d-block fw-medium">$12,300</span>
                                                <span className="text-success fs-12">Paid</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-start flex-wrap gap-2">
                                                <div>
                                                    <span className="avatar avatar-sm bg-secondary-transparent">
                                                        <i className="ri-wallet-3-line fs-18"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <Link scroll={false} href="#!">
                                                        <span className="d-block fw-medium mb-1">Digital Wallet</span>
                                                    </Link>    
                                                    <span className="d-block fs-11 text-muted">13,May 2024 at 11:21AM</span>
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <span className="d-block fw-medium">$11,449</span>
                                                <span className="text-success fs-12">Paid</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-start flex-wrap gap-2">
                                                <div>
                                                    <span className="avatar avatar-sm bg-success-transparent">
                                                        <i className="ri-mastercard-line fs-18"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <Link scroll={false} href="#!">
                                                        <span className="d-block fw-medium mb-1">Mastro Card ****7893</span>
                                                    </Link>    
                                                    <span className="d-block fs-11 text-muted">16,Feb 2024 at 4:36PM</span>
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <span className="d-block fw-medium">$10,999</span>
                                                <span className="text-danger fs-12">Pending</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-start flex-wrap gap-2">
                                                <div>
                                                    <span className="avatar avatar-sm bg-info-transparent">
                                                        <i className="ri-visa-line fs-18"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <Link scroll={false} href="#!">
                                                        <span className="d-block fw-medium mb-1">Visa Card ****2563</span>
                                                    </Link>    
                                                    <span className="d-block fs-11 text-muted">21,Mar 2024 at 10:15AM</span>
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <span className="d-block fw-medium">$9,249</span>
                                                <span className="text-success fs-12">Paid</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-start flex-wrap gap-2">
                                                <div>
                                                    <span className="avatar avatar-sm bg-warning-transparent">
                                                        <i className="ri-alipay-line fs-18"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <Link scroll={false} href="#!">
                                                        <span className="d-block fw-medium mb-1">AliPay</span>
                                                    </Link>    
                                                    <span className="d-block fs-11 text-muted">24,Apr 2024 at 9:16AM</span>
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <span className="d-block fw-medium">$7,799</span>
                                                <span className="text-success fs-12">Paid</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={4} lg={6} md={6} className="">
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    TOP SELLING CATEGORIES
                                </Card.Title>
                                <Dropdown> 
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 text-muted no-caret border-0 d-inline" data-bs-toggle="dropdown" aria-expanded="true"> Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </Dropdown.Toggle> 
                                    <Dropdown.Menu role="menu"
                                     data-popper-placement="bottom-end"> 
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                         <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li> 
                                         <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li> 
                                    </Dropdown.Menu> 
                                </Dropdown>
                            </Card.Header>
                            <Card.Body className="py-0">
                                <div id="top-selling-categories">
                                    <ReactApexChart options={Ecommercedata.Topcategories.options} series={Ecommercedata.Topcategories.series} type="bar" width={"100%"} height={305} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={5} xl={5} lg={12} className="">
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    TOP SELLING PRODUCTS
                                </Card.Title>
                                <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th className="text-center">S.No</th>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Category</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center">
                                                    <span>1</span>
                                                </td>
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2 lh-1">
                                                                <span className="avatar avatar-sm">
                                                                    <img src="../../assets/images/ecommerce/jpg/1.jpg" alt=""/>
                                                                </span>
                                                            </div>
                                                            <div className="fs-14">Flower Pot</div>
                                                        </div>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <span className="fw-medium fs-14">$4320.29</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-primary-transparent">Furniture</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <span>2</span>
                                                </td>
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2 lh-1">
                                                                <span className="avatar avatar-sm">
                                                                    <img src="../../assets/images/ecommerce/jpg/4.jpg" alt=""/>
                                                                </span>
                                                            </div>
                                                            <div className="fs-14">Kiwi Fruit</div>
                                                        </div>
                                                    </Link> 
                                                </td>
                                                <td>
                                                    <span className="fw-medium fs-14">$1899.99</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Food &amp; Dining</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <span>3</span>
                                                </td>
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2 lh-1">
                                                                <span className="avatar avatar-sm">
                                                                    <img src="../../assets/images/ecommerce/jpg/3.jpg" alt=""/>
                                                                </span>
                                                            </div>
                                                            <div className="fs-14">Camera</div>
                                                        </div>
                                                    </Link>    
                                                </td>
                                                <td>
                                                    <span className="fw-medium fs-14">$1176.89</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-secondary-transparent">Electronics</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <span>4</span>
                                                </td>
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2 lh-1">
                                                                <span className="avatar avatar-sm">
                                                                    <img src="../../assets/images/ecommerce/jpg/5.jpg" alt=""/>
                                                                </span>
                                                            </div>
                                                            <div className="fs-14">Donut</div>
                                                        </div>
                                                    </Link>    
                                                </td>
                                                <td>
                                                    <span className="fw-medium fs-14">$1867.29</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-warning-transparent">Food &amp; Dining</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-bottom-0 text-center">
                                                    <span>5</span>
                                                </td>
                                                <td className="border-bottom-0">
                                                    <Link scroll={false} href="#!">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2 lh-1">
                                                                <span className="avatar avatar-sm">
                                                                    <img src="../../assets/images/ecommerce/jpg/2.jpg" alt=""/>
                                                                </span>
                                                            </div>
                                                            <div className="fs-14">Head Phones</div>
                                                        </div>
                                                    </Link>    
                                                </td>
                                                <td className="border-bottom-0">
                                                    <span className="fw-medium fs-14">$6745.99</span>
                                                </td>
                                                <td className="border-bottom-0">
                                                    <span className="badge bg-danger-transparent">Electronics</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*  End:: row-2 */}

                {/*  Start:: row-3 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>RECENT INVOICES</Card.Title>
                                <div className="d-flex flex-wrap gap-2"> 
                                    <div> 
                                        <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example"/> 
                                    </div> 
                                    <Dropdown> 
                                        <Dropdown.Toggle variant="" className="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false"> Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> 
                                        </Dropdown.Toggle> 
                                        <Dropdown.Menu role="menu"> 
                                            <li><Dropdown.Item href="#!">New</Dropdown.Item></li> 
                                            <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li> 
                                            <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li> 
                                        </Dropdown.Menu> 
                                    </Dropdown> 
                                </div>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th className="text-center">
                                                    <span>
                                                        <input className="form-check-input" type="checkbox" id="order_All" value="" aria-label="..."/>
                                                    </span>
                                                </th>
                                                <th>Order Id </th>
                                                <th>Customer</th>
                                                <th className="text-center">Quantity</th>
                                                <th>Price</th>
                                                <th>Status</th>
                                                <th>Ordered Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center">
                                                    <span>
                                                        <input className="form-check-input" type="checkbox" id="order_1" value="" aria-label="..."/>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="fw-semibold">#1537890</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-sm">
                                                                <img src="../../assets/images/faces/15.jpg" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <Link scroll={false} href="#!" className="fs-14">Simon Cowall</Link>
                                                            <span className="d-block text-muted fs-12">simoncowall2143@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    1
                                                </td>
                                                <td>
                                                    <span className="fw-semibold fs-14">$4320.29</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Shipped</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted">25,Nov 2022</span>
                                                </td>
                                                <td>
                                                    <div className="hstack gap-2 fs-1">
                                                        <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-success-light btn-wave"><i className="ri-download-2-line"></i></Link>
                                                        <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-info-light btn-wave"><i className="ri-edit-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <span>
                                                        <input className="form-check-input" type="checkbox" id="order_2" value="" aria-label="..."/>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="fw-semibold">#1539078</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-sm">
                                                                <img src="../../assets/images/faces/4.jpg" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <Link scroll={false} href="javascirpt:void(0);" className="fs-14">Meisha Kerr</Link>
                                                            <span className="d-block text-muted fs-12">meishakerr789@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    1
                                                </td>
                                                <td>
                                                    <span className="fw-semibold fs-14">$6745.99</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-danger-transparent">Cancelled</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted">29,Nov 2022</span>
                                                </td>
                                                <td>
                                                    <div className="hstack gap-2 fs-1">
                                                        <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-success-light btn-wave"><i className="ri-download-2-line"></i></Link>
                                                        <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-info-light btn-wave"><i className="ri-edit-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <span>
                                                        <input className="form-check-input" type="checkbox" id="order_3" value="" aria-label="..."/>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="fw-semibold">#1539832</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-sm">
                                                                <img src="../../assets/images/faces/5.jpg" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <Link scroll={false} href="javascirpt:void(0);" className="fs-14">Jessica</Link>
                                                            <span className="d-block text-muted fs-12">jessicastellar@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                   2
                                                </td>
                                                <td>
                                                    <span className="fw-semibold fs-14">$1176.89</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-info-transparent">Under Process</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted">04,Dec 2022</span>
                                                </td>
                                                <td>
                                                    <div className="hstack gap-2 fs-1">
                                                        <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-success-light btn-wave"><i className="ri-download-2-line"></i></Link>
                                                        <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-info-light btn-wave"><i className="ri-edit-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <span>
                                                        <input className="form-check-input" type="checkbox" id="order_4" value="" aria-label="..."/>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="fw-semibold">#1539832</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-sm">
                                                                <img src="../../assets/images/faces/6.jpg" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <Link scroll={false} href="javascirpt:void(0);" className="fs-14">Amanda B</Link>
                                                            <span className="d-block text-muted fs-12">amandabella786@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                   1
                                                </td>
                                                <td>
                                                    <span className="fw-semibold fs-14">$1899.99</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Shipped</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted">10,Dec 2022</span>
                                                </td>
                                                <td>
                                                    <div className="hstack gap-2 fs-1">
                                                        <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-success-light btn-wave"><i className="ri-download-2-line"></i></Link>
                                                        <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-info-light btn-wave"><i className="ri-edit-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <span>
                                                        <input className="form-check-input" type="checkbox" id="order_5" value="" aria-label="..."/>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="fw-semibold">#1538267</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-sm">
                                                                <img src="../../assets/images/faces/11.jpg" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <Link scroll={false} href="javascirpt:void(0);"  className="fs-14">Jason Stathman</Link>
                                                            <span className="d-block text-muted fs-12">jasonstathman549@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                   1
                                                </td>
                                                <td>
                                                    <span className="fw-semibold fs-14">$1867.29</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-warning-transparent">Pending</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted">18,Dec 2022</span>
                                                </td>
                                                <td>
                                                    <div className="hstack gap-2 fs-1">
                                                        <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-success-light btn-wave"><i className="ri-download-2-line"></i></Link>
                                                        <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-info-light btn-wave"><i className="ri-edit-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center border-bottom-0">
                                                    <span>
                                                        <input className="form-check-input" type="checkbox" id="order_6" value="" aria-label="..."/>
                                                    </span>
                                                </td>
                                                <td className="border-bottom-0">
                                                    <span className="fw-semibold">#1537890</span>
                                                </td>
                                                <td className="border-bottom-0">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-sm">
                                                                <img src="../../assets/images/faces/13.jpg" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <Link scroll={false} href="javascirpt:void(0);" className="fs-14">Khabib Hussain</Link>
                                                            <span className="d-block text-muted fs-12">khabibhussain645@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="border-bottom-0 text-center">
                                                   1
                                                </td>
                                                <td className="border-bottom-0">
                                                    <span className="fw-semibold fs-14">$2439.99</span>
                                                </td>
                                                <td className="border-bottom-0">
                                                    <span className="badge bg-success-transparent">Success</span>
                                                </td>
                                                <td className="border-bottom-0">
                                                    <span className="text-muted">24,Dec 2022</span>
                                                </td>
                                                <td className="border-bottom-0">
                                                    <div className="hstack gap-2 fs-1">
                                                        <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-success-light btn-wave"><i className="ri-download-2-line"></i></Link>
                                                        <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-info-light btn-wave"><i className="ri-edit-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                            <Card.Footer> 
                                <div className="d-flex align-items-center"> 
                                    <div> Showing 6 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
                                    <div className="ms-auto"> 
                                    <nav aria-label="Page navigation" className="pagination-style-4"> 
                                        <ul className="pagination mb-0"> 
                                            <li className="page-item disabled"> <Link scroll={false} className="page-link" href="#!"> Prev </Link> </li>
                                                <li className="page-item active"><Link scroll={false} className="page-link" href="#!">1</Link></li> 
                                                <li className="page-item"><Link scroll={false} className="page-link" href="#!">2</Link></li> 
                                                <li className="page-item"> <Link scroll={false} className="page-link text-primary" href="#!"> next </Link> </li> 
                                            </ul> 
                                        </nav> 
                                    </div> 
                                </div> 
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                {/*  End:: row-3 */}
</Fragment>
);
};

export default Ecommerce;