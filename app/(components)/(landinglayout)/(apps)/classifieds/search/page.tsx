"use client"
import LabeledTwoThumbs1 from "@/shared/data/apps/jobs/searchjobsdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Collapse, Dropdown, Form, Modal, Pagination, Row } from "react-bootstrap";
import { connect } from "react-redux";

const Search = ({ local_varaiable }:any) => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const [expandedIndex, setExpandedIndex] = useState(-1); // Initialize with -1 for no item expanded

    const toggleDropdown = (index:any) => {
        if (expandedIndex === index) {
            setExpandedIndex(-1); // Collapse if already expanded
        } else {
            setExpandedIndex(index); // Expand the clicked item
        }
    };
return( 
    <Fragment>
        
           {/* Start:: Landing Banner */}
            <div className="landing-banner ad-search-container">
                <section className="py-5">
                    <div className="container main-banner-container">
                        <div className="row justify-content-center">
                            <Col xl={9}>
                                <div className="input-group group-search d-xl-flex">
                                    <div className="category-dropdown-wrapper">
                                        <Link scroll={false} href="#!" className="btn btn-lg btn-wave btn-white shadow-none categorydropdown border-0" 
                                            onClick={() => setIsOpen(!isOpen)}
                                        >
                                            <i className="ri-function-line me-2 text-primary"></i>All Categories<i className="ri-arrow-down-s-line align-middle ms-1"></i>
                                        </Link>
                                        <ul className="categories-dropdowns">
                                            <li className="category-dropdown">
                                                <ul className={`main-dropdown ${isOpen ? 'd-block' : 'd-none'}`} id="dropdown-toggle">
                                                    <li onClick={() => toggleDropdown(0)}>
                                                        <div className={`categories-dropdowns__item ${expandedIndex === 0 ? 'is-expanded' : ''}`}>
                                                            <span className="me-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M88,184v24a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V184Z" opacity="0.2"/><path d="M208,184v24a8,8,0,0,1-8,8H176a8,8,0,0,1-8-8V184Z" opacity="0.2"/><rect x="48" y="72" width="160" height="40" opacity="0.2"/><line x1="48" y1="72" x2="208" y2="72" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="48" y1="112" x2="208" y2="112" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M208,184H48V64A24,24,0,0,1,72,40H184a24,24,0,0,1,24,24Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M208,184v24a8,8,0,0,1-8,8H176a8,8,0,0,1-8-8V184" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M88,184v24a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V184" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="92" cy="148" r="12"/><circle cx="164" cy="148" r="12"/><line x1="240" y1="80" x2="240" y2="104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="16" y1="80" x2="16" y2="104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                            </span>Vehicles
                                                            <span className="float-end"><i className="bi bi-chevron-right"></i></span>
                                                        </div>
                                                        <ul className="category-menu"> 
                                                            <li><Link scroll={false} href="#!" className="category-item">Cars</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">Bikes</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">Motor Cycles</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">Buses</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li onClick={() => toggleDropdown(1)}>
                                                        <div className={`categories-dropdowns__item ${expandedIndex === 1 ? 'is-expanded' : ''}`}>
                                                            <span className="me-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M200,48H176v56a8,8,0,0,1-13.12,6.15L128,80,93.12,110.13A8,8,0,0,1,80,104V48H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48Z" opacity="0.2"/><polygon points="96 32 160 32 128 80 96 32" opacity="0.2"/><path d="M128,80l32-48,16,16v56a8,8,0,0,1-13.12,6.15Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M93.12,110.13A8,8,0,0,1,80,104V48L96,32l32,48Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="80" x2="128" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M176,48h24a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="96" y1="32" x2="160" y2="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                            </span>
                                                            Clothing & Jewellery
                                                            <span className="float-end"><i className="bi bi-chevron-right"></i></span>
                                                        </div>
                                                        <ul className="category-menu">
                                                            <li><Link scroll={false} href="#!" className="category-item">Accessories</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">Men Clothing</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">Women Clothing</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">Men Shoes</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">Women Shoes</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li onClick={() => toggleDropdown(2)}>
                                                        <div className={`categories-dropdowns__item ${expandedIndex === 2 ? 'is-expanded' : ''}`}>
                                                            <span className="me-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="212" cy="108" r="20" opacity="0.2"/><circle cx="44" cy="108" r="20" opacity="0.2"/><circle cx="92" cy="60" r="20" opacity="0.2"/><circle cx="164" cy="60" r="20" opacity="0.2"/><path d="M128,104A36,36,0,0,0,93.43,130a43.49,43.49,0,0,1-20.67,25.9,32,32,0,0,0,27.73,57.62,72.49,72.49,0,0,1,55,0,32,32,0,0,0,27.73-57.62A43.46,43.46,0,0,1,162.57,130,36,36,0,0,0,128,104Z" opacity="0.2"/><circle cx="212" cy="108" r="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="44" cy="108" r="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="92" cy="60" r="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="164" cy="60" r="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M128,104A36,36,0,0,0,93.43,130a43.49,43.49,0,0,1-20.67,25.9,32,32,0,0,0,27.73,57.62,72.49,72.49,0,0,1,55,0,32,32,0,0,0,27.73-57.62A43.46,43.46,0,0,1,162.57,130,36,36,0,0,0,128,104Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                            </span>
                                                            Pets
                                                            <span className="float-end"><i className="bi bi-chevron-right"></i></span>
                                                        </div>
                                                        <ul className="category-menu">
                                                            <li><Link scroll={false} href="#!" className="category-item">Birds</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">Cats</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">Fish</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">Rabbit</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">Dogs</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li onClick={() => toggleDropdown(3)}>
                                                        <div className={`categories-dropdowns__item ${expandedIndex === 3 ? 'is-expanded' : ''}`}>
                                                            <span className="me-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M136,216V32a8,8,0,0,0-12.44-6.65l-80,53.33A8,8,0,0,0,40,85.35V216Z" opacity="0.2"/><path d="M136,216V32a8,8,0,0,0-12.44-6.65l-80,53.33A8,8,0,0,0,40,85.35V216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M136,88h72a8,8,0,0,1,8,8V216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="16" y1="216" x2="240" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="104" y1="112" x2="104" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="72" y1="112" x2="72" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="72" y1="168" x2="72" y2="184" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="104" y1="168" x2="104" y2="184" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                            </span>
                                                            Real Estate
                                                            <span className="float-end"><i className="bi bi-chevron-right"></i></span>
                                                        </div>
                                                        <ul className="category-menu">
                                                            <li><Link scroll={false} href="#!" className="category-item">Land</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">Flat</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">Houses</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">Shops</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li onClick={() => toggleDropdown(4)}>
                                                        <div className={`categories-dropdowns__item ${expandedIndex === 4 ? 'is-expanded' : ''}`}>
                                                            <span className="me-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M60.06,195.91a96,96,0,0,1-.12-135.65h0a95.7,95.7,0,0,1,28,67.76,95.74,95.74,0,0,1-28,67.77Z" opacity="0.2"/><path d="M196.06,195.91a96,96,0,0,1-.12-135.65h0a96,96,0,0,1,0,135.53Z" opacity="0.2"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M60,60.24A95.7,95.7,0,0,1,88,128a95.7,95.7,0,0,1-28,67.76" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M196,60.24a96,96,0,0,0,0,135.52" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="32" y1="128" x2="224" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="32" x2="128" y2="224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                            </span>
                                                            Sports
                                                            <span className="float-end"><i className="bi bi-chevron-right"></i></span>
                                                        </div>
                                                        <ul className="category-menu">
                                                            <li><Link scroll={false} href="#!" className="category-item">Bicycle</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">Fishing</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">Golf</Link></li>
                                                            <li><Link scroll={false} href="#!" className="category-item">Gym & Fitness</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>    
                                    <div className="custom-form-group flex-grow-1">
                                        <input type="text" className="form-control form-control-lg shadow-none border-0 border-end border-start" placeholder="Enter Your Keyword Here.." 
                                            aria-label="Recipient's username"/>
                                    </div>
                                    <div className="custom-form-group flex-grow-1">
                                        <input type="text" className="form-control form-control-lg shadow-none border-0" id="input-placeholder" placeholder="Search by Location..." />
                                        <div className="custom-form-btn border-0">       
                                            <Link scroll={false} href="#!" className="gps-location"><i className="ti ti-current-location"></i></Link>                                     
                                            <Dropdown className="ad-dropdown">
                                                <Dropdown.Toggle variant=""  href="#!" className="btn text-default btn-wave no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                    5km<i className="ri-arrow-down-s-line align-middle ms-1"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu" role="menu">
                                                    <li><Dropdown.Item className="" href="#!">0km</Dropdown.Item></li>
                                                    <li><Dropdown.Item className="" href="#!">2km</Dropdown.Item></li>
                                                    <li><Dropdown.Item active className="active" href="#!">5km</Dropdown.Item></li>
                                                    <li><Dropdown.Item className="" href="#!">10km</Dropdown.Item></li>
                                                    <li><Dropdown.Item className="" href="#!">20km</Dropdown.Item></li>
                                                    <li><Dropdown.Item className="" href="#!">50km</Dropdown.Item></li>
                                                    <li><Dropdown.Item className="" href="#!">100km</Dropdown.Item></li>
                                                </Dropdown.Menu>
                                            </Dropdown>  
                                        </div>
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
            <div className="border-bottom py-3">
                <div className="container">
                {/* Page Header */}
                    <Seo title={"Search"} />
                    <Pageheader Heading="" Pagetitle={true} Pages={[{title:"Apps", active:true}, {title:"Classifieds", active:true}, {title:"Search", active:false},]} />
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
                                    <div className="row align-items-center">
                                        <div className="col-lg-8">
                                            <div className="d-flex">
                                                <h5 className="fw-semibold mb-0"><span className="fw-normal">Showing</span> 3456 Ads</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-end">
                                            <div className="btn-group">
                                                <Dropdown>
                                                    <Dropdown.Toggle  variant="" className="btn btn-outline-light border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Sort By
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <li><Dropdown.Item href="#!">Date Published</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!">Most Relevant</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!">Price Low to High</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!">Price High to Low</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!">Distance</Dropdown.Item></li>
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
                        <Col lg={3}>
                            <Card className="custom-card products-navigation-card">
                                <Card.Body className="p-0">
                                    <div className="p-4 border-bottom">
                                        <h6 className="fw-semibold mb-0">Categories</h6>
                                        <div className="px-2 py-3 pb-0">
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox"  id="c-1" defaultChecked/>
                                                <Form.Label className="" htmlFor="c-1">
                                                    Electronics
                                                </Form.Label>
                                                <span className="badge bg-light border text-default fw-500 float-end">2,712</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox"  id="c-2"/>
                                                <Form.Label className="" htmlFor="c-2">
                                                    Real Estate 
                                                </Form.Label>
                                                <span className="badge bg-light border text-default fw-500 float-end">536</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox"  id="c-3" defaultChecked/>
                                                <Form.Label className="" htmlFor="c-3">
                                                    Sports
                                                </Form.Label>
                                                <span className="badge bg-light border text-default fw-500 float-end">18,289</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox"  id="c-4" defaultChecked/>
                                                <Form.Label className="" htmlFor="c-4">
                                                    Shopping
                                                </Form.Label>
                                                <span className="badge bg-light border text-default fw-500 float-end">3,453</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox"  id="c-5"/>
                                                <Form.Label className="" htmlFor="c-5">
                                                    Jobs
                                                </Form.Label>
                                                <span className="badge bg-light border text-default fw-500 float-end">7,165</span>
                                            </div>
                                            <Collapse in={open1}>
                                                <div>
                                                    <div className="form-check mb-2">
                                                        <Form.Check className="" type="checkbox"  id="c-6"/>
                                                        <Form.Label className="" htmlFor="c-6">
                                                            Vehicles
                                                        </Form.Label>
                                                        <span className="badge bg-light border text-default fw-500 float-end">5,964</span>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                        <Form.Check className="" type="checkbox"  id="c-7"/>
                                                        <Form.Label className="" htmlFor="c-7">
                                                            Pets
                                                        </Form.Label>
                                                        <span className="badge bg-light border text-default fw-500 float-end">2,123</span>
                                                    </div>
                                                </div>
                                            </Collapse>
                                            <Link scroll={false} className="ecommerce-more-link" onClick={() => setOpen1(!open1)}
                                            aria-controls="example-collapse-text" aria-expanded={open1} data-bs-toggle="collapse" href="#category-more" role="button">MORE</Link>
                                        </div>
                                    </div>
                                    <div className="p-4 border-bottom">
                                        <h6 className="fw-semibold mb-0">Type</h6>
                                        <div className="px-2 py-3 pb-0">
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox"  id="ty-1" />
                                                <Form.Label className="" htmlFor="ty-1">
                                                    Sell
                                                </Form.Label>
                                                <span className="badge bg-light border text-default fw-500 float-end">16,563</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox"  id="ty-2" defaultChecked />
                                                <Form.Label className="" htmlFor="ty-2">
                                                    Buy
                                                </Form.Label>
                                                <span className="badge bg-light border text-default fw-500 float-end">15,234</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox"  id="ty-3" />
                                                <Form.Label className="" htmlFor="ty-3">
                                                    Exchange
                                                </Form.Label>
                                                <span className="badge bg-light border text-default fw-500 float-end">6,278</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox"  id="ty-4" defaultChecked />
                                                <Form.Label className="" htmlFor="ty-4">
                                                    Job
                                                </Form.Label>
                                                <span className="badge bg-light border text-default fw-500 float-end">4,531</span>
                                            </div>
                                            <div className="form-check">
                                                <Form.Check className="" type="checkbox"  id="ty-5" />
                                                <Form.Label className="" htmlFor="ty-5">
                                                    To-Let
                                                </Form.Label>
                                                <span className="badge bg-light border text-default fw-500 float-end">2,405</span>
                                            </div>
                                            <div className="form-check">
                                                <Form.Check className="" type="checkbox"  id="ty-6" />
                                                <Form.Label className="" htmlFor="ty-6">
                                                    Rent
                                                </Form.Label>
                                                <span className="badge bg-light border text-default fw-500 float-end">2,405</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 border-bottom">
                                        <h6 className="fw-semibold mb-0">Location</h6>
                                        <div className="px-2 py-3 pb-0">
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox"  id="j-1" defaultChecked />
                                                <Form.Label className="" htmlFor="j-1">
                                                   India
                                                </Form.Label>
                                                <span className="badge bg-light border text-default fw-500 float-end">512</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox"  id="j-2" defaultChecked />
                                                <Form.Label className="" htmlFor="j-2">
                                                    Germany
                                                </Form.Label>
                                                <span className="badge bg-light border text-default fw-500 float-end">2,186</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox"  id="j-3" defaultChecked />
                                                <Form.Label className="" htmlFor="j-3">
                                                   London
                                                </Form.Label>
                                                <span className="badge bg-light border text-default fw-500 float-end">734</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox"  id="j-4" />
                                                <Form.Label className="" htmlFor="j-4">
                                                    USA
                                                </Form.Label>
                                                <span className="badge bg-light border text-default fw-500 float-end">16</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox"  id="j-5" />
                                                <Form.Label className="" htmlFor="j-5">
                                                    Australia
                                                </Form.Label>
                                                <span className="badge bg-light border text-default fw-500 float-end">1,432</span>
                                            </div>
                                            <Collapse in={open}>
                                                <div>
                                                    <div className="form-check mb-2">
                                                        <Form.Check className="" type="checkbox"  id="s-5" />
                                                        <Form.Label className="" htmlFor="s-5">
                                                            Spain
                                                        </Form.Label>
                                                        <span className="badge bg-light border text-default fw-500 float-end">5,946</span>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                        <Form.Check className="" type="checkbox"  id="s-6" />
                                                        <Form.Label className="" htmlFor="s-6">
                                                            Gujarat
                                                        </Form.Label>
                                                        <span className="badge bg-light border text-default fw-500 float-end">3,267</span>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                        <Form.Check className="" type="checkbox"  id="s-7" />
                                                        <Form.Label className="" htmlFor="s-7">
                                                            Chicago
                                                        </Form.Label>
                                                        <span className="badge bg-light border text-default fw-500 float-end">578</span>
                                                    </div>
                                                </div>
                                            </Collapse>
                                            <Link scroll={false} className="ecommerce-more-link" onClick={() => setOpen(!open)}
                                            aria-controls="example-collapse-text" aria-expanded={open} data-bs-toggle="collapse" href="#sizes-more" role="button">MORE</Link>
                                        </div>
                                    </div>
                                    <div className="p-4 border-bottom">
                                        <h6 className="fw-semibold mb-2">Price Range</h6>
                                        <div className="px-2 py-3 pb-0">
                                            <div id="nonlinear">
                                            <LabeledTwoThumbs1  rtl={local_varaiable.dir == 'rtl'} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h6 className="fw-semibold mb-0">Featured Ads</h6>
                                        <div className="px-2 py-3 pb-0">
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox"  id="q-1" />
                                                <Form.Label className="" htmlFor="q-1">
                                                    Premium
                                                </Form.Label>
                                                <span className="badge bg-light border text-default fw-500 float-end">16,563</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox"  id="q-2" defaultChecked />
                                                <Form.Label className="" htmlFor="q-2">
                                                    Featured
                                                </Form.Label>
                                                <span className="badge bg-light border text-default fw-500 float-end">15,234</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox"  id="q-3" />
                                                <Form.Label className="" htmlFor="q-3">
                                                    Top Ads
                                                </Form.Label>
                                                <span className="badge bg-light border text-default fw-500 float-end">6,278</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox"  id="q-4" defaultChecked />
                                                <Form.Label className="" htmlFor="q-4">
                                                    Highlighted
                                                </Form.Label>
                                                <span className="badge bg-light border text-default fw-500 float-end">4,531</span>
                                            </div>
                                            <div className="form-check">
                                                <Form.Check className="" type="checkbox"  id="q-5" />
                                                <Form.Label className="" htmlFor="q-5">
                                                    Urgent
                                                </Form.Label>
                                                <span className="badge bg-light border text-default fw-500 float-end">2,405</span>
                                            </div>
                                            <div className="form-check">
                                                <Form.Check className="" type="checkbox"  id="q-6" />
                                                <Form.Label className="" htmlFor="q-6">
                                                    Price Drop
                                                </Form.Label>
                                                <span className="badge bg-light border text-default fw-500 float-end">2,405</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="">
                                        <h5 className="fw-semibold mb-3">Get Latest Ad Alerts</h5>
                                        <p>Latest Ads updates on the go to recieved direct to your email. Stay updated with your latest new Ads.</p>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Email Here" aria-label="blog-email" aria-describedby="blog-subscribe"/>
                                            <Button variant="" className="btn btn-primary" type="button" id="blog-subscribe">Subscribe</Button>
                                        </div>
                                        <Form.Label className="">
                                            By Subscribing you accept to <Link scroll={false} href="#!" className="text-success"><u>privacy policy</u></Link>
                                        </Form.Label>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={9}>                            
                            <Row>
                                <Col lg={4} md={4} sm={6} className="col-12">
                                    <Card className="custom-card overflow-hidden">
                                        <span className="badge bg-warning tag-badge">Featured</span>
                                        <Link scroll={false} href="#!">
                                            <div className="featured-img">
                                                <img src="../../assets/images/classifieds/featured-adds/1.jpg" className="" alt="..." />
                                            </div>
                                        </Link>
                                        <Card.Body className="p-3 position-relative">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-fill">
                                                    <h5 className="mb-0 fw-semibold"><span>$2,226.00</span></h5>
                                                    <p className="mb-1 fw-semibold">4-Bds - 4 Ba - 600ff3</p>
                                                </div>
                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                            </div>
                                            <h6 className="text-muted">4 Beds Duplex House</h6>
                                            <div className="fs-11 text-muted">
                                                <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                <span>,</span>
                                                <span className="ms-1 d-inline-flex">16 Nov 2024</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4} md={4} sm={6} className="col-12">
                                    <Card className="custom-card overflow-hidden sold-out">
                                        <span className="badge bg-danger tag-badge">Sold Out</span>
                                        <Link scroll={false} href="#!">
                                            <div className="featured-img">
                                                <img src="../../assets/images/classifieds/featured-adds/2.jpg" className="" alt="..." />
                                            </div>
                                        </Link>
                                        <Card.Body className="p-3 position-relative">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-fill">
                                                    <h5 className="mb-0 fw-semibold"><span>$5,321.00</span></h5>
                                                    <p className="mb-1 fw-semibold">2024 - 120,000km</p>
                                                </div>
                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                            </div>
                                            <h6 className="text-muted">Cadbo Car kb43</h6>
                                            <div className="fs-11 text-muted">
                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Banglore</span>
                                                <span>,</span>
                                                <span className="ms-1 d-inline-flex">16 Nov 2024</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4} md={4} sm={6} className="col-12">
                                    <Card className="custom-card overflow-hidden">
                                        <span className="badge bg-primary tag-badge">New</span>
                                        <Link scroll={false} href="#!">
                                            <div className="featured-img">
                                                <img src="../../assets/images/classifieds/featured-adds/3.jpg" className="" alt="..." />
                                            </div>
                                        </Link>
                                        <Card.Body className="card-body p-3 position-relative">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-fill">
                                                    <h5 className="mb-0 fw-semibold"><span>$56,764.00</span></h5>
                                                    <p className="mb-1 fw-semibold">2022 Oct 04</p>
                                                </div>
                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                            </div>
                                            <h6 className="text-muted">Smart Phone H6</h6>
                                            <div className="fs-11 text-muted">
                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Chennai</span>
                                                <span>,</span>
                                                <span className="ms-1 d-inline-flex">16 Nov 2024</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4} md={4} sm={6} className="col-12">
                                    <Card className="custom-card overflow-hidden">
                                        <span className="badge bg-danger tag-badge">Urgent</span>
                                        <Link scroll={false} href="#!">
                                            <div className="featured-img">
                                                <img src="../../assets/images/classifieds/featured-adds/4.jpg" className="" alt="..." />
                                            </div>
                                        </Link>
                                        <Card.Body className="p-3 position-relative">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-fill">
                                                    <h5 className="mb-0 fw-semibold"><span>$5,763.00</span></h5>
                                                    <p className="mb-1 fw-semibold">2024 - 120,000km</p>
                                                </div>
                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                            </div>
                                            <h6 className="text-muted">Gittbos Bike Mf120</h6>
                                            <div className="fs-11 text-muted">
                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Pune</span>
                                                <span>,</span>
                                                <span className="ms-1 d-inline-flex">16 Nov 2024</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4} md={4} sm={6} className="col-12">
                                    <Card className="custom-card overflow-hidden">
                                        <Link scroll={false} href="#!">
                                            <div className="featured-img">
                                                <img src="../../assets/images/classifieds/featured-adds/1.jpg" className="" alt="..." />
                                            </div>
                                        </Link>
                                        <Card.Body className="card-body p-3 position-relative">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-fill">
                                                    <h5 className="mb-0 fw-semibold"><span>$2,226.00</span></h5>
                                                    <p className="mb-1 fw-semibold">4-Bds - 4 Ba - 600ff3</p>
                                                </div>
                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                            </div>
                                            <h6 className="text-muted">4 Beds Duplex House</h6>
                                            <div className="fs-11 text-muted">
                                                <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                <span>,</span>
                                                <span className="ms-1 d-inline-flex">16 Nov 2024</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4} md={4} sm={6} className="col-12">
                                    <Card className="custom-card overflow-hidden">
                                        <Link scroll={false} href="#!">
                                            <div className="featured-img">
                                                <img src="../../assets/images/classifieds/featured-adds/2.jpg" className="" alt="..." />
                                            </div>
                                        </Link>
                                        <Card.Body className="p-3 position-relative">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-fill">
                                                    <h5 className="mb-0 fw-semibold"><span>$5,321.00</span></h5>
                                                    <p className="mb-1 fw-semibold">2024 - 120,000km</p>
                                                </div>
                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                            </div>
                                            <h6 className="text-muted">Cadbo Car kb43</h6>
                                            <div className="fs-11 text-muted">
                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Banglore</span>
                                                <span>,</span>
                                                <span className="ms-1 d-inline-flex">16 Nov 2024</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4} md={4} sm={6} className="col-12">
                                    <Card className="custom-card overflow-hidden">
                                        <Link scroll={false} href="#!">
                                            <div className="featured-img">
                                                <img src="../../assets/images/classifieds/featured-adds/6.jpg" className="" alt="..." />
                                            </div>
                                        </Link>
                                        <Card.Body className="p-3 position-relative">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-fill">
                                                    <h5 className="mb-0 fw-semibold"><span>$56,764.00</span></h5>
                                                    <p className="mb-1 fw-semibold">2022 Oct 04</p>
                                                </div>
                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                            </div>
                                            <h6 className="text-muted">Laptop F6</h6>
                                            <div className="fs-11 text-muted">
                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Chennai</span>
                                                <span>,</span>
                                                <span className="ms-1 d-inline-flex">16 Nov 2024</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4} md={4} sm={6} className="col-12">
                                    <Card className="custom-card overflow-hidden">
                                        <Link scroll={false} href="#!">
                                            <div className="featured-img">
                                                <img src="../../assets/images/classifieds/featured-adds/4.jpg" className="" alt="..." />
                                            </div>
                                        </Link>
                                        <Card.Body className="p-3 position-relative">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-fill">
                                                    <h5 className="mb-0 fw-semibold"><span>$5,763.00</span></h5>
                                                    <p className="mb-1 fw-semibold">2024 - 120,000km</p>
                                                </div>
                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                            </div>
                                            <h6 className="text-muted">Gittbos Bike Mf120</h6>
                                            <div className="fs-11 text-muted">
                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Pune</span>
                                                <span>,</span>
                                                <span className="ms-1 d-inline-flex">16 Nov 2024</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4} md={4} sm={6} className="col-12">
                                    <Card className="custom-card overflow-hidden">
                                        <span className="badge bg-warning tag-badge">Featured</span>
                                        <Link scroll={false} href="#!">
                                            <div className="featured-img">
                                                <img src="../../assets/images/classifieds/featured-adds/5.jpg" className="" alt="..." />
                                            </div>
                                        </Link>
                                        <Card.Body className="p-3 position-relative">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-fill">
                                                    <h5 className="mb-0 fw-semibold"><span>$5,763.00</span></h5>
                                                    <p className="mb-1 fw-semibold">2024 - 4 months</p>
                                                </div>
                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                            </div>
                                            <h6 className="text-muted">Adorable Puppy</h6>
                                            <div className="fs-11 text-muted">
                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Pune</span>
                                                <span>,</span>
                                                <span className="ms-1 d-inline-flex">16 Nov 2024</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4} md={4} sm={6} className="col-12">
                                    <Card className="custom-card overflow-hidden">
                                        <span className="badge bg-warning tag-badge">Featured</span>
                                        <Link scroll={false} href="#!">
                                            <div className="featured-img">
                                                <img src="../../assets/images/classifieds/featured-adds/1.jpg" className="" alt="..." />
                                            </div>
                                        </Link>
                                        <Card.Body className="p-3 position-relative">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-fill">
                                                    <h5 className="mb-0 fw-semibold"><span>$2,226.00</span></h5>
                                                    <p className="mb-1 fw-semibold">4-Bds - 4 Ba - 600ff3</p>
                                                </div>
                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                            </div>
                                            <h6 className="text-muted">4 Beds Duplex House</h6>
                                            <div className="fs-11 text-muted">
                                                <span className=""><i className="bi bi-geo-alt me-1"></i>USA</span>
                                                <span>,</span>
                                                <span className="ms-1 d-inline-flex">16 Nov 2024</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4} md={4} sm={6} className="col-12">
                                    <Card className="custom-card overflow-hidden sold-out">
                                        <span className="badge bg-danger tag-badge">Sold Out</span>
                                        <Link scroll={false} href="#!">
                                            <div className="featured-img">
                                                <img src="../../assets/images/classifieds/featured-adds/2.jpg" className="" alt="..." />
                                            </div>
                                        </Link>
                                        <Card.Body className="p-3 position-relative">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-fill">
                                                    <h5 className="mb-0 fw-semibold"><span>$5,321.00</span></h5>
                                                    <p className="mb-1 fw-semibold">2024 - 120,000km</p>
                                                </div>
                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                            </div>
                                            <h6 className="text-muted">Cadbo Car kb43</h6>
                                            <div className="fs-11 text-muted">
                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Banglore</span>
                                                <span>,</span>
                                                <span className="ms-1 d-inline-flex">16 Nov 2024</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4} md={4} sm={6} className="col-12">
                                    <Card className="custom-card overflow-hidden">
                                        <span className="badge bg-primary tag-badge">New</span>
                                        <Link scroll={false} href="#!">
                                            <div className="featured-img">
                                                <img src="../../assets/images/classifieds/featured-adds/3.jpg" className="" alt="..." />
                                            </div>
                                        </Link>
                                        <Card.Body className="p-3 position-relative">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-fill">
                                                    <h5 className="mb-0 fw-semibold"><span>$56,764.00</span></h5>
                                                    <p className="mb-1 fw-semibold">2022 Oct 04</p>
                                                </div>
                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                            </div>
                                            <h6 className="text-muted">Smart Phone H6</h6>
                                            <div className="fs-11 text-muted">
                                                <span className=""><i className="bi bi-geo-alt me-1"></i>Chennai</span>
                                                <span>,</span>
                                                <span className="ms-1 d-inline-flex">16 Nov 2024</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <nav aria-label="Page navigation" className="pagination-style-1 float-end">
                                <Pagination className="mb-0">
                                    <Pagination.Item disabled>Prev</Pagination.Item>
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

const mapStateToProps = (state: any) => ({
    local_varaiable: state
});
export default connect(mapStateToProps,)(Search);