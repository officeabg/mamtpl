"use client"
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, ListGroup, Modal, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation,} from "swiper/modules";
import { Lightbox } from "yet-another-react-lightbox";
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Classifieddetails = () => {
    const [open, setOpen] = useState(false);
return ( 
    <Fragment>

            {/* Start:: Breadcrumb*/}
            <div className="border-bottom border-top py-3 bg-white">
                <div className="container">
                {/* Page Header */}
                    <Seo title={"Classified Details"} />
                    <Pageheader Heading="Classified Details" Pagetitle={true} Pages={[{title:"Apps", active:true}, {title:"Classifieds", active:true}, {title:"Classified Details", active:false},]} />
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
                                <div className="">
                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-primary rounded-circle top-wishlist-icon" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-line"></i></Link>
                                    <Link scroll={false} href="#!"  onClick={() => setOpen(true)} className="glightbox card border-0 mb-0" data-gallery="gallery1" data-title="Cadbo Car kb43 (1/5)" data-type="image" data-draggable="true"> 
                                        <div className="classify-gallery">
                                            <span className="badge bg-warning tag-badge">Featured</span>
                                            <span className="btn btn-white-transparent backdrop-blur classifyimage-btn rounded-pill"><i className="ri-image-line me-2 bg-primary text-fixed-white feature-icons border-0"></i>5 Images</span>
                                            <img src="../../assets/images/classifieds/classify-gallery/1.jpg" alt="image"/>
                                        </div>
                                    </Link>                                 
                                    {/* Start::row-1 */}
                                    <Row className="ad-gallery">
                                        <Lightbox plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                                            open={open}
                                            close={() => setOpen(false)}
                                            slides={[
                                                { src: "../../assets/images/classifieds/classify-gallery/2.jpg" },
                                                { src: "../../assets/images/classifieds/classify-gallery/3.jpg" },
                                                { src: "../../assets/images/classifieds/classify-gallery/4.jpg" },
                                                { src: "../../assets/images/classifieds/classify-gallery/5.jpg" },
                                            ]}
                                        />
                                    </Row>
                                    {/*End::row-1 */}
                                </div>
                                <Card.Body className="">
                                    <h4 className="fw-medium">Cadbo Car kb43 (2020)</h4>
                                    <div className="d-flex flex-wrap gap-4">
                                        <div className="">
                                            <p className="fs-14 mb-0">
                                                <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-default">
                                                    <i className="ri-oil-line fs-13"></i>
                                                </span>
                                                Diesel
                                            </p>
                                        </div>
                                        <div className="">
                                            <p className="fs-14 mb-0">
                                                <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-default">
                                                    <i className="ri-time-line fs-13"></i>
                                                </span>
                                                124500 km
                                            </p>
                                        </div>
                                        <div className="">
                                            <p className="fs-14 mb-0">
                                                <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-default">
                                                    <i className="ri-git-branch-line fs-13"></i>
                                                </span>
                                                Manual
                                            </p>
                                        </div>
                                        <div className="">
                                            <p className="fs-14 mb-0">
                                                <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-default">
                                                    <i className="ri-map-pin-line fs-13"></i>
                                                </span>
                                                USA , 16 Nov 2024
                                            </p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="custom-card">
                                <Card.Body className="">
                                    <h5 className="fw-medium mb-3">Description</h5>
                                    <p>Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore.A officiis optio temporibus minima facilis...</p>
                                    <table className="table row table-borderless w-100 text-nowrap ">
                                        <tbody className="col-lg-12 col-xl-4 p-0">
                                            <tr>
                                                <td><span className="fw-medium"><i className="bi bi-check-circle text-primary me-2"></i>Posted Date :</span> 25 Dec 2022</td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-medium"><i className="bi bi-check-circle text-primary me-2"></i>Seller Type :</span> Private Seller</td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-medium"><i className="bi bi-check-circle text-primary me-2"></i>Model :</span> modelH7</td>
                                            </tr>
                                        </tbody>
                                        <tbody className="col-lg-12 col-xl-4 p-0">
                                            <tr>
                                                <td><span className="fw-medium"><i className="bi bi-check-circle text-primary me-2"></i>Kilometres :</span> 452000</td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-medium"><i className="bi bi-check-circle text-primary me-2"></i>Breaks :</span> Front , Rear</td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-medium"><i className="bi bi-check-circle text-primary me-2"></i>Air Bags :</span> Available</td>
                                            </tr>
                                        </tbody>
                                        <tbody className="col-lg-12 col-xl-4 p-0">
                                            <tr>
                                                <td><span className="fw-medium"><i className="bi bi-check-circle text-primary me-2"></i>Colors :</span> Red , pink, Gray</td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-medium"><i className="bi bi-check-circle text-primary me-2"></i>Engine :</span> F8D </td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-medium"><i className="bi bi-check-circle text-primary me-2"></i>Power Windows :</span> Available </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Card.Body>
                            </Card>
                            <Card className="custom-card border bg-primary-transparent shadow-none border-0">
                                <Card.Body className="">
                                    <div className="row align-items-center gy-2">
                                        <Col md={8} lg={6} className="">
                                            <h5 className="fw-medium mb-0">&#128400; Was this Ad useful to someone?</h5>
                                        </Col>
                                        <div className="col-md-4 col-lg-6 text-md-end">
                                            <Link scroll={false} href="#!" className="btn btn-success" role="button">
                                                <i className="ri-share-line me-2"></i>Share Now
                                            </Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card> 
                            <div className="row mt-5 g-1">
                                <h4 className="fw-medium mb-0">Related Ads</h4>
                                <p className="">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                <Swiper className="swiper-related-jobs hfdh" spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                 navigation={true}   modules={[Autoplay , Navigation]} >
                                    <SwiperSlide>
                                        <Row>
                                            <Col md={4}>
                                                <Card className="custom-card overflow-hidden">
                                                    <span className="badge bg-warning tag-badge">Featured</span>
                                                    <Link scroll={false} href="#!">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/classifieds/featured-adds/1.jpg" className="" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <Card.Body className=" p-3 position-relative">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-fill">
                                                                <h5 className="mb-0 fw-medium"><span>$2,226.00</span></h5>
                                                                <p className="mb-1 fw-medium">4-Bds - 4 Ba - 600ff3</p>
                                                            </div>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                        <div className="text-muted mb-2">4 Beds Duplex House</div>
                                                        <div className="fs-11 text-muted">
                                                            <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                            <span>,</span>
                                                            <span className="">16 Nov 2024</span>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <div className="card custom-card overflow-hidden sold-out">
                                                    <span className="badge bg-danger tag-badge">Sold Out</span>
                                                    <Link scroll={false} href="#!">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/classifieds/featured-adds/2.jpg" className="" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <Card.Body className=" p-3 position-relative">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-fill">
                                                                <h5 className="mb-0 fw-medium"><span>$5,321.00</span></h5>
                                                                <p className="mb-1 fw-medium">2024 - 120,000km</p>
                                                            </div>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                           
                                                        </div>
                                                        <div className="text-muted mb-2">Cadbo Car kb43</div>
                                                        <div className="fs-11 text-muted">
                                                            <span className=""><i className="bi bi-geo-alt me-1"></i>Banglore</span>
                                                            <span>,</span>
                                                            <span className="">16 Nov 2024</span>
                                                        </div>
                                                    </Card.Body>
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <Card className="custom-card overflow-hidden">
                                                    <span className="badge bg-primary tag-badge">New</span>
                                                    <Link scroll={false} href="#!">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/classifieds/featured-adds/3.jpg" className="" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <Card.Body className=" p-3 position-relative">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-fill">
                                                                <h5 className="mb-0 fw-medium"><span>$56,764.00</span></h5>
                                                                <p className="mb-1 fw-medium">2022 Oct 04</p>
                                                            </div>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                        <div className="text-muted mb-2">Smart Phone H6</div>
                                                        <div className="fs-11 text-muted">
                                                            <span className=""><i className="bi bi-geo-alt me-1"></i>Chennai</span>
                                                            <span>,</span>
                                                            <span className="">16 Nov 2024</span>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Row>
                                            <Col md={4}>
                                                <Card className="custom-card overflow-hidden">
                                                    <span className="badge bg-danger tag-badge">Urgent</span>
                                                    <Link scroll={false} href="#!">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/classifieds/featured-adds/4.jpg" className="" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <Card.Body className=" p-3 position-relative">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-fill">
                                                                <h5 className="mb-0 fw-medium"><span>$5,763.00</span></h5>
                                                                <p className="mb-1 fw-medium">2024 - 120,000km</p>
                                                            </div>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                        <div className="text-muted mb-2">Gittbos Bike Mf120</div>
                                                        <div className="fs-11 text-muted">
                                                            <span className=""><i className="bi bi-geo-alt me-1"></i>Pune</span>
                                                            <span>,</span>
                                                            <span className="">16 Nov 2024</span>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card className="custom-card overflow-hidden">
                                                    <Link scroll={false} href="#!">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/classifieds/featured-adds/1.jpg" className="" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <Card.Body className=" p-3 position-relative">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-fill">
                                                                <h5 className="mb-0 fw-medium"><span>$2,226.00</span></h5>
                                                                <p className="mb-1 fw-medium">4-Bds - 4 Ba - 600ff3</p>
                                                            </div>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                        <div className="text-muted mb-2">4 Beds Duplex House</div>
                                                        <div className="fs-11 text-muted">
                                                            <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                            <span>,</span>
                                                            <span className="">16 Nov 2024</span>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card className="custom-card overflow-hidden">
                                                    <Link scroll={false} href="#!">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/classifieds/featured-adds/2.jpg" className="" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <Card.Body className=" p-3 position-relative">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-fill">
                                                                <h5 className="mb-0 fw-medium"><span>$5,321.00</span></h5>
                                                                <p className="mb-1 fw-medium">2024 - 120,000km</p>
                                                            </div>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                        <div className="text-muted mb-2">Cadbo Car kb43</div>
                                                        <div className="fs-11 text-muted">
                                                            <span className=""><i className="bi bi-geo-alt me-1"></i>Banglore</span>
                                                            <span>,</span>
                                                            <span className="">16 Nov 2024</span>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Row>
                                            <Col md={4}>
                                                <Card className="custom-card overflow-hidden">
                                                    <Link scroll={false} href="#!">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/classifieds/featured-adds/6.jpg" className="" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <Card.Body className=" p-3 position-relative">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-fill">
                                                                <h5 className="mb-0 fw-medium"><span>$56,764.00</span></h5>
                                                                <p className="mb-1 fw-medium">2022 Oct 04</p>
                                                            </div>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                        <div className="text-muted mb-2">Laptop F6</div>
                                                        <div className="fs-11 text-muted">
                                                            <span className=""><i className="bi bi-geo-alt me-1"></i>Chennai</span>
                                                            <span>,</span>
                                                            <span className="">16 Nov 2024</span>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card className="custom-card overflow-hidden">
                                                    <Link scroll={false} href="#!">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/classifieds/featured-adds/4.jpg" className="" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <Card.Body className=" p-3 position-relative">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-fill">
                                                                <h5 className="mb-0 fw-medium"><span>$5,763.00</span></h5>
                                                                <p className="mb-1 fw-medium">2024 - 120,000km</p>
                                                            </div>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                        <div className="text-muted mb-2">Gittbos Bike Mf120</div>
                                                        <div className="fs-11 text-muted">
                                                            <span className=""><i className="bi bi-geo-alt me-1"></i>Pune</span>
                                                            <span>,</span>
                                                            <span className="">16 Nov 2024</span>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card className="custom-card overflow-hidden">
                                                    <span className="badge bg-warning tag-badge">Featured</span>
                                                    <Link scroll={false} href="#!">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/classifieds/featured-adds/5.jpg" className="" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <Card.Body className=" p-3 position-relative">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-fill">
                                                                <h5 className="mb-0 fw-medium"><span>$5,763.00</span></h5>
                                                                <p className="mb-1 fw-medium">2024 - 4 Months</p>
                                                            </div>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                        <div className="text-muted mb-2">Fed Dog</div>
                                                        <div className="fs-11 text-muted">
                                                            <span className=""><i className="bi bi-geo-alt me-1"></i>Pune</span>
                                                            <span>,</span>
                                                            <span className="">16 Nov 2024</span>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Row>
                                            <Col md={4}>
                                                <Card className="custom-card overflow-hidden">
                                                    <span className="badge bg-warning tag-badge">Featured</span>
                                                    <Link scroll={false} href="#!">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/classifieds/featured-adds/1.jpg" className="" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <Card.Body className=" p-3 position-relative">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-fill">
                                                                <h5 className="mb-0 fw-medium"><span>$2,226.00</span></h5>
                                                                <p className="mb-1 fw-medium">4-Bds - 4 Ba - 600ff3</p>
                                                            </div>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                        <h6 className="text-muted">4 Beds Duplex House</h6>
                                                        <div className="fs-11 text-muted">
                                                            <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                            <span>,</span>
                                                            <span className="">16 Nov 2024</span>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <div className="card custom-card overflow-hidden sold-out">
                                                    <span className="badge bg-danger tag-badge">Sold Out</span>
                                                    <Link scroll={false} href="#!">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/classifieds/featured-adds/2.jpg" className="" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <Card.Body className=" p-3 position-relative">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-fill">
                                                                <h5 className="mb-0 fw-medium"><span>$5,321.00</span></h5>
                                                                <p className="mb-1 fw-medium">2024 - 120,000km</p>
                                                            </div>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                        <h6 className="text-muted">Cadbo Car kb43</h6>
                                                        <div className="fs-11 text-muted">
                                                            <span className=""><i className="bi bi-geo-alt me-1"></i>Banglore</span>
                                                            <span>,</span>
                                                            <span className="">16 Nov 2024</span>
                                                        </div>
                                                    </Card.Body>
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <Card className="custom-card overflow-hidden">
                                                    <span className="badge bg-primary tag-badge">New</span>
                                                    <Link scroll={false} href="#!">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/classifieds/featured-adds/3.jpg" className="" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <Card.Body className=" p-3 position-relative">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-fill">
                                                                <h5 className="mb-0 fw-medium"><span>$56,764.00</span></h5>
                                                                <p className="mb-1 fw-medium">2022 Oct 04</p>
                                                            </div>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                        <h6 className="text-muted">Smart Phone H6</h6>
                                                        <div className="fs-11 text-muted">
                                                            <span className=""><i className="bi bi-geo-alt me-1"></i>Chennai</span>
                                                            <span>,</span>
                                                            <span className="">16 Nov 2024</span>
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
                                <Card.Body className="p-4">
                                    <div className="flex-fill main-profile-info">
                                        <h5 className="fw-medium fs-4">$2,226.00</h5>
                                    </div>
                                    <div className="text-center">
                                        <div className="d-grid gap-2">
                                            <input type="email" className="form-control" id="inputEmail11" placeholder="$34,786"/>
                                            <Link scroll={false} href="#!" className="btn btn-lg btn-wave btn-primary mt-1">
                                                Bid Now
                                            </Link>
                                        </div>
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
                                            <h5 className="fw-medium mb-1">Jack Miller 
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Verified User</Tooltip>}>
                                                <i className="bi bi-check-circle-fill text-success fs-14 ms-1" data-bs-toggle="tooltip"
                                                    data-bs-placement="top" title="Verified User"></i>
                                            </OverlayTrigger>
                                                </h5>
                                            <p className="mb-0">Member Since 2005</p>
                                        </div>
                                    </div>
                                    <div className="p-4 border-bottom border-block-end-dashed text-center">
                                        <div className="d-flex flex-wrap gap-2">
                                            <div className="input-group w-auto flex-grow-1">
                                                <div className="input-group-text bg-white">
                                                    <i className="fe fe-phone"></i>
                                                </div>
                                                <input type="email" className="form-control" id="inputEmail1" placeholder="*** *** 7654" defaultValue="*** *** 7654"/>
                                            </div>
                                            <Link href="#!" scroll={false} className="btn btn-wave btn-icon btn-primary">
                                                <i className="ri-eye-line"></i>
                                            </Link> 
                                            <Link href="#!" scroll={false} className="btn btn-wave btn-icon btn-secondary">
                                                <i className="ri-message-line"></i>
                                            </Link> 
                                        </div>
                                    </div>  
                                    <div className="p-4 d-flex align-items-center flex-wrap gap-2">
                                        <p className="fs-15 mb-0 me-4 fw-medium">Social Networks :</p>
                                        <div className="btn-list mb-0">
                                            <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light">
                                                <i className="ri-facebook-line"></i>
                                            </Button>
                                            <Button variant="" className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light">
                                                <i className="ri-twitter-x-line"></i>
                                            </Button>
                                            <Button variant="" className="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light">
                                                <i className="ri-instagram-line"></i>
                                            </Button>
                                            <Button variant="" className="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light">
                                                <i className="ri-github-line"></i>
                                            </Button>
                                            <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
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
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Similar Ads 
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <ListGroup className="similarads-list">
                                        <ListGroup.Item>
                                            <div className="d-flex g-0 align-items-center flex-wrap">
                                                <div>
                                                    <Link href="#!" scroll={false}>
                                                        <div className="similarads-img">
                                                            <img src="../../assets/images/classifieds/similar-products/1.jpg" className="img-fluid rounded-3 h-100" alt="..." />
                                                        </div>
                                                    </Link>
                                                </div> 
                                                <div className="flex-fill">
                                                    <Card.Body className=" p-3">
                                                        <h6 className="card-title fw-medium">4 Beds Duplex House</h6>
                                                        <div className="fs-12 text-muted mb-2">
                                                            <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                            <span>,</span>
                                                            <span className="">16 Nov 2024</span>
                                                        </div>
                                                        <div className="d-flex justify-content-between">
                                                            <p className="fw-medium mb-0 text-muted">$2,226.00</p>
                                                            <Link href="#!" scroll={false} className="text-primary fw-medium fs-14">
                                                                View Details <i className="fe fe-arrow-right"></i>
                                                            </Link>
                                                        </div>
                                                    </Card.Body>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex g-0 align-items-center flex-wrap">
                                                <div>
                                                    <Link href="#!" scroll={false}>
                                                        <div className="similarads-img">
                                                            <img src="../../assets/images/classifieds/similar-products/2.jpg" className="img-fluid rounded-3 h-100" alt="..." />
                                                        </div>
                                                    </Link>
                                                </div> 
                                                <div className="flex-fill">
                                                    <Card.Body className=" p-3">
                                                        <h6 className="card-title fw-medium">Fed Dog</h6>
                                                        <div className="fs-12 text-muted mb-2">
                                                            <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                            <span>,</span>
                                                            <span className="">16 Nov 2024</span>
                                                        </div>
                                                        <div className="d-flex justify-content-between">
                                                            <p className="fw-medium mb-0 text-muted">$25,000</p>
                                                            <Link href="#!" scroll={false} className="text-primary fw-medium fs-14">
                                                                View Details <i className="fe fe-arrow-right"></i>
                                                            </Link>
                                                        </div>
                                                    </Card.Body>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex g-0 align-items-center flex-wrap">
                                                <div>
                                                    <Link href="#!" scroll={false}>
                                                        <div className="similarads-img">
                                                            <img src="../../assets/images/classifieds/similar-products/3.jpg" className="img-fluid rounded-3 h-100" alt="..." />
                                                        </div>
                                                    </Link>
                                                </div> 
                                                <div className="flex-fill">
                                                    <Card.Body className=" p-3">
                                                        <h6 className="card-title fw-medium">Gittbos Bike Mf120</h6>
                                                        <div className="fs-12 text-muted mb-2">
                                                            <span className=""><i className="bi bi-geo-alt me-1"></i>Pune </span>
                                                            <span>,</span>
                                                            <span className="">16 Nov 2024</span>
                                                        </div>
                                                        <div className="d-flex justify-content-between">
                                                            <p className="fw-medium mb-0 text-muted">$5,763.00</p>
                                                            <Link href="#!" scroll={false} className="text-primary fw-medium fs-14">
                                                                View Details <i className="fe fe-arrow-right"></i>
                                                            </Link>
                                                        </div>
                                                    </Card.Body>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex g-0 align-items-center flex-wrap">
                                                <div>
                                                    <Link href="#!" scroll={false}>
                                                        <div className="similarads-img">
                                                            <img src="../../assets/images/classifieds/similar-products/4.jpg" className="img-fluid rounded-3 h-100" alt="..." />
                                                        </div>
                                                    </Link>
                                                </div> 
                                                <div className="flex-fill">
                                                    <Card.Body className=" p-3">
                                                        <h6 className="card-title fw-medium">Cadbo Car kb43</h6>
                                                        <div className="fs-12 text-muted mb-2">
                                                            <span className=""><i className="bi bi-geo-alt me-1"></i>Banglore</span>
                                                            <span>,</span>
                                                            <span className="">16 Nov 2024</span>
                                                        </div>
                                                        <div className="d-flex justify-content-between">
                                                            <p className="fw-medium mb-0 text-muted">$5,321.00</p>
                                                            <Link href="#!" scroll={false} className="text-primary fw-medium fs-14">
                                                                View Details <i className="fe fe-arrow-right"></i>
                                                            </Link>
                                                        </div>
                                                    </Card.Body>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                                <Card.Footer className="">
                                    <Link href="#!" scroll={false} className="text-primary fw-medium fs-14 mt-2">
                                        View All <i className="fe fe-arrow-right"></i>
                                    </Link>                                    
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>
            {/* End:: Section-1 */}

            {/* Start:: Section-2 */}
            <section className="section bg-banner px-lg-0 px-4">
                <div className="row justify-content-center">
                    <Col lg={6} className="text-center">
                        <div className="mb-4">
                            <h3 className="fw-medium mb-2 text-fixed-white">&#128073; Download our free mobile apps today</h3>
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
                    </Col>
                </div>
            </section>
            {/* End:: Section-2 */}

            {/* Start:: Search Modal */}
            <Modal className="fade" id="searchModal" tabIndex={-1} aria-labelledby="searchModal" aria-hidden="true">
                    <Modal.Body className="p-4">
                      <span className="input-group">
                        <input type="text" className="form-control form-control-lg border-0 shadow-none" placeholder="Search" aria-label="Username"/>
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

export default Classifieddetails;