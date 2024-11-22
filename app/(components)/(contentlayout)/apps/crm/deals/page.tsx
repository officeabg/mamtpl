"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Button, Card, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import DatePicker from 'react-datepicker';
const Deals = () => {
    const firstContainerRef = useRef(null);
    const secondContainerRef = useRef(null);
    const thirdContainerRef = useRef(null);
    const fourthContainerRef = useRef(null);
    const fifthContainerRef = useRef(null);
    const sixthContainerRef = useRef(null);
  

    useEffect(() => {
        // Check if window is defined (to prevent issues during server-side rendering)
        if (typeof window !== "undefined") {
            // Import the dragula library here (make sure it's installed first)
            const dragula = require("dragula");
            const windowElement = window;

            if (firstContainerRef.current && secondContainerRef.current) {
                const containers = [
                    firstContainerRef.current,
                    secondContainerRef.current,
                    thirdContainerRef.current,
                    fourthContainerRef.current,
                    fifthContainerRef.current,
                    sixthContainerRef.current,

                ];

                // Initialize dragula on the containers
                const drake = dragula(containers);

                // Your other dragula-related logic here...

                if (document.querySelector(".firstdrag")?.classList.contains("task-Null")) {
                    document.querySelector(".view-more-button")?.classList.add("d-none");
                }
            }
        }
    }, []);
//


    const [startDate, setStartDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDateChange = (date:any) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    //
    const [images, setImages] = useState<any>([]);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleFileChange = (e:any) => {
        const file = e.target.files[0];
        if (file) {
            const reader:any = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
return ( 
    <Fragment>
               {/* Page Header */}
                 <Seo title={"Deals"} />
                <Pageheader Heading="Deals" Pages={[{title:"Apps", active:true}, {title:"CRM", active:true}, {title:"Deals", active:false},]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <span className="fw-medium fs-16 me-1">Deals</span><span className="badge bg-light text-default align-middle">16</span>
                                    </div>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Button variant="" onClick={handleShow} className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#create-contact"><i className="ri-add-line me-1 fw-medium align-middle"></i>New Deal</Button>
                                        <Button variant="" className="btn btn-success-light btn-sm">Export As CSV</Button>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="" href="#!" className="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu role="menu">
                                                <li><Dropdown.Item href="#!">Newest</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Date Added</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">A - Z</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}

                {/* Start::row-2 */}
                <Row>
                    <Col xxl={2} md={4} className="">
                        <Card className="custom-card">
                            <Card.Body className="p-3">
                                <div className="d-flex align-items-top flex-wrap justify-content-between">
                                    <div>
                                        <div className="fw-medium fs-15 lead-discovered">Leads Discovered</div>
                                        <span className=" badge bg-light text-default">24 Leads</span>
                                    </div>
                                    <div>
                                        <span className="text-primary fw-medium">$25,238</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={2} md={4}>
                        <Card className="custom-card">
                            <Card.Body className=" p-3">
                                <div className="d-flex align-items-top flex-wrap justify-content-between">
                                    <div>
                                        <div className="fw-medium fs-15 lead-qualified">Qualified Leads</div>
                                        <span className=" badge bg-light text-default">17 Leads</span>
                                    </div>
                                    <div>
                                        <span className="text-warning fw-medium">$32,453</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={2} md={4}>
                        <Card className="custom-card">
                            <div className="card-body p-3">
                                <div className="d-flex align-items-top flex-wrap justify-content-between">
                                    <div>
                                        <div className="fw-medium fs-15 contact-initiated">Contact Initiated</div>
                                        <span className=" badge bg-light text-default">5 Leads</span>
                                    </div>
                                    <div>
                                        <span className="text-success fw-medium">$13,756</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col xxl={2} md={4}>
                        <Card className="custom-card">
                            <Card.Body className="p-3">
                                <div className="d-flex align-items-top flex-wrap justify-content-between">
                                    <div>
                                        <div className="fw-medium fs-15 need-identified">Needs Identified</div>
                                        <span className=" badge bg-light text-default">43 Leads</span>
                                    </div>
                                    <div>
                                        <span className="text-info fw-medium">$47,093</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={2} md={4}>
                        <Card className="custom-card">
                            <Card.Body className="p-3">
                                <div className="d-flex align-items-top flex-wrap justify-content-between">
                                    <div>
                                        <div className="fw-medium fs-15 negotiation">Negotiation</div>
                                        <span className=" badge bg-light text-default">15 Leads</span>
                                    </div>
                                    <div>
                                        <span className="text-danger fw-medium">$26,146</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={2} md={4}>
                        <Card className="custom-card">
                            <Card.Body className="p-3">
                                <div className="d-flex align-items-top flex-wrap justify-content-between">
                                    <div>
                                        <div className="fw-medium fs-15 deal-finalized">Deal Finalized</div>
                                        <span className=" badge bg-light text-default">127 Deals</span>
                                    </div>
                                    <div>
                                        <span className="text-secondary fw-medium">$1,74,679</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End::row-2 */}

                {/* Start::row-3 */}
                <Row>
                    <Col xxl={2} className=""  ref={firstContainerRef} id="leads-discovered">
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center fw-medium justify-content-between gap-1 flex-wrap">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <div className="lh-1">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src="../../../assets/images/faces/12.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14">Service Upgrade</div>
                                    </div>
                                    <div>$5000</div>
                                </div>
                                <div className="deal-description">
                                    <div className="my-1">
                                        <Link scroll={false} href="#!" className="company-name">Spruko Technologies</Link>
                                    </div>
                                    <div className="text-muted fs-12">24,Jun 2024 - 12:45PM</div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center fw-medium justify-content-between gap-1 flex-wrap">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <div className="lh-1">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src="../../../assets/images/faces/5.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14">Product Demo</div>
                                    </div>
                                    <div>$50,000</div>
                                </div>
                                <div className="deal-description">
                                    <div className="my-1">
                                        <Link scroll={false} href="#!" className="company-name">Acme Corporation LTD</Link>
                                    </div>
                                    <div className="text-muted fs-12">18,Apr 2024 - 11:22AM</div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center fw-medium justify-content-between gap-1 flex-wrap">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <div className="lh-1">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src="../../../assets/images/faces/15.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14">Website Redesign</div>
                                    </div>
                                    <div>$20,000</div>
                                </div>
                                <div className="deal-description">
                                    <div className="my-1">
                                        <Link scroll={false} href="#!" className="company-name">Embark Technologies</Link>
                                    </div>
                                    <div className="text-muted fs-12">12,Jul 2024 - 10:15AM</div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center fw-medium justify-content-between gap-1 flex-wrap">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <div className="lh-1">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src="../../../assets/images/faces/6.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14">Consulting Services</div>
                                    </div>
                                    <div>$10,000</div>
                                </div>
                                <div className="deal-description">
                                    <div className="my-1">
                                        <Link scroll={false} href="#!" className="company-name">Adam Johnson</Link>
                                    </div>
                                    <div className="text-muted fs-12">29,Jul 2024 - 4:45PM</div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={2} className="" ref={secondContainerRef} id="leads-qualified">
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center fw-medium justify-content-between gap-1 flex-wrap">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <div className="lh-1">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src="../../../assets/images/faces/11.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14">Event Sponsorship</div>
                                    </div>
                                    <div>$10,000</div>
                                </div>
                                <div className="deal-description">
                                    <div className="my-1">
                                        <Link scroll={false} href="#!" className="company-name">Initech Info</Link>
                                    </div>
                                    <div className="text-muted fs-12">21,May 2024 - 10:25AM</div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center fw-medium justify-content-between gap-1 flex-wrap">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <div className="lh-1">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src="../../../assets/images/faces/11.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14">Sales Training</div>
                                    </div>
                                    <div>$6,000</div>
                                </div>
                                <div className="deal-description">
                                    <div className="my-1">
                                        <Link scroll={false} href="#!" className="company-name">Soylent Corp</Link>
                                    </div>
                                    <div className="text-muted fs-12">10,May 2024 - 9:20AM</div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center fw-medium justify-content-between gap-1 flex-wrap">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <div className="lh-1">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src="../../../assets/images/faces/14.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14">Content Creation</div>
                                    </div>
                                    <div>$3,000</div>
                                </div>
                                <div className="deal-description">
                                    <div className="my-1">
                                        <Link scroll={false} href="#!" className="company-name">Hooli Technologies</Link>
                                    </div>
                                    <div className="text-muted fs-12">25,Aug 2024 - 3:38PM</div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={2} className="" ref={thirdContainerRef}  id="contact-initiated">
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center fw-medium justify-content-between gap-1 flex-wrap">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <div className="lh-1">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src="../../../assets/images/faces/3.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14">E-commerce Integration</div>
                                    </div>
                                    <div>$12,000</div>
                                </div>
                                <div className="deal-description">
                                    <div className="my-1">
                                        <Link scroll={false} href="#!" className="company-name">Spice Infotech</Link>
                                    </div>
                                    <div className="text-muted fs-12">15,Sep 2024 - 8:32PM</div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center fw-medium justify-content-between gap-1 flex-wrap">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <div className="lh-1">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src="../../../assets/images/faces/16.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14">Ad Campaign</div>
                                    </div>
                                    <div>$5,500</div>
                                </div>
                                <div className="deal-description">
                                    <div className="my-1">
                                        <Link scroll={false} href="#!" className="company-name">Umbrella Corp</Link>
                                    </div>
                                    <div className="text-muted fs-12">17,Jun 2024 - 10:54AM</div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={2}  className="" ref={fourthContainerRef} id="needs-identified">
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center fw-medium justify-content-between gap-1 flex-wrap">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <div className="lh-1">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src="../../../assets/images/faces/10.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14">Webinar Series</div>
                                    </div>
                                    <div>$9,500</div>
                                </div>
                                <div className="deal-description">
                                    <div className="my-1">
                                        <Link scroll={false} href="#!" className="company-name">Massive Dynamic</Link>
                                    </div>
                                    <div className="text-muted fs-12">16,May 2024 - 11:22AM</div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center fw-medium justify-content-between gap-1 flex-wrap">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <div className="lh-1">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src="../../../assets/images/faces/13.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14">SEO Audit</div>
                                    </div>
                                    <div>$3,000</div>
                                </div>
                                <div className="deal-description">
                                    <div className="my-1">
                                        <Link scroll={false} href="#!" className="company-name">Logitech ecostics</Link>
                                    </div>
                                    <div className="text-muted fs-12">27,Apr 2024 - 5:15PM</div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center fw-medium justify-content-between gap-1 flex-wrap">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <div className="lh-1">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src="../../../assets/images/faces/8.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14">Loyalty Program</div>
                                    </div>
                                    <div>$12,000</div>
                                </div>
                                <div className="deal-description">
                                    <div className="my-1">
                                        <Link scroll={false} href="#!" className="company-name">Globex Corp</Link>
                                    </div>
                                    <div className="text-muted fs-12">26,Jul 2024 - 5:28AM</div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center fw-medium justify-content-between gap-1 flex-wrap">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <div className="lh-1">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src="../../../assets/images/faces/9.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14">CRM Integration</div>
                                    </div>
                                    <div>$10,000</div>
                                </div>
                                <div className="deal-description">
                                    <div className="my-1">
                                        <Link scroll={false} href="#!" className="company-name">CrystalClear Consulting</Link>
                                    </div>
                                    <div className="text-muted fs-12">14,May 2024 - 11:29PM</div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={2} className="" ref={fifthContainerRef} id="negotiation">
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center fw-medium justify-content-between gap-1 flex-wrap">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <div className="lh-1">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src="../../../assets/images/faces/16.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14">Media Analytics</div>
                                    </div>
                                    <div>$9,000</div>
                                </div>
                                <div className="deal-description">
                                    <div className="my-1">
                                        <Link scroll={false} href="#!" className="company-name">GlobalConnect</Link>
                                    </div>
                                    <div className="text-muted fs-12">18,Mar 2024 - 2:32PM</div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center fw-medium justify-content-between gap-1 flex-wrap">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <div className="lh-1">
                                            <span className="avatar avatar-sm avatar-rounded bg-light">
                                                <img src="../../../assets/images/faces/21.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14">Lead Nurturing Strategy</div>
                                    </div>
                                    <div>$4,000</div>
                                </div>
                                <div className="deal-description">
                                    <div className="my-1">
                                        <Link scroll={false} href="#!" className="company-name">AlphaTech Solutions</Link>
                                    </div>
                                    <div className="text-muted fs-12">16,Jul 2024 - 7:53AM</div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center fw-medium justify-content-between gap-1 flex-wrap">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <div className="lh-1">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                PL
                                            </span>
                                        </div>
                                        <div className="fs-14">Website Maintenance</div>
                                    </div>
                                    <div>$7,500</div>
                                </div>
                                <div className="deal-description">
                                    <div className="my-1">
                                        <Link scroll={false} href="#!" className="company-name">RedRock Industries</Link>
                                    </div>
                                    <div className="text-muted fs-12">30,Jul 2024 - 6:30AM</div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center fw-medium justify-content-between gap-1 flex-wrap">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <div className="lh-1">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src="../../../assets/images/faces/2.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14">Newsletter Campaign</div>
                                    </div>
                                    <div>$2,500</div>
                                </div>
                                <div className="deal-description">
                                    <div className="my-1">
                                        <Link scroll={false} href="#!" className="company-name">CoreTech Solutions</Link>
                                    </div>
                                    <div className="text-muted fs-12">12,May 2024 - 10:22AM</div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center fw-medium justify-content-between gap-1 flex-wrap">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <div className="lh-1">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src="../../../assets/images/faces/17.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14">Graphic Design</div>
                                    </div>
                                    <div>$5,000</div>
                                </div>
                                <div className="deal-description">
                                    <div className="my-1">
                                        <Link scroll={false} href="#!" className="company-name">TechPro Services</Link>
                                    </div>
                                    <div className="text-muted fs-12">10,Jul 2024 - 10:15PM</div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={2} className="" ref={sixthContainerRef} id="deal-finalized">
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center fw-medium justify-content-between gap-1 flex-wrap">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <div className="lh-1">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src="../../../assets/images/faces/1.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14">CRM Training</div>
                                    </div>
                                    <div>$4,200</div>
                                </div>
                                <div className="deal-description">
                                    <div className="my-1">
                                        <Link scroll={false} href="#!" className="company-name">BlueSky Industries</Link>
                                    </div>
                                    <div className="text-muted fs-12">15,May 2024 - 8:20AM</div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center fw-medium justify-content-between gap-1 flex-wrap">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <div className="lh-1">
                                            <span className="avatar avatar-sm avatar-rounded">
                                                <img src="../../../assets/images/faces/10.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="fs-14">Market Research</div>
                                    </div>
                                    <div>$10,500</div>
                                </div>
                                <div className="deal-description">
                                    <div className="my-1">
                                        <Link scroll={false} href="#!" className="company-name">BrightStar Solutions</Link>
                                    </div>
                                    <div className="text-muted fs-12">28,Jun 2024 - 9:27PM</div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End::row-3 */}

                {/* Start:: New Deal */}
                <Modal centered show={show} onHide={handleClose} className="modal fade" id="create-contact" tabIndex={-1} aria-hidden="true">
                    <Modal.Header closeButton>
                        <h6 className="modal-title">New Deal</h6>
                    </Modal.Header>
                    <Modal.Body className="px-4">
                        <div className="row gy-3">
                            <Col xl={12}>
                                <div className="mb-0 text-center">
                                    <span className="avatar avatar-xxl avatar-rounded">
                                        <img src={selectedImage || '../../../assets/images/faces/9.jpg'} alt="" id="profile-img"/>
                                        <span className="badge rounded-pill bg-primary avatar-badge">
                                            <Form.Control  onChange={(e:any) => {
                                                            handleFileChange(e);
                                                            setImages([...images, e.target.files[0]]);
                                                    }} type="file" name="photo" className="position-absolute w-100 h-100 op-0" id="profile-change" />
                                            <i className="fe fe-camera"></i>
                                        </span>
                                    </span>
                                </div>
                            </Col>
                            <Col xl={6}>
                                <Form.Label htmlFor="deal-name" className="form-label">Contact Name</Form.Label>
                                <Form.Control type="text" className="form-control" id="deal-name" placeholder="Contact Name" />
                            </Col>
                            <Col xl={6}>
                                <Form.Label htmlFor="deal-lead-score" className="form-label">Deal Value</Form.Label>
                                <Form.Control type="number" className="form-control" id="deal-lead-score" placeholder="Deal Value" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="company-name" className="form-label">Company Name</Form.Label>
                                <Form.Control type="text" className="form-control" id="company-name" placeholder="Company Name" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label className="form-label">Last Contacted</Form.Label>
                                <div className="input-group">
                                    <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                    <DatePicker
                                    selected={startDate}
                                            placeholderText='Choose date and time'
                                            onChange={handleDateChange}
                                            timeInputLabel="Time:"
                                            dateFormat="MM/dd/yyyy h:mm aa"
                                            showTimeInput
                                        />
                                </div>
                            </Col>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="">
                        <Button variant="" type="button" className="btn btn-light" onClick={handleClose}
                            data-bs-dismiss="modal">Cancel</Button>
                        <Button variant="" type="button" className="btn btn-primary">Create Deal</Button>
                    </Modal.Footer>
                </Modal>
                {/* End:: New Deal */}
    </Fragment>
    )
};

export default Deals;