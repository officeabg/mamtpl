"use client"
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, Nav, Pagination, ProgressBar, Row, Tab } from "react-bootstrap";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Projectdata from '@/shared/data/dashboards/projectsdata'
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Projects = () => {
return (
<Fragment>
                {/*  Start::page-header */}
                    <Seo title={"Projects"} />
                    <Pageheader Heading="Projects" Pages={[{title:"Dashboards", active:true}, {title:"Projects", active:false},]} />
                {/*  End::page-header */}

                {/*  Start:: row-1 */}
                <Row>
                    <Col xxl={9} xl={12}>
                        <Row>
                            <Col xxl={6} xl={6} lg={6}>
                                <Card className="custom-card project-card overflow-hidden">
                                    <Card.Header className="bg-primary p-4 align-items-start overflow-hidden">
                                        <div>
                                            <div className="card-title fs-5 mb-2 text-fixed-white">
                                                <svg className="upcoming-icon me-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M8.04492,22a.99922.99922,0,0,1-.96533-1.25879L8.88574,14H5.04541a1.00007,1.00007,0,0,1-.96582-1.25879l2.67969-10A.99954.99954,0,0,1,7.7251,2h7a1.00008,1.00008,0,0,1,.96582,1.25879L14.42041,8h4.53418a1,1,0,0,1,.73975,1.67285l-10.90918,12A.99947.99947,0,0,1,8.04492,22Z"></path>
                                            </svg>PROJECT ANALYSIS</div>
                                            <span className="subtitle text-fixed-white">
                                                Welcome to deashboard you can manage all your project activities here
                                            </span>
                                        </div>
                                    </Card.Header>
                                    <Card.Body className="project-cardbody">
                                        <Row>
                                            <Col xl={12}>
                                                <Card className="custom-card card-bg-light shadow-none border-0 mb-3">
                                                    <Card.Body className="p-0">
                                                        <div className="row g-0">
                                                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} className="col-12 project-analysis-border">
                                                                <div className="p-4">
                                                                    <div className="d-flex align-items-start">
                                                                        <span className="svg-primary">
                                                                            <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                                                                                <path opacity="0.5" d="M12,14.5c-3.26461,0.00094-6.4876-0.73267-9.43018-2.14648C2.22156,12.18802,1.99974,11.83676,2,11.45117V9.5c0.00181-1.65611,1.34389-2.99819,3-3h14c1.65611,0.00181,2.99819,1.34389,3,3v1.95215c0.00003,0.3859-0.22189,0.73741-0.57031,0.90332C18.48677,13.76762,15.26418,14.50051,12,14.5z M21,11.45215L21,11.45215z"></path>
                                                                                <path opacity="1" d="M10,6.5v-1c0.00055-0.55206,0.44794-0.99945,1-1h2c0.55206,0.00055,0.99945,0.44794,1,1v1h2v-1c-0.00183-1.65613-1.34387-2.99817-3-3h-2c-1.65613,0.00183-2.99817,1.34387-3,3v1H10z"></path>
                                                                                <path opacity="0.2" d="M21.42969,12.35547C18.48676,13.76764,15.26416,14.50049,12,14.5c-3.26459,0.00092-6.48761-0.73267-9.43018-2.14648C2.22156,12.18805,1.99976,11.83673,2,11.45117V18.5c0.00183,1.65613,1.34387,2.99817,3,3h14c1.65613-0.00183,2.99817-1.34387,3-3v-7.04785C22.00006,11.83807,21.77814,12.18958,21.42969,12.35547z"></path>
                                                                            </svg>
                                                                        </span>
                                                                        <Dropdown className="ms-auto mt-1 custom-dropdown">
                                                                            <Dropdown.Toggle variant=""  href="#!" className="text-muted no-caret" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <i className="ri-more-fill fs-5 lh-1"></i>
                                                                            </Dropdown.Toggle>
                                                                            <Dropdown.Menu className="dropdown-menu-start">
                                                                                <Dropdown.Item href="#!">
                                                                                    <i className="ri-share-forward-line me-2"></i>Share
                                                                                </Dropdown.Item>
                                                                                <Dropdown.Item href="#!">
                                                                                    <i className="ri-download-2-line me-2"></i>Download
                                                                                </Dropdown.Item>
                                                                                <Dropdown.Item href="#!">
                                                                                    <i className="ri-delete-bin-7-line me-2"></i>Delete
                                                                                </Dropdown.Item>
                                                                            </Dropdown.Menu>
                                                                        </Dropdown>
                                                                    </div>
                                                                    <span className="d-block fw-medium mt-3">Total Projects</span>
                                                                    <div className="d-flex align-items-center mt-3 gap-3 lh-1 flex-wrap"><h4 className="fw-medium mb-0 lh-1">34,876</h4><span className="badge bg-primary-transparent">10.2%</span></div>
                                                                </div>
                                                            </Col>
                                                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} className="col-12">
                                                                <div className="p-4">
                                                                    <div className="d-flex align-items-start">
                                                                        <span className="svg-secondary">
                                                                            <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                                                <path opacity="0.5" d="M21.30285,10.07813A2.99076,2.99076,0,0,0,18.99963,9H14.44006l.484-1.29663a4.31847,4.31847,0,0,0,.16034-2.6919A4.13089,4.13089,0,0,0,11.113,2a1.00364,1.00364,0,0,0-.91705.59375L7.34887,9.0022V22H17.726a3.00077,3.00077,0,0,0,2.95233-2.46387l1.273-7A2.98989,2.98989,0,0,0,21.30285,10.07813Z"></path>
                                                                                <path opacity="1" d="M7.34985,9H5.00012a3.00328,3.00328,0,0,0-3,3v7a3.00328,3.00328,0,0,0,3,3H7.34887V9.0022Z"></path>
                                                                            </svg>
                                                                        </span>
                                                                        <Dropdown className="ms-auto dropdown mt-1 custom-dropdown">
                                                                            <Dropdown.Toggle variant=""  href="#!" className="text-muted no-caret" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <i className="ri-more-fill fs-5 lh-1"></i>
                                                                            </Dropdown.Toggle>
                                                                            <Dropdown.Menu className="dropdown-menu-start">
                                                                                <Dropdown.Item href="#!">
                                                                                    <i className="ri-share-forward-line me-2"></i>Share
                                                                                </Dropdown.Item>
                                                                                <Dropdown.Item href="#!">
                                                                                    <i className="ri-download-2-line me-2"></i>Download
                                                                                </Dropdown.Item>
                                                                                <Dropdown.Item href="#!">
                                                                                    <i className="ri-delete-bin-7-line me-2"></i>Delete
                                                                                </Dropdown.Item>
                                                                            </Dropdown.Menu>
                                                                        </Dropdown>
                                                                    </div>
                                                                    <span className="d-block fw-medium mt-3">Completed</span>
                                                                    <div className="d-flex align-items-center mt-3 gap-3 lh-1 flex-wrap"><h4 className="fw-medium mb-0 lh-1">26,231</h4><span className="badge bg-secondary-transparent">5.3%</span></div>
                                                                </div>
                                                            </Col>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xl={12}>
                                                <Card className="custom-card card-bg-light shadow-none border-0 mb-0">
                                                    <Card.Body className="p-0">
                                                        <Row className="g-0">
                                                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} className="col-12 project-analysis-border">
                                                                <div className="p-4">
                                                                    <div className="d-flex align-items-start">
                                                                        <span className="svg-success">
                                                                            <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                                                <path opacity="0.5" d="M9.24268,18.0003H5a.99974.99974,0,0,1-1-1V12.75713a.99928.99928,0,0,1,.293-.707l9.75976-9.75684a.99965.99965,0,0,1,1.41407,0L19.707,6.53252a.99962.99962,0,0,1,0,1.41406L9.94971,17.70733A1.00014,1.00014,0,0,1,9.24268,18.0003Z"></path>
                                                                                <path opacity="1" d="M15.4668 2.29326a.99965.99965 0 0 0-1.41407 0L10.51318 5.83172l5.65387 5.6538.00629-.004L19.707 7.94658a.99962.99962 0 0 0 0-1.41406zM21 22.0003H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2z"></path>
                                                                            </svg>
                                                                        </span>
                                                                        <Dropdown className="ms-auto mt-1 custom-dropdown">
                                                                            <Dropdown.Toggle variant=""  href="#!" className="text-muted no-caret" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <i className="ri-more-fill fs-5 lh-1"></i>
                                                                            </Dropdown.Toggle>
                                                                            <Dropdown.Menu className="dropdown-menu dropdown-menu-start">
                                                                                <Dropdown.Item href="#!">
                                                                                    <i className="ri-share-forward-line me-2"></i>Share
                                                                                </Dropdown.Item>
                                                                                <Dropdown.Item href="#!">
                                                                                    <i className="ri-download-2-line me-2"></i>Download
                                                                                </Dropdown.Item>
                                                                                <Dropdown.Item href="#!">
                                                                                    <i className="ri-delete-bin-7-line me-2"></i>Delete
                                                                                </Dropdown.Item>
                                                                            </Dropdown.Menu>
                                                                        </Dropdown>
                                                                    </div>
                                                                    <span className="d-block fw-medium mt-3">Pending</span>
                                                                    <div className="d-flex align-items-center mt-3 gap-3 lh-1 flex-wrap"><h4 className="fw-medium mb-0 lh-1">8,645</h4><span className="badge bg-success-transparent">2.1%</span></div>
                                                                </div>
                                                            </Col>
                                                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} className="col-12">
                                                                <div className="p-4">
                                                                    <div className="d-flex align-items-start">
                                                                        <span className="svg-orange">
                                                                            <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                                                <path opacity="0.5" d="M19,21.5H5a3.00328,3.00328,0,0,1-3-3V5.5a3.00328,3.00328,0,0,1,3-3H9.55859A2.99629,2.99629,0,0,1,12.4043,4.55078L12.7207,5.5H19a3.00328,3.00328,0,0,1,3,3v10A3.00328,3.00328,0,0,1,19,21.5Z"></path>
                                                                                <path opacity="1" d="M14,12.5H13v-1a1,1,0,0,0-2,0v1H10a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0v-1h1a1,1,0,0,0,0-2Z"></path>
                                                                            </svg>
                                                                        </span>
                                                                        <Dropdown className="ms-auto dropdown mt-1 custom-dropdown">
                                                                            <Dropdown.Toggle variant="" href="#!" className="text-muted no-caret" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <i className="ri-more-fill fs-5 lh-1"></i>
                                                                            </Dropdown.Toggle>
                                                                            <Dropdown.Menu className="dropdown-menu dropdown-menu-start">
                                                                                <Dropdown.Item href="#!">
                                                                                    <i className="ri-share-forward-line me-2"></i>Share
                                                                                </Dropdown.Item>
                                                                                <Dropdown.Item href="#!">
                                                                                    <i className="ri-download-2-line me-2"></i>Download
                                                                                </Dropdown.Item>
                                                                                <Dropdown.Item href="#!">
                                                                                    <i className="ri-delete-bin-7-line me-2"></i>Delete
                                                                                </Dropdown.Item>
                                                                            </Dropdown.Menu>
                                                                        </Dropdown>
                                                                    </div>
                                                                    <span className="d-block fw-medium mt-3">New Projects</span>
                                                                    <div className="d-flex align-items-center mt-3 gap-3 lh-1 flex-wrap"><h4 className="fw-medium mb-0 lh-1">3,579</h4><span className="badge bg-orange-transparent">7.8%</span></div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={6} xl={6} lg={6}>
                                <Card className="custom-card">
                                    <Card.Header className="justify-content-between">
                                        <Card.Title>PROJECT STATISTICS</Card.Title>
                                        <Dropdown> 
                                            <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 text-muted no-caret border-0 d-inline" data-bs-toggle="dropdown" aria-expanded="true"> Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </Dropdown.Toggle> 
                                            <Dropdown.Menu role="menu" data-popper-placement="bottom-end"> 
                                                <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                                 <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li> 
                                                 <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li> 
                                            </Dropdown.Menu> 
                                        </Dropdown>
                                    </Card.Header>
                                    <Card.Body>
                                        <div id="project-statistics">
                                            <ReactApexChart options={Projectdata.Projectstatistics.options} series={Projectdata.Projectstatistics.series} type="line" width={"100%"} height={385} />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xxl={3} xl={12}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header>
                                <Card.Title>
                                    TASK ACTIVITY
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div id="task-activity" className="p-3 border-bottom">
                                    <ReactApexChart options={Projectdata.Taskactivity.options} series={Projectdata.Taskactivity.series} type="donut" width={"100%"} height={280} />
                                </div>
                                <div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <div className="d-flex align-items-start justify-content-between">
                                                <div className="task-activity-type lh-1 ongoing">
                                                    <div className="fw-medium mb-1">On Going Tasks</div>
                                                    <span className="fs-12 text-muted">Increased By<span className="text-success fs-12 ms-1 fw-medium d-inline-block">1.67%</span></span>
                                                </div>
                                                <div className="lh-1 text-end">
                                                    <span className="d-block fs-12 text-muted mb-1">Total</span>
                                                    <span className="d-block fw-semibold mb-0">1,754</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex align-items-start justify-content-between">
                                                <div className="task-activity-type lh-1 completed">
                                                    <div className="fw-medium mb-1">Completed Tasks</div>
                                                    <span className="fs-12 text-muted">Increased By<span className="text-success fs-12 ms-1 fw-medium d-inline-block">0.46%</span></span>
                                                </div>
                                                <div className="lh-1 text-end">
                                                    <span className="d-block fs-12 text-muted mb-1">Total</span>
                                                    <span className="d-block fw-semibold mb-0">634</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex align-items-start justify-content-between">
                                                <div className="task-activity-type todo lh-1">
                                                    <div className="fw-medium mb-1">To Do Tasks</div>
                                                    <span className="fs-12 text-muted">Decresed By<span className="text-danger fs-12 ms-1 fw-medium d-inline-block">3.43%</span></span>
                                                </div>
                                                <div className="lh-1 text-end">
                                                    <span className="d-block fs-12 text-muted mb-1">Total</span>
                                                    <span className="d-block fw-semibold mb-0">878</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex align-items-start justify-content-between">
                                                <div className="task-activity-type lh-1 pending">
                                                    <div className="fw-medium mb-1">Pending Tasks</div>
                                                    <span className="fs-12 text-muted">Increased By<span className="text-success fs-12 ms-1 fw-medium d-inline-block">0.13%</span></span>
                                                </div>
                                                <div className="lh-1 text-end">
                                                    <span className="d-block fs-12 text-muted mb-1">Total</span>
                                                    <span className="d-block fw-semibold mb-0">470</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*  End:: row-1 */}

                {/*  Start:: row-2 */}
                <Row>
                    <Col xl={3}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    TODO LIST
                                </Card.Title>
                                <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                            </Card.Header>
                            <Card.Body>
                                <ul className="list-unstyled mb-0 todo-list-list">
                                    <li>
                                        <div className="d-flex">
                                            <div>
                                                <span className="avatar avatar-md avatar-rounded me-3 bg-primary-transparent svg-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M56,40H200a8,8,0,0,1,8,8V200a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24V48A8,8,0,0,1,56,40Z" opacity="0.2"/><line x1="96" y1="128" x2="160" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="96" y1="160" x2="160" y2="160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M56,40H200a8,8,0,0,1,8,8V200a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24V48A8,8,0,0,1,56,40Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="80" y1="24" x2="80" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="24" x2="128" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="176" y1="24" x2="176" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <p
                                                    className="fs-14 fw-medium d-flex align-items-center justify-content-between mb-1">
                                                    Research Phase<Link scroll={false} href="#!"
                                                        className="btn btn-sm btn-icon btn-outline-light btn-sm text-muted"><i
                                                            className="fe fe-trash-2"></i></Link></p>
                                                <ul className="list-unstyled todo-sublist">
                                                    <li className="mb-2">
                                                        <div className="form-check mb-0">
                                                            <input className="form-check-input form-checked-gray" type="checkbox" value="" id="primaryChecked"/>
                                                            <label className="form-check-label" htmlFor="primaryChecked">
                                                                Gather relevant articles
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li className="mb-2">
                                                        <div className="form-check mb-0">
                                                            <input className="form-check-input form-checked-gray" type="checkbox" value="" id="primaryChecked1"  defaultChecked/>
                                                            <label className="form-check-label" htmlFor="primaryChecked1">
                                                                Summarize key findings
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li className="mb-2">
                                                        <div className="form-check mb-0">
                                                            <input className="form-check-input form-checked-gray" type="checkbox" value="" id="primaryChecked2"  defaultChecked/>
                                                            <label className="form-check-label" htmlFor="primaryChecked2">
                                                                Consult experts
                                                            </label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex">
                                            <div>
                                                <span className="avatar avatar-md avatar-rounded me-3 bg-secondary-transparent svg-secondary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M78.7,167A79.87,79.87,0,0,1,48,104.45C47.76,61.09,82.72,25,126.07,24a80,80,0,0,1,51.34,142.9A24.3,24.3,0,0,0,168,186v6a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-6A24.11,24.11,0,0,0,78.7,167Z" opacity="0.2"/><line x1="88" y1="232" x2="168" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M78.7,167A79.87,79.87,0,0,1,48,104.45C47.76,61.09,82.72,25,126.07,24a80,80,0,0,1,51.34,142.9A24.3,24.3,0,0,0,168,186v6a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-6A24.11,24.11,0,0,0,78.7,167Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M136,56c20,3.37,36.61,20,40,40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <p
                                                    className="fs-14 fw-medium d-flex align-items-center justify-content-between mb-1">
                                                    Planning <Link scroll={false} href="#!"
                                                        className="btn btn-sm btn-icon btn-outline-light btn-sm text-muted"><i
                                                            className="fe fe-trash-2"></i></Link></p>
                                                <ul className="list-unstyled todo-sublist">
                                                    <li className="mb-2">
                                                        <div className="form-check mb-0">
                                                            <input className="form-check-input form-checked-gray" type="checkbox" value="" id="primaryChecked3"  defaultChecked />
                                                            <label className="form-check-label" htmlFor="primaryChecked3">
                                                                List major milestones
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li className="mb-2">
                                                        <div className="form-check mb-0">
                                                            <input className="form-check-input form-checked-gray" type="checkbox" value="" id="primaryChecked4" />
                                                            <label className="form-check-label" htmlFor="primaryChecked4">
                                                                Allocate time for each task
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li className="mb-0">
                                                        <div className="form-check mb-0">
                                                            <input className="form-check-input form-checked-gray" type="checkbox" value="" id="primaryChecked5" />
                                                            <label className="form-check-label" htmlFor="primaryChecked5">
                                                                Include buffer time
                                                            </label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-0">
                                        <div className="d-flex">
                                            <div>
                                                <span className="avatar avatar-md avatar-rounded me-3 bg-success-transparent svg-success">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M207.86,123.18l16.78-21a99.14,99.14,0,0,0-10.07-24.29l-26.7-3a81,81,0,0,0-6.81-6.81l-3-26.71a99.43,99.43,0,0,0-24.3-10l-21,16.77a81.59,81.59,0,0,0-9.64,0l-21-16.78A99.14,99.14,0,0,0,77.91,41.43l-3,26.7a81,81,0,0,0-6.81,6.81l-26.71,3a99.43,99.43,0,0,0-10,24.3l16.77,21a81.59,81.59,0,0,0,0,9.64l-16.78,21a99.14,99.14,0,0,0,10.07,24.29l26.7,3a81,81,0,0,0,6.81,6.81l3,26.71a99.43,99.43,0,0,0,24.3,10l21-16.77a81.59,81.59,0,0,0,9.64,0l21,16.78a99.14,99.14,0,0,0,24.29-10.07l3-26.7a81,81,0,0,0,6.81-6.81l26.71-3a99.43,99.43,0,0,0,10-24.3l-16.77-21A81.59,81.59,0,0,0,207.86,123.18ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2"/><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M41.43,178.09A99.14,99.14,0,0,1,31.36,153.8l16.78-21a81.59,81.59,0,0,1,0-9.64l-16.77-21a99.43,99.43,0,0,1,10.05-24.3l26.71-3a81,81,0,0,1,6.81-6.81l3-26.7A99.14,99.14,0,0,1,102.2,31.36l21,16.78a81.59,81.59,0,0,1,9.64,0l21-16.77a99.43,99.43,0,0,1,24.3,10.05l3,26.71a81,81,0,0,1,6.81,6.81l26.7,3a99.14,99.14,0,0,1,10.07,24.29l-16.78,21a81.59,81.59,0,0,1,0,9.64l16.77,21a99.43,99.43,0,0,1-10,24.3l-26.71,3a81,81,0,0,1-6.81,6.81l-3,26.7a99.14,99.14,0,0,1-24.29,10.07l-21-16.78a81.59,81.59,0,0,1-9.64,0l-21,16.77a99.43,99.43,0,0,1-24.3-10l-3-26.71a81,81,0,0,1-6.81-6.81Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <p
                                                    className="fs-14 fw-medium d-flex align-items-center justify-content-between mb-1">
                                                    Execution <Link scroll={false} href="#!"
                                                        className="btn btn-sm btn-icon btn-outline-light btn-sm text-muted"><i
                                                            className="fe fe-trash-2"></i></Link></p>
                                                <ul className="list-unstyled todo-sublist">
                                                    <li className="mb-2">
                                                        <div className="form-check mb-0">
                                                            <input className="form-check-input form-checked-gray" type="checkbox" value="" id="primaryChecked6"/>
                                                            <label className="form-check-label" htmlFor="primaryChecked6">
                                                                Create an outline
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li className="mb-2">
                                                        <div className="form-check mb-0">
                                                            <input className="form-check-input form-checked-gray" type="checkbox" value="" id="primaryChecked7"  defaultChecked/>
                                                            <label className="form-check-label" htmlFor="primaryChecked7">
                                                                Write content
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li className="mb-0">
                                                        <div className="form-check mb-0">
                                                            <input className="form-check-input form-checked-gray" type="checkbox" value="" id="primaryChecked8"  defaultChecked/>
                                                            <label className="form-check-label" htmlFor="primaryChecked8">
                                                                Add proper citations
                                                            </label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Tab.Container defaultActiveKey="first">
                                <Card.Header className="d-sm-flex d-block">
                                    <Card.Title>TASK LIST</Card.Title>
                                    <div className="tab-menu-heading border-0 p-0 ms-auto mt-sm-0 mt-2">
                                        <div className="tabs-menu-task me-3">
                                            <Nav className="nav nav-tabs panel-tabs-task border-0" role="tablist">
                                                <Nav.Link eventKey="first"  href="#!" className="me-1" data-bs-toggle="tab" data-bs-target="#Active" role="tab" aria-selected="true">Active Tasks</Nav.Link>
                                                <Nav.Link eventKey="second"  href="#!" data-bs-toggle="tab" data-bs-target="#Complete" role="tab" aria-selected="false">Completed Tasks</Nav.Link>
                                            </Nav>
                                        </div>
                                    </div>
                                    <div className="mt-sm-0 mt-2">
                                        <Button variant="" type="button" className="btn btn-sm btn-outline-light align-items-center d-inline-flex"><i className="ti ti-plus me-1 fw-semibold"></i>Add Task</Button>
                                    </div>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <Tab.Content className="p-0">
                                        <Tab.Pane eventKey="first" className="p-0 border-0" id="Active">
                                            <div className="table-responsive">
                                                <table className="table text-nowrap">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Task details</th>
                                                            <th scope="col">Assigned</th>
                                                            <th scope="col">Target</th>
                                                            <th scope="col">Assigned to</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><Link scroll={false} href="#!">Update client records in database</Link></td>
                                                            <td className="text-muted">12.43pm</td>
                                                            <td><span className="badge bg-primary-transparent">Today</span></td>
                                                            <td>
                                                                <div className="avatar-list-stacked mb-0">
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/2.jpg" alt="img"/>
                                                                    </span>
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/8.jpg" alt="img"/>
                                                                    </span>
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/2.jpg" alt="img"/>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><Link scroll={false} href="#!">Design logo for new product</Link></td>
                                                            <td className="text-muted">11.25am</td>
                                                            <td><span className="badge bg-secondary-transparent">Tomorrow</span></td>
                                                            <td>
                                                                <div className="avatar-list-stacked mb-0">
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/6.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/9.jpg" alt="img" />
                                                                    </span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><Link scroll={false} href="#!">Respond to customer emails promptly</Link></td>
                                                            <td className="text-muted">9.56am</td>
                                                            <td><span className="badge bg-primary-transparent">Today</span></td>
                                                            <td>
                                                                <div className="avatar-list-stacked mb-0">
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/3.jpg" alt="img"/>
                                                                    </span>
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/5.jpg" alt="img"/>
                                                                    </span>
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/10.jpg" alt="img"/>
                                                                    </span>
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/15.jpg" alt="img"/>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><Link scroll={false} href="#!">Compile weekly sales report summary</Link></td>
                                                            <td className="text-muted">8.15am</td>
                                                            <td><span className="badge bg-primary-transparent">Today</span></td>
                                                            <td>
                                                                <div className="avatar-list-stacked mb-0">
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/11.jpg" alt="img" />
                                                                    </span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><Link scroll={false} href="#!">Review and edit blog post</Link></td>
                                                            <td className="text-muted">4.20pm</td>
                                                            <td><span className="badge bg-secondary-transparent">Tomorrow</span></td>
                                                            <td>
                                                                <div className="avatar-list-stacked mb-0">
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/13.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/16.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                                    </span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><Link scroll={false} href="#!">Create social media content calendar</Link></td>
                                                            <td className="text-muted">8.29am</td>
                                                            <td><span className="badge bg-primary-transparent">Today</span></td>
                                                            <td>
                                                                <div className="avatar-list-stacked mb-0">
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/10.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/5.jpg" alt="img" />
                                                                    </span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second" className="p-0 border-0" id="Complete">
                                            <div className="table-responsive">
                                                <table className="table text-nowrap">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Task details</th>
                                                            <th scope="col">Assigned on</th>
                                                            <th scope="col">Completed</th>
                                                            <th scope="col">Assigned to</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><Link scroll={false} href="#!">Sort and file important documents</Link></td>
                                                            <td className="text-muted">24 Nov 2024</td>
                                                            <td><span className="badge bg-success">4 hrs ago</span></td>
                                                            <td>
                                                                <div className="avatar-list-stacked mb-0">
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/5.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/9.jpg" alt="img" />
                                                                    </span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><Link scroll={false} href="#!">Test website for user experience</Link></td>
                                                            <td className="text-muted">30 Nov 2024</td>
                                                            <td><span className="badge bg-success">Today</span></td>
                                                            <td>
                                                                <div className="avatar-list-stacked mb-0">
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/11.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/12.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/13.jpg" alt="img" />
                                                                    </span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><Link scroll={false} href="#!">Schedule team meeting</Link></td>
                                                            <td className="text-muted">11 Dec 2024</td>
                                                            <td><span className="badge bg-success">Yesterday</span></td>
                                                            <td>
                                                                <div className="avatar-list-stacked mb-0">
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/4.jpg" alt="img" />
                                                                    </span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><Link scroll={false} href="#!">Write brief for marketing campaign</Link></td>
                                                            <td className="text-muted">6 Dec 2024</td>
                                                            <td><span className="badge bg-success">Yesterday</span></td>
                                                            <td>
                                                                <div className="avatar-list-stacked mb-0">
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/1.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                                    </span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><Link scroll={false} href="#!">Proofread product description text</Link></td>
                                                            <td className="text-muted">8 Dec 2024</td>
                                                            <td><span className="badge bg-success">Yesterday</span></td>
                                                            <td>
                                                                <div className="avatar-list-stacked mb-0">
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/5.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/3.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/11.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/12.jpg" alt="img" />
                                                                    </span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><Link scroll={false} href="#!">Organize files on cloud storage</Link></td>
                                                            <td className="text-muted">21 Dec 2024</td>
                                                            <td><span className="badge bg-success">Today</span></td>
                                                            <td>
                                                                <div className="avatar-list-stacked mb-0">
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../assets/images/faces/1.jpg" alt="img" />
                                                                    </span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Card.Body>
                                <Card.Footer className="border-top-0">
                                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                                        <div>
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    Showing 6 Entries
                                                </div>
                                                <div className="transform-arrow ms-2">
                                                    <i className="bi bi-arrow-right fw-semibold"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <nav aria-label="Page navigation" className="pagination-style-4">
                                                <Pagination className="mb-0">
                                                    <Pagination.Item disabled >
                                                            Prev
                                                    </Pagination.Item>
                                                    <Pagination.Item active>1</Pagination.Item>
                                                    <Pagination.Item>2</Pagination.Item>
                                                    <Pagination.Item >
                                                            next
                                                    </Pagination.Item>
                                                </Pagination>
                                            </nav>
                                        </div>
                                    </div>
                                </Card.Footer>
                             </Tab.Container>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    YEARLY REVENUE
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="py-0">
                                <div id="yearly-revenue">
                                     <ReactApexChart options={Projectdata.Yearlyrevenue.options} series={Projectdata.Yearlyrevenue.series} type="bar" width={"100%"} height={375} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*  End:: row-2 */}

                {/*  Start:: row-3 */}
                <Row>
                    <Col xl={9}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    PROJECTS SUMMARY
                                </Card.Title>
                                <div className="d-flex flex-wrap gap-2"> 
                                    <div> 
                                        <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example"/> 
                                    </div> 
                                    <Dropdown> 
                                        <Dropdown.Toggle variant="" href="#!" className="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false"> Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> 
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
                                                <th scope="col">Name</th>
                                                <th scope="col">Start Date</th>
                                                <th scope="col">Progress</th>
                                                <th scope="col">Team</th>
                                                <th scope="col">Due Date</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Website Design
                                                </td>
                                                <td>
                                                    25-03-2024
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <ProgressBar className="progress progress-animate progress-xs w-100" variant="primary" now={40} striped animated  />
                                                        <div className="ms-2">40%</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                        </span>
                                                        <Link scroll={false} className="avatar avatar-xs bg-primary avatar-rounded text-fixed-white" href="#!">
                                                            +2
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    14-04-2024
                                                </td>
                                                <td>
                                                    <span className="badge bg-primary-transparent">In Progress</span>
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                            <i className="ri-edit-line"></i>
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave">
                                                            <i className="ri-delete-bin-line"></i>
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Filemanager Application
                                                </td>
                                                <td>
                                                    16-03-2024
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <ProgressBar className="progress progress-animate progress-xs w-100" variant="secondary" now={75} striped animated  />
                                                        <div className="ms-2">75%</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/1.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/12.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    24-05-2024
                                                </td>
                                                <td>
                                                    <span className="badge bg-warning-transparent">Pending</span>
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                            <i className="ri-edit-line"></i>
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave">
                                                            <i className="ri-delete-bin-line"></i>
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Chat Interface
                                                </td>
                                                <td>
                                                    28-02-2024
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                         <ProgressBar className="progress progress-animate progress-xs w-100" variant="success" now={58} striped animated  />
                                                        <div className="ms-2">58%</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/5.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/11.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    28-03-2024
                                                </td>
                                                <td>
                                                    <span className="badge bg-danger-transparent">Ongoing</span>
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                            <i className="ri-edit-line"></i>
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave">
                                                            <i className="ri-delete-bin-line"></i>
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Ecommerce Application
                                                </td>
                                                <td>
                                                    18-03-2024
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <ProgressBar className="progress progress-animate progress-xs w-100" variant="orange" now={100} striped animated  />
                                                        <div className="ms-2">100%</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/6.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/9.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/13.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    02-04-2024
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Completed</span>
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                            <i className="ri-edit-line"></i>
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave">
                                                            <i className="ri-delete-bin-line"></i>
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    HR Dashboard
                                                </td>
                                                <td>
                                                    25-03-2024
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <ProgressBar className="progress progress-animate progress-xs w-100" variant="info" now={45} striped animated  />
                                                        <div className="ms-2">45%</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/faces/10.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    27-03-2024
                                                </td>
                                                <td>
                                                    <span className="badge bg-primary-transparent">In Progress</span>
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                            <i className="ri-edit-line"></i>
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave">
                                                            <i className="ri-delete-bin-line"></i>
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                            <Card.Footer className="border-top-0">
                                <div className="d-flex align-items-center">
                                    <div>
                                        Showing 6 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                    </div>
                                    <div className="ms-auto">
                                        <nav aria-label="Page navigation" className="pagination-style-4">
                                            <Pagination className="pagination mb-0">
                                                <Pagination.Item disabled> Prev</Pagination.Item>
                                                <Pagination.Item active>1</Pagination.Item>
                                                <Pagination.Item>2</Pagination.Item>
                                                <Pagination.Item className="pagination-next">next</Pagination.Item>
                                            </Pagination>
                                        </nav>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    RECENT ACTIVITY
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <ul className="list-unstyled projects-recent-activity">
                                    <li>
                                        <span className="fw-medium d-block">Task Finished<span className="badge bg-light text-default float-end">09 feb 2024</span></span>
                                        <span className="text-muted fs-12">Adam Berry finished task on <span className="fw-medium text-primary">AngularJS Template</span></span>
                                    </li>
                                    <li>
                                        <span className="fw-medium d-block">New Comment<span className="badge bg-light text-default float-end">05 July 2024</span></span>
                                        <span className="text-muted fs-12">Victoria commented on Project <span className="fw-medium text-secondary">Ynex NuxtJS Template</span></span>
                                    </li>
                                    <li>
                                        <span className="fw-medium d-block">Deal with Client<span className="badge bg-light text-default float-end">30 Jan 2024</span></span>
                                        <span className="text-muted fs-12">Gaylord Barrett offered a <span className="fw-medium text-success">New Deal</span></span>
                                    </li>
                                    <li>
                                        <span className="fw-medium d-block">Updated Profile<span className="badge bg-light text-default float-end">12 Feb 2024</span></span>
                                        <span className="text-muted fs-12">Magnus Haynes uploaded a new <span className="fw-medium text-orange">Profile Picture</span></span>
                                    </li>
                                    <li>
                                        <span className="fw-medium d-block">Task Overdue<span className="badge bg-light text-default float-end">25 Feb 2024</span></span>
                                        <span className="text-muted fs-12">Petey Cruiser task <span className="fw-medium text-secondary">Overdue</span></span>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*  End:: row-3 */}
</Fragment>
);
};

export default Projects;