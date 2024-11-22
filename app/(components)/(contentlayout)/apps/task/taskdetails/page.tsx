"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, ListGroup, OverlayTrigger, ProgressBar, Row, Tooltip } from "react-bootstrap";

const Taskdetails = () => {
return ( 
    <Fragment>
            {/* Page Header */}
                 <Seo title={"Task Details"} />
                <Pageheader Heading="Task Details" Pages={[{title:"Apps", active:true},{title:"Task", active:true},{title:"Task Details", active:false}]} />
            {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={8}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>Task Summary</Card.Title>
                                <div className="btn-list">
                                    <Button variant="" type="button" className="btn btn-success btn-sm btn-wave me-0"><i className="ri-edit-line me-1 align-middle"></i>Edit Task</Button>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <h5 className="fw-medium mb-4 task-title">
                                    Launch Marketing Campaign
                                </h5>
                                <div className="fs-15 fw-medium mb-2">Task Description :</div>
                                <p className="text-muted task-description">The current website design needs a refresh to improve user experience and enhance visual appeal. The goal is to create a modern and responsive design that aligns with the latest web design trends. The updated design should ensure seamless navigation, easy readability, and a cohesive visual identity.</p>
                                <div className="fs-15 fw-medium mb-2">Key tasks :</div>
                                <div>
                                    <ul className="task-details-key-tasks mb-0">
                                        <li>Conduct market research to identify target audience and competition.</li>
                                        <li>Develop a comprehensive marketing campaign strategy.</li>
                                        <li>Create engaging and relevant content for the campaign.</li>
                                        <li>Execute the marketing campaign.</li>
                                        <li>Monitor the campaign's performance and gather data for analysis.</li>
                                        <li>Make adjustments based on campaign performance analysis.</li>
                                    </ul>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                    <div>
                                        <span className="d-block text-muted fs-12">Assigned By</span>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2 lh-1">
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <img src="../../../assets/images/faces/15.jpg" alt="" />
                                                </span>
                                            </div>
                                            <span className="d-block fs-14 fw-medium">J.J.Miller</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="d-block text-muted fs-12">Assigned Date</span>
                                        <span className="d-block fs-14 fw-medium">24,Dec 2024</span>
                                    </div>
                                    <div>
                                        <span className="d-block text-muted fs-12">Due Date</span>
                                        <span className="d-block fs-14 fw-medium">05,Jan 2024</span>
                                    </div>
                                    <div className="task-details-progress">
                                        <span className="d-block text-muted fs-12 mb-1">Progress</span>
                                        <div className="d-flex align-items-center">
                                            <ProgressBar className="progress progress-xs progress-animate flex-fill me-2" variant="primary" now={70} />
                                            <div className="text-muted fs-11">70%</div>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="d-block text-muted fs-12">Efforts</span>
                                        <span className="d-block fs-14 fw-medium">45H : 35M : 45S</span>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Task Discussions</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <ul className="list-unstyled profile-timeline">
                                    <li>
                                        <div>
                                            <span className="avatar avatar-sm bg-primary-transparent avatar-rounded profile-timeline-avatar">
                                                E
                                            </span>
                                            <p className="mb-2">
                                                <span className="fw-medium">You</span> Commented on <span className="fw-medium">Work Process</span> in this task <Link scroll={false} className="text-secondary" href="#!"><u>#New Task</u></Link>.<span className="float-end fs-11 text-muted">24,Dec 2024 - 14:34</span>
                                            </p>
                                            <p className="text-muted mb-0">
                                                "Sure. We've completed the initial wireframes and received feedback from the client. They are happy with the direction. We're now moving on to high-fidelity design mockups."
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                <img src="../../../assets/images/faces/11.jpg" alt="" />
                                            </span>
                                            <p className="text-muted mb-2">
                                                <span className="text-default">
                                                    <span className="fw-medium">Christopher</span> reacted to the task &#128077;
                                                </span>.
                                                <span className="float-end fs-11 text-muted">18,Dec 2024 - 12:16</span>
                                            </p>
                                            <p className="text-muted mb-0">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellendus rem rerum excepturi aperiam ipsam temporibus inventore ullam tempora eligendi libero sequi dignissimos cumque, et a sint tenetur consequatur omnis!
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                <img src="../../../assets/images/faces/4.jpg" alt="" />
                                            </span>
                                            <p className="text-muted mb-2">
                                                <span className="text-default">
                                                    <span className="fw-medium">Isabella</span> shared a document with
                                                     <span className="fw-medium ms-1">you</span>
                                                </span>.
                                                <span className="float-end fs-11 text-muted">21,Dec 2024 - 15:32</span>
                                            </p>
                                            <p className="profile-activity-media mb-0">
                                                <Link scroll={false} aria-label="anchor"  href="#!">
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
                                                <span className="text-default">
                                                    <span className="fw-medium">You</span> shared a post with 4 people
                                                    <span className="fw-medium ms-1">Amelia,Harper,Evelyn,Richard </span>
                                                </span>.
                                                    <span className="float-end fs-11 text-muted">28,Dec 2024 - 18:46</span>
                                            </p>
                                            <p className="profile-activity-media mb-2">
                                                <Link scroll={false} aria-label="anchor"  href="#!">
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
                                                        <img src="../../../assets/images/faces/2.jpg" alt="img" />
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
                                                <span className="fw-medium">Json</span> Commented on Task post <Link scroll={false} className="text-secondary" href="#!"><u>#UI Technologies</u></Link>.<span className="float-end fs-11 text-muted">24,Dec 2024 - 14:34</span>
                                            </p>
                                            <p className="text-muted">Technology id developing rapidly keep up your work &#128076;</p>
                                            <p className="profile-activity-media mb-0">
                                                <Link scroll={false} aria-label="anchor"  href="#!">
                                                    <img src="../../../assets/images/media/media-26.jpg" alt="" />
                                                </Link>
                                                <Link scroll={false} aria-label="anchor"  href="#!">
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
                                        <span className="avatar avatar-md avatar-rounded">
                                            <img src="../../../assets/images/faces/9.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="flex-fill me-sm-2">
                                        <div className="input-group">
                                            <input type="text" className="form-control shadow-none border" placeholder="Post Anything" aria-label="Recipient's username with two button addons" />
                                            <Button variant="" type="button" aria-label="button" className="btn btn-outline-light border btn-wave border-start-0"><i className="bi bi-emoji-smile"></i></Button>
                                            <Button variant="" type="button" aria-label="button" className="btn btn-outline-light border btn-wave border-start-0"><i className="bi bi-paperclip"></i></Button>
                                            <Button variant="" type="button" aria-label="button" className="btn btn-outline-light border btn-wave border-start-0"><i className="bi bi-camera"></i></Button>
                                            <Button variant="" className="btn btn-primary btn-wave" type="button">Post</Button>
                                        </div>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header>
                                <Card.Title>
                                    Additional Details
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <tbody>
                                            <tr>
                                                <td><span className="fw-medium">Task ID :</span></td>
                                                <td>SPK - 123</td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-medium">Task Tags :</span></td>
                                                <td>
                                                    <span className="badge bg-light border text-default">Web Design</span>
                                                    <span className="badge bg-light border text-default ms-1">Responsive Design</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-medium">Project Name :</span></td>
                                                <td>
                                                    Evergreen Garden Redesign
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-medium">Project Status :</span></td>
                                                <td>
                                                   <span className="fw-medium text-secondary">Inprogress</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-medium">Project Priority :</span></td>
                                                <td>
                                                   <span className="badge bg-danger-transparent">High</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><span className="fw-medium">Assigned To :</span></td>
                                                <td>
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
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>Sub Tasks</Card.Title>
                                <div>
                                    <Button variant="" type="button" className="btn btn-secondary-light btn-sm btn-wave"><i className="ri-add-line me-1 align-middle"></i>Sub Task</Button>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <ListGroup>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked1" checked/></div> 
                                            <div className="fw-medium">Create a list of industry publications.</div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked2"/></div> 
                                            <div className="fw-medium">Define campaign goals and objectives.</div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked3"/></div> 
                                            <div className="fw-medium">Write blog posts and articles.</div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked4"/></div> 
                                            <div className="fw-medium">Schedule social media posts.</div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked5" checked/></div> 
                                            <div className="fw-medium">Track website traffic and conversions.</div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked6" checked/></div> 
                                            <div className="fw-medium">Modify content as needed.</div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked77" checked/></div> 
                                            <div className="fw-medium">Implement customer feedback.</div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked7"/></div> 
                                            <div className="fw-medium">Collaborate with influencers.</div>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header>
                                <Card.Title>
                                    Attachments
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
                                                <Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-info-light btn-wave"><i className="ri-edit-line"></i></Button>
                                                <Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-danger-light btn-wave"><i className="ri-delete-bin-line"></i></Button>
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
                                                <Button variant="" aria-label="button" type="button" className="btn btn-sm btn-icon btn-info-light btn-wave"><i className="ri-edit-line"></i></Button>
                                                <Button variant="" aria-label="button" type="button" className="btn btn-sm btn-icon btn-danger-light btn-wave"><i className="ri-delete-bin-line"></i></Button>
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
                                                <Button variant="" aria-label="button" type="button" className="btn btn-sm btn-icon btn-info-light btn-wave"><i className="ri-edit-line"></i></Button>
                                                <Button variant="" aria-label="button" type="button" className="btn btn-sm btn-icon btn-danger-light btn-wave"><i className="ri-delete-bin-line"></i></Button>
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
                                                <Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-info-light btn-wave"><i className="ri-edit-line"></i></Button>
                                                <Button variant="" type="button" aria-label="button" className="btn btn-sm btn-icon btn-danger-light btn-wave"><i className="ri-delete-bin-line"></i></Button>
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
                                                <Button variant="" aria-label="button" type="button" className="btn btn-sm btn-icon btn-info-light btn-wave"><i className="ri-edit-line"></i></Button>
                                                <Button variant="" aria-label="button" type="button" className="btn btn-sm btn-icon btn-danger-light btn-wave"><i className="ri-delete-bin-line"></i></Button>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    )
};

export default Taskdetails;