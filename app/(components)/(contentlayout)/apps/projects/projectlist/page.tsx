"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, Pagination, ProgressBar, Row } from "react-bootstrap";
const Select = dynamic(() => import("react-select"), { ssr: false });
const Projectlist = () => {
    const Projectselectdata=[
        {value:'Sort By', label:'Sort By'},
        {value:'Newest', label:'Newest'},
        {value:'Date Added', label:'Date Added'},
        {value:'Type', label:'Type'},
        {value:'A - Z', label:'A - Z'},
    ]
return ( 
    <Fragment>
            {/* Page Header */}
                <Seo title={"Projects List"} />
                <Pageheader Heading="Projects List" Pages={[{title:"Apps", active:true},{title:"Projects", active:true},{title:"Projects List", active:false}]} />
            {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Body className="p-3">
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                    <div className="d-flex flex-wrap gap-1 project-list-main">
                                        <Link scroll={false} href="/apps/projects/createproject/" className="btn btn-primary me-2"><i className="ri-add-line me-1 fw-medium align-middle"></i>New Project</Link>
                                        <Select name="colors" options={Projectselectdata} className="basic-multi-select"
                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Projectselectdata[0]]}
                                                />
                                    </div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/1.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/12.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/4.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../assets/images/faces/13.jpg" alt="img" />
                                        </span>
                                        <Link scroll={false} className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                            +8
                                        </Link>
                                    </div>
                                    <div className="d-flex" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search Project" aria-label="Search"/>
                                        <Button variant="" className="btn btn-light" type="submit">Search</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End::row-1 */}

                {/* Start::row-2 */}

                <Row>
                    <Col xl={12}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col">Project Name</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Team</th>
                                                <th scope="col">Assigned Date</th>
                                                <th scope="col">Due Date</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Priority</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded p-1 bg-danger-transparent">
                                                                <img src="../../../assets/images/company-logos/1.png" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <Link scroll={false} href="#!" className="fw-medium fs-14 d-block text-truncate project-list-title">Design & Developing New Project</Link>
                                                            <span className="text-muted d-block fs-12">Total <span className="fw-medium text-default">18/22</span> tasks completed</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="text-muted mb-0 project-list-description">Create a user-friendly dashboard that aggregates and visualizes customer feedback data.</p>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                                        </span>
                                                        <Link scroll={false} className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                                            +2
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    24,Nov 2024
                                                </td>
                                                <td>
                                                    12,Dec 2024
                                                </td>
                                                <td>
                                                    <div>
                                                        <ProgressBar variant="primary" now={80} className="progress progress-xs progress-animate" />
                                                        <div className="mt-1"><span className="text-primary fw-medium">80%</span> Completed</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Low</span>
                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="fe fe-more-vertical"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <li><Dropdown.Item href="#!"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item></li>
                                                            <li><Dropdown.Item href="#!"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item></li>
                                                            <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded p-1 bg-warning-transparent">
                                                                <img src="../../../assets/images/company-logos/2.png" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <Link scroll={false} href="#!" className="fw-medium fs-14 d-block text-truncate project-list-title">Content Management System (CMS) Integration</Link>
                                                            <span className="text-muted d-block fs-12">Total <span className="fw-medium text-default">26/68</span> tasks completed</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="text-muted mb-0 project-list-description">Analyze and categorize feedback into positive, neutral, and negative sentiments.</p>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/12.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/9.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/11.jpg" alt="img" />
                                                        </span>
                                                        <Link scroll={false} className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                                            +4
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    20,Nov 2024
                                                </td>
                                                <td>
                                                    10,Jan 2024
                                                </td>
                                                <td>
                                                    <div>
                                                        <ProgressBar variant="primary" now={45} className="progress progress-xs progress-animate" />
                                                        <div className="mt-1"><span className="text-primary fw-medium">45%</span> Completed</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-info-transparent">Medium</span>
                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="fe fe-more-vertical"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <li><Dropdown.Item href="#!"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item></li>
                                                            <li><Dropdown.Item href="#!"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item></li>
                                                            <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded p-1 bg-secondary-transparent">
                                                                <img src="../../../assets/images/company-logos/3.png" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <Link scroll={false} href="#!" className="fw-medium fs-14 d-block text-truncate project-list-title">Task Scheduler and Automation</Link>
                                                            <span className="text-muted d-block fs-12">Total <span className="fw-medium text-default">21/45</span> tasks completed</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="text-muted mb-0 project-list-description">Implement sentiment analysis to identify key themes and trends within the feedback.</p>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/6.jpg" alt="img" />
                                                        </span>
                                                        <Link scroll={false} className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                                            +1
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    31,Dec 2024
                                                </td>
                                                <td>
                                                    10,Feb 2024
                                                </td>
                                                <td>
                                                    <ProgressBar variant="primary" now={66} className="progress progress-xs progress-animate" />
                                                    <div className="mt-1"><span className="text-primary fw-medium">66%</span> Completed</div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Low</span>
                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="fe fe-more-vertical"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <li><Dropdown.Item href="#!"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item></li>
                                                            <li><Dropdown.Item href="#!"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item></li>
                                                            <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded p-1 bg-success-transparent">
                                                                <img src="../../../assets/images/company-logos/5.png" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <Link scroll={false} href="#!" className="fw-medium fs-14 d-block text-truncate project-list-title">Advanced Search and Filtering</Link>
                                                            <span className="text-muted d-block fs-12">Total <span className="fw-medium text-default">45/54</span> tasks completed</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="text-muted mb-0 project-list-description">Provide actionable recommendations based on the analysis to improve customer satisfaction.</p>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/3.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/9.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/12.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/11.jpg" alt="img" />
                                                        </span>
                                                        <Link scroll={false} className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                                            +2
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    02,Jun 2024
                                                </td>
                                                <td>
                                                    15,Jun 2024
                                                </td>
                                                <td>
                                                    <ProgressBar variant="primary" now={89} className="progress progress-xs progress-animate" />
                                                    <div className="mt-1"><span className="text-primary fw-medium">89%</span> Completed</div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-danger-transparent">High</span>
                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="fe fe-more-vertical"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <li><Dropdown.Item href="#!"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item></li>
                                                            <li><Dropdown.Item href="#!"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item></li>
                                                            <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded p-1 bg-primary-transparent">
                                                                <img src="../../../assets/images/company-logos/8.png" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <Link scroll={false} href="#!" className="fw-medium fs-14 d-block text-truncate project-list-title">Data Export and Reporting</Link>
                                                            <span className="text-muted d-block fs-12">Total <span className="fw-medium text-default">14/26</span> tasks completed</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="text-muted mb-0 project-list-description">Real-time data collection from various customer feedback sources, including surveys, emails, and social media.</p>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/1.jpg" alt="img" />
                                                        </span>
                                                        <Link scroll={false} className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                                            +1
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    29,May 2024
                                                </td>
                                                <td>
                                                    08,Jun 2024
                                                </td>
                                                <td>
                                                    <ProgressBar variant="primary" now={60} className="progress progress-xs progress-animate" />
                                                    <div className="mt-1"><span className="text-primary fw-medium">60%</span> Completed</div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-info-transparent">Medium</span>
                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="fe fe-more-vertical"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <li><Dropdown.Item href="#!"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item></li>
                                                            <li><Dropdown.Item href="#!"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item></li>
                                                            <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded p-1 bg-success-transparent">
                                                                <img src="../../../assets/images/company-logos/10.png" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <Link scroll={false} href="#!" className="fw-medium fs-14 d-block text-truncate project-list-title">Activity Log and Audit Trail</Link>
                                                            <span className="text-muted d-block fs-12">Total <span className="fw-medium text-default">28/64</span> tasks completed</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="text-muted mb-0 project-list-description">NLP and Sentiment Analysis: Natural Language Toolkit (NLTK), spaCy, and TextBlob</p>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/7.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/13.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    04,Jun 2024
                                                </td>
                                                <td>
                                                    15,Jun 2024
                                                </td>
                                                <td>
                                                    <ProgressBar variant="primary" now={45} className="progress progress-xs progress-animate" />
                                                    <div className="mt-1"><span className="text-primary fw-medium">45%</span> Completed</div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Low</span>
                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="fe fe-more-vertical"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <li><Dropdown.Item href="#!"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item></li>
                                                            <li><Dropdown.Item href="#!"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item></li>
                                                            <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded p-1 bg-info-transparent">
                                                                <img src="../../../assets/images/company-logos/9.png" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <Link scroll={false} href="#!" className="fw-medium fs-14 d-block text-truncate project-list-title">Role-Based Access Control (RBAC) Implementation</Link>
                                                            <span className="text-muted d-block fs-12">Total <span className="fw-mediumtext-default">86/122</span> tasks completed</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="text-muted mb-0 project-list-description">Sentiment analysis using Natural Language Processing (NLP) techniques.</p>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/14.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/15.jpg" alt="img" />
                                                        </span>
                                                        <Link scroll={false} className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                                            +2
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    24,Jun 2024
                                                </td>
                                                <td>
                                                    05,Jul 2024
                                                </td>
                                                <td>
                                                    
                                                        <ProgressBar variant="primary" now={65} className="progress progress-xs progress-animate" />
                                                    <div className="mt-1"><span className="text-primary fw-medium">65%</span> Completed</div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-danger-transparent">High</span>
                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="fe fe-more-vertical"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <li><Dropdown.Item href="#!"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item></li>
                                                            <li><Dropdown.Item href="#!"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item></li>
                                                            <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded p-1 bg-teal-transparent">
                                                                <img src="../../../assets/images/company-logos/6.png" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <Link scroll={false} href="#!" className="fw-medium fs-14 d-block text-truncate project-list-title">Customizable Themes and Layouts</Link>
                                                            <span className="text-muted d-block fs-12">Total <span className="fw-medium text-default">20/26</span> tasks completed</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="text-muted mb-0 project-list-description">Filtering and sorting options to drill down into specific feedback categories.</p>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/13.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/16.jpg" alt="img" />
                                                        </span>
                                                        <Link scroll={false} className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                                            +2
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    20,Jun 2024
                                                </td>
                                                <td>
                                                    18,Jul 2024
                                                </td>
                                                <td>
                                                    <ProgressBar variant="primary" now={75} className="progress progress-xs progress-animate" />
                                                    <div className="mt-1"><span className="text-primary fw-medium">75%</span> Completed</div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-info-transparent">Medium</span>
                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="fe fe-more-vertical"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <li><Dropdown.Item href="#!"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item></li>
                                                            <li><Dropdown.Item href="#!"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item></li>
                                                            <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End::row-2 */}
                <Pagination className="pagination justify-content-end">
                    <Pagination.Item disabled>Previous
                    </Pagination.Item>
                    <Pagination.Item>1</Pagination.Item>
                    <Pagination.Item>2</Pagination.Item>
                    <Pagination.Item>3</Pagination.Item>
                    <Pagination.Item className="pagination-next">Next</Pagination.Item>
                </Pagination>
    </Fragment>
    )
};

export default Projectlist;