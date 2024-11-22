"use client"
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, ListGroup, Pagination, ProgressBar, Row } from "react-bootstrap";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import * as Marketcapdata from "../../../../../../shared/data/apps/crypto/marketcapdata";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Marketcap = () => {
return ( 
    <Fragment>
                {/* Page Header */}
                    <Seo title={"Marketcap"} />
                    <Pageheader Heading="Marketcap" Pages={[{title:"Apps", active:true}, {title:"Crypto", active:true}, {title:"Marketcap", active:false},]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xxl={3} xl={6} lg={12} className="">
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center mb-2">
                                    <div className="d-flex align-items-center">
                                        <div className="me-2">
                                            <span className="avatar avatar-md avatar-rounded bg-light p-2">
                                                <img src="../../../assets/images/crypto-currencies/regular/Bitcoin.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="mb-0 fw-medium">
                                            Bitcoin - BTC
                                        </div>
                                    </div>
                                    <div className="ms-auto">
                                        <div id="bitcoin-chart">
                                            <ReactApexChart options={Marketcapdata.CapBTC.options} series={Marketcapdata.CapBTC.series} type="line" height={35} width={120} />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-end">
                                    <div>
                                        <p className="mb-1">BTC / USD</p>
                                        <p className="fs-20 mb-0 fw-medium lh-1 text-primary">$35,876.29</p>
                                    </div>
                                    <div className="ms-auto text-end">
                                        <p className="mb-0">$0.04</p>
                                        <p className="mb-0 text-muted"><span className="text-muted">Vol:</span>(+2.33%)</p>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer className="p-0">
                                <div className="list-group border-0">
                                    <Link scroll={false} href="#!" className="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom py-3">
                                        <div className="d-flex w-100 justify-content-between align-items-center">
                                            <p className="tx-14 mb-0 font-weight-semibold text-dark">Price Change <span className="badge bg-primary-transparent ms-3 text-primary">Increased</span></p>
                                            <p className="text-success mb-0 font-weight-normal tx-13">
                                                <span className="numberfont">+280.30(0.96%)</span> today
                                            </p>
                                        </div>
                                    </Link>
                                    <Link scroll={false} href="#!" className="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom py-3">
                                        <div className="d-flex w-100 justify-content-between align-items-center">
                                            <p className="tx-14 mb-0 font-weight-semibold text-dark">Market Rank<span className="badge bg-secondary-transparent ms-3">3 Years</span></p>
                                            <p className="text-dark mb-0 tx-15">
                                                <span className="numberfont">#1</span>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={6} lg={12} className="">
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center mb-2">
                                    <div className="d-flex align-items-center">
                                        <div className="me-2">
                                            <span className="avatar avatar-md avatar-rounded bg-light p-2">
                                                <img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="mb-0 fw-medium">
                                            Etherium - ETH
                                        </div>
                                    </div>
                                    <div className="ms-auto">
                                        <div id="etherium-chart">
                                             <ReactApexChart options={Marketcapdata.CapETH.options} series={Marketcapdata.CapETH.series} type="line" height={35} width={120} />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-end">
                                    <div>
                                        <p className="mb-1">ETH / USD</p>
                                        <p className="fs-20 mb-0 fw-medium lh-1 text-primary">$31,244.12</p>
                                    </div>
                                    <div className="ms-auto text-end">
                                        <p className="mb-0">$2.57</p>
                                        <p className="mb-0 text-muted"><span className="text-muted">Vol:</span>(+13.45%)</p>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer className="p-0">
                                <div className="list-group border-0">
                                    <Link scroll={false} href="#!" className="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom py-3">
                                        <div className="d-flex w-100 justify-content-between align-items-center">
                                            <p className="tx-14 mb-0 font-weight-semibold text-dark">Price Change <span className="badge bg-primary-transparent ms-3 text-primary">Increased</span></p>
                                            <p className="text-success mb-0 font-weight-normal tx-13">
                                                <span className="numberfont">+2,044.24(1.32%)</span> today
                                            </p>
                                        </div>
                                    </Link>
                                    <Link scroll={false} href="#!" className="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom py-3">
                                        <div className="d-flex w-100 justify-content-between align-items-center">
                                            <p className="tx-14 mb-0 font-weight-semibold text-dark">Market Rank</p>
                                            <p className="text-dark mb-0 tx-15">
                                                <span className="numberfont">#2</span>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={6} lg={12} className="">
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center mb-2">
                                    <div className="d-flex align-items-center">
                                        <div className="me-2">
                                            <span className="avatar avatar-md avatar-rounded bg-light p-2">
                                                <img src="../../../assets/images/crypto-currencies/regular/Dash.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="mb-0 fw-medium">
                                            Dash - DASH
                                        </div>
                                    </div>
                                    <div className="ms-auto">
                                        <div id="dashcoin-chart">
                                            <ReactApexChart options={Marketcapdata.CapDASH.options} series={Marketcapdata.CapDASH.series} type="line" height={35} width={120} />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-end">
                                    <div>
                                        <p className="mb-1">DASH / USD</p>
                                        <p className="fs-20 mb-0 fw-medium lh-1 text-primary">$26,345.000</p>
                                    </div>
                                    <div className="ms-auto text-end">
                                        <p className="mb-0">$12.32</p>
                                        <p className="mb-0 text-muted"><span className="text-muted">Vol:</span>(+112.95%)</p>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer className="p-0">
                                <div className="list-group border-0">
                                    <Link scroll={false} href="#!" className="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom py-3">
                                        <div className="d-flex w-100 justify-content-between align-items-center">
                                            <p className="tx-14 mb-0 font-weight-semibold text-dark">Price Change <span className="badge bg-primary-transparent ms-3 text-primary">Increased</span></p>
                                            <p className="text-success mb-0 font-weight-normal tx-13">
                                                <span className="numberfont">+40.17 (1.52%)</span> today
                                            </p>
                                        </div>
                                    </Link>
                                    <Link scroll={false} href="#!" className="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom py-3">
                                        <div className="d-flex w-100 justify-content-between align-items-center">
                                            <p className="tx-14 mb-0 font-weight-semibold text-dark">Market Rank</p>
                                            <p className="text-dark mb-0 tx-15">
                                                <span className="numberfont">#105</span>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={6} lg={12} className="">
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    My Top Currencies
                                </Card.Title>
                                <div>
                                    <Link scroll={false} href="#!" className="fw-medium text-success fs-13 text-decoration-underline">View All</Link>
                                </div>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                            <div className="d-flex align-items-center gap-2">
                                                <div>
                                                    <span className="avatar avatar-sm p-1 bg-light">
                                                        <img src="../../../assets/images/crypto-currencies/regular/Bitcoin.svg" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="d-block fw-medium">Bitcoin</span>
                                                    <span className="d-block text-muted fs-12 fw-normal">$29,948.80</span>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="fs-12 text-muted">Max Limit</span>
                                                <span className="fw-medium d-block">50 BTC</span>
                                            </div>
                                            <div>
                                                <span className="fs-12 text-muted">My Volume</span>
                                                <span className="fw-medium d-block">31.2450 BTC</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                            <div className="d-flex align-items-center gap-2">
                                                <div>
                                                    <span className="avatar avatar-sm p-1 bg-light">
                                                        <img src="../../../assets/images/crypto-currencies/regular/litecoin.svg" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="d-block fw-medium">Litecon</span>
                                                    <span className="d-block text-muted fs-12 fw-normal">$9332.98</span>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="fs-12 text-muted">Max Limit</span>
                                                <span className="fw-medium d-block">200 LTC</span>
                                            </div>
                                            <div className="text-end">
                                                <span className="fs-12 text-muted">My Volume</span>
                                                <span className="fw-medium d-block">38.0023 LTC</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                            <div className="d-flex align-items-center gap-2">
                                                <div>
                                                    <span className="avatar avatar-sm p-1 bg-light">
                                                        <img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="d-block fw-medium">Etherium</span>
                                                    <span className="d-block text-muted fs-12 fw-normal">$1,895.96</span>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="fs-12 text-muted">Max Limit</span>
                                                <span className="fw-medium d-block">100 ETH</span>
                                            </div>
                                            <div>
                                                <span className="fs-12 text-muted">My Volume</span>
                                                <span className="fw-medium d-block">69.2412 BTC</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}

                {/* Start::row-2  */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    Crypto MarketCap
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
                                            <li><Dropdown.Item href="#!">Market Cap</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Price</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Trading Volume</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Price Change (24h)</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Rank</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">A - Z</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">All-Time High (ATH)</Dropdown.Item></li>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <div>
                                        <Button variant="" className="btn btn-secondary btn-sm btn-wave waves-effect waves-light">View All</Button>
                                    </div>
                                </div>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th scope="col" className="fw-medium">#</th>
                                                <th scope="col">Crypto Name</th>
                                                <th scope="col">MarketCap</th>
                                                <th scope="col">Price<span className="text-muted ms-1">(USD)</span></th>
                                                <th scope="col">1h Change</th>
                                                <th scope="col">24h Change</th>
                                                <th scope="col">Volume (24h)</th>
                                                <th scope="col">Circulating Supply</th>
                                                <th scope="col">last 1Week</th>
                                                <th scope="col">Trade</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center">
                                                    <Link scroll={false} href="#!"><i className="ri-star-line fs-16 text-muted"></i></Link>
                                                </td>
                                                <td>1</td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-xs avatar-rounded">
                                                                <img src="../../../assets/images/crypto-currencies/square-color/Bitcoin.svg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="fw-medium"><Link scroll={false} href="#!">Bitcoin (BTC)</Link></div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">$582.23B</span>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">
                                                        <Link scroll={false} href="#!">$29,948.80</Link>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-danger fw-medium"><i className="ti ti-arrow-narrow-down fs-15 fw-medium"></i>0.483%</span>
                                                </td>
                                                <td>
                                                    <span className="text-success fw-medium"><i className="ti ti-arrow-narrow-up fs-15 fw-medium"></i>0.239%</span>
                                                </td>
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <span className="d-block fw-medium">$11.79B USD</span>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <span className="fw-medium d-block mb-2">
                                                            19.43M of (21M)
                                                        </span>
                                                        <ProgressBar className="progress-stacked progress-xs w-75">
                                                            <ProgressBar variant="success" className="progress-bar bg-success op-5" now={88} key={1} />
                                                            <ProgressBar variant="danger" className="progress-bar bg-danger op-5" now={12} key={2} />
                                                        </ProgressBar>
                                                    </Link>    
                                                </td>
                                                <td>
                                                    <div id="btc-chart">
                                                        <ReactApexChart options={Marketcapdata.CapBitcoin.options} series={Marketcapdata.CapBitcoin.series} type="line" height={35} width={120} />
                                                    </div>
                                                </td>
                                                <td>
                                                    <Button variant="" className="btn btn-success-light btn-sm">Trade</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <Link scroll={false} href="#!"><i className="ri-star-line fs-16 text-muted"></i></Link>
                                                </td>
                                                <td>2</td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-xs avatar-rounded">
                                                                <img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="fw-medium"><Link scroll={false} href="#!">Etherium (ETH)</Link></div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">$226.91B</span>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">
                                                        <Link scroll={false} href="#!">$1,895.96</Link>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-danger fw-medium"><i className="ti ti-arrow-narrow-down fs-15 fw-medium"></i>0.87%</span>
                                                </td>
                                                <td>
                                                    <span className="text-danger fw-medium"><i className="ti ti-arrow-narrow-down fs-15 fw-medium"></i>0.29%</span>
                                                </td>
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <span className="d-block fw-medium">$2.83B USD</span>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <span className="fw-medium d-block">
                                                            120M
                                                        </span>
                                                    </Link>    
                                                </td>
                                                <td>
                                                    <div id="eth-chart">
                                                        <ReactApexChart options={Marketcapdata.CapEtherium.options} series={Marketcapdata.CapEtherium.series} type="line" height={35} width={120} />
                                                    </div>
                                                </td>
                                                <td>
                                                    <Button variant="" className="btn btn-success-light btn-sm">Trade</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <Link scroll={false} href="#!"><i className="ri-star-line fs-16 text-muted"></i></Link></td>
                                                <td>3</td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-xs avatar-rounded">
                                                                <img src="../../../assets/images/crypto-currencies/square-color/Golem.svg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="fw-medium"><Link scroll={false} href="#!">Golem (GLM)</Link></div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">$202.07M</span>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">
                                                        <Link scroll={false} href="#!">$0.201472</Link>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-success fw-medium"><i className="ti ti-arrow-narrow-up fs-15 fw-medium"></i>0.61%</span>
                                                </td>
                                                <td>
                                                    <span className="text-danger fw-medium"><i className="ti ti-arrow-narrow-down fs-15 fw-medium"></i>34.96%</span>
                                                </td>
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <span className="d-block fw-medium">$2,112,645 USD</span>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <span className="fw-medium d-block mb-2">
                                                            1,000M
                                                        </span>
                                                        <ProgressBar className="progress-stacked progress-xs w-75" now={100} variant="success"  />
                                                    </Link>    
                                                </td>
                                                <td>
                                                    <div id="glm-chart">
                                                        <ReactApexChart options={Marketcapdata.CapEtherium.options} series={Marketcapdata.CapEtherium.series} type="line" height={35} width={120} />
                                                    </div>
                                                </td>
                                                <td>
                                                    <Button variant="" className="btn btn-success-light btn-sm">Trade</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <Link scroll={false} href="#!"><i className="ri-star-line fs-16 text-muted"></i></Link></td>
                                                <td>4</td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-xs avatar-rounded">
                                                                <img src="../../../assets/images/crypto-currencies/square-color/Dash.svg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="fw-medium"><Link scroll={false} href="#!">Dash (DASH)</Link></div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">$365.877M</span>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">
                                                        <Link scroll={false} href="#!">$32.13</Link>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-success fw-medium"><i className="ti ti-arrow-narrow-up fs-15 fw-medium"></i>0.59%</span>
                                                </td>
                                                <td>
                                                    <span className="text-success fw-medium"><i className="ti ti-arrow-narrow-down fs-15 fw-medium"></i>1.24%</span>
                                                </td>
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <span className="d-block fw-medium">$3.61M USD</span>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <span className="fw-medium d-block mb-2">
                                                            11.37M of (18.92M)
                                                        </span>
                                                         <ProgressBar className="progress-stacked progress-xs w-75">
                                                            <ProgressBar variant="success" className="progress-bar bg-success op-5" now={56} key={1} />
                                                            <ProgressBar variant="danger" className="progress-bar bg-danger op-5" now={44} key={2} />
                                                        </ProgressBar>
                                                    </Link>    
                                                </td>
                                                <td>
                                                    <div id="dash-chart">
                                                         <ReactApexChart options={Marketcapdata.CapEtherium.options} series={Marketcapdata.CapEtherium.series} type="line" height={35} width={120} />
                                                    </div>
                                                </td>
                                                <td>
                                                    <Button variant="" className="btn btn-success-light btn-sm">Trade</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <Link scroll={false} href="#!"><i className="ri-star-line fs-16 text-muted"></i></Link></td>
                                                <td>5</td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-xs avatar-rounded">
                                                                <img src="../../../assets/images/crypto-currencies/square-color/Litecoin.svg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="fw-medium"><Link scroll={false} href="#!">Litecoin (LTC)</Link></div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">$6.80B</span>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">
                                                        <Link scroll={false} href="#!">$92.98</Link>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-danger fw-medium"><i className="ti ti-arrow-narrow-up fs-15 fw-medium"></i>0.90%</span>
                                                </td>
                                                <td>
                                                    <span className="text-success fw-medium"><i className="ti ti-arrow-narrow-down fs-15 fw-medium"></i>2.22%</span>
                                                </td>
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <span className="d-block fw-medium">$11.46B USD</span>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <span className="fw-medium d-block mb-2">
                                                            73.40M
                                                        </span>
                                                        <ProgressBar variant="success" className="progress-stacked progress-xs w-75" now={100}  />
                                                    </Link>    
                                                </td>
                                                <td>
                                                    <div id="lite-chart">
                                                        <ReactApexChart options={Marketcapdata.CapBitcoin.options} series={Marketcapdata.CapBitcoin.series} type="line" height={35} width={120} />
                                                    </div>
                                                </td>
                                                <td>
                                                    <Button variant="" className="btn btn-success-light btn-sm">Trade</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <Link scroll={false} href="#!"><i className="ri-star-line fs-16 text-muted"></i></Link></td>
                                                <td>6</td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-xs avatar-rounded">
                                                                <img src="../../../assets/images/crypto-currencies/square-color/Ripple.svg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="fw-medium"><Link scroll={false} href="#!">Ripple (XRP)</Link></div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">$42.48B</span>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">
                                                        <Link scroll={false} href="#!">$0.83</Link>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-success fw-medium"><i className="ti ti-arrow-narrow-up fs-15 fw-medium"></i>0.01%</span>
                                                </td>
                                                <td>
                                                    <span className="text-success fw-medium"><i className="ti ti-arrow-narrow-down fs-15 fw-medium"></i>0.91%</span>
                                                </td>
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <span className="d-block fw-medium">$2.99B USD</span>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <span className="fw-medium d-block mb-2">
                                                            52.54B of (100B)
                                                        </span>
                                                         <ProgressBar className="progress-stacked progress-xs w-75">
                                                            <ProgressBar variant="success" className="progress-bar bg-success op-5" now={52} key={1} />
                                                            <ProgressBar variant="danger" className="progress-bar bg-danger op-5" now={48} key={2} />
                                                        </ProgressBar>
                                                    </Link>    
                                                </td>
                                                <td>
                                                    <div id="ripple-chart">
                                                    <ReactApexChart options={Marketcapdata.CapEtherium.options} series={Marketcapdata.CapEtherium.series} type="line" height={35} width={120} />
                                                    </div>
                                                </td>
                                                <td>
                                                    <Button variant="" className="btn btn-success-light btn-sm">Trade</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <Link scroll={false} href="#!"><i className="ri-star-line fs-16 text-muted"></i></Link></td>
                                                <td>7</td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-xs avatar-rounded">
                                                                <img src="../../../assets/images/crypto-currencies/square-color/EOS.svg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="fw-medium"><Link scroll={false} href="#!">EOS</Link></div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">$85.2M</span>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">
                                                        <Link scroll={false} href="#!">$0.765957</Link>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-danger fw-medium"><i className="ti ti-arrow-narrow-up fs-15 fw-medium"></i>0.61%</span>
                                                </td>
                                                <td>
                                                    <span className="text-danger fw-medium"><i className="ti ti-arrow-narrow-down fs-15 fw-medium"></i>20.65%</span>
                                                </td>
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <span className="d-block fw-medium">$116.91M USD</span>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <span className="fw-medium d-block mb-2">
                                                            10.1B of (105B)
                                                        </span>
                                                         <ProgressBar className="progress-stacked progress-xs w-75">
                                                            <ProgressBar variant="success" className="progress-bar bg-success op-5" now={10} key={1} />
                                                            <ProgressBar variant="danger" className="progress-bar bg-danger op-5" now={90} key={2} />
                                                        </ProgressBar>
                                                    </Link>    
                                                </td>
                                                <td>
                                                    <div id="eos-chart">
                                                    <ReactApexChart options={Marketcapdata.CapEtherium.options} series={Marketcapdata.CapEtherium.series} type="line" height={35} width={120} />
                                                    </div>
                                                </td>
                                                <td>
                                                    <Button variant="" className="btn btn-success-light btn-sm">Trade</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <Link scroll={false} href="#!"><i className="ri-star-line fs-16 text-muted"></i></Link></td>
                                                <td>8</td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-xs avatar-rounded">
                                                                <img src="../../../assets/images/crypto-currencies/square-color/Bytecoin.svg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="fw-medium"><Link scroll={false} href="#!">Bytecoin (BCN)</Link></div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">$6.2M</span>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">
                                                        <Link scroll={false} href="#!">$0.00039</Link>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-danger fw-medium"><i className="ti ti-arrow-narrow-up fs-15 fw-medium"></i>25.24%</span>
                                                </td>
                                                <td>
                                                    <span className="text-danger fw-medium"><i className="ti ti-arrow-narrow-down fs-15 fw-medium"></i>27.12%</span>
                                                </td>
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <span className="d-block fw-medium">$6,184 USD</span>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <span className="fw-medium d-block mb-2">
                                                            184.02B of (184.07B)
                                                        </span>
                                                         <ProgressBar className="progress-stacked progress-xs w-75">
                                                            <ProgressBar variant="success" className="progress-bar bg-success op-5" now={99} key={1} />
                                                            <ProgressBar variant="danger" className="progress-bar bg-danger op-5" now={1} key={2} />
                                                        </ProgressBar>
                                                    </Link>    
                                                </td>
                                                <td>
                                                    <div id="bytecoin-chart">
                                                    <ReactApexChart options={Marketcapdata.CapBitcoin.options} series={Marketcapdata.CapBitcoin.series} type="line" height={35} width={120} />
                                                    </div>
                                                </td>
                                                <td>
                                                    <Button variant="" className="btn btn-success-light btn-sm">Trade</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <Link scroll={false} href="#!"><i className="ri-star-line fs-16 text-muted"></i></Link></td>
                                                <td>9</td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-xs avatar-rounded">
                                                                <img src="../../../assets/images/crypto-currencies/square-color/IOTA.svg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="fw-medium"><Link scroll={false} href="#!">IOTA</Link></div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">$510.429M</span>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">
                                                        <Link scroll={false} href="#!">$0.184992</Link>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-danger fw-medium"><i className="ti ti-arrow-narrow-up fs-15 fw-medium"></i>1.08%</span>
                                                </td>
                                                <td>
                                                    <span className="text-danger fw-medium"><i className="ti ti-arrow-narrow-down fs-15 fw-medium"></i>1.41%</span>
                                                </td>
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <span className="d-block fw-medium">$7.50M USD</span>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <span className="fw-medium d-block">
                                                            2.78B
                                                        </span>
                                                    </Link>    
                                                </td>
                                                <td>
                                                    <div id="iota-chart">
                                                    <ReactApexChart options={Marketcapdata.CapBitcoin.options} series={Marketcapdata.CapBitcoin.series} type="line" height={35} width={120} />
                                                    </div>
                                                </td>
                                                <td>
                                                    <Button variant="" className="btn btn-success-light btn-sm">Trade</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <Link scroll={false} href="#!"><i className="ri-star-line fs-16 text-muted"></i></Link></td>
                                                <td>10</td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-xs avatar-rounded">
                                                                <img src="../../../assets/images/crypto-currencies/square-color/Monero.svg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="fw-medium"><Link scroll={false} href="#!">Monero</Link></div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">$3.062B</span>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">
                                                        <Link scroll={false} href="#!">$165.76</Link>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-danger fw-medium"><i className="ti ti-arrow-narrow-up fs-15 fw-medium"></i>3.22%</span>
                                                </td>
                                                <td>
                                                    <span className="text-danger fw-medium"><i className="ti ti-arrow-narrow-down fs-15 fw-medium"></i>3.48%</span>
                                                </td>
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <span className="d-block fw-medium">$105.8M USD</span>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link scroll={false} href="#!">
                                                        <span className="fw-medium d-block">
                                                            18.15M
                                                        </span>
                                                    </Link>    
                                                </td>
                                                <td>
                                                    <div id="monero-chart">
                                                    <ReactApexChart options={Marketcapdata.CapEtherium.options} series={Marketcapdata.CapEtherium.series} type="line" height={35} width={120} />
                                                    </div>
                                                </td>
                                                <td>
                                                    <Button variant="" className="btn btn-success-light btn-sm">Trade</Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                            <Card.Footer className="border-top-0">
                                <nav aria-label="Page navigation">
                                    <Pagination className="mb-0 float-end">
                                        <Pagination.Item disabled>Previous</Pagination.Item>
                                        <Pagination.Item href="#!">1</Pagination.Item>
                                        <Pagination.Item active>2 </Pagination.Item>
                                        <Pagination.Item href="#!">3</Pagination.Item>
                                        <Pagination.Item className="pagination-next">Next</Pagination.Item>
                                    </Pagination>
                                </nav>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                {/* End::row-2  */}
    </Fragment>
    )
};

export default Marketcap;