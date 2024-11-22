"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Form, OverlayTrigger, ProgressBar, Row, Tooltip } from "react-bootstrap";
const Select = dynamic(() => import("react-select"), { ssr: false });
const Settings = () => {
    
    const Accounttype=[
        {value:'Private', label:'Private'},
        {value:'Business', label:'Business'},
    ]
return( 
    <Fragment>
<div className="main-content landing-main ecommerce-main">

    {/* Start:: Breadcrumb*/}
    <div className="border-bottom py-3">
        <div className="container">
            {/* Page Header */}
                <Seo title={"Settings"} />
                <Pageheader Heading="" Pagetitle={true} Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true},{title:"Customer", active:true}, {title:"Settings", active:false}]} />
            {/* Page Header Close */}   
        </div>
    </div>
    {/* End:: Breadcrumb*/}

    {/* Start:: Section-1 */}
    <section className="section py-4">
        <div className="container"> 
            <Row>
                <Col xl={3}>
                    <Card className="custom-card">
                        <div className="d-sm-flex align-items-center p-3">
                            <div>
                                <span className="avatar avatar-lg avatar-rounded online me-3">
                                    <img src="../../../assets/images/faces/9.jpg" alt="" />
                                </span>
                            </div>
                            <div className="main-profile-info flex-fill">
                                <h6 className="fw-semibold mb-1">Jack Miller 
                                <OverlayTrigger placement="top" overlay={<Tooltip>Verified User</Tooltip>}>
                                    <i className="bi bi-check-circle-fill text-success fs-14 ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Verified User"></i>
                                </OverlayTrigger>
                                </h6>
                                <p className="mb-0">Member Since 2005</p>
                            </div>
                        </div>
                    </Card>
                    <Card className="custom-card">
                        <div className="card-body p-0">
                            <nav className="nav nav-tabs flex-column candidateprofile-nav"> 
                                <Link scroll={false} className="nav-link" href="/ecommerce/customer/customer/">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="32" y="72" width="192" height="136" rx="8" opacity="0.2"/><rect x="32" y="72" width="192" height="136" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M88,96V64a40,40,0,0,1,80,0V96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>My Orders</Link>
                                <Link scroll={false} className="nav-link" href="/ecommerce/customer/wishlist/">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,224S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54C232,168,128,224,128,224Z" opacity="0.2"/><path d="M128,224S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54C232,168,128,224,128,224Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>My Wishlist</Link>
                                <Link scroll={false} className="nav-link" href="/ecommerce/customer/ordertracking/">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="200" cy="200" r="24" opacity="0.2"/><circle cx="200" cy="200" r="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M72,56h96a32,32,0,0,1,0,64H72a40,40,0,0,0,0,80H176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Order Tracking</Link>
                                <Link scroll={false} className="nav-link" href="/ecommerce/customer/refunds/">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,128h24a40,40,0,0,1,0,80H128Z" opacity="0.2"/><path d="M128,48H112a40,40,0,0,0,0,80h16Z" opacity="0.2"/><line x1="128" y1="24" x2="128" y2="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="208" x2="128" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Refunds</Link>
                                <Link scroll={false} className="nav-link" href="/ecommerce/customer/address/">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,32H64a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V40A8,8,0,0,0,208,32ZM136,144a32,32,0,1,1,32-32A32,32,0,0,1,136,144Z" opacity="0.2"/><circle cx="136" cy="112" r="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="32" y1="72" x2="56" y2="72" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="32" y1="128" x2="56" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="32" y1="184" x2="56" y2="184" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M88,168a60,60,0,0,1,96,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><rect x="40" y="48" width="192" height="160" rx="8" transform="translate(264 -8) rotate(90)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Address Book</Link>
                                <Link scroll={false} className="nav-link active" href="/ecommerce/customer/settings/">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2"/><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M130.05,206.11c-1.34,0-2.69,0-4,0L94,224a104.61,104.61,0,0,1-34.11-19.2l-.12-36c-.71-1.12-1.38-2.25-2-3.41L25.9,147.24a99.15,99.15,0,0,1,0-38.46l31.84-18.1c.65-1.15,1.32-2.29,2-3.41l.16-36A104.58,104.58,0,0,1,94,32l32,17.89c1.34,0,2.69,0,4,0L162,32a104.61,104.61,0,0,1,34.11,19.2l.12,36c.71,1.12,1.38,2.25,2,3.41l31.85,18.14a99.15,99.15,0,0,1,0,38.46l-31.84,18.1c-.65,1.15-1.32,2.29-2,3.41l-.16,36A104.58,104.58,0,0,1,162,224Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Settings</Link>
                            </nav>
                        </div>
                    </Card>
                </Col>
                <Col xl={9}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title className="flex-fill">
                            Personal Information
                            </Card.Title>
                            <div>
                                <p className="fw-semibold mb-2">Profile 60% completed - <Link scroll={false} href="#!" className="text-primary fs-12">Finish now</Link></p>
                                <ProgressBar className="progress progress-xs progress-animate" variant="primary" now={60}  />
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-4 mb-4">
                                <Col xl={6}>
                                    <Form.Label htmlFor="First-name">First Name</Form.Label>
                                    <Form.Control type="text" id="First-name" placeholder="First Name" defaultValue="Jack Miller" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="Last-Name">Last Name</Form.Label> 
                                    <Form.Control type="text" id="Last-Name" placeholder="Last Name" defaultValue="andrewretail" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="email-address">Email Address :</Form.Label>
                                    <Form.Control type="text" id="email-address" placeholder="xyz@gmail.com" defaultValue="json@gmail.com" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="phone-number">Mobile Number :</Form.Label>
                                    <Form.Control type="text" id="phone-number" placeholder="*** *** ****" defaultValue="65432 76765" />
                                </Col>
                            </div>
                            <div className="row gy-4"> 
                                <Col xl={6}>
                                    <Form.Label htmlFor="Address">Address :</Form.Label>
                                    <Form.Control type="text" className="form-control" id="Address" placeholder="Address" defaultValue="USA" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="Zip-Code">Zip Code :</Form.Label>
                                    <Form.Control type="text" className="form-control" id="Zip-Code" placeholder="Zip Code" defaultValue="1234" />
                                </Col>
                                <Col xl={12}>                                            
                                    <div className="mb-3">
                                        <span className="avatar avatar-lg avatar-rounded">
                                            <img src="../../../assets/images/faces/9.jpg" alt="" className="w-100 h-100"/>
                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-danger avatar-badge"><i className="fe fe-x"></i></Link>
                                        </span>
                                    </div>
                                    <div className="btn-list">
                                        <Form.Control className="form-control" type="file" id="formFile"/>
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="bio">Bio :</Form.Label>
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
                                        <Col xl={12}>
                                            <span className="fs-14 fw-semibold mb-0">Account Type :</span>
                                            <p className="fs-12 mb-0 text-muted">Select the account type</p>
                                        </Col>
                                        <Col xl={7}>
                                            <Select name="colors" options={Accounttype} className="basic-multi-select"
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
                                                <Form.Check type="checkbox"  id="Productupdate" defaultChecked/>
                                                <label className="form-check-label" htmlFor="Productupdate">
                                                    Product Update Notifications
                                                </label>
                                            </div>
                                        </Col>
                                        <Col sm={6} className="mb-2">
                                            <div className="form-check">
                                                <Form.Check type="checkbox"  id="Productcomment"/>
                                                <label className="form-check-label" htmlFor="Productcomment">
                                                    Product Comment Notifications
                                                </label>
                                            </div>
                                        </Col>
                                        <Col sm={6} className="mb-0">
                                            <div className="form-check">
                                                <Form.Check type="checkbox"  id="Productreview"/>
                                                <label className="form-check-label" htmlFor="Productreview">
                                                    Product Review Notifications
                                                </label>
                                            </div>
                                        </Col>
                                        <Col sm={6} className="mb-0">
                                            <div className="form-check">
                                                <Form.Check type="checkbox"  id="Productbuyerreview" defaultChecked/>
                                                <label className="form-check-label" htmlFor="Productbuyerreview">
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
                                            <Form.Label htmlFor="current-password">Current Password</Form.Label>
                                            <Form.Control type="password"  id="current-password" placeholder="Current Password" />
                                        </Col>
                                        <Col sm={4} className="col-12 mb-2">
                                            <Form.Label htmlFor="new-password">New Password</Form.Label>
                                            <Form.Control type="password"  id="new-password" placeholder="New Password" />
                                        </Col>
                                        <Col sm={4} className="col-12 mb-0">
                                            <Form.Label htmlFor="confirm-password">Confirm Password</Form.Label>
                                            <Form.Control type="password"  id="confirm-password" placeholder="Confirm PAssword" />
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
                        <img src="../../../assets/images/media/apps/play-store.png" alt="" />
                        Google Play
                    </Link>
                    <Link scroll={false} href="#!" className="btn btn-dark app-store">
                        <img src="../../../assets/images/media/apps/apple-store.png" alt="" className="invert-1"/>
                        App Store
                    </Link>
                </div>
            </div>
        </div>
    </section>
    {/* End:: Section-2 */}

</div>
    </Fragment>
    )
};

export default Settings;