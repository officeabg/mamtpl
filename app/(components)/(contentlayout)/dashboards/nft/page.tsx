"use client"
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, ListGroup, Pagination, Row, Table } from "react-bootstrap";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Nftdata from '@/shared/data/dashboards/nftdata';
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Nft = () => {
return (
<Fragment>
                {/*  Start::page-header */}
                    <Seo title={"NFT"} />
                    <Pageheader Heading="NFT" Pages={[{title:"Dashboards", active:true}, {title:"NFT", active:false},]} />
                {/*  End::page-header */}

                {/*  Start:: row-1 */}
                <Row>
                    <Col xl={7}>
                        <Card className="custom-card nft-custom-card bg-primary-gradient border-0">
                            <Card.Body className="p-4">
                                <Row>
                                    <Col xxl={8} xl={6} lg={6} md={6} className="">
                                        <h2 className="text-fixed-white mb-4 lh-base">Discover, Collect, Sell And Create Your Own NFT</h2>
                                        <Button variant="" className="btn btn-secondary btn-lg btn-wave">Discover Now</Button>
                                    </Col>
                                    <Col xxl={4} xl={6} lg={6} md={6} className="d-md-block d-none">
                                        <div className="text-center nft-main-image">
                                            <img src="../../assets/images/nft-images/1.png" alt=""/>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={5}>
                        <Row>
                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} className=" col-12">
                                <Card className="custom-card bg-primary-transparent border-0 shadow-none">
                                    <Card.Body className="p-4">
                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                            <div className="main-card-icon primary">
                                                <div className="avatar avatar-lg bg-primary-transparent border border-primary border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg className="svg-white" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z"></path></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="d-block ,mb-1">Total Assets</span>
                                                <h5 className="fw-medium d-block mb-0">543<span className="text-success fw-semibold fs-12 ms-2 d-inline-block">0.25%<i className="ri-arrow-up-s-line align-middle mx-1"></i></span></h5>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} className="col-12">
                                <Card className="custom-card bg-secondary-transparent border-0 shadow-none">
                                    <Card.Body className="p-4">
                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                            <div className="main-card-icon secondary">
                                                <div className="avatar avatar-lg bg-secondary-transparent border border-secondary border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg className="svg-white" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0,0h24v24H0V0z" fill="none"></path><g><path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z"></path><rect height="2" width="6" x="9" y="7"></rect><rect height="2" width="2" x="16" y="7"></rect><rect height="2" width="6" x="9" y="10"></rect><rect height="2" width="2" x="16" y="10"></rect></g></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="d-block ,mb-1">Total Value</span>
                                                <h5 className="fw-medium d-block mb-0">$15,322<span className="text-danger fw-semibold fs-12 ms-2 d-inline-block">0.14%<i className="ri-arrow-down-s-line align-middle mx-1"></i></span></h5>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} className="col-12">
                                <Card className="custom-card bg-success-transparent border-0 shadow-none">
                                    <Card.Body className="p-4">
                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                            <div className="main-card-icon success">
                                                <div className="avatar avatar-lg bg-success-transparent border border-success border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg className="svg-white" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><g><path d="M21.41,11.41l-8.83-8.83C12.21,2.21,11.7,2,11.17,2H4C2.9,2,2,2.9,2,4v7.17c0,0.53,0.21,1.04,0.59,1.41l8.83,8.83 c0.78,0.78,2.05,0.78,2.83,0l7.17-7.17C22.2,13.46,22.2,12.2,21.41,11.41z M12.83,20L4,11.17V4h7.17L20,12.83L12.83,20z"></path><circle cx="6.5" cy="6.5" r="1.5"></circle></g></g></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="d-block ,mb-1">Total Sales</span>
                                                <h5 className="fw-medium d-block mb-0">662<span className="text-success fw-semibold fs-12 ms-2 d-inline-block">1.57%<i className="ri-arrow-up-s-line align-middle mx-1"></i></span></h5>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} className="col-12">
                                <Card className="custom-card bg-orange-transparent border-0 shadow-none">
                                    <Card.Body className="p-4">
                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                            <div className="main-card-icon orange">
                                                <div className="avatar avatar-lg bg-orange-transparent border border-orange border-opacity-10">
                                                    <div className="avatar avatar-sm svg-white">
                                                        <svg className="svg-white" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8 s8,3.59,8,8C20,16.41,16.41,20,12,20z M12.89,11.1c-1.78-0.59-2.64-0.96-2.64-1.9c0-1.02,1.11-1.39,1.81-1.39 c1.31,0,1.79,0.99,1.9,1.34l1.58-0.67c-0.15-0.44-0.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6,0.56-2.62,2.85-2.62,2.96 c0,2.27,2.25,2.91,3.35,3.31c1.58,0.56,2.28,1.07,2.28,2.03c0,1.13-1.05,1.61-1.98,1.61c-1.82,0-2.34-1.87-2.4-2.09L8.1,14.75 c0.63,2.19,2.28,2.78,3.02,2.96V19h1.75v-1.24c0.52-0.09,3.02-0.59,3.02-3.22C15.9,13.15,15.29,11.93,12.89,11.1z"></path></g></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="d-block ,mb-1">Total Revenue</span>
                                                <h5 className="fw-medium d-block mb-0">$67,977<span className="text-success fw-semibold fs-12 ms-2 d-inline-block">0.34%<i className="ri-arrow-up-s-line align-middle mx-1"></i></span></h5>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/*  End:: row-1 */}

                {/*  Start:: row-2 */}
                <Row>
                    <div className="col-xl-9">
                        <div className="mb-4 d-flex align-items-center justify-content-between flex-wrap gap-2"> 
                            <h6 className="fw-medium mb-0">Trending NFT'S :</h6> 
                            <div className="btn-group btn-group-sm" role="group" aria-label="Basic example"> 
                                <Button variant="" type="button" className="btn btn-primary btn-sm btn-wave waves-effect waves-light">1D</Button>
                                <Button variant="" type="button" className="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">1W</Button> 
                                <Button variant="" type="button" className="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">1M</Button> 
                                <Button variant="" type="button" className="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">1Y</Button> 
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-4 mb-4 flex-wrap">
                            <div className="nft-tag nft-tag-primary active">
                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                <span className="nft-tag-icon"><i className="ti ti-world fs-16"></i></span>
                                <span className="nft-tag-text">All</span>
                            </div>
                            <div className="nft-tag nft-tag-secondary">
                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                <span className="nft-tag-icon"><i className="ti ti-flame fs-16"></i></span>
                                <span className="nft-tag-text">New Trends</span>
                            </div>
                            <div className="nft-tag nft-tag-info">
                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                <span className="nft-tag-icon"><i className="ti ti-palette fs-16"></i></span>
                                <span className="nft-tag-text">Art Work</span>
                            </div>
                            <div className="nft-tag nft-tag-success">
                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                <span className="nft-tag-icon"><i className="ti ti-device-gamepad-2 fs-16"></i></span>
                                <span className="nft-tag-text">Games</span>
                            </div>
                            <div className="nft-tag nft-tag-danger">
                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                <span className="nft-tag-icon"><i className="ti ti-tie fs-16"></i></span>
                                <span className="nft-tag-text">Fashion</span>
                            </div>
                            <div className="nft-tag nft-tag-purple">
                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                <span className="nft-tag-icon"><i className="ti ti-music fs-16"></i></span>
                                <span className="nft-tag-text">Music</span>
                            </div>
                        </div>
                        <Row>
                            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="card custom-card">
                                    <Card.Body>
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>    
                                            <div className="position-relative">
                                                <img src="../../assets/images/nft-images/2.jpg" className="card-img mb-3" alt="..."/>
                                                <p className="mb-0 text-fixed-white nft-auction-time"> 04hrs : 24m : 38s </p>
                                            </div>
                                            <p className="fs-14 fw-semibold mb-2">CryptoCanvas</p>
                                            <div className="d-flex mb-3 align-items-center flex-wrap gap-2 justify-content-between">
                                                <div> 
                                                    <span className="fs-12 text-muted d-block mb-1">Created By</span>
                                                    <span className="fw-medium d-block lh-1">PixelCraftPro</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="fs-12 text-muted d-block mb-1">Top Bid</span>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-xs">
                                                            <img src="../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt=""/>
                                                        </span>
                                                        <span className="ms-1 fw-medium">2.78</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-grid">
                                                <Button variant="" className="btn btn-light btn-wave">
                                                    Place BId
                                                </Button>
                                            </div>
                                    </Card.Body>
                                </div>
                            </div>
                            <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                                <Card className="custom-card">
                                    <Card.Body>
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>    
                                            <div className="position-relative">
                                                <img src="../../assets/images/nft-images/3.jpg" className="card-img mb-3" alt="..."/>
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
                                                            <img src="../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt=""/>
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
                                                <img src="../../assets/images/nft-images/4.jpg" className="card-img mb-3" alt="..."/>
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
                                                            <img src="../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt=""/>
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
                            <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                                <Card className="card custom-card">
                                    <Card.Body>
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>    
                                            <div className="position-relative">
                                                <img src="../../assets/images/nft-images/5.jpg" className="card-img mb-3" alt="..."/>
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
                                                            <img src="../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt=""/>
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
                                                <img src="../../assets/images/nft-images/6.jpg" className="card-img mb-3" alt="..."/>
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
                                                            <img src="../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt=""/>
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
                                                <img src="../../assets/images/nft-images/7.jpg" className="card-img mb-3" alt="..."/>
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
                                                            <img src="../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt=""/>
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
                            <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                                <Card className="custom-card">
                                    <Card.Body>
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>    
                                            <div className="position-relative">
                                                <img src="../../assets/images/nft-images/8.jpg" className="card-img mb-3" alt="..."/>
                                                <p className="mb-0 text-fixed-white nft-auction-time"> 03hrs : 45m : 50s </p>
                                            </div>
                                            <p className="fs-14 fw-semibold mb-2">BlazeBadge</p>
                                            <div className="d-flex mb-3 align-items-center flex-wrap gap-2 justify-content-between">
                                                <div> 
                                                    <span className="fs-12 text-muted d-block mb-1">Created By</span>
                                                    <span className="fw-medium d-block lh-1">ArtisanEnclave</span>
                                                </div>
                                                <div className="text-end">
                                                    <span className="fs-12 text-muted d-block mb-1">Top Bid</span>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-xs">
                                                            <img src="../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt=""/>
                                                        </span>
                                                        <span className="ms-1 fw-medium">5.22</span>
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
                                                <img src="../../assets/images/nft-images/9.jpg" className="card-img mb-3" alt="..."/>
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
                                                            <img src="../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt=""/>
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
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Header className="justify-content-between">
                                        <Card.Title>
                                            LIVE AUCTION
                                        </Card.Title>
                                        <div className="d-flex flex-wrap gap-2"> 
                                            <div> 
                                                <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" /> 
                                            </div> 
                                            <Dropdown> 
                                                <Dropdown.Toggle variant=""  href="#!" className="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false"> Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> 
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
                                                        <th scope="col">Item</th>
                                                        <th scope="col">Open Price </th>
                                                        <th scope="col">Auction Time</th>
                                                        <th scope="col">Your Bid</th>
                                                        <th scope="col">Last Bid</th>
                                                        <th scope="col">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../assets/images/nft-images/14.jpg" alt=""/>
                                                                </span>
                                                                <div>
                                                                    <span className="d-block fw-medium">EtherEden</span>
                                                                    <span className="fs-12 text-muted">by @Eden Pixelist</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>1.27 ETH</td>
                                                        <td><span className="badge bg-primary-transparent">1hr 45min 32sec</span></td>
                                                        <td>1.75 ETH</td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <span className="avatar avatar-xs avatar-rounded">
                                                                    <img src="../../assets/images/faces/1.jpg" alt=""/>
                                                                </span>
                                                                <span>2.25 ETH</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Button variant="" className="btn btn-primary-light btn-sm btn-wave">
                                                                View <i className="ti ti-arrow-narrow-right ms-1 d-inline-block"></i>
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../assets/images/nft-images/15.jpg" alt=""/>
                                                                </span>
                                                                <div>
                                                                    <span className="d-block fw-medium">CryptoCraze</span>
                                                                    <span className="fs-12 text-muted">by @TechnoTrendsetter</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>1.5 ETH</td>
                                                        <td><span className="badge bg-orange-transparent">1hr 45min 32sec</span></td>
                                                        <td>2.45 ETH</td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <span className="avatar avatar-xs avatar-rounded">
                                                                    <img src="../../assets/images/faces/11.jpg" alt=""/>
                                                                </span>
                                                                <span>3.75 ETH</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Button variant="" className="btn btn-primary-light btn-sm btn-wave">
                                                                View <i className="ti ti-arrow-narrow-right ms-1 d-inline-block"></i>
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../assets/images/nft-images/17.jpg" alt=""/>
                                                                </span>
                                                                <div>
                                                                    <span className="d-block fw-medium">Cosmic Canvases</span>
                                                                    <span className="fs-12 text-muted">by @AstroArtisan</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>1.75 ETH</td>
                                                        <td><span className="badge bg-secondary-transparent">2hr 15min 10sec</span></td>
                                                        <td>2.25 ETH</td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <span className="avatar avatar-xs avatar-rounded">
                                                                    <img src="../../assets/images/faces/5.jpg" alt=""/>
                                                                </span>
                                                                <span>5.65 ETH</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Button variant="" className="btn btn-primary-light btn-sm btn-wave">
                                                                View <i className="ti ti-arrow-narrow-right ms-1 d-inline-block"></i>
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../assets/images/nft-images/18.jpg" alt=""/>
                                                                </span>
                                                                <div>
                                                                    <span className="d-block fw-medium">Mystic Mosaics</span>
                                                                    <span className="fs-12 text-muted">by @Enigma Weaver</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>2.00 ETH</td>
                                                        <td><span className="badge bg-success-transparent">3hr 30min 45sec</span></td>
                                                        <td>3.75 ETH</td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <span className="avatar avatar-xs avatar-rounded">
                                                                    <img src="../../assets/images/faces/13.jpg" alt=""/>
                                                                </span>
                                                                <span>6.45 ETH</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Button variant="" className="btn btn-primary-light btn-sm btn-wave">
                                                                View <i className="ti ti-arrow-narrow-right ms-1 d-inline-block"></i>
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../assets/images/nft-images/16.jpg" alt=""/>
                                                                </span>
                                                                <div>
                                                                    <span className="d-block fw-medium">Virtual Voyages</span>
                                                                    <span className="fs-12 text-muted">by @Binary Navigator</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>1.25 ETH</td>
                                                        <td><span className="badge bg-info-transparent">0hr 50min 20sec</span></td>
                                                        <td>1.35 ETH</td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <span className="avatar avatar-xs avatar-rounded">
                                                                    <img src="../../assets/images/faces/7.jpg" alt=""/>
                                                                </span>
                                                                <span>2.15 ETH</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Button variant="" className="btn btn-primary-light btn-sm btn-wave">
                                                                View <i className="ti ti-arrow-narrow-right ms-1 d-inline-block"></i>
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer className="border-top-0"> 
                                        <div className="d-flex align-items-center"> 
                                            <div> Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
                                            <div className="ms-auto"> 
                                            <nav aria-label="Page navigation" className="pagination-style-4"> 
                                                <Pagination className="mb-0"> 
                                                    <Pagination.Item disabled>Prev</Pagination.Item>
                                                        <Pagination.Item active>1</Pagination.Item> 
                                                        <Pagination.Item>2</Pagination.Item> 
                                                        <Pagination.Item className="pagination-next"> next </Pagination.Item> 
                                                    </Pagination> 
                                                </nav> 
                                            </div> 
                                        </div> 
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <Col xl={3}>
                        <Row>
                            <Col xl={12}>
                                <Card className="custom-card orders-card overflow-hidden">
                                    <Card.Body className="p-0">
                                        <div className="d-flex position-absolute px-3 pt-3 gap-3 w-100">
                                            <div className="avatar avatar-md avatar-rounded bg-secondary-transparent">
                                                <i className="ti ti-trending-up fs-5"></i>
                                            </div>
                                            <div className="flex-fill d-flex align-items-start justify-content-between">
                                                <div>
                                                    <span className="fs-11 mb-2 d-block fw-medium">TOTAL REVENUE</span> 
                                                    <div className="d-flex align-items-center justify-content-between mb-1">
                                                        <h5 className="fw-medium mb-0">3,543 ETH</h5>
                                                    </div>
                                                    <span className="fs-12 op-8">Increased by</span><span className="text-success fs-12 ms-2 op-1"><i className="ti ti-trending-up align-middle me-1"></i>0.57%</span>
                                                </div>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="" className="no-caret  border-0" aria-label="anchor" href="#!" data-bs-toggle="dropdown"> 
                                                    <i className="ri-more-fill fs-18 text-muted"></i> 
                                                    </Dropdown.Toggle> 
                                                    <Dropdown.Menu role="menu"> 
                                                        <li><Dropdown.Item href="#!">Total</Dropdown.Item></li> 
                                                        <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li> 
                                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li> 
                                                    </Dropdown.Menu> 
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <div id="revenue">
                                            <ReactApexChart options={Nftdata.Revenu1.options} series={Nftdata.Revenu1.series} type="area" width={"100%"} height={100} />
                                        </div>
                                        <div id="revenue1">
                                            <ReactApexChart options={Nftdata.Revenu2.options} series={Nftdata.Revenu2.series} type="area" width={"100%"} height={100} />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={12} xl={12} md={6} sm={6}  className="col-12">
                                <Card className="custom-card overflow-hidden">
                                    <Card.Header className="justify-content-between">
                                        <Card.Title>
                                            TOP COLLECTIONS
                                        </Card.Title>
                                        <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                    </Card.Header>
                                    <Card.Body className="p-0">
                                        <ListGroup className="list-group list-group-flush">
                                            <ListGroup.Item>
                                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md">
                                                            <img src="../../assets/images/nft-images/10.jpg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="mb-0 d-block fw-medium lh-1">Quantum Dreams</span>
                                                        <Link scroll={false} href="#!"><span className="fs-12">by @Celeste Nova</span></Link>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <Link scroll={false} href="#!" className="p-1" data-bs-toggle="tooltip" title="View" data-bs-custom-class="tooltip-dark"><i className="ri-arrow-right-s-line fs-5 lh-1 rtl-rotate"></i></Link>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md">
                                                            <img src="../../assets/images/nft-images/11.jpg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="mb-0 d-block fw-medium lh-1">Pixel Pioneers</span>
                                                        <Link scroll={false} href="#!"><span className="fs-12">by @Max Byte</span></Link>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <Link scroll={false} href="#!" className="p-1" data-bs-toggle="tooltip" title="View" data-bs-custom-class="tooltip-dark"><i className="ri-arrow-right-s-line fs-5 lh-1 rtl-rotate"></i></Link>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md">
                                                            <img src="../../assets/images/nft-images/12.jpg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="mb-0 d-block fw-medium lh-1">Galactic Gems</span>
                                                        <Link scroll={false} href="#!"><span className="fs-12">by @Stella Starlight</span></Link>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <Link scroll={false} href="#!" className="p-1" data-bs-toggle="tooltip" title="View" data-bs-custom-class="tooltip-dark"><i className="ri-arrow-right-s-line fs-5 lh-1 rtl-rotate"></i></Link>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md">
                                                            <img src="../../assets/images/nft-images/13.jpg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="mb-0 d-block fw-medium lh-1">Virtual Visions</span>
                                                        <Link scroll={false} href="#!"><span className="fs-12">by @Digital Dynamo</span></Link>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <Link scroll={false} href="#!" className="p-1" data-bs-toggle="tooltip" title="View" data-bs-custom-class="tooltip-dark"><i className="ri-arrow-right-s-line fs-5 lh-1 rtl-rotate"></i></Link>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md">
                                                            <img src="../../assets/images/nft-images/4.jpg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="mb-0 d-block fw-medium lh-1">EtherElegance</span>
                                                        <Link scroll={false} href="#!"><span className="fs-12">by @NeoCraftsman</span></Link>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <Link scroll={false} href="#!" className="p-1" data-bs-toggle="tooltip" title="View" data-bs-custom-class="tooltip-dark"><i className="ri-arrow-right-s-line fs-5 lh-1 rtl-rotate"></i></Link>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md">
                                                            <img src="../../assets/images/nft-images/5.jpg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="mb-0 d-block fw-medium lh-1">CryptoCritters</span>
                                                        <Link scroll={false} href="#!"><span className="fs-12">by @Pixel Paws</span></Link>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <Link scroll={false} href="#!" className="p-1" data-bs-toggle="tooltip" title="View" data-bs-custom-class="tooltip-dark"><i className="ri-arrow-right-s-line fs-5 lh-1 rtl-rotate"></i></Link>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md">
                                                            <img src="../../assets/images/nft-images/2.jpg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="mb-0 d-block fw-medium lh-1">TechnoTales</span>
                                                        <Link scroll={false} href="#!"><span className="fs-12">by @NeoCraftsman</span></Link>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <Link scroll={false} href="#!" className="p-1" data-bs-toggle="tooltip" title="View" data-bs-custom-class="tooltip-dark"><i className="ri-arrow-right-s-line fs-5 lh-1 rtl-rotate"></i></Link>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={12} xl={12} md={6} sm={6}  className="col-12">
                                <Card className="custom-card">
                                    <Card.Header className=" justify-content-between">
                                        <Card.Title>
                                            TOP SELLERS
                                        </Card.Title>
                                        <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                    </Card.Header>
                                    <Card.Body>
                                        <ul className="list-unstyled nft-top-sellers-list">
                                            <li>
                                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md avatar-rounded bg-pink-transparent">
                                                            <img src="../../assets/images/faces/png/1.png" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <Link scroll={false} href="#!" className="mb-0 d-block fw-medium lh-1">Kakashi Si</Link>
                                                        <span className="fs-12 text-muted">@lunalogic011 <i className="bi bi-patch-check-fill text-gray op-5 ms-1 fs-14"></i></span>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <Link scroll={false} href="#!" className="btn btn-outline-light btn-sm rounded-pill btn-icon" data-bs-toggle="tooltip" title="Follow" data-bs-custom-class="tooltip-dark"><i className="ti ti-user-plus"></i></Link>
                                                        <Dropdown> 
                                                            <Dropdown.Toggle variant="" aria-label="anchor" className="btn btn-light btn-icon btn-sm rounded-pill no-caret" href="#!" data-bs-toggle="dropdown"> 
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle> 
                                                            <Dropdown.Menu as="ul" role="menu"> 
                                                                <li><Dropdown.Item href="#!">Week</Dropdown.Item></li> 
                                                                <li><Dropdown.Item href="#!">Day</Dropdown.Item></li> 
                                                                <li><Dropdown.Item href="#!">Year</Dropdown.Item></li> 
                                                            </Dropdown.Menu> 
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md avatar-rounded bg-info-transparent">
                                                            <img src="../../assets/images/faces/png/2.png" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <Link scroll={false} href="#!" className="mb-0 d-block fw-medium lh-1">NFTNebula</Link>
                                                        <span className="fs-12 text-muted">@synthwavesage <i className="bi bi-patch-check-fill text-gray op-5 ms-1 fs-14"></i></span>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <Link scroll={false} href="#!" className="btn btn-outline-light btn-sm rounded-pill btn-icon" data-bs-toggle="tooltip" title="Follow" data-bs-custom-class="tooltip-dark"><i className="ti ti-user-plus"></i></Link>
                                                        <Dropdown> 
                                                            <Dropdown.Toggle variant="" aria-label="anchor" className="btn btn-light btn-icon btn-sm rounded-pill no-caret" href="#!" data-bs-toggle="dropdown"> 
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle> 
                                                            <Dropdown.Menu as="ul" role="menu"> 
                                                                <li><Dropdown.Item href="#!">Week</Dropdown.Item></li> 
                                                                <li><Dropdown.Item href="#!">Day</Dropdown.Item></li> 
                                                                <li><Dropdown.Item href="#!">Year</Dropdown.Item></li> 
                                                            </Dropdown.Menu> 
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md avatar-rounded bg-danger-transparent">
                                                            <img src="../../assets/images/faces/png/3.png" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <Link scroll={false} href="#!" className="mb-0 d-block fw-medium lh-1">PixelPioneer</Link>
                                                        <span className="fs-12 text-muted">@binarybard89 <i className="bi bi-patch-check-fill text-gray op-5 ms-1 fs-14"></i></span>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <Link scroll={false} href="#!" className="btn btn-secondary btn-sm rounded-pill btn-icon" data-bs-toggle="tooltip" title="Unfollow" data-bs-custom-class="tooltip-dark"><i className="ti ti-user-check"></i></Link>
                                                        <Dropdown> 
                                                            <Dropdown.Toggle variant="" aria-label="anchor" className="btn btn-light btn-icon btn-sm rounded-pill no-caret" href="#!" data-bs-toggle="dropdown"> 
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle> 
                                                            <Dropdown.Menu as="ul" role="menu"> 
                                                                <li><Dropdown.Item href="#!">Week</Dropdown.Item></li> 
                                                                <li><Dropdown.Item href="#!">Day</Dropdown.Item></li> 
                                                                <li><Dropdown.Item href="#!">Year</Dropdown.Item></li> 
                                                            </Dropdown.Menu> 
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md avatar-rounded bg-warning-transparent">
                                                            <img src="../../assets/images/faces/png/7.png" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <Link scroll={false} href="#!" className="mb-0 d-block fw-medium lh-1">VirtualVisionary</Link>
                                                        <span className="fs-12 text-muted">@auroracode712 <i className="bi bi-patch-check-fill text-gray op-5 ms-1 fs-14"></i></span>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <Link scroll={false} href="#!" className="btn btn-secondary btn-sm rounded-pill btn-icon" data-bs-toggle="tooltip" title="Unfollow" data-bs-custom-class="tooltip-dark"><i className="ti ti-user-check"></i></Link>
                                                        <Dropdown> 
                                                            <Dropdown.Toggle variant=""  aria-label="anchor" className="btn btn-light btn-icon btn-sm rounded-pill no-caret" href="#!" data-bs-toggle="dropdown"> 
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle> 
                                                            <Dropdown.Menu as="ul" role="menu"> 
                                                                <li><Dropdown.Item href="#!">Week</Dropdown.Item></li> 
                                                                <li><Dropdown.Item href="#!">Day</Dropdown.Item></li> 
                                                                <li><Dropdown.Item href="#!">Year</Dropdown.Item></li> 
                                                            </Dropdown.Menu> 
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md avatar-rounded bg-primary-transparent">
                                                            <img src="../../assets/images/faces/png/9.png" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <Link scroll={false} href="#!" className="mb-0 d-block fw-medium lh-1">BitByteBrush</Link>
                                                        <span className="fs-12 text-muted">@maxbyte98 <i className="bi bi-patch-check-fill text-gray op-5 ms-1 fs-14"></i></span>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <Link scroll={false} href="#!" className="btn btn-outline-light btn-sm rounded-pill btn-icon" data-bs-toggle="tooltip" title="Follow" data-bs-custom-class="tooltip-dark"><i className="ti ti-user-plus"></i></Link>
                                                        <Dropdown> 
                                                            <Dropdown.Toggle variant="" aria-label="anchor" className="btn btn-light btn-icon btn-sm rounded-pill no-caret" href="#!" data-bs-toggle="dropdown"> 
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle> 
                                                            <Dropdown.Menu as="ul" role="menu"> 
                                                                <li><Dropdown.Item href="#!">Week</Dropdown.Item></li> 
                                                                <li><Dropdown.Item href="#!">Day</Dropdown.Item></li> 
                                                                <li><Dropdown.Item href="#!">Year</Dropdown.Item></li> 
                                                            </Dropdown.Menu> 
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md avatar-rounded bg-success-transparent">
                                                            <img src="../../assets/images/faces/png/5.png" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <Link scroll={false} href="#!" className="mb-0 d-block fw-medium lh-1">NoveltyNurturer</Link>
                                                        <span className="fs-12 text-muted">@celestenova89 <i className="bi bi-patch-check-fill text-gray op-5 ms-1 fs-14"></i></span>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <Link scroll={false} href="#!" className="btn btn-secondary btn-sm rounded-pill btn-icon" data-bs-toggle="tooltip" title="Unfollow" data-bs-custom-class="tooltip-dark"><i className="ti ti-user-check"></i></Link>
                                                        <Dropdown> 
                                                            <Dropdown.Toggle variant="" aria-label="anchor" className="btn btn-light btn-icon btn-sm rounded-pill no-caret" href="#!" data-bs-toggle="dropdown"> 
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle> 
                                                            <Dropdown.Menu as="ul" role="menu"> 
                                                                <li><Dropdown.Item href="#!">Week</Dropdown.Item></li> 
                                                                <li><Dropdown.Item href="#!">Day</Dropdown.Item></li> 
                                                                <li><Dropdown.Item href="#!">Year</Dropdown.Item></li> 
                                                            </Dropdown.Menu> 
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md avatar-rounded bg-primary-transparent">
                                                            <img src="../../assets/images/faces/png/8.png" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <Link scroll={false} href="#!" className="mb-0 d-block fw-medium lh-1">RoboRhythms</Link>
                                                        <span className="fs-12 text-muted">@circuitmaestro <i className="bi bi-patch-check-fill text-gray op-5 ms-1 fs-14"></i></span>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <Link scroll={false} href="#!" className="btn btn-outline-light btn-sm rounded-pill btn-icon" data-bs-toggle="tooltip" title="Follow" data-bs-custom-class="tooltip-dark"><i className="ti ti-user-plus"></i></Link>
                                                        <Dropdown> 
                                                            <Dropdown.Toggle variant="" aria-label="anchor" className="btn btn-light btn-icon btn-sm rounded-pill no-caret" href="#!" data-bs-toggle="dropdown"> 
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle> 
                                                            <Dropdown.Menu as="ul" role="menu"> 
                                                                <li><Dropdown.Item href="#!">Week</Dropdown.Item></li> 
                                                                <li><Dropdown.Item href="#!">Day</Dropdown.Item></li> 
                                                                <li><Dropdown.Item href="#!">Year</Dropdown.Item></li> 
                                                            </Dropdown.Menu> 
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/*  End:: row-2 */}
</Fragment>
);
};

export default Nft;