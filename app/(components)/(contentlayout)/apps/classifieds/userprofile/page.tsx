"use client"
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Dropdown, Form, Nav, OverlayTrigger, Pagination, ProgressBar, Row, Tab, Table, Tooltip } from "react-bootstrap";
import dynamic from 'next/dynamic'
const Select = dynamic(() => import("react-select"), { ssr: false });
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Userprofile = () => {
    const Countrydata=[
        {value:'Usa', label:'Usa'},
        {value:'Australia', label:'Australia'},
        {value:'Dubai', label:'Dubai'},
    ]
    const Gendardata=[
        {value:'Male', label:'Male'},
        {value:'Female', label:'Female'},
    ]
    const Categorydata=[
        {value:'Real Estate', label:'Real Estate'},
        {value:'Electronics', label:'Electronics'},
        {value:'Vehicle', label:'Vehicle'},
    ]
    const Conditiondata=[
      {value:'New', label:'New'},
      {value:'Used', label:'Used'},
    ]
    const Prioritydata=[
        {value:'Normal', label:'Normal'},
        {value:'Urgent', label:'Urgent'},
    ]
    const Accountdata=[
        {value:'Private', label:'Private'},
        {value:'Business', label:'Business'},
    ]

  //Filepond 
  const [files, setFiles] = useState<any>([]);
return ( 
    <Fragment>
                {/* Page Header */}
                    <Seo title={"User Profile"} />
                    <Pageheader Heading="User Profile" Pages={[{title:"Apps", active:true}, {title:"Classifieds", active:true}, {title:"User Profile", active:false},]} />
                {/* Page Header Close */}

               {/* Start::row-1 */}
               <Row>
                <Tab.Container defaultActiveKey="first">
                    <Col xl={3}>
                        <Card className="custom-card">
                            <div className="d-sm-flex align-items-start p-3 border-bottom">
                                <div>
                                    <span className="avatar avatar-lg avatar-rounded online me-3">
                                        <img src="../../../assets/images/faces/9.jpg" alt=""/>
                                    </span>
                                </div>
                                <div className="main-profile-info flex-fill">
                                <h6 className="fw-semibold mb-1">Jack Miller 
                                <OverlayTrigger placement="top" overlay={<Tooltip>Verified User</Tooltip>}>
                                    <i className="bi bi-check-circle-fill text-success fs-14 ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Verified User"></i>
                                </OverlayTrigger>
                                </h6>
                                    <p className="mb-0">Member Since 2005</p>
                                    <Link href="#!" scroll={false} className="text-primary fs-12 fw-semibold"><i
                                            className="ri-shut-down-line me-1 align-middle"></i>Logout</Link>
                                </div>
                                <span className="badge badge-md bg-warning-transparent"><i className="ri-vip-crown-2-line align-middle me-2"></i> Basic</span>
                            </div>
                            <Card.Body className="p-0">
                                <Nav className="nav-tabs flex-column candidateprofile-nav" role="tablist"> 
                                    <Nav.Link eventKey="first" className="nav-link" data-bs-toggle="tab" role="tab"
                                        aria-current="page" href="#profile-vertical-link" aria-selected="true">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="96" r="64" opacity="0.2"/><circle cx="128" cy="96" r="64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M32,216c19.37-33.47,54.55-56,96-56s76.63,22.53,96,56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                          My Profile</Nav.Link>
                                    <Nav.Link eventKey="second" className="nav-link" data-bs-toggle="tab" role="tab"
                                    aria-current="page" href="#postedads-vertical-link" aria-selected="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M32,96H224V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8Z" opacity="0.2"/><rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="32" y1="96" x2="224" y2="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>All Posted Ads</Nav.Link>
                                    <Nav.Link eventKey="third" className="nav-link" data-bs-toggle="tab" role="tab"
                                    aria-current="page" href="#postads-vertical-link" aria-selected="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,144a191.14,191.14,0,0,1-96-25.68h0V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V118.31A191.08,191.08,0,0,1,128,144Z" opacity="0.2"/><line x1="112" y1="112" x2="144" y2="112" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><rect x="32" y="64" width="192" height="144" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M224,118.31A191.09,191.09,0,0,1,128,144a191.14,191.14,0,0,1-96-25.68" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Post Ads</Nav.Link>
                                    <Nav.Link eventKey="fourth" className="nav-link" data-bs-toggle="tab" role="tab"
                                    aria-current="page" href="#invoice-vertical-link" aria-selected="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M168,200V104h56v88a8,8,0,0,1-8,8Z" opacity="0.2"/><path d="M64,56H40A16,16,0,0,0,24,72h0A16,16,0,0,0,40,88H56a16,16,0,0,1,16,16h0a16,16,0,0,1-16,16H28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="48" y1="48" x2="48" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="48" y1="120" x2="48" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M96,56H224V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="104" y1="104" x2="224" y2="104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="80" y1="152" x2="224" y2="152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="168" y1="104" x2="168" y2="200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Invoices</Nav.Link>
                                    <Nav.Link eventKey="fifth" className="nav-link" data-bs-toggle="tab" role="tab"
                                    aria-current="page" href="#settings-vertical-link" aria-selected="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2"/><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M130.05,206.11c-1.34,0-2.69,0-4,0L94,224a104.61,104.61,0,0,1-34.11-19.2l-.12-36c-.71-1.12-1.38-2.25-2-3.41L25.9,147.24a99.15,99.15,0,0,1,0-38.46l31.84-18.1c.65-1.15,1.32-2.29,2-3.41l.16-36A104.58,104.58,0,0,1,94,32l32,17.89c1.34,0,2.69,0,4,0L162,32a104.61,104.61,0,0,1,34.11,19.2l.12,36c.71,1.12,1.38,2.25,2,3.41l31.85,18.14a99.15,99.15,0,0,1,0,38.46l-31.84,18.1c-.65,1.15-1.32,2.29-2,3.41l-.16,36A104.58,104.58,0,0,1,162,224Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Settings</Nav.Link>    
                                </Nav>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first" className="show p-0 border-0" id="profile-vertical-link"
                                role="tabpanel">
                                <Card className="custom-card">
                                    <Card.Header>
                                        <div className="card-title flex-fill">
                                            Personal Information
                                        </div>
                                        <div>
                                            <p className="fw-semibold mb-2">Profile 60% completed - <Link href="#!" scroll={false} className="text-primary fs-12">Finish now</Link></p>
                                            <ProgressBar variant="primary" className="progress progress-xs progress-animate" now={60} />
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="mb-4 d-sm-flex align-items-center">
                                            <div className="mb-0 me-4">
                                                <span className="avatar avatar-xxl avatar-rounded">
                                                    <img src="../../../assets/images/faces/9.jpg" alt=""/>
                                                    <Link href="#!" scroll={false} className="badge rounded-pill bg-primary avatar-badge"><i className="fe fe-camera"></i></Link>
                                                </span>
                                            </div>
                                            <div className="btn-list">
                                                <Button variant="" className="btn btn-primary">Change</Button>
                                                <Button variant="" className="btn btn-light">Remove</Button>
                                            </div>
                                        </div>
                                        <div className="row gy-4 mb-4">
                                            <Col xl={6}>
                                                <Form.Label htmlFor="first-name" className="form-label">First Name</Form.Label>
                                                <Form.Control type="text" className="form-control" id="first-name" placeholder="Firt Name" defaultValue="Json" />
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label htmlFor="last-name" className="form-label">Last Name</Form.Label> 
                                                <Form.Control type="text" className="form-control" id="last-name" placeholder="Last Name" defaultValue="Taylor" />
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label htmlFor="email-address" className="form-label">Email Address :</Form.Label>
                                                <Form.Control type="text" className="form-control" id="email-address" placeholder="xyz@gmail.com" defaultValue="json@gmail.com" />
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label htmlFor="phone-number" className="form-label">Mobile Number :</Form.Label>
                                                <Form.Control type="text" className="form-control" id="phone-number" placeholder="*** *** ****" defaultValue="65432 76765" />
                                            </Col>
                                        </div>
                                        <div className="row gy-4">
                                            <Col xl={4}>
                                                <Form.Label className="form-label">Country :</Form.Label>
                                                <Select name="colors" options={Countrydata} className="basic-multi-select"
                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Countrydata[0]]}
                                                />
                                            </Col>
                                            <Col xl={4}>
                                                <Form.Label className="form-label">Gendar :</Form.Label>
                                                <Select name="colors" options={Gendardata} className="basic-multi-select"
                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Gendardata[0]]}
                                                />
                                            </Col>
                                            <Col xl={4}>
                                                <Form.Label htmlFor="City" className="form-label">City :</Form.Label>
                                                <Form.Control type="text" className="form-control" id="City" placeholder="City"/>
                                            </Col>
                                            <Col xl={12}>
                                                <Form.Label htmlFor="bio" className="form-label">Bio :</Form.Label>
                                                <Form.Control as="textarea" className="form-control" id="bio" rows={7}  defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!"></Form.Control>
                                            </Col>
                                        </div>                                        
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second" className="p-0 border-0" id="postedads-vertical-link"
                                role="tabpanel">
                                <Card className="custom-card overflow-hidden">
                                    <Card.Header className="justify-content-between">
                                        <Card.Title>
                                            All Posted Ads
                                        </Card.Title>
                                        <div className="d-flex">
                                            <div className="me-3">
                                                <Form.Control className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example"/>
                                            </div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="" href="#!" className="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Sort By<i className="ri-arrow-down-s-line align-middle ms-1"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="" role="menu">
                                                    <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </Card.Header>
                                    <Card.Body className="p-0">
                                        <div className="table-responsive">
                                            <table className="table table-hover text-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th scope="row" className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob1" defaultValue="" aria-label="..."/></th>
                                                        <th scope="col">Ad Title</th>
                                                        <th scope="col">Category</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Location</th>
                                                        <th scope="col">Published Date</th>
                                                        <th scope="col">Expires on</th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob2" defaultValue="" aria-label="..."/></td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <span className="avatar avatar-md avatar-square bg-primary bg-opacity-10"><img src="../../../assets/images/classifieds/featured-adds/1.jpg" className="" alt="..."/></span>
                                                                <div className="ms-2">
                                                                    <p className="fw-semibold mb-0 d-flex align-items-center"><Link href="#!" scroll={false}> 4 Beds Duplex House</Link></p>
                                                                    <p className="fs-12 text-muted mb-0">4-Bds - 4 Ba - 600ff3</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            RealEstate
                                                        </td>
                                                        <td><span className="badge rounded-pill badge-sm bg-success-transparent">Active</span></td>
                                                        <td>
                                                            <div className="d-inline-flex align-items-center">
                                                                <i className="ri-map-pin-fill text-muted fs-10"></i>
                                                                <span className="ms-1">Germany</span>
                                                            </div>
                                                        </td>
                                                        <td>03 Sep 2024</td>
                                                        <td><span className="badge bg-primary-transparent"><i className="bi bi-clock me-1"></i>Nov 12 2024</span></td>
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
                                                        <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob3" defaultValue="" aria-label="..." defaultChecked/></td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <span className="avatar avatar-md avatar-square bg-primary bg-opacity-10"><img src="../../../assets/images/classifieds/featured-adds/2.jpg" className="" alt="..."/></span>
                                                                <div className="ms-2">
                                                                    <p className="fw-semibold mb-0 d-flex align-items-center"><Link href="#!" scroll={false}> Cadbo Car kb43</Link></p>
                                                                    <p className="fs-12 text-muted mb-0">2024 Oct 04</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            Vehicle
                                                        </td>
                                                        <td>
                                                            <span className="badge rounded-pill badge-sm bg-warning-transparent">Pending Payment</span>
                                                        </td>
                                                        <td>
                                                            <div className="d-inline-flex align-items-center">
                                                                <i className="ri-map-pin-fill text-muted fs-10"></i>
                                                                <span className="ms-1">Canada</span>
                                                            </div>
                                                        </td>
                                                        <td>05 Oct 2024</td>
                                                        <td><span className="badge bg-danger-transparent"><i className="bi bi-clock me-1"></i>Dec 07 2024</span></td>
                                                        <td>$25,000</td>
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
                                                        <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob44" defaultValue="" aria-label="..." defaultChecked/></td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <span className="avatar avatar-md avatar-square bg-primary bg-opacity-10"><img src="../../../assets/images/classifieds/featured-adds/3.jpg" className="" alt="..."/></span>
                                                                <div className="ms-2">
                                                                    <p className="fw-semibold mb-0 d-flex align-items-center"><Link href="#!" scroll={false}>Smart Phone H6</Link></p>
                                                                    <p className="fs-12 text-muted mb-0">2024 - 120,000km</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                        Electronics
                                                        </td>
                                                        <td>
                                                            <span className="badge rounded-pill badge-sm bg-success-transparent">Active</span>
                                                        </td>
                                                        <td>
                                                            <div className="d-inline-flex align-items-center">
                                                                <i className="ri-map-pin-fill text-muted fs-10"></i>
                                                                <span className="ms-1">Europe</span>
                                                            </div>
                                                        </td>
                                                        <td>13 Nov 2024</td>
                                                        <td><span className="badge bg-primary-transparent"><i className="bi bi-clock me-1"></i>Jan 15 2024</span></td>
                                                        <td>$43,000</td>
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
                                                        <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob5" defaultValue="" aria-label="..."/></td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <span className="avatar avatar-md avatar-square bg-primary bg-opacity-10"><img src="../../../assets/images/classifieds/featured-adds/4.jpg" className="" alt="..."/></span>
                                                                <div className="ms-2">
                                                                    <p className="fw-semibold mb-0 d-flex align-items-center"><Link href="#!" scroll={false}>Gittbos Bike Mf120</Link></p>
                                                                    <p className="fs-12 text-muted mb-0">2024 - 120,000km</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            Vehicle
                                                        </td>
                                                        <td>
                                                            <span className="badge rounded-pill badge-sm bg-danger-transparent">Inactive</span>
                                                        </td>
                                                        <td>
                                                            <div className="d-inline-flex align-items-center">
                                                                <i className="ri-map-pin-fill text-muted fs-10"></i>
                                                                <span className="ms-1">USA</span>
                                                            </div>
                                                        </td>
                                                        <td>15 Dec 2024</td>
                                                        <td><span className="badge bg-primary-transparent"><i className="bi bi-clock me-1"></i>Feb 12 2024</span></td>
                                                        <td>$10,000</td>
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
                                                        <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob22" defaultValue="" aria-label="..."/></td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <span className="avatar avatar-md avatar-square bg-primary bg-opacity-10"><img src="../../../assets/images/classifieds/featured-adds/1.jpg" className="" alt="..."/></span>
                                                                <div className="ms-2">
                                                                    <p className="fw-semibold mb-0 d-flex align-items-center"><Link href="#!" scroll={false}> 4 Beds Duplex House</Link></p>
                                                                    <p className="fs-12 text-muted mb-0">4-Bds - 4 Ba - 600ff3</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            RealEstate
                                                        </td>
                                                        <td><span className="badge rounded-pill badge-sm bg-success-transparent">Active</span></td>
                                                        <td>
                                                            <div className="d-inline-flex align-items-center">
                                                                <i className="ri-map-pin-fill text-muted fs-10"></i>
                                                                <span className="ms-1">Germany</span>
                                                            </div>
                                                        </td>
                                                        <td>03 Sep 2024</td>
                                                        <td><span className="badge bg-primary-transparent"><i className="bi bi-clock me-1"></i>Nov 12 2024</span></td>
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
                                                        <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob41" defaultValue="" aria-label="..." defaultChecked/></td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <span className="avatar avatar-md avatar-square bg-primary bg-opacity-10"><img src="../../../assets/images/classifieds/featured-adds/3.jpg" className="" alt="..." /></span>
                                                                <div className="ms-2">
                                                                    <p className="fw-semibold mb-0 d-flex align-items-center"><Link href="#!" scroll={false}>Smart Phone H6</Link></p>
                                                                    <p className="fs-12 text-muted mb-0">2024 - 120,000km</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                        Electronics
                                                        </td>
                                                        <td>
                                                            <span className="badge rounded-pill badge-sm bg-success-transparent">Active</span>
                                                        </td>
                                                        <td>
                                                            <div className="d-inline-flex align-items-center">
                                                                <i className="ri-map-pin-fill text-muted fs-10"></i>
                                                                <span className="ms-1">Europe</span>
                                                            </div>
                                                        </td>
                                                        <td>13 Nov 2024</td>
                                                        <td><span className="badge bg-primary-transparent"><i className="bi bi-clock me-1"></i>Jan 15 2024</span></td>
                                                        <td>$43,000</td>
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
                                    <div className="card-footer border-top-0">
                                        <div className="d-flex align-items-center flex-wrap overflow-auto">
                                            <div className="mb-2 mb-sm-0">
                                                Showing <b>1</b> to <b>6</b> of <b>10</b> entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                            </div>
                                            <div className="ms-auto">
                                                <Pagination className="pagination mb-0 overflow-auto">
                                                    <Pagination.Item disabled>Previous</Pagination.Item>
                                                    <Pagination.Item  active>1</Pagination.Item>
                                                    <Pagination.Item>2</Pagination.Item>
                                                    <Pagination.Item>3</Pagination.Item>
                                                    <Pagination.Item>4</Pagination.Item>
                                                    <Pagination.Item>5</Pagination.Item>
                                                    <Pagination.Item className="pagination-next">next</Pagination.Item>
                                                </Pagination>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third" className="p-0 border-0" id="postads-vertical-link"
                                role="tabpanel">
                                <Card className="custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                            Post A Ad
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="row gy-4 mb-4"> 
                                            <Col xl={6}>
                                                <Form.Label htmlFor="ad-title" className="">Ad Title</Form.Label>
                                                <Form.Control type="text" className="form-control" id="ad-title" placeholder="Ad Title" defaultValue="Gittbos Bike Mf120" />
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label className="">Ad Category</Form.Label> 
                                                 <Select name="colors" options={Categorydata} className="basic-multi-select"
                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Categorydata[0]]}
                                                />
                                            </Col> 
                                            <Col xl={6}>
                                                <Form.Label className="">Condition</Form.Label> 
                                                 <Select name="colors" options={Conditiondata} className="basic-multi-select"
                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Conditiondata[0]]}
                                                />
                                            </Col> 
                                            <Col xl={6}>
                                                <Form.Label className="">Priority</Form.Label> 
                                                 <Select name="colors" options={Prioritydata} className="basic-multi-select"
                                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Prioritydata[0]]}
                                                    />
                                            </Col>  
                                            <Col xl={6}>
                                                <Form.Label htmlFor="Price" className="">Price</Form.Label>
                                                <Form.Control type="text" className="form-control" id="Price" placeholder="Price" defaultValue="$3654" />
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label htmlFor="Address" className="">Address</Form.Label> 
                                                <Form.Control type="text" className="form-control" id="Address" placeholder="Address" defaultValue="USA, 456372" />
                                            </Col>
                                            <Col xl={12}>
                                                <Form.Label htmlFor="Address" className="">Upload Image</Form.Label> 
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
                                                <Form.Label htmlFor="bio" className="">Ad Description :</Form.Label>
                                                <Form.Control as="textarea" className="form-control" id="Ad-description" rows={7} defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!"></Form.Control>
                                            </Col>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth" className="p-0 border-0" id="invoice-vertical-link"
                                role="tabpanel">
                                <Card className="custom-card">
                                    <Card.Header>
                                        <Card.Title className="flex-fill">
                                            Invoices List <span className="text-primary"></span>
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body className="p-0">
                                        <div className="table-responsive">
                                            <Table className="table text-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">User</th>
                                                        <th scope="col">Invoice ID</th>
                                                        <th scope="col">Issued Date</th>
                                                        <th scope="col">Amount</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Due Date</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/11.jpg" alt=""/>
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0 fw-semibold">Jack Miller</p>
                                                                    <p className="mb-0 fs-11 text-muted">jackmiller2416@gmail.com</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Link href="#!" scroll={false} className="fw-semibold text-primary">
                                                                #SPK12032901
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            25,Nov 2024
                                                        </td>
                                                        <td>
                                                            $212.45
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-success-transparent">Paid</span>
                                                        </td>
                                                        <td>
                                                            25,Dec 2024
                                                        </td>
                                                        <td>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Print</Tooltip>}>
                                                            <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-printer-line"></i></Button>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                            <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm"><i className="ri-delete-bin-5-line"></i></Button>
                                                         </OverlayTrigger>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/7.jpg" alt=""/>
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0 fw-semibold">Suzika Stallone</p>
                                                                    <p className="mb-0 fs-11 text-muted">suzikastallone3214@gmail.com</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Link href="#!" scroll={false} className="fw-semibold text-primary">
                                                                #SPK12032912
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            13,Nov 2024
                                                        </td>
                                                        <td>
                                                            $512.99
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-warning-transparent">Pending</span>
                                                        </td>
                                                        <td>
                                                            13,Dec 2024
                                                        </td>
                                                        <td>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Print</Tooltip>}>
                                                            <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-printer-line"></i></Button>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                            <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm"><i className="ri-delete-bin-5-line"></i></Button>
                                                         </OverlayTrigger>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/15.jpg" alt=""/>
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0 fw-semibold">Roman Killon</p>
                                                                    <p className="mb-0 fs-11 text-muted">romankillon143@gmail.com</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Link href="#!" scroll={false} className="fw-semibold text-primary">
                                                                #SPK12032945
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            30,Nov 2024
                                                        </td>
                                                        <td>
                                                            $2199.49
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-danger-transparent">Overdue</span>
                                                        </td>
                                                        <td>
                                                            30,Dec 2024
                                                        </td>
                                                        <td>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Print</Tooltip>}>
                                                            <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-printer-line"></i></Button>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                            <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm"><i className="ri-delete-bin-5-line"></i></Button>
                                                         </OverlayTrigger>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/12.jpg" alt=""/>
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0 fw-semibold">Charlie Davieson</p>
                                                                    <p className="mb-0 fs-11 text-muted">charliedavieson@gmail.com</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Link href="#!" scroll={false} className="fw-semibold text-primary">
                                                                #SPK12032922
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            18,Nov 2024
                                                        </td>
                                                        <td>
                                                            $1569.99
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-success-transparent">Paid</span>
                                                        </td>
                                                        <td>
                                                            18,Dec 2024
                                                        </td>
                                                        <td>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Print</Tooltip>}>
                                                            <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-printer-line"></i></Button>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                            <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm"><i className="ri-delete-bin-5-line"></i></Button>
                                                         </OverlayTrigger>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/4.jpg" alt=""/>
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0 fw-semibold">Selena Deoyl</p>
                                                                    <p className="mb-0 fs-11 text-muted">selenadeoyl114@gmail.com</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Link href="#!" scroll={false} className="fw-semibold text-primary">
                                                                #SPK12032932
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            18,Nov 2024
                                                        </td>
                                                        <td>
                                                            $4,873.99
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-primary-transparent">Due By 1 Day</span>
                                                        </td>
                                                        <td>
                                                            18,Dec 2024
                                                        </td>
                                                        <td>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Print</Tooltip>}>
                                                            <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-printer-line"></i></Button>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                            <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm"><i className="ri-delete-bin-5-line"></i></Button>
                                                         </OverlayTrigger>                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/7.jpg" alt=""/>
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0 fw-semibold">Kiara Advensh</p>
                                                                    <p className="mb-0 fs-11 text-muted">kiaraadvensh87@gmail.com</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Link href="#!" scroll={false} className="fw-semibold text-primary">
                                                                #SPK12032978
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            02,Nov 2024
                                                        </td>
                                                        <td>
                                                            $1923.99
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-success-transparent">Paid</span>
                                                        </td>
                                                        <td>
                                                            18,Dec 2024
                                                        </td>
                                                        <td>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Print</Tooltip>}>
                                                            <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-printer-line"></i></Button>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                            <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm"><i className="ri-delete-bin-5-line"></i></Button>
                                                         </OverlayTrigger>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/9.jpg" alt=""/>
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0 fw-semibold">Joseph Samurai</p>
                                                                    <p className="mb-0 fs-11 text-muted">josephsamurai@gmail.com</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Link href="#!" scroll={false} className="fw-semibold text-primary">
                                                                #SPK12032919
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            15,Nov 2024
                                                        </td>
                                                        <td>
                                                            $1,623.99
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-success-transparent">Paid</span>
                                                        </td>
                                                        <td>
                                                            15,Dec 2024
                                                        </td>
                                                        <td>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Print</Tooltip>}>
                                                            <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-printer-line"></i></Button>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                            <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm"><i className="ri-delete-bin-5-line"></i></Button>
                                                         </OverlayTrigger>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/13.jpg" alt=""/>
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0 fw-semibold">Kevin Powell</p>
                                                                    <p className="mb-0 fs-11 text-muted">kevinpowell@gmail.com</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Link href="#!" scroll={false} className="fw-semibold text-primary">
                                                                #SPK12032931
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            21,Nov 2024
                                                        </td>
                                                        <td>
                                                            $3,423.99
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-warning-transparent">Pending</span>
                                                        </td>
                                                        <td>
                                                            21,Dec 2024
                                                        </td>
                                                        <td>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Print</Tooltip>}>
                                                            <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-printer-line"></i></Button>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                            <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm"><i className="ri-delete-bin-5-line"></i></Button>
                                                         </OverlayTrigger>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/8.jpg" alt=""/>
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0 fw-semibold">Darla Jung</p>
                                                                    <p className="mb-0 fs-11 text-muted">darlajung555@gmail.com</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Link href="#!" scroll={false} className="fw-semibold text-primary">
                                                                #SPK12032958
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            15,Oct 2024
                                                        </td>
                                                        <td>
                                                            $2,982.99
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-success-transparent">Paid</span>
                                                        </td>
                                                        <td>
                                                            15,Nov 2024
                                                        </td>
                                                        <td>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Print</Tooltip>}>
                                                            <Button variant="" className="btn btn-primary-light btn-icon btn-sm"><i className="ri-printer-line"></i></Button>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                            <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm"><i className="ri-delete-bin-5-line"></i></Button>
                                                         </OverlayTrigger>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>                                
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth" className="p-0 border-0" id="settings-vertical-link"
                                role="tabpanel">
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
                                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Accountdata[0]]}
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
                                                        <Form.Label htmlFor="two-step" className="label-primary mb-1"></Form.Label>
                                                    </div>
                                                </div>
                                                <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                                                    <div>
                                                        <p className="fs-14 mb-1 fw-semibold">Recovery Mail</p>
                                                        <p className="fs-12 text-muted mb-0">Incase of forgetting password mails are sent to  heifo@gmail.com</p>
                                                    </div>
                                                    <div className="custom-toggle-switch toggle-sm ms-sm-2 ms-0"> 
                                                        <input id="recovery-mail" name="toggleswitchsize" type="checkbox" defaultChecked/>
                                                        <Form.Label htmlFor="recovery-mail" className="label-primary mb-1"></Form.Label>
                                                    </div>
                                                </div>
                                                <div className="d-sm-flex d-block align-items-top justify-content-between">
                                                    <div>
                                                        <p className="fs-14 mb-1 fw-semibold">SMS Recovery</p>
                                                        <p className="fs-12 text-muted mb-0">SMS are sent to 9102312xx in case of recovery</p>
                                                    </div>
                                                    <div className="custom-toggle-switch toggle-sm ms-sm-2 ms-0"> 
                                                        <input id="sms-recovery" name="toggleswitchsize" type="checkbox" defaultChecked />
                                                        <Form.Label htmlFor="sms-recovery" className="label-primary mb-1"></Form.Label>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={12}>
                                                <h6 className="mb-3 fw-semibold text-primary">Change Password</h6>
                                                <p className="fs-13">Password should be min of <b className="text-success fw-semibold">8 digits<sup>*</sup></b>,atleast <b className="text-success fw-semibold">One Capital letter<sup>*</sup></b> and <b className="text-success fw-semibold">One Special Character<sup>*</sup></b> included.</p>
                                                <Row>
                                                    <Col sm={4} className="col-12 mb-2">
                                                        <Form.Label htmlFor="current-password" className="form-label">Current Password</Form.Label>
                                                        <Form.Control type="text" className="form-control" id="current-password" placeholder="Current Password"/>
                                                    </Col>
                                                    <Col sm={4} className="col-12 mb-2">
                                                        <Form.Label htmlFor="new-password" className="form-label">New Password</Form.Label>
                                                        <Form.Control type="text" className="form-control" id="new-password" placeholder="New Password"/>
                                                    </Col>
                                                    <Col sm={4} className="col-12 mb-0">
                                                        <Form.Label htmlFor="confirm-password" className="form-label">Confirm Password</Form.Label>
                                                        <Form.Control type="text" className="form-control" id="confirm-password" placeholder="Confirm PAssword"/>
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
                    </Col>
                </Tab.Container>
            </Row>
            {/*End::row-1 */}

    </Fragment>
    )
};

export default Userprofile;