"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Collapse, Dropdown, Form, OverlayTrigger, Pagination, Row, Tooltip } from "react-bootstrap";
const Select = dynamic(() => import("react-select"), { ssr: false });
const Searchcompany = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    const Data = [
        { value: 'All Categories', label: 'All Categories' },
        { value: 'Software Developer', label: 'Software Developer' },
        { value: 'Web Developer', label: 'Web Developer' },
        { value: 'Software Architect', label: 'Software Architect' },
        { value: 'IT Hardware', label: 'IT Hardware' },
        { value: 'Network Engineer', label: 'Network Engineer' },
        { value: 'React Developer', label: 'React Developer' },
    ];
return( 
    <Fragment>
            {/* Page Header */}
                 <Seo title={"Search Company"} />
                <Pageheader Heading="Search Company" Pages={[{title:"Apps", active:true},{title:"Jobs", active:true},{title:"Search Company", active:false}]} />
            {/* Page Header Close */}

                {/* Start:: row-1 */}
                <Row>
                    <Col xxl={4} lg={5}>
                        <Card className="custom-card products-navigation-card">
                            <Card.Body className="p-0">
                                <div className="p-4 border-bottom">
                                    <h6 className="fw-medium mb-0">Industry Type</h6>
                                    <div className="px-0 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" value="" id="c-1" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="c-1">
                                                Research & Developement
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">2,712</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" value="" id="c-2" />
                                            <Form.Label className="form-check-label" htmlFor="c-2">
                                                Accounting 
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">536</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" value="" id="c-3" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="c-3">
                                                Business Process
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">18,289</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" value="" id="c-4" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="c-4">
                                                Consulting
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">3,453</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" value="" id="c-5" />
                                            <Form.Label className="form-check-label" htmlFor="c-5">
                                                Administrative Support
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">7,165</span>
                                        </div>
                                        <Collapse in={open}>
                                            <div>
                                                <div className="form-check mb-2">
                                                    <Form.Check className="" type="checkbox" value="" id="cc-6" />
                                                    <Form.Label className="form-check-label" htmlFor="cc-6">
                                                        Human Resources
                                                    </Form.Label>
                                                    <span className="badge bg-light text-default  float-end">5,964</span>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <Form.Check className="" type="checkbox" value="" id="cc-7" />
                                                    <Form.Label className="form-check-label" htmlFor="cc-7">
                                                        Marketing
                                                    </Form.Label>
                                                    <span className="badge bg-light text-default  float-end">2,123</span>
                                                </div>
                                            </div>
                                        </Collapse>
                                        <Link scroll={false} onClick={() => setOpen(!open)}
                                            aria-controls="example-collapse-text" aria-expanded={open} className="ecommerce-more-link" data-bs-toggle="collapse" href="#category-more" role="button">MORE</Link>
                                    </div>
                                </div>
                                <div className="p-4 border-bottom">
                                    <h6 className="fw-medium mb-0">Location</h6>
                                    <div className="px-0 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" value="" id="available-1" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="available-1">
                                                Hyderabad
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">512</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" value="" id="available-2" />
                                            <Form.Label className="form-check-label" htmlFor="available-2">
                                                Banglore
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">2,186</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" value="" id="available-3" />
                                            <Form.Label className="form-check-label" htmlFor="available-3">
                                                Chennai
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">734</span>
                                        </div>
                                        <Collapse in={open1}>
                                            <div>
                                                <div className="form-check mb-2">
                                                    <Form.Check className="" type="checkbox" value="" id="c-6" />
                                                    <Form.Label className="form-check-label" htmlFor="c-6">
                                                        Pune
                                                    </Form.Label>
                                                    <span className="badge bg-light text-default  float-end">5,964</span>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <Form.Check className="" type="checkbox" value="" id="c-7" />
                                                    <Form.Label className="form-check-label" htmlFor="c-7">
                                                        USA
                                                    </Form.Label>
                                                    <span className="badge bg-light text-default  float-end">2,123</span>
                                                </div>
                                            </div>
                                        </Collapse>
                                        <Link scroll={false} className="ecommerce-more-link" data-bs-toggle="collapse" href="#location-more" role="button"
                                        onClick={() => setOpen1(!open1)}
                                        aria-controls="example-collapse-text" aria-expanded={open1}>MORE</Link>
                                    </div>
                                </div>
                                <div className="p-4 border-bottom">
                                    <h6 className="fw-medium mb-0">Company Size</h6>
                                    <div className="px-0 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" value="" id="bond-1" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="bond-1">
                                                0-50
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">145</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" value="" id="bond-2" />
                                            <Form.Label className="form-check-label" htmlFor="bond-2">
                                                50 - 100
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">432</span>
                                        </div>
                                        <div className="form-check">
                                            <Form.Check className="" type="checkbox" value="" id="bond-3" />
                                            <Form.Label className="form-check-label" htmlFor="bond-3">
                                                100 - 150
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">123</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-bottom">
                                    <h6 className="fw-medium mb-0">Recruiter Type</h6>
                                    <div className="px-0 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" value="" id="Recruiter-1" defaultChecked/>
                                            <Form.Label className="form-check-label" htmlFor="Recruiter-1">
                                                Direct Company
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">13</span>
                                        </div>
                                        <div className="form-check">
                                            <Form.Check className="" type="checkbox" value="" id="Recruiter-2"/>
                                            <Form.Label className="form-check-label" htmlFor="Recruiter-2">
                                                Agency
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">67</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-bottom">
                                    <h6 className="fw-medium mb-0">Job Vacancies</h6>
                                    <div className="px-0 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" value="" id="vacancies-1" defaultChecked/>
                                            <Form.Label className="form-check-label" htmlFor="vacancies-1">
                                                0 -10
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">13</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" value="" id="vacancies-2" />
                                            <Form.Label className="form-check-label" htmlFor="vacancies-2">
                                                10 - 20 
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">67</span>
                                        </div>
                                        <div className="form-check">
                                            <Form.Check className="" type="checkbox" value="" id="vacancies-3" />
                                            <Form.Label className="form-check-label" htmlFor="vacancies-3">
                                                20 +above 
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">67</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-bottom">
                                    <h6 className="fw-medium mb-0">Type of Employement</h6>
                                    <div className="px-0 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" value="" id="j-1" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="j-1">
                                                Full Time
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">512</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" value="" id="j-2" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="j-2">
                                                Part Time
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">2,186</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" value="" id="j-3" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="j-3">
                                                Internship
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">734</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" value="" id="j-4" />
                                            <Form.Label className="form-check-label" htmlFor="j-4">
                                                Freelancer
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">16</span>
                                        </div>
                                        <div className="form-check">
                                            <Form.Check className="" type="checkbox" value="" id="j-5" />
                                            <Form.Label className="form-check-label" htmlFor="j-5">
                                                Remote Job
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">1,432</span>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={8} lg={7} className="">
                        <div className="row align-items-center mb-4">
                            <Col lg={12}>
                                <div className="input-group companies-search-input">
                                    <input type="text" className="form-control form-control-lg w-25" aria-label="Text input with segmented dropdown button" placeholder="Enter your keyword here" />
                                    <Select name="colors" options={Data} className="search-company ti-form-select !p-0 !rounded-s-none"
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Data[0]]}  />
                                    <input type="text" className="form-control form-control-lg w-25" aria-label="Text input with segmented dropdown button" placeholder="Search by location" />
                                    <button type="button" className="btn btn-primary"><i className="ri-search-line"></i></button>
                                </div>
                            </Col>
                        </div>
                        <Row>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Body>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <h5 className="fw-medium mb-0 flex-grow-1">1287 <span className="fw-normal fs-18">Companies match for your search</span> </h5>
                                            <div className="btn-group">
                                            <Dropdown>
                                                <Dropdown.Toggle variant="" className="btn btn-outline-light border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Sort By
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <li><Dropdown.Item href="#!">Premium</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#!">Newest</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#!">Most Relevant</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#!">Fresher</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#!">Experienced</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#!">Bond Agreement</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#!">Flexible Shift</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#!">Day Shift</Dropdown.Item></li>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={6}>
                                <Card className="custom-card">
                                    <Card.Body>
                                        <div className="btn-list float-end">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                            <Link scroll={false} href="#!" className="avatar avatar-rounded bg-light text-default avatar-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="bi bi-heart"></i></span></Link>
                                        </OverlayTrigger>
                                        </div>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <span className="avatar avatar-xl bg-white shadow-sm border p-2 avatar-rounded">
                                                <img src="../../../assets/images/company-logos/1.png" alt="" />
                                            </span>
                                            <div className="ms-2">
                                                <h5 className="fw-medium mb-0 d-flex align-items-center">
                                                    <Link scroll={false} href="#!">Spotech Technical Solutions 
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Verified company</Tooltip>}>
                                                            <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified company"></i>
                                                        </OverlayTrigger>
                                                    </Link>
                                                </h5>
                                                <div className="d-flex gap-2">
                                                    <Link scroll={false} href="#!"><i className="bi bi-geo-alt fs-11"></i> Kondapur, Hyderabad, </Link>
                                                    <p className="mb-0 text-muted">Establishment year - 2019</p>
                                                </div> 
                                                <div className="d-flex align-items-center fs-12 text-muted">
                                                    <p className="fs-12 mb-0">Ratings : </p>
                                                    <div className="min-w-fit-content ms-2">
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="ms-1 min-w-fit-content text-muted">
                                                        <span>(142)</span>
                                                        <span>Ratings</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <div className="flex-grow-1">
                                            <OverlayTrigger placement="top" overlay={<Tooltip>No of employees</Tooltip>}>
                                                <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-info-transparent me-1" data-bs-toggle="tooltip" title="No of employees"><i className="bi bi-people me-1"></i>No. of Emp : 345</Link>
                                            </OverlayTrigger>
                                                <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Vacancies : 50</Link>
                                            </div>
                                            <Link scroll={false} href="#!" className="btn btn-wave btn-primary">
                                                View Profile <i className="ri-arrow-right-line align-middle"></i>
                                            </Link>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col xl={6}>
                                <Card className="custom-card">
                                    <Card.Body>
                                        <div className="btn-list float-end">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                            <Link scroll={false} href="#!" className="avatar avatar-rounded bg-light text-default avatar-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="bi bi-heart"></i></span></Link>
                                        </OverlayTrigger>
                                        </div>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <span className="avatar avatar-xl bg-white shadow-sm border p-2 avatar-rounded">
                                                <img src="../../../assets/images/company-logos/2.png" alt="" />
                                            </span>
                                            <div className="ms-2">
                                                <h5 className="fw-medium mb-0 d-flex align-items-center">
                                                <Link scroll={false} href="#!"> G Technical Solutions 
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Verified company</Tooltip>}>
                                                    <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified company"></i>
                                                </OverlayTrigger> 
                                                </Link>
                                                </h5>
                                                <div className="d-flex gap-2">
                                                    <Link scroll={false} href="#!"><i className="bi bi-geo-alt fs-11"></i> Gachibowli, Hyderabad, </Link>
                                                    <p className="mb-0 text-muted">Establishment year - 2015</p>
                                                </div> 
                                                <div className="d-flex align-items-center fs-12 text-muted">
                                                    <p className="fs-12 mb-0">Ratings : </p>
                                                    <div className="min-w-fit-content ms-2">
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning"><i className="bi bi-star"></i></span>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="ms-1 min-w-fit-content text-muted">
                                                        <span>(134)</span>
                                                        <span>Ratings</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <div className="flex-grow-1">
                                            <OverlayTrigger placement="top" overlay={<Tooltip>No of employees</Tooltip>}>
                                                <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-info-transparent me-1" data-bs-toggle="tooltip" title="No of employees"><i className="bi bi-people me-1"></i>No. of Emp : 146</Link>
                                            </OverlayTrigger>
                                                <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Vacancies : 40</Link>
                                            </div>
                                            <Link scroll={false} href="#!" className="btn btn-wave btn-primary">
                                                View Profile <i className="ri-arrow-right-line align-middle"></i>
                                            </Link>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col xl={6}>
                                <Card className="custom-card">
                                    <Card.Body>
                                        <div className="btn-list float-end">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                            <Link scroll={false} href="#!" className="avatar avatar-rounded bg-light text-default avatar-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="bi bi-heart"></i></span></Link>
                                        </OverlayTrigger>
                                        </div>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <span className="avatar avatar-xl bg-white shadow-sm border p-2 avatar-rounded">
                                                <img src="../../../assets/images/company-logos/3.png" alt="" />
                                            </span>
                                            <div className="ms-2">
                                                <h5 className="fw-medium mb-0 d-flex align-items-center">
                                                <Link scroll={false} href="#!"> Diego Technical Solutions
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Verified company</Tooltip>}>
                                                    <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified company"></i>
                                                </OverlayTrigger> 
                                                </Link>
                                               </h5>
                                                <div className="d-flex gap-2">
                                                    <Link scroll={false} href="#!"><i className="bi bi-geo-alt fs-11"></i> Gachibowli, Chennai, </Link>
                                                    <p className="mb-0 text-muted">Establishment year - 2013</p>
                                                </div> 
                                                <div className="d-flex align-items-center fs-12 text-muted">
                                                    <p className="fs-12 mb-0">Ratings : </p>
                                                    <div className="min-w-fit-content ms-2">
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning"><i className="bi bi-star"></i></span>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="ms-1 min-w-fit-content text-muted">
                                                        <span>(234)</span>
                                                        <span>Ratings</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <div className="flex-grow-1">
                                            <OverlayTrigger placement="top" overlay={<Tooltip>No of employees</Tooltip>}>
                                                <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-info-transparent me-1" data-bs-toggle="tooltip" title="No of employees"><i className="bi bi-people me-1"></i>No. of Emp : 56</Link>
                                            </OverlayTrigger>
                                                <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Vacancies : 35</Link>
                                            </div>
                                            <Link scroll={false} href="#!" className="btn btn-wave btn-primary">
                                                View Profile <i className="ri-arrow-right-line align-middle"></i>
                                            </Link>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col xl={6}>
                                <Card className="custom-card">
                                    <Card.Body>
                                        <div className="btn-list float-end">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                            <Link scroll={false} href="#!" className="avatar avatar-rounded bg-light text-default avatar-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="bi bi-heart"></i></span></Link>
                                        </OverlayTrigger>
                                        </div>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <span className="avatar avatar-xl bg-white shadow-sm border p-2 avatar-rounded">
                                                <img src="../../../assets/images/company-logos/7.png" alt="" />
                                            </span>
                                            <div className="ms-2">
                                                <h5 className="fw-medium mb-0 d-flex align-items-center">
                                                <Link scroll={false} href="#!"> Spoteck Solutions Pvt Ltd
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Verified company</Tooltip>}>
                                                    <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified company"></i>
                                                </OverlayTrigger>
                                                 </Link>
                                                 </h5>
                                                <div className="d-flex gap-2">
                                                    <Link scroll={false} href="#!"><i className="bi bi-geo-alt fs-11"></i> Gachibowli, Banglore, </Link>
                                                    <p className="mb-0 text-muted">Establishment year - 2002</p>
                                                </div> 
                                                <div className="d-flex align-items-center fs-12 text-muted">
                                                    <p className="fs-12 mb-0">Ratings : </p>
                                                    <div className="min-w-fit-content ms-2">
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="ms-1 min-w-fit-content text-muted">
                                                        <span>(239)</span>
                                                        <span>Ratings</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <div className="flex-grow-1">
                                            <OverlayTrigger placement="top" overlay={<Tooltip>No of employees</Tooltip>}>
                                                <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-info-transparent me-1" data-bs-toggle="tooltip" title="No of employees"><i className="bi bi-people me-1"></i>No. of Emp : 120</Link>
                                            </OverlayTrigger>
                                                <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Vacancies : 10</Link>
                                            </div>
                                            <Link scroll={false} href="#!" className="btn btn-wave btn-primary">
                                                View Profile <i className="ri-arrow-right-line align-middle"></i>
                                            </Link>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col xl={6}>
                                <Card className="custom-card">
                                    <Card.Body>
                                        <div className="btn-list float-end">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                            <Link scroll={false} href="#!" className="avatar avatar-rounded bg-light text-default avatar-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist"><span><i className="bi bi-heart"></i></span></Link>
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Share this company</Tooltip>}>
                                            <Link scroll={false} href="#!" className="avatar avatar-rounded bg-light text-default avatar-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Share this company"><span><i className="bi bi-share"></i></span></Link>
                                        </OverlayTrigger>
                                        </div>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <span className="avatar avatar-xl bg-white shadow-sm border p-2 avatar-rounded">
                                                <img src="../../../assets/images/company-logos/5.png" alt="" />
                                            </span>
                                            <div className="ms-2">
                                                <h5 className="fw-medium mb-0 d-flex align-items-center">
                                                <Link scroll={false} href="#!"> Vehement Capital Partners 
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Verified company</Tooltip>}>
                                                    <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified company"></i>
                                                </OverlayTrigger>
                                                </Link>
                                                </h5>
                                                <div className="d-flex gap-2">
                                                    <Link scroll={false} href="#!"><i className="bi bi-geo-alt fs-11"></i> Gachibowli, Banglore, </Link>
                                                    <p className="mb-0 text-muted">Establishment year - 2017</p>
                                                </div> 
                                                <div className="d-flex align-items-center fs-12 text-muted">
                                                    <p className="fs-12 mb-0">Ratings : </p>
                                                    <div className="min-w-fit-content ms-2">
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="ms-1 min-w-fit-content text-muted">
                                                        <span>(239)</span>
                                                        <span>Ratings</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <div className="flex-grow-1">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>No of employees</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-info-transparent me-1" data-bs-toggle="tooltip" title="No of employees"><i className="bi bi-people me-1"></i>No. of Emp : 120</Link>
                                                </OverlayTrigger>
                                                <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Vacancies : 10</Link>
                                            </div>
                                            <Link scroll={false} href="#!" className="btn btn-wave btn-primary">
                                                View Profile <i className="ri-arrow-right-line align-middle"></i>
                                            </Link>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col xl={6}>
                                <Card className="custom-card">
                                    <Card.Body>
                                        <div className="btn-list float-end">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                            <Link scroll={false} href="#!" className="avatar avatar-rounded bg-light text-default avatar-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist"><span><i className="bi bi-heart"></i></span></Link>
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Share this company</Tooltip>}>
                                            <Link scroll={false} href="#!" className="avatar avatar-rounded bg-light text-default avatar-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Share this company"><span><i className="bi bi-share"></i></span></Link>
                                        </OverlayTrigger>
                                           
                                        </div>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <span className="avatar avatar-xl bg-white shadow-sm border p-2 avatar-rounded">
                                                <img src="../../../assets/images/company-logos/6.png" alt="" />
                                            </span>
                                            <div className="ms-2">
                                                <h5 className="fw-medium mb-0 d-flex align-items-center">
                                                <Link scroll={false} href="#!"> Wonka Industries 
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Verified company</Tooltip>}>
                                                    <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified company"></i>
                                                </OverlayTrigger>
                                                </Link>
                                            </h5>
                                                <div className="d-flex gap-2">
                                                    <Link scroll={false} href="#!"><i className="bi bi-geo-alt fs-11"></i> Kukatpally, Hyderabad, </Link>
                                                    <p className="mb-0 text-muted">Establishment year - 2000</p>
                                                </div> 
                                                <div className="d-flex align-items-center fs-12 text-muted">
                                                    <p className="fs-12 mb-0">Ratings : </p>
                                                    <div className="min-w-fit-content ms-2">
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="ms-1 min-w-fit-content text-muted">
                                                        <span>(764)</span>
                                                        <span>Ratings</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <div className="flex-grow-1">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>No of employees</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-info-transparent me-1" data-bs-toggle="tooltip" title="No of employees"><i className="bi bi-people me-1"></i>No. of Emp : 120</Link>
                                                </OverlayTrigger>
                                                <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Vacancies : 10</Link>
                                            </div>
                                            <Link scroll={false} href="#!" className="btn btn-wave btn-primary">
                                                View Profile <i className="ri-arrow-right-line align-middle"></i>
                                            </Link>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col xl={6}>
                                <Card className="custom-card">
                                    <Card.Body>
                                        <div className="btn-list float-end">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                            <Link scroll={false} href="#!" className="avatar avatar-rounded bg-light text-default avatar-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="bi bi-heart"></i></span></Link>
                                        </OverlayTrigger>
                                        </div>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <span className="avatar avatar-xl bg-white shadow-sm border p-2 avatar-rounded">
                                                <img src="../../../assets/images/company-logos/10.png" alt="" />
                                            </span>
                                            <div className="ms-2">
                                                <h5 className="fw-medium mb-0 d-flex align-items-center">
                                                <Link scroll={false} href="#!">Spotech Technical Solutions 
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Verified company</Tooltip>}>
                                                    <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified company"></i>
                                                </OverlayTrigger>
                                                </Link>
                                                </h5>
                                                <div className="d-flex gap-2">
                                                    <Link scroll={false} href="#!"><i className="bi bi-geo-alt fs-11"></i> Kondapur, Hyderabad, </Link>
                                                    <p className="mb-0 text-muted">Establishment year - 2019</p>
                                                </div> 
                                                <div className="d-flex align-items-center fs-12 text-muted">
                                                    <p className="fs-12 mb-0">Ratings : </p>
                                                    <div className="min-w-fit-content ms-2">
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="ms-1 min-w-fit-content text-muted">
                                                        <span>(142)</span>
                                                        <span>Ratings</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <div className="flex-grow-1">
                                            <OverlayTrigger placement="top" overlay={<Tooltip>No of employees</Tooltip>}>
                                                <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-info-transparent me-1" data-bs-toggle="tooltip" title="No of employees"><i className="bi bi-people me-1"></i>No. of Emp : 345</Link>
                                            </OverlayTrigger>
                                                <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Vacancies : 50</Link>
                                            </div>
                                            <Link scroll={false} href="#!" className="btn btn-wave btn-primary">
                                                View Profile <i className="ri-arrow-right-line align-middle"></i>
                                            </Link>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col xl={6}>
                                <Card className="custom-card">
                                    <Card.Body>
                                        <div className="btn-list float-end">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                            <Link scroll={false} href="#!" className="avatar avatar-rounded bg-light text-default avatar-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" title="Add to Wishlist"><span><i className="bi bi-heart"></i></span></Link>
                                        </OverlayTrigger>
                                        </div>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <span className="avatar avatar-xl bg-white shadow-sm border p-2 avatar-rounded">
                                                <img src="../../../assets/images/company-logos/9.png" alt="" />
                                            </span>
                                            <div className="ms-2">
                                                <h5 className="fw-medium mb-0 d-flex align-items-center">
                                                <Link scroll={false} href="#!"> G Technical Solutions 
                                                <OverlayTrigger placement="top" overlay={<Tooltip>No of employees</Tooltip>}>
                                                    <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified company"></i>
                                                </OverlayTrigger>
                                                </Link>
                                                 </h5>
                                                <div className="d-flex gap-2">
                                                    <Link scroll={false} href="#!"><i className="bi bi-geo-alt fs-11"></i> Gachibowli, Hyderabad, </Link>
                                                    <p className="mb-0 text-muted">Establishment year - 2015</p>
                                                </div> 
                                                <div className="d-flex align-items-center fs-12 text-muted">
                                                    <p className="fs-12 mb-0">Ratings : </p>
                                                    <div className="min-w-fit-content ms-2">
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning"><i className="bi bi-star"></i></span>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="ms-1 min-w-fit-content text-muted">
                                                        <span>(134)</span>
                                                        <span>Ratings</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <div className="flex-grow-1">
                                            <OverlayTrigger placement="top" overlay={<Tooltip>No of employees</Tooltip>}>
                                                <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-info-transparent me-1" data-bs-toggle="tooltip" title="No of employees"><i className="bi bi-people me-1"></i>No. of Emp : 146</Link>
                                            </OverlayTrigger>
                                                <Link scroll={false} href="#!" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Vacancies : 40</Link>
                                            </div>
                                            <Link scroll={false} href="#!" className="btn btn-wave btn-primary">
                                                View Profile <i className="ri-arrow-right-line align-middle"></i>
                                            </Link>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                        <Pagination className="pagination mb-4 justify-content-end">
                            <Pagination.Item disabled>Prev</Pagination.Item>
                            <Pagination.Item active>1</Pagination.Item>
                            <Pagination.Item>2</Pagination.Item>
                            <Pagination.Item>3</Pagination.Item>
                            <Pagination.Item className="pagination-next">next</Pagination.Item>
                        </Pagination>
                    </Col>
                </Row>
                {/* End:: row-1 */}
    </Fragment>
    )
};

export default Searchcompany;