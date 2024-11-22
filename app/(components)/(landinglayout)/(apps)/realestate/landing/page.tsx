"use client"
import Link from "next/link";
import React, { Fragment } from "react";
import { Accordion, Button, Card, Col, Dropdown, Nav, OverlayTrigger, Row, Tab, Tooltip } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, } from "swiper/modules"; 
import Seo from "@/shared/layout-components/seo/seo";
const Landing = () => {
return ( 
    <Fragment>
        <Seo title={"Realestate-Landing"} />

    {/* Start:: Landing Banner */}
    <div className="landing-banner ad-search-container">
        <section className="section realestate-banner">
            <div className="container main-banner-container text-white">
                <div className="row justify-content-center">
                    <Col xl={9}>
                        <div className="">
                            <div className="text-center">
                                <p className="landing-banner-heading mb-3 text-fixed-white">Find Your Dream Property</p>
                                <p className="fs-15 mb-5 text-fixed-white">A great platform to buy, sell and rent your properties without any agent or commissions.</p>
                            </div>
                            <div className="custom-form-group">
                                <div className="input-group group-search d-xl-flex">
                                    <Dropdown className="category-dropdown-wrapper">
                                        <Dropdown.Toggle href="#!" className="btn btn-lg btn-wave btn-white shadow-none categorydropdown border-0 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ri-function-line me-2 text-primary"></i>Property Type
                                            </Dropdown.Toggle>
                                        <Dropdown.Menu role="menu">
                                            <li><Dropdown.Item href="#!">Deluxe Houses</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Apartments</Dropdown.Item></li>
                                            <li><Dropdown.Item active href="#!">Family House</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Modern Villa</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Tiny House</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Residential</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Flats</Dropdown.Item></li>
                                        </Dropdown.Menu>
                                    </Dropdown>    
                                    <div className="custom-form-group flex-grow-1">
                                        <input type="text" className="form-control form-control-lg shadow-none border-0 border-start" placeholder="Enter Your Keyword Here.." 
                                            aria-label="Recipient's username"/>
                                    </div>
                                    <div className="custom-form-group flex-grow-1">
                                        <input type="text" className="form-control form-control-lg border-0 shadow-none border-start" id="input-placeholder" placeholder="Search by Location..." />
                                        <div className="custom-form-btn">       
                                            <Link scroll={false} href="#!" className="gps-location"><i className="ti ti-current-location"></i></Link>                                     
                                            <Dropdown className="ad-dropdown">
                                                <Dropdown.Toggle variant="" href="#!" className="btn btn-wave text-default waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                    5km<i className="ri-arrow-down-s-line align-middle ms-1"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu role="menu">
                                                    <li><Dropdown.Item href="#!">0km</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#!">2km</Dropdown.Item></li>
                                                    <li><Dropdown.Item active href="#!">5km</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#!">10km</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#!">20km</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#!">50km</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#!">100km</Dropdown.Item></li>
                                                </Dropdown.Menu>
                                            </Dropdown>  
                                        </div>
                                    </div>  
                                    <Button variant="" className="btn btn-lg btn-secondary border-0 shadow-sm search-btn" type="button"><i className="bi bi-search"></i></Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </div>
            </div>
        </section> 
    </div>
    {/* End:: Landing Banner */}

    {/* Start:: Section-1 */}
    <section className="section">
        <div className="container">
            <Row>
                <div className="d-flex justify-content-between align-items-baseline mb-4 flex-wrap gap-2">
                    <div className="heading-section text-start">
                        <div className="heading-title">Top Categories</div>
                        <div className="heading-description">Browse Through The Top Categories</div>
                    </div>
                    <div className="min-w-fit-content">
                        <Link scroll={false} href="/realestate/search/" className="btn btn-wave btn-primary">
                            View All Categories <i className="bi bi-arrow-right"></i>
                        </Link>
                    </div>
                </div>
                <Col xxl={2} xl={2} lg={2} md={4} sm={4}  className="col-6">
                    <Link scroll={false} href="#!">
                        <div className="card custom-card overlay-card text-fixed-white">
                            <img src="../../assets/images/realestate/properties/2.png" className="card-img" alt="..." />
                            <div className="card-img-overlay d-flex flex-column p-0 over-content-bottom">
                                <div className="card-footer border-top-0">
                                    <h6 className="fw-semibold mb-0 text-fixed-white">Luxury Houses</h6>
                                    <span className="text-fixed-white">23 Properties</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col xxl={2} xl={2} lg={2} md={4} sm={4}  className="col-6">
                    <Link scroll={false} href="#!">
                        <div className="card custom-card overlay-card text-fixed-white">
                            <img src="../../assets/images/realestate/properties/1.png" className="card-img" alt="..." />
                            <div className="card-img-overlay d-flex flex-column p-0 over-content-bottom">
                                <div className="card-footer border-top-0">
                                    <h6 className="fw-semibold mb-0 text-fixed-white">Apartments</h6>
                                    <span className="text-fixed-white">45 Properties</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col xxl={2} xl={2} lg={2} md={4} sm={4}  className="col-6">
                    <Link scroll={false} href="#!">
                        <div className="card custom-card overlay-card text-fixed-white">
                            <img src="../../assets/images/realestate/properties/3.png" className="card-img" alt="..." />
                            <div className="card-img-overlay d-flex flex-column p-0 over-content-bottom">
                                <div className="card-footer border-top-0">
                                    <h6 className="fw-semibold mb-0 text-fixed-white">Land</h6>
                                    <span className="text-fixed-white">34 Properties</span>
                                </div>
                            </div>
                        </div>
                    </Link>    
                </Col>
                <Col xxl={2} xl={2} lg={2} md={4} sm={4}  className="col-6">
                    <Link scroll={false} href="#!">
                        <div className="card custom-card overlay-card text-fixed-white">
                            <img src="../../assets/images/realestate/properties/5.png" className="card-img" alt="..." />
                            <div className="card-img-overlay d-flex flex-column p-0 over-content-bottom">
                                <div className="card-footer border-top-0">
                                    <h6 className="fw-semibold mb-0 text-fixed-white">2BHK Houses</h6>
                                    <span className="text-fixed-white">04 Properties</span>
                                </div>
                            </div>
                        </div>
                    </Link>    
                </Col>
                <Col xxl={2} xl={2} lg={2} md={4} sm={4}  className="col-6">
                    <Link scroll={false} href="#!">
                        <div className="card custom-card overlay-card text-fixed-white">
                            <img src="../../assets/images/realestate/properties/6.png" className="card-img" alt="..." />
                            <div className="card-img-overlay d-flex flex-column p-0 over-content-bottom">
                                <div className="card-footer border-top-0">
                                    <h6 className="fw-semibold mb-0 text-fixed-white">3BHK Houses</h6>
                                    <span className="text-fixed-white">37 Properties</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col xxl={2} xl={2} lg={2} md={4} sm={4}  className="col-6">
                    <Link scroll={false} href="#!">
                        <div className="card custom-card overlay-card text-fixed-white">
                            <img src="../../assets/images/realestate/properties/4.png" className="card-img" alt="..." />
                            <div className="card-img-overlay d-flex flex-column p-0 over-content-bottom">
                                <div className="card-footer border-top-0">
                                    <h6 className="fw-semibold mb-0 text-fixed-white">Villa</h6>
                                    <span className="text-fixed-white">54 Properties</span>
                                </div>
                            </div>
                        </div>
                    </Link>    
                </Col>
            </Row>
        </div>
    </section>
    {/* End:: Section-1 */}

    {/* Start:: Section-2 */}
    <section className="section bg-white">
        <div className="container">
            <Row>
                <div className="col-xl-12 mb-4">
                    <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2">
                        <div className="heading-section text-start">
                            <div className="heading-title">Today Deals</div>
                            <div className="heading-description">Grab the today deals</div>
                        </div>
                        <div className="min-w-fit-content">
                            <Link scroll={false} href="/realestate/search/" className="text-primary fw-semibold fs-14">
                                <u>More Deals</u><i className="fe fe-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className="card card-style-4 card-style-4-primary">
                        <Card.Body>
                            <div className="d-flex align-items-start mb-3">
                                <div className="flex-grow-1">
                                    <span className="badge bg-danger mb-2">20% Off</span>
                                    <h5 className="">Save <span className="fw-semibold"> $100</span></h5>
                                </div>
                                <div className="min-w-fit-content">
                                    <Link scroll={false} href="/realestate/search/" className="btn btn-sm btn-primary">Explore <i className="ti ti-arrow-right ms-1"></i></Link>
                                </div>
                            </div>
                            <div className="deals-bundle deals-bundle1">
                                <span className="icon">
                                    <img src="../../assets/images/realestate/icons/1.png" alt="" className="img-fluid"/>   
                                </span>
                                <h4 className="fw-semibold mb-3 text-fixed-white">Luxury Homes</h4>  
                                <div className="row text-center justify-content-center">
                                    <div className="col-md-9">
                                        <div className="bg-white-transparent backdrop-blur p-2 rounded shadow-sm">
                                            <h6 className="mb-0 fw-semibold text-fixed-white">45k+ Properties</h6>
                                        </div>
                                    </div>
                                </div>                                      
                            </div>
                        </Card.Body>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className="card card-style-4 card-style-4-secondary">
                        <Card.Body>
                            <div className="d-flex align-items-start mb-3">
                                <div className="flex-grow-1">
                                    <span className="badge bg-danger mb-2">40% Off</span>
                                    <h5 className="">Save <span className="fw-semibold"> $300</span></h5>
                                </div>
                                <div className="min-w-fit-content">
                                    <Link scroll={false} href="/realestate/search/" className="btn btn-sm btn-secondary">Explore <i className="ti ti-arrow-right ms-1"></i></Link>
                                </div>
                            </div>
                            <div className="deals-bundle deals-bundle1">
                                <span className="icon">
                                    <img src="../../assets/images/realestate/icons/2.png" alt="" className="img-fluid"/>   
                                </span>
                                <h4 className="fw-semibold mb-3 text-fixed-white">Duplex Houses</h4>  
                                <div className="row text-center justify-content-center">
                                    <div className="col-md-9">
                                        <div className="bg-white-transparent backdrop-blur p-2 rounded shadow-sm">
                                            <h6 className="mb-0 fw-semibold text-fixed-white">25+ Properties</h6>
                                        </div>
                                    </div>
                                </div>                                      
                            </div>
                        </Card.Body>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className="card card-style-4 card-style-4-success">
                        <Card.Body>
                            <div className="d-flex align-items-start mb-3">
                                <div className="flex-grow-1">
                                    <span className="badge bg-danger mb-2">30% Off</span>
                                    <h5 className="">Save <span className="fw-semibold"> $200</span></h5>
                                </div>
                                <div className="min-w-fit-content">
                                    <Link scroll={false} href="/realestate/search/" className="btn btn-sm btn-success">Explore <i className="ti ti-arrow-right ms-1"></i></Link>
                                </div>
                            </div>
                            <div className="deals-bundle deals-bundle1">
                                <span className="icon">
                                    <img src="../../assets/images/realestate/icons/3.png" alt="" className="img-fluid"/>   
                                </span>
                                <h4 className="fw-semibold mb-3 text-fixed-white">Villas</h4>  
                                <div className="row text-center justify-content-center">
                                    <div className="col-md-9">
                                        <div className="bg-white-transparent backdrop-blur p-2 rounded shadow-sm">
                                            <h6 className="mb-0 fw-semibold text-fixed-white">23+ Properties</h6>
                                        </div>
                                    </div>
                                </div>                                      
                            </div>
                        </Card.Body>
                    </div>
                </div>
            </Row>
        </div>
    </section>
    {/* End:: Section-2 */}

    {/* Start:: Section-3 */}
    <section className="section">
        <div className="container">
            <div className="heading-section mb-4">
                <p className="fs-12 fw-semibold mb-1"><span className="landing-section-heading text-gradient">Properties</span></p>
                <div className="heading-title">Popular Properties</div>
                <div className="heading-description">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</div>
            </div>
            <Row>
                <Col lg={3} md={6} sm={6} className="col-12">
                    <div className="card custom-card overflow-hidden card-style-2">
                        <span className="badge bg-danger tag-badge">For Sale</span>
                        <Link scroll={false} href="/realestate/details/">
                            <div className="featured-img">
                                <img src="../../assets/images/realestate/properties/popular/1.png" className="" alt="..." />
                            </div>
                        </Link>
                        <div className="card-body p-3 position-relative">
                            <div className="min-w-fit-content float-end">
                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                            </OverlayTrigger>
                            </div>
                            <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Joan Hunter</Link></p>
                            <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">House with nature</a></h5>
                            <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                <div className="fs-11 text-muted">
                                    <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                    <span>,</span>
                                    <span className="">16 Nov 2024</span>
                                </div>
                                <span className="text-danger">( 2BHK )</span>
                            </div>
                            <div className="popular-tags">
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">7 Beds</Link>
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">2 Baths</Link>
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">6,987sqft</Link>
                            </div>
                            <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$1290</h4>
                                <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6} className="col-12">
                    <div className="card custom-card overflow-hidden card-style-2">
                        <span className="badge bg-warning tag-badge">For Rent</span>
                        <span className="badge bg-danger top-right-badge">20% Off</span>
                        <Link scroll={false} href="/realestate/details/">
                            <div className="featured-img">
                                <img src="../../assets/images/realestate/properties/popular/2.png" className="" alt="..." />
                            </div>
                        </Link>
                        <div className="card-body p-3 position-relative">
                            <div className="min-w-fit-content float-end">
                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                </OverlayTrigger>
                            </div>
                            <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Susana Sane</Link></p>
                            <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Trauel Apartment</a></h5>
                            <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                <div className="fs-11 text-muted">
                                    <span className=""><i className="bi bi-geo-alt me-1"></i>Banglore</span>
                                    <span>,</span>
                                    <span className="">20 Dec 2024</span>
                                </div>
                                <span className="text-danger">( 3BHK )</span>
                            </div>
                            <div className="popular-tags">
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">10 Beds</Link>
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">14 Baths</Link>
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">9,987sqft</Link>
                            </div>
                            <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$1345</h4>
                                <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6} className="col-12">
                    <div className="card custom-card overflow-hidden card-style-2">
                        <div className="badge top-right-badge bg-warning text-fixed-white">
                            <div className="badge-icon"><i className="ti ti-star-filled fs-14"></i></div>
                            <div className="badge-text">Featured</div>
                        </div>
                        <Link scroll={false} href="/realestate/details/">
                            <div className="featured-img">
                                <img src="../../assets/images/realestate/properties/popular/3.png" className="" alt="..." />
                            </div>
                        </Link>
                        <div className="card-body p-3 position-relative">
                            <div className="min-w-fit-content float-end">
                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
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
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">18 Beds</Link>
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">12 Baths</Link>
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">6,987sqft</Link>
                            </div>
                            <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$3456</h4>
                                <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6} className="col-12">
                    <div className="card custom-card overflow-hidden card-style-2">
                        <span className="badge bg-danger tag-badge">40% Off</span>
                        <Link scroll={false} href="/realestate/details/">
                            <div className="featured-img">
                                <img src="../../assets/images/realestate/properties/popular/4.png" className="" alt="..." />
                            </div>
                        </Link>
                        <div className="card-body p-3 position-relative">
                            <div className="min-w-fit-content float-end">
                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                </OverlayTrigger>
                            
                            </div>
                            <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Jack Miller</Link></p>
                            <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Villa Duplex House</a></h5>
                            <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                <div className="fs-11 text-muted">
                                    <span className=""><i className="bi bi-geo-alt me-1"></i>Chennai</span>
                                    <span>,</span>
                                    <span className="">24 Nov 2024</span>
                                </div>
                                <span className="text-danger">( 4BHK )</span>
                            </div>
                            <div className="popular-tags">
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">7 Beds</Link>
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">2 Baths</Link>
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">6,987sqft</Link>
                            </div>
                            <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$2345</h4>
                                <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6} className="col-12">
                    <div className="card custom-card overflow-hidden card-style-2">
                        <span className="badge bg-danger tag-badge">For Sale</span>
                        <div className="badge top-right-badge bg-warning text-fixed-white">
                            <div className="badge-icon"><i className="ti ti-star-filled fs-14"></i></div>
                            <div className="badge-text">Featured</div>
                        </div>
                        <Link scroll={false} href="/realestate/details/">
                            <div className="featured-img">
                                <img src="../../assets/images/realestate/properties/popular/5.png" className="" alt="..." />
                            </div>
                        </Link>
                        <div className="card-body p-3 position-relative">
                            <div className="min-w-fit-content float-end">
                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
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
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">5 Beds</Link>
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">3 Baths</Link>
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">4,987sqft</Link>
                            </div>
                            <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$7653</h4>
                                <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6} className="col-12">
                    <div className="card custom-card overflow-hidden card-style-2">
                        <span className="badge bg-danger tag-badge">20% Off</span>
                        <Link scroll={false} href="/realestate/details/">
                            <div className="featured-img">
                                <img src="../../assets/images/realestate/properties/popular/6.png" className="" alt="..." />
                            </div>
                        </Link>
                        <div className="card-body p-3 position-relative">
                            <div className="min-w-fit-content float-end">
                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                            </OverlayTrigger>
                            
                            </div>
                            <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Joan Hunter</Link></p>
                            <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">House with nature</a></h5>
                            <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                <div className="fs-11 text-muted">
                                    <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                    <span>,</span>
                                    <span className="">16 Nov 2024</span>
                                </div>
                                <span className="text-danger">( 2BHK )</span>
                            </div>
                            <div className="popular-tags">
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">7 Beds</Link>
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">2 Baths</Link>
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">6,987sqft</Link>
                            </div>
                            <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$1290</h4>
                                <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6} className="col-12">
                    <div className="card custom-card overflow-hidden card-style-2">
                        <span className="badge bg-warning tag-badge">For Rent</span>
                        <Link scroll={false} href="/realestate/details/">
                            <div className="featured-img">
                                <img src="../../assets/images/realestate/properties/popular/7.png" className="" alt="..." />
                            </div>
                        </Link>
                        <div className="card-body p-3 position-relative">
                            <div className="min-w-fit-content float-end">
                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
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
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">8 Beds</Link>
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">4 Baths</Link>
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">8,987sqft</Link>
                            </div>
                            <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$8765</h4>
                                <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6} className="col-12">
                    <div className="card custom-card overflow-hidden card-style-2">
                        <span className="badge bg-danger tag-badge">For Sale</span>
                        <Link scroll={false} href="/realestate/details/">
                            <div className="featured-img">
                                <img src="../../assets/images/realestate/properties/popular/8.png" className="" alt="..." />
                            </div>
                        </Link>
                        <div className="card-body p-3 position-relative">
                            <div className="min-w-fit-content float-end">
                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
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
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">4 Beds</Link>
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">2 Baths</Link>
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">1,987sqft</Link>
                            </div>
                            <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$9853</h4>
                                <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </section>
    {/* End:: Section-3 */}

    {/* Start:: Section-4 */}
    <section className="section bg-banner-2 text-white">
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
                        <input type="text" className="form-control rounded-pill form-control-lg" placeholder="Enter Your Email.." aria-label="Recipient's username" />
                        <Button variant="" className="btn btn-danger border-0 custom-form-btn rounded-pill" type="button">Subscribe</Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* End:: Section-4 */}

    {/* Start:: Section-5 */}
    <section className="section bg-white">
        <div className="container">
            <Row>
                <Col xl={12} className="mb-4">
                    <div className="d-flex justify-content-between align-items-baseline flex-wrap">
                        <div className="heading-section text-start">
                            <div className="heading-title">Newest Arrivals</div>
                            <div className="heading-description">View the Newest Properties</div>
                        </div>
                        <div className="min-w-fit-content">
                            <Link scroll={false} href="#!" className="text-primary fw-semibold fs-14">
                                <u>View All</u><i className="fe fe-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col xl={4} lg={4} md={6} sm={6} className="col-12">
                    <Card className="custom-card">
                        <div className="card-body p-3">
                            <Row>
                                <div className="col-4">
                                    <div className="img-box-1 bg-light border">
                                        <Link scroll={false} href="#!">
                                            <img src="../../assets/images/realestate/properties/2.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-8 my-auto">
                                    <div className="mb-3">
                                        <h6 className="fw-semibold mb-1"><Link scroll={false} href="#!">Duplex House</Link></h6>
                                        <div className="d-flex align-items-baseline fs-11 flex-wrap gap-2">
                                            <div className="fs-11 text-muted">
                                                <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                <span>,</span>
                                                <span className="">25 Feb 2024</span>
                                            </div>
                                            <span className="text-danger">( 5BHK )</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                        <h5 className="fw-semibold mb-0">$120</h5>
                                        <div className="min-w-fit-content">
                                            <Link scroll={false} href="#!" className="btn btn-primary border-0"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </Card>
                </Col>
                <Col xl={4} lg={4} md={6} sm={6} className="col-12">
                    <Card className="custom-card">
                        <div className="card-body p-3"> 
                            <Row>
                                <div className="col-4">
                                    <div className="img-box-1 bg-light border">
                                        <Link scroll={false} href="#!">
                                            <img src="../../assets/images/realestate/properties/4.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-8 my-auto">
                                    <div className="mb-3">
                                        <h6 className="fw-semibold mb-1"><Link scroll={false} href="#!">Nature House</Link></h6>
                                        <div className="d-flex align-items-baseline fs-11 flex-wrap gap-2">
                                            <div className="fs-11 text-muted">
                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Chennai</span>
                                                <span>,</span>
                                                <span className="">16 Mar 2024</span>
                                            </div>
                                            <span className="text-danger">( 2BHK )</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                        <h5 className="fw-semibold mb-0">$234</h5>
                                        <div className="min-w-fit-content">
                                            <Link scroll={false} href="#!" className="btn btn-primary border-0"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </Card>
                </Col>
                <Col xl={4} lg={4} md={6} sm={6} className="col-12">
                    <Card className="custom-card">
                        <div className="card-body p-3"> 
                            <Row>
                                <div className="col-4">
                                    <div className="img-box-1 bg-light border">
                                        <Link scroll={false} href="#!">
                                            <img src="../../assets/images/realestate/properties/5.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-8 my-auto">
                                    <div className="mb-3">
                                        <h6 className="fw-semibold mb-1"><Link scroll={false} href="#!">Sidh Houses</Link></h6>
                                        <div className="d-flex align-items-baseline fs-11 flex-wrap gap-2">
                                            <div className="fs-11 text-muted">
                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Banglore</span>
                                                <span>,</span>
                                                <span className="">17 Jan 2024</span>
                                            </div>
                                            <span className="text-danger">( 3BHK )</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                        <h5 className="fw-semibold mb-0">$654</h5>
                                        <div className="min-w-fit-content">
                                            <Link scroll={false} href="#!" className="btn btn-primary border-0"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </Card>
                </Col>
                <Col xl={4} lg={4} md={6} sm={6} className="col-12">
                    <Card className="custom-card">
                        <div className="card-body p-3"> 
                            <Row>
                                <div className="col-4">
                                    <div className="img-box-1 bg-light border">
                                        <Link scroll={false} href="#!">
                                            <img src="../../assets/images/realestate/properties/6.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-8 my-auto">
                                    <div className="mb-3">
                                        <h6 className="fw-semibold mb-1"><Link scroll={false} href="#!">Riddi Houses</Link></h6>
                                        <div className="d-flex align-items-baseline fs-11 flex-wrap gap-2">
                                            <div className="fs-11 text-muted">
                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Kerala</span>
                                                <span>,</span>
                                                <span className="">23 May 2024</span>
                                            </div>
                                            <span className="text-danger">( 2BHK )</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                        <h5 className="fw-semibold mb-0">$543</h5>
                                        <div className="min-w-fit-content">
                                            <Link scroll={false} href="#!" className="btn btn-primary border-0"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </Card>
                </Col>
                <Col xl={4} lg={4} md={6} sm={6} className="col-12">
                    <Card className="custom-card">
                        <div className="card-body p-3"> 
                            <Row>
                                <div className="col-4">
                                    <div className="img-box-1 bg-light border">
                                        <Link scroll={false} href="#!">
                                            <img src="../../assets/images/realestate/properties/1.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-8 my-auto">
                                    <div className="mb-3">
                                        <h6 className="fw-semibold mb-1"><Link scroll={false} href="#!">Achlles Buildings</Link></h6>
                                        <div className="d-flex align-items-baseline fs-11 flex-wrap gap-2">
                                            <div className="fs-11 text-muted">
                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Hyderabad</span>
                                                <span>,</span>
                                                <span className="">16 Aug 2024</span>
                                            </div>
                                            <span className="text-danger">( 5BHk )</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                        <h5 className="fw-semibold mb-0">$654</h5>
                                        <div className="min-w-fit-content">
                                            <Link scroll={false} href="#!" className="btn btn-primary border-0"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </Card>
                </Col>
                <Col xl={4} lg={4} md={6} sm={6} className="col-12">
                    <Card className="custom-card">
                        <Card.Body className="p-3"> 
                            <Row>
                                <div className="col-4">
                                    <div className="img-box-1 bg-light border">
                                        <Link scroll={false} href="#!">
                                            <img src="../../assets/images/realestate/properties/2.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-8 my-auto">
                                    <div className="mb-3">
                                        <h6 className="fw-semibold mb-1"><Link scroll={false} href="#!">Arshya Houses</Link></h6>
                                        <div className="d-flex align-items-baseline fs-11 flex-wrap gap-2">
                                            <div className="fs-11 text-muted">
                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Nellore</span>
                                                <span>,</span>
                                                <span className="">17 Sep 2024</span>
                                            </div>
                                            <span className="text-danger">( 3BHk )</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                        <h5 className="fw-semibold mb-0">$432</h5>
                                        <div className="min-w-fit-content">
                                            <Link scroll={false} href="#!" className="btn btn-primary border-0"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    </section>
    {/* End:: Section-5 */}

    {/* Start:: Section-6 */}
    <section className="section bg-light">
        <div className="container text-center">
            <p className="fs-12 fw-semibold mb-1"><span className="landing-section-heading text-gradient">Steps</span></p>
            <div className="heading-title">How it works ?</div>
            <div className="row justify-content-center">
                <Col xl={6}>
                    <p className="text-muted fs-15 mb-5 fw-normal">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </Col>
            </div>
            <div className="row text-start">
                <Col md={4} className="col-12">
                    <Card className="custom-card border">
                        <Card.Body className="rounded p-4">
                            <div className="main-card-icon primary mb-3">
                                <div className="avatar avatar-lg bg-primary-transparent border border-primary border-opacity-10">
                                    <div className="avatar avatar-sm svg-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path
                                        //  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;text-decoration-color:#000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none"
                                        d="m12.5 4.9999251c-2.4670541 0-4.5 2.0329459-4.5 4.5v45c0 2.4670541 2.0329521 4.4999916 4.5 4.5h22a1.5001499 1.5001499 0 1 0 0-3h-22c-0.85695207-2.92e-6 -1.5-0.64305409-1.5-1.5v-45c0-0.85694591 0.64305409-1.5 1.5-1.5h33c0.85694591 0 1.5 0.64305409 1.5 1.5v18a1.5001499 1.5001499 0 1 0 3 0v-18c0-2.4670541-2.0329459-4.5-4.5-4.5z" color="#000"/><rect width="20" height="3" x="19.021" y="20" rx="1.5" ry="1.5"/><rect width="20" height="3" x="19.021" y="26" rx="1.5" ry="1.5"/><rect width="12" height="3" x="19.021" y="32" rx="1.5" ry="1.5"/><path 
                                        //   style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;text-decoration-color:#000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none"
                                        d="m54.890477 30.837319c-2.1365316-1.2335271-4.9135872-0.48941726-6.1471143 1.6471143l-6.9990234 12.122664a1.50015 1.50015 0 1 0 2.5980762 1.5l6.9990234-12.122664c0.42847293-0.74213689 1.3069012-0.97751103 2.0490381-0.54903811l0.8660254 0.5c0.7421369 0.42847293 0.97751103 1.3069012 0.54903811 2.0490381l-10.717773 18.563728-2.8746289 0.97900337-0.58947268-2.9790034 1.21875-2.1109369a1.50015 1.50015 0 1 0-2.5980762-1.5l-1.5 2.5980762a1.50015 1.50015 0 0 0-0.17276402 1.0414236l1.0310889 5.2141016a1.50015 1.50015 0 0 0 1.955323 1.1289062l5.0310889-1.7141016a1.50015 1.50015 0 0 0 0.81551724-0.6703298l10.999023-19.050867c1.2335271-2.1365316 0.48941727-4.9135872-1.6471143-6.1471143z" color="#000"/></svg>
                                    </div>
                                </div>
                            </div>
                            <h5 className="fw-semibold">
                                Evaluate Property
                            </h5>
                            <p className="op-8">
                                Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea.
                            </p>
                            <Link scroll={false} className="mx-1 text-primary fw-semibold" href="#!">Register Now<i className="ri-arrow-right-s-line align-middle rtl-rotate"></i></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="col-12">
                    <Card className="custom-card border">
                        <Card.Body className="rounded p-4">
                            <div className="main-card-icon secondary mb-3">
                                <div className="avatar avatar-lg bg-secondary-transparent border border-secondary border-opacity-10">
                                    <div className="avatar avatar-sm svg-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path 
                                        // style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;text-decoration-color:#000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none" 
                                        d="M25.5 32c-9.1150542 0-16.5 7.3849458-16.5 16.5v6c0 2.4670542 2.0329458 4.5 4.5 4.5h18a1.50015 1.50015 0 1 0 0-3h-18c-.85694585 0-1.5-.64305415-1.5-1.5v-6c0-7.5049458 5.9950542-13.5 13.5-13.5h13c1.3451063 0 2.6376951.19436413 3.8574219.5546875a1.50015 1.50015 0 1 0 .84960937-2.8769531c-1.4925263-.44091195-3.0733463-.67773438-4.7070312-.67773438zM32 5c-6.60965 0-12 5.39035-12 12s5.39035 12 12 12 12-5.39035 12-12-5.39035-12-12-12zm0 3c4.9883297 0 9 4.0116703 9 9s-4.0116703 9-9 9-9-4.0116703-9-9 4.0116703-9 9-9z" color="#000"/><path 
                                        // style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;text-decoration-color:#000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none"
                                        d="m45 37c-6.60965 0-12 5.39035-12 12s5.39035 12 12 12c2.1925542 0 4.343574-0.60010252 6.21875-1.7363281a1.5002912 1.5002912 0 1 0-1.5546875-2.5664063c-1.4065214 0.85225367-3.0194839 1.3027344-4.6640625 1.3027344-4.9883297 0-9-4.0116703-9-9s4.0116703-9 9-9 9 4.0116703 9 9c0 1.644402-0.45065351 3.2576429-1.3027344 4.6640625a1.5002912 1.5002912 0 1 0 2.5664063 1.5546875c1.1359953-1.8750403 1.7363281-4.0264313 1.7363281-6.21875 0-6.60965-5.39035-12-12-12z" color="#000"/><path d="m45 43.999848c-0.831 0-1.5 0.669-1.5 1.5v2h-2c-0.831 0-1.5 0.669-1.5 1.5s0.669 1.5 1.5 1.5h2v2c0 0.831 0.669 1.5 1.5 1.5 0.83100001 0 1.5-0.669 1.5-1.5v-2h2c0.83100001 0 1.5-0.669 1.5-1.5s-0.66899999-1.5-1.5-1.5h-2v-2c0-0.831-0.66899999-1.5-1.5-1.5z"/></svg>
                                    </div>
                                </div>
                            </div>
                            <h5 className="fw-semibold">
                                Meeting with Agent
                            </h5>
                            <p className="op-8">
                                Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea.
                            </p>
                            <Link scroll={false} className="mx-1 text-secondary fw-semibold" href="#!">Complete Profile<i className="ri-arrow-right-s-line align-middle rtl-rotate"></i></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="col-12">
                    <Card className="custom-card border">
                        <Card.Body className="rounded p-4">
                            <div className="main-card-icon success mb-3">
                                <div className="avatar avatar-lg bg-success-transparent border border-success border-opacity-10">
                                    <div className="avatar avatar-sm svg-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 64 64" viewBox="0 0 64 64"><path 
                                        // style="fo[nt-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;text-decoration-color:#000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none"
                                        d="m24.5 8c-2.4675144 0-4.5 2.0324856-4.5 4.5v3.5h-10.5c-2.4675142 0-4.5 2.0324854-4.5 4.5v4.0625c0 0.95311676 0.30189465 1.892559 0.875 2.6679688 2.2780134 3.0821421 10.711221 12.769531 26.125 12.769531s23.846986-9.6873908 26.125-12.769531c0.57310844-0.77541208 0.875-1.7148549 0.875-2.6679688v-4.0625c0-2.4675155-2.0324866-4.5-4.5-4.5h-10.5v-3.5c0-2.4675155-2.0324866-4.5-4.5-4.5zm0 3h15c0.84619198 0 1.5 0.65380634 1.5 1.5v5a1.50015 1.50015 0 0 0 1.5 1.5h12c0.84619198 0 1.5 0.65380634 1.5 1.5v4.0625c0 0.32871995-0.0983236 0.6293397-0.28710938 0.88476562-1.9720162 2.6681266-9.555297 11.552734-23.712891 11.552734s-21.740877-8.8846093-23.712891-11.552734c-0.18878705-0.25542828-0.28710938-0.55604878-0.28710938-0.88476562v-4.0625c0-0.84619457 0.65380578-1.5 1.5-1.5h28a1.50015 1.50015 0 1 0 0-3h-14.5v-3.5c0-0.84619481 0.65380519-1.5 1.5-1.5z" color="#000"/><path 
                                        //  style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;text-decoration-color:#000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none"
                                        d="m6.4765625 30.978516a1.50015 1.50015 0 0 0-1.4765625 1.5214844v19c0 2.4670537 2.0329452 4.5 4.5 4.5h45c2.4670543 0 4.5-2.0329457 4.5-4.5v-19a1.50015 1.50015 0 1 0-3 0v19c0 0.85694314-0.64305686 1.5-1.5 1.5h-45c-0.85694462 0-1.5-0.64305626-1.5-1.5v-19a1.50015 1.50015 0 0 0-1.5234375-1.5214844z" color="#000"/></svg>
                                    </div>
                                </div>
                            </div>
                            <h5 className="fw-semibold">
                                Close the Deal
                            </h5>
                            <p className="op-8">
                                Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea.
                            </p>
                            <Link scroll={false} className="mx-1 text-success fw-semibold" href="#!">Apply Now<i className="ri-arrow-right-s-line align-middle rtl-rotate"></i></Link>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </div>
    </section>
    {/* End:: Section-6 */}

    {/* Start:: Section-7 */}
    <section className="section bg-primary">
        <div className="container">
            <div className="row justify-content-center text-center mb-4 text-fixed-white">
                <Col xl={6}>
                    <h3 className="fw-semibold mb-2 text-fixed-white">Explore our services</h3>
                    <p className="text-fixed-white">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </Col>
            </div>
            <Row>
                <Col lg={3} md={6} sm={6} className="">
                    <Card className="feature-style">
                        <Card.Body>
                            <Link scroll={false} href="#!" className="open-link"></Link>
                            <div className="feature-style-icon bg-primary-transparent">
                                <span className="svg-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g data-name="Working-Home-Online-Work From Home-Computer"><path d="M28 29h2v2h-2zM34 29h2v2h-2z"/><circle cx="32" cy="52" r="2"/><path d="M60.99 25.89h-.01L33.93 3.31a2.981 2.981 0 0 0-3.85 0L3.1 25.95a3.071 3.071 0 0 0-.74 3.89 2.976 2.976 0 0 0 2.08 1.43 2.921 2.921 0 0 0 .5.05 2.986 2.986 0 0 0 1.93-.71l4.13-3.5V61a1 1 0 0 0 1 1h40a1 1 0 0 0 1-1V27.01l4.13 3.48a3 3 0 0 0 3.86-4.6ZM40 59a1 1 0 0 1-1 1H25a1 1 0 0 1-1-1v-1h16Zm.09-3H23.9l-.69-6.9a1.022 1.022 0 0 1 .26-.77.985.985 0 0 1 .74-.33h15.58a.985.985 0 0 1 .74.33 1.022 1.022 0 0 1 .26.77ZM45 60h-3.18a3 3 0 0 0 .18-1v-1.95l.78-7.75a3.009 3.009 0 0 0-.77-2.31 2.97 2.97 0 0 0-2.22-.99H24.21a2.97 2.97 0 0 0-2.22.99 3.009 3.009 0 0 0-.77 2.31l.78 7.75V59a3 3 0 0 0 .18 1H19V49.87a5.018 5.018 0 0 1 2.93-4.56l6.76-3.07a3.993 3.993 0 0 0 6.62 0l6.76 3.07A5.018 5.018 0 0 1 45 49.87ZM24.07 31.99c-.02 0-.05.01-.07.01a2 2 0 0 1 0-4v3a7.954 7.954 0 0 0 .07.99ZM24 26a4.091 4.091 0 0 0-1 .14V26a9 9 0 0 1 18 0v.14a4.091 4.091 0 0 0-1-.14c-.02 0-.05.01-.07.01a7.99 7.99 0 0 0-15.86 0c-.02 0-.05-.01-.07-.01Zm18 4a2.006 2.006 0 0 1-2 2c-.02 0-.05-.01-.07-.01A7.954 7.954 0 0 0 40 31v-3a2.006 2.006 0 0 1 2 2Zm-4.09-4h-.5l-1.7-1.71a1 1 0 0 0-1.16-.18L30.76 26h-4.67a5.993 5.993 0 0 1 11.82 0ZM26 28h5a1 1 0 0 0 .45-.11l3.35-1.67 1.49 1.49A1.033 1.033 0 0 0 37 28h1v3a6 6 0 0 1-12 0Zm8 10.74V40a2 2 0 0 1-4 0v-1.26a7.822 7.822 0 0 0 4 0ZM51 60h-4V49.87a7.025 7.025 0 0 0-4.11-6.38L36 40.36v-2.44a8.066 8.066 0 0 0 3.43-3.97A5.481 5.481 0 0 0 40 34a3.981 3.981 0 0 0 3-6.62V26a11 11 0 1 0-22 0v1.38A3.981 3.981 0 0 0 24 34a5.481 5.481 0 0 0 .57-.05A8.066 8.066 0 0 0 28 37.92v2.45l-6.89 3.12A7.025 7.025 0 0 0 17 49.87V60h-4V25.42L32 9.31l19 16.01Zm8.82-31.17a.988.988 0 0 1-1.4.13L32.64 7.24a.987.987 0 0 0-1.29 0L5.58 29.08a.986.986 0 0 1-.81.22 1 1 0 0 1-.7-.49 1.083 1.083 0 0 1 .31-1.33L31.36 4.84a1.025 1.025 0 0 1 .64-.23 1 1 0 0 1 .64.23L59.7 27.43a.987.987 0 0 1 .12 1.4Z"/></g></svg>
                                </span>
                            </div>
                            <h5 className="mb-1 fw-semibold">Buying a Property</h5>
                            <p className="text-muted">Neque porro quisquam est, qui dolorem ipsum.</p>
                            <Link scroll={false} className="text-primary fw-semibold" href="#!">Explore Now<i className="ri-arrow-right-s-line align-middle rtl-rotate"></i></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} md={6} sm={6} className="">
                    <Card className="feature-style">
                        <Card.Body>
                            <Link scroll={false} href="#!" className="open-link"></Link>
                            <div className="feature-style-icon bg-primary-transparent">
                                <span className="svg-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M45 30h2v2h-2zM41 30h2v2h-2zM37 30h2v2h-2z"/><path d="M62 13v-2H42V9c0-3.859-3.141-7-7-7h-6c-3.859 0-7 3.141-7 7v2h-8a1 1 0 0 0-1 1v19c0 .633.13 1.234.346 1.792L2.75 35.532a1 1 0 0 0 0 1.936L16 40.894V46H5v2h11v2H8v2h8v2h-5v2h5.839l14.845 4.948a1.006 1.006 0 0 0 .632 0l15-5A.998.998 0 0 0 48 55V40.894l10-2.586v14.455l-1.895 3.789a1 1 0 0 0 0 .895l2 4a1.001 1.001 0 0 0 1.79 0l2-4a1 1 0 0 0 0-.895L60 52.764V37.791l1.25-.323a1 1 0 0 0 0-1.936l-10.596-2.741A4.938 4.938 0 0 0 51 31V21h5v-2h-5v-2h8v-2h-8v-2h11zm-3 45.764L58.118 57 59 55.236 59.882 57 59 58.764zM24 9c0-2.757 2.243-5 5-5h6c2.757 0 5 2.243 5 5v2h-2V9c0-1.654-1.346-3-3-3h-6c-1.654 0-3 1.346-3 3v2h-2V9zm12 2h-8V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2zm-21 2h34v4c0 1.654-1.346 3-3 3H36v-3a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v3H18c-1.654 0-3-1.346-3-3v-4zm34 18c0 .68-.236 1.3-.618 1.804-.006.007-.015.012-.021.02a3.076 3.076 0 0 1-.497.508 3.016 3.016 0 0 1-.5.325c-.03.015-.058.034-.088.048-.161.078-.33.135-.503.182-.042.011-.081.029-.123.038A2.985 2.985 0 0 1 46 34H18c-.222 0-.439-.028-.651-.076-.043-.009-.082-.027-.123-.038a2.866 2.866 0 0 1-.502-.182c-.031-.014-.059-.033-.089-.048a3.002 3.002 0 0 1-.996-.832c-.006-.008-.014-.012-.021-.02A2.975 2.975 0 0 1 15 31V20.974A4.948 4.948 0 0 0 18 22h1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3h14v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3h1c1.13 0 2.162-.391 3-1.026V31zm-28-9h2v2h-2v-2zm13-2h-4v-2h4v2zm7 2h2v2h-2v-2zm5 32.279-14 4.667-14-4.667V41.412l13.75 3.556a1.008 1.008 0 0 0 .5 0L46 41.412v12.867zM32 42.967 6.993 36.5l7.504-1.941c.457.45.998.811 1.599 1.06.111.046.23.069.343.107.19.063.376.134.575.174.321.065.651.1.986.1h28c.335 0 .665-.035.986-.1.199-.04.385-.112.575-.174.114-.038.233-.061.343-.107a5 5 0 0 0 1.599-1.06l7.504 1.941L32 42.967z"/></svg>
                                </span>
                            </div>
                            <h5 className="mb-1 fw-semibold">Leasing a Property</h5>
                            <p className="text-muted">Neque porro quisquam est, qui dolorem ipsum.</p>
                            <Link scroll={false} className="text-primary fw-semibold" href="#!">Explore Now<i className="ri-arrow-right-s-line align-middle rtl-rotate"></i></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} md={6} sm={6} className="">
                    <Card className="feature-style">
                        <Card.Body>
                            <Link scroll={false} href="#!" className="open-link"></Link>
                            <div className="feature-style-icon bg-primary-transparent">
                                <span className="svg-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66"><g data-name="Layer 2"><path d="M66 40.88a13 13 0 0 0-25.91-1.45c-1.51-.19-3.18-.34-5-.46v-2.09a15.25 15.25 0 0 0 5.42-8.51 5.34 5.34 0 0 0 3.21-4.91c0-2.18-.68-3.89-1.78-4.67 0-7.2-.63-11.65-3.24-14.25C34.15 0 23.87 4.17 20.75.36A1 1 0 0 0 19.4.18C13 4.7 10.73 13 12.92 19.3a6.55 6.55 0 0 0-1.21 4.15 5.33 5.33 0 0 0 3.21 4.92 15.26 15.26 0 0 0 5.44 8.53V39C13.3 39.42 0 40.23 0 53.93V65a1 1 0 0 0 1 1h53.44a1 1 0 0 0 1-1V53.64A13 13 0 0 0 66 40.88ZM44.75 58.36V64h-16V52.82l6-11.87c8.62.52 16.9 1.44 18.57 10.85h-2.01a6.56 6.56 0 0 0-6.56 6.56Zm-17-8-2.3-4.59.92-2.92h2.77l.86 2.89ZM19.9 2.3c4.61 3.49 13.92.19 17.4 3.7 2.19 2.18 2.64 6.61 2.65 13.5l-.39.64c-.28-2.22-.45-3.37-.61-4v-.06c-.86-5.94-7.47-6.07-12.59-2.41-2.89 1.8-5.67 1.44-8.73-1.12a1 1 0 0 0-1.63.65l-.78 6.48C12.86 14.76 14.18 6.82 19.9 2.3Zm-3.16 25.05a1 1 0 0 0-.89-.79 3.2 3.2 0 0 1-2.14-3.1 6.59 6.59 0 0 1 .29-1.94A5.18 5.18 0 0 0 15.37 23a1 1 0 0 0 1.54-.72l.86-7.13a8.42 8.42 0 0 0 9.69.19c3.63-2.59 8.85-3.46 9.5 1 0 .27.72 4.83 1 6.86a1 1 0 0 0 1.85.4l1.52-2.5a5.67 5.67 0 0 1 .44 2.36 3.23 3.23 0 0 1-2.15 3.1 1 1 0 0 0-.88.79c-1.25 5.95-5.77 10.1-11 10.1s-9.74-4.15-11-10.1Zm11 12.1a11.8 11.8 0 0 0 5.38-1.3v1.47l-1.78 3.56-.53-1.65a1 1 0 0 0-.95-.7h-4.25a1 1 0 0 0-1 .7l-.52 1.66-1.77-3.52v-1.51a11.87 11.87 0 0 0 5.4 1.29Zm-7 1.5 5.95 11.84V64h-16v-5.64a6.56 6.56 0 0 0-6.56-6.56H2.19C3.86 42.37 12.24 41.46 20.76 41ZM2 53.93a.57.57 0 0 1 0-.13h2.13a4.56 4.56 0 0 1 4.56 4.56V64H2ZM53.44 64h-6.69v-5.64a4.56 4.56 0 0 1 4.56-4.56h2.12c.01.69.01-2.66.01 10.2Zm1.81-12.35c-1-6.06-5-10.62-13.18-11.94a11 11 0 1 1 13.18 11.94Z"/><path d="M57.54 39.87H54v-5.25a1 1 0 0 0-2 0v6.25a1 1 0 0 0 1 1h4.54a1 1 0 0 0 0-2Z"/></g></svg>
                                </span>
                            </div>
                            <h5 className="mb-1 fw-semibold">Buy Plots/Land</h5>
                            <p className="text-muted">Neque porro quisquam est, qui dolorem ipsum.</p>
                            <Link scroll={false} className="text-primary fw-semibold" href="#!">Explore Now<i className="ri-arrow-right-s-line align-middle rtl-rotate"></i></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} md={6} sm={6} className="">
                    <Card className="feature-style">
                        <Card.Body>
                            <Link scroll={false} href="#!" className="open-link"></Link>
                            <div className="feature-style-icon bg-primary-transparent">
                                <span className="svg-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M21 28h-5v-.93a1 1 0 0 1 .445-.832l3.774-2.515A3.993 3.993 0 0 0 22 20.4V20a4 4 0 0 0-8 0 1 1 0 0 0 2 0 2 2 0 0 1 4 0v.4a2 2 0 0 1-.891 1.664l-3.773 2.515A2.993 2.993 0 0 0 14 27.07V29a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2Z"/><path d="M31 26h-1v-9a1 1 0 0 0-1.857-.515l-6 10A1 1 0 0 0 23 28h5v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2zm-3 0h-3.233L28 20.61zm15 5a1 1 0 0 0 1-1v-1a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1zm6 0a1 1 0 0 0 1-1v-1a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1z"/><path d="M53 42h-3v-2.08A8.028 8.028 0 0 0 53.93 34H55a3.009 3.009 0 0 0 3-3v-1a2.986 2.986 0 0 0-1-2.22V21a5 5 0 0 0-5-5h-1a2.994 2.994 0 0 0-1.67.51 4.712 4.712 0 0 0-.8-1.05A5.005 5.005 0 0 0 45 14h-3.04a21 21 0 1 0-3.05 22.69A8.071 8.071 0 0 0 42 39.92V42h-3a9.014 9.014 0 0 0-9 9v10a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V51a9.014 9.014 0 0 0-9-9Zm3-12v1a1 1 0 0 1-1 1h-1v-3h1a1 1 0 0 1 1 1ZM23 42a19 19 0 1 1 16.91-27.66 7.16 7.16 0 0 0-1.81.86 17 17 0 1 0-2.01 18.64A2.764 2.764 0 0 0 37 34h1.07c.02.15.04.3.07.45A19.011 19.011 0 0 1 23 42Zm11.48-9.39a15.049 15.049 0 0 1-3.13 2.85l-.48-.84a1 1 0 0 0-1.74 1l.49.84A14.821 14.821 0 0 1 24 37.94V37a1 1 0 0 0-2 0v.95a14.915 14.915 0 0 1-5.61-1.5l.48-.83a1 1 0 0 0-1.74-1l-.48.84a15.165 15.165 0 0 1-4.11-4.11l.84-.48a1 1 0 0 0-1-1.74l-.83.48A14.915 14.915 0 0 1 8.05 24H9a1 1 0 0 0 0-2h-.95a14.915 14.915 0 0 1 1.5-5.61l.83.48a1 1 0 0 0 1.36-.37 1.007 1.007 0 0 0-.36-1.37l-.84-.48a15.165 15.165 0 0 1 4.11-4.11l.48.84a.993.993 0 0 0 1.37.36 1 1 0 0 0 .37-1.36l-.48-.83A14.915 14.915 0 0 1 22 8.05V9a1 1 0 0 0 2 0v-.96a14.83 14.83 0 0 1 5.61 1.5l-.48.84a1 1 0 0 0 .37 1.36.993.993 0 0 0 1.37-.36l.48-.84a14.891 14.891 0 0 1 4.1 4.12l-.83.47a1.007 1.007 0 0 0-.36 1.37 1 1 0 0 0 1.36.37l.83-.48a2 2 0 0 1 .1.21A6.984 6.984 0 0 0 35 21v6.78A2.986 2.986 0 0 0 34 30v1a2.933 2.933 0 0 0 .48 1.61ZM36 30a1 1 0 0 1 1-1h1v3h-1a1 1 0 0 1-1-1Zm2-4v1h-1v-6a4.938 4.938 0 0 1 1.45-3.52 5.007 5.007 0 0 1 3.04-1.45A4.361 4.361 0 0 1 42 16h3a2.988 2.988 0 0 1 3 3 1 1 0 0 0 2 0 1 1 0 0 1 1-1h1a3.009 3.009 0 0 1 3 3v6h-1v-1a3.009 3.009 0 0 0-3-3H41a3.009 3.009 0 0 0-3 3Zm2 7v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7a6 6 0 0 1-12 0Zm9.5 11h.5v3.52l-2.42-.96ZM46 45.33l-2-2.66v-1.93a7.822 7.822 0 0 0 4 0v1.93ZM42 44h.5l1.92 2.56-2.42.96Zm18 16h-4v-7a1 1 0 0 0-2 0v7H38v-7a1 1 0 0 0-2 0v7h-4v-9a7.008 7.008 0 0 1 7-7h1v5a1 1 0 0 0 1 1 .937.937 0 0 0 .37-.07L46 48.08l4.63 1.85A.937.937 0 0 0 51 50a1 1 0 0 0 1-1v-5h1a7.008 7.008 0 0 1 7 7Z"/><path d="M46 50a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1zm0 5a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1zm3.706-21.706a1 1 0 0 0-1.413 0 3.318 3.318 0 0 1-4.582 0 1 1 0 0 0-1.411 1.415 5.239 5.239 0 0 0 7.41 0 1 1 0 0 0-.004-1.415z"/></svg>
                                </span>
                            </div>
                            <h5 className="mb-1 fw-semibold">Renting A Home</h5>
                            <p className="text-muted">Neque porro quisquam est, qui dolorem ipsum.</p>
                            <Link scroll={false} className="text-primary fw-semibold" href="#!">Explore Now<i className="ri-arrow-right-s-line align-middle rtl-rotate"></i></Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    </section>
    {/* End:: Section-7 */}

    {/* Start:: Section-8 */}
    <section className="section">
        <div className="container">
            <Row className="">
                <Tab.Container defaultActiveKey="first">
                    <Col xl={12} className="mb-4">
                        <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2">
                            <div className="heading-section text-start">
                                <div className="heading-title">All Properties</div>
                                <div className="heading-description">View the all Properties</div>
                            </div>
                            <div className="min-w-fit-content">
                                {/* Nav tabs */}
                                <Nav className="nav-tabs tab-style-8 scaleX custom-nav-tabs" id="myTab" role="tablist">
                                    <Nav.Item role="presentation">
                                        <Nav.Link eventKey="first" href="#all-tab" data-bs-toggle="tab">All</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item role="presentation">
                                        <Nav.Link eventKey="second" href="#sale-tab" data-bs-toggle="tab">For Sale</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item role="presentation">
                                        <Nav.Link eventKey="third" href="#rent-tab"  data-bs-toggle="tab">For Rent</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </div>
                    </Col>
                    <Col xl={12}>
                        {/* Tab panes */}
                        <Tab.Content className=" all-products">
                            <Tab.Pane eventKey="first" id="all-tab">
                                <Row>
                                    <Col lg={3} md={6} sm={6} className="col-12">
                                        <div className="card custom-card overflow-hidden card-style-2">
                                            <span className="badge bg-danger tag-badge">For Sale</span>
                                            <Link scroll={false} href="/realestate/details/">
                                                <div className="featured-img">
                                                    <img src="../../assets/images/realestate/properties/popular/3.png" className="" alt="..." />
                                                </div>
                                            </Link>
                                            <div className="card-body p-3 position-relative">
                                                <div className="min-w-fit-content float-end">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                </OverlayTrigger>
                                                
                                                </div>
                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Julia Camo</Link></p>
                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Duplex House</a></h5>
                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                    <div className="fs-11 text-muted">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>Hyderabad</span>
                                                        <span>,</span>
                                                        <span className="ms-1 d-inline-flex">05 Jan 2024</span>
                                                    </div>
                                                    <span className="text-danger">( 5BHK )</span>
                                                </div>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">18 Beds</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">12 Baths</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">6,987sqft</Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$3456</h4>
                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6} sm={6} className="col-12">
                                        <div className="card custom-card overflow-hidden card-style-2">
                                            <span className="badge bg-warning tag-badge">For Rent</span>
                                            <span className="badge bg-danger top-right-badge">40% Off</span>
                                            <Link scroll={false} href="/realestate/details/">
                                                <div className="featured-img">
                                                    <img src="../../assets/images/realestate/properties/popular/4.png" className="" alt="..." />
                                                </div>
                                            </Link>
                                            <div className="card-body p-3 position-relative">
                                                <div className="min-w-fit-content float-end">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                </OverlayTrigger>
                                                </div>
                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Jack Miller</Link></p>
                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Villa Duplex House</a></h5>
                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                    <div className="fs-11 text-muted">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>Chennai</span>
                                                        <span>,</span>
                                                        <span className="ms-1 d-inline-flex">24 Nov 2024</span>
                                                    </div>
                                                    <span className="text-danger">( 4BHK )</span>
                                                </div>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">7 Beds</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">2 Baths</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">6,987sqft</Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$2345</h4>
                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6} sm={6} className="col-12">
                                        <div className="card custom-card overflow-hidden card-style-2">
                                            <span className="badge bg-danger tag-badge">For Sale</span>
                                            <Link scroll={false} href="/realestate/details/">
                                                <div className="featured-img">
                                                    <img src="../../assets/images/realestate/properties/popular/1.png" className="" alt="..." />
                                                </div>
                                            </Link>
                                            <div className="card-body p-3 position-relative">
                                                <div className="min-w-fit-content float-end">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                </OverlayTrigger>
                                                
                                                </div>
                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Joan Hunter</Link></p>
                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">House with nature</a></h5>
                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                    <div className="fs-11 text-muted">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                        <span>,</span>
                                                        <span className="ms-1 d-inline-flex">16 Nov 2024</span>
                                                    </div>
                                                    <span className="text-danger">( 2BHK )</span>
                                                </div>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">7 Beds</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">2 Baths</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">6,987sqft</Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$1290</h4>
                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6} sm={6} className="col-12">
                                        <div className="card custom-card overflow-hidden card-style-2">
                                            <span className="badge bg-warning tag-badge">For Rent</span>
                                            <span className="badge bg-danger top-right-badge">20% Off</span>
                                            <Link scroll={false} href="/realestate/details/">
                                                <div className="featured-img">
                                                    <img src="../../assets/images/realestate/properties/popular/2.png" className="" alt="..." />
                                                </div>
                                            </Link>
                                            <div className="card-body p-3 position-relative">
                                                <div className="min-w-fit-content float-end">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                </OverlayTrigger>
                                                    
                                                </div>
                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Susana Sane</Link></p>
                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Trauel Apartment</a></h5>
                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                    <div className="fs-11 text-muted">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>Banglore</span>
                                                        <span>,</span>
                                                        <span className="ms-1 d-inline-flex">20 Dec 2024</span>
                                                    </div>
                                                    <span className="text-danger">( 3BHK )</span>
                                                </div>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">10 Beds</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">14 Baths</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">9,987sqft</Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$1345</h4>
                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6} sm={6} className="col-12">
                                        <Card className="custom-card overflow-hidden card-style-2">
                                            <span className="badge bg-danger tag-badge">For Sale</span>
                                            <div className="badge top-right-badge bg-warning text-fixed-white">
                                                <div className="badge-icon"><i className="ti ti-star-filled fs-14"></i></div>
                                                <div className="badge-text">Featured</div>
                                            </div>
                                            <Link scroll={false} href="/realestate/details/">
                                                <div className="featured-img">
                                                    <img src="../../assets/images/realestate/properties/popular/5.png" className="" alt="..." />
                                                </div>
                                            </Link>
                                            <div className="card-body p-3 position-relative">
                                                <div className="min-w-fit-content float-end">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                </OverlayTrigger>
                                                
                                                </div>
                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Amanda Nanes</Link></p>
                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Riddi Houses</a></h5>
                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                    <div className="fs-11 text-muted">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                        <span>,</span>
                                                        <span className="ms-1 d-inline-flex">25 Feb 2024</span>
                                                    </div>
                                                    <span className="text-danger">( 5BHK )</span>
                                                </div>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">5 Beds</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">3 Baths</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">4,987sqft</Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$7653</h4>
                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col lg={3} md={6} sm={6} className="col-12">
                                        <Card className="custom-card overflow-hidden card-style-2">
                                            <span className="badge bg-warning tag-badge">For Rent</span>
                                            <Link scroll={false} href="/realestate/details/">
                                                <div className="featured-img">
                                                    <img src="../../assets/images/realestate/properties/popular/8.png" className="" alt="..." />
                                                </div>
                                            </Link>
                                            <Card.Body className="p-3 position-relative">
                                                <div className="min-w-fit-content float-end">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                </OverlayTrigger>
                                                
                                                </div>
                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Charles Achilles</Link></p>
                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Achlles Buildings</a></h5>
                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                    <div className="fs-11 text-muted">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>Kerala</span>
                                                        <span>,</span>
                                                        <span className="ms-1 d-inline-flex">18 Mar 2024</span>
                                                    </div>
                                                    <span className="text-danger">( 3BHK )</span>
                                                </div>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">4 Beds</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">2 Baths</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">1,987sqft</Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$9853</h4>
                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={3} md={6} sm={6} className="col-12">
                                        <Card className="custom-card overflow-hidden card-style-2">
                                            <span className="badge bg-danger tag-badge">For Sale</span>
                                            <Link scroll={false} href="/realestate/details/">
                                                <div className="featured-img">
                                                    <img src="../../assets/images/realestate/properties/popular/6.png" className="" alt="..." />
                                                </div>
                                            </Link>
                                            <Card.Body className="p-3 position-relative">
                                                <div className="min-w-fit-content float-end">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                </OverlayTrigger>
                                                
                                                </div>
                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Joan Hunter</Link></p>
                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">House with nature</a></h5>
                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                    <div className="fs-11 text-muted">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                        <span>,</span>
                                                        <span className="ms-1 d-inline-flex">16 Nov 2024</span>
                                                    </div>
                                                    <span className="text-danger">( 2BHK )</span>
                                                </div>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">7 Beds</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">2 Baths</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">6,987sqft</Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$1290</h4>
                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={3} md={6} sm={6} className="col-12">
                                        <Card className="custom-card overflow-hidden card-style-2">
                                            <span className="badge bg-warning tag-badge">For Rent</span>
                                            <Link scroll={false} href="/realestate/details/">
                                                <div className="featured-img">
                                                    <img src="../../assets/images/realestate/properties/popular/7.png" className="" alt="..." />
                                                </div>
                                            </Link>
                                            <Card.Body className="p-3 position-relative">
                                                <div className="min-w-fit-content float-end">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                </OverlayTrigger>
                                                
                                                </div>
                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Hunter Joan</Link></p>
                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Johse Houses</a></h5>
                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                    <div className="fs-11 text-muted">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>Chennai</span>
                                                        <span>,</span>
                                                        <span className="ms-1 d-inline-flex">27 Nov 2024</span>
                                                    </div>
                                                    <span className="text-danger">( 2BHK )</span>
                                                </div>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">8 Beds</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">4 Baths</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">8,987sqft</Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$8765</h4>
                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second" id="sale-tab">
                                <Row>
                                    <Col lg={3} md={6} sm={6} className="col-12">
                                        <Card className="custom-card overflow-hidden card-style-2">
                                            <span className="badge bg-danger tag-badge">For Sale</span>
                                            <Link scroll={false} href="/realestate/details/">
                                                <div className="featured-img">
                                                    <img src="../../assets/images/realestate/properties/popular/1.png" className="" alt="..." />
                                                </div>
                                            </Link>
                                            <Card.Body className="p-3 position-relative">
                                                <div className="min-w-fit-content float-end">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                </OverlayTrigger>
                                                
                                                </div>
                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Joan Hunter</Link></p>
                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">House with nature</a></h5>
                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                    <div className="fs-11 text-muted">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                        <span>,</span>
                                                        <span className="ms-1 d-inline-flex">16 Nov 2024</span>
                                                    </div>
                                                    <span className="text-danger">( 2BHK )</span>
                                                </div>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">7 Beds</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">2 Baths</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">6,987sqft</Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$1290</h4>
                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={3} md={6} sm={6} className="col-12">
                                        <div className="card custom-card overflow-hidden card-style-2">
                                            <span className="badge bg-danger tag-badge">For Sale</span>
                                            <span className="badge bg-warning top-right-badge">20% Off</span>
                                            <Link scroll={false} href="/realestate/details/">
                                                <div className="featured-img">
                                                    <img src="../../assets/images/realestate/properties/popular/2.png" className="" alt="..." />
                                                </div>
                                            </Link>
                                            <div className="card-body p-3 position-relative">
                                                <div className="min-w-fit-content float-end">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                </OverlayTrigger>
                                                    
                                                </div>
                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Susana Sane</Link></p>
                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Trauel Apartment</a></h5>
                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                    <div className="fs-11 text-muted">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>Banglore</span>
                                                        <span>,</span>
                                                        <span className="ms-1 d-inline-flex">20 Dec 2024</span>
                                                    </div>
                                                    <span className="text-danger">( 3BHK )</span>
                                                </div>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">10 Beds</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">14 Baths</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">9,987sqft</Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$1345</h4>
                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6} sm={6} className="col-12">
                                        <Card className="custom-card overflow-hidden card-style-2">
                                            <span className="badge bg-danger tag-badge">For Sale</span>
                                            <div className="badge top-right-badge bg-warning text-fixed-white">
                                                <div className="badge-icon"><i className="ti ti-star-filled fs-14"></i></div>
                                                <div className="badge-text">Featured</div>
                                            </div>
                                            <Link scroll={false} href="/realestate/details/">
                                                <div className="featured-img">
                                                    <img src="../../assets/images/realestate/properties/popular/3.png" className="" alt="..." />
                                                </div>
                                            </Link>
                                            <Card.Body className="p-3 position-relative">
                                                <div className="min-w-fit-content float-end">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                </OverlayTrigger>
                                                
                                                </div>
                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Julia Camo</Link></p>
                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Duplex House</a></h5>
                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                    <div className="fs-11 text-muted">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>Hyderabad</span>
                                                        <span>,</span>
                                                        <span className="ms-1 d-inline-flex">05 Jan 2024</span>
                                                    </div>
                                                    <span className="text-danger">( 5BHK )</span>
                                                </div>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">18 Beds</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">12 Baths</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">6,987sqft</Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$3456</h4>
                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={3} md={6} sm={6} className="col-12">
                                        <Card className="custom-card overflow-hidden card-style-2">
                                            <span className="badge bg-danger tag-badge">For Sale</span>
                                            <span className="badge bg-warning top-right-badge">40% Off</span>
                                            <Link scroll={false} href="/realestate/details/">
                                                <div className="featured-img">
                                                    <img src="../../assets/images/realestate/properties/popular/4.png" className="" alt="..." />
                                                </div>
                                            </Link>
                                            <Card.Body className="p-3 position-relative">
                                                <div className="min-w-fit-content float-end">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                </OverlayTrigger>
                                                
                                                </div>
                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Jack Miller</Link></p>
                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Villa Duplex House</a></h5>
                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                    <div className="fs-11 text-muted">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>Chennai</span>
                                                        <span>,</span>
                                                        <span className="ms-1 d-inline-flex">24 Nov 2024</span>
                                                    </div>
                                                    <span className="text-danger">( 4BHK )</span>
                                                </div>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">7 Beds</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">2 Baths</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">6,987sqft</Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$2345</h4>
                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={3} md={6} sm={6} className="col-12">
                                        <Card className="custom-card overflow-hidden card-style-2">
                                            <span className="badge bg-danger tag-badge">For Sale</span>
                                            <div className="badge top-right-badge bg-warning text-fixed-white">
                                                <div className="badge-icon"><i className="ti ti-star-filled fs-14"></i></div>
                                                <div className="badge-text">Featured</div>
                                            </div>
                                            <Link scroll={false} href="/realestate/details/">
                                                <div className="featured-img">
                                                    <img src="../../assets/images/realestate/properties/popular/5.png" className="" alt="..." />
                                                </div>
                                            </Link>
                                            <Card.Body className="p-3 position-relative">
                                                <div className="min-w-fit-content float-end">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                </OverlayTrigger>
                                                
                                                </div>
                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Amanda Nanes</Link></p>
                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Riddi Houses</a></h5>
                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                    <div className="fs-11 text-muted">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                        <span>,</span>
                                                        <span className="ms-1 d-inline-flex">25 Feb 2024</span>
                                                    </div>
                                                    <span className="text-danger">( 5BHK )</span>
                                                </div>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">5 Beds</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">3 Baths</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">4,987sqft</Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$7653</h4>
                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={3} md={6} sm={6} className="col-12">
                                        <Card className="custom-card overflow-hidden card-style-2">
                                            <span className="badge bg-danger tag-badge">For Sale</span>
                                            <span className="badge bg-warning top-right-badge">20% Off</span>
                                            <Link scroll={false} href="/realestate/details/">
                                                <div className="featured-img">
                                                    <img src="../../assets/images/realestate/properties/popular/6.png" className="" alt="..." />
                                                </div>
                                            </Link>
                                            <div className="card-body p-3 position-relative">
                                                <div className="min-w-fit-content float-end">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                </OverlayTrigger>
                                                    
                                                </div>
                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Joan Hunter</Link></p>
                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">House with nature</a></h5>
                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                    <div className="fs-11 text-muted">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                        <span>,</span>
                                                        <span className="ms-1 d-inline-flex">16 Nov 2024</span>
                                                    </div>
                                                    <span className="text-danger">( 2BHK )</span>
                                                </div>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">7 Beds</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">2 Baths</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">6,987sqft</Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$1290</h4>
                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col lg={3} md={6} sm={6} className="col-12">
                                        <Card className="custom-card overflow-hidden card-style-2">
                                            <span className="badge bg-danger tag-badge">For Sale</span>
                                            <Link scroll={false} href="/realestate/details/">
                                                <div className="featured-img">
                                                    <img src="../../assets/images/realestate/properties/popular/7.png" className="" alt="..." />
                                                </div>
                                            </Link>
                                            <div className="card-body p-3 position-relative">
                                                <div className="min-w-fit-content float-end">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                </OverlayTrigger>
                                                    
                                                </div>
                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Hunter Joan</Link></p>
                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Johse Houses</a></h5>
                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                    <div className="fs-11 text-muted">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>Chennai</span>
                                                        <span>,</span>
                                                        <span className="ms-1 d-inline-flex">27 Nov 2024</span>
                                                    </div>
                                                    <span className="text-danger">( 2BHK )</span>
                                                </div>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">8 Beds</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">4 Baths</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">8,987sqft</Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$8765</h4>
                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col lg={3} md={6} sm={6} className="col-12">
                                        <div className="card custom-card overflow-hidden card-style-2">
                                            <span className="badge bg-danger tag-badge">For Sale</span>
                                            <Link scroll={false} href="/realestate/details/">
                                                <div className="featured-img">
                                                    <img src="../../assets/images/realestate/properties/popular/8.png" className="" alt="..." />
                                                </div>
                                            </Link>
                                            <div className="card-body p-3 position-relative">
                                                <div className="min-w-fit-content float-end">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                </OverlayTrigger>
                                                
                                                </div>
                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Charles Achilles</Link></p>
                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Achlles Buildings</a></h5>
                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                    <div className="fs-11 text-muted">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>Kerala</span>
                                                        <span>,</span>
                                                        <span className="ms-1 d-inline-flex">18 Mar 2024</span>
                                                    </div>
                                                    <span className="text-danger">( 3BHK )</span>
                                                </div>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">4 Beds</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">2 Baths</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">1,987sqft</Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$9853</h4>
                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third" id="rent-tab">
                                <Row>
                                    <Col lg={3} md={6} sm={6} className="col-12">
                                        <div className="card custom-card overflow-hidden card-style-2">
                                            <span className="badge bg-warning tag-badge">For Rent</span>
                                            <Link scroll={false} href="/realestate/details/">
                                                <div className="featured-img">
                                                    <img src="../../assets/images/realestate/properties/popular/1.png" className="" alt="..." />
                                                </div>
                                            </Link>
                                            <div className="card-body p-3 position-relative">
                                                <div className="min-w-fit-content float-end">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                </OverlayTrigger>
                                                
                                                </div>
                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Joan Hunter</Link></p>
                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">House with nature</a></h5>
                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                    <div className="fs-11 text-muted">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                        <span>,</span>
                                                        <span className="ms-1 d-inline-flex">16 Nov 2024</span>
                                                    </div>
                                                    <span className="text-danger">( 2BHK )</span>
                                                </div>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">7 Beds</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">2 Baths</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">6,987sqft</Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$1290</h4>
                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6} sm={6} className="col-12">
                                        <div className="card custom-card overflow-hidden card-style-2">
                                            <span className="badge bg-warning tag-badge">For Rent</span>
                                            <span className="badge bg-danger top-right-badge">20% Off</span>
                                            <Link scroll={false} href="/realestate/details/">
                                                <div className="featured-img">
                                                    <img src="../../assets/images/realestate/properties/popular/2.png" className="" alt="..." />
                                                </div>
                                            </Link>
                                            <div className="card-body p-3 position-relative">
                                                <div className="min-w-fit-content float-end">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                </OverlayTrigger>
                                                    
                                                </div>
                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Susana Sane</Link></p>
                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Trauel Apartment</a></h5>
                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                    <div className="fs-11 text-muted">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>Banglore</span>
                                                        <span>,</span>
                                                        <span className="ms-1 d-inline-flex">20 Dec 2024</span>
                                                    </div>
                                                    <span className="text-danger">( 3BHK )</span>
                                                </div>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">10 Beds</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">14 Baths</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">9,987sqft</Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$1345</h4>
                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6} sm={6} className="col-12">
                                        <div className="card custom-card overflow-hidden card-style-2">
                                            <span className="badge bg-warning tag-badge">For Rent</span>
                                            <div className="badge top-right-badge bg-warning text-fixed-white">
                                                <div className="badge-icon"><i className="ti ti-star-filled fs-14"></i></div>
                                                <div className="badge-text">Featured</div>
                                            </div>
                                            <Link scroll={false} href="/realestate/details/">
                                                <div className="featured-img">
                                                    <img src="../../assets/images/realestate/properties/popular/3.png" className="" alt="..." />
                                                </div>
                                            </Link>
                                            <div className="card-body p-3 position-relative">
                                                <div className="min-w-fit-content float-end">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                </OverlayTrigger>
                                                
                                                </div>
                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Julia Camo</Link></p>
                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Duplex House</a></h5>
                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                    <div className="fs-11 text-muted">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>Hyderabad</span>
                                                        <span>,</span>
                                                        <span className="ms-1 d-inline-flex">05 Jan 2024</span>
                                                    </div>
                                                    <span className="text-danger">( 5BHK )</span>
                                                </div>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">18 Beds</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">12 Baths</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">6,987sqft</Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$3456</h4>
                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6} sm={6} className="col-12">
                                        <div className="card custom-card overflow-hidden card-style-2">
                                            <span className="badge bg-warning tag-badge">For Rent</span>
                                            <span className="badge bg-danger top-right-badge">40% Off</span>
                                            <Link scroll={false} href="/realestate/details/">
                                                <div className="featured-img">
                                                    <img src="../../assets/images/realestate/properties/popular/4.png" className="" alt="..." />
                                                </div>
                                            </Link>
                                            <div className="card-body p-3 position-relative">
                                                <div className="min-w-fit-content float-end">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                </OverlayTrigger>
                                                
                                                </div>
                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Jack Miller</Link></p>
                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Villa Duplex House</a></h5>
                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                    <div className="fs-11 text-muted">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>Chennai</span>
                                                        <span>,</span>
                                                        <span className="ms-1 d-inline-flex">24 Nov 2024</span>
                                                    </div>
                                                    <span className="text-danger">( 4BHK )</span>
                                                </div>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">7 Beds</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">2 Baths</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">6,987sqft</Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$2345</h4>
                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6} sm={6} className="col-12">
                                        <div className="card custom-card overflow-hidden card-style-2">
                                            <span className="badge bg-warning tag-badge">For Rent</span>
                                            <div className="badge top-right-badge bg-warning text-fixed-white">
                                                <div className="badge-icon"><i className="ti ti-star-filled fs-14"></i></div>
                                                <div className="badge-text">Featured</div>
                                            </div>
                                            <Link scroll={false} href="/realestate/details/">
                                                <div className="featured-img">
                                                    <img src="../../assets/images/realestate/properties/popular/5.png" className="" alt="..." />
                                                </div>
                                            </Link>
                                            <div className="card-body p-3 position-relative">
                                                <div className="min-w-fit-content float-end">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                </OverlayTrigger>
                                                
                                                </div>
                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Amanda Nanes</Link></p>
                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Riddi Houses</a></h5>
                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                    <div className="fs-11 text-muted">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                        <span>,</span>
                                                        <span className="ms-1 d-inline-flex">25 Feb 2024</span>
                                                    </div>
                                                    <span className="text-danger">( 5BHK )</span>
                                                </div>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">5 Beds</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">3 Baths</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">4,987sqft</Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$7653</h4>
                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6} sm={6} className="col-12">
                                        <div className="card custom-card overflow-hidden card-style-2">
                                            <span className="badge bg-warning tag-badge">For Rent</span>
                                            <span className="badge bg-danger top-right-badge">20% Off</span>
                                            <Link scroll={false} href="/realestate/details/">
                                                <div className="featured-img">
                                                    <img src="../../assets/images/realestate/properties/popular/6.png" className="" alt="..." />
                                                </div>
                                            </Link>
                                            <div className="card-body p-3 position-relative">
                                                <div className="min-w-fit-content float-end">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                </OverlayTrigger>
                                                
                                                </div>
                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Joan Hunter</Link></p>
                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">House with nature</a></h5>
                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                    <div className="fs-11 text-muted">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                        <span>,</span>
                                                        <span className="ms-1 d-inline-flex">16 Nov 2024</span>
                                                    </div>
                                                    <span className="text-danger">( 2BHK )</span>
                                                </div>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">7 Beds</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">2 Baths</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">6,987sqft</Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$1290</h4>
                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6} sm={6} className="col-12">
                                        <div className="card custom-card overflow-hidden card-style-2">
                                            <span className="badge bg-warning tag-badge">For Rent</span>
                                            <Link scroll={false} href="/realestate/details/">
                                                <div className="featured-img">
                                                    <img src="../../assets/images/realestate/properties/popular/7.png" className="" alt="..." />
                                                </div>
                                            </Link>
                                            <div className="card-body p-3 position-relative">
                                                <div className="min-w-fit-content float-end">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                </OverlayTrigger>
                                                
                                                </div>
                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Hunter Joan</Link></p>
                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Johse Houses</a></h5>
                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                    <div className="fs-11 text-muted">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>Chennai</span>
                                                        <span>,</span>
                                                        <span className="ms-1 d-inline-flex">27 Nov 2024</span>
                                                    </div>
                                                    <span className="text-danger">( 2BHK )</span>
                                                </div>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">8 Beds</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">4 Baths</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">8,987sqft</Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$8765</h4>
                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6} sm={6} className="col-12">
                                        <div className="card custom-card overflow-hidden card-style-2">
                                            <span className="badge bg-warning tag-badge">For Rent</span>
                                            <Link scroll={false} href="/realestate/details/">
                                                <div className="featured-img">
                                                    <img src="../../assets/images/realestate/properties/popular/8.png" className="" alt="..." />
                                                </div>
                                            </Link>
                                            <div className="card-body p-3 position-relative">
                                                <div className="min-w-fit-content float-end">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                </OverlayTrigger>
                                                    
                                                </div>
                                                <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Charles Achilles</Link></p>
                                                <h5 className="mb-1 fw-semibold"><a href="/realestate/details/">Achlles Buildings</a></h5>
                                                <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                    <div className="fs-11 text-muted">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>Kerala</span>
                                                        <span>,</span>
                                                        <span className="ms-1 d-inline-flex">18 Mar 2024</span>
                                                    </div>
                                                    <span className="text-danger">( 3BHK )</span>
                                                </div>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">4 Beds</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">2 Baths</Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-light border text-default me-1">1,987sqft</Link>
                                                </div>
                                                <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                                    <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$9853</h4>
                                                    <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                </div>
                                            </div>
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
                                <h6 className="mb-0 text-fixed-white">Property Listings</h6>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div>
                                <h3 className="mb-1 fw-semibold text-fixed-white">175K+</h3>
                                <h6 className="mb-0 text-fixed-white">Monthly Searches</h6>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div>
                                <h3 className="mb-1 fw-semibold text-fixed-white">300K+</h3>
                                <h6 className="mb-0 text-fixed-white">Monthly Advertises</h6>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div>
                                <h3 className="mb-1 fw-semibold text-fixed-white">450M+</h3>
                                <h6 className="mb-0 text-fixed-white">Sellers Contacted</h6>
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
            <div className="row mb-4 justify-content-center text-center">
                <p className="fs-12 fw-semibold mb-1"><span className="landing-section-heading text-gradient">Our Blog</span> </p>
                <div className="heading-title">Latest News Updates & Blogs</div>
                <Col xl={9}>
                    <p className="">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </Col>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <Card className="custom-card">
                        <Link scroll={false} href="#!">
                            <img src="../../assets/images/media/blog/20.jpg" className="card-img-top" alt="..." />
                        </Link>
                        <Card.Body>
                            <span className="badge bg-secondary blog-badge">Apartments</span>
                            <h5 className="fw-semibold mb-1">Why People Choose Riddi For Own Properties?</h5>
                            <p className="card-text">The holographic principle, theorized to be a property of quantum gravity, postulates that the description.</p>
                            <Link scroll={false} className="text-primary fw-semibold" href="#!">Read this post<i className="ri-arrow-right-s-line align-middle rtl-rotate"></i></Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card className="custom-card">
                        <Link scroll={false} href="#!">
                            <img src="../../assets/images/media/blog/21.jpg" className="card-img-top" alt="..." />
                        </Link>
                        <Card.Body>
                            <span className="badge bg-danger blog-badge">House</span>
                            <h5 className="fw-semibold mb-1">Private Home Sales Drop 27% In May 2024</h5>
                            <p className="card-text">The holographic principle, theorized to be a property of quantum gravity, postulates that the description.</p>
                            <Link scroll={false} className="text-primary fw-semibold" href="#!">Read this post<i className="ri-arrow-right-s-line align-middle rtl-rotate"></i></Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card className="custom-card">
                        <Link scroll={false} href="#!">
                            <img src="../../assets/images/media/blog/22.jpg" className="card-img-top" alt="..." />
                        </Link>
                        <Card.Body>
                            <span className="badge bg-warning blog-badge">Luxury Homes</span>
                            <h5 className="fw-semibold mb-1">Luxury duplex house vs a standard house in Chennai</h5>
                            <p className="card-text">The holographic principle, theorized to be a property of quantum gravity, postulates that the description.</p>
                            <Link scroll={false} className="text-primary fw-semibold" href="#!">Read this post<i className="ri-arrow-right-s-line align-middle rtl-rotate"></i></Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </section>
    {/* End:: Section-10 */}

    {/* Start:: Section-11 */}
    <section className="bg-banner">
        <div className="container">
            <Row className="align-items-center">
                <Col xxl={4} xl={4} lg={5} className="d-lg-block d-none text-center mt-4">
                    <img src="../../assets/images/ecommerce/png/17.png" width="350" alt=""/> 
                </Col>
                <Col xxl={8} xl={8} lg={7} className="col-12">
                    <div className="my-4">
                        <h2 className="fw-semibold mb-3 text-fixed-white">Buy or Sell your property in a few seconds <Link scroll={false} href="#!" className="text-secondary text-decoration-underline"> Signup </Link> now..</h2>
                        <p className="mb-4">Est amet sit vero sanctus labore no sed nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore.. </p>
                        <div className="btn-list">
                            <Link scroll={false} href="#!" className="btn btn-light btn-lg"><i className="ti ti-search"></i> Browse Property</Link>
                            <Link scroll={false} href="#!" className="btn btn-danger btn-lg"><i className="ti ti-upload"></i> Post Property</Link>
                        </div>
                    </div>
                </Col> 
            </Row>
        </div>
    </section>
    {/* End:: Section-11 */}

    {/* Start:: Section-12 */}
    <section className="section bg-white">
        <div className="container">
            <div className="heading-section mb-4">
                <p className="fs-12 fw-semibold mb-1"><span className="landing-section-heading text-gradient">FAQ'S</span> </p>
                <div className="heading-title">Frequently Asked Questions?</div>
                <div className="heading-description">Browse Through The Most Frequently Asked Questions</div>
            </div>
            <div className="row gy-2">
                <Col xl={6} className="mt-2">
                    <Accordion defaultActiveKey="first" className="accordion-solid-primary accordion-customicon1 accordions-items-seperate" id="accordionFAQ1">
                        <Accordion.Item eventKey="first">
                            <Accordion.Header id="headingcustomicon2One">
                                    Where can I subscribe to your newsletter?
                            </Accordion.Header>
                                <Accordion.Body>
                                    <strong>This is the first item's accordion body.</strong> It is shown by
                                    default, until the collapse plugin adds the appropriate classes that we
                                    use to style each element
                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="second">
                            <Accordion.Header id="headingcustomicon2Two">
                                    Where can in edit my address?
                            </Accordion.Header>
                                <Accordion.Body>
                                    <strong>This is the first item's accordion body.</strong> It is shown by
                                    default, until the collapse plugin adds the appropriate classes that we
                                    use to style each element
                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="third">
                            <Accordion.Header id="headingcustomicon2Three">
                                    What are your opening hours?
                            </Accordion.Header>
                                <Accordion.Body>
                                    <strong>This is the first item's accordion body.</strong> It is shown by
                                    default, until the collapse plugin adds the appropriate classes that we
                                    use to style each element
                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="fourth">
                            <Accordion.Header id="headingcustomicon2Four">
                                    Do I have the right to return an item?
                            </Accordion.Header>
                                <Accordion.Body>
                                    <strong>This is the first item's accordion body.</strong> It is shown by
                                    default, until the collapse plugin adds the appropriate classes that we
                                    use to style each element
                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col> 
                <Col xl={6} className="mt-2">
                    <Accordion defaultActiveKey="fourth" className="accordion-solid-primary accordion-customicon1 accordions-items-seperate" id="accordionFAQ">
                        <Accordion.Item eventKey="first">
                            <Accordion.Header id="headingcustomicon1One">
                                    When can we get started?
                            </Accordion.Header>
                                <Accordion.Body>
                                    <strong>This is the first item's accordion body.</strong> It is shown by
                                    default, until the collapse plugin adds the appropriate classes that we
                                    use to style each element
                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="second">
                            <Accordion.Header id="headingcustomicon1Two">
                                    What services are provided by you?
                            </Accordion.Header>
                                <Accordion.Body>
                                    <strong>This is the first item's accordion body.</strong> It is shown by
                                    default, until the collapse plugin adds the appropriate classes that we
                                    use to style each element
                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="third">
                            <Accordion.Header id="headingcustomicon1Three">
                                    What types of companies use your services?
                            </Accordion.Header>
                                <Accordion.Body>
                                    <strong>This is the first item's accordion body.</strong> It is shown by
                                    default, until the collapse plugin adds the appropriate classes that we
                                    use to style each element
                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="fourth">
                            <Accordion.Header id="headingcustomicon1Four">
                                    Do you provide 24/7 social media support?
                            </Accordion.Header>
                                <Accordion.Body>
                                    <strong>This is the first item's accordion body.</strong> It is shown by
                                    default, until the collapse plugin adds the appropriate classes that we
                                    use to style each element
                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col> 
            </div>
        </div>
    </section>
    {/* End:: Section-12 */}

    {/* Start:: Section-13 */}
    <section className="section landing-testimonials">
        <div className="container text-center">
            <p className="fs-12 fw-semibold mb-1"><span className="landing-section-heading text-gradient">Testimonials</span></p>
            <div className="heading-title">We never failed to reach expectations</div>
            <div className="row justify-content-center">
                <Col xl={6}>
                    <p className="text-muted fs-15 mb-5 fw-normal">Some of the reviews our clients gave which brings motivation to work.</p>
                </Col>
            </div>
            <Swiper autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ dynamicBullets: true, clickable: true, }} modules={[Pagination, Autoplay]} className="swiper pagination-dynamic text-start">
                    <SwiperSlide>
                        <Row>
                            <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                                <Card className="custom-card featured-card-1">
                                    <Card.Body className="p-4">
                                        <span className="review-quote">
                                            <i className="bi bi-quote"></i>
                                        </span>
                                        <span className="review-quote">
                                            <i className="bi bi-quote"></i>
                                        </span>
                                        <div className="d-flex mb-2 align-items-center">
                                            <span className="avatar avatar-lg avatar-rounded me-2">
                                                <img src="../../assets/images/faces/21.jpg" alt=""/> 
                                            </span>
                                            <div>
                                                <p className="mb-0 fw-semibold fs-16 text-primary">Jack Miller</p>
                                                <p className="fs-10 mb-0 fw-semibold text-muted">CEO OF NORJA</p>
                                            </div>
                                        </div>
                                        <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor</span>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                                <Card className="custom-card featured-card-1">
                                    <Card.Body className="p-4">
                                        <span className="review-quote">
                                            <i className="bi bi-quote"></i>
                                        </span>
                                        <span className="review-quote">
                                            <i className="bi bi-quote"></i>
                                        </span>
                                        <div className="d-flex mb-2 align-items-center">
                                            <span className="avatar avatar-lg avatar-rounded me-2">
                                                <img src="../../assets/images/faces/21.jpg" alt=""/> 
                                            </span>
                                            <div>
                                                <p className="mb-0 fw-semibold fs-16 text-primary">Melissa Blue</p>
                                                <p className="fs-10 mb-0 fw-semibold text-muted">MANAGER CHO</p>
                                            </div>
                                        </div>
                                        <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor</span>
                                    
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                                <Card className="custom-card featured-card-1">
                                    <Card.Body className="p-4">
                                        <span className="review-quote">
                                            <i className="bi bi-quote"></i>
                                        </span>
                                        <div className="d-flex mb-2 align-items-center">
                                            <span className="avatar avatar-lg avatar-rounded me-2">
                                                <img src="../../assets/images/faces/21.jpg" alt=""/> 
                                            </span>
                                            <div>
                                                <p className="mb-0 fw-semibold fs-16 text-primary">Kiara Advain</p>
                                                <p className="fs-10 mb-0 fw-semibold text-muted">CEO OF EMPIRO</p>
                                            </div>
                                        </div>
                                        <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor</span>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Row>
                            <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                                <Card className="custom-card featured-card-1">
                                    <Card.Body className="p-4">
                                        <span className="review-quote">
                                            <i className="bi bi-quote"></i>
                                        </span>
                                        <div className="d-flex mb-2 align-items-center">
                                            <span className="avatar avatar-lg avatar-rounded me-2">
                                                <img src="../../assets/images/faces/21.jpg" alt=""/> 
                                            </span>
                                            <div>
                                                <p className="mb-0 fw-semibold fs-16 text-primary">Jhonson Smith</p>
                                                <p className="fs-10 mb-0 fw-semibold text-muted">CHIEF SECRETARY MBIO</p>
                                            </div>
                                        </div>
                                        <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor</span>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                                <Card className="custom-card featured-card-1">
                                    <Card.Body className="p-4">
                                        <span className="review-quote">
                                            <i className="bi bi-quote"></i>
                                        </span>
                                        <div className="d-flex mb-2 align-items-center">
                                            <span className="avatar avatar-lg avatar-rounded me-2">
                                                <img src="../../assets/images/faces/21.jpg" alt=""/> 
                                            </span>
                                            <div>
                                                <p className="mb-0 fw-semibold fs-16 text-primary">Dwayne Stort</p>
                                                <p className="fs-10 mb-0 fw-semibold text-muted">CEO ARMEDILLO</p>
                                            </div>
                                        </div>
                                        <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor</span>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                                <Card className="custom-card featured-card-1">
                                    <Card.Body className="p-4">
                                        <span className="review-quote">
                                            <i className="bi bi-quote"></i>
                                        </span>
                                        <div className="d-flex mb-2 align-items-center">
                                            <span className="avatar avatar-lg avatar-rounded me-2">
                                                <img src="../../assets/images/faces/21.jpg" alt=""/> 
                                            </span>
                                            <div>
                                                <p className="mb-0 fw-semibold fs-16 text-primary">Jasmine Kova</p>
                                                <p className="fs-10 mb-0 fw-semibold text-muted">AGGENT AMIO</p>
                                            </div>
                                        </div>
                                        <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor</span>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Row>
                            <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                                <Card className="custom-card featured-card-1">
                                    <Card.Body className="p-4">
                                        <span className="review-quote">
                                            <i className="bi bi-quote"></i>
                                        </span>
                                        <div className="d-flex mb-2 align-items-center">
                                            <span className="avatar avatar-lg avatar-rounded me-2">
                                                <img src="../../assets/images/faces/21.jpg" alt=""/> 
                                            </span>
                                            <div>
                                                <p className="mb-0 fw-semibold fs-16 text-primary">Dolph MR</p>
                                                <p className="fs-10 mb-0 fw-semibold text-muted">CEO MR BRAND</p>
                                            </div>
                                        </div>
                                        <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor</span>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                                <Card className="custom-card featured-card-1">
                                    <Card.Body className="p-4">
                                        <span className="review-quote">
                                            <i className="bi bi-quote"></i>
                                        </span>
                                        <div className="d-flex mb-2 align-items-center">
                                            <span className="avatar avatar-lg avatar-rounded me-2">
                                                <img src="../../assets/images/faces/21.jpg" alt=""/> 
                                            </span>
                                            <div>
                                                <p className="mb-0 fw-semibold fs-16 text-primary">Brenda Simpson</p>
                                                <p className="fs-10 mb-0 fw-semibold text-muted">CEO AIBMO</p>
                                            </div>
                                        </div>
                                        <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor</span>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                                <Card className="custom-card featured-card-1">
                                    <Card.Body className="p-4">
                                        <span className="review-quote">
                                            <i className="bi bi-quote"></i>
                                        </span>
                                        <div className="d-flex mb-2 align-items-center">
                                            <span className="avatar avatar-lg avatar-rounded me-2">
                                                <img src="../../assets/images/faces/21.jpg" alt=""/> 
                                            </span>
                                            <div>
                                                <p className="mb-0 fw-semibold fs-16 text-primary">Melissa Blue</p>
                                                <p className="fs-10 mb-0 fw-semibold text-muted">MANAGER CHO</p>
                                            </div>
                                        </div>
                                        <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor</span>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </SwiperSlide>
            </Swiper>
        </div>    
    </section>
    {/* End:: Section-13 */}

    {/* Start:: Section-14 */}
    <section className="section bg-banner px-lg-0 px-4">
        <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
                <div className="mb-4">
                    <h3 className="fw-semibold mb-2 text-fixed-white">&#128073; Download our free mobile apps today</h3>
                </div>
                <h6 className="mb-4 op-9 text-fixed-white">Labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore..</h6>
                <div className="btn-list">
                    <Link scroll={false} href="#!" className="btn btn-dark app-store">
                        <img src="../../assets/images/media/apps/play-store.png" alt=""/> 
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
    {/* End:: Section-14 */}
    </Fragment>
    )
};

export default Landing;