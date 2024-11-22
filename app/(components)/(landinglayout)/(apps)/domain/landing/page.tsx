"use client"
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Accordion, Button, Card, Col, Nav, OverlayTrigger, Row, Tab, Tooltip } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, } from "swiper/modules"; 
import Seo from "@/shared/layout-components/seo/seo";
const Landing = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
return ( 
    <Fragment>
        <Seo title={"Domain-Landing"} />
          {/* Start:: Landing Banner */}
            <div className="landing-banner ad-search-container">
                <section className="section-sm company-banner">
                    <div className="container main-banner-container">
                        <div className="row justify-content-between align-items-center">
                            <Col xxl={7} xl={7} lg={7} md={6} className="col-12">
                                <div className="text-fixed-white">
                                    <p className="landing-banner-heading mb-3 text-fixed-white">To <span className="best-services">Buy & Sell</span> Domains You Always Wanted!</p>
                                    <p className="fs-15 mb-4 op-8">You can buy and sell right domain we have 1000 of domains here. Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea.</p>
                                    <div className="input-group group-search d-xl-flex">
                                        <Link scroll={false} href="#!" className="btn btn-lg btn-wave btn-white shadow-none categorydropdown border-0 border-end"
                                        onClick={toggleDropdown}>
                                            <i className="ri-function-line me-2 text-primary"></i>Browse<i className="ri-arrow-down-s-line align-middle ms-1"></i>
                                        </Link>
                                        <ul className="categories-dropdowns ">
                                            <li className="category-dropdown">
                                                <ul className={`main-dropdown ${isOpen ? 'd-block' : 'd-none'}`} id="dropdown-toggle">
                                                    <li>
                                                        <div className="categories-dropdowns__item">
                                                            <span className="me-2"><i className="ri-window-line"></i></span>Websites
                                                            <span className="float-end"><i className="bi bi-chevron-right"></i></span>
                                                        </div>
                                                        <ul className="category-menu"> 
                                                            <li><Link scroll={false} href="#!" className="category-item">Ecommerce</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">Marketplace</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">Services</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">Realestate</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <div className="categories-dropdowns__item">
                                                            <span className="me-2"><i className="ri-android-line"></i></span>
                                                            Apps
                                                            <span className="float-end"><i className="bi bi-chevron-right"></i></span>
                                                        </div>
                                                        <ul className="category-menu">
                                                            <li><Link scroll={false} href="#!" className="category-item">All Apps</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">Android Apps</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">IOS Apps</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <div className="categories-dropdowns__item">
                                                            <span className="me-2"><i className="ri-server-line"></i></span>
                                                            Domains
                                                            <span className="float-end"><i className="bi bi-chevron-right"></i></span>
                                                        </div>
                                                        <ul className="category-menu">
                                                            <li><Link scroll={false} href="#!" className="category-item">All Domains</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">.com</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">.org</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">.net</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">.in</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <div className="categories-dropdowns__item">
                                                            <span className="me-2"><i className="ri-shopping-cart-line"></i></span>
                                                            Ecommerce
                                                            <span className="float-end"><i className="bi bi-chevron-right"></i></span>
                                                        </div>
                                                        <ul className="category-menu">
                                                            <li><Link scroll={false} href="#!" className="category-item">Land</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">Flat</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">Houses</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">Shops</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div className="custom-form-group position-static flex-grow-1">
                                            <input type="text" className="form-control form-control-lg shadow-none rounded-end" placeholder="Search Domain.." 
                                                aria-label="Recipient's username"/>
                                            <div className="custom-form-btn">                                            
                                                <Button variant="" className="btn btn-primary btn-icon" type="button"><i className="bi bi-search"></i></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xxl={4} xl={4} lg={4} md={5} className="d-md-block d-none">
                                <img src="../../assets/images/domains/2.png" className="img-fluid" alt="" />
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
                                <div className="heading-title">Domains For Sale</div>
                                <div className="heading-description">Browse the domains here depends on your requirement.</div>
                            </div>
							<div className="min-w-fit-content">
								<Link scroll={false} href="#!" className="btn btn-wave btn-primary">
									View All <i className="bi bi-arrow-right"></i>
								</Link>
							</div>
						</div>
                        <Col xxl={4} xl={4} lg={4} className="col-12">
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title className="flex-grow-1">
                                        Websites
                                    </Card.Title>
                                    <div className="min-w-fit-content">
                                        <Link scroll={false} href="#!" className="text-primary fw-semibold">View<i className="ti ti-arrow-right ms-1 d-inline-flex"></i></Link>
                                    </div>
                                </Card.Header>
                                <Card.Body className="pb-0">
                                    <Swiper direction={'vertical'} slidesPerView={4} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                        modules={[Autoplay]}  className="swiper swiper-vertical website-swiper swiper-domains">
                                            <SwiperSlide>
                                                <div className="">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div>
                                                            <span className="avatar avatar-sm bg-primary svg-white avatar-rounded">
                                                                <img src="../../assets/images/marketplace/new-arrivals/2.png" alt="img" className="img-fluid w-100"/>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="fw-semibold mb-0">spotechsolution.net</p>
                                                            <small className="text-muted">10 Bids , 27 Days Left</small>
                                                        </div>
                                                        <p className="fw-semibold">$12.00</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div>
                                                            <span className="avatar avatar-sm bg-danger svg-white avatar-rounded">
                                                                <img src="../../assets/images/marketplace/new-arrivals/4.png" alt="img" className="img-fluid w-100"/>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="fw-semibold mb-0">sanctuseadidunt.edu</p>
                                                            <small className="text-muted">21 Bids , 32 Days Left</small>
                                                        </div>
                                                        <p className="fw-semibold">$56.00</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div>
                                                            <span className="avatar avatar-sm bg-info svg-white avatar-rounded">
                                                                <img src="../../assets/images/marketplace/new-arrivals/3.png" alt="img" className="img-fluid w-100"/>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="fw-semibold mb-0">incididunt.org</p>
                                                            <small className="text-muted">17 Bids , 12 Days Left</small>
                                                        </div>
                                                        <p className="fw-semibold">$16.00</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div>
                                                            <span className="avatar avatar-sm bg-secondary svg-white avatar-rounded">
                                                                <img src="../../assets/images/marketplace/new-arrivals/1.png" alt="img" className="img-fluid w-100"/>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="fw-semibold mb-0">dwaynestel.net</p>
                                                            <small className="text-muted">12 Bids , 27 Days Left</small>
                                                        </div>
                                                        <p className="fw-semibold">$23.00</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div>
                                                            <span className="avatar avatar-sm bg-info svg-white avatar-rounded">
                                                                <img src="../../assets/images/marketplace/new-arrivals/3.png" alt="img" className="img-fluid w-100"/>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="fw-semibold mb-0">incididunt.org</p>
                                                            <small className="text-muted">17 Bids , 12 Days Left</small>
                                                        </div>
                                                        <p className="fw-semibold">$16.00</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                    </Swiper>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4} xl={4} lg={4} className="col-12">
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title className="flex-grow-1">
                                        New Domains
                                    </Card.Title>
                                    <div className="min-w-fit-content">
                                        <Link scroll={false} href="#!" className="text-primary fw-semibold">View<i className="ti ti-arrow-right ms-1 d-inline-flex"></i></Link>
                                    </div>
                                </Card.Header>
                                <Card.Body className="pb-0">
                                    <Swiper  direction={'vertical'} slidesPerView={4} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                        modules={[Autoplay]}  className="swiper swiper-vertical domain-swiper swiper-domains">
                                            <SwiperSlide>
                                                <div className="">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div>
                                                            <span className="avatar avatar-sm bg-primary svg-white avatar-rounded">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 15v4H5v-4h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 18.5c-.82 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 5v4H5V5h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 8.5c-.82 0-1.5-.67-1.5-1.5S6.18 5.5 7 5.5s1.5.68 1.5 1.5S7.83 8.5 7 8.5z"/></svg>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="fw-semibold mb-0">spotechsolution.net</p>
                                                            <small className="text-muted">10 Bids , 27 Days Left</small>
                                                        </div>
                                                        <p className="fw-semibold">$12.00</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div>
                                                            <span className="avatar avatar-sm bg-danger svg-white avatar-rounded">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 15v4H5v-4h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 18.5c-.82 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 5v4H5V5h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 8.5c-.82 0-1.5-.67-1.5-1.5S6.18 5.5 7 5.5s1.5.68 1.5 1.5S7.83 8.5 7 8.5z"/></svg>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="fw-semibold mb-0">sanctuseadidunt.edu</p>
                                                            <small className="text-muted">21 Bids , 32 Days Left</small>
                                                        </div>
                                                        <p className="fw-semibold">$56.00</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div>
                                                            <span className="avatar avatar-sm bg-info svg-white avatar-rounded">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 15v4H5v-4h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 18.5c-.82 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 5v4H5V5h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 8.5c-.82 0-1.5-.67-1.5-1.5S6.18 5.5 7 5.5s1.5.68 1.5 1.5S7.83 8.5 7 8.5z"/></svg>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="fw-semibold mb-0">incididunt.org</p>
                                                            <small className="text-muted">17 Bids , 12 Days Left</small>
                                                        </div>
                                                        <p className="fw-semibold">$16.00</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div>
                                                            <span className="avatar avatar-sm bg-secondary svg-white avatar-rounded">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 15v4H5v-4h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 18.5c-.82 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 5v4H5V5h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 8.5c-.82 0-1.5-.67-1.5-1.5S6.18 5.5 7 5.5s1.5.68 1.5 1.5S7.83 8.5 7 8.5z"/></svg>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="fw-semibold mb-0">dwaynestel.net</p>
                                                            <small className="text-muted">12 Bids , 27 Days Left</small>
                                                        </div>
                                                        <p className="fw-semibold">$23.00</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div>
                                                            <span className="avatar avatar-sm bg-info svg-white avatar-rounded">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 15v4H5v-4h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 18.5c-.82 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 5v4H5V5h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 8.5c-.82 0-1.5-.67-1.5-1.5S6.18 5.5 7 5.5s1.5.68 1.5 1.5S7.83 8.5 7 8.5z"/></svg>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="fw-semibold mb-0">incididunt.org</p>
                                                            <small className="text-muted">17 Bids , 12 Days Left</small>
                                                        </div>
                                                        <p className="fw-semibold">$16.00</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                    </Swiper>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4} xl={4} lg={4} className="col-12">
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title className="flex-grow-1">
                                        Auction Ending Soon
                                    </Card.Title>
                                    <div className="min-w-fit-content">
                                        <Link scroll={false} href="#!" className="text-primary fw-semibold">View<i className="ti ti-arrow-right ms-1 d-inline-flex"></i></Link>
                                    </div>
                                </Card.Header>
                                <Card.Body className="pb-0">
                                    <Swiper direction={'vertical'} slidesPerView={4} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                        modules={[Autoplay]}  className="swiper-vertical auction-swiper swiper-domains">
                                            <SwiperSlide>
                                                <div className="">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div>
                                                            <span className="avatar avatar-sm bg-secondary svg-white avatar-rounded">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 15v4H5v-4h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 18.5c-.82 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 5v4H5V5h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 8.5c-.82 0-1.5-.67-1.5-1.5S6.18 5.5 7 5.5s1.5.68 1.5 1.5S7.83 8.5 7 8.5z"></path></svg>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="fw-semibold mb-0">spotechsolution.net</p>
                                                            <small className="text-muted">10 Bids , 27 Days Left</small>
                                                        </div>
                                                        <p className="fw-semibold">$12.00</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div>
                                                            <span className="avatar avatar-sm bg-warning svg-white avatar-rounded">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 15v4H5v-4h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 18.5c-.82 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 5v4H5V5h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 8.5c-.82 0-1.5-.67-1.5-1.5S6.18 5.5 7 5.5s1.5.68 1.5 1.5S7.83 8.5 7 8.5z"></path></svg>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="fw-semibold mb-0">sanctuseadidunt.edu</p>
                                                            <small className="text-muted">21 Bids , 32 Days Left</small>
                                                        </div>
                                                        <p className="fw-semibold">$56.00</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div>
                                                            <span className="avatar avatar-sm bg-info svg-white avatar-rounded">
                                                                <img src="../../assets/images/marketplace/new-arrivals/3.png" alt="img" className="img-fluid w-100"/>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="fw-semibold mb-0">incididunt.org</p>
                                                            <small className="text-muted">17 Bids , 12 Days Left</small>
                                                        </div>
                                                        <p className="fw-semibold">$16.00</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div>
                                                            <span className="avatar avatar-sm bg-secondary svg-white avatar-rounded">
                                                                <img src="../../assets/images/marketplace/new-arrivals/1.png" alt="img" className="img-fluid w-100"/>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="fw-semibold mb-0">dwaynestel.net</p>
                                                            <small className="text-muted">12 Bids , 27 Days Left</small>
                                                        </div>
                                                        <p className="fw-semibold">$23.00</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div>
                                                            <span className="avatar avatar-sm bg-warning svg-white avatar-rounded">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 15v4H5v-4h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 18.5c-.82 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 5v4H5V5h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 8.5c-.82 0-1.5-.67-1.5-1.5S6.18 5.5 7 5.5s1.5.68 1.5 1.5S7.83 8.5 7 8.5z"></path></svg>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="fw-semibold mb-0">sanctuseadidunt.edu</p>
                                                            <small className="text-muted">21 Bids , 32 Days Left</small>
                                                        </div>
                                                        <p className="fw-semibold">$56.00</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                    </Swiper>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
				</div>
			</section>
            {/* End:: Section-1 */}

            {/* Start:: Section-2 */}
            <section className="section bg-white">
                <div className="container text-center">
                    <div className="heading-section mb-4">
                        <p className="fs-12 fw-semibold mb-1"><span className="landing-section-heading text-gradient">Steps</span></p>
                        <div className="heading-title">How it works ?</div>
                        <div className="heading-description">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                    </div>
                    <div className="row text-start">
                        <Col lg={4} className="col-12">
                            <Card className="custom-card steps-card first">
                                <Card.Body className="rounded p-4">
                                    <div className="main-card-icon primary mb-4">
                                        <div className="avatar avatar-lg bg-primary-transparent border border-primary border-opacity-10">
                                            <div className="avatar avatar-sm svg-white">
                                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path 
                                            //    style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;text-decoration-color:#000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none" 
                                               d="m12.5 4.9999251c-2.4670541 0-4.5 2.0329459-4.5 4.5v45c0 2.4670541 2.0329521 4.4999916 4.5 4.5h22a1.5001499 1.5001499 0 1 0 0-3h-22c-0.85695207-2.92e-6 -1.5-0.64305409-1.5-1.5v-45c0-0.85694591 0.64305409-1.5 1.5-1.5h33c0.85694591 0 1.5 0.64305409 1.5 1.5v18a1.5001499 1.5001499 0 1 0 3 0v-18c0-2.4670541-2.0329459-4.5-4.5-4.5z" color="#000"/><rect width="20" height="3" x="19.021" y="20" rx="1.5" ry="1.5"/><rect width="20" height="3" x="19.021" y="26" rx="1.5" ry="1.5"/><rect width="12" height="3" x="19.021" y="32" rx="1.5" ry="1.5"/><path 
                                            //    style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;text-decoration-color:#000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none"
                                                d="m54.890477 30.837319c-2.1365316-1.2335271-4.9135872-0.48941726-6.1471143 1.6471143l-6.9990234 12.122664a1.50015 1.50015 0 1 0 2.5980762 1.5l6.9990234-12.122664c0.42847293-0.74213689 1.3069012-0.97751103 2.0490381-0.54903811l0.8660254 0.5c0.7421369 0.42847293 0.97751103 1.3069012 0.54903811 2.0490381l-10.717773 18.563728-2.8746289 0.97900337-0.58947268-2.9790034 1.21875-2.1109369a1.50015 1.50015 0 1 0-2.5980762-1.5l-1.5 2.5980762a1.50015 1.50015 0 0 0-0.17276402 1.0414236l1.0310889 5.2141016a1.50015 1.50015 0 0 0 1.955323 1.1289062l5.0310889-1.7141016a1.50015 1.50015 0 0 0 0.81551724-0.6703298l10.999023-19.050867c1.2335271-2.1365316 0.48941727-4.9135872-1.6471143-6.1471143z" color="#000"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className="fw-semibold">
                                        Evaluate Domain
                                    </h5>
                                    <p className="op-8">
                                        Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea.
                                    </p>
                                    <Link scroll={false} className="mx-1 text-primary fw-semibold" href="#!">Register Now<i className="ri-arrow-right-s-line align-middle rtl-rotate"></i></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} className="col-12">
                            <Card className="custom-card steps-card second">
                                <Card.Body className="rounded p-4">
                                    <div className="main-card-icon secondary mb-4">
                                        <div className="avatar avatar-lg bg-secondary-transparent border border-secondary border-opacity-10">
                                            <div className="avatar avatar-sm svg-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="usd-circle"><path d="M10.75,8H12h0.0006104H15.5C15.776123,8,16,7.776123,16,7.5S15.776123,7,15.5,7h-3V5.5C12.5,5.223877,12.276123,5,12,5s-0.5,0.223877-0.5,0.5V7h-0.75C9.2312012,7,8,8.2312012,8,9.75s1.2312012,2.75,2.75,2.75h2.5c0.9664917,0,1.75,0.7835083,1.75,1.75S14.2164917,16,13.25,16H8.5C8.223877,16,8,16.223877,8,16.5S8.223877,17,8.5,17h3v1.5c0,0.0001831,0,0.0003662,0,0.0005493C11.5001831,18.7765503,11.723999,19.0001831,12,19c0.0001831,0,0.0003662,0,0.0006104,0c0.2759399-0.0001831,0.4995728-0.223999,0.4993896-0.5V17h0.75c1.5187988,0,2.75-1.2312012,2.75-2.75s-1.2312012-2.75-2.75-2.75h-2.5C9.7835083,11.5,9,10.7164917,9,9.75S9.7835083,8,10.75,8z M12,1C5.9248657,1,1,5.9248657,1,12s4.9248657,11,11,11c6.0722656-0.0068359,10.9931641-4.9277344,11-11C23,5.9248657,18.0751343,1,12,1z M12,22C6.4771729,22,2,17.5228271,2,12S6.4771729,2,12,2c5.5201416,0.0064697,9.9935303,4.4798584,10,10C22,17.5228271,17.5228271,22,12,22z"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className="fw-semibold">
                                        Start Bidding
                                    </h5>
                                    <p className="op-8">
                                        Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea.
                                    </p>
                                    <Link scroll={false} className="mx-1 text-secondary fw-semibold" href="#!">Start Bidding<i className="ri-arrow-right-s-line align-middle rtl-rotate"></i></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} className="col-12">
                            <Card className="custom-card steps-card third">
                                <Card.Body className="rounded p-4">
                                    <div className="main-card-icon success mb-4">
                                        <div className="avatar avatar-lg bg-success-transparent border border-success border-opacity-10">
                                            <div className="avatar avatar-sm svg-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="globe"><path d="M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5202026-0.0062866,9.9937134-4.4797974,10-10C22,6.4771729,17.5228271,2,12,2z M8.6616211,3.6469116C7.6134033,4.7984009,6.8104248,6.4903564,6.3721313,8.5H3.7061157C4.6392822,6.2913818,6.4317627,4.5390625,8.6616211,3.6469116z M3,12c0-0.8684692,0.1296997-1.7054443,0.3592529-2.5H6.18927C6.0700073,10.2980347,6,11.131958,6,12s0.0700073,1.7019653,0.18927,2.5H3.3592529C3.1296997,13.7054443,3,12.8684692,3,12z M3.7061157,15.5h2.6660156c0.4382935,2.0096436,1.241272,3.7015991,2.2894897,4.8530884C6.4317627,19.4609375,4.6392822,17.7086182,3.7061157,15.5z M11.5,20.9544067C9.6489868,20.6220093,8.0916138,18.4655151,7.3935547,15.5H11.5V20.9544067z M11.5,14.5H7.2003174C7.0723267,13.7052002,7,12.868103,7,12s0.0723267-1.7052002,0.2003174-2.5H11.5V14.5z M11.5,8.5H7.3935547C8.0916138,5.5344849,9.6489868,3.3779907,11.5,3.0455933V8.5z M20.2905884,8.5h-2.6627197c-0.4376221-2.0064697-1.2385864-3.6965942-2.2844238-4.8479614C17.5685425,4.5457153,19.3571777,6.2954712,20.2905884,8.5z M12.5,3.0455933C14.3510132,3.3779907,15.9083862,5.5344849,16.6064453,8.5H12.5V3.0455933z M12.5,9.5h4.2996826C16.9276733,10.2947998,17,11.131897,17,12s-0.0723267,1.7052002-0.2003174,2.5H12.5V9.5z M12.5,20.9544067V15.5h4.1064453C15.9083862,18.4655151,14.3510132,20.6220093,12.5,20.9544067z M15.3383789,20.3530884c1.0482178-1.1514893,1.8511963-2.8434448,2.2894897-4.8530884h2.6660156C19.3607178,17.7086182,17.5682373,19.4609375,15.3383789,20.3530884z M17.81073,14.5C17.9299927,13.7019653,18,12.868042,18,12s-0.0700073-1.7019653-0.18927-2.5h2.8274536C20.8684692,10.2944946,20.9990234,11.1314697,21,12c0,0.8684692-0.1296997,1.7054443-0.3592529,2.5H17.81073z"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className="fw-semibold">
                                        Get The Domain / Website
                                    </h5>
                                    <p className="op-8">
                                        Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea.
                                    </p>
                                    <Link scroll={false} className="mx-1 text-success fw-semibold" href="#!">Buy Now<i className="ri-arrow-right-s-line align-middle rtl-rotate"></i></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                </div>
            </section>
            {/* End:: Section-2 */}            

            {/* Start:: Section-3 */}
            <section className="py-5 bg-banner">
                <div className="container">
                    <div className="row justify-content-center">
                        <Col lg={10}>
                            <div className="row gy-4 text-center">
                                <Col md={3}>
                                    <div>
                                        <h3 className="mb-1 fw-semibold text-fixed-white">45K+</h3>
                                        <h6 className="mb-0 text-fixed-white">Domains Listings</h6>
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
            {/* End:: Section-3 */}

            {/* Start:: Section-4 */}
            <section className="section">
				<div className="container">
                    <Tab.Container defaultActiveKey="first">
                        <Col xl={12}>
                            <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2 mb-4">
                                <div className="heading-section text-start">
                                    <div className="heading-title">Browse Domains</div>
                                    <div className="heading-description">View the all Domains</div>
                                </div>
                                <div className="min-w-fit-content">
                                    {/* Nav tabs */}
                                    <Nav className="nav-tabs tab-style-8 scaleX custom-nav-tabs" id="myTab" role="tablist">
                                        <Nav.Item role="presentation">
                                            <Nav.Link eventKey="first" href="#all-tab" className="nav-link" data-bs-toggle="tab">All</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item role="presentation">
                                            <Nav.Link eventKey="second" href="#websites-tab" className="nav-link" data-bs-toggle="tab">Websites</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item role="presentation">
                                            <Nav.Link eventKey="third" href="#domains-tab" className="nav-link" data-bs-toggle="tab">Domains</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                            </div>
                        </Col>
                        <Tab.Content className="">
                            <Tab.Pane eventKey="first" className="border-0 p-0 show" id="all-tab" role="tabpanel"> 
                                <Row>
                                    <Col lg={6}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <div className="btn-list float-end">
                                                    <Link scroll={false} href="#!" className="wishlist-icon" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="bi bi-heart"></i></span></Link>
                                                </div>
                                                <div className="d-flex align-items-center flex-wrap gap-3 mb-3">
                                                    <div>
                                                        <span className="domain-icon avatar avatar-xl bg-primary-transparent svg-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M919.2 404.8H104.8l6.2-19.5c12-37.9 29.2-73.8 51.4-106.9 17.8-26.6 38.6-51.2 62-73.1C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.7 113.8 23.4 21.9 44.2 46.5 62 73.1 22.2 33.1 39.4 69 51.4 106.9l6.1 19.5zm-772.9-30h731.4c-10.5-28-24.2-54.7-41-79.7-16.5-24.7-35.9-47.5-57.6-67.9C706.5 159 611.6 121.5 512 121.5c-99.6 0-194.5 37.5-267.1 105.7-21.7 20.4-41.1 43.2-57.6 67.9-16.8 24.9-30.5 51.7-41 79.7zM512 932.5c-107.3 0-209.5-40.4-287.7-113.8-23.4-22-44.2-46.5-62-73.1-22.1-33.1-39.4-69-51.4-106.9l-6.2-19.5h814.4l-6.2 19.5c-11.9 37.8-29.2 73.8-51.4 106.9-17.8 26.5-38.6 51.1-62 73.1-78.1 73.4-180.2 113.8-287.5 113.8zM146.3 649.2c10.5 28 24.3 54.8 41 79.7 16.5 24.7 35.9 47.5 57.6 67.9C317.5 865 412.4 902.5 512 902.5c99.6 0 194.5-37.5 267.1-105.7 21.7-20.4 41.1-43.2 57.6-67.9 16.7-25 30.5-51.7 41-79.7H146.3z"></path><path d="M512 932.5c-39.6 0-78.5-18.5-112.3-53.6-31.5-32.6-58.6-79.5-78.4-135.5-11.7-33.1-20.8-69-27-106.7l-2.9-17.4h441.2l-2.9 17.4c-6.2 37.8-15.3 73.7-27 106.7-19.8 56-46.9 102.9-78.4 135.5-33.8 35.1-72.7 53.6-112.3 53.6zM327 649.2c5.7 29.6 13.3 57.9 22.6 84.2 18.4 52 43.2 95.1 71.7 124.7 28.5 29.5 59 44.5 90.7 44.5s62.3-15 90.7-44.5c28.5-29.5 53.3-72.7 71.7-124.7 9.3-26.3 16.9-54.6 22.6-84.2H327zm405.6-244.4H291.4l2.9-17.4c6.2-37.8 15.3-73.7 27-106.7 19.8-56 46.9-102.9 78.4-135.5C433.5 110 472.4 91.5 512 91.5c39.6 0 78.5 18.5 112.3 53.6 31.5 32.6 58.6 79.5 78.4 135.5 11.7 33.1 20.8 69 27 106.7l2.9 17.5zm-405.6-30h370c-5.7-29.6-13.3-57.9-22.6-84.2-18.4-52-43.2-95.1-71.7-124.7-28.5-29.5-59-44.5-90.7-44.5s-62.3 15-90.7 44.5c-28.5 29.5-53.3 72.7-71.7 124.7-9.3 26.3-16.9 54.6-22.6 84.2z"></path><path d="M497 634.2h30v283.3h-30zM497 106.5h30v283.3h-30z"></path><path d="M512 341c-64.2 0-125.8-14.1-183.1-41.9-38.3-18.6-73.5-42.8-104.6-71.9l-11.7-10.9 11.7-10.9C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.6 113.8l11.7 10.9-11.7 10.9c-31.1 29.2-66.3 53.4-104.6 71.9-57.2 27.9-118.8 42-183 42zM257 216.2c25.8 22.3 54.3 41 85 55.9 53.2 25.8 110.4 38.8 170 38.8 59.6 0 116.8-13.1 170-38.9 30.7-14.8 59.2-33.6 85-55.9-70.9-61.2-160.8-94.7-255-94.7-94.2.1-184.1 33.6-255 94.8zm255 716.3c-107.3 0-209.5-40.4-287.7-113.8l-11.7-10.9 11.7-10.9c31.1-29.2 66.3-53.4 104.6-72C386.2 697.1 447.8 683 512 683c64.2 0 125.8 14.1 183.1 41.9 38.3 18.5 73.4 42.7 104.6 71.9l11.7 10.9-11.7 10.9C721.5 892.1 619.3 932.5 512 932.5zM257 807.8c70.9 61.2 160.8 94.7 255 94.7 94.2 0 184.1-33.5 255-94.7-25.8-22.3-54.3-41-85-55.9-53.2-25.8-110.4-38.9-170-38.9-59.6 0-116.8 13.1-170 38.8-30.7 14.9-59.2 33.7-85 56zm684.2-158.6H82.8c-10.8 0-19.6-8.8-19.6-19.6V394.4c0-10.8 8.8-19.6 19.6-19.6h858.5c10.8 0 19.6 8.8 19.6 19.6v235.3c-.1 10.7-8.9 19.5-19.7 19.5zm-848-30h837.6V404.8H93.2v214.4z"></path><path d="M314.1 588H282l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM804.7 588h-32.1l-39.1-88.4-39 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM559.4 588h-32.1l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM843.2 558h29.4v30h-29.4z"></path></svg>
                                                        </span>
                                                    </div>
                                                    <div className="">
                                                        <span className="badge rounded-pill bg-danger-transparent mb-1">Domain</span>
                                                        <h5 className="fw-semibold mb-0 d-flex align-items-center">
                                                            <Link scroll={false} href="/domain/domaindetails/"> spotechtechnical.com
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Verified Domain</Tooltip>}>
                                                                <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified Domain"></i>
                                                            </OverlayTrigger>
                                                            </Link>
                                                        </h5>
                                                        <Link scroll={false} href="#!"><i className="bi bi-geo-alt fs-11"></i> Kondapur, Hyderabad </Link>
                                                    </div>
                                                </div>
                                                <span className="text-danger float-end" data-bs-toggle="tooltip" title="Valid Till"><i className="bi bi-exclamation-circle me-1"></i>25 Days Left</span>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1"><i className="bi bi-geo-alt text-muted"></i> Net Profit : NA </Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default"><i className="bi bi-briefcase text-muted me-1"></i> Industry : Business</Link>
                                                </div>
                                            </Card.Body>
                                            <Card.Footer>
                                                <div className="d-flex align-items-center flex-wrap gap-2">
                                                    <div className="flex-grow-1">
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Domains Age</Tooltip>}>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-info-transparent" data-bs-toggle="tooltip" title="Domains Age"><i className="bi bi-people me-1"></i>Domain Age : 10 years</Link>
                                                    </OverlayTrigger>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Bids : 09</Link>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="btn btn-wave btn-primary">
                                                        View <i className="ri-arrow-right-line"></i>
                                                    </Link>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                    <Col lg={6}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <div className="btn-list float-end">
                                                    <Link scroll={false} href="#!" className="wishlist-icon" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="bi bi-heart"></i></span></Link>
                                                </div>
                                                <div className="d-flex align-items-center flex-wrap gap-3 mb-3">
                                                    <div>
                                                        <span className="avatar avatar-xl bg-primary-transparent">
                                                            <img src="../../assets/images/marketplace/new-arrivals/1.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                                        </span>
                                                    </div>
                                                    <div className="">
                                                        <span className="badge rounded-pill bg-danger-transparent mb-1">Website</span>
                                                        <h5 className="fw-semibold mb-0 d-flex align-items-center">
                                                        <Link scroll={false} href="/domain/domaindetails/"> gtechnical.com 
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Verified Domain</Tooltip>}>
                                                           <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified Domain"></i>
                                                        </OverlayTrigger>
                                                        </Link></h5>
                                                        <Link scroll={false} href="#!"><i className="bi bi-geo-alt fs-11"></i> Gachbowli, Hyderabad </Link>
                                                    </div>
                                                </div>
                                                <span className="text-danger float-end" data-bs-toggle="tooltip" title="Valid Till"><i className="bi bi-exclamation-circle me-1"></i>10 Days Left</span>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1"><i className="bi bi-geo-alt text-muted me-1"></i> Net Profit : $45.00 </Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default"><i className="bi bi-briefcase text-muted me-1"></i> Industry : Corporate</Link>
                                                </div>
                                            </Card.Body>
                                            <Card.Footer>
                                                <div className="d-flex align-items-center flex-wrap gap-2">
                                                    <div className="flex-grow-1">
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Domains Age</Tooltip>}>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-info-transparent me-1" data-bs-toggle="tooltip" title="Domains Age"><i className="bi bi-people me-1"></i>Website Age : 12 years</Link>
                                                    </OverlayTrigger>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Bids : 10</Link>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="btn btn-wave btn-primary">
                                                        View <i className="ri-arrow-right-line"></i>
                                                    </Link>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                    <Col lg={6}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <div className="btn-list float-end">
                                                    <Link scroll={false} href="#!" className="wishlist-icon" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="bi bi-heart"></i></span></Link>
                                                </div>
                                                <div className="d-flex align-items-center flex-wrap gap-3 mb-3">
                                                    <div>
                                                        <span className="avatar avatar-xl bg-primary-transparent svg-primary shadow-sm">
                                                            <img src="../../assets/images/marketplace/new-arrivals/2.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                                        </span>
                                                    </div>
                                                    <div className="">
                                                        <span className="badge rounded-pill bg-danger-transparent mb-1">Website</span>
                                                        <h5 className="fw-semibold mb-0 d-flex align-items-center">
                                                            <Link scroll={false} href="/domain/domaindetails/"> spoteksolution.com 
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Verified Domain</Tooltip>}>
                                                                    <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified Domain"></i>
                                                                </OverlayTrigger>
                                                            </Link>
                                                     </h5>
                                                        <Link scroll={false} href="#!"><i className="bi bi-geo-alt fs-11"></i> Diego, Pune </Link>
                                                    </div>
                                                </div>
                                                <span className="text-danger float-end" data-bs-toggle="tooltip" title="Valid Till"><i className="bi bi-exclamation-circle me-1"></i>09 Days Left</span>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1"><i className="bi bi-geo-alt text-muted me-1"></i> Net Profit : $12.00 </Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default"><i className="bi bi-briefcase text-muted me-1"></i> Industry : Marketing</Link>
                                                </div>
                                            </Card.Body>
                                            <Card.Footer>
                                                <div className="d-flex align-items-center flex-wrap gap-2">
                                                    <div className="flex-grow-1">
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Domains Age</Tooltip>}>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-info-transparent me-1" data-bs-toggle="tooltip" title="Domains Age"><i className="bi bi-people me-1"></i>Website Age : 19 years</Link>
                                                    </OverlayTrigger>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Bids : 24</Link>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="btn btn-wave btn-primary">
                                                        View <i className="ri-arrow-right-line"></i>
                                                    </Link>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                    <Col lg={6}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <div className="btn-list float-end">
                                                    <Link scroll={false} href="#!" className="wishlist-icon" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="bi bi-heart"></i></span></Link>
                                                </div>
                                                <div className="d-flex align-items-center flex-wrap gap-3 mb-3">
                                                    <div>
                                                        <span className="domain-icon avatar avatar-xl bg-warning-transparent svg-warning warning">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M919.2 404.8H104.8l6.2-19.5c12-37.9 29.2-73.8 51.4-106.9 17.8-26.6 38.6-51.2 62-73.1C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.7 113.8 23.4 21.9 44.2 46.5 62 73.1 22.2 33.1 39.4 69 51.4 106.9l6.1 19.5zm-772.9-30h731.4c-10.5-28-24.2-54.7-41-79.7-16.5-24.7-35.9-47.5-57.6-67.9C706.5 159 611.6 121.5 512 121.5c-99.6 0-194.5 37.5-267.1 105.7-21.7 20.4-41.1 43.2-57.6 67.9-16.8 24.9-30.5 51.7-41 79.7zM512 932.5c-107.3 0-209.5-40.4-287.7-113.8-23.4-22-44.2-46.5-62-73.1-22.1-33.1-39.4-69-51.4-106.9l-6.2-19.5h814.4l-6.2 19.5c-11.9 37.8-29.2 73.8-51.4 106.9-17.8 26.5-38.6 51.1-62 73.1-78.1 73.4-180.2 113.8-287.5 113.8zM146.3 649.2c10.5 28 24.3 54.8 41 79.7 16.5 24.7 35.9 47.5 57.6 67.9C317.5 865 412.4 902.5 512 902.5c99.6 0 194.5-37.5 267.1-105.7 21.7-20.4 41.1-43.2 57.6-67.9 16.7-25 30.5-51.7 41-79.7H146.3z"></path><path d="M512 932.5c-39.6 0-78.5-18.5-112.3-53.6-31.5-32.6-58.6-79.5-78.4-135.5-11.7-33.1-20.8-69-27-106.7l-2.9-17.4h441.2l-2.9 17.4c-6.2 37.8-15.3 73.7-27 106.7-19.8 56-46.9 102.9-78.4 135.5-33.8 35.1-72.7 53.6-112.3 53.6zM327 649.2c5.7 29.6 13.3 57.9 22.6 84.2 18.4 52 43.2 95.1 71.7 124.7 28.5 29.5 59 44.5 90.7 44.5s62.3-15 90.7-44.5c28.5-29.5 53.3-72.7 71.7-124.7 9.3-26.3 16.9-54.6 22.6-84.2H327zm405.6-244.4H291.4l2.9-17.4c6.2-37.8 15.3-73.7 27-106.7 19.8-56 46.9-102.9 78.4-135.5C433.5 110 472.4 91.5 512 91.5c39.6 0 78.5 18.5 112.3 53.6 31.5 32.6 58.6 79.5 78.4 135.5 11.7 33.1 20.8 69 27 106.7l2.9 17.5zm-405.6-30h370c-5.7-29.6-13.3-57.9-22.6-84.2-18.4-52-43.2-95.1-71.7-124.7-28.5-29.5-59-44.5-90.7-44.5s-62.3 15-90.7 44.5c-28.5 29.5-53.3 72.7-71.7 124.7-9.3 26.3-16.9 54.6-22.6 84.2z"></path><path d="M497 634.2h30v283.3h-30zM497 106.5h30v283.3h-30z"></path><path d="M512 341c-64.2 0-125.8-14.1-183.1-41.9-38.3-18.6-73.5-42.8-104.6-71.9l-11.7-10.9 11.7-10.9C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.6 113.8l11.7 10.9-11.7 10.9c-31.1 29.2-66.3 53.4-104.6 71.9-57.2 27.9-118.8 42-183 42zM257 216.2c25.8 22.3 54.3 41 85 55.9 53.2 25.8 110.4 38.8 170 38.8 59.6 0 116.8-13.1 170-38.9 30.7-14.8 59.2-33.6 85-55.9-70.9-61.2-160.8-94.7-255-94.7-94.2.1-184.1 33.6-255 94.8zm255 716.3c-107.3 0-209.5-40.4-287.7-113.8l-11.7-10.9 11.7-10.9c31.1-29.2 66.3-53.4 104.6-72C386.2 697.1 447.8 683 512 683c64.2 0 125.8 14.1 183.1 41.9 38.3 18.5 73.4 42.7 104.6 71.9l11.7 10.9-11.7 10.9C721.5 892.1 619.3 932.5 512 932.5zM257 807.8c70.9 61.2 160.8 94.7 255 94.7 94.2 0 184.1-33.5 255-94.7-25.8-22.3-54.3-41-85-55.9-53.2-25.8-110.4-38.9-170-38.9-59.6 0-116.8 13.1-170 38.8-30.7 14.9-59.2 33.7-85 56zm684.2-158.6H82.8c-10.8 0-19.6-8.8-19.6-19.6V394.4c0-10.8 8.8-19.6 19.6-19.6h858.5c10.8 0 19.6 8.8 19.6 19.6v235.3c-.1 10.7-8.9 19.5-19.7 19.5zm-848-30h837.6V404.8H93.2v214.4z"></path><path d="M314.1 588H282l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM804.7 588h-32.1l-39.1-88.4-39 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM559.4 588h-32.1l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM843.2 558h29.4v30h-29.4z"></path></svg>
                                                        </span>
                                                    </div>
                                                    <div className="">
                                                        <span className="badge rounded-pill bg-danger-transparent mb-1">Domain</span>
                                                        <h5 className="fw-semibold mb-0 d-flex align-items-center">
                                                            <Link scroll={false} href="/domain/domaindetails/"> dwaynestel.net 
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Verified Domain</Tooltip>}>
                                                                        <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified Domain"></i>
                                                                </OverlayTrigger>
                                                            </Link>
                                                        </h5>
                                                        <Link scroll={false} href="#!"><i className="bi bi-geo-alt fs-11"></i> Spoesh, Pune </Link>
                                                    </div>
                                                </div>
                                                <span className="text-danger float-end" data-bs-toggle="tooltip" title="Valid Till"><i className="bi bi-exclamation-circle me-1"></i>13 Days Left</span>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1"><i className="bi bi-geo-alt text-muted me-1"></i> Net Profit : NA </Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default"><i className="bi bi-briefcase text-muted me-1"></i> Industry : Corporate</Link>
                                                </div>
                                            </Card.Body>
                                            <Card.Footer>
                                                <div className="d-flex align-items-center flex-wrap gap-2">
                                                    <div className="flex-grow-1">
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Domains Age</Tooltip>}>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-info-transparent me-1" data-bs-toggle="tooltip" title="Domains Age"><i className="bi bi-people me-1"></i>Website Age : 07 years</Link>
                                                    </OverlayTrigger>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Bids : 32</Link>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="btn btn-wave btn-primary">
                                                        View <i className="ri-arrow-right-line"></i>
                                                    </Link>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                    <Col lg={6}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <div className="btn-list float-end">
                                                    <Link scroll={false} href="#!" className="wishlist-icon" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="bi bi-heart"></i></span></Link>
                                                </div>
                                                <div className="d-flex align-items-center flex-wrap gap-3 mb-3">
                                                    <div>
                                                        <span className="domain-icon avatar avatar-xl bg-info-transparent svg-info info">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M919.2 404.8H104.8l6.2-19.5c12-37.9 29.2-73.8 51.4-106.9 17.8-26.6 38.6-51.2 62-73.1C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.7 113.8 23.4 21.9 44.2 46.5 62 73.1 22.2 33.1 39.4 69 51.4 106.9l6.1 19.5zm-772.9-30h731.4c-10.5-28-24.2-54.7-41-79.7-16.5-24.7-35.9-47.5-57.6-67.9C706.5 159 611.6 121.5 512 121.5c-99.6 0-194.5 37.5-267.1 105.7-21.7 20.4-41.1 43.2-57.6 67.9-16.8 24.9-30.5 51.7-41 79.7zM512 932.5c-107.3 0-209.5-40.4-287.7-113.8-23.4-22-44.2-46.5-62-73.1-22.1-33.1-39.4-69-51.4-106.9l-6.2-19.5h814.4l-6.2 19.5c-11.9 37.8-29.2 73.8-51.4 106.9-17.8 26.5-38.6 51.1-62 73.1-78.1 73.4-180.2 113.8-287.5 113.8zM146.3 649.2c10.5 28 24.3 54.8 41 79.7 16.5 24.7 35.9 47.5 57.6 67.9C317.5 865 412.4 902.5 512 902.5c99.6 0 194.5-37.5 267.1-105.7 21.7-20.4 41.1-43.2 57.6-67.9 16.7-25 30.5-51.7 41-79.7H146.3z"></path><path d="M512 932.5c-39.6 0-78.5-18.5-112.3-53.6-31.5-32.6-58.6-79.5-78.4-135.5-11.7-33.1-20.8-69-27-106.7l-2.9-17.4h441.2l-2.9 17.4c-6.2 37.8-15.3 73.7-27 106.7-19.8 56-46.9 102.9-78.4 135.5-33.8 35.1-72.7 53.6-112.3 53.6zM327 649.2c5.7 29.6 13.3 57.9 22.6 84.2 18.4 52 43.2 95.1 71.7 124.7 28.5 29.5 59 44.5 90.7 44.5s62.3-15 90.7-44.5c28.5-29.5 53.3-72.7 71.7-124.7 9.3-26.3 16.9-54.6 22.6-84.2H327zm405.6-244.4H291.4l2.9-17.4c6.2-37.8 15.3-73.7 27-106.7 19.8-56 46.9-102.9 78.4-135.5C433.5 110 472.4 91.5 512 91.5c39.6 0 78.5 18.5 112.3 53.6 31.5 32.6 58.6 79.5 78.4 135.5 11.7 33.1 20.8 69 27 106.7l2.9 17.5zm-405.6-30h370c-5.7-29.6-13.3-57.9-22.6-84.2-18.4-52-43.2-95.1-71.7-124.7-28.5-29.5-59-44.5-90.7-44.5s-62.3 15-90.7 44.5c-28.5 29.5-53.3 72.7-71.7 124.7-9.3 26.3-16.9 54.6-22.6 84.2z"></path><path d="M497 634.2h30v283.3h-30zM497 106.5h30v283.3h-30z"></path><path d="M512 341c-64.2 0-125.8-14.1-183.1-41.9-38.3-18.6-73.5-42.8-104.6-71.9l-11.7-10.9 11.7-10.9C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.6 113.8l11.7 10.9-11.7 10.9c-31.1 29.2-66.3 53.4-104.6 71.9-57.2 27.9-118.8 42-183 42zM257 216.2c25.8 22.3 54.3 41 85 55.9 53.2 25.8 110.4 38.8 170 38.8 59.6 0 116.8-13.1 170-38.9 30.7-14.8 59.2-33.6 85-55.9-70.9-61.2-160.8-94.7-255-94.7-94.2.1-184.1 33.6-255 94.8zm255 716.3c-107.3 0-209.5-40.4-287.7-113.8l-11.7-10.9 11.7-10.9c31.1-29.2 66.3-53.4 104.6-72C386.2 697.1 447.8 683 512 683c64.2 0 125.8 14.1 183.1 41.9 38.3 18.5 73.4 42.7 104.6 71.9l11.7 10.9-11.7 10.9C721.5 892.1 619.3 932.5 512 932.5zM257 807.8c70.9 61.2 160.8 94.7 255 94.7 94.2 0 184.1-33.5 255-94.7-25.8-22.3-54.3-41-85-55.9-53.2-25.8-110.4-38.9-170-38.9-59.6 0-116.8 13.1-170 38.8-30.7 14.9-59.2 33.7-85 56zm684.2-158.6H82.8c-10.8 0-19.6-8.8-19.6-19.6V394.4c0-10.8 8.8-19.6 19.6-19.6h858.5c10.8 0 19.6 8.8 19.6 19.6v235.3c-.1 10.7-8.9 19.5-19.7 19.5zm-848-30h837.6V404.8H93.2v214.4z"></path><path d="M314.1 588H282l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM804.7 588h-32.1l-39.1-88.4-39 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM559.4 588h-32.1l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM843.2 558h29.4v30h-29.4z"></path></svg>
                                                        </span>
                                                    </div>
                                                    <div className="">
                                                        <span className="badge rounded-pill bg-danger-transparent mb-1">Domain</span>
                                                        <h5 className="fw-semibold mb-0 d-flex align-items-center">
                                                        <Link scroll={false} href="/domain/domaindetails/"> spoteksolution.com 
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Verified Domain</Tooltip>}>
                                                                 <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified Domain"></i>
                                                             </OverlayTrigger>
                                                        </Link>
                                                        </h5>
                                                        <Link scroll={false} href="#!"><i className="bi bi-geo-alt fs-11"></i> Diego, Pune </Link>
                                                    </div>
                                                </div>
                                                <span className="text-danger float-end" data-bs-toggle="tooltip" title="Valid Till"><i className="bi bi-exclamation-circle me-1"></i>09 Days Left</span>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1"><i className="bi bi-geo-alt text-muted me-1"></i> Net Profit : NA </Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default"><i className="bi bi-briefcase text-muted me-1"></i> Industry : Marketing</Link>
                                                </div>
                                            </Card.Body>
                                            <Card.Footer>
                                                <div className="d-flex align-items-center flex-wrap gap-2">
                                                    <div className="flex-grow-1">
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Domains Age</Tooltip>}>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-info-transparent me-1" data-bs-toggle="tooltip" title="Domains Age"><i className="bi bi-people me-1"></i>Domain Age : 19 years</Link>
                                                    </OverlayTrigger>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Bids : 24</Link>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="btn btn-wave btn-primary">
                                                        View <i className="ri-arrow-right-line"></i>
                                                    </Link>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                    <Col lg={6}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <div className="btn-list float-end">
                                                    <Link scroll={false} href="#!" className="wishlist-icon" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="bi bi-heart"></i></span></Link>
                                                </div>
                                                <div className="d-flex align-items-center flex-wrap gap-3 mb-3">
                                                    <div>
                                                        <span className="avatar avatar-xl bg-info-transparent svg-info shadow-sm">
                                                            <img src="../../assets/images/realestate/properties/5.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                                        </span>
                                                    </div>
                                                    <div className="">
                                                        <span className="badge rounded-pill bg-danger-transparent mb-1">Website</span>
                                                        <h5 className="fw-semibold mb-0 d-flex align-items-center">
                                                        <Link scroll={false} href="/domain/domaindetails/"> Achlles.net 
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Verified Domain</Tooltip>}>
                                                            <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified Domain"></i>
                                                        </OverlayTrigger>
                                                        </Link>
                                                        </h5>
                                                        <Link scroll={false} href="#!"><i className="bi bi-geo-alt fs-11"></i> Spoesh, Pune </Link>
                                                    </div>
                                                </div>
                                                <span className="text-danger float-end" data-bs-toggle="tooltip" title="Valid Till"><i className="bi bi-exclamation-circle me-1"></i>13 Days Left</span>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1"><i className="bi bi-geo-alt text-muted me-1"></i> Net Profit : $345.00 </Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default"><i className="bi bi-briefcase text-muted me-1"></i> Industry : Corporate</Link>
                                                </div>
                                            </Card.Body>
                                            <Card.Footer>
                                                <div className="d-flex align-items-center flex-wrap gap-2">
                                                    <div className="flex-grow-1">
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Domains Age</Tooltip>}>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-info-transparent me-1" data-bs-toggle="tooltip" title="Domains Age"><i className="bi bi-people me-1"></i>Website Age : 07 years</Link>
                                                    </OverlayTrigger>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Bids : 32</Link>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="btn btn-wave btn-primary">
                                                        View <i className="ri-arrow-right-line"></i>
                                                    </Link>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second" className="border-0 p-0" id="websites-tab" role="tabpanel"> 
                                <Row>
                                    <Col lg={6}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <div className="btn-list float-end">
                                                    <Link scroll={false} href="#!" className="wishlist-icon" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="bi bi-heart"></i></span></Link>
                                                </div>
                                                <div className="d-flex align-items-center flex-wrap gap-3 mb-3">
                                                    <div>
                                                        <span className="avatar avatar-xl bg-primary-transparent">
                                                            <img src="../../assets/images/marketplace/new-arrivals/1.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                                        </span>
                                                    </div>
                                                    <div className="">
                                                        <span className="badge rounded-pill bg-danger-transparent mb-1">Website</span>
                                                        <h5 className="fw-semibold mb-0 d-flex align-items-center">
                                                        <Link scroll={false} href="/domain/domaindetails/"> gtechnical.com
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Verified Domain</Tooltip>}>
                                                            <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified Domain"></i>
                                                        </OverlayTrigger> 
                                                        </Link>
                                                        </h5>
                                                        <Link scroll={false} href="#!"><i className="bi bi-geo-alt fs-11"></i> Gachbowli, Hyderabad </Link>
                                                    </div>
                                                </div>
                                                <span className="text-danger float-end" data-bs-toggle="tooltip" title="Valid Till"><i className="bi bi-exclamation-circle me-1"></i>10 Days Left</span>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1"><i className="bi bi-geo-alt text-muted me-1"></i> Net Profit : $45.00 </Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default"><i className="bi bi-briefcase text-muted me-1"></i> Industry : Corporate</Link>
                                                </div>
                                            </Card.Body>
                                            <Card.Footer>
                                                <div className="d-flex align-items-center flex-wrap gap-2">
                                                    <div className="flex-grow-1">
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Domains Age</Tooltip>}>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-info-transparent me-1" data-bs-toggle="tooltip" title="Domains Age"><i className="bi bi-people me-1"></i>Website Age : 12 years</Link>
                                                    </OverlayTrigger>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Bids : 10</Link>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="btn btn-wave btn-primary">
                                                        Bid Now <i className="ri-arrow-right-line"></i>
                                                    </Link>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                    <Col lg={6}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <div className="btn-list float-end">
                                                    <Link scroll={false} href="#!" className="wishlist-icon" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="bi bi-heart"></i></span></Link>
                                                </div>
                                                <div className="d-flex align-items-center flex-wrap gap-3 mb-3">
                                                    <div>
                                                        <span className="avatar avatar-xl bg-primary-transparent svg-primary shadow-sm">
                                                            <img src="../../assets/images/marketplace/new-arrivals/2.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                                        </span>
                                                    </div>
                                                    <div className="">
                                                        <span className="badge rounded-pill bg-danger-transparent mb-1">Website</span>
                                                        <h5 className="fw-semibold mb-0 d-flex align-items-center">
                                                        <Link scroll={false} href="/domain/domaindetails/"> spoteksolution.com 
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Verified Domain</Tooltip>}>
                                                                <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified Domain"></i>
                                                            </OverlayTrigger> 
                                                        </Link>
                                                      </h5>
                                                        <Link scroll={false} href="#!"><i className="bi bi-geo-alt fs-11"></i> Diego, Pune </Link>
                                                    </div>
                                                </div>
                                                <span className="text-danger float-end" data-bs-toggle="tooltip" title="Valid Till"><i className="bi bi-exclamation-circle me-1"></i>09 Days Left</span>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1"><i className="bi bi-geo-alt text-muted me-1"></i> Net Profit : $12.00 </Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default"><i className="bi bi-briefcase text-muted me-1"></i> Industry : Marketing</Link>
                                                </div>
                                            </Card.Body>
                                            <Card.Footer>
                                                <div className="d-flex align-items-center flex-wrap gap-2">
                                                    <div className="flex-grow-1">
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Domains Age</Tooltip>}>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-info-transparent me-1" data-bs-toggle="tooltip" title="Domains Age"><i className="bi bi-people me-1"></i>Website Age : 19 years</Link>
                                                    </OverlayTrigger>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Bids : 24</Link>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="btn btn-wave btn-primary">
                                                        Bid Now <i className="ri-arrow-right-line"></i>
                                                    </Link>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                    <Col lg={6}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <div className="btn-list float-end">
                                                    <Link scroll={false} href="#!" className="wishlist-icon" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="bi bi-heart"></i></span></Link>
                                                </div>
                                                <div className="d-flex align-items-center flex-wrap gap-3 mb-3">
                                                    <div>
                                                        <span className="avatar avatar-xl bg-info-transparent svg-info shadow-sm">
                                                            <img src="../../assets/images/realestate/properties/5.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                                        </span>
                                                    </div>
                                                    <div className="">
                                                        <span className="badge rounded-pill bg-danger-transparent mb-1">Website</span>
                                                        <h5 className="fw-semibold mb-0 d-flex align-items-center">
                                                        <Link scroll={false} href="/domain/domaindetails/"> Achlles.net 
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Verified Domain</Tooltip>}>
                                                                <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified Domain"></i>
                                                            </OverlayTrigger> 
                                                        </Link>
                                                        </h5>
                                                        <Link scroll={false} href="#!"><i className="bi bi-geo-alt fs-11"></i> Spoesh, Pune </Link>
                                                    </div>
                                                </div>
                                                <span className="text-danger float-end" data-bs-toggle="tooltip" title="Valid Till"><i className="bi bi-exclamation-circle me-1"></i>13 Days Left</span>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1"><i className="bi bi-geo-alt text-muted me-1"></i> Net Profit : $345.00 </Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default"><i className="bi bi-briefcase text-muted me-1"></i> Industry : Corporate</Link>
                                                </div>
                                            </Card.Body>
                                            <Card.Footer>
                                                <div className="d-flex align-items-center flex-wrap gap-2">
                                                    <div className="flex-grow-1">
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Domains Age</Tooltip>}>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-info-transparent me-1" data-bs-toggle="tooltip" title="Domains Age"><i className="bi bi-people me-1"></i>Website Age : 07 years</Link>
                                                    </OverlayTrigger>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Bids : 32</Link>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="btn btn-wave btn-primary">
                                                        Bid Now <i className="ri-arrow-right-line"></i>
                                                    </Link>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                    <Col lg={6}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <div className="btn-list float-end">
                                                    <Link scroll={false} href="#!" className="wishlist-icon" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="bi bi-heart"></i></span></Link>
                                                </div>
                                                <div className="d-flex align-items-center flex-wrap gap-3 mb-3">
                                                    <div>
                                                        <span className="avatar avatar-xl bg-info-transparent svg-info shadow-sm">
                                                            <img src="../../assets/images/marketplace/new-arrivals/3.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                                        </span>
                                                    </div>
                                                    <div className="">
                                                        <span className="badge rounded-pill bg-danger-transparent mb-1">Website</span>
                                                        <h5 className="fw-semibold mb-0 d-flex align-items-center">
                                                        <Link scroll={false} href="/domain/domaindetails/"> spotechtechnical.com 
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Verified Domain</Tooltip>}>
                                                            <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified Domain"></i>
                                                        </OverlayTrigger> 
                                                        </Link>
                                                        </h5>
                                                        <Link scroll={false} href="#!"><i className="bi bi-geo-alt fs-11"></i> Kondapur, Hyderabad </Link>
                                                    </div>
                                                </div>
                                                <span className="text-danger float-end" data-bs-toggle="tooltip" title="Valid Till"><i className="bi bi-exclamation-circle me-1"></i>25 Days Left</span>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1"><i className="bi bi-geo-alt text-muted me-1"></i> Net Profit : $56.00 </Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default"><i className="bi bi-briefcase text-muted me-1"></i> Industry : Business</Link>
                                                </div>
                                            </Card.Body>
                                            <Card.Footer>
                                                <div className="d-flex align-items-center flex-wrap gap-2">
                                                    <div className="flex-grow-1">
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Domains Age</Tooltip>}> 
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-info-transparent me-1" data-bs-toggle="tooltip" title="Domains Age"><i className="bi bi-people me-1"></i>Website Age : 10 years</Link>
                                                    </OverlayTrigger>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Bids : 09</Link>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="btn btn-wave btn-primary">
                                                        Bid Now <i className="ri-arrow-right-line"></i>
                                                    </Link>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third" className="border-0 p-0" id="domains-tab" role="tabpanel"> 
                                <Row>
                                    <Col lg={6}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <div className="btn-list float-end">
                                                    <Link scroll={false} href="#!" className="wishlist-icon" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="bi bi-heart"></i></span></Link>
                                                </div>
                                                <div className="d-flex align-items-center flex-wrap gap-3 mb-3">
                                                    <div>
                                                        <span className="domain-icon avatar avatar-xl bg-primary-transparent svg-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M919.2 404.8H104.8l6.2-19.5c12-37.9 29.2-73.8 51.4-106.9 17.8-26.6 38.6-51.2 62-73.1C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.7 113.8 23.4 21.9 44.2 46.5 62 73.1 22.2 33.1 39.4 69 51.4 106.9l6.1 19.5zm-772.9-30h731.4c-10.5-28-24.2-54.7-41-79.7-16.5-24.7-35.9-47.5-57.6-67.9C706.5 159 611.6 121.5 512 121.5c-99.6 0-194.5 37.5-267.1 105.7-21.7 20.4-41.1 43.2-57.6 67.9-16.8 24.9-30.5 51.7-41 79.7zM512 932.5c-107.3 0-209.5-40.4-287.7-113.8-23.4-22-44.2-46.5-62-73.1-22.1-33.1-39.4-69-51.4-106.9l-6.2-19.5h814.4l-6.2 19.5c-11.9 37.8-29.2 73.8-51.4 106.9-17.8 26.5-38.6 51.1-62 73.1-78.1 73.4-180.2 113.8-287.5 113.8zM146.3 649.2c10.5 28 24.3 54.8 41 79.7 16.5 24.7 35.9 47.5 57.6 67.9C317.5 865 412.4 902.5 512 902.5c99.6 0 194.5-37.5 267.1-105.7 21.7-20.4 41.1-43.2 57.6-67.9 16.7-25 30.5-51.7 41-79.7H146.3z"></path><path d="M512 932.5c-39.6 0-78.5-18.5-112.3-53.6-31.5-32.6-58.6-79.5-78.4-135.5-11.7-33.1-20.8-69-27-106.7l-2.9-17.4h441.2l-2.9 17.4c-6.2 37.8-15.3 73.7-27 106.7-19.8 56-46.9 102.9-78.4 135.5-33.8 35.1-72.7 53.6-112.3 53.6zM327 649.2c5.7 29.6 13.3 57.9 22.6 84.2 18.4 52 43.2 95.1 71.7 124.7 28.5 29.5 59 44.5 90.7 44.5s62.3-15 90.7-44.5c28.5-29.5 53.3-72.7 71.7-124.7 9.3-26.3 16.9-54.6 22.6-84.2H327zm405.6-244.4H291.4l2.9-17.4c6.2-37.8 15.3-73.7 27-106.7 19.8-56 46.9-102.9 78.4-135.5C433.5 110 472.4 91.5 512 91.5c39.6 0 78.5 18.5 112.3 53.6 31.5 32.6 58.6 79.5 78.4 135.5 11.7 33.1 20.8 69 27 106.7l2.9 17.5zm-405.6-30h370c-5.7-29.6-13.3-57.9-22.6-84.2-18.4-52-43.2-95.1-71.7-124.7-28.5-29.5-59-44.5-90.7-44.5s-62.3 15-90.7 44.5c-28.5 29.5-53.3 72.7-71.7 124.7-9.3 26.3-16.9 54.6-22.6 84.2z"></path><path d="M497 634.2h30v283.3h-30zM497 106.5h30v283.3h-30z"></path><path d="M512 341c-64.2 0-125.8-14.1-183.1-41.9-38.3-18.6-73.5-42.8-104.6-71.9l-11.7-10.9 11.7-10.9C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.6 113.8l11.7 10.9-11.7 10.9c-31.1 29.2-66.3 53.4-104.6 71.9-57.2 27.9-118.8 42-183 42zM257 216.2c25.8 22.3 54.3 41 85 55.9 53.2 25.8 110.4 38.8 170 38.8 59.6 0 116.8-13.1 170-38.9 30.7-14.8 59.2-33.6 85-55.9-70.9-61.2-160.8-94.7-255-94.7-94.2.1-184.1 33.6-255 94.8zm255 716.3c-107.3 0-209.5-40.4-287.7-113.8l-11.7-10.9 11.7-10.9c31.1-29.2 66.3-53.4 104.6-72C386.2 697.1 447.8 683 512 683c64.2 0 125.8 14.1 183.1 41.9 38.3 18.5 73.4 42.7 104.6 71.9l11.7 10.9-11.7 10.9C721.5 892.1 619.3 932.5 512 932.5zM257 807.8c70.9 61.2 160.8 94.7 255 94.7 94.2 0 184.1-33.5 255-94.7-25.8-22.3-54.3-41-85-55.9-53.2-25.8-110.4-38.9-170-38.9-59.6 0-116.8 13.1-170 38.8-30.7 14.9-59.2 33.7-85 56zm684.2-158.6H82.8c-10.8 0-19.6-8.8-19.6-19.6V394.4c0-10.8 8.8-19.6 19.6-19.6h858.5c10.8 0 19.6 8.8 19.6 19.6v235.3c-.1 10.7-8.9 19.5-19.7 19.5zm-848-30h837.6V404.8H93.2v214.4z"></path><path d="M314.1 588H282l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM804.7 588h-32.1l-39.1-88.4-39 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM559.4 588h-32.1l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM843.2 558h29.4v30h-29.4z"></path></svg>
                                                        </span>
                                                    </div>
                                                    <div className="">
                                                        <span className="badge rounded-pill bg-danger-transparent mb-1">Domain</span>
                                                        <h5 className="fw-semibold mb-0 d-flex align-items-center">
                                                        <Link scroll={false} href="/domain/domaindetails/"> spotechtechnical.com 
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Verified Domain</Tooltip>}>
                                                                <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified Domain"></i>
                                                            </OverlayTrigger> 
                                                        </Link>
                                                        </h5>
                                                        <Link scroll={false} href="#!"><i className="bi bi-geo-alt fs-11"></i> Kondapur, Hyderabad </Link>
                                                    </div>
                                                </div>
                                                <span className="text-danger float-end" data-bs-toggle="tooltip" title="Valid Till"><i className="bi bi-exclamation-circle me-1"></i>25 Days Left</span>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1"><i className="bi bi-geo-alt text-muted me-1"></i> Net Profit : NA </Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default"><i className="bi bi-briefcase text-muted me-1"></i> Industry : Business</Link>
                                                </div>
                                            </Card.Body>
                                            <Card.Footer>
                                                <div className="d-flex align-items-center flex-wrap gap-2">
                                                    <div className="flex-grow-1">
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Domains Age</Tooltip>}>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-info-transparent me-1" data-bs-toggle="tooltip" title="Domains Age"><i className="bi bi-people me-1"></i>Domain Age : 10 years</Link>
                                                    </OverlayTrigger>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Bids : 09</Link>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="btn btn-wave btn-primary">
                                                        Bid Now <i className="ri-arrow-right-line"></i>
                                                    </Link>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                    <Col lg={6}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <div className="btn-list float-end">
                                                    <Link scroll={false} href="#!" className="wishlist-icon" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="bi bi-heart"></i></span></Link>
                                                </div>
                                                <div className="d-flex align-items-center flex-wrap gap-3 mb-3">
                                                    <div>
                                                        <span className="domain-icon avatar avatar-xl bg-warning-transparent svg-warning warning">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M919.2 404.8H104.8l6.2-19.5c12-37.9 29.2-73.8 51.4-106.9 17.8-26.6 38.6-51.2 62-73.1C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.7 113.8 23.4 21.9 44.2 46.5 62 73.1 22.2 33.1 39.4 69 51.4 106.9l6.1 19.5zm-772.9-30h731.4c-10.5-28-24.2-54.7-41-79.7-16.5-24.7-35.9-47.5-57.6-67.9C706.5 159 611.6 121.5 512 121.5c-99.6 0-194.5 37.5-267.1 105.7-21.7 20.4-41.1 43.2-57.6 67.9-16.8 24.9-30.5 51.7-41 79.7zM512 932.5c-107.3 0-209.5-40.4-287.7-113.8-23.4-22-44.2-46.5-62-73.1-22.1-33.1-39.4-69-51.4-106.9l-6.2-19.5h814.4l-6.2 19.5c-11.9 37.8-29.2 73.8-51.4 106.9-17.8 26.5-38.6 51.1-62 73.1-78.1 73.4-180.2 113.8-287.5 113.8zM146.3 649.2c10.5 28 24.3 54.8 41 79.7 16.5 24.7 35.9 47.5 57.6 67.9C317.5 865 412.4 902.5 512 902.5c99.6 0 194.5-37.5 267.1-105.7 21.7-20.4 41.1-43.2 57.6-67.9 16.7-25 30.5-51.7 41-79.7H146.3z"></path><path d="M512 932.5c-39.6 0-78.5-18.5-112.3-53.6-31.5-32.6-58.6-79.5-78.4-135.5-11.7-33.1-20.8-69-27-106.7l-2.9-17.4h441.2l-2.9 17.4c-6.2 37.8-15.3 73.7-27 106.7-19.8 56-46.9 102.9-78.4 135.5-33.8 35.1-72.7 53.6-112.3 53.6zM327 649.2c5.7 29.6 13.3 57.9 22.6 84.2 18.4 52 43.2 95.1 71.7 124.7 28.5 29.5 59 44.5 90.7 44.5s62.3-15 90.7-44.5c28.5-29.5 53.3-72.7 71.7-124.7 9.3-26.3 16.9-54.6 22.6-84.2H327zm405.6-244.4H291.4l2.9-17.4c6.2-37.8 15.3-73.7 27-106.7 19.8-56 46.9-102.9 78.4-135.5C433.5 110 472.4 91.5 512 91.5c39.6 0 78.5 18.5 112.3 53.6 31.5 32.6 58.6 79.5 78.4 135.5 11.7 33.1 20.8 69 27 106.7l2.9 17.5zm-405.6-30h370c-5.7-29.6-13.3-57.9-22.6-84.2-18.4-52-43.2-95.1-71.7-124.7-28.5-29.5-59-44.5-90.7-44.5s-62.3 15-90.7 44.5c-28.5 29.5-53.3 72.7-71.7 124.7-9.3 26.3-16.9 54.6-22.6 84.2z"></path><path d="M497 634.2h30v283.3h-30zM497 106.5h30v283.3h-30z"></path><path d="M512 341c-64.2 0-125.8-14.1-183.1-41.9-38.3-18.6-73.5-42.8-104.6-71.9l-11.7-10.9 11.7-10.9C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.6 113.8l11.7 10.9-11.7 10.9c-31.1 29.2-66.3 53.4-104.6 71.9-57.2 27.9-118.8 42-183 42zM257 216.2c25.8 22.3 54.3 41 85 55.9 53.2 25.8 110.4 38.8 170 38.8 59.6 0 116.8-13.1 170-38.9 30.7-14.8 59.2-33.6 85-55.9-70.9-61.2-160.8-94.7-255-94.7-94.2.1-184.1 33.6-255 94.8zm255 716.3c-107.3 0-209.5-40.4-287.7-113.8l-11.7-10.9 11.7-10.9c31.1-29.2 66.3-53.4 104.6-72C386.2 697.1 447.8 683 512 683c64.2 0 125.8 14.1 183.1 41.9 38.3 18.5 73.4 42.7 104.6 71.9l11.7 10.9-11.7 10.9C721.5 892.1 619.3 932.5 512 932.5zM257 807.8c70.9 61.2 160.8 94.7 255 94.7 94.2 0 184.1-33.5 255-94.7-25.8-22.3-54.3-41-85-55.9-53.2-25.8-110.4-38.9-170-38.9-59.6 0-116.8 13.1-170 38.8-30.7 14.9-59.2 33.7-85 56zm684.2-158.6H82.8c-10.8 0-19.6-8.8-19.6-19.6V394.4c0-10.8 8.8-19.6 19.6-19.6h858.5c10.8 0 19.6 8.8 19.6 19.6v235.3c-.1 10.7-8.9 19.5-19.7 19.5zm-848-30h837.6V404.8H93.2v214.4z"></path><path d="M314.1 588H282l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM804.7 588h-32.1l-39.1-88.4-39 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM559.4 588h-32.1l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM843.2 558h29.4v30h-29.4z"></path></svg>
                                                        </span>
                                                    </div>
                                                    <div className="">
                                                        <span className="badge rounded-pill bg-danger-transparent mb-1">Domain</span>
                                                        <h5 className="fw-semibold mb-0 d-flex align-items-center">
                                                        <Link scroll={false} href="/domain/domaindetails/"> dwaynestel.net
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Verified Domain</Tooltip>}>
                                                             <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified Domain"></i>
                                                        </OverlayTrigger>  
                                                        </Link>
                                                        </h5>
                                                        <Link scroll={false} href="#!"><i className="bi bi-geo-alt fs-11"></i> Spoesh, Pune </Link>
                                                    </div>
                                                </div>
                                                <span className="text-danger float-end" data-bs-toggle="tooltip" title="Valid Till"><i className="bi bi-exclamation-circle me-1"></i>13 Days Left</span>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1"><i className="bi bi-geo-alt text-muted me-1"></i> Net Profit : NA </Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default"><i className="bi bi-briefcase text-muted me-1"></i> Industry : Corporate</Link>
                                                </div>
                                            </Card.Body>
                                            <Card.Footer>
                                                <div className="d-flex align-items-center flex-wrap gap-2">
                                                    <div className="flex-grow-1">
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Domains Age</Tooltip>}>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-info-transparent me-1" data-bs-toggle="tooltip" title="Website Age"><i className="bi bi-people me-1"></i>Website Age : 07 years</Link>
                                                    </OverlayTrigger>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Bids : 32</Link>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="btn btn-wave btn-primary">
                                                        Bid Now <i className="ri-arrow-right-line"></i>
                                                    </Link>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                    <Col lg={6}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <div className="btn-list float-end">
                                                    <Link scroll={false} href="#!" className="wishlist-icon" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="bi bi-heart"></i></span></Link>
                                                </div>
                                                <div className="d-flex align-items-center flex-wrap gap-3 mb-3">
                                                    <div>
                                                        <span className="domain-icon avatar avatar-xl bg-info-transparent svg-info info">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M919.2 404.8H104.8l6.2-19.5c12-37.9 29.2-73.8 51.4-106.9 17.8-26.6 38.6-51.2 62-73.1C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.7 113.8 23.4 21.9 44.2 46.5 62 73.1 22.2 33.1 39.4 69 51.4 106.9l6.1 19.5zm-772.9-30h731.4c-10.5-28-24.2-54.7-41-79.7-16.5-24.7-35.9-47.5-57.6-67.9C706.5 159 611.6 121.5 512 121.5c-99.6 0-194.5 37.5-267.1 105.7-21.7 20.4-41.1 43.2-57.6 67.9-16.8 24.9-30.5 51.7-41 79.7zM512 932.5c-107.3 0-209.5-40.4-287.7-113.8-23.4-22-44.2-46.5-62-73.1-22.1-33.1-39.4-69-51.4-106.9l-6.2-19.5h814.4l-6.2 19.5c-11.9 37.8-29.2 73.8-51.4 106.9-17.8 26.5-38.6 51.1-62 73.1-78.1 73.4-180.2 113.8-287.5 113.8zM146.3 649.2c10.5 28 24.3 54.8 41 79.7 16.5 24.7 35.9 47.5 57.6 67.9C317.5 865 412.4 902.5 512 902.5c99.6 0 194.5-37.5 267.1-105.7 21.7-20.4 41.1-43.2 57.6-67.9 16.7-25 30.5-51.7 41-79.7H146.3z"></path><path d="M512 932.5c-39.6 0-78.5-18.5-112.3-53.6-31.5-32.6-58.6-79.5-78.4-135.5-11.7-33.1-20.8-69-27-106.7l-2.9-17.4h441.2l-2.9 17.4c-6.2 37.8-15.3 73.7-27 106.7-19.8 56-46.9 102.9-78.4 135.5-33.8 35.1-72.7 53.6-112.3 53.6zM327 649.2c5.7 29.6 13.3 57.9 22.6 84.2 18.4 52 43.2 95.1 71.7 124.7 28.5 29.5 59 44.5 90.7 44.5s62.3-15 90.7-44.5c28.5-29.5 53.3-72.7 71.7-124.7 9.3-26.3 16.9-54.6 22.6-84.2H327zm405.6-244.4H291.4l2.9-17.4c6.2-37.8 15.3-73.7 27-106.7 19.8-56 46.9-102.9 78.4-135.5C433.5 110 472.4 91.5 512 91.5c39.6 0 78.5 18.5 112.3 53.6 31.5 32.6 58.6 79.5 78.4 135.5 11.7 33.1 20.8 69 27 106.7l2.9 17.5zm-405.6-30h370c-5.7-29.6-13.3-57.9-22.6-84.2-18.4-52-43.2-95.1-71.7-124.7-28.5-29.5-59-44.5-90.7-44.5s-62.3 15-90.7 44.5c-28.5 29.5-53.3 72.7-71.7 124.7-9.3 26.3-16.9 54.6-22.6 84.2z"></path><path d="M497 634.2h30v283.3h-30zM497 106.5h30v283.3h-30z"></path><path d="M512 341c-64.2 0-125.8-14.1-183.1-41.9-38.3-18.6-73.5-42.8-104.6-71.9l-11.7-10.9 11.7-10.9C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.6 113.8l11.7 10.9-11.7 10.9c-31.1 29.2-66.3 53.4-104.6 71.9-57.2 27.9-118.8 42-183 42zM257 216.2c25.8 22.3 54.3 41 85 55.9 53.2 25.8 110.4 38.8 170 38.8 59.6 0 116.8-13.1 170-38.9 30.7-14.8 59.2-33.6 85-55.9-70.9-61.2-160.8-94.7-255-94.7-94.2.1-184.1 33.6-255 94.8zm255 716.3c-107.3 0-209.5-40.4-287.7-113.8l-11.7-10.9 11.7-10.9c31.1-29.2 66.3-53.4 104.6-72C386.2 697.1 447.8 683 512 683c64.2 0 125.8 14.1 183.1 41.9 38.3 18.5 73.4 42.7 104.6 71.9l11.7 10.9-11.7 10.9C721.5 892.1 619.3 932.5 512 932.5zM257 807.8c70.9 61.2 160.8 94.7 255 94.7 94.2 0 184.1-33.5 255-94.7-25.8-22.3-54.3-41-85-55.9-53.2-25.8-110.4-38.9-170-38.9-59.6 0-116.8 13.1-170 38.8-30.7 14.9-59.2 33.7-85 56zm684.2-158.6H82.8c-10.8 0-19.6-8.8-19.6-19.6V394.4c0-10.8 8.8-19.6 19.6-19.6h858.5c10.8 0 19.6 8.8 19.6 19.6v235.3c-.1 10.7-8.9 19.5-19.7 19.5zm-848-30h837.6V404.8H93.2v214.4z"></path><path d="M314.1 588H282l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM804.7 588h-32.1l-39.1-88.4-39 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM559.4 588h-32.1l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM843.2 558h29.4v30h-29.4z"></path></svg>
                                                        </span>
                                                    </div>
                                                    <div className="">
                                                        <span className="badge rounded-pill bg-danger-transparent mb-1">Domain</span>
                                                        <h5 className="fw-semibold mb-0 d-flex align-items-center">
                                                        <Link scroll={false} href="/domain/domaindetails/"> spoteksolution.com 
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Verified Domain</Tooltip>}>
                                                            <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified Domain"></i>
                                                        </OverlayTrigger> 
                                                        </Link>
                                                        </h5>
                                                        <Link scroll={false} href="#!"><i className="bi bi-geo-alt fs-11"></i> Diego, Pune </Link>
                                                    </div>
                                                </div>
                                                <span className="text-danger float-end" data-bs-toggle="tooltip" title="Valid Till"><i className="bi bi-exclamation-circle me-1"></i>09 Days Left</span>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1"><i className="bi bi-geo-alt text-muted me-1"></i> Net Profit : NA </Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default"><i className="bi bi-briefcase text-muted me-1"></i> Industry : Marketing</Link>
                                                </div>
                                            </Card.Body>
                                            <Card.Footer>
                                                <div className="d-flex align-items-center flex-wrap gap-2">
                                                    <div className="flex-grow-1">
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Domains Age</Tooltip>}>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-info-transparent me-1" data-bs-toggle="tooltip" title="Domains Age"><i className="bi bi-people me-1"></i>Domain Age : 19 years</Link>
                                                    </OverlayTrigger>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Bids : 24</Link>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="btn btn-wave btn-primary">
                                                        Bid Now <i className="ri-arrow-right-line"></i>
                                                    </Link>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                    <Col lg={6}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <div className="btn-list float-end">
                                                    <Link scroll={false} href="#!" className="wishlist-icon" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="bi bi-heart"></i></span></Link>
                                                </div>
                                                <div className="d-flex align-items-center flex-wrap gap-3 mb-3">
                                                    <div>
                                                        <span className="domain-icon avatar avatar-xl bg-danger-transparent svg-danger danger">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M919.2 404.8H104.8l6.2-19.5c12-37.9 29.2-73.8 51.4-106.9 17.8-26.6 38.6-51.2 62-73.1C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.7 113.8 23.4 21.9 44.2 46.5 62 73.1 22.2 33.1 39.4 69 51.4 106.9l6.1 19.5zm-772.9-30h731.4c-10.5-28-24.2-54.7-41-79.7-16.5-24.7-35.9-47.5-57.6-67.9C706.5 159 611.6 121.5 512 121.5c-99.6 0-194.5 37.5-267.1 105.7-21.7 20.4-41.1 43.2-57.6 67.9-16.8 24.9-30.5 51.7-41 79.7zM512 932.5c-107.3 0-209.5-40.4-287.7-113.8-23.4-22-44.2-46.5-62-73.1-22.1-33.1-39.4-69-51.4-106.9l-6.2-19.5h814.4l-6.2 19.5c-11.9 37.8-29.2 73.8-51.4 106.9-17.8 26.5-38.6 51.1-62 73.1-78.1 73.4-180.2 113.8-287.5 113.8zM146.3 649.2c10.5 28 24.3 54.8 41 79.7 16.5 24.7 35.9 47.5 57.6 67.9C317.5 865 412.4 902.5 512 902.5c99.6 0 194.5-37.5 267.1-105.7 21.7-20.4 41.1-43.2 57.6-67.9 16.7-25 30.5-51.7 41-79.7H146.3z"></path><path d="M512 932.5c-39.6 0-78.5-18.5-112.3-53.6-31.5-32.6-58.6-79.5-78.4-135.5-11.7-33.1-20.8-69-27-106.7l-2.9-17.4h441.2l-2.9 17.4c-6.2 37.8-15.3 73.7-27 106.7-19.8 56-46.9 102.9-78.4 135.5-33.8 35.1-72.7 53.6-112.3 53.6zM327 649.2c5.7 29.6 13.3 57.9 22.6 84.2 18.4 52 43.2 95.1 71.7 124.7 28.5 29.5 59 44.5 90.7 44.5s62.3-15 90.7-44.5c28.5-29.5 53.3-72.7 71.7-124.7 9.3-26.3 16.9-54.6 22.6-84.2H327zm405.6-244.4H291.4l2.9-17.4c6.2-37.8 15.3-73.7 27-106.7 19.8-56 46.9-102.9 78.4-135.5C433.5 110 472.4 91.5 512 91.5c39.6 0 78.5 18.5 112.3 53.6 31.5 32.6 58.6 79.5 78.4 135.5 11.7 33.1 20.8 69 27 106.7l2.9 17.5zm-405.6-30h370c-5.7-29.6-13.3-57.9-22.6-84.2-18.4-52-43.2-95.1-71.7-124.7-28.5-29.5-59-44.5-90.7-44.5s-62.3 15-90.7 44.5c-28.5 29.5-53.3 72.7-71.7 124.7-9.3 26.3-16.9 54.6-22.6 84.2z"></path><path d="M497 634.2h30v283.3h-30zM497 106.5h30v283.3h-30z"></path><path d="M512 341c-64.2 0-125.8-14.1-183.1-41.9-38.3-18.6-73.5-42.8-104.6-71.9l-11.7-10.9 11.7-10.9C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.6 113.8l11.7 10.9-11.7 10.9c-31.1 29.2-66.3 53.4-104.6 71.9-57.2 27.9-118.8 42-183 42zM257 216.2c25.8 22.3 54.3 41 85 55.9 53.2 25.8 110.4 38.8 170 38.8 59.6 0 116.8-13.1 170-38.9 30.7-14.8 59.2-33.6 85-55.9-70.9-61.2-160.8-94.7-255-94.7-94.2.1-184.1 33.6-255 94.8zm255 716.3c-107.3 0-209.5-40.4-287.7-113.8l-11.7-10.9 11.7-10.9c31.1-29.2 66.3-53.4 104.6-72C386.2 697.1 447.8 683 512 683c64.2 0 125.8 14.1 183.1 41.9 38.3 18.5 73.4 42.7 104.6 71.9l11.7 10.9-11.7 10.9C721.5 892.1 619.3 932.5 512 932.5zM257 807.8c70.9 61.2 160.8 94.7 255 94.7 94.2 0 184.1-33.5 255-94.7-25.8-22.3-54.3-41-85-55.9-53.2-25.8-110.4-38.9-170-38.9-59.6 0-116.8 13.1-170 38.8-30.7 14.9-59.2 33.7-85 56zm684.2-158.6H82.8c-10.8 0-19.6-8.8-19.6-19.6V394.4c0-10.8 8.8-19.6 19.6-19.6h858.5c10.8 0 19.6 8.8 19.6 19.6v235.3c-.1 10.7-8.9 19.5-19.7 19.5zm-848-30h837.6V404.8H93.2v214.4z"></path><path d="M314.1 588H282l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM804.7 588h-32.1l-39.1-88.4-39 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM559.4 588h-32.1l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM843.2 558h29.4v30h-29.4z"></path></svg>
                                                        </span>
                                                    </div>
                                                    <div className="">
                                                        <span className="badge rounded-pill bg-danger-transparent mb-1">Domain</span>
                                                        <h5 className="fw-semibold mb-0 d-flex align-items-center">
                                                        <Link scroll={false} href="/domain/domaindetails/"> Achlles.net 
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Verified Domain</Tooltip>}>
                                                                <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified Domain"></i>
                                                            </OverlayTrigger> 
                                                        </Link>
                                                        </h5>
                                                        <Link scroll={false} href="#!"><i className="bi bi-geo-alt fs-11"></i> Spoesh, Pune </Link>
                                                    </div>
                                                </div>
                                                <span className="text-danger float-end" data-bs-toggle="tooltip" title="Valid Till"><i className="bi bi-exclamation-circle me-1"></i>13 Days Left</span>
                                                <div className="popular-tags">
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1"><i className="bi bi-geo-alt text-muted me-1"></i> Net Profit : NA </Link>
                                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default"><i className="bi bi-briefcase text-muted me-1"></i> Industry : Corporate</Link>
                                                </div>
                                            </Card.Body>
                                            <Card.Footer>
                                                <div className="d-flex align-items-center flex-wrap gap-2">
                                                    <div className="flex-grow-1">
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Domains Age</Tooltip>}>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-info-transparent me-1" data-bs-toggle="tooltip" title="Domains Age"><i className="bi bi-people me-1"></i>Domain Age : 07 years</Link>
                                                    </OverlayTrigger>
                                                        <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Bids : 32</Link>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="btn btn-wave btn-primary">
                                                        Bid Now <i className="ri-arrow-right-line"></i>
                                                    </Link>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
				</div>
			</section>
            {/* End:: Section-4 */}

            {/* Start:: Section-5 */}
            <section className="section bg-banner-2 text-white">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-10 text-center">
							<div className="mb-4">
								<h2 className="fw-semibold mb-2 text-fixed-white">&#128073; Get 20% Off Discount Coupon</h2>
								<h6 className="text-fixed-white">By Subscribe our Newsletter</h6>
							</div>
						</div>
						<div className="col-lg-4 text-center">
							<div className="custom-form-group">
								<input type="text" className="form-control form-control-lg rounded-pill shadow-sm" placeholder="Enter Your Email.." aria-label="Recipient's username" />
								<Button variant="" className="btn btn-danger border-0 custom-form-btn rounded-pill" type="button">Subscribe</Button>
							</div>
						</div>
					</div>
				</div>
            </section>
            {/* End:: Section-5 */}

            {/* Start:: Section-6 */}
			<section className="section bg-white">
				<div className="container">
					<Row>
						<Col xl={12} className="mb-4">
							<div className="d-flex justify-content-between align-items-baseline">
								<div className="heading-section text-start">
									<div className="heading-title">Newest Arrivals</div>
									<div className="heading-description">View the Newest domains</div>
								</div>
								<div className="min-w-fit-content">
									<Link scroll={false} href="#!" className="text-primary fw-semibold fs-14">
										<u>View All</u><i className="fe fe-arrow-right"></i>
									 </Link>
								</div>
							</div>
						</Col>
						<Col xl={4}>
							<Card className="custom-card">
								<Card.Body className="p-3">
									<div className="d-flex gap-3">
                                        <div className="avatar avatar-lg bg-primary-transparent svg-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M919.2 404.8H104.8l6.2-19.5c12-37.9 29.2-73.8 51.4-106.9 17.8-26.6 38.6-51.2 62-73.1C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.7 113.8 23.4 21.9 44.2 46.5 62 73.1 22.2 33.1 39.4 69 51.4 106.9l6.1 19.5zm-772.9-30h731.4c-10.5-28-24.2-54.7-41-79.7-16.5-24.7-35.9-47.5-57.6-67.9C706.5 159 611.6 121.5 512 121.5c-99.6 0-194.5 37.5-267.1 105.7-21.7 20.4-41.1 43.2-57.6 67.9-16.8 24.9-30.5 51.7-41 79.7zM512 932.5c-107.3 0-209.5-40.4-287.7-113.8-23.4-22-44.2-46.5-62-73.1-22.1-33.1-39.4-69-51.4-106.9l-6.2-19.5h814.4l-6.2 19.5c-11.9 37.8-29.2 73.8-51.4 106.9-17.8 26.5-38.6 51.1-62 73.1-78.1 73.4-180.2 113.8-287.5 113.8zM146.3 649.2c10.5 28 24.3 54.8 41 79.7 16.5 24.7 35.9 47.5 57.6 67.9C317.5 865 412.4 902.5 512 902.5c99.6 0 194.5-37.5 267.1-105.7 21.7-20.4 41.1-43.2 57.6-67.9 16.7-25 30.5-51.7 41-79.7H146.3z"></path><path d="M512 932.5c-39.6 0-78.5-18.5-112.3-53.6-31.5-32.6-58.6-79.5-78.4-135.5-11.7-33.1-20.8-69-27-106.7l-2.9-17.4h441.2l-2.9 17.4c-6.2 37.8-15.3 73.7-27 106.7-19.8 56-46.9 102.9-78.4 135.5-33.8 35.1-72.7 53.6-112.3 53.6zM327 649.2c5.7 29.6 13.3 57.9 22.6 84.2 18.4 52 43.2 95.1 71.7 124.7 28.5 29.5 59 44.5 90.7 44.5s62.3-15 90.7-44.5c28.5-29.5 53.3-72.7 71.7-124.7 9.3-26.3 16.9-54.6 22.6-84.2H327zm405.6-244.4H291.4l2.9-17.4c6.2-37.8 15.3-73.7 27-106.7 19.8-56 46.9-102.9 78.4-135.5C433.5 110 472.4 91.5 512 91.5c39.6 0 78.5 18.5 112.3 53.6 31.5 32.6 58.6 79.5 78.4 135.5 11.7 33.1 20.8 69 27 106.7l2.9 17.5zm-405.6-30h370c-5.7-29.6-13.3-57.9-22.6-84.2-18.4-52-43.2-95.1-71.7-124.7-28.5-29.5-59-44.5-90.7-44.5s-62.3 15-90.7 44.5c-28.5 29.5-53.3 72.7-71.7 124.7-9.3 26.3-16.9 54.6-22.6 84.2z"></path><path d="M497 634.2h30v283.3h-30zM497 106.5h30v283.3h-30z"></path><path d="M512 341c-64.2 0-125.8-14.1-183.1-41.9-38.3-18.6-73.5-42.8-104.6-71.9l-11.7-10.9 11.7-10.9C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.6 113.8l11.7 10.9-11.7 10.9c-31.1 29.2-66.3 53.4-104.6 71.9-57.2 27.9-118.8 42-183 42zM257 216.2c25.8 22.3 54.3 41 85 55.9 53.2 25.8 110.4 38.8 170 38.8 59.6 0 116.8-13.1 170-38.9 30.7-14.8 59.2-33.6 85-55.9-70.9-61.2-160.8-94.7-255-94.7-94.2.1-184.1 33.6-255 94.8zm255 716.3c-107.3 0-209.5-40.4-287.7-113.8l-11.7-10.9 11.7-10.9c31.1-29.2 66.3-53.4 104.6-72C386.2 697.1 447.8 683 512 683c64.2 0 125.8 14.1 183.1 41.9 38.3 18.5 73.4 42.7 104.6 71.9l11.7 10.9-11.7 10.9C721.5 892.1 619.3 932.5 512 932.5zM257 807.8c70.9 61.2 160.8 94.7 255 94.7 94.2 0 184.1-33.5 255-94.7-25.8-22.3-54.3-41-85-55.9-53.2-25.8-110.4-38.9-170-38.9-59.6 0-116.8 13.1-170 38.8-30.7 14.9-59.2 33.7-85 56zm684.2-158.6H82.8c-10.8 0-19.6-8.8-19.6-19.6V394.4c0-10.8 8.8-19.6 19.6-19.6h858.5c10.8 0 19.6 8.8 19.6 19.6v235.3c-.1 10.7-8.9 19.5-19.7 19.5zm-848-30h837.6V404.8H93.2v214.4z"></path><path d="M314.1 588H282l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM804.7 588h-32.1l-39.1-88.4-39 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM559.4 588h-32.1l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM843.2 558h29.4v30h-29.4z"></path></svg>
                                        </div>
										<div className="flex-fill">
											<div className="mb-3">
                                                <h6 className="fw-semibold mb-1 fs-18">.audio</h6>    
                                                <div className="d-flex align-items-baseline fs-11">
                                                    <div className="fs-11 text-muted me-2">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                        <span>,</span>
                                                        <span className="">25 Feb 2024</span>
                                                    </div>
                                                </div>
											</div>
											<div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <h6 className="fw-semibold mb-0 d-flex align-items-center gap-2">$31.00 <span className="badge bg-danger-transparent">28 Bids</span></h6>
												<div className="min-w-fit-content">
													<Link scroll={false} href="#!" className="btn btn-primary border-0">Bid Now</Link>
												</div>
											</div>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={4}>
							<Card className="custom-card">
								<Card.Body className="p-3">
									<div className="d-flex gap-3">
                                        <div className="avatar avatar-lg bg-primary-transparent">
                                            <img src="../../assets/images/marketplace/new-arrivals/1.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                        </div>
										<div className="flex-fill">
											<div className="mb-3">
                                                <h6 className="fw-semibold mb-1 fs-18">spoteksolution.com</h6>    
                                                <div className="d-flex align-items-baseline fs-11">
                                                    <div className="fs-11 text-muted me-2">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                        <span>,</span>
                                                        <span className="">25 Feb 2024</span>
                                                    </div>
                                                </div>
											</div>
											<div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <h6 className="fw-semibold mb-0 d-flex align-items-center gap-2">$23.00 <span className="badge bg-danger-transparent">09 Bids</span></h6>
												<div className="min-w-fit-content">
													<Link scroll={false} href="#!" className="btn btn-primary border-0">Bid Now</Link>
												</div>
											</div>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={4}>
							<Card className="custom-card">
								<Card.Body className="p-3">
									<div className="d-flex gap-3">
                                        <div className="avatar avatar-lg bg-warning-transparent svg-warning warning">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M919.2 404.8H104.8l6.2-19.5c12-37.9 29.2-73.8 51.4-106.9 17.8-26.6 38.6-51.2 62-73.1C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.7 113.8 23.4 21.9 44.2 46.5 62 73.1 22.2 33.1 39.4 69 51.4 106.9l6.1 19.5zm-772.9-30h731.4c-10.5-28-24.2-54.7-41-79.7-16.5-24.7-35.9-47.5-57.6-67.9C706.5 159 611.6 121.5 512 121.5c-99.6 0-194.5 37.5-267.1 105.7-21.7 20.4-41.1 43.2-57.6 67.9-16.8 24.9-30.5 51.7-41 79.7zM512 932.5c-107.3 0-209.5-40.4-287.7-113.8-23.4-22-44.2-46.5-62-73.1-22.1-33.1-39.4-69-51.4-106.9l-6.2-19.5h814.4l-6.2 19.5c-11.9 37.8-29.2 73.8-51.4 106.9-17.8 26.5-38.6 51.1-62 73.1-78.1 73.4-180.2 113.8-287.5 113.8zM146.3 649.2c10.5 28 24.3 54.8 41 79.7 16.5 24.7 35.9 47.5 57.6 67.9C317.5 865 412.4 902.5 512 902.5c99.6 0 194.5-37.5 267.1-105.7 21.7-20.4 41.1-43.2 57.6-67.9 16.7-25 30.5-51.7 41-79.7H146.3z"></path><path d="M512 932.5c-39.6 0-78.5-18.5-112.3-53.6-31.5-32.6-58.6-79.5-78.4-135.5-11.7-33.1-20.8-69-27-106.7l-2.9-17.4h441.2l-2.9 17.4c-6.2 37.8-15.3 73.7-27 106.7-19.8 56-46.9 102.9-78.4 135.5-33.8 35.1-72.7 53.6-112.3 53.6zM327 649.2c5.7 29.6 13.3 57.9 22.6 84.2 18.4 52 43.2 95.1 71.7 124.7 28.5 29.5 59 44.5 90.7 44.5s62.3-15 90.7-44.5c28.5-29.5 53.3-72.7 71.7-124.7 9.3-26.3 16.9-54.6 22.6-84.2H327zm405.6-244.4H291.4l2.9-17.4c6.2-37.8 15.3-73.7 27-106.7 19.8-56 46.9-102.9 78.4-135.5C433.5 110 472.4 91.5 512 91.5c39.6 0 78.5 18.5 112.3 53.6 31.5 32.6 58.6 79.5 78.4 135.5 11.7 33.1 20.8 69 27 106.7l2.9 17.5zm-405.6-30h370c-5.7-29.6-13.3-57.9-22.6-84.2-18.4-52-43.2-95.1-71.7-124.7-28.5-29.5-59-44.5-90.7-44.5s-62.3 15-90.7 44.5c-28.5 29.5-53.3 72.7-71.7 124.7-9.3 26.3-16.9 54.6-22.6 84.2z"></path><path d="M497 634.2h30v283.3h-30zM497 106.5h30v283.3h-30z"></path><path d="M512 341c-64.2 0-125.8-14.1-183.1-41.9-38.3-18.6-73.5-42.8-104.6-71.9l-11.7-10.9 11.7-10.9C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.6 113.8l11.7 10.9-11.7 10.9c-31.1 29.2-66.3 53.4-104.6 71.9-57.2 27.9-118.8 42-183 42zM257 216.2c25.8 22.3 54.3 41 85 55.9 53.2 25.8 110.4 38.8 170 38.8 59.6 0 116.8-13.1 170-38.9 30.7-14.8 59.2-33.6 85-55.9-70.9-61.2-160.8-94.7-255-94.7-94.2.1-184.1 33.6-255 94.8zm255 716.3c-107.3 0-209.5-40.4-287.7-113.8l-11.7-10.9 11.7-10.9c31.1-29.2 66.3-53.4 104.6-72C386.2 697.1 447.8 683 512 683c64.2 0 125.8 14.1 183.1 41.9 38.3 18.5 73.4 42.7 104.6 71.9l11.7 10.9-11.7 10.9C721.5 892.1 619.3 932.5 512 932.5zM257 807.8c70.9 61.2 160.8 94.7 255 94.7 94.2 0 184.1-33.5 255-94.7-25.8-22.3-54.3-41-85-55.9-53.2-25.8-110.4-38.9-170-38.9-59.6 0-116.8 13.1-170 38.8-30.7 14.9-59.2 33.7-85 56zm684.2-158.6H82.8c-10.8 0-19.6-8.8-19.6-19.6V394.4c0-10.8 8.8-19.6 19.6-19.6h858.5c10.8 0 19.6 8.8 19.6 19.6v235.3c-.1 10.7-8.9 19.5-19.7 19.5zm-848-30h837.6V404.8H93.2v214.4z"></path><path d="M314.1 588H282l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM804.7 588h-32.1l-39.1-88.4-39 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM559.4 588h-32.1l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM843.2 558h29.4v30h-29.4z"></path></svg>
                                        </div>
										<div className="flex-fill">
											<div className="mb-3">
                                                <h6 className="fw-semibold mb-1 fs-18">dwaynestel.net</h6>    
                                                <div className="d-flex align-items-baseline fs-11">
                                                    <div className="fs-11 text-muted me-2">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                        <span>,</span>
                                                        <span className="">25 Feb 2024</span>
                                                    </div>
                                                </div>
											</div>
											<div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <h6 className="fw-semibold mb-0 d-flex align-items-center gap-2">$27.00 <span className="badge bg-danger-transparent">21 Bids</span></h6>
												<div className="min-w-fit-content">
													<Link scroll={false} href="#!" className="btn btn-primary border-0">Bid Now</Link>
												</div>
											</div>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={4}>
							<Card className="custom-card">
								<Card.Body className="p-3">
									<div className="d-flex gap-3">
                                        <div className="avatar avatar-lg bg-primary-transparent">
                                            <img src="../../assets/images/marketplace/new-arrivals/2.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                        </div>
										<div className="flex-fill">
											<div className="mb-3">
                                                <h6 className="fw-semibold mb-1 fs-18">Achlles.net</h6>    
                                                <div className="d-flex align-items-baseline fs-11">
                                                    <div className="fs-11 text-muted me-2">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                        <span>,</span>
                                                        <span className="">25 Feb 2024</span>
                                                    </div>
                                                </div>
											</div>
											<div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <h6 className="fw-semibold mb-0 d-flex align-items-center gap-2">$46.00 <span className="badge bg-danger-transparent">15 Bids</span></h6>
												<div className="min-w-fit-content">
													<Link scroll={false} href="#!" className="btn btn-primary border-0">Bid Now</Link>
												</div>
											</div>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={4}>
							<Card className="custom-card">
								<Card.Body className="p-3">
									<div className="d-flex gap-3">
                                        <div className="avatar avatar-lg bg-info-transparent svg-info">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M919.2 404.8H104.8l6.2-19.5c12-37.9 29.2-73.8 51.4-106.9 17.8-26.6 38.6-51.2 62-73.1C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.7 113.8 23.4 21.9 44.2 46.5 62 73.1 22.2 33.1 39.4 69 51.4 106.9l6.1 19.5zm-772.9-30h731.4c-10.5-28-24.2-54.7-41-79.7-16.5-24.7-35.9-47.5-57.6-67.9C706.5 159 611.6 121.5 512 121.5c-99.6 0-194.5 37.5-267.1 105.7-21.7 20.4-41.1 43.2-57.6 67.9-16.8 24.9-30.5 51.7-41 79.7zM512 932.5c-107.3 0-209.5-40.4-287.7-113.8-23.4-22-44.2-46.5-62-73.1-22.1-33.1-39.4-69-51.4-106.9l-6.2-19.5h814.4l-6.2 19.5c-11.9 37.8-29.2 73.8-51.4 106.9-17.8 26.5-38.6 51.1-62 73.1-78.1 73.4-180.2 113.8-287.5 113.8zM146.3 649.2c10.5 28 24.3 54.8 41 79.7 16.5 24.7 35.9 47.5 57.6 67.9C317.5 865 412.4 902.5 512 902.5c99.6 0 194.5-37.5 267.1-105.7 21.7-20.4 41.1-43.2 57.6-67.9 16.7-25 30.5-51.7 41-79.7H146.3z"></path><path d="M512 932.5c-39.6 0-78.5-18.5-112.3-53.6-31.5-32.6-58.6-79.5-78.4-135.5-11.7-33.1-20.8-69-27-106.7l-2.9-17.4h441.2l-2.9 17.4c-6.2 37.8-15.3 73.7-27 106.7-19.8 56-46.9 102.9-78.4 135.5-33.8 35.1-72.7 53.6-112.3 53.6zM327 649.2c5.7 29.6 13.3 57.9 22.6 84.2 18.4 52 43.2 95.1 71.7 124.7 28.5 29.5 59 44.5 90.7 44.5s62.3-15 90.7-44.5c28.5-29.5 53.3-72.7 71.7-124.7 9.3-26.3 16.9-54.6 22.6-84.2H327zm405.6-244.4H291.4l2.9-17.4c6.2-37.8 15.3-73.7 27-106.7 19.8-56 46.9-102.9 78.4-135.5C433.5 110 472.4 91.5 512 91.5c39.6 0 78.5 18.5 112.3 53.6 31.5 32.6 58.6 79.5 78.4 135.5 11.7 33.1 20.8 69 27 106.7l2.9 17.5zm-405.6-30h370c-5.7-29.6-13.3-57.9-22.6-84.2-18.4-52-43.2-95.1-71.7-124.7-28.5-29.5-59-44.5-90.7-44.5s-62.3 15-90.7 44.5c-28.5 29.5-53.3 72.7-71.7 124.7-9.3 26.3-16.9 54.6-22.6 84.2z"></path><path d="M497 634.2h30v283.3h-30zM497 106.5h30v283.3h-30z"></path><path d="M512 341c-64.2 0-125.8-14.1-183.1-41.9-38.3-18.6-73.5-42.8-104.6-71.9l-11.7-10.9 11.7-10.9C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.6 113.8l11.7 10.9-11.7 10.9c-31.1 29.2-66.3 53.4-104.6 71.9-57.2 27.9-118.8 42-183 42zM257 216.2c25.8 22.3 54.3 41 85 55.9 53.2 25.8 110.4 38.8 170 38.8 59.6 0 116.8-13.1 170-38.9 30.7-14.8 59.2-33.6 85-55.9-70.9-61.2-160.8-94.7-255-94.7-94.2.1-184.1 33.6-255 94.8zm255 716.3c-107.3 0-209.5-40.4-287.7-113.8l-11.7-10.9 11.7-10.9c31.1-29.2 66.3-53.4 104.6-72C386.2 697.1 447.8 683 512 683c64.2 0 125.8 14.1 183.1 41.9 38.3 18.5 73.4 42.7 104.6 71.9l11.7 10.9-11.7 10.9C721.5 892.1 619.3 932.5 512 932.5zM257 807.8c70.9 61.2 160.8 94.7 255 94.7 94.2 0 184.1-33.5 255-94.7-25.8-22.3-54.3-41-85-55.9-53.2-25.8-110.4-38.9-170-38.9-59.6 0-116.8 13.1-170 38.8-30.7 14.9-59.2 33.7-85 56zm684.2-158.6H82.8c-10.8 0-19.6-8.8-19.6-19.6V394.4c0-10.8 8.8-19.6 19.6-19.6h858.5c10.8 0 19.6 8.8 19.6 19.6v235.3c-.1 10.7-8.9 19.5-19.7 19.5zm-848-30h837.6V404.8H93.2v214.4z"></path><path d="M314.1 588H282l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM804.7 588h-32.1l-39.1-88.4-39 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM559.4 588h-32.1l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM843.2 558h29.4v30h-29.4z"></path></svg>
                                        </div>
										<div className="flex-fill">
											<div className="mb-3">
                                                <h6 className="fw-semibold mb-1 fs-18">.org</h6>    
                                                <div className="d-flex align-items-baseline fs-11">
                                                    <div className="fs-11 text-muted me-2">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                        <span>,</span>
                                                        <span className="">25 Feb 2024</span>
                                                    </div>
                                                </div>
											</div>
											<div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <h6 className="fw-semibold mb-0 d-flex align-items-center gap-2">$14.00 <span className="badge bg-danger-transparent">10 Bids</span></h6>
												<div className="min-w-fit-content">
													<Link scroll={false} href="#!" className="btn btn-primary border-0">Bid Now</Link>
												</div>
											</div>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={4}>
							<Card className="custom-card">
								<Card.Body className="p-3">
									<div className="d-flex gap-3">
                                        <div className="avatar avatar-lg bg-primary-transparent">
                                            <img src="../../assets/images/marketplace/new-arrivals/3.png" alt="img" className="img-fluid w-100 rounded-1" />
                                        </div>
										<div className="flex-fill">
											<div className="mb-3">
                                                <h6 className="fw-semibold mb-1 fs-18">gtechnical.com</h6>    
                                                <div className="d-flex align-items-baseline fs-11">
                                                    <div className="fs-11 text-muted me-2">
                                                        <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                        <span>,</span>
                                                        <span className="">25 Feb 2024</span>
                                                    </div>
                                                </div>
											</div>
											<div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <h6 className="fw-semibold mb-0 d-flex align-items-center gap-2">$23.00 <span className="badge bg-danger-transparent">09 Bids</span></h6>
												<div className="min-w-fit-content">
													<Link scroll={false} href="#!" className="btn btn-primary border-0">Bid Now</Link>
												</div>
											</div>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</div>
			</section>
            {/* End:: Section-6 */}

            {/* Start:: Section-7 */}
            <section className="section bg-light">
                <div className="container">
                    <div className="heading-section mb-4">
                        <p className="fs-12 fw-semibold mb-1"><span className="landing-section-heading text-gradient">Our Blog</span></p>
                        <div className="heading-title">Latest News Updates & Blogs</div>
                        <div className="heading-description">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                    </div>
                    <div className="row g-4">
                        <Col xxl={4} xl={4} lg={4} className="col-12">
                            <Card className="custom-card">
                                <Link scroll={false} href="#!">
                                    <img src="../../assets/images/media/blog/20.jpg" className="card-img-top" alt="..." />
                                </Link>
                                <Card.Body>
                                    <span className="badge bg-secondary blog-badge">Apartments</span>
                                    <h5 className="fw-semibold mb-1">Why People Choose Riddi For Own Properties?</h5>
                                    <p className="card-text">The holographic principle, theorized to be a property of quantum gravity, postulates that the description.</p>
                                    <Link scroll={false} className="text-primary fw-semibold" href="#!">Read this post<i className="ri-arrow-right-s-line align-middle"></i></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4} xl={4} lg={4} className="col-12">
                            <Card className="custom-card">
                                <Link scroll={false} href="#!">
                                    <img src="../../assets/images/media/blog/21.jpg" className="card-img-top" alt="..." />
                                </Link>
                                <Card.Body>
                                    <span className="badge bg-danger blog-badge">House</span>
                                    <h5 className="fw-semibold mb-1">Private Home Sales Drop 27% In May 2024</h5>
                                    <p className="card-text">The holographic principle, theorized to be a property of quantum gravity, postulates that the description.</p>
                                    <Link scroll={false} className="text-primary fw-semibold" href="#!">Read this post<i className="ri-arrow-right-s-line align-middle"></i></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4} xl={4} lg={4} className="col-12">
                            <Card className="custom-card">
                                <Link scroll={false} href="#!">
                                    <img src="../../assets/images/media/blog/22.jpg" className="card-img-top" alt="..." />
                                </Link>
                                <Card.Body>
                                    <span className="badge bg-warning blog-badge">Luxury Homes</span>
                                    <h5 className="fw-semibold mb-1">Luxury duplex house vs a standard house in Chennai</h5>
                                    <p className="card-text">The holographic principle, theorized to be a property of quantum gravity, postulates that the description.</p>
                                    <Link scroll={false} className="text-primary fw-semibold" href="#!">Read this post<i className="ri-arrow-right-s-line align-middle"></i></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                </div>
            </section>
            {/* End:: Section-7 */}

            {/* Start:: Section-8 */}
            <section className="bg-banner">
                <div className="container">
                    <div className="row align-items-center">
                        <Col xxl={4} xl={4} lg={5} className="d-lg-block d-none text-center mt-4">
                            <img src="../../assets/images/ecommerce/png/17.png" width="350" alt="" />
                        </Col>
                        <Col xxl={8} xl={8} lg={7} className="col-12">
                            <div className="my-4">
                                <h2 className="fw-semibold mb-3 text-fixed-white">Buy or Sell your domain in a few seconds <Link scroll={false} href="#!" className="text-secondary text-decoration-line"> <u>Signup</u> </Link> now..</h2>
                                <p className="mb-4">Est amet sit vero sanctus labore no sed nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore.. </p>
                                <div className="btn-list">
                                    <Link scroll={false} href="#!" className="btn btn-light btn-lg"><i className="ti ti-search"></i> Browse Domains</Link>
                                    <Link scroll={false} href="#!" className="btn btn-danger btn-lg"><i className="ti ti-upload"></i> Sell Domains</Link>
                                </div>
                            </div>
                        </Col> 
                    </div>
                </div>
            </section>
            {/* End:: Section-8 */}

            {/* Start:: Section-9 */}
            <section className="section bg-white">
                <div className="container">
                    <div className="heading-section mb-4">
                        <p className="fs-12 fw-semibold mb-1"><span className="landing-section-heading text-gradient">FAQ'S</span></p>
                        <div className="heading-title">Frequently Asked Questions?</div>
                        <div className="heading-description">Browse Through The Most Frequently Asked Questions</div>
                    </div>
                    <Row>
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
                    </Row>
                </div>
            </section>
            {/* End:: Section-9 */}

            {/* Start:: Section-10 */}
            <section className="section landing-testimonials">
                <div className="container text-center">
                    <div className="heading-section mb-4">
                        <p className="fs-12 fw-semibold mb-1"><span className="landing-section-heading text-gradient">Testimonials</span></p>
                        <div className="heading-title">We never failed to reach expectations</div>
                        <div className="heading-description">Some of the reviews our clients gave which brings motivation to work for future projects</div>
                    </div>
                    <Swiper autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ dynamicBullets: true, clickable: true, }} modules={[Pagination, Autoplay]} className="swiper pagination-dynamic text-start">
                            <SwiperSlide>
                                <Row>
                                    <Col xxl={4} xl={4} lg={4} md={12}  sm={12} className="">
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
                                                        <img src="../../assets/images/faces/21.jpg" alt="" />
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
                                    <Col xxl={4} xl={4} lg={4} md={12}  sm={12} className="">
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
                                                        <img src="../../assets/images/faces/21.jpg" alt="" />
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
                                    <Col xxl={4} xl={4} lg={4} md={12}  sm={12} className="">
                                        <Card className="custom-card featured-card-1">
                                            <Card.Body className="p-4">
                                                <span className="review-quote">
                                                    <i className="bi bi-quote"></i>
                                                </span>
                                                <div className="d-flex mb-2 align-items-center">
                                                    <span className="avatar avatar-lg avatar-rounded me-2">
                                                        <img src="../../assets/images/faces/21.jpg" alt="" />
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
                                    <Col xxl={4} xl={4} lg={4} md={12}  sm={12} className="">
                                        <Card className="custom-card featured-card-1">
                                            <Card.Body className="p-4">
                                                <span className="review-quote">
                                                    <i className="bi bi-quote"></i>
                                                </span>
                                                <div className="d-flex mb-2 align-items-center">
                                                    <span className="avatar avatar-lg avatar-rounded me-2">
                                                        <img src="../../assets/images/faces/21.jpg" alt="" />
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
                                    <Col xxl={4} xl={4} lg={4} md={12}  sm={12} className="">
                                        <Card className="custom-card featured-card-1">
                                            <Card.Body className="p-4">
                                                <span className="review-quote">
                                                    <i className="bi bi-quote"></i>
                                                </span>
                                                <div className="d-flex mb-2 align-items-center">
                                                    <span className="avatar avatar-lg avatar-rounded me-2">
                                                        <img src="../../assets/images/faces/21.jpg" alt="" />
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
                                    <Col xxl={4} xl={4} lg={4} md={12}  sm={12} className="">
                                        <Card className="custom-card featured-card-1">
                                            <Card.Body className="p-4">
                                                <span className="review-quote">
                                                    <i className="bi bi-quote"></i>
                                                </span>
                                                <div className="d-flex mb-2 align-items-center">
                                                    <span className="avatar avatar-lg avatar-rounded me-2">
                                                        <img src="../../assets/images/faces/21.jpg" alt="" />
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
                                    <Col xxl={4} xl={4} lg={4} md={12}  sm={12} className="">
                                        <Card className="custom-card featured-card-1">
                                            <Card.Body className="p-4">
                                                <span className="review-quote">
                                                    <i className="bi bi-quote"></i>
                                                </span>
                                                <div className="d-flex mb-2 align-items-center">
                                                    <span className="avatar avatar-lg avatar-rounded me-2">
                                                        <img src="../../assets/images/faces/21.jpg" alt="" />
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
                                    <Col xxl={4} xl={4} lg={4} md={12}  sm={12} className="">
                                        <Card className="custom-card featured-card-1">
                                            <Card.Body className="p-4">
                                                <span className="review-quote">
                                                    <i className="bi bi-quote"></i>
                                                </span>
                                                <div className="d-flex mb-2 align-items-center">
                                                    <span className="avatar avatar-lg avatar-rounded me-2">
                                                        <img src="../../assets/images/faces/21.jpg" alt="" />
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
                                    <Col xxl={4} xl={4} lg={4} md={12}  sm={12} className="">
                                        <Card className="custom-card featured-card-1">
                                            <Card.Body className="p-4">
                                                <span className="review-quote">
                                                    <i className="bi bi-quote"></i>
                                                </span>
                                                <div className="d-flex mb-2 align-items-center">
                                                    <span className="avatar avatar-lg avatar-rounded me-2">
                                                        <img src="../../assets/images/faces/21.jpg" alt="" />
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
            {/* End:: Section-10 */}

            {/* Start:: Section-11 */}
            <section className="section bg-banner px-lg-0 px-4">
                <div className="row justify-content-center">
                    <Col lg={6} className="text-center">
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
                                <img src="../../assets/images/media/apps/apple-store.png" alt="" className="invert-1" />
                                App Store
                            </Link>
                        </div>    
                    </Col>
                </div>
            </section>
            {/* End:: Section-11 */}
    </Fragment>
    )
};

export default Landing;