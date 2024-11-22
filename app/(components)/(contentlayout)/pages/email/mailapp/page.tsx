"use client"
import { Mails, Mails1 } from "@/shared/data/pages/mail/mailappdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Offcanvas, OverlayTrigger, Tooltip } from "react-bootstrap";
import SimpleBar from "simplebar-react";
const Select = dynamic(() => import("react-select"), { ssr: false });
const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
  });
const Mailapp = () => {
//
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

//
const Maildata =[
    {value:'jay@gmail.com', label:'jay@gmail.com'},
    {value:'kia@gmail.com', label:'kia@gmail.com'},
    {value:'don@gmail.com', label:'don@gmail.com'},
    {value:'kimo@gmail.com', label:'kimo@gmail.com'},
]

//Offcanvas
const [show1, setShow1] = useState(false);

const handleClose1 = () => setShow1(false);
const handleShow1 = () => setShow1(true);

///
    
const [isMailNavigationVisible, setMailNavigationVisible] = useState(false);
const [isTotalMailsVisible, setTotalMailsVisible] = useState(true);

// Function to handle toggle when clicked (Toggle1 scenario)
const Toggle1 = () => {
    if (window.innerWidth <= 992) {
        setMailNavigationVisible(true);
        setTotalMailsVisible(false);
    }
};

// Function to handle toggle when clicked (Toggle2 scenario)
const Toggle2 = () => {
    if (window.innerWidth <= 992) {
        setTotalMailsVisible(true); // Ensure total-mails is visible
        setMailNavigationVisible(false);
    }
};

// Function to handle resize events
const handleResize = () => {
    if (window.innerWidth <= 992) {
        // Below or equal to 992px screen width
        setMailNavigationVisible(true);
        setTotalMailsVisible(false);
    } else {
        // Above 992px screen width
        setMailNavigationVisible(true);
        setTotalMailsVisible(true);
    }
};

// Effect hook to handle initial setup and cleanup for resize events
useEffect(() => {
    handleResize(); // Set initial state based on current window width

    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
        window.removeEventListener('resize', handleResize); // Clean up listener on component unmount
    };
}, []);
    
return (
<Fragment>
                {/* Page Header */}
                    <Seo title={"Mail App"} />
                    <Pageheader Heading="Mail App" Pages={[{title:"Pages", active:true},{title:"Email", active:true},{title:"Mail App", active:false}]} />
                {/* Page Header Close */}

                <div className="main-mail-container mb-2 gap-2 d-flex">
                    <div className={`mail-navigation border ${isMailNavigationVisible ? 'd-block' : 'd-none'}`}>
                        <div className="d-grid align-items-top p-3 border-bottom">
                            <Button className="btn btn-success d-flex align-items-center justify-content-center" data-bs-toggle="modal" onClick={handleShow}
                            data-bs-target="#mail-Compose"> 
                                <i className="ri-add-circle-line fs-16 align-middle me-1"></i>Compose Mail
                            </Button>
                            <Modal size="lg" show={show} onHide={handleClose} className="modal-lg fade" id="mail-Compose" tabIndex={-1} aria-labelledby="mail-ComposeLabel" aria-hidden="true">
                                <Modal.Header className="" closeButton>
                                    <h6 className="modal-title" id="mail-ComposeLabel">Compose Mail</h6>
                                </Modal.Header>
                                <Modal.Body className="px-4">
                                    <div className="row">
                                        <Col xl={6} className="mb-2">
                                            <Form.Label htmlFor="fromMail" className="form-label">From<sup><i className="ri-star-s-fill text-success fs-8"></i></sup></Form.Label>
                                            <Form.Control type="email" className="form-control" id="fromMail" defaultValue="jackmiller2345@gmail.com" />
                                        </Col>
                                        <Col xl={6} className="mb-2">
                                            <Form.Label htmlFor="toMail" className="form-label">To<sup><i className="ri-star-s-fill text-success fs-8"></i></sup></Form.Label>
                                            <Select id="blog-tags" isMulti name="blog-tags" options={Maildata} className="block w-full text-[0.875rem] !rounded-md"
                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Category" defaultValue={[Maildata[0]]}
                                        />
                                        </Col>
                                        <Col xl={6} className="mb-2">
                                            <Form.Label htmlFor="mailCC" className="form-label text-dark fw-medium">Cc</Form.Label>
                                            <Form.Control type="email" className="form-control" id="mailCC" />
                                        </Col>
                                        <Col xl={6} className="mb-2">
                                            <Form.Label htmlFor="mailBcc" className="form-label text-dark fw-medium">Bcc</Form.Label>
                                            <Form.Control type="email" className="form-control" id="mailBcc" />
                                        </Col>
                                        <Col xl={12} className="mb-2">
                                            <Form.Label htmlFor="Subject" className="form-label">Subject</Form.Label>
                                            <Form.Control type="text" className="form-control" id="Subject" placeholder="Subject" />
                                        </Col>
                                        <Col xl={12}>
                                            <label className="col-form-label">Content :</label>
                                            <div className="mail-compose">
                                                <div id="mail-compose-editor"></div>
                                                <SunEditor/>
                                            </div>
                                        </Col>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className="">
                                    <Button variant="" type="button" className="btn btn-light" onClick={handleClose}
                                        data-bs-dismiss="modal">Cancel</Button>
                                    <Button variant="" type="button" className="btn btn-primary">Send</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                        <div className="d-flex gap-3 align-items-center p-3 bg-light">
                            <div>
                                <span className="avatar avatar-md online avatar-rounded">
                                    <img src="../../../assets/images/faces/9.jpg
                                    " alt="" />
                                </span>
                            </div>
                            <div>
                                <p className="fw-medium mb-0">Jack</p>
                                <p className="fs-13 mb-0">jack1992@gmail.com</p>
                            </div>
                        </div>
                        <div>
                            <SimpleBar>
                                <ul className="list-unstyled mail-main-nav" id="mail-main-nav">
                                    <li className="px-0 pt-0">
                                        <span className="fs-11 text-muted op-7 fw-medium">MAILS</span>
                                    </li>
                                    {Mails.map((idx)=>(
                                    <li className={`mail-type ${idx.class1}`} onClick={() => Toggle2()} key={Math.random()}>
                                        <Link scroll={false} href="#!">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className={`ri-${idx.icon} align-middle fs-14`}></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                {idx.text1}
                                                </span>
                                                <span className={idx.class}>{idx.text2}</span>
                                            </div>
                                        </Link>
                                    </li>
                                    ))}
                                    <li className="px-0">
                                        <span className="fs-11 text-muted op-7 fw-medium">SETTINGS</span>
                                    </li>
                                    <li>
                                        <Link scroll={false} href="#!">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-settings-3-line align-middle fs-14"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Settings
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="px-0">
                                        <span className="fs-11 text-muted op-7 fw-medium">LABELS</span>
                                    </li>
                                    <li>
                                        <Link scroll={false} href="#!">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-circle-fill align-middle fs-10 fw-medium text-secondary"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Mail
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link scroll={false} href="#!">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-circle-fill align-middle fs-10 fw-medium text-danger"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Home
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link scroll={false} href="#!">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-circle-fill align-middle fs-10 fw-medium text-success"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Work
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link scroll={false} href="#!">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-circle-fill align-middle fs-10 fw-medium text-dark"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Friends
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="px-0">
                                        <span className="fs-11 text-muted op-7 fw-medium">ONLINE USERS</span>
                                    </li>
                                    <li>
                                        <Link scroll={false} href="#!">
                                            <div className="d-flex align-items-top lh-1">
                                                <div className="me-2">
                                                    <span className="avatar avatar-sm online avatar-rounded">
                                                        <img src="../../../assets/images/faces/4.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="text-default fw-medium mb-1">Angelica</p>
                                                    <p className="fs-12 text-muted mb-0">Hello this is angelica.</p>
                                                </div>
                                            </div>
                                        </Link>    
                                    </li>
                                    <li>
                                        <Link scroll={false} href="#!">
                                            <div className="d-flex align-items-top lh-1">
                                                <div className="me-2">
                                                    <span className="avatar avatar-sm online avatar-rounded">
                                                        <img src="../../../assets/images/faces/6.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="text-default fw-medium mb-1">Rexha</p>
                                                    <p className="fs-12 text-muted mb-0">Thanks for sharing file &#128512;.</p>
                                                </div>
                                            </div>
                                        </Link>    
                                    </li>
                                </ul>
                            </SimpleBar>
                        </div>
                    </div>
                    <div className={`total-mails border ${isTotalMailsVisible ? 'd-block' : 'd-none'}`}>
                        <div className="p-3 d-flex align-items-center border-bottom flex-wrap gap-2">
                            <div className="me-3">
                                <input className="form-check-input" type="checkbox" id="checkAll" value="" aria-label="..." />
                            </div>
                            <div className="flex-fill">
                                <h6 className="fw-medium mb-0">All Mails</h6>
                            </div>
                            <div className="d-flex gap-2">
                                <div className="input-group">
                                    <input type="text" className="form-control shadow-none" placeholder="Search Email" aria-describedby="button-addon"/>
                                    <button className="btn btn-primary" type="button" id="button-addon"><i className="ri-search-line"></i></button>
                                </div>
                                <button className="btn btn-icon btn-light me-1 d-lg-none d-block total-mails-close" onClick={() => Toggle1()}>
                                    <i className="ri-close-line"></i>
                                </button>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" className="btn btn-icon btn-primary-light btn-wave no-caret" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ti ti-dots-vertical"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <li><Dropdown.Item href="#!">Recent</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Unread</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Mark All Read</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Spam</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Delete All</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <SimpleBar className="mail-messages" id="mail-messages">
                            <ul className="list-unstyled mb-0 mail-messages-container">
                                {Mails1.map((idx)=>(
                                <li key={Math.random()}className={idx.bordercls}>
                                    <div className="d-sm-flex align-items-top">
                                        <div className="me-3 mt-1">
                                            <input defaultChecked={idx.checked === 'defaultChecked'} className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." />
                                        </div>
                                        <div className="me-1 lh-1">
                                            <span
                                                className="avatar avatar-md me-2 avatar-rounded mail-msg-avatar">
                                                <img src={idx.img} alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <Link scroll={false} href="#!" data-bs-toggle="offcanvas" onClick={handleShow1}
                                            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                                <p className="mb-1 fs-12 fw-medium">
                                                    {idx.name} <span className={idx.badge}>{idx.badgetxt}</span><span
                                                        className="float-end text-muted fw-normal fs-11"><span className="me-2"><i className={idx.icon}></i></span>{idx.time}</span>
                                                </p>
                                            </Link>    
                                            <div className="mail-msg mb-0">
                                                <span className="d-block mb-0 fw-medium text-truncate w-75">{idx.title}</span>
                                                <div
                                                    className="fs-12 text-muted text-wrap text-truncate mail-msg-content">{idx.text}
                                                    <button className={`btn p-0 lh-1 mail-starred ${idx.star} border-0 float-end`}>
                                                        <i className="ri-star-fill fs-14"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                ))}
                            </ul>
                        </SimpleBar>
                    </div>
                    <div className="mail-recepients border">
                        <div className="p-3 border-bottom">
                        <OverlayTrigger placement="auto" overlay={<Tooltip className='tooltip'>Add Recepient</Tooltip>}>
                            <Button variant="" className="btn btn-light btn-icon rounded-pill" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Add Recepient"><i className="ri-add-line"></i></Button>
                        </OverlayTrigger>
                        </div>
                        <div className="p-3 d-flex flex-column align-items-center total-mail-recepients" id="mail-recepients">
                            <OverlayTrigger placement="auto" overlay={<Tooltip className='tooltip'>Abigail Scott</Tooltip>}>
                                <Link scroll={false} href="#!" className="mail-recepeint-person">
                                    <span className="avatar online avatar-rounded">
                                        <img src="../../../assets/images/faces/5.jpg" alt="" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Abigail Scott" />
                                    </span>
                                </Link>
                            </OverlayTrigger>
                            <OverlayTrigger placement="auto" overlay={<Tooltip className='tooltip'>Amelia Turner</Tooltip>}>
                                <Link scroll={false} href="#!" className="mail-recepeint-person">
                                    <span className="avatar online avatar-rounded">
                                        <img src="../../../assets/images/faces/7.jpg" alt="" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Amelia Turner" />
                                    </span>
                                </Link>
                            </OverlayTrigger>
                            <OverlayTrigger placement="auto" overlay={<Tooltip className='tooltip'>Aria Robinson</Tooltip>}>
                                <Link scroll={false} href="#!" className="mail-recepeint-person">
                                    <span className="avatar offline avatar-rounded">
                                        <img src="../../../assets/images/faces/4.jpg" alt="" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Aria Robinson" />
                                    </span>
                                </Link>
                            </OverlayTrigger>
                            <OverlayTrigger placement="auto" overlay={<Tooltip className='tooltip'>Harper Wilson</Tooltip>}>
                                <Link scroll={false} href="#!" className="mail-recepeint-person">
                                    <span className="avatar offline online avatar-rounded">
                                        <img src="../../../assets/images/faces/8.jpg" alt="" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Harper Wilson" />
                                    </span>
                                </Link>
                            </OverlayTrigger>
                            <OverlayTrigger placement="auto" overlay={<Tooltip className='tooltip'>Olivia Davis</Tooltip>}>
                                <Link scroll={false} href="#!" className="mail-recepeint-person">
                                    <span className="avatar offline avatar-rounded">
                                        <img src="../../../assets/images/faces/3.jpg" alt="" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Olivia Davis" />
                                    </span>
                                </Link>
                            </OverlayTrigger>
                            <OverlayTrigger placement="auto" overlay={<Tooltip className='tooltip'>Sophia White</Tooltip>}>
                                <Link scroll={false} href="#!" className="mail-recepeint-person">
                                    <span className="avatar offline avatar-rounded">
                                        <img src="../../../assets/images/faces/11.jpg" alt="" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Sophia White" />
                                    </span>
                                </Link>
                            </OverlayTrigger>
                            <OverlayTrigger placement="auto" overlay={<Tooltip className='tooltip'>Nathan Bennett</Tooltip>}>
                                <Link scroll={false} href="#!" className="mail-recepeint-person">
                                    <span className="avatar online avatar-rounded">
                                        <img src="../../../assets/images/faces/16.jpg" alt="" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Nathan Bennett" />
                                    </span>
                                </Link>
                            </OverlayTrigger>
                            <OverlayTrigger placement="auto" overlay={<Tooltip className='tooltip'>Henry Morgan</Tooltip>}>
                                <Link scroll={false} href="#!" className="mail-recepeint-person">
                                    <span className="avatar offline avatar-rounded">
                                        <img src="../../../assets/images/faces/10.jpg" alt="" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Henry Morgan" />
                                    </span>
                                </Link>
                            </OverlayTrigger>
                            <OverlayTrigger placement="auto" overlay={<Tooltip className='tooltip'>Leo Phillips</Tooltip>}>
                                <Link scroll={false} href="#!" className="mail-recepeint-person">
                                    <span className="avatar offline avatar-rounded">
                                        <img src="../../../assets/images/faces/15.jpg" alt="" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Leo Phillips" />
                                    </span>
                                </Link>
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>

                {/* <!-- Start::mail information offcanvas --> */}
                        <Offcanvas placement="end" show={show1} onHide={handleClose1} className="offcanvas-end mail-info-offcanvas" tabIndex={-1} id="offcanvasRight"
                            > 
                            <Offcanvas.Body className="p-0">
                                <div className="mails-information">
                                        <div className="mail-info-header d-flex flex-wrap gap-2 align-items-center">
                                            <div className="me-1">
                                                <span className="avatar avatar-md me-2 avatar-rounded mail-msg-avatar">
                                                    <img src="../../../assets/images/faces/12.jpg" alt=""/>
                                                </span>
                                            </div>    
                                            <div className="flex-fill">
                                                <h6 className="mb-0 fw-medium">Benjamin</h6>
                                                <span className="text-muted fs-12">benjamin2194@gmail.com</span>
                                            </div>
                                            <div className="mail-action-icons">
                                            <OverlayTrigger placement="right" overlay={<Tooltip className='tooltip'>Starred</Tooltip>}>
                                                <Button variant="" className="btn btn-icon btn-outline-light border" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Starred">
                                                    <i className="ri-star-line"></i>
                                                </Button>
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="right" overlay={<Tooltip className='tooltip'>Archive</Tooltip>}>
                                                <Button variant="" className="btn btn-icon btn-outline-light border ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Archive">
                                                    <i className="ri-inbox-archive-line"></i>
                                                </Button>
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="right" overlay={<Tooltip className='tooltip'>Report spam</Tooltip>}>
                                                <Button variant="" className="btn btn-icon btn-outline-light border ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Report spam">
                                                    <i className="ri-spam-2-line"></i>
                                                </Button>
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="right" overlay={<Tooltip className='tooltip'>Delete</Tooltip>}>
                                                <Button variant="" className="btn btn-icon btn-outline-light border ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Delete">
                                                    <i className="ri-delete-bin-line"></i>
                                                </Button>
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="right" overlay={<Tooltip className='tooltip'>Reply</Tooltip>}>
                                                <Button variant="" className="btn btn-icon btn-outline-light border ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Reply">
                                                    <i className="ri-reply-line"></i>
                                                </Button>
                                            </OverlayTrigger>
                                                <Button variant="" type="button" onClick={handleClose1} className="btn-close btn btn-sm btn-icon border" data-bs-dismiss="offcanvas"
                                                    aria-label="Close"></Button>
                                            </div>
                                            <div className="responsive-mail-action-icons">
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="" className="btn btn-icon btn-light btn-wave waves-light waves-effect waves-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="ti ti-dots-vertical"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <li><Dropdown.Item href="#!"><i className="ri-star-line me-1 align-middle d-inline-block"></i>Starred</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-inbox-archive-line me-1 align-middle d-inline-block"></i>Archive</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-spam-2-line me-1 align-middle d-inline-block"></i>Report Spam</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-reply-line me-1 align-middle d-inline-block"></i>Reply</Dropdown.Item></li>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <Button variant=""  onClick={handleClose1} className="btn btn-icon btn-light ms-1 close-button" data-bs-dismiss="offcanvas" aria-label="Close">
                                                    <i className="ri-close-line"></i>
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="mail-info-body p-4" id="mail-info-body">
                                            <div className="d-sm-flex d-block align-items-center justify-content-between mb-4">
                                                <div>
                                                    <p className="fs-20 fw-medium mb-0">Strategic Insights Webinar: Navigating Future Trends.</p>
                                                </div>
                                                <div className="float-end">
                                                    <span className="me-2 fs-12 text-muted">Oct-22-2024,03:05PM</span>
                                                </div>
                                            </div>
                                            <div className="main-mail-content mb-4">
                                                <p className="fs-14 fw-medium mb-4">Greetings Mr Jack &#128400;,</p>
                                                <p className="mb-2 text-muted">We're excited to invite you to our upcoming webinar, "Navigating Future Trends," where industry experts will share strategic insights to help you stay ahead in an ever-evolving landscape. Join us on [Date] at [Time] for an engaging session that promises to provide actionable knowledge and valuable perspectives.</p>
                                                <span className="d-block text-muted fw-meidum">Key Highlights :</span>
                                                <ul className="text-muted my-3">
                                                    <li className="mb-2">Expert analysis of emerging trends</li>
                                                    <li className="mb-2">Practical strategies for staying competitive</li>
                                                    <li className="mb-2">Q&A session for personalized insights</li>
                                                </ul>
                                                <p className="mb-2 text-muted">Earth has a diameter of roughly 8,000 miles (13,000 kilometers) and is mostly round because gravity generally pulls matter into a ball. But the spin of our home planet causes it to be squashed at its poles and swollen at the equator, making the true shape of the Earth an "oblate spheroid.".</p>
                                                <p className="mb-0 mt-4">
                                                    <span className="d-block">Best Regards,</span>
                                                    <span className="d-block">Benjamin</span>
                                                </p>
                                            </div>
                                            <div className="mail-attachments mb-4">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="mb-0"> 
                                                        <span className="fs-14 fw-medium"><i className="ri-attachment-2 me-1 align-middle"></i>Attachments (1.8mb):</span>
                                                    </div>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-sm btn-warning-light">View All</Button>
                                                        <Button variant="" className="btn btn-sm btn-success-light">Download All</Button>
                                                    </div>
                                                </div>    
                                                <div className="mt-2 d-flex flex-wrap gap-3">
                                                    <Link scroll={false} href="#!">
                                                        <span className="avatar avatar-xl shadow-sm">
                                                            <img src="../../../assets/images/media/media-74.jpg" alt="" />
                                                        </span>
                                                    </Link>
                                                    <Link scroll={false} href="#!">
                                                        <span className="avatar avatar-xl shadow-sm">
                                                            <img src="../../../assets/images/media/media-75.jpg" alt="" />
                                                        </span>
                                                    </Link>
                                                    <Link scroll={false} href="#!">
                                                        <span className="avatar avatar-xl shadow-sm">
                                                            <img src="../../../assets/images/media/media-76.jpg" alt="" />
                                                        </span>
                                                    </Link>
                                                    <Link scroll={false} href="#!">
                                                        <span className="avatar avatar-xl shadow-sm">
                                                            <img src="../../../assets/images/media/media-77.jpg" alt="" />
                                                        </span>
                                                    </Link>
                                                    <Link scroll={false} href="#!">
                                                        <span className="avatar avatar-xl bg-primary-transparent">
                                                            15+
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="mb-3"> 
                                                <span className="fs-14 fw-medium"><i className="ri-reply-all-line me-1 align-middle d-inline-block"></i>Reply:</span>
                                            </div>
                                            <div className="mail-reply">
                                                <div id="mail-reply-editor"></div>
                                            </div>
                                        </div>
                                        <div className="mail-info-footer d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                            <div>
                                            <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip'>Print</Tooltip>}>
                                                <Button variant="" className="btn btn-icon btn-primary-light" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Print">
                                                    <i className="ri-printer-line"></i>
                                                </Button>
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip'>Mark as read</Tooltip>}>
                                                <Button variant="" className="btn btn-icon btn-secondary-light ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Mark as read">
                                                    <i className="ri-mail-open-line"></i>
                                                </Button>
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip'>Reload</Tooltip>}>
                                                <Button variant="" className="btn btn-icon btn-success-light ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Reload">
                                                    <i className="ri-refresh-line"></i>
                                                </Button>
                                            </OverlayTrigger>
                                            </div>
                                            <div>
                                                <Button variant="" className="btn btn-secondary">
                                                    <i className="ri-share-forward-line me-1 d-inline-block align-middle"></i>Forward
                                                </Button>
                                                <Button variant="" className="btn btn-danger ms-1">
                                                    <i className="ri-reply-all-line me-1 d-inline-block align-middle"></i>Reply
                                                </Button>
                                            </div>
                                        </div>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                {/* <!-- End::mail information offcanvas --> */}
</Fragment>
    );
};

export default Mailapp;