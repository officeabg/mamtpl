"use client"
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, ListGroup, Pagination, Row } from "react-bootstrap";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Hrmdata from '@/shared/data/dashboards/hrmdata';
import Link from "next/link";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Hrm = () => {
return (
<Fragment>
                {/*  Start::page-header */}
                        <Seo title={"HRM"} />
                        <Pageheader Heading="HRM" Pages={[{title:"Dashboards", active:true}, {title:"HRM", active:false},]} />
                {/*  End::page-header */}

                {/*  Start:: row-1 */}
                <Row>
                    <Col xxl={4} xl={4} lg={12}>
                        <Row>
                            <Col xxl={6} xl={6} lg={3} md={3} sm={6}>
                                <Card className="custom-card overflow-hidden shadow-none">
                                    <Card.Body className="p-0">
                                        <div className="p-3">
                                            <div className="main-card-icon primary">
                                                <div className="avatar avatar-lg bg-primary-transparent border border-primary border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="84" cy="108" r="52" opacity="0.2"/><path d="M10.23,200a88,88,0,0,1,147.54,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M172,160a87.93,87.93,0,0,1,73.77,40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="84" cy="108" r="52" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M152.69,59.7A52,52,0,1,1,172,160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="d-block text-muted mb-2 mt-3">Total Employees</span>
                                            <h4 className="fw-medium mb-0">13,776<span className="fs-12 text-success ms-2"><i className="ri-arrow-up-s-line fs-16 align-middle me-1"></i>0.67%</span></h4>
                                        </div>
                                        <div id="total-employees">
                                            <ReactApexChart options={Hrmdata.Totalemployees.options} series={Hrmdata.Totalemployees.series} type="area" width={"100%"} height={50} />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={6} xl={6} lg={3} md={3} sm={6}>
                                <Card className="custom-card overflow-hidden shadow-none">
                                    <Card.Body className="p-0">
                                        <div className="p-3">
                                            <div className="main-card-icon secondary">
                                                <div className="avatar avatar-lg bg-secondary-transparent border border-secondary border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,32A96,96,0,0,0,63.8,199.38h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.37A96,96,0,0,0,128,32Z" opacity="0.2"/><circle cx="128" cy="120" r="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M63.8,199.37a72,72,0,0,1,128.4,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="176" y1="56" x2="224" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M222.67,112A95.92,95.92,0,1,1,144,33.33" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="d-block text-muted mb-2 mt-3">On Leave</span>
                                            <h4 className="fw-medium mb-0">545<span className="fs-12 text-danger ms-2"><i className="ri-arrow-down-s-line fs-16 align-middle me-1"></i>2.45%</span></h4>
                                        </div>
                                        <div id="employees-on-leave">
                                            <ReactApexChart options={Hrmdata.Onleave.options} series={Hrmdata.Onleave.series} type="area" width={"100%"} height={50} />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={6} xl={6} lg={3} md={3} sm={6}>
                                <Card className="custom-card overflow-hidden shadow-none">
                                    <Card.Body className="p-0">
                                        <div className="p-3">
                                            <div className="main-card-icon success">
                                                <div className="avatar avatar-lg bg-success-transparent border border-success border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="108" cy="100" r="60" opacity="0.2"/><line x1="200" y1="136" x2="248" y2="136" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="224" y1="112" x2="224" y2="160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="108" cy="100" r="60" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="d-block text-muted mb-2 mt-3">New Employees</span>
                                            <h4 className="fw-medium mb-0">1,467<span className="fs-12 text-success ms-2"><i className="ri-arrow-up-s-line fs-16 align-middle me-1"></i>1.12%</span></h4>
                                        </div>
                                        <div id="new-employees">
                                            <ReactApexChart options={Hrmdata.Newemployees.options} series={Hrmdata.Newemployees.series} type="area" width={"100%"} height={50} />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={6} xl={6} lg={3} md={3} sm={6}>
                                <Card className="custom-card overflow-hidden shadow-none">
                                    <Card.Body className="p-0">
                                        <div className="p-3">
                                            <div className="main-card-icon orange">
                                                <div className="avatar avatar-lg bg-orange-transparent border border-orange border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="108" cy="100" r="60" opacity="0.2"/><line x1="200" y1="136" x2="248" y2="136" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="108" cy="100" r="60" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="d-block text-muted mb-2 mt-3">Resigned Employees</span>
                                            <h4 className="fw-medium mb-0">435<span className="fs-12 text-success ms-2"><i className="ri-arrow-up-s-line fs-16 align-middle me-1"></i>4.98%</span></h4>
                                        </div>
                                        <div id="resigned-employees">
                                             <ReactApexChart options={Hrmdata.Resignedemployeee.options} series={Hrmdata.Resignedemployeee.series} type="area" width={"100%"} height={50} />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xxl={5} xl={5} lg={6} md={6} sm={12}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    SUBSCRIPTIONS OVERVIEW
                                </Card.Title>
                                <Dropdown> 
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 text-muted no-caret border-0 d-inline" data-bs-toggle="dropdown" aria-expanded="true"> Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </Dropdown.Toggle> 
                                    <Dropdown.Menu role="menu"
                                    //  style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 28px);"
                                      data-popper-placement="bottom-end"> 
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                         <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li> 
                                         <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li> 
                                    </Dropdown.Menu> 
                                </Dropdown>
                            </Card.Header>
                            <Card.Body className="px-0 pb-0">
                                <div id="subscriptions-overview">
                                     <ReactApexChart options={Hrmdata.Subscrptionoverview.options} series={Hrmdata.Subscrptionoverview.series} type="bar" width={"100%"} height={345} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={3} lg={6} md={6} sm={12} className="">
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    LEAVE REQUESTS
                                </Card.Title>
                                <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                            </Card.Header>
                            <Card.Body>
                                <ul className="list-unstyled hrm-leave-requests-list">
                                    <li>
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                                <div>
                                                    <span className="fw-medium">Sarah Taylor</span>
                                                    <span className="d-block text-muted fs-12">Casual Leave</span>
                                                </div>
                                                <div className="btn-list">
                                                    <Button variant="" className="btn btn-sm btn-success-light btn-icon btn-wave" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" aria-label="Accept" data-bs-original-title="Accept"><i className="ri-check-line"></i></Button>
                                                    <Button variant="" className="btn btn-sm btn-danger-light btn-icon btn-wave" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" aria-label="Reject" data-bs-original-title="Reject"><i className="ri-close-fill"></i></Button>
                                                </div>
                                            </div>
                                    </li>
                                    <li>
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                                <div>
                                                    <span className="fw-medium">John Doe </span>
                                                    <span className="d-block text-muted fs-12">Vacation Leave</span>
                                                </div>
                                                <div className="btn-list">
                                                    <Button variant="" className="btn btn-sm btn-success-light btn-icon btn-wave" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" aria-label="Accept" data-bs-original-title="Accept"><i className="ri-check-line"></i></Button>
                                                    <Button variant="" className="btn btn-sm btn-danger-light btn-icon btn-wave" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" aria-label="Reject" data-bs-original-title="Reject"><i className="ri-close-fill"></i></Button>
                                                </div>
                                            </div>
                                    </li>
                                    <li>
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                                <div>
                                                    <span className="fw-medium">Jane Smith </span>
                                                    <span className="d-block text-muted fs-12">Sick Leave</span>
                                                </div>
                                                <div className="btn-list">
                                                    <Button variant="" className="btn btn-sm btn-success-light btn-icon btn-wave" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" aria-label="Accept" data-bs-original-title="Accept"><i className="ri-check-line"></i></Button>
                                                    <Button variant="" className="btn btn-sm btn-danger-light btn-icon btn-wave" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" aria-label="Reject" data-bs-original-title="Reject"><i className="ri-close-fill"></i></Button>
                                                </div>
                                            </div>
                                    </li>
                                    <li>
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                                <div>
                                                    <span className="fw-medium">Robert White</span>
                                                    <span className="d-block text-muted fs-12">Leave On Demand</span>
                                                </div>
                                                <div className="btn-list">
                                                    <Button variant="" className="btn btn-sm btn-success-light btn-icon btn-wave" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" aria-label="Accept" data-bs-original-title="Accept"><i className="ri-check-line"></i></Button>
                                                    <Button variant="" className="btn btn-sm btn-danger-light btn-icon btn-wave" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" aria-label="Reject" data-bs-original-title="Reject"><i className="ri-close-fill"></i></Button>
                                                </div>
                                            </div>
                                    </li>
                                    <li>
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                                <div>
                                                    <span className="fw-medium">Emily Clark</span>
                                                    <span className="d-block text-muted fs-12">Casual Leave</span>
                                                </div>
                                                <div className="btn-list">
                                                    <Button variant="" className="btn btn-sm btn-success-light btn-icon btn-wave" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" aria-label="Accept" data-bs-original-title="Accept"><i className="ri-check-line"></i></Button>
                                                    <Button variant="" className="btn btn-sm btn-danger-light btn-icon btn-wave" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" aria-label="Reject" data-bs-original-title="Reject"><i className="ri-close-fill"></i></Button>
                                                </div>
                                            </div>
                                    </li>
                                    <li>
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                                <div>
                                                    <span className="fw-medium">Alex Johnson</span>
                                                    <span className="d-block text-muted fs-12">Sick Leave</span>
                                                </div>
                                                <div className="btn-list">
                                                    <Button variant="" className="btn btn-sm btn-success-light btn-icon btn-wave" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" aria-label="Accept" data-bs-original-title="Accept"><i className="ri-check-line"></i></Button>
                                                    <Button variant="" className="btn btn-sm btn-danger-light btn-icon btn-wave" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" aria-label="Reject" data-bs-original-title="Reject"><i className="ri-close-fill"></i></Button>
                                                </div>
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
                    <Col xxl={3} xl={6} lg={6} className="">
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>EVENTS LIST</Card.Title>
                                <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <ul className="list-group list-group-flush hrm-events-list">
                                    <li className="list-group-item general-event">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <span className="d-block fw-medium mb-1 text-success">Office Anniversary</span>
                                                <span className="d-block fw-medium text-muted fs-12 mb-1">19,Dec 2024 - Thursday</span>
                                                <span className="fs-11">Full Day</span>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!" className="p-1" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" aria-label="View" data-bs-original-title="View"><i className="ri-arrow-right-s-line fs-5 lh-1 rtl-rotate"></i></Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item festival">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <span className="d-block fw-medium mb-1 text-warning">Holi</span>
                                                <span className="d-block fw-medium text-muted fs-12 mb-1">10,Mar 2024 - Sunday</span>
                                                <span className="fs-11">Festival</span>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!" className="p-1" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" aria-label="View" data-bs-original-title="View"><i className="ri-arrow-right-s-line fs-5 lh-1 rtl-rotate"></i></Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item festival">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <span className="d-block fw-medium mb-1 text-warning">Good Friday</span>
                                                <span className="d-block fw-medium text-muted fs-12 mb-1">05,Apr 2024 - Friday</span>
                                                <span className="fs-11">Festival</span>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!" className="p-1" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" aria-label="View" data-bs-original-title="View"><i className="ri-arrow-right-s-line fs-5 lh-1 rtl-rotate"></i></Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item govt-holiday">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <span className="d-block fw-medium mb-1 text-danger">Independence Day</span>
                                                <span className="d-block fw-medium text-muted fs-12 mb-1">15,Aug 2024 - Thursday</span>
                                                <span className="fs-11">Government Holiday</span>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!" className="p-1" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" aria-label="View" data-bs-original-title="View"><i className="ri-arrow-right-s-line fs-5 lh-1 rtl-rotate"></i></Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} className="">
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    EMPLOYEE STATUS
                                </Card.Title>
                                <Dropdown> 
                                    <Dropdown.Toggle variant="" href="#!" className="fs-12 text-muted no-caret border-0 d-inline" data-bs-toggle="dropdown" aria-expanded="false"> Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </Dropdown.Toggle> 
                                    <Dropdown.Menu role="menu"> 
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                         <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li> 
                                         <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li> 
                                    </Dropdown.Menu> 
                                </Dropdown>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Role</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Score</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/11.jpg" alt=""/>
                                                        </span>
                                                        <span className="fw-medium">John Doe </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    Manager
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent rounded-pill min-w-badge">Active</span>
                                                </td>
                                                <td>
                                                    85
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/8.jpg" alt=""/>
                                                        </span>
                                                        <span className="fw-medium">Jane Smith</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    Developer
                                                </td>
                                                <td>
                                                    <span className="badge bg-danger-transparent rounded-pill min-w-badge">Inactive</span>
                                                </td>
                                                <td>
                                                    70
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/12.jpg" alt=""/>
                                                        </span>
                                                        <span className="fw-medium">Alex Johnson</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    HR Specialist
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent rounded-pill min-w-badge">Active</span>
                                                </td>
                                                <td>
                                                    92
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/5.jpg" alt=""/>
                                                        </span>
                                                        <span className="fw-medium">Sarah Brown </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    Analyst
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent rounded-pill min-w-badge">Active</span>
                                                </td>
                                                <td>
                                                    78
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/10.jpg" alt=""/>
                                                        </span>
                                                        <span className="fw-medium">Robert White </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    Designer
                                                </td>
                                                <td>
                                                    <span className="badge bg-danger-transparent rounded-pill min-w-badge">Inactive</span>
                                                </td>
                                                <td>
                                                    60
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-bottom-0">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../assets/images/faces/1.jpg" alt=""/>
                                                        </span>
                                                        <span className="fw-medium">Emily Clark </span>
                                                    </div>
                                                </td>
                                                <td className="border-bottom-0">
                                                    Accountant
                                                </td>
                                                <td className="border-bottom-0">
                                                    <span className="badge bg-success-transparent rounded-pill min-w-badge">Active</span>
                                                </td>
                                                <td className="border-bottom-0">
                                                    88
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} className="col-12">
                        <Card className="custom-card overflow-hidden">
                            <Card.Header>
                                <Card.Title>
                                    WORKING FORMAT
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div id="working-format" className="p-3">
                                    <ReactApexChart options={Hrmdata.Workingformat.options} series={Hrmdata.Workingformat.series} type="radialBar" width={"100%"} height={238} />
                                </div>
                                <ListGroup className="list-group list-group-flush border-top">
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-start justify-content-between">
                                            <div className="working-format-type lh-1 office">
                                                <div className="fw-medium mb-1">Office</div>
                                            </div>
                                            <div className="lh-1 text-end">
                                                <span className="d-block fw-semibold mb-0">1,754</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-start justify-content-between">
                                            <div className="working-format-type lh-1 home">
                                                <div className="fw-medium mb-1">Home</div>
                                            </div>
                                            <div className="lh-1 text-end">
                                                <span className="d-block fw-semibold mb-0">634</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-start justify-content-between">
                                            <div className="working-format-type remote lh-1">
                                                <div className="fw-medium mb-1">Remote</div>
                                            </div>
                                            <div className="lh-1 text-end">
                                                <span className="d-block fw-semibold mb-0">878</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={9} xxl={12}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>RECENT JOB REQUESTS</Card.Title>
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
                                                <th scope="row" className="text-center"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob1" value="" aria-label="..."/></th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Position</th>
                                                <th scope="col">Date</th>
                                                <th scope="col" className="text-center">Work Experience</th>
                                                <th scope="col">Skills</th>
                                                <th scope="col">Work Type</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob2" value="" aria-label="..." defaultChecked/></td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded"><img src="../../assets/images/faces/13.jpg" className="" alt="..."/></span>
                                                        </div>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold fs-13 mb-0 d-flex align-items-center"><Link scroll={false} href="#!">John Doe</Link></p>
                                                            <p className="fs-12 text-muted mb-0">johndoe213@gmail.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Software Engineer
                                                </td>
                                                <td>
                                                    2024-02-01
                                                </td>
                                                <td className="text-center">
                                                    3 years
                                                </td>
                                                <td>
                                                    <span className="badge bg-primary-transparent me-1">Java</span>
                                                    <span className="badge bg-secondary-transparent me-1">Python</span>
                                                    <span className="badge bg-warning-transparent me-1">SQL</span>
                                                    <span className="badge bg-success-transparent">Web Development</span>
                                                </td>
                                                <td>
                                                    Full-time
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light">
                                                            <i className="ri-eye-line"></i>
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light">
                                                            <i className="ri-edit-line"></i>
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob3" value="" aria-label="..."/></td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded"><img src="../../assets/images/faces/4.jpg" className="" alt="..."/></span>
                                                        </div>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold fs-13 mb-0 d-flex align-items-center"><Link scroll={false} href="#!">Jane Smith</Link></p>
                                                            <p className="fs-12 text-muted mb-0">janesmith767@gmail.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Marketing Specialist
                                                </td>
                                                <td>
                                                    2024-02-03
                                                </td>
                                                <td className="text-center">
                                                    5 years
                                                </td>
                                                <td>
                                                    <span className="badge bg-info-transparent me-1">Social Media Marketing</span>
                                                    <span className="badge bg-success-transparent me-1">SEO</span>
                                                    <span className="badge bg-orange-transparent">Analytics</span>
                                                </td>
                                                <td>
                                                    Part-time
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light">
                                                            <i className="ri-eye-line"></i>
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light">
                                                            <i className="ri-edit-line"></i>
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob4" value="" aria-label="..."/></td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded"><img src="../../assets/images/faces/11.jpg" className="" alt="..."/></span>
                                                        </div>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold fs-13 mb-0 d-flex align-items-center"><Link scroll={false} href="#!">Mark Johnson</Link></p>
                                                            <p className="fs-12 text-muted mb-0">markjhonson66@gmail.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    HR Coordinator
                                                </td>
                                                <td>
                                                    2024-02-05
                                                </td>
                                                <td className="text-center">
                                                    2 years
                                                </td>
                                                <td>
                                                    <span className="badge bg-light text-default border me-1">Recruitment</span>
                                                    <span className="badge bg-secondary-transparent me-1">Employee Relations</span>
                                                </td>
                                                <td>
                                                    Contract
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light">
                                                            <i className="ri-eye-line"></i>
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light">
                                                            <i className="ri-edit-line"></i>
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob5" value="" aria-label="..." defaultChecked/></td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded"><img src="../../assets/images/faces/7.jpg" className="" alt="..."/></span>
                                                        </div>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold fs-13 mb-0 d-flex align-items-center"><Link scroll={false} href="#!">Emily White</Link></p>
                                                            <p className="fs-12 text-muted mb-0">emileywhite@gmail.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Data Analyst
                                                </td>
                                                <td>
                                                    2024-02-08
                                                </td>
                                                <td className="text-center">
                                                    4 years
                                                </td>
                                                <td>
                                                    <span className="badge bg-teal-transparent me-1">Data Analysis</span>
                                                    <span className="badge bg-secondary-transparent me-1">Python</span>
                                                    <span className="badge bg-warning-transparent me-1">SQL</span>
                                                    <span className="badge bg-green-transparent">Excel</span>
                                                </td>
                                                <td>
                                                    Full-time
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light">
                                                            <i className="ri-eye-line"></i>
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light">
                                                            <i className="ri-edit-line"></i>
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob6" value="" aria-label="..."/></td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded"><img src="../../assets/images/faces/14.jpg" className="" alt="..."/></span>
                                                        </div>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold fs-13 mb-0 d-flex align-items-center"><Link scroll={false} href="#!">Alex Turner</Link></p>
                                                            <p className="fs-12 text-muted mb-0">alexturner69@gmail.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Graphic Designer
                                                </td>
                                                <td>
                                                    2024-02-10
                                                </td>
                                                <td className="text-center">
                                                    3 years
                                                </td>
                                                <td>
                                                    <span className="badge bg-primary-transparent me-1">Adobe Creative Suite</span>
                                                    <span className="badge bg-info-transparent">UI/UX Design</span>
                                                </td>
                                                <td>
                                                    Freelance
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light">
                                                            <i className="ri-eye-line"></i>
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light">
                                                            <i className="ri-edit-line"></i>
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
                                    <div> Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
                                    <div className="ms-auto"> 
                                    <nav aria-label="Page navigation" className="pagination-style-4"> 
                                        <Pagination className="pagination mb-0"> 
                                            <Pagination.Item disabled> Prev </Pagination.Item>
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
                </Row>
                {/*  End:: row-2 */}

</Fragment> 
);
};

export default Hrm;