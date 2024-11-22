"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Form, Nav, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
const Select = dynamic(() => import("react-select"), { ssr: false });
const Settings = () => {
    const Accounttype=[
        {value:'Private', label:'Private'},
        {value:'Business', label:'Business'},
    ]
return ( 
    <Fragment>
         {/* Start:: Breadcrumb*/}
            <div className="border-bottom py-3">
                <div className="container">
                    {/* Page Header */}
                        <Seo title={"Settings"} />
                        <Pageheader Heading="" Pagetitle={true} Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true},{title:"Vendor", active:true}, {title:"Settings", active:false}]} />
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
                                <div className="d-sm-flex align-items-start p-3">
                                    <div>
                                        <span className="avatar avatar-lg avatar-rounded online me-3">
                                            <img src="../../../assets/images/faces/9.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="main-profile-info flex-fill">
                                        <h6 className="fw-semibold mb-1"><Link scroll={false} href="/ecommerce/vendor/profile/">Jack Miller</Link>
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Verified User</Tooltip>}>
                                                <i className="bi bi-check-circle-fill text-success fs-14 ms-2 d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Verified User"></i>
                                        </OverlayTrigger>
                                       
                                        </h6>
                                        <p className="mb-1">Member Since 2005</p>
                                        <div className="d-flex align-items-center gap-3">
                                            <span className="badge badge-md bg-warning-transparent"><i className="ri-vip-crown-2-line vertical-middle"></i> Basic</span>
                                            <Link scroll={false} href="/ecommerce/vendor/packages/" className="text-danger"><u>Upgrade Plan</u></Link>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            <Card className="custom-card">
                                <Card.Body className="p-0">
                                    <Nav className="nav-tabs flex-column candidateprofile-nav"> 
                                        <Link className="nav-link" href="/ecommerce/vendor/vendor/">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,129.09,32.7,76.93a8,8,0,0,0-.7,3.25v95.64a8,8,0,0,0,4.16,7l88,48.18a8,8,0,0,0,3.84,1Z" opacity="0.2"/><polyline points="32.7 76.92 128 129.08 223.3 76.92" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="129.09" x2="128" y2="231.97" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M219.84,182.84l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18a8,8,0,0,1,7.68,0l88,48.18a8,8,0,0,1,4.16,7v95.64A8,8,0,0,1,219.84,182.84Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><polyline points="81.56 48.31 176 100 176 152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>All Products</Link>
                                        <Link className="nav-link" href="/ecommerce/vendor/invoices/">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M168,200V104h56v88a8,8,0,0,1-8,8Z" opacity="0.2"/><path d="M64,56H40A16,16,0,0,0,24,72h0A16,16,0,0,0,40,88H56a16,16,0,0,1,16,16h0a16,16,0,0,1-16,16H28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="48" y1="48" x2="48" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="48" y1="120" x2="48" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M96,56H224V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="104" y1="104" x2="224" y2="104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="80" y1="152" x2="224" y2="152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="168" y1="104" x2="168" y2="200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Invoices</Link>
                                        <Link className="nav-link" href="/ecommerce/vendor/orders/">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="32" y="48" width="192" height="160" rx="8" opacity="0.2"/><rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M168,88a40,40,0,0,1-80,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Orders</Link>
                                        <Link className="nav-link" href="/ecommerce/vendor/refundrequests/">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,128h24a40,40,0,0,1,0,80H128Z" opacity="0.2"/><path d="M128,48H112a40,40,0,0,0,0,80h16Z" opacity="0.2"/><line x1="128" y1="24" x2="128" y2="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="208" x2="128" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Refunds</Link>
                                        <Link className="nav-link active" href="/ecommerce/vendor/settings/">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2"/><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M130.05,206.11c-1.34,0-2.69,0-4,0L94,224a104.61,104.61,0,0,1-34.11-19.2l-.12-36c-.71-1.12-1.38-2.25-2-3.41L25.9,147.24a99.15,99.15,0,0,1,0-38.46l31.84-18.1c.65-1.15,1.32-2.29,2-3.41l.16-36A104.58,104.58,0,0,1,94,32l32,17.89c1.34,0,2.69,0,4,0L162,32a104.61,104.61,0,0,1,34.11,19.2l.12,36c.71,1.12,1.38,2.25,2,3.41l31.85,18.14a99.15,99.15,0,0,1,0,38.46l-31.84,18.1c-.65,1.15-1.32,2.29-2,3.41l-.16,36A104.58,104.58,0,0,1,162,224Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Settings</Link>
                                    </Nav>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={9}>
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
                                                        <input className="form-check-input" type="checkbox" value="" id="Productupdate" defaultChecked/>
                                                        <label className="form-check-label" htmlFor="Productupdate">
                                                            Product Update Notifications
                                                        </label>
                                                    </div>
                                                </Col>
                                                <Col sm={6} className="mb-2">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="Productcomment"/>
                                                        <label className="form-check-label" htmlFor="Productcomment">
                                                            Product Comment Notifications
                                                        </label>
                                                    </div>
                                                </Col>
                                                <Col sm={6} className="mb-0">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="Productreview"/>
                                                        <label className="form-check-label" htmlFor="Productreview">
                                                            Product Review Notifications
                                                        </label>
                                                    </div>
                                                </Col>
                                                <Col sm={6} className="mb-0">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="Productbuyerreview" defaultChecked/>
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
                                                <div className="col-sm-4 col-12 mb-2">
                                                    <Form.Label htmlFor="current-password" className="form-label">Current Password</Form.Label>
                                                    <Form.Control type="password" className="form-control" id="current-password" placeholder="Current Password"/>
                                                </div>
                                                <div className="col-sm-4 col-12 mb-2">
                                                    <Form.Label htmlFor="new-password" className="form-label">New Password</Form.Label>
                                                    <Form.Control type="password" className="form-control" id="new-password" placeholder="New Password"/>
                                                </div>
                                                <div className="col-sm-4 col-12 mb-0">
                                                    <Form.Label htmlFor="confirm-password" className="form-label">Confirm Password</Form.Label>
                                                    <Form.Control type="password" className="form-control" id="confirm-password" placeholder="Confirm PAssword"/>
                                                </div>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="float-end">
                                        <Button className="btn btn-light m-1">
                                            Restore Defaults
                                        </Button>
                                        <Button className="btn btn-primary m-1">
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
    </Fragment> 
    )
};

export default Settings;