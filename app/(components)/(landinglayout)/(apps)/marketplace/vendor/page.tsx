"use client"
import { Accountdata, Companydata, Compatibledata, Featuredata, Featureddata, Filesdata, Industrydata, Itemdata, Tagsdata } from "@/shared/data/apps/marketplace/marketvendordata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Dropdown, Form, Nav, Pagination, ProgressBar, Tab } from "react-bootstrap";
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
const Select = dynamic(() => import("react-select"), { ssr: false });
const Vendor = () => {
    //Filepond 
    const [files, setFiles] = useState<any>([]);
return ( 
    <Fragment>
        {/* Start:: Breadcrumb*/}
        <div className="border-bottom border-top py-3">
            <div className="container">
            {/* Page Header */}
                <Seo title={"Vendor"} />
                <Pageheader Heading="" Pagetitle={true} Pages={[{title:"Apps", active:true}, {title:"Marketplace", active:true}, {title:"Vendor", active:false},]} />
            {/* Page Header Close */}
            </div>
        </div>
        {/* End:: Breadcrumb*/}

        {/* Start:: Landing Banner */}
        <div className="landing-banner">
            <section className="py-5">
                <div className="container main-banner-container">
                    <div className="row gy-2">
                        <div className="col-lg-9 col-md-8">
                            <div className="d-flex align-items-center flex-wrap gap-3">
                                <div>
                                    <span className="marketplace-company-icon">
                                    <img src="../../assets/images/company-logos/1.png" alt="" />
                                    </span>
                                </div>
                                <div>
                                    <h4 className="fw-semibold mb-0 d-flex align-items-center"><a href="#!"> sprukotechnologies</a></h4>
                                    <p className="mb-2">Member Since <span className="fw-semibold">2005</span></p>
                                    <div className="d-flex align-items-center fs-14 mb-2 flex-wrap gap-3">
                                        <p className="fs-15 fw-semibold mb-0">Customer Ratings : </p>
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
                                    <span className="badge badge-md bg-info-transparent"><i className="bi bi-bar-chart-fill me-2"></i>156 Sales</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 my-md-auto text-md-end">
                            <div className="btn-list">
                                <Link scroll={false} href="#!" className="btn btn-lg btn-w-lg btn-primary">View Portfolio</Link>
                                <Link scroll={false} href="#!" className="btn btn-icon btn-lg btn-secondary-light btn-wave">
                                    <i className="ri-share-line"></i>
                                </Link>
                            </div>
                        </div>
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
                        <Nav.Link eventKey="second" href="#allproducts-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">All Products</Nav.Link>
                    </Nav.Item>
                    <Nav.Item role="presentation">
                        <Nav.Link eventKey="third" href="#upload-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">Upload Item</Nav.Link>
                    </Nav.Item>
                    <Nav.Item role="presentation">
                        <Nav.Link eventKey="fourth" href="#purchased-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">Downloads</Nav.Link>
                    </Nav.Item>
                    <Nav.Item role="presentation">
                        <Nav.Link eventKey="fifth" href="#settings-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">Settings</Nav.Link>
                    </Nav.Item>
                </Nav> 
            </div>
        </div>
        {/* End:: Nav Tabs*/}

        {/* Start:: Section-1 */}
        <section className="section py-4 bg-white">
            <div className="container"> 
                <Tab.Content className="">
                    <Tab.Pane eventKey="first" className="border-0 p-0 show" id="Profile-tab" role="tabpanel"> 
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title className="flex-fill">
                                Basic Information
                                </Card.Title>
                                <div>
                                    <p className="fw-semibold mb-2">Profile 60% completed - <Link scroll={false} href="#!" className="text-primary fs-12">Finish now</Link></p>
                                    <ProgressBar className="progress progress-xs progress-animate" variant="primary" now={60} />
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="row gy-4 mb-4">
                                    <Col xl={6}>
                                        <Form.Label htmlFor="vendor-name">Vendor Name</Form.Label>
                                        <Form.Control type="text"  id="vendor-name" placeholder="vendor Name" defaultValue="Jack Miller"/>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="vendor-username">Vendor Username</Form.Label> 
                                        <Form.Control type="text"  id="vendor-username" placeholder="Vendor username" defaultValue="sprukotechnologies"/>
                                    </Col> 
                                    <Col xl={6}>
                                        <Form.Label htmlFor="company-name">Company Name</Form.Label>
                                        <Form.Control type="text"  id="company-name" placeholder="Company Name" defaultValue="Spruko Technologies PRIVATE LIMITED"/>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="company-website">Company Website</Form.Label> 
                                        <Form.Control type="text"  id="company-website" placeholder="Company Website" defaultValue="https://spruko.com"/>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="email-address">Email Address :</Form.Label>
                                        <Form.Control type="text"  id="email-address" placeholder="xyz@gmail.com" defaultValue="json@gmail.com"/>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="featured-select">Featured Item :</Form.Label>
                                        <Select name="colors" options={Featureddata} className="basic-multi-select"
                                            menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Featureddata[0]]}
                                        />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="phone-number" className="form-label">Mobile Number :</Form.Label>
                                        <input type="text" className="form-control" id="phone-number" placeholder="*** *** ****" defaultValue="65432 76765"/>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="Establishment-year" className="form-label">Establishment Year :</Form.Label>
                                        <input type="text" className="form-control" id="Establishment-year" placeholder="Establishment Year" defaultValue="2019"/>
                                    </Col>
                                </div>
                                <div className="row gy-4"> 
                                    <Col xl={6}>
                                        <Form.Label htmlFor="country-select" className="form-label">Industry Type :</Form.Label>
                                        <Select name="colors" options={Industrydata} className="basic-multi-select"
                                            menuPlacement='auto' classNamePrefix="Select2" 
                                        />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="country-select2" className="form-label">Company Size :</Form.Label>
                                        <Select name="colors" options={Companydata} className="basic-multi-select"
                                            menuPlacement='auto' classNamePrefix="Select2" 
                                        />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="Address" className="form-label">Address :</Form.Label>
                                        <Form.Control type="text"  id="Address" placeholder="Address" defaultValue="USA"/>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="zip-code" className="form-label">Zip Code :</Form.Label>
                                        <Form.Control type="text"  id="zip-code" placeholder="Zip Code" defaultValue="1234"/>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="facebook" className="form-label">Facebook :</Form.Label>
                                        <Form.Control type="text"  id="facebook" placeholder="https://" defaultValue="https://www.facebook.com"/>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="Twitter" className="form-label">Twitter :</Form.Label>
                                        <Form.Control type="text"  id="Twitter" placeholder="https://" defaultValue="https://twitter.com"/> 
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="Pinterest" className="form-label">Pinterest:</Form.Label>
                                        <Form.Control type="text"  id="Pinterest" placeholder="https://" defaultValue="https://in.pinterest.com"/>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="Linkedin" className="form-label">Linkedin :</Form.Label>
                                        <Form.Control type="text"  id="Linkedin" placeholder="https://" defaultValue="https://www.linkedin.com"/>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="formFile" className="form-label">Company Banner Image :</Form.Label>
                                        <Form.Control  type="file" id="formFile"/>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="formFile2" className="form-label">Company Logo :</Form.Label>
                                        <Form.Control  type="file" id="formFile2"/>
                                    </Col>
                                    <Col xl={12}>                                            
                                        <div className="mb-3">
                                            <span className="avatar avatar-lg avatar-rounded">
                                                <img src="../../assets/images/faces/9.jpg" alt="" className="w-100 h-100"/>
                                                <Link scroll={false} href="#!" className="badge rounded-pill bg-danger avatar-badge"><i className="fe fe-x"></i></Link>
                                            </span>
                                        </div>
                                        <div className="btn-list">
                                            <input className="form-control" type="file" id="formFile3"/>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Label htmlFor="bio" className="form-label">About Company :</Form.Label>
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
                    <Tab.Pane eventKey="second" className="border-0 p-0" id="allproducts-tab" role="tabpanel">
                        <Card className="custom-card">
                            <div className="card-header justify-content-between">
                                <Card.Title>
                                    All Products
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
                            </div>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <table className="table table-hover text-nowrap">
                                        <thead>
                                            <tr>
                                                <th className="ps-4"><Form.Check type="checkbox" id="checkboxNoLabelproducts1"  aria-label="..."/></th>
                                                <th scope="col">Product Name</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Sell</th>
                                                <th scope="col">Published Date</th>
                                                <th scope="col">Featured</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="ps-4"><Form.Check type="checkbox" id="checkboxNoLabelproducts2"  aria-label="..."/></td>
                                                <td>
                                                    <div className="d-flex"> 
                                                        <span className="avatar avatar-md avatar-square"><img src="../../assets/images/marketplace/new-arrivals/1.png" className="w-100 h-100" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">HTML Template</a></p>
                                                            <p className="fs-12 text-muted mb-0">4-Bds - 4 Ba - 600ff3</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    HTML
                                                </td>
                                                <td><span className="badge rounded-pill badge-sm bg-success-transparent">Approved</span></td>
                                                <td>
                                                    30 Sales
                                                </td>
                                                <td>03 Sep 2022</td>
                                                <td><span className="badge rounded-pill badge-sm bg-success-transparent">Yes</span></td>
                                                <td>$15,000</td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Button>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                                                        <i className="ri-edit-line"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ps-4"><Form.Check type="checkbox" id="checkboxNoLabelproducts3"  aria-label="..." defaultChecked/></td>
                                                <td>
                                                    <div className="d-flex"> 
                                                        <span className="avatar avatar-md avatar-square"><img src="../../assets/images/marketplace/new-arrivals/2.png" className="w-100 h-100" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">React Template</a></p>
                                                            <p className="fs-12 text-muted mb-0">4-Bds - 4 Ba - 600ff3</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    React
                                                </td>
                                                <td><span className="badge rounded-pill badge-sm bg-danger-transparent">Rejected</span></td>
                                                <td>
                                                    0 Sales
                                                </td>
                                                <td>16 Nov 2022</td>
                                                <td><span className="badge rounded-pill badge-sm bg-danger-transparent">No</span></td>
                                                <td>$16,000</td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Button>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                                                        <i className="ri-edit-line"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ps-4"><Form.Check type="checkbox" id="checkboxNoLabelproducts4"  aria-label="..." defaultChecked/></td>
                                                <td>
                                                    <div className="d-flex"> 
                                                        <span className="avatar avatar-md avatar-square"><img src="../../assets/images/marketplace/new-arrivals/3.png" className="w-100 h-100" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">PHP Template</a></p>
                                                            <p className="fs-12 text-muted mb-0">4-Bds - 4 Ba - 600ff3</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    PHP
                                                </td>
                                                <td><span className="badge rounded-pill badge-sm bg-warning-transparent">Waiting for Approval</span></td>
                                                <td>
                                                    0 Sales
                                                </td>
                                                <td>17 Jan 2024</td>
                                                <td><span className="badge rounded-pill badge-sm bg-success-transparent">Yes</span></td>
                                                <td>$32,000</td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Button>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                                                        <i className="ri-edit-line"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ps-4"><Form.Check type="checkbox" id="checkboxNoLabelproducts5"  aria-label="..."/></td>
                                                <td>
                                                    <div className="d-flex"> 
                                                        <span className="avatar avatar-md avatar-square"><img src="../../assets/images/marketplace/new-arrivals/4.png" className="w-100 h-100" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">Angular Template</a></p>
                                                            <p className="fs-12 text-muted mb-0">4-Bds - 4 Ba - 600ff3</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Angular
                                                </td>
                                                <td><span className="badge rounded-pill badge-sm bg-success-transparent">Approved</span></td>
                                                <td>
                                                    123 Sales
                                                </td>
                                                <td>23 Dec 2022</td>
                                                <td><span className="badge rounded-pill badge-sm bg-danger-transparent">No</span></td>
                                                <td>$26,000</td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Button>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                                                        <i className="ri-edit-line"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                            <Card.Footer className="border-top-0">
                                <div className="d-flex align-items-center flex-wrap overflow-auto">
                                    <div className="mb-2 mb-sm-0">
                                        Showing <b>1</b> to <b>4</b> of <b>10</b> entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                    </div>
                                    <div className="ms-auto">
                                        <Pagination className="mb-0 overflow-auto">
                                            <Pagination.Item disabled>Previous
                                            </Pagination.Item>
                                            <Pagination.Item active>1</Pagination.Item>
                                            <Pagination.Item>2</Pagination.Item>
                                            <Pagination.Item>3</Pagination.Item>
                                            <Pagination.Item>4</Pagination.Item>
                                            <Pagination.Item>5</Pagination.Item>
                                            <Pagination.Item className="pagination-next">Next</Pagination.Item>
                                        </Pagination>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third" className="border-0 p-0" id="upload-tab" role="tabpanel">
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Upload A Item
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="row gy-4"> 
                                    <Col xl={6}>
                                        <Form.Label htmlFor="item-name" className="">Item Name</Form.Label>
                                        <Form.Control type="text" className="" id="item-name" placeholder="Item Name" defaultValue="HTML Modern Template"/>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label>Item Category</Form.Label>
                                        <Select name="colors" options={Itemdata} className="basic-multi-select"
                                            menuPlacement='auto' classNamePrefix="Select2" 
                                        />
                                    </Col> 
                                    <Col xl={6}>
                                        <Form.Label>Featured</Form.Label>
                                        <Select name="colors" options={Featuredata} className="basic-multi-select"
                                            menuPlacement='auto' classNamePrefix="Select2" 
                                        />
                                    </Col> 
                                    <Col xl={6}>
                                        <Form.Label>Compatible Browsers</Form.Label> 
                                        <Select isMulti name="colors" options={Compatibledata} className="basic-multi-select"
                                            menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Compatibledata[0], Compatibledata[1]]}
                                        />
                                    </Col>  
                                    <Col xl={6}>
                                        <Form.Label>Files Included</Form.Label>
                                        <Select isMulti name="colors" options={Filesdata} className="basic-multi-select"
                                            menuPlacement='auto' classNamePrefix="Select2"  defaultValue={[Filesdata[0], Filesdata[1]]}
                                        />
                                    </Col>  
                                    <Col xl={6}>
                                        <label htmlFor="Price" className="form-label">Price</label>
                                        <input type="text" className="form-control" id="Price" placeholder="Price" defaultValue="$3654"/>
                                    </Col>
                                    <Col xl={6}>
                                        <label htmlFor="tags" className="form-label">Tags</label> 
                                        <Select isMulti name="colors" options={Tagsdata} className="basic-multi-select"
                                            menuPlacement='auto' classNamePrefix="Select2"   defaultValue={[Tagsdata[0], Tagsdata[1]]}
                                        />
                                    </Col>
                                    <Col xl={6}>
                                        <label className="form-label">High Resolution</label> 
                                        <Select name="colors" options={Featuredata} className="basic-multi-select"
                                            menuPlacement='auto' classNamePrefix="Select2" 
                                        />
                                    </Col> 
                                    <Col xl={12}>
                                        <label htmlFor="Address" className="form-label">Upload Image</label> 
                                        <FilePond
                                        files={files}
                                        onupdatefiles={setFiles}
                                        allowMultiple={true}
                                        maxFiles={3}
                                        server="/api"
                                        name="files"
                                        labelIdle='Drag & Drop your file here or click '
                                    />
                                    </Col>
                                    <Col xl={12}>
                                        <label htmlFor="bio" className="form-label">Item Description :</label>
                                        <Form.Control as="textarea" className="form-control" id="Ad-description" rows={7} defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!"></Form.Control>
                                    </Col>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="float-end">
                                    <Button variant="" className="btn btn-primary">
                                        Upload Item
                                    </Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth" className="border-0 p-0" id="purchased-tab" role="tabpanel">
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    Downloads
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
                                            <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">This Year</Dropdown.Item></li>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>Order ID</th>
                                                <th>Product Name</th>
                                                <th>Customer</th>
                                                <th>Status</th>
                                                <th>Download Date</th>
                                                <th>Licence</th>
                                                <th>Price</th>
                                                <th>Action</th>
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
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">HTML Template</a></p>
                                                            <p className="badge badge-sm bg-light border text-muted mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Category">HTML</p>
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
                                                    <span className="badge rounded-pill badge-sm bg-success-transparent">Downloaded</span>
                                                </td>
                                                <td>03 Jan 2022</td>
                                                <td>
                                                    <span className="badge rounded-pill badge-sm bg-success-transparent">Regular</span>
                                                </td>
                                                <td className="fw-semibold">$56</td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-outline-light btn-wave waves-effect waves-light">
                                                        <i className="fe fe-eye text-muted me-1 d-inline-flex align-items-center"></i>
                                                        View
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
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">React Template</a></p>
                                                            <p className="badge badge-sm bg-light border text-muted mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Category">React</p>
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
                                                    <span className="badge rounded-pill badge-sm bg-danger-transparent">Refund</span>
                                                </td>
                                                <td>12 Feb 2022</td>
                                                <td>
                                                    <span className="badge rounded-pill badge-sm bg-warning-transparent">Extended</span>
                                                </td>
                                                <td className="fw-semibold">$34</td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-outline-light btn-wave waves-effect waves-light">
                                                        <i className="fe fe-eye text-muted me-1 d-inline-flex align-items-center"></i>
                                                        View
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
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">PHP Template</a></p>
                                                            <p className="badge badge-sm bg-light border text-muted mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Category">PHP</p>
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
                                                    <span className="badge rounded-pill badge-sm bg-success-transparent">Downloaded</span>
                                                </td>
                                                <td>23 Mar 2022</td>
                                                <td>
                                                    <span className="badge rounded-pill badge-sm bg-success-transparent">Regular</span>
                                                </td>
                                                <td className="fw-semibold">$46</td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-outline-light btn-wave waves-effect waves-light">
                                                        <i className="fe fe-eye text-muted me-1 d-inline-flex align-items-center"></i>
                                                        View
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
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">Angular Template</a></p>
                                                            <p className="badge badge-sm bg-light border text-muted mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Category">Angular</p>
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
                                                    <span className="badge rounded-pill badge-sm bg-danger-transparent">Refund</span>
                                                </td>
                                                <td>25 Apr 2022</td>
                                                <td>
                                                    <span className="badge rounded-pill badge-sm bg-success-transparent">Regular</span>
                                                </td>
                                                <td className="fw-semibold">$52</td>
                                                <td>
                                                    <Button variant="" className="btn btn-sm btn-outline-light btn-wave waves-effect waves-light">
                                                        <i className="fe fe-eye text-muted me-1 d-inline-flex align-items-center"></i>
                                                        View
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
                                        <Pagination className="mb-0 overflow-auto">
                                            <Pagination.Item disabled>Previous</Pagination.Item>
                                            <Pagination.Item active>1</Pagination.Item>
                                            <Pagination.Item>2</Pagination.Item>
                                            <Pagination.Item>3</Pagination.Item>
                                            <Pagination.Item>4</Pagination.Item>
                                            <Pagination.Item>5</Pagination.Item>
                                            <Pagination.Item className="pagination-next">Next</Pagination.Item>
                                        </Pagination>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth" className="border-0 p-0" id="settings-tab" role="tabpanel">
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
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
                                                <Select name="colors" options={Accountdata} className="basic-multi-select"
                                            menuPlacement='auto' classNamePrefix="Select2"
                                        />
                                            </Col>
                                        </div>
                                        <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                                            <div>
                                                <p className="fs-14 mb-1 fw-semibold">Two Step Verification</p>
                                                <p className="fs-12 text-muted mb-0">Two step verificatoin is very secured and restricts in happening faulty practices.</p>
                                            </div>
                                            <div className="custom-toggle-switch toggle-sm ms-sm-2 ms-0"> 
                                                <input id="two-step" name="toggleswitchsize" type="checkbox" defaultChecked /> 
                                                <label htmlFor="two-step" className="label-primary mb-1"></label>
                                            </div>
                                        </div>
                                        <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                                            <div>
                                                <p className="fs-14 mb-1 fw-semibold">Recovery Mail</p>
                                                <p className="fs-12 text-muted mb-0">Incase of forgetting password mails are sent to  heifo@gmail.com</p>
                                            </div>
                                            <div className="custom-toggle-switch toggle-sm ms-sm-2 ms-0"> 
                                                <input id="recovery-mail" name="toggleswitchsize" type="checkbox" defaultChecked /> 
                                                <label htmlFor="recovery-mail" className="label-primary mb-1"></label>
                                            </div>
                                        </div>
                                        <div className="d-sm-flex d-block align-items-top justify-content-between">
                                            <div>
                                                <p className="fs-14 mb-1 fw-semibold">SMS Recovery</p>
                                                <p className="fs-12 text-muted mb-0">SMS are sent to 9102312xx in case of recovery</p>
                                            </div>
                                            <div className="custom-toggle-switch toggle-sm ms-sm-2 ms-0"> 
                                                <input id="sms-recovery" name="toggleswitchsize" type="checkbox" defaultChecked /> 
                                                <label htmlFor="sms-recovery" className="label-primary mb-1"></label>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <h6 className="mb-3 fw-semibold text-primary">Email Settings</h6>
                                        <div className="row">
                                            <div className="col-sm-6 mb-2">
                                                <div className="form-check">
                                                    <Form.Check type="checkbox"  id="itemupdate" defaultChecked />
                                                    <label className="form-check-label" htmlFor="itemupdate">
                                                        Item Update Notifications
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 mb-2">
                                                <div className="form-check">
                                                    <Form.Check type="checkbox"  id="itemcomment" />
                                                    <label className="form-check-label" htmlFor="itemcomment">
                                                        Item Comment Notifications
                                                    </label>
                                                </div>
                                            </div>
                                            <Col sm={6} className="mb-0">
                                                <div className="form-check">
                                                    <Form.Check type="checkbox"  id="itemreview" />
                                                    <label className="form-check-label" htmlFor="itemreview">
                                                        Item Review Notifications
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col sm={6} className="mb-0">
                                                <div className="form-check">
                                                    <Form.Check type="checkbox"  id="itembuyerreview" defaultChecked />
                                                    <label className="form-check-label" htmlFor="itembuyerreview">
                                                        Buyer Review Notifications
                                                    </label>
                                                </div>
                                            </Col>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <h6 className="mb-3 fw-semibold text-primary">Change Password</h6>
                                        <p className="fs-13">Password should be min of <b className="text-success fw-semibold">8 digits<sup>*</sup></b>,atleast <b className="text-success fw-semibold">One Capital letter<sup>*</sup></b> and <b className="text-success fw-semibold">One Special Character<sup>*</sup></b> included.</p>
                                        <div className="row">
                                            <Col sm={4} className="mb-2">
                                                <Form.Label htmlFor="current-password" className="form-label">Current Password</Form.Label>
                                                <Form.Control type="text" className="form-control" id="current-password" placeholder="Current Password" />
                                            </Col>
                                            <Col sm={4} className="mb-2">
                                                <Form.Label htmlFor="new-password" className="form-label">New Password</Form.Label>
                                                <Form.Control type="text" className="form-control" id="new-password" placeholder="New Password" />
                                            </Col>
                                            <div className="col-sm-4 mb-0">
                                                <Form.Label htmlFor="confirm-password" className="form-label">Confirm Password</Form.Label>
                                                <Form.Control type="text" className="form-control" id="confirm-password" placeholder="Confirm PAssword" />
                                            </div>
                                        </div>
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
        {/* End:: Section-1 */}
        </Tab.Container>

        {/* Start:: Section-2 */}
        <section className="section bg-banner px-lg-0 px-4">
            <div className="row justify-content-center">
                <div className="col-lg-7 text-center">
                    <div className="mb-4">
                        <h3 className="fw-semibold mb-2 text-fixed-white">&#128073; Browse the top template to build the awesome applications</h3>
                    </div>
                    <h6 className="mb-4 op-9 text-fixed-white">Labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore..</h6>
                    <div className="btn-list">
                        <Link scroll={false} href="/marketplace/search/" className="btn btn-lg btn-light"><i className="bi bi-search me-1"></i> Search Products</Link>
                        <Link scroll={false} href="#!" className="btn btn-lg btn-danger"><i className="bi bi-send me-1"></i> Signup Now</Link>
                    </div>
                </div>
            </div>
        </section>
        {/* End:: Section-2 */}
    </Fragment>
    )
};

export default Vendor;