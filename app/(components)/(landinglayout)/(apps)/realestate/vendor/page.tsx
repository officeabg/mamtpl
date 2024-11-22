"use client"
import { Accountdata, Amenitiesdata, Bedroomsdata, Categorydata, Propertyaddress, Propertydata, VendorType } from "@/shared/data/apps/realestate/realestatevendordata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Dropdown, Form, Nav, Pagination, ProgressBar, Row, Tab } from "react-bootstrap";
const Select = dynamic(() => import("react-select"), { ssr: false });
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
const Vendor = () => {
    //Filepond 
    const [files, setFiles] = useState<any>([]);
return ( 
    <Fragment>
        {/*  Start:: Breadcrumb*/}
        <div className="border-bottom border-top py-3 bg-white">
            <div className="container">
                {/* Page Header */}
                    <Seo title={"Vendor"} />
                    <Pageheader Heading="" Pagetitle={true} Pages={[{title:"Apps", active:true}, {title:"Real Estate", active:true}, {title:"Vendor", active:false},]} />
                {/* Page Header Close */}
            </div>
        </div>
        {/*  End:: Breadcrumb*/}

        {/*  Start:: Landing Banner */}
        <div className="landing-banner">
            <section className="py-5">
                <div className="container main-banner-container">
                    <div className="row gy-2">
                        <div className="col-lg-8 col-md-8">
                            <div className="d-flex align-items-center flex-wrap gap-3">
                                <div>
                                    <span className="realestate-company-icon">
                                    <img src="../../assets/images/company-logos/1.png" alt="" />
                                    </span>
                                </div>
                                <div>
                                    <h4 className="fw-semibold mb-0 d-flex align-items-center"><a href="#!"> sprukotechnologies</a></h4>
                                    <p className="mb-2">Member Since <span className="fw-semibold">2005</span></p>
                                    <div className="d-flex align-items-center fs-14 flex-wrap ap-2">
                                        <p className="fs-15 fw-semibold mb-0">Customer Ratings : </p>
                                        <div className="min-w-fit-content">
                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
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
                                </div>
                            </div>
                        </div>
                        <Col lg={4} ms={4} className="col-lg-4 col-md-4 my-md-auto">
                            <div className="row gy-2">
                                <Col lg={6}>
                                    <div className="p-2 bg-primary-transparent rounded d-flex gap-2 align-items-center">
                                        <span className="avatar avatar-sm bg-primary rounded-circle">
                                            <i className="bi bi-building"></i>
                                        </span>
                                        <p className="mb-0 fw-semibold">156 Properties</p>
                                    </div>
                                </Col> 
                                <Col lg={6}>
                                    <div className="p-2 bg-secondary-transparent rounded d-flex gap-2 align-items-center">
                                        <span className="avatar avatar-sm bg-secondary rounded-circle">
                                            <i className="bi bi-bar-chart-fill"></i>
                                        </span>
                                        <p className="mb-0 fw-semibold">100 Sales</p>
                                    </div>
                                </Col> 
                            </div>
                        </Col>
                    </div>
                </div>
            </section> 
        </div>
        {/*  End:: Landing Banner */}

        <Tab.Container defaultActiveKey="first">
            {/*  Start:: Nav Tabs*/}
            <div className="border-bottom bg-white">
                <div className="container">
                    <Nav className="nav-tabs tab-style-8 scaleX custom-nav-tabs" id="myTab" role="tablist">
                        <Nav.Item role="presentation">
                            <Nav.Link eventKey="first" href="#Profile-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="true" role="tab">My Profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item role="presentation">
                            <Nav.Link eventKey="second" href="#allproperties-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">All Properties</Nav.Link>
                        </Nav.Item>
                        <Nav.Item role="presentation">
                            <Nav.Link eventKey="third" href="#addproperty-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">Add Property</Nav.Link>
                        </Nav.Item>
                        <Nav.Item role="presentation">
                            <Nav.Link eventKey="fourth" href="#pending-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">Pending Approved</Nav.Link>
                        </Nav.Item>
                        <Nav.Item role="presentation">
                            <Nav.Link eventKey="fifth" href="#settings-tab" className="nav-link p-3" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">Settings</Nav.Link>
                        </Nav.Item>
                    </Nav> 
                </div>
            </div>
            {/*  End:: Nav Tabs*/}

            {/*  Start:: Section-1 */}
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
                                        <ProgressBar className="progress progress-xs progress-animate" variant="primary" now={60} />
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="row gy-4 mb-4">
                                        <Col xl={6}>
                                            <Form.Label htmlFor="vendor-name">Vendor Name</Form.Label>
                                            <Form.Control type="text" id="vendor-name" placeholder="vendor Name" defaultValue="Jack Miller"/>
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="vendor-username">Vendor Username</Form.Label> 
                                            <Form.Control type="text" id="vendor-username" placeholder="Vendor username" defaultValue="sprukotechnologies"/>
                                        </Col> 
                                        <Col xl={6}>
                                            <Form.Label htmlFor="company-name">Company Name</Form.Label>
                                            <Form.Control type="text" id="company-name" placeholder="Company Name" defaultValue="Spruko Technologies PRIVATE LIMITED"/>
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="company-website">Company Website</Form.Label> 
                                            <Form.Control type="text" id="company-website" placeholder="Company Website" defaultValue="https://spruko.com"/>
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="email-address">Email Address :</Form.Label>
                                            <Form.Control type="text" id="email-address" placeholder="xyz@gmail.com" defaultValue="json@gmail.com"/>
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="Category-select">Category :</Form.Label>
                                            <Select name="colors" options={Categorydata} className="basic-multi-select"
                                                        menuPlacement='auto' classNamePrefix="Select2" 
                                                    />
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="phone-number" className="form-label">Mobile Number :</Form.Label>
                                            <Form.Control id="phone-number" placeholder="*** *** ****" defaultValue="65432 76765"/>
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="establishment-year" className="form-label">Establishment Year :</Form.Label>
                                            <Form.Control id="establishment-year" placeholder="Establishment Year" defaultValue="2019"/>
                                        </Col>
                                    </div>
                                    <div className="row gy-4"> 
                                        <Col xl={6}>
                                            <Form.Label htmlFor="Address" className="form-label">Address :</Form.Label>
                                            <Form.Control id="Address" placeholder="Address" defaultValue="USA"/>
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="zip-code" className="form-label">Zip Code :</Form.Label>
                                            <Form.Control id="zip-code" placeholder="Zip Code" defaultValue="1234"/>
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="facebook" className="form-label">Facebook :</Form.Label>
                                            <Form.Control id="facebook" placeholder="https://" defaultValue="https://www.facebook.com"/>
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="Twitter" className="form-label">Twitter :</Form.Label>
                                            <Form.Control id="Twitter" placeholder="https://" defaultValue="https://twitter.com"/> 
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="Pinterest" className="form-label">Pinterest:</Form.Label>
                                            <Form.Control id="Pinterest" placeholder="https://" defaultValue="https://in.pinterest.com"/>
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="Linkedin" className="form-label">Linkedin :</Form.Label>
                                            <Form.Control id="Linkedin" placeholder="https://" defaultValue="https://www.linkedin.com"/>
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
                        <Tab.Pane eventKey="second" className="border-0 p-0" id="allproperties-tab" role="tabpanel">
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        All Properties
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
                                                <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <div className="table-responsive">
                                        <table className="table table-hover text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th scope="row" className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabelproducts1"  aria-label="..." /></th>
                                                    <th scope="col">Property Name</th>
                                                    <th scope="col">Category</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Type</th>
                                                    <th scope="col">Posted Date</th>
                                                    <th scope="col">Location</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabelproducts2"  aria-label="..." /></td>
                                                    <td>
                                                        <div className="d-flex"> 
                                                            <span className="avatar avatar-md avatar-square"><img src="../../assets/images/realestate/properties/2.png" className="h-100 w-100" alt="..." /></span>
                                                            <div className="ms-2">
                                                                <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">Duplex House</a></p>
                                                                <p className="fs-12 text-muted mb-0">5BHK Apartment</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        Luxury House
                                                    </td>
                                                    <td><span className="badge rounded-pill badge-sm bg-success-transparent">Active</span></td>
                                                    <td>
                                                        For Rent
                                                    </td>
                                                    <td>03 Sep 2022</td>
                                                    <td>
                                                        <div className="d-inline-flex align-items-center">
                                                            <i className="ri-map-pin-fill text-muted fs-12"></i>
                                                            <span className="ms-1">Germany</span>
                                                        </div>
                                                    </td>
                                                    <td className="fw-semibold">$15,000</td>
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
                                                    <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabelproducts3"  aria-label="..." defaultChecked/></td>
                                                    <td>
                                                        <div className="d-flex"> 
                                                            <span className="avatar avatar-md avatar-square"><img src="../../assets/images/realestate/properties/4.png" className="h-100 w-100" alt="..." /></span>
                                                            <div className="ms-2">
                                                                <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">Nature House</a></p>
                                                                <p className="fs-12 text-muted mb-0">3BHK Apartment</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        Garden Villa
                                                    </td>
                                                    <td><span className="badge rounded-pill badge-sm bg-danger-transparent">Expired</span></td>
                                                    <td>
                                                        For Sale
                                                    </td>
                                                    <td>16 Nov 2022</td>
                                                    <td>
                                                        <div className="d-inline-flex align-items-center">
                                                            <i className="ri-map-pin-fill text-muted fs-12"></i>
                                                            <span className="ms-1">Canada</span>
                                                        </div>
                                                    </td>
                                                    <td className="fw-semibold">$16,000</td>
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
                                                    <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabelproducts4"  aria-label="..." defaultChecked/></td>
                                                    <td>
                                                        <div className="d-flex"> 
                                                            <span className="avatar avatar-md avatar-square"><img src="../../assets/images/realestate/properties/6.png" className="h-100 w-100" alt="..." /></span>
                                                            <div className="ms-2">
                                                                <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">Riddi Houses</a></p>
                                                                <p className="fs-12 text-muted mb-0">2BHK Apartment</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        Commercial
                                                    </td>
                                                    <td><span className="badge rounded-pill badge-sm bg-warning-transparent">Pending</span></td>
                                                    <td>
                                                        For Rent
                                                    </td>
                                                    <td>17 Jan 2024</td>
                                                    <td>
                                                        <div className="d-inline-flex align-items-center">
                                                            <i className="ri-map-pin-fill text-muted fs-12"></i>
                                                            <span className="ms-1">Europe</span>
                                                        </div>
                                                    </td>
                                                    <td className="fw-semibold">$32,000</td>
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
                                                    <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabelproducts5"  aria-label="..." /></td>
                                                    <td>
                                                        <div className="d-flex"> 
                                                            <span className="avatar avatar-md avatar-square"><img src="../../assets/images/realestate/properties/5.png" className="h-100 w-100" alt="..." /></span>
                                                            <div className="ms-2">
                                                                <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">Sidh Houses</a></p>
                                                                <p className="fs-12 text-muted mb-0">4BHK Apartment</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        Flats
                                                    </td>
                                                    <td><span className="badge rounded-pill badge-sm bg-success-transparent">Active</span></td>
                                                    <td>
                                                        For Sale
                                                    </td>
                                                    <td>23 Dec 2022</td>
                                                    <td>
                                                        <div className="d-inline-flex align-items-center">
                                                            <i className="ri-map-pin-fill text-muted fs-12"></i>
                                                            <span className="ms-1">USA</span>
                                                        </div>
                                                    </td>
                                                    <td className="fw-semibold">$26,000</td>
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
                                                <Pagination.Item disabled>Previous</Pagination.Item>
                                                <Pagination.Item  active>1</Pagination.Item>
                                                <Pagination.Item >2</Pagination.Item>
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
                        <Tab.Pane eventKey="third" className="border-0 p-0" id="addproperty-tab" role="tabpanel">
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Add Property
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="row gy-4"> 
                                        <Col xl={6}>
                                            <label htmlFor="Property-name" className="form-label">Property Name</label>
                                            <input type="text" className="form-control" id="Property-name" placeholder="Property Name" defaultValue="Duplex House"/>
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label>Property Category</Form.Label> 
                                            <Select name="colors" options={Propertydata} className="basic-multi-select"
                                                    menuPlacement='auto' classNamePrefix="Select2" 
                                                />
                                        </Col> 
                                        <Col xl={6}>
                                            <Form.Label>Type</Form.Label>
                                            <Select name="colors" options={VendorType} className="basic-multi-select"
                                                    menuPlacement='auto' classNamePrefix="Select2" 
                                                />
                                        </Col> 
                                        <Col xl={6}>
                                            <Form.Label>Property Address</Form.Label>
                                            <Select name="colors" options={Propertyaddress} className="basic-multi-select"
                                                    menuPlacement='auto' classNamePrefix="Select2" 
                                                />
                                        </Col> 
                                        <Col xl={3}>
                                            <Form.Label>Bedrooms</Form.Label> 
                                            <Select name="colors" options={Bedroomsdata} className="basic-multi-select"
                                                    menuPlacement='auto' classNamePrefix="Select2" 
                                                />
                                        </Col> 
                                        <Col xl={3}>
                                            <Form.Label>Bathrooms</Form.Label> 
                                            <Select name="colors" options={Bedroomsdata} className="basic-multi-select"
                                                    menuPlacement='auto' classNamePrefix="Select2" 
                                                />
                                        </Col> 
                                        <Col xl={3}>
                                            <Form.Label>Floors</Form.Label> 
                                            <Select name="colors" options={Bedroomsdata} className="basic-multi-select"
                                                    menuPlacement='auto' classNamePrefix="Select2" 
                                                />
                                        </Col> 
                                        <Col xl={3}>
                                            <Form.Label htmlFor="Square-name" className="form-label">Square (m²)</Form.Label>
                                            <Form.Control type="text" id="Square-name" placeholder="Square (m²)"/>
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="Latitude-name" className="form-label">Latitude</Form.Label>
                                            <Form.Control type="text" id="Latitude-name" placeholder="Latitude"/>
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="Longitude-name" className="form-label">Longitude</Form.Label>
                                            <Form.Control type="text" id="Longitude-name" placeholder="Longitude"/>
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="amenities" className="form-label">Amenities</Form.Label> 
                                            <Select isMulti name="colors" options={Amenitiesdata} className="basic-multi-select"
                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Amenitiesdata[0], Amenitiesdata[1]]}
                                                />
                                        </Col> 
                                        <Col xl={6}>
                                            <Form.Label htmlFor="Price" className="form-label">Price</Form.Label>
                                            <Form.Control type="text" id="Price" placeholder="Price" defaultValue="$3654"/>
                                        </Col>
                                        <Col xl={12}>
                                            <Form.Label htmlFor="Address" className="form-label">Upload Image</Form.Label> 
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
                                            <Form.Label htmlFor="bio" className="form-label">Property Description :</Form.Label>
                                            <Form.Control as="textarea"  id="Ad-description" rows={7} defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!"></Form.Control>
                                        </Col>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="float-end">
                                        <Button variant="" className="btn btn-primary">
                                            Add Property
                                        </Button>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth" className="border-0 p-0" id="pending-tab" role="tabpanel">
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Sales
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
                                                <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <div className="table-responsive">
                                        <table className="table table-hover text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th scope="row" className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabelproducts6"  aria-label="..." /></th>
                                                    <th scope="col">Property Name</th>
                                                    <th scope="col">Category</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Type</th>
                                                    <th scope="col">Posted Date</th>
                                                    <th scope="col">Location</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabelproducts7"  aria-label="..." /></td>
                                                    <td>
                                                        <div className="d-flex"> 
                                                            <span className="avatar avatar-md avatar-square"><img src="../../assets/images/realestate/properties/2.png" className="h-100 w-100" alt="..." /></span>
                                                            <div className="ms-2">
                                                                <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">Duplex House</a></p>
                                                                <p className="fs-12 text-muted mb-0">5BHK Apartment</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        Luxury House
                                                    </td>
                                                    <td><span className="badge rounded-pill badge-sm bg-warning-transparent">Pending</span></td>
                                                    <td>
                                                        For Rent
                                                    </td>
                                                    <td>03 Sep 2022</td>
                                                    <td>
                                                        <div className="d-inline-flex align-items-center">
                                                            <i className="ri-map-pin-fill text-muted fs-12"></i>
                                                            <span className="ms-1">Germany</span>
                                                        </div>
                                                    </td>
                                                    <td className="fw-semibold">$15,000</td>
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
                                                    <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabelproducts8"  aria-label="..." defaultChecked/></td>
                                                    <td>
                                                        <div className="d-flex"> 
                                                            <span className="avatar avatar-md avatar-square"><img src="../../assets/images/realestate/properties/4.png" className="h-100 w-100" alt="..." /></span>
                                                            <div className="ms-2">
                                                                <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">Nature House</a></p>
                                                                <p className="fs-12 text-muted mb-0">3BHK Apartment</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        Garden Villa
                                                    </td>
                                                    <td><span className="badge rounded-pill badge-sm bg-warning-transparent">Pending</span></td>
                                                    <td>
                                                        For Sale
                                                    </td>
                                                    <td>16 Nov 2022</td>
                                                    <td>
                                                        <div className="d-inline-flex align-items-center">
                                                            <i className="ri-map-pin-fill text-muted fs-12"></i>
                                                            <span className="ms-1">Canada</span>
                                                        </div>
                                                    </td>
                                                    <td className="fw-semibold">$16,000</td>
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
                                                    <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabelproducts9"  aria-label="..." defaultChecked/></td>
                                                    <td>
                                                        <div className="d-flex"> 
                                                            <span className="avatar avatar-md avatar-square"><img src="../../assets/images/realestate/properties/6.png" className="h-100 w-100" alt="..." /></span>
                                                            <div className="ms-2">
                                                                <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">Riddi Houses</a></p>
                                                                <p className="fs-12 text-muted mb-0">2BHK Apartment</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        Commercial
                                                    </td>
                                                    <td><span className="badge rounded-pill badge-sm bg-warning-transparent">Pending</span></td>
                                                    <td>
                                                        For Rent
                                                    </td>
                                                    <td>17 Jan 2024</td>
                                                    <td>
                                                        <div className="d-inline-flex align-items-center">
                                                            <i className="ri-map-pin-fill text-muted fs-12"></i>
                                                            <span className="ms-1">Europe</span>
                                                        </div>
                                                    </td>
                                                    <td className="fw-semibold">$32,000</td>
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
                                                    <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabelproducts10"  aria-label="..." /></td>
                                                    <td>
                                                        <div className="d-flex"> 
                                                            <span className="avatar avatar-md avatar-square"><img src="../../assets/images/realestate/properties/5.png" className="h-100 w-100" alt="..." /></span>
                                                            <div className="ms-2">
                                                                <p className="fw-semibold mb-0 d-flex align-items-center"><a href="#!">Sidh Houses</a></p>
                                                                <p className="fs-12 text-muted mb-0">4BHK Apartment</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        Flats
                                                    </td>
                                                    <td><span className="badge rounded-pill badge-sm bg-warning-transparent">Pending</span></td>
                                                    <td>
                                                        For Sale
                                                    </td>
                                                    <td>23 Dec 2022</td>
                                                    <td>
                                                        <div className="d-inline-flex align-items-center">
                                                            <i className="ri-map-pin-fill text-muted fs-12"></i>
                                                            <span className="ms-1">USA</span>
                                                        </div>
                                                    </td>
                                                    <td className="fw-semibold">$26,000</td>
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
                                </Card.Footer>
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
                                    <Row className="gy-5">
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
                                                        <input className="form-check-input" type="checkbox"  id="propertyupdate" defaultChecked/>
                                                        <label className="form-check-label" htmlFor="propertyupdate">
                                                            Property Update Notifications
                                                        </label>
                                                    </div>
                                                </Col>
                                                <Col sm={6} className="mb-2">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox"  id="propertycomment"/>
                                                        <label className="form-check-label" htmlFor="propertycomment">
                                                            Property Comment Notifications
                                                        </label>
                                                    </div>
                                                </Col>
                                                <div className="col-sm-6 mb-0">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox"  id="propertyreview"/>
                                                        <label className="form-check-label" htmlFor="propertyreview">
                                                            Property Review Notifications
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 mb-0">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox"  id="propertybuyerreview" defaultChecked/>
                                                        <label className="form-check-label" htmlFor="propertybuyerreview">
                                                            Buyer Review Notifications
                                                        </label>
                                                    </div>
                                                </div>
                                            </Row>
                                        </Col>
                                        <Col xl={12}>
                                            <h6 className="mb-3 fw-semibold text-primary">Change Password</h6>
                                            <p className="fs-13">Password should be min of <b className="text-success fw-semibold">8 digits<sup>*</sup></b>,atleast <b className="text-success fw-semibold">One Capital letter<sup>*</sup></b> and <b className="text-success fw-semibold">One Special Character<sup>*</sup></b> included.</p>
                                            <Row>
                                                <Col sm={4} className="col-12 mb-2">
                                                    <label htmlFor="current-password" className="form-label">Current Password</label>
                                                    <input type="text" className="form-control" id="current-password" placeholder="Current Password" />
                                                </Col>
                                                <Col sm={4} className="col-12 mb-2">
                                                    <label htmlFor="new-password" className="form-label">New Password</label>
                                                    <input type="text" className="form-control" id="new-password" placeholder="New Password" />
                                                </Col>
                                                <Col sm={4} className="col-12 mb-0">
                                                    <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                                                    <input type="text" className="form-control" id="confirm-password" placeholder="Confirm PAssword" />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
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
            {/*  End:: Section-1 */}
        </Tab.Container>

        {/*  Start:: Section-2 */}
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
        {/*  End:: Section-2 */}
    </Fragment>
    )
};

export default Vendor;