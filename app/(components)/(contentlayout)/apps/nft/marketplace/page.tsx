"use client"
import { Tabpane1data } from "@/shared/data/apps/nft/marketplacedata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, Nav, Pagination, Row, Tab } from "react-bootstrap";

const Marketplace = () => {
return ( 
    <Fragment>
            {/* Page Header */}
                <Seo title={"Market Place"} />
                <Pageheader Heading="Market Place" Pages={[{title:"Apps", active:true},{title:"NFT", active:true},{title:"Market Place", active:false}]} />
            {/* Page Header Close */}

                {/* Start::row-1 */}
                <Tab.Container defaultActiveKey="first">
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                        <div>
                                            <Nav className="nav nav-tabs nav-tabs-header mb-0" role="tablist">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="first" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-all" aria-selected="true">All</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-art" aria-selected="false" tabIndex={-1}>Art</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="third" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-gaming" aria-selected="false" tabIndex={-1}>Gaming</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="fourth" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-domain" aria-selected="false" tabIndex={-1}>Domain</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="fifth" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-music" aria-selected="false" tabIndex={-1}>Music</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="sixth" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-realestate" aria-selected="false" tabIndex={-1}>Real Estate</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="seven" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-sports" aria-selected="false" tabIndex={-1}>Sports</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="eight" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-fashion" aria-selected="false" tabIndex={-1}>Fashion</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="nine" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-avatars" aria-selected="false" tabIndex={-1}>Avatars</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="ten" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-memes" aria-selected="false" tabIndex={-1}>Memes</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <Button variant="" type="button" className="btn btn-sm btn-secondary btn-wave">Filters</Button>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="" className="btn btn-sm btn-wave btn-primary waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu as="ul" role="menu">
                                                    <li><a className="dropdown-item">New Collection</a></li>
                                                    <li><a className="dropdown-item">High - Low</a></li>
                                                    <li><a className="dropdown-item">Low - High</a></li>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {/*End::row-1 */}

                    {/* Start:: row-2 */}
                    <Row>
                        <Col xl={12}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" className="show p-0 border-0" id="nft-all" role="tabpanel">
                                    <Row>
                                        {Tabpane1data.map((idx)=>(
                                            <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12" key={Math.random()}>
                                                <Card className="custom-card">
                                                    <Card.Body>
                                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                            <div className="position-relative">
                                                                <img src={idx.src1} className="card-img mb-3" alt="..." />
                                                                <p className="mb-0 text-fixed-white nft-auction-time"> {idx.text1}</p>
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
                                            <Pagination className="pagination justify-content-end mb-4">
                                                <Pagination.Item className="page-item disabled">Previous</Pagination.Item>
                                                <Pagination.Item>1</Pagination.Item>
                                                <Pagination.Item>2</Pagination.Item>
                                                <Pagination.Item>3</Pagination.Item>
                                                <Pagination.Item className="pagination-next">Next</Pagination.Item>
                                            </Pagination>
                                        </nav>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second" className="p-0 border-0" id="nft-art" role="tabpanel">
                                    <Row>
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                                            <Card className="custom-card">
                                                <Card.Body>
                                                    <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                        <div className="position-relative">
                                                            <img src="../../../assets/images/nft-images/10.jpg" className="card-img mb-3" alt="..." />
                                                            <p className="mb-0 text-fixed-white nft-auction-time"> 02hrs : 50m : 55s </p>
                                                        </div>
                                                        <p className="fs-14 fw-semibold mb-2">NFTNebula</p>
                                                        <div className="d-flex mb-3 align-items-center flex-wrap gap-2 justify-content-between">
                                                            <div> 
                                                                <span className="fs-12 text-muted d-block mb-1">Created By</span>
                                                                <span className="fw-medium d-block lh-1">DigitalDreams</span>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="fs-12 text-muted d-block mb-1">Top Bid</span>
                                                                <div className="d-flex align-items-center">
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt="" />
                                                                    </span>
                                                                    <span className="ms-1 fw-medium">1.75</span>
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
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                                            <Card className="custom-card">
                                                <Card.Body>
                                                    <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                        <div className="position-relative">
                                                            <img src="../../../assets/images/nft-images/11.jpg" className="card-img mb-3" alt="..." />
                                                            <p className="mb-0 text-fixed-white nft-auction-time"> 06hrs : 15m : 10s </p>
                                                        </div>
                                                        <p className="fs-14 fw-semibold mb-2">DazzleArtifact</p>
                                                        <div className="d-flex mb-3 align-items-center flex-wrap gap-2 justify-content-between">
                                                            <div> 
                                                                <span className="fs-12 text-muted d-block mb-1">Created By</span>
                                                                <span className="fw-medium d-block lh-1">CraftsCollective</span>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="fs-12 text-muted d-block mb-1">Top Bid</span>
                                                                <div className="d-flex align-items-center">
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt="" />
                                                                    </span>
                                                                    <span className="ms-1 fw-medium">2.55</span>
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
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                                            <Card className="custom-card">
                                                <Card.Body>
                                                    <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                        <div className="position-relative">
                                                            <img src="../../../assets/images/nft-images/12.jpg" className="card-img mb-3" alt="..." />
                                                            <p className="mb-0 text-fixed-white nft-auction-time"> 01hrs : 58m : 23s </p>
                                                        </div>
                                                        <p className="fs-14 fw-semibold mb-2">PrestigePiece</p>
                                                        <div className="d-flex mb-3 align-items-center flex-wrap gap-2 justify-content-between">
                                                            <div> 
                                                                <span className="fs-12 text-muted d-block mb-1">Created By</span>
                                                                <span className="fw-medium d-block lh-1">DesignDynamo</span>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="fs-12 text-muted d-block mb-1">Top Bid</span>
                                                                <div className="d-flex align-items-center">
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt="" />
                                                                    </span>
                                                                    <span className="ms-1 fw-medium">4.88</span>
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
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third" className="p-0 border-0" id="nft-gaming" role="tabpanel">
                                    <Row>
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                                            <Card className="custom-card">
                                                <Card.Body>
                                                    <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                        <div className="position-relative">
                                                            <img src="../../../assets/images/nft-images/13.jpg" className="card-img mb-3" alt="..." />
                                                            <p className="mb-0 text-fixed-white nft-auction-time"> 03hrs : 12m : 45s </p>
                                                        </div>
                                                        <p className="fs-14 fw-semibold mb-2">NFTNovelty</p>
                                                        <div className="d-flex mb-3 align-items-center flex-wrap gap-2 justify-content-between">
                                                            <div> 
                                                                <span className="fs-12 text-muted d-block mb-1">Created By</span>
                                                                <span className="fw-medium d-block lh-1">BitBrushMaster</span>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="fs-12 text-muted d-block mb-1">Top Bid</span>
                                                                <div className="d-flex align-items-center">
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt="" />
                                                                    </span>
                                                                    <span className="ms-1 fw-medium">1.45</span>
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
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                                            <Card className="custom-card">
                                                <Card.Body>
                                                    <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                        <div className="position-relative">
                                                            <img src="../../../assets/images/nft-images/14.jpg" className="card-img mb-3" alt="..." />
                                                            <p className="mb-0 text-fixed-white nft-auction-time"> 05hrs : 03m : 20s </p>
                                                        </div>
                                                        <p className="fs-14 fw-semibold mb-2">EtherEcho</p>
                                                        <div className="d-flex mb-3 align-items-center flex-wrap gap-2 justify-content-between">
                                                            <div> 
                                                                <span className="fs-12 text-muted d-block mb-1">Created By</span>
                                                                <span className="fw-medium d-block lh-1">NFTNirvana</span>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="fs-12 text-muted d-block mb-1">Top Bid</span>
                                                                <div className="d-flex align-items-center">
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt="" />
                                                                    </span>
                                                                    <span className="ms-1 fw-medium">2.32</span>
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
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth" className="p-0 border-0" id="nft-domain" role="tabpanel">
                                    <Row>
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                                            <Card className="custom-card">
                                                <Card.Body>
                                                    <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                        <div className="position-relative">
                                                            <img src="../../../assets/images/nft-images/15.jpg" className="card-img mb-3" alt="..." />
                                                            <p className="mb-0 text-fixed-white nft-auction-time"> 07hrs : 06m : 15s </p>
                                                        </div>
                                                        <p className="fs-14 fw-semibold mb-2">VirtualVortex</p>
                                                        <div className="d-flex mb-3 align-items-center flex-wrap gap-2 justify-content-between">
                                                            <div> 
                                                                <span className="fs-12 text-muted d-block mb-1">Created By</span>
                                                                <span className="fw-medium d-block lh-1">EnigmaArtistry</span>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="fs-12 text-muted d-block mb-1">Top Bid</span>
                                                                <div className="d-flex align-items-center">
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt="" />
                                                                    </span>
                                                                    <span className="ms-1 fw-medium">1.42</span>
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
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth" className="p-0 border-0" id="nft-music" role="tabpanel">
                                    <Row>
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                                            <Card className="custom-card">
                                                <Card.Body>
                                                    <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                        <div className="position-relative">
                                                            <img src="../../../assets/images/nft-images/16.jpg" className="card-img mb-3" alt="..." />
                                                            <p className="mb-0 text-fixed-white nft-auction-time"> 07hrs : 06m : 15s </p>
                                                        </div>
                                                        <p className="fs-14 fw-semibold mb-2">VirtualVortex</p>
                                                        <div className="d-flex mb-3 align-items-center flex-wrap gap-2 justify-content-between">
                                                            <div> 
                                                                <span className="fs-12 text-muted d-block mb-1">Created By</span>
                                                                <span className="fw-medium d-block lh-1">EnigmaArtistry</span>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="fs-12 text-muted d-block mb-1">Top Bid</span>
                                                                <div className="d-flex align-items-center">
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt="" />
                                                                    </span>
                                                                    <span className="ms-1 fw-medium">1.42</span>
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
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sixth" className="p-0 border-0" id="nft-realestate" role="tabpanel">
                                    <Row>
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                                            <Card className="custom-card">
                                                <Card.Body>
                                                    <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                        <div className="position-relative">
                                                            <img src="../../../assets/images/nft-images/17.jpg" className="card-img mb-3" alt="..." />
                                                            <p className="mb-0 text-fixed-white nft-auction-time"> 07hrs : 06m : 15s </p>
                                                        </div>
                                                        <p className="fs-14 fw-semibold mb-2">VirtualVortex</p>
                                                        <div className="d-flex mb-3 align-items-center flex-wrap gap-2 justify-content-between">
                                                            <div> 
                                                                <span className="fs-12 text-muted d-block mb-1">Created By</span>
                                                                <span className="fw-medium d-block lh-1">EnigmaArtistry</span>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="fs-12 text-muted d-block mb-1">Top Bid</span>
                                                                <div className="d-flex align-items-center">
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt="" />
                                                                    </span>
                                                                    <span className="ms-1 fw-medium">1.42</span>
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
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="seven" className="p-0 border-0" id="nft-sports" role="tabpanel">
                                    <Row>
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                                            <Card className="custom-card">
                                                <Card.Body>
                                                    <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                        <div className="position-relative">
                                                            <img src="../../../assets/images/nft-images/18.jpg" className="card-img mb-3" alt="..." />
                                                            <p className="mb-0 text-fixed-white nft-auction-time"> 07hrs : 06m : 15s </p>
                                                        </div>
                                                        <p className="fs-14 fw-semibold mb-2">VirtualVortex</p>
                                                        <div className="d-flex mb-3 align-items-center flex-wrap gap-2 justify-content-between">
                                                            <div> 
                                                                <span className="fs-12 text-muted d-block mb-1">Created By</span>
                                                                <span className="fw-medium d-block lh-1">EnigmaArtistry</span>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="fs-12 text-muted d-block mb-1">Top Bid</span>
                                                                <div className="d-flex align-items-center">
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt="" />
                                                                    </span>
                                                                    <span className="ms-1 fw-medium">1.42</span>
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
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="eight" className="p-0 border-0" id="nft-fashion" role="tabpanel">
                                    <Row>
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                                            <Card className="custom-card">
                                                <Card.Body>
                                                    <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                        <div className="position-relative">
                                                            <img src="../../../assets/images/nft-images/5.jpg" className="card-img mb-3" alt="..." />
                                                            <p className="mb-0 text-fixed-white nft-auction-time"> 07hrs : 06m : 15s </p>
                                                        </div>
                                                        <p className="fs-14 fw-semibold mb-2">VirtualVortex</p>
                                                        <div className="d-flex mb-3 align-items-center flex-wrap gap-2 justify-content-between">
                                                            <div> 
                                                                <span className="fs-12 text-muted d-block mb-1">Created By</span>
                                                                <span className="fw-medium d-block lh-1">EnigmaArtistry</span>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="fs-12 text-muted d-block mb-1">Top Bid</span>
                                                                <div className="d-flex align-items-center">
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt="" />
                                                                    </span>
                                                                    <span className="ms-1 fw-medium">1.42</span>
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
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="nine" className="p-0 border-0" id="nft-avatars" role="tabpanel">
                                    <Row>
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                                            <Card className="custom-card">
                                                <Card.Body>
                                                    <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                        <div className="position-relative">
                                                            <img src="../../../assets/images/nft-images/7.jpg" className="card-img mb-3" alt="..." />
                                                            <p className="mb-0 text-fixed-white nft-auction-time"> 07hrs : 06m : 15s </p>
                                                        </div>
                                                        <p className="fs-14 fw-semibold mb-2">VirtualVortex</p>
                                                        <div className="d-flex mb-3 align-items-center flex-wrap gap-2 justify-content-between">
                                                            <div> 
                                                                <span className="fs-12 text-muted d-block mb-1">Created By</span>
                                                                <span className="fw-medium d-block lh-1">EnigmaArtistry</span>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="fs-12 text-muted d-block mb-1">Top Bid</span>
                                                                <div className="d-flex align-items-center">
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt="" />
                                                                    </span>
                                                                    <span className="ms-1 fw-medium">1.42</span>
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
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="ten" className="p-0 border-0" id="nft-memes" role="tabpanel">
                                    <Row>
                                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                                            <Card className="custom-card">
                                                <Card.Body>
                                                    <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                        <div className="position-relative">
                                                            <img src="../../../assets/images/nft-images/11.jpg" className="card-img mb-3" alt="..." />
                                                            <p className="mb-0 text-fixed-white nft-auction-time"> 07hrs : 06m : 15s </p>
                                                        </div>
                                                        <p className="fs-14 fw-semibold mb-2">VirtualVortex</p>
                                                        <div className="d-flex mb-3 align-items-center flex-wrap gap-2 justify-content-between">
                                                            <div> 
                                                                <span className="fs-12 text-muted d-block mb-1">Created By</span>
                                                                <span className="fw-medium d-block lh-1">EnigmaArtistry</span>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="fs-12 text-muted d-block mb-1">Top Bid</span>
                                                                <div className="d-flex align-items-center">
                                                                    <span className="avatar avatar-xs">
                                                                        <img src="../../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt="" />
                                                                    </span>
                                                                    <span className="ms-1 fw-medium">1.42</span>
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
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
                {/* End:: row-2 */}
    </Fragment>
    )
};

export default Marketplace;