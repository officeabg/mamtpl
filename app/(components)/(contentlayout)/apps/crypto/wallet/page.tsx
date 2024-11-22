"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const Wallet = () => {
return ( 
    <Fragment>
                {/* Page Header */}
                    <Seo title={"Wallet"} />
                    <Pageheader Heading="Wallet" Pages={[{title:"Apps", active:true}, {title:"Crypto", active:true}, {title:"Wallet", active:false},]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={8}>
                        <Row>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Header className="justify-content-between">
                                        <Card.Title>
                                            BTC Wallet Address
                                        </Card.Title>
                                        <div>
                                            <Button variant="" className="btn btn-primary-ghost btn-wave">Connect</Button>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="d-flex align-items-center flex-wrap justify-content-between gap-4 mb-3">
                                            <div className="flex-fill">
                                                <label htmlFor="btc-wallet-address1" className="form-label">Wallet Address</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" id="btc-wallet-address1" defaultValue="afb0dc8bc84625587b85415c86ef43ed8df" placeholder="Placeholder"/>
                                                    <Button variant="" className="btn btn-primary">Copy</Button>
                                                </div>    
                                            </div> 
                                            <div>
                                                <span className="avatar avatar-xxl border">
                                                    <img src="../../../assets/images/media/media-68.png" className="p-1 qr-image" alt="" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row gy-3">
                                            <Col xl={4}>
                                                <div className="rounded p-3 bg-light">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="lh-1">
                                                            <span className="avatar bg-success-transparent">
                                                                <i className="ti ti-arrow-narrow-down fs-20"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted">Received</span>
                                                            <span className="d-block fw-medium">6.2834 <span className="fs-12 text-muted fw-normal">BTC</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={4}>
                                                <div className="rounded p-3 bg-light">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="lh-1">
                                                            <span className="avatar bg-danger-transparent">
                                                                <i className="ti ti-caret-up fs-20"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted">Sent</span>
                                                            <span className="d-block fw-medium">2.7382 <span className="fs-12 text-muted fw-normal">BTC</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={4}>
                                                <div className="rounded p-3 bg-light">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="lh-1">
                                                            <span className="avatar bg-secondary-transparent">
                                                                <i className="ti ti-wallet fs-20"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted">Wallet Balance</span>
                                                            <span className="d-block fw-medium">12.5232 <span className="fs-12 text-muted fw-normal">BTC</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card">
                                    <Card.Header className="justify-content-between">
                                        <Card.Title>
                                            ETH Wallet Address
                                        </Card.Title>
                                        <div>
                                            <Button variant="" className="btn btn-primary-ghost btn-wave">Connect</Button>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="d-flex align-items-center flex-wrap justify-content-between gap-4 mb-3">
                                            <div className="flex-fill">
                                                <label htmlFor="btc-wallet-address2" className="form-label">Wallet Address</label>
                                                <div className="input-group">
                                                    <Form.Control type="text" className="" id="btc-wallet-address2" defaultValue="afb0dc8bc84625587b85415c86ef43ed8df" placeholder="Placeholder"/>
                                                    <Button variant="" className="btn btn-primary">Copy</Button>
                                                </div>    
                                            </div> 
                                            <div>
                                                <span className="avatar avatar-xxl border">
                                                    <img src="../../../assets/images/media/media-68.png" className="p-1 qr-image" alt="" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row gy-3">
                                            <Col xl={4}>
                                                <div className="rounded p-3 bg-light">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="lh-1">
                                                            <span className="avatar bg-success-transparent">
                                                                <i className="ti ti-arrow-narrow-down fs-20"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted">Received</span>
                                                            <span className="d-block fw-medium">6.2834 <span className="fs-12 text-muted fw-normal">ETH</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={4}>
                                                <div className="rounded p-3 bg-light">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="lh-1">
                                                            <span className="avatar bg-danger-transparent">
                                                                <i className="ti ti-caret-up fs-20"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted">Sent</span>
                                                            <span className="d-block fw-medium">2.7382 <span className="fs-12 text-muted fw-normal">ETH</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={4}>
                                                <div className="rounded p-3 bg-light">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="lh-1">
                                                            <span className="avatar bg-secondary-transparent">
                                                                <i className="ti ti-wallet fs-20"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted">Wallet Balance</span>
                                                            <span className="d-block fw-medium">12.5232 <span className="fs-12 text-muted fw-normal">ETH</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card">
                                    <Card.Header className="justify-content-between">
                                        <Card.Title>
                                            LTC Wallet Address
                                        </Card.Title>
                                        <div>
                                            <Button variant="" className="btn btn-primary-ghost btn-wave">Connect</Button>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="d-flex align-items-center flex-wrap justify-content-between gap-4 mb-3">
                                            <div className="flex-fill">
                                                <label htmlFor="btc-wallet-address3" className="form-label">Wallet Address</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" id="btc-wallet-address3" defaultValue="afb0dc8bc84625587b85415c86ef43ed8df" placeholder="Placeholder" />
                                                    <Button variant="" className="btn btn-primary">Copy</Button>
                                                </div>    
                                            </div> 
                                            <div>
                                                <span className="avatar avatar-xxl border">
                                                    <img src="../../../assets/images/media/media-68.png" className="p-1 qr-image" alt="" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row gy-3">
                                            <Col xl={4}>
                                                <div className="rounded p-3 bg-light">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="lh-1">
                                                            <span className="avatar bg-success-transparent">
                                                                <i className="ti ti-arrow-narrow-down fs-20"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted">Received</span>
                                                            <span className="d-block fw-medium">6.2834 <span className="fs-12 text-muted fw-normal">LTC</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={4}>
                                                <div className="rounded p-3 bg-light">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="lh-1">
                                                            <span className="avatar bg-danger-transparent">
                                                                <i className="ti ti-caret-up fs-20"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted">Sent</span>
                                                            <span className="d-block fw-medium">2.7382 <span className="fs-12 text-muted fw-normal">LTC</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={4}>
                                                <div className="rounded p-3 bg-light">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="lh-1">
                                                            <span className="avatar bg-secondary-transparent">
                                                                <i className="ti ti-wallet fs-20"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted">Wallet Balance</span>
                                                            <span className="d-block fw-medium">12.5232 <span className="fs-12 text-muted fw-normal">LTC</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    BTC WALLET
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded">
                                                <img src="../../../assets/images/crypto-currencies/square-color/Bitcoin.svg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <span className="d-block text-muted fs-12 fw-normal">Available BTC</span>
                                            <span className="fw-medium">0.05437 BTC</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="fw-medium">$1646.94 USD</span>
                                        <span className="d-block text-muted fs-12 fw-normal">In USD</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="btn-list text-center">
                                    <Button variant="" className="btn btn-primary-light btn-w-lg btn-wave">Deposit</Button>
                                    <Button variant="" className="btn btn-success-light btn-w-lg btn-wave">Withdraw</Button>
                                </div>
                            </Card.Footer>
                        </Card>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    ETH WALLET
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded">
                                                <img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <span className="d-block text-muted fs-12 fw-normal">Available ETH</span>
                                            <span className="fw-medium">2.3892 ETH</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="fw-medium">$4581.24 USD</span>
                                        <span className="d-block text-muted fs-12 fw-normal">In USD</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="btn-list text-center">
                                    <Button variant="" className="btn btn-primary-light btn-w-lg btn-wave">Deposit</Button>
                                    <Button variant="" className="btn btn-success-light btn-w-lg btn-wave">Withdraw</Button>
                                </div>
                            </Card.Footer>
                        </Card>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    XRP WALLET
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded">
                                                <img src="../../../assets/images/crypto-currencies/square-color/Ripple.svg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <span className="d-block text-muted fs-12 fw-normal">Available XRP</span>
                                            <span className="fw-medium">234.943 XRP</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="fw-medium">$192.29 USD</span>
                                        <span className="d-block text-muted fs-12 fw-normal">In USD</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="btn-list text-center">
                                    <Button variant="" className="btn btn-primary-light btn-w-lg btn-wave">Deposit</Button>
                                    <Button variant="" className="btn btn-success-light btn-w-lg btn-wave">Withdraw</Button>
                                </div>
                            </Card.Footer>
                        </Card>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    LTC WALLET
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded">
                                                <img src="../../../assets/images/crypto-currencies/square-color/Litecoin.svg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <span className="d-block text-muted fs-12 fw-normal">Available LTC</span>
                                            <span className="fw-medium">37.254 LTC</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="fw-medium">$3519.01 USD</span>
                                        <span className="d-block text-muted fs-12 fw-normal">In USD</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="btn-list text-center">
                                    <Button variant="" className="btn btn-primary-light btn-w-lg btn-wave">Deposit</Button>
                                    <Button variant="" className="btn btn-success-light btn-w-lg btn-wave">Withdraw</Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    )
};

export default Wallet;