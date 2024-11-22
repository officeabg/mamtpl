"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";

const Walletintegration = () => {
return ( 
    <Fragment>
            {/* Page Header */}
                <Seo title={"Wallet Integration"} />
                <Pageheader Heading="Wallet Integration" Pages={[{title:"Apps", active:true},{title:"NFT", active:true},{title:"Wallet Integration", active:false}]} />
            {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={3}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header>
                                <Card.Title>
                                    Choose Network
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <ListGroup className="list-group list-group-flush nft-list">
                                    <ListGroup.Item>
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                    <img src="../../../assets/images/nft-images/34.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="fs-14 fw-medium">Etherium</div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                    <img src="../../../assets/images/nft-images/33.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="fs-14 fw-medium">Binance</div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                    <img src="../../../assets/images/nft-images/32.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="fs-14 fw-medium">Solana</div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                    <img src="../../../assets/images/nft-images/28.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="fs-14 fw-medium">Tezos</div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                    <img src="../../../assets/images/nft-images/30.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="fs-14 fw-medium">Avalanche</div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                    <img src="../../../assets/images/nft-images/29.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="fs-14 fw-medium">Cardano</div>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={9}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    Choose Wallet
                                </Card.Title>
                                <div>
                                    <Button variant="" className="btn btn-secondary btn-wave">Add New Wallet</Button>
                                </div>
                            </Card.Header>
                            <Card.Body className="p-4">
                                <div className="row justify-content-center">
                                    <Col xxl={3}>
                                        <Card className="custom-card nft-wallet active">
                                            <Card.Body className="p-3">
                                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                <div className="d-flex align-items-center justify-content-center gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded p-2 bg-light">
                                                            <img src="../../../assets/images/nft-images/22.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h6 className="fw-medium mb-0">MetaMask</h6>  
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={3}>
                                        <Card className="custom-card nft-wallet">
                                            <Card.Body className="p-3">
                                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                <div className="d-flex align-items-center justify-content-center gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded p-2 bg-light">
                                                            <img src="../../../assets/images/nft-images/23.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h6 className="fw-medium mb-0">Enjin Wallet</h6>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={3}>
                                        <Card className="custom-card nft-wallet">
                                            <Card.Body className="p-3">
                                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                <div className="d-flex align-items-center justify-content-center gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded bg-light">
                                                            <img src="../../../assets/images/nft-images/20.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h6 className="fw-medium mb-0">Trust Wallet</h6>  
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={3}>
                                        <Card className="custom-card nft-wallet">
                                            <Card.Body className="p-3">
                                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                <div className="d-flex align-items-center justify-content-center gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded bg-light p-2">
                                                            <img src="../../../assets/images/nft-images/24.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h6 className="fw-medium mb-0">Coinbase Wallet</h6>  
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={3}>
                                        <Card className="custom-card nft-wallet">
                                            <Card.Body className="p-3">
                                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                <div className="d-flex align-items-center justify-content-center gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded bg-light p-2">
                                                            <img src="../../../assets/images/nft-images/19.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h6 className="fw-medium mb-0">Lido</h6>  
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={3}>
                                        <Card className="custom-card nft-wallet">
                                            <Card.Body className="p-3">
                                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                <div className="d-flex align-items-center justify-content-center gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded bg-light">
                                                            <img src="../../../assets/images/nft-images/27.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h6 className="fw-medium mb-0">Huobi Wallet</h6>  
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div>
                                    <Button variant="" className="btn btn-success float-end btn-wave">Connect</Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    )
};

export default Walletintegration;