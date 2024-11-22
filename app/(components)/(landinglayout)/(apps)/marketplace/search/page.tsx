"use client"
import LabeledTwoThumbs1 from "@/shared/data/apps/jobs/searchjobsdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Collapse, Dropdown, Form, OverlayTrigger, Pagination, Row, Tooltip } from "react-bootstrap";
import { connect } from "react-redux";

const Search = ({ local_varaiable }:any) => {
    //collapse
    const [open, setOpen] = useState(false);

    //Dropdown
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
                    <div className="input-group group-search d-md-flex">
                        <div className="category-dropdown-wrapper">
                            <Link scroll={false} href="#!" className="btn btn-lg btn-wave btn-white shadow-none categorydropdown border-0" 
                                onClick={() => setIsOpen(!isOpen)}>
                                <i className="ri-function-line me-2 text-primary"></i>All Categories<i className="ri-arrow-down-s-line align-middle ms-1"></i>
                            </Link>
                            <ul className="categories-dropdowns">
                                <li className="category-dropdown">
                                    <ul className={`main-dropdown ${isOpen ? 'd-block' : 'd-none'}`} id="dropdown-toggle">
                                        <li onClick={() => toggleDropdown(0)}>
                                            <div className={`categories-dropdowns__item ${expandedIndex === 0 ? 'is-expanded' : ''}`}>
                                                <span className="me-2"><i className="ri-code-line"></i></span>Scripts & Code
                                                <span className="float-end"><i className="bi bi-chevron-right"></i></span>
                                            </div>
                                            <ul className="category-menu"> 
                                                <li><Link scroll={false} href="#!" className="category-item">Angular</Link></li>
                                                <li><Link scroll={false} href="#!" className="category-item">CSS</Link></li>
                                                <li><Link scroll={false} href="#!" className="category-item">Django</Link></li>
                                                <li><Link scroll={false} href="#!" className="category-item">Java</Link></li>
                                            </ul>
                                        </li>
                                        <li onClick={() => toggleDropdown(1)}>
                                            <div className={`categories-dropdowns__item ${expandedIndex === 1 ? 'is-expanded' : ''}`}>
                                                <span className="me-2"><i className="ri-shirt-line"></i></span>
                                                Themes
                                                <span className="float-end"><i className="bi bi-chevron-right"></i></span>
                                            </div>
                                            <ul className="category-menu">
                                                <li><Link scroll={false} href="#!" className="category-item">Drupal</Link></li>
                                                <li><Link scroll={false} href="#!" className="category-item">Ghost</Link></li>
                                                <li><Link scroll={false} href="#!" className="category-item">HTML</Link></li>
                                                <li><Link scroll={false} href="#!" className="category-item">Joomla</Link></li>
                                                <li><Link scroll={false} href="#!" className="category-item">Magento</Link></li>
                                            </ul>
                                        </li>
                                        <li onClick={() => toggleDropdown(2)}>
                                            <div className={`categories-dropdowns__item ${expandedIndex === 2 ? 'is-expanded' : ''}`}>
                                                <span className="me-2"><i className="ri-bear-smile-line"></i></span>
                                                Plugins
                                                <span className="float-end"><i className="bi bi-chevron-right"></i></span>
                                            </div>
                                            <ul className="category-menu">
                                                <li><Link scroll={false} href="#!" className="category-item">WooCommerce</Link></li>
                                                <li><Link scroll={false} href="#!" className="category-item">Wordpress</Link></li>
                                                <li><Link scroll={false} href="#!" className="category-item">HTML</Link></li>
                                                <li><Link scroll={false} href="#!" className="category-item">Joomla</Link></li>
                                                <li><Link scroll={false} href="#!" className="category-item">Magento</Link></li>
                                            </ul>
                                        </li>
                                        <li onClick={() => toggleDropdown(3)}>
                                            <div className={`categories-dropdowns__item ${expandedIndex === 3 ? 'is-expanded' : ''}`}>
                                                <span className="me-2"><i className="ri-community-line"></i></span>
                                                Admin Dashboards
                                                <span className="float-end"><i className="bi bi-chevron-right"></i></span>
                                            </div>
                                            <ul className="category-menu">
                                                <li><Link scroll={false} href="#!" className="category-item">HTML</Link></li>
                                                <li><Link scroll={false} href="#!" className="category-item">React</Link></li>
                                                <li><Link scroll={false} href="#!" className="category-item">PHP</Link></li>
                                                <li><Link scroll={false} href="#!" className="category-item">Angular</Link></li>
                                                <li><Link scroll={false} href="#!" className="category-item">Laravel</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="custom-form-group flex-grow-1">
                            <input type="text" className="form-control form-control-lg shadow-sm border-0 border-start border-end" placeholder="Enter Your Keyword Here.." 
                                aria-label="Recipient's username"/>
                        </div>
                        <button className="btn btn-lg btn-secondary border-0 shadow-sm search-btn" type="button"><i className="bi bi-search"></i></button>
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
            <Pageheader Heading="" Pagetitle={true} Pages={[{title:"Apps", active:true}, {title:"Marketplace", active:true}, {title:"Search", active:false},]} />
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
                                    <h5 className="fw-semibold mb-0"><span className="fw-normal">Showing</span> 3456 Items</h5>
                                </div>
                            </Col>
                            <Col lg={4} className="text-lg-end">
                                <div className="btn-group">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="" className="btn btn-outline-light border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Sort By
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <li><Dropdown.Item href="#!">Best Seller</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Most Relevant</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Price Low to High</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Price High to Low</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Best Rated</Dropdown.Item></li>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Col>
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
                            <h6 className="fw-semibold mb-0">Categories</h6>
                            <div className="px-2 py-3 pb-0">
                                <div className="form-check mb-2">
                                    <Form.Check className="" type="checkbox" value="" id="c-1" defaultChecked />
                                    <Form.Label className="form-check-label" htmlFor="c-1">
                                        HTML
                                    </Form.Label>
                                    <span className="badge bg-light border text-default fw-500 float-end">2,712</span>
                                </div>
                                <div className="form-check mb-2">
                                    <Form.Check className="" type="checkbox" value="" id="c-2" />
                                    <Form.Label className="form-check-label" htmlFor="c-2">
                                        Ecommerce
                                    </Form.Label>
                                    <span className="badge bg-light border text-default fw-500 float-end">536</span>
                                </div>
                                <div className="form-check mb-2">
                                    <Form.Check className="" type="checkbox" value="" id="c-3" defaultChecked />
                                    <Form.Label className="form-check-label" htmlFor="c-3">
                                        Scripts & Code
                                    </Form.Label>
                                    <span className="badge bg-light border text-default fw-500 float-end">18,289</span>
                                </div>
                                <div className="form-check mb-2">
                                    <Form.Check className="" type="checkbox" value="" id="c-4" defaultChecked />
                                    <Form.Label className="form-check-label" htmlFor="c-4">
                                        Wordpress Pugins
                                    </Form.Label>
                                    <span className="badge bg-light border text-default fw-500 float-end">3,453</span>
                                </div>
                                <div className="form-check mb-2">
                                    <Form.Check className="" type="checkbox" value="" id="c-5" />
                                    <Form.Label className="form-check-label" htmlFor="c-5">
                                        Wordpress Themes
                                    </Form.Label>
                                    <span className="badge bg-light border text-default fw-500 float-end">7,165</span>
                                </div>
                                <Collapse in={open}>
                                    <div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" value="" id="c-6" />
                                            <Form.Label className="form-check-label" htmlFor="c-6">
                                                React
                                            </Form.Label>
                                            <span className="badge bg-light border text-default fw-500 float-end">5,964</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" value="" id="c-7" />
                                            <Form.Label className="form-check-label" htmlFor="c-7">
                                                Vuejs
                                            </Form.Label>
                                            <span className="badge bg-light border text-default fw-500 float-end">2,123</span>
                                        </div>
                                    </div>
                                </Collapse>
                                <Link scroll={false} className="ecommerce-more-link"  onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text" aria-expanded={open}  data-bs-toggle="collapse" href="#category-more" role="button">MORE</Link>
                            </div>
                        </div>
                        <div className="p-4 border-bottom">
                            <h6 className="fw-semibold mb-0">Sales</h6>
                            <div className="px-2 py-3 pb-0">
                                <div className="form-check mb-2">
                                    <Form.Check className="" type="checkbox" value="" id="ty-1" />
                                    <Form.Label className="form-check-label" htmlFor="ty-1">
                                        No Sales
                                    </Form.Label>
                                    <span className="badge bg-light border text-default fw-500 float-end">16,563</span>
                                </div>
                                <div className="form-check mb-2">
                                    <Form.Check className="" type="checkbox" value="" id="ty-2" defaultChecked />
                                    <Form.Label className="form-check-label" htmlFor="ty-2">
                                        Low
                                    </Form.Label>
                                    <span className="badge bg-light border text-default fw-500 float-end">15,234</span>
                                </div>
                                <div className="form-check mb-2">
                                    <Form.Check className="" type="checkbox" value="" id="ty-3" />
                                    <Form.Label className="form-check-label" htmlFor="ty-3">
                                        High
                                    </Form.Label>
                                    <span className="badge bg-light border text-default fw-500 float-end">6,278</span>
                                </div>
                                <div className="form-check mb-2">
                                    <Form.Check className="" type="checkbox" value="" id="ty-4" defaultChecked />
                                    <Form.Label className="form-check-label" htmlFor="ty-4">
                                        Medium
                                    </Form.Label>
                                    <span className="badge bg-light border text-default fw-500 float-end">4,531</span>
                                </div>
                                <div className="form-check">
                                    <Form.Check className="" type="checkbox" value="" id="ty-5" />
                                    <Form.Label className="form-check-label" htmlFor="ty-5">
                                        Top Sellers
                                    </Form.Label>
                                    <span className="badge bg-light border text-default fw-500 float-end">2,405</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-bottom">
                            <h6 className="fw-semibold mb-2">Price Range</h6>
                            <div className="px-2 py-3 pb-0">
                                <div id="nonlinear"></div>
                                <LabeledTwoThumbs1  rtl={local_varaiable.dir == 'rtl'}/>
                            </div>
                        </div>
                        <div className="p-4 border-bottom">
                            <h6 className="fw-semibold mb-0">Date Added</h6>
                            <div className="px-2 py-3 pb-0">
                                <div className="form-check mb-2">
                                    <Form.Check className="" type="checkbox" value="" id="j-1" defaultChecked />
                                    <Form.Label className="form-check-label" htmlFor="j-1">
                                        Any Date
                                    </Form.Label>
                                    <span className="badge bg-light border text-default fw-500 float-end">512</span>
                                </div>
                                <div className="form-check mb-2">
                                    <Form.Check className="" type="checkbox" value="" id="j-2" defaultChecked />
                                    <Form.Label className="form-check-label" htmlFor="j-2">
                                        Last Week
                                    </Form.Label>
                                    <span className="badge bg-light border text-default fw-500 float-end">2,186</span>
                                </div>
                                <div className="form-check mb-2">
                                    <Form.Check className="" type="checkbox" value="" id="j-3" defaultChecked />
                                    <Form.Label className="form-check-label" htmlFor="j-3">
                                        Last Month
                                    </Form.Label>
                                    <span className="badge bg-light border text-default fw-500 float-end">734</span>
                                </div>
                                <div className="form-check mb-2">
                                    <Form.Check className="" type="checkbox" value="" id="j-4" />
                                    <Form.Label className="form-check-label" htmlFor="j-4">
                                        Last Year
                                    </Form.Label>
                                    <span className="badge bg-light border text-default fw-500 float-end">16</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <h6 className="fw-semibold mb-0">Price</h6> 
                            <div className="px-2 py-3 pb-0">
                                <div className="form-check mb-2">
                                    <Form.Check className="" type="checkbox" value="" id="q-1" />
                                    <Form.Label className="form-check-label" htmlFor="q-1">
                                        All
                                    </Form.Label>
                                    <span className="badge bg-light border text-default fw-500 float-end">16,563</span>
                                </div>
                                <div className="form-check mb-2">
                                    <Form.Check className="" type="checkbox" value="" id="q-2" defaultChecked />
                                    <Form.Label className="form-check-label" htmlFor="q-2">
                                        Free
                                    </Form.Label>
                                    <span className="badge bg-light border text-default fw-500 float-end">15,234</span>
                                </div>
                                <div className="form-check mb-2">
                                    <Form.Check className="" type="checkbox" value="" id="q-3" />
                                    <Form.Label className="form-check-label" htmlFor="q-3">
                                        Premium
                                    </Form.Label>
                                    <span className="badge bg-light border text-default fw-500 float-end">6,278</span>
                                </div>
                                <div className="form-check">
                                    <Form.Check className="" type="checkbox" value="" id="q-6" />
                                    <Form.Label className="form-check-label" htmlFor="q-6">
                                        Price Drop
                                    </Form.Label>
                                    <span className="badge bg-light border text-default fw-500 float-end">2,405</span>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={9}>                            
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
                                        <h6 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">PHP Script Template</Link></h6>
                                        <div className="d-flex align-items-baseline fs-11 flex-wrap gap-2">
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
                                            <span className="text-danger">( 150 Sales )</span>
                                        </div>
                                    </div>
                                    <div className="min-w-fit-content">
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                    </OverlayTrigger>
                                    </div>
                                </div>
                                <div className="d-flex align-items-baseline mt-4 flex-wrap gap-2 justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                        <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$399</span>
                                    </div>
                                    <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
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
                                        <h6 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">HTML Template</Link></h6>
                                        <div className="d-flex align-items-baseline fs-11 flex-wrap gap-2">
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
                                            <span className="text-danger">( 120 Sales )</span>
                                        </div>
                                    </div>
                                    <div className="min-w-fit-content">
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                    </OverlayTrigger>
                                        
                                    </div>
                                </div>
                                <div className="d-flex align-items-baseline mt-4 flex-wrap gap-2 justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <h5 className="fw-semibold text-primary mb-0">$170</h5>
                                        <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$379</span>
                                    </div>
                                    <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
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
                                        <h6 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">React Template</Link></h6>
                                        <div className="d-flex align-items-baseline fs-11 flex-wrap gap-2">
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
                                            <span className="text-danger">( 240 Sales )</span>
                                        </div>
                                    </div>
                                    <div className="min-w-fit-content">
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                    </OverlayTrigger>
                                    </div>
                                </div>
                                <div className="d-flex align-items-baseline mt-4 flex-wrap gap-2 justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <h5 className="fw-semibold text-primary mb-0">$240</h5>
                                        <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$499</span>
                                    </div>
                                    <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
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
                                        <h6 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Wordpress Template</Link></h6>
                                        <div className="d-flex align-items-baseline fs-11 flex-wrap gap-2">
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
                                            <span className="text-danger">( 310 Sales )</span>
                                        </div>
                                    </div>
                                    <div className="min-w-fit-content">
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                    </OverlayTrigger>
                                    </div>
                                </div>
                                <div className="d-flex align-items-baseline mt-4 flex-wrap gap-2 justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <h5 className="fw-semibold text-primary mb-0">$320</h5>
                                        <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$439</span>
                                    </div>
                                    <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
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
                                        <h6 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Laravel Template</Link></h6>
                                        <div className="d-flex align-items-baseline fs-11 flex-wrap gap-2">
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
                                            <span className="text-danger">( 120 Sales )</span>
                                        </div>
                                    </div>
                                    <div className="min-w-fit-content">
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                    </OverlayTrigger>
                                    </div>
                                </div>
                                <div className="d-flex align-items-baseline mt-4 flex-wrap gap-2 justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                        <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$399</span>
                                    </div>
                                    <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
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
                                        <h6 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Django Template</Link></h6>
                                        <div className="d-flex align-items-baseline fs-11 flex-wrap gap-2">
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
                                            <span className="text-danger">( 220 Sales )</span>
                                        </div>
                                    </div>
                                    <div className="min-w-fit-content">
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                    </OverlayTrigger>
                                    </div>
                                </div>
                                <div className="d-flex align-items-baseline mt-4 flex-wrap gap-2 justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <h5 className="fw-semibold text-primary mb-0">$220</h5>
                                        <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$499</span>
                                    </div>
                                    <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
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
                                        <h6 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Vuejs Template</Link></h6>
                                        <div className="d-flex align-items-baseline fs-11 flex-wrap gap-2">
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
                                            <span className="text-danger">( 320 Sales )</span>
                                        </div>
                                    </div>
                                    <div className="min-w-fit-content">
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                    </OverlayTrigger>
                                    </div>
                                </div>
                                <div className="d-flex align-items-baseline mt-4 flex-wrap gap-2 justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <h5 className="fw-semibold text-primary mb-0">$220</h5>
                                        <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$499</span>
                                    </div>
                                    <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
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
                                        <h6 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Codeigniter Template</Link></h6>
                                        <div className="d-flex align-items-baseline fs-11 flex-wrap gap-2">
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
                                            <span className="text-danger">( 120 Sales )</span>
                                        </div>
                                    </div>
                                    <div className="min-w-fit-content">
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                    </OverlayTrigger>
                                    </div>
                                </div>
                                <div className="d-flex align-items-baseline mt-4 flex-wrap gap-2 justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                        <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$399</span>
                                    </div>
                                    <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
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
                                        <h6 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">HTML Template</Link></h6>
                                        <div className="d-flex align-items-baseline fs-11 flex-wrap gap-2">
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
                                            <span className="text-danger">( 120 Sales )</span>
                                        </div>
                                    </div>
                                    <div className="min-w-fit-content">
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                        <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                    </OverlayTrigger>
                                    </div>
                                </div>
                                <div className="d-flex align-items-baseline mt-4 flex-wrap gap-2 justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                        <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$399</span>
                                    </div>
                                    <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <nav aria-label="Page navigation" className="pagination-style-1 float-end">
                    <Pagination className="pagination mb-0">
                        <Pagination.Item> Prev</Pagination.Item>
                        <Pagination.Item>1</Pagination.Item>
                        <Pagination.Item>2</Pagination.Item>
                        <Pagination.Item> <i className="bi bi-three-dots"></i></Pagination.Item>
                        <Pagination.Item className="d-none d-sm-block">16</Pagination.Item>
                        <Pagination.Item>17</Pagination.Item>
                        <Pagination.Item className="pagination-next"> next</Pagination.Item>
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

const mapStateToProps = (state: any) => ({
    local_varaiable: state
});
export default connect(mapStateToProps,)(Search);
// export default Search;