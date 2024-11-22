"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Packages = () => {
return ( 
    <Fragment>
           {/* Start:: Breadcrumb*/}
            <div className="border-bottom py-3">
                <div className="container">
                    {/* Page Header */}
                        <Seo title={"Packages"} />
                        <Pageheader Heading="" Pagetitle={true} Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true},{title:"Vendor", active:true}, {title:"Packages", active:false}]} />
                    {/* Page Header Close */}
                </div>
            </div>
            {/* End:: Breadcrumb*/}

            {/* Start:: Section-1 */}
            <section className="section py-4">
                <div className="container"> 
                    <Row>
                        <Col xl={12}>
                            <div className="row justify-content-center">
                                <Col xl={12}>
                                    <h4 className="fw-semibold text-center"> Choose Package </h4>
                                    <p className="text-muted text-center mb-4">Choose plan that suits best for your business needs, Our plans scales with you based on your needs</p>
                                </Col>
                            </div>
                            <Row>
                                <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                                    <Card className="custom-card overflow-hidden">
                                        <Card.Body className="p-0">
                                            <div className="p-4">
                                                <div className="d-flex gap-3 align-items-center mb-3">
                                                    <div className="main-card-icon primary">
                                                        <div className="avatar avatar-lg bg-primary-transparent border border-primary border-opacity-10">
                                                            <div className="avatar avatar-sm svg-white">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.16a8,8,0,0,1-4.16-7V80.2a8,8,0,0,1,.7-3.27Z" opacity="0.2"/><polyline points="32.7 76.92 128 129.08 223.3 76.92" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M131.84,25l88,48.18a8,8,0,0,1,4.16,7v95.64a8,8,0,0,1-4.16,7l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18A8,8,0,0,1,131.84,25Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="129.09" x2="128" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>                                                        
                                                        <div className="fs-18 fw-medium">7 Days Access</div>
                                                        <span className="badge bg-gray-300 text-default fw-500">For Indivudials</span>
                                                    </div>
                                                </div>
                                                <div className="fs-25 fw-medium mb-1">$100<sub className="text-muted fw-medium fs-11">/ 7 Days</sub></div>
                                                <div className="mb-2 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</div>
                                                <ul className="list-unstyled mb-0">
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-success"></i>
                                                        </span>
                                                        <span>
                                                            <span className="me-1 d-inline-block fw-semibold">20 Products</span>Can Publish
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-success"></i>
                                                        </span>
                                                        <span>
                                                            <span className="me-1 d-inline-block fw-semibold">1 Week</span> Product Displayed
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-success"></i>
                                                        </span>
                                                        <span>
                                                            <span className="me-1 d-inline-block fw-semibold">2</span>Featured Products
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-danger op-3"></i>
                                                        </span>
                                                        <span>
                                                            Chat Support
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-danger op-3"></i>
                                                        </span>
                                                        <span>
                                                            Email Support
                                                        </span>
                                                    </li>
                                                    <li className="d-grid">
                                                        <button className="btn btn-lg btn-primary btn-wave">Choose Plan</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                                    <Card className="custom-card overflow-hidden">
                                        <Card.Body className="p-0">
                                            <div className="p-4">
                                                <div className="d-flex gap-3 align-items-center mb-3">
                                                    <div className="main-card-icon secondary">
                                                        <div className="avatar avatar-lg bg-secondary-transparent border border-secondary border-opacity-10">
                                                            <div className="avatar avatar-sm svg-white">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.16a8,8,0,0,1-4.16-7V80.2a8,8,0,0,1,.7-3.27Z" opacity="0.2"/><polyline points="32.7 76.92 128 129.08 223.3 76.92" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M131.84,25l88,48.18a8,8,0,0,1,4.16,7v95.64a8,8,0,0,1-4.16,7l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18A8,8,0,0,1,131.84,25Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="129.09" x2="128" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>                                                        
                                                        <div className="fs-18 fw-medium"> 1 Month Access</div>
                                                        <span className="badge bg-gray-300 text-default fw-500">For Indivudials</span>
                                                    </div>
                                                </div>
                                                <div className="fs-25 fw-medium mb-1">$130<sub className="text-muted fw-medium fs-11">/ 1 Month</sub></div>
                                                <div className="mb-2 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</div>
                                                <ul className="list-unstyled mb-0">
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-success"></i>
                                                        </span>
                                                        <span>
                                                            <span className="me-1 d-inline-block fw-semibold">25 Products</span>Can Publish
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-success"></i>
                                                        </span>
                                                        <span>
                                                            <span className="me-1 d-inline-block fw-semibold">1 Month</span> Product Displayed
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-success"></i>
                                                        </span>
                                                        <span>
                                                            <span className="me-1 d-inline-block fw-semibold">4</span>Featured Products
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-danger op-3"></i>
                                                        </span>
                                                        <span>
                                                            Chat Support
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-danger op-3"></i>
                                                        </span>
                                                        <span>
                                                            Email Support
                                                        </span>
                                                    </li>
                                                    <li className="d-grid">
                                                        <button className="btn btn-lg btn-primary btn-wave">Choose Plan</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                                    <Card className="custom-card overflow-hidden border border-primary pricing-offer">
                                        <Card.Body className="p-0">
                                            <div className="p-4">
                                                <div className="ribbon ribbon-primary ribbon-top-right"><span>10% Off</span></div>
                                                <div className="d-flex gap-3 align-items-center mb-3">
                                                    <div className="main-card-icon success">
                                                        <div className="avatar avatar-lg bg-success-transparent border border-success border-opacity-10">
                                                            <div className="avatar avatar-sm svg-white">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.16a8,8,0,0,1-4.16-7V80.2a8,8,0,0,1,.7-3.27Z" opacity="0.2"/><polyline points="32.7 76.92 128 129.08 223.3 76.92" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M131.84,25l88,48.18a8,8,0,0,1,4.16,7v95.64a8,8,0,0,1-4.16,7l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18A8,8,0,0,1,131.84,25Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="129.09" x2="128" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>                                                        
                                                        <div className="fs-18 fw-medium"> 3 Months Access</div>
                                                        <span className="badge bg-gray-300 text-default fw-500">For Indivudials</span>
                                                    </div>
                                                </div>
                                                <div className="fs-25 fw-medium mb-1">$150<sub className="text-muted fw-medium fs-11">/ 3 Months</sub></div>
                                                <div className="mb-2 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</div>
                                                <ul className="list-unstyled mb-0">
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-success"></i>
                                                        </span>
                                                        <span>
                                                            <span className="me-1 d-inline-block fw-semibold">30 Products</span>Can Publish
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-success"></i>
                                                        </span>
                                                        <span>
                                                            <span className="me-1 d-inline-block fw-semibold">3 Months</span> Product Displayed
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-success"></i>
                                                        </span>
                                                        <span>
                                                            <span className="me-1 d-inline-block fw-semibold">5</span>Featured Products
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-danger op-3"></i>
                                                        </span>
                                                        <span>
                                                            Chat Support
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-danger op-3"></i>
                                                        </span>
                                                        <span>
                                                            Email Support
                                                        </span>
                                                    </li>
                                                    <li className="d-grid">
                                                        <button className="btn btn-lg btn-primary btn-wave">Choose Plan</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <Card className="custom-card overflow-hidden">
                                        <Card.Body className="p-0">
                                            <div className="p-4">
                                                <div className="d-flex gap-3 align-items-center mb-3">
                                                    <div className="main-card-icon orange">
                                                        <div className="avatar avatar-lg bg-orange-transparent border border-orange border-opacity-10">
                                                            <div className="avatar avatar-sm svg-white">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.16a8,8,0,0,1-4.16-7V80.2a8,8,0,0,1,.7-3.27Z" opacity="0.2"/><polyline points="32.7 76.92 128 129.08 223.3 76.92" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M131.84,25l88,48.18a8,8,0,0,1,4.16,7v95.64a8,8,0,0,1-4.16,7l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18A8,8,0,0,1,131.84,25Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="129.09" x2="128" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>                                                        
                                                        <div className="fs-18 fw-medium"> 6 Months Access</div>
                                                        <span className="badge bg-gray-300 text-default fw-500">For Small Teams</span>
                                                    </div>
                                                </div>
                                                <div className="fs-25 fw-medium mb-1">$200<sub className="text-muted fw-medium fs-11">/ 6 Months</sub></div>
                                                <div className="mb-2 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</div>
                                                <ul className="list-unstyled mb-0">
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-success"></i>
                                                        </span>
                                                        <span>
                                                            <span className="me-1 d-inline-block fw-semibold">50 Products</span>Can Publish
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-success"></i>
                                                        </span>
                                                        <span>
                                                            <span className="me-1 d-inline-block fw-semibold">6 Months</span> Product Displayed
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-success"></i>
                                                        </span>
                                                        <span>
                                                            <span className="me-1 d-inline-block fw-semibold">10</span>Featured Products
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-success"></i>
                                                        </span>
                                                        <span>
                                                            Chat Support
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-danger op-3"></i>
                                                        </span>
                                                        <span>
                                                            Email Support
                                                        </span>
                                                    </li>
                                                    <li className="d-grid">
                                                        <button className="btn btn-lg btn-primary btn-wave">Choose Plan</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <Card className="custom-card overflow-hidden">
                                        <Card.Body className="p-0">
                                            <div className="p-4">
                                                <div className="d-flex gap-3 align-items-center mb-3">
                                                    <div className="main-card-icon info">
                                                        <div className="avatar avatar-lg bg-info-transparent border border-info border-opacity-10">
                                                            <div className="avatar avatar-sm svg-white">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.16a8,8,0,0,1-4.16-7V80.2a8,8,0,0,1,.7-3.27Z" opacity="0.2"/><polyline points="32.7 76.92 128 129.08 223.3 76.92" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M131.84,25l88,48.18a8,8,0,0,1,4.16,7v95.64a8,8,0,0,1-4.16,7l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18A8,8,0,0,1,131.84,25Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="129.09" x2="128" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>                                                        
                                                        <div className="fs-18 fw-medium"> 1 Year Access</div>
                                                        <span className="badge bg-gray-300 text-default fw-500">For Teams</span>
                                                    </div>
                                                </div>
                                                <div className="fs-25 fw-medium mb-1">$250<sub className="text-muted fw-medium fs-11">/ 1 Year</sub></div>
                                                <div className="mb-2 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</div>
                                                <ul className="list-unstyled mb-0">
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-success"></i>
                                                        </span>
                                                        <span>
                                                            <span className="me-1 d-inline-block fw-semibold">100 Products</span>Can Publish
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-success"></i>
                                                        </span>
                                                        <span>
                                                            <span className="me-1 d-inline-block fw-semibold">1 Year</span> Product Displayed
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-success"></i>
                                                        </span>
                                                        <span>
                                                            <span className="me-1 d-inline-block fw-semibold">20</span>Featured Products
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-success"></i>
                                                        </span>
                                                        <span>
                                                            Chat Support
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-success op-3"></i>
                                                        </span>
                                                        <span>
                                                            Email Support
                                                        </span>
                                                    </li>
                                                    <li className="d-grid">
                                                        <button className="btn btn-lg btn-primary btn-wave">Choose Plan</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <Card className="custom-card overflow-hidden">
                                        <Card.Body className="p-0">
                                            <div className="p-4">
                                                <div className="d-flex gap-3 align-items-center mb-3">
                                                    <div className="main-card-icon warning">
                                                        <div className="avatar avatar-lg bg-warning-transparent border border-warning border-opacity-10">
                                                            <div className="avatar avatar-sm svg-white">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.16a8,8,0,0,1-4.16-7V80.2a8,8,0,0,1,.7-3.27Z" opacity="0.2"/><polyline points="32.7 76.92 128 129.08 223.3 76.92" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M131.84,25l88,48.18a8,8,0,0,1,4.16,7v95.64a8,8,0,0,1-4.16,7l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18A8,8,0,0,1,131.84,25Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="129.09" x2="128" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>                                                        
                                                        <div className="fs-18 fw-medium"> Life Time Access</div>
                                                        <span className="badge bg-gray-300 text-default fw-500">For Business</span>
                                                    </div>
                                                </div>
                                                <div className="fs-25 fw-medium mb-1">$500<sub className="text-muted fw-medium fs-11">/ Life Time</sub></div>
                                                <div className="mb-2 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</div>
                                                <ul className="list-unstyled mb-0">
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-success"></i>
                                                        </span>
                                                        <span>
                                                            <span className="me-1 d-inline-block fw-semibold">Unlimited Products</span>Can Publish
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-success"></i>
                                                        </span>
                                                        <span>
                                                            <span className="me-1 d-inline-block fw-semibold">Life Time</span> Product Displayed
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-success"></i>
                                                        </span>
                                                        <span>
                                                            <span className="me-1 d-inline-block fw-semibold">500</span>Featured Products
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-success"></i>
                                                        </span>
                                                        <span>
                                                            Chat Support
                                                        </span>
                                                    </li>
                                                    <li className="d-flex align-items-center mb-3">
                                                        <span className="me-2">
                                                            <i className="ri-checkbox-circle-line fs-15 text-success op-3"></i>
                                                        </span>
                                                        <span>
                                                            Email Support
                                                        </span>
                                                    </li>
                                                    <li className="d-grid">
                                                        <button className="btn btn-lg btn-primary btn-wave">Choose Plan</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
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
                    </Col>
                </div>
            </section>
            {/* End:: Section-2 */}
    
    </Fragment> 
    )
};

export default Packages;