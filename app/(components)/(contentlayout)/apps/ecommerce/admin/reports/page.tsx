"use client"
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, Row } from "react-bootstrap";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Reportsdata from '@/shared/data/apps/ecommerce/admin/reportsdata';
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Reports = () => {
return ( 
    <Fragment>
            {/* Page Header */}
                <Seo title={"Reports"} />
                <Pageheader Heading="Reports" Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true}, {title:"Admin", active:true}, {title:"Reports", active:false},]} />
            {/* Page Header Close */}
                
                {/* Start::row-1 */}
                <Row>
                    <Col xxl={6} xl={12}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>ORDERS SUMMARY</Card.Title>
                                <Dropdown className="custom-dropdown">
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown"
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
                            <Card.Body className=" p-0">
                                <Row className="border-bottom border-block-end-dashed">
                                    <Col xxl={4} xl={4} lg={4} md={4} sm={4} className="col-12">
                                        <div className="p-4 border-sm-end border-inline-end-dashed text-sm-start text-center">
                                            <p className="fs-20 fw-semibold mb-0">1,117</p>
                                            <p className="mb-0 text-muted">Total Orders</p>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={4} sm={4} className="col-12">
                                        <div className="p-4 border-sm-end border-inline-end-dashed text-sm-start text-center">
                                            <p className="fs-20 fw-semibold mb-0"><span className="basic-subscription">742</span></p>
                                            <p className="mb-0 text-muted">Delivered Orders</p>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={4} sm={4} className="col-12">
                                        <div className="p-4 text-sm-start text-center">
                                            <p className="fs-20 fw-semibold mb-0"><span className="pro-subscription">259</span></p>
                                            <p className="mb-0 text-muted">Cancelled Orders</p>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="p-2" id="order-summary">
                                        <ReactApexChart options={Reportsdata.Reportsordersummary.options} series={Reportsdata.Reportsordersummary.series} type="line" width={"100%"} height={280} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={6} xl={12}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    PRODUCTS OVERVIEW
                                </Card.Title>
                                <Dropdown className="custom-dropdown">
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        View All<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu role="menu">
                                        <li><Dropdown.Item href="#!">Today</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Card.Header>
                            <Card.Body>
                                <div id="products-overview">
                                    <ReactApexChart options={Reportsdata.Productsoverview.options} series={Reportsdata.Productsoverview.series} type="line" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}

                {/*Start::row-2 */}
                <Row>
                    <Col xxl={3} xl={6} lg={6} md={6} className="col-12">
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    MOST USED BROWSERS
                                </Card.Title>
                                <Dropdown className="custom-dropdown">
                                    <Dropdown.Toggle variant="" href="#!" className="py-2 px-0 fs-12 no-caret text-muted"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu role="menu">
                                        <li><Dropdown.Item href="#!">Today</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item>
                                        </li>
                                        <li><Dropdown.Item href="#!">Last Week</Dropdown.Item>
                                        </li>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Card.Header>
                            <Card.Body className="py-0">
                                <div id="used-browsers" className="p-3">
                                    <ReactApexChart options={Reportsdata.Browsers.options} series={Reportsdata.Browsers.series} type="donut" width={"100%"} height={300} />
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="row row-cols-12">
                                    <div className="col p-0">
                                        <div className="text-center">
                                            <span className="text-muted fs-12 mb-1 hrm-jobs-legend published d-inline-block ms-2">Chrome
                                            </span>
                                            <div><span className="fs-16 fw-semibold">1,624</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col p-0">
                                        <div className="text-center">
                                            <span className="text-muted fs-12 mb-1 hrm-jobs-legend private d-inline-block ms-2">Firefox
                                            </span>
                                            <div><span className="fs-16 fw-semibold">1,267</span></div>
                                        </div>
                                    </div>
                                    <div className="col p-0">
                                        <div className="text-center">
                                            <span className="text-muted fs-12 mb-1 hrm-jobs-legend closed d-inline-block ms-2">Safari
                                            </span>
                                            <div><span className="fs-16 fw-semibold">1,153</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col p-0">
                                        <div className="text-center">
                                            <span className="text-muted fs-12 mb-1 hrm-jobs-legend onhold d-inline-block ms-2">Opera
                                            </span>
                                            <div><span className="fs-16 fw-semibold">1,153</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={6} lg={6} md={6} className="col-12">
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>TOTAL VENDORS</Card.Title>
                                <Dropdown className="custom-dropdown">
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 no-caret text-muted"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu role="menu">
                                        <li><Dropdown.Item href="#!">Today</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item>
                                        </li>
                                        <li><Dropdown.Item href="#!">Last Week</Dropdown.Item>
                                        </li>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Card.Header>
                            <Card.Body className=" p-0">
                                <div id="totalvendors-chart" className="p-3">
                                    <ReactApexChart options={Reportsdata.Totalvendors.options} series={Reportsdata.Totalvendors.series} type="donut" width={"100%"} height={230} />
                                </div>
                                <div className="row row-cols-12 border-top border-block-start-dashed">
                                    <div className="col">
                                        <div className="p-3 border-end border-inline-end-dashed">
                                            <div className="text-muted mb-1">Active
                                            </div>
                                            <div className="d-flex align-items-center"> <span
                                                    className="me-2 fs-22 fw-semibold">1,234</span> <span
                                                    className="text-success fs-11"><i
                                                        className="ri-arrow-up-s-fill align-middle me-1"></i>0.23%</span> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="p-3">
                                            <div className="text-muted mb-1">Inactive
                                            </div>
                                            <div className="d-flex align-items-center"> 
                                                <span className="me-2 fs-22 fw-semibold">1,754</span> 
                                                <span
                                                    className="text-danger fs-11"><i
                                                        className="ri-arrow-down-s-fill align-middle me-1"></i>0.11%</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={6} lg={6} md={6} className="col-12">                        
                        <Card className="custom-card overflow-hidden">
                            <div className="card-header">
                                <Card.Title>MONTHLY SALES REPORT</Card.Title>                                        
                            </div>
                            <Card.Body>
                                <div id="sales-report">
                                     <ReactApexChart options={Reportsdata.Monthlysales.options} series={Reportsdata.Monthlysales.series} type="line" width={"100%"} height={305} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={6} lg={6} md={6} className="col-12">
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>TOTAL CUSTOMERS</Card.Title>
                                <Dropdown className="custom-dropdown">
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 no-caret text-muted"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu role="menu">
                                        <li><Dropdown.Item href="#!">Today</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item>
                                        </li>
                                        <li><Dropdown.Item href="#!">Last Week</Dropdown.Item>
                                        </li>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Card.Header>
                            <Card.Body className=" p-0">
                                <div id="total-customers" className="p-3">
                                    <ReactApexChart options={Reportsdata.Totalcustomers.options} series={Reportsdata.Totalcustomers.series} type="donut" width={"100%"} height={230} />
                                </div>
                                <div className="row row-cols-12 border-top border-block-start-dashed">
                                    <div className="col">
                                        <div className="p-3 border-end border-inline-end-dashed">
                                            <div className="text-muted mb-1">Active
                                            </div>
                                            <div className="d-flex align-items-center"> <span
                                                    className="me-2 fs-22 fw-semibold">576</span> <span
                                                    className="text-success fs-11"><i
                                                        className="ri-arrow-up-s-fill align-middle me-1"></i>0.23%</span> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="p-3">
                                            <div className="text-muted mb-1">Inactive
                                            </div>
                                            <div className="d-flex align-items-center"> 
                                                <span className="me-2 fs-22 fw-semibold">876</span> 
                                                <span
                                                    className="text-danger fs-11"><i
                                                        className="ri-arrow-down-s-fill align-middle me-1"></i>0.11%</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-2 */}
    </Fragment>
    )
};

export default Reports;