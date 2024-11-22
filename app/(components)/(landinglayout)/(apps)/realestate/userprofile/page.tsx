"use client"
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, Form, Nav, OverlayTrigger, Pagination, Row, Tab, Tooltip } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, } from "swiper/modules"; 
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Userprofile = () => {
return ( 
    <Fragment>

        {/* Start:: Breadcrumb*/}
        <div className="border-bottom border-top py-3 bg-white">
            <div className="container">
                {/* Page Header */}
                    <Seo title={"User Public Profile"} />
                    <Pageheader Heading="" Pagetitle={true} Pages={[{title:"Apps", active:true}, {title:"Real Estate", active:true}, {title:"User Public Profile", active:false},]} />
                {/* Page Header Close */}
            </div>
        </div>
        {/* End:: Breadcrumb*/}

        {/* Start:: Landing Banner */}
        <div className="landing-banner">
            <section className="py-5">
                <div className="container main-banner-container">
                    <div className="row gy-2">
                        <Col lg={9}  md={8} className="col-lg-9 col-md-8">
                            <div className="d-flex align-items-center flex-wrap gap-3">
                                <div>
                                    <span className="realestate-company-icon">
                                    <img src="../../assets/images/company-logos/1.png" alt="" />
                                    </span>
                                </div>
                                <div>
                                    <h4 className="fw-bold mb-0 d-flex align-items-center"><a href="#!"> Ridh Constructions</a></h4>
                                    <p className="mb-2">Member Since <span className="fw-semibold">2005</span></p>
                                    <div className="d-flex align-items-center fs-14 mb-2">
                                        <p className="fs-15 fw-semibold mb-0">Customer Ratings : </p>
                                        <div className="min-w-fit-content ms-3">
                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                        </div>
                                        <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                            <span>(142)</span>
                                            <span>Ratings</span>
                                        </p>
                                    </div>
                                    <span className="badge badge-md bg-info-transparent me-1"><i className="bi bi-briefcase-fill me-2"></i>156 Properties</span>
                                    <span className="badge badge-md bg-danger-transparent"><i className="bi bi-bar-chart-fill me-2"></i>100 Sales</span>
                                </div>
                            </div>
                        </Col>
                        <div className="col-lg-3 col-md-4 my-md-auto">
                            <div className="btn-list">
                                <Link scroll={false} href="#!" className="btn btn-lg btn-w-lg btn-primary"><i className="bi bi-eye me-1"></i> View Contact</Link>
                                <Link scroll={false} href="#!" className="btn btn-icon btn-lg btn-secondary-light btn-wave">
                                    <i className="ri-user-follow-line"></i>
                                </Link>
                                <Link scroll={false} href="#!" className="btn btn-icon btn-lg btn-success-light btn-wave">
                                    <i className="ri-share-line"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </div>
        {/* End:: Landing Banner */}

        <Tab.Container defaultActiveKey="first">
        {/* Start:: Nav Tabs*/}
        <div className="border-bottom bg-white">
            <div className="container">
                <Nav className="nav-tabs tab-style-8 scaleX custom-nav-tabs" id="myTab" role="tablist">
                    <Nav.Item role="presentation">
                        <Nav.Link eventKey="first" href="#Profile-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="true" role="tab">Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item role="presentation">
                        <Nav.Link eventKey="second" href="#properties-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">Properties</Nav.Link>
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
        <section className="section py-4">
            <div className="container"> 
                <Tab.Content>
                    <Tab.Pane eventKey="first" className="border-0 p-0 show" id="Profile-tab" role="tabpanel"> 
                        <Row> 
                            <Col lg={8}>                                     
                                <div className="mb-3">
                                    <div className="deals-bundle deals-bundle1">
                                        <span className="icon">
                                            <img src="../../assets/images/company-logos/1.png" alt="" className="img-fluid"/>
                                        </span>
                                        <h4 className="fw-semibold mb-4 text-fixed-white">Ridh Constructions</h4>  
                                        <div className="row gy-2 text-center justify-content-center">
                                            <div className="col-md-4">
                                                <div className="bg-white-transparent backdrop-blur p-2 rounded shadow-sm">
                                                    <h5 className="mb-1 fw-semibold text-fixed-white">234+</h5>
                                                    <h6 className="mb-0 text-fixed-white">Properties</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="bg-white-transparent backdrop-blur p-2 rounded shadow-sm">
                                                    <h5 className="mb-1 fw-semibold text-fixed-white">342+</h5>
                                                    <h6 className="mb-0 text-fixed-white">Customers</h6>
                                                </div>
                                            </div>
                                        </div>                                      
                                    </div>
                                </div>
                                <Card className="custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                            About Ridh Constructions
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <p>Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore.A officiis optio temporibus minima facilis...</p>
                                        <p>Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore.A officiis optio temporibus minima facilis...</p>
                                
                                        <h6 className="fw-semibold">Deals In Localities :</h6>
                                        <p>Hyderabad - Adarsh Nagar, Addagutta, Adibatla, Adikmet, Adithya Nagar, Alwal, Amangal, Ankireddypalli</p>
                                        <h6 className="fw-semibold">Propery Type :</h6>
                                        <p>Flats/Apartments, Houses/Villas, Builder Floor, Farm House, Residential Plot, Agricultural/Farm Land</p>

                                        <h6 className="fw-semibold">Services Offered :</h6>
                                        <p className="mb-0">Builders, Real Estate Agents</p>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                            Properties Overview
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <p className="fw-semibold fs-14">Properties for Sale :</p>
                                        <div className="row justify-content-center">
                                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="product-spec mb-2">
                                                    <i className="ri-building-4-line fs-16 text-primary"></i>
                                                    <p className="fs-14 fw-semibold mb-0">24+ Flats</p>
                                                </div>
                                            </div>
                                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-sm-0 mt-3">
                                                <div className="product-spec mb-2">
                                                    <i className="ri-landscape-line fs-16 text-primary"></i>
                                                    <p className="fs-14 fw-semibold mb-0">
                                                        23 Residential Plots
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-sm-0 mt-3">
                                                <div className="product-spec mb-2">
                                                    <i className="ri-compass-line fs-16 text-primary"></i>
                                                    <p className="fs-14 fw-semibold mb-0">
                                                        10 Farm Land
                                                    </p>
                                                </div>
                                            </div>
                                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} className="col-12 mt-sm-0 mt-3">
                                                <div className="product-spec mb-2">
                                                    <i className="ri-building-line fs-16 text-primary"></i>
                                                    <p className="fs-14 fw-semibold mb-0">
                                                    6 Farm House
                                                    </p>
                                                </div>
                                            </Col>
                                        </div>
                                        <p className="fw-semibold fs-14 my-4">Properties for Rent :</p> 
                                        <div className="row justify-content-center">
                                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} className="col-12">
                                                <div className="product-spec">
                                                    <i className="bi bi-shop fs-16 text-primary"></i>
                                                    <p className="fs-14 fw-semibold mb-0">2 Commercial Shops</p>
                                                </div>
                                            </Col>
                                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} className="col-12 mt-sm-0 mt-3">
                                                <div className="product-spec">
                                                    <i className="bi bi-buildings fs-16 text-primary"></i>
                                                    <p className="fs-14 fw-semibold mb-0">
                                                        2 Duplex Houses for rent
                                                    </p>
                                                </div>
                                            </Col>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                            Amenities
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="row justify-content-center">
                                            <Col xxl={6} xl={4} lg={4} md={4} sm={4} className="col-12">
                                                <div className="product-spec mb-2">
                                                    <p className="mb-0">
                                                        <img src="../../assets/images/realestate/icons/7.png" alt="" />
                                                    </p>
                                                    <p className="fs-14 fw-semibold mb-0">24Hr Backup</p>
                                                </div>
                                            </Col>
                                            <Col xxl={6} xl={4} lg={4} md={4} sm={4} className="col-12 mt-sm-0 mt-3">
                                                <div className="product-spec mb-2">
                                                    <p className="mb-0">                                            
                                                        <img src="../../assets/images/realestate/icons/8.png" alt="" />
                                                    </p>
                                                    <p className="fs-14 fw-semibold mb-0">
                                                        Rain Water Harvesting
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col xxl={6} xl={4} lg={4} md={4} sm={4} className="col-12 mt-sm-0 mt-3">
                                                <div className="product-spec mb-2">
                                                    <p className="mb-0">                                            
                                                        <img src="../../assets/images/realestate/icons/1.png" alt="" />
                                                    </p>
                                                    <p className="fs-14 fw-semibold mb-0">
                                                        Community Hall
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col xxl={6} xl={4} lg={4} md={4} sm={4} className="col-12 mt-sm-0 mt-3">
                                                <div className="product-spec mb-2">
                                                    <p className="mb-0">                                            
                                                        <img src="../../assets/images/realestate/icons/9.png" alt="" />
                                                    </p>
                                                    <p className="fs-14 fw-semibold mb-0">
                                                        Play Area
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col xxl={6} xl={4} lg={4} md={4} sm={4} className="col-12 mt-sm-0 mt-3">
                                                <div className="product-spec mb-2">
                                                    <p className="mb-0">                                            
                                                        <img src="../../assets/images/realestate/icons/10.png" alt="" />
                                                    </p>
                                                    <p className="fs-14 fw-semibold mb-0">
                                                        Swimming Pool
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col xxl={6} xl={4} lg={4} md={4} sm={4} className="col-12 mt-sm-0 mt-3">
                                                <div className="product-spec mb-2">
                                                    <p className="mb-0">                                            
                                                        <img src="../../assets/images/realestate/icons/11.png" alt="" />
                                                    </p>
                                                    <p className="fs-14 fw-semibold mb-0">
                                                        Gymnasium
                                                    </p>
                                                </div>
                                            </Col>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card border-0 bg-primary-transparent shadow-none">
                                    <Card.Body>
                                        <div className="d-flex justify-content-between gap-2 flex-wrap align-items-center">
                                            <div>
                                                <h5 className="fw-semibold mb-0">&#128400; Download the Brochure Now!</h5>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!" className="btn btn-success" role="button">
                                                    <i className="ri-download-line me-2"></i>Download
                                                </Link>
                                            </div>   
                                        </div>
                                    </Card.Body>
                                </Card> 
                                <div className="row mt-5 g-0">
                                    <h4 className="fw-semibold mb-0">Top Properties</h4>
                                    <p className="">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <Swiper className="swiper-related-jobs" autoplay={{ delay: 2500, disableOnInteraction: false, }} navigation={true} modules={[Navigation, Autoplay]} >
                                            <SwiperSlide>
                                                <Row>
                                                    <Col lg={4} md={6} sm={6} className="col-12">
                                                        <Card className="custom-card overflow-hidden card-style-2">
                                                            <span className="badge bg-danger tag-badge">For Sale</span>
                                                            <Link scroll={false} href="/realestate/details/">
                                                                <div className="featured-img">
                                                                    <img src="../../assets/images/realestate/properties/popular/1.png" className="w-auto" alt="..." />
                                                                </div>
                                                            </Link>
                                                            <div className="card-body p-3 position-relative">
                                                                <div className="min-w-fit-content float-end">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>  
                                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Joan Hunter</Link></p>
                                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">House nature</a></h5>
                                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                                    <div className="fs-11 text-muted">
                                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                                        <span>,</span>
                                                                        <span className="">16 Nov 2024</span>
                                                                    </div>
                                                                    <span className="text-danger">( 2BHK )</span>
                                                                </div>
                                                                <div className="popular-tags">
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">7 Beds</Link>
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">2 Baths</Link>
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">6,987sqft</Link>
                                                                </div>
                                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$1290</h4>
                                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    <Col lg={4} md={6} sm={6} className="col-12">
                                                        <Card className="custom-card overflow-hidden card-style-2">
                                                            <span className="badge bg-warning tag-badge">For Rent</span>
                                                            <span className="badge bg-danger top-right-badge">20% Off</span>
                                                            <Link scroll={false} href="/realestate/details/">
                                                                <div className="featured-img">
                                                                    <img src="../../assets/images/realestate/properties/popular/2.png" className="w-auto" alt="..." />
                                                                </div>
                                                            </Link>
                                                            <div className="card-body p-3 position-relative">
                                                                <div className="min-w-fit-content float-end">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>  
                                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Susana Sane</Link></p>
                                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Trauel Builder</a></h5>
                                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                                    <div className="fs-11 text-muted">
                                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>Banglore</span>
                                                                        <span>,</span>
                                                                        <span className="">20 Dec 2024</span>
                                                                    </div>
                                                                    <span className="text-danger">( 3BHK )</span>
                                                                </div>
                                                                <div className="popular-tags">
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">10 Beds</Link>
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">4 Bath</Link>
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">9,987sqft</Link>
                                                                </div>
                                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$1345</h4>
                                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    <Col lg={4} md={6} sm={6} className="col-12">
                                                        <Card className="custom-card overflow-hidden card-style-2">
                                                            <div className="badge top-right-badge bg-warning text-fixed-white">
                                                                <div className="badge-icon"><i className="ti ti-star-filled fs-14"></i></div>
                                                                <div className="badge-text">Featured</div>
                                                            </div>
                                                            <Link scroll={false} href="/realestate/details/">
                                                                <div className="featured-img">
                                                                    <img src="../../assets/images/realestate/properties/popular/3.png" className="w-auto" alt="..." />
                                                                </div>
                                                            </Link>
                                                            <div className="card-body p-3 position-relative">
                                                                <div className="min-w-fit-content float-end">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>  
                                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Julia Camo</Link></p>
                                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Duplex House</a></h5>
                                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                                    <div className="fs-11 text-muted">
                                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>Hyderabad</span>
                                                                        <span>,</span>
                                                                        <span className="">05 Jan 2024</span>
                                                                    </div>
                                                                    <span className="text-danger">( 5BHK )</span>
                                                                </div>
                                                                <div className="popular-tags">
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">18 Beds</Link>
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">2 Bath</Link>
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">6,987sqft</Link>
                                                                </div>
                                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$3456</h4>
                                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Row>
                                                    <Col lg={4} md={6} sm={6} className="col-12">
                                                        <Card className="custom-card overflow-hidden card-style-2">
                                                            <span className="badge bg-danger tag-badge">40% Off</span>
                                                            <Link scroll={false} href="/realestate/details/">
                                                                <div className="featured-img">
                                                                    <img src="../../assets/images/realestate/properties/popular/4.png" className="w-auto" alt="..." />
                                                                </div>
                                                            </Link>
                                                            <div className="card-body p-3 position-relative">
                                                                <div className="min-w-fit-content float-end">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>  
                                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Jack Miller</Link></p>
                                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Villa House</a></h5>
                                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                                    <div className="fs-11 text-muted">
                                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>Chennai</span>
                                                                        <span>,</span>
                                                                        <span className="">24 Nov 2024</span>
                                                                    </div>
                                                                    <span className="text-danger">( 4BHK )</span>
                                                                </div>
                                                                <div className="popular-tags">
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">7 Beds</Link>
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">2 Bath</Link>
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">6,987sqft</Link>
                                                                </div>
                                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$2345</h4>
                                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    <Col lg={4} md={6} sm={6} className="col-12">
                                                        <Card className="custom-card overflow-hidden card-style-2">
                                                            <span className="badge bg-danger tag-badge">For Sale</span>
                                                            <div className="badge top-right-badge bg-warning text-fixed-white">
                                                                <div className="badge-icon"><i className="ti ti-star-filled fs-14"></i></div>
                                                                <div className="badge-text">Featured</div>
                                                            </div>
                                                            <Link scroll={false} href="/realestate/details/">
                                                                <div className="featured-img">
                                                                    <img src="../../assets/images/realestate/properties/popular/5.png" className="w-auto" alt="..." />
                                                                </div>
                                                            </Link>
                                                            <div className="card-body p-3 position-relative">
                                                                <div className="min-w-fit-content float-end">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>  
                                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Amanda Nanes</Link></p>
                                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Riddi Houses</a></h5>
                                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                                    <div className="fs-11 text-muted">
                                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                                        <span>,</span>
                                                                        <span className="">25 Feb 2024</span>
                                                                    </div>
                                                                    <span className="text-danger">( 5BHK )</span>
                                                                </div>
                                                                <div className="popular-tags">
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">5 Beds</Link>
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">3 Baths</Link>
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">4,987sqft</Link>
                                                                </div>
                                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$7653</h4>
                                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    <Col lg={4} md={6} sm={6} className="col-12">
                                                        <Card className="custom-card overflow-hidden card-style-2">
                                                            <span className="badge bg-danger tag-badge">20% Off</span>
                                                            <Link scroll={false} href="/realestate/details/">
                                                                <div className="featured-img">
                                                                    <img src="../../assets/images/realestate/properties/popular/6.png" className="w-auto" alt="..." />
                                                                </div>
                                                            </Link>
                                                            <div className="card-body p-3 position-relative">
                                                                <div className="min-w-fit-content float-end">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>  
                                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Joan Hunter</Link></p>
                                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">House nature</a></h5>
                                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                                    <div className="fs-11 text-muted">
                                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                                        <span>,</span>
                                                                        <span className="">16 Nov 2024</span>
                                                                    </div>
                                                                    <span className="text-danger">( 2BHK )</span>
                                                                </div>
                                                                <div className="popular-tags">
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">7 Beds</Link>
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">2 Bath</Link>
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">6,987sqft</Link>
                                                                </div>
                                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$1290</h4>
                                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Row>
                                                    <Col lg={4} md={6} sm={6} className="col-12">
                                                        <Card className="custom-card overflow-hidden card-style-2">
                                                            <span className="badge bg-warning tag-badge">For Rent</span>
                                                            <Link scroll={false} href="/realestate/details/">
                                                                <div className="featured-img">
                                                                    <img src="../../assets/images/realestate/properties/popular/7.png" className="w-auto" alt="..." />
                                                                </div>
                                                            </Link>
                                                            <div className="card-body p-3 position-relative">
                                                                <div className="min-w-fit-content float-end">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>  
                                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Hunter Joan</Link></p>
                                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Johse Houses</a></h5>
                                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                                    <div className="fs-11 text-muted">
                                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>Chennai</span>
                                                                        <span>,</span>
                                                                        <span className="">27 Nov 2024</span>
                                                                    </div>
                                                                    <span className="text-danger">( 2BHK )</span>
                                                                </div>
                                                                <div className="popular-tags">
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">8 Beds</Link>
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">4 Bath</Link>
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">8,987sqft</Link>
                                                                </div>
                                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$8765</h4>
                                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    <Col lg={4} md={6} sm={6} className="col-12">
                                                        <Card className="custom-card overflow-hidden card-style-2">
                                                            <span className="badge bg-danger tag-badge">For Sale</span>
                                                            <Link scroll={false} href="/realestate/details/">
                                                                <div className="featured-img">
                                                                    <img src="../../assets/images/realestate/properties/popular/8.png" className="w-auto" alt="..." />
                                                                </div>
                                                            </Link>
                                                            <div className="card-body p-3 position-relative">
                                                                <div className="min-w-fit-content float-end">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>  
                                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Charles Achilles</Link></p>
                                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Achlles Buildings</a></h5>
                                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                                    <div className="fs-11 text-muted">
                                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>Kerala</span>
                                                                        <span>,</span>
                                                                        <span className="">18 Mar 2024</span>
                                                                    </div>
                                                                    <span className="text-danger">( 3BHK )</span>
                                                                </div>
                                                                <div className="popular-tags">
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">4 Beds</Link>
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">2 Baths</Link>
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">1,987sqft</Link>
                                                                </div>
                                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$9853</h4>
                                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    <Col lg={4} md={6} sm={6} className="col-12">
                                                        <Card className="custom-card overflow-hidden card-style-2">
                                                            <div className="badge top-right-badge bg-warning text-fixed-white">
                                                                <div className="badge-icon"><i className="ti ti-star-filled fs-14"></i></div>
                                                                <div className="badge-text">Featured</div>
                                                            </div>
                                                            <Link scroll={false} href="/realestate/details/">
                                                                <div className="featured-img">
                                                                    <img src="../../assets/images/realestate/properties/popular/3.png" className="w-auto" alt="..." />
                                                                </div>
                                                            </Link>
                                                            <div className="card-body p-3 position-relative">
                                                                <div className="min-w-fit-content float-end">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>  
                                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Julia Camo</Link></p>
                                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Duplex House</a></h5>
                                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                                    <div className="fs-11 text-muted">
                                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>Hyderabad</span>
                                                                        <span>,</span>
                                                                        <span className="">05 Jan 2024</span>
                                                                    </div>
                                                                    <span className="text-danger">( 5BHK )</span>
                                                                </div>
                                                                <div className="popular-tags">
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">18 Beds</Link>
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">2 Bath</Link>
                                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">6,987sqft</Link>
                                                                </div>
                                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$3456</h4>
                                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                                </div>
                                                            </div>
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
                                                    <i className="bi bi-check-circle-fill text-success fs-14 ms-1"></i>
                                                </OverlayTrigger>
                                                </h5>
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
                                            <div className="text-center">
                                                <div className="d-flex">
                                                    <div className="input-group flex-grow-1">
                                                        <div className="input-group-text bg-white">
                                                            <i className="fe fe-phone"></i>
                                                        </div>
                                                        <Form.Control type="email" className="form-control" id="inputEmail1" placeholder="*** *** 7654" defaultValue="*** *** 7654"/>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="btn btn-wave btn-icon btn-primary ms-2">
                                                        <i className="ri-eye-line"></i>
                                                    </Link> 
                                                    <Link scroll={false} href="#!" className="btn btn-wave btn-icon btn-secondary ms-2">
                                                        <i className="ri-message-line"></i>
                                                    </Link> 
                                                </div>
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
                                            Get in touch with Seller
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="row gy-3">
                                            <Col xl={12}>
                                                <Form.Label htmlFor="vendor-username" className="fw-semibold">Username</Form.Label> 
                                                <Form.Control type="text"  id="vendor-username" placeholder="Vendor username" defaultValue="sprukotechnologies"/>
                                            </Col>
                                            <Col xl={12}>
                                                <Form.Label htmlFor="email-address" className="fw-semibold">Email Address</Form.Label>
                                                <Form.Control type="text"  id="email-address" placeholder="xyz@gmail.com" defaultValue="json@gmail.com"/>
                                            </Col>
                                            <Col xl={12}>
                                                <Form.Label htmlFor="phone-number2" className="fw-semibold">Mobile Number</Form.Label>
                                                <Form.Control type="text"  id="phone-number2" placeholder="*** *** ****" defaultValue="65432 76765"/>
                                            </Col>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="d-grid">
                                            <Link scroll={false} href="#!" className="btn btn-lg btn-danger">Get Contact Details</Link>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second" className="border-0 p-0" id="properties-tab" role="tabpanel">
                        <div className="row gy-3"> 
                            <Col lg={8}>                                  
                                <div className="d-flex gap-2 mb-4">
                                    <div className="custom-form-group flex-grow-1">
                                        <input type="text" className="form-control form-control-lg" placeholder="Search Here.." aria-label="Recipient's username"/>
                                        <div className="custom-form-btn">                                            
                                            <Button variant="" className="btn btn-primary border-0" type="button"><i className="bi bi-search me-2"></i> Search</Button>
                                        </div>
                                    </div>
                                    <div className="btn-group">
                                    <Dropdown>
                                        <Dropdown.Toggle  variant="" className="btn btn-outline-light border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Sort By
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <li><Dropdown.Item href="#!">Date Published</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Luxury Houses</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Land</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Flat</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                    </Dropdown>
                                    </div>
                                </div>
                                <Card className="custom-card">
                                    <Card.Body className="p-3">
                                        <Row className="align-items-start gy-2">
                                            <Col sm={3}>
                                                <div className="featured-img p-0">
                                                    <Link scroll={false} href="#!">
                                                        <img src="../../assets/images/realestate/properties/2.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                                    </Link>
                                                </div>
                                            </Col>
                                            <Col sm={9}>
                                                <div className="d-flex justify-content-between">
                                                    <div className="flex-grow-1 mb-3">
                                                        <span className="badge bg-warning-transparent mb-2">For Rent</span>
                                                        <h5 className="fw-semibold mb-1"><a href="#!">Duplex House</a></h5>
                                                        <div className="d-flex align-items-baseline mb-2">
                                                            <div className="me-2">
                                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Kerala</span>
                                                                <span>,</span>
                                                                <span className="">23 May 2024</span>
                                                            </div>
                                                            <span className="text-danger">( 2BHK )</span>
                                                        </div>
                                                        <div className="popular-tags">
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">10 Beds</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">14 Baths</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">9,987sqft</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">Lift</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">CCTV</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">Gym</Link>
                                                        </div>
                                                    </div>
                                                    <div className="min-w-fit-content">
                                                        <div className="">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>  
                                                            <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" aria-label="wishlist" data-bs-original-title="Add to wishlist"><i className="ti ti-heart fs-16"></i></Link>
                                                        </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h4 className="fw-semibold text-primary mb-0">$120</h4>
                                                    <div className="min-w-fit-content">
                                                
                                                        <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card">
                                    <Card.Body className="p-3">
                                        <div className="row align-items-start gy-2">
                                            <Col sm={3}>
                                                <div className="featured-img p-0">
                                                    <Link scroll={false} href="#!">
                                                        <img src="../../assets/images/realestate/properties/3.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                                    </Link>
                                                </div>
                                            </Col>
                                            <Col sm={9}>
                                                <div className="d-flex justify-content-between">
                                                    <div className="flex-grow-1 mb-3">
                                                        <span className="badge bg-danger-transparent mb-2">For Sale</span>
                                                        <h5 className="fw-semibold mb-1"><a href="#!">Land in Kondapur</a></h5>
                                                        <div className="d-flex align-items-baseline mb-2">
                                                            <div className="me-2">
                                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Hyderabad</span>
                                                                <span>,</span>
                                                                <span className="">16 Aug 2024</span>
                                                            </div>
                                                            <span className="text-danger">( 5BHk )</span>
                                                        </div>
                                                        <p className="mb-0">Aliquyam sed amet. Kasd sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore.</p>
                                                    </div>
                                                    <div className="min-w-fit-content">
                                                        <div className="">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>  
                                                            <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" aria-label="wishlist" data-bs-original-title="Add to wishlist"><i className="ti ti-heart fs-16"></i></Link>
                                                        </OverlayTrigger>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h4 className="fw-semibold text-primary mb-0">$150</h4>
                                                    <div className="min-w-fit-content">
                                                        <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card">
                                    <Card.Body className="p-3">
                                        <div className="row align-items-start gy-2">
                                            <Col sm={3}>
                                                <div className="featured-img p-0">
                                                    <Link scroll={false} href="#!">
                                                        <img src="../../assets/images/realestate/properties/5.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                                    </Link>
                                                </div>
                                            </Col>
                                            <Col sm={9}>
                                                <div className="d-flex justify-content-between">
                                                    <div className="flex-grow-1 mb-3">
                                                        <span className="badge bg-warning-transparent mb-2">For Rent</span>
                                                        <h5 className="fw-semibold mb-1"><a href="#!">Trauel Apartment</a></h5>
                                                        <div className="d-flex align-items-baseline mb-2">
                                                            <div className="me-2">
                                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Banglore</span>
                                                                <span>,</span>
                                                                <span className="">20 Dec 2024</span>
                                                            </div>
                                                            <span className="text-danger">( 3BHK )</span>
                                                        </div>
                                                        <div className="popular-tags">
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">10 Beds</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">14 Baths</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">9,987sqft</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">Lift</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">CCTV</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">Gym</Link>
                                                        </div>
                                                    </div>
                                                    <div className="min-w-fit-content">
                                                        <div className="">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>  
                                                            <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" aria-label="wishlist" data-bs-original-title="Add to wishlist"><i className="ti ti-heart fs-16"></i></Link>
                                                        </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h4 className="fw-semibold text-primary mb-0">$250</h4>
                                                    <div className="min-w-fit-content">
                                                        <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card">
                                    <Card.Body className="p-3">
                                        <div className="row align-items-start gy-2">
                                            <Col sm={3}>
                                                <div className="featured-img p-0">
                                                    <Link scroll={false} href="#!">
                                                        <img src="../../assets/images/realestate/properties/6.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                                    </Link>
                                                </div>
                                            </Col>
                                            <Col sm={9}>
                                                <div className="d-flex justify-content-between">
                                                    <div className="flex-grow-1 mb-3">
                                                        <span className="badge bg-danger-transparent mb-2">For Sale</span>
                                                        <h5 className="fw-semibold mb-1"><a href="#!">Achlles Buildings</a></h5>
                                                        <div className="d-flex align-items-baseline mb-2">
                                                            <div className="me-2">
                                                                <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                                <span>,</span>
                                                                <span className="">25 Feb 2024</span>
                                                            </div>
                                                            <span className="text-danger">( 5BHK )</span>
                                                        </div>
                                                        <div className="popular-tags">
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">10 Beds</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">14 Baths</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">9,987sqft</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">Lift</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">CCTV</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">Gym</Link>
                                                        </div>
                                                    </div>
                                                    <div className="min-w-fit-content">
                                                        <div className="">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>  
                                                            <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" aria-label="wishlist" data-bs-original-title="Add to wishlist"><i className="ti ti-heart fs-16"></i></Link>
                                                        </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h4 className="fw-semibold text-primary mb-0">$356</h4>
                                                    <div className="min-w-fit-content">
                                                        <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <nav aria-label="Page navigation" className="pagination-style-1 float-end">
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
                                            <div className="text-center">
                                                <div className="d-flex">
                                                    <div className="input-group flex-grow-1">
                                                        <div className="input-group-text bg-white">
                                                            <i className="fe fe-phone"></i>
                                                        </div>
                                                        <Form.Control type="email"  id="inputEmail2" placeholder="*** *** 7654" defaultValue="*** *** 7654"/>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="btn btn-wave btn-icon btn-primary ms-2">
                                                        <i className="ri-eye-line"></i>
                                                    </Link> 
                                                    <Link scroll={false} href="#!" className="btn btn-wave btn-icon btn-secondary ms-2">
                                                        <i className="ri-message-line"></i>
                                                    </Link> 
                                                </div>
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
                                            Get in touch with Seller
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="row gy-3">
                                            <Col xl={12}>
                                                <Form.Label htmlFor="vendor-username2" className="fw-semibold">Username</Form.Label> 
                                                <Form.Control type="text"  id="vendor-username2" placeholder="Vendor username" defaultValue="sprukotechnologies"/>
                                            </Col>
                                            <Col xl={12}>
                                                <Form.Label htmlFor="email-address2" className="fw-semibold">Email Address</Form.Label>
                                                <Form.Control type="text"  id="email-address2" placeholder="xyz@gmail.com" defaultValue="json@gmail.com"/>
                                            </Col>
                                            <Col xl={12}>
                                                <Form.Label htmlFor="phone-number" className="fw-semibold">Mobile Number</Form.Label>
                                                <Form.Control type="text"  id="phone-number" placeholder="*** *** ****" defaultValue="65432 76765"/>
                                            </Col>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="d-grid">
                                            <Link scroll={false} href="#!" className="btn btn-danger">Get Contact Details</Link>
                                        </div>
                                    </Card.Footer>
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
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add To Favourites</Tooltip>}>  
                                                <Link scroll={false} href="#!" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Favourites"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </OverlayTrigger>
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
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add To Favourites</Tooltip>}>  
                                                <Link scroll={false} href="#!" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Favourites"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </OverlayTrigger>
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
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add To Favourites</Tooltip>}>  
                                                <Link scroll={false} href="#!" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Favourites"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </OverlayTrigger>
                                            
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
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add To Favourites</Tooltip>}>  
                                                <Link scroll={false} href="#!" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Favourites"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </OverlayTrigger>
                                                
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
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add To Favourites</Tooltip>}>  
                                                <Link scroll={false} href="#!" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Favourites"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </OverlayTrigger>
                                            
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
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add To Favourites</Tooltip>}>  
                                                <Link scroll={false} href="#!" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Favourites"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </OverlayTrigger>
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
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add To Favourites</Tooltip>}>  
                                                <Link scroll={false} href="#!" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Favourites"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </OverlayTrigger>
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
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add To Favourites</Tooltip>}>  
                                                <Link scroll={false} href="#!" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Favourites"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </OverlayTrigger>
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
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add To Favourites</Tooltip>}>  
                                                <Link scroll={false} href="#!" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Favourites"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </OverlayTrigger>
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
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add To Favourites</Tooltip>}>  
                                                <Link scroll={false} href="#!" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Favourites"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </OverlayTrigger>
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
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add To Favourites</Tooltip>}>  
                                                <Link scroll={false} href="#!" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Favourites"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </OverlayTrigger>
                                                
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
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add To Favourites</Tooltip>}>  
                                                <Link scroll={false} href="#!" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Favourites"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </OverlayTrigger>
                                                
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
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add To Favourites</Tooltip>}>  
                                                <Link scroll={false} href="#!" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Favourites"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </OverlayTrigger>
                                                
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
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add To Favourites</Tooltip>}>  
                                                <Link scroll={false} href="#!" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Favourites"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </OverlayTrigger>
                                            
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
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add To Favourites</Tooltip>}>  
                                                <Link scroll={false} href="#!" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Favourites"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </OverlayTrigger>
                                            
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
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add To Favourites</Tooltip>}>  
                                                <Link scroll={false} href="#!" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Favourites"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </OverlayTrigger>
                                            
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
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add To Favourites</Tooltip>}>  
                                                <Link scroll={false} href="#!" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Favourites"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </OverlayTrigger>
                                            
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
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add To Favourites</Tooltip>}>  
                                                <Link scroll={false} href="#!" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Favourites"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </OverlayTrigger>
                                                
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
        {/* End:: Section-1 */}
        </Tab.Container>

        {/* Start:: Section-2 */}
        <section className="section bg-banner px-lg-0 px-4">
            <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                    <div className="mb-4">
                        <h3 className="fw-semibold mb-2 text-fixed-white">&#128073; Download our free mobile apps today</h3>
                    </div>
                    <h6 className="mb-4 op-9 text-fixed-white">Labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore..</h6>
                    <div className="btn-list">
                        <Link scroll={false} href="#!" className="btn btn-dark app-store">
                            <img src="../../assets/images/media/apps/play-store.png" alt="" />
                            Google Play
                        </Link>
                        <Link scroll={false} href="#!" className="btn btn-dark app-store">
                            <img src="../../assets/images/media/apps/apple-store.png" alt="" className="invert-1"/>
                            App Store
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        {/* End:: Section-2 */}
    </Fragment>
    )
};

export default Userprofile;