"use client"
import { Liveauctiondata, Liveauctiondata1 } from "@/shared/data/apps/nft/liveauctiondata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, ListGroup, Pagination, Row } from "react-bootstrap";

const Liveauction = () => {
   
return ( 
    <Fragment>
            {/* Page Header */}
                <Seo title={"Live Auction"} />
                <Pageheader Heading="Live Auction" Pages={[{title:"Apps", active:true},{title:"NFT", active:true},{title:"Live Auction", active:false}]} />
            {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xxl={8} xl={8} lg={12} className="">
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                            <div className="nft-tag nft-tag-primary active">
                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                <span className="nft-tag-icon"><i className="ti ti-world fs-20"></i></span>
                                <span className="nft-tag-text">All</span>
                            </div>
                            <div className="nft-tag nft-tag-secondary">
                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                <span className="nft-tag-icon"><i className="ti ti-flame fs-20"></i></span>
                                <span className="nft-tag-text">New Trends</span>
                            </div>
                            <div className="nft-tag nft-tag-info">
                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                <span className="nft-tag-icon"><i className="ti ti-palette fs-20"></i></span>
                                <span className="nft-tag-text">Art Work</span>
                            </div>
                            <div className="nft-tag nft-tag-success">
                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                <span className="nft-tag-icon"><i className="ti ti-device-gamepad-2 fs-20"></i></span>
                                <span className="nft-tag-text">Games</span>
                            </div>
                            <div className="nft-tag nft-tag-danger">
                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                <span className="nft-tag-icon"><i className="ti ti-tie fs-20"></i></span>
                                <span className="nft-tag-text">Fashion</span>
                            </div>
                            <div className="nft-tag nft-tag-warning">
                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                <span className="nft-tag-icon"><i className="ti ti-music fs-20"></i></span>
                                <span className="nft-tag-text">Music</span>
                            </div>
                            <div className="nft-tag nft-tag-dark">
                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                <span className="nft-tag-icon"><i className="ti ti-gift fs-20"></i></span>
                                <span className="nft-tag-text">Others</span>
                            </div>
                        </div>
                        <Row>
                            <h6 className="fw-medium mb-3">Live Auction:</h6>
                            {Liveauctiondata.map((idx)=>(
                                <Col xxl={4} xl={6} lg={6} md={6} sm={6} className="col-12" key={Math.random()}>
                                    <Card className="custom-card">
                                        <Card.Body>
                                            <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                <div className="position-relative">
                                                    <img src={idx.src1} className="card-img mb-3" alt="..." />
                                                    <p className="mb-0 text-fixed-white nft-auction-time">{idx.text1} </p>
                                                </div>
                                                <p className="fs-14 fw-semibold mb-2">{idx.name}</p>
                                                <div className="d-flex mb-3 align-items-center flex-wrap gap-2 justify-content-between">
                                                    <div> 
                                                        <span className="fs-12 text-muted d-block mb-1">Created By</span>
                                                        <span className="fw-medium d-block lh-1">{idx.heading}</span>
                                                    </div>
                                                    <div className="text-end">
                                                        <span className="fs-12 text-muted d-block mb-1">Top Bid</span>
                                                        <div className="d-flex align-items-center">
                                                            <span className="avatar avatar-xs">
                                                                <img src="../../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt="" />
                                                            </span>
                                                            <span className="ms-1 fw-medium">{idx.text2}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <Button variant="" className="btn btn-light btn-wave">
                                                        Place BId
                                                    </Button>
                                                </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                            <nav aria-label="Page navigation">
                                <Pagination className="justify-content-end mb-4">
                                    <Pagination.Item disabled>Previous</Pagination.Item>
                                    <Pagination.Item href="#!">1</Pagination.Item>
                                    <Pagination.Item href="#!">2</Pagination.Item>
                                    <Pagination.Item href="#!">3</Pagination.Item>
                                    <Pagination.Item className="pagination-next">Next </Pagination.Item>
                                </Pagination>
                            </nav>
                        </Row>
                    </Col>
                    <Col xxl={4} xl={4} lg={12}>
                        <Row>
                            <Col xl={12}>
                                <Card className="custom-card overflow-hidden">
                                    <Card.Header className="justify-content-between">
                                        <Card.Title>
                                            Featured Creators
                                        </Card.Title>
                                        <div>
                                            <Button variant="" className="btn btn-primary-light btn-sm btn-wave">View All</Button>
                                        </div>
                                    </Card.Header>
                                    <Card.Body className="p-0">
                                        <ListGroup className="list-group-flush">
                                            {Liveauctiondata1.map((idx)=>(
                                                <ListGroup.Item key={Math.random()}>
                                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <div className="d-flex align-items-center">
                                                            <div className="lh-1">
                                                                <span className="avatar avatar-md avatar-rounded me-2">
                                                                    <img src={idx.src} alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="align-items-center">
                                                                <p className="mb-0 fw-medium">{idx.text1}<i className="bi bi-patch-check-fill text-success ms-2"></i></p>
                                                                <span className="fs-12 text-muted">{idx.text2}</span>
                                                            </div>
                                                        </div>
                                                        <div className="text-end">
                                                            <span className="d-block fw-medium text-success">{idx.text3}</span>
                                                            <span className="d-block text-muted fs-11">{idx.text4}</span>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className="custom-card overflow-hidden">
                                    <Card.Header className="justify-content-between">
                                        <Card.Title>
                                            Recent Activity
                                        </Card.Title>
                                        <Dropdown className="custom-dropdown">
                                            <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                Today<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu role="menu">
                                                <li><Dropdown.Item href="#!">Today</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Card.Header>
                                    <Card.Body className="p-0">
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item>
                                                <div className="d-flex gap-3 align-items-center flex-wrap">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-lg">
                                                            <img src="../../../assets/images/nft-images/31.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <div className="mb-1"><Link scroll={false} href="#!" className="fw-medium">DreamSpace</Link><span className="fs-12 text-muted ms-2 d-inline-block">24 mins ago</span></div>
                                                        <div className="fs-13">Purchsed from you by <Link scroll={false} className="text-decoration-underline" href="#!">Mitchell</Link> for <span className="text-success fw-medium fs-12">0.57ETH</span>.</div>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex gap-3 align-items-center flex-wrap">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-lg">
                                                            <img src="../../../assets/images/nft-images/25.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <div className="mb-1"><span className="fw-medium">DreamSpace</span><span className="fs-12 text-muted ms-2 d-inline-block">16 mins ago</span></div>
                                                        <div className="fs-13">You started following mark zensberg.</div>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex gap-3 align-items-center flex-wrap">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-lg">
                                                            <img src="../../../assets/images/nft-images/21.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <div className="mb-1"><span className="fw-medium">Neo Nebulae</span><span className="fs-12 text-muted ms-2 d-inline-block">5 mins ago</span></div>
                                                        <div className="fs-13">Showed interest in purchasing <Link scroll={false} href="#!" className="fs-12 text-warning fw-medium">NeoNebulae</Link>.</div>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex gap-3 align-items-center flex-wrap">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-lg">
                                                            <img src="../../../assets/images/nft-images/26.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <div className="mb-1"><span className="fw-medium">Neo Nebulae</span><span className="fs-12 text-muted ms-2 d-inline-block">16 mins ago</span></div>
                                                        <div className="fs-13">Purchased from <Link scroll={false} href="#!" className="text-decoration-underline">CyberCanvas</Link> for <span className="fw-medium fs-12 text-pink">1.345ETH</span>.</div>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/*End::row-1 */}

    </Fragment>
    )
};

export default Liveauction;