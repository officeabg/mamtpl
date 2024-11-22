"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, Form, Nav, Pagination, ProgressBar, Row, Tab } from "react-bootstrap";
const Select = dynamic(() => import("react-select"), { ssr: false });
const User = () => {
    const Accounttype=[
        {value:'Private', label:'Private'},
        {value:'Business', label:'Business'},
    ]
return ( 
    <Fragment>

    {/* Start:: Breadcrumb*/}
    <div className="border-bottom border-top py-3">
        <div className="container">
            {/* Page Header */}
                <Seo title={"User Details"} />
                <Pageheader Heading="" Pagetitle={true} Pages={[{title:"Apps", active:true}, {title:"Marketplace", active:true}, {title:"User Details", active:false},]} />
            {/* Page Header Close */}
        </div>
    </div>
    {/* End:: Breadcrumb*/}

    {/* Start:: Landing Banner */}
    <div className="landing-banner">
        <section className="py-5">
            <div className="container main-banner-container">
                <div className="row gy-2">
                    <Col md={8} lg={9} className="">
                        <div className="d-flex align-items-center flex-wrap">
                            <span className="marketplace-company-icon">
                            <img src="../../assets/images/company-logos/3.png" alt="" />
                            </span>
                            <div className="ms-3">
                                <h4 className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!"> sprukotechnologies</Link></h4>
                                <p className="mb-2">Member Since <span className="fw-semibold">2005</span></p>
                                <div className="d-flex align-items-center fs-14 mb-2">
                                    <p className="fs-15 fw-semibold mb-0">Ratings : </p>
                                    <div className="min-w-fit-content ms-3">
                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                        <span className="text-warning me-1"><i className="bi bi-star-half"></i></span>
                                        <span className="text-warning"><i className="bi bi-star"></i></span>
                                    </div>
                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                        <span>(142)</span>
                                        <span>Ratings</span>
                                    </p>
                                </div>                                        
                            </div>
                        </div>
                    </Col>
                    <Col md={4} lg={3} className="my-md-auto text-md-end">
                        <div className="btn-list mb-2">
                            <Link scroll={false} href="#!" className="btn btn-lg btn-w-lg btn-primary me-2">View Profile</Link>
                            <Link scroll={false} href="#!" className="btn btn-icon btn-lg btn-secondary-light btn-wave">
                                <i className="ri-share-line"></i>
                            </Link>
                        </div>
                        <p className="mb-0"><i className="bi bi-info-circle text-danger"  data-bs-placement="top" title="45 days left"></i> <b>Expires on </b> 28 Dec 2022</p>
                    </Col>
                </div>
            </div>
        </section> 
    </div>
    {/* End:: Landing Banner */}

    {/* Start:: Nav Tabs*/}
    <Tab.Container defaultActiveKey="first">
    <div className="border-bottom">
        <div className="container">
            <Nav className="nav-tabs tab-style-8 scaleX custom-nav-tabs" id="myTab" role="tablist">
                <Nav.Item role="presentation">
                    <Nav.Link eventKey="first" href="#Profile-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="true" role="tab">My Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item role="presentation">
                    <Nav.Link eventKey="second" href="#mydownloads-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">My Downloads</Nav.Link>
                </Nav.Item>
                <Nav.Item role="presentation">
                    <Nav.Link eventKey="third" href="#wishlistitems-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">Wishlist Items</Nav.Link>
                </Nav.Item>
                <Nav.Item role="presentation">
                    <Nav.Link eventKey="fourth" href="#Followers-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">Followers</Nav.Link>
                </Nav.Item>
                <Nav.Item role="presentation">
                    <Nav.Link eventKey="fifth" href="#Following-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">Following</Nav.Link>
                </Nav.Item>
                <Nav.Item role="presentation">
                    <Nav.Link eventKey="sixth" href="#settings-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">Settings</Nav.Link>
                </Nav.Item>
            </Nav> 
        </div>
    </div>
    {/* End:: Nav Tabs*/}

    {/* Start:: Section-1 */}
    <section className="section py-4 bg-white">
        <div className="container"> 
            <Tab.Content>
                <Tab.Pane eventKey="first" className="border-0 p-0 show" id="Profile-tab" role="tabpanel"> 
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title flex-fill">
                            Basic Information
                            </div>
                            <div>
                                <p className="fw-semibold mb-2">Profile 60% completed - <Link scroll={false} href="#!" className="text-primary fs-12">Finish now</Link></p>
                                <ProgressBar variant="primary" now={60} className="progress progress-xs progress-animate" />
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-4 mb-4">
                                <Col xl={6}>
                                    <Form.Label htmlFor="customer-name" className="form-label">Customer Name</Form.Label>
                                    <Form.Control type="text" className="form-control" id="customer-name" placeholder="Customer Name" defaultValue="Jack Miller"/>
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="customer-username" className="form-label">Customer Username</Form.Label> 
                                    <Form.Control type="text" className="form-control" id="customer-username" placeholder="Customer username" defaultValue="sprukotechnologies"/>
                                </Col> 
                                <Col xl={6}>
                                    <Form.Label htmlFor="email-address" className="form-label">Email Address :</Form.Label>
                                    <Form.Control type="text" className="form-control" id="email-address" placeholder="xyz@gmail.com" defaultValue="json@gmail.com"/>
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="phone-number" className="form-label">Mobile Number :</Form.Label>
                                    <Form.Control type="text" className="form-control" id="phone-number" placeholder="*** *** ****" defaultValue="65432 76765"/>
                                </Col>
                            </div>
                            <div className="row gy-4"> 
                                <Col xl={6}>
                                    <Form.Label htmlFor="Address" className="form-label">Address :</Form.Label>
                                    <Form.Control type="text" className="form-control" id="Address" placeholder="Address" defaultValue="USA"/>
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="Zip-Code" className="form-label">Zip Code :</Form.Label>
                                    <Form.Control type="text" className="form-control" id="Zip-Code" placeholder="Zip Code" defaultValue="1234"/>
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="facebook" className="form-label">Facebook :</Form.Label>
                                    <Form.Control type="text" className="form-control" id="facebook" placeholder="https://" defaultValue="https://www.facebook.com"/>
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="Twitter" className="form-label">Twitter :</Form.Label>
                                    <Form.Control type="text" className="form-control" id="Twitter" placeholder="https://" defaultValue="https://twitter.com"/> 
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="Pinterest" className="form-label">Pinterest:</Form.Label>
                                    <Form.Control type="text" className="form-control" id="Pinterest" placeholder="https://" defaultValue="https://in.pinterest.com"/>
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="Linkedin" className="form-label">Linkedin :</Form.Label>
                                    <Form.Control type="text" className="form-control" id="Linkedin" placeholder="https://" defaultValue="https://www.linkedin.com"/>
                                </Col>
                                <Col xl={12}>                                            
                                    <div className="mb-3">
                                        <span className="avatar avatar-lg avatar-rounded">
                                            <img src="../../assets/images/faces/9.jpg" alt="" className="w-100 h-100"/>
                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-danger avatar-badge"><i className="fe fe-x"></i></Link>
                                        </span>
                                    </div>
                                    <div className="btn-list">
                                        <input className="form-control" type="file" id="formFile"/>
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="bio" className="form-label">Bio :</Form.Label>
                                    <Form.Control as="textarea" className="form-control" id="bio" rows={7} defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!"></Form.Control>
                                </Col>
                            </div>                                        
                        </Card.Body>
                        <Card.Footer>
                            <div className="float-end">
                                <Button variant="" className="btn btn-primary">
                                    Save Changes
                                </Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="second" className="border-0 p-0" id="mydownloads-tab" role="tabpanel">
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                My Downloads
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example"/>
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" href="#!" className="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort By<i className="ri-arrow-down-s-line align-middle ms-1"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu role="menu">
                                        <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="row">Order ID</th>
                                            <th scope="row">Product Name</th>
                                            <th scope="row">Author</th>
                                            <th scope="row">Status</th>
                                            <th scope="row">Download Date</th>
                                            <th scope="row">Expired Date</th>
                                            <th scope="row">Licence</th>
                                            <th scope="row">Price</th>
                                            <th scope="row">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Link scroll={false} href="#!" className="">
                                                    #SPK2901
                                                </Link>
                                            </td>
                                            <td>
                                                <div className="d-flex"> 
                                                    <span className="avatar avatar-md avatar-square"><img src="../../assets/images/marketplace/new-arrivals/1.png" className="w-100 h-100" alt="..." /></span>
                                                    <div className="ms-2">
                                                        <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!">HTML Template</Link></p>
                                                        <p className="badge badge-sm bg-light border text-muted mb-0"  data-bs-placement="top" title="Category">HTML</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-sm avatar-rounded me-2">
                                                            <img src="../../assets/images/faces/4.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-semibold">Amanda Nanes</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge rounded-pill badge-sm bg-success-transparent">Active</span>
                                            </td>
                                            <td>03 Jan 2022</td>
                                            <td>12 Feb 2022</td>
                                            <td>
                                                <span className="badge rounded-pill badge-sm bg-success-transparent">Regular</span>
                                            </td>
                                            <td className="fw-semibold">$56</td>
                                            <td>
                                                <Button variant="" className="btn btn-sm btn-outline-light btn-wave waves-effect waves-light">
                                                    <i className="bi bi-arrow-down-circle text-muted me-1"></i>
                                                    Download
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link scroll={false} href="#!" className="">
                                                    #SPK2902
                                                </Link>
                                            </td>
                                            <td>
                                                <div className="d-flex"> 
                                                    <span className="avatar avatar-md avatar-square"><img src="../../assets/images/marketplace/new-arrivals/2.png" className="w-100 h-100" alt="..." /></span>
                                                    <div className="ms-2">
                                                        <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!">React Template</Link></p>
                                                        <p className="badge badge-sm bg-light border text-muted mb-0"  data-bs-placement="top" title="Category">React</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-sm avatar-rounded me-2">
                                                            <img src="../../assets/images/faces/15.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-semibold">Charles Achilles</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge rounded-pill badge-sm bg-danger-transparent">Expired</span>
                                            </td>
                                            <td>12 Feb 2022</td>
                                            <td>15 Mar 2022</td>
                                            <td>
                                                <span className="badge rounded-pill badge-sm bg-warning-transparent">Extended</span>
                                            </td>
                                            <td className="fw-semibold">$34</td>
                                            <td>
                                                <Button variant="" className="btn btn-sm btn-outline-light btn-wave waves-effect waves-light">
                                                    <i className="bi bi-arrow-down-circle text-muted me-1"></i>
                                                    Download
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link scroll={false} href="#!" className="">
                                                    #SPK2903
                                                </Link>
                                            </td>
                                            <td>
                                                <div className="d-flex"> 
                                                    <span className="avatar avatar-md avatar-square"><img src="../../assets/images/marketplace/new-arrivals/3.png" className="w-100 h-100" alt="..." /></span>
                                                    <div className="ms-2">
                                                        <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!">PHP Template</Link></p>
                                                        <p className="badge badge-sm bg-light border text-muted mb-0"  data-bs-placement="top" title="Category">PHP</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-sm avatar-rounded me-2">
                                                            <img src="../../assets/images/faces/5.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-semibold">Julia Camo</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge rounded-pill badge-sm bg-success-transparent">Active</span>
                                            </td>
                                            <td>23 Mar 2022</td>
                                            <td>17 Apr 2022</td>
                                            <td>
                                                <span className="badge rounded-pill badge-sm bg-success-transparent">Regular</span>
                                            </td>
                                            <td className="fw-semibold">$46</td>
                                            <td>
                                                <Button variant="" className="btn btn-sm btn-outline-light btn-wave waves-effect waves-light">
                                                    <i className="bi bi-arrow-down-circle text-muted me-1"></i>
                                                    Download
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link scroll={false} href="#!" className="">
                                                    #SPK2904
                                                </Link>
                                            </td>
                                            <td>
                                                <div className="d-flex"> 
                                                    <span className="avatar avatar-md avatar-square"><img src="../../assets/images/marketplace/new-arrivals/4.png" className="w-100 h-100" alt="..." /></span>
                                                    <div className="ms-2">
                                                        <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!">Angular Template</Link></p>
                                                        <p className="badge badge-sm bg-light border text-muted mb-0"  data-bs-placement="top" title="Category">Angular</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-sm avatar-rounded me-2">
                                                            <img src="../../assets/images/faces/12.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-semibold">Jack Miller</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge rounded-pill badge-sm bg-danger-transparent">Expired</span>
                                            </td>
                                            <td>25 Apr 2022</td>
                                            <td>16 Jun 2022</td>
                                            <td>
                                                <span className="badge rounded-pill badge-sm bg-success-transparent">Regular</span>
                                            </td>
                                            <td className="fw-semibold">$52</td>
                                            <td>
                                                <Button variant="" className="btn btn-sm btn-outline-light btn-wave waves-effect waves-light">
                                                    <i className="bi bi-arrow-down-circle text-muted me-1"></i>
                                                    Download
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className="card-footer border-top-0">
                            <div className="d-flex align-items-center flex-wrap overflow-auto">
                                <div className="mb-2 mb-sm-0">
                                    Showing <b>1</b> to <b>4</b> of <b>10</b> entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <Pagination className="pagination mb-0 overflow-auto">
                                        <Pagination.Item disabled>Previous</Pagination.Item>
                                        <Pagination.Item active>1</Pagination.Item>
                                        <Pagination.Item>2</Pagination.Item>
                                        <Pagination.Item>...</Pagination.Item>
                                        <Pagination.Item className="d-none d-sm-block">4</Pagination.Item>
                                        <Pagination.Item>5</Pagination.Item>
                                        <Pagination.Item className="pagination-next">Next</Pagination.Item>
                                    </Pagination>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="third" className="border-0 p-0" id="wishlistitems-tab" role="tabpanel">
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                My Wishlists
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example"/>
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" href="#!" className="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort By<i className="ri-arrow-down-s-line align-middle ms-1"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu role="menu">
                                        <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="row">Product Name</th>
                                            <th scope="row">Author</th>
                                            <th scope="row">Status</th>
                                            <th scope="row">Upload Date</th>
                                            <th scope="row">Price</th>
                                            <th scope="row">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex"> 
                                                    <span className="avatar avatar-md avatar-square"><img src="../../assets/images/marketplace/new-arrivals/1.png" className="w-100 h-100" alt="..." /></span>
                                                    <div className="ms-2">
                                                        <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!">HTML Template</Link></p>
                                                        <p className="badge badge-sm bg-light border text-muted mb-0"  data-bs-placement="top" title="Category">HTML</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-sm avatar-rounded me-2">
                                                            <img src="../../assets/images/faces/4.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-semibold">Amanda Nanes</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge rounded-pill badge-sm bg-success-transparent">Active</span>
                                            </td>
                                            <td>03 Jan 2022</td>
                                            <td className="fw-semibold">$56</td>
                                            <td>
                                                <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light me-1">
                                                    <i className="ri-shopping-cart-line"></i>
                                                </Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                                                    <i className="ri-delete-bin-line"></i>
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex"> 
                                                    <span className="avatar avatar-md avatar-square"><img src="../../assets/images/marketplace/new-arrivals/2.png" className="w-100 h-100" alt="..." /></span>
                                                    <div className="ms-2">
                                                        <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!">React Template</Link></p>
                                                        <p className="badge badge-sm bg-light border text-muted mb-0"  data-bs-placement="top" title="Category">React</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-sm avatar-rounded me-2">
                                                            <img src="../../assets/images/faces/15.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-semibold">Charles Achilles</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge rounded-pill badge-sm bg-danger-transparent">Deactive</span>
                                            </td>
                                            <td>12 Feb 2022</td>
                                            <td className="fw-semibold">$34</td>
                                            <td>
                                                <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light me-1">
                                                    <i className="ri-shopping-cart-line"></i>
                                                </Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                                                    <i className="ri-delete-bin-line"></i>
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex"> 
                                                    <span className="avatar avatar-md avatar-square"><img src="../../assets/images/marketplace/new-arrivals/3.png" className="w-100 h-100" alt="..." /></span>
                                                    <div className="ms-2">
                                                        <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!">PHP Template</Link></p>
                                                        <p className="badge badge-sm bg-light border text-muted mb-0"  data-bs-placement="top" title="Category">PHP</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-sm avatar-rounded me-2">
                                                            <img src="../../assets/images/faces/5.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-semibold">Julia Camo</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge rounded-pill badge-sm bg-success-transparent">Active</span>
                                            </td>
                                            <td>23 Mar 2022</td>
                                            <td className="fw-semibold">$46</td>
                                            <td>
                                                <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light me-1">
                                                    <i className="ri-shopping-cart-line"></i>
                                                </Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                                                    <i className="ri-delete-bin-line"></i>
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex"> 
                                                    <span className="avatar avatar-md avatar-square"><img src="../../assets/images/marketplace/new-arrivals/4.png" className="w-100 h-100" alt="..." /></span>
                                                    <div className="ms-2">
                                                        <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="#!">Angular Template</Link></p>
                                                        <p className="badge badge-sm bg-light border text-muted mb-0"  data-bs-placement="top" title="Category">Angular</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-sm avatar-rounded me-2">
                                                            <img src="../../assets/images/faces/12.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-semibold">Jack Miller</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge rounded-pill badge-sm bg-danger-transparent">Deactive</span>
                                            </td>
                                            <td>25 Apr 2022</td>
                                            <td className="fw-semibold">$52</td>
                                            <td>
                                                <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light me-1">
                                                    <i className="ri-shopping-cart-line"></i>
                                                </Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                                                    <i className="ri-delete-bin-line"></i>
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <div className="card-footer border-top-0">
                            <div className="d-flex align-items-center flex-wrap overflow-auto">
                                <div className="mb-2 mb-sm-0">
                                    Showing <b>1</b> to <b>4</b> of <b>10</b> entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <Pagination className="pagination mb-0 overflow-auto">
                                        <Pagination.Item disabled>Previous</Pagination.Item>
                                        <Pagination.Item active>1</Pagination.Item>
                                        <Pagination.Item>2</Pagination.Item>
                                        <Pagination.Item>...</Pagination.Item>
                                        <Pagination.Item className="d-none d-sm-block">4</Pagination.Item>
                                        <Pagination.Item>5</Pagination.Item>
                                        <Pagination.Item className="pagination-next">Next</Pagination.Item>
                                    </Pagination>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth" className="border-0 p-0" id="purchased-tab" role="tabpanel">
                <Row>
                        <Col lg={4}>
                            <Card className="custom-card">
                                <Card.Body className="contact-action">
                                    <div className="contact-overlay"></div>
                                    <div className="d-flex align-items-top">
                                        <div className="d-flex flex-fill flex-wrap gap-3">
                                            <div className="avatar avatar-xl avatar-rounded">
                                                <img src="../../assets/images/faces/15.jpg" alt="" />
                                            </div>
                                            <div>
                                                <h6 className="mb-1 fw-semibold">
                                                    Simon Cowall
                                                </h6>
                                                <p className="mb-1 text-muted contact-mail text-truncate">simoncowal111@gmail.com</p>
                                                <p className="fw-semibold mb-2 text-primary">
                                                    567 Products
                                                </p>
                                                <div className="btn-list">
                                                    <Button variant="" className="btn btn-sm btn-light">
                                                        <i className="ri-user-add-line me-1"></i>Follow Back
                                                    </Button>
                                                    <Button variant="" className="btn btn-sm btn-danger-light">
                                                        <i className="ri-close-fill me-1"></i>Cancel
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card className="custom-card">
                                <Card.Body className="contact-action">
                                    <div className="contact-overlay"></div>
                                    <div className="d-flex align-items-top ">
                                        <div className="d-flex flex-fill flex-wrap gap-3">
                                            <div className="avatar avatar-xl avatar-rounded">
                                                <img src="../../assets/images/faces/1.jpg" alt="" />
                                            </div>
                                            <div>
                                                <h6 className="mb-1 fw-semibold">                                                            
                                                    Melissa Jane                                            
                                                </h6>
                                                <p className="mb-1 text-muted contact-mail text-truncate">melissajane2134@gmail.com</p>
                                                <p className="fw-semibold mb-2 text-primary">
                                                    347 Products
                                                </p>
                                                <div className="btn-list">
                                                    <Button variant="" className="btn btn-sm btn-light">
                                                        <i className="ri-user-add-line me-1"></i>Follow Back
                                                    </Button>
                                                    <Button variant="" className="btn btn-sm btn-danger-light">
                                                        <i className="ri-close-fill me-1"></i>Cancel
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card className="custom-card">
                                <Card.Body className="contact-action">
                                    <div className="contact-overlay"></div>
                                    <div className="d-flex align-items-top ">
                                        <div className="d-flex flex-fill flex-wrap gap-3">
                                            <div className="avatar avatar-xl avatar-rounded">
                                                <img src="../../assets/images/faces/2.jpg" alt="" />
                                            </div>
                                            <div>
                                                <h6 className="mb-1 fw-semibold">                                                            
                                                    Susana Sane                                           
                                                </h6>
                                                <p className="mb-1 text-muted contact-mail text-truncate">susanasanee2134@gmail.com</p>
                                                <p className="fw-semibold mb-2 text-primary">
                                                    847 Products
                                                </p>
                                                <div className="btn-list">
                                                    <Button variant="" className="btn btn-sm btn-light">
                                                        <i className="ri-user-add-line me-1"></i>Follow Back
                                                    </Button>
                                                    <Button variant="" className="btn btn-sm btn-danger-light">
                                                        <i className="ri-close-fill me-1"></i>Cancel
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card className="custom-card">
                                <Card.Body className="contact-action">
                                    <div className="contact-overlay"></div>
                                    <div className="d-flex align-items-top ">
                                        <div className="d-flex flex-fill flex-wrap gap-3">
                                            <div className="avatar avatar-xl avatar-rounded">
                                                <img src="../../assets/images/faces/21.jpg" alt="" />
                                            </div>
                                            <div>
                                                <h6 className="mb-1 fw-semibold">                                                            
                                                    Shane Watson                                          
                                                </h6>
                                                <p className="mb-1 text-muted contact-mail text-truncate">shanewatson@gmail.com</p>
                                                <p className="fw-semibold mb-2 text-primary">
                                                    812 Products
                                                </p>
                                                <div className="btn-list">
                                                    <Button variant="" className="btn btn-sm btn-light">
                                                        <i className="ri-user-add-line me-1"></i>Follow Back
                                                    </Button>
                                                    <Button variant="" className="btn btn-sm btn-danger-light">
                                                        <i className="ri-close-fill me-1"></i>Cancel
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card className="custom-card">
                                <Card.Body className="contact-action">
                                    <div className="contact-overlay"></div>
                                    <div className="d-flex align-items-top ">
                                        <div className="d-flex flex-fill flex-wrap gap-3">
                                            <div className="avatar avatar-xl avatar-rounded">
                                                <img src="../../assets/images/faces/5.jpg" alt="" />
                                            </div>
                                            <div>
                                                <h6 className="mb-1 fw-semibold">                                                            
                                                    Devon Convoy                                         
                                                </h6>
                                                <p className="mb-1 text-muted contact-mail text-truncate">devonconvoy@gmail.com</p>
                                                <p className="fw-semibold mb-2 text-primary">
                                                    345 Products
                                                </p>
                                                <div className="btn-list">
                                                    <Button variant="" className="btn btn-sm btn-light">
                                                        <i className="ri-user-add-line me-1"></i>Follow Back
                                                    </Button>
                                                    <Button variant="" className="btn btn-sm btn-danger-light">
                                                        <i className="ri-close-fill me-1"></i>Cancel
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card className="custom-card">
                                <Card.Body className="contact-action">
                                    <div className="contact-overlay"></div>
                                    <div className="d-flex align-items-top ">
                                        <div className="d-flex flex-fill flex-wrap gap-3">
                                            <div className="avatar avatar-xl avatar-rounded">
                                                <img src="../../assets/images/faces/6.jpg" alt="" />
                                            </div>
                                            <div>
                                                <h6 className="mb-1 fw-semibold">                                                            
                                                    Umag Anige                                        
                                                </h6>
                                                <p className="mb-1 text-muted contact-mail text-truncate">umaganigel89@gmail.com</p>
                                                <p className="fw-semibold mb-2 text-primary">
                                                    456 Products
                                                </p>
                                                <div className="btn-list">
                                                    <Button variant="" className="btn btn-sm btn-light">
                                                        <i className="ri-user-add-line me-1"></i>Follow Back
                                                    </Button>
                                                    <Button variant="" className="btn btn-sm btn-danger-light">
                                                        <i className="ri-close-fill me-1"></i>Cancel
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card className="custom-card">
                                <Card.Body className="contact-action">
                                    <div className="contact-overlay"></div>
                                    <div className="d-flex align-items-top ">
                                        <div className="d-flex flex-fill flex-wrap gap-3">
                                            <div className="avatar avatar-xl avatar-rounded">
                                                <img src="../../assets/images/faces/9.jpg" alt="" />
                                            </div>
                                            <div>
                                                <h6 className="mb-1 fw-semibold">
                                                    Simon Cowall
                                                </h6>
                                                <p className="mb-1 text-muted contact-mail text-truncate">simoncowal111@gmail.com</p>
                                                <p className="fw-semibold mb-2 text-primary">
                                                    567 Products
                                                </p>
                                                <div className="btn-list">
                                                    <Button variant="" className="btn btn-sm btn-light">
                                                        <i className="ri-user-add-line me-1"></i>Follow Back
                                                    </Button>
                                                    <Button variant="" className="btn btn-sm btn-danger-light">
                                                        <i className="ri-close-fill me-1"></i>Cancel
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card className="custom-card">
                                <Card.Body className="contact-action">
                                    <div className="contact-overlay"></div>
                                    <div className="d-flex align-items-top ">
                                        <div className="d-flex flex-fill flex-wrap gap-3">
                                            <div className="avatar avatar-xl avatar-rounded">
                                                <img src="../../assets/images/faces/10.jpg" alt="" />
                                            </div>
                                            <div>
                                                <h6 className="mb-1 fw-semibold">                                                            
                                                    Melissa Jane                                            
                                                </h6>
                                                <p className="mb-1 text-muted contact-mail text-truncate">melissajane2134@gmail.com</p>
                                                <p className="fw-semibold mb-2 text-primary">
                                                    347 Products
                                                </p>
                                                <div className="btn-list">
                                                    <Button variant="" className="btn btn-sm btn-light">
                                                        <i className="ri-user-add-line me-1"></i>Follow Back
                                                    </Button>
                                                    <Button variant="" className="btn btn-sm btn-danger-light">
                                                        <i className="ri-close-fill me-1"></i>Cancel
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card className="custom-card">
                                <Card.Body className="contact-action">
                                    <div className="contact-overlay"></div>
                                    <div className="d-flex align-items-top ">
                                        <div className="d-flex flex-fill flex-wrap gap-3">
                                            <div className="avatar avatar-xl avatar-rounded">
                                                <img src="../../assets/images/faces/11.jpg" alt="" />
                                            </div>
                                            <div>
                                                <h6 className="mb-1 fw-semibold">                                                            
                                                    Susana Sane                                           
                                                </h6>
                                                <p className="mb-1 text-muted contact-mail text-truncate">susanasanee2134@gmail.com</p>
                                                <p className="fw-semibold mb-2 text-primary">
                                                    847 Products
                                                </p>
                                                <div className="btn-list">
                                                    <Button variant="" className="btn btn-sm btn-light">
                                                        <i className="ri-user-add-line me-1"></i>Follow Back
                                                    </Button>
                                                    <Button variant="" className="btn btn-sm btn-danger-light">
                                                        <i className="ri-close-fill me-1"></i>Cancel
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth" className="border-0 p-0" id="Followers-tab" role="tabpanel">
                <div className="row">
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top ">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/2.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">                                                            
                                                        Susana Sane                                           
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">susanasanee2134@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        847 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="danger-light" className="btn btn-sm">
                                                            <i className="ri-user-forbid-line me-1"></i>Block
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-unfollow-line me-1"></i>Un Follow
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top ">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/21.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">                                                            
                                                        Shane Watson                                          
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">shanewatson@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        812 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="danger-light" className="btn btn-sm">
                                                            <i className="ri-user-forbid-line me-1"></i>Block
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-unfollow-line me-1"></i>Un Follow
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top ">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/15.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">
                                                        Simon Cowall
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">simoncowal111@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        567 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="danger-light" className="btn btn-sm">
                                                            <i className="ri-user-forbid-line me-1"></i>Block
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-unfollow-line me-1"></i>Un Follow
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top ">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/1.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">                                                            
                                                        Melissa Jane                                            
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">melissajane2134@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        347 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="danger-light" className="btn btn-sm">
                                                            <i className="ri-user-forbid-line me-1"></i>Block
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-unfollow-line me-1"></i>Un Follow
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top ">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/9.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">
                                                        Simon Cowall
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">simoncowal111@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        567 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="danger-light" className="btn btn-sm">
                                                            <i className="ri-user-forbid-line me-1"></i>Block
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-unfollow-line me-1"></i>Un Follow
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top ">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/10.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">                                                            
                                                        Melissa Jane                                            
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">melissajane2134@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        347 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="danger-light" className="btn btn-sm">
                                                            <i className="ri-user-forbid-line me-1"></i>Block
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-unfollow-line me-1"></i>Un Follow
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top ">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/5.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">                                                            
                                                        Devon Convoy                                         
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">devonconvoy@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        345 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="danger-light" className="btn btn-sm">
                                                            <i className="ri-user-forbid-line me-1"></i>Block
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-unfollow-line me-1"></i>Un Follow
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top ">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/6.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">                                                            
                                                        Umag Anige                                        
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">umaganigel89@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        456 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="danger-light" className="btn btn-sm">
                                                            <i className="ri-user-forbid-line me-1"></i>Block
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-unfollow-line me-1"></i>Un Follow
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body className="contact-action">
                                        <div className="contact-overlay"></div>
                                        <div className="d-flex align-items-top ">
                                            <div className="d-flex flex-fill flex-wrap gap-2">
                                                <div className="avatar avatar-xl avatar-rounded">
                                                    <img src="../../assets/images/faces/11.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-1 fw-semibold">                                                            
                                                        Susana Sane                                           
                                                    </h6>
                                                    <p className="mb-1 text-muted contact-mail text-truncate">susanasanee2134@gmail.com</p>
                                                    <p className="fw-semibold mb-2 text-primary">
                                                        847 Products
                                                    </p>
                                                    <div className="btn-list">
                                                        <Button variant="danger-light" className="btn btn-sm">
                                                            <i className="ri-user-forbid-line me-1"></i>Block
                                                        </Button>
                                                        <Button variant="" className="btn btn-sm btn-light">
                                                            <i className="ri-user-unfollow-line me-1"></i>Un Follow
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!"><i className="ri-heart-3-line fs-16 text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>
                </Tab.Pane>
                <Tab.Pane eventKey="sixth" className="border-0 p-0" id="settings-tab" role="tabpanel">
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title className="">
                                Account Settings
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-5">
                                <Col xl={12}>
                                    <h6 className="mb-3 fw-semibold text-primary">General Settings :</h6>
                                    <div className="row mb-4">
                                        <Col xl={3}>
                                            <span className="fs-14 fw-semibold mb-0">Account Type :</span>
                                            <p className="fs-12 mb-0 text-muted">Select the account type</p>
                                        </Col>
                                        <Col xl={9}>
                                        <Select name="colors" options={Accounttype} className="basic-multi-select"
                                            menuPlacement='auto' classNamePrefix="Select2"  defaultValue={[Accounttype[0]]}
                                        />
                                        </Col>
                                    </div>
                                    <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                                        <div>
                                            <p className="fs-14 mb-1 fw-semibold">Two Step Verification</p>
                                            <p className="fs-12 text-muted mb-0">Two step verificatoin is very secured and restricts in happening faulty practices.</p>
                                        </div>
                                        <div className="custom-toggle-switch toggle-sm ms-sm-2 ms-0"> 
                                            <input id="two-step" name="toggleswitchsize" type="checkbox" defaultChecked/> 
                                            <label htmlFor="two-step" className="label-primary mb-1"></label>
                                        </div>
                                    </div>
                                    <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                                        <div>
                                            <p className="fs-14 mb-1 fw-semibold">Recovery Mail</p>
                                            <p className="fs-12 text-muted mb-0">Incase of forgetting password mails are sent to  heifo@gmail.com</p>
                                        </div>
                                        <div className="custom-toggle-switch toggle-sm ms-sm-2 ms-0"> 
                                            <input id="recovery-mail" name="toggleswitchsize" type="checkbox" defaultChecked/> 
                                            <label htmlFor="recovery-mail" className="label-primary mb-1"></label>
                                        </div>
                                    </div>
                                    <div className="d-sm-flex d-block align-items-top justify-content-between">
                                        <div>
                                            <p className="fs-14 mb-1 fw-semibold">SMS Recovery</p>
                                            <p className="fs-12 text-muted mb-0">SMS are sent to 9102312xx in case of recovery</p>
                                        </div>
                                        <div className="custom-toggle-switch toggle-sm ms-sm-2 ms-0"> 
                                            <input id="sms-recovery" name="toggleswitchsize" type="checkbox" defaultChecked/> 
                                            <label htmlFor="sms-recovery" className="label-primary mb-1"></label>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <h6 className="mb-3 fw-semibold text-primary">Email Settings</h6>
                                    <Row>
                                        <Col sm={6} className="mb-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox"  id="itemupdate" defaultChecked/>
                                                <label className="form-check-label" htmlFor="itemupdate">
                                                    Item Update Notifications
                                                </label>
                                            </div>
                                        </Col>
                                        <Col sm={6} className="mb-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox"  id="itemcomment"/>
                                                <label className="form-check-label" htmlFor="itemcomment">
                                                    Item Comment Notifications
                                                </label>
                                            </div>
                                        </Col>
                                        <Col sm={6} className="mb-0">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox"  id="itemreview"/>
                                                <label className="form-check-label" htmlFor="itemreview">
                                                    Item Review Notifications
                                                </label>
                                            </div>
                                        </Col>
                                        <Col sm={6} className="mb-0">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox"  id="itembuyerreview" defaultChecked/>
                                                <label className="form-check-label" htmlFor="itembuyerreview">
                                                    Buyer Review Notifications
                                                </label>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={12}>
                                    <h6 className="mb-3 fw-semibold text-primary">Change Password</h6>
                                    <p className="fs-13">Password should be min of <b className="text-success fw-semibold">8 digits<sup>*</sup></b>,atleast <b className="text-success fw-semibold">One Capital letter<sup>*</sup></b> and <b className="text-success fw-semibold">One Special Character<sup>*</sup></b> included.</p>
                                    <Row>
                                        <Col sm={4} className="col-12 mb-2">
                                            <Form.Label htmlFor="current-password" className="form-label">Current Password</Form.Label>
                                            <Form.Control type="text" className="" id="current-password" placeholder="Current Password" />
                                        </Col>
                                        <Col sm={4} className="col-12 mb-2">
                                            <Form.Label htmlFor="new-password" className="form-label">New Password</Form.Label>
                                            <Form.Control type="text" className="" id="new-password" placeholder="New Password" />
                                        </Col>
                                        <Col sm={4} className="col-12 mb-0">
                                            <Form.Label htmlFor="confirm-password" className="form-label">Confirm Password</Form.Label>
                                            <Form.Control type="text" className="" id="confirm-password" placeholder="Confirm PAssword" />
                                        </Col>
                                    </Row>
                                </Col>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="float-end">
                                <Button variant="" className="btn btn-light m-1">
                                    Restore Defaults
                                </Button>
                                <Button variant="" className="btn btn-primary m-1">
                                    Save Changes
                                </Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Tab.Pane>
            </Tab.Content>
        </div>
    </section>
    </Tab.Container>
    {/* End:: Section-1 */}

    {/* Start:: Section-2 */}
    <section className="section bg-banner px-lg-0 px-4">
        <Row className="justify-content-center">
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
        </Row>
    </section>
    {/* End:: Section-2 */}
    </Fragment>
    )
};

export default User;