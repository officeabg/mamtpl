"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Form, Modal, Nav, Row } from "react-bootstrap";
const Select = dynamic(() => import("react-select"), { ssr: false });
const Address = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //selectdata
    const Countrydata=[
        {value:'India', label:'India'},
        {value:'Germany', label:'Germany'},
        {value:'France', label:'France'},
        {value:'Usa', label:'Usa'},
        {value:'Argentina', label:'Argentina'},
    ]
return( 
    <Fragment>
         {/* Start:: Breadcrumb*/}
            <div className="border-bottom py-3">
                <div className="container">
                     {/* Page Header */}
                        <Seo title={"Address"} />
                        <Pageheader Heading="" Pagetitle={true} Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true},{title:"Customer", active:true}, {title:"Address", active:false}]} />
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
                                        <h6 className="fw-semibold mb-1">Jack Miller <i className="bi bi-check-circle-fill text-success fs-14" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Verified User"></i></h6>
                                        <p className="mb-0">Member Since 2005</p>
                                    </div>
                                </div>
                            </Card>
                            <Card className="custom-card">
                                <Card.Body className="p-0">
                                    <Nav className="nav nav-tabs flex-column candidateprofile-nav"> 
                                        <Link className="nav-link" href="/ecommerce/customer/customer/">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="32" y="72" width="192" height="136" rx="8" opacity="0.2"/><rect x="32" y="72" width="192" height="136" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M88,96V64a40,40,0,0,1,80,0V96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>My Orders</Link>
                                        <Link  className="nav-link" href="/ecommerce/customer/wishlist/">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,224S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54C232,168,128,224,128,224Z" opacity="0.2"/><path d="M128,224S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54C232,168,128,224,128,224Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>My Wishlist</Link>
                                        <Link className="nav-link" href="/ecommerce/customer/ordertracking/">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="200" cy="200" r="24" opacity="0.2"/><circle cx="200" cy="200" r="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M72,56h96a32,32,0,0,1,0,64H72a40,40,0,0,0,0,80H176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Order Tracking</Link>
                                        <Link  className="nav-link" href="/ecommerce/customer/refunds/">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,128h24a40,40,0,0,1,0,80H128Z" opacity="0.2"/><path d="M128,48H112a40,40,0,0,0,0,80h16Z" opacity="0.2"/><line x1="128" y1="24" x2="128" y2="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="208" x2="128" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Refunds</Link>
                                        <Link  className="nav-link active" href="/ecommerce/customer/address/">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,32H64a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V40A8,8,0,0,0,208,32ZM136,144a32,32,0,1,1,32-32A32,32,0,0,1,136,144Z" opacity="0.2"/><circle cx="136" cy="112" r="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="32" y1="72" x2="56" y2="72" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="32" y1="128" x2="56" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="32" y1="184" x2="56" y2="184" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M88,168a60,60,0,0,1,96,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><rect x="40" y="48" width="192" height="160" rx="8" transform="translate(264 -8) rotate(90)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Address Book</Link>
                                        <Link  className="nav-link" href="/ecommerce/customer/settings/">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2"/><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M130.05,206.11c-1.34,0-2.69,0-4,0L94,224a104.61,104.61,0,0,1-34.11-19.2l-.12-36c-.71-1.12-1.38-2.25-2-3.41L25.9,147.24a99.15,99.15,0,0,1,0-38.46l31.84-18.1c.65-1.15,1.32-2.29,2-3.41l.16-36A104.58,104.58,0,0,1,94,32l32,17.89c1.34,0,2.69,0,4,0L162,32a104.61,104.61,0,0,1,34.11,19.2l.12,36c.71,1.12,1.38,2.25,2,3.41l31.85,18.14a99.15,99.15,0,0,1,0,38.46l-31.84,18.1c-.65,1.15-1.32,2.29-2,3.41l-.16,36A104.58,104.58,0,0,1,162,224Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Settings</Link>
                                    </Nav>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={9}>
                            <div className="d-flex align-items-center justify-content-between flex-wrap mb-4 gap-2">
                                <div>
                                    <h5 className="fw-semibold mb-0">My Addresses</h5>                                    
                                </div>
                                <div>
                                    <Button variant="primary" className="btn"  onClick={handleShow}> <i className="ti ti-plus ms-1"></i> Add New Address</Button>
                                </div>
                            </div>
                            <Row>
                                <Col md={6}>
                                    <Card className="custom-card card-style-6">
                                        <Card.Body className="p-3">
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <div className="flex-grow-1">
                                                    <div className="d-flex align-items-center gap-2 card-style-6-avatar">
                                                        <div className="min-w-fit-content">
                                                            <span className="avatar rounded-circle"><i className="ti ti-home fs-16"></i></span>
                                                        </div>
                                                        <h6 className="fs-16 mb-0 fw-semibold">Home</h6>
                                                    </div>
                                                </div>
                                                <div className="min-w-fit-content">
                                                    <div className="d-flex gap-2">
                                                        <input className="form-check-input" type="radio" id="address1" name="default-address" defaultChecked/>
                                                        <label className="form-check-label cursor-pointer" htmlFor="address1">Default</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="mb-1 fw-semibold">Ruby Disousa</h6>
                                            <p className="mb-1 fw-500 fs-13">rubyakuner@ginna.mail</p>
                                            <p className="mb-2 fw-500 fs-13">+11-23-1116773</p>
                                            <p className="mb-0">
                                                H.No: 3-116/458, Golden Park, Marias St.,
                                                Near 12Amet Residency, 14756, United States Of America
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card className="custom-card card-style-6">
                                        <Card.Body className="p-3">
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <div className="flex-grow-1">
                                                    <div className="d-flex align-items-center gap-2 card-style-6-avatar">
                                                        <div className="min-w-fit-content">
                                                            <span className="avatar rounded-circle"><i className="ti ti-briefcase fs-16"></i></span>
                                                        </div>
                                                        <h6 className="fs-16 mb-0 fw-semibold">Work</h6>
                                                    </div>
                                                </div>
                                                <div className="min-w-fit-content">
                                                    <div className="d-flex gap-2">
                                                        <input className="form-check-input" type="radio" id="address2" name="default-address"/>
                                                        <label className="form-check-label cursor-pointer" htmlFor="address2">Default</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="mb-1 fw-semibold">Ruby Disousa</h6>
                                            <p className="mb-1 fw-500 fs-13">rubyakuner@ginna.mail</p>
                                            <p className="mb-2 fw-500 fs-13">+11-23-1116773</p>
                                            <p className="mb-0">
                                                Taj Building, 3rd Floor, Room No: 3, Silver St.,
                                                Adugiahsuk, LICE, 14756, United States Of America
                                            </p>
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
                <Row className="justify-content-center">
                    <Col lg={6} className="text-center">
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
                    </Col>
                </Row>
            </section>
            {/* End:: Section-2 */}
            {/* <!-- Start:: Add New Address Modal --> */}
        <Modal centered className="modal-lg fade" show={show} onHide={handleClose} id="add-newaddress-modal" data-bs-keyboard="false" tabIndex={-1} aria-hidden="true">
                <Modal.Header closeButton className="">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">Add New Address</h1>
                </Modal.Header>
                <Modal.Body>
                    <div className="row gy-4">
                        <Col xl={6}>
                            <Form.Label htmlFor="First-name" className="form-label">First Name</Form.Label>
                            <Form.Control type="text" id="First-name" placeholder="First Name" defaultValue="Jack Miller"/>
                        </Col>
                        <Col xl={6}>
                            <Form.Label htmlFor="Last-Name" className="form-label">Last Name</Form.Label> 
                            <Form.Control type="text" id="Last-Name" placeholder="Last Name" defaultValue="andrewretail"/>
                        </Col> 
                        <Col xl={6}>
                            <Form.Label htmlFor="email-address" className="form-label">Email Address :</Form.Label>
                            <Form.Control type="text" id="email-address" placeholder="xyz@gmail.com" defaultValue="json@gmail.com"/>
                        </Col>
                        <Col xl={6}>
                            <Form.Label htmlFor="phone-number" className="form-label">Mobile Number :</Form.Label>
                            <Form.Control type="text" id="phone-number" placeholder="*** *** ****" defaultValue="65432 76765"/>
                        </Col>
                        <Col xl={6}>
                            <Form.Label htmlFor="Country" className="form-label">Country :</Form.Label>
                            <Select name="colors" options={Countrydata} className="basic-multi-select"
                                menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Countrydata[0]]}
                            />
                        </Col>
                        <Col xl={6}>
                            <Form.Label htmlFor="State" className="form-label">State :</Form.Label>
                            <Form.Control type="text" id="State" placeholder="State"/>
                        </Col>
                        <Col xl={6}>
                            <Form.Label htmlFor="Address" className="form-label">Address :</Form.Label>
                            <Form.Control type="text" id="Address" placeholder="Address" defaultValue="H.No: 3-116/458, Golden Park, USA"/>
                        </Col>
                        <Col xl={6}>
                            <Form.Label htmlFor="Zip-Code" className="form-label">Zip Code :</Form.Label>
                            <Form.Control type="text" id="Zip-Code" placeholder="Zip Code" defaultValue="1234"/>
                        </Col>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="" type="button" className="btn btn-light" data-bs-dismiss="modal" onClick={handleClose}>Cancel</Button>
                  <Button variant="" type="button" className="btn btn-primary">Add Address</Button>
                </Modal.Footer>
          </Modal>
        {/* <!-- End:: Add New Address Modal --> */}
    </Fragment>
    )
};

export default Address;