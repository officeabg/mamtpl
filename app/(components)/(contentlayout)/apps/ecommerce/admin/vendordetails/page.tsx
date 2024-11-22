"use client"
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, Pagination, Row } from "react-bootstrap";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Reportsdata from '@/shared/data/apps/ecommerce/admin/reportsdata';
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Vendordetails = () => {
return ( 
    <Fragment>
            {/* Page Header */}
                <Seo title={"Vendor Details"} />
                <Pageheader Heading="Vendor Details" Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true}, {title:"Admin", active:true}, {title:"Vendor Details", active:false},]} />
            {/* Page Header Close */}
                {/* Start::row-1 */}
                <Row>
                    <Col xxl={6} xl={12}>
                        <Row>
                            <Col lg={6}>
                                <Card className="custom-card">
                                    <Card.Body className="p-4">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="main-card-icon primary p-0">
                                                <div className="avatar avatar-lg bg-primary-transparent border border-primary border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M70.55,144H196.1a16,16,0,0,0,15.74-13.14L224,64H56Z" opacity="0.2"/><path d="M188,184H91.17a16,16,0,0,1-15.74-13.14L48.73,24H24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="92" cy="204" r="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="188" cy="204" r="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M70.55,144H196.1a16,16,0,0,0,15.74-13.14L224,64H56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-fill">
                                                <div className="mb-2">Total Products</div>
                                                <div className="text-muted mb-0 fs-12 d-flex align-items-center">
                                                    <span className="text-dark fw-semibold fs-20 lh-1 vertical-bottom flex-grow-1">
                                                        14,732
                                                    </span>
                                                    <Link scroll={false} href="#!" className="text-primary fw-semibold">View All <i className="fe fe-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={6}>
                                <Card className="custom-card">
                                    <Card.Body className="p-4">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="main-card-icon secondary p-0">
                                                <div className="avatar avatar-lg bg-secondary-transparent border border-secondary border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M54.46,201.54c-9.2-9.2-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128S214.18,150,209.32,161.69c-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68C83,204.64,63.66,210.74,54.46,201.54Z" opacity="0.2"/><path d="M54.46,201.54c-9.2-9.2-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128S214.18,150,209.32,161.69c-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68C83,204.64,63.66,210.74,54.46,201.54Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="96" cy="96" r="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="160" cy="160" r="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="88" y1="168" x2="168" y2="88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-fill">
                                                <div className="mb-2">Total Sales</div>
                                                <div className="text-muted mb-0 fs-12 d-flex align-items-center">
                                                    <span className="text-dark fw-semibold fs-20 lh-1 vertical-bottom flex-grow-1">
                                                        34,732
                                                    </span>
                                                    <Link scroll={false} href="#!" className="text-primary fw-semibold">View All <i className="fe fe-arrow-right"></i></Link>
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
                                                <p className="fs-20 fw-semibold mb-0">1,117</p>
                                                <p className="mb-0 text-muted">Total Orders</p>
                                            </div>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={4} className="col-12">
                                            <div className="p-4 border-sm-end border-inline-end-dashed text-sm-start text-center">
                                                <p className="fs-20 fw-semibold mb-0"><span className="basic-subscription">742</span></p>
                                                <p className="mb-0 text-muted">Delivered Orders</p>
                                            </div>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={4} className="col-12">
                                            <div className="p-4 text-sm-start text-center">
                                                <p className="fs-20 fw-semibold mb-0"><span className="pro-subscription">259</span></p>
                                                <p className="mb-0 text-muted">Cancelled Orders</p>
                                            </div>
                                        </Col>
                                    </div>
                                    <div className="p-2" id="order-summary">
                                        <ReactApexChart options={Reportsdata.Reportsordersummary.options} series={Reportsdata.Reportsordersummary.series} type="line" width={"100%"} height={350} />
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
                                    <Card.Header>
                                        <Card.Title>MONTHLY SALES REPORT</Card.Title>                                        
                                    </Card.Header>
                                    <Card.Body className="ps-0 pb-0">
                                        <div id="sales-report">
                                            <ReactApexChart options={Reportsdata.Monthlysales.options} series={Reportsdata.Monthlysales.series} type="line" width={"100%"} height={265} />
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
                                                <h5 className="fw-semibold mb-1">1,116</h5>
                                                <div className="d-flex align-items-top">
                                                    <p className="mb-0 me-2">Total Views</p>
                                                    <div className="text-success fw-semibold"><i
                                                        className="ri-arrow-up-s-fill align-middle"></i>+0.21%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card icon-overlay">
                                    <span className="icon svg-pink">
                                        <svg className="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"></path></svg>
                                    </span>
                                    <Card.Body>
                                        <div className="d-flex align-items-top">
                                            <div className="main-card-icon orange me-3">
                                                <div className="avatar avatar-lg bg-orange-transparent border border-orange border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg className="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"></path></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-fill">
                                                <h5 className="fw-semibold mb-1">1,468</h5>
                                                <div className="d-flex align-items-top">
                                                    <p className="mb-0 me-2">Total Customers</p>
                                                    <div className="text-danger fw-semibold"><i className="ri-arrow-down-s-fill align-middle"></i>-0.153%</div>
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
                                                <h5 className="fw-semibold mb-1">2,468</h5>
                                                <div className="d-flex align-items-top">
                                                    <p className="mb-0 me-2">Pending Orders</p>
                                                    <div className="text-danger fw-semibold"><i className="ri-arrow-down-s-fill align-middle"></i>-0.153%</div>
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
                                            <span className="avatar avatar-lg p-2 bg-white-transparent svg-white shadow-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,11H10a2,2,0,0,1,0-4h5a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3H13V3a1,1,0,0,0-2,0V5H10a4,4,0,0,0,0,8h4a2,2,0,0,1,0,4H9a1,1,0,0,1-1-1,1,1,0,0,0-2,0,3,3,0,0,0,3,3h2v2a1,1,0,0,0,2,0V19h1a4,4,0,0,0,0-8Z"/></svg>
                                            </span>
                                            <div>
                                                <h5 className="fw-semibold d-block earning-text text-fixed-white">Total Earnings</h5>
                                                <span className="mb-0">Increase by <span className="badge bg-white-transparent text-fixed-white mx-1">+4.2%</span> this month</span>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>  
                                <Card className="custom-card overflow-hidden">
                                    <Card.Header className="justify-content-between">
                                        <Card.Title>TOP COUNTRY SALES</Card.Title>
                                        <Dropdown className="custom-dropdown">
                                            <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu role="menu">
                                                <li><Dropdown.Item href="#!">Today</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">This Week</Dropdown.Item>
                                                </li>
                                                <li><Dropdown.Item href="#!">Last Week</Dropdown.Item>
                                                </li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Card.Header>
                                    <Card.Body className="p-0">
                                        <div className="table-responsive">
                                            <table className="table text-nowrap table-country">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Country</th>
                                                        <th scope="col" className="text-center">No. Of Sales</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src="../../../../assets/images/flags/us_flag.jpg" alt="" />
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className="fw-semibold">
                                                                        U.S.A
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td className="text-center">120</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src="../../../../assets/images/flags/french_flag.jpg" alt="" />
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className="fw-semibold">
                                                                        France
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td className="text-center">134</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src="../../../../assets/images/flags/uae_flag.jpg" alt="" />
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className="fw-semibold">
                                                                        U.A.E
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td className="text-center">156</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src="../../../../assets/images/flags/italy_flag.jpg" alt="" />
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className="fw-semibold">
                                                                        Italy
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td className="text-center">167</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src="../../../../assets/images/flags/mexico_flag.jpg" alt="" />
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className="fw-semibold">
                                                                        Mexico
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td className="text-center">267</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src="../../../../assets/images/flags/spain_flag.jpg" alt="" />
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className="fw-semibold">
                                                                        Spain
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td className="text-center">235</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src="../../../../assets/images/flags/germany_flag.jpg" alt="" />
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className="fw-semibold">
                                                                        Germany
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td className="text-center">567</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src="../../../../assets/images/flags/russia_flag.jpg" alt="" />
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className="fw-semibold">
                                                                        Russia
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td className="text-center">72</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src="../../../../assets/images/flags/argentina_flag.jpg" alt="" />
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className="fw-semibold">
                                                                        Argentina
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td className="text-center">98</td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
                    <Col xl={9}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    RECENT ORDERS
                                </Card.Title>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 no-caret border-0 d-inline " data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort By<i className="ri-arrow-down-s-line align-middle ms-1"></i>
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
                                                <th scope="col">Customer</th>
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
                                                        <span className="avatar avatar-sm avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/jpg/2.jpg" className="" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!">SoundSync Headphones</Link></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../../assets/images/faces/4.jpg" alt="" />
                                                        </span>Mayor Kelly
                                                    </div>
                                                </td>
                                                <td>Cash On Delivery</td>
                                                <td className="fw-semibold">$76.00</td> 
                                                <td><span className="badge bg-success-transparent">Shippped</span></td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-outline-light btn-wave btn-icon">
                                                        <i className="fe fe-eye text-muted"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#19376</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/png/10.png" className="" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!"> Western Ladies Bag</Link></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../../assets/images/faces/15.jpg" alt="" />
                                                        </span>Andrew Garfield 
                                                    </div>
                                                </td>
                                                <td>Online Payment</td>
                                                <td className="fw-semibold">$13.00</td>
                                                <td><span className="badge bg-warning-transparent">Pending</span></td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-outline-light btn-wave btn-icon">
                                                        <i className="fe fe-eye text-muted"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#19878</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/jpg/3.jpg" className="" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!">Digital Camera(45M Zoom)</Link></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../../assets/images/faces/8.jpg" alt="" />
                                                        </span>Mirinda Hers
                                                    </div>
                                                </td>
                                                <td>Cash On Delivery</td>
                                                <td className="fw-semibold">$54.00</td>
                                                <td><span className="badge bg-success-transparent">Shipped</span></td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-outline-light btn-wave btn-icon">
                                                        <i className="fe fe-eye text-muted"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#19879</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/jpg/9.jpg" className="" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!">High Heel Sandals</Link></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../../assets/images/faces/11.jpg" alt="" />
                                                        </span>Simon Cowel
                                                    </div>
                                                </td>
                                                <td>Online Payment</td>
                                                <td className="fw-semibold">$87.00</td> 
                                                <td><span className="badge bg-danger-transparent">Cancelled</span></td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-outline-light btn-wave btn-icon">
                                                        <i className="fe fe-eye text-muted"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#19880</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/png/16.png" className="" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!">Smart Digital Watch</Link></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../../assets/images/faces/1.jpg" alt="" />
                                                        </span>Jack Miller
                                                    </div>
                                                </td>
                                                <td>Cash On Delivery</td>
                                                <td className="fw-semibold">$78.00</td> 
                                                <td><span className="badge bg-success-transparent">Shipped</span></td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-outline-light btn-wave btn-icon">
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
                    <Col xl={3}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    RECENT INVOICES
                                </Card.Title>
                                <Link scroll={false} href="#!" className="btn btn-primary-light btn-sm">
                                    View All
                                </Link>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-top flex-wrap gap-2">
                                    <div className="svg-icon-background bg-info-transparent me-2 svg-info"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className=""><path d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"></path></svg>
                                    </div> 
                                    <div className="flex-fill">
                                        <p className="mb-0 fw-semibold">#13425
                                            <span className="badge badge-sm bg-success-transparent ms-2">Paid</span>
                                        </p> 
                                        <span className="fs-12 text-muted me-2 d-inline-block">04 Aug 2024</span>
                                        <span className="fs-12 text-muted"> 09:40am</span>
                                    </div>
                                    <div>
                                        <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave me-1">
                                            <i className="ri-eye-line"></i>
                                        </Button>
                                        <Button variant="" className="btn btn-sm btn-icon btn-secondary-light btn-wave me-1">
                                            <i className="ri-download-line"></i>
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-top flex-wrap gap-2">
                                    <div className="svg-icon-background bg-info-transparent me-2 svg-info"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className=""><path d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"></path></svg>
                                    </div> 
                                    <div className="flex-fill">
                                        <p className="mb-0 fw-semibold">#14565
                                            <span className="badge badge-sm bg-warning-transparent ms-2">Pending</span>
                                        </p> 
                                        <span className="fs-12 text-muted me-2 d-inline-block">06 Sep 2024</span>
                                        <span className="fs-12 text-muted"> 09:40am</span>
                                    </div>
                                    <div>
                                        <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave me-1">
                                            <i className="ri-eye-line"></i>
                                        </Button>
                                        <Button variant="" className="btn btn-sm btn-icon btn-secondary-light btn-wave me-1">
                                            <i className="ri-download-line"></i>
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-top flex-wrap gap-2">
                                    <div className="svg-icon-background bg-info-transparent me-2 svg-info"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className=""><path d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"></path></svg>
                                    </div> 
                                    <div className="flex-fill">
                                        <p className="mb-0 fw-semibold">#15678
                                            <span className="badge badge-sm bg-danger-transparent ms-2">Unpaid</span>
                                        </p> 
                                        <span className="fs-12 text-muted me-2 d-inline-block">17 Sep 2024</span>
                                        <span className="fs-12 text-muted"> 09:40am</span>
                                    </div>
                                    <div>
                                        <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave me-1">
                                            <i className="ri-eye-line"></i>
                                        </Button>
                                        <Button variant="" className="btn btn-sm btn-icon btn-secondary-light btn-wave me-1">
                                            <i className="ri-download-line"></i>
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-top flex-wrap gap-2">
                                    <div className="svg-icon-background bg-info-transparent me-2 svg-info"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className=""><path d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"></path></svg>
                                    </div> 
                                    <div className="flex-fill">
                                        <p className="mb-0 fw-semibold">#17542
                                            <span className="badge badge-sm bg-success-transparent ms-2">Paid</span>
                                        </p> 
                                        <span className="fs-12 text-muted me-2 d-inline-block">17 Sep 2024</span>
                                        <span className="fs-12 text-muted"> 09:40am</span>
                                    </div>
                                    <div>
                                        <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave me-1">
                                            <i className="ri-eye-line"></i>
                                        </Button>
                                        <Button variant="" className="btn btn-sm btn-icon btn-secondary-light btn-wave me-1">
                                            <i className="ri-download-line"></i>
                                        </Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End::row-2 */}

                {/* Start::row-3 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    RECENLTY ADDED PRODUCTS
                                </Card.Title>
                                <div className="d-flex">
                                    <div className="me-3">
                                        <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example"/>
                                    </div>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="" href="#!" className="btn btn-primary btn-sm btn-wave no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                            Sort By<i className="ri-arrow-down-s-line align-middle ms-1"></i>
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
                                    <table className="table table-hover text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="row" className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob1" value="" aria-label="..." /></th>
                                                <th scope="col">Product</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Stock Qty</th>
                                                <th scope="col">Total Sales</th>
                                                <th scope="col">Added Date</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob2" value="" aria-label="..." /></td>
                                                <td>
                                                    <div className="d-flex">
                                                        <span className="avatar avatar-md avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/jpg/2.jpg" className="" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!"> SoundSync Headphones</Link></p>
                                                            <p className="fs-12 text-muted mb-0">Accusam Brand</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Electronics
                                                </td>
                                                <td><span className="badge bg-success-transparent">Published</span></td>
                                                <td>
                                                   60
                                                </td>
                                                <td>
                                                   10
                                                </td>
                                                <td>03 Sep 2024</td>
                                                <td className="fw-semibold">$15,000</td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Button>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave me-1">
                                                        <i className="ri-edit-line"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob3" value="" aria-label="..." defaultChecked /></td>
                                                <td>
                                                    <div className="d-flex">
                                                        <span className="avatar avatar-md avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/png/9.png" className="" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!"> Western Ladies Bag</Link></p>
                                                            <p className="fs-12 text-muted mb-0">Vellintn Brand</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Women's Fashion
                                                </td>
                                                <td>
                                                    <span className="badge bg-danger-transparent">Unpublished</span>
                                                </td>
                                                <td>
                                                    120
                                                </td>
                                                <td>
                                                    20
                                                </td>
                                                <td>05 Oct 2024</td>
                                                <td className="fw-semibold">$25,000</td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Button>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave me-1">
                                                        <i className="ri-edit-line"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob4" value="" aria-label="..." defaultChecked /></td>
                                                <td>
                                                    <div className="d-flex">
                                                        <span className="avatar avatar-md avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/jpg/3.jpg" className="" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!">Digital Camera(45M Zoom)</Link></p>
                                                            <p className="fs-12 text-muted mb-0">Top Brand</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                   Electronics
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Published</span>
                                                </td>
                                                <td>
                                                    279
                                                </td>
                                                <td>
                                                    27
                                                </td>
                                                <td>13 Nov 2024</td>
                                                <td className="fw-semibold">$43,000</td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Button>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave me-1">
                                                        <i className="ri-edit-line"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob5" value="" aria-label="..." /></td>
                                                <td>
                                                    <div className="d-flex">
                                                        <span className="avatar avatar-md avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/jpg/9.jpg" className="" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!">High Heel Sandals</Link></p>
                                                            <p className="fs-12 text-muted mb-0">Erat Brand</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Women Footwear
                                                </td>
                                                <td>
                                                    <span className="badge bg-danger-transparent">Unpublished</span>
                                                </td>
                                                <td>
                                                    270
                                                </td>
                                                <td>
                                                    34
                                                </td>
                                                <td>15 Dec 2024</td>
                                                <td className="fw-semibold">$10,000</td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Button>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave me-1">
                                                        <i className="ri-edit-line"></i>
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
                                            <Pagination.Item disabled>Previous
                                            </Pagination.Item>
                                            <Pagination.Item active>1</Pagination.Item>
                                            <Pagination.Item>2</Pagination.Item>
                                            <Pagination.Item>3</Pagination.Item>
                                            <Pagination.Item>4</Pagination.Item>
                                            <Pagination.Item>5</Pagination.Item>
                                            <Pagination.Item className="pagination-next">Next </Pagination.Item>
                                        </Pagination>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                {/* End::row-3 */}
    </Fragment>
    )
};

export default Vendordetails;