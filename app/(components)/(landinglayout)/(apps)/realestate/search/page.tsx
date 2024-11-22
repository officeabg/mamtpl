"use client"
import LabeledTwoThumbs1 from "@/shared/data/apps/jobs/searchjobsdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Dropdown, Form, OverlayTrigger, Pagination, Row, Tooltip } from "react-bootstrap";
import { connect } from "react-redux";

const Search = ({ local_varaiable }:any) => {
return ( 
    <Fragment>
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
                                        <Dropdown.Toggle variant="" href="#!" className="btn btn-lg btn-wave btn-white shadow-none categorydropdown border-0 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
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
                                        <input type="text" className="form-control form-control-lg border-0 shadow-none border-start" id="input-placeholder" placeholder="Search by Location..."/>
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
                                    <button className="btn btn-lg btn-secondary border-0 shadow-sm search-btn" type="button"><i className="bi bi-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </div>
            </div>
        </section> 
    </div>
    {/* End:: Landing Banner */}

    {/* Start:: Breadcrumb*/}
    <div className="border-bottom py-3">
        <div className="container">
        {/* Page Header */}
            <Seo title={"Search"} />
            <Pageheader Heading="" Pagetitle={true} Pages={[{title:"Apps", active:true}, {title:"Real Estate", active:true}, {title:"Search", active:false},]} />
        {/* Page Header Close */}
        </div>  
    </div>
    {/* End:: Breadcrumb*/}

    {/* Start:: Section-1 */}
    <section className="section pt-4">
        <div className="container">
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="p-3">
                            <div className="row align-items-center gy-2">
                                <Col lg={8}>
                                    <div className="d-flex">
                                        <h5 className="fw-normal mb-0">Showing <span className="fw-semibold">3,456 Properties</span> for sale in Georgia</h5>
                                    </div>
                                </Col>
                                <div className="col-lg-4 text-lg-end">
                                    <div className="btn-group">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="" className="btn btn-outline-light border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Sort By
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <li><Dropdown.Item href="#!">Popularity</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Most Relevant</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Price Low to High</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Price High to Low</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Recently Added</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={3}>
                    <Card className="custom-card products-navigation-card">
                        <Card.Body className="p-0">
                            <div className="p-4 border-bottom">
                                <h6 className="fw-semibold mb-0">Property Type</h6>
                                <div className="px-2 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" defaultValue="" id="c-1" defaultChecked />
                                        <Form.Label className="form-check-label" htmlFor="c-1">
                                            Apartments
                                        </Form.Label>
                                        <span className="badge bg-light text-default fw-500 float-end">2,712</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" defaultValue="" id="c-2" />
                                        <Form.Label className="form-check-label" htmlFor="c-2">
                                            Villas
                                        </Form.Label>
                                        <span className="badge bg-light text-default fw-500 float-end">536</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" defaultValue="" id="plots-3" defaultChecked />
                                        <Form.Label className="form-check-label" htmlFor="plots-3">
                                            Plots
                                        </Form.Label>
                                        <span className="badge bg-light text-default fw-500 float-end">18,289</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" defaultValue="" id="duplex-3" defaultChecked />
                                        <Form.Label className="form-check-label" htmlFor="duplex-3">
                                            Duplex
                                        </Form.Label>
                                        <span className="badge bg-light text-default fw-500 float-end">18,289</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-bottom">
                                <h6 className="fw-semibold mb-0">Posted By</h6>
                                <div className="px-2 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" defaultValue="" id="ty-1" />
                                        <Form.Label className="form-check-label" htmlFor="ty-1">
                                            Builder
                                        </Form.Label>
                                        <span className="badge bg-light text-default fw-500 float-end">16,563</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" defaultValue="" id="ty-2" defaultChecked />
                                        <Form.Label className="form-check-label" htmlFor="ty-2">
                                            Broker
                                        </Form.Label>
                                        <span className="badge bg-light text-default fw-500 float-end">15,234</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" defaultValue="" id="ty-3" />
                                        <Form.Label className="form-check-label" htmlFor="ty-3">
                                            Owner
                                        </Form.Label>
                                        <span className="badge bg-light text-default fw-500 float-end">6,278</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-bottom">
                                <h6 className="fw-semibold mb-2">Budget Range</h6>
                                <div className="px-2 py-3 pb-0">
                                    <div id="nonlinear">
                                    <LabeledTwoThumbs1  rtl={local_varaiable.dir == 'rtl'}/>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-bottom">
                                <h6 className="fw-semibold mb-0">Added Date</h6>
                                <div className="px-2 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" defaultValue="" id="j-1" defaultChecked />
                                        <Form.Label className="form-check-label" htmlFor="j-1">
                                            Any Date
                                        </Form.Label>
                                        <span className="badge bg-light text-default fw-500 float-end">512</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" defaultValue="" id="j-2" defaultChecked />
                                        <Form.Label className="form-check-label" htmlFor="j-2">
                                            In 24 Hours
                                        </Form.Label>
                                        <span className="badge bg-light text-default fw-500 float-end">2,186</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" defaultValue="" id="j-3" defaultChecked />
                                        <Form.Label className="form-check-label" htmlFor="j-3">
                                            In A Week
                                        </Form.Label>
                                        <span className="badge bg-light text-default fw-500 float-end">734</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" defaultValue="" id="j-4" />
                                        <Form.Label className="form-check-label" htmlFor="j-4">
                                            In A Month
                                        </Form.Label>
                                        <span className="badge bg-light text-default fw-500 float-end">16</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-bottom">
                                <h6 className="fw-semibold mb-0">Available From</h6>
                                <div className="px-2 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" defaultValue="" id="availablefrom-1" />
                                        <Form.Label className="form-check-label" htmlFor="availablefrom-1">
                                            Ready to Move
                                        </Form.Label>
                                        <span className="badge bg-light text-default fw-500 float-end">512</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" defaultValue="" id="availablefrom-2" />
                                        <Form.Label className="form-check-label" htmlFor="availablefrom-2">
                                            Within 1 Month
                                        </Form.Label>
                                        <span className="badge bg-light text-default fw-500 float-end">2,186</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" defaultValue="" id="availablefrom-3" defaultChecked />
                                        <Form.Label className="form-check-label" htmlFor="availablefrom-3">
                                            Within 3 Months
                                        </Form.Label>
                                        <span className="badge bg-light text-default fw-500 float-end">734</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" defaultValue="" id="availablefrom-4" />
                                        <Form.Label className="form-check-label" htmlFor="availablefrom-4">
                                            Within 6 Months
                                        </Form.Label>
                                        <span className="badge bg-light text-default fw-500 float-end">16</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" defaultValue="" id="availablefrom-5" />
                                        <Form.Label className="form-check-label" htmlFor="availablefrom-5">
                                            Within 1 Year
                                        </Form.Label>
                                        <span className="badge bg-light text-default fw-500 float-end">16</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-bottom">
                                <h6 className="fw-semibold mb-0">Furnishing Status</h6> 
                                <div className="px-2 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" defaultValue="" id="furnished-1" />
                                        <Form.Label className="form-check-label" htmlFor="furnished-1">
                                            Fully Furnished
                                        </Form.Label>
                                        <span className="badge bg-light text-default fw-500 float-end">16,563</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" defaultValue="" id="furnished-2" defaultChecked />
                                        <Form.Label className="form-check-label" htmlFor="furnished-2">
                                            Semi Furnished
                                        </Form.Label>
                                        <span className="badge bg-light text-default fw-500 float-end">15,234</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" defaultValue="" id="furnished-3" />
                                        <Form.Label className="form-check-label" htmlFor="furnished-3"> 
                                            Unfurnished
                                        </Form.Label>
                                        <span className="badge bg-light text-default fw-500 float-end">6,278</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <h6 className="fw-semibold mb-0">Beds</h6> 
                                <div className="px-2 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" defaultValue="" id="beds-1" />
                                        <Form.Label className="form-check-label" htmlFor="beds-1">
                                            1BHK
                                        </Form.Label>
                                        <span className="badge bg-light text-default fw-500 float-end">16,563</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" defaultValue="" id="beds-2" defaultChecked />
                                        <Form.Label className="form-check-label" htmlFor="beds-2">
                                            2BHK
                                        </Form.Label>
                                        <span className="badge bg-light text-default fw-500 float-end">15,234</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="me-2" type="checkbox" defaultValue="" id="beds-3" />
                                        <Form.Label className="form-check-label" htmlFor="beds-3">
                                            3BHK
                                        </Form.Label>
                                        <span className="badge bg-light text-default fw-500 float-end">6,278</span>
                                    </div>
                                    <div className="form-check">
                                        <Form.Check className="me-2" type="checkbox" defaultValue="" id="beds-4" />
                                        <Form.Label className="form-check-label" htmlFor="beds-4">
                                            4BHK
                                        </Form.Label>
                                        <span className="badge bg-light text-default fw-500 float-end">2,405</span>
                                    </div>
                                    <div className="form-check">
                                        <Form.Check className="me-2" type="checkbox" defaultValue="" id="beds-5" />
                                        <Form.Label className="form-check-label" htmlFor="beds-5">
                                            4BHK +
                                        </Form.Label>
                                        <span className="badge bg-light text-default fw-500 float-end">2,405</span>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={9}>                            
                    <Row>
                        <Col lg={4} md={6} sm={6}  className="col-12">
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
                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" ><i className="ri-heart-fill op-3"></i></Link>
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
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">7 Beds</Link>
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">2 Baths</Link>
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">6,987sqft</Link>
                                    </div>
                                    <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                        <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$1290</h4>
                                        <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={6}  className="col-12">
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
                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" ><i className="ri-heart-fill op-3"></i></Link>
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
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">10 Beds</Link>
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">14 Baths</Link>
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">9,987sqft</Link>
                                    </div>
                                    <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                        <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$1345</h4>
                                        <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={6}  className="col-12">
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
                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" ><i className="ri-heart-fill op-3"></i></Link>
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
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">18 Beds</Link>
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">12 Baths</Link>
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">6,987sqft</Link>
                                    </div>
                                    <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                        <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$3456</h4>
                                        <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={6}  className="col-12">
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
                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" ><i className="ri-heart-fill op-3"></i></Link>
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
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">7 Beds</Link>
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">2 Baths</Link>
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">6,987sqft</Link>
                                    </div>
                                    <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                        <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$2345</h4>
                                        <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={6}  className="col-12">
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
                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" ><i className="ri-heart-fill op-3"></i></Link>
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
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">5 Beds</Link>
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">3 Baths</Link>
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">4,987sqft</Link>
                                    </div>
                                    <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                        <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$7653</h4>
                                        <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={6}  className="col-12">
                            <Card className="custom-card overflow-hidden card-style-2">
                                <span className="badge bg-danger tag-badge">20% Off</span>
                                <Link scroll={false} href="/realestate/details/">
                                    <div className="featured-img">
                                        <img src="../../assets/images/realestate/properties/popular/6.png" className="" alt="..." />
                                    </div>
                                </Link>
                                <Card.Body className="p-3 position-relative">
                                    <div className="min-w-fit-content float-end">
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" ><i className="ri-heart-fill op-3"></i></Link>
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
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">7 Beds</Link>
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">2 Baths</Link>
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">6,987sqft</Link>
                                    </div>
                                    <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                        <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$1290</h4>
                                        <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={6}  className="col-12">
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
                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" ><i className="ri-heart-fill op-3"></i></Link>
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
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">8 Beds</Link>
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">4 Baths</Link>
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">8,987sqft</Link>
                                    </div>
                                    <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                        <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$8765</h4>
                                        <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={6}  className="col-12">
                            <Card className="custom-card overflow-hidden card-style-2">
                                <span className="badge bg-danger tag-badge">For Sale</span>
                                <Link scroll={false} href="/realestate/details/">
                                    <div className="featured-img">
                                        <img src="../../assets/images/realestate/properties/popular/8.png" className="" alt="..." />
                                    </div>
                                </Link>
                                <Card.Body className="p-3 position-relative">
                                    <div className="min-w-fit-content float-end">
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" ><i className="ri-heart-fill op-3"></i></Link>
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
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">4 Beds</Link>
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">2 Baths</Link>
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">1,987sqft</Link>
                                    </div>
                                    <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                        <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$9853</h4>
                                        <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={6}  className="col-12">
                            <Card className="custom-card overflow-hidden card-style-2">
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
                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" ><i className="ri-heart-fill op-3"></i></Link>
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
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">18 Beds</Link>
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">12 Baths</Link>
                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1">6,987sqft</Link>
                                    </div>
                                    <div className="d-flex align-items-center mt-4 flex-wrap gap-2">
                                        <h4 className="fw-semibold text-primary mb-0 flex-grow-1">$3456</h4>
                                        <Link scroll={false} href="/realestate/details/" className="btn btn-primary"><i className="ti ti-phone me-1 d-inline-block"></i>Contact</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <nav aria-label="Page navigation" className="pagination-style-1 float-end">
                        <Pagination className="pagination mb-0">
                            <Pagination.Item  disabled> Prev</Pagination.Item>
                            <Pagination.Item active>1</Pagination.Item>
                            <Pagination.Item>2</Pagination.Item>
                            <Pagination.Item><i className="bi bi-three-dots"></i></Pagination.Item>
                            <Pagination.Item className="d-none d-sm-block">16</Pagination.Item>
                            <Pagination.Item>17</Pagination.Item>
                            <Pagination.Item className="pagination-next">next</Pagination.Item>
                        </Pagination>
                    </nav>
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
const mapStateToProps = (state: any) => ({
    local_varaiable: state
});
export default connect(mapStateToProps,)(Search);
// export default Search;