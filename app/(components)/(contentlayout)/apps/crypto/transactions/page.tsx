"use client"
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, OverlayTrigger, Pagination, Row, Tooltip } from "react-bootstrap";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Invoicedata from '@/shared/data/pages/invoice/invoicelistdata';
import dynamic from "next/dynamic";
import CountUp from "react-countup";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Transactions = () => {
return ( 
    <Fragment>
                {/* Page Header */}
                    <Seo title={"Transactions"} />
                    <Pageheader Heading="Transactions" Pages={[{title:"Apps", active:true}, {title:"Crypto", active:true}, {title:"Transactions", active:false},]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={12}>
                        <Row>
                            <Col xl={6}>
                                <Row>
                                    <Col xxl={6}>
                                        <Card className="custom-card">
                                            <Card.Body className="p-4">
                                                <div className="d-flex align-items-start gap-3">
                                                    <div className="svg-icon-background bg-primary-transparent mb-3 svg-primary mx-auto"> 
                                                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"/></svg>
                                                    </div> 
                                                    <div className="flex-fill">
                                                        <h6 className="mb-2 fs-12">New</h6> 
                                                        <div className="pb-0 mt-0"> 
                                                            <div> 
                                                                <div className="d-flex align-items-center gap-2 mb-2">
                                                                    <h4 className="fw-medium mb-0"><CountUp className="count-up" end={42} />  </h4> 
                                                                    <span className="badge bg-primary">12,345</span>
                                                                </div>
                                                                <p className="text-muted fs-11 mb-0 lh-1">
                                                                    <span className="text-success me-1 fw-medium   d-inline-flex">
                                                                        <i className="ri-arrow-up-s-line me-1 align-middle"></i>3.25%
                                                                    </span>
                                                                    <span>this month</span>
                                                                </p>
                                                            </div> 
                                                        </div> 
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={6}>
                                        <Card className="custom-card">
                                            <Card.Body className="p-4">
                                                <div className="d-flex align-items-start gap-3">
                                                    <div className="svg-icon-background bg-secondary-transparent mb-3 svg-secondary mx-auto"> 
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z"/></svg>
                                                    </div> 
                                                    <div className="flex-fill">
                                                        <h6 className="mb-2 fs-12">Completed</h6> 
                                                        <div> 
                                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                                <h4 className="fw-medium mb-0"><CountUp className="count-up" end={321} /></h4> 
                                                                <span className="badge bg-secondary">4,176</span>
                                                            </div>    
                                                            <p className="text-muted fs-11 mb-0 lh-1">
                                                                <span className="text-danger me-1 fw-medium   d-inline-flex">
                                                                    <i className="ri-arrow-down-s-line me-1 align-middle"></i>1.16%
                                                                </span>
                                                                <span>this month</span>
                                                            </p>
                                                        </div> 
                                                    </div>
                                                </div>    
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={6}>
                                        <Card className="custom-card">
                                            <Card.Body className="p-4">
                                                <div className="d-flex align-items-start gap-3">
                                                    <div className="svg-icon-background bg-success-transparent mb-3 svg-success mx-auto"> 
                                                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z"/></svg>
                                                    </div> 
                                                    <div className="flex-fill">
                                                        <h6 className="mb-2 fs-12">Pending</h6> 
                                                        <div> 
                                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                                <h4 className="fw-medium mb-0"><CountUp className="count-up" end={81} /></h4> 
                                                                <span className="badge bg-success">7,064</span>
                                                            </div>    
                                                            <p className="text-muted fs-11 mb-0 lh-1">
                                                                <span className="text-success me-1 fw-medium   d-inline-flex">
                                                                    <i className="ri-arrow-up-s-line me-1 align-middle"></i>0.25%
                                                                </span>
                                                                <span>this month</span>
                                                            </p>
                                                        </div> 
                                                    </div>
                                                </div>    
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={6}>
                                        <Card className="custom-card">
                                            <Card.Body className="p-4">
                                                <div className="d-flex align-items-start gap-3">
                                                    <div className="svg-icon-background bg-orange-transparent mb-3 svg-orange mx-auto"> 
                                                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z"/></svg>
                                                    </div> 
                                                    <div className="flex-fill">
                                                        <h6 className="mb-2 fs-12">Inprogress</h6> 
                                                        <div> 
                                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                                <h4 className="fw-medium mb-0"><CountUp className="count-up" end={33} />K</h4> 
                                                                <span className="badge bg-orange border">1,105</span>
                                                            </div>    
                                                            <p className="text-muted fs-11 mb-0 lh-1">
                                                                <span className="text-success me-1 fw-semibFold   d-inline-flex">
                                                                    <i className="ri-arrow-down-s-line me-1 align-middle"></i>0.46%
                                                                </span>
                                                                <span>this month</span>
                                                            </p>
                                                        </div> 
                                                    </div>
                                                </div>    
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={6}>
                                <Card className="custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                            Transactions Statistics
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body className="px-0 pb-0">
                                        <div id="transactions">
                                            <ReactApexChart options={Invoicedata.Invoicestatistics.options} series={Invoicedata.Invoicestatistics.series} type="bar" width={"100%"} height={180} />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header className=" justify-content-between">
                                <Card.Title>
                                    Transaction History
                                </Card.Title>
                                <div className="d-flex flex-wrap gap-2">
                                    <div>
                                        <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                    </div>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="" href="#!" className="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                            Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu role="menu">
                                            <li><Dropdown.Item  href="#!">This Week</Dropdown.Item></li>
                                            <li><Dropdown.Item  href="#!">This Month</Dropdown.Item></li>
                                            <li><Dropdown.Item  href="#!">This Year</Dropdown.Item></li>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <div>
                                        <Button variant="" className="btn btn-secondary btn-sm btn-wave">View All</Button>
                                    </div>
                                </div>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th scope="col">Sender</th>
                                                <th scope="col">Transaction Hash</th>
                                                <th scope="col">Coin</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Receiver</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span className="avatar avatar-sm avatar-rounded bg-light">
                                                        <i className="ti ti-arrow-narrow-up text-success fw-medium fs-16"></i>
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/faces/10.jpg" alt="" /> 
                                                        </span>
                                                        <div className="fw-medium">Jack Miller</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>#1242232401</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/regular/Bitcoin.svg" alt="" /> 
                                                        </span>
                                                        <div className="fw-medium">Bitcoin</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>24,Jul 2024 - 4:23PM</span>
                                                </td>
                                                <td>
                                                    <span className="text-success">+0.041</span>
                                                </td>
                                                <td>
                                                    <span>Texas Steel</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Success</span>
                                                </td>
                                                <td>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>download</Tooltip>}>
                                                     <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-download-2-line"></i></Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                    <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><i className="ri-delete-bin-5-line"></i></Button>
                                                </OverlayTrigger>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="avatar avatar-sm avatar-rounded bg-light">
                                                        <i className="ti ti-arrow-narrow-down text-danger fw-medium fs-16"></i>
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/faces/5.jpg" alt="" /> 
                                                        </span>
                                                        <div className="fw-medium">Samantha Taylor</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>#1242232402</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/regular/Dash.svg" alt="" /> 
                                                        </span>
                                                        <div className="fw-medium">Dashcoin</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>20,Jul 2024 - 12:47PM</span>
                                                </td>
                                                <td>
                                                    <span className="text-danger">-0.284</span>
                                                </td>
                                                <td>
                                                    <span>Stuart Little</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-warning-transparent">Pending</span>
                                                </td>
                                                <td>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>download</Tooltip>}>
                                                     <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-download-2-line"></i></Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                    <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><i className="ri-delete-bin-5-line"></i></Button>
                                                </OverlayTrigger>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="avatar avatar-sm avatar-rounded bg-light">
                                                        <i className="ti ti-arrow-narrow-up text-success fw-medium fs-16"></i>
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/faces/12.jpg" alt="" /> 
                                                        </span>
                                                        <div className="fw-medium">Brian Jhonson</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>#1242232403</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/regular/Euro.svg" alt="" /> 
                                                        </span>
                                                        <div className="fw-medium">Euro</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>14,Aug 2024 - 10:25AM</span>
                                                </td>
                                                <td>
                                                    <span className="text-success">+0.943</span>
                                                </td>
                                                <td>
                                                    <span>Melissa Smith</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Success</span>
                                                </td>
                                                <td>
                                                <OverlayTrigger placement="top" overlay={<>download</>}>
                                                     <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-download-2-line"></i></Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                    <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><i className="ri-delete-bin-5-line"></i></Button>
                                                </OverlayTrigger>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="avatar avatar-sm avatar-rounded bg-light">
                                                        <i className="ti ti-arrow-narrow-up text-success fw-medium fs-16"></i>
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/faces/15.jpg" alt="" /> 
                                                        </span>
                                                        <div className="fw-medium">Liam Anderson</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>#1242232404</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" /> 
                                                        </span>
                                                        <div className="fw-medium">Etherium</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>10,Jul 2024 - 4:14PM</span>
                                                </td>
                                                <td>
                                                    <span className="text-success">+0.582</span>
                                                </td>
                                                <td>
                                                    <span>Alexander Clark</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-danger-transparent">Failed</span>
                                                </td>
                                                <td>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>download</Tooltip>}>
                                                     <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-download-2-line"></i></Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                    <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><i className="ri-delete-bin-5-line"></i></Button>
                                                </OverlayTrigger>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="avatar avatar-sm avatar-rounded bg-light">
                                                        <i className="ti ti-arrow-narrow-up text-success fw-medium fs-16"></i>
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/faces/4.jpg" alt="" /> 
                                                        </span>
                                                        <div className="fw-medium">Isabella Brown</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>#1242232405</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/regular/Golem.svg" alt="" /> 
                                                        </span>
                                                        <div className="fw-medium">Golem</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>19,Aug 2024 - 11:35AM</span>
                                                </td>
                                                <td>
                                                    <span className="text-success">+0.290</span>
                                                </td>
                                                <td>
                                                    <span>Elijah Davis</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Success</span>
                                                </td>
                                                <td>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>download</Tooltip>}>
                                                     <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-download-2-line"></i></Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                    <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><i className="ri-delete-bin-5-line"></i></Button>
                                                </OverlayTrigger>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="avatar avatar-sm avatar-rounded bg-light">
                                                        <i className="ti ti-arrow-narrow-down text-danger fw-medium fs-16"></i>
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/faces/7.jpg" alt="" /> 
                                                        </span>
                                                        <div className="fw-medium">Sophia Lee</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>#1242232406</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/regular/litecoin.svg" alt="" /> 
                                                        </span>
                                                        <div className="fw-medium">Litecoin</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>12,Jun 2024 - 2:45PM</span>
                                                </td>
                                                <td>
                                                    <span className="text-danger">-0.147</span>
                                                </td>
                                                <td>
                                                    <span>Harper Taylor</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Success</span>
                                                </td>
                                                <td>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>download</Tooltip>}>
                                                     <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-download-2-line"></i></Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                    <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><i className="ri-delete-bin-5-line"></i></Button>
                                                </OverlayTrigger>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="avatar avatar-sm avatar-rounded bg-light">
                                                        <i className="ti ti-arrow-narrow-up text-success fw-medium fs-16"></i>
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/faces/6.jpg" alt="" /> 
                                                        </span>
                                                        <div className="fw-medium">Evelyn Clark</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>#1242232407</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/regular/Ripple.svg" alt="" /> 
                                                        </span>
                                                        <div className="fw-medium">Ripple</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>27,Jul 2024 - 10:18AM</span>
                                                </td>
                                                <td>
                                                    <span className="text-success">+1.05</span>
                                                </td>
                                                <td>
                                                    <span>William Brown</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Success</span>
                                                </td>
                                                <td>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>download</Tooltip>}>
                                                     <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-download-2-line"></i></Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                    <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><i className="ri-delete-bin-5-line"></i></Button>
                                                </OverlayTrigger>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="avatar avatar-sm avatar-rounded bg-light">
                                                        <i className="ti ti-arrow-narrow-up text-success fw-medium fs-16"></i>
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/faces/11.jpg" alt="" /> 
                                                        </span>
                                                        <div className="fw-medium">Liam Anderson</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>#1242232408</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/regular/monero.svg" alt="" /> 
                                                        </span>
                                                        <div className="fw-medium">Monero</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>16,Aug 2024 - 9:25PM</span>
                                                </td>
                                                <td>
                                                    <span className="text-success">+0.625</span>
                                                </td>
                                                <td>
                                                    <span>Amelia Davis</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-info-transparent">Inprogress</span>
                                                </td>
                                                <td>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>download</Tooltip>}>
                                                     <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-download-2-line"></i></Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                    <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><i className="ri-delete-bin-5-line"></i></Button>
                                                </OverlayTrigger>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="avatar avatar-sm avatar-rounded bg-light">
                                                        <i className="ti ti-arrow-narrow-down text-danger fw-medium fs-16"></i>
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/faces/2.jpg" alt="" /> 
                                                        </span>
                                                        <div className="fw-medium">Harper Taylor</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>#1242232409</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/regular/Zcash.svg" alt="" /> 
                                                        </span>
                                                        <div className="fw-medium">Zcash</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>24,Jul 2024 - 12:47PM</span>
                                                </td>
                                                <td>
                                                    <span className="text-danger">-0.293</span>
                                                </td>
                                                <td>
                                                    <span>Benjamin Martinez</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-info-transparent">Inprogress</span>
                                                </td>
                                                <td>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>download</Tooltip>}>
                                                     <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-download-2-line"></i></Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                    <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><i className="ri-delete-bin-5-line"></i></Button>
                                                </OverlayTrigger>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-bottom-0">
                                                    <span className="avatar avatar-sm avatar-rounded bg-light">
                                                        <i className="ti ti-arrow-narrow-up text-success fw-medium fs-16"></i>
                                                    </span>
                                                </td>
                                                <td className="border-bottom-0">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/faces/16.jpg" alt="" /> 
                                                        </span>
                                                        <div className="fw-medium">Lucas Taylor</div>
                                                    </div>
                                                </td>
                                                <td className="border-bottom-0">
                                                    <span>#1242232410</span>
                                                </td>
                                                <td className="border-bottom-0">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/regular/Decred.svg" alt="" /> 
                                                        </span>
                                                        <div className="fw-medium">Decred</div>
                                                    </div>
                                                </td>
                                                <td className="border-bottom-0">
                                                    <span>24,Jul 2024 - 12:47PM</span>
                                                </td>
                                                <td className="border-bottom-0">
                                                    <span className="text-success">+0.893</span>
                                                </td>
                                                <td className="border-bottom-0">
                                                    <span>Mia Wilson</span>
                                                </td>
                                                <td className="border-bottom-0">
                                                    <span className="badge bg-success-transparent">Success</span>
                                                </td>
                                                <td className="border-bottom-0">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>download</Tooltip>}>
                                                     <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-download-2-line"></i></Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                    <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><i className="ri-delete-bin-5-line"></i></Button>
                                                </OverlayTrigger>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>  
                            <Card.Footer>
                                <nav aria-label="Page navigation">
                                    <Pagination className="mb-0 float-end">
                                        <Pagination.Item disabled>Previous</Pagination.Item>
                                        <Pagination.Item>1</Pagination.Item>
                                        <Pagination.Item active>2</Pagination.Item>
                                        <Pagination.Item>3</Pagination.Item>
                                        <Pagination.Item className="pagination-next">Next</Pagination.Item>
                                    </Pagination>
                                </nav>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    )
};

export default Transactions;