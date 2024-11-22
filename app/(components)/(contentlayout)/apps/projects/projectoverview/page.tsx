"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, ListGroup, OverlayTrigger, Row, Tooltip } from "react-bootstrap";

const Projectoverview = () => {
return ( 
    <Fragment>
            {/* Page Header */}
                <Seo title={"Projects Overview"} />
                <Pageheader Heading="Projects Overview" Pages={[{title:"Apps", active:true},{title:"Projects", active:true},{title:"Projects Overview", active:false}]} />
            {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={8}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    Project Details
                                </Card.Title> 
                                <div>
                                    <Link scroll={false} href="/apps/projects/createproject/" className="btn btn-sm btn-secondary btn-wave"><i className="ri-add-line align-middle me-1 fw-medium"></i>Create Project</Link>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <h5 className="fw-medium mb-4 task-title">
                                    Inventory Management System Enhancement
                                </h5>
                                <div className="fs-15 fw-medium mb-2">Project Description :</div>
                                <p className="text-muted task-description">The Inventory Management System Enhancement project aims to improve our existing system to streamline inventory processes and enhance overall operational efficiency. This project will involve critical updates and feature additions to optimize our inventory management.</p>
                                <div className="fs-15 fw-medium mb-2">Key tasks :</div>
                                <div className="mb-3">
                                    <ul className="task-details-key-tasks mb-0">
                                        <li>Assess the current inventory management system to identify pain points, limitations, and areas in need of improvement.</li>
                                        <li>Redesign the user interface for improved user experience, making it more intuitive and user-friendly.</li>
                                        <li>Optimize the database structure and performance for faster data retrieval and storage.</li>
                                        <li>Implement barcode scanning functionality to expedite product entry and tracking.</li>
                                        <li>Develop an automated reorder system that alerts staff when inventory levels reach predefined thresholds.</li>
                                        <li> Create reporting and analytics capabilities to provide insights into inventory turnover and forecasting.</li>
                                    </ul>
                                </div>
                                <div className="fs-15 fw-medium mb-2">Skills :</div>
                                <div>
                                    <span className="badge bg-light text-default border me-1">Teamwork</span>
                                    <span className="badge bg-light text-default border me-1">Graphic Design</span>
                                    <span className="badge bg-light text-default border me-1">Responsive Design</span>
                                    <span className="badge bg-light text-default border me-1">Web Accessibility</span>
                                    <span className="badge bg-light text-default border me-1">Front-End Build Tools</span>
                                    <span className="badge bg-light text-default border me-1">RESTful APIs</span>
                                    <span className="badge bg-light text-default border me-1">Performance Testing</span>
                                    <span className="badge bg-light text-default border me-1">Angular</span>
                                    <span className="badge bg-light text-default border me-1">Vue.js</span>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                    <div>
                                        <span className="d-block text-muted fs-12">Project Manager</span>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2 lh-1">
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <img src="../../../assets/images/faces/13.jpg" alt="" />
                                                </span>
                                            </div>
                                            <span className="d-block fs-14 fw-medium">S.K.Jacob</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="d-block text-muted fs-12">Start Date</span>
                                        <span className="d-block fs-14 fw-medium">22,Dec 2024</span>
                                    </div>
                                    <div>
                                        <span className="d-block text-muted fs-12">End Date</span>
                                        <span className="d-block fs-14 fw-medium">10,Feb 2024</span>
                                    </div>
                                    <div>
                                        <span className="d-block text-muted fs-12">Assigned To</span>
                                        <div className="avatar-list-stacked">
                                        <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Simon</Tooltip>}> 
                                                    <span className="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-primary" data-bs-original-title="Simon">
                                                <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                            </span>
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Sasha</Tooltip>}>
                                            <span className="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-primary" data-bs-original-title="Sasha">
                                                <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                            </span>
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Anagha</Tooltip>}>
                                            <span className="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-primary" data-bs-original-title="Anagha">
                                                <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                            </span>
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Hishen</Tooltip>}>
                                            <span className="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-primary" data-bs-original-title="Hishen">
                                                <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                            </span>
                                        </OverlayTrigger>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="d-block text-muted fs-12">Status</span>
                                        <span className="d-block"><span className="badge bg-primary-transparent">In Progress</span></span>
                                    </div>
                                    <div>
                                        <span className="d-block text-muted fs-12">Priority</span>
                                        <span className="d-block fs-14 fw-medium"><span className="badge bg-success-transparent">Low</span></span>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Project Discussions</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <ul className="list-unstyled profile-timeline">
                                    <li>
                                        <div>
                                            <span className="avatar avatar-sm bg-primary-transparent avatar-rounded profile-timeline-avatar">
                                                E
                                            </span>
                                            <p className="mb-2">
                                                <span className="fw-medium">Project Kick-off Meeting</span>
                                            </p>
                                            <p className="text-muted mb-0">
                                                Discuss project scope, objectives, and timelines.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                <img src="../../../assets/images/faces/11.jpg" alt="" />
                                            </span>
                                            <p className="text-muted mb-2">
                                                <span className="fw-medium">Security and Compliance Audit</span>
                                            </p>
                                            <p className="text-muted mb-0">
                                                Ensure the system adheres to security and regulatory requirements.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                <img src="../../../assets/images/faces/4.jpg" alt="" />
                                            </span>
                                            <p className="text-muted mb-2">
                                                <span className="text-default"><b>Alicia Keys</b> shared a document with <b>you</b></span>.<span className="float-end fs-11 text-muted">21,Dec 2024 - 15:32</span>
                                            </p>
                                            <p className="profile-activity-media mb-0">
                                                <Link scroll={false} href="#!">
                                                    <img src="../../../assets/images/media/file-manager/3.png" alt="" />
                                                </Link>  
                                                <span className="fs-11 text-muted">432.87KB</span>
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <span className="avatar avatar-sm bg-success-transparent avatar-rounded profile-timeline-avatar">
                                                P
                                            </span>
                                            <p className="text-muted mb-2">
                                                <span className="text-default"><b>You</b> shared a post with 4 people <b>Simon,Sasha,Anagha,Hishen</b></span>.<span className="float-end fs-11 text-muted">28,Dec 2024 - 18:46</span>
                                            </p>
                                            <p className="profile-activity-media mb-2">
                                                <Link scroll={false} href="#!">
                                                    <img src="../../../assets/images/media/media-18.jpg" alt="" />
                                                </Link>   
                                            </p>
                                            <div>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                <img src="../../../assets/images/media/media-39.jpg" alt="" />
                                            </span>
                                            <p className="mb-1">
                                                <b>Json</b> Commented on Project <Link scroll={false} className="text-secondary" href="#!"><u>#UI Technologies</u></Link>.<span className="float-end fs-11 text-muted">24,Dec 2024 - 14:34</span>
                                            </p>
                                            <p className="text-muted">Technology id developing rapidly keep up your work &#128076;</p>
                                            <p className="profile-activity-media mb-0">
                                                <Link scroll={false} href="#!">
                                                    <img src="../../../assets/images/media/media-26.jpg" alt="" />
                                                </Link>    
                                                <Link scroll={false} href="#!">
                                                    <img src="../../../assets/images/media/media-29.jpg" alt="" />
                                                </Link>    
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-sm-flex align-items-center lh-1">
                                    <div className="me-sm-3 mb-2 mb-sm-0">
                                        <img src="../../../assets/images/faces/9.jpg" alt="" className="avatar avatar-md avatar-rounded"/>
                                    </div>
                                    <div className="flex-fill me-sm-2">
                                        <div className="input-group">
                                            <input type="text" className="form-control w-sm-50 border shadow-none" placeholder="Post Anything" aria-label="Recipient's username with two button addons" />
                                            <Button variant="" className="btn btn-outline-light btn-wave waves-effect waves-light" type="button"><i className="bi bi-emoji-smile"></i></Button>
                                            <Button variant="" className="btn btn-outline-light btn-wave waves-effect waves-light" type="button"><i className="bi bi-paperclip"></i></Button>
                                            <Button variant="" className="btn btn-outline-light btn-wave waves-effect waves-light" type="button"><i className="bi bi-camera"></i></Button>
                                            <Button variant="" className="btn btn-primary btn-wave waves-effect waves-light" type="button">Post</Button>
                                        </div>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    Project Team
                                </Card.Title>
                                <div>
                                    <Button variant="" className="btn btn-light btn-sm btn-wave"><i className="ri-add-line align-middle me-1 fw-medium"></i>Add Member</Button>
                                </div>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Designation</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-xs avatar-rounded">
                                                                <img src="../../../assets/images/faces/2.jpg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="fw-medium fs-13">Simon Conway</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-primary-transparent">UI Developer</span>
                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="" aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
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
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-xs avatar-rounded">
                                                                <img src="../../../assets/images/faces/8.jpg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="fw-medium fs-13">Sasha Banks</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-pink-transparent">Ui Designer</span>
                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="" aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
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
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-xs avatar-rounded">
                                                                <img src="../../../assets/images/faces/5.jpg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="fw-medium fs-13">Anagha May</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-warning-transparent">UI Tester</span>
                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="" aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
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
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-xs avatar-rounded">
                                                                <img src="../../../assets/images/faces/10.jpg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="fw-medium fs-13">Hishen Stuart</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Angular Developer</span>
                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="" aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
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
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>Project Goals</Card.Title>
                                <div className="btn btn-sm btn-light btn-wave"><i className="ri-add-line align-middle me-1 fw-medium"></i>Add Goal</div>
                            </Card.Header>
                            <Card.Body>
                                <ListGroup>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked1" defaultChecked/></div>
                                            <div className="fw-medium">Enhance user experience</div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked2"/></div>
                                            <div className="fw-medium">Boost inventory accuracy</div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked3"/></div>
                                            <div className="fw-medium">Reduce manual errors</div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked4"/></div>
                                            <div className="fw-medium">Improve data security</div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked5" defaultChecked/></div>
                                            <div className="fw-medium">Increase operational efficiency</div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked6" defaultChecked/></div>
                                            <div className="fw-medium">Enhance reporting capabilities</div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked7" defaultChecked/></div>
                                            <div className="fw-medium">Reduce excess costs</div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked77"/></div>
                                            <div className="fw-medium">Achieve regulatory compliance</div>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                                <div className="mt-3 text-center">
                                    <Button variant="" className="btn btn-success btn-wave">View All</Button>
                                </div>
                            </Card.Body>
                        </Card>
                        <div className="card custom-card overflow-hidden">
                            <Card.Header>
                                <Card.Title>
                                    Project Documents
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <ListGroup className="list-group list-group-flush">
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <div className="lh-1">
                                                <span className="avatar avatar-rounded p-2 bg-light">
                                                    <img src="../../../assets/images/media/file-manager/1.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <Link scroll={false} href="#!"><span className="d-block fw-medium">Full Project</span></Link>
                                                <span className="d-block text-muted fs-12 fw-normal">0.45MB</span>
                                            </div>
                                            <div className="btn-list">
                                                <Button variant="" className="btn btn-sm btn-icon btn-info-light btn-wave"><i className="ri-edit-line"></i></Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave"><i className="ri-delete-bin-line"></i></Button>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <div className="lh-1">
                                                <span className="avatar avatar-rounded bg-light">
                                                    <img src="../../../assets/images/media/file-manager/3.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <Link scroll={false} href="#!"><span className="d-block fw-medium">assets.zip</span></Link>
                                                <span className="d-block text-muted fs-12 fw-normal">0.99MB</span>
                                            </div>
                                            <div className="btn-list">
                                                <Button variant="" className="btn btn-sm btn-icon btn-info-light btn-wave"><i className="ri-edit-line"></i></Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave"><i className="ri-delete-bin-line"></i></Button>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <div className="lh-1">
                                                <span className="avatar avatar-rounded p-2 bg-light">
                                                    <img src="../../../assets/images/media/file-manager/1.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <Link scroll={false} href="#!"><span className="d-block fw-medium">image-1.png</span></Link>
                                                <span className="d-block text-muted fs-12 fw-normal">245KB</span>
                                            </div>
                                            <div className="btn-list">
                                                <Button variant="" className="btn btn-sm btn-icon btn-info-light btn-wave"><i className="ri-edit-line"></i></Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave"><i className="ri-delete-bin-line"></i></Button>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <div className="lh-1">
                                                <span className="avatar avatar-rounded bg-light">
                                                    <img src="../../../assets/images/media/file-manager/3.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <Link scroll={false} href="#!"><span className="d-block fw-medium">documentation.zip</span></Link>
                                                <span className="d-block text-muted fs-12 fw-normal">2MB</span>
                                            </div>
                                            <div className="btn-list">
                                                <Button variant="" className="btn btn-sm btn-icon btn-info-light btn-wave"><i className="ri-edit-line"></i></Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave"><i className="ri-delete-bin-line"></i></Button>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <div className="lh-1">
                                                <span className="avatar avatar-rounded bg-light">
                                                    <img src="../../../assets/images/media/file-manager/3.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <Link scroll={false} href="#!"><span className="d-block fw-medium">landing.zip</span></Link>
                                                <span className="d-block text-muted fs-12 fw-normal">3.46MB</span>
                                            </div>
                                            <div className="btn-list">
                                                <Button variant="" className="btn btn-sm btn-icon btn-info-light btn-wave"><i className="ri-edit-line"></i></Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave"><i className="ri-delete-bin-line"></i></Button>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </div>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    )
};

export default Projectoverview;