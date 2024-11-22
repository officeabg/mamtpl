"use client"
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, OverlayTrigger, Pagination, Row, Tooltip } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Domaindata from '@/shared/data/apps/domain/domainadmindata';
import dynamic from "next/dynamic";
import {
	Autoplay, 
} from "swiper/modules";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Admin = () => {
return ( 
    <Fragment>
                {/* Page Header */}
                    <Seo title={"Admin"} />
                    <Pageheader Heading="Admin" Pages={[{title:"Apps", active:true}, {title:"Domain", active:true}, {title:"Admin", active:false},]} />
                {/* Page Header Close */}
                {/* Start::row-1 */}
                <Row>
                    <Col xxl={6} xl={12} className="">
                        <Row>
                            <Col xl={6} lg={6} md={6} sm={12} className="">
                                <Card className="custom-card icon-overlay">
                                    <span className="icon svg-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 15v4H5v-4h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 18.5c-.82 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 5v4H5V5h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 8.5c-.82 0-1.5-.67-1.5-1.5S6.18 5.5 7 5.5s1.5.68 1.5 1.5S7.83 8.5 7 8.5z"/></svg>
                                    </span>
                                    <Card.Body className="p-4">
                                        <div className="d-flex align-items-top flex-wrap gap-3">
                                            <div className="main-card-icon primary">
                                                <div className="avatar avatar-lg bg-primary-transparent border border-primary border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="40" y="144" width="176" height="64" rx="8" opacity="0.2"/><rect x="40" y="48" width="176" height="64" rx="8" opacity="0.2"/><rect x="40" y="144" width="176" height="64" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><rect x="40" y="48" width="176" height="64" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="180" cy="80" r="12"/><circle cx="180" cy="176" r="12"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-fill">
                                                <h5 className="fw-semibold mb-1">1,116</h5>
                                                <div className="d-flex align-items-top">
                                                    <p className="mb-0 me-2">Active Domains</p>
                                                    <div className="text-success fw-semibold"><i className="ri-arrow-up-s-fill align-middle"></i>+0.21%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={12} className="">
                                <Card className="custom-card icon-overlay">
                                    <span className="icon svg-info">
                                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><path d="M20,9V6h-2v3h-3v2h3v3h2v-3h3V9H20z M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6 c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2S7,9.1,7,8C7,6.9,7.9,6,9,6z M15.39,14.56C13.71,13.7,11.53,13,9,13c-2.53,0-4.71,0.7-6.39,1.56 C1.61,15.07,1,16.1,1,17.22V20h16v-2.78C17,16.1,16.39,15.07,15.39,14.56z M15,18H3v-0.78c0-0.38,0.2-0.72,0.52-0.88 C4.71,15.73,6.63,15,9,15c2.37,0,4.29,0.73,5.48,1.34C14.8,16.5,15,16.84,15,17.22V18z"/></g></svg>
                                    </span>
                                    <Card.Body className="p-4">
                                        <div className="d-flex align-items-top flex-wrap gap-3">
                                            <div className="main-card-icon secondary">
                                                <div className="avatar avatar-lg bg-secondary-transparent border border-secondary border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="108" cy="100" r="60" opacity="0.2"/><line x1="200" y1="136" x2="248" y2="136" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="224" y1="112" x2="224" y2="160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="108" cy="100" r="60" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-fill">
                                                <h5 className="fw-semibold mb-1">1,468</h5>
                                                <div className="d-flex align-items-top">
                                                    <p className="mb-0 me-2">Total Users</p> 
                                                    <div className="text-danger fw-semibold"><i className="ri-arrow-down-s-fill align-middle"></i>-0.153%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={12} className="">
                                <Card className="custom-card icon-overlay">
                                    <span className="icon svg-danger">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
                                    </span>
                                    <Card.Body className="p-4">
                                        <div className="d-flex align-items-top flex-wrap gap-3">
                                            <div className="main-card-icon success">
                                                <div className="avatar avatar-lg bg-success-transparent border border-success border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="96" opacity="0.2"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-miterlimit="10" strokeWidth="16"/><line x1="128" y1="136" x2="128" y2="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="128" cy="172" r="12"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-fill">
                                                <h5 className="fw-semibold mb-1">2,468</h5>
                                                <div className="d-flex align-items-top">
                                                    <p className="mb-0 me-2">Auction Expired</p>
                                                    <div className="text-danger fw-semibold"><i className="ri-arrow-down-s-fill align-middle"></i>-0.153%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={12} className="">
                                <Card className="custom-card icon-overlay">
                                    <span className="icon svg-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M12.5,7H11v6l5.2,3.2l0.8-1.3l-4.5-2.7V7z"/></g></g></svg>
                                    </span>
                                    <Card.Body className="p-4">
                                        <div className="d-flex align-items-top flex-wrap gap-3">
                                            <div className="main-card-icon orange">
                                                <div className="avatar avatar-lg bg-orange-transparent border border-orange border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="136" r="88" opacity="0.2"/><circle cx="128" cy="136" r="88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="136" x2="168" y2="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="104" y1="16" x2="152" y2="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-fill">
                                                <h5 className="fw-semibold mb-1">2,468</h5>
                                                <div className="d-flex align-items-top">
                                                    <p className="mb-0 me-2">Pending Domains</p>
                                                    <div className="text-danger fw-semibold"><i className="ri-arrow-down-s-fill align-middle"></i>-0.67%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className="custom-card overflow-hidden">
                                    <Card.Header className="justify-content-between">
                                    <Card.Title>Domains Statistics</Card.Title>
                                    <Dropdown>
                                        <Dropdown.Toggle href="#!" variant="" className="p-2 fs-12 no-caret text-muted  border-0 d-inline" data-bs-toggle="dropdown"
                                        aria-expanded="false">
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
                                    <div className="row border-bottom border-block-end-dashed">
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={4} className="col-12">
                                            <div className="p-3 border-sm-end border-inline-end-dashed text-center">
                                                <p className="fs-20 fw-semibold mb-0">1,117</p>
                                                <p className="mb-0 text-muted">Total Domains</p>
                                            </div>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={4} className="col-12">
                                            <div className="p-3 border-sm-end border-inline-end-dashed text-center">
                                                <p className="fs-20 fw-semibold mb-0">742</p>
                                                <p className="mb-0 text-muted">Total Websites</p>
                                            </div>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={4} className="col-12">
                                            <div className="p-3 text-center">
                                                <p className="fs-20 fw-semibold mb-0">259</p>
                                                <p className="mb-0 text-muted">Total Sales</p>
                                            </div>
                                        </Col>
                                    </div>
                                    <div className="p-2" id="products-overview">
                                        <ReactApexChart options={Domaindata.Domainstatistics.options} series={Domaindata.Domainstatistics.series} type="line" width={"100%"} height={280} />
                                    </div>
                                </Card.Body>
                            </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xxl={6} xl={12} className="">
                        <Row>
                            <Col lg={6}>
                                <Card className="custom-card">
                                    <Card.Header className="justify-content-between">
                                        <Card.Title>Page Views</Card.Title>
                                    </Card.Header>
                                    <Card.Body className="ps-0 pb-0">
                                        <div id="page-views">
                                         <ReactApexChart options={Domaindata.Pageviews.options} series={Domaindata.Pageviews.series} type="line" width={"100%"} height={210} /> 
                                        </div>                                        
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card overflow-hidden">
                                    <Card.Header className="justify-content-between">
                                        <Card.Title>Top Country Users</Card.Title>
                                        <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                    </Card.Header>
                                    <Card.Body className="p-0">
                                        <div className="table-responsive">
                                            <table className="table text-nowrap table-country">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Country</th>
                                                        <th scope="col" className="text-center">Total Users</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src="../../../assets/images/flags/us_flag.jpg" alt="" />
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
                                                                        <img src="../../../assets/images/flags/french_flag.jpg" alt="" />
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
                                                                        <img src="../../../assets/images/flags/uae_flag.jpg" alt="" />
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
                                                                        <img src="../../../assets/images/flags/italy_flag.jpg" alt="" />
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
                                                                        <img src="../../../assets/images/flags/mexico_flag.jpg" alt="" />
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
                                                                        <img src="../../../assets/images/flags/spain_flag.jpg" alt="" />
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
                                                </tbody>
                                            </table>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={6}>
                                <Card className="custom-card earning-card">
                                    <Card.Body className="text-fixed-white">
                                        <div className="d-flex gap-3 align-items-start">
                                            <span className="avatar avatar-lg p-2 bg-white-transparent svg-white shadow-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,11H10a2,2,0,0,1,0-4h5a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3H13V3a1,1,0,0,0-2,0V5H10a4,4,0,0,0,0,8h4a2,2,0,0,1,0,4H9a1,1,0,0,1-1-1,1,1,0,0,0-2,0,3,3,0,0,0,3,3h2v2a1,1,0,0,0,2,0V19h1a4,4,0,0,0,0-8Z"></path></svg>
                                            </span>
                                            <div>
                                                <h5 className="fw-semibold d-block earning-text text-fixed-white">Total Earnings</h5>
                                                <span className="mb-0">Increase by <span className="badge bg-white-transparent mx-1">+4.2%</span> this month</span>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card">
                                    <Card.Header>
                                        <Card.Title className="flex-grow-1">
                                            Auction Ending Soon
                                        </Card.Title>
                                        <div className="min-w-fit-content">
                                            <Link scroll={false} href="#!" className="text-primary fw-semibold">View<i className="ti ti-arrow-right ms-1"></i></Link>
                                        </div>
                                    </Card.Header>
                                    <Card.Body className="pb-0">
                                        <Swiper direction={'vertical'} slidesPerView={7} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                        modules={[Autoplay]}  className="swiper swiper-vertical allauction-swiper overflow-hidden">
                                                <SwiperSlide>
                                                    <div className="">
                                                        <div className="d-flex align-items-center gap-2 flex-nowrap">
                                                            <div>
                                                                <span className="avatar avatar-sm bg-primary svg-white avatar-rounded">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 15v4H5v-4h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 18.5c-.82 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 5v4H5V5h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 8.5c-.82 0-1.5-.67-1.5-1.5S6.18 5.5 7 5.5s1.5.68 1.5 1.5S7.83 8.5 7 8.5z"></path></svg>
                                                                </span>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <p className="fw-semibold mb-0">spotechsols.net</p>
                                                                <small className="text-muted">10 Bids , 27 Days Left</small>
                                                            </div>
                                                            <p className="fw-semibold">$12.00</p>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="">
                                                        <div className="d-flex align-items-center gap-2 flex-nowrap">
                                                            <div>
                                                                <span className="avatar avatar-sm bg-secondary svg-white avatar-rounded">
                                                                    <img src="../../../assets/images/marketplace/new-arrivals/1.png" alt="img" className="img-fluid w-100"/>
                                                                </span>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <p className="fw-semibold mb-0">dwaynestel.net</p>
                                                                <small className="text-muted">12 Bids , 27 Days Left</small>
                                                            </div>
                                                            <p className="fw-semibold">$23.00</p>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="">
                                                        <div className="d-flex align-items-center gap-2 flex-nowrap">
                                                            <div>
                                                                <span className="avatar avatar-sm bg-warning svg-white avatar-rounded">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 15v4H5v-4h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 18.5c-.82 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 5v4H5V5h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 8.5c-.82 0-1.5-.67-1.5-1.5S6.18 5.5 7 5.5s1.5.68 1.5 1.5S7.83 8.5 7 8.5z"></path></svg>
                                                                </span>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <p className="fw-semibold mb-0">sanctuseadi.edu</p>
                                                                <small className="text-muted">21 Bids , 32 Days Left</small>
                                                            </div>
                                                            <p className="fw-semibold">$56.00</p>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="">
                                                        <div className="d-flex align-items-center gap-2 flex-nowrap">
                                                            <div>
                                                                <span className="avatar avatar-sm bg-info svg-white avatar-rounded">
                                                                    <img src="../../../assets/images/marketplace/new-arrivals/3.png" alt="img" className="img-fluid w-100"/>
                                                                </span>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <p className="fw-semibold mb-0">incididunt.org</p>
                                                                <small className="text-muted">17 Bids , 12 Days Left</small>
                                                            </div>
                                                            <p className="fw-semibold">$16.00</p>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="">
                                                        <div className="d-flex align-items-center gap-2 flex-nowrap">
                                                            <div>
                                                                <span className="avatar avatar-sm bg-danger svg-white avatar-rounded">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 15v4H5v-4h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 18.5c-.82 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 5v4H5V5h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 8.5c-.82 0-1.5-.67-1.5-1.5S6.18 5.5 7 5.5s1.5.68 1.5 1.5S7.83 8.5 7 8.5z"></path></svg>
                                                                </span>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <p className="fw-semibold mb-0">incididunt.org</p>
                                                                <small className="text-muted">17 Bids , 12 Days Left</small>
                                                            </div>
                                                            <p className="fw-semibold">$16.00</p>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="">
                                                        <div className="d-flex align-items-center gap-2 flex-nowrap">
                                                            <div>
                                                                <span className="avatar avatar-sm bg-info-transparent svg-info avatar-rounded">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 15v4H5v-4h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 18.5c-.82 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 5v4H5V5h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 8.5c-.82 0-1.5-.67-1.5-1.5S6.18 5.5 7 5.5s1.5.68 1.5 1.5S7.83 8.5 7 8.5z"></path></svg>
                                                                </span>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <p className="fw-semibold mb-0">spotechsols.net</p>
                                                                <small className="text-muted">10 Bids , 27 Days Left</small>
                                                            </div>
                                                            <p className="fw-semibold">$12.00</p>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="">
                                                        <div className="d-flex align-items-center gap-2 flex-nowrap">
                                                            <div>
                                                                <span className="avatar avatar-sm bg-secondary svg-white avatar-rounded">
                                                                    <img src="../../../assets/images/marketplace/new-arrivals/1.png" alt="img" className="img-fluid w-100"/>
                                                                </span>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <p className="fw-semibold mb-0">dwaynestel.net</p>
                                                                <small className="text-muted">12 Bids , 27 Days Left</small>
                                                            </div>
                                                            <p className="fw-semibold">$23.00</p>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="">
                                                        <div className="d-flex align-items-center gap-2 flex-nowrap">
                                                            <div>
                                                                <span className="avatar avatar-sm bg-success-transparent svg-success avatar-rounded">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 15v4H5v-4h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 18.5c-.82 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 5v4H5V5h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 8.5c-.82 0-1.5-.67-1.5-1.5S6.18 5.5 7 5.5s1.5.68 1.5 1.5S7.83 8.5 7 8.5z"></path></svg>
                                                                </span>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <p className="fw-semibold mb-0">sanctuseadi.edu</p>
                                                                <small className="text-muted">21 Bids , 32 Days Left</small>
                                                            </div>
                                                            <p className="fw-semibold">$56.00</p>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="">
                                                        <div className="d-flex align-items-center gap-2 flex-nowrap">
                                                            <div>
                                                                <span className="avatar avatar-sm bg-info svg-white avatar-rounded">
                                                                    <img src="../../../assets/images/marketplace/new-arrivals/3.png" alt="img" className="img-fluid w-100"/>
                                                                </span>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <p className="fw-semibold mb-0">incididunt.org</p>
                                                                <small className="text-muted">17 Bids , 12 Days Left</small>
                                                            </div>
                                                            <p className="fw-semibold">$16.00</p>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="">
                                                        <div className="d-flex align-items-center gap-2 flex-nowrap">
                                                            <div>
                                                                <span className="avatar avatar-sm bg-danger svg-white avatar-rounded">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 15v4H5v-4h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 18.5c-.82 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 5v4H5V5h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 8.5c-.82 0-1.5-.67-1.5-1.5S6.18 5.5 7 5.5s1.5.68 1.5 1.5S7.83 8.5 7 8.5z"></path></svg>
                                                                </span>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <p className="fw-semibold mb-0">incididunt.org</p>
                                                                <small className="text-muted">17 Bids , 12 Days Left</small>
                                                            </div>
                                                            <p className="fw-semibold">$16.00</p>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                        </Swiper>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/*End::row-1 */}

                {/* Start:: row-2 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    Market Cap
                                </Card.Title>
                                <div>
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Any Stock Here" aria-label=".form-control-sm example" />
                                </div>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <Row>
                                    <div className="col-xl-7 border-end">
                                        <div className="p-3">
                                            <div className="d-flex flex-wrap alilgn-items-center justify-content-between">
                                                <div className="d-flex flex-fill gap-3 ms-3">
                                                    <div>
                                                        <h5 className="fw-semibold text-primary">$12,390.02<span className="fs-12 ms-1 text-danger">0.14%<i className="ti ti-trending-down ms-1"></i></span></h5>
                                                        <span className="d-block text-muted mb-1 fs-12"><span className="text-danger me-1">-89.75</span>. Today</span>
                                                        <span className="d-block text-muted fs-11">Jun 17, 2024  11:25 AM  UTC +5:30</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex text-end">
                                                    <div>
                                                        <h6 className="fw-semibold">GITUHB</h6>
                                                        <span className="d-block text-muted fs-11 mb-1">GTHB  INDEXNSE</span>
                                                        <span className="d-block"><Link scroll={false} href="#!" className="text-primary fw-semibold">+ Compare</Link></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="stocks-marketcap">
                                                    <ReactApexChart options={Domaindata.Domainmarketcap.options} series={Domaindata.Domainmarketcap.series} type="candlestick" width={"100%"} height={350} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5">
                                        <div className="p-3">
                                            <div className="table-responsive mb-5">
                                                <table className="table text-nowrap table-borderless table-sm text-muted">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">Open</th>
                                                            <td>125.80</td>
                                                            <td>Volume</td>
                                                            <td>1,253.20</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">High</th>
                                                            <td>352.15</td>
                                                            <td>Avg. Volume</td>
                                                            <td>1.05M</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Low</th>
                                                            <td>120.13</td>
                                                            <td>52 Week High</td>
                                                            <td>2569.25</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Dividend Yield</th>
                                                            <td>3.5%</td>
                                                            <td>52 Week Low</td>
                                                            <td>1586.20</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">P/E Ratio</th>
                                                            <td>25%</td>
                                                            <td>Market Cap</td>
                                                            <td>2.15Cr</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div>
                                                <h6 className="fw-semibold mb-2">
                                                    Market Depth:
                                                </h6>
                                                <Row>
                                                    <Col xl={6}>
                                                        <div className="table-responsive">
                                                            <table className="table text-nowrap table-sm text-center table-borderless text-muted">
                                                                <thead className="text-default bg-light">
                                                                    <tr>
                                                                        <th scope="col">Qty</th>
                                                                        <th scope="col">Orders</th>
                                                                        <th scope="col">Bid</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <th scope="row">
                                                                            <span className="text-success">20</span>
                                                                        </th>
                                                                        <td>2</td>
                                                                        <td>$12,908</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">
                                                                            <span className="text-success">12</span>
                                                                        </th>
                                                                        <td>1</td>
                                                                        <td>$20,632</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">
                                                                            <span className="text-success">36</span>
                                                                        </th>
                                                                        <td>1</td>
                                                                        <td>$19,102</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">
                                                                            <span className="text-success">10</span>
                                                                        </th>
                                                                        <td>3</td>
                                                                        <td>$16,650</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">
                                                                            <span className="text-success">15</span>
                                                                        </th>
                                                                        <td>2</td>
                                                                        <td>$18,850</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <div className="table-responsive mb-3">
                                                            <table className="table text-nowrap table-sm text-center table-borderless text-muted">
                                                                <thead className="text-default bg-light">
                                                                    <tr>
                                                                        <th scope="col">Qty</th>
                                                                        <th scope="col">Orders</th>
                                                                        <th scope="col">Bid</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <th scope="row">
                                                                            <span className="text-danger">20</span>
                                                                        </th>
                                                                        <td>2</td>
                                                                        <td>$12,908</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">
                                                                            <span className="text-danger">12</span>
                                                                        </th>
                                                                        <td>1</td>
                                                                        <td>$20,632</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">
                                                                            <span className="text-danger">36</span>
                                                                        </th>
                                                                        <td>1</td>
                                                                        <td>$19,102</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">
                                                                            <span className="text-danger">10</span>
                                                                        </th>
                                                                        <td>3</td>
                                                                        <td>$16,650</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">
                                                                            <span className="text-danger">15</span>
                                                                        </th>
                                                                        <td>2</td>
                                                                        <td>$18,850</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className="text-end">
                                                            <Button className="btn btn-primary btn-wave">View All <i className="bi bi-arrow-right"></i></Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-2 */}

                {/* Start::row-3 */}
                <Row>
                    <Col lg={8}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    Recent Added Listings
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
                                                <th scope="row" className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabelproducts1" value="" aria-label="..."/></th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Bids</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Industry</th>
                                                <th scope="col">Posted On</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabelproducts2" value="" aria-label="..."/></td>
                                                <td>
                                                    <div className="d-flex"> 
                                                        <div className="avatar avatar-sm bg-primary-transparent svg-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M919.2 404.8H104.8l6.2-19.5c12-37.9 29.2-73.8 51.4-106.9 17.8-26.6 38.6-51.2 62-73.1C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.7 113.8 23.4 21.9 44.2 46.5 62 73.1 22.2 33.1 39.4 69 51.4 106.9l6.1 19.5zm-772.9-30h731.4c-10.5-28-24.2-54.7-41-79.7-16.5-24.7-35.9-47.5-57.6-67.9C706.5 159 611.6 121.5 512 121.5c-99.6 0-194.5 37.5-267.1 105.7-21.7 20.4-41.1 43.2-57.6 67.9-16.8 24.9-30.5 51.7-41 79.7zM512 932.5c-107.3 0-209.5-40.4-287.7-113.8-23.4-22-44.2-46.5-62-73.1-22.1-33.1-39.4-69-51.4-106.9l-6.2-19.5h814.4l-6.2 19.5c-11.9 37.8-29.2 73.8-51.4 106.9-17.8 26.5-38.6 51.1-62 73.1-78.1 73.4-180.2 113.8-287.5 113.8zM146.3 649.2c10.5 28 24.3 54.8 41 79.7 16.5 24.7 35.9 47.5 57.6 67.9C317.5 865 412.4 902.5 512 902.5c99.6 0 194.5-37.5 267.1-105.7 21.7-20.4 41.1-43.2 57.6-67.9 16.7-25 30.5-51.7 41-79.7H146.3z"></path><path d="M512 932.5c-39.6 0-78.5-18.5-112.3-53.6-31.5-32.6-58.6-79.5-78.4-135.5-11.7-33.1-20.8-69-27-106.7l-2.9-17.4h441.2l-2.9 17.4c-6.2 37.8-15.3 73.7-27 106.7-19.8 56-46.9 102.9-78.4 135.5-33.8 35.1-72.7 53.6-112.3 53.6zM327 649.2c5.7 29.6 13.3 57.9 22.6 84.2 18.4 52 43.2 95.1 71.7 124.7 28.5 29.5 59 44.5 90.7 44.5s62.3-15 90.7-44.5c28.5-29.5 53.3-72.7 71.7-124.7 9.3-26.3 16.9-54.6 22.6-84.2H327zm405.6-244.4H291.4l2.9-17.4c6.2-37.8 15.3-73.7 27-106.7 19.8-56 46.9-102.9 78.4-135.5C433.5 110 472.4 91.5 512 91.5c39.6 0 78.5 18.5 112.3 53.6 31.5 32.6 58.6 79.5 78.4 135.5 11.7 33.1 20.8 69 27 106.7l2.9 17.5zm-405.6-30h370c-5.7-29.6-13.3-57.9-22.6-84.2-18.4-52-43.2-95.1-71.7-124.7-28.5-29.5-59-44.5-90.7-44.5s-62.3 15-90.7 44.5c-28.5 29.5-53.3 72.7-71.7 124.7-9.3 26.3-16.9 54.6-22.6 84.2z"></path><path d="M497 634.2h30v283.3h-30zM497 106.5h30v283.3h-30z"></path><path d="M512 341c-64.2 0-125.8-14.1-183.1-41.9-38.3-18.6-73.5-42.8-104.6-71.9l-11.7-10.9 11.7-10.9C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.6 113.8l11.7 10.9-11.7 10.9c-31.1 29.2-66.3 53.4-104.6 71.9-57.2 27.9-118.8 42-183 42zM257 216.2c25.8 22.3 54.3 41 85 55.9 53.2 25.8 110.4 38.8 170 38.8 59.6 0 116.8-13.1 170-38.9 30.7-14.8 59.2-33.6 85-55.9-70.9-61.2-160.8-94.7-255-94.7-94.2.1-184.1 33.6-255 94.8zm255 716.3c-107.3 0-209.5-40.4-287.7-113.8l-11.7-10.9 11.7-10.9c31.1-29.2 66.3-53.4 104.6-72C386.2 697.1 447.8 683 512 683c64.2 0 125.8 14.1 183.1 41.9 38.3 18.5 73.4 42.7 104.6 71.9l11.7 10.9-11.7 10.9C721.5 892.1 619.3 932.5 512 932.5zM257 807.8c70.9 61.2 160.8 94.7 255 94.7 94.2 0 184.1-33.5 255-94.7-25.8-22.3-54.3-41-85-55.9-53.2-25.8-110.4-38.9-170-38.9-59.6 0-116.8 13.1-170 38.8-30.7 14.9-59.2 33.7-85 56zm684.2-158.6H82.8c-10.8 0-19.6-8.8-19.6-19.6V394.4c0-10.8 8.8-19.6 19.6-19.6h858.5c10.8 0 19.6 8.8 19.6 19.6v235.3c-.1 10.7-8.9 19.5-19.7 19.5zm-848-30h837.6V404.8H93.2v214.4z"></path><path d="M314.1 588H282l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM804.7 588h-32.1l-39.1-88.4-39 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM559.4 588h-32.1l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM843.2 558h29.4v30h-29.4z"></path></svg>
                                                        </div>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0">dwaynestel.net</p>
                                                            <small className="text-muted">USA , 27 Days Left</small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge rounded-pill badge-sm bg-primary-transparent">Domain</span>
                                                </td>
                                                <td>10</td>
                                                <td><span className="badge rounded-pill badge-sm bg-success-transparent">Active</span></td>
                                                <td>
                                                    Corporate
                                                </td>
                                                <td>03 Sep 2022</td>
                                                <td>
                                                    <Dropdown> 
                                                        <Dropdown.Toggle variant="" aria-label="anchor" className="btn btn-primary-light btn-icon btn-sm no-caret" href="#!" data-bs-toggle="dropdown"> 
                                                            <i className="ri-more-2-fill"></i>
                                                        </Dropdown.Toggle> 
                                                        <Dropdown.Menu role="menu"> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-eye-line me-1"></i>View</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-pencil-line me-1"></i>Edit</Dropdown.Item></li> 
                                                        </Dropdown.Menu> 
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabelproducts3" value="" aria-label="..." checked/></td>
                                                <td>
                                                    <div className="d-flex"> 
                                                        <div className="avatar avatar-sm bg-primary-transparent">
                                                            <img src="../../../assets/images/marketplace/new-arrivals/1.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                                        </div>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0">gtechnical.com</p>
                                                            <small className="text-muted">Chennai , 14 Days Left</small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge rounded-pill badge-sm bg-danger-transparent">Website</span>
                                                </td>
                                                <td>16</td>
                                                <td><span className="badge rounded-pill badge-sm bg-danger-transparent">Expired</span></td>
                                                <td>
                                                    Business
                                                </td>
                                                <td>16 Nov 2022</td>
                                                <td>
                                                    <Dropdown> 
                                                        <Dropdown.Toggle variant="" aria-label="anchor" className="btn btn-primary-light btn-icon btn-sm no-caret" href="#!" data-bs-toggle="dropdown"> 
                                                            <i className="ri-more-2-fill"></i>
                                                        </Dropdown.Toggle> 
                                                        <Dropdown.Menu role="menu"> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-eye-line me-1"></i>View</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-pencil-line me-1"></i>Edit</Dropdown.Item></li> 
                                                        </Dropdown.Menu> 
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabelproducts4" value="" aria-label="..." checked/></td>
                                                <td>
                                                    <div className="d-flex"> 
                                                        <div className="avatar avatar-sm bg-pink-transparent svg-pink">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M919.2 404.8H104.8l6.2-19.5c12-37.9 29.2-73.8 51.4-106.9 17.8-26.6 38.6-51.2 62-73.1C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.7 113.8 23.4 21.9 44.2 46.5 62 73.1 22.2 33.1 39.4 69 51.4 106.9l6.1 19.5zm-772.9-30h731.4c-10.5-28-24.2-54.7-41-79.7-16.5-24.7-35.9-47.5-57.6-67.9C706.5 159 611.6 121.5 512 121.5c-99.6 0-194.5 37.5-267.1 105.7-21.7 20.4-41.1 43.2-57.6 67.9-16.8 24.9-30.5 51.7-41 79.7zM512 932.5c-107.3 0-209.5-40.4-287.7-113.8-23.4-22-44.2-46.5-62-73.1-22.1-33.1-39.4-69-51.4-106.9l-6.2-19.5h814.4l-6.2 19.5c-11.9 37.8-29.2 73.8-51.4 106.9-17.8 26.5-38.6 51.1-62 73.1-78.1 73.4-180.2 113.8-287.5 113.8zM146.3 649.2c10.5 28 24.3 54.8 41 79.7 16.5 24.7 35.9 47.5 57.6 67.9C317.5 865 412.4 902.5 512 902.5c99.6 0 194.5-37.5 267.1-105.7 21.7-20.4 41.1-43.2 57.6-67.9 16.7-25 30.5-51.7 41-79.7H146.3z"></path><path d="M512 932.5c-39.6 0-78.5-18.5-112.3-53.6-31.5-32.6-58.6-79.5-78.4-135.5-11.7-33.1-20.8-69-27-106.7l-2.9-17.4h441.2l-2.9 17.4c-6.2 37.8-15.3 73.7-27 106.7-19.8 56-46.9 102.9-78.4 135.5-33.8 35.1-72.7 53.6-112.3 53.6zM327 649.2c5.7 29.6 13.3 57.9 22.6 84.2 18.4 52 43.2 95.1 71.7 124.7 28.5 29.5 59 44.5 90.7 44.5s62.3-15 90.7-44.5c28.5-29.5 53.3-72.7 71.7-124.7 9.3-26.3 16.9-54.6 22.6-84.2H327zm405.6-244.4H291.4l2.9-17.4c6.2-37.8 15.3-73.7 27-106.7 19.8-56 46.9-102.9 78.4-135.5C433.5 110 472.4 91.5 512 91.5c39.6 0 78.5 18.5 112.3 53.6 31.5 32.6 58.6 79.5 78.4 135.5 11.7 33.1 20.8 69 27 106.7l2.9 17.5zm-405.6-30h370c-5.7-29.6-13.3-57.9-22.6-84.2-18.4-52-43.2-95.1-71.7-124.7-28.5-29.5-59-44.5-90.7-44.5s-62.3 15-90.7 44.5c-28.5 29.5-53.3 72.7-71.7 124.7-9.3 26.3-16.9 54.6-22.6 84.2z"></path><path d="M497 634.2h30v283.3h-30zM497 106.5h30v283.3h-30z"></path><path d="M512 341c-64.2 0-125.8-14.1-183.1-41.9-38.3-18.6-73.5-42.8-104.6-71.9l-11.7-10.9 11.7-10.9C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.6 113.8l11.7 10.9-11.7 10.9c-31.1 29.2-66.3 53.4-104.6 71.9-57.2 27.9-118.8 42-183 42zM257 216.2c25.8 22.3 54.3 41 85 55.9 53.2 25.8 110.4 38.8 170 38.8 59.6 0 116.8-13.1 170-38.9 30.7-14.8 59.2-33.6 85-55.9-70.9-61.2-160.8-94.7-255-94.7-94.2.1-184.1 33.6-255 94.8zm255 716.3c-107.3 0-209.5-40.4-287.7-113.8l-11.7-10.9 11.7-10.9c31.1-29.2 66.3-53.4 104.6-72C386.2 697.1 447.8 683 512 683c64.2 0 125.8 14.1 183.1 41.9 38.3 18.5 73.4 42.7 104.6 71.9l11.7 10.9-11.7 10.9C721.5 892.1 619.3 932.5 512 932.5zM257 807.8c70.9 61.2 160.8 94.7 255 94.7 94.2 0 184.1-33.5 255-94.7-25.8-22.3-54.3-41-85-55.9-53.2-25.8-110.4-38.9-170-38.9-59.6 0-116.8 13.1-170 38.8-30.7 14.9-59.2 33.7-85 56zm684.2-158.6H82.8c-10.8 0-19.6-8.8-19.6-19.6V394.4c0-10.8 8.8-19.6 19.6-19.6h858.5c10.8 0 19.6 8.8 19.6 19.6v235.3c-.1 10.7-8.9 19.5-19.7 19.5zm-848-30h837.6V404.8H93.2v214.4z"></path><path d="M314.1 588H282l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM804.7 588h-32.1l-39.1-88.4-39 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM559.4 588h-32.1l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM843.2 558h29.4v30h-29.4z"></path></svg>
                                                        </div>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0">dwaynestel.net</p>
                                                            <small className="text-muted">Banglore , 29 Days Left</small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge rounded-pill badge-sm bg-primary-transparent">Domain</span>
                                                </td>
                                                <td>21</td>
                                                <td><span className="badge rounded-pill badge-sm bg-warning-transparent">Pending</span></td>
                                                <td>
                                                    Marketing
                                                </td>
                                                <td>17 Jan 2024</td>
                                                <td>
                                                    <Dropdown> 
                                                        <Dropdown.Toggle variant="" aria-label="anchor" className="btn btn-primary-light btn-icon btn-sm no-caret" href="#!" data-bs-toggle="dropdown"> 
                                                            <i className="ri-more-2-fill"></i>
                                                        </Dropdown.Toggle> 
                                                        <Dropdown.Menu role="menu"> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-eye-line me-1"></i>View</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-pencil-line me-1"></i>Edit</Dropdown.Item></li> 
                                                        </Dropdown.Menu> 
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabelproducts5" value="" aria-label="..."/></td>
                                                <td>
                                                    <div className="d-flex"> 
                                                        <div className="avatar avatar-sm bg-primary-transparent">
                                                            <img src="../../../assets/images/marketplace/new-arrivals/2.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                                        </div>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0">Achlles.net</p>
                                                            <small className="text-muted">Pune , 18 Days Left</small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge rounded-pill badge-sm bg-danger-transparent">Website</span>
                                                </td>
                                                <td>19</td>
                                                <td><span className="badge rounded-pill badge-sm bg-success-transparent">Active</span></td>
                                                <td>
                                                    Hosting
                                                </td>
                                                <td>23 Dec 2022</td>
                                                <td>
                                                    <Dropdown> 
                                                        <Dropdown.Toggle variant="" aria-label="anchor" className="btn btn-primary-light btn-icon btn-sm no-caret" href="#!" data-bs-toggle="dropdown"> 
                                                            <i className="ri-more-2-fill"></i>
                                                        </Dropdown.Toggle> 
                                                        <Dropdown.Menu role="menu"> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-eye-line me-1"></i>View</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-pencil-line me-1"></i>Edit</Dropdown.Item></li> 
                                                        </Dropdown.Menu> 
                                                    </Dropdown>
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
                                        <Pagination className="mb-0 overflow-auto">
                                            <Pagination.Item disabled> Previous</Pagination.Item>
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
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    Recent Registered Users
                                </Card.Title>
                                <Dropdown className="custom-dropdown">
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 no-caret border-0 d-inline text-muted" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <table className="table text-nowrap table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">User Name</th>
                                                <th scope="col">Plan</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded me-2">
                                                                <img src="../../../assets/images/faces/4.jpg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="align-items-center">
                                                            <p className="mb-0 fw-semibold">Amanda Nanes
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Verified User</Tooltip>}>
                                                                <i className="bi bi-patch-check-fill text-success ms-2"></i>
                                                            </OverlayTrigger>
                                                            </p>
                                                            <span className="fs-13 text-muted">amandananes@</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span className="badge bg-warning-transparent"><i className="ri-vip-crown-2-line"></i> Basic</span></td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Button>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                                                        <i className="ri-edit-line"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded me-2">
                                                                <img src="../../../assets/images/faces/15.jpg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="align-items-center">
                                                            <p className="mb-0 fw-semibold">Charles Achilles 
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Verified User</Tooltip>}>
                                                                    <i className="bi bi-patch-check-fill text-success ms-2"></i>
                                                                </OverlayTrigger>
                                                            </p>
                                                            <span className="fs-13 text-muted">@charlesachilles</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span className="badge bg-danger-transparent"><i className="ri-vip-crown-2-line"></i> Premium</span></td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Button>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                                                        <i className="ri-edit-line"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded me-2">
                                                                <img src="../../../assets/images/faces/12.jpg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="align-items-center">
                                                            <p className="mb-0 fw-semibold">Jack Miller
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Verified User</Tooltip>}>
                                                                    <i className="bi bi-patch-check-fill text-success ms-2"></i>
                                                                </OverlayTrigger>
                                                            </p>
                                                            <span className="fs-13 text-muted">@jackmiller</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span className="badge bg-info-transparent"><i className="ri-vip-crown-2-line"></i> Pro</span></td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Button>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                                                        <i className="ri-edit-line"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded me-2">
                                                                <img src="../../../assets/images/faces/5.jpg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="align-items-center">
                                                            <p className="mb-0 fw-semibold">Julia Camo
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Verified User</Tooltip>}>
                                                                    <i className="bi bi-patch-check-fill text-success ms-2"></i>
                                                                </OverlayTrigger>
                                                            </p>
                                                            <span className="fs-13 text-muted">@juliacamo</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span className="badge bg-warning-transparent"><i className="ri-vip-crown-2-line"></i> Basic</span></td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Button>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                                                        <i className="ri-edit-line"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                            <Card.Footer className="border-top-0">
                                <Pagination className="mb-0 overflow-auto justify-content-end">
                                    <Pagination.Item disabled>Previous</Pagination.Item>  
                                    <Pagination.Item active>1</Pagination.Item>
                                    <Pagination.Item>2</Pagination.Item>
                                    <Pagination.Item>3</Pagination.Item>
                                    <Pagination.Item>4</Pagination.Item>
                                    <Pagination.Item className="pagination-next">next</Pagination.Item>
                                </Pagination>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                {/* End::row-3 */}
    </Fragment>
    )
};

export default Admin;