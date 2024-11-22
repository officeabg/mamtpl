"use client"
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Container, Dropdown, Form, Nav, Navbar, NavDropdown, OverlayTrigger, Pagination, Row, Tab, Tooltip } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, } from "swiper/modules"; 
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Profile = () => {
return( 
    <Fragment>
         {/* Start:: Breadcrumb*/}
            <div className="border-bottom py-3 bg-white">
                <div className="container">
                    {/* Page Header */}
                        <Seo title={"Public Profile"} />
                        <Pageheader Heading="" Pagetitle={true} Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true},{title:"Vendor", active:true}, {title:"Public Profile", active:false}]} />
                    {/* Page Header Close */}
                </div>
            </div>
            {/* End:: Breadcrumb*/}

            {/* Start:: Section-1 */}
            <div className="landing-banner">
                <section className="py-5">
                    <div className="container main-banner-container">
                        <div className="row gy-3">
                            <div className="col-lg-9">
                                <div className="d-flex align-items-center flex-wrap gap-3">
                                    <div>
                                        <span className="vendor-company-icon">
                                           <img src="../../../assets/images/company-logos/7.png" alt="" />
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!"> Andrew Retail PVT LTD</Link></h4>
                                        <p className="mb-2">Member Since <span className="fw-semibold">2005</span></p>
                                        <div className="d-flex align-items-center fs-14 mb-2">
                                            <p className="fs-15 fw-semibold mb-0">Customer Ratings : </p>
                                            <div className="min-w-fit-content ms-3">
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                            </div>
                                            <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                <span>(142)</span>
                                                <span>Ratings</span>
                                            </p>
                                        </div>
                                        <span className="badge badge-md bg-info-transparent me-1"><i className="bi bi-briefcase-fill me-1"></i>156 Products</span>
                                        <span className="badge badge-md bg-danger-transparent me-1"><i className="bi bi-bar-chart-fill me-1"></i>100 Sales</span>
                                    </div>
                                </div>
                            </div>
                            <Col lg={3}>
                                <div className="btn-list">
                                    <Link scroll={false} href="#!" className="btn btn-primary"><i className="ri-user-follow-line me-1"></i> Follow</Link>
                                    <Link scroll={false} href="#!" className="btn btn-icon btn-primary-light btn-wave">
                                        <i className="ri-share-line"></i>
                                    </Link>
                                </div>
                            </Col>
                        </div>
                    </div>
                </section> 
            </div>
            {/* End:: Section-1 */}
            <Tab.Container defaultActiveKey="first">
            {/* Start:: Nav Tabs*/}
            <div className="border-bottom bg-white">
                <div className="container">
                    <Nav className="nav-tabs tab-style-8 scaleX custom-nav-tabs" id="myTab" role="tablist">
                        <Nav.Item role="presentation">
                            <Nav.Link eventKey="first" href="#Profile-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="true" role="tab">Profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item role="presentation">
                            <Nav.Link eventKey="second" href="#products-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">All Products</Nav.Link>
                        </Nav.Item>
                        <Nav.Item role="presentation">
                            <Nav.Link eventKey="third" href="#deals-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">Top Deals</Nav.Link>
                        </Nav.Item>
                        <Nav.Item role="presentation">
                            <Nav.Link eventKey="fourth" href="#Followers-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">Followers</Nav.Link>
                        </Nav.Item>
                        <Nav.Item role="presentation">
                            <Nav.Link eventKey="fifth" href="#Following-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">Following</Nav.Link>
                        </Nav.Item>
                    </Nav> 
                </div>
            </div>
            {/* End:: Nav Tabs*/}

            {/* Start:: Section-2 */}
            <section className="section py-4 bg-white">
                <div className="container"> 
                    <Tab.Content>
                        <Tab.Pane eventKey="first" className="border-0 p-0 show" id="Profile-tab" role="tabpanel"> 
                            <Row> 
                                <Col lg={8}>                                     
                                    <div className="mb-3">
                                        <div className="deals-bundle deals-bundle1">
                                            <span className="icon">
                                                <img src="../../../assets/images/company-logos/1.png" alt="" className="img-fluid"/>
                                            </span>
                                            <h4 className="fw-semibold mb-4 text-fixed-white">Andrew Retail PVT LTD</h4>  
                                            <div className="row text-center gy-3 justify-content-center">
                                                <Col md={4}>
                                                    <div className="p-2 rounded bg-white-transparent">
                                                        <h5 className="mb-1 fw-semibold text-fixed-white">234+</h5>
                                                        <h6 className="mb-0 text-fixed-white">Products</h6>
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="p-2 rounded bg-white-transparent">
                                                        <h5 className="mb-1 fw-semibold text-fixed-white">342+</h5>
                                                        <h6 className="mb-0 text-fixed-white">Customers</h6>
                                                    </div>
                                                </Col>
                                            </div>                                      
                                        </div>
                                    </div>
                                    <Card className="custom-card">
                                        <Card.Header>
                                            <Card.Title>
                                                About Andrew Retail PVT LTD
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <p>Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore.A officiis optio temporibus minima facilis...</p>
                                            <p>Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore.A officiis optio temporibus minima facilis...</p>
                                       
                                        </Card.Body>
                                    </Card>
                                    <Card className="custom-card">
                                        <Card.Header>
                                            <Card.Title>
                                                Return and Refund Policies
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <p className="mb-0">Please refer to the <Link scroll={false} href="#!" className="text-primary"><u>Andrew Retail Policies</u></Link></p>
                                        </Card.Body>
                                    </Card>
                                    <Card className="card custom-card border bg-primary-transparent shadow-none">
                                        <Card.Body>
                                            <div className="row align-items-center">
                                                <Col lg={8}>
                                                    <h5 className="fw-semibold mb-0">&#128400; Was this profile useful to someone?</h5>
                                                </Col>
                                                <div className="col-lg-4 text-end">
                                                    <Link scroll={false} href="#!" className="btn btn-success" role="button">
                                                        <i className="ri-share-line me-2"></i>Share Now
                                                    </Link> 
                                                </div>   
                                            </div>
                                        </Card.Body>
                                    </Card> 
                                    <div className="row mt-5 g-0">
                                        <h4 className="fw-semibold mb-0">Top Products</h4>
                                        <p className="">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                        <Swiper className="swiper-related-jobs" autoplay={{ delay: 2500, disableOnInteraction: false, }} navigation={true} modules={[Navigation, Autoplay]}>
                                            <SwiperSlide>
                                                <Row>
                                                    <Col md={4} sm={6}>
                                                        <Card className="custom-card card-style-2">
                                                            <Card.Body className="p-0">
                                                                <span className="badge bg-pink-transparent text-pink top-left-badge">25% Off</span>
                                                                <div className="card-img-top border-bottom border-block-end-dashed">
                                                                    <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                    <div className="btns-container-1 align-items-center gap-1">
                                                                        <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-16"></i></Link>
                                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                            <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Compare"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                        </OverlayTrigger>
                                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                            <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
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
                                                                            <h6 className="mb-1 fw-semibold fs-16"><Link scroll={false} href="/ecommerce/customer/productdetails/">Sync Headphones</Link></h6>
                                                                            <div className="d-flex align-items-baseline fs-11">
                                                                                <div className="min-w-fit-content">
                                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                                    <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                                </div>
                                                                                <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                                    <span>(142)</span>
                                                                                    <span>Ratings</span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="min-w-fit-content">
                                                                            <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
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
                                                                <Link scroll={false} href="#!" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    <Col md={4} sm={6}>
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
                                                                            <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Compare"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                        </OverlayTrigger>
                                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                            <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
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
                                                                        <h6 className="mb-1 fw-semibold fs-16"><Link scroll={false} href="/ecommerce/customer/productdetails/">Adibas Men's Shoes</Link></h6>
                                                                        <div className="d-flex align-items-baseline fs-11">
                                                                            <div className="min-w-fit-content">
                                                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                            </div>
                                                                            <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                                <span>(142)</span>
                                                                                <span>Ratings</span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="min-w-fit-content">
                                                                        <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
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
                                                                <Link scroll={false} href="#!" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    <Col md={4} sm={6}>
                                                        <Card className="custom-card card-style-2">
                                                            <Card.Body className="p-0">
                                                                <span className="badge bg-info-transparent text-info top-left-badge">60% Off</span>
                                                                <div className="card-img-top border-bottom border-block-end-dashed">
                                                                    <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                    <div className="btns-container-1 align-items-center gap-1">
                                                                        <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-16"></i></Link>
                                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                            <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Compare"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                        </OverlayTrigger>
                                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                            <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                        </OverlayTrigger>
                                                                    </div>
                                                                    <div className="img-box-2 p-2">
                                                                        <img src="../../../assets/images/ecommerce/png/29.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                    </div>
                                                                </div>
                                                                <div className="p-3">
                                                                    <div className="d-flex align-items-start justify-content-between">
                                                                    <div className="flex-grow-1">
                                                                        <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Lenscart</Link>
                                                                        <h6 className="mb-1 fw-semibold fs-16"><Link scroll={false} href="/ecommerce/customer/productdetails/">CapturePro Camera</Link></h6>
                                                                        <div className="d-flex align-items-baseline fs-11">
                                                                            <div className="min-w-fit-content">
                                                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                            </div>
                                                                            <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                                <span>(142)</span>
                                                                                <span>Ratings</span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="min-w-fit-content">
                                                                        <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
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
                                                                <Link scroll={false} href="#!" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Row>
                                                    <Col md={4} sm={6}>
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
                                                                            <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Compare"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                        </OverlayTrigger>
                                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                            <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
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
                                                                        <h6 className="mb-1 fw-semibold fs-16"><Link scroll={false} href="/ecommerce/customer/productdetails/">Western Ladies Bag</Link></h6>
                                                                        <div className="d-flex align-items-baseline fs-11">
                                                                            <div className="min-w-fit-content">
                                                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                            </div>
                                                                            <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                                <span>(142)</span>
                                                                                <span>Ratings</span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="min-w-fit-content">
                                                                        <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
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
                                                                <Link scroll={false} href="#!" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    <Col md={4} sm={6}>
                                                        <Card className="custom-card card-style-2">
                                                            <Card.Body className="p-0">
                                                                <span className="badge bg-info-transparent text-info top-left-badge">60% Off</span>
                                                                <div className="card-img-top border-bottom border-block-end-dashed">
                                                                    <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                                    <div className="btns-container-1 align-items-center gap-1">
                                                                        <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-16"></i></Link>
                                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                            <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Compare"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                        </OverlayTrigger>
                                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                            <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                        </OverlayTrigger>
                                                                    </div>
                                                                    <div className="img-box-2 p-2">
                                                                        <img src="../../../assets/images/ecommerce/png/29.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                    </div>
                                                                </div>
                                                                <div className="p-3">
                                                                    <div className="d-flex align-items-start justify-content-between">
                                                                    <div className="flex-grow-1">
                                                                        <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Lenscart</Link>
                                                                        <h6 className="mb-1 fw-semibold fs-16"><Link scroll={false} href="/ecommerce/customer/productdetails/">CapturePro Camera</Link></h6>
                                                                        <div className="d-flex align-items-baseline fs-11">
                                                                            <div className="min-w-fit-content">
                                                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                            </div>
                                                                            <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                                <span>(142)</span>
                                                                                <span>Ratings</span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="min-w-fit-content">
                                                                        <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
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
                                                                <Link scroll={false} href="#!" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    <Col md={4} sm={6}>
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
                                                                            <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Compare"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                                        </OverlayTrigger>
                                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                            <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                                        </OverlayTrigger>
                                                                    </div>
                                                                    <div className="img-box-2 p-2">
                                                                        <img src="../../../assets/images/ecommerce/png/30.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                                    </div>
                                                                </div>
                                                                <div className="p-3">
                                                                    <div className="d-flex align-items-start justify-content-between">
                                                                    <div className="flex-grow-1">
                                                                        <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Vellintn</Link>
                                                                        <h6 className="mb-1 fw-semibold fs-16"><Link scroll={false} href="/ecommerce/customer/productdetails/">SQL Head Phones</Link></h6>
                                                                        <div className="d-flex align-items-baseline fs-11">
                                                                            <div className="min-w-fit-content">
                                                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                                <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                            </div>
                                                                            <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                                <span>(142)</span>
                                                                                <span>Ratings</span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="min-w-fit-content">
                                                                        <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
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
                                                                <Link scroll={false} href="#!" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
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
                                                        <img src="../../../assets/images/faces/9.jpg" alt="" />
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
                                                        <p className="mb-0 fs-12 text-muted">Products</p>
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
                                            <div className="p-4 d-flex align-items-center">
                                                <p className="fs-15 mb-0 me-4 fw-semibold">Social :</p>
                                                <div className="btn-list mb-0">
                                                    <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light mb-xl-0">
                                                        <i className="ri-facebook-line"></i>
                                                    </Button>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light mb-xl-0">
                                                        <i className="ri-twitter-x-line"></i>
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
                                                    <Form.Label htmlFor="Vendorusername" className="form-label fw-semibold">Username</Form.Label> 
                                                    <Form.Control type="text" className="form-control" id="Vendorusername" placeholder="Vendor username" defaultValue="Andrew Retail"/>
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="email-address" className="form-label fw-semibold">Email Address</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="email-address" placeholder="xyz@gmail.com" defaultValue="json@gmail.com"/>
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="phone-number" className="form-label fw-semibold">Mobile Number</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="phone-number" placeholder="*** *** ****" defaultValue="65432 76765"/>
                                                </Col>
                                            </div>
                                        </Card.Body>
                                        <Card.Footer>
                                            <div className="d-grid">
                                                <Link scroll={false} href="#!" className="btn btn-danger">Submit</Link>
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second" className="border-0 p-0" id="products-tab" role="tabpanel">
                            <Card className="custom-card shadow-none">
                                <Card.Body className="p-2">
                                    <Navbar expand="xxl" className="navbar navbar-expand-xxl bg-white">
                                        <Container fluid>
                                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                            <Navbar.Collapse className="collapse navbar-collapse navbar-justified" id="navbarSupportedContent">
                                                <Nav className="navbar-nav me-auto mb-2 mb-lg-0 align-items-xxl-center mt-2">
                                                    <Nav.Item>
                                                        <Link scroll={false} className="nav-link active" aria-current="page" href="#!">Men</Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Link scroll={false} className="nav-link" href="#!">Women</Link>
                                                    </Nav.Item>
                                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.2">
                                                                Another action
                                                        </NavDropdown.Item>
                                                        <NavDropdown.Divider />
                                                        <NavDropdown.Item href="#action/3.4">
                                                            Something else
                                                                here
                                                        </NavDropdown.Item>
                                                    </NavDropdown>
                                                    <Nav.Item>
                                                        <Link scroll={false} href="#!" className="nav-link">Today Deals</Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Link scroll={false} href="#!" className="nav-link">Electronics</Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Link scroll={false} href="#!" className="nav-link">Fashion</Link>
                                                    </Nav.Item>
                                                </Nav>
                                                <div className="d-flex gap-2 flex-wrap">
                                                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                                                    <Link scroll={false} href="#!" className="btn btn-primary">Search</Link>
                                                    <div className="btn-group">
                                                       <Dropdown>
                                                            <Dropdown.Toggle  variant="" className="btn btn-outline-light border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    Sort By
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <li><Dropdown.Item href="#!">Most Relevance</Dropdown.Item></li>
                                                                    <li><Dropdown.Item href="#!">New Arrivals</Dropdown.Item></li>
                                                                    <li><Dropdown.Item href="#!">Price Low to High</Dropdown.Item></li>
                                                                    <li><Dropdown.Item href="#!">Price High to Low</Dropdown.Item></li>
                                                                    <li><Dropdown.Item href="#!">Ratings</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                       </Dropdown>
                                                    </div>
                                                </div>
                                            </Navbar.Collapse>
                                        </Container>
                                    </Navbar>
                                </Card.Body>
                            </Card>
                            <Row>
                                <Col lg={3} md={4} sm={6} className="">
                                    <Card className="custom-card card-style-2">
                                        <Card.Body className="p-0">
                                            <span className="badge bg-pink-transparent text-pink top-left-badge">25% Off</span>
                                            <div className="card-img-top border-bottom border-block-end-dashed">
                                                <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                <div className="btns-container-1 align-items-center gap-1">
                                                    <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-eye fs-16"></i></Link>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Compare"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
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
                                                        <h6 className="mb-1 fw-semibold fs-16"><Link scroll={false} href="/ecommerce/customer/productdetails/">Sync Headphones</Link></h6>
                                                        <div className="d-flex align-items-baseline fs-11">
                                                            <div className="min-w-fit-content">
                                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                            </div>
                                                            <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                <span>(142)</span>
                                                                <span>Ratings</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="min-w-fit-content">
                                                        <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
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
                                            <Link scroll={false} href="#!" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
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
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Compare"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                    </OverlayTrigger>
                                                </div>
                                                <div className="img-box-2 p-2">
                                                    <img src="../../../assets/images/ecommerce/png/2.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                </div>
                                            </div>
                                            <div className="p-3">
                                                <div className="d-flex align-items-start justify-content-between">
                                                <div className="flex-grow-1">
                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Adibas</Link>
                                                    <h6 className="mb-1 fw-semibold fs-16"><Link scroll={false} href="/ecommerce/customer/productdetails/">Adibas Men's Shoes</Link></h6>
                                                    <div className="d-flex align-items-baseline fs-11">
                                                        <div className="min-w-fit-content">
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                        </div>
                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                            <span>(142)</span>
                                                            <span>Ratings</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="min-w-fit-content">
                                                    <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
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
                                            <Link scroll={false} href="#!" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
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
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Compare"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                    </OverlayTrigger>
                                                </div>
                                                <div className="img-box-2 p-2">
                                                    <img src="../../../assets/images/ecommerce/png/29.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                </div>
                                            </div>
                                            <div className="p-3">
                                                <div className="d-flex align-items-start justify-content-between">
                                                <div className="flex-grow-1">
                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Lenscart</Link>
                                                    <h6 className="mb-1 fw-semibold fs-16"><Link scroll={false} href="/ecommerce/customer/productdetails/">CapturePro Camera</Link></h6>
                                                    <div className="d-flex align-items-baseline fs-11">
                                                        <div className="min-w-fit-content">
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                        </div>
                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                            <span>(142)</span>
                                                            <span>Ratings</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="min-w-fit-content">
                                                    <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
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
                                            <Link scroll={false} href="#!" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
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
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Compare"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
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
                                                    <h6 className="mb-1 fw-semibold fs-16"><Link scroll={false} href="/ecommerce/customer/productdetails/">Western Ladies Bag</Link></h6>
                                                    <div className="d-flex align-items-baseline fs-11">
                                                        <div className="min-w-fit-content">
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                        </div>
                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                            <span>(142)</span>
                                                            <span>Ratings</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="min-w-fit-content">
                                                    <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
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
                                            <Link scroll={false} href="#!" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
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
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Compare"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
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
                                                    <h6 className="mb-1 fw-semibold fs-16"><Link scroll={false} href="/ecommerce/customer/productdetails/">Western Ladies Bag</Link></h6>
                                                    <div className="d-flex align-items-baseline fs-11">
                                                        <div className="min-w-fit-content">
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                        </div>
                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                            <span>(142)</span>
                                                            <span>Ratings</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="min-w-fit-content">
                                                    <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
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
                                            <Link scroll={false} href="#!" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
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
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Compare"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                    </OverlayTrigger>
                                                </div>
                                                <div className="img-box-2 p-2">
                                                    <img src="../../../assets/images/ecommerce/png/29.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                </div>
                                            </div>
                                            <div className="p-3">
                                                <div className="d-flex align-items-start justify-content-between">
                                                <div className="flex-grow-1">
                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Lenscart</Link>
                                                    <h6 className="mb-1 fw-semibold fs-16"><Link scroll={false} href="/ecommerce/customer/productdetails/">CapturePro Camera</Link></h6>
                                                    <div className="d-flex align-items-baseline fs-11">
                                                        <div className="min-w-fit-content">
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                        </div>
                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                            <span>(142)</span>
                                                            <span>Ratings</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="min-w-fit-content">
                                                    <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
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
                                            <Link scroll={false} href="#!" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
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
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Compare"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                    </OverlayTrigger>
                                                </div>
                                                <div className="img-box-2 p-2">
                                                    <img src="../../../assets/images/ecommerce/png/1.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                </div>
                                            </div>
                                            <div className="p-3">
                                                <div className="d-flex align-items-start justify-content-between">
                                                <div className="flex-grow-1">
                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Adibas</Link>
                                                    <h6 className="mb-1 fw-semibold fs-16"><Link scroll={false} href="/ecommerce/customer/productdetails/">Adibas Men's Shoes</Link></h6>
                                                    <div className="d-flex align-items-baseline fs-11">
                                                        <div className="min-w-fit-content">
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                        </div>
                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                            <span>(142)</span>
                                                            <span>Ratings</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="min-w-fit-content">
                                                    <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
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
                                            <Link scroll={false} href="#!" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
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
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Compare"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
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
                                                    <h6 className="mb-1 fw-semibold fs-16"><Link scroll={false} href="/ecommerce/customer/productdetails/">Sync Headphones</Link></h6>
                                                    <div className="d-flex align-items-baseline fs-11">
                                                        <div className="min-w-fit-content">
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                        </div>
                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                            <span>(142)</span>
                                                            <span>Ratings</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="min-w-fit-content">
                                                    <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
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
                                            <Link scroll={false} href="#!" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={12}>
                                    <nav aria-label="Page navigation" className="pagination-style-4 float-end">
                                        <Pagination className="pagination mb-0">
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
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third" className="border-0 p-0" id="deals-tab" role="tabpanel">
                            <div className="row mb-3">
                                <h5 className="mb-4 fw-semibold">Limited Time Deals</h5>
                                <Col xl={4}>
                                    <Card className="custom-card card-style-1 custom-card mb-5">
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
                                                                <h6 className="mb-1 fw-semibold"><Link scroll={false} href="/ecommerce/customer/productdetails/">Sync Headphones</Link></h6>
                                                                <div className="d-flex align-items-baseline fs-11">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                        <span>(45)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                                <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="Wishlist">
                                                                    <i className="bi bi-heart outline"></i>
                                                                    <i className="bi bi-heart-fill filled"></i>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="flex-grow-1 d-flex align-items-baseline">
                                                                <h5 className="fw-semibold text-primary mb-0">$99</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                                <Link scroll={false} href="#!" className="btn btn-primary border-0"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
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
                                    </Card>
                                </Col>
                                <Col xl={4}>
                                    <Card className="custom-card card-style-1 custom-card mb-5">
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
                                                                <h6 className="mb-1 fw-semibold"><Link scroll={false} href="/ecommerce/customer/productdetails/">Digital Alarm Clock</Link></h6>
                                                                <div className="d-flex align-items-baseline fs-11">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                        <span>(57)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                                <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="Wishlist">
                                                                    <i className="bi bi-heart outline"></i>
                                                                    <i className="bi bi-heart-fill filled"></i>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="flex-grow-1 d-flex align-items-baseline">
                                                                <h5 className="fw-semibold text-primary mb-0">$150</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$499</span>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                                <Link scroll={false} href="#!" className="btn btn-primary border-0"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
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
                                    </Card>
                                </Col>
                                <Col xl={4}>
                                    <Card className="custom-card card-style-1 custom-card mb-5">
                                        <Card.Body className="p-3">
                                            <div className="card-content">
                                                <Row>
                                                    <Col md={4}>
                                                        <div className="img-box-1 bg-light rounded">
                                                            <Link scroll={false} href="/ecommerce/customer/productdetails/">
                                                                <img src="../../../assets/images/ecommerce/png/2.png" alt="img" className="scale-img img-fluid w-100"/>
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                    <Col md={8}>
                                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Dolore</Link>
                                                                <h6 className="mb-1 fw-semibold"><Link scroll={false} href="/ecommerce/customer/productdetails/">Men's Shoes</Link></h6>
                                                                <div className="d-flex align-items-baseline fs-11">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                        <span>(773)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                                <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="Wishlist">
                                                                    <i className="bi bi-heart outline"></i>
                                                                    <i className="bi bi-heart-fill filled"></i>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="flex-grow-1 d-flex align-items-baseline">
                                                                <h5 className="fw-semibold text-primary mb-0">$50</h5>
                                                                <span className="fs-13 ms-2 text-muted text-decoration-line-through">$235</span>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                                <Link scroll={false} href="#!" className="btn btn-primary border-0"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
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
                                    </Card>
                                </Col>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth" className="border-0 p-0" id="Followers-tab" role="tabpanel">
                            <Row>
                                <Col lg={4}>
                                    <Card className="custom-card">
                                        <Card.Body className="contact-action">
                                            <div className="contact-overlay"></div>
                                            <div className="d-flex align-items-top">
                                                <div className="d-flex flex-fill flex-wrap gap-3">
                                                    <div className="avatar avatar-xl avatar-rounded">
                                                        <img src="../../../assets/images/faces/15.jpg" alt="" />
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
                                                <div className="d-flex flex-fill flex-wrap gap-3">
                                                    <div className="avatar avatar-xl avatar-rounded">
                                                        <img src="../../../assets/images/faces/1.jpg" alt="" />
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
                                                <div className="d-flex flex-fill flex-wrap gap-3">
                                                    <div className="avatar avatar-xl avatar-rounded">
                                                        <img src="../../../assets/images/faces/2.jpg" alt="" />
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
                                                <div className="d-flex flex-fill flex-wrap gap-3">
                                                    <div className="avatar avatar-xl avatar-rounded">
                                                        <img src="../../../assets/images/faces/21.jpg" alt="" />
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
                                                <div className="d-flex flex-fill flex-wrap gap-3">
                                                    <div className="avatar avatar-xl avatar-rounded">
                                                        <img src="../../../assets/images/faces/5.jpg" alt="" />
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
                                                <div className="d-flex flex-fill flex-wrap gap-3">
                                                    <div className="avatar avatar-xl avatar-rounded">
                                                        <img src="../../../assets/images/faces/6.jpg" alt="" />
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
                                            <div className="d-flex align-items-top ">
                                                <div className="d-flex flex-fill flex-wrap gap-3">
                                                    <div className="avatar avatar-xl avatar-rounded">
                                                        <img src="../../../assets/images/faces/9.jpg" alt="" />
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
                                                <div className="d-flex flex-fill flex-wrap gap-3">
                                                    <div className="avatar avatar-xl avatar-rounded">
                                                        <img src="../../../assets/images/faces/10.jpg" alt="" />
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
                                                <div className="d-flex flex-fill flex-wrap gap-3">
                                                    <div className="avatar avatar-xl avatar-rounded">
                                                        <img src="../../../assets/images/faces/11.jpg" alt="" />
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
                        <Tab.Pane eventKey="fifth" className="border-0 p-0" id="Following-tab" role="tabpanel">
                            <Row>
                                <Col lg={4}>
                                    <Card className="custom-card">
                                        <Card.Body className="contact-action">
                                            <div className="contact-overlay"></div>
                                            <div className="d-flex align-items-top ">
                                                <div className="d-flex flex-fill flex-wrap gap-3">
                                                    <div className="avatar avatar-xl avatar-rounded">
                                                        <img src="../../../assets/images/faces/2.jpg" alt="" />
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
                                                <div className="d-flex flex-fill flex-wrap gap-3">
                                                    <div className="avatar avatar-xl avatar-rounded">
                                                        <img src="../../../assets/images/faces/21.jpg" alt="" />
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
                                                <div className="d-flex flex-fill flex-wrap gap-3">
                                                    <div className="avatar avatar-xl avatar-rounded">
                                                        <img src="../../../assets/images/faces/15.jpg" alt="" />
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
                                                <div className="d-flex flex-fill flex-wrap gap-3">
                                                    <div className="avatar avatar-xl avatar-rounded">
                                                        <img src="../../../assets/images/faces/1.jpg" alt="" />
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
                                                <div className="d-flex flex-fill flex-wrap gap-3">
                                                    <div className="avatar avatar-xl avatar-rounded">
                                                        <img src="../../../assets/images/faces/9.jpg" alt="" />
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
                                                <div className="d-flex flex-fill flex-wrap gap-3">
                                                    <div className="avatar avatar-xl avatar-rounded">
                                                        <img src="../../../assets/images/faces/10.jpg" alt="" />
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
                                                <div className="d-flex flex-fill flex-wrap gap-3">
                                                    <div className="avatar avatar-xl avatar-rounded">
                                                        <img src="../../../assets/images/faces/5.jpg" alt="" />
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
                                                <div className="d-flex flex-fill flex-wrap gap-3">
                                                    <div className="avatar avatar-xl avatar-rounded">
                                                        <img src="../../../assets/images/faces/6.jpg" alt="" />
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
                                                <div className="d-flex flex-fill flex-wrap gap-3">
                                                    <div className="avatar avatar-xl avatar-rounded">
                                                        <img src="../../../assets/images/faces/11.jpg" alt="" />
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
            {/* End:: Section-2 */}
            </Tab.Container>

            {/* Start:: Section-3 */}
			<section className="section bg-banner px-lg-0 px-4">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <div className="mb-4">
                            <h3 className="fw-semibold mb-2 text-fixed-white">&#128073; Download our free mobile apps today</h3>
                        </div>
                        <h6 className="mb-4 op-9 text-fixed-white">Labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore..</h6>
                        <div className="btn-list">
                            <Link scroll={false} href="#!" className="btn btn-dark app-store">
                                <img src="../../../assets/images/media/apps/play-store.png" alt=""/>
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
            {/* End:: Section-3 */}
    </Fragment>
    )
};

export default Profile;