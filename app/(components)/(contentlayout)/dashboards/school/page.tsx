"use client"
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, ListGroup, Pagination, Row } from "react-bootstrap";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Schooldata from '@/shared/data/dashboards/schooldata'
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Select = dynamic(() => import("react-select"), { ssr: false });
const School = () => {
return (
<Fragment>
                {/*  Start::page-header */}
                    <Seo title={"School"} />
                    <Pageheader Heading="School" Pages={[{title:"Dashboards", active:true}, {title:"School", active:false},]} />
                {/*  End::page-header */}

                {/*  Start:: row-1 */}
                <Row>
                    <Col xl={9}>
                        <Row>
                            <Col xxl={3} xl={12}>
                                <Row>
                                    <div className="col-xxl-12 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <Card className="custom-card">
                                            <div className="card-body p-4">
                                                <div className="d-flex align-items-start gap-2 flex-wrap">
                                                    <div className="main-card-icon primary">
                                                        <div className="avatar avatar-lg bg-primary-transparent border border-primary border-opacity-10">
                                                            <div className="avatar avatar-sm svg-white">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="224 64 128 96 32 64 128 32 224 64" opacity="0.2"/><line x1="32" y1="64" x2="32" y2="144" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M56,216c15.7-24.08,41.11-40,72-40s56.3,15.92,72,40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><polygon points="224 64 128 96 32 64 128 32 224 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M169.34,82.22a56,56,0,1,1-82.68,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="lh-1">
                                                        <span className="d-block mb-2 fw-medium">Students</span>
                                                        <h4 className="mb-0 fw-medium mb-1">12,765</h4>
                                                        <span className="fs-11 text-muted mb-0"><span className="text-success fw-semibold">0.25%<i className="ri-arrow-up-s-line align-middle mx-1"></i></span> This Month</span>
                                                    </div>
                                                </div>
                                            </div>  
                                        </Card>
                                    </div>
                                    <div className="col-xxl-12 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <Card className="custom-card">
                                            <div className="card-body p-4">
                                                <div className="d-flex align-items-start gap-2 flex-wrap">
                                                    <div className="main-card-icon secondary">
                                                        <div className="avatar avatar-lg bg-secondary-transparent border border-secondary border-opacity-10">
                                                            <div className="avatar avatar-sm svg-white">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="96" r="48" opacity="0.2"/><circle cx="128" cy="96" r="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="128" cy="96" r="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><polyline points="176 160 176 240 127.99 216 80 240 80 160.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="lh-1">
                                                        <span className="d-block mb-2 fw-medium">Awards</span>
                                                        <h4 className="mb-1 fw-medium">45+</h4>
                                                        <span className="fs-11 text-muted mb-0"><span className="text-success fw-semibold">6.56%<i className="ri-arrow-up-s-line align-middle mx-1"></i></span> This Year</span>
                                                    </div>
                                                </div>
                                            </div>  
                                        </Card>
                                    </div>
                                    <div className="col-xxl-12 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <Card className="custom-card">
                                            <div className="card-body p-4">
                                                <div className="d-flex align-items-start gap-2 flex-wrap">
                                                    <div className="main-card-icon success">
                                                        <div className="avatar avatar-lg bg-success-transparent border border-success border-opacity-10">
                                                            <div className="avatar avatar-sm svg-white">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,128h24a40,40,0,0,1,0,80H128Z" opacity="0.2"/><path d="M128,48H112a40,40,0,0,0,0,80h16Z" opacity="0.2"/><line x1="128" y1="24" x2="128" y2="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="208" x2="128" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="lh-1">
                                                        <span className="d-block mb-2 fw-medium">Revenue</span>
                                                        <h4 className="mb-1 fw-medium">$3,24,289</h4>
                                                        <span className="fs-11 text-muted mb-0"><span className="text-danger fw-semibold">2.45%<i className="ri-arrow-down-s-line align-middle mx-1"></i></span> This Year</span>
                                                    </div>
                                                </div>
                                            </div>  
                                        </Card>
                                    </div>
                                </Row>
                            </Col>
                            <Col xxl={5} xl={6} lg={6} md={6} >
                                <Card className="custom-card">
                                    <Card.Header className="justify-content-between">
                                        <Card.Title>
                                            ATTENDANCE OVERVIEW
                                        </Card.Title>
                                        <Dropdown> 
                                            <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 text-muted no-caret d-inline border-0" data-bs-toggle="dropdown" aria-expanded="true"> Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </Dropdown.Toggle> 
                                            <Dropdown.Menu role="menu" data-popper-placement="bottom-end"> 
                                                <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                                 <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li> 
                                                 <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li> 
                                            </Dropdown.Menu> 
                                        </Dropdown>
                                    </Card.Header>
                                    <Card.Body>
                                        <div id="attendance-overview">
                                            <ReactApexChart options={Schooldata.Attendenceoverview.options} series={Schooldata.Attendenceoverview.series} type="bar" width={"100%"} height={300} />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={4} xl={6} lg={6} md={6} className="">
                                <Card className="custom-card">
                                    <Card.Header className="justify-content-between">
                                        <Card.Title>
                                            NOTICE BOARD
                                        </Card.Title>
                                        <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                    </Card.Header>
                                    <Card.Body>
                                        <ul className="list-unstyled notice-board-list">
                                            <li>
                                                <div className="d-flex align-items-start gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md bg-primary-transparent svg-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="144" r="40" opacity="0.2"/><circle cx="64" cy="88" r="32" opacity="0.2"/><circle cx="192" cy="88" r="32" opacity="0.2"/><path d="M192,120a59.91,59.91,0,0,1,48,24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M16,144a59.91,59.91,0,0,1,48-24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="128" cy="144" r="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M72,216a65,65,0,0,1,112,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M161,80a32,32,0,1,1,31,40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M64,120A32,32,0,1,1,95,80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="text-primary fw-medium fs-12">04:24PM</span>
                                                        <span className="fw-medium d-block my-1 lh-1">Office Meeting</span>
                                                        <div className="fs-12 d-flex text-muted align-items-center justify-content-between">
                                                            <span>By Jhon Doe</span>
                                                            <span><i className="ri-time-line me-1"></i>45 Mins ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-start gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md bg-secondary-transparent svg-secondary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="96" opacity="0.2"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="92" cy="108" r="12"/><circle cx="164" cy="108" r="12"/><path d="M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="text-secondary fw-medium fs-12">24 Feb 2024</span>
                                                        <span className="fw-medium d-block my-1 lh-1">Holiday</span>
                                                        <div className="fs-12 d-flex text-muted align-items-center justify-content-between">
                                                            <span>By Jhon Doe</span>
                                                            <span><i className="ri-time-line me-1"></i>2 Hrs ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-start gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md bg-success-transparent svg-success">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54a8,8,0,0,1,2.62,5.92V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z" opacity="0.2"/><path d="M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54a8,8,0,0,1,2.62,5.92V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="text-success fw-medium fs-12">15 Apr 2024 - 05 Jun 2024</span>
                                                        <span className="fw-medium d-block my-1 lh-1">Summer Holiday</span>
                                                        <div className="fs-12 d-flex text-muted align-items-center justify-content-between">
                                                            <span>By Jhon Doe</span>
                                                            <span><i className="ri-time-line me-1"></i>8 Days ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-start gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md bg-orange-transparent svg-orange">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M101.11,197.11,58.89,154.89l-18.4,50.63a7.79,7.79,0,0,0,10,10Z" opacity="0.2"/><path d="M78.09,102.09l75.82,75.82,41-14.9a7.79,7.79,0,0,0,2.85-12.84L105.83,58.29A7.79,7.79,0,0,0,93,61.14Z" opacity="0.2"/><path d="M40.49,205.52,93,61.14a7.79,7.79,0,0,1,12.84-2.85l91.88,91.88A7.79,7.79,0,0,1,194.86,163L50.48,215.51A7.79,7.79,0,0,1,40.49,205.52Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M168,72s0-24,24-24,24-24,24-24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="144" y1="16" x2="144" y2="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="216" y1="112" x2="232" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="216" y1="80" x2="240" y2="72" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="78.09" y1="102.09" x2="153.91" y2="177.91" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="101.11" y1="197.11" x2="58.89" y2="154.89" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="text-orange fw-medium fs-12">19 Dec 2024</span>
                                                        <span className="fw-medium d-block my-1 lh-1">School Anniversary</span>
                                                        <div className="fs-12 d-flex text-muted align-items-center justify-content-between">
                                                            <span>By Jhon Doe</span>
                                                            <span><i className="ri-time-line me-1"></i>12 Days ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header>
                                <Card.Title>OVERALL ATTENDANCE</Card.Title>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div id="overall-attendance" className="py-3">
                                    <ReactApexChart options={Schooldata.Overallattendence.options} series={Schooldata.Overallattendence.series} type="radialBar" width={"100%"} height={240} />
                                </div>
                                <ul className="list-group list-group-flush border-top overall-attendance-list">
                                    <li className="list-group-item boys">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <span className="fw-medium">Boys</span>
                                            <span className="fs-16 fw-medium">72%</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item girls">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <span className="fw-medium">Girls</span>
                                            <span className="fs-16 fw-medium">84%</span>
                                        </div>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*  End:: row-1 */}

                {/*  Start:: row-2 */}
                <Row>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    UPCOMING ASSIGNMENTS
                                </Card.Title>
                                <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                            </Card.Header>
                            <Card.Body>
                                <ul className="list-unstyled upcoming-assignments-list">
                                    <li>
                                        <div className="d-flex align-items-start justify-content-between">
                                            <div>
                                                <Link scroll={false} href="#!" className="fw-medium d-block mb-1">
                                                    Assignment-4
                                                </Link>
                                                <span className="text-muted fs-12 d-flex align-items-center gap-3">1,Jul 2024 - 24,Jul 2024<span className="badge bg-danger-transparent">3 Days Left</span></span>
                                            </div>
                                            <div>
                                                <Button variant="" className="btn btn-light btn-icon btn-sm"><i className="ri-arrow-right-s-line rtl-rotate"></i></Button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-start justify-content-between">
                                            <div>
                                                <Link scroll={false} href="#!" className="fw-medium d-block mb-1">
                                                    Class Test-3
                                                </Link>
                                                <span className="text-muted fs-12 d-flex align-items-center gap-3">14,Aug 2024 - 20,Aug 2024<span className="badge bg-danger-transparent">10 Days Left</span></span>
                                            </div>
                                            <div>
                                                <Button variant="" className="btn btn-light btn-icon btn-sm"><i className="ri-arrow-right-s-line rtl-rotate"></i></Button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-start justify-content-between">
                                            <div>
                                                <Link scroll={false} href="#!" className="fw-medium d-block mb-1">
                                                    Unit Test-1
                                                </Link>
                                                <span className="text-muted fs-12 d-flex align-items-center gap-3">20,Sep 2024 - 30,Sep 2024<span className="badge bg-success-transparent">2 Months Left</span></span>
                                            </div>
                                            <div>
                                                <Button variant="" className="btn btn-light btn-icon btn-sm"><i className="ri-arrow-right-s-line rtl-rotate"></i></Button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-start justify-content-between">
                                            <div>
                                                <Link scroll={false} href="#!" className="fw-medium d-block mb-1">
                                                    Assignment-5
                                                </Link>
                                                <span className="text-muted fs-12 d-flex align-items-center gap-3">1,Nov 2024 - 10,Nov 2024<span className="badge bg-success-transparent">3 Months Left</span></span>
                                            </div>
                                            <div>
                                                <Button variant="" className="btn btn-light btn-icon btn-sm"><i className="ri-arrow-right-s-line rtl-rotate"></i></Button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-start justify-content-between">
                                            <div>
                                                <Link scroll={false} href="#!" className="fw-medium d-block mb-1">
                                                    Class Test-4
                                                </Link>
                                                <span className="text-muted fs-12 d-flex align-items-center gap-3">2,Jan 2025 - 12,Jan 2024<span className="badge bg-success-transparent">4 Months Left</span></span>
                                            </div>
                                            <div>
                                                <Button variant="" className="btn btn-light btn-icon btn-sm"><i className="ri-arrow-right-s-line rtl-rotate"></i></Button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={8}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>EARNINGS REPORT</Card.Title>
                                <Dropdown> 
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 text-muted no-caret border-0 d-inline" data-bs-toggle="dropdown" aria-expanded="true"> Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </Dropdown.Toggle> 
                                    <Dropdown.Menu className="dropdown-menu" role="menu"
                                     data-popper-placement="bottom-end"> 
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                         <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li> 
                                         <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li> 
                                    </Dropdown.Menu> 
                                </Dropdown>
                            </Card.Header>
                            <Card.Body>
                                <div id="school-earnings">
                                    <ReactApexChart options={Schooldata.Earningsreport.options} series={Schooldata.Earningsreport.series} type="line" width={"100%"} height={290} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*  End:: row-2 */}

                {/*  Start:: row-3 */}
                <Row>
                    <Col xl={9}>
                        <Card className="custom-card student-marks">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    STUDENTS MARKS
                                </Card.Title>
                                <div className="d-flex align-items-center gap-2 flex-wrap students-marks">
                                    <div>
                                        <Select isSearchable  name="state" options={Schooldata.Classesdata} className="js-example-placeholder-multiple w-full js-states"
                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="All Classes" defaultValue={[Schooldata.Classesdata[0]]} 
                                        />
                                    </div>
                                    <div>
                                        <Select isSearchable name="state" options={Schooldata.Sectionsdata} className="js-example-placeholder-multiple w-full js-states"
                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="All Sections" defaultValue={[Schooldata.Sectionsdata[0]]} 
                                        />
                                    </div>
                                    <div>
                                        <Select isSearchable name="state" options={Schooldata.Subjectsdata} defaultValue={[Schooldata.Subjectsdata[0]]} className="js-example-placeholder-multiple w-full js-states"
                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                        />
                                    </div>
                                </div>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <td className="text-center">S.No</td>
                                                <td className="text-center">Student</td>
                                                <td className="text-center">ID</td>
                                                <td className="text-center">Class</td>
                                                <td className="text-center">Section</td>
                                                <td className="text-center">Marks In %</td>
                                                <td className="text-center">Marks In GPA</td>
                                                <td className="text-center">Status</td>
                                                <td className="text-center">Actions</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center">1</td>
                                                <td className="text-center">
                                                    <div className="d-flex align-items-center">
                                                        <Link scroll={false} href="#!" className="avatar avatar-xs avatar-rounded me-2">
                                                            <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                        </Link>
                                                        <Link scroll={false} href="#!">Studar Little</Link>
                                                    </div>
                                                </td>
                                                <td className="text-center">#1116</td>
                                                <td className="text-center">IX</td>
                                                <td className="text-center">B</td>
                                                <td className="text-center">75%</td>
                                                <td className="text-center">7.5</td>
                                                <td className="text-center">
                                                    <span className="badge bg-success rounded-pill">Pass</span>
                                                </td>
                                                <td className="text-center">
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="" href="#!" className="btn btn-icon btn-sm btn-light btn-wave no-caret" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <li><Dropdown.Item>Action</Dropdown.Item></li>
                                                            <li><Dropdown.Item>Another Action</Dropdown.Item></li>
                                                            <li><Dropdown.Item>Something Else Here</Dropdown.Item></li>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">2</td>
                                                <td className="text-center">
                                                    <div className="d-flex align-items-center">
                                                        <Link scroll={false} href="#!" className="avatar avatar-xs avatar-rounded me-2">
                                                            <img src="../../assets/images/faces/4.jpg" alt="img" />
                                                        </Link>
                                                        <Link scroll={false} href="#!">Ion Somer</Link>
                                                    </div>
                                                </td>
                                                <td className="text-center">#8547</td>
                                                <td className="text-center">X</td>
                                                <td className="text-center">A</td>
                                                <td className="text-center">65%</td>
                                                <td className="text-center">6.5</td>
                                                <td className="text-center">
                                                    <span className="badge bg-success rounded-pill">Pass</span>
                                                </td>
                                                <td className="text-center">
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="" href="#!" className="btn btn-icon btn-sm btn-light btn-wave no-caret" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <li><Dropdown.Item>Action</Dropdown.Item></li>
                                                            <li><Dropdown.Item>Another Action</Dropdown.Item></li>
                                                            <li><Dropdown.Item>Something Else Here</Dropdown.Item></li>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">3</td>
                                                <td className="text-center">
                                                    <div className="d-flex align-items-center">
                                                        <Link scroll={false} href="#!" className="avatar avatar-xs avatar-rounded me-2">
                                                            <img src="../../assets/images/faces/6.jpg" alt="img" />
                                                        </Link>
                                                        <Link scroll={false} href="#!">Shakira</Link>
                                                    </div>
                                                </td>
                                                <td className="text-center">#7564</td>
                                                <td className="text-center">X</td>
                                                <td className="text-center">B</td>
                                                <td className="text-center">25%</td>
                                                <td className="text-center">2.5</td>
                                                <td className="text-center">
                                                    <span className="badge bg-danger rounded-pill">Fail</span>
                                                </td>
                                                <td className="text-center">
                                                    <Dropdown>
                                                        <Dropdown.Toggle  variant="" href="#!" className="btn btn-icon btn-sm btn-light btn-wave no-caret" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <li><Dropdown.Item>Action</Dropdown.Item></li>
                                                            <li><Dropdown.Item>Another Action</Dropdown.Item></li>
                                                            <li><Dropdown.Item>Something Else Here</Dropdown.Item></li>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">4</td>
                                                <td className="text-center">
                                                    <div className="d-flex align-items-center">
                                                        <Link scroll={false} href="#!" className="avatar avatar-xs avatar-rounded me-2">
                                                            <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                        </Link>
                                                        <Link scroll={false} href="#!">Thomas Shelby</Link>
                                                    </div>
                                                </td>
                                                <td className="text-center">#1254</td>
                                                <td className="text-center">IX</td>
                                                <td className="text-center">A</td>
                                                <td className="text-center">95%</td>
                                                <td className="text-center">9.5</td>
                                                <td className="text-center">
                                                    <span className="badge bg-success rounded-pill">Pass</span>
                                                </td>
                                                <td className="text-center">
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="" href="#!" className="btn btn-icon btn-sm btn-light btn-wave no-caret" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <li><Dropdown.Item>Action</Dropdown.Item></li>
                                                            <li><Dropdown.Item>Another Action</Dropdown.Item></li>
                                                            <li><Dropdown.Item>Something Else Here</Dropdown.Item></li>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">5</td>
                                                <td className="text-center">
                                                    <div className="d-flex align-items-center">
                                                        <Link scroll={false} href="#!" className="avatar avatar-xs avatar-rounded me-2">
                                                            <img src="../../assets/images/faces/10.jpg" alt="img" />
                                                        </Link>
                                                        <Link scroll={false} href="#!">Stefan U</Link>
                                                    </div>
                                                </td>
                                                <td className="text-center">#7458</td>
                                                <td className="text-center">IX</td>
                                                <td className="text-center">B</td>
                                                <td className="text-center">62%</td>
                                                <td className="text-center">6.2</td>
                                                <td className="text-center">
                                                    <span className="badge bg-success rounded-pill">Pass</span>
                                                </td>
                                                <td className="text-center">
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="" href="#!" className="btn btn-icon btn-sm btn-light btn-wave no-caret" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <li><Dropdown.Item>Action</Dropdown.Item></li>
                                                            <li><Dropdown.Item>Another Action</Dropdown.Item></li>
                                                            <li><Dropdown.Item>Something Else Here</Dropdown.Item></li>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">6</td>
                                                <td className="text-center">
                                                    <div className="d-flex align-items-center">
                                                        <Link scroll={false} href="#!" className="avatar avatar-xs avatar-rounded me-2">
                                                            <img src="../../assets/images/faces/12.jpg" alt="img" />
                                                        </Link>
                                                        <Link scroll={false} href="#!">Michael Shreff</Link>
                                                    </div>
                                                </td>
                                                <td className="text-center">#6325</td>
                                                <td className="text-center">X</td>
                                                <td className="text-center">A</td>
                                                <td className="text-center">15%</td>
                                                <td className="text-center">1.5</td>
                                                <td className="text-center">
                                                    <span className="badge bg-danger rounded-pill">Fail</span>
                                                </td>
                                                <td className="text-center">
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="" href="#!" className="btn btn-icon btn-sm btn-light btn-wave no-caret" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <li><Dropdown.Item>Action</Dropdown.Item></li>
                                                            <li><Dropdown.Item>Another Action</Dropdown.Item></li>
                                                            <li><Dropdown.Item>Something Else Here</Dropdown.Item></li>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                            <Card.Footer className="border-top-0"> 
                                <div className="d-flex align-items-center"> 
                                    <div> Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
                                    <div className="ms-auto"> 
                                    <nav aria-label="Page navigation" className="pagination-style-4"> 
                                        <Pagination className="pagination mb-0"> 
                                            <Pagination.Item disabled>Prev</Pagination.Item>
                                                <Pagination.Item active>1</Pagination.Item> 
                                                <Pagination.Item>2</Pagination.Item> 
                                                <Pagination.Item className="pagination-next"> next</Pagination.Item> 
                                            </Pagination> 
                                        </nav> 
                                    </div> 
                                </div> 
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    TEACHERS LIST
                                </Card.Title>
                                <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-start gap-3 justify-content-between flex-wrap">
                                            <div className="lh-1">
                                                <span className="avatar avatar-sm">
                                                    <img src="../../assets/images/faces/11.jpg" alt=""/>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <Link scroll={false} href="#!" className="fw-medium">
                                                    John Smith
                                                </Link>
                                                <span className="fs-12 text-muted d-block">M.Ed</span>
                                            </div>
                                            <div className="text-primary fw-medium">
                                                Mathematics
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-start gap-3 justify-content-between flex-wrap">
                                            <div className="lh-1">
                                                <span className="avatar avatar-sm">
                                                    <img src="../../assets/images/faces/3.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <Link scroll={false} href="#!" className="fw-medium">
                                                    Mary Johnson
                                                </Link>
                                                <span className="fs-12 text-muted d-block">B.A. in English</span>
                                            </div>
                                            <div className="text-secondary fw-medium">
                                                English
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-start gap-3 justify-content-between flex-wrap">
                                            <div className="lh-1">
                                                <span className="avatar avatar-sm">
                                                    <img src="../../assets/images/faces/14.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <Link scroll={false} href="#!" className="fw-medium">
                                                    Robert Davis
                                                </Link>
                                                <span className="fs-12 text-muted d-block">Ph.D. in Science</span>
                                            </div>
                                            <div className="text-warning fw-medium">
                                                Physics
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-start gap-3 justify-content-between flex-wrap">
                                            <div className="lh-1">
                                                <span className="avatar avatar-sm">
                                                    <img src="../../assets/images/faces/7.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <Link scroll={false} href="#!" className="fw-medium">
                                                    Sarah Thompson
                                                </Link>
                                                <span className="fs-12 text-muted d-block">M.A. in History</span>
                                            </div>
                                            <div className="text-info fw-medium">
                                                History
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-start gap-3 justify-content-between flex-wrap">
                                            <div className="lh-1">
                                                <span className="avatar avatar-sm">
                                                    <img src="../../assets/images/faces/9.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <Link scroll={false} href="#!" className="fw-medium">
                                                    Michael Brown
                                                </Link>
                                                <span className="fs-12 text-muted d-block">B.Ed</span>
                                            </div>
                                            <div className="text-success fw-medium">
                                                Chemistry
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-start gap-3 justify-content-between flex-wrap">
                                            <div className="lh-1">
                                                <span className="avatar avatar-sm">
                                                    <img src="../../assets/images/faces/2.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <Link scroll={false} href="#!" className="fw-medium">
                                                    Emily Wilson
                                                </Link>
                                                <span className="fs-12 text-muted d-block">M.A. in Geography</span>
                                            </div>
                                            <div className="text-orange fw-medium">
                                                Geography
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*  End:: row-3 */}
</Fragment>
);
};

export default School;