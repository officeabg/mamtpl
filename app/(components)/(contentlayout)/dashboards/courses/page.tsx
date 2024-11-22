"use client"
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, ListGroup, Pagination, ProgressBar, Row, Table } from "react-bootstrap";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Coursesdata from '@/shared/data/dashboards/coursesdata';
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Courses = () => {
return (
<Fragment>
                {/*  Start::page-header */}
                    <Seo title={"Courses"} />
                    <Pageheader Heading="Courses" Pages={[{title:"Dashboards", active:true}, {title:"Courses", active:false},]} />
                {/*  End::page-header */}

                {/*  Start:: row-1 */}
                <Row>
                    <Col xxl={7} xl={12} className="">
                        <Row>
                            <Col xl={12}>
                                <Card className="custom-card card-bg-primary border-0 shadow-none overflow-hidden courses-banner-card">
                                    <Card.Body className="p-4">
                                        <Row>
                                            <Col xxl={8} xl={8} lg={8} md={8} sm={8} className="">
                                                <h4 className="text-fixed-white mb-3">Master Your Skills With Our Courses !</h4>
                                                <p className="mb-4 op-8">Fuel your growth with bite-sized lessons on us. Elevate your skills at your own pace, anywhere, anytime</p>
                                                <Button variant="" className="btn btn-secondary btn-wave">Learn More</Button>
                                            </Col>
                                            <Col xxl={4} xl={4} lg={4} md={4} sm={4} className="d-sm-block d-none">
                                                <div>
                                                    <img src="../../assets/images/media/media-67.png" alt="" className="position-absolute"/>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Header className="justify-content-between">
                                        <Card.Title>
                                            LEARNING ACTIVITY
                                        </Card.Title>
                                        <Dropdown> 
                                            <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 text-muted no-caret  border-0 d-inline" data-bs-toggle="dropdown" aria-expanded="true"> Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </Dropdown.Toggle> 
                                            <Dropdown.Menu role="menu" 
                                            // style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 28px);"
                                             data-popper-placement="bottom-end"> 
                                                <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                                 <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li> 
                                                 <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li> 
                                            </Dropdown.Menu> 
                                        </Dropdown>
                                    </Card.Header>
                                    <Card.Body>
                                        <div id="learning-activity">
                                            <ReactApexChart options={Coursesdata.Learningactivity.options} series={Coursesdata.Learningactivity.series} type="line" width={"100%"} height={290} />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xxl={5} xl={12} className="">
                        <Row>
                            <Col xxl={6} xl={3} lg={6} md={6} sm={6}  className="col-12">
                                <Card className="custom-card total-students-card overflow-hidden">
                                    <Card.Body className="p-4">
                                        <span className="d-block mb-3">Total Students</span>
                                        <h4 className="fw-medium mb-2">23,768</h4>
                                        <span className="fs-12">
                                            This Month <span className="text-success fs-12 fw-medium ms-2 d-inline-block"><i className="ri-arrow-up-line me-1"></i>2.45%</span>
                                        </span>
                                        <span className="courses-main-cards-icon svg-white text-fixed-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="224 64 128 96 32 64 128 32 224 64" opacity="0.2"/><line x1="32" y1="64" x2="32" y2="144" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M56,216c15.7-24.08,41.11-40,72-40s56.3,15.92,72,40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><polygon points="224 64 128 96 32 64 128 32 224 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M169.34,82.22a56,56,0,1,1-82.68,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                        </span>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={6} xl={3} lg={6} md={6} sm={6}  className="col-12">
                                <Card className="custom-card total-instructors-card overflow-hidden">
                                    <Card.Body className="p-4">
                                        <span className="d-block mb-3">Total Instructors</span>
                                        <h4 className="fw-medium mb-2">1,673</h4>
                                        <span className="fs-12">
                                            This Month <span className="text-danger fs-12 fw-medium ms-2 d-inline-block"><i className="ri-arrow-down-line me-1"></i>0.62%</span>
                                        </span>
                                        <span className="courses-main-cards-icon svg-white text-fixed-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="104" cy="144" r="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M72,144a32,32,0,1,1,32,32h88V80H64v64Z" opacity="0.2"/><path d="M53.39,208a56,56,0,0,1,101.22,0H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><polyline points="176 176 192 176 192 80 64 80 64 96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                        </span>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={6} xl={3} lg={6} md={6} sm={6}  className="col-12">
                                <Card className="custom-card total-courses-card overflow-hidden">
                                    <Card.Body className="p-4">
                                        <span className="d-block mb-3">Total Courses</span>
                                        <h4 className="fw-medium mb-2">526</h4>
                                        <span className="fs-12">
                                            This Month <span className="text-success fs-12 fw-medium ms-2 d-inline-block"><i className="ri-arrow-up-line me-1"></i>3.75%</span>
                                        </span>
                                        <span className="courses-main-cards-icon svg-white text-fixed-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,232a32,32,0,0,1,32-32h64a8,8,0,0,0,8-8V64a8,8,0,0,0-8-8H160a32,32,0,0,0-32,32Z" opacity="0.2"/><path d="M128,88a32,32,0,0,1,32-32h64a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H160a32,32,0,0,0-32,32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M24,192a8,8,0,0,0,8,8H96a32,32,0,0,1,32,32V88A32,32,0,0,0,96,56H32a8,8,0,0,0-8,8Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="160" y1="96" x2="200" y2="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="160" y1="128" x2="200" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="160" y1="160" x2="200" y2="160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                        </span>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={6} xl={3} lg={6} md={6} sm={6}  className="col-12">
                                <Card className="custom-card total-revenue-card overflow-hidden">
                                    <Card.Body className="p-4">
                                        <span className="d-block mb-3">Total Revenue</span>
                                        <h4 className="fw-medium mb-2">$1,26,553</h4>
                                        <span className="fs-12">
                                            This Month <span className="text-success fs-12 fw-medium ms-2 d-inline-block"><i className="ri-arrow-up-line me-1"></i>21.54%</span>
                                        </span>
                                        <span className="courses-main-cards-icon svg-white text-fixed-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,128h24a40,40,0,0,1,0,80H128Z" opacity="0.2"/><path d="M128,48H112a40,40,0,0,0,0,80h16Z" opacity="0.2"/><line x1="128" y1="24" x2="128" y2="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="208" x2="128" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                        </span>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Header className="justify-content-between">
                                        <Card.Title>
                                            PAYOUTS
                                        </Card.Title>
                                        <Dropdown> 
                                            <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 text-muted no-caret  border-0 d-inline" data-bs-toggle="dropdown" aria-expanded="true"> Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </Dropdown.Toggle> 
                                            <Dropdown.Menu role="menu" 
                                            // style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 28px);"
                                             data-popper-placement="bottom-end"> 
                                                <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                                 <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li> 
                                                 <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li> 
                                            </Dropdown.Menu> 
                                        </Dropdown>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row className="g-0">
                                            <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="my-auto mx-auto">
                                                <div id="payouts">
                                                        <ReactApexChart options={Coursesdata.Payouts.options} series={Coursesdata.Payouts.series} type="donut" width={"100%"} height={180} />
                                                </div>
                                            </Col>
                                            <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="my-auto">
                                                <div className="row gy-4">
                                                    <Col xl={12}>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-3">
                                                                <span className="avatar radius-5 bg-success-transparent text-success"><i className="ti ti-cash fs-18"></i></span>
                                                            </div>
                                                            <div className="flex-1">
                                                                <p className="mb-1 fs-12 fw-medium">Total Payouts</p>
                                                                <span className="fs-16 fw-medium d-flex align-items-center">$89,700<span className="badge bg-success-transparent fs-10 ms-2">0.54%<i className="ri-arrow-up-s-line ms-1"></i></span></span>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xl={12}>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-3">
                                                                <span className="avatar radius-5 bg-primary-transparent text-primary"><i className="ti ti-cash fs-18"></i></span>
                                                            </div>
                                                            <div className="flex-1">
                                                                <p className="mb-1 fs-12 fw-medium">Paid</p>
                                                                <span className="fs-16 fw-medium d-flex align-items-center">$68,400<span className="badge bg-danger-transparent fs-10 ms-2">-1.34%<i className="ri-arrow-down-s-line ms-1"></i></span></span>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xl={12}>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-3">
                                                                <span className="avatar radius-5 bg-secondary-transparent text-secondary"><i className="ti ti-x fs-18"></i></span>
                                                            </div>
                                                            <div className="flex-1">
                                                                <p className="mb-1 fs-12 fw-medium">Unpaid</p>
                                                                <span className="fs-16 fw-medium d-flex align-items-center">$21,300<span className="badge bg-success-transparent fs-10 ms-2">1.89%<i className="ri-arrow-up-s-line ms-1"></i></span></span>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/*  End:: row-1 */}

                {/*  Start:: row-2 */}
                <Row>
                    <Col xxl={4} xl={4} lg={6} className="">
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    TOP CATEGORIES
                                </Card.Title>
                                <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <ListGroup className="list-group list-group-flush">
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center gap-3">
                                            <div>
                                                <span className="avatar avatar-md bg-primary fs-20">
                                                    UI
                                                </span>
                                            </div> 
                                            <div className="flex-fill">
                                                <span className="fw-semibold">UI/UX Design</span>
                                                <span className="d-block fw-medium text-muted fs-12">40 Courses</span>
                                            </div>
                                            <div>
                                                <span className="badge bg-primary-transparent">120+ classes</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center gap-3">
                                            <div>
                                                <span className="avatar avatar-md bg-secondary fs-20">
                                                    QA
                                                </span>
                                            </div> 
                                            <div className="flex-fill">
                                                <span className="fw-semibold">QA Analyst</span>
                                                <span className="d-block fw-medium text-muted fs-12">35 Courses</span>
                                            </div>
                                            <div>
                                                <span className="badge bg-secondary-transparent">260+ classes</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center gap-3">
                                            <div>
                                                <span className="avatar avatar-md bg-success fs-20">
                                                    DM
                                                </span>
                                            </div> 
                                            <div className="flex-fill">
                                                <span className="fw-semibold">Digital Marketing</span>
                                                <span className="d-block fw-medium text-muted fs-12">60 Courses</span>
                                            </div>
                                            <div>
                                                <span className="badge bg-success-transparent">420+ classes</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center gap-3">
                                            <div>
                                                <span className="avatar avatar-md bg-info fs-20">
                                                    M
                                                </span>
                                            </div> 
                                            <div className="flex-fill">
                                                <span className="fw-semibold">Marketing</span>
                                                <span className="d-block fw-medium text-muted fs-12">150 Courses</span>
                                            </div>
                                            <div>
                                                <span className="badge bg-info-transparent">100+ classes</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center gap-3">
                                            <div>
                                                <span className="avatar avatar-md bg-orange fs-20">
                                                    DP
                                                </span>
                                            </div> 
                                            <div className="flex-fill">
                                                <span className="fw-semibold">Devops Pro</span>
                                                <span className="d-block fw-medium text-muted fs-12">15 Courses</span>
                                            </div>
                                            <div>
                                                <span className="badge bg-orange-transparent">120+ classes</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center gap-3">
                                            <div>
                                                <span className="avatar avatar-md bg-danger fs-20">
                                                    P
                                                </span>
                                            </div> 
                                            <div className="flex-fill">
                                                <span className="fw-semibold">Programming</span>
                                                <span className="d-block fw-medium text-muted fs-12">120 Courses</span>
                                            </div>
                                            <div>
                                                <span className="badge bg-danger-transparent">130+ classes</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={4} lg={6} className="">
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    POPULAR CLASSES
                                </Card.Title>
                                <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <ListGroup className="list-group list-group-flush">
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-start flex-wrap">
                                            <Link scroll={false} href="#!" className="pe-3 d-inline-block lh-1">
                                                <span className="avatar avatar-xl">
                                                    <img src="../../assets/images/media/media-25.jpg" alt="img"/>
                                                </span>
                                            </Link>
                                            <div className="flex-fill fw-medium">
                                                <Link scroll={false} href="#!" className="text-muted d-block mb-1 fs-10" title="Category"><i className="ti ti-tag fs-11 align-middle"></i>&nbsp;UI/UX</Link>
                                                <Link scroll={false} href="#!" className="d-block mb-2 fs-14">CSS Zero to Hero Class-11</Link>
                                                <div className="d-flex align-items-center flex-wrap gap-3">
                                                    <div className="d-flex align-items-center">
                                                        <Link scroll={false} href="#!" className="me-2 lh-1">
                                                            <span className="avatar avatar-xs avatar-rounded">
                                                                <img src="../../assets/images/faces/1.jpg" alt="img"/>
                                                            </span>
                                                        </Link>
                                                        <Link scroll={false} href="#!" className="flex-fill fs-12">Natasha Sil</Link>
                                                    </div>
                                                    <div className="fs-12">
                                                        <span className="me-2">2,189 Views</span>
                                                        <span><i className="ri-star-fill fs-16 text-warning me-1"></i>(4.2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-start flex-wrap">
                                            <Link scroll={false} href="#!" className="pe-3 d-inline-block lh-1">
                                                <span className="avatar avatar-xl">
                                                    <img src="../../assets/images/media/media-13.jpg" alt="img"/>
                                                </span>
                                            </Link>
                                            <div className="flex-fill fw-medium">
                                                <Link scroll={false} href="#!" className="text-muted d-block mb-1 fs-10" title="Category"><i className="ti ti-tag fs-11 align-middle"></i>&nbsp;Marketing</Link>
                                                <Link scroll={false} href="#!" className="d-block mb-2 fs-14">Marketing Class-27</Link>
                                                <div className="d-flex align-items-center flex-wrap gap-3">
                                                    <div className="d-flex align-items-center">
                                                        <Link scroll={false} href="#!" className="me-2 lh-1">
                                                            <span className="avatar avatar-xs avatar-rounded">
                                                                <img src="../../assets/images/faces/13.jpg" alt="img"/>
                                                            </span>
                                                        </Link>
                                                        <Link scroll={false} href="#!" className="flex-fill fs-12">John Doe</Link>
                                                    </div>
                                                    <div className="fs-12">
                                                        <span className="me-2">1,116 Views</span>
                                                        <span><i className="ri-star-fill fs-16 text-warning me-1"></i>(4.5)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-start flex-wrap">
                                            <Link scroll={false} href="#!" className="pe-3 d-inline-block lh-1">
                                                <span className="avatar avatar-xl">
                                                    <img src="../../assets/images/media/media-24.jpg" alt="img"/>
                                                </span>
                                            </Link>
                                            <div className="flex-fill fw-medium">
                                                <Link scroll={false} href="#!" className="text-muted d-block mb-1 fs-10" title="Category"><i className="ti ti-tag fs-11 align-middle"></i>&nbsp;Programming</Link>
                                                <Link scroll={false} href="#!" className="d-block mb-2 fs-14">Learn Python-16</Link>
                                                <div className="d-flex align-items-center flex-wrap gap-3">
                                                    <div className="d-flex align-items-center">
                                                        <Link scroll={false} href="#!" className="me-2 lh-1">
                                                            <span className="avatar avatar-xs avatar-rounded">
                                                                <img src="../../assets/images/faces/5.jpg" alt="img"/>
                                                            </span>
                                                        </Link>
                                                        <Link scroll={false} href="#!" className="flex-fill fs-12">Jane Smith</Link>
                                                    </div>
                                                    <div className="fs-12">
                                                        <span className="me-2">2,125 Views</span>
                                                        <span><i className="ri-star-fill fs-16 text-warning me-1"></i>(4.8)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-start flex-wrap">
                                            <Link scroll={false} href="#!" className="pe-3 d-inline-block lh-1">
                                                <span className="avatar avatar-xl">
                                                    <img src="../../assets/images/media/media-18.jpg" alt="img"/>
                                                </span>
                                            </Link>
                                            <div className="flex-fill fw-medium">
                                                <Link scroll={false} href="#!" className="text-muted d-block mb-1 fs-10" title="Category"><i className="ti ti-tag fs-11 align-middle"></i>&nbsp;UI/UX Design</Link>
                                                <Link scroll={false} href="#!" className="d-block mb-2 fs-14">Javascript-45</Link>
                                                <div className="d-flex align-items-center flex-wrap gap-3">
                                                    <div className="d-flex align-items-center">
                                                        <Link scroll={false} href="#!" className="me-2 lh-1">
                                                            <span className="avatar avatar-xs avatar-rounded">
                                                                <img src="../../assets/images/faces/10.jpg" alt="img"/>
                                                            </span>
                                                        </Link>
                                                        <Link scroll={false} href="#!" className="flex-fill fs-12">Robert White</Link>
                                                    </div>
                                                    <div className="fs-12">
                                                        <span className="me-2">3,677 Views</span>
                                                        <span><i className="ri-star-fill fs-16 text-warning me-1"></i>(4.9)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={4} lg={12} className="">
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    COURSES STATISTICS
                                </Card.Title>
                                <Dropdown> 
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 text-muted no-caret  border-0 d-inline" data-bs-toggle="dropdown" aria-expanded="true"> Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </Dropdown.Toggle> 
                                    <Dropdown.Menu role="menu" 
                                    // style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 28px);" 
                                    data-popper-placement="bottom-end"> 
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                         <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li> 
                                         <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li> 
                                    </Dropdown.Menu> 
                                </Dropdown>
                            </Card.Header>
                            <Card.Body>
                                <div id="course-statistics">
                                     <ReactApexChart options={Coursesdata.Coursesstatistics.options} series={Coursesdata.Coursesstatistics.series} type="bar" width={"100%"} height={338} />
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
                                    ONGOING COURSES
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
                                    <Table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col">Instructor</th>
                                                <th scope="col">Course Title</th>
                                                <th scope="col">Date Started</th>
                                                <th scope="col">Progress</th>
                                                <th scope="col" className="text-center">Students</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src="../../assets/images/faces/13.jpg" className="" alt="..."/></span>
                                                        </div>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold fs-13 mb-0 d-flex align-items-center"><Link scroll={false} href="#!">John Doe</Link></p>
                                                            <p className="fs-12 text-muted mb-0">johndoe213@gmail.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    DataDash
                                                </td>
                                                <td>
                                                    2024-02-01
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <ProgressBar animated striped className="progress progress-animate progress-xs w-100" variant="primary" now={75} />
                                                        <div className="ms-2">75%</div>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    57
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
                                                    CloudSnap
                                                </td>
                                                <td>
                                                    2024-02-10
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <ProgressBar animated striped className="progress progress-animate progress-xs w-100" variant="secondary" now={55} />
                                                        <div className="ms-2">55%</div>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    120
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
                                                    DevOpsDash
                                                </td>
                                                <td>
                                                    2024-03-16
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <ProgressBar animated striped className="progress progress-animate progress-xs w-100" variant="success" now={90} />
                                                        <div className="ms-2">90%</div>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    50
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
                                                    UI/UXSwift
                                                </td>
                                                <td>
                                                    2024-03-24
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <ProgressBar animated striped className="progress progress-animate progress-xs w-100" variant="orange" now={50} />
                                                        <div className="ms-2">50%</div>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    60
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
                                                    CloudSnap
                                                </td>
                                                <td>
                                                    2024-03-30
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <ProgressBar animated striped className="progress progress-animate progress-xs w-100" variant="info" now={80} />
                                                        <div className="ms-2">80%</div>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    150
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
                                    </Table>
                                </div>
                            </Card.Body>
                            <Card.Footer className="border-top-0"> 
                                <div className="d-flex align-items-center"> 
                                    <div> Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
                                    <div className="ms-auto"> 
                                    <nav aria-label="Page navigation" className="pagination-style-4"> 
                                        <Pagination className="mb-0"> 
                                            <Pagination.Item disabled> Prev  </Pagination.Item>
                                                <Pagination.Item  active>1</Pagination.Item> 
                                                <Pagination.Item>2</Pagination.Item> 
                                                <Pagination.Item className="pagination-next"> next  </Pagination.Item> 
                                            </Pagination> 
                                        </nav> 
                                    </div> 
                                </div> 
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    TOP INSTRUCTORS
                                </Card.Title>
                                <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                            </Card.Header>
                            <Card.Body>
                                <ul className="list-unstyled top-instructors-list">
                                    <li>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <div>
                                                <span className="avatar avatar-md avatar-rounded bg-pink-transparent">
                                                    <img src="../../assets/images/faces/png/1.png" alt=""/>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <Link scroll={false} href="#!" className="fw-medium d-block">Alex Swift</Link>
                                                <span className="fs-12 text-muted">UX Pro</span>
                                            </div>
                                            <div className="text-end">
                                                <span className="fw-medium text-primary d-block">321 Courses</span>
                                                <span className="fs-12 text-muted">UI/UX Maestro</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <div>
                                                <span className="avatar avatar-md avatar-rounded bg-danger-transparent">
                                                    <img src="../../assets/images/faces/png/3.png" alt=""/>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <Link scroll={false} href="#!" className="fw-medium d-block">Eva Code</Link>
                                                <span className="fs-12 text-muted">Data Ninja</span>
                                            </div>
                                            <div className="text-end">
                                                <span className="fw-medium text-secondary d-block">25 Courses</span>
                                                <span className="fs-12 text-muted">Networking</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <div>
                                                <span className="avatar avatar-md avatar-rounded bg-warning-transparent">
                                                    <img src="../../assets/images/faces/png/7.png" alt=""/>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <Link scroll={false} href="#!" className="fw-medium d-block">Max Blaze</Link>
                                                <span className="fs-12 text-muted">Ethi Pro</span>
                                            </div>
                                            <div className="text-end">
                                                <span className="fw-medium text-success d-block">39 Courses</span>
                                                <span className="fs-12 text-muted">Code Optimization</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <div>
                                                <span className="avatar avatar-md avatar-rounded bg-light">
                                                    <img src="../../assets/images/faces/png/8.png" alt=""/>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <Link scroll={false} href="#!" className="fw-medium d-block">Lily Byte</Link>
                                                <span className="fs-12 text-muted">Supp Pro</span>
                                            </div>
                                            <div className="text-end">
                                                <span className="fw-medium text-orange d-block">11 Courses</span>
                                                <span className="fs-12 text-muted">Digital Marketing</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <div>
                                                <span className="avatar avatar-md avatar-rounded bg-info-transparent">
                                                    <img src="../../assets/images/faces/png/9.png" alt=""/>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <Link scroll={false} href="#!" className="fw-medium d-block">Jake Spark</Link>
                                                <span className="fs-12 text-muted">Tech Guru</span>
                                            </div>
                                            <div className="text-end">
                                                <span className="fw-medium text-info d-block">124 Courses</span>
                                                <span className="fs-12 text-muted">Tech Support</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <div>
                                                <span className="avatar avatar-md avatar-rounded bg-orange-transparent">
                                                    <img src="../../assets/images/faces/png/2.png" alt=""/>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <Link scroll={false} href="#!" className="fw-medium d-block">Leo Logic</Link>
                                                <span className="fs-12 text-muted">Cyber Ace</span>
                                            </div>
                                            <div className="text-end">
                                                <span className="fw-medium text-warning d-block">38 Courses</span>
                                                <span className="fs-12 text-muted">DevOps</span>
                                            </div>
                                        </div>
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

export default Courses;