"use client"
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, Pagination, Row, Table } from "react-bootstrap";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Admindata from '@/shared/data/apps/classifieds/admindata';
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Admin = () => {
return( 
<Fragment>
    
                {/* Page Header */}
                    <Seo title={"Classifieds Admin"} />
                    <Pageheader Heading="Classifieds Admin" Pages={[{title:"Apps", active:true}, {title:"Classifieds", active:true}, {title:"Classifieds Admin", active:false},]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xxl={6} xl={12}>
                        <Row>
                            <Col sm={6}>
                                <Card className="custom-card">
                                    <Card.Body className="p-4">
                                        <div className="d-flex align-items-start gap-3">
                                            <div className="main-card-icon primary p-0">
                                                <div className="avatar avatar-lg bg-primary-transparent border border-primary border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M32,208V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V208l-32-16-32,16-32-16L96,208,64,192Z" opacity="0.2"/><line x1="80" y1="104" x2="176" y2="104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="80" y1="136" x2="176" y2="136" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M32,208V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V208l-32-16-32,16-32-16L96,208,64,192Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-fill">
                                                <div className="mb-2">Total Ads Posted</div>
                                                <div className="text-muted mb-0 fs-12 d-flex align-items-center">
                                                    <h5 className="fs-4 mb-0 flex-fill">
                                                        14,732
                                                    </h5>
                                                    <Link href="#!" scroll={false} className="text-primary fw-semibold ms-2">View All <i className="fe fe-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={6}>
                                <Card className="custom-card">
                                    <Card.Body className="p-4">
                                        <div className="d-flex align-items-start gap-3">
                                            <div className="main-card-icon secondary p-0">
                                                <div className="avatar avatar-lg bg-secondary-transparent border border-secondary border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="96" r="64" opacity="0.2"/><circle cx="128" cy="96" r="64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M32,216c19.37-33.47,54.55-56,96-56s76.63,22.53,96,56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-fill">
                                                <div className="mb-2">Total Users</div>
                                                <div className="text-muted mb-0 fs-12 d-flex align-items-center">
                                                    <h5 className="fs-4 mb-0 flex-fill">
                                                        34,732
                                                    </h5>
                                                    <Link href="#!" scroll={false} className="text-primary fw-semibold ms-2">View All <i className="fe fe-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className="custom-card overflow-hidden">
                                    <Card.Header className="justify-content-between">
                                    <Card.Title>Ads Statistics</Card.Title>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 no-caret d-inline border-0" 
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
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={4}  className="col-12">
                                            <div className="p-4 border-sm-end border-inline-end-dashed text-sm-start text-center">
                                                <p className="fs-20 fw-semibold mb-0">1,117</p>
                                                <p className="mb-0 text-muted">Total Ads</p>
                                            </div>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={4}  className="col-12">
                                            <div className="p-4 border-sm-end border-inline-end-dashed text-sm-start text-center">
                                                <p className="fs-20 fw-semibold mb-0"><span className="basic-subscription">742</span></p>
                                                <p className="mb-0 text-muted">Active Ads</p>
                                            </div>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={4}  className="col-12">
                                            <div className="p-4 text-sm-start text-center">
                                                <p className="fs-20 fw-semibold mb-0"><span className="pro-subscription">259</span></p>
                                                <p className="mb-0 text-muted">Inactive Ads</p>
                                            </div>
                                        </Col>
                                    </div>
                                    <div className="p-2" id="adsStats">
                                        <ReactApexChart options={Admindata.Adsstatistics.options} series={Admindata.Adsstatistics.series} type="line" width={"100%"} height={320} />
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
                                        <Card.Title>Ads Views</Card.Title>                                        
                                    </Card.Header>
                                    <Card.Body className="ps-0 pb-0">
                                        <div id="ads-views">
                                            <ReactApexChart options={Admindata.AdsViews.options} series={Admindata.AdsViews.series} type="line" width={"100%"} height={225} />
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card icon-overlay">
                                    <span className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="var(--primary-color)"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M20,19H4V5h16V19z" fillRule="evenodd"/><polygon fillRule="evenodd" points="19.41,10.42 17.99,9 14.82,12.17 13.41,10.75 12,12.16 14.82,15"/><rect fillRule="evenodd" height="2" width="5" x="5" y="7"/><rect fillRule="evenodd" height="2" width="5" x="5" y="11"/><rect fillRule="evenodd" height="2" width="5" x="5" y="15"/></g></g></svg>
                                    </span>
                                    <Card.Body>
                                        <div className="d-flex align-items-top">
                                            <div className="main-card-icon primary me-3">
                                                <div className="avatar avatar-lg bg-primary-transparent border border-primary border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="var(--primary-color)"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M20,19H4V5h16V19z" fillRule="evenodd"/><polygon fillRule="evenodd" points="19.41,10.42 17.99,9 14.82,12.17 13.41,10.75 12,12.16 14.82,15"/><rect fillRule="evenodd" height="2" width="5" x="5" y="7"/><rect fillRule="evenodd" height="2" width="5" x="5" y="11"/><rect fillRule="evenodd" height="2" width="5" x="5" y="15"/></g></g></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-fill">
                                                <h5 className="fw-semibold mb-1">1,116</h5>
                                                <div className="d-flex align-items-top">
                                                    <p className="mb-0 me-2">New Ads</p>
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
                                            <div className="main-card-icon secondary me-3">
                                                <div className="avatar avatar-lg bg-secondary-transparent border border-secondary border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg className="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"></path></svg>
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
                                <Card className="custom-card icon-overlay">
                                    <span className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="rgb(var(--warning-rgb))"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M23,11.99l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,11.99l2.44,2.79 l-0.34,3.7l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,11.99z M19.05,13.47l-0.56,0.65l0.08,0.85 l0.18,1.95l-1.9,0.43l-0.84,0.19l-0.44,0.74l-0.99,1.68l-1.78-0.77L12,18.85l-0.79,0.34l-1.78,0.77l-0.99-1.67l-0.44-0.74 l-0.84-0.19l-1.9-0.43l0.18-1.96l0.08-0.85l-0.56-0.65l-1.29-1.47l1.29-1.48l0.56-0.65L5.43,9.01L5.25,7.07l1.9-0.43l0.84-0.19 l0.44-0.74l0.99-1.68l1.78,0.77L12,5.14l0.79-0.34l1.78-0.77l0.99,1.68l0.44,0.74l0.84,0.19l1.9,0.43l-0.18,1.95l-0.08,0.85 l0.56,0.65l1.29,1.47L19.05,13.47z"/><polygon points="10.09,13.75 7.77,11.42 6.29,12.91 10.09,16.72 17.43,9.36 15.95,7.87"/></g></g></svg>
                                    </span>
                                    <Card.Body>
                                        <div className="d-flex align-items-top">
                                            <div className="main-card-icon success me-3">
                                                <div className="avatar avatar-lg bg-success-transparent border border-success border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="rgb(var(--warning-rgb))"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M23,11.99l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,11.99l2.44,2.79 l-0.34,3.7l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,11.99z M19.05,13.47l-0.56,0.65l0.08,0.85 l0.18,1.95l-1.9,0.43l-0.84,0.19l-0.44,0.74l-0.99,1.68l-1.78-0.77L12,18.85l-0.79,0.34l-1.78,0.77l-0.99-1.67l-0.44-0.74 l-0.84-0.19l-1.9-0.43l0.18-1.96l0.08-0.85l-0.56-0.65l-1.29-1.47l1.29-1.48l0.56-0.65L5.43,9.01L5.25,7.07l1.9-0.43l0.84-0.19 l0.44-0.74l0.99-1.68l1.78,0.77L12,5.14l0.79-0.34l1.78-0.77l0.99,1.68l0.44,0.74l0.84,0.19l1.9,0.43l-0.18,1.95l-0.08,0.85 l0.56,0.65l1.29,1.47L19.05,13.47z"/><polygon points="10.09,13.75 7.77,11.42 6.29,12.91 10.09,16.72 17.43,9.36 15.95,7.87"/></g></g></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-fill">
                                                <h5 className="fw-semibold mb-1">2,468</h5>
                                                <div className="d-flex align-items-top">
                                                    <p className="mb-0 me-2">Featured Ads</p>
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
                                        <div className="d-flex gap-3 align-items-center">
                                            <span className="avatar avatar-lg p-2 bg-white-transparent shadow-sm svg-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,11H10a2,2,0,0,1,0-4h5a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3H13V3a1,1,0,0,0-2,0V5H10a4,4,0,0,0,0,8h4a2,2,0,0,1,0,4H9a1,1,0,0,1-1-1,1,1,0,0,0-2,0,3,3,0,0,0,3,3h2v2a1,1,0,0,0,2,0V19h1a4,4,0,0,0,0-8Z"/></svg>
                                            </span>
                                            <div>
                                                <h5 className="fw-semibold d-block text-fixed-white">Total Earnings</h5>
                                                <span className="mb-0">Increase by <span className="badge bg-white-transparent">+4.2%</span> this month</span>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>  
                                <Card className="custom-card overflow-hidden">
                                    <Card.Header className="justify-content-between">
                                        <Card.Title>Top Countrywise Ads</Card.Title>
                                        <Link href="#!" scroll={false} className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                    </Card.Header>
                                    <Card.Body className="p-0">
                                        <div className="table-responsive">
                                            <table className="table text-nowrap table-country">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Country</th>
                                                        <th scope="col" className="text-center">Total Ads</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src="../../../assets/images/flags/us_flag.jpg" alt=""/>
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
                                                                        <img src="../../../assets/images/flags/french_flag.jpg" alt=""/>
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
                                                                        <img src="../../../assets/images/flags/uae_flag.jpg" alt=""/>
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
                                                                        <img src="../../../assets/images/flags/italy_flag.jpg" alt=""/>
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
                                                                        <img src="../../../assets/images/flags/mexico_flag.jpg" alt=""/>
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
                                                                        <img src="../../../assets/images/flags/spain_flag.jpg" alt=""/>
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
                                                                        <img src="../../../assets/images/flags/germany_flag.jpg" alt=""/>
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
                                                                        <img src="../../../assets/images/flags/russia_flag.jpg" alt=""/>
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
                                                                        <img src="../../../assets/images/flags/argentina_flag.jpg" alt=""/>
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
                    <Col xl={5}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    Recent Users
                                </Card.Title>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 no-caret text-muted border-0 d-inline" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <Table className="table text-nowrap table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">User Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center fw-semibold">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../assets/images/faces/4.jpg" alt="img"/>
                                                        </span>Mayor Kelly
                                                    </div>
                                                </td>
                                                <td>mayorkelly@gmail.com</td>
                                                <td><span className="badge bg-success-transparent">Active</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center fw-semibold">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../assets/images/faces/15.jpg" alt="img"/>
                                                        </span>Andrew Garfield 
                                                    </div>
                                                </td>
                                                <td>andrewgarfield@gmail.com</td>
                                                <td><span className="badge bg-success-transparent">Active</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center fw-semibold">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../assets/images/faces/11.jpg" alt="img"/>
                                                        </span>Simon Cowel
                                                    </div>
                                                </td>
                                                <td>simoncowel234@gmail.com</td>
                                                <td><span className="badge bg-success-transparent">Active</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center fw-semibold">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../assets/images/faces/8.jpg" alt="img"/>
                                                        </span>Mirinda Hers
                                                    </div>
                                                </td>
                                                <td>mirindahers@gmail.com</td>
                                                <td><span className="badge bg-danger-transparent">Deactive</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center fw-semibold">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../assets/images/faces/16.jpg" alt="img"/>
                                                        </span>Andrew Garfield 
                                                    </div>
                                                </td>
                                                <td>andrewgarfield@gmail.com</td>
                                                <td><span className="badge bg-success-transparent">Active</span></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={7}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    Recent Orders
                                </Card.Title>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 no-caret text-muted border-0 d-inline" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <Table className="table table-hover text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col">Order Id</th>
                                                <th scope="col">User</th>
                                                <th scope="col">Subscription</th>
                                                <th scope="col">Payment</th>
                                                <th scope="col">Cost</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>#19876</td>
                                                <th scope="row">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md p-1 bg-light avatar-rounded">
                                                                <img src="../../../assets/images/company-logos/4.png" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="fw-semibold mb-0">Obligation Pvt.Ltd</p>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>
                                                    <span className="">Basic</span>
                                                </td>
                                                <td>Offline</td>
                                                <td>$76.00</td> 
                                                <td><span className="badge bg-success-transparent">Paid</span></td>
                                            </tr>
                                            <tr>
                                                <td>#19376</td>
                                                <th scope="row">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md p-1 bg-light avatar-rounded">
                                                                <img src="../../../assets/images/company-logos/10.png" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="fw-semibold mb-0">Voluptatem Pvt.Ltd</p>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>
                                                    <span className="">Pro</span>
                                                </td>
                                                <td>Check</td>
                                                <td>$13.00</td>
                                                <td><span className="badge bg-success-transparent">Paid</span></td>
                                            </tr>
                                            <tr>
                                                <td>#19878</td>
                                                <th scope="row">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md p-1 bg-light avatar-rounded">
                                                                <img src="../../../assets/images/company-logos/8.png" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="fw-semibold mb-0">BloomTech.Inc</p>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>
                                                    <span className="">Basic</span>
                                                </td>
                                                <td>Credit Card</td>
                                                <td>$54.00</td>
                                                <td><span className="badge bg-warning-transparent">Unpaid</span></td>
                                            </tr>
                                            <tr>
                                                <td>#19879</td>
                                                <th scope="row">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md p-1 bg-light avatar-rounded">
                                                                <img src="../../../assets/images/company-logos/1.png" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="fw-semibold mb-0">Beatae Industries</p>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>
                                                    <span className="">Basic</span>
                                                </td>
                                                <td>Paypal</td>
                                                <td>$87.00</td> 
                                                <td><span className="badge bg-success-transparent">Paid</span></td>
                                            </tr>
                                        </tbody>
                                    </Table>
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
                                    Recent Ads
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
                                                <th scope="row" className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob1"  aria-label="..."/></th>
                                                <th scope="col">Ad Title</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Location</th>
                                                <th scope="col">Published Date</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob2"  aria-label="..."/></td>
                                                <td>
                                                    <div className="d-flex">
                                                        <span className="avatar avatar-md avatar-square bg-primary bg-opacity-10"><img src="../../../assets/images/classifieds/featured-adds/1.jpg" className="" alt="..."/></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link href="#!" scroll={false}> 4 Beds Duplex House</Link></p>
                                                            <p className="fs-12 text-muted mb-0">4-Bds - 4 Ba - 600ff3</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    RealEstate
                                                </td>
                                                <td><span className="badge rounded-pill bg-success-transparent">Active</span></td>
                                                <td>
                                                    <div className="d-inline-flex align-items-center">
                                                        <i className="ri-map-pin-fill text-info me-1 align-middle"></i>
                                                        <span className="ms-1">Germany</span>
                                                    </div>
                                                </td>
                                                <td>03 Sep 2022</td>
                                                <td>$15,000</td>
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
                                                <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob3"  aria-label="..." defaultChecked/></td>
                                                <td>
                                                    <div className="d-flex">
                                                        <span className="avatar avatar-md avatar-square bg-primary bg-opacity-10"><img src="../../../assets/images/classifieds/featured-adds/2.jpg" className="" alt="..."/></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link href="#!" scroll={false}> Cadbo Car kb43</Link></p>
                                                            <p className="fs-12 text-muted mb-0">2022 Oct 04</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Vehicle
                                                </td>
                                                <td>
                                                    <span className="badge rounded-pill bg-warning-transparent">Pending Payment</span>
                                                </td>
                                                <td>
                                                    <div className="d-inline-flex align-items-center">
                                                        <i className="ri-map-pin-fill text-info me-1 align-middle"></i>
                                                        <span className="ms-1">Canada</span>
                                                    </div>
                                                </td>
                                                <td>05 Oct 2022</td>
                                                <td>$25,000</td>
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
                                                <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob4"  aria-label="..." defaultChecked/></td>
                                                <td>
                                                    <div className="d-flex">
                                                        <span className="avatar avatar-md avatar-square bg-primary bg-opacity-10"><img src="../../../assets/images/classifieds/featured-adds/3.jpg" className="" alt="..."/></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link href="#!" scroll={false}>Smart Phone H6</Link></p>
                                                            <p className="fs-12 text-muted mb-0">2024 - 120,000km</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                   Electronics
                                                </td>
                                                <td>
                                                    <span className="badge rounded-pill bg-success-transparent">Active</span>
                                                </td>
                                                <td>
                                                    <div className="d-inline-flex align-items-center">
                                                        <i className="ri-map-pin-fill text-info me-1 align-middle"></i>
                                                        <span className="ms-1">Europe</span>
                                                    </div>
                                                </td>
                                                <td>13 Nov 2022</td>
                                                <td>$43,000</td>
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
                                                <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob55"  aria-label="..."/></td>
                                                <td>
                                                    <div className="d-flex">
                                                        <span className="avatar avatar-md avatar-square bg-primary bg-opacity-10"><img src="../../../assets/images/classifieds/featured-adds/4.jpg" className="" alt="..."/></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link href="#!" scroll={false}>Gittbos Bike Mf120</Link></p>
                                                            <p className="fs-12 text-muted mb-0">2024 - 120,000km</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Vehicle
                                                </td>
                                                <td>
                                                    <span className="badge rounded-pill bg-danger-transparent">Inactive</span>
                                                </td>
                                                <td>
                                                    <div className="d-inline-flex align-items-center">
                                                        <i className="ri-map-pin-fill text-info me-1 align-middle"></i>
                                                        <span className="ms-1">USA</span>
                                                    </div>
                                                </td>
                                                <td>15 Dec 2022</td>
                                                <td>$10,000</td>
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
                                                <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob5"  aria-label="..."/></td>
                                                <td>
                                                    <div className="d-flex">
                                                        <span className="avatar avatar-md avatar-square bg-primary bg-opacity-10"><img src="../../../assets/images/classifieds/featured-adds/5.jpg" className="" alt="..."/></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link href="#!" scroll={false}>Flap Ear Pet Dog</Link></p>
                                                            <p className="fs-12 text-muted mb-0">2024 - Mar, 21</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Pets
                                                </td>
                                                <td>
                                                    <span className="badge rounded-pill bg-danger-transparent">Active</span>
                                                </td>
                                                <td>
                                                    <div className="d-inline-flex align-items-center">
                                                        <i className="ri-map-pin-fill text-info me-1 align-middle"></i>
                                                        <span className="ms-1">Australia</span>
                                                    </div>
                                                </td>
                                                <td>23 Mar 2022</td>
                                                <td>$2500</td>
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
                                <div className="d-flex align-items-center flex-wrap overflow-auto">
                                    <div className="mb-2 mb-sm-0">
                                        Showing <b>1</b> to <b>5</b> of <b>10</b> entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                    </div>
                                    <div className="ms-auto">
                                        <Pagination className="pagination mb-0 overflow-auto">
                                            <Pagination.Item disabled>Previous</Pagination.Item>
                                            <Pagination.Item active>1</Pagination.Item>
                                            <Pagination.Item className="page-item">2</Pagination.Item>
                                            <Pagination.Item className="page-item">3</Pagination.Item>
                                            <Pagination.Item className="page-item">4</Pagination.Item>
                                            <Pagination.Item className="page-item">5</Pagination.Item>
                                            <Pagination.Item className="pagination-next">Next</Pagination.Item>
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

export default Admin;