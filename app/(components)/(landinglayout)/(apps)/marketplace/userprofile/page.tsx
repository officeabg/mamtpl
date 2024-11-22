"use client"
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, Nav, OverlayTrigger, Pagination, Row, Tab, Tooltip } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, } from "swiper/modules"; 
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Userprofile = () => {
return ( 
    <Fragment>

        {/* Start:: Breadcrumb*/}
        <div className="border-bottom border-top py-3">
            <div className="container">
                {/* Page Header */}
                    <Seo title={"User Public Profile"} />
                    <Pageheader Heading="" Pagetitle={true} Pages={[{title:"Apps", active:true}, {title:"Marketplace", active:true}, {title:"User Public Profile", active:false},]} />
                {/* Page Header Close */}
            </div>
        </div>
        {/* End:: Breadcrumb*/}

        {/* Start:: Landing Banner */}
        <div className="landing-banner">
            <section className="py-5">
                <div className="container main-banner-container">
                    <div className="row gy-2">
                        <Col lg={9} md={8} className="">
                            <div className="d-flex align-items-center flex-wrap gap-3">
                                <div>
                                    <span className="marketplace-company-icon">
                                    <img src="../../assets/images/company-logos/1.png" alt="" />
                                    </span>
                                </div>
                                <div>
                                    <h4 className="fw-bold mb-0 d-flex align-items-center"><a href="#!"> sprukotechnologies</a></h4>
                                    <p className="mb-2">Member Since <span className="fw-semibold">2005</span></p>
                                    <div className="d-flex align-items-center fs-14 mb-2 flex-wrap">
                                        <p className="fs-15 fw-semibold mb-0">Author Ratings : </p>
                                        <div className="min-w-fit-content ms-3">
                                            <span className="text-warning me-1 me-1"><i className="bi bi-star-fill"></i></span>
                                            <span className="text-warning me-1 me-1"><i className="bi bi-star-fill"></i></span>
                                            <span className="text-warning me-1 me-1"><i className="bi bi-star-fill"></i></span>
                                            <span className="text-warning me-1 me-1"><i className="bi bi-star-fill"></i></span>
                                            <span className="text-warning me-1"><i className="bi bi-star-half"></i></span>
                                        </div>
                                        <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                            <span>(142)</span>
                                            <span>Ratings</span>
                                        </p>
                                    </div>
                                    <span className="badge badge-md bg-info-transparent"><i className="bi bi-bar-chart-fill me-2"></i>156 Sales</span>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={4} className="my-md-auto">
                            <div className="btn-list">
                                <Link scroll={false} href="#!" className="btn btn-lg btn-w-lg btn-primary"> View Portfolio</Link>
                                <Link scroll={false} href="#!" className="btn btn-icon btn-lg btn-secondary-light btn-wave">
                                    <i className="ri-user-follow-line"></i>
                                </Link>
                                <Link scroll={false} href="#!" className="btn btn-icon btn-lg btn-success-light btn-wave">
                                    <i className="ri-share-line"></i>
                                </Link>
                            </div>
                        </Col>
                    </div>
                </div>
            </section> 
        </div>
        {/* End:: Landing Banner */}

        {/* Start:: Nav Tabs*/}
        <Tab.Container defaultActiveKey="first">
        <div className="border-bottom">
            <div className="container">
                <Nav className="nav-tabs tab-style-8 scaleX custom-nav-tabs" id="myTab" role="tablist">
                    <Nav.Item role="presentation">
                        <Nav.Link eventKey="first" href="#Profile-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="true" role="tab">Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item role="presentation">
                        <Nav.Link eventKey="second" href="#Portfolio-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item role="presentation">
                        <Nav.Link eventKey="third" href="#Followers-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">Followers</Nav.Link>
                    </Nav.Item>
                    <Nav.Item role="presentation">
                        <Nav.Link eventKey="fourth" href="#Following-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">Following</Nav.Link>
                    </Nav.Item>
                </Nav> 
            </div>
        </div>
        {/* End:: Nav Tabs*/}

        {/* Start:: Section-1 */}
        <section className="section py-4 bg-white">
            <div className="container"> 
                <Tab.Content>
                    <Tab.Pane eventKey="first" className="border-0 p-0 show" id="Profile-tab" role="tabpanel"> 
                        <Row> 
                            <Col lg={8}>                                     
                                <div className="mb-3">
                                    <div className="deals-bundle">
                                        <span className="icon">
                                            <img src="../../assets/images/company-logos/1.png" alt="" className="img-fluid"/>
                                        </span>
                                        <h4 className="fw-semibold mb-4 text-fixed-white">Spruko Technologies PRIVATE LIMITED</h4>  
                                        <div className="row gy-2 text-center justify-content-center">
                                            <Col md={4}>
                                                <div className="bg-white-transparent backdrop-blur p-2 rounded shadow-sm">
                                                    <h5 className="mb-1 fw-semibold text-fixed-white">234+</h5>
                                                    <h6 className="mb-0 text-fixed-white">Products</h6>
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <div className="bg-white-transparent backdrop-blur p-2 rounded shadow-sm">
                                                    <h5 className="mb-1 fw-semibold text-fixed-white">342+</h5>
                                                    <h6 className="mb-0 text-fixed-white">Widgets</h6>
                                                </div>
                                            </Col>
                                        </div>                                      
                                    </div>
                                </div>
                                <Card className="custom-card">
                                    <Card.Body>
                                        <h5 className="fw-semibold mb-3">About the company :</h5>
                                        <p>Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore.A officiis optio temporibus minima facilis...</p>
                                        <p>Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore.A officiis optio temporibus minima facilis...</p>
                                        <h5 className="fw-semibold mb-3">Features</h5>                                            
                                            <ul className="list-group list-unstyled">
                                                <li className="list-group-item">
                                                    <span className="fw-semibold"><i className="bi bi-check-circle text-primary me-2"></i>W3C</span> Validated
                                                </li>
                                                <li className="list-group-item">
                                                    <span className="fw-semibold"><i className="bi bi-check-circle text-primary me-2"></i>24/7 </span> Support
                                                </li>
                                                <li className="list-group-item">
                                                    <span className="fw-semibold"><i className="bi bi-check-circle text-primary me-2"></i>Faster</span> Loading Speed
                                                </li>
                                                <li className="list-group-item">
                                                    <span className="fw-semibold"><i className="bi bi-check-circle text-primary me-2"></i>User Friendly</span> Design
                                                </li>
                                                <li className="list-group-item">
                                                    <span className="fw-semibold"><i className="bi bi-check-circle text-primary me-2"></i>Browsers</span> Compatibility
                                                </li>
                                            </ul>
                                    </Card.Body>
                                </Card>
                                <div className="card custom-card border-0 bg-primary-transparent shadow-none">
                                    <Card.Body>
                                        <div className="d-flex justify-content-between gap-2 flex-wrap align-items-center">
                                            <div>
                                                <h5 className="fw-semibold mb-0">&#128400; Was this profile useful to someone?</h5>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!" className="btn btn-success" role="button">
                                                    <i className="ri-share-line me-2"></i>Share Now
                                                </Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </div> 
                                <div className="row mt-5 g-0">
                                    <h4 className="fw-semibold mb-0">Top Products</h4>
                                    <p className="">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <Swiper className="swiper swiper-related-jobs"  autoplay={{ delay: 2500, disableOnInteraction: false, }} navigation={true} modules={[Navigation, Autoplay]} >
                                            <SwiperSlide>
                                                <Row>
                                                    <Col md={4}>
                                                        <Card className=" custom-card overflow-hidden card-style-2">
                                                            <Link scroll={false} href="/marketplace/details/">
                                                                <div className="featured-img">
                                                                    <img src="../../assets/images/marketplace/templates/1.png" className="" alt="..."/>
                                                                </div>
                                                            </Link>
                                                            <Card.Body className="p-3 position-relative">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                    <div className="flex-grow-1">
                                                                        <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                        <h5 className="mb-1 fw-semibold"><a href="/marketplace/details/">PHP Script</a></h5>
                                                                        <div className="d-flex align-items-center fs-11 flex-wrap gap-2">
                                                                            <div className="min-w-fit-content">
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-half"></i></span>
                                                                            </div>
                                                                            <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                                <span>(142)</span>
                                                                                <span>Ratings</span>
                                                                            </p>
                                                                        </div>
                                                                        <span className="text-danger">( 150 Sales )</span>
                                                                    </div>
                                                                    <div className="min-w-fit-content">
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                                    </OverlayTrigger>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-center mt-3 flex-wrap">
                                                                    <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                                    <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$399</span>
                                                                    <Link scroll={false} href="/marketplace/details/" className="btn btn-sm btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    <Col md={4}>
                                                        <Card className=" custom-card overflow-hidden card-style-2">
                                                            <span className="badge bg-danger tag-badge">20% Off</span>
                                                            <Link scroll={false} href="/marketplace/details/">
                                                                <div className="featured-img">
                                                                    <img src="../../assets/images/marketplace/templates/2.png" className="" alt="..."/>
                                                                </div>
                                                            </Link>
                                                            <Card.Body className="p-3 position-relative">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                    <div className="flex-grow-1">
                                                                        <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                        <h5 className="mb-1 fw-semibold"><a href="/marketplace/details/">HTML Template</a></h5>
                                                                        <div className="d-flex align-items-center fs-11 flex-wrap gap-2">
                                                                            <div className="min-w-fit-content">
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-half"></i></span>
                                                                            </div>
                                                                            <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                                <span>(132)</span>
                                                                                <span>Ratings</span>
                                                                            </p>
                                                                        </div>
                                                                        <span className="text-danger">( 120 Sales )</span>
                                                                    </div>
                                                                    <div className="min-w-fit-content">
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                                    </OverlayTrigger>
                                                                        
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-baseline mt-3 flex-wrap">
                                                                    <h5 className="fw-semibold text-primary mb-0">$170</h5>
                                                                    <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$379</span>
                                                                    <Link scroll={false} href="/marketplace/details/" className="btn btn-sm btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    <Col md={4}>
                                                        <Card className=" custom-card overflow-hidden card-style-2">
                                                            <div className="badge top-right-badge bg-warning text-fixed-white">
                                                                <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                                <div className="badge-text">Trending</div>
                                                            </div>
                                                            <Link scroll={false} href="/marketplace/details/">
                                                                <div className="featured-img">
                                                                    <img src="../../assets/images/marketplace/templates/3.png" className="" alt="..."/>
                                                                </div>
                                                            </Link>
                                                            <Card.Body className="p-3 position-relative">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                    <div className="flex-grow-1">
                                                                        <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                        <h5 className="mb-1 fw-semibold"><a href="/marketplace/details/">React Template</a></h5>
                                                                        <div className="d-flex align-items-center fs-11 flex-wrap gap-2">
                                                                            <div className="min-w-fit-content">
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-half"></i></span>
                                                                            </div>
                                                                            <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                                <span>(232)</span>
                                                                                <span>Ratings</span>
                                                                            </p>
                                                                        </div>
                                                                        <span className="text-danger">( 240 Sales )</span>
                                                                    </div>
                                                                    <div className="min-w-fit-content">
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                                    </OverlayTrigger>
                                                                    
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-baseline mt-3 flex-wrap">
                                                                    <h4 className="fw-semibold text-primary mb-0">$240</h4>
                                                                    <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$499</span>
                                                                    <Link scroll={false} href="/marketplace/details/" className="btn btn-sm btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Row>
                                                    <Col md={4}>
                                                        <Card className=" custom-card overflow-hidden card-style-2">
                                                            <span className="badge bg-danger tag-badge">40% Off</span>
                                                            <Link scroll={false} href="/marketplace/details/">
                                                                <div className="featured-img">
                                                                    <img src="../../assets/images/marketplace/templates/4.png" className="" alt="..."/> 
                                                                </div>
                                                            </Link>
                                                            <Card.Body className="p-3 position-relative">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                    <div className="flex-grow-1">
                                                                        <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                        <h5 className="mb-1 fw-semibold"><a href="/marketplace/details/">Wordpress</a></h5>
                                                                        <div className="d-flex align-items-center fs-11 flex-wrap gap-2">
                                                                            <div className="min-w-fit-content">
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-half"></i></span>
                                                                            </div>
                                                                            <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                                <span>(152)</span>
                                                                                <span>Ratings</span>
                                                                            </p>
                                                                        </div>
                                                                        <span className="text-danger">( 310 Sales )</span>
                                                                    </div>
                                                                    <div className="min-w-fit-content">
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                                    </OverlayTrigger>
                                                                    
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-baseline mt-3 flex-wrap">
                                                                    <h4 className="fw-semibold text-primary mb-0">$320</h4>
                                                                    <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$439</span>
                                                                    <Link scroll={false} href="/marketplace/details/" className="btn btn-sm btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    <Col md={4}>
                                                        <Card className=" custom-card overflow-hidden card-style-2">
                                                            <span className="badge bg-danger tag-badge">20% Off</span>
                                                            <div className="badge top-right-badge bg-warning text-fixed-white">
                                                                <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                                <div className="badge-text">Trending</div>
                                                            </div>
                                                            <Link scroll={false} href="/marketplace/details/">
                                                                <div className="featured-img">
                                                                    <img src="../../assets/images/marketplace/templates/5.png" className="" alt="..."/> 
                                                                </div>
                                                            </Link>
                                                            <Card.Body className="p-3 position-relative">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                    <div className="flex-grow-1">
                                                                        <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                        <h5 className="mb-1 fw-semibold"><a href="/marketplace/details/">Laravel Template</a></h5>
                                                                        <div className="d-flex align-items-center fs-11 flex-wrap gap-2">
                                                                            <div className="min-w-fit-content">
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-half"></i></span>
                                                                            </div>
                                                                            <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                                <span>(142)</span>
                                                                                <span>Ratings</span>
                                                                            </p>
                                                                        </div>
                                                                        <span className="text-danger">( 120 Sales )</span>
                                                                    </div>
                                                                    <div className="min-w-fit-content">
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                                    </OverlayTrigger>
                                                                    
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-baseline mt-3 flex-wrap">
                                                                    <h4 className="fw-semibold text-primary mb-0">$120</h4>
                                                                    <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$399</span>
                                                                    <Link scroll={false} href="/marketplace/details/" className="btn btn-sm btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    <Col md={4}>
                                                        <Card className=" custom-card overflow-hidden card-style-2">
                                                            <Link scroll={false} href="/marketplace/details/">
                                                                <div className="featured-img">
                                                                    <img src="../../assets/images/marketplace/templates/6.png" className="" alt="..."/> 
                                                                </div>
                                                            </Link>
                                                            <Card.Body className="p-3 position-relative">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                    <div className="flex-grow-1">
                                                                        <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                        <h5 className="mb-1 fw-semibold"><a href="/marketplace/details/">Django Template</a></h5>
                                                                        <div className="d-flex align-items-center fs-11 flex-wrap gap-2">
                                                                            <div className="min-w-fit-content">
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-half"></i></span>
                                                                            </div>
                                                                            <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                                <span>(242)</span>
                                                                                <span>Ratings</span>
                                                                            </p>
                                                                        </div>
                                                                        <span className="text-danger">( 220 Sales )</span>
                                                                    </div>
                                                                    <div className="min-w-fit-content">
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                                    </OverlayTrigger>
                                                                        
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-baseline mt-3 flex-wrap">
                                                                    <h4 className="fw-semibold text-primary mb-0">$220</h4>
                                                                    <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$499</span>
                                                                    <Link scroll={false} href="/marketplace/details/" className="btn btn-sm btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Row>
                                                    <Col md={4}>
                                                        <Card className=" custom-card overflow-hidden card-style-2">
                                                            <span className="badge bg-danger tag-badge">20% Off</span>
                                                            <Link scroll={false} href="/marketplace/details/">
                                                                <div className="featured-img">
                                                                    <img src="../../assets/images/marketplace/templates/7.png" className="" alt="..."/> 
                                                                </div>
                                                            </Link>
                                                            <Card.Body className="p-3 position-relative">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                    <div className="flex-grow-1">
                                                                        <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                        <h5 className="mb-1 fw-semibold"><a href="/marketplace/details/">Vuejs Template</a></h5>
                                                                        <div className="d-flex align-items-center fs-11 flex-wrap gap-2">
                                                                            <div className="min-w-fit-content">
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-half"></i></span>
                                                                            </div>
                                                                            <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                                <span>(342)</span>
                                                                                <span>Ratings</span>
                                                                            </p>
                                                                        </div>
                                                                        <span className="text-danger">( 320 Sales )</span>
                                                                    </div>
                                                                    <div className="min-w-fit-content">
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                                    </OverlayTrigger>
                                                                    
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-baseline mt-3 flex-wrap">
                                                                    <h4 className="fw-semibold text-primary mb-0">$220</h4>
                                                                    <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$499</span>
                                                                    <Link scroll={false} href="/marketplace/details/" className="btn btn-sm btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    <Col md={4}>
                                                        <Card className=" custom-card overflow-hidden card-style-2">
                                                            <Link scroll={false} href="/marketplace/details/">
                                                                <div className="featured-img">
                                                                    <img src="../../assets/images/marketplace/templates/8.png" className="" alt="..."/> 
                                                                </div>
                                                            </Link>
                                                            <Card.Body className="p-3 position-relative">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                    <div className="flex-grow-1">
                                                                        <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                        <h5 className="mb-1 fw-semibold"><a href="/marketplace/details/">Codeigniter</a></h5>
                                                                        <div className="d-flex align-items-center fs-11 flex-wrap gap-2">
                                                                            <div className="min-w-fit-content">
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-half"></i></span>
                                                                            </div>
                                                                            <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                                <span>(142)</span>
                                                                                <span>Ratings</span>
                                                                            </p>
                                                                        </div>
                                                                        <span className="text-danger">( 120 Sales )</span>
                                                                    </div>
                                                                    <div className="min-w-fit-content">
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                                    </OverlayTrigger>
                                                                    
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-baseline mt-3 flex-wrap">
                                                                    <h4 className="fw-semibold text-primary mb-0">$120</h4>
                                                                    <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$399</span>
                                                                    <Link scroll={false} href="/marketplace/details/" className="btn btn-sm btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    <Col md={4}>
                                                        <Card className=" custom-card overflow-hidden card-style-2">
                                                            <span className="badge bg-danger tag-badge">40% Off</span>
                                                            <Link scroll={false} href="/marketplace/details/">
                                                                <div className="featured-img">
                                                                    <img src="../../assets/images/marketplace/templates/4.png" className="" alt="..."/> 
                                                                </div>
                                                            </Link>
                                                            <Card.Body className="p-3 position-relative">
                                                                <div className="d-flex align-items-start justify-content-between">
                                                                    <div className="flex-grow-1">
                                                                        <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                        <h5 className="mb-1 fw-semibold"><a href="/marketplace/details/">Wordpress</a></h5>
                                                                        <div className="d-flex align-items-center fs-11 flex-wrap gap-2">
                                                                            <div className="min-w-fit-content">
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning me-1"><i className="bi bi-star-half"></i></span>
                                                                            </div>
                                                                            <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                                <span>(152)</span>
                                                                                <span>Ratings</span>
                                                                            </p>
                                                                        </div>
                                                                        <span className="text-danger">( 310 Sales )</span>
                                                                    </div>
                                                                    <div className="min-w-fit-content">
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                                    </OverlayTrigger>
                                                                    
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-baseline mt-3 flex-wrap">
                                                                    <h4 className="fw-semibold text-primary mb-0">$320</h4>
                                                                    <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$439</span>
                                                                    <Link scroll={false} href="/marketplace/details/" className="btn btn-sm btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </SwiperSlide>
                                    </Swiper>
                                </div>           
                            </Col>
                            <Col lg={4}>
                                <Card className="custom-card overflow-hidden">
                                    <Card.Body className="p-0">
                                        <div className="d-sm-flex align-items-center p-3 border-bottom">
                                            <div>
                                                <span className="avatar avatar-xl avatar-rounded online me-3">
                                                    <img src="../../assets/images/faces/9.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill main-profile-info">
                                                <h5 className="fw-semibold mb-1">Jack Miller 
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Verified User</Tooltip>}>
                                                    <i className="bi bi-check-circle-fill text-success fs-14 ms-1" data-bs-toggle="tooltip"
                                                    data-bs-placement="top" title="Verified User"></i>
                                                </OverlayTrigger>
                                                </h5>
                                                <p className="mb-0">Member Since <span className="fw-semibold">2015</span></p>
                                            </div>
                                        </div>
                                        <div className="p-4 border-bottom border-block-end-dashed">
                                            <div className="d-flex mb-0 justify-content-center">
                                                <div className="me-4">
                                                    <h6 className="fw-semibold mb-0">113</h6>
                                                    <p className="mb-0 fs-12 text-muted">Projects</p>
                                                </div>
                                                <div className="me-4">
                                                    <h6 className="fw-semibold mb-0">12.2k</h6>
                                                    <p className="mb-0 fs-12 text-muted">Followers</p>
                                                </div>
                                                <div className="me-4">
                                                    <h6 className="fw-semibold mb-0">128</h6>
                                                    <p className="mb-0 fs-12 text-muted">Following</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 border-bottom border-block-end-dashed text-center">
                                            <div className="d-grid">
                                                <Link scroll={false} href="#!" className="btn btn-lg btn-danger" role="button">
                                                    <i className="ri-eye-line me-2"></i>View Author Profile
                                                </Link>
                                            </div>
                                        </div>  
                                        <div className="p-4 d-flex align-items-center flex-wrap gap-3">
                                            <p className="fs-15 mb-0 fw-semibold">Social :</p>
                                            <div className="btn-list mb-0">
                                                <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light mb-xl-0">
                                                    <i className="ri-facebook-line"></i>
                                                </Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light mb-xl-0">
                                                    <i className="ri-twitter-x-fill"></i>
                                                </Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light mb-xl-0">
                                                    <i className="ri-instagram-line"></i>
                                                </Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light mb-xl-0">
                                                    <i className="ri-github-line"></i>
                                                </Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light mb-xl-0">
                                                    <i className="ri-youtube-line"></i>
                                                </Button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card overflow-hidden">
                                    <Card.Header>
                                        <Card.Title>
                                            Achievements
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <span className="avatar m-1 avatar-rounded bg-white shadow-sm border p-2">
                                            <img src="../../assets/images/company-logos/1.png" alt="" />
                                        </span>
                                        <span className="avatar m-1 avatar-rounded bg-white shadow-sm border p-2">
                                            <img src="../../assets/images/company-logos/2.png" alt="" />
                                        </span>
                                        <span className="avatar m-1 avatar-rounded bg-white shadow-sm border p-2">
                                            <img src="../../assets/images/company-logos/3.png" alt="" />
                                        </span>
                                        <span className="avatar m-1 avatar-rounded bg-white shadow-sm border p-2">
                                            <img src="../../assets/images/company-logos/4.png" alt="" />
                                        </span>
                                        <span className="avatar m-1 avatar-rounded bg-white shadow-sm border p-2">
                                            <img src="../../assets/images/company-logos/5.png" alt="" />
                                        </span>
                                        <span className="avatar avatar-rounded bg-white shadow-sm border p-2">
                                            <img src="../../assets/images/company-logos/6.png" alt="" />
                                        </span>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card overflow-hidden">
                                    <Card.Header>
                                        <Card.Title>
                                            Featured Item
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="row align-items-center">
                                            <Col md={4}>
                                                <div className="img-box-1 bg-gray-300">
                                                    <Link scroll={false} href="#!">
                                                        <img src="../../assets/images/marketplace/new-arrivals/1.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                                    </Link>
                                                </div>
                                            </Col>
                                            <div className="col-md-8">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="flex-grow-1">
                                                        <h5 className="fw-semibold mb-1"><a href="#!">HTML Template</a></h5>
                                                        <div className="d-flex align-items-baseline fs-13">
                                                            <div className="min-w-fit-content">
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-half"></i></span>
                                                            </div>
                                                            <p className="mb-2 ms-1 min-w-fit-content text-muted">
                                                                <span>(4)</span>
                                                                <span>Ratings</span>
                                                            </p>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <p className="mb-0 flex-grow-1 fs-15"><span className="fw-semibold"><i className="bi bi-bar-chart-fill text-info"></i> 1300</span> Sales</p>
                                                            <Link scroll={false} href="#!" className="text-primary fw-semibold"><u>View Details</u></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second" className="border-0 p-0" id="Portfolio-tab" role="tabpanel">
                        <div className="row gy-2"> 
                            <Col lg={8}>                                  
                                <div className="d-flex gap-2 mb-4">
                                    <div className="custom-form-group flex-grow-1">
                                        <input type="text" className="form-control" placeholder="Search Here.." aria-label="Recipient's username"/>
                                        <div className="custom-form-btn">                                            
                                            <Button variant="" className="btn btn-primary btn-sm border-0" type="button"><i className="bi bi-search me-2"></i> Search</Button>
                                        </div>
                                    </div>
                                    <div className="btn-group">
                                <Dropdown>
                                <Dropdown.Toggle variant="" className="btn btn-outline-light border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Sort By
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <li><Dropdown.Item href="#!">Date Published</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Best Match</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Category</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Sales</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Ratings</Dropdown.Item></li>
                                        </Dropdown.Menu>
                                </Dropdown>
                                    </div>
                                </div>
                                <Card className="custom-card">
                                    <Card.Body className="p-3">
                                        <div className="row align-items-start">
                                            <Col sm={3} className="col-4">
                                                <div>
                                                    <Link scroll={false} href="#!">
                                                        <img src="../../assets/images/marketplace/new-arrivals/1.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                                    </Link>
                                                </div>
                                            </Col>
                                            <Col sm={9} className="col-8">
                                                <div className="d-flex justify-content-between flex-wrap">
                                                    <div className="flex-grow-1 w-75">
                                                        <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Aliquyam</Link>
                                                        <h5 className="fw-semibold mb-1"><a href="#!">HTML Template</a></h5>
                                                        <div className="d-flex align-items-baseline fs-13">
                                                            <div className="min-w-fit-content">
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-half"></i></span>
                                                            </div>
                                                            <p className="mb-2 ms-1 min-w-fit-content text-muted">
                                                                <span>(4)</span>
                                                                <span>Ratings</span>
                                                            </p>
                                                        </div>
                                                        <p>Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore..</p>
                                                    </div>
                                                    <div className="min-w-fit-content">
                                                        <div className="">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                            <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle me-1" data-bs-toggle="tooltip" aria-label="wishlist" data-bs-original-title="Add to wishlist"><i className="ti ti-heart fs-16"></i></Link>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                            <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" aria-label="Add to cart" data-bs-original-title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                        </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h4 className="fw-semibold text-primary mb-0">$120</h4>
                                                    <div className="min-w-fit-content">
                                                        <h6 className="mb-0"><i className="bi bi-bar-chart-fill text-warning me-1 me-1"></i><span className="fw-semibold">436</span> Sales</h6>
                                                    </div>
                                                </div>
                                            </Col>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card">
                                    <Card.Body className="p-3">
                                        <div className="row align-items-start">
                                            <Col sm={3} className="col-4">
                                                <div>
                                                    <Link scroll={false} href="#!">
                                                        <img src="../../assets/images/marketplace/new-arrivals/2.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                                    </Link>
                                                </div>
                                            </Col>
                                            <Col sm={9} className="col-8">
                                                <div className="d-flex justify-content-between flex-wrap">
                                                    <div className="flex-grow-1 w-75">
                                                        <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Aliquyam</Link>
                                                        <h5 className="fw-semibold mb-1"><a href="#!">React Template</a></h5>
                                                        <div className="d-flex align-items-baseline fs-13">
                                                            <div className="min-w-fit-content">
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-half"></i></span>
                                                            </div>
                                                            <p className="mb-2 ms-1 min-w-fit-content text-muted">
                                                                <span>(45)</span>
                                                                <span>Ratings</span>
                                                            </p>
                                                        </div>
                                                        <p>Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore..</p>
                                                    </div>
                                                    <div className="min-w-fit-content">
                                                        <div className="">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                            <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle me-1" data-bs-toggle="tooltip" aria-label="wishlist" data-bs-original-title="Add to wishlist"><i className="ti ti-heart fs-16"></i></Link>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                            <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" aria-label="Add to cart" data-bs-original-title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                        </OverlayTrigger>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h4 className="fw-semibold text-primary mb-0">$150</h4>
                                                    <div className="min-w-fit-content">
                                                        <h6 className="mb-0"><i className="bi bi-bar-chart-fill text-warning me-1 me-1"></i><span className="fw-semibold">426</span> Sales</h6>
                                                    </div>
                                                </div>
                                            </Col>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card">
                                    <Card.Body className="p-3">
                                        <div className="row align-items-start">
                                            <Col sm={3} className="col-4">
                                                <div>
                                                    <Link scroll={false} href="#!">
                                                        <img src="../../assets/images/marketplace/new-arrivals/3.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                                    </Link>
                                                </div>
                                            </Col>
                                            <Col sm={9} className="col-8">
                                                <div className="d-flex justify-content-between flex-wrap">
                                                    <div className="flex-grow-1 w-75">
                                                        <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Aliquyam</Link>
                                                        <h5 className="fw-semibold mb-1"><a href="#!">Angular Template</a></h5>
                                                        <div className="d-flex align-items-baseline fs-13">
                                                            <div className="min-w-fit-content">
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-half"></i></span>
                                                            </div>
                                                            <p className="mb-2 ms-1 min-w-fit-content text-muted">
                                                                <span>(35)</span>
                                                                <span>Ratings</span>
                                                            </p>
                                                        </div>
                                                        <p>Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore..</p>
                                                    </div>
                                                    <div className="min-w-fit-content">
                                                        <div className="">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                            <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle me-1" data-bs-toggle="tooltip" aria-label="wishlist" data-bs-original-title="Add to wishlist"><i className="ti ti-heart fs-16"></i></Link>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                            <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" aria-label="Add to cart" data-bs-original-title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                        </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h4 className="fw-semibold text-primary mb-0">$250</h4>
                                                    <div className="min-w-fit-content">
                                                        <h6 className="mb-0"><i className="bi bi-bar-chart-fill text-warning me-1 me-1"></i><span className="fw-semibold">326</span> Sales</h6>
                                                    </div>
                                                </div>
                                            </Col>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card">
                                    <Card.Body className="p-3">
                                        <div className="row align-items-start">
                                            <Col sm={3} className="col-4">
                                                <div>
                                                    <Link scroll={false} href="#!">
                                                        <img src="../../assets/images/marketplace/new-arrivals/4.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                                    </Link>
                                                </div>
                                            </Col>
                                            <Col sm={9} className="col-8">
                                                <div className="d-flex justify-content-between flex-wrap">
                                                    <div className="flex-grow-1 w-75">
                                                        <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Aliquyam</Link>
                                                        <h5 className="fw-semibold mb-1"><a href="#!">PHP Script Template</a></h5>
                                                        <div className="d-flex align-items-baseline fs-13">
                                                            <div className="min-w-fit-content">
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning me-1"><i className="bi bi-star-half"></i></span>
                                                            </div>
                                                            <p className="mb-2 ms-1 min-w-fit-content text-muted">
                                                                <span>(75)</span>
                                                                <span>Ratings</span>
                                                            </p>
                                                        </div>
                                                        <p>Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore..</p>
                                                    </div>
                                                    <div className="min-w-fit-content">
                                                        <div className="">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                            <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle me-1" data-bs-toggle="tooltip" aria-label="wishlist" data-bs-original-title="Add to wishlist"><i className="ti ti-heart fs-16"></i></Link>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                            <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" aria-label="Add to cart" data-bs-original-title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                        </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h4 className="fw-semibold text-primary mb-0">$356</h4>
                                                    <div className="min-w-fit-content">
                                                        <h6 className="mb-0"><i className="bi bi-bar-chart-fill text-warning me-1 me-1"></i><span className="fw-semibold">466</span> Sales</h6>
                                                    </div>
                                                </div>
                                            </Col>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <nav aria-label="Page navigation" className="pagination-style-4 float-end">
                                    <Pagination className="mb-0">
                                        <Pagination.Item disabled>Prev</Pagination.Item>
                                        <Pagination.Item active>1</Pagination.Item>
                                        <Pagination.Item>2</Pagination.Item>
                                        <Pagination.Item><i className="bi bi-three-dots"></i></Pagination.Item>
                                        <Pagination.Item>16</Pagination.Item>
                                        <Pagination.Item>17</Pagination.Item>
                                        <Pagination.Item className="pagination-next">next</Pagination.Item>
                                    </Pagination>         
                                </nav>
                            </Col>    
                            <Col lg={4}>
                                <Card className="custom-card overflow-hidden">
                                    <Card.Body className="p-0">
                                        <div className="d-sm-flex align-items-center p-3 border-bottom">
                                            <div>
                                                <span className="avatar avatar-xl avatar-rounded online me-3">
                                                    <img src="../../assets/images/faces/9.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill main-profile-info">
                                                <h5 className="fw-semibold mb-1">Jack Miller <i className="bi bi-check-circle-fill text-success fs-14" data-bs-toggle="tooltip"
                                                    data-bs-placement="top" title="Verified User"></i></h5>
                                                <p className="mb-0">Member Since <span className="fw-semibold">2005</span></p>
                                            </div>
                                        </div>
                                        <div className="p-4 border-bottom border-block-end-dashed">
                                            <div className="d-flex mb-0 justify-content-center">
                                                <div className="me-4">
                                                    <h6 className="fw-semibold mb-0">113</h6>
                                                    <p className="mb-0 fs-12 text-muted">Projects</p>
                                                </div>
                                                <div className="me-4">
                                                    <h6 className="fw-semibold mb-0">12.2k</h6>
                                                    <p className="mb-0 fs-12 text-muted">Followers</p>
                                                </div>
                                                <div className="me-4">
                                                    <h6 className="fw-semibold mb-0">128</h6>
                                                    <p className="mb-0 fs-12 text-muted">Following</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 border-bottom border-block-end-dashed text-center">
                                            <div className="d-grid">
                                                <Link scroll={false} href="#!" className="btn btn-danger" role="button">
                                                    <i className="ri-eye-line me-2"></i>View Author Profile
                                                </Link>
                                            </div>
                                        </div>  
                                        <div className="p-4 d-flex align-items-center flex-wrap gap-3">
                                            <p className="fs-15 mb-0 fw-semibold">Social :</p>
                                            <div className="btn-list mb-0">
                                                <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light mb-xl-0">
                                                    <i className="ri-facebook-line"></i>
                                                </Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light mb-xl-0">
                                                    <i className="ri-twitter-x-fill"></i>
                                                </Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light mb-xl-0">
                                                    <i className="ri-instagram-line"></i>
                                                </Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light mb-xl-0">
                                                    <i className="ri-github-line"></i>
                                                </Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light mb-xl-0">
                                                    <i className="ri-youtube-line"></i>
                                                </Button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card overflow-hidden">
                                    <Card.Header>
                                        <Card.Title>
                                            Achievements
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <span className="avatar m-1 avatar-rounded bg-white shadow-sm border p-2">
                                            <img src="../../assets/images/company-logos/1.png" alt="" />
                                        </span>
                                        <span className="avatar m-1 avatar-rounded bg-white shadow-sm border p-2">
                                            <img src="../../assets/images/company-logos/2.png" alt="" />
                                        </span>
                                        <span className="avatar m-1 avatar-rounded bg-white shadow-sm border p-2">
                                            <img src="../../assets/images/company-logos/3.png" alt="" />
                                        </span>
                                        <span className="avatar m-1 avatar-rounded bg-white shadow-sm border p-2">
                                            <img src="../../assets/images/company-logos/4.png" alt="" />
                                        </span>
                                        <span className="avatar m-1 avatar-rounded bg-white shadow-sm border p-2">
                                            <img src="../../assets/images/company-logos/5.png" alt="" />
                                        </span>
                                        <span className="avatar avatar-rounded bg-white shadow-sm border p-2">
                                            <img src="../../assets/images/company-logos/6.png" alt="" />
                                        </span>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>
                    </Tab.Pane>    
                    <Tab.Pane eventKey="third" className="border-0 p-0" id="Followers-tab" role="tabpanel">
                        <Row>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top ">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/15.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">
                                                        Simon Cowall
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">simoncowal111@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        567 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-add-line me-1"></i>Follow Back
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-danger-light">
                                                            <i className="ri-close-fill me-1"></i>Cancel
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/1.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">                                                            
                                                        Melissa Jane                                            
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">melissajane2134@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        347 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-add-line me-1"></i>Follow Back
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-danger-light">
                                                            <i className="ri-close-fill me-1"></i>Cancel
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/2.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">                                                            
                                                        Susana Sane                                           
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">susanasanee2134@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        847 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-add-line me-1"></i>Follow Back
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-danger-light">
                                                            <i className="ri-close-fill me-1"></i>Cancel
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top ">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/21.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">                                                            
                                                        Shane Watson                                          
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">shanewatson@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        812 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-add-line me-1"></i>Follow Back
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-danger-light">
                                                            <i className="ri-close-fill me-1"></i>Cancel
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top ">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/5.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">                                                            
                                                        Devon Convoy                                         
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">devonconvoy@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        345 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-add-line me-1"></i>Follow Back
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-danger-light">
                                                            <i className="ri-close-fill me-1"></i>Cancel
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top ">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/6.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">                                                            
                                                        Umag Anige                                        
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">umaganigel89@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        456 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-add-line me-1"></i>Follow Back
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-danger-light">
                                                            <i className="ri-close-fill me-1"></i>Cancel
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/9.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">
                                                        Simon Cowall
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">simoncowal111@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        567 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-add-line me-1"></i>Follow Back
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-danger-light">
                                                            <i className="ri-close-fill me-1"></i>Cancel
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top ">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/10.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">                                                            
                                                        Melissa Jane                                            
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">melissajane2134@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        347 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-add-line me-1"></i>Follow Back
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-danger-light">
                                                            <i className="ri-close-fill me-1"></i>Cancel
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top ">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/11.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">                                                            
                                                        Susana Sane                                           
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">susanasanee2134@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        847 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-add-line me-1"></i>Follow Back
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-danger-light">
                                                            <i className="ri-close-fill me-1"></i>Cancel
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth" className="border-0 p-0" id="Following-tab" role="tabpanel">
                        <Row>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top ">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/2.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">                                                            
                                                        Susana Sane                                           
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">susanasanee2134@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        847 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-danger-light">
                                                            <i className="ri-user-forbid-line me-1"></i>Block
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-unfollow-line me-1"></i>Un Follow
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top ">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/21.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">                                                            
                                                        Shane Watson                                          
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">shanewatson@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        812 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-danger-light">
                                                            <i className="ri-user-forbid-line me-1"></i>Block
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-unfollow-line me-1"></i>Un Follow
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top ">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/15.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">
                                                        Simon Cowall
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">simoncowal111@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        567 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-danger-light">
                                                            <i className="ri-user-forbid-line me-1"></i>Block
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-unfollow-line me-1"></i>Un Follow
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top ">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/1.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">                                                            
                                                        Melissa Jane                                            
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">melissajane2134@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        347 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-danger-light">
                                                            <i className="ri-user-forbid-line me-1"></i>Block
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-unfollow-line me-1"></i>Un Follow
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top ">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/9.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">
                                                        Simon Cowall
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">simoncowal111@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        567 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-danger-light">
                                                            <i className="ri-user-forbid-line me-1"></i>Block
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-unfollow-line me-1"></i>Un Follow
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top ">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/10.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">                                                            
                                                        Melissa Jane                                            
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">melissajane2134@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        347 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-danger-light">
                                                            <i className="ri-user-forbid-line me-1"></i>Block
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-unfollow-line me-1"></i>Un Follow
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top ">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/5.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">                                                            
                                                        Devon Convoy                                         
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">devonconvoy@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        345 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-danger-light">
                                                            <i className="ri-user-forbid-line me-1"></i>Block
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-unfollow-line me-1"></i>Un Follow
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top ">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/6.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">                                                            
                                                        Umag Anige                                        
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">umaganigel89@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        456 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-danger-light">
                                                            <i className="ri-user-forbid-line me-1"></i>Block
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-unfollow-line me-1"></i>Un Follow
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top ">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/11.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">                                                            
                                                        Susana Sane                                           
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">susanasanee2134@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        847 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-danger-light">
                                                            <i className="ri-user-forbid-line me-1"></i>Block
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-unfollow-line me-1"></i>Un Follow
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Tab.Pane>
                </Tab.Content>
            </div>
        </section>
        </Tab.Container>
        {/* End:: Section-1 */}

        {/* Start:: Section-2 */}
        <section className="section bg-banner px-lg-0 px-4">
            <div className="row justify-content-center">
                <Col lg={7} className="text-center">
                    <div className="mb-4">
                        <h3 className="fw-semibold mb-2 text-fixed-white">&#128073; Browse the top template to build the awesome applications</h3>
                    </div>
                    <h6 className="mb-4 op-9 text-fixed-white">Labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore..</h6>
                    <div className="btn-list">
                        <Link scroll={false} href="/marketplace/search/" className="btn btn-lg btn-light"><i className="bi bi-search me-1"></i> Search Products</Link>
                        <Link scroll={false} href="#!" className="btn btn-lg btn-danger"><i className="bi bi-send me-1"></i> Signup Now</Link>
                    </div>
                </Col>
            </div>
        </section>
        {/* End:: Section-2 */}
    </Fragment>
    )
};

export default Userprofile;