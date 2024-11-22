"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Dropdown, ListGroup, Pagination, Row, Table } from "react-bootstrap";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Analyticsdata from '@/shared/data/dashboards/analyticsdata';
import Seo from "@/shared/layout-components/seo/seo";
const Analytics = () => {
return (
<Fragment>
           {/*  Start::page-header */}
           <Seo title={"Analytics"} />
           <Pageheader Heading="Analytics" Pages={[{title:"Dashboards", active:true}, {title:"Analytics", active:false},]} />
                {/*  End::page-header */}

                {/*  Start:: row-1 */}
                <Row>
                    <Col xxl={3} xl={3} lg={6} md={6} sm={6} className="col-12">
                        <Card className="custom-card">
                            <Card.Body className="p-4">
                                <div className="d-flex align-items-start justify-content-between">
                                    <div className="main-card-icon primary">
                                        <div className="avatar avatar-lg bg-primary-transparent border border-primary border-opacity-10">
                                            <div className="avatar avatar-sm svg-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="84" cy="108" r="52" opacity="0.2"/><path d="M10.23,200a88,88,0,0,1,147.54,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M172,160a87.93,87.93,0,0,1,73.77,40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="84" cy="108" r="52" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M152.69,59.7A52,52,0,1,1,172,160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <Dropdown className="custom-dropdown"> 
                                        <Dropdown.Toggle variant="" className="no-caret pe-0" aria-label="anchor" href="#!" data-bs-toggle="dropdown"> 
                                            <i className="ri-more-2-fill fs-5 text-muted"></i>
                                        </Dropdown.Toggle> 
                                        <Dropdown.Menu role="menu"> 
                                            <li><Dropdown.Item>Week</Dropdown.Item></li> 
                                            <li><Dropdown.Item>Day</Dropdown.Item></li> 
                                            <li><Dropdown.Item>Year</Dropdown.Item></li> 
                                        </Dropdown.Menu> 
                                    </Dropdown>
                                </div>
                                <span className="d-block mt-3 mb-2 fw-medium">Total Users</span>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="fs-4 mb-0 lh-1">872</h5>
                                    <span className="badge bg-success-transparent">
                                        +0.45%
                                    </span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={3} lg={6} md={6} sm={6} className="col-12">
                        <Card className="custom-card">
                            <Card.Body className="p-4">
                                <div className="d-flex align-items-start justify-content-between">
                                    <div className="main-card-icon secondary">
                                        <div className="avatar avatar-lg bg-secondary-transparent border border-secondary border-opacity-10">
                                            <div className="avatar avatar-sm svg-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="136" r="88" opacity="0.2"/><circle cx="128" cy="136" r="88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="136" x2="168" y2="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="104" y1="16" x2="152" y2="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <Dropdown className="custom-dropdown"> 
                                        <Dropdown.Toggle variant="" className="no-caret pe-0" aria-label="anchor" href="#!" data-bs-toggle="dropdown"> 
                                            <i className="ri-more-2-fill fs-5 text-muted"></i>
                                        </Dropdown.Toggle> 
                                        <Dropdown.Menu role="menu"> 
                                            <li><Dropdown.Item>Week</Dropdown.Item></li> 
                                            <li><Dropdown.Item>Day</Dropdown.Item></li> 
                                            <li><Dropdown.Item>Year</Dropdown.Item></li> 
                                        </Dropdown.Menu> 
                                    </Dropdown>
                                </div>
                                <span className="d-block mt-3 mb-2 fw-medium">Sessions</span>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="fs-4 mb-0 lh-1">2,178</h5>
                                    <span className="badge bg-success-transparent">
                                        +1.02%
                                    </span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={3} lg={6} md={6} sm={6} className="col-12">
                        <Card className="custom-card">
                            <Card.Body className="p-4">
                                <div className="d-flex align-items-start justify-content-between">
                                    <div className="main-card-icon success">
                                        <div className="avatar avatar-lg bg-success-transparent border border-success border-opacity-10">
                                            <div className="avatar avatar-sm svg-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="76" cy="76" r="28" opacity="0.2"/><circle cx="180" cy="180" r="28" opacity="0.2"/><line x1="200" y1="56" x2="56" y2="200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="76" cy="76" r="28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="180" cy="180" r="28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <Dropdown className="custom-dropdown"> 
                                        <Dropdown.Toggle variant="" className="no-caret pe-0" aria-label="anchor" href="#!" data-bs-toggle="dropdown"> 
                                            <i className="ri-more-2-fill fs-5 text-muted"></i>
                                        </Dropdown.Toggle> 
                                        <Dropdown.Menu role="menu"> 
                                            <li><Dropdown.Item>Week</Dropdown.Item></li> 
                                            <li><Dropdown.Item>Day</Dropdown.Item></li> 
                                            <li><Dropdown.Item>Year</Dropdown.Item></li> 
                                        </Dropdown.Menu> 
                                    </Dropdown>
                                </div>
                                <span className="d-block mt-3 mb-2 fw-medium">Bounce Rate</span>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="fs-4 mb-0 lh-1">48.46%</h5>
                                    <span className="badge bg-danger-transparent">
                                        -0.89%
                                    </span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={3} lg={6} md={6} sm={6} className="col-12">
                        <Card className="custom-card">
                            <Card.Body className="p-4">
                                <div className="d-flex align-items-start justify-content-between">
                                    <div className="main-card-icon orange">
                                        <div className="avatar avatar-lg bg-orange-transparent border border-orange border-opacity-10">
                                            <div className="avatar avatar-sm svg-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.64A8,8,0,0,1,188.82,82L128,128h0" opacity="0.2"/><path d="M128,128,67.2,173.6A8,8,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.36a8,8,0,0,0-3.18-6.38L128,128h0" opacity="0.2"/><path d="M128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.64A8,8,0,0,1,188.82,82L128,128h0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M128,128,67.2,173.6A8,8,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.36a8,8,0,0,0-3.18-6.38L128,128h0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <Dropdown className="custom-dropdown"> 
                                        <Dropdown.Toggle variant="" aria-label="anchor" className="no-caret  pe-0" href="#!" data-bs-toggle="dropdown"> 
                                            <i className="ri-more-2-fill fs-5 text-muted"></i>
                                        </Dropdown.Toggle> 
                                        <Dropdown.Menu role="menu"> 
                                            <li><Dropdown.Item>Week</Dropdown.Item></li> 
                                            <li><Dropdown.Item>Day</Dropdown.Item></li> 
                                            <li><Dropdown.Item>Year</Dropdown.Item></li> 
                                        </Dropdown.Menu> 
                                    </Dropdown>
                                </div>
                                <span className="d-block mt-3 mb-2 fw-medium">Avg Session Duration</span>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="fs-4 mb-0 lh-1">4.5 min</h5>
                                    <span className="badge bg-success-transparent">
                                        +11.07%
                                    </span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*  End:: row-1 */}

                {/*  Start:: row-2 */}
                <Row>
                    <Col xl={8}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    SESSIONS OVERVIEW
                                </Card.Title>
                                <Dropdown> 
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 text-muted no-caret  border-0 d-inline" data-bs-toggle="dropdown" aria-expanded="true"> Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </Dropdown.Toggle> 
                                    <Dropdown.Menu role="menu"
                                    //  style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 28px);" 
                                     data-popper-placement="bottom-end"> 
                                        <li><Dropdown.Item>This Week</Dropdown.Item></li>
                                         <li><Dropdown.Item>Last Week</Dropdown.Item></li> 
                                         <li><Dropdown.Item>This Month</Dropdown.Item></li> 
                                    </Dropdown.Menu> 
                                </Dropdown>
                            </Card.Header>
                            <Card.Body>
                                <div id="sessions-overview">
                                    <ReactApexChart options={Analyticsdata.Sessionoverview.options} series={Analyticsdata.Sessionoverview.series} type="bar" width={"100%"} height={330} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    EARNINGS REPORT
                                </Card.Title>
                                <Dropdown> 
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 text-muted no-caret  border-0 d-inline" data-bs-toggle="dropdown" aria-expanded="true"> Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </Dropdown.Toggle> 
                                    <Dropdown.Menu role="menu"
                                      data-popper-placement="bottom-end"> 
                                        <li><Dropdown.Item>This Week</Dropdown.Item></li>
                                         <li><Dropdown.Item>Last Week</Dropdown.Item></li> 
                                         <li><Dropdown.Item>This Month</Dropdown.Item></li> 
                                    </Dropdown.Menu> 
                                </Dropdown>
                            </Card.Header>
                            <Card.Body>
                                <div id="analytics-earnings-report">
                                    <ReactApexChart options={Analyticsdata.Earningsreport.options} series={Analyticsdata.Earningsreport.series} type="bar" width={"100%"} height={330} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*  End:: row-2 */}

                {/*  Start:: row-3 */}
                <Row>
                    <Col xl={4}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title> 
                                    SESSIONS DEVICE
                                </Card.Title>
                                <Dropdown> 
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 text-muted no-caret  border-0 d-inline" data-bs-toggle="dropdown" aria-expanded="true"> Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </Dropdown.Toggle> 
                                    <Dropdown.Menu role="menu"data-popper-placement="bottom-end"> 
                                        <li><Dropdown.Item>This Week</Dropdown.Item></li>
                                         <li><Dropdown.Item>Last Week</Dropdown.Item></li> 
                                         <li><Dropdown.Item>This Month</Dropdown.Item></li> 
                                    </Dropdown.Menu> 
                                </Dropdown>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <span className="d-block p-3 text-muted fs-12">Experience a remarkable surge in user engagement over the past week</span>
                                <div id="sessions-device">
                                    <ReactApexChart options={Analyticsdata.Sessionsdevice.options} series={Analyticsdata.Sessionsdevice.series} type="donut" width={"100%"} height={194} />
                                </div>
                                <ListGroup className="list-group-flush border-top mt-3">
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-start justify-content-between">
                                            <div className="session-type lh-1 mobile">
                                                <div className="fw-medium mb-1">Mobile</div>
                                                <span className="fs-12 text-muted">Increased By<span className="text-success fs-12 ms-1 fw-medium d-inline-block">1.67%</span></span>
                                            </div>
                                            <div className="lh-1 text-end">
                                                <span className="d-block fs-12 text-muted mb-1">Total</span>
                                                <span className="d-block fw-semibold mb-0">1,754</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-start justify-content-between">
                                            <div className="session-type lh-1 tablet">
                                                <div className="fw-medium mb-1">Tablet</div>
                                                <span className="fs-12 text-muted">Increased By<span className="text-success fs-12 ms-1 fw-medium d-inline-block">0.46%</span></span>
                                            </div>
                                            <div className="lh-1 text-end">
                                                <span className="d-block fs-12 text-muted mb-1">Total</span>
                                                <span className="d-block fw-semibold mb-0">1234</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-start justify-content-between">
                                            <div className="session-type desktop lh-1">
                                                <div className="fw-medium mb-1">Desktop</div>
                                                <span className="fs-12 text-muted">Decresed By<span className="text-danger fs-12 ms-1 fw-medium d-inline-block">3.43%</span></span>
                                            </div>
                                            <div className="lh-1 text-end">
                                                <span className="d-block fs-12 text-muted mb-1">Total</span>
                                                <span className="d-block fw-semibold mb-0">878</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={8}>
                        <Row>
                            <Col xxl={6} xl={6} lg={6} md={12} sm={12} className="">
                                <Card className="custom-card overflow-hidden">
                                    <Card.Header>
                                        <Card.Title>
                                            Browser Statistics
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body className="p-0">
                                        <div className="table-responsive">
                                            <Table className="table text-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th>Browser</th>
                                                        <th className="text-center">Sessions</th>
                                                        <th className="text-center">Bounce Rate</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <div>
                                                                    <span className="avatar avatar-rounded avatar-md p-1 bg-light border border-warning border-opacity-10">
                                                                        <img src="../../assets/images/browsers/chrome.png" alt=""/>
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className="fw-medium">Google</span>
                                                                    <span className="d-block text-muted fs-12">Google,Inc</span>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td className="text-center">1215</td>
                                                        <td className="text-center">29.52%</td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <div>
                                                                    <span className="avatar avatar-rounded avatar-md p-1 bg-light border border-warning border-opacity-10">
                                                                        <img src="../../assets/images/browsers/edge.png" alt=""/>
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className="fw-medium">Edge</span>
                                                                    <span className="d-block text-muted fs-12">Microsoft Corp,Inc</span>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td className="text-center">978</td>
                                                        <td className="text-center">24.79%</td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <div>
                                                                    <span className="avatar avatar-rounded avatar-md p-1 bg-light border border-warning border-opacity-10">
                                                                        <img src="../../assets/images/browsers/firefox.png" alt=""/>
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className="fw-medium">Firefox</span>
                                                                    <span className="d-block text-muted fs-12">Mozilla,Inc</span>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td className="text-center">815</td>
                                                        <td className="text-center">35.06%</td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <div>
                                                                    <span className="avatar avatar-rounded avatar-md p-1 bg-light border border-warning border-opacity-10">
                                                                        <img src="../../assets/images/browsers/opera.png" alt=""/>
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className="fw-medium">Opera</span>
                                                                    <span className="d-block text-muted fs-12">Opera,Inc</span>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td className="text-center">1347</td>
                                                        <td className="text-center">27.91%</td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <div>
                                                                    <span className="avatar avatar-rounded avatar-md p-1 bg-light border border-warning border-opacity-10">
                                                                        <img src="../../assets/images/browsers/safari.png" alt=""/>
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className="fw-medium">Safari</span>
                                                                    <span className="d-block text-muted fs-12">Apple Corp,Inc</span>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td className="text-center">1123</td>
                                                        <td className="text-center">39.13%</td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <div>
                                                                    <span className="avatar avatar-rounded avatar-md p-1 bg-light border border-warning border-opacity-10">
                                                                        <img src="../../assets/images/browsers/uc.png" alt=""/>
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <span className="fw-medium">Uc Browser</span>
                                                                    <span className="d-block text-muted fs-12">Uc Browser,Inc</span>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td className="text-center">1189</td>
                                                        <td className="text-center">28.94%</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={6} xl={6} lg={6} md={12} sm={12} className="">
                                <Row>
                                    <Col xxl={6} xl={6} lg={6} md={12} sm={12} className="">
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <div className="mb-4 d-flex align-items-start justify-content-between flex-wrap">
                                                    <div>
                                                        <span className="fs-12 d-block mb-2 text-muted">Impressions</span> 
                                                        <h4 className="mb-0">9,763<span className="text-success fs-12 ms-2 d-inline-flex"><i className="ti ti-trending-up align-middle me-1"></i>0.14%</span></h4>  
                                                    </div>
                                                    <Dropdown> 
                                                        <Dropdown.Toggle variant="" className="no-caret p-0  border-0 d-inline" aria-label="anchor" href="#!" data-bs-toggle="dropdown"> 
                                                            <i className="ri-more-2-fill fs-5 text-muted"></i>
                                                        </Dropdown.Toggle> 
                                                        <Dropdown.Menu role="menu"> 
                                                            <li><Dropdown.Item>Day</Dropdown.Item></li>
                                                            <li><Dropdown.Item>Week</Dropdown.Item></li> 
                                                            <li><Dropdown.Item>Year</Dropdown.Item></li> 
                                                        </Dropdown.Menu> 
                                                    </Dropdown>
                                                </div>
                                                <div id="impressions">
                                                     <ReactApexChart options={Analyticsdata.Impression.options} series={Analyticsdata.Impression.series} type="area" width={"100%"} height={50} />
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={12} sm={12} className="">
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <div className="mb-4 d-flex align-items-start justify-content-between flex-wrap">
                                                    <div>
                                                        <span className="fs-12 d-block mb-2 text-muted">New Subscribers</span> 
                                                        <h4 className="mb-0">13,278<span className="text-success fs-12 ms-2 d-inline-flex"><i className="ti ti-trending-up align-middle me-1"></i>0.25%</span></h4>  
                                                    </div>
                                                    <Dropdown> 
                                                        <Dropdown.Toggle variant="" aria-label="anchor" href="#!" className="no-caret p-0  border-0 d-inline" data-bs-toggle="dropdown"> 
                                                            <i className="ri-more-2-fill fs-5 text-muted"></i>
                                                        </Dropdown.Toggle> 
                                                        <Dropdown.Menu role="menu"> 
                                                            <li><Dropdown.Item>Day</Dropdown.Item></li>
                                                            <li><Dropdown.Item>Week</Dropdown.Item></li> 
                                                            <li><Dropdown.Item>Year</Dropdown.Item></li> 
                                                        </Dropdown.Menu> 
                                                    </Dropdown>
                                                </div>
                                                <div id="new-subscribers">
                                                   <ReactApexChart options={Analyticsdata.Newsubscriber.options} series={Analyticsdata.Newsubscriber.series} type="line" width={"100%"} height={50} />
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} className="">
                                        <Card className="custom-card">
                                            <Card.Header className="justify-content-between">
                                                <Card.Title>VISITORS BY BROWSER</Card.Title>
                                                <Dropdown> 
                                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 text-muted no-caret  border-0 d-inline" data-bs-toggle="dropdown" aria-expanded="true"> Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </Dropdown.Toggle> 
                                                    <Dropdown.Menu role="menu" 
                                                    // style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 28px);"
                                                     data-popper-placement="bottom-end"> 
                                                        <li><Dropdown.Item>This Week</Dropdown.Item></li>
                                                         <li><Dropdown.Item>Last Week</Dropdown.Item></li> 
                                                         <li><Dropdown.Item>This Month</Dropdown.Item></li> 
                                                    </Dropdown.Menu> 
                                                </Dropdown>
                                            </Card.Header>
                                            <Card.Body>
                                                <div id="views-browser">
                                                    <ReactApexChart options={Analyticsdata.Visitors.options} series={Analyticsdata.Visitors.series} type="radar" width={"100%"} height={195} />
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/*  End:: row-3 */}

                {/*  Start:: row-4 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    CAMPAIGN ANALYTICS
                                </Card.Title>
                                <div className="d-flex flex-wrap gap-2"> 
                                    <div> 
                                        <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example"/> 
                                    </div> 
                                    <Dropdown> 
                                        <Dropdown.Toggle variant="" href="#!" className="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false"> Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> 
                                        </Dropdown.Toggle> 
                                        <Dropdown.Menu role="menu"> 
                                            <li><Dropdown.Item>New</Dropdown.Item></li> 
                                            <li><Dropdown.Item>Popular</Dropdown.Item></li> 
                                            <li><Dropdown.Item>Relevant</Dropdown.Item></li> 
                                        </Dropdown.Menu> 
                                    </Dropdown> 
                                </div>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th className="text-center"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob1" value="" aria-label="..."/></th>
                                                <th scope="col">Website</th>
                                                <th scope="col">Clicks</th>
                                                <th scope="col">Impressions</th>
                                                <th scope="col">CTR</th>
                                                <th scope="col">Amount Spent</th>
                                                <th scope="col">Cost Per Click</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob2" value="" aria-label="..."/></td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm bg-danger-transparent">
                                                            <i className="ti ti-brand-youtube fs-16"></i>
                                                        </span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold fs-13 mb-0 d-flex align-items-center"><Link scroll={false} href="#!">Youtube</Link></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    1.4K
                                                </td>
                                                <td>143.4K</td>
                                                <td>
                                                    <span className="badge bg-primary-transparent">9.21%</span>
                                                </td>
                                                <td>
                                                    $1.278K
                                                </td>
                                                <td>
                                                   $0.267
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <button className="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                            <i className="ri-eye-line"></i>
                                                        </button>
                                                        <button className="btn btn-sm btn-icon btn-secondary-light btn-wave">
                                                            <i className="ri-edit-line"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob3" value="" aria-label="..." defaultChecked/></td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm bg-primary-transparent">
                                                            <i className="ti ti-brand-facebook fs-16"></i>
                                                        </span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold fs-13 mb-0 d-flex align-items-center"><Link scroll={false} href="#!">Facebook</Link></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    2.68K
                                                </td>
                                                <td>121.8K</td>
                                                <td>
                                                    <span className="badge bg-success-transparent">5.24%</span>
                                                </td>
                                                <td>
                                                    $2.873K
                                                </td>
                                                <td>
                                                   $0.790
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <button className="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                            <i className="ri-eye-line"></i>
                                                        </button>
                                                        <button className="btn btn-sm btn-icon btn-secondary-light btn-wave">
                                                            <i className="ri-edit-line"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob6" value="" aria-label="..."/></td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm bg-success-transparent">
                                                            <i className="ti ti-brand-snapchat fs-16"></i>
                                                        </span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold fs-13 mb-0 d-flex align-items-center"><Link scroll={false} href="#!">Snapchat</Link></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    1.56K
                                                </td>
                                                <td>155.1K</td>
                                                <td>
                                                    <span className="badge bg-success-transparent">4.89%</span>
                                                </td>
                                                <td>
                                                    $3.344K
                                                </td>
                                                <td>
                                                   $1.656
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <button className="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                            <i className="ri-eye-line"></i>
                                                        </button>
                                                        <button className="btn btn-sm btn-icon btn-secondary-light btn-wave">
                                                            <i className="ri-edit-line"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob4" value="" aria-label="..."/></td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm bg-secondary-transparent">
                                                            <i className="ti ti-brand-instagram fs-16"></i>
                                                        </span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold fs-13 mb-0 d-flex align-items-center"><Link scroll={false} href="#!">Instagram</Link></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    6.67K
                                                </td>
                                                <td>178.3K</td>
                                                <td>
                                                    <span className="badge bg-secondary-transparent">7.46%</span>
                                                </td>
                                                <td>
                                                    $3.783K
                                                </td>
                                                <td>
                                                   $1.076
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <button className="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                            <i className="ri-eye-line"></i>
                                                        </button>
                                                        <button className="btn btn-sm btn-icon btn-secondary-light btn-wave">
                                                            <i className="ri-edit-line"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob5" value="" aria-label="..." defaultChecked/></td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm bg-info-transparent">
                                                            <i className="ti ti-brand-linkedin fs-16"></i>
                                                        </span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold fs-13 mb-0 d-flex align-items-center"><Link scroll={false} href="#!">LinkedIn</Link></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    3.21K
                                                </td>
                                                <td>116.2K</td>
                                                <td>
                                                    <span className="badge bg-warning-transparent">1.75%</span>
                                                </td>
                                                <td>
                                                    $2.138K
                                                </td>
                                                <td>
                                                   $0.242
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <button className="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                            <i className="ri-eye-line"></i>
                                                        </button>
                                                        <button className="btn btn-sm btn-icon btn-secondary-light btn-wave">
                                                            <i className="ri-edit-line"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob7" value="" aria-label="..."/></td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm bg-warning-transparent">
                                                            <i className="ti ti-brand-reddit fs-16"></i>
                                                        </span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold fs-13 mb-0 d-flex align-items-center"><Link scroll={false} href="#!">Reddit</Link></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    1.63K
                                                </td>
                                                <td>157.2K</td>
                                                <td>
                                                    <span className="badge bg-warning-transparent">4.85%</span>
                                                </td>
                                                <td>
                                                    $4.532K
                                                </td>
                                                <td>
                                                   $1.435
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <button className="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                            <i className="ri-eye-line"></i>
                                                        </button>
                                                        <button className="btn btn-sm btn-icon btn-secondary-light btn-wave">
                                                            <i className="ri-edit-line"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                            <Card.Footer className="border-top-0"> 
                                <div className="d-flex align-items-center"> 
                                    <div> Showing 6 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
                                    <div className="ms-auto"> 
                                    <nav aria-label="Page navigation" className="pagination-style-4"> 
                                        <Pagination className=" mb-0"> 
                                                <Pagination.Item disabled>Prev</Pagination.Item>
                                                <Pagination.Item  active>1</Pagination.Item> 
                                                <Pagination.Item>2</Pagination.Item> 
                                                <Pagination.Item className="pagination-next"> next </Pagination.Item> 
                                            </Pagination> 
                                        </nav> 
                                    </div> 
                                </div> 
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                {/*  End:: row-4 */}
</Fragment>
);
};

export default Analytics;