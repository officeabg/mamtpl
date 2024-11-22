"use client"
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Form, ListGroup, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,  Navigation} from "swiper/modules";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Domaindata from '@/shared/data/apps/domain/domaindetailsdata';
import dynamic from "next/dynamic";
import { Lightbox } from "yet-another-react-lightbox";
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Domaindetails = () => {
    const [open, setOpen] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const [expandedIndex, setExpandedIndex] = useState(-1); // Initialize with -1 for no item expanded

    const toggleDropdown = (index:any) => {
        if (expandedIndex === index) {
            setExpandedIndex(-1); // Collapse if already expanded
        } else {
            setExpandedIndex(index); // Expand the clicked item
        }
    };


return ( 
    <Fragment>
         {/* Start:: Landing Banner */}
             <div className="landing-banner ad-search-container">
                <section className="py-5">
                    <div className="container main-banner-container">
                        <div className="row justify-content-center">
                            <Col xl={9}>
                                <div className="input-group group-search d-xl-flex">
                                    <div className="category-dropdown-wrapper">
                                        <Link scroll={false} href="#!" className="btn btn-lg btn-wave btn-white shadow-none categorydropdown border-0" onClick={() => setIsOpen(!isOpen)}>
                                            <i className="ri-function-line me-2 text-primary"></i>Browse<i className="ri-arrow-down-s-line align-middle ms-1"></i>
                                        </Link>
                                        <ul className="categories-dropdowns">
                                            <li className="category-dropdown">
                                                <ul className={`main-dropdown ${isOpen ? 'd-block' : 'd-none'}`} id="dropdown-toggle">
                                                    <li onClick={() => toggleDropdown(0)}>
                                                        <div className={`categories-dropdowns__item ${expandedIndex === 0 ? 'is-expanded' : ''}`}>
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
                                                    <li  onClick={() => toggleDropdown(1)}>
                                                        <div className={`categories-dropdowns__item ${expandedIndex === 1 ? 'is-expanded' : ''}`}>
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
                                                    <li onClick={() => toggleDropdown(2)}>
                                                        <div className={`categories-dropdowns__item ${expandedIndex === 2 ? 'is-expanded' : ''}`}>
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
                                                    <li onClick={() => toggleDropdown(3)}>
                                                        <div className={`categories-dropdowns__item ${expandedIndex === 3 ? 'is-expanded' : ''}`}>
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
                                    </div>    
                                    <div className="custom-form-group flex-grow-1">
                                        <input type="text" className="form-control form-control-lg shadow-none border-0 border-end border-start" placeholder="Search Domain.." 
                                            aria-label="Recipient's username"/>
                                    </div>
                                    <Button variant="" className="btn btn-lg btn-secondary border-0 shadow-sm search-btn" type="button"><i className="bi bi-search"></i></Button>
                                </div>
                            </Col>
                        </div>
                    </div>
                </section> 
            </div>
            {/* End:: Landing Banner */}

            {/* Start:: Breadcrumb*/}
            <div className="border-bottom py-3 bg-white">
                <div className="container">
                {/* Page Header */}
                    <Seo title={"Domain Details"} />
                    <Pageheader Heading="" Pagetitle={true} Pages={[{title:"Apps", active:true}, {title:"Domain", active:true}, {title:"Domain Details", active:false},]} />
                {/* Page Header Close */}
                </div>
            </div>
            {/* End:: Breadcrumb*/}

            {/* Start:: Section-1 */}
            <section className="section py-4">
                <div className="container">
                    <Row>
                        <Col lg={8}> 
                            <Card className="custom-card">
								<Card.Body>
									<div>
                                        <span className="badge rounded-pill bg-warning mb-1">Domain</span>
                                        <h5 className="fw-semibold mb-2 d-flex align-items-center"><Link scroll={false} href="/domain/domaindetails/"> spotechtechnical.com 
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Verified Domain</Tooltip>}>
                                            <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" data-bs-original-title="Verified Domain"></i>
                                        </OverlayTrigger>
                                        </Link></h5>
										<div className="d-flex align-items-baseline mb-3">
                                            <div className="text-muted me-2">
                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Banglore</span>
                                                <span>,</span>
                                                <span className="">20 Dec 2024</span>
                                            </div>
                                            <span className="text-danger">( 30 Views )</span>
                                        </div>
										<div className="row mb-4">
											<div className="col-xxl-12">
												<p className="mb-1 lh-1 fs-11 text-success fw-semibold">Last Bidding Price</p>
												<p className="mb-1"><span className="h3 fw-semibold">$1,299.00</span><span className="ms-3 badge bg-info-transparent">12 Bids</span></p>
											</div>
										</div>
										<div className="mb-4">
											<p className="fs-15 fw-semibold mb-1">Description :</p>
											<p className="text-muted mb-0">
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusamus, quaerat nam quo optio reiciendis harum reprehenderit omni.
											</p>
										</div> 
										<div className="d-flex align-items-stretch gap-2 mb-0">
                                            <Link scroll={false} href="#!" className="btn btn-lg btn-primary"><i className="ti ti-phone"></i> Contact Seller</Link>
											<Link scroll={false} href="#!" className="btn btn-lg btn-outline-light" data-bs-toggle="tooltip" aria-label="Share"><i className="ti ti-share"></i></Link>
										</div>
									</div>
								</Card.Body>
							</Card>
                            <div className="row justify-content-center mb-4">
                                <Col xxl={4} xl={4} lg={4} md={4} sm={4} className="col-12">
                                    <div className="product-spec bg-white">
                                        <p className="mb-0">
                                            <img src="../../assets/images/domains/icons/1.png" alt=""/>
                                        </p>
                                        <p className="fs-14 fw-semibold mb-0">Age : 24 Years</p>
                                    </div>
                                </Col>
                                <Col xxl={4} xl={4} lg={4} md={4} sm={4} className="col-12 mt-sm-0 mt-3">
                                    <div className="product-spec bg-white">
                                        <p className="mb-0">                                            
                                            <img src="../../assets/images/domains/icons/2.png" alt=""/>
                                        </p>
                                        <p className="fs-14 fw-semibold mb-0">
                                            Industry : Business
                                        </p>
                                    </div>
                                </Col>
                                <Col xxl={4} xl={4} lg={4} md={4} sm={4} className="col-12 mt-sm-0 mt-3">
                                    <div className="product-spec bg-white">
                                        <p className="mb-0">                                            
                                            <img src="../../assets/images/domains/icons/3.png" alt=""/>
                                        </p>
                                        <p className="fs-14 fw-semibold mb-0">
                                            Expires : 27 Days
                                        </p>
                                    </div>
                                </Col>
                            </div>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        About the domain
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <p>Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore.A officiis optio temporibus minima facilis...</p>
                                    <h6 className="fw-semibold mb-3">Features</h6>
                                    <ul className="list-group list-unstyled">
                                        <li className="p-1">
                                            <span className="fw-semibold"><i className="bi bi-check-circle text-primary me-1"></i></span> Incorporated Association.
                                        </li>
                                        <li className="p-1">
                                            <span className="fw-semibold"><i className="bi bi-check-circle text-primary me-1"></i> </span> Separate Legal Entity.
                                        </li>
                                        <li className="p-1">
                                            <span className="fw-semibold"><i className="bi bi-check-circle text-primary me-1"></i></span> Limited Liability.
                                        </li>
                                        <li className="p-1">
                                            <span className="fw-semibold"><i className="bi bi-check-circle text-primary me-1"></i></span> Transferability of Shares.
                                        </li>
                                        <li className="p-1">
                                            <span className="fw-semibold"><i className="bi bi-check-circle text-primary me-1"></i></span> Perpetual Existence.
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Market Insights
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <div id="market-analytics" className="p-3">
                                            <ReactApexChart options={Domaindata.MARKETinsights.options} series={Domaindata.MARKETinsights.series} type="line" width={"100%"} height={300} />
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="custom-card border bg-primary bg-opacity-10">
                                <Card.Body>
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                        <div>
                                            <h5 className="fw-semibold mb-0">&#128400; Was this domain helpful to someone?</h5>
                                        </div>
                                        <div>
                                            <Link scroll={false} href="#!" className="btn btn-success" role="button">
                                                <i className="ri-share-line me-2"></i>Share Now
                                            </Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card> 
                            <div className="row mt-5 g-0">
                                <h4 className="fw-semibold mb-0">Related Domains</h4>
                                <p className="">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} navigation={true}
                                    modules={[Autoplay, Navigation]} className="swiper swiper-related-jobs">
                                        <SwiperSlide>
                                            <Row>
                                                <Col sm={6} className="col-12">
                                                    <Card className="custom-card">
                                                        <Card.Body className="p-3">
                                                            <div className="d-flex gap-3">
                                                                <div>
                                                                    <span className="avatar avatar-lg bg-primary-transparent svg-primary">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M919.2 404.8H104.8l6.2-19.5c12-37.9 29.2-73.8 51.4-106.9 17.8-26.6 38.6-51.2 62-73.1C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.7 113.8 23.4 21.9 44.2 46.5 62 73.1 22.2 33.1 39.4 69 51.4 106.9l6.1 19.5zm-772.9-30h731.4c-10.5-28-24.2-54.7-41-79.7-16.5-24.7-35.9-47.5-57.6-67.9C706.5 159 611.6 121.5 512 121.5c-99.6 0-194.5 37.5-267.1 105.7-21.7 20.4-41.1 43.2-57.6 67.9-16.8 24.9-30.5 51.7-41 79.7zM512 932.5c-107.3 0-209.5-40.4-287.7-113.8-23.4-22-44.2-46.5-62-73.1-22.1-33.1-39.4-69-51.4-106.9l-6.2-19.5h814.4l-6.2 19.5c-11.9 37.8-29.2 73.8-51.4 106.9-17.8 26.5-38.6 51.1-62 73.1-78.1 73.4-180.2 113.8-287.5 113.8zM146.3 649.2c10.5 28 24.3 54.8 41 79.7 16.5 24.7 35.9 47.5 57.6 67.9C317.5 865 412.4 902.5 512 902.5c99.6 0 194.5-37.5 267.1-105.7 21.7-20.4 41.1-43.2 57.6-67.9 16.7-25 30.5-51.7 41-79.7H146.3z"></path><path d="M512 932.5c-39.6 0-78.5-18.5-112.3-53.6-31.5-32.6-58.6-79.5-78.4-135.5-11.7-33.1-20.8-69-27-106.7l-2.9-17.4h441.2l-2.9 17.4c-6.2 37.8-15.3 73.7-27 106.7-19.8 56-46.9 102.9-78.4 135.5-33.8 35.1-72.7 53.6-112.3 53.6zM327 649.2c5.7 29.6 13.3 57.9 22.6 84.2 18.4 52 43.2 95.1 71.7 124.7 28.5 29.5 59 44.5 90.7 44.5s62.3-15 90.7-44.5c28.5-29.5 53.3-72.7 71.7-124.7 9.3-26.3 16.9-54.6 22.6-84.2H327zm405.6-244.4H291.4l2.9-17.4c6.2-37.8 15.3-73.7 27-106.7 19.8-56 46.9-102.9 78.4-135.5C433.5 110 472.4 91.5 512 91.5c39.6 0 78.5 18.5 112.3 53.6 31.5 32.6 58.6 79.5 78.4 135.5 11.7 33.1 20.8 69 27 106.7l2.9 17.5zm-405.6-30h370c-5.7-29.6-13.3-57.9-22.6-84.2-18.4-52-43.2-95.1-71.7-124.7-28.5-29.5-59-44.5-90.7-44.5s-62.3 15-90.7 44.5c-28.5 29.5-53.3 72.7-71.7 124.7-9.3 26.3-16.9 54.6-22.6 84.2z"></path><path d="M497 634.2h30v283.3h-30zM497 106.5h30v283.3h-30z"></path><path d="M512 341c-64.2 0-125.8-14.1-183.1-41.9-38.3-18.6-73.5-42.8-104.6-71.9l-11.7-10.9 11.7-10.9C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.6 113.8l11.7 10.9-11.7 10.9c-31.1 29.2-66.3 53.4-104.6 71.9-57.2 27.9-118.8 42-183 42zM257 216.2c25.8 22.3 54.3 41 85 55.9 53.2 25.8 110.4 38.8 170 38.8 59.6 0 116.8-13.1 170-38.9 30.7-14.8 59.2-33.6 85-55.9-70.9-61.2-160.8-94.7-255-94.7-94.2.1-184.1 33.6-255 94.8zm255 716.3c-107.3 0-209.5-40.4-287.7-113.8l-11.7-10.9 11.7-10.9c31.1-29.2 66.3-53.4 104.6-72C386.2 697.1 447.8 683 512 683c64.2 0 125.8 14.1 183.1 41.9 38.3 18.5 73.4 42.7 104.6 71.9l11.7 10.9-11.7 10.9C721.5 892.1 619.3 932.5 512 932.5zM257 807.8c70.9 61.2 160.8 94.7 255 94.7 94.2 0 184.1-33.5 255-94.7-25.8-22.3-54.3-41-85-55.9-53.2-25.8-110.4-38.9-170-38.9-59.6 0-116.8 13.1-170 38.8-30.7 14.9-59.2 33.7-85 56zm684.2-158.6H82.8c-10.8 0-19.6-8.8-19.6-19.6V394.4c0-10.8 8.8-19.6 19.6-19.6h858.5c10.8 0 19.6 8.8 19.6 19.6v235.3c-.1 10.7-8.9 19.5-19.7 19.5zm-848-30h837.6V404.8H93.2v214.4z"></path><path d="M314.1 588H282l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM804.7 588h-32.1l-39.1-88.4-39 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM559.4 588h-32.1l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM843.2 558h29.4v30h-29.4z"></path></svg>
                                                                    </span>
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
                                                <Col sm={6} className="col-12">
                                                    <Card className="custom-card">
                                                        <Card.Body className="p-3">
                                                            <div className="d-flex gap-3">
                                                                <div>
                                                                    <span className="avatar avatar-lg bg-primary-transparent">
                                                                        <img src="../../assets/images/marketplace/new-arrivals/1.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                                                    </span>
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
                                            </Row>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Row>
                                                <Col sm={6} className="col-12">
                                                    <Card className="custom-card">
                                                        <Card.Body className="p-3">
                                                            <div className="d-flex gap-3">
                                                                <div>
                                                                    <span className="avatar avatar-lg bg-warning-transparent svg-warning warning">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M919.2 404.8H104.8l6.2-19.5c12-37.9 29.2-73.8 51.4-106.9 17.8-26.6 38.6-51.2 62-73.1C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.7 113.8 23.4 21.9 44.2 46.5 62 73.1 22.2 33.1 39.4 69 51.4 106.9l6.1 19.5zm-772.9-30h731.4c-10.5-28-24.2-54.7-41-79.7-16.5-24.7-35.9-47.5-57.6-67.9C706.5 159 611.6 121.5 512 121.5c-99.6 0-194.5 37.5-267.1 105.7-21.7 20.4-41.1 43.2-57.6 67.9-16.8 24.9-30.5 51.7-41 79.7zM512 932.5c-107.3 0-209.5-40.4-287.7-113.8-23.4-22-44.2-46.5-62-73.1-22.1-33.1-39.4-69-51.4-106.9l-6.2-19.5h814.4l-6.2 19.5c-11.9 37.8-29.2 73.8-51.4 106.9-17.8 26.5-38.6 51.1-62 73.1-78.1 73.4-180.2 113.8-287.5 113.8zM146.3 649.2c10.5 28 24.3 54.8 41 79.7 16.5 24.7 35.9 47.5 57.6 67.9C317.5 865 412.4 902.5 512 902.5c99.6 0 194.5-37.5 267.1-105.7 21.7-20.4 41.1-43.2 57.6-67.9 16.7-25 30.5-51.7 41-79.7H146.3z"></path><path d="M512 932.5c-39.6 0-78.5-18.5-112.3-53.6-31.5-32.6-58.6-79.5-78.4-135.5-11.7-33.1-20.8-69-27-106.7l-2.9-17.4h441.2l-2.9 17.4c-6.2 37.8-15.3 73.7-27 106.7-19.8 56-46.9 102.9-78.4 135.5-33.8 35.1-72.7 53.6-112.3 53.6zM327 649.2c5.7 29.6 13.3 57.9 22.6 84.2 18.4 52 43.2 95.1 71.7 124.7 28.5 29.5 59 44.5 90.7 44.5s62.3-15 90.7-44.5c28.5-29.5 53.3-72.7 71.7-124.7 9.3-26.3 16.9-54.6 22.6-84.2H327zm405.6-244.4H291.4l2.9-17.4c6.2-37.8 15.3-73.7 27-106.7 19.8-56 46.9-102.9 78.4-135.5C433.5 110 472.4 91.5 512 91.5c39.6 0 78.5 18.5 112.3 53.6 31.5 32.6 58.6 79.5 78.4 135.5 11.7 33.1 20.8 69 27 106.7l2.9 17.5zm-405.6-30h370c-5.7-29.6-13.3-57.9-22.6-84.2-18.4-52-43.2-95.1-71.7-124.7-28.5-29.5-59-44.5-90.7-44.5s-62.3 15-90.7 44.5c-28.5 29.5-53.3 72.7-71.7 124.7-9.3 26.3-16.9 54.6-22.6 84.2z"></path><path d="M497 634.2h30v283.3h-30zM497 106.5h30v283.3h-30z"></path><path d="M512 341c-64.2 0-125.8-14.1-183.1-41.9-38.3-18.6-73.5-42.8-104.6-71.9l-11.7-10.9 11.7-10.9C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.6 113.8l11.7 10.9-11.7 10.9c-31.1 29.2-66.3 53.4-104.6 71.9-57.2 27.9-118.8 42-183 42zM257 216.2c25.8 22.3 54.3 41 85 55.9 53.2 25.8 110.4 38.8 170 38.8 59.6 0 116.8-13.1 170-38.9 30.7-14.8 59.2-33.6 85-55.9-70.9-61.2-160.8-94.7-255-94.7-94.2.1-184.1 33.6-255 94.8zm255 716.3c-107.3 0-209.5-40.4-287.7-113.8l-11.7-10.9 11.7-10.9c31.1-29.2 66.3-53.4 104.6-72C386.2 697.1 447.8 683 512 683c64.2 0 125.8 14.1 183.1 41.9 38.3 18.5 73.4 42.7 104.6 71.9l11.7 10.9-11.7 10.9C721.5 892.1 619.3 932.5 512 932.5zM257 807.8c70.9 61.2 160.8 94.7 255 94.7 94.2 0 184.1-33.5 255-94.7-25.8-22.3-54.3-41-85-55.9-53.2-25.8-110.4-38.9-170-38.9-59.6 0-116.8 13.1-170 38.8-30.7 14.9-59.2 33.7-85 56zm684.2-158.6H82.8c-10.8 0-19.6-8.8-19.6-19.6V394.4c0-10.8 8.8-19.6 19.6-19.6h858.5c10.8 0 19.6 8.8 19.6 19.6v235.3c-.1 10.7-8.9 19.5-19.7 19.5zm-848-30h837.6V404.8H93.2v214.4z"></path><path d="M314.1 588H282l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM804.7 588h-32.1l-39.1-88.4-39 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM559.4 588h-32.1l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM843.2 558h29.4v30h-29.4z"></path></svg>
                                                                    </span>
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
                                                <Col sm={6} className="col-12">
                                                    <Card className="custom-card">
                                                        <Card.Body className="p-3">
                                                            <div className="d-flex gap-3">
                                                                <div>
                                                                    <span className="avatar avatar-lg bg-primary-transparent">
                                                                        <img src="../../assets/images/marketplace/new-arrivals/2.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                                                    </span>
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
                                            </Row>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Row>
                                                <Col sm={6} className="col-12">
                                                    <Card className="custom-card">
                                                        <Card.Body className="p-3">
                                                            <div className="d-flex gap-3">
                                                                <div>
                                                                    <span className="avatar avatar-lg bg-info-transparent svg-info">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M919.2 404.8H104.8l6.2-19.5c12-37.9 29.2-73.8 51.4-106.9 17.8-26.6 38.6-51.2 62-73.1C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.7 113.8 23.4 21.9 44.2 46.5 62 73.1 22.2 33.1 39.4 69 51.4 106.9l6.1 19.5zm-772.9-30h731.4c-10.5-28-24.2-54.7-41-79.7-16.5-24.7-35.9-47.5-57.6-67.9C706.5 159 611.6 121.5 512 121.5c-99.6 0-194.5 37.5-267.1 105.7-21.7 20.4-41.1 43.2-57.6 67.9-16.8 24.9-30.5 51.7-41 79.7zM512 932.5c-107.3 0-209.5-40.4-287.7-113.8-23.4-22-44.2-46.5-62-73.1-22.1-33.1-39.4-69-51.4-106.9l-6.2-19.5h814.4l-6.2 19.5c-11.9 37.8-29.2 73.8-51.4 106.9-17.8 26.5-38.6 51.1-62 73.1-78.1 73.4-180.2 113.8-287.5 113.8zM146.3 649.2c10.5 28 24.3 54.8 41 79.7 16.5 24.7 35.9 47.5 57.6 67.9C317.5 865 412.4 902.5 512 902.5c99.6 0 194.5-37.5 267.1-105.7 21.7-20.4 41.1-43.2 57.6-67.9 16.7-25 30.5-51.7 41-79.7H146.3z"></path><path d="M512 932.5c-39.6 0-78.5-18.5-112.3-53.6-31.5-32.6-58.6-79.5-78.4-135.5-11.7-33.1-20.8-69-27-106.7l-2.9-17.4h441.2l-2.9 17.4c-6.2 37.8-15.3 73.7-27 106.7-19.8 56-46.9 102.9-78.4 135.5-33.8 35.1-72.7 53.6-112.3 53.6zM327 649.2c5.7 29.6 13.3 57.9 22.6 84.2 18.4 52 43.2 95.1 71.7 124.7 28.5 29.5 59 44.5 90.7 44.5s62.3-15 90.7-44.5c28.5-29.5 53.3-72.7 71.7-124.7 9.3-26.3 16.9-54.6 22.6-84.2H327zm405.6-244.4H291.4l2.9-17.4c6.2-37.8 15.3-73.7 27-106.7 19.8-56 46.9-102.9 78.4-135.5C433.5 110 472.4 91.5 512 91.5c39.6 0 78.5 18.5 112.3 53.6 31.5 32.6 58.6 79.5 78.4 135.5 11.7 33.1 20.8 69 27 106.7l2.9 17.5zm-405.6-30h370c-5.7-29.6-13.3-57.9-22.6-84.2-18.4-52-43.2-95.1-71.7-124.7-28.5-29.5-59-44.5-90.7-44.5s-62.3 15-90.7 44.5c-28.5 29.5-53.3 72.7-71.7 124.7-9.3 26.3-16.9 54.6-22.6 84.2z"></path><path d="M497 634.2h30v283.3h-30zM497 106.5h30v283.3h-30z"></path><path d="M512 341c-64.2 0-125.8-14.1-183.1-41.9-38.3-18.6-73.5-42.8-104.6-71.9l-11.7-10.9 11.7-10.9C302.5 131.9 404.7 91.5 512 91.5c107.3 0 209.5 40.4 287.6 113.8l11.7 10.9-11.7 10.9c-31.1 29.2-66.3 53.4-104.6 71.9-57.2 27.9-118.8 42-183 42zM257 216.2c25.8 22.3 54.3 41 85 55.9 53.2 25.8 110.4 38.8 170 38.8 59.6 0 116.8-13.1 170-38.9 30.7-14.8 59.2-33.6 85-55.9-70.9-61.2-160.8-94.7-255-94.7-94.2.1-184.1 33.6-255 94.8zm255 716.3c-107.3 0-209.5-40.4-287.7-113.8l-11.7-10.9 11.7-10.9c31.1-29.2 66.3-53.4 104.6-72C386.2 697.1 447.8 683 512 683c64.2 0 125.8 14.1 183.1 41.9 38.3 18.5 73.4 42.7 104.6 71.9l11.7 10.9-11.7 10.9C721.5 892.1 619.3 932.5 512 932.5zM257 807.8c70.9 61.2 160.8 94.7 255 94.7 94.2 0 184.1-33.5 255-94.7-25.8-22.3-54.3-41-85-55.9-53.2-25.8-110.4-38.9-170-38.9-59.6 0-116.8 13.1-170 38.8-30.7 14.9-59.2 33.7-85 56zm684.2-158.6H82.8c-10.8 0-19.6-8.8-19.6-19.6V394.4c0-10.8 8.8-19.6 19.6-19.6h858.5c10.8 0 19.6 8.8 19.6 19.6v235.3c-.1 10.7-8.9 19.5-19.7 19.5zm-848-30h837.6V404.8H93.2v214.4z"></path><path d="M314.1 588H282l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM804.7 588h-32.1l-39.1-88.4-39 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM559.4 588h-32.1l-39-88.4-39.1 88.4h-32.1l-34.9-133.2 29-7.6 25.1 95.7 37.8-85.5h28.3l37.8 85.5 25.1-95.7 29 7.6zM843.2 558h29.4v30h-29.4z"></path></svg>
                                                                    </span>
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
                                                <Col sm={6} className="col-12">
                                                    <Card className="custom-card">
                                                        <Card.Body className="p-3">
                                                            <div className="d-flex gap-3">
                                                                <div>
                                                                    <span className="avatar avatar-lg bg-primary-transparent">
                                                                        <img src="../../assets/images/marketplace/new-arrivals/3.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                                                    </span>
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
                                        </SwiperSlide>
                                </Swiper>
                            </div>           
                        </Col>
                        <Col lg={4}>
                            <Card>
                                <div className=""> 
                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-primary rounded-circle top-wishlist-icon" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-line"></i></Link>
                                    <Link scroll={false} href="#!"  onClick={() => setOpen(true)} className="glightbox card border-0 mb-0" data-gallery="gallery1" data-title="spotechtechnical.com" data-type="image" data-draggable="true"> 
                                        <div className="classify-gallery">
                                            <span className="btn btn-white-transparent text-fixed-black backdrop-blur classifyimage-btn rounded-pill"><i className="ri-image-line me-2 bg-primary text-fixed-white feature-icons border-0"></i>5 Images</span>
                                            <img src="../../assets/images/domains/1.jpg" alt="image"/>
                                        </div>
                                    </Link>                                 
                                    {/* Start::row-1 */}
                                    <div className="row ad-gallery">
                                        <Lightbox
                                        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                                            open={open}
                                            close={() => setOpen(false)}
                                            slides={[
                                                { src: "../../assets/images/marketplace/templates/2.png" }, 
                                                { src: "../../assets/images/marketplace/templates/3.png" }, 
                                                { src: "../../assets/images/marketplace/templates/4.png" },
                                                { src: "../../assets/images/marketplace/templates/5.png" },
                                            ]}
                                        />
                                    </div>
                                    {/*End::row-1 */}
                                </div>
                                <Card.Body className="text-center">
                                    <div className="bg-light text-default p-2 border mb-2">
                                        <span className="text-muted">Time Ends In</span>
                                        <p className="fs-18 fw-semibold mb-0">04hrs : 24m : 38s</p>                                        
                                    </div>
                                    <p className="mb-3"><span className="text-muted">Current Bid</span> : <span className="fw-semibold text-default"> $345.00 </span><span className="text-muted"> From </span>  <Link scroll={false} href="#!" className="text-primary fw-semibold">Jackmiller</Link></p>
                                    <div className="input-group flex-grow-1">
                                        <input type="email" className="form-control" id="inputEmail11" placeholder="Enter Amount.."/>
                                        <Button variant="" className="input-group-text btn btn-primary">
                                            Place Bid
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="custom-card overflow-hidden">
                                <Card.Body className="p-0">
                                    <div className="d-sm-flex align-items-center p-3 border-bottom">
                                        <div>
                                            <span className="avatar avatar-xl avatar-rounded online me-3">
                                                <img src="../../assets/images/faces/9.jpg" alt=""/>
                                            </span>
                                        </div>
                                        <div className="flex-fill main-profile-info">
                                            <h5 className="fw-semibold mb-1">Jack Miller 
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Verified Agent</Tooltip>}>
                                                <i className="bi bi-check-circle-fill text-success fs-14 ms-1" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="Verified Agent"></i>
                                            </OverlayTrigger>
                                            </h5>
                                            <p className="mb-0">Member Since 2005</p>
                                        </div>
                                    </div>
                                    <div className="p-4 text-center">
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
                                </Card.Body>
                            </Card>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header>
                                    <Card.Title>
                                        Domain Overview
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className="p-2">
                                    <div className="table-responsive">
                                        <table className="table table-responsive table-borderless">
                                            <tbody>
                                                <tr>
                                                    <td className="w-50">
                                                        <span className="fw-semibold">Domain Name</span> 
                                                    </td>
                                                    <td> : </td>
                                                    <td>spotechtechnical.com</td>
                                                </tr>
                                                <tr>
                                                    <td className="w-50">
                                                        <span className="fw-semibold">Industry Type</span> 
                                                    </td>
                                                    <td> : </td>
                                                    <td>Business</td>
                                                </tr>
                                                <tr>
                                                    <td className="w-50">
                                                        <span className="fw-semibold">Registrar</span> 
                                                    </td>
                                                    <td> : </td>
                                                    <td>Spotech Technical</td>
                                                </tr>
                                                <tr>
                                                    <td className="w-50">
                                                        <span className="fw-semibold">Registered On</span> 
                                                    </td>
                                                    <td> : </td>
                                                    <td>13 Jan 2024</td>
                                                </tr>
                                                <tr>
                                                    <td className="w-50">
                                                        <span className="fw-semibold">Expires On</span> 
                                                    </td>
                                                    <td> : </td>
                                                    <td>21 Oct 2024</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Card.Body>
                                <div className="card-footer">
                                    <div className="d-flex align-items-center flex-wrap gap-3">
                                        <p className="fs-15 mb-0 fw-semibold">Social :</p>
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
                                </div>
                            </Card>
                            <div className="alert alert-primary alert-dismissible fade show custom-alert-icon shadow-sm" role="alert">
                                <div className="d-flex">
                                    <span className="svg-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg>
                                    </span>
                                    <div className="ms-2">
                                        <h6 className="text-default mb-0">
                                            Security & Safety Tips
                                        </h6>
                                        Check the necessary details before purchase.
                                    </div>
                                </div>
                            </div>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Similar Domains 
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <ListGroup className="similarads-list">
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center gap-3 flex-wrap">
                                                <div>
                                                    <Link scroll={false} href="#!">
                                                        <span className="avatar avatar-xxl">
                                                            <img src="../../assets/images/marketplace/new-arrivals/1.png" className="img-fluid rounded-3 h-100" alt="..."/>
                                                        </span>
                                                    </Link>
                                                </div> 
                                                <div className="flex-fill">
                                                    <div className="mb-2">
                                                        <span className="badge bg-danger-transparent badge-sm mb-1">Domain</span>
                                                        <h6 className="fw-semibold mb-1"><Link scroll={false} href="/domain/domaindetails/">eiusmod.com</Link></h6>
                                                        <div className="d-flex align-items-baseline fs-11">
                                                            <div className="fs-11 text-muted me-2">
                                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Kerala</span>
                                                                <span>,</span>
                                                                <span className="">23 May 2024</span>
                                                            </div>
                                                            <span className="text-danger">( 2 Bids )</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <h6 className="fw-semibold mb-0">$543</h6>
                                                        <Link scroll={false} href="#!" className="text-primary fw-semibold fs-13">
                                                            View Details <i className="fe fe-arrow-right"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center gap-3 flex-wrap">
                                                <div>
                                                    <Link scroll={false} href="#!">
                                                        <span className="avatar avatar-xxl">
                                                            <img src="../../assets/images/marketplace/new-arrivals/2.png" className="img-fluid rounded-3 h-100" alt="..."/>
                                                        </span>
                                                    </Link>
                                                </div> 
                                                <div className="flex-fill">
                                                    <div className="mb-2">
                                                        <span className="badge bg-info-transparent badge-sm mb-1">Website</span>
                                                        <h6 className="fw-semibold mb-1"><Link scroll={false} href="/domain/domaindetails/">incididunt.in</Link></h6>
                                                        <div className="d-flex align-items-baseline fs-11">
                                                            <div className="fs-11 text-muted me-2">
                                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Banglore</span>
                                                                <span>,</span>
                                                                <span className="">17 Jan 2024</span>
                                                            </div>
                                                            <span className="text-danger">( 3 Bids )</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <h6 className="fw-semibold mb-0">$654</h6>
                                                        <Link scroll={false} href="#!" className="text-primary fw-semibold fs-13">
                                                            View Details <i className="fe fe-arrow-right"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center gap-3 flex-wrap">
                                                <div>
                                                    <Link scroll={false} href="#!">
                                                        <span className="avatar avatar-xxl">
                                                            <img src="../../assets/images/marketplace/new-arrivals/3.png" className="img-fluid rounded-3 h-100" alt="..."/>
                                                        </span>
                                                    </Link>
                                                </div> 
                                                <div className="flex-fill">
                                                    <div className="mb-2">
                                                        <span className="badge bg-danger-transparent badge-sm mb-1">Domain</span>
                                                        <h6 className="fw-semibold mb-1"><Link scroll={false} href="/domain/domaindetails/">sanctus.org</Link></h6>
                                                        <div className="d-flex align-items-baseline fs-11">
                                                            <div className="fs-11 text-muted me-2">
                                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Chennai</span>
                                                                <span>,</span>
                                                                <span className="">16 Mar 2024</span>
                                                            </div>
                                                            <span className="text-danger">( 2 Bids )</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <h6 className="fw-semibold mb-0">$234</h6>
                                                        <Link scroll={false} href="#!" className="text-primary fw-semibold fs-13">
                                                            View Details <i className="fe fe-arrow-right"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center gap-3 flex-wrap">
                                                <div>
                                                    <Link scroll={false} href="#!">
                                                        <span className="avatar avatar-xxl">
                                                            <img src="../../assets/images/marketplace/new-arrivals/4.png" className="img-fluid rounded-3 h-100" alt="..."/>
                                                        </span>
                                                    </Link>
                                                </div> 
                                                <div className="flex-fill">
                                                    <div className="mb-2">
                                                        <span className="badge bg-info-transparent badge-sm mb-1">Website</span>
                                                        <h6 className="fw-semibold mb-1"><Link scroll={false} href="/domain/domaindetails/">estametsit.net</Link></h6>
                                                        <div className="d-flex align-items-baseline">
                                                            <div className="text-muted me-2">
                                                                <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                                <span>,</span>
                                                                <span className="">25 Feb 2024</span>
                                                            </div>
                                                            <span className="text-danger">( 5 Bids )</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <h6 className="fw-semibold mb-0">$120</h6>
                                                        <Link scroll={false} href="#!" className="text-primary fw-semibold fs-13">
                                                            View Details <i className="fe fe-arrow-right"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                                <div className="card-footer">
                                    <Link scroll={false} href="/domain/domaindetails/" className="text-primary fw-semibold fs-14 mt-2">
                                        View All <i className="fe fe-arrow-right"></i>
                                    </Link>                                    
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>
            {/* End:: Section-1 */}

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
            {/* End:: Section-2 */}
    </Fragment>
    )
};

export default Domaindetails;