"use client"
import React, { Fragment } from "react";
import { Card, Col, Dropdown, ListGroup, Pagination, Row, Table } from "react-bootstrap";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Crmdata from '@/shared/data/dashboards/crmdata';
import Link from "next/link";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Crm = () => {
return (
<Fragment>
                {/*  Start::page-header */}
                    <Seo title={"CRM"} />
                    <Pageheader Heading="CRM" Pages={[{title:"Dashboards", active:true}, {title:"CRM", active:false},]} />
                {/*  End::page-header */}

                {/*  Start:: row-1 */}
                <Row>
                    <Col xxl={3} xl={3} lg={6} md={6} sm={6} className="col-12">
                        <Card className="custom-card">
                            <Card.Body className="p-4">
                                <div className="mb-4 d-flex align-items-start justify-content-between">
                                    <div className="main-card-icon secondary">
                                        <div className="avatar avatar-lg bg-secondary-transparent border border-secondary border-opacity-10">
                                            <div className="avatar avatar-sm svg-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="84" cy="108" r="52" opacity="0.2"/><path d="M10.23,200a88,88,0,0,1,147.54,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M172,160a87.93,87.93,0,0,1,73.77,40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="84" cy="108" r="52" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M152.69,59.7A52,52,0,1,1,172,160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="total-customers">
                                        <ReactApexChart options={Crmdata.Totalcustomers.options} series={Crmdata.Totalcustomers.series} type="area" width={100} height={40} />
                                    </div>
                                </div>
                                <h4 className="mb-2">1,56,290</h4>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className="text-muted">Total Customers</span>
                                    <span className="badge bg-danger-transparent"><i className="ti ti-trending-down me-1 align-middle ms-1 d-inline-flex"></i>-0.56%</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={3} lg={6} md={6} sm={6} className="col-12">
                        <Card className="custom-card">
                            <Card.Body className="p-4">
                                <div className="mb-4 d-flex align-items-start justify-content-between">
                                    <div className="main-card-icon success">
                                        <div className="avatar avatar-lg bg-success-transparent border border-success border-opacity-10">
                                            <div className="avatar avatar-sm svg-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="232 128 232 184 128 184 128 72 24 72 24 128 232 128" opacity="0.2"/><polyline points="232 128 232 184 128 184 128 72 24 72 24 128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="conversion-ratio">
                                        <ReactApexChart options={Crmdata.Conversionratio.options} series={Crmdata.Conversionratio.series} type="area" width={100} height={40} />
                                    </div>
                                </div>
                                <h4 className="mb-2">16.87%</h4>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className="text-muted">Conversion Ratio</span>
                                    <span className="badge bg-success-transparent"><i className="ti ti-trending-up me-1 align-middle ms-1 d-inline-flex"></i>+4.63%</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={3} lg={6} md={6} sm={6} className="col-12">
                        <Card className="custom-card">
                            <Card.Body className="p-4">
                                <div className="mb-4 d-flex align-items-start justify-content-between">
                                    <div className="main-card-icon orange">
                                        <div className="avatar avatar-lg bg-orange-transparent border border-orange border-opacity-10">
                                            <div className="avatar avatar-sm svg-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,144a191.14,191.14,0,0,1-96-25.68h0V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V118.31A191.08,191.08,0,0,1,128,144Z" opacity="0.2"/><line x1="112" y1="112" x2="144" y2="112" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><rect x="32" y="64" width="192" height="144" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M224,118.31A191.09,191.09,0,0,1,128,144a191.14,191.14,0,0,1-96-25.68" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="total-deals">
                                         <ReactApexChart options={Crmdata.Totaldeals.options} series={Crmdata.Totaldeals.series} type="area" width={100} height={40} />
                                    </div>
                                </div>
                                <h4 className="mb-2">$73,239</h4>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className="text-muted">Total Deals</span>
                                    <span className="badge bg-success-transparent"><i className="ti ti-trending-up me-1 align-middle ms-1 d-inline-flex"></i>+12.67%</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={3} lg={6} md={6} sm={6} className="col-12">
                        <Card className="custom-card card-bg-primary overflow-hidden earnings-card">
                            <Card.Body className="p-0">
                                <div className="px-3 position-absolute total-earnings-content">
                                     <span className="fs-11 mb-1 d-block fw-medium">TOTAL EARNINGS</span> 
                                     <h2 className="mb-0 text-fixed-white">$32,198</h2>  
                                     <span className="fs-12 op-8">Increased by</span><span className="text-success fs-12 ms-2 op-1"><i className="ti ti-trending-up align-middle me-1"></i>0.25%</span>
                                </div>
                                <div id="earnings-report1">
                                <ReactApexChart options={Crmdata.Totalearnings1.options} series={Crmdata.Totalearnings1.series} type="area" width={"100%"} height={140} />
                                </div>
                                <div id="earnings-report">
                                <ReactApexChart options={Crmdata.Totalearnings2.options} series={Crmdata.Totalearnings2.series} type="bar" width={"100%"} height={100} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*  End:: row-1 */}

                {/*  Start:: row-2 */}
                <Row>
                    <Col xl={9}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    REVENUE ANALYTICS
                                </Card.Title>
                                <Dropdown> 
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 text-muted no-caret  border-0 d-inline" data-bs-toggle="dropdown" aria-expanded="true"> Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </Dropdown.Toggle> 
                                    <Dropdown.Menu role="menu" 
                                     data-popper-placement="bottom-end"> 
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                         <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li> 
                                         <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li> 
                                    </Dropdown.Menu> 
                                </Dropdown>
                            </Card.Header>
                            <Card.Body>
                                <div id="revenue-analytics">
                                    <ReactApexChart options={Crmdata.Revenueanalytics.options} series={Crmdata.Revenueanalytics.series} type="area" width={"100%"} height={310} />
                                </div>                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    CONTACTS BY SOURCE
                                </Card.Title>  
                                <Dropdown> 
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 text-muted no-caret  border-0 d-inline" data-bs-toggle="dropdown" aria-expanded="true"> Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </Dropdown.Toggle> 
                                    <Dropdown.Menu role="menu"
                                      data-popper-placement="bottom-end"> 
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                         <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li> 
                                         <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li> 
                                    </Dropdown.Menu> 
                                </Dropdown>
                            </Card.Header>
                            <div className="card-body mx-auto">
                                <div id="contacts-source">
                                        <ReactApexChart options={Crmdata.Contactsbysource.options} series={Crmdata.Contactsbysource.series} type="polarArea" width={"100%"} height={357} />
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                {/*  End:: row-2 */}

                {/*  Start:: row-3 */}
                <Row>
                    <Col xl={3}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    LEADS BY SOURCE
                                </Card.Title>
                                <Dropdown> 
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 text-muted no-caret  border-0 d-inline" data-bs-toggle="dropdown" aria-expanded="true"> Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </Dropdown.Toggle> 
                                    <Dropdown.Menu role="menu" 
                                     data-popper-placement="bottom-end"> 
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                         <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li> 
                                         <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li> 
                                    </Dropdown.Menu> 
                                </Dropdown>
                            </Card.Header>
                            <Card.Body>
                                <div id="leadsBySource">
                                        <ReactApexChart options={Crmdata.Leadsbysource.options} series={Crmdata.Leadsbysource.series} type="bar" width={"100%"} height={317} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    TOP DEALS
                                </Card.Title>
                                <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th>Deal</th>
                                                <th>Value</th>
                                                <th className="text-center">Probability</th>
                                                <th>Status</th>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar-sm avatar bg-primary"><i className="fe fe-terminal"></i></span>
                                                        </div>
                                                        <Link scroll={false} href="#!" className="fw-medium">Et Management</Link>
                                                    </div>
                                                </td>
                                                <td>$121K</td>
                                                <td className="text-center">50%</td>
                                                <td><span className="badge bg-primary-transparent">Contract Sent</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar-sm avatar bg-secondary">RA</span>
                                                        </div>
                                                        <Link scroll={false} href="#!" className="fw-medium">Raslk Assoc</Link>
                                                    </div>
                                                </td>
                                                <td>$68K</td>
                                                <td className="text-center">70%</td>
                                                <td><span className="badge bg-warning-transparent">On Hold</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar-sm avatar bg-orange"><i className="fe fe-monitor"></i></span>
                                                        </div>
                                                        <Link scroll={false} href="#!" className="fw-medium">Sed Systems</Link>
                                                    </div>
                                                </td>
                                                <td>$221K</td>
                                                <td className="text-center">10%</td>
                                                <td><span className="badge bg-danger-transparent">Contract Failed</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar-sm avatar bg-success">JM</span>
                                                        </div>
                                                        <Link scroll={false} href="#!" className="fw-medium">Justo Manufacturers</Link>
                                                    </div>
                                                </td>
                                                <td>$521K</td>
                                                <td className="text-center">70%</td>
                                                <td><span className="badge bg-success-transparent">Won</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar-sm avatar bg-info">AD</span>
                                                        </div>
                                                        <Link scroll={false} href="#!" className="fw-medium">At Developers</Link>
                                                    </div>
                                                </td>
                                                <td>$51K</td>
                                                <td className="text-center">90%</td>
                                                <td><span className="badge bg-primary-transparent">Contract Sent</span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar-sm avatar bg-warning">JU</span>
                                                        </div>
                                                        <Link scroll={false} href="#!" className="fw-medium">Jumbotrics</Link>
                                                    </div>
                                                </td>
                                                <td>$51K</td>
                                                <td className="text-center">90%</td>
                                                <td><span className="badge bg-danger-transparent">Closed</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    ACTIVE CUSTOMERS
                                </Card.Title>
                                <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                            </Card.Header> 
                            <Card.Body className="p-0">
                                <ListGroup className="list-group list-group-flush active-customers-list">
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/flags/us_flag.jpg" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="fw-medium">United States</div>
                                            </div>
                                            <div>
                                                <span className="fw-medium">(32,879)</span><span className="text-success fs-12 ms-1"><i className="ti ti-trending-up me-1 align-middle ms-1 d-inline-flex"></i>0.65%</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/flags/russia_flag.jpg" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="fw-medium">Russia</div>
                                            </div>
                                            <div>
                                                <span className="fw-medium">(22,710)</span><span className="text-success fs-12 ms-2"><i className="ti ti-trending-up me-1 align-middle ms-1 d-inline-flex"></i>0.55%</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/flags/germany_flag.jpg" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="fw-medium">Germany</div>
                                            </div>
                                            <div>
                                                <span className="fw-medium">(36,291)</span><span className="text-danger fs-12 ms-2"><i className="ti ti-trending-down me-1 align-middle ms-1 d-inline-flex"></i>0.69%</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/flags/italy_flag.jpg" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="fw-medium">Italy</div>
                                            </div>
                                            <div>
                                                <span className="fw-medium">(45,870)</span><span className="text-success fs-12 ms-2"><i className="ti ti-trending-up me-1 align-middle ms-1 d-inline-flex"></i>0.86%</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/flags/uae_flag.jpg" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="fw-medium">Uae</div>
                                            </div>
                                            <div>
                                                <span className="fw-medium">(37,357)</span><span className="text-success fs-12 ms-2"><i className="ti ti-trending-up me-1 align-middle ms-1 d-inline-flex"></i>0.73%</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/flags/spain_flag.jpg" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="fw-medium">Spain</div>
                                            </div>
                                            <div>
                                                <span className="fw-medium">(34,798)</span><span className="text-danger fs-12 ms-2"><i className="ti ti-trending-down me-1 align-middle ms-1 d-inline-flex"></i>0.64%</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="lh-1" >
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/flags/argentina_flag.jpg" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="fw-medium">Argentina</div>
                                            </div>
                                            <div>
                                                <span className="fw-medium">(24,667)</span><span className="text-success fs-12 ms-2"><i className="ti ti-trending-up me-1 align-middle ms-1 d-inline-flex"></i>0.42%</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*  End:: row-3 */}

                {/*  Start:: row-4 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    DEAL STATISTICS
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
                                                <th className="text-center">S.No </th>
                                                <th>Deal </th>
                                                <th>Sales Rep</th>
                                                <th>Mail</th>
                                                <th>Amount</th>
                                                <th>Location</th>
                                                <th>Sales Cycle length</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center">
                                                    <span>
                                                        1
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>	Xenon Tech. Ed.</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-xs">
                                                                <img src="../../assets/images/faces/15.jpg" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div className="fs-14">Simon Cowall</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    mayorkelly@gmail.com
                                                </td>
                                                <td>
                                                    <span className="fw-medium fs-14">$4320.29</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-primary-transparent">Germany</span>
                                                </td>
                                                <td>
                                                    <span className="">43 Days</span>
                                                </td>
                                                <td>
                                                    <div className="hstack gap-2 fs-1">
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-success-light btn-wave"><i className="ri-download-2-line"></i></Link>
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-secondary-light btn-wave"><i className="ri-edit-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <span>
                                                        2
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">Ideal IT Sol.</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-xs">
                                                                <img src="../../assets/images/faces/4.jpg" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div className="fs-14">Meisha Kerr</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    andrewgarfield@gmail.com
                                                </td>
                                                <td>
                                                    <span className="fw-medium fs-14">$6745.99</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-secondary-transparent">Canada</span>
                                                </td>
                                                <td>
                                                    <span className="">45 Days</span>
                                                </td>
                                                <td>
                                                    <div className="hstack gap-2 fs-1">
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-success-light btn-wave"><i className="ri-download-2-line"></i></Link>
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-secondary-light btn-wave"><i className="ri-edit-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <span>
                                                        3
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">Inferno Xo</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-xs">
                                                                <img src="../../assets/images/faces/5.jpg" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div className="fs-14">Jessica</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    simoncowel234@gmail.com
                                                </td>
                                                <td>
                                                    <span className="fw-medium fs-14">$1176.89</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Singapore</span>
                                                </td>
                                                <td>
                                                    <span className="">50 Days</span>
                                                </td>
                                                <td>
                                                    <div className="hstack gap-2 fs-1">
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-success-light btn-wave"><i className="ri-download-2-line"></i></Link>
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-secondary-light btn-wave"><i className="ri-edit-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <span>
                                                        4
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">Myami Group & Tech.</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-xs">
                                                                <img src="../../assets/images/faces/6.jpg" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div className="fs-14">Amanda B</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    mirindahers@gmail.com
                                                </td>
                                                <td>
                                                    <span className="fw-medium fs-14">$1899.99</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-orange-transparent">USA</span>
                                                </td>
                                                <td>
                                                    <span className="">55 Days</span>
                                                </td>
                                                <td>
                                                    <div className="hstack gap-2 fs-1">
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-success-light btn-wave"><i className="ri-download-2-line"></i></Link>
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-secondary-light btn-wave"><i className="ri-edit-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <span>
                                                        5
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">Mevengo Tech Et Sed</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-xs">
                                                                <img src="../../assets/images/faces/11.jpg" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div className="fs-14">Jason Stathman</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    jacobsmith@gmail.com
                                                </td>
                                                <td>
                                                    <span className="fw-medium fs-14">$1867.29</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-info-transparent">Europe</span>
                                                </td>
                                                <td>
                                                    <span className="">30 Days</span>
                                                </td>
                                                <td>
                                                    <div className="hstack gap-2 fs-1">
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-success-light btn-wave"><i className="ri-download-2-line"></i></Link>
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-secondary-light btn-wave"><i className="ri-edit-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <span>
                                                        6
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">Lackme Info Et.</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-xs">
                                                                <img src="../../assets/images/faces/13.jpg" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div className="fs-14">Khabib Hussain</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Hussain@gmail.com
                                                </td>
                                                <td>
                                                    <span className="fw-medium fs-14">$2439.99</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-danger-transparent">Canada</span>
                                                </td>
                                                <td>
                                                    <span className="">35 Days</span>
                                                </td>
                                                <td>
                                                    <div className="hstack gap-2 fs-1">
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-success-light btn-wave"><i className="ri-download-2-line"></i></Link>
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-secondary-light btn-wave"><i className="ri-edit-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Card.Body>
                            <Card.Footer className="border-top-0"> 
                                <div className="d-flex align-items-center"> 
                                    <div> Showing 6 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
                                    <div className="ms-auto"> 
                                    <nav aria-label="Page navigation" className="pagination-style-4"> 
                                        <Pagination className="pagination mb-0"> 
                                            <Pagination.Item disabled>Prev</Pagination.Item>
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
                {/*  End:: row-4 */}
</Fragment>
);
};

export default Crm;