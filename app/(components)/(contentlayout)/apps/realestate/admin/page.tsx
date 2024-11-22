"use client"
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, OverlayTrigger, Pagination, Row, Table, Tooltip } from "react-bootstrap";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Domaindata from '@/shared/data/apps/domain/domainadmindata';
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Admin = () => {
return ( 
    <Fragment>
            {/* Page Header */}
                <Seo title={"Admin"} />
                <Pageheader Heading="Admin" Pages={[{title:"Apps", active:true},{title:"Real Estate", active:true},{title:"Admin", active:false}]} />
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M216,64H176a48,48,0,0,0-96,0H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm88,168H40V80H80V96a8,8,0,0,0,16,0V80h64V96a8,8,0,0,0,16,0V80h40Z"></path></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-fill">
                                                <div className="mb-2">Active Properties</div>
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
                            <Col sm={6}>
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
                                                <div className="mb-2">Total Agents</div>
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
                                    <Card.Title>Properties Statistics</Card.Title>
                                    <Dropdown>
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
                                                <p className="mb-0 text-muted">Total Properties</p>
                                            </div>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={4} className="col-12">
                                            <div className="p-4 border-sm-end border-inline-end-dashed text-center">
                                                <p className="fs-20 fw-semibold mb-0">742</p>
                                                <p className="mb-0 text-muted">Total Sales</p>
                                            </div>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={4} className="col-12">
                                            <div className="p-4 text-center">
                                                <p className="fs-20 fw-semibold mb-0">259</p>
                                                <p className="mb-0 text-muted">Pending Properties</p>
                                            </div>
                                        </Col>
                                    </div>
                                    <div className="p-2" id="products-overview">
                                     <ReactApexChart options={Domaindata.Domainstatistics.options} series={Domaindata.Domainstatistics.series} type="line" width={"100%"} height={290} />
                                    </div>
                                </Card.Body>
                            </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xxl={6} xl={12}>
                        <Row>
                            <Col xxl={6} xl={6}>
                                <Card className="custom-card">
                                    <Card.Header className="justify-content-between">
                                        <Card.Title>Page Views</Card.Title>
                                    </Card.Header>
                                    <Card.Body className="ps-0 pb-0">
                                        <div id="page-views">
                                        <ReactApexChart options={Domaindata.Pageviews.options} series={Domaindata.Pageviews.series} type="line" width={"100%"} height={200} /> 
                                    </div>                                        
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card icon-overlay">
                                    <span className="icon svg-success">
                                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M20,19H4V5h16V19z" fillRule="evenodd"/><polygon fillRule="evenodd" points="19.41,10.42 17.99,9 14.82,12.17 13.41,10.75 12,12.16 14.82,15"/><rect fillRule="evenodd" height="2" width="5" x="5" y="7"/><rect fillRule="evenodd" height="2" width="5" x="5" y="11"/><rect fillRule="evenodd" height="2" width="5" x="5" y="15"/></g></g></svg>
                                    </span>
                                    <Card.Body>
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
                                                    <p className="mb-0 me-2">Properties Sold</p>
                                                    <div className="text-success fw-semibold"><i
                                                        className="ri-arrow-up-s-fill align-middle"></i>+0.21%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card icon-overlay">
                                    <span className="icon svg-orange">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
                                    </span>
                                    <Card.Body>
                                        <div className="d-flex align-items-top">
                                            <div className="main-card-icon orange me-3">
                                                <div className="avatar avatar-lg bg-orange-transparent border border-orange border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-fill">
                                                <h5 className="fw-semibold mb-1">1,468</h5>
                                                <div className="d-flex align-items-top">
                                                    <p className="mb-0 me-2">Expired Properties</p> 
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
                                    <Card.Body>
                                        <div className="d-flex align-items-top">
                                            <div className="main-card-icon info me-3">
                                                <div className="avatar avatar-lg bg-info-transparent border border-info border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-fill">
                                                <h5 className="fw-semibold mb-1">2,468</h5>
                                                <div className="d-flex align-items-top">
                                                    <p className="mb-0 me-2">Featured Properties</p>
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
                                            <span className="avatar avatar-lg p-2 bg-white-transparent svg-white avatar-square shadow-sm">
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
                                            <Table className="text-nowrap table-country">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Country</th>
                                                        <th scope="col" className="text-center">Total Properties</th>
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
                                                        <td className="text-center">567</td>
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
                                                        <td className="text-center">72</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
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
                                    Recent Registered Agents
                                </Card.Title>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 no-caret text-muted  border-0 d-inline" data-bs-toggle="dropdown" aria-expanded="false">
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
                                                <th scope="col">Agent Name</th>
                                                <th scope="col">No. Of Properties</th>
                                                <th scope="col">Plan</th>
                                                <th scope="col">Registered Date</th>
                                                <th scope="col">Status</th>
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
                                                <td>
                                                    12
                                                </td>
                                                <td><span className="badge bg-warning-transparent"><i className="ri-vip-crown-2-line"></i> Basic</span></td>
                                                <td>Oct 12, 2024</td>
                                                <td><span className="badge bg-success-transparent">Active</span></td>
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
                                                <td>
                                                    2
                                                </td>
                                                <td><span className="badge bg-danger-transparent"><i className="ri-vip-crown-2-line"></i> Premium</span></td>
                                                <td>Dec 12, 2024</td>
                                                <td><span className="badge bg-success-transparent">Active</span></td>
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
                                                <td>
                                                    6
                                                </td>
                                                <td><span className="badge bg-info-transparent"><i className="ri-vip-crown-2-line"></i> Pro</span></td>
                                                <td>Oct 12, 2024</td>
                                                <td><span className="badge bg-success-transparent">Active</span></td>
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
                                                    9
                                                </td>
                                                <td><span className="badge bg-warning-transparent"><i className="ri-vip-crown-2-line"></i> Basic</span></td>
                                                <td>Apr 10, 2024</td>
                                                <td><span className="badge bg-danger-transparent">Deactive</span></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={5}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    Popular Builders
                                </Card.Title>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 no-caret text-muted  border-0 d-inline" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <Table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="row">Builder Name</th>
                                                <th scope="row">Sold</th>
                                                <th scope="row">Status</th>
                                                <th scope="row">Member Since</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm p-1 me-1 bg-light avatar-rounded">
                                                            <img src="../../../assets/images/company-logos/8.png" alt="" />
                                                        </span>
                                                        <div>
                                                            <p className="fw-semibold mb-0">BloomTech.Inc</p>
                                                            <span className="fs-13 text-muted">@juliacamo</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    32
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Active</span>
                                                </td>
                                                <td>Jan 23 2022</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm p-1 me-1 bg-light avatar-rounded">
                                                            <img src="../../../assets/images/company-logos/10.png" alt="" />
                                                        </span>
                                                        <div>
                                                            <p className="fw-semibold mb-0">Voluptatem Pvt.Ltd</p>
                                                            <span className="fs-13 text-muted">@charlesachilles</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    43
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Active</span>
                                                </td>
                                                <td>Feb 04 2022</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm p-1 me-1 bg-light avatar-rounded">
                                                            <img src="../../../assets/images/company-logos/1.png" alt="" />
                                                        </span>
                                                        <div>
                                                            <p className="fw-semibold mb-0">Beatae Industries</p>
                                                            <span className="fs-13 text-muted">@jackmiller</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    26
                                                </td>
                                                <td>
                                                    <span className="badge bg-danger-transparent">Deactive</span>
                                                </td>
                                                <td>Mar 24 2022</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm p-1 me-1 bg-light avatar-rounded">
                                                            <img src="../../../assets/images/company-logos/2.png" alt="" />
                                                        </span>
                                                        <div>
                                                            <p className="fw-semibold mb-0">Obligation Pvt.Ltd</p>
                                                            <span className="fs-13 text-muted">amandananes@</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    37
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Active</span>
                                                </td>
                                                <td>Apr 30 2022</td>
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
                                    Recent Posted Properties
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
                                    <Table className="table table-hover text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="row" className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabelproducts1" value="" aria-label="..."/></th>
                                                <th scope="col">Property Name</th>
                                                <th scope="col">Agent</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Type</th>
                                                <th scope="col">Posted Date</th>
                                                <th scope="col">Location</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabelproducts2" value="" aria-label="..."/></td>
                                                <td>
                                                    <div className="d-flex"> 
                                                        <span className="avatar avatar-md avatar-square"><img src="../../../assets/images/realestate/properties/2.png" className="" alt="..."/></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!">Duplex House</Link></p>
                                                            <p className="fs-12 text-muted mb-0">5BHK Apartment</p>
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
                                                    Luxury House
                                                </td>
                                                <td><span className="badge rounded-pill badge-sm bg-success-transparent">Active</span></td>
                                                <td>
                                                    For Rent
                                                </td>
                                                <td>03 Sep 2022</td>
                                                <td>
                                                    <div className="d-inline-flex align-items-center">
                                                        <i className="ri-map-pin-fill text-muted fs-12 align-middle"></i>
                                                        <span className="ms-1">Germany</span>
                                                    </div>
                                                </td>
                                                <td className="fw-semibold">$15,000</td>
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
                                                        <span className="avatar avatar-md avatar-square"><img src="../../../assets/images/realestate/properties/4.png" className="" alt="..."/></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!">Nature House</Link></p>
                                                            <p className="fs-12 text-muted mb-0">3BHK Apartment</p>
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
                                                    Garden Villa
                                                </td>
                                                <td><span className="badge rounded-pill badge-sm bg-danger-transparent">Expired</span></td>
                                                <td>
                                                    For Sale
                                                </td>
                                                <td>16 Nov 2022</td>
                                                <td>
                                                    <div className="d-inline-flex align-items-center">
                                                        <i className="ri-map-pin-fill text-muted fs-12 align-middle"></i>
                                                        <span className="ms-1">Canada</span>
                                                    </div>
                                                </td>
                                                <td className="fw-semibold">$16,000</td>
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
                                                        <span className="avatar avatar-md avatar-square"><img src="../../../assets/images/realestate/properties/6.png" className="" alt="..."/></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!">Riddi Houses</Link></p>
                                                            <p className="fs-12 text-muted mb-0">2BHK Apartment</p>
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
                                                    Commercial
                                                </td>
                                                <td><span className="badge rounded-pill badge-sm bg-warning-transparent">Pending</span></td>
                                                <td>
                                                    For Rent
                                                </td>
                                                <td>17 Jan 2024</td>
                                                <td>
                                                    <div className="d-inline-flex align-items-center">
                                                        <i className="ri-map-pin-fill text-muted fs-12 align-middle"></i>
                                                        <span className="ms-1">Europe</span>
                                                    </div>
                                                </td>
                                                <td className="fw-semibold">$32,000</td>
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
                                                        <span className="avatar avatar-md avatar-square"><img src="../../../assets/images/realestate/properties/5.png" className="" alt="..."/></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!">Sidh Houses</Link></p>
                                                            <p className="fs-12 text-muted mb-0">4BHK Apartment</p>
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
                                                    Flats
                                                </td>
                                                <td><span className="badge rounded-pill badge-sm bg-success-transparent">Active</span></td>
                                                <td>
                                                    For Sale
                                                </td>
                                                <td>23 Dec 2022</td>
                                                <td>
                                                    <div className="d-inline-flex align-items-center">
                                                        <i className="ri-map-pin-fill text-muted fs-12 align-middle"></i>
                                                        <span className="ms-1">USA</span>
                                                    </div>
                                                </td>
                                                <td className="fw-semibold">$26,000</td>
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
                                    </Table>
                                </div>
                            </Card.Body>
                            <Card.Footer className="border-top-0">
                                <div className="d-flex align-items-center flex-wrap overflow-auto">
                                    <div className="mb-2 mb-sm-0">
                                        Showing <b>1</b> to <b>4</b> of <b>10</b> entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
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