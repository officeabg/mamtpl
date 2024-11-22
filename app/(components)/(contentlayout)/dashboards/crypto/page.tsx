"use client"
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, Pagination, Row, Table } from "react-bootstrap";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Cryptodata from '@/shared/data/dashboards/cryptodata'
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Select = dynamic(() => import("react-select"), {ssr : false});
const Crypto = () => {
return (
<Fragment>
                {/*  Start::page-header */}
                    <Seo title={"Crypto"} />
                    <Pageheader Heading="Crypto" Pages={[{title:"Dashboards", active:true}, {title:"Crypto", active:false},]} />
               
                {/*  End::page-header */}

                {/*  Start:: row-1 */}
                <Row>
                    <Col xxl={3} xl={3} lg={6} md={6} sm={6} className="col-12">
                        <Card className="custom-card overflow-hidden card-bg-primary border-0">
                            <Card.Body className="p-0">
                                <div className="p-3">
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="d-flex align-items-center w-100">
                                            <div className="me-2">
                                                <span className="avatar avatar-sm avatar-rounded p-1 bg-white-transparent"> 
                                                    <img src="../../assets/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg" alt=""/> 
                                                </span>
                                            </div>
                                            <div className="mb-0 fw-medium flex-fill">
                                                Bitcoin - BTC
                                            </div>
                                            <Dropdown className="custom-dropdown"> 
                                                <Dropdown.Toggle variant="" className="no-caret" aria-label="anchor" href="#!" data-bs-toggle="dropdown"> 
                                                    <i className="ri-more-fill fs-5 text-fixed-white lh-1"></i>
                                                </Dropdown.Toggle> 
                                                <Dropdown.Menu role="menu"> 
                                                    <li><Dropdown.Item href="#!">Week</Dropdown.Item></li> 
                                                    <li><Dropdown.Item href="#!">Day</Dropdown.Item></li> 
                                                    <li><Dropdown.Item href="#!">Year</Dropdown.Item></li> 
                                                </Dropdown.Menu> 
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-end">
                                        <div>
                                            <p className="mb-1">BTC / USD</p>
                                            <h4 className="mb-0 text-fixed-white"> 0.8531 BTC </h4>
                                        </div>
                                        <div className="ms-auto text-end">
                                            <p className="mb-0">$0.04</p>
                                            <p className="mb-0"><span>Vol:</span>(+2.33%)</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="btc-chart">
                                    <ReactApexChart options={Cryptodata.BTCchart.options} series={Cryptodata.BTCchart.series} type="area" width={"100%"} height={50} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={3} lg={6} md={6} sm={6} className="col-12">
                        <Card className="custom-card overflow-hidden card-bg-secondary border-0">
                            <Card.Body className="p-0">
                                <div className="p-3">
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="d-flex align-items-center w-100">
                                            <div className="me-2">
                                                <span className="avatar avatar-sm avatar-rounded p-1 bg-white-transparent"> 
                                                    <img src="../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt=""/> 
                                                </span>
                                            </div>
                                            <div className="mb-0 fw-medium flex-fill">
                                                Etherium - ETH
                                            </div>
                                            <Dropdown className="custom-dropdown"> 
                                                <Dropdown.Toggle variant=""  className="no-caret" aria-label="anchor" href="#!" data-bs-toggle="dropdown"> 
                                                    <i className="ri-more-fill fs-5 lh-1 text-fixed-white"></i>
                                                </Dropdown.Toggle> 
                                                <Dropdown.Menu role="menu"> 
                                                    <li><Dropdown.Item href="#!">Week</Dropdown.Item></li> 
                                                    <li><Dropdown.Item href="#!">Day</Dropdown.Item></li> 
                                                    <li><Dropdown.Item href="#!">Year</Dropdown.Item></li> 
                                                </Dropdown.Menu> 
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-end">
                                        <div>
                                            <p className="mb-1">BTC / USD</p>
                                            <h4 className="mb-0 text-fixed-white"> 3.28353 ETH </h4>
                                        </div>
                                        <div className="ms-auto text-end">
                                            <p className="mb-0">$0.04</p>
                                            <p className="mb-0"><span>Vol:</span>(+2.33%)</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="eth-chart">
                                    <ReactApexChart options={Cryptodata.ETHchart.options} series={Cryptodata.ETHchart.series} type="area" width={"100%"} height={50} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={3} lg={6} md={6} sm={6} className="col-12">
                        <Card className="custom-card overflow-hidden card-bg-success border-0">
                            <Card.Body className="p-0">
                                <div className="p-3">
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="d-flex align-items-center w-100">
                                            <div className="me-2">
                                                <span className="avatar avatar-sm avatar-rounded p-1 bg-white-transparent"> 
                                                    <img src="../../assets/images/crypto-currencies/crypto-icons/tether-usdt-logo.svg" alt=""/> 
                                                </span>
                                            </div>
                                            <div className="mb-0 fw-medium flex-fill">
                                                Tether - USDT
                                            </div>
                                            <Dropdown className="custom-dropdown"> 
                                                <Dropdown.Toggle variant="" className="no-caret" aria-label="anchor" href="#!" data-bs-toggle="dropdown"> 
                                                    <i className="ri-more-fill fs-5 text-fixed-white lh-1"></i>
                                                </Dropdown.Toggle> 
                                                <Dropdown.Menu role="menu"> 
                                                    <li><Dropdown.Item href="#!">Week</Dropdown.Item></li> 
                                                    <li><Dropdown.Item href="#!">Day</Dropdown.Item></li> 
                                                    <li><Dropdown.Item href="#!">Year</Dropdown.Item></li> 
                                                </Dropdown.Menu> 
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-end">
                                        <div>
                                            <p className="mb-1">BTC / USD</p>
                                            <h4 className="mb-0 text-fixed-white"> 302.15 USDT </h4>
                                        </div>
                                        <div className="ms-auto text-end">
                                            <p className="mb-0">$0.04</p>
                                            <p className="mb-0"><span>Vol:</span>(+2.33%)</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="tether-chart">
                                    <ReactApexChart options={Cryptodata.USDTchart.options} series={Cryptodata.USDTchart.series} type="area" width={"100%"} height={50} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={3} lg={6} md={6} sm={6} className="col-12">
                        <Card className="custom-card overflow-hidden card-bg-orange border-0">
                            <Card.Body className="p-0">
                                <div className="p-3">
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="d-flex align-items-center w-100">
                                            <div className="me-2">
                                                <span className="avatar avatar-sm avatar-rounded p-1 bg-white-transparent"> 
                                                    <img src="../../assets/images/crypto-currencies/crypto-icons/solana-sol-logo.svg" alt=""/> 
                                                </span>
                                            </div>
                                            <div className="mb-0 fw-medium flex-fill">
                                                Solana - SOL
                                            </div>
                                            <Dropdown className="custom-dropdown"> 
                                                <Dropdown.Toggle variant="" className="no-caret" aria-label="anchor" href="#!" data-bs-toggle="dropdown"> 
                                                    <i className="ri-more-fill fs-5 text-fixed-white lh-1"></i>
                                                </Dropdown.Toggle> 
                                                <Dropdown.Menu role="menu"> 
                                                    <li><Dropdown.Item href="#!">Week</Dropdown.Item></li> 
                                                    <li><Dropdown.Item href="#!">Day</Dropdown.Item></li> 
                                                    <li><Dropdown.Item href="#!">Year</Dropdown.Item></li> 
                                                </Dropdown.Menu> 
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-end">
                                        <div>
                                            <p className="mb-1">SOL / USD</p>
                                            <h4 className="mb-0 text-fixed-white"> 2452.234 SOL </h4>
                                        </div>
                                        <div className="ms-auto text-end">
                                            <p className="mb-0">$0.04</p>
                                            <p className="mb-0"><span>Vol:</span>(+2.33%)</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="solana-chart">
                                     <ReactApexChart options={Cryptodata.SOLchart.options} series={Cryptodata.SOLchart.series} type="area" width={"100%"} height={50} />
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
                                    COIN STATISTICS
                                </Card.Title>
                                <div className="d-flex gap-2 flex-wrap">
                                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic example"> 
                                        <Button variant="" type="button" className="btn btn-primary btn-sm btn-wave">1D</Button>
                                        <Button variant="" type="button" className="btn btn-primary-light btn-sm btn-wave">1W</Button> 
                                        <Button variant="" type="button" className="btn btn-primary-light btn-sm btn-wave">1M</Button> 
                                        <Button variant="" type="button" className="btn btn-primary-light btn-sm btn-wave">1Y</Button> 
                                    </div>
                                    <div className="btn-group btn-group-sm">
                                       <Dropdown>
                                        <Dropdown.Toggle variant="" type="button" className="btn btn-outline-light border btn-sm dropdown-toggle"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <span className="avatar avatar-xs avatar-rounded me-2 align-middle"><img src="../../assets/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg" alt=""/></span>Bitcoin
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <li><Dropdown.Item href="#!"><span className="avatar avatar-xs avatar-rounded me-2 align-middle"><img src="../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt=""/></span>Etherium</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!"><span className="avatar avatar-xs avatar-rounded me-2 align-middle"><img src="../../assets/images/crypto-currencies/crypto-icons/tether-usdt-logo.svg" alt=""/></span>Tether</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!"><span className="avatar avatar-xs avatar-rounded me-2 align-middle"><img src="../../assets/images/crypto-currencies/crypto-icons/xrp-xrp-logo.svg" alt=""/></span>XRP</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!"><span className="avatar avatar-xs avatar-rounded me-2 align-middle"><img src="../../assets/images/crypto-currencies/crypto-icons/tron-trx-logo.svg" alt=""/></span>TRON</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                       </Dropdown>
                                    </div>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="p-3 d-flex align-items-center gap-4 border border-dashed rounded flex-wrap">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <span className="avatar avatar-sm">
                                            <img src="../../assets/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg" alt=""/>
                                        </span>
                                        <div><span className="fw-medium">Bitcoin</span> - <span className="text-muted">BTC</span></div>
                                    </div>
                                    <h6 className="fw-medium mb-0">$42,761.32 USD<span className="text-success mx-2">0.14%</span>(24H)</h6>
                                    <div className="d-flex gap-4 align-items-center flex-wrap">
                                        <div>Open - <span className="text-success fw-medium">6612.98</span></div>
                                        <div>High - <span className="text-success fw-medium">6625.97</span></div>
                                        <div>Low - <span className="text-danger fw-medium">6612.34</span></div>
                                        <div>Close - <span className="text-success fw-medium">6623.45</span></div>
                                    </div>
                                </div>
                                <div id="coin-statistics">
                                     <ReactApexChart options={Cryptodata.Coinstatistics.options} series={Cryptodata.Coinstatistics.series} type="candlestick" width={"100%"} height={330} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <div className="card custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    MY ASSETS
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
                            <Card.Body className="p-0">
                                <div id="assets" className="p-3 border-bottom">
                                    <ReactApexChart options={Cryptodata.Assetschart.options} series={Cryptodata.Assetschart.series} type="donut" width={"100%"} height={200} />
                                </div>
                                <div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <div className="d-flex align-items-start flex-wrap gap-2 lh-1">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-sm">
                                                        <img src="../../assets/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="d-block fw-medium mb-1">Bitcoin</span>
                                                    <span className="text-muted fs-12">BTC</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="fw-semibold d-block mb-1">4.2891 - BTC</span>
                                                    <span className="text-success fs-12">2.19%</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex align-items-start flex-wrap gap-2 lh-1">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-sm">
                                                        <img src="../../assets/images/crypto-currencies/crypto-icons/tether-usdt-logo.svg" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="d-block fw-medium mb-1">Tether</span>
                                                    <span className="text-muted fs-12">USDT</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="fw-semibold d-block mb-1">12.533 - USDT</span>
                                                    <span className="text-success fs-12">1.67%</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex align-items-start flex-wrap gap-2 lh-1">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-sm">
                                                        <img src="../../assets/images/crypto-currencies/crypto-icons/dogecoin-doge-logo.svg" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="d-block fw-medium mb-1">Dogecoin</span>
                                                    <span className="text-muted fs-12">DOGE</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="fw-semibold d-block mb-1">78.890 - DOGE</span>
                                                    <span className="text-success fs-12">21.35%</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex align-items-start flex-wrap gap-2 lh-1">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-sm">
                                                        <img src="../../assets/images/crypto-currencies/crypto-icons/solana-sol-logo.svg" alt=""/>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="d-block fw-medium mb-1">Solana</span>
                                                    <span className="text-muted fs-12">SOL</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="fw-semibold d-block mb-1">67.700 - SOL</span>
                                                    <span className="text-danger fs-12">77.53%</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Card.Body>
                        </div>
                    </Col>
                </Row>
                {/*  End:: row-2 */}

                {/*  Start:: row-3 */}
                <Row>
                    <Col xl={3}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    TRANSACTIONS
                                </Card.Title>
                                <Link scroll={false} href="#!" className="btn btn-light btn-sm"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                            </Card.Header>
                            <Card.Body>
                                <ul className="list-unstyled mb-0 my-assets-list">
                                    <li>
                                        <Link scroll={false} href="#!">
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-sm">
                                                            <img src="../../assets/images/crypto-currencies/square-color/Bitcoin.svg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-medium">Bitcoin</p>
                                                        <p className="mb-0 fs-12">Today</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <p className="mb-0 fw-medium text-success">
                                                        +$19,123
                                                    </p>
                                                    <p className="mb-0 text-muted fs-12">
                                                        BTC 0.0823.45
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link scroll={false} href="#!">
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-sm">
                                                            <img src="../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-medium">Etherium</p>
                                                        <p className="mb-0 fs-12">10,Jan 2024</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <p className="mb-0 fw-medium text-danger">
                                                        -$1,430
                                                    </p>
                                                    <p className="mb-0 text-muted fs-12">
                                                        ETH 10,783.23
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link scroll={false} href="#!">
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-sm">
                                                            <img src="../../assets/images/crypto-currencies/square-color/Dash.svg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-medium">Dash</p>
                                                        <p className="mb-0 fs-12">25,Jan 2024</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <p className="mb-0 fw-medium text-success">
                                                        +$5,236
                                                    </p>
                                                    <p className="mb-0 text-muted fs-12">
                                                        DASH 12,456.98
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link scroll={false} href="#!">
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-sm">
                                                            <img src="../../assets/images/crypto-currencies/square-color/Bytecoin.svg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-medium">Bytecoin</p>
                                                        <p className="mb-0 fs-12">Yesterday</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <p className="mb-0 fw-medium text-danger">
                                                        -$1,810
                                                    </p>
                                                    <p className="mb-0 text-muted fs-12">
                                                        BYTE 8,154.00
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link scroll={false} href="#!">
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-sm">
                                                            <img src="../../assets/images/crypto-currencies/square-color/Golem.svg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-medium">Golem</p>
                                                        <p className="mb-0 fs-12">18,Feb 2024</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <p className="mb-0 fw-medium text-success">
                                                        +$5,046
                                                    </p>
                                                    <p className="mb-0 text-muted fs-12">
                                                        GLM 9,384.73
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card">
                            <div className="card-header">
                                <Card.Title>
                                    CURRENCY EXCHANGE
                                </Card.Title>  
                            </div>
                            <Card.Body>
                                <label className="form-label">Select Coin</label>
                                <div className="input-group mb-4 d-flex flex-nowrap">
                                    <input type="text" className="form-control form-control-sm crypto-buy-sell-input" aria-label="crypto buy select" placeholder="Select Currency"/>
                                
                                    <Select  name="state" options={Cryptodata.Coindata} className="js-example-placeholder-multiple w-full js-states meter-select" defaultValue={[Cryptodata.Coindata[0]]}
										menuPlacement='auto' classNamePrefix="Select2" isSearchable
									/>
                                </div>
                                <label className="form-label">Select Currency</label>
                                <div className="input-group mb-4 d-flex flex-nowrap">
                                    <input type="text" className="form-control form-control-sm crypto-buy-sell-input" aria-label="crypto buy select" placeholder="36,335.00"/>
                            
                                    <Select  name="state" options={Cryptodata.Currencydata} className="js-example-placeholder-multiple w-full js-states meter-select" defaultValue={[Cryptodata.Currencydata[0]]}
										menuPlacement='auto' classNamePrefix="Select2" isSearchable
									/>
                                </div>
                                <span className="d-block text-muted fw-normal fs-12 mb-1">Track real-time crypto prices and seamlessly exchange currencies here..</span>
                            </Card.Body>
                            <div className="card-footer">
                                <div className="d-grid">
                                    <Button variant="" type="button" className="btn btn-primary btn-wave">CONVERT</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    MY BALANCE
                                </Card.Title>
                                <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col">Currency</th>
                                                <th scope="col">Coins Possessed</th>
                                                <th scope="col">USD Price</th>
                                                <th scope="col">24H change</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg" alt=""/>
                                                        </span>
                                                        <Link scroll={false} href="#!" className="fw-medium">Bitcoin - <span className="text-muted">BTC</span></Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    2.5 BTC
                                                </td>
                                                <td>
                                                    <span className="fw-medium fs-14">$96,000 </span>
                                                </td>
                                                <td>
                                                    <span className="text-success">+3.50%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/crypto-currencies/crypto-icons/tether-usdt-logo.svg" alt=""/>
                                                        </span>
                                                        <Link scroll={false} href="#!" className="fw-medium">Tether - <span className="text-muted">USDT</span></Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    10,000 USDT 
                                                </td>
                                                <td>
                                                    <span className="fw-medium fs-14">$1.00</span>
                                                </td>
                                                <td>
                                                    <span className="text-danger">-0.20%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/crypto-currencies/crypto-icons/dogecoin-doge-logo.svg" alt=""/>
                                                        </span>
                                                        <Link scroll={false} href="#!" className="fw-medium">Dogecoin - <span className="text-muted">DOGE</span></Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    50,000 DOGE
                                                </td>
                                                <td>
                                                    <span className="fw-medium fs-14">$0.25</span>
                                                </td>
                                                <td>
                                                    <span className="text-success">+5.80%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/crypto-currencies/crypto-icons/solana-sol-logo.svg" alt=""/>
                                                        </span>
                                                        <Link scroll={false} href="#!" className="fw-medium">Solana - <span className="text-muted">SOL</span></Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    100 SOL
                                                </td>
                                                <td>
                                                    <span className="fw-medium fs-14">$150.00</span>
                                                </td>
                                                <td>
                                                    <span className="text-danger">-1.75%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/crypto-currencies/crypto-icons/binance-usd-busd-logo.svg" alt=""/>
                                                        </span>
                                                        <Link scroll={false} href="#!" className="fw-medium">Binance Coin - <span className="text-muted">BNB</span></Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    20 BNB
                                                </td>
                                                <td>
                                                    <span className="fw-medium fs-14">$300.00</span>
                                                </td>
                                                <td>
                                                    <span className="text-success">+2.00%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../assets/images/crypto-currencies/crypto-icons/usd-coin-usdc-logo.svg" alt=""/>
                                                        </span>
                                                        <Link scroll={false} href="#!" className="fw-medium">USD Coin - <span className="text-muted">USDC</span></Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    5,000 USDC
                                                </td>
                                                <td>
                                                    <span className="fw-medium fs-14">$1.00</span>
                                                </td>
                                                <td>
                                                    <span className="text-success">+0.10%</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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
                            <Card.Header className="justify-content-between flex-wrap">
                                <Card.Title className="mb-2 mb-sm-0">
                                    CRYPTO RANKINGS
                                </Card.Title>
                                <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                    <Button variant="" type="button" className="btn btn-primary btn-sm btn-wave">1D</Button>
                                    <Button variant="" type="button" className="btn btn-primary-light btn-sm btn-wave">1W</Button>
                                    <Button variant="" type="button" className="btn btn-primary-light btn-sm btn-wave">1M</Button>
                                    <Button variant="" type="button" className="btn btn-primary-light btn-sm btn-wave">3M</Button>
                                    <Button variant="" type="button" className="btn btn-primary-light btn-sm btn-wave">6M</Button>
                                    <Button variant="" type="button" className="btn btn-primary-light btn-sm btn-wave">1Y</Button>
                                </div>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <Table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th className="text-center">S.No</th>
                                                <th>Coin Name</th>
                                                <th>Price</th>
                                                <th>Market Cap</th>
                                                <th>Price Change</th>
                                                <th>Price Graph</th>
                                                <th>Volume</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center">1</td>
                                                <td>
                                                    <div className="lh-1 d-flex align-items-center">
                                                        <span className="avatar avatar-xs avatar-rounded me-1">
                                                            <img src="../../assets/images/crypto-currencies/regular/Bitcoin.svg" alt=""/>
                                                        </span>Bitcoin
                                                    </div>
                                                </td>
                                                <td>
                                                    $45,839.10
                                                </td>
                                                <td>
                                                    $324.01B
                                                </td>
                                                <td>
                                                    <span className="text-success">0.30%</span>
                                                </td>
                                                <td>
                                                    <div id="bitcoin-price-graph">
                                                        <ReactApexChart options={Cryptodata.Bitcoinchart.options} series={Cryptodata.Bitcoinchart.series} type="area" width={120} height={20} />
                                                    </div>
                                                </td>
                                                <td>
                                                    14,674,311,168
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">2</td>
                                                <td>
                                                    <div className="lh-1 d-flex align-items-center">
                                                        <span className="avatar avatar-xs avatar-rounded me-1">
                                                            <img src="../../assets/images/crypto-currencies/regular/Ethereum.svg" alt=""/>
                                                        </span>Etherium
                                                    </div>
                                                </td>
                                                <td>
                                                    $1,217.96
                                                </td>
                                                <td>
                                                    $149,316,232,699
                                                </td>
                                                <td>
                                                    <span className="text-success">0.30%</span>
                                                </td>
                                                <td>
                                                    <div id="etherium-price-graph">
                                                        <ReactApexChart options={Cryptodata.Etheriumchart.options} series={Cryptodata.Etheriumchart.series} type="area" width={120} height={20} />
                                                    </div>
                                                </td>
                                                <td>
                                                    $4,758,554,801
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">3</td>
                                                <td>
                                                    <div className="lh-1 d-flex align-items-center">
                                                        <span className="avatar avatar-xs avatar-rounded me-1">
                                                            <img src="../../assets/images/crypto-currencies/regular/Dash.svg" alt=""/>
                                                        </span>Dash
                                                    </div>
                                                </td>
                                                <td>
                                                    $43.49
                                                </td>
                                                <td>
                                                    $480,799,847
                                                </td>
                                                <td>
                                                    <span className="text-success">0.45%</span>
                                                </td>
                                                <td>
                                                    <div id="dash-price-graph">
                                                         <ReactApexChart options={Cryptodata.Dashchart.options} series={Cryptodata.Dashchart.series} type="area" width={120} height={20} />
                                                    </div>
                                                </td>
                                                <td>
                                                    $52,626,563
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">4</td>
                                                <td>
                                                    <div className="lh-1 d-flex align-items-center">
                                                        <span className="avatar avatar-xs avatar-rounded me-1">
                                                            <img src="../../assets/images/crypto-currencies/regular/Ripple.svg" alt=""/>
                                                        </span>Ripple
                                                    </div>
                                                </td>
                                                <td>
                                                    $0.3531
                                                </td>
                                                <td>
                                                    $17,791,969,465
                                                </td>
                                                <td>
                                                    <span className="text-success">0.97%</span>
                                                </td>
                                                <td>
                                                    <div id="ripple-price-graph">
                                                        <ReactApexChart options={Cryptodata.Ripplechart.options} series={Cryptodata.Ripplechart.series} type="area" width={120} height={20} />
                                                    </div>
                                                </td>
                                                <td>
                                                    $511,598,941
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">5</td>
                                                <td>
                                                    <div className="lh-1 d-flex align-items-center">
                                                        <span className="avatar avatar-xs avatar-rounded me-1">
                                                            <img src="../../assets/images/crypto-currencies/regular/IOTA.svg" alt=""/>
                                                        </span>Iota
                                                    </div>
                                                </td>
                                                <td>
                                                    $0.169741
                                                </td>
                                                <td>
                                                    $471,800,600
                                                </td>
                                                <td>
                                                    <span className="text-success">0.93%</span>
                                                </td>
                                                <td>
                                                    <div id="iota-price-graph">
                                                        <ReactApexChart options={Cryptodata.Iotachart.options} series={Cryptodata.Iotachart.series} type="area" width={120} height={20} />
                                                    </div>
                                                </td>
                                                <td>
                                                    $5,524,385
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">6</td>
                                                <td>
                                                    <div className="lh-1 d-flex align-items-center">
                                                        <span className="avatar avatar-xs avatar-rounded me-1">
                                                            <img src="../../assets/images/crypto-currencies/regular/Neo.svg" alt=""/>
                                                        </span>Neo
                                                    </div>
                                                </td>
                                                <td>
                                                    $6.43
                                                </td>
                                                <td>
                                                    $453,601,667
                                                </td>
                                                <td>
                                                    <span className="text-danger">0.49%</span>
                                                </td>
                                                <td>
                                                    <div id="neo-price-graph">
                                                        <ReactApexChart options={Cryptodata.Neochart.options} series={Cryptodata.Neochart.series} type="area" width={120} height={20} />
                                                    </div>
                                                </td>
                                                <td>
                                                    $12,904,320
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
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
                                                <Pagination.Item disabled >
                                                        Prev
                                                </Pagination.Item>
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

export default Crypto;