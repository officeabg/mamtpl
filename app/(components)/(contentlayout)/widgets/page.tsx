"use client"
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Dropdown, ProgressBar, Row } from "react-bootstrap";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Widgetsdata from '@/shared/data/widgets/widgetsdata';
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";

const Widgets = () => {
return (
    <Fragment>
                 {/* Page Header */}
                     <Seo title={"Widgets"} />
                    <Pageheader Heading="Widgets" Pages={[{title:"Widgets", active:true},{title:"Widgets", active:false}]} />
                 {/* Page Header Close */}
                
                {/* Start:: row-1 */}
                <Row>
                    <Col xl={3}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Body>
                                <div className="d-flex justify-content-between mb-2">
                                    <div>
                                        <div className="flex-fill fs-13 text-muted">Number Of Sales</div>
                                        <div className="fs-22 fw-medium">12,432</div>
                                    </div>
                                    <div className="avatar avatar-md avatar-rounded bg-primary-transparent svg-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                                            <path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <Row>
                                    <Col xl={6}>
                                        <div className="d-flex align-items-center mb-1">
                                            <span className="badge rounded-pill bg-danger-transparent text-danger me-2"><i className="ri-arrow-left-down-line fs-11"></i></span>
                                            <span className="fs-14">8%</span>
                                        </div>
                                        <p className="fs-11 text-muted mb-0">This Month</p>
                                    </Col>
                                    <Col xl={6}>
                                        <div id="chart-1">
                                            <ReactApexChart options={Widgetsdata.Numberofsales.options} series={Widgetsdata.Numberofsales.series} type="area" width={120} height={60} />
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Body>
                                <div className="d-flex justify-content-between mb-2">
                                    <div>
                                        <div className="flex-fill fs-13 text-muted">Profit By Sale</div>
                                        <div className="fs-22 fw-medium">$5,472</div>
                                    </div>
                                    <div className="avatar avatar-md avatar-rounded bg-warning-transparent svg-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                                            <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <Row>
                                    <Col xl={6}>
                                        <div className="d-flex align-items-center mb-1">
                                            <span className="badge rounded-pill bg-success-transparent me-2"><i className="ri-arrow-left-up-line fs-11"></i></span>
                                            <span className="fs-14">9%</span>
                                        </div>
                                        <p className="fs-11 text-muted mb-0">This Month</p>
                                    </Col>
                                    <Col xl={6}>
                                        <div id="chart-2">
                                            <ReactApexChart options={Widgetsdata.Profitbysales.options} series={Widgetsdata.Profitbysales.series} type="area" width={120} height={60} />
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Body>
                                <div className="d-flex justify-content-between mb-2">
                                    <div>
                                        <div className="flex-fill fs-13 text-muted">Total Revenue</div>
                                        <div className="fs-22 fw-medium">$1,24,624</div>
                                    </div>
                                    <div className="avatar avatar-md avatar-rounded bg-success-transparent svg-success">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                                            <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <Row>
                                    <Col xl={6}>
                                        <div className="d-flex align-items-center mb-1">
                                            <span className="badge rounded-pill bg-danger-transparent text-danger me-2"><i className="ri-arrow-left-down-line fs-11"></i></span>
                                            <span className="fs-14">7%</span>
                                        </div>
                                        <p className="fs-11 text-muted mb-0">This Month</p>
                                    </Col>
                                    <Col xl={6}>
                                        <div id="chart-3">
                                            <ReactApexChart options={Widgetsdata.Totalrevenue.options} series={Widgetsdata.Totalrevenue.series} type="area" width={120} height={60} />
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Body>
                                <div className="d-flex justify-content-between mb-2">
                                    <div>
                                        <div className="flex-fill fs-13 text-muted">Total Customers</div>
                                        <div className="fs-22 fw-medium">1,032</div>
                                    </div>
                                    <div className="avatar avatar-md avatar-rounded bg-orange-transparent svg-orange">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <Row>
                                    <Col xl={6}>
                                        <div className="d-flex align-items-center mb-1">
                                            <span className="badge rounded-pill bg-success-transparent me-2"><i className="ri-arrow-left-down-line fs-11"></i></span>
                                            <span className="fs-14">6%</span>
                                        </div>
                                        <p className="fs-11 text-muted mb-0">This Month</p>
                                    </Col>
                                    <Col xl={6}>
                                        <div id="chart-4">
                                            <ReactApexChart options={Widgetsdata.Totalcustomers.options} series={Widgetsdata.Totalcustomers.series} type="area" width={120} height={60} />
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-1 */}

                {/* Start::row-2 */}
                <Row>
                    <Col xl={3}>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-start justify-content-between">
                                    <div>
                                        <p className="mb-2 fs-15 fw-medium">TOTAL EMPLOYEES 
                                        </p>
                                        <h4 className="mb-4 fw-medium">24,152</h4>
                                    </div>
                                    <div>
                                        <span className="avatar avatar-md bg-primary-transparent svg-primary text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="84" cy="108" r="52" opacity="0.2"/><path d="M10.23,200a88,88,0,0,1,147.54,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M172,160a87.93,87.93,0,0,1,73.77,40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="84" cy="108" r="52" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M152.69,59.7A52,52,0,1,1,172,160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="mb-0 fs-12 text-muted">
                                        <span className="text-success fw-semibold me-1 d-inline-block"><i className="fe fe-arrow-up"></i>+0.5%</span>
                                        vs Last Month
                                    </div>
                                    <Link scroll={false} href="#!"> <span className="float-end fs-12 fw-medium text-primary">View All <i className="ti ti-arrow-narrow-right"></i></span></Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-start justify-content-between">
                                    <div>
                                        <p className="mb-2 fs-15 fw-medium">TOTAL REVENUE
                                        </p>
                                        <h4 className="mb-4 fw-medium">$55,786</h4>
                                    </div>
                                    <div>
                                        <span className="avatar avatar-md bg-secondary-transparent svg-secondary text-secondary">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M40,192a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H56A16,16,0,0,1,40,64Z" opacity="0.2"/><path d="M40,64V192a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H56A16,16,0,0,1,40,64h0A16,16,0,0,1,56,48H192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="180" cy="140" r="12"/></svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="mb-0 fs-12 text-muted">
                                        <span className="text-danger fw-semibold me-1 d-inline-block"><i className="fe fe-arrow-down"></i>-1.2%</span>
                                        vs Last Month
                                    </div>
                                    <Link scroll={false} href="#!"> <span className="float-end fs-12 fw-medium text-secondary">View All <i className="ti ti-arrow-narrow-right"></i></span></Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-start justify-content-between">
                                    <div>
                                        <p className="mb-2 fs-15 fw-medium">TOTAL PROFIT
                                        </p>
                                        <h4 className="mb-4 fw-medium">$41,633</h4>
                                    </div>
                                    <div>
                                        <span className="avatar avatar-md bg-success-transparent svg-success text-success">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M88,216a24,24,0,0,0,24-24c0-10-8-16-8-16H216s8,6,8,16a24,24,0,0,1-24,24Z" opacity="0.2"/><path d="M200,176V64a24,24,0,0,0-24-24H40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="104" y1="104" x2="168" y2="104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="104" y1="136" x2="168" y2="136" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M24,80s-8-6-8-16a24,24,0,0,1,48,0V192a24,24,0,0,0,48,0c0-10-8-16-8-16H216s8,6,8,16a24,24,0,0,1-24,24H88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="mb-0 fs-12 text-muted">
                                        <span className="text-success fw-semibold me-1 d-inline-block"><i className="fe fe-arrow-up"></i>+1.3%</span>
                                        vs Last Month
                                    </div>
                                    <Link scroll={false} href="#!"> <span className="float-end fs-12 fw-medium text-success">View All <i className="ti ti-arrow-narrow-right"></i></span></Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-start justify-content-between">
                                    <div>
                                        <p className="mb-2 fs-15 fw-medium">TOTAL BALANCE
                                        </p>
                                        <h4 className="mb-4 fw-medium">$67,556</h4>
                                    </div>
                                    <div>
                                        <span className="avatar avatar-md bg-orange-transparent svg-orange text-orange">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,128h24a40,40,0,0,1,0,80H128Z" opacity="0.2"/><path d="M128,48H112a40,40,0,0,0,0,80h16Z" opacity="0.2"/><line x1="128" y1="24" x2="128" y2="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="208" x2="128" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="mb-0 fs-12 text-muted">
                                        <span className="text-danger fw-semibold me-1 d-inline-block"><i className="fe fe-arrow-down"></i>-0.1%</span>
                                        vs Last Month
                                    </div>
                                    <Link scroll={false} href="#!"> <span className="float-end fs-12 fw-medium text-orange">View All <i className="ti ti-arrow-narrow-right"></i></span></Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End::row-2 */}

                {/* Start:: row-3 */}
                <div className="row row-cols-xxl-5">
                    <div className="col">
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                                    <div>
                                        <span className="avatar avatar-sm bg-primary-transparent">
                                            <i className="ri-bar-chart-box-line fs-16"></i>
                                        </span>
                                    </div>
                                    <div className="flex-fill text-muted fs-14">Total Sales</div>
                                    <Dropdown className="custom-dropdown"> 
                                        <Dropdown.Toggle variant="" aria-label="anchor" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="no-caret pe-0"> 
                                            <i className="ri-more-2-fill fs-5 text-muted"></i>
                                        </Dropdown.Toggle> 
                                        <Dropdown.Menu role="menu"> 
                                            <li><Dropdown.Item href="#!">Week</Dropdown.Item></li> 
                                            <li><Dropdown.Item href="#!">Day</Dropdown.Item></li> 
                                            <li><Dropdown.Item href="#!">Year</Dropdown.Item></li> 
                                        </Dropdown.Menu> 
                                    </Dropdown>
                                </div>
                                <div className="mb-3">
                                    <div className="h4 fw-medium mb-1 d-flex align-items-center flex-wrap gap-2">42,312 <span className="badge bg-success-transparent fs-10"><i className="ri-arrow-left-up-line"></i>+1.64%</span></div>
                                </div>
                                <div id="chart-5">
                                    <ReactApexChart options={Widgetsdata.Totalsales.options} series={Widgetsdata.Totalsales.series} type="line" width={200} height={40} />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                                    <div>
                                        <span className="avatar avatar-sm bg-secondary-transparent">
                                            <i className="ri-wallet-3-line fs-16"></i>
                                        </span>
                                    </div>
                                    <div className="flex-fill text-muted fs-14">Revenue</div>
                                    <Dropdown className="custom-dropdown"> 
                                        <Dropdown.Toggle variant="" aria-label="anchor" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="no-caret pe-0"> 
                                            <i className="ri-more-2-fill fs-5 text-muted"></i>
                                        </Dropdown.Toggle> 
                                        <Dropdown.Menu role="menu"> 
                                            <li><Dropdown.Item href="#!">Week</Dropdown.Item></li> 
                                            <li><Dropdown.Item href="#!">Day</Dropdown.Item></li> 
                                            <li><Dropdown.Item href="#!">Year</Dropdown.Item></li> 
                                        </Dropdown.Menu> 
                                    </Dropdown>
                                </div>
                                <div className="mb-3">
                                    <div className="h4 fw-medium mb-1 d-flex align-items-center flex-wrap gap-2">$1,24,328 <span className="badge bg-success-transparent fs-10"><i className="ri-arrow-left-up-line"></i>+0.52%</span></div>
                                </div>
                                <div id="chart-6">
                                    <ReactApexChart options={Widgetsdata.Revenue.options} series={Widgetsdata.Revenue.series} type="line" width={200} height={40} />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                                    <div>
                                        <span className="avatar avatar-sm bg-success-transparent">
                                            <i className="ri-group-line fs-16"></i>
                                        </span>
                                    </div>
                                    <div className="flex-fill text-muted fs-14">Customers</div>
                                    <Dropdown className="custom-dropdown"> 
                                        <Dropdown.Toggle variant="" aria-label="anchor" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="no-caret pe-0"> 
                                            <i className="ri-more-2-fill fs-5 text-muted"></i>
                                        </Dropdown.Toggle> 
                                        <Dropdown.Menu role="menu"> 
                                            <li><Dropdown.Item href="#!">Week</Dropdown.Item></li> 
                                            <li><Dropdown.Item href="#!">Day</Dropdown.Item></li> 
                                            <li><Dropdown.Item href="#!">Year</Dropdown.Item></li> 
                                        </Dropdown.Menu> 
                                    </Dropdown>
                                </div>
                                <div className="mb-3">
                                    <div className="h4 fw-medium mb-1 d-flex align-items-center flex-wrap gap-2">3,25,366 <span className="badge bg-danger-transparent fs-10"><i className="ri-arrow-left-down-line"></i>-4.56%</span></div>
                                </div>
                                <div id="chart-7">
                                     <ReactApexChart options={Widgetsdata.Customers.options} series={Widgetsdata.Customers.series} type="line" width={200} height={40} />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                                    <div>
                                        <span className="avatar avatar-sm bg-orange-transparent">
                                            <i className="ri-money-dollar-circle-line fs-16"></i>
                                        </span>
                                    </div>
                                    <div className="flex-fill text-muted fs-14">Profit</div>
                                    <Dropdown className="custom-dropdown"> 
                                        <Dropdown.Toggle variant="" aria-label="anchor" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="no-caret pe-0"> 
                                            <i className="ri-more-2-fill fs-5 text-muted"></i>
                                        </Dropdown.Toggle> 
                                        <Dropdown.Menu role="menu"> 
                                            <li><Dropdown.Item href="#!">Week</Dropdown.Item></li> 
                                            <li><Dropdown.Item href="#!">Day</Dropdown.Item></li> 
                                            <li><Dropdown.Item href="#!">Year</Dropdown.Item></li> 
                                        </Dropdown.Menu> 
                                    </Dropdown>
                                </div>
                                <div className="mb-3">
                                    <div className="h4 fw-medium mb-1 d-flex align-items-center flex-wrap gap-2">$0.34M <span className="badge bg-success-transparent fs-10"><i className="ri-arrow-left-up-line"></i>+2.5%</span></div>
                                </div>
                                <div id="chart-8">
                                    <ReactApexChart options={Widgetsdata.Profit.options} series={Widgetsdata.Profit.series} type="line" width={200} height={40} />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                                    <div>
                                        <span className="avatar avatar-sm bg-info-transparent">
                                            <i className="ri-currency-line fs-16"></i>
                                        </span>
                                    </div>
                                    <div className="flex-fill text-muted fs-14">Income</div>
                                    <Dropdown className="custom-dropdown"> 
                                        <Dropdown.Toggle variant="" aria-label="anchor" href="#!" data-bs-toggle="dropdown" aria-expanded="false" className="no-caret  pe-0"> 
                                            <i className="ri-more-2-fill fs-5 text-muted"></i>
                                        </Dropdown.Toggle> 
                                        <Dropdown.Menu role="menu"> 
                                            <li><Dropdown.Item href="#!">Week</Dropdown.Item></li> 
                                            <li><Dropdown.Item href="#!">Day</Dropdown.Item></li> 
                                            <li><Dropdown.Item href="#!">Year</Dropdown.Item></li> 
                                        </Dropdown.Menu> 
                                    </Dropdown>
                                </div>
                                <div className="mb-3">
                                    <div className="h4 fw-medium mb-1 d-flex align-items-center flex-wrap gap-2">$1.2M<span className="badge bg-success-transparent fs-10"><i className="ri-arrow-left-up-line"></i>+0.45%</span></div>
                                </div>
                                <div id="chart-9">
                                    <ReactApexChart options={Widgetsdata.Income.options} series={Widgetsdata.Income.series} type="line" width={200} height={40} />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                {/* End:: row-3 */}

                {/* Start:: row-4 */}
                <Row>
                    <Col xl={3}>
                        <div className="card custom-card ">
                            <Card.Body>
                                <div className=" d-flex align-items-center justify-conent-between">
                                    <div className="flex-fill">
                                        <div className="d-flex justify-content-between mb-2">
                                            <span className="avatar avatar-rounded avatar-md bg-primary-transparent svg-primary mb-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                                                    <path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </div>
                                        <p className="flex-fill text-muted fs-14 mb-0">Total Sales</p>
                                    </div>
                                    <div id="chart-10" className="">
                                        <ReactApexChart options={Widgetsdata.Totalsaleschart.options} series={Widgetsdata.Totalsaleschart.series} type="bar" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="fs-22 fw-medium mb-0 d-flex align-items-center">12,432
                                    </div>
                                    <span className="text-success badge bg-success-transparent rounded-pill d-flex align-items-center fs-11 me-0 ms-2 mb-0"><i className="ri-arrow-left-up-line fs-11"></i>+2.5%</span>
                                </div>
                            </Card.Body>
                        </div>
                    </Col>
                    <Col xl={3}>
                        <div className="card custom-card ">
                            <Card.Body>
                                <div className=" d-flex align-items-center justify-conent-between">
                                    <div className="flex-fill">
                                        <div className="d-flex justify-content-between mb-2">
                                            <span className="avatar avatar-rounded avatar-md bg-secondary-transparent svg-secondary mb-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                                                    <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </div>
                                        <p className="flex-fill text-muted fs-14 mb-0">Total Revenue</p>
                                    </div>
                                    <div id="chart-11" className="">
                                        <ReactApexChart options={Widgetsdata.Totalrevenuechart.options} series={Widgetsdata.Totalrevenuechart.series} type="bar" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="fs-22 fw-medium mb-0 d-flex align-items-center">$9,432
                                    </div>
                                    <span className="text-success badge bg-success-transparent rounded-pill d-flex align-items-center fs-11 me-0 ms-2 mb-0"><i className="ri-arrow-left-up-line fs-11"></i>+2.5%</span>
                                </div>
                            </Card.Body>
                        </div>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className=" d-flex align-items-center justify-conent-between">
                                    <div className="flex-fill">
                                        <div className="d-flex justify-content-between mb-2">
                                            <span className="avatar avatar-rounded avatar-md bg-success-transparent svg-success mb-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                                                    <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </div>
                                        <p className="flex-fill text-muted fs-14 mb-0">Total Customers</p>
                                    </div>
                                    <div id="chart-12" className="">
                                         <ReactApexChart options={Widgetsdata.Totalcustomerschart.options} series={Widgetsdata.Totalcustomerschart.series} type="bar" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="fs-22 fw-medium mb-0 d-flex align-items-center">3,132
                                    </div>
                                    <span className="text-success badge bg-success-transparent rounded-pill d-flex align-items-center fs-11 me-0 ms-2 mb-0"><i className="ri-arrow-left-up-line fs-11"></i>+2.5%</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className=" d-flex align-items-center justify-conent-between">
                                    <div className="flex-fill">
                                        <div className="d-flex justify-content-between mb-2">
                                            <span className="avatar avatar-rounded avatar-md bg-info-transparent svg-info mb-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                                                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </div>
                                        <p className="flex-fill text-muted fs-14 mb-0">Total Profit</p>
                                    </div>
                                    <div id="chart-13" className="">
                                         <ReactApexChart options={Widgetsdata.Totalprofitchart.options} series={Widgetsdata.Totalprofitchart.series} type="bar" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="fs-22 fw-medium mb-0 d-flex align-items-center">$5,325
                                    </div>
                                    <span className="text-success badge bg-success-transparent rounded-pill d-flex align-items-center fs-11 me-0 ms-2 mb-0"><i className="ri-arrow-left-up-line fs-11"></i>+2.5%</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-4 */}

                {/* Start:: row-5 */}
                <Row>
                    <Col xxl={3} xl={6} lg={6} md={6}  className="col-12">
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    TOTAL SALES
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="circlechart">
                                     <ReactApexChart options={Widgetsdata.Avaragechart.options} series={Widgetsdata.Avaragechart.series} type="radialBar" width={"100%"} height={275} />
                                </div>
                            </Card.Body>
                            <Card.Footer className="p-0 border-top-0">
                                <div className="row border-top border-block-start-dashed">
                                    <div className="col border-end border-inline-end-dashed">
                                        <div className="text-center p-3">
                                            <span className="fs-14 visit-gender male">Avarage Sales</span>
                                            <div className="mt-1">
                                                <span className="fs-5 fw-medium">1,654</span>
                                            </div>
                                            <span className="badge bg-success-transparent text-success mt-1">+12.3%</span>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="text-center p-3">
                                            <span className="fs-14 visit-gender female">Average Profit</span>
                                            <div className="mt-1">
                                                <span className="fs-5 fw-medium">$12,234</span>
                                            </div>
                                            <span className="badge bg-danger-transparent text-danger mt-1">-11.3%</span>
                                        </div>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={6} lg={6} md={6}  className="col-12">
                        <Card className="custom-card overflow-hidden">
                            <Card.Header>
                                <Card.Title>
                                    Total Revenue
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="d-flex align-items-center mb-2">
                                    <h3 className="fw-semibold mb-0">$4,289</h3>
                                    <div className="ms-2">
                                        <span className="badge bg-success-transparent">1.02<i className="ri-arrow-up-s-fill align-mmiddle ms-1"></i></span>
                                    </div>
                                </div>
                                <ProgressBar className="progress-stacked progress-sm">
                                    <ProgressBar variant="primary" now={30} key={1} />
                                    <ProgressBar variant="secondary" now={20} key={2} />
                                    <ProgressBar variant="success" now={23} key={3} />
                                    <ProgressBar variant="orange" now={27} key={4} />
                                </ProgressBar>
                            </Card.Body>
                            <Card.Footer className="p-0">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-fill align-items-center pt-1">
                                                <div className="d-flex align-items-top justify-content-between">
                                                    <p className="mb-0 text-muted d-flex align-items-center"><i className="ti ti-point-filled fs-20 text-primary me-2"></i>Today Revenue</p>
                                                    <h6 className="mb-0 lh-1 fw-medium">$256</h6>
                                                </div>
                                                <div className="text-danger "><i className="ri-arrow-down-s-fill me-1 align-middle"></i>-1.05%
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item success">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-fill align-items-center pt-1">
                                                <div className="d-flex align-items-top justify-content-between">
                                                    <p className="mb-0 text-muted fs-14  d-flex align-items-center"><i className="ti ti-point-filled fs-20 text-success me-2"></i>This Week Revenue</p>
                                                    <h6 className="mb-0 lh-1 fw-medium">$5,532</h6>    
                                                </div>
                                                <div className="text-success"><i className="ri-arrow-up-s-fill me-1 align-middle"></i>+0.64%</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item warning">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-fill align-items-center pt-1">
                                                <div className="d-flex align-items-top justify-content-between">
                                                    <p className="mb-0 text-muted fs-14 d-flex align-items-center"><i className="ti ti-point-filled fs-20 text-warning me-2"></i>This Month Revenue</p>
                                                    <h6 className="mb-0 lh-1 fw-medium">$29,754</h6>
                                                </div>
                                                <div className="text-success "><i className="ri-arrow-up-s-fill me-1 align-middle"></i>+0.82%</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item success">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-fill align-items-center pt-1">
                                                <div className="d-flex align-items-top justify-content-between">
                                                    <p className="mb-0 text-muted fs-14  d-flex align-items-center"><i className="ti ti-point-filled fs-20 text-success me-2"></i>This Year Revenue</p>
                                                    <h6 className="mb-0 lh-1 fw-medium">$2,25,116</h6>    
                                                </div>
                                                <div className="text-success"><i className="ri-arrow-up-s-fill me-1 align-middle"></i>+0.21%</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xxl={6} xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    SALES REVENUE
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="salerevenue">
                                     <ReactApexChart options={Widgetsdata.Salesrevenue.options} series={Widgetsdata.Salesrevenue.series} type="line" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-5 */}

                {/* Start:: row-6 */}
                <Row>
                    <Col xxl={4}  className="col-12">
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    SALES REVENUE
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="salerevenue1">
                                     <ReactApexChart options={Widgetsdata.Salesrevenue1.options} series={Widgetsdata.Salesrevenue1.series} type="line" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={6} lg={6} md={6} className="col-12">
                        <Card className="custom-card overflow-hidden">
                            <img src="../assets/images/media/media-3.jpg" className="card-img-top" style={{ height: "200px" }} alt="..."/>
                            <div className="card-img-overlay-profile">
                                <div className="d-flex align-items-start text-fixed-white">
                                    <div className="flex-grow-1 text-center">
                                        <div className="mt-1 align-items-center justify-conent-between fs-22 mb-1">
                                            <span>Today Budget</span>
                                            <span className="min-w-fit-content fs-10 ms-1 "></span>
                                        </div>
                                        <div className="d-flex align-items-center justify-conent-between">
                                            <span className="flex-grow-1 fs-30 fw-semibold sale-font counter">$59,700<span>
                                        </span></span></div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mt-3 px-3">
                                    <div className="d-flex align-items-start">
                                        <span className="avatar avatar-sm rounded-circle me-3 bg-white-transparent mt-2">
                                            <i className="bx bx-up-arrow-alt fs-20 text-fixed-white"></i>
                                        </span>
                                        <div className="flex-grow-1 text-fixed-white">
                                            <div className="d-flex align-items-center justify-conent-between fs-20 fw-medium">
                                                <span>$35,800</span>
                                            </div>
                                            <div className="d-flex align-items-center justify-conent-between">
                                                <span className="flex-grow-1 fs-13 fw-semibold">Profit</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex ms-5">
                                        <span className="avatar avatar-sm rounded-circle me-3 bg-white-transparent mt-2">
                                            <i className="bx bx-down-arrow-alt fs-20 text-fixed-white"></i>
                                        </span>
                                        <div className="flex-grow-1 text-fixed-white">
                                            <div className="d-flex align-items-center justify-conent-between fs-20 fw-medium">
                                                <span>$12,800</span>
                                            </div>
                                            <div className="d-flex align-items-center justify-conent-between">
                                                <span className="flex-grow-1 fs-13 fw-semibold">Expense</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item p-3">
                                        <div className="d-flex align-items-start gap-3">
                                            <div>
                                                <span className="avatar avatar-rounded bg-danger-transparent text-danger"><i className="ti ti-clock  fs-22"></i></span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="mb-0 fw-medium d-block">Total-Income</span>
                                                <span className="text-muted fs-12">Average Income Per Hour</span>
    
                                            </div>
                                            <div className="text-end">
                                                <span className="text-danger fs-medium fs-5">$17.03</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item p-3">
                                        <div className="d-flex align-items-start gap-3">
                                            <div>
                                                <span className="avatar avatar-rounded bg-info-transparent text-info"><i className="ti ti-bolt fs-22"></i></span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="mb-0 fw-medium d-block">Total-Income</span>
                                                <span className="text-muted fs-12">Average Income Per Hour</span>
    
                                            </div>
                                            <div className="text-end">
                                                <span className="text-info fs-medium fs-5">$77.93</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item p-3">
                                        <div className="d-flex align-items-start gap-3">
                                            <div>
                                                <span className="avatar avatar-rounded bg-warning-transparent"><i className="ti ti-activity-heartbeat fs-22"></i></span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="mb-0 fw-medium d-block">Total-Income</span>
                                                <span className="text-muted fs-12">Average Income Per Hour</span>
    
                                            </div>
                                            <div className="text-end">
                                                <span className="text-warning fs-medium fs-5">$970.63</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={6} lg={6} md={6} className="col-12">
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    RECENT ACTIVITY
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <ul className="widgets-task-list mb-0">
                                    <li className="">
                                        <div className=""> <i className="task-icon bg-primary"></i>
                                            <h6 className=" mb-0">Task Finished</h6>
                                            <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                                <div> <span className="fs-12 text-muted">Adam Berry finished task on <Link scroll={false} href="#!" className="text-primary">
                                                            AngularJS Template</Link></span> </div>
                                                <div className="min-w-fit-content ms-2 text-end">
                                                    <p className="mb-0 text-muted fs-11">09 July 2021</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <div className=""> <i className="task-icon bg-primary"></i>
                                            <h6 className=" mb-0">Task Overdue</h6>
                                            <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                                <div> <span className="fs-12 text-muted">Petey Cruiser finished</span> <Link scroll={false} href="#!" className="text-secondary">
                                                        Integrated management</Link> </div>
                                                <div className="min-w-fit-content ms-2 text-end">
                                                    <p className="mb-0 text-muted fs-11">29 June 2021</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <div className=""> <i className="task-icon bg-primary"></i>
                                            <h6 className=" mb-0">Task Finished</h6>
                                            <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                                <div> <span className="fs-12 text-muted">Adam Berry finished task on</span>
                                                    <Link scroll={false} href="#!" className="text-success">
                                                        AngularJS Template</Link>
                                                </div>
                                                <div className="min-w-fit-content ms-2 text-end">
                                                    <p className="mb-0 text-muted fs-11">09 July 2021</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <div className=""> <i className="task-icon bg-primary"></i>
                                            <h6 className=" mb-0">Completed Homework</h6>
                                            <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                                <div> <span className="fs-12 text-muted">Adam Berry finished task on</span>
                                                </div>
                                                <div className="min-w-fit-content ms-2 text-end">
                                                    <p className="mb-0 text-muted fs-11">09 July 2021</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <div className=""> <i className="task-icon bg-primary"></i>
                                            <h6 className=" mb-0">Reached Target</h6>
                                            <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                                <div> <span className="fs-12 text-muted">Adam Berry finished task on</span>
                                                </div>
                                                <div className="min-w-fit-content ms-2 text-end">
                                                    <p className="mb-0 text-muted fs-11">09 July 2021</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-6 */}

                {/* Start:: row-7 */}
                <Row>
                    <Col xxl={6} xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    SALES REVENUE
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="salerevenue2">
                                    <ReactApexChart options={Widgetsdata.Salesrevenue2.options} series={Widgetsdata.Salesrevenue2.series} type="line" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={6} lg={6} md={6}  className="col-12">
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    ACTIVE CUSTOMERS
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="activecustomers">
                                    <ReactApexChart options={Widgetsdata.Activecustomers.options} series={Widgetsdata.Activecustomers.series} type="radialBar" width={"100%"} height={330} />
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="row mt-0">
                                    <div className="col-6 border-end border-inline-end-dashed text-center">
                                        <p className="text-muted mb-1 fs-12">Male</p>
                                        <h6 className="text-primary">12.34K</h6>
                                    </div>
                                    <div className="col-6 text-center">
                                        <p className="text-muted mb-1 fs-12">Female</p>
                                        <h6 className="text-secondary">10.19K</h6>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={6} lg={6} md={6}  className="col-12">
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    TOP SALES
                                </Card.Title>
                            </Card.Header>
                            <div id="top-sales">
                                <ReactApexChart options={Widgetsdata.Widgetstopsales.options} series={Widgetsdata.Widgetstopsales.series} type="area" width={"100%"} height={350} />
                            </div>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-7 */}
    </Fragment>
    );
};

export default Widgets;