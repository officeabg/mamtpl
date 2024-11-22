"use client"
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, OverlayTrigger, Pagination, Row, Tooltip } from "react-bootstrap";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Marketdata from '@/shared/data/apps/marketplace/marketadmindata';
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Admin = () => {
return ( 
    <Fragment>
            {/* Page Header */}
                <Seo title={"Admin"} />
                <Pageheader Heading="Admin" Pages={[{title:"Apps", active:true},{title:"Marketplace", active:true},{title:"Admin", active:false}]} />
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
                                                <div className="mb-2">Active Products</div>
                                                <div className="text-muted mb-0 fs-12 d-flex align-items-end">
                                                    <h5 className="fs-4 mb-0 flex-fill">
                                                        14,732
                                                    </h5>
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
                                        <div className="d-flex align-items-start gap-3">
                                            <div className="main-card-icon secondary p-0">
                                                <div className="avatar avatar-lg bg-secondary-transparent border border-secondary border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-fill">
                                                <div className="mb-2">Total Authors</div>
                                                <div className="text-muted mb-0 fs-12 d-flex align-items-end">
                                                    <h5 className="fs-4 mb-0 flex-fill">
                                                        34,732
                                                    </h5>
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
                                    <Card.Title>Products Overview</Card.Title>
                                    <Dropdown className="custom-dropdown">
                                        <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 no-caret text-muted border-0 d-inline" data-bs-toggle="dropdown"
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
                                            <div className="p-4 border-sm-end border-inline-end-dashed text-center">
                                                <p className="fs-20 fw-semibold mb-0">1,117</p>
                                                <p className="mb-0 text-muted">Total Products</p>
                                            </div>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={4} className="col-12">
                                            <div className="p-4 border-sm-end border-inline-end-dashed text-center">
                                                <p className="fs-20 fw-semibold mb-0">742</p>
                                                <p className="mb-0 text-muted">Total Downloads</p>
                                            </div>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={4} className="col-12">
                                            <div className="p-4 text-center">
                                                <p className="fs-20 fw-semibold mb-0">259</p>
                                                <p className="mb-0 text-muted">Rejected Products</p>
                                            </div>
                                        </Col>
                                    </div>
                                    <div className="p-2" id="products-overview">
                                        <ReactApexChart options={Marketdata.Marketoverview.options} series={Marketdata.Marketoverview.series} type="line" width={"100%"} height={345} /> 
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
                                        <div className="d-sm-flex align-items-start p-3 border-bottom">
                                            <div>
                                                <span className="avatar avatar-lg avatar-rounded online me-3">
                                                    <img src="../../../assets/images/faces/9.jpg" alt=""/>
                                                </span>
                                            </div>
                                            <div className="flex-fill main-profile-info">
                                                <h6 className="fw-semibold mb-1">Jack Miller
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Verified User</Tooltip>}>
                                                    <i className="bi bi-check-circle-fill text-success fs-14 ms-1"></i>
                                                </OverlayTrigger>
                                                </h6>
                                                <p className="mb-1">Member Since 2005</p>
                                                <Link scroll={false} href="#!" className="text-primary fw-semibold">View Profile <i className="fe fe-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                        <div className="p-4 border-bottom border-block-end-dashed">
                                            <div className="d-flex mb-0 justify-content-center">
                                                <div className="me-4">
                                                    <h6 className="fw-semibold mb-0">113</h6>
                                                    <p className="mb-0 fs-12 text-muted">Projects</p>
                                                </div>
                                                <div className="me-4">
                                                    <h6 className="fw-semibold mb-0">12.2k</h6>
                                                    <p className="mb-0 fs-12 text-muted">Followers</p>
                                                </div>
                                                <div className="me-4">
                                                    <h6 className="fw-semibold mb-0">128</h6>
                                                    <p className="mb-0 fs-12 text-muted">Following</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row row-cols-12 border-top border-block-start-dashed">
                                            <div className="col">
                                                <div className="px-3 py-4 border-end border-inline-end-dashed">
                                                    <div className="text-muted fs-12 text-center mb-1">Total Sales
                                                    </div>
                                                    <div className="d-flex justify-content-center align-items-center"> <span className="me-2 fs-20 fw-semibold">1,234</span> <span className="text-success fw-semibold fs-11"><i className="ri-arrow-up-s-fill align-middle me-1"></i>0.23%</span> 
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="px-3 py-4">
                                                    <div className="text-muted fs-12 text-center mb-1">Total Profit
                                                    </div>
                                                    <div className="d-flex justify-content-center align-items-center"> <span className="me-2 fs-20 fw-semibold">1,754</span> <span className="text-danger fw-semibold fs-11"><i className="ri-arrow-down-s-fill align-middle me-1"></i>0.11%</span> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card icon-overlay">
                                    <span className="icon svg-success">
                                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M20,19H4V5h16V19z" fillRule="evenodd"/><polygon fillRule="evenodd" points="19.41,10.42 17.99,9 14.82,12.17 13.41,10.75 12,12.16 14.82,15"/><rect fillRule="evenodd" height="2" width="5" x="5" y="7"/><rect fillRule="evenodd" height="2" width="5" x="5" y="11"/><rect fillRule="evenodd" height="2" width="5" x="5" y="15"/></g></g></svg>
                                    </span>
                                    <Card.Body className="card-body p-4">
                                        <div className="d-flex align-items-top">
                                            <div className="main-card-icon success me-3">
                                                <div className="avatar avatar-lg bg-success-transparent border border-success border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M20,19H4V5h16V19z" fillRule="evenodd"/><polygon fillRule="evenodd" points="19.41,10.42 17.99,9 14.82,12.17 13.41,10.75 12,12.16 14.82,15"/><rect fillRule="evenodd" height="2" width="5" x="5" y="7"/><rect fillRule="evenodd" height="2" width="5" x="5" y="11"/><rect fillRule="evenodd" height="2" width="5" x="5" y="15"/></g></g></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-fill">
                                                <h5 className="fw-semibold mb-1">1,116</h5>
                                                <div className="d-flex align-items-top">
                                                    <p className="mb-0 me-2 fs-13">Products Sold</p>
                                                    <div className="text-success fw-semibold"><i
                                                        className="ri-arrow-up-s-fill align-middle"></i>+0.21%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card icon-overlay">
                                    <span className="icon svg-orange">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>
                                    </span>
                                    <Card.Body className="card-body p-4">
                                        <div className="d-flex align-items-top">
                                            <div className="main-card-icon orange me-3">
                                                <div className="avatar avatar-lg bg-orange-transparent border border-orange border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M20,19H4V5h16V19z" fillRule="evenodd"/><polygon fillRule="evenodd" points="19.41,10.42 17.99,9 14.82,12.17 13.41,10.75 12,12.16 14.82,15"/><rect fillRule="evenodd" height="2" width="5" x="5" y="7"/><rect fillRule="evenodd" height="2" width="5" x="5" y="11"/><rect fillRule="evenodd" height="2" width="5" x="5" y="15"/></g></g></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-fill">
                                                <h5 className="fw-semibold mb-1">1,468</h5>
                                                <div className="d-flex align-items-top">
                                                    <p className="mb-0 me-2 fs-13">Deleted Products</p> 
                                                    <div className="text-danger fw-semibold"><i className="ri-arrow-down-s-fill align-middle"></i>-0.153%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card icon-overlay">
                                    <span className="icon svg-info">
                                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M23,11.99l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,11.99l2.44,2.79 l-0.34,3.7l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,11.99z M19.05,13.47l-0.56,0.65l0.08,0.85 l0.18,1.95l-1.9,0.43l-0.84,0.19l-0.44,0.74l-0.99,1.68l-1.78-0.77L12,18.85l-0.79,0.34l-1.78,0.77l-0.99-1.67l-0.44-0.74 l-0.84-0.19l-1.9-0.43l0.18-1.96l0.08-0.85l-0.56-0.65l-1.29-1.47l1.29-1.48l0.56-0.65L5.43,9.01L5.25,7.07l1.9-0.43l0.84-0.19 l0.44-0.74l0.99-1.68l1.78,0.77L12,5.14l0.79-0.34l1.78-0.77l0.99,1.68l0.44,0.74l0.84,0.19l1.9,0.43l-0.18,1.95l-0.08,0.85 l0.56,0.65l1.29,1.47L19.05,13.47z"/><polygon points="10.09,13.75 7.77,11.42 6.29,12.91 10.09,16.72 17.43,9.36 15.95,7.87"/></g></g></svg>
                                    </span>
                                    <Card.Body className="card-body p-4">
                                        <div className="d-flex align-items-top">
                                            <div className="main-card-icon info me-3">
                                                <div className="avatar avatar-lg bg-info-transparent border border-info border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M23,11.99l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,11.99l2.44,2.79 l-0.34,3.7l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,11.99z M19.05,13.47l-0.56,0.65l0.08,0.85 l0.18,1.95l-1.9,0.43l-0.84,0.19l-0.44,0.74l-0.99,1.68l-1.78-0.77L12,18.85l-0.79,0.34l-1.78,0.77l-0.99-1.67l-0.44-0.74 l-0.84-0.19l-1.9-0.43l0.18-1.96l0.08-0.85l-0.56-0.65l-1.29-1.47l1.29-1.48l0.56-0.65L5.43,9.01L5.25,7.07l1.9-0.43l0.84-0.19 l0.44-0.74l0.99-1.68l1.78,0.77L12,5.14l0.79-0.34l1.78-0.77l0.99,1.68l0.44,0.74l0.84,0.19l1.9,0.43l-0.18,1.95l-0.08,0.85 l0.56,0.65l1.29,1.47L19.05,13.47z"/><polygon points="10.09,13.75 7.77,11.42 6.29,12.91 10.09,16.72 17.43,9.36 15.95,7.87"/></g></g></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-fill">
                                                <h5 className="fw-semibold mb-1">2,468</h5>
                                                <div className="d-flex align-items-top">
                                                    <p className="mb-0 me-2 fs-13">Featured Products</p>
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
                                                <span className="mb-0">Increase by <span className="badge bg-white-transparent mx-1">+4.2%</span> this month</span>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>  
                                <Card className="custom-card overflow-hidden">
                                    <Card.Header className="justify-content-between">
                                        <Card.Title>Top Countries</Card.Title>
                                        <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                    </Card.Header>
                                    <Card.Body className="p-0">
                                        <div className="table-responsive">
                                            <table className="table text-nowrap table-country">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Country</th>
                                                        <th scope="col" className="text-center">Total Earnings</th>
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
                                                        <td className="text-center">$120.00</td>
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
                                                        <td className="text-center">$134.00</td>
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
                                                        <td className="text-center">$156.00</td>
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
                                                        <td className="text-center">$167.00</td>
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
                                                        <td className="text-center">$267.00</td>
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
                                                        <td className="text-center">$235.00</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src="../../../assets/images/flags/germany_flag.jpg" alt="" />
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className="fw-semibold">
                                                                        Germany
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td className="text-center">$567.00</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src="../../../assets/images/flags/russia_flag.jpg" alt="" />
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className="fw-semibold">
                                                                        Russia
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td className="text-center">$72.00</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src="../../../assets/images/flags/argentina_flag.jpg" alt="" />
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className="fw-semibold">
                                                                        Argentina
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td className="text-center">$98.00</td>
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
                    <Col xl={7}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    Top Authors
                                </Card.Title>
                                <Dropdown className="custom-dropdown">
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 no-caret text-muted" data-bs-toggle="dropdown" aria-expanded="false">
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
                                                <th scope="col">Author Name</th>
                                                <th scope="col">Items Sold</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Total Value</th>
                                                <th scope="col">Member Since</th>
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
                                                                     <i className="bi bi-patch-check-fill text-success ms-2" data-bs-toggle="tooltip" title="Verified User"></i>
                                                                </OverlayTrigger>
                                                            </p>
                                                            <span className="fs-13 text-muted">amandananes@</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="align-items-center">
                                                        <span className="fs-12 text-muted">Total Sold</span>
                                                        <p className="mb-0 mt-1 fw-semibold">18</p>
                                                    </div>
                                                </td>
                                                <td><span className="badge bg-success-transparent">Active</span></td>
                                                <td>
                                                    <div className="align-items-center">
                                                        <span className="fs-12 text-muted">Sale Value</span>
                                                        <p className="mb-0 fw-semibold">$1,982</p>
                                                    </div>
                                                </td>
                                                <td>Oct 12, 2024</td>
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
                                                                    <i className="bi bi-patch-check-fill text-success ms-2" data-bs-toggle="tooltip" title="Verified User"></i>
                                                                </OverlayTrigger>
                                                            </p>
                                                            <span className="fs-13 text-muted">@charlesachilles</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="align-items-center">
                                                        <span className="fs-12 text-muted">Total Sold</span>
                                                        <p className="mb-0 mt-1 fw-semibold">34</p>
                                                    </div>
                                                </td>
                                                <td><span className="badge bg-success-transparent">Active</span></td>
                                                <td>
                                                    <div className="align-items-center">
                                                        <span className="fs-12 text-muted">Sale Value</span>
                                                        <p className="mb-0 fw-semibold">$2,456</p>
                                                    </div>
                                                </td>
                                                <td>Dec 12, 2024</td>
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
                                                                    <i className="bi bi-patch-check-fill text-success ms-1" data-bs-toggle="tooltip" title="Verified User"></i>
                                                                </OverlayTrigger>
                                                            </p>
                                                            <span className="fs-13 text-muted">@jackmiller</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="align-items-center">
                                                        <span className="fs-12 text-muted">Total Sold</span>
                                                        <p className="mb-0 mt-1 fw-semibold">23</p>
                                                    </div>
                                                </td>
                                                <td><span className="badge bg-success-transparent">Active</span></td>
                                                <td>
                                                    <div className="align-items-center">
                                                        <span className="fs-12 text-muted">Sale Value</span>
                                                        <p className="mb-0 fw-semibold">$1,643</p>
                                                    </div>
                                                </td>
                                                <td>Oct 12, 2024</td>
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
                                                                 <i className="bi bi-patch-check-fill text-success ms-2" data-bs-toggle="tooltip" title="Verified User"></i>
                                                            </OverlayTrigger>
                                                            </p>
                                                            <span className="fs-13 text-muted">@juliacamo</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="align-items-center">
                                                        <span className="fs-12 text-muted">Total Sold</span>
                                                        <p className="mb-0 mt-1 fw-semibold">76</p>
                                                    </div>
                                                </td>
                                                <td><span className="badge bg-danger-transparent">Deactive</span></td>
                                                <td>
                                                    <div className="align-items-center">
                                                        <span className="fs-12 text-muted">Sale Value</span>
                                                        <p className="mb-0 fw-semibold">$4,982</p>
                                                    </div>
                                                </td>
                                                <td>Apr 10, 2024</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={5}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    Refund Applications
                                </Card.Title>
                                <Dropdown className="custom-dropdown">
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 no-caret text-muted" data-bs-toggle="dropdown" aria-expanded="false">
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
                                                <th scope="row">Product Name</th>
                                                <th scope="row">Customer</th>
                                                <th scope="row">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex"> 
                                                        <span className="avatar avatar-sm"><img src="../../../assets/images/marketplace/new-arrivals/1.png" className="" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">HTML Template</a></p>
                                                            <p className="badge badge-sm bg-light border text-muted mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Category">HTML</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded me-2">
                                                                <img src="../../../assets/images/faces/4.jpg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="align-items-center">
                                                            <p className="mb-0 fw-semibold">Amanda Nanes</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-check-line"></i>
                                                    </Button>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                                                        <i className="ri-close-line"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex"> 
                                                        <span className="avatar avatar-sm"><img src="../../../assets/images/marketplace/new-arrivals/2.png" className="" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">React Template</a></p>
                                                            <p className="badge badge-sm bg-light border text-muted mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Category">React</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded me-2">
                                                                <img src="../../../assets/images/faces/15.jpg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="align-items-center">
                                                            <p className="mb-0 fw-semibold">Charles Achilles</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-check-line"></i>
                                                    </Button>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                                                        <i className="ri-close-line"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex"> 
                                                        <span className="avatar avatar-sm"><img src="../../../assets/images/marketplace/new-arrivals/3.png" className="" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">PHP Template</a></p>
                                                            <p className="badge badge-sm bg-light border text-muted mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Category">PHP</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded me-2">
                                                                <img src="../../../assets/images/faces/5.jpg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="align-items-center">
                                                            <p className="mb-0 fw-semibold">Julia Camo</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-check-line"></i>
                                                    </Button>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                                                        <i className="ri-close-line"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex"> 
                                                        <span className="avatar avatar-sm"><img src="../../../assets/images/marketplace/new-arrivals/4.png" className="" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">Angular Template</a></p>
                                                            <p className="badge badge-sm bg-light border text-muted mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Category">Angular</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded me-2">
                                                                <img src="../../../assets/images/faces/12.jpg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="align-items-center">
                                                            <p className="mb-0 fw-semibold">Jack Miller</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-check-line"></i>
                                                    </Button>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                                                        <i className="ri-close-line"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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
                                    Recent Uploaded Products
                                </Card.Title>
                                <div className="d-flex flex-wrap gap-2">
                                    <div>
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
                                                <th scope="col">Product Name</th>
                                                <th scope="col">Author</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Sell</th>
                                                <th scope="col">Published Date</th>
                                                <th scope="col">Featured</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabelproducts2" value="" aria-label="..."/></td>
                                                <td>
                                                    <div className="d-flex"> 
                                                        <span className="avatar avatar-md avatar-square"><img src="../../../assets/images/marketplace/new-arrivals/1.png" className="" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">HTML Template</a></p>
                                                            <p className="fs-12 text-muted mb-0">4-Bds - 4 Ba - 600ff3</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center fw-semibold">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../assets/images/faces/4.jpg" alt="" />
                                                        </span>Mayor Kelly
                                                    </div>
                                                </td>
                                                <td>
                                                    HTML
                                                </td>
                                                <td><span className="badge rounded-pill badge-sm bg-success-transparent">Approved</span></td>
                                                <td>
                                                    30 Sales
                                                </td>
                                                <td>03 Sep 2022</td>
                                                <td><span className="badge rounded-pill badge-sm bg-success-transparent">Yes</span></td>
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
                                                <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabelproducts3" value="" aria-label="..." defaultChecked/></td>
                                                <td>
                                                    <div className="d-flex"> 
                                                        <span className="avatar avatar-md avatar-square"><img src="../../../assets/images/marketplace/new-arrivals/2.png" className="" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">React Template</a></p>
                                                            <p className="fs-12 text-muted mb-0">4-Bds - 4 Ba - 600ff3</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center fw-semibold">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../assets/images/faces/15.jpg" alt="" />
                                                        </span>Andrew Garfield 
                                                    </div>
                                                </td>
                                                <td>
                                                    React
                                                </td>
                                                <td><span className="badge rounded-pill badge-sm bg-danger-transparent">Rejected</span></td>
                                                <td>
                                                    0 Sales
                                                </td>
                                                <td>16 Nov 2022</td>
                                                <td><span className="badge rounded-pill badge-sm bg-danger-transparent">No</span></td>
                                                <td>$16,000</td>
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
                                                <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabelproducts4" value="" aria-label="..." defaultChecked/></td>
                                                <td>
                                                    <div className="d-flex"> 
                                                        <span className="avatar avatar-md avatar-square"><img src="../../../assets/images/marketplace/new-arrivals/3.png" className="" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">PHP Template</a></p>
                                                            <p className="fs-12 text-muted mb-0">4-Bds - 4 Ba - 600ff3</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center fw-semibold">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../assets/images/faces/11.jpg" alt="" />
                                                        </span>Simon Cowel
                                                    </div>
                                                </td>
                                                <td>
                                                    PHP
                                                </td>
                                                <td><span className="badge rounded-pill badge-sm bg-warning-transparent">Waiting for Approval</span></td>
                                                <td>
                                                    0 Sales
                                                </td>
                                                <td>17 Jan 2024</td>
                                                <td><span className="badge rounded-pill badge-sm bg-success-transparent">Yes</span></td>
                                                <td>$32,000</td>
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
                                                <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabelproducts5" value="" aria-label="..."/></td>
                                                <td>
                                                    <div className="d-flex"> 
                                                        <span className="avatar avatar-md avatar-square"><img src="../../../assets/images/marketplace/new-arrivals/4.png" className="" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">Angular Template</a></p>
                                                            <p className="fs-12 text-muted mb-0">4-Bds - 4 Ba - 600ff3</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center fw-semibold">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../assets/images/faces/8.jpg" alt="" />
                                                        </span>Mirinda Hers
                                                    </div>
                                                </td>
                                                <td>
                                                    Angular
                                                </td>
                                                <td><span className="badge rounded-pill badge-sm bg-success-transparent">Approved</span></td>
                                                <td>
                                                    123 Sales
                                                </td>
                                                <td>23 Dec 2022</td>
                                                <td><span className="badge rounded-pill badge-sm bg-danger-transparent">No</span></td>
                                                <td>$26,000</td>
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
                                        Showing <b>1</b> to <b>10</b> of <b>10</b> entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
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
                {/* End::row-3 */}
    </Fragment>
    )
};

export default Admin;