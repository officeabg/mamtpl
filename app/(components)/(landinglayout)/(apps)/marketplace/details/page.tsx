"use client"
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, ListGroup, Modal, OverlayTrigger, Row, Table, Tooltip } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation, } from "swiper/modules";
import { Lightbox } from "yet-another-react-lightbox";
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Details = () => {
    const [open, setOpen] = useState(false);
return ( 
    <Fragment>
        {/* Start:: Breadcrumb*/}
        <div className="border-bottom py-3 bg-white border-top">
            <div className="container">
                    {/* Page Header */}
                        <Seo title={"Marketplace Details"} />
                        <Pageheader Heading="" Pagetitle={true} Pages={[{title:"Apps", active:true}, {title:"Marketplace", active:true}, {title:"Marketplace Details", active:false},]} />
                    {/* Page Header Close */}
            </div>
        </div>
        {/* End:: Breadcrumb*/}

        {/* Start:: Section-1 */}
        <section className="section py-4">
            <div className="container"> 
                <Row> 
                    <Col lg={8}> 
                        <h4 className="fw-semibold">HTML Modern Template</h4>
                        <div className="d-flex align-items-center fs-16 mb-4">
                            <div className="min-w-fit-content">
                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                <span className="text-warning me-1"><i className="bi bi-star-half"></i></span>
                                <span className="text-warning"><i className="bi bi-star"></i></span>
                            </div>
                            <p className="mx-1 mb-0 min-w-fit-content text-muted">
                                <span>(142)</span>
                                <span>Ratings</span>
                            </p>
                            <span className="text-danger">( 150 Sales )</span>
                        </div>
                        <div className="card custom-card">                                    
                            <div className=""> 
                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon rounded-circle top-wishlist-icon" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-3-fill align-middle"></i></Link>
                            </OverlayTrigger>
                                <Link scroll={false} href="#!"  onClick={() => setOpen(true)} className="glightbox card border-0 mb-0" data-gallery="gallery1" data-title="Cadbo Car kb43 (1/2)" data-type="image" data-draggable="true"> 
                                    <div className="classify-gallery">
                                        <span className="btn btn-white-transparent backdrop-blur classifyimage-btn rounded-pill text-fixed-white"><i className="ri-image-line me-2 bg-primary text-fixed-white feature-icons border-0"></i>2 Images</span>
                                        <img src="../../assets/images/marketplace/1.png" alt="image"  />
                                    </div>
                                </Link>                                 
                                {/* Start::row-1 */}
                                <div className="row ad-gallery">
                                    <Lightbox plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                                        open={open}
                                        close={() => setOpen(false)}
                                        slides={[
                                            { src: "../../assets/images/marketplace/1.png" },
                                            { src: "../../assets/images/marketplace/2.png" },
                                        ]}
                                    />
                                </div>
                                {/*End::row-1 */}
                            </div>
                            <div className="card-body text-center">
                                <div className="btn-list">
                                    <Link scroll={false} href="#!" className="btn btn-w-lg btn-danger"><i className="ti ti-eye me-1 ms-1 d-inline-flex"></i>Preview</Link>
                                    <Link scroll={false} href="#!" className="btn btn-w-lg btn-light border"><i className="ti ti-photo-plus me-1 ms-1 d-inline-flex"></i>Screenshots</Link>
                                </div>
                            </div>
                        </div>
                        <div className="card custom-card">
                            <div className="card-body">
                                <h5 className="fw-semibold mb-3">Description :</h5>
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
                            </div>
                        </div>
                        <div className="card custom-card border-0 bg-primary-transparent shadow-none">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                    <div>
                                        <h5 className="fw-semibold mb-0">&#128400; Was this Ad useful to someone?</h5>
                                    </div>
                                    <div>
                                        <Link scroll={false} href="#!" className="btn btn-success" role="button">
                                            <i className="ri-share-line me-2"></i>Share Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="row mt-5 g-0">
                            <h4 className="fw-semibold mb-0">Related Products</h4>
                            <p className="">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            <Swiper className="swiper-related-jobs" spaceBetween={30} navigation={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                            modules={[Autoplay, Navigation]}>
                                <SwiperSlide>
                                    <Row>
                                        <Col lg={4}>
                                            <Card className="custom-card overflow-hidden card-style-2">
                                                <Link scroll={false} href="/marketplace/details/">
                                                    <div className="featured-img">
                                                        <img src="../../assets/images/marketplace/templates/1.png" className="" alt="..." />
                                                    </div>
                                                </Link>
                                                <Card.Body className="p-3 position-relative">
                                                    <div className="d-flex align-items-start justify-content-between">
                                                        <div className="flex-grow-1">
                                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                            <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">PHP Script</Link></h5>
                                                            <div className="d-flex align-items-center fs-11">
                                                                <div className="min-w-fit-content">
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
                                                            <span className="text-danger">( 150 Sales )</span>
                                                        </div>
                                                        <div className="min-w-fit-content">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                            <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                        </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center mt-3 flex-wrap gap-2 justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$399</span>
                                                        </div>
                                                        <Link scroll={false} href="/marketplace/details/" className="btn btn-sm btn-primary"><i className="ti ti-eye me-1 d-inline-flex"></i>Preview</Link>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col lg={4}>
                                            <Card className="custom-card overflow-hidden card-style-2">
                                                <span className="badge bg-danger tag-badge">20% Off</span>
                                                <Link scroll={false} href="/marketplace/details/">
                                                    <div className="featured-img">
                                                        <img src="../../assets/images/marketplace/templates/2.png" className="" alt="..." />
                                                    </div>
                                                </Link>
                                                <Card.Body className="p-3 position-relative">
                                                    <div className="d-flex align-items-start justify-content-between">
                                                        <div className="flex-grow-1">
                                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                            <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">HTML Template</Link></h5>
                                                            <div className="d-flex align-items-center fs-11">
                                                                <div className="min-w-fit-content">
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-half"></i></span>
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
                                                    <div className="d-flex align-items-baseline mt-3 flex-wrap gap-2 justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <h5 className="fw-semibold text-primary mb-0">$170</h5>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$379</span>
                                                        </div>
                                                        <Link scroll={false} href="/marketplace/details/" className="btn btn-sm btn-primary"><i className="ti ti-eye me-1 d-inline-flex"></i>Preview</Link>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col lg={4}>
                                            <Card className="custom-card overflow-hidden card-style-2">
                                                <div className="badge top-right-badge bg-warning text-fixed-white">
                                                    <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                    <div className="badge-text">Trending</div>
                                                </div>
                                                <Link scroll={false} href="/marketplace/details/">
                                                    <div className="featured-img">
                                                        <img src="../../assets/images/marketplace/templates/3.png" className="" alt="..." />
                                                    </div>
                                                </Link>
                                                <Card.Body className="p-3 position-relative">
                                                    <div className="d-flex align-items-start justify-content-between">
                                                        <div className="flex-grow-1">
                                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                            <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">React Template</Link></h5>
                                                            <div className="d-flex align-items-center fs-11">
                                                                <div className="min-w-fit-content">
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-half"></i></span>
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
                                                            <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                        </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-baseline mt-3 flex-wrap gap-2 justify-content-between">
                                                        <div>
                                                            <h4 className="fw-semibold text-primary mb-0">$240</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$499</span>
                                                        </div>
                                                        <Link scroll={false} href="/marketplace/details/" className="btn btn-sm btn-primary"><i className="ti ti-eye me-1 d-inline-flex"></i>Preview</Link>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Row>
                                        <Col lg={4}>
                                            <Card className="custom-card overflow-hidden card-style-2">
                                                <span className="badge bg-danger tag-badge">40% Off</span>
                                                <Link scroll={false} href="/marketplace/details/">
                                                    <div className="featured-img">
                                                        <img src="../../assets/images/marketplace/templates/4.png" className="" alt="..." /> 
                                                    </div>
                                                </Link>
                                                <Card.Body className="p-3 position-relative">
                                                    <div className="d-flex align-items-start justify-content-between">
                                                        <div className="flex-grow-1">
                                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                            <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Wordpress</Link></h5>
                                                            <div className="d-flex align-items-center fs-11">
                                                                <div className="min-w-fit-content">
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                </div>
                                                                <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                    <span>(152)</span>
                                                                    <span>Ratings</span>
                                                                </p>
                                                            </div>
                                                            <span className="text-danger">( 310 Sales )</span>
                                                        </div>
                                                        <div className="min-w-fit-content">
                                                            <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-baseline mt-3 flex-wrap gap-2 justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <h4 className="fw-semibold text-primary mb-0">$320</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$439</span>
                                                        </div>
                                                        <Link scroll={false} href="/marketplace/details/" className="btn btn-sm btn-primary"><i className="ti ti-eye me-1 d-inline-flex"></i>Preview</Link>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col lg={4}>
                                            <Card className="custom-card overflow-hidden card-style-2">
                                                <span className="badge bg-danger tag-badge">20% Off</span>
                                                <div className="badge top-right-badge bg-warning text-fixed-white">
                                                    <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                    <div className="badge-text">Trending</div>
                                                </div>
                                                <Link scroll={false} href="/marketplace/details/">
                                                    <div className="featured-img">
                                                        <img src="../../assets/images/marketplace/templates/5.png" className="" alt="..." /> 
                                                    </div>
                                                </Link>
                                                <Card.Body className="p-3 position-relative">
                                                    <div className="d-flex align-items-start justify-content-between">
                                                        <div className="flex-grow-1">
                                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                            <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Laravel Template</Link></h5>
                                                            <div className="d-flex align-items-center fs-11">
                                                                <div className="min-w-fit-content">
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
                                                            <span className="text-danger">( 120 Sales )</span>
                                                        </div>
                                                        <div className="min-w-fit-content">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                            <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                        </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-baseline mt-3 flex-wrap gap-2 justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <h4 className="fw-semibold text-primary mb-0">$120</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$399</span>
                                                        </div>
                                                        <Link scroll={false} href="/marketplace/details/" className="btn btn-sm btn-primary"><i className="ti ti-eye me-1 d-inline-flex"></i>Preview</Link>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col lg={4}>
                                            <Card className="custom-card overflow-hidden card-style-2">
                                                <Link scroll={false} href="/marketplace/details/">
                                                    <div className="featured-img">
                                                        <img src="../../assets/images/marketplace/templates/6.png" className="" alt="..." /> 
                                                    </div>
                                                </Link>
                                                <Card.Body className="p-3 position-relative">
                                                    <div className="d-flex align-items-start justify-content-between">
                                                        <div className="flex-grow-1">
                                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                            <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Django Template</Link></h5>
                                                            <div className="d-flex align-items-center fs-11">
                                                                <div className="min-w-fit-content">
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-half"></i></span>
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
                                                    <div className="d-flex align-items-baseline mt-3 flex-wrap gap-2 justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <h4 className="fw-semibold text-primary mb-0">$220</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$499</span>
                                                        </div>
                                                        <Link scroll={false} href="/marketplace/details/" className="btn btn-sm btn-primary"><i className="ti ti-eye me-1 d-inline-flex"></i>Preview</Link>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Row>
                                        <Col lg={4}>
                                            <Card className="custom-card overflow-hidden card-style-2">
                                                <span className="badge bg-danger tag-badge">20% Off</span>
                                                <Link scroll={false} href="/marketplace/details/">
                                                    <div className="featured-img">
                                                        <img src="../../assets/images/marketplace/templates/7.png" className="" alt="..." /> 
                                                    </div>
                                                </Link>
                                                <Card.Body className="p-3 position-relative">
                                                    <div className="d-flex align-items-start justify-content-between">
                                                        <div className="flex-grow-1">
                                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                            <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Vuejs Template</Link></h5>
                                                            <div className="d-flex align-items-center fs-11">
                                                                <div className="min-w-fit-content">
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-half"></i></span>
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
                                                    <div className="d-flex align-items-baseline mt-3 flex-wrap gap-2 justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <h4 className="fw-semibold text-primary mb-0">$220</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$499</span>
                                                        </div>
                                                        <Link scroll={false} href="/marketplace/details/" className="btn btn-sm btn-primary"><i className="ti ti-eye me-1 d-inline-flex"></i>Preview</Link>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col lg={4}>
                                            <Card className="custom-card overflow-hidden card-style-2">
                                                <Link scroll={false} href="/marketplace/details/">
                                                    <div className="featured-img">
                                                        <img src="../../assets/images/marketplace/templates/8.png" className="" alt="..." /> 
                                                    </div>
                                                </Link>
                                                <Card.Body className="p-3 position-relative">
                                                    <div className="d-flex align-items-start justify-content-between">
                                                        <div className="flex-grow-1">
                                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                            <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Codeigniter</Link></h5>
                                                            <div className="d-flex align-items-center fs-11">
                                                                <div className="min-w-fit-content">
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
                                                            <span className="text-danger">( 120 Sales )</span>
                                                        </div>
                                                        <div className="min-w-fit-content">
                                                            <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-baseline mt-3 flex-wrap gap-2 justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <h4 className="fw-semibold text-primary mb-0">$120</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$399</span>
                                                        </div>
                                                        <Link scroll={false} href="/marketplace/details/" className="btn btn-sm btn-primary"><i className="ti ti-eye me-1 d-inline-flex"></i>Preview</Link>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col lg={4}>
                                            <Card className="custom-card overflow-hidden card-style-2">
                                                <span className="badge bg-danger tag-badge">40% Off</span>
                                                <Link scroll={false} href="/marketplace/details/">
                                                    <div className="featured-img">
                                                        <img src="../../assets/images/marketplace/templates/4.png" className="" alt="..." /> 
                                                    </div>
                                                </Link>
                                                <Card.Body className="p-3 position-relative">
                                                    <div className="d-flex align-items-start justify-content-between">
                                                        <div className="flex-grow-1">
                                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                            <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Wordpress</Link></h5>
                                                            <div className="d-flex align-items-center fs-11">
                                                                <div className="min-w-fit-content">
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-half"></i></span>
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
                                                    <div className="d-flex align-items-baseline mt-3 flex-wrap gap-2 justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <h4 className="fw-semibold text-primary mb-0">$320</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$439</span>
                                                        </div>
                                                        <Link scroll={false} href="/marketplace/details/" className="btn btn-sm btn-primary"><i className="ti ti-eye me-1 d-inline-flex"></i>Preview</Link>
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
                            <Card.Header>
                                <Card.Title>
                                    Select Licence Type
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item className="list-group-item d-flex">
                                        <div className="form-check">
                                            <input className="form-check-input" name="list-radio" id="customRadio1" type="radio" />
                                            <label className="cursor-pointer d-block custom-control-label" htmlFor="customRadio1">Regular Licence
                                                <span className="fs-12 text-muted ms-1">Classic marinara sauce, authentic old-world pepperoni</span>
                                                <Link scroll={false} href="#!" className="fs-12 text-primary ms-1 d-inline-flex"><u>View Details</u></Link>
                                            </label>
                                        </div>
                                        <label className="form-check-label fw-semibold fs-16" htmlFor="customRadio1">$69</label>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="list-group-item d-flex">
                                        <div className="form-check">
                                            <input className="form-check-input" name="list-radio" id="customRadio2" type="radio" defaultChecked />
                                            <label className="cursor-pointer d-block custom-control-label" htmlFor="customRadio2">Extended Licence
                                                <span className="fs-12 text-muted ms-1">Classic marinara sauce, authentic old-world pepperoni</span>
                                                <Link scroll={false} href="#!" className="fs-12 text-primary ms-1 d-inline-flex"><u>View Details</u></Link>
                                            </label>
                                        </div>
                                        <label className="form-check-label fw-semibold fs-16" htmlFor="customRadio1">$99</label>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-grid">
                                    <Link scroll={false} href="#!" className="btn btn-lg btn-success" role="button">
                                        <i className="ri-shopping-cart-line me-2"></i>Add to Cart
                                    </Link>
                                </div>
                            </Card.Footer>
                        </Card>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header>
                                <Card.Title>
                                    Product Information
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="p-2">
                                <div className="table-responsive">
                                    <Table className="table-responsive table-borderless">
                                        <tbody>
                                            <tr>
                                                <td className="w-50">
                                                    <span className="fw-semibold"><i className="bi bi-check-circle text-primary me-2"></i>Last Updated</span> 
                                                </td>
                                                <td>25 Dec 2022</td>
                                            </tr>
                                            <tr>
                                                <td className="w-50">
                                                    <span className="fw-semibold"><i className="bi bi-check-circle text-primary me-2"></i>Created Date</span> 
                                                </td>
                                                <td>13 Jan 2022</td>
                                            </tr>
                                            <tr>
                                                <td className="w-50">
                                                    <span className="fw-semibold"><i className="bi bi-check-circle text-primary me-2"></i>Category</span> 
                                                </td>
                                                <td>HTML Template</td>
                                            </tr>
                                            <tr>
                                                <td className="w-50">
                                                    <span className="fw-semibold"><i className="bi bi-check-circle text-primary me-2"></i>Files Included</span> 
                                                </td>
                                                <td>HTML, CSS, Javascript, Images</td>
                                            </tr>
                                            <tr>
                                                <td className="w-50">
                                                    <span className="fw-semibold"><i className="bi bi-check-circle text-primary me-2"></i>Browsers</span> 
                                                </td>
                                                <td>Chrome, Firefox, Safari, IE, Opera, OperaMini</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Card.Body>
                        </Card>
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
                                        <p className="mb-0">Member Since 2015</p>
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
                                <div className="p-4 d-flex align-items-center flex-wrap gap-2">
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
                    </Col>
                </Row>
            </div>
        </section>
        {/* End:: Section-1 */}

        {/* Start:: Section-2 */}
        <section className="section bg-banner px-lg-0 px-4">
            <Row className="justify-content-center">
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
                            <img src="../../assets/images/media/apps/apple-store.png" alt="" className="invert-1"/>
                            App Store
                        </Link>
                    </div>
                </Col>
            </Row>
        </section>
        {/* End:: Section-2 */}

        {/* Start:: Search Modal */}
        <Modal className="fade" id="searchModal" tabIndex={-1} aria-labelledby="searchModal" aria-hidden="true">
            <Modal.Body className="p-4">
                <span className="input-group">
                <input type="text" className="form-control form-control-lg border-0 shadow-none" placeholder="Search" aria-label="Username" />
                <Link scroll={false} href="#!" className="input-group-text border-0" id="voice-search"><i className="fe fe-mic header-link-icon"></i></Link>
                </span>
                <div className="mt-4">
                <p className="font-weight-semibold text-muted mb-2">Are You Looking For...</p>
                <Link scroll={false} href="#!" className="search-tags">Popular Articles</Link>
                <Link scroll={false} href="#!" className="search-tags">Recent Articles</Link>
                <Link scroll={false} href="#!" className="search-tags">News and Updates</Link>
                </div>
            </Modal.Body>
            <Modal.Footer className="">
                <div className="ms-auto">
                <Button variant="" className="btn btn-lg btn-primary">Search</Button>
                </div>
            </Modal.Footer>
        </Modal>
        {/* End:: Search Modal */}
    </Fragment>
    )
};

export default Details;