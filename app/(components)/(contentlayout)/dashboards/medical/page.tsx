"use client"
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, ListGroup, Pagination, Row } from "react-bootstrap";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Medicaldata from '@/shared/data/dashboards/medicaldata';
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Medical = () => {
return (
<Fragment>
                {/*  Start::page-header */}
                        <Seo title={"Medical"} />
                        <Pageheader Heading="Medical" Pages={[{title:"Dashboards", active:true}, {title:"Medical", active:false},]} />
                {/*  End::page-header */}

                {/*  Start:: row-1 */}
                <Row>
                    <Col xxl={6} xl={12}>
                        <Card className="custom-card medical-banner-card overflow-hidden">
                            <Card.Body className="p-4">
                                <div className="row justify-content-between">
                                    <div className="col-xxl-7 col-xl-5 col-lg-5 col-md-5 col-sm-5">
                                        <h4 className="mb-3 fw-medium">Your Path to Wellness</h4>
                                        <p className="mb-4">Book appointments, access resources, and prioritize your well-being with ease</p>
                                        <Button variant="" className="btn btn-lg btn-primary-gradient btn-wave">Book Appointment</Button>
                                    </div>
                                    <div className="col-xxl-5 col-xl-7 col-lg-7 col-md-7 col-sm-7 d-sm-block d-none text-end my-auto">
                                        <img src="../../assets/images/media/backgrounds/5.png" alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={6} xl={12}>
                        <Card className="custom-card"> 
                            <Card.Header>
                                <Card.Title>
                                    AVAILABLE TREATMENTS
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="p-4"> 
                                <Row className="gy-sm-0 gy-3"> 
                                    <Col xxl={2} xl={2} lg={2} md={2} sm={2} className="col-4 text-center"> 
                                        <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-primary-light border-0 p-4 lh-1 rounded"> 
                                            <i className="ti ti-heartbeat fs-22"></i> 
                                        </Link> 
                                        <Link scroll={false} href="#!" className="d-block pt-2 fw-medium fs-12">Cardiology</Link> 
                                    </Col> 
                                    <Col xxl={2} xl={2} lg={2} md={2} sm={2} className="col-4 text-center"> 
                                        <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-secondary-light border-0 p-4 lh-1 rounded"> 
                                            <i className="ti ti-baby-carriage  fs-22"></i> 
                                        </Link> 
                                        <Link scroll={false} href="#!" className="d-block pt-2 fw-medium fs-12">Pediatrics</Link> 
                                    </Col> 
                                    <Col xxl={2} xl={2} lg={2} md={2} sm={2} className="col-4 text-center"> 
                                        <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-success-light border-0 p-4 lh-1 rounded"> 
                                            <i className="ti ti-bone fs-22"></i> 
                                        </Link> 
                                        <Link scroll={false} href="#!" className="d-block pt-2 fw-medium fs-12">Orthopedic</Link> 
                                    </Col> 
                                    <Col xxl={2} xl={2} lg={2} md={2} sm={2} className="col-4 text-center"> 
                                        <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-orange-light border-0 p-4 lh-1 rounded"> 
                                            <i className="ti ti-activity-heartbeat fs-22"></i> 
                                        </Link> 
                                        <Link scroll={false} href="#!" className="d-block pt-2 fw-medium fs-12">Neurology</Link> 
                                    </Col> 
                                    <Col xxl={2} xl={2} lg={2} md={2} sm={2} className="col-4 text-center">
                                        <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-info-light border-0 p-4 lh-1 rounded"> 
                                            <i className="ti ti-brand-debian fs-22"></i> 
                                        </Link> 
                                        <Link scroll={false} href="#!" className="d-block pt-2 fw-medium fs-12">Psychiatry</Link> 
                                    </Col> 
                                    <Col xxl={2} xl={2} lg={2} md={2} sm={2} className="col-4 text-center"> 
                                        <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-warning-light border-0 p-4 lh-1 rounded"> 
                                            <i className="bi bi-three-dots fs-22"></i> 
                                        </Link> 
                                        <Link scroll={false} href="#!" className="d-block pt-2 fw-medium fs-12">More</Link> 
                                    </Col> 
                                </Row> 
                            </Card.Body> 
                        </Card>
                    </Col>
                </Row>
                {/*  End:: row-1 */}

                {/*  Start:: row-2 */}
                <Row>
                    <Col xl={4}>
                        <Row>
                            <Col xxl={6} xl={6} lg={3} md={6} sm={6} className="col-12">
                                <Card className="custom-card overflow-hidden medical-main-card total-pateints">
                                    <Card.Body className="text-center p-4">
                                        <div className="main-card-icon primary">
                                            <div className="avatar avatar-lg bg-primary-transparent border border-primary border-opacity-10">
                                                <div className="avatar avatar-sm svg-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="152" cy="48" r="24" opacity="0.2"/><circle cx="152" cy="48" r="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M48,129s56-52.65,88-24.87C153.94,119.67,168,144,208,144" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><polyline points="152 232 152 176 109.54 145.67" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="129.53" y1="99.69" x2="72" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="fw-medium mb-2 mt-3">1.2K</h4>
                                        <span className="d-block mb-3">Total Patients</span>
                                        <span className="d-block fw-medium text-success lh-1"><i className="ri-arrow-up-s-fill"></i>0.67%</span>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={6} xl={6} lg={3} md={6} sm={6} className="col-12">
                                <Card className="custom-card overflow-hidden medical-main-card appointments">
                                    <Card.Body className="text-center p-4">
                                        <div className="main-card-icon secondary">
                                            <div className="avatar avatar-lg bg-secondary-transparent border border-secondary border-opacity-10">
                                                <div className="avatar avatar-sm svg-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,40H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48A8,8,0,0,0,208,40ZM57.78,216A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,70.22,56Z" opacity="0.2"/><circle cx="128" cy="120" r="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M57.78,216a72,72,0,0,1,140.44,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="fw-medium mb-2 mt-3">256</h4>
                                        <span className="d-block mb-3">Appointments</span>
                                        <span className="d-block fw-medium text-danger lh-1"><i className="ri-arrow-down-s-fill"></i>1.44%</span>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={6} xl={6} lg={3} md={6} sm={6} className="col-12">
                                <Card className="custom-card overflow-hidden medical-main-card available-doctors">
                                    <Card.Body className="text-center p-4">
                                        <div className="main-card-icon success">
                                            <div className="avatar avatar-lg bg-success-transparent border border-success border-opacity-10">
                                                <div className="avatar avatar-sm svg-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="200" cy="152" r="32" opacity="0.2"/><circle cx="200" cy="152" r="12"/><circle cx="200" cy="152" r="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M96,136v48a40,40,0,0,0,40,40h24a40,40,0,0,0,40-40h0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M128,32h16a8,8,0,0,1,8,8V79.17c0,30.77-24.48,56.43-55.26,56.83A56,56,0,0,1,40,80V40a8,8,0,0,1,8-8H64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="fw-medium mb-2 mt-3">53</h4>
                                        <span className="d-block mb-3">Available Doctors</span>
                                        <span className="d-block fw-medium text-success lh-1"><i className="ri-arrow-up-s-fill"></i>2.75%</span>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={6} xl={6} lg={3} md={6} sm={6} className="col-12">
                                <Card className="custom-card overflow-hidden medical-main-card available-rooms">
                                    <Card.Body className="text-center p-4">
                                        <div className="main-card-icon orange">
                                            <div className="avatar avatar-lg bg-orange-transparent border border-orange border-opacity-10">
                                                <div className="avatar avatar-sm svg-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M48,40H208a8,8,0,0,1,8,8V200a0,0,0,0,1,0,0H40a0,0,0,0,1,0,0V48A8,8,0,0,1,48,40Z" opacity="0.2"/><line x1="128" y1="40" x2="128" y2="224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="160" y1="72" x2="184" y2="72" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="160" y1="104" x2="184" y2="104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="72" y1="72" x2="96" y2="72" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="72" y1="104" x2="96" y2="104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M48,40H208a8,8,0,0,1,8,8V200a0,0,0,0,1,0,0H40a0,0,0,0,1,0,0V48A8,8,0,0,1,48,40Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="40" y1="200" x2="40" y2="224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="216" y1="200" x2="216" y2="224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="fw-medium mb-2 mt-3">142</h4>
                                        <span className="d-block mb-3">Available Rooms</span>
                                        <span className="d-block fw-medium text-success lh-1"><i className="ri-arrow-up-s-fill"></i>1.16%</span>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={5}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    PATIENTS ANALYSIS
                                </Card.Title>
                                <Dropdown> 
                                    <Dropdown.Toggle variant=""  href="#!" className="p-2 fs-12 text-muted no-caret  border-0 d-inline" data-bs-toggle="dropdown" aria-expanded="true"> Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </Dropdown.Toggle> 
                                    <Dropdown.Menu className="dropdown-menu" role="menu" 
                                    // style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 28px);"
                                     data-popper-placement="bottom-end"> 
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                         <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li> 
                                         <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li> 
                                    </Dropdown.Menu> 
                                </Dropdown>
                            </Card.Header>
                            <Card.Body>
                                <div id="patients-analysis">
                                     <ReactApexChart options={Medicaldata.Patientanalysis.options} series={Medicaldata.Patientanalysis.series} type="bar" width={"100%"} height={323} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    DOCTORS LIST
                                </Card.Title>
                                <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                            </Card.Header>
                            <Card.Body>
                                <ul className="list-unstyled doctors-list">
                                    <li>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <div className="lh-1">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/doctors/1.jpg" alt=""/>
                                                </span>
                                            </div> 
                                            <div className="flex-fill">
                                                <span className="d-block fw-medium lh-1">
                                                    Dr. Smith
                                                </span>
                                                <span className="text-muted fs-12">Cardiology</span>
                                            </div>   
                                            <div>
                                                <span className="badge bg-success-transparent rounded-pill"><i className="ri-circle-fill me-1 fs-7"></i>Available</span>
                                            </div>                                        
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <div className="lh-1">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/doctors/2.jpg" alt=""/>
                                                </span>
                                            </div> 
                                            <div className="flex-fill">
                                                <span className="d-block fw-medium lh-1">
                                                    Dr. Johnson
                                                </span>
                                                <span className="text-muted fs-12">Orthopedics</span>
                                            </div>   
                                            <div>
                                                <span className="badge bg-success-transparent rounded-pill"><i className="ri-circle-fill me-1 fs-7"></i>Available</span>
                                            </div>                                        
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <div className="lh-1">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/doctors/3.jpg" alt=""/>
                                                </span>
                                            </div> 
                                            <div className="flex-fill">
                                                <span className="d-block fw-medium lh-1">
                                                    Dr. Davis
                                                </span>
                                                <span className="text-muted fs-12">Dermatology</span>
                                            </div>   
                                            <div>
                                                <span className="badge bg-danger-transparent rounded-pill"><i className="ri-circle-fill me-1 fs-7"></i>Not Available</span>
                                            </div>                                        
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <div className="lh-1">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/doctors/4.jpg" alt=""/>
                                                </span>
                                            </div> 
                                            <div className="flex-fill">
                                                <span className="d-block fw-medium lh-1">
                                                    Dr. Miller
                                                </span>
                                                <span className="text-muted fs-12">Neurology</span>
                                            </div>   
                                            <div>
                                                <span className="badge bg-success-transparent rounded-pill"><i className="ri-circle-fill me-1 fs-7"></i>Available</span>
                                            </div>                                        
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <div className="lh-1">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/doctors/5.jpg" alt=""/>
                                                </span>
                                            </div> 
                                            <div className="flex-fill">
                                                <span className="d-block fw-medium lh-1">
                                                    Dr. Anderson
                                                </span>
                                                <span className="text-muted fs-12">Ophthalmology</span>
                                            </div>   
                                            <div>
                                                <span className="badge bg-success-transparent rounded-pill"><i className="ri-circle-fill me-1 fs-7"></i>Available</span>
                                            </div>                                        
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <div className="lh-1">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../assets/images/faces/doctors/6.jpg" alt=""/>
                                                </span>
                                            </div> 
                                            <div className="flex-fill">
                                                <span className="d-block fw-medium lh-1">
                                                    Dr. Martinez
                                                </span>
                                                <span className="text-muted fs-12">Gastroenterology</span>
                                            </div>   
                                            <div>
                                                <span className="badge bg-danger-transparent rounded-pill"><i className="ri-circle-fill me-1 fs-7"></i>Not Available</span>
                                            </div>                                        
                                        </div>
                                    </li>
                                </ul>
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
                                    APPOINTMENT HISTORY
                                </Card.Title>
                                <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <ListGroup className="list-group list-group-flush">
                                    <ListGroup.Item>
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md bg-primary-transparent">
                                                    <i className="ti ti-stethoscope fs-5"></i>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="fw-medium">General Checkup</span>
                                                <span className="fs-12 text-muted d-block mt-1"><span className="fw-medium">#SPK101</span> - 13 Feb 2024, 10:25am</span>
                                            </div>
                                            <span className="text-primary">Completed</span>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md bg-secondary-transparent">
                                                    <i className="ti ti-report-medical fs-5"></i>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="fw-medium">Follow-up appointment</span>
                                                <span className="fs-12 text-muted d-block mt-1"><span className="fw-medium">#SPK121</span> - 13 Feb 2024, 11:15am</span>
                                            </div>
                                            <span className="text-secondary">Rescheduled</span>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md bg-success-transparent">
                                                    <i className="ti ti-heartbeat fs-5"></i>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="fw-medium">Heart Checkup</span>
                                                <span className="fs-12 text-muted d-block mt-1"><span className="fw-medium">#SPK114</span> - 13 Feb 2024, 02:30pm</span>
                                            </div>
                                            <span className="text-success">Scheduled</span>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md bg-orange-transparent">
                                                    <i className="ti ti-vaccine fs-5"></i>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="fw-medium">Blood test results review</span>
                                                <span className="fs-12 text-muted d-block mt-1"><span className="fw-medium">#SPK132</span> - 13 Feb 2024, 03:45pm</span>
                                            </div>
                                            <span className="text-orange">Cancelled</span>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md bg-info-transparent">
                                                    <i className="ti ti-dental fs-5"></i>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="fw-medium">Dental Cleanup</span>
                                                <span className="fs-12 text-muted d-block mt-1"><span className="fw-medium">#SPK115</span> - 14 Feb 2024, 10:15am</span>
                                            </div>
                                            <span className="text-info">Completed</span>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md bg-warning-transparent">
                                                    <i className="ti ti-vaccine-bottle fs-5"></i>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="fw-medium">Vaccination</span>
                                                <span className="fs-12 text-muted d-block mt-1"><span className="fw-medium">#SPK118</span> - 14 Feb 2024, 11:30am</span>
                                            </div>
                                            <span className="text-warning">Scheduled</span>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={8}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    TOTAL PATIENTS
                                </Card.Title>
                                <Dropdown> 
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 text-muted no-caret  border-0 d-inline" data-bs-toggle="dropdown" aria-expanded="true"> Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </Dropdown.Toggle> 
                                    <Dropdown.Menu className="dropdown-menu" role="menu" 
                                    // style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 28px);"
                                     data-popper-placement="bottom-end"> 
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                         <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li> 
                                         <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li> 
                                    </Dropdown.Menu> 
                                </Dropdown>
                            </Card.Header>
                            <Card.Body>
                                <div id="total-patients">
                                    <ReactApexChart options={Medicaldata.Totalpatients.options} series={Medicaldata.Totalpatients.series} type="line" width={"100%"} height={360} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*  End:: row-3 */}

                {/*  Start:: row-4 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    PATIENTS LIST
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
                                                <th scope="row" className="text-center"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob1" value="" aria-label="..."/></th>
                                                <th scope="col">Patient ID</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Gender</th>
                                                <th scope="col">Contact Number</th>
                                                <th scope="col">Last Appointment</th>
                                                <th scope="col">Medical History</th>
                                                <th scope="col">Next Appointment</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob2" value="" aria-label="..."/></td>
                                                <td>SPK-9ABC</td>
                                                <td>
                                                    <div className="d-flex gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded"><img src="../../assets/images/faces/11.jpg" className="" alt="..."/></span>
                                                        <div>
                                                            <span className="fw-medium mb-0 d-flex align-items-center">Jhon Doe</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Male
                                                </td>
                                                <td>123-456-7890</td>
                                                <td>
                                                    2024-10-20
                                                </td>
                                                <td>
                                                   <span className="badge bg-primary-transparent">Hypertension</span>
                                                </td>
                                                <td>2024-03-15</td>
                                                <td>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                            <i className="ri-eye-line"></i>
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-icon btn-secondary-light btn-wave">
                                                            <i className="ri-edit-line"></i>
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob3" value="" aria-label="..." defaultChecked/></td>
                                                <td>SPK-3SFW</td>
                                                <td>
                                                    <div className="d-flex gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded"><img src="../../assets/images/faces/2.jpg" className="" alt="..."/></span>
                                                        <div>
                                                            <span className="fw-medium mb-0 d-flex align-items-center">Jane smith</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Female
                                                </td>
                                                <td>987-654-3210</td>
                                                <td>
                                                    2024-09-15
                                                </td>
                                                <td>
                                                   <span className="badge bg-secondary-transparent">Diabetes</span>
                                                </td>
                                                <td>2024-02-28</td>
                                                <td>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                            <i className="ri-eye-line"></i>
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-icon btn-secondary-light btn-wave">
                                                            <i className="ri-edit-line"></i>
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob4" value="" aria-label="..."/></td>
                                                <td>SPK-6SKF</td>
                                                <td>
                                                    <div className="d-flex gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded"><img src="../../assets/images/faces/12.jpg" className="" alt="..."/></span>
                                                        <div>
                                                            <span className="fw-medium mb-0 d-flex align-items-center">Robert Jhonson</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Male
                                                </td>
                                                <td>456-789-0123</td>
                                                <td>
                                                    2024-11-05
                                                </td>
                                                <td>
                                                   <span className="badge bg-success-transparent">Asthma</span>
                                                </td>
                                                <td>2024-04-10</td>
                                                <td>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                            <i className="ri-eye-line"></i>
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-icon btn-secondary-light btn-wave">
                                                            <i className="ri-edit-line"></i>
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob5" value="" aria-label="..." defaultChecked/></td>
                                                <td>SPK-3ESD</td>
                                                <td>
                                                    <div className="d-flex gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded"><img src="../../assets/images/faces/5.jpg" className="" alt="..."/></span>
                                                        <div>
                                                            <span className="fw-medium mb-0 d-flex align-items-center">Emiley Davis</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Female
                                                </td>
                                                <td>789-012-3456</td>
                                                <td>
                                                    2024-08-12
                                                </td>
                                                <td>
                                                   <span className="badge bg-orange-transparent">Allergies</span>
                                                </td>
                                                <td>2024-01-20</td>
                                                <td>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                            <i className="ri-eye-line"></i>
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-icon btn-secondary-light btn-wave">
                                                            <i className="ri-edit-line"></i>
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob6" value="" aria-label="..." defaultChecked/></td>
                                                <td>SPK-3KSE</td>
                                                <td>
                                                    <div className="d-flex gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded"><img src="../../assets/images/faces/11.jpg" className="" alt="..."/></span>
                                                        <div>
                                                            <span className="fw-medium mb-0 d-flex align-items-center">William Martinez</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Male
                                                </td>
                                                <td>234-567-8901</td>
                                                <td>
                                                    2024-12-08
                                                </td>
                                                <td>
                                                   <span className="badge bg-info-transparent">General</span>
                                                </td>
                                                <td>2024-05-05</td>
                                                <td>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                            <i className="ri-eye-line"></i>
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-icon btn-secondary-light btn-wave">
                                                            <i className="ri-edit-line"></i>
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob7" value="" aria-label="..."/></td>
                                                <td>SPK-4DFS</td>
                                                <td>
                                                    <div className="d-flex gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded"><img src="../../assets/images/faces/4.jpg" className="" alt="..."/></span>
                                                        <div>
                                                            <span className="fw-medium mb-0 d-flex align-items-center">Sarah Wilson</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Female
                                                </td>
                                                <td>567-890-1234</td>
                                                <td>
                                                    2024-07-25
                                                </td>
                                                <td>
                                                   <span className="badge bg-warning-transparent">High Cholesterol</span>
                                                </td>
                                                <td>2024-03-01</td>
                                                <td>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                            <i className="ri-eye-line"></i>
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-icon btn-secondary-light btn-wave">
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
                                    <div> Showing 6 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
                                    <div className="ms-auto"> 
                                    <nav aria-label="Page navigation" className="pagination-style-4"> 
                                        <Pagination className="mb-0"> 
                                            <Pagination.Item href="#!" disabled> Prev </Pagination.Item>
                                                <Pagination.Item active>1</Pagination.Item> 
                                                <Pagination.Item href="#!">2</Pagination.Item> 
                                                <Pagination.Item href="#!" className="pagination-next">next</Pagination.Item> 
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

export default Medical;