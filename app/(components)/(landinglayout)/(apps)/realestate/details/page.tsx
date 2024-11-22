"use client"
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Dropdown, Form, ListGroup, Modal, Nav, OverlayTrigger, Row, Tab, Tooltip } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, } from "swiper/modules"; 
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
        {/* Start:: Landing Banner */}
        <div className="landing-banner ad-search-container">
            <section className="py-5">
                <div className="container main-banner-container">
                    <div className="row justify-content-center">
                        <Col xxl={9} xl={11} className="">
                            <div className="custom-form-group">
                                <div className="input-group group-search d-xl-flex">
                                    <div className="category-dropdown-wrapper">
                                    <Dropdown>
                                            <Dropdown.Toggle variant="" href="#!" className="btn btn-lg btn-wave btn-white shadow-none categorydropdown border-0 no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="ri-function-line me-2 text-primary"></i>Property Type<i className="ri-arrow-down-s-line align-middle ms-1"></i>
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
                                    </div>    
                                    <div className="custom-form-group flex-grow-1">
                                        <input type="text" className="form-control form-control-lg shadow-none border-0 border-start" placeholder="Enter Your Keyword Here.." 
                                            aria-label="Recipient's username"/>
                                    </div>
                                    <div className="custom-form-group flex-grow-1">
                                        <input type="text" className="form-control form-control-lg shadow-none border-start border-0" id="input-placeholder" placeholder="Search by Location..."/>
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
                                                </Dropdown.Menu>
                                            </Dropdown>  
                                        </div>
                                    </div>  
                                    <Button variant="" className="btn btn-lg btn-secondary border-0 shadow-sm search-btn" type="button"><i className="bi bi-search"></i></Button>
                                </div>
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
                    <Seo title={"Property Details"} />
                    <Pageheader Heading="" Pagetitle={true} Pages={[{title:"Apps", active:true}, {title:"Real Estate", active:true}, {title:"Property Details", active:false},]} />
                {/* Page Header Close */}
            </div>
        </div>
        {/* End:: Breadcrumb*/}

        {/* Start:: Section-1 */}
        <section className="section py-4">
            <div className="container">
                <Row>
                    <Col lg={8}> 
                        <div className="card">                                    
                            <div className="">
                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-danger rounded-circle top-wishlist-icon" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-line"></i></Link>
                            </OverlayTrigger>
                                <Link scroll={false} href="#!"  onClick={() => setOpen(true)} className="glightbox card border-0 mb-0" data-gallery="gallery1" data-title="Cadbo Car kb43 (1/5)" data-type="image" data-draggable="true"> 
                                    <div className="classify-gallery p-0 border-0">
                                        <span className="badge bg-warning tag-badge">Featured</span>
                                        <span className="btn btn-white-transparent backdrop-blur classifyimage-btn rounded-pill"><i className="ri-image-line me-2 bg-primary text-fixed-white feature-icons border-0"></i>5 Images</span>
                                        <img src="../../assets/images/realestate/2.png" alt="image" />
                                    </div>
                                </Link>                                 
                                {/* Start::row-1 */}
                                <div className="row ad-gallery">
                                    <Lightbox plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                                        open={open}
                                        close={() => setOpen(false)}
                                        slides={[
                                            { src: "../../assets/images/realestate/4.png" },
                                            { src: "../../assets/images/realestate/5.png" },
                                            { src: "../../assets/images/realestate/6.png" },
                                            { src: "../../assets/images/realestate/5.png" },
                                        ]}
                                    />
                                </div>
                                {/*End::row-1 */}
                            </div>
                        </div>
                        <div className="row justify-content-center mb-4">
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                <div className="product-spec bg-white">
                                    <p className="mb-0">
                                        <img src="../../assets/images/realestate/icons/4.png" alt="" />  
                                    </p>
                                    <p className="fs-14 fw-semibold mb-0">4+ Bedrooms</p>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 mt-sm-0 mt-3">
                                <div className="product-spec bg-white">
                                    <p className="mb-0">                                            
                                        <img src="../../assets/images/realestate/icons/5.png" alt="" />  
                                    </p>
                                    <p className="fs-14 fw-semibold mb-0">
                                        4 Bathrooms
                                    </p>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 mt-sm-0 mt-3">
                                <div className="product-spec bg-white">
                                    <p className="mb-0">                                            
                                        <img src="../../assets/images/realestate/icons/6.png" alt="" />  
                                    </p>
                                    <p className="fs-14 fw-semibold mb-0">
                                        3500 Sq.ft Built Up
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Description
                                </Card.Title>
                            </Card.Header>
                            <div className="card-body">
                                <p>Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore.A officiis optio temporibus minima facilis...</p>
                                <p className="mb-0">Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore.A officiis optio temporibus minima facilis...</p>
                            </div>
                        </Card>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Features
                                </Card.Title>
                            </Card.Header>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table row table-borderless w-100 text-nowrap">
                                        <tbody className="col-lg-12 col-xl-6 p-0">
                                            <tr>
                                                <td><span className="fw-semibold"><i className="bi bi-check-circle text-primary me-2"></i>Age of Building :</span>  5 Years</td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-semibold"><i className="bi bi-check-circle text-primary me-2"></i>Maintenance Charges :</span> ₹2.1 Per Sq.Ft/M</td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-semibold"><i className="bi bi-check-circle text-primary me-2"></i>Builtup Area :</span> 560 Sq.Ft</td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-semibold"><i className="bi bi-check-circle text-primary me-2"></i>Furnishing Status :</span> Unfurnished</td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-semibold"><i className="bi bi-check-circle text-primary me-2"></i>Breaks :</span> Front , Rear</td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-semibold"><i className="bi bi-check-circle text-primary me-2"></i>Floor :</span> 4/5</td>
                                            </tr>
                                        </tbody>
                                        <tbody className="col-lg-12 col-xl-6 p-0">
                                            <tr>
                                                <td><span className="fw-semibold"><i className="bi bi-check-circle text-primary me-2"></i>Gated Security :</span> Yes</td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-semibold"><i className="bi bi-check-circle text-primary me-2"></i>Ownership Type :</span> Self Owned </td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-semibold"><i className="bi bi-check-circle text-primary me-2"></i>Flooring :</span> Musaic </td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-semibold"><i className="bi bi-check-circle text-primary me-2"></i>Carpet Area :</span> 520 Sq.Ft </td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-semibold"><i className="bi bi-check-circle text-primary me-2"></i>Facing :</span> East </td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-semibold"><i className="bi bi-check-circle text-primary me-2"></i>Parking :</span> Bike </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Card>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Amenities
                                </Card.Title>
                            </Card.Header>
                            <div className="card-body">
                                <div className="row justify-content-center">
                                    <div className="col-xxl-6 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                        <div className="product-spec mb-2">
                                            <p className="mb-0">
                                                <img src="../../assets/images/realestate/icons/7.png" alt="" />  
                                            </p>
                                            <p className="fs-14 fw-semibold mb-0">24Hr Backup</p>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 mt-sm-0 mt-3">
                                        <div className="product-spec mb-2">
                                            <p className="mb-0">                                            
                                                <img src="../../assets/images/realestate/icons/8.png" alt="" />  
                                            </p>
                                            <p className="fs-14 fw-semibold mb-0">
                                                Rain Water Harvesting
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 mt-sm-0 mt-3">
                                        <div className="product-spec mb-2">
                                            <p className="mb-0">                                            
                                                <img src="../../assets/images/realestate/icons/1.png" alt="" />  
                                            </p>
                                            <p className="fs-14 fw-semibold mb-0">
                                                Community Hall
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 mt-sm-0 mt-3">
                                        <div className="product-spec mb-2">
                                            <p className="mb-0">                                            
                                                <img src="../../assets/images/realestate/icons/9.png" alt="" />  
                                            </p>
                                            <p className="fs-14 fw-semibold mb-0">
                                                Play Area
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 mt-sm-0 mt-3">
                                        <div className="product-spec mb-2">
                                            <p className="mb-0">                                            
                                                <img src="../../assets/images/realestate/icons/10.png" alt="" />  
                                            </p>
                                            <p className="fs-14 fw-semibold mb-0">
                                                Swimming Pool
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 mt-sm-0 mt-3">
                                        <div className="product-spec mb-2">
                                            <p className="mb-0">                                            
                                                <img src="../../assets/images/realestate/icons/11.png" alt="" />  
                                            </p>
                                            <p className="fs-14 fw-semibold mb-0">
                                                Gymnasium
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Floor Plan
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="p-0">
                            <Tab.Container defaultActiveKey="first">
                                <Nav className="nav-tabs tab-style-8 scaleX custom-nav-tabs border-bottom" id="myTab" role="tablist">
                                    <Nav.Item role="presentation">
                                        <Nav.Link eventKey="first" href="#sqft1-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="true" role="tab">2BHK Apartment</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item role="presentation">
                                        <Nav.Link eventKey="second" href="#sqft2-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">3BHK Apartment</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item role="presentation">
                                        <Nav.Link eventKey="third" href="#sqft3-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">4BHK Apartment</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item role="presentation">
                                        <Nav.Link eventKey="fourth" href="#sqft4-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">5BHK Apartment</Nav.Link>
                                    </Nav.Item>
                                </Nav> 
                                <Row className="p-2">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first" className="border-0 show" id="sqft1-tab" role="tabpanel"> 
                                            <div className="d-flex mb-4 flex-wrap">
                                                <div className="flex-grow-1">
                                                    <h6 className="fw-semibold mb-0">2BHK</h6>
                                                    <p>Builtup Area : <span className="fw-semibold">1367.00 sq.ft at ₹7.7K per sq.ft</span></p>
                                                </div>
                                                <h5 className="fw-semibold mb-0">$5,643 Cr</h5>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
                                                <img src="../../assets/images/realestate/1.png" className="img-fluid invert-1" alt="" />  
                                                <div>
                                                    <h6>Floor Plan Unavailable</h6>
                                                    <Link scroll={false} href="#!" className="btn btn-danger">Request a demo</Link>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second" className="border-0" id="sqft2-tab" role="tabpanel">
                                            <div className="d-flex mb-4 flex-wrap">
                                                <div className="flex-grow-1">
                                                    <h6 className="fw-semibold mb-0">3BHK</h6>
                                                    <p>Builtup Area : <span className="fw-semibold">1921.00 sq.ft at ₹7.7K per sq.ft</span></p>
                                                </div>
                                                <h5 className="fw-semibold mb-0">$7,643 Cr</h5>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
                                                <img src="../../assets/images/realestate/1.png" className="img-fluid" alt="" />  
                                                <div>
                                                    <h6>Floor Plan Unavailable</h6>
                                                    <Link scroll={false} href="#!" className="btn btn-danger">Request a demo</Link>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third" className="border-0" id="sqft3-tab" role="tabpanel">
                                            <div className="d-flex mb-4 flex-wrap">
                                                <div className="flex-grow-1">
                                                    <h6 className="fw-semibold mb-0">4BHK</h6>
                                                    <p>Builtup Area : <span className="fw-semibold">2234.00 sq.ft at ₹8.7K per sq.ft</span></p>
                                                </div>
                                                <h5 className="fw-semibold mb-0">$8,643 Cr</h5>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
                                                <img src="../../assets/images/realestate/1.png" className="img-fluid" alt="" />  
                                                <div>
                                                    <h6>Floor Plan Unavailable</h6>
                                                    <Link scroll={false} href="#!" className="btn btn-danger">Request a demo</Link>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourth" className="border-0" id="sqft4-tab" role="tabpanel">
                                            <div className="d-flex mb-4 flex-wrap">
                                                <div className="flex-grow-1">
                                                    <h6 className="fw-semibold mb-0">5BHK</h6>
                                                    <p>Builtup Area : <span className="fw-semibold">2876.00 sq.ft at ₹9.7K per sq.ft</span></p>
                                                </div>
                                                <h5 className="fw-semibold mb-0">$9,643 Cr</h5>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
                                                <img src="../../assets/images/realestate/1.png" className="img-fluid" alt="" />  
                                                <div>
                                                    <h6>Floor Plan Unavailable</h6>
                                                    <Link scroll={false} href="#!" className="btn btn-danger">Request a demo</Link>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Row>
                            </Tab.Container>
                            </Card.Body>
                        </Card>

                        <div className="card custom-card bg-primary-transparent border-0 shadow-none">
                            <div className="card-body">
                                <div className="d-flex justify-content-between gap-3 align-items-center flex-wrap">
                                    <div>
                                        <h5 className="fw-semibold mb-0">&#128400; Was this Property helpful to someone?</h5>
                                    </div>
                                    <div>
                                        <Link scroll={false} href="#!" className="btn btn-success" role="button">
                                            <i className="ri-share-line me-2"></i>Share Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="row g-0">
                            <h4 className="fw-semibold mb-0">Related Properties</h4>
                            <p className="">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            <Swiper  autoplay={{ delay: 2500, disableOnInteraction: false, }} navigation={true} modules={[Navigation, Autoplay]} className="swiper-related-jobs">
                                    <SwiperSlide>
                                        <Row>
                                            <Col lg={4}>
                                                <div className="card custom-card overflow-hidden card-style-2">
                                                    <span className="badge bg-danger tag-badge">For Sale</span>
                                                    <Link scroll={false} href="/realestate/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/realestate/properties/popular/1.png" className="w-auto" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <div className="card-body p-3 position-relative">
                                                        <div className="min-w-fit-content float-end">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                            <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                        </OverlayTrigger>
                                                        </div>
                                                        <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Joan Hunter</Link></p>
                                                        <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/realestate/details/">House with nature</Link></h5>
                                                        <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                            <div className="fs-11 text-muted">
                                                                <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                                <span>,</span>
                                                                <span className="">16 Nov 2024</span>
                                                            </div>
                                                            <span className="text-danger">( 2BHK )</span>
                                                        </div>
                                                        <div className="popular-tags">
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">7 Beds</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">2 Baths</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">6,987sqft</Link>
                                                        </div>
                                                        <div className="d-flex align-items-center mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$1290</h4>
                                                            <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="card custom-card overflow-hidden card-style-2">
                                                    <span className="badge bg-warning tag-badge">For Rent</span>
                                                    <span className="badge bg-danger top-right-badge">20% Off</span>
                                                    <Link scroll={false} href="/realestate/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/realestate/properties/popular/2.png" className="w-auto" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <div className="card-body p-3 position-relative">
                                                        <div className="min-w-fit-content float-end">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                            <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                        </OverlayTrigger>
                                                            
                                                        </div>
                                                        <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Susana Sane</Link></p>
                                                        <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/realestate/details/">Trauel Apartment</Link></h5>
                                                        <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                            <div className="fs-11 text-muted">
                                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Banglore</span>
                                                                <span>,</span>
                                                                <span className="">20 Dec 2024</span>
                                                            </div>
                                                            <span className="text-danger">( 3BHK )</span>
                                                        </div>
                                                        <div className="popular-tags">
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">10 Beds</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">14 Baths</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">9,987sqft</Link>
                                                        </div>
                                                        <div className="d-flex align-items-center mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$1345</h4>
                                                            <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="card custom-card overflow-hidden card-style-2">
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
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                            <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                        </OverlayTrigger>
                                                            
                                                        </div>
                                                        <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Julia Camo</Link></p>
                                                        <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/realestate/details/">Duplex House</Link></h5>
                                                        <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                            <div className="fs-11 text-muted">
                                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Hyderabad</span>
                                                                <span>,</span>
                                                                <span className="">05 Jan 2024</span>
                                                            </div>
                                                            <span className="text-danger">( 5BHK )</span>
                                                        </div>
                                                        <div className="popular-tags">
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">18 Beds</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">12 Baths</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">6,987sqft</Link>
                                                        </div>
                                                        <div className="d-flex align-items-center mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$3456</h4>
                                                            <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Row>
                                            <Col lg={4}>
                                                <div className="card custom-card overflow-hidden card-style-2">
                                                    <span className="badge bg-danger tag-badge">40% Off</span>
                                                    <Link scroll={false} href="/realestate/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/realestate/properties/popular/4.png" className="w-auto" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <div className="card-body p-3 position-relative">
                                                        <div className="min-w-fit-content float-end">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                            <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                        </OverlayTrigger>
                                                        
                                                        </div>
                                                        <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Jack Miller</Link></p>
                                                        <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/realestate/details/">Villa Duplex House</Link></h5>
                                                        <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                            <div className="fs-11 text-muted">
                                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Chennai</span>
                                                                <span>,</span>
                                                                <span className="">24 Nov 2024</span>
                                                            </div>
                                                            <span className="text-danger">( 4BHK )</span>
                                                        </div>
                                                        <div className="popular-tags">
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">7 Beds</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">2 Baths</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">6,987sqft</Link>
                                                        </div>
                                                        <div className="d-flex align-items-center mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$2345</h4>
                                                            <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="card custom-card overflow-hidden card-style-2">
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
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                            <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                        </OverlayTrigger>
                                                        
                                                        </div>
                                                        <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Amanda Nanes</Link></p>
                                                        <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/realestate/details/">Riddi Houses</Link></h5>
                                                        <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                            <div className="fs-11 text-muted">
                                                                <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                                <span>,</span>
                                                                <span className="">25 Feb 2024</span>
                                                            </div>
                                                            <span className="text-danger">( 5BHK )</span>
                                                        </div>
                                                        <div className="popular-tags">
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">5 Beds</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">3 Baths</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">4,987sqft</Link>
                                                        </div>
                                                        <div className="d-flex align-items-center mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$7653</h4>
                                                            <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="card custom-card overflow-hidden card-style-2">
                                                    <span className="badge bg-danger tag-badge">20% Off</span>
                                                    <Link scroll={false} href="/realestate/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/realestate/properties/popular/6.png" className="w-auto" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <div className="card-body p-3 position-relative">
                                                        <div className="min-w-fit-content float-end">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                            <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                        </OverlayTrigger>
                                                        
                                                        </div>
                                                        <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Joan Hunter</Link></p>
                                                        <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/realestate/details/">House with nature</Link></h5>
                                                        <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                            <div className="fs-11 text-muted">
                                                                <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                                <span>,</span>
                                                                <span className="">16 Nov 2024</span>
                                                            </div>
                                                            <span className="text-danger">( 2BHK )</span>
                                                        </div>
                                                        <div className="popular-tags">
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">7 Beds</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">2 Baths</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">6,987sqft</Link>
                                                        </div>
                                                        <div className="d-flex align-items-center mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$1290</h4>
                                                            <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Row>
                                            <Col lg={4}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <span className="badge bg-warning tag-badge">For Rent</span>
                                                    <Link scroll={false} href="/realestate/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/realestate/properties/popular/7.png" className="w-auto" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <div className="card-body p-3 position-relative">
                                                        <div className="min-w-fit-content float-end">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                            <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                        </OverlayTrigger>
                                                        </div>
                                                        <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Hunter Joan</Link></p>
                                                        <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/realestate/details/">Johse Houses</Link></h5>
                                                        <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                            <div className="fs-11 text-muted">
                                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Chennai</span>
                                                                <span>,</span>
                                                                <span className="">27 Nov 2024</span>
                                                            </div>
                                                            <span className="text-danger">( 2BHK )</span>
                                                        </div>
                                                        <div className="popular-tags">
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">8 Beds</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">4 Baths</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">8,987sqft</Link>
                                                        </div>
                                                        <div className="d-flex align-items-center mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$8765</h4>
                                                            <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                        </div>
                                                    </div>
                                                </Card>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="card custom-card overflow-hidden card-style-2">
                                                    <span className="badge bg-danger tag-badge">For Sale</span>
                                                    <Link scroll={false} href="/realestate/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/realestate/properties/popular/8.png" className="w-auto" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <div className="card-body p-3 position-relative">
                                                        <div className="min-w-fit-content float-end">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                            <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                        </OverlayTrigger>
                                                        </div>
                                                        <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Charles Achilles</Link></p>
                                                        <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/realestate/details/">Achlles Buildings</Link></h5>
                                                        <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                            <div className="fs-11 text-muted">
                                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Kerala</span>
                                                                <span>,</span>
                                                                <span className="">18 Mar 2024</span>
                                                            </div>
                                                            <span className="text-danger">( 3BHK )</span>
                                                        </div>
                                                        <div className="popular-tags">
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">4 Beds</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">2 Baths</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">1,987sqft</Link>
                                                        </div>
                                                        <div className="d-flex align-items-center mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$9853</h4>
                                                            <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="card custom-card overflow-hidden card-style-2">
                                                    <span className="badge bg-warning tag-badge">For Rent</span>
                                                    <span className="badge bg-danger top-right-badge">20% Off</span>
                                                    <Link scroll={false} href="/realestate/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/realestate/properties/popular/2.png" className="w-auto" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <div className="card-body p-3 position-relative">
                                                        <div className="min-w-fit-content float-end">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                            <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                        </OverlayTrigger>
                                                        </div>
                                                        <p className="mb-2">By <Link scroll={false} href="#!" className="d-inline-block text-primary fs-13 fw-semibold">Susana Sane</Link></p>
                                                        <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/realestate/details/">Trauel Apartment</Link></h5>
                                                        <div className="d-flex align-items-baseline fs-11 mb-3 flex-wrap gap-2">
                                                            <div className="fs-11 text-muted">
                                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Banglore</span>
                                                                <span>,</span>
                                                                <span className="">20 Dec 2024</span>
                                                            </div>
                                                            <span className="text-danger">( 3BHK )</span>
                                                        </div>
                                                        <div className="popular-tags">
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">10 Beds</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">14 Baths</Link>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-gray-300 text-default me-1">9,987sqft</Link>
                                                        </div>
                                                        <div className="d-flex align-items-center mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$1345</h4>
                                                            <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </SwiperSlide>
                            </Swiper>
                        </div>           
                    </Col>
                    <Col lg={4}>
                        <Card className="custom-card">
                            <Card.Body className="p-4">
                                <div>
                                    <h5 className="fw-semibold mb-2">Affordable 2 BHK Flats Available in Gated Community</h5>
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
                                            <p className="mb-1 lh-1 fs-11 text-success fw-semibold">Special Offer</p>
                                            <div className="mb-1 d-flex align-items-center"><h5 className="fs-4 mb-0">$1,299.00</h5><span className="ms-3 badge bg-danger-transparent">50% Off</span></div>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <p className="fs-15 fw-semibold mb-1">Description :</p>
                                        <p className="text-muted mb-0">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusamus, quaerat nam quo optio reiciendis harum reprehenderit omni.
                                        </p>
                                    </div> 
                                    <div className="d-flex align-items-stretch gap-2 mb-0">
                                        <Link scroll={false} href="#!" className="btn btn-lg btn-primary"><i className="ti ti-phone"></i> Contact Owner</Link>
                                        <Link scroll={false} href="#!" className="btn btn-lg btn-outline-light" data-bs-toggle="tooltip" aria-label="Share"><i className="ti ti-share"></i></Link>
                                    </div>
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
                                        <h5 className="fw-semibold mb-1">Jack Miller 
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Verified Agent</Tooltip>}>
                                        <i className="bi bi-check-circle-fill text-success fs-14 ms-1"></i>
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
                                    Similar Properties 
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <ListGroup className="similarads-list">
                                    <ListGroup.Item>
                                        <div className="row g-3 align-items-start">
                                            <div className="col-3">
                                                <Link scroll={false} href="#!">
                                                    <div className="similarads-img">
                                                        <img src="../../assets/images/realestate/properties/6.png" className="img-fluid rounded-3 h-100" alt="..." />
                                                    </div>
                                                </Link>
                                            </div> 
                                            <div className="col-9">
                                                <div className="mb-2">
                                                    <span className="badge bg-danger-transparent badge-sm mb-1">For Sale</span>
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
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h5 className="fw-semibold mb-0">$543</h5>
                                                    <Link scroll={false} href="#!" className="text-primary fw-medium fs-14">
                                                        View Details <i className="fe fe-arrow-right ms-1"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="row g-3 align-items-start">
                                            <div className="col-3">
                                                <Link scroll={false} href="#!">
                                                    <div className="similarads-img">
                                                        <img src="../../assets/images/realestate/properties/5.png" className="img-fluid rounded-3 h-100" alt="..." />
                                                    </div>
                                                </Link>
                                            </div> 
                                            <div className="col-9">
                                                <div className="mb-2">
                                                    <span className="badge bg-info-transparent badge-sm mb-1">For Rent</span>
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
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h5 className="fw-semibold mb-0">$654</h5>
                                                    <Link scroll={false} href="#!" className="text-primary fw-medium fs-14">
                                                        View Details <i className="fe fe-arrow-right ms-1"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="row g-3 align-items-start">
                                            <div className="col-3">
                                                <Link scroll={false} href="#!">
                                                    <div className="similarads-img">
                                                        <img src="../../assets/images/realestate/properties/4.png" className="img-fluid rounded-3 h-100" alt="..." />
                                                    </div>
                                                </Link>
                                            </div> 
                                            <div className="col-9">
                                                <div className="mb-2">
                                                    <span className="badge bg-danger-transparent badge-sm mb-1">For Sale</span>
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
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h5 className="fw-semibold mb-0">$234</h5>
                                                    <Link scroll={false} href="#!" className="text-primary fw-medium fs-14">
                                                        View Details <i className="fe fe-arrow-right ms-1"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="row g-3 align-items-start">
                                            <div className="col-3">
                                                <Link scroll={false} href="#!">
                                                    <div className="similarads-img">
                                                        <img src="../../assets/images/realestate/properties/2.png" className="img-fluid rounded-3 h-100" alt="..." />
                                                    </div>
                                                </Link>
                                            </div> 
                                            <div className="col-9">
                                                <div className="mb-2">
                                                    <span className="badge bg-info-transparent badge-sm mb-1">For Rent</span>
                                                    <h6 className="fw-semibold mb-1"><Link scroll={false} href="#!">Duplex House</Link></h6>
                                                    <div className="d-flex align-items-baseline fs-11 flex-wrap gap-2">
                                                        <div className="fs-11  text-muted">
                                                            <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                            <span>,</span>
                                                            <span className="">25 Feb 2024</span>
                                                        </div>
                                                        <span className="text-danger">( 5BHK )</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h5 className="fw-semibold mb-0">$120</h5>
                                                    <Link scroll={false} href="#!" className="text-primary fw-medium fs-14">
                                                        View Details <i className="fe fe-arrow-right ms-1"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                            <Card.Footer>
                                <Link scroll={false} href="#!" className="text-primary fw-semibold fs-14 mt-2">
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
                            <img src="../../assets/images/media/apps/apple-store.png" alt="" className="invert-1" />
                            App Store
                        </Link>
                    </div>
                </div>
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

export default Details;