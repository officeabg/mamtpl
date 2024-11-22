"use client"
import { Dateformatdata, Daysdata, Encryptiondata, Keywordsdata, Languagedata, Paymentdata, Protocoldata, Timeformatdata, Timezonedata } from "@/shared/data/apps/ecommerce/admin/addsettingsdata";
import dynamic from "next/dynamic";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Form, Nav, Row, Tab } from "react-bootstrap";
const Select = dynamic(() => import("react-select"), { ssr: false });
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Appsettings = () => {
//image upload

const [images1, setImages1] = useState<any>([]);
const [selectedImage1, setSelectedImage1] = useState(null);

const handleFileChange1 = (e:any) => {
    const file = e.target.files[0];
    if (file) {
        const reader:any = new FileReader();
        reader.onloadend = () => {
            setSelectedImage1(reader.result);
        };
        reader.readAsDataURL(file);
    }
};

const [images2, setImages2] = useState<any>([]);
const [selectedImage2, setSelectedImage2] = useState(null);

const handleFileChange2 = (e:any) => {
    const file = e.target.files[0];
    if (file) {
        const reader:any = new FileReader();
        reader.onloadend = () => {
            setSelectedImage2(reader.result);
        };
        reader.readAsDataURL(file);
    }
};

const [images3, setImages3] = useState<any>([]);
const [selectedImage3, setSelectedImage3] = useState(null);

const handleFileChange3 = (e:any) => {
    const file = e.target.files[0];
    if (file) {
        const reader:any = new FileReader();
        reader.onloadend = () => {
            setSelectedImage3(reader.result);
        };
        reader.readAsDataURL(file);
    }
};
const [images4, setImages4] = useState<any>([]);
const [selectedImage4, setSelectedImage4] = useState(null);

const handleFileChange4 = (e:any) => {
    const file = e.target.files[0];
    if (file) {
        const reader:any = new FileReader();
        reader.onloadend = () => {
            setSelectedImage4(reader.result);
        };
        reader.readAsDataURL(file);
    }
};
const [images5, setImages5] = useState<any>([]);
const [selectedImage5, setSelectedImage5] = useState(null);

const handleFileChange5 = (e:any) => {
    const file = e.target.files[0];
    if (file) {
        const reader:any = new FileReader();
        reader.onloadend = () => {
            setSelectedImage5(reader.result);
        };
        reader.readAsDataURL(file);
    }
};
return ( 
    <Fragment>
                 {/* Page Header */}
                    <Seo title={"App Settings"} />
                    <Pageheader Heading="App Settings" Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true}, {title:"Admin", active:true}, {title:"App Settings", active:false},]} />
                {/* Page Header Close */}
                
                {/* Start::row-1 */}
                <Row>
                    <Tab.Container defaultActiveKey="first">
                        <Col xl={3}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Body className="p-0">
                                    <Nav className="nav-tabs flex-column candidateprofile-nav" role="tablist"> 
                                        <Nav.Link eventKey="first" className="nav-link" data-bs-toggle="tab" role="tab"
                                            aria-current="page" href="#general-vertical-link" aria-selected="true">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="96" r="64" opacity="0.2"/><circle cx="128" cy="96" r="64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M32,216c19.37-33.47,54.55-56,96-56s76.63,22.53,96,56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                            General Settings</Nav.Link>
                                            <Nav.Link eventKey="second" className="nav-link" data-bs-toggle="tab" role="tab"
                                            aria-current="page" href="#email-vertical-link" aria-selected="false"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="224 56 128 144 32 56 224 56" opacity="0.2"/><path d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><polyline points="224 56 128 144 32 56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Email Settings</Nav.Link>
                                            <Nav.Link eventKey="third" className="nav-link" data-bs-toggle="tab" role="tab"
                                            aria-current="page" href="#seo-vertical-link" aria-selected="false"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="152" y="40" width="56" height="168" opacity="0.2"/><polyline points="48 208 48 136 96 136" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="224" y1="208" x2="32" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><polyline points="96 208 96 88 152 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><polyline points="152 208 152 40 208 40 208 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>SEO</Nav.Link>
                                            <Nav.Link eventKey="fourth" className="nav-link" data-bs-toggle="tab" role="tab"
                                            aria-current="page" href="#google-analytics-vertical-link" aria-selected="false"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="88" opacity="0.2"/><path d="M128,128h88a88,88,0,1,1-20.11-56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Google Analytics</Nav.Link>
                                            <Nav.Link eventKey="fifth" className="nav-link" data-bs-toggle="tab" role="tab"
                                            aria-current="page" href="#custom-css-js-vertical-link" aria-selected="false"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="192 168 240 128 192 88 64 88 16 128 64 168 192 168" opacity="0.2"/><polyline points="64 88 16 128 64 168" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><polyline points="192 88 240 128 192 168" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="160" y1="40" x2="96" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Custom CSS & JS</Nav.Link> 
                                            <Nav.Link eventKey="sixth" className="nav-link" data-bs-toggle="tab" role="tab"
                                            aria-current="page" href="#social-logins-vertical-link" aria-selected="false"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,32A96,96,0,0,0,63.8,199.38h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.37A96,96,0,0,0,128,32Z" opacity="0.2"/><circle cx="128" cy="120" r="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M63.8,199.37a72,72,0,0,1,128.4,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M222.67,112A95.92,95.92,0,1,1,144,33.33" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><polyline points="184 56 200 72 232 40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Social Logins</Nav.Link>
                                            <Nav.Link eventKey="seven" className="nav-link" data-bs-toggle="tab" role="tab"
                                            aria-current="page" href="#google-captcha-vertical-link" aria-selected="false"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="40" opacity="0.2"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="88" x2="215.29" y2="88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="162.64" y1="148" x2="118.99" y2="223.6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="93.36" y1="148" x2="49.71" y2="72.4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Google reCAPTCHA</Nav.Link>
                                            <Nav.Link eventKey="eight" className="nav-link" data-bs-toggle="tab" role="tab"
                                            aria-current="page" href="#payment-gateways-vertical-link" aria-selected="false"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M24,96H232v96a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8Z" opacity="0.2"/><rect x="24" y="56" width="208" height="144" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="168" y1="168" x2="200" y2="168" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="120" y1="168" x2="136" y2="168" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="24" y1="96" x2="232" y2="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Payment Gateways</Nav.Link>
                                            <Nav.Link eventKey="nine" className="nav-link" data-bs-toggle="tab" role="tab"
                                            aria-current="page" href="#purchasecode-vertical-link" aria-selected="false"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="176 216 232 128 176 40 80 40 24 128 80 216 176 216" opacity="0.2"/><polyline points="80 40 24 128 80 216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><polyline points="176 40 232 128 176 216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>Purchase Code</Nav.Link>
                                    </Nav>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" className="show  p-0 border-0" id="general-vertical-link"
                                    role="tabpanel">
                                    <Row>
                                        <Col lg={12}>
                                            <Card className="custom-card">
                                                <Card.Header>
                                                    <Card.Title className="flex-fill">
                                                        App Title & Logos
                                                    </Card.Title>
                                                </Card.Header>
                                                <Card.Body>
                                                    <div className="row gy-4">
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="app-title" className="form-label">App Title</Form.Label>
                                                            <Form.Control type="text" className="form-control" id="app-title" placeholder="App Title" defaultValue="Spruko" />
                                                        </Col>
                                                        <Col xl={4}>
                                                            <Card className="custom-card shadow-none app-logo-upload mb-0">
                                                                <Card.Body>
                                                                    <div className="upload-logo">
                                                                        <img src={selectedImage1 || '../../../../assets/images/brand-logos/desktop-logo.png'} alt="" />
                                                                        <Button variant="" className="btn btn-danger logo-delete btn-icon btn-sm rounded-circle" type="button">
                                                                            <i className="bi bi-x"></i>
                                                                        </Button>
                                                                    </div>
                                                                    <Form.Label htmlFor="formFile" className="form-label fw-semibold">Upload Dark Logo</Form.Label>
                                                                    <Form.Control className="form-control" type="file" id="formFile"  onChange={(e:any) => {
                                                                                handleFileChange1(e);
                                                                                setImages1([...images1, e.target.files[0]]);
                                                                            }} />
                                                                    <small className="text-muted"><i>The file size should not be more than 5MB</i></small>
                                                                </Card.Body>
                                                            </Card>
                                                        </Col>
                                                        <Col xl={4}>
                                                            <Card className="custom-card shadow-none app-logo-upload mb-0">
                                                                <Card.Body>
                                                                    <div className="upload-logo">
                                                                        <img src={selectedImage2 || '../../../../assets/images/brand-logos/toggle-logo.png'} alt="" />
                                                                        <Button variant="" className="btn btn-danger logo-delete btn-icon btn-sm rounded-circle" type="button">
                                                                            <i className="bi bi-x"></i>
                                                                        </Button>
                                                                    </div>
                                                                    <Form.Label htmlFor="formFile1" className="form-label fw-semibold">Upload Dark Icon</Form.Label>
                                                                    <Form.Control className="form-control" type="file" id="formFile1"  onChange={(e:any) => {
                                                                                handleFileChange2(e);
                                                                                setImages2([...images2, e.target.files[0]]);
                                                                            }} />
                                                                    <small className="text-muted"><i>The file size should not be more than 5MB</i></small>
                                                                </Card.Body>
                                                            </Card>
                                                        </Col>
                                                        <Col xl={4}>
                                                            <Card className="custom-card shadow-none app-logo-upload mb-0">
                                                                <Card.Body>
                                                                    <div className="upload-logo">
                                                                        <img src={selectedImage3 || '../../../../assets/images/brand-logos/favicon.ico'} alt="" />
                                                                        <Button variant="" className="btn btn-danger logo-delete btn-icon btn-sm rounded-circle" type="button">
                                                                            <i className="bi bi-x"></i>
                                                                        </Button>
                                                                    </div>
                                                                    <Form.Label htmlFor="formFile2" className="form-label fw-semibold">Upload Fav Icon</Form.Label>
                                                                    <Form.Control className="form-control" type="file" id="formFile2" onChange={(e:any) => {
                                                                                handleFileChange3(e);
                                                                                setImages3([...images3, e.target.files[0]]);
                                                                            }} />
                                                                    <small className="text-muted"><i>The file size should not be more than 5MB</i></small>
                                                                </Card.Body>
                                                            </Card> 
                                                        </Col>
                                                        <Col xl={4}>
                                                            <Card className="custom-card shadow-none app-logo-upload mb-0">
                                                                <Card.Body>
                                                                    <div className="upload-logo">
                                                                        <img src={selectedImage4 || '../../../../assets/images/brand-logos/desktop-dark.png'} alt="" />
                                                                        <Button variant="" className="btn btn-danger logo-delete btn-icon btn-sm rounded-circle" type="button">
                                                                            <i className="bi bi-x"></i>
                                                                        </Button>
                                                                    </div>
                                                                    <Form.Label htmlFor="formFile3" className="form-label fw-semibold">Upload Light Logo</Form.Label>
                                                                    <Form.Control className="form-control" type="file" id="formFile3" onChange={(e:any) => {
                                                                                handleFileChange4(e);
                                                                                setImages4([...images4, e.target.files[0]]);
                                                                            }} />
                                                                    <small className="text-muted"><i>The file size should not be more than 5MB</i></small>
                                                                </Card.Body>
                                                            </Card>
                                                        </Col>
                                                        <Col xl={4}>
                                                            <Card className="custom-card shadow-none app-logo-upload mb-0">
                                                                <Card.Body>
                                                                    <div className="upload-logo">
                                                                        <img src={selectedImage5 || '../../../../assets/images/brand-logos/toggle-dark.png'} alt="" />
                                                                        <Button variant="" className="btn btn-danger logo-delete btn-icon btn-sm rounded-circle" type="button">
                                                                            <i className="bi bi-x"></i>
                                                                        </Button>
                                                                    </div>
                                                                    <Form.Label htmlFor="formFile4" className="form-label fw-semibold">Upload Light Icon</Form.Label>
                                                                    <Form.Control className="form-control" type="file" id="formFile4" onChange={(e:any) => {
                                                                                handleFileChange5(e);
                                                                                setImages5([...images5, e.target.files[0]]);
                                                                            }} />
                                                                    <small className="text-muted"><i>The file size should not be more than 5MB</i></small>
                                                                </Card.Body>
                                                            </Card>
                                                        </Col>
                                                    </div>                                      
                                                </Card.Body>
                                                <Card.Footer>
                                                    <div className="float-end">
                                                        <Button variant="" className="btn btn-primary m-1">
                                                            Save Changes
                                                        </Button>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                        <Col lg={6}>
                                            <Card className="custom-card">
                                                <Card.Header>
                                                    <Card.Title className="flex-fill">
                                                        Set URL
                                                    </Card.Title>
                                                </Card.Header>
                                                <Card.Body>
                                                    <Form.Label htmlFor="first-name" className="form-label">Terms of Service URL</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="first-name" placeholder="https://" defaultValue="https://www.spruko.com" />
                                                </Card.Body>
                                                <Card.Footer>
                                                    <div className="float-end">
                                                        <Button variant="" className="btn btn-primary m-1">
                                                            Save Changes
                                                        </Button>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                        <Col lg={6}>
                                            <Card className="custom-card">
                                                <Card.Header>
                                                    <Card.Title className="flex-fill">
                                                        Global Language Settings
                                                    </Card.Title>
                                                </Card.Header>
                                                <Card.Body>
                                                    <Form.Label className="form-label">Select Language</Form.Label>
                                                    <Select  name="state" options={Languagedata} defaultValue={[Languagedata[0]]} className="js-example-placeholder-multiple w-full js-states"
                                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                                    />
                                                </Card.Body>
                                                <Card.Footer>
                                                    <div className="float-end">
                                                        <Button variant="" className="btn btn-primary m-1">
                                                            Save Changes
                                                        </Button>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                        <Col lg={12}>
                                            <Card className="custom-card">
                                                <Card.Header>
                                                    <Card.Title className="flex-fill">
                                                        Global Date & Time Format
                                                    </Card.Title>
                                                </Card.Header>
                                                <Card.Body>
                                                    <Row>
                                                        <Col lg={6}>
                                                            <Form.Label className="form-label">Select Date Format</Form.Label>
                                                             <Select  name="state" options={Dateformatdata} defaultValue={[Dateformatdata[0]]} className="js-example-placeholder-multiple w-full js-states"
                                                                menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                                            />
                                                        </Col>
                                                        <Col lg={6}>
                                                            <Form.Label className="form-label">Select Time Format</Form.Label>
                                                            <Select  name="state" options={Timeformatdata} defaultValue={[Timeformatdata[0]]} className="js-example-placeholder-multiple w-full js-states"
                                                                menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                                            />
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <div className="float-end">
                                                        <Button variant="" className="btn btn-primary m-1">
                                                            Save Changes
                                                        </Button>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                        <Col lg={6}>
                                            <Card className="custom-card">
                                                <Card.Header>
                                                    <Card.Title className="flex-fill">
                                                        First Day Of The Week
                                                    </Card.Title>
                                                </Card.Header>
                                                <Card.Body>
                                                    <Form.Label className="form-label">Select Day</Form.Label>
                                                    <Select  name="state" options={Daysdata} defaultValue={[Daysdata[4]]} className="js-example-placeholder-multiple w-full js-states"
                                                                menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                                            />
                                                </Card.Body>
                                                <Card.Footer>
                                                    <div className="float-end">
                                                        <Button variant="" className="btn btn-primary m-1">
                                                            Save Changes
                                                        </Button>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                        <Col lg={6}>
                                            <Card className="custom-card">
                                                <Card.Header>
                                                    <Card.Title className="flex-fill">
                                                        Global Timezones
                                                    </Card.Title>
                                                </Card.Header>
                                                <Card.Body>
                                                    <Form.Label className="form-label">Select Global Timezones</Form.Label>
                                                    <Select  name="state" options={Timezonedata} defaultValue={[Timezonedata[0]]} className="js-example-placeholder-multiple w-full js-states"
                                                                menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                                            />
                                                </Card.Body>
                                                <Card.Footer>
                                                    <div className="float-end">
                                                        <Button variant="" className="btn btn-primary m-1">
                                                            Save Changes
                                                        </Button>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                        <Col lg={6}>
                                            <Card className="custom-card">
                                                <Card.Header>
                                                    <Card.Title className="flex-fill">
                                                        Contact Us
                                                    </Card.Title>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="contact-us"/>
                                                        <Form.Label className="form-check-label" htmlFor="contact-us">Enable Contact Us</Form.Label>
                                                    </div>
                                                </Card.Header>
                                                <Card.Body>
                                                    <Form.Label htmlFor="email" className="form-label">Contact us Email</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="email" placeholder="Enter Email Here" defaultValue="spruko@gmail.com"/>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <div className="float-end">
                                                        <Button variant="" className="btn btn-primary m-1">
                                                            Save Changes
                                                        </Button>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                        <Col lg={6}>
                                            <Card className="custom-card">
                                                <Card.Header>
                                                    <Card.Title className="flex-fill">
                                                        Contact Us
                                                    </Card.Title>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="contact-us11"/>
                                                        <Form.Label className="form-check-label" htmlFor="contact-us1">Enable Contact Us</Form.Label>
                                                    </div>
                                                </Card.Header>
                                                <Card.Body>
                                                    <Form.Label htmlFor="email1" className="form-label">Contact us Email</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="email1" placeholder="Enter Email Here" defaultValue="spruko@gmail.com"/>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <div className="float-end">
                                                        <Button variant="" className="btn btn-primary m-1">
                                                            Save Changes
                                                        </Button>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                        <Col lg={12}>
                                            <Card className="custom-card">
                                                <Card.Header>
                                                    <Card.Title className="flex-fill">
                                                        Color Settings
                                                    </Card.Title>
                                                </Card.Header>
                                                <Card.Body>
                                                    <Row>
                                                        <Col lg={6}>
                                                            <Form.Label className="form-label">Primary Color</Form.Label>        
                                                            <div className="app-color-picker">
                                                                <input type="color" className="form-control form-control-color border-0 bg-transparent"
                                                                id="exampleColorInput1" defaultValue="#24c5a8" title="Choose your color"/>      
                                                                <span>rgb(12, 191, 159)</span>                                              
                                                            </div>                                        
                                                        </Col>
                                                        <Col lg={6}>
                                                            <Form.Label className="form-label">Secondary Color</Form.Label>        
                                                            <div className="app-color-picker">
                                                                <input type="color" className="form-control form-control-color border-0 bg-transparent"
                                                                id="exampleColorInput" defaultValue="#00ccff" title="Choose your color"/>      
                                                                <span>rgb(0, 204, 255)</span>                                              
                                                            </div>                                        
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <div className="float-end">
                                                        <Button variant="" className="btn btn-primary m-1">
                                                            Save Changes
                                                        </Button>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second" className="p-0 border-0" id="email-vertical-link"
                                    role="tabpanel">
                                    <Card className="custom-card">
                                        <Card.Header>
                                            <Card.Title>
                                                Send Test Mail
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <Form.Label htmlFor="test-email" className="form-label">Send Test Mail</Form.Label>
                                            <div className="d-flex gap-2">
                                                <Form.Control type="text" className="form-control" id="test-email" placeholder="Enter Email Here" defaultValue="spruko@gmail.com"/>
                                                <Button variant="" className="btn btn-primary">
                                                    Send
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card className="custom-card">
                                        <Card.Header>
                                            <Card.Title>
                                                Email Settings
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <div className="row gy-4">
                                                <Col lg={6}>
                                                    <Form.Label htmlFor="mail-protocol" className="form-label">Mail Protocol</Form.Label>
                                                    <Select  name="state" options={Protocoldata} defaultValue={[Protocoldata[0]]} className="js-example-placeholder-multiple w-full js-states"
                                                                menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                                            />
                                                </Col>
                                                <Col lg={6}>
                                                    <Form.Label htmlFor="mail-host" className="form-label">Mail Host</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="mail-host" placeholder="Enter Email Here" defaultValue="spruko@gmail.com" />
                                                </Col>
                                                <Col lg={6}>
                                                    <Form.Label htmlFor="mail-port" className="form-label">Mail Port</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="mail-port" placeholder="Enter Port Here" defaultValue="564" />
                                                </Col>
                                                <Col lg={6}>
                                                    <Form.Label htmlFor="mail-user-name" className="form-label">Mail Username</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="mail-user-name" placeholder="Enter Username Here" defaultValue="d-not-reply@spruko.com" />
                                                </Col>
                                                <Col lg={6}>
                                                    <Form.Label htmlFor="mail-password" className="form-label">Mail Password</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="mail-password" placeholder="Enter Password Here" defaultValue="********" />
                                                </Col>
                                                <Col lg={6}>
                                                    <Form.Label htmlFor="mail-encryption" className="form-label">Mail Encryption</Form.Label>
                                                    <Select  name="state" options={Encryptiondata} defaultValue={[Encryptiondata[0]]} className="js-example-placeholder-multiple w-full js-states"
                                                                menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                                            />
                                                </Col>
                                                <Col lg={6}>
                                                    <Form.Label htmlFor="from-name" className="form-label">From Name</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="from-name" placeholder="Enter Name Here" defaultValue="Spruko"/>
                                                </Col>
                                                <Col lg={6}>
                                                    <Form.Label htmlFor="from-email" className="form-label">From Email</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="from-email" placeholder="Enter Email Here" defaultValue="do-not-reply@spruko.com"/>
                                                </Col>
                                            </div>
                                        </Card.Body>
                                        <Card.Footer>
                                            <div className="float-end">
                                                <Button variant="" className="btn btn-primary m-1">
                                                    Save Changes
                                                </Button>
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third" className="p-0 border-0" id="seo-vertical-link"
                                    role="tabpanel">
                                    <Card className="custom-card">
                                        <Card.Header>
                                            <Card.Title className="flex-fill">
                                                SEO
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <div className="row gy-4">
                                                <Col lg={12}>
                                                    <Form.Label htmlFor="title" className="form-label">Title</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="title" placeholder="Enter Title Here" defaultValue="My Desk"/>
                                                </Col>
                                                <Col lg={12}>
                                                    <Form.Label htmlFor="description" className="form-label">Description</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="description" placeholder="Enter Description Here" defaultValue="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"/>
                                                </Col>
                                                <Col lg={12}>
                                                    <Form.Label htmlFor="keywords" className="form-label">Keywords</Form.Label>
                                                    <Select  name="state" options={Keywordsdata} defaultValue={[Keywordsdata[0]]} className="js-example-placeholder-multiple w-full js-states"
                                                                menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                                            />
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
                                <Tab.Pane eventKey="fourth" className="p-0 border-0" id="google-analytics-vertical-link"
                                    role="tabpanel">
                                    <Card className="custom-card">
                                        <Card.Header>
                                            <Card.Title className="flex-fill">
                                                Google Analytics
                                            </Card.Title>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" role="switch" id="contact-us1" />
                                                <Form.Label className="form-check-label" htmlFor="contact-us1">Enable Google Analytics</Form.Label>
                                            </div>
                                        </Card.Header>
                                        <Card.Body>
                                            <Form.Label htmlFor="google-analytics" className="form-label">Google Analytics ID</Form.Label>
                                            <Form.Control type="text" className="form-control" id="google-analytics" placeholder="Enter ID Here" defaultValue="87246"/>                    
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
                                <Tab.Pane eventKey="fifth" className="p-0 border-0" id="custom-css-js-vertical-link"
                                    role="tabpanel">
                                    <Card className="custom-card">
                                        <Card.Header>
                                            <Card.Title>
                                                Custom CSS & JS
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <div className="alert alert-primary text-default alert-dismissible fade show custom-alert-icon shadow-sm mb-4" role="alert">
                                                If you feel that you need more advanced design changes and you're familiar with coding, then you can easily add custom CSS and Java Script to make your website look even more unique.
                                            </div>
                                            <div className="row gy-4">
                                                <Col lg={12}>
                                                    <Form.Label htmlFor="custom-css" className="form-label">Custom CSS</Form.Label>
                                                    <textarea className="form-control mb-2" id="custom-css" rows={7} placeholder="custom-css"></textarea>
                                                    <p className="mb-0">Write styles using style tag like,
                                                    </p>
                                                </Col>
                                                <Col lg={12}>
                                                    <Form.Label htmlFor="custom-js" className="form-label">Custom JS</Form.Label>
                                                    <textarea className="form-control mb-2" id="custom-js" rows={7} placeholder="custom-js"></textarea>
                                                    <p className="mb-0">Write script using script tag like, <code>&lt;script&gt; document.getElementById("hello").innerHTML = "Hello World!";   &lt;/script&gt;</code></p>
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
                                <Tab.Pane eventKey="sixth" className="p-0 border-0" id="social-logins-vertical-link"
                                    role="tabpanel">
                                    <Row>
                                        <Col xl={6}>
                                            <Card className="custom-card">
                                                <Card.Header>
                                                    <Card.Title className="flex-grow-1">
                                                        Google Login Credentials
                                                        <p className="mb-0 fs-12 fw-normal">Enable / disable app credentials for Google login</p>
                                                    </Card.Title>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="google-login"/>
                                                        <Form.Label className="form-check-label" htmlFor="google-login">Enable Google</Form.Label>
                                                    </div>
                                                </Card.Header>
                                                <Card.Body>
                                                    <div className="row gy-3">
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="google-id1" className="form-label">Google App ID</Form.Label>
                                                            <Form.Control type="text" className="form-control" id="google-id1" placeholder="Enter Here" defaultValue="54327812645fuygfeh"/>
                                                        </Col>
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="google-secret1" className="form-label">Google App Secret</Form.Label>
                                                            <Form.Control type="text" className="form-control" id="google-secret1" placeholder="Enter Here" defaultValue="54327812645fuygfeh"/>
                                                        </Col>
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="google-callback" className="form-label">Google callback url</Form.Label> 
                                                            <Form.Control type="text" className="form-control" id="google-callback" placeholder="https://" defaultValue="https://spruko.com/customer/login/google/callback" disabled/>
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
                                        </Col>
                                        <Col xl={6}>
                                            <Card className="custom-card">
                                                <Card.Header>
                                                    <Card.Title className="flex-grow-1">
                                                        Facebook Login Credentials
                                                        <p className="mb-0 fs-12 fw-normal">Enable / disable app credentials for Facebook login</p>
                                                    </Card.Title>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="Facebook-login" defaultChecked/>
                                                        <Form.Label className="form-check-label" htmlFor="Facebook-login">Enable Facebook</Form.Label>
                                                    </div>
                                                </Card.Header>
                                                <Card.Body>
                                                    <div className="row gy-3">
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="facebook-id" className="form-label">Facebook App ID</Form.Label>
                                                            <Form.Control type="text" className="form-control" id="facebook-id" placeholder="Enter Here" defaultValue="54327812645fuygfeh"/>
                                                        </Col>
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="facebook-secret" className="form-label">Facebook App Secret</Form.Label>
                                                            <Form.Control type="text" className="form-control" id="facebook-secret" placeholder="Enter Here" defaultValue="54327812645fuygfeh"/>
                                                        </Col>
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="facebook-callback" className="form-label">Facebook callback url</Form.Label>
                                                            <Form.Control type="text" className="form-control" id="facebook-callback" placeholder="https://" defaultValue="https://spruko.com/customer/login/facebook/callback" disabled/>
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
                                        </Col>
                                        <Col xl={6}>
                                            <Card className="custom-card">
                                                <Card.Header>
                                                    <Card.Title className="flex-grow-1">
                                                        Twitter Login Credentials
                                                        <p className="mb-0 fs-12 fw-normal">Enable / disable app credentials for twitter login</p>
                                                    </Card.Title>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="twitter-login"/>
                                                        <Form.Label className="form-check-label" htmlFor="twitter-login">Enable Twitter</Form.Label>
                                                    </div>
                                                </Card.Header>
                                                <Card.Body>
                                                    <div className="row gy-3">
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="twitter-id" className="form-label">Twitter App ID</Form.Label>
                                                            <Form.Control type="text" className="form-control" id="twitter-id" placeholder="Enter Here" defaultValue="54327812645fuygfeh"/>
                                                        </Col>
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="twitter-secret" className="form-label">Twitter App Secret</Form.Label>
                                                            <Form.Control type="text" className="form-control" id="twitter-secret" placeholder="Enter Here" defaultValue="54327812645fuygfeh"/>
                                                        </Col>
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="twitter-callback" className="form-label">Twitter callback url</Form.Label>
                                                            <Form.Control type="text" className="form-control" id="twitter-callback" placeholder="https://" defaultValue="https://spruko.com/customer/login/twitter/callback" disabled/>
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
                                        </Col>
                                        <Col xl={6}>
                                            <Card className="custom-card">
                                                <Card.Header>
                                                    <Card.Title className="flex-grow-1">
                                                        Github Login Credentials
                                                        <p className="mb-0 fs-12 fw-normal">Enable / disable app credentials for github login</p>
                                                    </Card.Title>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="github-login"/>
                                                        <Form.Label className="form-check-label" htmlFor="github-login">Enable Github</Form.Label>
                                                    </div>
                                                </Card.Header>
                                                <Card.Body>
                                                    <div className="row gy-3">
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="github-id" className="form-label">Github App ID</Form.Label>
                                                            <Form.Control type="text" className="form-control" id="github-id" placeholder="Enter Here" defaultValue="54327812645fuygfeh"/>
                                                        </Col>
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="github-secret" className="form-label">Github App Secret</Form.Label>
                                                            <Form.Control type="text" className="form-control" id="github-secret" placeholder="Enter Here" defaultValue="54327812645fuygfeh"/>
                                                        </Col>
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="github-callback" className="form-label">Github callback url</Form.Label>
                                                            <Form.Control type="text" className="form-control" id="github-callback" placeholder="https://" defaultValue="https://spruko.com/customer/login/github/callback" disabled/>
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
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="seven" className="p-0 border-0" id="google-captcha-vertical-link"
                                    role="tabpanel">
                                    <Row>
                                        <Col xl={12}>
                                            <Card className="custom-card">
                                                <Card.Header>
                                                    <Card.Title className="flex-grow-1">
                                                        Google Re-Captcha Settings
                                                    </Card.Title>
                                                </Card.Header>
                                                <Card.Body>
                                                    <div className="row gy-3">
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="google-id" className="form-label">Site Key</Form.Label>
                                                            <Form.Control type="text" className="form-control" id="google-id" placeholder="Enter Here" defaultValue="54327812645fuygfeh" />
                                                        </Col>
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="google-secret" className="form-label">Secret Key</Form.Label>
                                                            <Form.Control type="text" className="form-control" id="google-secret" placeholder="Enter Here" defaultValue="54327812645fuygfeh" />
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
                                                    <Card.Title className="flex-grow-1">
                                                        Captcha Setting In Forms
                                                    </Card.Title>
                                                </Card.Header>
                                                <Card.Body>
                                                    <div className="row gy-3">
                                                        <Col xl={12}>
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" role="switch" id="contact-form" defaultChecked />
                                                                <Form.Label className="form-check-label" htmlFor="contact-form">Enable On Contact Form</Form.Label>
                                                            </div>
                                                        </Col>
                                                        <Col xl={12}>
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" role="switch" id="register-form" defaultChecked />
                                                                <Form.Label className="form-check-label" htmlFor="register-form">Enable On Register Form</Form.Label>
                                                            </div>
                                                        </Col>
                                                        <Col xl={12}>
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" role="switch" id="login-form" defaultChecked />
                                                                <Form.Label className="form-check-label" htmlFor="login-form">Enable On Login Form</Form.Label>
                                                            </div>
                                                        </Col>
                                                        <Col xl={12}>
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" role="switch" id="guest-ticket" defaultChecked />
                                                                <Form.Label className="form-check-label" htmlFor="guest-ticket">Enable On Guest Ticket</Form.Label>
                                                            </div>
                                                        </Col>
                                                        <Col xl={12}>
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" role="switch" id="admin-login-form" defaultChecked />
                                                                <Form.Label className="form-check-label" htmlFor="admin-login-form">Enable On Admin Login Form</Form.Label>
                                                            </div>
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
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="eight" className="p-0 border-0" id="payment-gateways-vertical-link"
                                    role="tabpanel">
                                    <Row>
                                        <Col xl={6}>
                                            <Card className="custom-card">
                                                <Card.Header>
                                                    <Card.Title className="flex-grow-1">
                                                        Paypal Settings
                                                    </Card.Title>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="paypal" />
                                                        <Form.Label className="form-check-label" htmlFor="paypal">Enable Paypal</Form.Label>
                                                    </div>
                                                </Card.Header>
                                                <Card.Body>
                                                    <div className="row gy-3">
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="paypal-id" className="form-label">Paypal ID</Form.Label>
                                                            <Form.Control type="text" className="form-control" id="paypal-id" placeholder="Enter Here" defaultValue="54327812645fuygfeh" />
                                                        </Col>
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="paypal-secret" className="form-label">Paypal Secret</Form.Label>
                                                            <Form.Control type="text" className="form-control" id="paypal-secret" placeholder="Enter Here" defaultValue="54327812645fuygfeh" />
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
                                        </Col>
                                        <Col xl={6}>
                                            <Card className="custom-card">
                                                <Card.Header>
                                                    <Card.Title className="flex-grow-1">
                                                        Stripe Settings
                                                    </Card.Title>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="Stripe-login" defaultChecked /> 
                                                        <Form.Label className="form-check-label" htmlFor="Stripe-login">Enable Stripe</Form.Label>
                                                    </div>
                                                </Card.Header>
                                                <Card.Body>
                                                    <div className="row gy-3">
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="stripe-id" className="form-label">Stripe ID</Form.Label>
                                                            <Form.Control type="text" className="form-control" id="stripe-id" placeholder="Enter Here" defaultValue="54327812645fuygfeh" /> 
                                                        </Col>
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="stripe-secret" className="form-label">Stripe Secret</Form.Label>
                                                            <Form.Control type="text" className="form-control" id="stripe-secret" placeholder="Enter Here" defaultValue="54327812645fuygfeh" /> 
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
                                        </Col>
                                        <Col xl={6}>
                                            <Card className="custom-card">
                                                <Card.Header>
                                                    <Card.Title className="flex-grow-1">
                                                        Razorpay Settings
                                                    </Card.Title>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="twitter-login1" />
                                                        <Form.Label className="form-check-label" htmlFor="twitter-login1">Enable Razorpay</Form.Label>
                                                    </div>
                                                </Card.Header>
                                                <Card.Body>
                                                    <div className="row gy-3">
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="razorpay-id" className="form-label">Razorpay ID</Form.Label>
                                                            <Form.Control type="text" className="form-control" id="razorpay-id" placeholder="Enter Here" defaultValue="54327812645fuygfeh" />
                                                        </Col>
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="razorpay-secret" className="form-label">Razorpay Secret</Form.Label>
                                                            <Form.Control type="text" className="form-control" id="razorpay-secret" placeholder="Enter Here" defaultValue="54327812645fuygfeh" />
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
                                        </Col>
                                        <Col xl={6}>
                                            <Card className="custom-card">
                                                <Card.Header>
                                                    <Card.Title className="flex-grow-1">
                                                        Paystack Settings
                                                    </Card.Title>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="paystack-login1" />
                                                        <Form.Label className="form-check-label" htmlFor="paystack-login1">Enable Paystack</Form.Label>
                                                    </div>
                                                </Card.Header>
                                                <Card.Body>
                                                    <div className="row gy-3">
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="paystack-id" className="form-label">Paystack ID</Form.Label>
                                                            <Form.Control type="text" className="form-control" id="paystack-id" placeholder="Enter Here" defaultValue="54327812645fuygfeh" />
                                                        </Col>
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="paystack-secret" className="form-label">Paystack Secret</Form.Label>
                                                            <Form.Control type="text" className="form-control" id="paystack-secret" placeholder="Enter Here" defaultValue="54327812645fuygfeh" />
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
                                        </Col>
                                        <Col xl={12}>
                                            <Card className="custom-card">
                                                <Card.Header>
                                                    <Card.Title className="flex-grow-1">
                                                        Manual Payment Methods
                                                    </Card.Title>
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="paystack-login"/>
                                                        <Form.Label className="form-check-label" htmlFor="paystack-login">Enable Manual Payment</Form.Label>
                                                    </div>
                                                </Card.Header>
                                                <Card.Body>
                                                    <div className="row gy-3">
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="payment-name" className="form-label">Payment Name</Form.Label>
                                                            <Form.Control type="text" className="form-control" id="payment-name" placeholder="Enter Name Here" defaultValue="Bank"/>
                                                        </Col>
                                                        <Col xl={12}>
                                                            <Form.Label className="form-label">Payment Type</Form.Label>
                                                            <Select  name="state" options={Paymentdata} defaultValue={[Paymentdata[0]]} className="js-example-placeholder-multiple w-full js-states"
                                                                menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                                            />
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
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="nine" className="p-0 border-0" id="purchasecode-vertical-link"
                                    role="tabpanel">
                                    <Card className="custom-card">
                                        <Card.Header>
                                            <Card.Title className="flex-grow-1">
                                                Purchase Code
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <div className="row gy-3">
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="purchase-code" className="form-label">Purchase Code</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="purchase-code" placeholder="Enter Here" defaultValue="54327812645fuygfeh"/>
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="buyer-email" className="form-label">Buyer Email</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="buyer-email" placeholder="Enter Here" defaultValue="buyer@gmail.com"/>
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
                            </Tab.Content>
                        </Col>
                    </Tab.Container>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    )
};

export default Appsettings;