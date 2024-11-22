"use client"
import React, { Fragment } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
const Select = dynamic(() => import("react-select"), { ssr: false });
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import * as Currencydata from "@/shared/data/apps/crypto/currencydata";
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Currencyexchange = () => {
return( 
    <Fragment>
                {/* Page Header */}
                    <Seo title={"Currency Exchange"} />
                    <Pageheader Heading="Currency Exchange" Pages={[{title:"Apps", active:true}, {title:"Crypto", active:true}, {title:"Currency Exchange", active:false},]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={12}>
                        <div className="card custom-card currency-exchange-card">
                            <div className="card-body p-5 d-flex align-items-center justify-content-center">
                                <div className="container">
                                    <h3 className="text-fixed-white text-center">Buy and Sell Coins without additional fees</h3>
                                    <span className="d-block fs-16 text-fixed-white text-center op-8 mb-4">
                                        Buy now and get +50% extra bonus Minimum pre-sale amount 100 Crypto Coin. We accept BTC crypto-currency..
                                    </span>
                                    <div className="p-3 mb-4 rounded currency-exchange-area">
                                        <div className="row gy-3">
                                            <Col xxl={3} className="col-12">
                                                <input type="text" className="form-control" defaultValue="0.0453" placeholder="Enter Amount"/>
                                            </Col>
                                            <Col xxl={2} className="col-12">
                                                <div>
                                                    <Select name="colors" options={Currencydata.CurrencyOptions1}
                                                    placeholder="Bitcoin" classNamePrefix='Select2' className=""
                                                    defaultValue={[Currencydata.CurrencyOptions1[0]]} menuPlacement='auto' />
                                                </div>
                                            </Col>
                                            <Col xxl={2} className="col-12">
                                                <div className="fs-2 text-fixed-white text-center op-8 lh-1">
                                                    =
                                                </div>
                                            </Col>
                                            <Col xxl={3} className="col-12">
                                                <Form.Control type="text" className="form-control" defaultValue="1350.93" placeholder="Exchange Amount"/>
                                            </Col>
                                            <Col xxl={2} className="col-12">
                                                <Select name="colors" options={Currencydata.CurrencyOptions2} className=""
                                                defaultValue={[Currencydata.CurrencyOptions2[0]]} menuPlacement='auto' classNamePrefix="Select2" />
                                            </Col>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <Button variant="" className="btn btn-success btn-wave">Exchange Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/*End::row-1 */}

                {/* Start:: row-2 */}
                <Row className="justify-content-center">
                    <Col xl={3}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Body className="mb-3">
                                <div className="d-flex align-items-top justify-content-between mb-3 flex-wrap">
                                    <div>
                                        <div className="d-flex align-items-center gap-2 mb-3">
                                            <div className="lh-1">
                                                <span className="avatar avatar-rounded avatar-xs">
                                                    <img src="../../../assets/images/crypto-currencies/square-color/Bitcoin.svg" alt="" />
                                                </span>
                                            </div>
                                            <h6 className="fw-medium mb-0">Bitcoin - BTC</h6>
                                        </div>
                                        <span className="fs-25 d-flex align-items-center">24.3% <span className="fs-12 text-warning op-7 ms-2">+0.59<i className="ti ti-arrow-big-up-line ms-1 d-inline-flex"></i></span><span className="badge bg-success-transparent fs-10 ms-2">24H</span></span>
                                    </div>
                                    <div className="text-end">
                                        <span className="d-block fs-14 mb-1 text-primary">0.00434</span>
                                        <span className="d-block text-success fw-medium">$30.29</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <div id="btc-currency-chart" className="mt-1 w-100">
                                <ReactApexChart options={Currencydata.CurrencyBTC.options} series={Currencydata.CurrencyBTC.series} type="line" height={60} width={"100%"} />
                            </div>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Body className="mb-3">
                                <div className="d-flex align-items-top justify-content-between mb-3 flex-wrap">
                                    <div>
                                        <div className="d-flex align-items-center gap-2 mb-3">
                                            <div className="lh-1">
                                                <span className="avatar avatar-rounded avatar-xs">
                                                    <img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                                </span>
                                            </div>
                                            <h6 className="fw-medium mb-0">Etherium - ETH</h6>
                                        </div>
                                        <span className="fs-25 d-flex align-items-center">17.67% <span className="fs-12 text-warning op-7 ms-2">+1.30<i className="ti ti-arrow-big-up-line ms-1 d-inline-flex"></i></span></span>
                                    </div>
                                    <div className="text-end">
                                        <span className="d-block fs-14 mb-1 text-secondary">1.2923</span>
                                        <span className="d-block text-success fw-medium">$2,283.73</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <div id="eth-currency-chart" className="mt-1 w-100">
                                <ReactApexChart options={Currencydata.CurrencyETH.options} series={Currencydata.CurrencyETH.series} type="line" height={60} width={"100%"} />
                            </div>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Body className="mb-3">
                                <div className="d-flex align-items-top justify-content-between mb-3 flex-wrap">
                                    <div>
                                        <div className="d-flex align-items-center gap-2 mb-3">
                                            <div className="lh-1">
                                                <span className="avatar avatar-rounded avatar-xs">
                                                    <img src="../../../assets/images/crypto-currencies/square-color/Dash.svg" alt="" />
                                                </span>
                                            </div>
                                            <h6 className="fw-medium mb-0">Dash - DASH</h6>
                                        </div>
                                        <span className="fs-25 d-flex align-items-center">17.67% <span className="fs-12 text-warning op-7 ms-2">+1.30<i className="ti ti-arrow-big-up-line ms-1 d-inline-flex"></i></span></span>
                                    </div>
                                    <div className="text-end">
                                        <span className="d-block fs-14 mb-1 text-success">1.2923</span>
                                        <span className="d-block text-success fw-medium">$2,283.73</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <div id="dash-currency-chart" className="mt-1 w-100">
                                <ReactApexChart options={Currencydata.CurrencyDASH.options} series={Currencydata.CurrencyDASH.series} type="line" height={60} width={"100%"} />
                            </div>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Body className="mb-3">
                                <div className="d-flex align-items-top justify-content-between mb-3 flex-wrap">
                                    <div>
                                        <div className="d-flex align-items-center gap-2 mb-3">
                                            <div className="lh-1">
                                                <span className="avatar avatar-rounded avatar-xs">
                                                    <img src="../../../assets/images/crypto-currencies/square-color/Litecoin.svg" alt="" />
                                                </span>
                                            </div>
                                            <h6 className="fw-medium mb-0">Litecoin - LTC</h6>
                                        </div>
                                        <span className="fs-25 d-flex align-items-center">17.67% <span className="fs-12 text-warning op-7 ms-2">+1.30<i className="ti ti-arrow-big-up-line ms-1 d-inline-flex"></i></span></span>
                                    </div>
                                    <div className="text-end">
                                        <span className="d-block fs-14 mb-1 text-warning">1.2923</span>
                                        <span className="d-block text-success fw-medium">$2,283.73</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <div id="ltc-currency-chart" className="mt-1 w-100">
                             <ReactApexChart options={Currencydata.CurrencyLTC.options} series={Currencydata.CurrencyLTC.series} type="line" height={60} width={"100%"} />
                            </div>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Body className="mb-3">
                                <div className="d-flex align-items-top justify-content-between mb-3 flex-wrap">
                                    <div>
                                        <div className="d-flex align-items-center gap-2 mb-3">
                                            <div className="lh-1">
                                                <span className="avatar avatar-rounded avatar-xs">
                                                    <img src="../../../assets/images/crypto-currencies/square-color/Ripple.svg" alt="" />
                                                </span>
                                            </div>
                                            <h6 className="fw-medium mb-0">Ripple - XRS</h6>
                                        </div>
                                        <span className="fs-25 d-flex align-items-center">17.67% <span className="fs-12 text-warning op-7 ms-2">+1.30<i className="ti ti-arrow-big-up-line ms-1 d-inline-flex"></i></span></span>
                                    </div>
                                    <div className="text-end">
                                        <span className="d-block fs-14 mb-1 text-pink">1.2923</span>
                                        <span className="d-block text-success fw-medium">$2,283.73</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <div id="xrs-currency-chart" className="mt-1 w-100">
                                 <ReactApexChart options={Currencydata.CurrencyXRS.options} series={Currencydata.CurrencyXRS.series} type="line" height={60} width={"100%"} />
                            </div>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Body className="mb-3">
                                <div className="d-flex align-items-top justify-content-between mb-3 flex-wrap">
                                    <div>
                                        <div className="d-flex align-items-center gap-2 mb-3">
                                            <div className="lh-1">
                                                <span className="avatar avatar-rounded avatar-xs">
                                                    <img src="../../../assets/images/crypto-currencies/square-color/Golem.svg" alt="" />
                                                </span>
                                            </div>
                                            <h6 className="fw-medium mb-0">Golem - GLM</h6>
                                        </div>
                                        <span className="fs-25 d-flex align-items-center">17.67% <span className="fs-12 text-warning op-7 ms-2">+1.30<i className="ti ti-arrow-big-up-line ms-1 d-inline-flex"></i></span></span>
                                    </div>
                                    <div className="text-end">
                                        <span className="d-block fs-14 mb-1 text-purple">1.2923</span>
                                        <span className="d-block text-success fw-medium">$2,283.73</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <div id="glm-currency-chart" className="mt-1 w-100">
                                <ReactApexChart options={Currencydata.CurrencyGLM.options} series={Currencydata.CurrencyGLM.series} type="line" height={60} width={"100%"} />
                            </div>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Body className="mb-3">
                                <div className="d-flex align-items-top justify-content-between mb-3 flex-wrap">
                                    <div>
                                        <div className="d-flex align-items-center gap-2 mb-3">
                                            <div className="lh-1">
                                                <span className="avatar avatar-rounded avatar-xs">
                                                    <img src="../../../assets/images/crypto-currencies/square-color/Monero.svg" alt="" />
                                                </span>
                                            </div>
                                            <h6 className="fw-medium mb-0">Monero</h6>
                                        </div>
                                        <span className="fs-25 d-flex align-items-center">17.67% <span className="fs-12 text-warning op-7 ms-2">+1.30<i className="ti ti-arrow-big-up-line ms-1 d-inline-flex"></i></span></span>
                                    </div>
                                    <div className="text-end">
                                        <span className="d-block fs-14 mb-1 text-danger">1.2923</span>
                                        <span className="d-block text-success fw-medium">$2,283.73</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <div id="monero-currency-chart" className="mt-1 w-100">
                                 <ReactApexChart options={Currencydata.CurrencyMonero.options} series={Currencydata.CurrencyMonero.series} type="line" height={60} width={"100%"} />
                            </div>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Body className="mb-3">
                                <div className="d-flex align-items-top justify-content-between mb-3 flex-wrap">
                                    <div>
                                        <div className="d-flex align-items-center gap-2 mb-3">
                                            <div className="lh-1">
                                                <span className="avatar avatar-rounded avatar-xs">
                                                    <img src="../../../assets/images/crypto-currencies/square-color/EOS.svg" alt="" />
                                                </span>
                                            </div>
                                            <h6 className="fw-medium mb-0">EOS</h6>
                                        </div>
                                        <span className="fs-25 d-flex align-items-center">17.67% <span className="fs-12 text-warning op-7 ms-2">+1.30<i className="ti ti-arrow-big-up-line ms-1 d-inline-flex"></i></span></span>
                                    </div>
                                    <div className="text-end">
                                        <span className="d-block fs-14 mb-1 text-info">1.2923</span>
                                        <span className="d-block text-success fw-medium">$2,283.73</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <div id="eos-currency-chart" className="mt-1 w-100">
                                <ReactApexChart options={Currencydata.CurrencyEOS.options} series={Currencydata.CurrencyEOS.series} type="line" width={"100%"} height={60} />
                            </div>
                        </Card>
                    </Col>
                    <Col xl={12}>
                         <div className="text-center my-4">
                            <Button variant="" className="btn btn-primary-light" type="button" disabled>
                                <span className="spinner-border spinner-border-sm align-middle" role="status"
                                    aria-hidden="true"></span>
                                Loading...
                            </Button>
                        </div>
                    </Col>
                </Row>
                {/* End:: row-2 */}
    </Fragment>
    )
};

export default Currencyexchange;