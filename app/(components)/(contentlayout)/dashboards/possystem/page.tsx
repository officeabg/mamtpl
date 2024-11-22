"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Nav, OverlayTrigger, Pagination, Row, Tab, Tooltip } from "react-bootstrap";

const Possystem = () => {
return (
<Fragment>
                {/*  Start::page-header */}
                    <Seo title={"POS System"} />
                    <Pageheader Heading="POS System" Pages={[{title:"Dashboards", active:true}, {title:"POS System", active:false},]} />
                {/*  End::page-header */}

                {/*  Start:: row-1 */}
                <Tab.Container defaultActiveKey="first">
                <Row>
                    <Col xl={12}>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h6 className="fw-medium mb-0">CATEGORY</h6>
                            <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </div>
                            <div>
                        <div className="row pos-category d-flex" id="filter">
                            <Col xxl={2} xl={3} lg={3} md={4} sm={6} className="col-12">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                            <Card className="custom-card">
                                                <Card.Body>
                                                        <div className="text-center">
                                                            <span className="avatar avatar-xl">
                                                                <img src="../../assets/images/pos-system/1.png" alt=""/>
                                                            </span>
                                                            <div>
                                                                <span className="fw-medium">All Menu</span>
                                                                <span className="fs-12 d-block fw-medium text-muted">180 Items</span>
                                                            </div>
                                                        </div>
                                                </Card.Body>
                                            </Card>
                                        
                                    </Nav.Link>
                                </Nav.Item>
                            </Col>
                            <Col xxl={2} xl={3} lg={3} md={4} sm={6} className="col-12">
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                            <Card className="custom-card">
                                                <Card.Body>
                                                    
                                                        <div className="text-center">
                                                            <span className="avatar avatar-xl">
                                                                <img src="../../assets/images/pos-system/2.png" alt=""/>
                                                            </span>
                                                            <div>
                                                                <span className="fw-medium">Main Courses</span>
                                                                <span className="fs-12 d-block fw-medium text-muted">36 Items</span>
                                                            </div>
                                                        </div>
                                                </Card.Body>
                                            </Card>
                                    </Nav.Link>
                                </Nav.Item>
                            </Col>
                            <Col xxl={2} xl={3} lg={3} md={4} sm={6} className="col-12">
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                            <Card className="custom-card">
                                                <Card.Body>
                                                        <div className="text-center">
                                                            <span className="avatar avatar-xl">
                                                                <img src="../../assets/images/pos-system/3.png" alt=""/>
                                                            </span>
                                                            <div>
                                                                <span className="fw-medium">Beverages</span>
                                                                <span className="fs-12 d-block fw-medium text-muted">25 Items</span>
                                                            </div>
                                                        </div>
                                                </Card.Body>
                                            </Card>
                                    </Nav.Link>
                                </Nav.Item>
                            </Col>
                            <Col xxl={2} xl={3} lg={3} md={4} sm={6} className="col-12">
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">
                                            <Card className="custom-card">
                                                <Card.Body>
                                                        <div className="text-center">
                                                            <span className="avatar avatar-xl">
                                                                <img src="../../assets/images/pos-system/4.png" alt=""/>
                                                            </span>
                                                            <div>
                                                                <span className="fw-medium">Desserts</span>
                                                                <span className="fs-12 d-block fw-medium text-muted">43 Items</span>
                                                            </div>
                                                        </div>
                                                </Card.Body>
                                            </Card>
                                    </Nav.Link>
                                </Nav.Item>
                            </Col>
                            <Col xxl={2} xl={3} lg={3} md={4} sm={6} className="col-12">
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">
                                            <Card className="custom-card">
                                                <Card.Body>
                                                        <div className="text-center">
                                                            <span className="avatar avatar-xl">
                                                                <img src="../../assets/images/pos-system/5.png" alt=""/>
                                                            </span>
                                                            <div>
                                                                <span className="fw-medium">Salads</span>
                                                                <span className="fs-12 d-block fw-medium text-muted">58 Items</span>
                                                            </div>
                                                        </div>
                                                </Card.Body>
                                            </Card>
                                    </Nav.Link>
                                </Nav.Item>
                            </Col>
                            <Col xxl={2} xl={3} lg={3} md={4} sm={6} className="col-12">
                                <Nav.Item>
                                    <Nav.Link eventKey="sixth">
                                            <Card className="custom-card">
                                                <Card.Body>
                                                        <div className="text-center">
                                                            <span className="avatar avatar-xl">
                                                                <img src="../../assets/images/pos-system/6.png" alt=""/>
                                                            </span>
                                                            <div>
                                                                <span className="fw-medium">Cakes</span>
                                                                <span className="fs-12 d-block fw-medium text-muted">38 Items</span>
                                                            </div>
                                                        </div>
                                                </Card.Body>
                                            </Card>
                                    </Nav.Link>
                                </Nav.Item>
                            </Col>
                        </div>
                         </div>
                    </Col>
                </Row>
                {/*  End:: row-1 */}

                {/*  Start:: row-2 */}
                <Row>
                    <Col xl={8} className="pos-tabs">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h6 className="fw-medium mb-0">SELECT ITEM</h6>
                            <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </div>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                <div className="row list-wrapper">
                                    <Col xxl={4} xl={4} lg={4} md={4} sm={6} className="col-12 card-item Desserts" data-category="Desserts">
                                                <Card className="custom-card">
                                                    <img src="../../assets/images/pos-system/16.jpg" className="card-img-top" alt="..."/>
                                                    <Card.Body>
                                                        <div className="mb-2">
                                                            <Link scroll={false} href="#!" className="fw-medium fs-16">Blueberry Bliss Burst</Link>
                                                            <span className="fs-12 text-muted d-block">Ice Creams</span>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center gap-2">
                                                                <h5 className="fw-semibold mb-0">$4.99</h5>
                                                                <span className="text-muted fs-13 text-decoration-line-through">$5.99</span>
                                                            </div>
                                                            <div>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add To Cart</Tooltip>}>
                                                                <Button variant="" className="btn btn-primary btn-icon btn-sm btn-wave" data-bs-toggle="tooltip"
                                                                    data-bs-placement="top" title="Add To Cart"><i className="ri-add-fill"></i></Button>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                     </Col>
                                     <Col xxl={4} xl={4} lg={4} md={4} sm={6} className="col-12 card-item Salads" data-category="Salads">
                                        <div className="card custom-card out-of-stock">
                                            <img src="../../assets/images/pos-system/17.jpg" className="card-img-top" alt="..."/>
                                            <Card.Body>
                                                <div className="mb-2">
                                                    <Link scroll={false} href="#!" className="fw-medium fs-16">Garden Delights</Link>
                                                    <span className="fs-12 text-muted d-block">Main Course</span>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <h5 className="fw-semibold mb-0">$29.99</h5>
                                                        <span className="text-muted fs-13 text-decoration-line-through">$34.99</span>
                                                    </div>
                                                    <div>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add To Cart</Tooltip>}>
                                                            <Button variant="" className="btn btn-primary btn-icon btn-sm btn-wave" data-bs-toggle="tooltip"
                                                                data-bs-placement="top" title="Add To Cart"><i className="ri-add-fill"></i></Button>
                                                        </OverlayTrigger>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={4} sm={6} className="col-12 card-item Desserts" data-category="Desserts">
                                        <Card className="custom-card">
                                            <img src="../../assets/images/pos-system/19.jpg" className="card-img-top" alt="..."/>
                                            <Card.Body>
                                                <div className="mb-2">
                                                    <Link href="#!" scroll={false} className="fw-medium fs-16">Temptation Tidbits</Link>
                                                    <span className="fs-12 text-muted d-block">Desserts</span>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <h5 className="fw-semibold mb-0">$7.99</h5>
                                                        <span className="text-muted fs-13 text-decoration-line-through">$9.99</span>
                                                    </div>
                                                    <div>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add To Cart</Tooltip>}>
                                                            <Button variant="" className="btn btn-primary btn-icon btn-sm btn-wave" data-bs-toggle="tooltip"
                                                                data-bs-placement="top" title="Add To Cart"><i className="ri-add-fill"></i></Button>
                                                        </OverlayTrigger>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={4} sm={6} className="col-12 card-item Main-Courses" data-category="Main-Courses">
                                            <Card className="custom-card">
                                                <img src="../../assets/images/pos-system/18.jpg" className="card-img-top" alt="..."/>
                                                <Card.Body>
                                                    <div className="mb-2">
                                                        <Link scroll={false} href="#!" className="fw-medium fs-16">Herbivore Haven</Link>
                                                        <span className="fs-12 text-muted d-block">Main Course</span>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center gap-2">
                                                            <h5 className="fw-semibold mb-0">$19.99</h5>
                                                            <span className="text-muted fs-13 text-decoration-line-through">$24.99</span>
                                                        </div>
                                                        <div>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add To Cart</Tooltip>}>
                                                                <Button variant="" className="btn btn-primary btn-icon btn-sm btn-wave" data-bs-toggle="tooltip"
                                                                    data-bs-placement="top" title="Add To Cart"><i className="ri-add-fill"></i></Button>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={4} sm={6} className="col-12 card-item Cakes" data-category="Cakes">
                                            <Card className="custom-card">
                                                <img src="../../assets/images/pos-system/11.jpg" className="card-img-top" alt="..."/>
                                                <Card.Body>
                                                    <div className="mb-2">
                                                        <Link scroll={false} href="#!" className="fw-medium fs-16">Strawberry Symphony</Link>
                                                        <span className="fs-12 text-muted d-block">Cakes</span>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center gap-2">
                                                            <h5 className="fw-semibold mb-0">$34.99</h5>
                                                            <span className="text-muted fs-13 text-decoration-line-through">$49.99</span>
                                                        </div>
                                                        <div>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add To Cart</Tooltip>}>
                                                                <Button variant="" className="btn btn-primary btn-icon btn-sm btn-wave" data-bs-toggle="tooltip"
                                                                    data-bs-placement="top" title="Add To Cart"><i className="ri-add-fill"></i></Button>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={4} sm={6} className="col-12 card-item Main-Courses" data-category="Main-Courses">
                                            <Card className="custom-card">
                                                <img src="../../assets/images/pos-system/15.jpg" className="card-img-top" alt="..."/>
                                                <Card.Body>
                                                    <div className="mb-2">
                                                        <Link scroll={false} href="#!" className="fw-medium fs-16">Veggie Delight Fusion</Link>
                                                        <span className="fs-12 text-muted d-block">Sandwich</span>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center gap-2">
                                                            <h5 className="fw-semibold mb-0">$2.79</h5>
                                                            <span className="text-muted fs-13 text-decoration-line-through">$2.99</span>
                                                        </div>
                                                        <div>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add To Cart</Tooltip>}>
                                                                <Button variant="" className="btn btn-primary btn-icon btn-sm btn-wave" data-bs-toggle="tooltip"
                                                                    data-bs-placement="top" title="Add To Cart"><i className="ri-add-fill"></i></Button>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={4} sm={6} className="col-12 card-item Beverages" data-category="Beverages">
                                        <Card className="custom-card">
                                            <img src="../../assets/images/pos-system/13.jpg" className="card-img-top" alt="..."/>
                                            <Card.Body>
                                                <div className="mb-2">
                                                    <Link scroll={false} href="#!" className="fw-medium fs-16">Iced Cinnamon Swirl</Link>
                                                    <span className="fs-12 text-muted d-block">Beverages</span>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <h5 className="fw-semibold mb-0">$1.29</h5>
                                                        <span className="text-muted fs-13 text-decoration-line-through">$1.99</span>
                                                    </div>
                                                    <div>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add To Cart</Tooltip>}>
                                                            <Button variant="" className="btn btn-primary btn-icon btn-sm btn-wave" data-bs-toggle="tooltip"
                                                                data-bs-placement="top" title="Add To Cart"><i className="ri-add-fill"></i></Button>
                                                        </OverlayTrigger>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={4} sm={6} className="col-12 card-item Salads" data-category="Salads">
                                        <Card className="custom-card">
                                            <img src="../../assets/images/pos-system/14.jpg" className="card-img-top" alt="..."/>
                                            <Card.Body>
                                                <div className="mb-2">
                                                    <Link scroll={false} href="#!" className="fw-medium fs-16">Culinary Greens</Link>
                                                    <span className="fs-12 text-muted d-block">Main Course</span>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <h5 className="fw-semibold mb-0">$24.99</h5>
                                                        <span className="text-muted fs-13 text-decoration-line-through">$29.99</span>
                                                    </div>
                                                    <div>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add To Cart</Tooltip>}>
                                                        <Button variant="" className="btn btn-primary btn-icon btn-sm btn-wave" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="Add To Cart"><i className="ri-add-fill"></i></Button>
                                                    </OverlayTrigger>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={4} sm={6} className="col-12 card-item Beverages" data-category="Beverages">
                                        <Card className="custom-card">
                                            <img src="../../assets/images/pos-system/10.jpg" className="card-img-top" alt="..."/>
                                            <Card.Body>
                                                <div className="mb-2">
                                                    <Link scroll={false} href="#!" className="fw-medium fs-16">Berry Basil Fizz</Link>
                                                    <span className="fs-12 text-muted d-block">Beverages</span>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <h5 className="fw-semibold mb-0">$3.99</h5>
                                                        <span className="text-muted fs-13 text-decoration-line-through">$4.99</span>
                                                    </div>
                                                    <div>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add To Cart</Tooltip>}>
                                                            <Button variant="" className="btn btn-primary btn-icon btn-sm btn-wave" data-bs-toggle="tooltip"
                                                                data-bs-placement="top" title="Add To Cart"><i className="ri-add-fill"></i></Button>
                                                        </OverlayTrigger>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={6} className="col-12 card-item Main-Courses" data-category="Main-Courses">
                                                <Card className="custom-card">
                                                    <img src="../../assets/images/pos-system/18.jpg" className="card-img-top" alt="..."/>
                                                    <Card.Body>
                                                        <div className="mb-2">
                                                            <Link scroll={false} href="#!" className="fw-medium fs-16">Herbivore Haven</Link>
                                                            <span className="fs-12 text-muted d-block">Main Course</span>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center gap-2">
                                                                <h5 className="fw-semibold mb-0">$19.99</h5>
                                                                <span className="text-muted fs-13 text-decoration-line-through">$24.99</span>
                                                            </div>
                                                            <div>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add To Cart</Tooltip>}>
                                                                <Button variant="" className="btn btn-primary btn-icon btn-sm btn-wave" data-bs-toggle="tooltip"
                                                                    data-bs-placement="top" title="Add To Cart"><i className="ri-add-fill"></i></Button>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={6} className="col-12 card-item Main-Courses" data-category="Main-Courses">
                                                <Card className="custom-card">
                                                    <img src="../../assets/images/pos-system/15.jpg" className="card-img-top" alt="..."/>
                                                    <Card.Body>
                                                        <div className="mb-2">
                                                            <Link scroll={false} href="#!" className="fw-medium fs-16">Veggie Delight Fusion</Link>
                                                            <span className="fs-12 text-muted d-block">Sandwich</span>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center gap-2">
                                                                <h5 className="fw-semibold mb-0">$2.79</h5>
                                                                <span className="text-muted fs-13 text-decoration-line-through">$2.99</span>
                                                            </div>
                                                            <div>
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add To Cart</Tooltip>}>
                                                                    <Button variant="" className="btn btn-primary btn-icon btn-sm btn-wave" data-bs-toggle="tooltip"
                                                                        data-bs-placement="top" title="Add To Cart"><i className="ri-add-fill"></i></Button>
                                                                </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <Row>
                                    <Col xxl={4} xl={4} lg={4} md={4} sm={6} className="col-12 card-item Beverages" data-category="Beverages">
                                        <Card className="custom-card">
                                            <img src="../../assets/images/pos-system/13.jpg" className="card-img-top" alt="..."/>
                                            <Card.Body>
                                                <div className="mb-2">
                                                    <Link scroll={false} href="#!" className="fw-medium fs-16">Iced Cinnamon Swirl</Link>
                                                    <span className="fs-12 text-muted d-block">Beverages</span>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <h5 className="fw-semibold mb-0">$1.29</h5>
                                                        <span className="text-muted fs-13 text-decoration-line-through">$1.99</span>
                                                    </div>
                                                    <div>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add To Cart</Tooltip>}>
                                                        <Button variant="" className="btn btn-primary btn-icon btn-sm btn-wave" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="Add To Cart"><i className="ri-add-fill"></i></Button>
                                                    </OverlayTrigger>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={4} sm={6} className="col-12 card-item Beverages" data-category="Beverages">
                                        <Card className="custom-card">
                                            <img src="../../assets/images/pos-system/10.jpg" className="card-img-top" alt="..."/>
                                            <Card.Body>
                                                <div className="mb-2">
                                                    <Link scroll={false} href="#!" className="fw-medium fs-16">Berry Basil Fizz</Link>
                                                    <span className="fs-12 text-muted d-block">Beverages</span>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <h5 className="fw-semibold mb-0">$3.99</h5>
                                                        <span className="text-muted fs-13 text-decoration-line-through">$4.99</span>
                                                    </div>
                                                    <div>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add To Cart</Tooltip>}>
                                                            <Button variant="" className="btn btn-primary btn-icon btn-sm btn-wave" data-bs-toggle="tooltip"
                                                                data-bs-placement="top" title="Add To Cart"><i className="ri-add-fill"></i></Button>
                                                        </OverlayTrigger>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                  </Row> 
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <Row>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={6} className="col-12 card-item Desserts" data-category="Desserts">
                                                <Card className="custom-card">
                                                    <img src="../../assets/images/pos-system/16.jpg" className="card-img-top" alt="..."/>
                                                    <Card.Body>
                                                        <div className="mb-2">
                                                            <Link scroll={false} href="#!" className="fw-medium fs-16">Blueberry Bliss Burst</Link>
                                                            <span className="fs-12 text-muted d-block">Ice Creams</span>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center gap-2">
                                                                <h5 className="fw-semibold mb-0">$4.99</h5>
                                                                <span className="text-muted fs-13 text-decoration-line-through">$5.99</span>
                                                            </div>
                                                            <div>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add To Cart</Tooltip>}>
                                                                <Button variant="" className="btn btn-primary btn-icon btn-sm btn-wave" data-bs-toggle="tooltip"
                                                                    data-bs-placement="top" title="Add To Cart"><i className="ri-add-fill"></i></Button>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                        </Col>
                                    <Col xxl={4} xl={4} lg={4} md={4} sm={6} className="col-12 card-item Desserts" data-category="Desserts">
                                        <Card className="custom-card">
                                            <img src="../../assets/images/pos-system/19.jpg" className="card-img-top" alt="..."/>
                                            <Card.Body>
                                                <div className="mb-2">
                                                    <Link href="#!" scroll={false} className="fw-medium fs-16">Temptation Tidbits</Link>
                                                    <span className="fs-12 text-muted d-block">Desserts</span>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <h5 className="fw-semibold mb-0">$7.99</h5>
                                                        <span className="text-muted fs-13 text-decoration-line-through">$9.99</span>
                                                    </div>
                                                    <div>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add To Cart</Tooltip>}>
                                                        <Button variant="" className="btn btn-primary btn-icon btn-sm btn-wave" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="Add To Cart"><i className="ri-add-fill"></i></Button>
                                                    </OverlayTrigger>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <Row>                                    
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={6} className="col-12 card-item Salads" data-category="Salads">
                                            <div className="card custom-card out-of-stock">
                                                <img src="../../assets/images/pos-system/17.jpg" className="card-img-top" alt="..."/>
                                                <Card.Body>
                                                    <div className="mb-2">
                                                        <Link scroll={false} href="#!" className="fw-medium fs-16">Garden Delights</Link>
                                                        <span className="fs-12 text-muted d-block">Main Course</span>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center gap-2">
                                                            <h5 className="fw-semibold mb-0">$29.99</h5>
                                                            <span className="text-muted fs-13 text-decoration-line-through">$34.99</span>
                                                        </div>
                                                        <div>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add To Cart</Tooltip>}>
                                                            <Button variant="" className="btn btn-primary btn-icon btn-sm btn-wave" data-bs-toggle="tooltip"
                                                                data-bs-placement="top" title="Add To Cart"><i className="ri-add-fill"></i></Button>
                                                        </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </div>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={6} className="col-12 card-item Salads" data-category="Salads">
                                            <Card className="custom-card">
                                                <img src="../../assets/images/pos-system/14.jpg" className="card-img-top" alt="..."/>
                                                <Card.Body>
                                                    <div className="mb-2">
                                                        <Link scroll={false} href="#!" className="fw-medium fs-16">Culinary Greens</Link>
                                                        <span className="fs-12 text-muted d-block">Main Course</span>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center gap-2">
                                                            <h5 className="fw-semibold mb-0">$24.99</h5>
                                                            <span className="text-muted fs-13 text-decoration-line-through">$29.99</span>
                                                        </div>
                                                        <div>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add To Cart</Tooltip>}>
                                                            <Button variant="" className="btn btn-primary btn-icon btn-sm btn-wave" data-bs-toggle="tooltip"
                                                                data-bs-placement="top" title="Add To Cart"><i className="ri-add-fill"></i></Button>
                                                        </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sixth">
                                    <Row>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={6} className="col-12 card-item Cakes" data-category="Cakes">
                                                <Card className="custom-card">
                                                    <img src="../../assets/images/pos-system/11.jpg" className="card-img-top" alt="..."/>
                                                    <Card.Body>
                                                        <div className="mb-2">
                                                            <Link scroll={false} href="#!" className="fw-medium fs-16">Strawberry Symphony</Link>
                                                            <span className="fs-12 text-muted d-block">Cakes</span>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center gap-2">
                                                                <h5 className="fw-semibold mb-0">$34.99</h5>
                                                                <span className="text-muted fs-13 text-decoration-line-through">$49.99</span>
                                                            </div>
                                                            <div>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add To Cart</Tooltip>}>
                                                                <Button variant="" className="btn btn-primary btn-icon btn-sm btn-wave" data-bs-toggle="tooltip"
                                                                    data-bs-placement="top" title="Add To Cart"><i className="ri-add-fill"></i></Button>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                
                            </Tab.Content>
                        <nav aria-label="Page navigation">
                            <Pagination className="pagination mb-0 float-end mb-4">
                                <Pagination.Item disabled>Previous</Pagination.Item>
                                <Pagination.Item>1</Pagination.Item>
                                <Pagination.Item active>2</Pagination.Item>
                                <Pagination.Item>3</Pagination.Item>
                                <Pagination.Item className="pagination-next">Next</Pagination.Item>
                            </Pagination>
                        </nav>
                    </Col>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    ORDER SUMMARY
                                </Card.Title>
                                <span className="badge bg-info-transparent rounded-pill">
                                    05 Items
                                </span>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <ul className="list-group mb-0 border-0 rounded-0">
                                    <li className="list-group-item border-top-0 border-start-0 border-end-0">
                                        <div className="d-flex align-items-center flex-wrap">
                                            <div className="me-2 lh-1">
                                                <span className="avatar avatar-md bg-light">
                                                    <img src="../../assets/images/pos-system/10.jpg" alt=""/>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <p className="mb-0 fw-medium">Berry Basil Fizz</p>
                                                <p className="mb-0 text-muted fs-12">Quantity : 1  <span className="badge bg-success-transparent ms-3">30% Off</span></p>
                                            </div>
                                            <div>
                                                <p className="mb-0 text-end">
                                                    <Link scroll={false} aria-label="anchor" href="#!">
                                                        <i className="ri-close-line fs-16 text-muted"></i>
                                                    </Link>
                                                </p>
                                                <p className="mb-0 fs-14 fw-medium">$3.99<span className="ms-1 text-muted fs-11 d-inline-block"><s>$4.99</s></span></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item  border-bottom border-block-end-dashed border-start-0 border-end-0">
                                        <div className="d-flex align-items-center flex-wrap">
                                            <div className="me-2 lh-1">
                                                <span className="avatar avatar-lg bg-light">
                                                    <img src="../../assets/images/pos-system/15.jpg" alt=""/>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <p className="mb-0 fw-medium">Veggie Delight Fusion</p>
                                                <p className="mb-0 text-muted fs-12">Quantity : 2  <span className="badge bg-success-transparent ms-3">10% Off</span></p>
                                            </div>
                                            <div>
                                                <p className="mb-0 text-end">
                                                    <Link scroll={false} aria-label="anchor" href="#!">
                                                        <i className="ri-close-line fs-16 text-muted"></i>
                                                    </Link>
                                                </p>
                                                <p className="mb-0 fs-14 fw-medium">$2.79<span className="ms-1 text-muted fs-11 d-inline-block"><s>$2.99</s></span></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item  border-bottom border-block-end-dashed border-start-0 border-end-0">
                                        <div className="d-flex align-items-center flex-wrap">
                                            <div className="me-2 lh-1">
                                                <span className="avatar avatar-lg bg-light">
                                                    <img src="../../assets/images/pos-system/11.jpg" alt=""/>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <p className="mb-0 fw-medium">Strawberry Symphony</p>
                                                <p className="mb-0 text-muted fs-12">Quantity : 1  <span className="badge bg-success-transparent ms-3">10% Off</span></p>
                                            </div>
                                            <div>
                                                <p className="mb-0 text-end">
                                                    <Link scroll={false} aria-label="anchor" href="#!">
                                                        <i className="ri-close-line fs-16 text-muted"></i>
                                                    </Link>
                                                </p>
                                                <p className="mb-0 fs-14 fw-medium">$34.99<span className="ms-1 text-muted fs-11 d-inline-block"><s>$49.99</s></span></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item  border-bottom border-block-end-dashed border-start-0 border-end-0">
                                        <div className="d-flex align-items-center flex-wrap">
                                            <div className="me-2 lh-1">
                                                <span className="avatar avatar-lg bg-light">
                                                    <img src="../../assets/images/pos-system/16.jpg" alt=""/>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <p className="mb-0 fw-medium">Blueberry Bliss Burst</p>
                                                <p className="mb-0 text-muted fs-12">Quantity : 2  <span className="badge bg-success-transparent ms-3">10% Off</span></p>
                                            </div>
                                            <div>
                                                <p className="mb-0 text-end">
                                                    <Link scroll={false} aria-label="anchor" href="#!">
                                                        <i className="ri-close-line fs-16 text-muted"></i>
                                                    </Link>
                                                </p>
                                                <p className="mb-0 fs-14 fw-medium">$4.99<span className="ms-1 text-muted fs-11 d-inline-block"><s>$5.99</s></span></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item  border-bottom border-block-end-dashed border-start-0 border-end-0">
                                        <div className="d-flex align-items-center flex-wrap">
                                            <div className="me-2 lh-1">
                                                <span className="avatar avatar-lg bg-light">
                                                    <img src="../../assets/images/pos-system/13.jpg" alt=""/>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <p className="mb-0 fw-medium">Iced Cinnamon Swirl</p>
                                                <p className="mb-0 text-muted fs-12">Quantity : 1  <span className="badge bg-success-transparent ms-3">10% Off</span></p>
                                            </div>
                                            <div>
                                                <p className="mb-0 text-end">
                                                    <Link scroll={false} aria-label="anchor" href="#!">
                                                        <i className="ri-close-line fs-16 text-muted"></i>
                                                    </Link>
                                                </p>
                                                <p className="mb-0 fs-14 fw-medium">$1.29 <span className="ms-1 text-muted fs-11 d-inline-block"><s>$1.99</s></span></p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="p-3 border-bottom border-block-end-dashed">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                                        <div className="fs-12 fw-medium bg-primary-transparent p-1 px-2 rounded">SPRUKO25</div>
                                        <div className="text-success">COUPON APPLIED</div>
                                    </div>
                                </div>
                                <div className="p-3 border-bottom border-block-end-dashed">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="text-muted">Sub Total</div>
                                        <div className="fw-medium fs-14">$318</div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="text-muted">Discount</div>
                                        <div className="fw-medium fs-14">10% - $31.8</div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="text-muted">Delivery Charges</div>
                                        <div className="fw-medium fs-14">- $29</div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="text-muted">Service Tax (18%)</div>
                                        <div className="fw-medium fs-14">- $45.29</div>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="fs-15">Total :</div>
                                        <div className="fw-semibold fs-16 text-dark"> $1,387</div>
                                    </div>
                                    <div className="btn-list d-grid mt-4">
                                        <Button variant="" className="btn btn-secondary-light btn-wave">Save For Later</Button>
                                        <Button variant="" className="btn btn-primary btn-wave">Pay Now</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </Tab.Container>
                {/*  End:: row-2 */}
</Fragment>
);
};

export default Possystem;