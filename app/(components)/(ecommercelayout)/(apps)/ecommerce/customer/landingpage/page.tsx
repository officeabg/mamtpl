"use client"
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Carousel, Col, Nav, OverlayTrigger, ProgressBar, Row, Tab, Tooltip } from "react-bootstrap";

const Landingpage = () => {
return( 
    <Fragment>
<div className="main-content landing-main ecommerce-main">

                {/* Start:: Section-1 */}
                <section className="section-sm">
                    <div className="container main-banner-container"> 
                        <Row>
                            <Col xl={8}>
                                <Card className="hero-banner border-0">
                                    <Card.Body className="p-0">
                                        <Carousel id="hero-banner-carousel" className="carousel slide" data-bs-ride="carousel">
                                                <Carousel.Item className="">
                                                    <div className="banner banner-1">
                                                        <Row>
                                                            <Col md={7}>
                                                                <div className="banner-content text-start text-default">
                                                                    <p>Exclusive Offers<span className="badge bg-secondary ms-2 blink-text">50% Off</span></p>
                                                                    <h2 className="fw-medium mb-3">Fresh Vegetables<br/>Big Discount</h2>
                                                                    <p className="text-muted fs-18 mb-4">Get 50% Discount On First Order</p>
                                                                    <div className="custom-form-group">
                                                                        <input type="text" className="form-control form-control-lg rounded-pill shadow-sm" placeholder="Search Product Here.." aria-label="Recipient's username"/>
                                                                        <Button variant="" className="btn btn-primary border-0 custom-form-btn rounded-pill" type="button">Subscribe</Button>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                            <Col md={5}>
                                                                <div className="banner-1-img">
                                                                    <img src="../../../assets/images/ecommerce/banner/1.png" alt="img" className="scaleX--1 img-fluid"/>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Carousel.Item>
                                                <Carousel.Item className="">
                                                    <div className="banner banner-1">
                                                        <Row>
                                                            <Col md={7}>
                                                                <div className="banner-content text-start text-default">
                                                                    <p>Exclusive Offers<span className="badge bg-secondary ms-2 blink-text">50% Off</span></p>
                                                                    <h2 className="fw-medium mb-3">Face Products Kit<br/>Big Discount</h2>
                                                                    <p className="text-muted fs-18 mb-4">Get 50% Discount On First Order</p>
                                                                    <Link scroll={false} href="#!" className="btn btn-primary btn-lg">Shop Now</Link>
                                                                </div>
                                                            </Col>
                                                            <Col md={5}>
                                                                <div className="banner-1-img">
                                                                    <img src="../../../assets/images/ecommerce/banner/8.png" alt="img" className="img-fluid"/>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Carousel.Item>
                                                <Carousel.Item className="">
                                                    <div className="banner banner-1">
                                                        <Row>
                                                            <Col md={7}>
                                                                <div className="banner-content text-start text-default">
                                                                    <p>Exclusive Offers<span className="badge bg-secondary ms-2 blink-text">50% Off</span></p>
                                                                    <h2 className="fw-medium mb-3">Gifts for Occasions<br/>Big Discount</h2>
                                                                    <p className="text-muted fs-18 mb-4">Get 50% Discount On First Order</p>
                                                                    <Link scroll={false} href="#!" className="btn btn-primary btn-lg">Shop Now</Link>
                                                                </div>
                                                            </Col>
                                                            <Col md={5}>
                                                                <div className="banner-1-img">
                                                                    <img src="../../../assets/images/ecommerce/banner/2.png" alt="img" className="img-fluid"/>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Carousel.Item>
                                        </Carousel>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={4}>
                                <Row>
                                    <Col xl={12} lg={6} className="">
                                        <Card className="banner banner-2 custom-card border-0 shadow-none">
                                            <Card.Body className="p-4">
                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                <div className="row align-items-center">
                                                    <Col md={8}>
                                                        <h5 className="mb-3 fw-medium">Wellingtn Pouch</h5>
                                                        <p className="mb-2 fs-13 text-secondary fw-medium">30% Discount</p>
                                                        <div className="d-flex align-items-baseline ">
                                                            <h4 className="fw-medium mb-0">$120</h4>
                                                            <span className="fs-13 ms-2 text-decoration-line-through">$399</span>
                                                        </div>
                                                    </Col>
                                                    <Col md={4}>
                                                        <img src="../../../assets/images/ecommerce/png/31.png" alt="img" className="img-fluid"/>
                                                    </Col>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={12} lg={6} className="">
                                        <Card className="banner banner-3 custom-card border-0 shadow-none">
                                            <Card.Body className="p-4">
                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                <div className="row align-items-center">
                                                    <Col md={8}>
                                                        <h5 className="mb-3 fw-medium">CapturePro Camera</h5>
                                                        <p className="mb-2 fs-13 text-success fw-medium">45% Discount</p>
                                                        <div className="d-flex align-items-baseline ">
                                                            <h4 className="fw-medium mb-0">$350</h4>
                                                            <span className="fs-13 ms-2 text-decoration-line-through">$599</span>
                                                        </div>
                                                    </Col>
                                                    <Col md={4}>
                                                        <img src="../../../assets/images/ecommerce/png/29.png" alt="img" className="img-fluid"/>
                                                    </Col>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </section> 
                {/* End:: Section-1 */}

                {/* Start:: Section-2 */}
                <section className="section-sm">
                    <div className="container">
                        <Row>
                            <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2 mb-4">
                                <div className="heading-section text-start">
                                    <div className="heading-title">Top Categories</div>
                                    <div className="heading-description">Browse Through The Top Categories</div>
                                </div>
                                <div className="min-w-fit-content">
                                    <Link scroll={false} href="/ecommerce/customer/shop/" className="btn btn-wave btn-primary">
                                        View All Categories <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                            <Col lg={3} xxl={2}>
                                <div className="link-tag link-tag-primary rounded-pill">
                                    <Link scroll={false} href="/ecommerce/customer/shop/" className="stretched-link"></Link>
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="min-w-fit-content">
                                            <span className="avatar avatar-rounded link-tag-icon"><i className="ti ti-eggs fs-20"></i></span>
                                        </div>
                                        <div className="flex-grow-1 link-tag-body">
                                            <p className="mb-0 text-truncate">Egg, Fish & Meat</p>
                                            <span className="fs-11 fw-normal">93 items</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} xxl={2}>
                                <div className="link-tag link-tag-secondary rounded-pill">
                                    <Link scroll={false} href="/ecommerce/customer/shop/" className="stretched-link"></Link>
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="min-w-fit-content">
                                            <span className="avatar avatar-rounded link-tag-icon"><i className="ti ti-carrot fs-20"></i></span>
                                        </div>
                                        <div className="flex-grow-1 link-tag-body">
                                            <p className="mb-0 text-truncate">Vegetables</p>
                                            <span className="fs-11 fw-normal">93 items</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} xxl={2}>
                                <div className="link-tag link-tag-success rounded-pill">
                                    <Link scroll={false} href="/ecommerce/customer/shop/" className="stretched-link"></Link>
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="min-w-fit-content">
                                            <span className="avatar avatar-rounded link-tag-icon"><i className="ti ti-bottle fs-20"></i></span>
                                        </div>
                                        <div className="flex-grow-1 link-tag-body">
                                            <p className="mb-0 text-truncate">Beverages</p>
                                            <span className="fs-11 fw-normal">93 items</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} xxl={2}>
                                <div className="link-tag link-tag-orange rounded-pill">
                                    <Link scroll={false} href="/ecommerce/customer/shop/" className="stretched-link"></Link>
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="min-w-fit-content">
                                            <span className="avatar avatar-rounded link-tag-icon"><i className="ti ti-home-bolt fs-20"></i></span>
                                        </div>
                                        <div className="flex-grow-1 link-tag-body">
                                            <p className="mb-0 text-truncate">Household</p>
                                            <span className="fs-11 fw-normal">93 items</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} xxl={2}>
                                <div className="link-tag link-tag-info rounded-pill">
                                    <Link scroll={false} href="/ecommerce/customer/shop/" className="stretched-link"></Link>
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="min-w-fit-content">
                                            <span className="avatar avatar-rounded link-tag-icon"><i className="ti ti-baby-carriage fs-20"></i></span>
                                        </div>
                                        <div className="flex-grow-1 link-tag-body">
                                            <p className="mb-0 text-truncate">Baby Care</p>
                                            <span className="fs-11 fw-normal">93 items</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} xxl={2}>
                                <div className="link-tag link-tag-warning rounded-pill">
                                    <Link scroll={false} href="/ecommerce/customer/shop/" className="stretched-link"></Link>
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="min-w-fit-content">
                                            <span className="avatar avatar-rounded link-tag-icon"><i className="ti ti-cookie fs-20"></i></span>
                                        </div>
                                        <div className="flex-grow-1 link-tag-body">
                                            <p className="mb-0 text-truncate">Snacks</p>
                                            <span className="fs-11 fw-normal">93 items</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
                {/* End:: Section-2 */}

                {/* Start:: Section-3 */}
                <section className="section bg-white">
                    <div className="container">
                        <Row>
                            <Col xl={12}>
                                <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2 mb-4">
                                    <div className="heading-section text-start">
                                        <div className="heading-title">Today Deals</div>
                                        <div className="heading-description">Grab the today offers</div>
                                    </div>
                                    <div className="min-w-fit-content">
                                        <Link scroll={false} href="/ecommerce/customer/shop/" className="text-primary fw-semibold fs-14">
                                            <u>More Deals</u><i className="fe fe-arrow-right ms-1"></i>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={12} lg={4}>
                                <Card className="card-style-4 card-style-4-primary">
                                    <Card.Body>
                                        <div className="d-flex align-items-start mb-3">
                                            <div className="flex-grow-1">
                                                <h4 className="fs-20 mb-2">Save</h4>
                                                <h4 className="fw-semibold text-primary">$100</h4>
                                                <p className="mb-0 text-muted">Eplore now and get 30% discount on Household appliances</p>
                                            </div>
                                            <div className="min-w-fit-content">
                                                <Link scroll={false} href="/ecommerce/customer/shop/" className="btn btn-sm btn-primary">Explore <i className="ti ti-arrow-right ms-1"></i></Link>
                                            </div>
                                        </div>
                                        <div className="overflow-hidden rounded-1">
                                            <Link scroll={false} href="/ecommerce/customer/shop/"><img src="../../../assets/images/ecommerce/banner/3.png" alt="img" className="w-100 card-style-4-img" /></Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={12} lg={4}>
                                <Card className="card-style-4 card-style-4-secondary">
                                    <Card.Body>
                                        <div className="d-flex align-items-start mb-3">
                                            <div className="flex-grow-1">
                                                <h4 className="fs-20 mb-2">Save</h4>
                                                <h4 className="fw-semibold text-secondary">$220</h4>
                                                <p className="mb-0 text-muted">Explore now and get 45% discount Vegetable products</p>
                                            </div>
                                            <div className="min-w-fit-content">
                                                <Link scroll={false} href="/ecommerce/customer/shop/" className="btn btn-sm btn-secondary">Explore <i className="ti ti-arrow-right ms-1"></i></Link>
                                            </div>
                                        </div>
                                        <div className="overflow-hidden rounded-1">
                                            <Link scroll={false} href="/ecommerce/customer/shop/"><img src="../../../assets/images/ecommerce/banner/6.png" alt="img" className="w-100 card-style-4-img" /></Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={12} lg={4}>
                                <Card className="card-style-4 card-style-4-success">
                                    <Card.Body>
                                        <div className="d-flex align-items-start mb-3">
                                            <div className="flex-grow-1">
                                                <h4 className="fs-20 mb-2">Save</h4>
                                                <h4 className="fw-semibold text-success">$150</h4>
                                                <p className="mb-0 text-muted">Explore now and get 30% discount on Electrical appliances</p>
                                            </div>
                                            <div className="min-w-fit-content">
                                                <Link scroll={false} href="/ecommerce/customer/shop/" className="btn btn-sm btn-success">Explore <i className="ti ti-arrow-right ms-1"></i></Link>
                                            </div>
                                        </div>
                                        <div className="overflow-hidden rounded-1">
                                            <Link scroll={false} href="/ecommerce/customer/shop/"><img src="../../../assets/images/ecommerce/banner/7.png" alt="img" className="w-100 card-style-4-img" /></Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </section>
                {/* End:: Section-3 */}

                {/* Start:: Section-4 */}
                <section className="section">
                    <div className="container">
                        <Row>
                            <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2 mb-4">
                                <div className="heading-section text-start">
                                    <div className="heading-title">Popular Products</div>
                                    <div className="heading-description">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                                </div>
                                <div className="min-w-fit-content">
                                    <Link scroll={false} href="/ecommerce/customer/productdetails/" className="text-primary fw-semibold fs-14">
                                        <u>More Deals</u><i className="fe fe-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                            <Col lg={3} md={4} sm={6} className="">
                                <Card className="custom-card card-style-2">
                                    <Card.Body className="p-0">
                                        <span className="badge bg-pink-transparent text-pink top-left-badge">25% Off</span>
                                        <div className="card-img-top border-bottom border-block-end-dashed">
                                            <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                            <div className="btns-container-1 align-items-center gap-1">
                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-16"></i></Link>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                </OverlayTrigger>
                                            </div>
                                            <div className="img-box-2 p-2">
                                                <img src="../../../assets/images/ecommerce/png/30.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="d-flex align-items-start justify-content-between">
                                                <div className="flex-grow-1">
                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Top Brand</Link>
                                                    <h6 className="mb-1 fw-semibold fs-16"><a href="/ecommerce/customer/productdetails/">SoundSync Headphones</a></h6>
                                                    <div className="d-flex align-items-baseline fs-11">
                                                        <div className="min-w-fit-content">
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                        </div>
                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                            <span>(142)</span>
                                                            <span>Ratings</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="min-w-fit-content">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/list/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                            <i className="bi bi-heart outline"></i>
                                                            <i className="bi bi-heart-fill filled"></i>
                                                        </Link>
                                                </OverlayTrigger>
                                                
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-baseline mt-4">
                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                            </div>
                                        </div>
                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={3} md={4} sm={6} className="">
                                <Card className="custom-card card-style-2">
                                    <Card.Body className="p-0">
                                        <div className="badge top-right-badge bg-danger text-fixed-white">
                                            <div className="badge-icon"><i className="ti ti-flame fs-14"></i></div>
                                            <div className="badge-text">Hot</div>
                                        </div>
                                        <div className="card-img-top border-bottom border-block-end-dashed">
                                            <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                            <div className="btns-container-1 align-items-center gap-1">
                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-16"></i></Link>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                </OverlayTrigger>
                                            </div>
                                            <div className="img-box-2 p-2">
                                                <img src="../../../assets/images/ecommerce/png/29.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="d-flex align-items-start justify-content-between">
                                            <div className="flex-grow-1">
                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Adibas</Link>
                                                <h6 className="mb-1 fw-semibold fs-16"><a href="/ecommerce/customer/productdetails/">CapturePro Camera</a></h6>
                                                <div className="d-flex align-items-baseline fs-11">
                                                    <div className="min-w-fit-content">
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                    </div>
                                                    <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                        <span>(142)</span>
                                                        <span>Ratings</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="min-w-fit-content">
                                            <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle">
                                                    <i className="bi bi-heart outline"></i>
                                                    <i className="bi bi-heart-fill filled"></i>
                                                </Link>
                                            </OverlayTrigger>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-baseline mt-4">
                                            <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                            <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                        </div>
                                        </div>
                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={3} md={4} sm={6} className="">
                                <Card className="custom-card card-style-2">
                                    <Card.Body className="p-0">
                                        <span className="badge bg-secondary-transparent text-secondary top-left-badge">60% Off</span>
                                        <div className="badge top-right-badge bg-success text-fixed-white">
                                            <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                            <div className="badge-text">Trending</div>
                                        </div>
                                        <div className="card-img-top border-bottom border-block-end-dashed">
                                            <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                            <div className="btns-container-1 align-items-center gap-1">
                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-16"></i></Link>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                </OverlayTrigger>
                                            </div>
                                            <div className="img-box-2 p-2">
                                                <img src="../../../assets/images/ecommerce/png/32.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="d-flex align-items-start justify-content-between">
                                            <div className="flex-grow-1">
                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Vellintn</Link>
                                                <h6 className="mb-1 fw-semibold fs-16"><a href="/ecommerce/customer/productdetails/">RiseTime Alarm</a></h6>
                                                <div className="d-flex align-items-baseline fs-11">
                                                    <div className="min-w-fit-content">
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                    </div>
                                                    <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                        <span>(142)</span>
                                                        <span>Ratings</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="min-w-fit-content">
                                            <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle">
                                                    <i className="bi bi-heart outline"></i>
                                                    <i className="bi bi-heart-fill filled"></i>
                                                </Link>
                                            </OverlayTrigger>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-baseline mt-4">
                                            <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                            <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                        </div>
                                        </div>
                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={3} md={4} sm={6} className="">
                                <Card className="custom-card card-style-2">
                                    <Card.Body className="p-0">
                                        <span className="badge bg-info-transparent text-info top-left-badge">60% Off</span>
                                        <div className="card-img-top border-bottom border-block-end-dashed">
                                            <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                            <div className="btns-container-1 align-items-center gap-1">
                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-16"></i></Link>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                </OverlayTrigger>
                                            </div>
                                            <div className="img-box-2 p-2">
                                                <img src="../../../assets/images/ecommerce/png/31.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="d-flex align-items-start justify-content-between">
                                            <div className="flex-grow-1">
                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Lenscart</Link>
                                                <h6 className="mb-1 fw-semibold fs-16"><a href="/ecommerce/customer/productdetails/">ChicCarry Handbag</a></h6>
                                                <div className="d-flex align-items-baseline fs-11">
                                                    <div className="min-w-fit-content">
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                    </div>
                                                    <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                        <span>(142)</span>
                                                        <span>Ratings</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="min-w-fit-content">
                                            <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                        <i className="bi bi-heart outline"></i>
                                                        <i className="bi bi-heart-fill filled"></i>
                                                    </Link>
                                            </OverlayTrigger>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-baseline mt-4">
                                            <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                            <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                        </div>
                                        </div>
                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={3} md={4} sm={6} className="">
                                <Card className="custom-card card-style-2">
                                    <Card.Body className="p-0">
                                        <span className="badge bg-secondary-transparent text-secondary top-left-badge">60% Off</span>
                                        <div className="badge top-right-badge bg-success text-fixed-white">
                                            <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                            <div className="badge-text">Trending</div>
                                        </div>
                                        <div className="card-img-top border-bottom border-block-end-dashed">
                                            <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                            <div className="btns-container-1 align-items-center gap-1">
                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-16"></i></Link>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                </OverlayTrigger>
                                            </div>
                                            <div className="img-box-2 p-2">
                                                <img src="../../../assets/images/ecommerce/png/33.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="d-flex align-items-start justify-content-between">
                                            <div className="flex-grow-1">
                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Vellintn</Link>
                                                <h6 className="mb-1 fw-semibold fs-16"><a href="/ecommerce/customer/productdetails/">StrideStep Shoes</a></h6>
                                                <div className="d-flex align-items-baseline fs-11">
                                                    <div className="min-w-fit-content">
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                    </div>
                                                    <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                        <span>(142)</span>
                                                        <span>Ratings</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="min-w-fit-content">
                                            <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                    <i className="bi bi-heart outline"></i>
                                                    <i className="bi bi-heart-fill filled"></i>
                                                </Link>
                                            </OverlayTrigger>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-baseline mt-4">
                                            <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                            <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                        </div>
                                        </div>
                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={3} md={4} sm={6} className="">
                                <Card className="custom-card card-style-2">
                                    <Card.Body className="p-0">
                                        <span className="badge bg-info-transparent text-info top-left-badge">60% Off</span>
                                        <div className="card-img-top border-bottom border-block-end-dashed">
                                            <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                            <div className="btns-container-1 align-items-center gap-1">
                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-16"></i></Link>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                </OverlayTrigger>
                                            </div>
                                            <div className="img-box-2 p-2">
                                                <img src="../../../assets/images/ecommerce/png/6.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="d-flex align-items-start justify-content-between">
                                            <div className="flex-grow-1">
                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Lenscart</Link>
                                                <h6 className="mb-1 fw-semibold fs-16"><a href="/ecommerce/customer/productdetails/">ComfortCozy Sofa</a></h6>
                                                <div className="d-flex align-items-baseline fs-11">
                                                    <div className="min-w-fit-content">
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                    </div>
                                                    <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                        <span>(142)</span>
                                                        <span>Ratings</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="min-w-fit-content">
                                            <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                        <i className="bi bi-heart outline"></i>
                                                        <i className="bi bi-heart-fill filled"></i>
                                                    </Link>
                                            </OverlayTrigger>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-baseline mt-4">
                                            <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                            <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                        </div>
                                        </div>
                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={3} md={4} sm={6} className="">
                                <Card className="custom-card card-style-2">
                                    <Card.Body className="p-0">
                                        <div className="badge top-right-badge bg-orange text-fixed-white">
                                            <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                            <div className="badge-text">Trending</div>
                                        </div>
                                        <div className="card-img-top border-bottom border-block-end-dashed">
                                            <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                            <div className="btns-container-1 align-items-center gap-1">
                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-16"></i></Link>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                </OverlayTrigger>
                                            </div>
                                            <div className="img-box-2 p-2">
                                                <img src="../../../assets/images/ecommerce/png/20.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="d-flex align-items-start justify-content-between">
                                            <div className="flex-grow-1">
                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Adibas</Link>
                                                <h6 className="mb-1 fw-semibold fs-16"><a href="/ecommerce/customer/productdetails/">FlexFit Sneakers</a></h6>
                                                <div className="d-flex align-items-baseline fs-11">
                                                    <div className="min-w-fit-content">
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                    </div>
                                                    <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                        <span>(142)</span>
                                                        <span>Ratings</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="min-w-fit-content">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                        <i className="bi bi-heart outline"></i>
                                                        <i className="bi bi-heart-fill filled"></i>
                                                    </Link>
                                                </OverlayTrigger>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-baseline mt-4">
                                            <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                            <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                        </div>
                                        </div>
                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={3} md={4} sm={6} className="">
                                <Card className="custom-card card-style-2">
                                    <Card.Body className="p-0">
                                        <span className="badge bg-pink-transparent text-pink top-left-badge">25% Off</span>
                                        <div className="card-img-top border-bottom border-block-end-dashed">
                                            <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                            <div className="btns-container-1 align-items-center gap-1">
                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-16"></i></Link>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                </OverlayTrigger>
                                            </div>
                                            <div className="img-box-2 p-2">
                                                <img src="../../../assets/images/ecommerce/png/13.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="d-flex align-items-start justify-content-between">
                                            <div className="flex-grow-1">
                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Top Brand</Link>
                                                <h6 className="mb-1 fw-semibold fs-16"><a href="/ecommerce/customer/productdetails/">ClassicTick Watch</a></h6>
                                                <div className="d-flex align-items-baseline fs-11">
                                                    <div className="min-w-fit-content">
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                    </div>
                                                    <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                        <span>(142)</span>
                                                        <span>Ratings</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="min-w-fit-content">
                                            <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                        <i className="bi bi-heart outline"></i>
                                                        <i className="bi bi-heart-fill filled"></i>
                                                    </Link>
                                            </OverlayTrigger>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-baseline mt-4">
                                            <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                            <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                        </div>
                                        </div>
                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <div className="text-end">
                                    <Link scroll={false} href="#!" className="btn btn-primary btn-icon btn-lg rounded-circle" data-bs-toggle="tooltip" title="View All"><i className="ti ti-arrow-right fs-20"></i></Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
                {/* End:: Section-4 */}

                {/* Start:: Section-5 */}
                <section className="section bg-banner-2 text-fixed-white">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 text-center">
                                <div className="mb-4">
                                    <h2 className="fw-medium mb-2 text-fixed-white">&#128073; Get 20% Off Discount Coupon</h2>
                                    <h6 className="text-fixed-white">By Subscribe our Newsletter</h6>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center">
                                <div className="custom-form-group">
                                    <input type="text" className="form-control rounded-pill shadow-sm" placeholder="Enter Your Email.." aria-label="Recipient's username"/>
                                    <Button variant="" className="btn btn-danger border-0 custom-form-btn rounded-pill" type="button">Subscribe</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End:: Section-5 */}

                {/* Start:: Section-5 */}
                <section className="section">
                    <div className="container">
                        <Row>
                            <Col xl={12}>
                                <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2 mb-4">
                                    <div className="heading-section text-start">
                                        <div className="heading-title">Limited Time Deals</div>
                                        <div className="heading-description">View the popular products</div>
                                    </div>
                                    <div className="min-w-fit-content">
                                        <Link scroll={false} href="#!" className="text-primary fw-semibold fs-14">
                                            <u>More Deals</u><i className="fe fe-arrow-right ms-1"></i>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={4} lg={6} md={12} className="">
                                <div className="card custom-card card-style-1 custom-card">
                                    <Card.Body className="p-3">
                                        <div className="card-content">
                                            <Row>
                                                <Col md={4}>
                                                    <div className="img-box-1 bg-light rounded">
                                                        <Link scroll={false} href="/ecommerce/customer/productdetails/">
                                                            <img src="../../../assets/images/ecommerce/png/30.png" alt="img" className="scale-img img-fluid w-100"/>
                                                        </Link>
                                                    </div>
                                                </Col>
                                                <Col md={8}>
                                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                                        <div className="flex-grow-1">
                                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Accusam</Link>
                                                            <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">SoundSync Headphones</a></h6>
                                                            <div className="d-flex align-items-baseline fs-11">
                                                                <div className="min-w-fit-content">
                                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                </div>
                                                                <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                    <span>(45)</span>
                                                                    <span>Ratings</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="min-w-fit-content">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                            <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                                <i className="bi bi-heart outline"></i>
                                                                <i className="bi bi-heart-fill filled"></i>
                                                            </Link>
                                                        </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="flex-grow-1 d-flex align-items-baseline">
                                                            <h5 className="fw-semibold text-primary mb-0">$99</h5>
                                                            <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                        </div>
                                                        <div className="min-w-fit-content">
                                                            <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-primary border-0"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="card-custom-bottom p-3">
                                            <div className="d-flex align-items-center gap-2 text-center flex-wrap">
                                                <div className="counter-box">
                                                    <p className="mb-0 fs-15 text-primary">01</p>
                                                    <span className="text-muted fs-13">Days</span>
                                                </div>
                                                <div className="counter-box">
                                                    <p className="mb-0 fs-15 text-primary">18</p>
                                                    <span className="text-muted fs-13">Hours</span>
                                                </div>
                                                <div className="counter-box">
                                                    <p className="mb-0 fs-15 text-primary">45</p>
                                                    <span className="text-muted fs-13">Min</span>
                                                </div>
                                                <div className="counter-box">
                                                    <p className="mb-0 fs-15 text-primary">16</p>
                                                    <span className="text-muted fs-13">Sec</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </div>
                            </Col>
                            <Col xl={4} lg={6} md={12} className="">
                                <div className="card custom-card card-style-1 custom-card">
                                    <Card.Body className="p-3">
                                        <div className="card-content">
                                            <Row>
                                                <Col md={4}>
                                                    <div className="img-box-1 bg-light rounded">
                                                        <Link scroll={false} href="/ecommerce/customer/productdetails/">
                                                            <img src="../../../assets/images/ecommerce/png/32.png" alt="img" className="scale-img img-fluid w-100"/>
                                                        </Link>
                                                    </div>
                                                </Col>
                                                <Col md={8}>
                                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                                        <div className="flex-grow-1">
                                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Erat</Link>
                                                            <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">RiseTime Alarm</a></h6>
                                                            <div className="d-flex align-items-baseline fs-11">
                                                                <div className="min-w-fit-content">
                                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                </div>
                                                                <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                    <span>(57)</span>
                                                                    <span>Ratings</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="min-w-fit-content">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                            <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                                <i className="bi bi-heart outline"></i>
                                                                <i className="bi bi-heart-fill filled"></i>
                                                            </Link>
                                                        </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="flex-grow-1 d-flex align-items-baseline">
                                                            <h5 className="fw-semibold text-primary mb-0">$150</h5>
                                                            <span className="fs-13 ms-2 text-muted text-decoration-line-through">$499</span>
                                                        </div>
                                                        <div className="min-w-fit-content">
                                                            <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-primary border-0"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="card-custom-bottom p-3">
                                            <div className="d-flex align-items-center gap-2 text-center flex-wrap">
                                                <div className="counter-box">
                                                    <p className="mb-0 fs-15 text-primary">01</p>
                                                    <span className="text-muted fs-13">Days</span>
                                                </div>
                                                <div className="counter-box">
                                                    <p className="mb-0 fs-15 text-primary">18</p>
                                                    <span className="text-muted fs-13">Hours</span>
                                                </div>
                                                <div className="counter-box">
                                                    <p className="mb-0 fs-15 text-primary">45</p>
                                                    <span className="text-muted fs-13">Min</span>
                                                </div>
                                                <div className="counter-box">
                                                    <p className="mb-0 fs-15 text-primary">16</p>
                                                    <span className="text-muted fs-13">Sec</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </div>
                            </Col>
                            <Col xl={4} lg={6} md={12} className="">
                                <div className="card custom-card card-style-1 custom-card">
                                    <Card.Body className="p-3">
                                        <div className="card-content">
                                            <Row>
                                                <Col md={4}>
                                                    <div className="img-box-1 bg-light rounded">
                                                        <Link scroll={false} href="/ecommerce/customer/productdetails/">
                                                            <img src="../../../assets/images/ecommerce/png/33.png" alt="img" className="scale-img img-fluid w-100"/>
                                                        </Link>
                                                    </div>
                                                </Col>
                                                <Col md={8}>
                                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                                        <div className="flex-grow-1">
                                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Dolore</Link>
                                                            <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">StrideStep Shoes</a></h6>
                                                            <div className="d-flex align-items-baseline fs-11">
                                                                <div className="min-w-fit-content">
                                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                </div>
                                                                <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                    <span>(773)</span>
                                                                    <span>Ratings</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="min-w-fit-content">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                            <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                                <i className="bi bi-heart outline"></i>
                                                                <i className="bi bi-heart-fill filled"></i>
                                                            </Link>
                                                        </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="flex-grow-1 d-flex align-items-baseline">
                                                            <h5 className="fw-semibold text-primary mb-0">$50</h5>
                                                            <span className="fs-13 ms-2 text-muted text-decoration-line-through">$235</span>
                                                        </div>
                                                        <div className="min-w-fit-content">
                                                            <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-primary border-0"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="card-custom-bottom p-3">
                                            <div className="d-flex align-items-center gap-2 text-center flex-wrap">
                                                <div className="counter-box">
                                                    <p className="mb-0 fs-15 text-primary">01</p>
                                                    <span className="text-muted fs-13">Days</span>
                                                </div>
                                                <div className="counter-box">
                                                    <p className="mb-0 fs-15 text-primary">18</p>
                                                    <span className="text-muted fs-13">Hours</span>
                                                </div>
                                                <div className="counter-box">
                                                    <p className="mb-0 fs-15 text-primary">45</p>
                                                    <span className="text-muted fs-13">Min</span>
                                                </div>
                                                <div className="counter-box">
                                                    <p className="mb-0 fs-15 text-primary">16</p>
                                                    <span className="text-muted fs-13">Sec</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
                {/* End:: Section-5 */}

                {/* Start:: Section-6 */}
                <section className="section bg-white">
                    <div className="container">
                        <Row>
                            <Col xl={12}>
                                <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2 mb-4">
                                    <div className="heading-section text-start">
                                        <div className="heading-title">Special Products</div>
                                        <div className="heading-description">View the Special products</div>
                                    </div>
                                    <div className="min-w-fit-content">
                                        <Link scroll={false} href="#!" className="text-primary fw-semibold fs-14">
                                            <u>View All</u><i className="fe fe-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col xxl={3} xl={3} lg={6} md={6} sm={6}  className="col-12">
                                <Card className="custom-card card-style-2">
                                    <Card.Body className="p-0">
                                        <span className="badge bg-pink-transparent text-pink top-left-badge">25% Off</span>
                                        <div className="badge top-right-badge bg-danger text-fixed-white">
                                            <div className="badge-icon"><i className="ti ti-flame fs-14"></i></div>
                                            <div className="badge-text">Hot</div>
                                        </div>
                                        <div className="card-img-top border-bottomo border-block-end-dashed">
                                            <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                            <div className="btns-container-1 align-items-center gap-1">
                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-16"></i></Link>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                </OverlayTrigger>
                                            </div>
                                            <div className="img-box-2 p-2">
                                                <img src="../../../assets/images/ecommerce/png/30.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="d-flex align-items-start justify-content-between">
                                                <div className="flex-grow-1">
                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Top Brand</Link>
                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">SoundSync Headphones</a></h6>
                                                    <div className="d-flex align-items-baseline fs-11">
                                                        <div className="min-w-fit-content">
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                        </div>
                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                            <span>(351)</span>
                                                            <span>Ratings</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="min-w-fit-content">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                        <i className="bi bi-heart outline"></i>
                                                        <i className="bi bi-heart-fill filled"></i>
                                                    </Link>
                                                </OverlayTrigger>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <p className="mb-1">
                                                    <span className="fs-13">73/350</span>
                                                    <span className="text-muted fs-12 me-2 ms-1 d-inline-flex">Items Sold</span>
                                                </p>
                                                <ProgressBar className=" progress progress custom-progress-1 progress-xs" variant="primary" now={35}  />
                                            </div>
                                            <div className="d-flex align-items-baseline mt-4">
                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                            </div>
                                        </div>
                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={3} xl={3} lg={6} md={6} sm={6}  className="col-12">
                                <Card className="custom-card card-style-2">
                                    <Card.Body className="p-0">
                                        <span className="badge bg-secondary-transparent text-secondary top-left-badge">40% Off</span>
                                        <div className="card-img-top border-bottom border-block-end-dashed">
                                            <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                            <div className="btns-container-1 align-items-center gap-1">
                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-16"></i></Link>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                </OverlayTrigger>
                                            </div>
                                            <div className="img-box-2 p-2">
                                                <img src="../../../assets/images/ecommerce/png/31.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="d-flex align-items-start justify-content-between">
                                                <div className="flex-grow-1">
                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Lorem</Link>
                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">ChicCarry Handbag</a></h6>
                                                    <div className="d-flex align-items-baseline fs-11">
                                                        <div className="min-w-fit-content">
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                        </div>
                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                            <span>(745)</span>
                                                            <span>Ratings</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="min-w-fit-content">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                        <i className="bi bi-heart outline"></i>
                                                        <i className="bi bi-heart-fill filled"></i>
                                                    </Link>
                                                </OverlayTrigger>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <p className="mb-1">
                                                    <span className="fs-13">353/500</span>
                                                    <span className="text-muted fs-12 ms-1 d-inline-flex">Items Sold</span>
                                                </p>
                                                <ProgressBar className=" progress progress custom-progress-1 progress-xs" variant="primary" now={75}  />
                                            </div>
                                            <div className="d-flex align-items-baseline mt-4">
                                                <h5 className="fw-semibold text-primary mb-0">$39</h5>
                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$199</span>
                                            </div>
                                        </div>
                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={3} xl={3} lg={6} md={6} sm={6}  className="col-12">
                                <Card className="custom-card card-style-2">
                                    <Card.Body className="p-0">
                                        <span className="badge bg-pink-transparent text-pink top-left-badge">25% Off</span>
                                        <div className="badge top-right-badge bg-danger text-fixed-white">
                                            <div className="badge-icon"><i className="ti ti-flame fs-14"></i></div>
                                            <div className="badge-text">Hot</div>
                                        </div>
                                        <div className="card-img-top border-bottom border-block-end-dashed">
                                            <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                            <div className="btns-container-1 align-items-center gap-1">
                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-16"></i></Link>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                </OverlayTrigger>
                                            </div>
                                            <div className="img-box-2 p-2">
                                                <img src="../../../assets/images/ecommerce/png/33.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="d-flex align-items-start justify-content-between">
                                                <div className="flex-grow-1">
                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Diam</Link>
                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">StrideStep Shoes</a></h6>
                                                    <div className="d-flex align-items-baseline fs-11">
                                                        <div className="min-w-fit-content">
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                        </div>
                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                            <span>(154)</span>
                                                            <span>Ratings</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="min-w-fit-content">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                        <i className="bi bi-heart outline"></i>
                                                        <i className="bi bi-heart-fill filled"></i>
                                                    </Link>
                                                </OverlayTrigger>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <p className="mb-1">
                                                    <span className="fs-13">140/360</span>
                                                    <span className="text-muted fs-12 ms-1 d-inline-flex">Items Sold</span>
                                                </p>
                                                <ProgressBar className=" progress progress custom-progress-1 progress-xs" variant="primary" now={55}  />
                                            </div>
                                            <div className="d-flex align-items-baseline mt-4">
                                                <h5 className="fw-semibold text-primary mb-0">$47</h5>
                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$125</span>
                                            </div>
                                        </div>
                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={3} xl={3} lg={6} md={6} sm={6}  className="col-12">
                                <Card className="custom-card card-style-2">
                                    <Card.Body className="p-0">
                                        <div className="badge top-right-badge bg-secondary text-fixed-white">
                                            <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                            <div className="badge-text">Trending</div>
                                        </div>
                                        <div className="card-img-top border-bottom border-block-end-dashed">
                                            <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                            <div className="btns-container-1 align-items-center gap-1">
                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-16"></i></Link>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                </OverlayTrigger>
                                            </div>
                                            <div className="img-box-2">
                                                <img src="../../../assets/images/ecommerce/png/29.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="d-flex align-items-start justify-content-between">
                                                <div className="flex-grow-1">
                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Clita</Link>
                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">CapturePro Camera</a></h6>
                                                    <div className="d-flex align-items-baseline fs-11">
                                                        <div className="min-w-fit-content">
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                        </div>
                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                            <span>(680)</span>
                                                            <span>Ratings</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="min-w-fit-content">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                        <i className="bi bi-heart outline"></i>
                                                        <i className="bi bi-heart-fill filled"></i>
                                                    </Link>
                                                </OverlayTrigger>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <p className="mb-1">
                                                    <span className="fs-13">850/1000</span>
                                                    <span className="text-muted fs-12 ms-1 d-inline-flex">Items Sold</span>
                                                </p>
                                                <ProgressBar className=" progress progress custom-progress-1 progress-xs" variant="primary" now={70}  />
                                            </div>
                                            <div className="d-flex align-items-baseline mt-4">
                                                <h5 className="fw-semibold text-primary mb-0">$29</h5>
                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$99</span>
                                            </div>
                                        </div>
                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </section>
                {/* End:: Section-6 */}

                {/* Start:: Section-7 */}
                <section className="bg-banner-2 text-fixed-white">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-4 col-md-4 text-center mt-4 d-md-block d-none">
                                <img src="../../../assets/images/ecommerce/png/17.png" width="350" alt="" className="img-fluid"/>
                            </div>
                            <div className="col-xl-8 col-md-8 col-sm-12">
                                <div className="my-4">
                                    <h2 className="fw-semibold mb-3 text-fixed-white">Start Your Online Business Here <Link scroll={false} href="/authentication/signup/signup-basic/" className="text-fixed-white text-decoration-line"> <u>Signup</u> </Link></h2>
                                    <p className="mb-4 text-fixed-white">Est amet sit vero sanctus labore no sed nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore.. </p>
                                    <Link scroll={false} href="/authentication/signup/signup-basic/" className="btn btn-light btn-lg">Signup Now</Link>
                                </div>
                            </div> 
                        </div>
                    </div>
                </section>
                {/* End:: Section-7 */}

                {/* Start:: Section-8 */}
                <section className="section">
                    <div className="container">
                        <Row>
                            <Col xl={12}>
                                <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2 mb-4">
                                    <div className="heading-section text-start">
                                        <div className="heading-title">Newest Arrivals</div>
                                        <div className="heading-description">View the Newest products</div>
                                    </div>
                                    <div className="min-w-fit-content">
                                        <Link scroll={false} href="#!" className="text-primary fw-semibold fs-14">
                                            <u>View All</u><i className="fe fe-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <Card className="custom-card card-style-1">
                                    <Card.Body className="p-3">
                                        <Row>
                                            <Col md={4}>
                                                <div className="img-box-1 bg-light rounded">
                                                    <Link scroll={false} href="#!">
                                                        <img src="../../../assets/images/ecommerce/png/29.png" alt="img" className="scale-img img-fluid w-100"/>
                                                    </Link>
                                                </div>
                                            </Col>
                                            <Col md={8}>
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <div className="flex-grow-1">
                                                        <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Aliquyam</Link>
                                                        <h6 className="fw-semibold mb-1"><a href="#!">CapturePro Camera</a></h6>
                                                        <div className="d-flex align-items-baseline fs-11">
                                                            <div className="min-w-fit-content">
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                            </div>
                                                            <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                <span>(4)</span>
                                                                <span>Ratings</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="min-w-fit-content">
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                        <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                            <i className="bi bi-heart outline"></i>
                                                            <i className="bi bi-heart-fill filled"></i>
                                                        </Link>
                                                    </OverlayTrigger>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                    <div className="min-w-fit-content">
                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-primary border-0"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={4}>
                                <Card className="custom-card card-style-1">
                                    <Card.Body className="p-3">
                                        <Row>
                                            <Col md={4}>
                                                <div className="img-box-1 bg-light rounded">
                                                    <Link scroll={false} href="#!">
                                                        <img src="../../../assets/images/ecommerce/png/31.png" alt="img" className="scale-img img-fluid w-100"/>
                                                    </Link>
                                                </div>
                                            </Col>
                                            <Col md={8}>
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <div className="flex-grow-1">
                                                        <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Takimata</Link>
                                                        <h6 className="fw-semibold mb-1"><a href="#!">Western Ladies Bag</a></h6>
                                                        <div className="d-flex align-items-baseline fs-11">
                                                            <div className="min-w-fit-content">
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                            </div>
                                                            <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                <span>(161)</span>
                                                                <span>Ratings</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="min-w-fit-content">
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                        <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                            <i className="bi bi-heart outline"></i>
                                                            <i className="bi bi-heart-fill filled"></i>
                                                        </Link>
                                                    </OverlayTrigger>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h5 className="fw-semibold text-primary mb-0">$59</h5>
                                                    <div className="min-w-fit-content">
                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-primary border-0"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={4}>
                                <Card className="custom-card card-style-1">
                                    <Card.Body className="p-3">
                                        <Row>
                                            <Col md={4}>
                                                <div className="img-box-1 bg-light rounded">
                                                    <Link scroll={false} href="#!">
                                                        <img src="../../../assets/images/ecommerce/png/30.png" alt="img" className="scale-img img-fluid w-100"/>
                                                    </Link>
                                                </div>
                                            </Col>
                                            <Col md={8}>
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <div className="flex-grow-1">
                                                        <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Accusam</Link>
                                                        <h6 className="fw-semibold mb-1"><a href="#!">SoundSync Headphones</a></h6>
                                                        <div className="d-flex align-items-baseline fs-11">
                                                            <div className="min-w-fit-content">
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                            </div>
                                                            <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                <span>(45)</span>
                                                                <span>Ratings</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="min-w-fit-content">
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                        <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                            <i className="bi bi-heart outline"></i>
                                                            <i className="bi bi-heart-fill filled"></i>
                                                        </Link>
                                                    </OverlayTrigger>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h5 className="fw-semibold text-primary mb-0">$99</h5>
                                                    <div className="min-w-fit-content">
                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-primary border-0"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={4}>
                                <Card className="custom-card card-style-1">
                                    <Card.Body className="p-3">
                                        <Row>
                                            <Col md={4}>
                                                <div className="img-box-1 bg-light rounded">
                                                    <Link scroll={false} href="#!">
                                                        <img src="../../../assets/images/ecommerce/png/32.png" alt="img" className="scale-img img-fluid w-100"/>
                                                    </Link>
                                                </div>
                                            </Col>
                                            <Col md={8}>
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <div className="flex-grow-1">
                                                        <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Erat</Link>
                                                        <h6 className="fw-semibold mb-1"><a href="#!">RiseTime Alarm</a></h6>
                                                        <div className="d-flex align-items-baseline fs-11">
                                                            <div className="min-w-fit-content">
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                            </div>
                                                            <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                <span>(57)</span>
                                                                <span>Ratings</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="min-w-fit-content">
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                            <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                                <i className="bi bi-heart outline"></i>
                                                                <i className="bi bi-heart-fill filled"></i>
                                                            </Link>
                                                        </OverlayTrigger>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h5 className="fw-semibold text-primary mb-0">$35</h5>
                                                    <div className="min-w-fit-content">
                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-primary border-0"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={4}>
                                <Card className="custom-card card-style-1">
                                    <Card.Body className="p-3">
                                        <Row>
                                            <Col md={4}>
                                                <div className="img-box-1 bg-light rounded">
                                                    <Link scroll={false} href="#!">
                                                        <img src="../../../assets/images/ecommerce/png/33.png" alt="img" className="scale-img img-fluid w-100"/>
                                                    </Link>
                                                </div>
                                            </Col>
                                            <Col md={8}>
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <div className="flex-grow-1">
                                                        <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Dolore</Link>
                                                        <h6 className="fw-semibold mb-1"><a href="#!">Men's Running Shoes</a></h6>
                                                        <div className="d-flex align-items-baseline fs-11">
                                                            <div className="min-w-fit-content">
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                            </div>
                                                            <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                <span>(773)</span>
                                                                <span>Ratings</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="min-w-fit-content">
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                        <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                            <i className="bi bi-heart outline"></i>
                                                            <i className="bi bi-heart-fill filled"></i>
                                                        </Link>
                                                    </OverlayTrigger>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h5 className="fw-semibold text-primary mb-0">$459</h5>
                                                    <div className="min-w-fit-content">
                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-primary border-0"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={4}>
                                <Card className="custom-card card-style-1">
                                    <Card.Body className="p-3">
                                        <Row>
                                            <Col md={4}>
                                                <div className="img-box-1 bg-light rounded">
                                                    <Link scroll={false} href="#!">
                                                        <img src="../../../assets/images/ecommerce/png/6.png" alt="img" className="scale-img img-fluid w-100"/>
                                                    </Link>
                                                </div>
                                            </Col>
                                            <Col md={8}>
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <div className="flex-grow-1">
                                                        <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Nonumy</Link>
                                                        <h6 className="fw-semibold mb-1"><a href="#!">ComfortCozy Sofa</a></h6>
                                                        <div className="d-flex align-items-baseline fs-11">
                                                            <div className="min-w-fit-content">
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                            </div>
                                                            <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                <span>(37)</span>
                                                                <span>Ratings</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="min-w-fit-content">
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                        <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                            <i className="bi bi-heart outline"></i>
                                                            <i className="bi bi-heart-fill filled"></i>
                                                        </Link>
                                                    </OverlayTrigger>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h5 className="fw-semibold text-primary mb-0">$29</h5>
                                                    <div className="min-w-fit-content">
                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-primary border-0"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </section>
                {/* End:: Section-8 */}

                {/* Start:: Section-9 */}
                <section className="py-5 bg-banner">
                    <div className="container">
                        <div className="row justify-content-center">
                            <Col lg={10}>
                                <div className="row text-center gy-3">
                                    <Col md={3}>
                                        <div>
                                            <h3 className="mb-1 fw-semibold text-fixed-white">45K+</h3>
                                            <h6 className="mb-0 text-fixed-white">Customers</h6>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div>
                                            <h3 className="mb-1 fw-semibold text-fixed-white">175K+</h3>
                                            <h6 className="mb-0 text-fixed-white">Suppliers</h6>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div>
                                            <h3 className="mb-1 fw-semibold text-fixed-white">300K+</h3>
                                            <h6 className="mb-0 text-fixed-white">Categories</h6>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div>
                                            <h3 className="mb-1 fw-semibold text-fixed-white">450M+</h3>
                                            <h6 className="mb-0 text-fixed-white">Delivery Locations</h6>
                                        </div>
                                    </Col>
                                </div>
                            </Col>
                        </div>
                    </div>
                </section>
                {/* End:: Section-9 */}

                {/* Start:: Section-10 */}
                <section className="section">
                    <div className="container">
                        <Row>
                            <Tab.Container defaultActiveKey="first">
                                <Col xl={12}>
                                    <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2 mb-4">
                                        <div className="heading-section text-start">
                                            <div className="heading-title">All Products</div>
                                            <div className="heading-description">View the Newest products</div>
                                        </div>
                                        <div className="min-w-fit-content">
                                            {/* Nav tabs */}
                                            <Nav className="nav-tabs tab-style-8 scaleX custom-nav-tabs" id="myTab" role="tablist">
                                                <Nav.Item  role="presentation">
                                                    <Nav.Link eventKey="first" href="#all-tab" className="nav-link " data-bs-toggle="tab">All</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item  role="presentation">
                                                    <Nav.Link eventKey="second" href="#topselling-tab" className="nav-link" data-bs-toggle="tab">Top Selling</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item  role="presentation">
                                                    <Nav.Link eventKey="third" href="#trending-tab" className="nav-link" data-bs-toggle="tab">Trending</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item  role="presentation">
                                                    <Nav.Link eventKey="fourth" href="#recentlyadded-tab" className="nav-link" data-bs-toggle="tab">Recently Added</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    {/* Tab panes */}
                                    <Tab.Content className="all-products">
                                        <Tab.Pane eventKey="first" className="border-0 p-0" id="all-tab">
                                            <Row>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <span className="badge bg-pink-transparent text-pink top-left-badge">25% Off</span>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/png/29.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                    <div className="flex-grow-1">
                                                                        <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Top Brand</Link>
                                                                        <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">SoundSync Headphones</a></h6>
                                                                        <div className="d-flex align-items-baseline fs-11">
                                                                            <div className="min-w-fit-content">
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                            </div>
                                                                            <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                                <span>(142)</span>
                                                                                <span>Ratings</span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="min-w-fit-content">
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                                            <i className="bi bi-heart outline"></i>
                                                                            <i className="bi bi-heart-fill filled"></i>
                                                                        </Link>
                                                                    </OverlayTrigger>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-baseline mt-4">
                                                                    <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                    <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                                </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <div className="badge top-right-badge bg-danger text-fixed-white">
                                                                <div className="badge-icon"><i className="ti ti-flame fs-14"></i></div>
                                                                <div className="badge-text">Hot</div>
                                                            </div>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/png/30.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Adibas</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">Adibas Men's Shoes</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                                        <i className="bi bi-heart outline"></i>
                                                                        <i className="bi bi-heart-fill filled"></i>
                                                                    </Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <span className="badge bg-info-transparent text-info top-left-badge">60% Off</span>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/png/31.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Lenscart</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">CapturePro Camera</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                                        <i className="bi bi-heart outline"></i>
                                                                        <i className="bi bi-heart-fill filled"></i>
                                                                    </Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <span className="badge bg-secondary-transparent text-secondary top-left-badge">60% Off</span>
                                                            <div className="badge top-right-badge bg-success text-fixed-white">
                                                                <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                                <div className="badge-text">Trending</div>
                                                            </div>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/png/32.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Vellintn</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">Western Ladies Bag</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                                        <i className="bi bi-heart outline"></i>
                                                                        <i className="bi bi-heart-fill filled"></i>
                                                                    </Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <span className="badge bg-secondary-transparent text-secondary top-left-badge">60% Off</span>
                                                            <div className="badge top-right-badge bg-success text-fixed-white">
                                                                <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                                <div className="badge-text">Trending</div>
                                                            </div>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/png/33.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Vellintn</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">Western Ladies Bag</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                                        <i className="bi bi-heart outline"></i>
                                                                        <i className="bi bi-heart-fill filled"></i>
                                                                    </Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <span className="badge bg-info-transparent text-info top-left-badge">60% Off</span>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/png/6.png" alt="img" className="scale-img img-fluid w-100 rounded bg-light"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Lenscart</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">CapturePro Camera</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                                        <i className="bi bi-heart outline"></i>
                                                                        <i className="bi bi-heart-fill filled"></i>
                                                                    </Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <div className="badge top-right-badge bg-orange text-fixed-white">
                                                                <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                                <div className="badge-text">Trending</div>
                                                            </div>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/png/20.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Adibas</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">Adibas Men's Shoes</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                                        <i className="bi bi-heart outline"></i>
                                                                        <i className="bi bi-heart-fill filled"></i>
                                                                    </Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <span className="badge bg-pink-transparent text-pink top-left-badge">25% Off</span>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/png/30.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Top Brand</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">SoundSync Headphones</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                                        <i className="bi bi-heart outline"></i>
                                                                        <i className="bi bi-heart-fill filled"></i>
                                                                    </Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col md={12}>
                                                    <div className="text-end">
                                                        <Link scroll={false} href="#!" className="btn btn-rounded btn-primary" data-bs-toggle="tooltip" title="View All"><i className="ti ti-arrow-right fs-20"></i></Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second" className="border-0 p-0" id="topselling-tab">
                                            <Row>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <div className="badge top-right-badge bg-danger text-fixed-white">
                                                                <div className="badge-icon"><i className="ti ti-flame fs-14"></i></div>
                                                                <div className="badge-text">Hot</div>
                                                            </div>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/jpg/1.jpg" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Adibas</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">Aloe vera</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                                        <i className="bi bi-heart outline"></i>
                                                                        <i className="bi bi-heart-fill filled"></i>
                                                                    </Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <span className="badge bg-secondary-transparent text-secondary top-left-badge">60% Off</span>
                                                            <div className="badge top-right-badge bg-success text-fixed-white">
                                                                <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                                <div className="badge-text">Trending</div>
                                                            </div>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/jpg/2.jpg" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Vellintn</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">SoundSync Headphones</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                                        <i className="bi bi-heart outline"></i>
                                                                        <i className="bi bi-heart-fill filled"></i>
                                                                    </Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <span className="badge bg-pink-transparent text-pink top-left-badge">25% Off</span>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/jpg/3.jpg" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Top Brand</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">CapturePro Camera</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                                        <i className="bi bi-heart outline"></i>
                                                                        <i className="bi bi-heart-fill filled"></i>
                                                                    </Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <span className="badge bg-info-transparent text-info top-left-badge">60% Off</span>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/jpg/4.jpg" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Lenscart</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">kiwi fruit</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                                        <i className="bi bi-heart outline"></i>
                                                                        <i className="bi bi-heart-fill filled"></i>
                                                                    </Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <div className="badge top-right-badge bg-orange text-fixed-white">
                                                                <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                                <div className="badge-text">Trending</div>
                                                            </div>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/jpg/5.jpg" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Adibas</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">Doughnut</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                                        <i className="bi bi-heart outline"></i>
                                                                        <i className="bi bi-heart-fill filled"></i>
                                                                    </Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <span className="badge bg-info-transparent text-info top-left-badge">60% Off</span>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/jpg/6.jpg" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Lenscart</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">Cactus plant</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                                        <i className="bi bi-heart outline"></i>
                                                                        <i className="bi bi-heart-fill filled"></i>
                                                                    </Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <span className="badge bg-secondary-transparent text-secondary top-left-badge">60% Off</span>
                                                            <div className="badge top-right-badge bg-success text-fixed-white">
                                                                <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                                <div className="badge-text">Trending</div>
                                                            </div>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/jpg/2.jpg" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Vellintn</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">SoundSync Headphones</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                                        <i className="bi bi-heart outline"></i>
                                                                        <i className="bi bi-heart-fill filled"></i>
                                                                    </Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <span className="badge bg-pink-transparent text-pink top-left-badge">25% Off</span>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/jpg/5.jpg" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                    <div className="flex-grow-1">
                                                                        <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Top Brand</Link>
                                                                        <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">Doughnut</a></h6>
                                                                        <div className="d-flex align-items-baseline fs-11">
                                                                            <div className="min-w-fit-content">
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                            </div>
                                                                            <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                                <span>(142)</span>
                                                                                <span>Ratings</span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="min-w-fit-content">
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                                            <i className="bi bi-heart outline"></i>
                                                                            <i className="bi bi-heart-fill filled"></i>
                                                                        </Link>
                                                                    </OverlayTrigger>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-baseline mt-4">
                                                                    <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                    <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                                </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col md={12}>
                                                    <div className="text-end">
                                                        <Link scroll={false} href="#!" className="btn btn-rounded btn-primary" data-bs-toggle="tooltip" title="View All"><i className="ti ti-arrow-right fs-20"></i></Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third" className="border-0 p-0" id="trending-tab">
                                            <Row>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <span className="badge bg-secondary-transparent text-secondary top-left-badge">60% Off</span>
                                                            <div className="badge top-right-badge bg-success text-fixed-white">
                                                                <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                                <div className="badge-text">Trending</div>
                                                            </div>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/png/20.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Vellintn</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">Western Ladies Bag</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                                        <i className="bi bi-heart outline"></i>
                                                                        <i className="bi bi-heart-fill filled"></i>
                                                                    </Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <span className="badge bg-pink-transparent text-pink top-left-badge">25% Off</span>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/png/6.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                    <div className="flex-grow-1">
                                                                        <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Top Brand</Link>
                                                                        <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">SoundSync Headphones</a></h6>
                                                                        <div className="d-flex align-items-baseline fs-11">
                                                                            <div className="min-w-fit-content">
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                            </div>
                                                                            <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                                <span>(142)</span>
                                                                                <span>Ratings</span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="min-w-fit-content">
                                                                        <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                                            <i className="bi bi-heart outline"></i>
                                                                            <i className="bi bi-heart-fill filled"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-baseline mt-4">
                                                                    <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                    <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                                </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <div className="badge top-right-badge bg-danger text-fixed-white">
                                                                <div className="badge-icon"><i className="ti ti-flame fs-14"></i></div>
                                                                <div className="badge-text">Hot</div>
                                                            </div>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/png/33.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Adibas</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">Adibas Men's Shoes</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                                        <i className="bi bi-heart outline"></i>
                                                                        <i className="bi bi-heart-fill filled"></i>
                                                                    </Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <span className="badge bg-info-transparent text-info top-left-badge">60% Off</span>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/png/32.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Lenscart</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">CapturePro Camera</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                                        <i className="bi bi-heart outline"></i>
                                                                        <i className="bi bi-heart-fill filled"></i>
                                                                    </Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <span className="badge bg-info-transparent text-info top-left-badge">60% Off</span>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/png/31.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded" />
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Lenscart</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">CapturePro Camera</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                                        <i className="bi bi-heart outline"></i>
                                                                        <i className="bi bi-heart-fill filled"></i>
                                                                    </Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <div className="badge top-right-badge bg-orange text-fixed-white">
                                                                <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                                <div className="badge-text">Trending</div>
                                                            </div>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/png/30.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Adibas</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">Adibas Men's Shoes</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                                        <i className="bi bi-heart outline"></i>
                                                                        <i className="bi bi-heart-fill filled"></i>
                                                                    </Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <span className="badge bg-secondary-transparent text-secondary top-left-badge">60% Off</span>
                                                            <div className="badge top-right-badge bg-success text-fixed-white">
                                                                <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                                <div className="badge-text">Trending</div>
                                                            </div>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/png/29.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Vellintn</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">Western Ladies Bag</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                                        <i className="bi bi-heart outline"></i>
                                                                        <i className="bi bi-heart-fill filled"></i>
                                                                    </Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <span className="badge bg-pink-transparent text-pink top-left-badge">25% Off</span>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/png/15.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Top Brand</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">SoundSync Headphones</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                                        <i className="bi bi-heart outline"></i>
                                                                        <i className="bi bi-heart-fill filled"></i>
                                                                    </Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col md={12}>
                                                    <div className="text-end">
                                                        <Link scroll={false} href="#!" className="btn btn-rounded btn-primary" data-bs-toggle="tooltip" title="View All"><i className="ti ti-arrow-right fs-20"></i></Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourth" className="border-0 p-0" id="recentlyadded-tab">
                                            <Row>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <div className="badge top-right-badge bg-danger text-fixed-white">
                                                                <div className="badge-icon"><i className="ti ti-flame fs-14"></i></div>
                                                                <div className="badge-text">Hot</div>
                                                            </div>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/png/11.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Adibas</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">Adibas Men's Shoes</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                                        <i className="bi bi-heart outline"></i>
                                                                        <i className="bi bi-heart-fill filled"></i>
                                                                    </Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <span className="badge bg-pink-transparent text-pink top-left-badge">25% Off</span>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/png/14.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Top Brand</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">SoundSync Headphones</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                                        <i className="bi bi-heart outline"></i>
                                                                        <i className="bi bi-heart-fill filled"></i>
                                                                    </Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <span className="badge bg-info-transparent text-info top-left-badge">60% Off</span>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/png/13.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Lenscart</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">CapturePro Camera</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                                        <i className="bi bi-heart outline"></i>
                                                                        <i className="bi bi-heart-fill filled"></i>
                                                                    </Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <span className="badge bg-secondary-transparent text-secondary top-left-badge">60% Off</span>
                                                            <div className="badge top-right-badge bg-success text-fixed-white">
                                                                <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                                <div className="badge-text">Trending</div>
                                                            </div>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/png/12.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Vellintn</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">Western Ladies Bag</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                                                <i className="bi bi-heart outline"></i>
                                                                                <i className="bi bi-heart-fill filled"></i>
                                                                        </Link>
                                                                    </OverlayTrigger>
                                                                
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <span className="badge bg-info-transparent text-info top-left-badge">60% Off</span>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/png/30.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Lenscart</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">CapturePro Camera</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                                            <i className="bi bi-heart outline"></i>
                                                                            <i className="bi bi-heart-fill filled"></i>
                                                                    </Link>
                                                                </OverlayTrigger>
                                                                    
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <div className="badge top-right-badge bg-orange text-fixed-white">
                                                                <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                                <div className="badge-text">Trending</div>
                                                            </div>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/png/15.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Adibas</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">Adibas Men's Shoes</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle">
                                                                            <i className="bi bi-heart outline"></i>
                                                                            <i className="bi bi-heart-fill filled"></i>
                                                                        </Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <span className="badge bg-secondary-transparent text-secondary top-left-badge">60% Off</span>
                                                            <div className="badge top-right-badge bg-success text-fixed-white">
                                                                <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                                <div className="badge-text">Trending</div>
                                                            </div>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/png/31.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                <div className="flex-grow-1">
                                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Vellintn</Link>
                                                                    <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">Western Ladies Bag</a></h6>
                                                                    <div className="d-flex align-items-baseline fs-11">
                                                                        <div className="min-w-fit-content">
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                        </div>
                                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                            <span>(142)</span>
                                                                            <span>Ratings</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="min-w-fit-content">
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle">
                                                                            <i className="bi bi-heart outline"></i>
                                                                            <i className="bi bi-heart-fill filled"></i>
                                                                        </Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-baseline mt-4">
                                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={3} md={4} sm={6} className="">
                                                    <Card className="custom-card card-style-2">
                                                        <Card.Body className="p-0">
                                                            <span className="badge bg-pink-transparent text-pink top-left-badge">25% Off</span>
                                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                <div className="btns-container-1 align-items-center gap-1">
                                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-14"></i></Link>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                </div>
                                                                <div className="img-box-2 p-2">
                                                                    <img src="../../../assets/images/ecommerce/png/16.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded" />
                                                                </div>
                                                            </div>
                                                            <div className="p-3">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                    <div className="flex-grow-1">
                                                                        <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Top Brand</Link>
                                                                        <h6 className="mb-1 fw-semibold"><a href="/ecommerce/customer/productdetails/">SoundSync Headphones</a></h6>
                                                                        <div className="d-flex align-items-baseline fs-11">
                                                                            <div className="min-w-fit-content">
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                            </div>
                                                                            <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                                <span>(142)</span>
                                                                                <span>Ratings</span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="min-w-fit-content">
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                        <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active">
                                                                            <i className="bi bi-heart outline"></i>
                                                                            <i className="bi bi-heart-fill filled"></i>
                                                                        </Link>
                                                                    </OverlayTrigger>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-baseline mt-4">
                                                                    <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                    <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                                </div>
                                                            </div>
                                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary-transparent border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col md={12}>
                                                    <div className="text-end">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>View All</Tooltip>}>
                                                            <Link scroll={false} href="#!" className="btn btn-rounded btn-primary"><i className="ti ti-arrow-right fs-20"></i></Link>
                                                        </OverlayTrigger>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Tab.Container>
                        </Row>
                    </div>
                </section>
                {/* End:: Section-10 */}

                {/* Start:: Section-11 */}
                <section className="section-sm">
                    <div className="container">
                        <Row>
                            <Col xl={4}>
                                <Card className="card-style-3 custom-card">
                                    <Card.Body>
                                        <div className="d-flex align-items-start gap-3">
                                            <div className="min-w-fit-content">
                                                <span className="avatar bg-info text-fixed-white"><i className="ti ti-truck-delivery fs-20"></i></span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <p className="mb-0 fw-semibold fs-16 text-info">Free Delivery</p>
                                                <p className="mb-0 fs-13 text-muted">Consetetur eirmod dolor stet justo gubergren ea et lorem sadipscing.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={4}>
                                <Card className="card-style-3 custom-card">
                                    <Card.Body>
                                        <div className="d-flex align-items-start gap-3">
                                            <div className="min-w-fit-content">
                                                <span className="avatar bg-warning text-fixed-white"><i className="ti ti-tags fs-20"></i></span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <p className="mb-0 fw-semibold fs-16 text-warning">Great Deals & Offers</p>
                                                <p className="mb-0 fs-13 text-muted">Consetetur eirmod dolor stet justo gubergren ea et lorem sadipscing.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={4}>
                                <Card className="card-style-3 custom-card">
                                    <Card.Body>
                                        <div className="d-flex align-items-start gap-3">
                                            <div className="min-w-fit-content">
                                                <span className="avatar bg-danger text-fixed-white"><i className="ti ti-arrow-back-up fs-20"></i></span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <p className="mb-0 fw-semibold fs-16 text-danger">Easy Returns</p>
                                                <p className="mb-0 fs-13 text-muted">Consetetur eirmod dolor stet justo gubergren ea et lorem sadipscing.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </section>
                {/* End:: Section-11 */}

                {/* Start:: Section-12 */}
                <section className="section bg-banner px-lg-0 px-4">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <div className="mb-4">
                                <h3 className="fw-semibold mb-2 text-fixed-white">&#128073; Download our free mobile apps today</h3>
                            </div>
                            <h6 className="mb-4 op-9 text-fixed-white">Labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore..</h6>
                            <div className="btn-list">
                                <Link scroll={false} href="#!" className="btn btn-dark app-store">
                                    <img src="../../../assets/images/media/apps/play-store.png" alt="" />
                                    Google Play
                                </Link>
                                <Link scroll={false} href="#!" className="btn btn-dark app-store">
                                    <img src="../../../assets/images/media/apps/apple-store.png" alt="" className="invert-1"/>
                                    App Store
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End:: Section-12 */}

</div>
    </Fragment>
    )
};

export default Landingpage;