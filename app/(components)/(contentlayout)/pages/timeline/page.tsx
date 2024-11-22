"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Timeline = () => {
return (
<Fragment>
             {/* Page Header */}
                <Seo title={"Timeline"} />
                <Pageheader Heading="Timeline" Pages={[{title:"Pages", active:true},{title:"Timeline", active:false}]} />
            {/* Page Header Close */}
                
                {/* Start:: row-1 */}
                <div className="row mb-5">
                    <Col xl={12}>
                        <h6>TIMELINE 1</h6>
                        <div className="timeline">
                            <div className="container">
                                <Row>
                                    <div className="col-lg-12">
                                        <div className="timeline-container">
                                            <div className="timeline-end">
                                                <span className="avatar avatar-lg avatar-rounded bg-primary-transparent backdrop-blur text-center border border-primary border-opacity-10">
                                                    <span className="fs-13">2024</span>
                                                </span>
                                            </div>
                                            <div className="timeline-continue">
                                                <div className="row timeline-right">
                                                    <div className="col-md-6">
                                                        <p className="timeline-date">
                                                            21 Nov 2024
                                                        </p>
                                                        <span className="timeline-time fs-12 text-muted fw-medium d-block">
                                                            12:37PM
                                                        </span>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="timeline-box">
                                                            <p className="mb-2">
                                                                <b>You</b> Commented on <b>alexander taylor</b> post <Link scroll={false} className="text-secondary" href="#!"><u>#beautiful day</u></Link>.
                                                            </p>
                                                            <p className="profile-activity-media mb-0">
                                                                <Link scroll={false} href="#!">
                                                                    <img src="../../assets/images/media/media-17.jpg" alt="" />
                                                                </Link>    
                                                                <Link scroll={false} href="#!">
                                                                    <img src="../../assets/images/media/media-18.jpg" alt="" />
                                                                </Link>    
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row timeline-left">
                                                    <div className="col-md-6">
                                                        <div className="timeline-box ms-md-auto">
                                                            <p className="text-muted mb-2">
                                                                <span className="text-default"><b>Json Smith</b> reacted to the post &#128077;</span>.
                                                            </p>
                                                            <p className="text-muted mb-0">
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellendus rem rerum excepturi aperiam ipsam temporibus inventore ullam tempora eligendi libero sequi dignissimos cumque, et a sint tenetur consequatur omnis!
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p className="timeline-date">
                                                            30 Nov 2024
                                                        </p>
                                                        <span className="timeline-time fs-12 text-muted fw-medium d-block text-start">
                                                            10:15AM
                                                        </span>
                                                    </div>
                                                </div>
                                                <Row>
                                                    <div className="col-12">
                                                        <div className="timeline-year">
                                                            <span className="avatar avatar-lg avatar-rounded bg-success-transparent backdrop-blur text-center border border-success border-opacity-10">
                                                                <span className="fs-13">2024</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Row>
                                                <div className="row timeline-right">
                                                    <div className="col-md-6">
                                                        <p className="timeline-date">
                                                            01 Jan 2024
                                                        </p>
                                                        <span className="timeline-time fs-12 text-muted fw-medium d-block">
                                                            17:25PM
                                                        </span>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="timeline-box">
                                                            <p className="text-muted mb-2">
                                                                <span className="text-default"><b>Alicia Keys</b> shared a document with <b>you</b></span>.
                                                            </p>
                                                            <p className="profile-activity-media mb-0">
                                                                <Link scroll={false} href="#!">
                                                                    <img src="../../assets/images/media/file-manager/3.png" alt="" />
                                                                </Link>  
                                                                <span className="fs-11 text-muted">432.87KB</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row timeline-left">
                                                    <div className="col-md-6">
                                                        <div className="timeline-box ms-md-auto">
                                                            <p className="text-muted mb-2">
                                                                <span className="text-default"><b>You</b> shared a post with 4 people</span>.
                                                            </p>
                                                            <p className="profile-activity-media mb-2">
                                                                <Link scroll={false} href="#!">
                                                                    <img src="../../assets/images/media/media-75.jpg" alt="" />
                                                                </Link>   
                                                            </p>
                                                            <div>
                                                                <div className="avatar-list-stacked">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../assets/images/faces/10.jpg" alt="img" />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p className="timeline-date">
                                                            19 Dec 2024
                                                        </p>
                                                        <span className="timeline-time fs-12 text-muted fw-medium d-block text-start">
                                                            11:55AM
                                                        </span>
                                                    </div>
                                                </div>
                                                <Row>
                                                    <div className="col-12">
                                                        <div className="timeline-year">
                                                            <span className="avatar avatar-lg avatar-rounded bg-danger-transparent backdrop-blur text-center border border-danger border-opacity-10">
                                                                <span className="fs-13"> 2024</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Row>
                                                <div className="row timeline-right">
                                                    <div className="col-md-6">
                                                        <p className="timeline-date">
                                                            25 Nov 2024
                                                        </p>
                                                        <span className="timeline-time fs-12 text-muted fw-medium d-block">
                                                            07:45AM
                                                        </span>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="timeline-box">
                                                            <p className="text-muted mb-1">
                                                                <span className="text-default"><b>Melissa Blue</b> liked your post <b>travel excites</b></span>.<span className="float-end fs-11 text-muted">11,Dec 2022 - 11:18</span>
                                                            </p>
                                                            <p className="text-muted">you are already feeling the tense atmosphere of the video playing in the background</p>
                                                            <p className="profile-activity-media mb-0">
                                                                <Link scroll={false} href="#!">
                                                                    <img src="../../assets/images/media/media-59.jpg" className="m-1" alt="" />
                                                                </Link>  
                                                                <Link scroll={false} href="#!">
                                                                    <img src="../../assets/images/media/media-60.jpg" className="m-1" alt="" />
                                                                </Link>  
                                                                <Link scroll={false} href="#!">
                                                                    <img src="../../assets/images/media/media-61.jpg" className="m-1" alt="" />
                                                                </Link>  
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row timeline-left">
                                                    <div className="col-md-6">
                                                        <div className="timeline-box ms-md-auto">
                                                            <p className="mb-1">
                                                                <b>You</b> Commented on <b>Peter Engola</b> post <Link scroll={false} className="text-secondary" href="#!"><u>#Mother Nature</u></Link>.<span className="float-end fs-11 text-muted">24,Dec 2022 - 14:34</span>
                                                            </p>
                                                            <p className="text-muted">Technology id developing rapidly kepp uo your work &#128076;</p>
                                                            <p className="profile-activity-media mb-0">
                                                                <Link scroll={false} href="#!">
                                                                    <img src="../../assets/images/media/media-26.jpg" alt="" />
                                                                </Link>    
                                                                <Link scroll={false} href="#!">
                                                                    <img src="../../assets/images/media/media-29.jpg" alt="" />
                                                                </Link>    
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p className="timeline-date">
                                                            16 Dec 2024
                                                        </p>
                                                        <span className="timeline-time fs-12 text-muted fw-medium d-block text-start">
                                                            15:56PM
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="timeline-start">
                                                <span className="avatar avatar-lg avatar-rounded bg-warning-transparent backdrop-blur text-center border border-warning border-opacity-10">
                                                    <span className="fs-13">2024</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </div>
                {/* End:: row-1 */}

                {/* Start:: row-2 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>TIMELINE 2</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="timeline-steps">
                                    <div className="timeline-step">
                                        <div className="timeline-content" data-toggle="popover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                                            <div className="inner-circle"></div>
                                            <p className="fw-medium mt-3 mb-1">10:00 AM - March 1, 2022</p>
                                            <p className="text-muted mb-0 mb-lg-0">Kickoff Meeting: Start of a new project. Setting goals and assigning tasks.</p>
                                        </div>
                                    </div>
                                    <div className="timeline-step">
                                        <div className="timeline-content" data-toggle="popover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
                                            <div className="inner-circle"></div>
                                            <p className="fw-medium mt-3 mb-1">3:30 PM - April 10, 2022</p>
                                            <p className="text-muted mb-0 mb-lg-0">Team Workshop: Enhancing collaboration and creative thinking.</p>
                                        </div>
                                    </div>
                                    <div className="timeline-step">
                                        <div className="timeline-content" data-toggle="popover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
                                            <div className="inner-circle"></div>
                                            <p className="fw-medium mt-3 mb-1">12:00 PM - June 5, 2022</p>
                                            <p className="text-muted mb-0 mb-lg-0">Lunch & Learn: Exploring the latest industry trends over a meal.</p>
                                        </div>
                                    </div>
                                    <div className="timeline-step">
                                        <div className="timeline-content" data-toggle="popover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
                                            <div className="inner-circle"></div>
                                            <p className="fw-medium mt-3 mb-1">2:15 PM - July 20, 2022</p>
                                            <p className="text-muted mb-0 mb-lg-0">Product Demo: Sneak peek into our upcoming release.</p>
                                        </div>
                                    </div>
                                    <div className="timeline-step mb-0">
                                        <div className="timeline-content" data-toggle="popover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2020">
                                            <div className="inner-circle"></div>
                                            <p className="fw-medium mt-3 mb-1">9:00 AM - September 15, 2022</p>
                                            <p className="text-muted mb-0 mb-lg-0">Training Session: Skill-building for team members.</p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-2 */}
                
                {/* Start:: row-3 */}
                <Row>
                    <Col xl={12}>
                        <h6>TIMELINE 3</h6>
                        <ul className="notification">
                            <li>
                                <div className="notification-time">
                                   <span className="date">Friday</span>
                                   <span className="time">02:31</span>
                                </div>
                                <div className="notification-icon">
                                   <Link scroll={false} href="#!"></Link>
                                </div>
                                <div className="notification-body">
                                    <div className="d-flex align-items-start gap-3 flex-wrap">
                                        <div>
                                            <span className="avatar avatar-lg online">
                                                <img src="../../assets/images/faces/1.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill w-50">
                                            <h5 className="mb-1 fs-15 fw-medium text-dark">Event: Launch Party</h5>
                                            <p className="mb-0 mb-0 text-muted">Join us for a night of celebration as we unveil our latest product/service. There will be music, food, and exciting surprises!</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-light text-default">
                                                April 15, 2024
                                            </span>
                                        </div>
                                    </div>
                                </div>
                             </li>
                             <li>
                                <div className="notification-time">
                                   <span className="date">Monday</span>
                                   <span className="time">08:47</span>
                                </div>
                                <div className="notification-icon">
                                   <Link scroll={false} href="#!"></Link>
                                </div>
                                <div className="notification-body">
                                    <div className="d-flex align-items-start gap-3 flex-wrap">
                                        <div>
                                            <span className="avatar avatar-lg online">
                                                <img src="../../assets/images/faces/15.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill w-50">
                                            <h5 className="mb-1 fs-15 fw-medium text-dark">Milestone: Company Establishment</h5>
                                            <p className="mb-0 fs-13 mb-0 text-muted">Our journey began on this day when we officially established [Your Company Name]. Cheers to the years of growth and success!</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-light text-default">
                                                January 1, 2020
                                            </span>
                                        </div>
                                    </div>
                                </div>
                             </li>
                             <li>
                                <div className="notification-time">
                                   <span className="date">Yesterday</span>
                                   <span className="time">18:43</span>
                                </div>
                                <div className="notification-icon">
                                   <Link scroll={false} href="#!"></Link>
                                </div>
                                <div className="notification-body">
                                    <div className="d-flex align-items-start gap-3 flex-wrap">
                                        <div>
                                            <span className="avatar avatar-lg online">
                                                <img src="../../assets/images/faces/2.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill w-50">
                                            <h5 className="mb-1 fs-15 fw-medium text-dark">Achievement: 10,000 Followers</h5>
                                            <p className="mb-0 fs-13 mb-0 text-muted">We've hit a milestone! Thanks to each and every one of our followers for being part of our community. Here's to the next 10,000!</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-light text-default">
                                                June 1, 2022
                                            </span>
                                        </div>
                                    </div>
                                </div>
                             </li>
                            <li>
                               <div className="notification-time">
                                  <span className="date">Today</span>
                                  <span className="time">03:18</span>
                               </div>
                               <div className="notification-icon">
                                  <Link scroll={false} href="#!"></Link>
                               </div>
                               <div className="notification-body">
                                   <div className="d-flex align-items-start gap-3 flex-wrap">
                                       <div>
                                           <span className="avatar avatar-lg online">
                                               <img src="../../assets/images/faces/8.jpg" alt="" />
                                           </span>
                                       </div>
                                       <div className="flex-fill w-50">
                                           <h5 className="mb-1 fs-15 fw-medium text-dark">Product Launch: Innovation X</h5>
                                           <p className="mb-0 fs-13 mb-0 text-muted">Introducing Innovation X, our latest creation that will revolutionize the way you [brief description of the product/service]. Get ready for a new era!</p>
                                       </div>
                                       <div>
                                            <span className="badge bg-light text-default">
                                                September 10, 2024
                                            </span>
                                       </div>
                                   </div>
                               </div>
                            </li>
                            <li>
                                <div className="notification-time">
                                   <span className="date">Today</span>
                                   <span className="time">12:24</span>
                                </div>
                                <div className="notification-icon">
                                   <Link scroll={false} href="#!"></Link>
                                </div>
                                <div className="notification-body">
                                    <div className="d-flex align-items-start gap-3 flex-wrap">
                                        <div>
                                            <span className="avatar avatar-lg online">
                                                <img src="../../assets/images/faces/13.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill w-50">
                                            <h5 className="mb-1 fs-15 fw-medium text-dark">Team Building Retreat</h5>
                                            <p className="mb-0 fs-13 mb-0 text-muted">Our team took a break to recharge and bond. We came back stronger and more motivated than ever to bring you top-notch products/services!</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-light text-default">
                                                November 5-7, 2021
                                            </span>
                                        </div>
                                    </div>
                                </div>
                             </li>
                             <li>
                                <div className="notification-time">
                                   <span className="date">Today</span>
                                   <span className="time">04:11</span>
                                </div>
                                <div className="notification-icon">
                                   <Link scroll={false} href="#!"></Link>
                                </div>
                                <div className="notification-body">
                                    <div className="d-flex align-items-start gap-3 flex-wrap">
                                        <div>
                                            <span className="avatar avatar-lg online">
                                                <img src="../../assets/images/faces/6.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill w-50">
                                            <h5 className="mb-1 fs-15 fw-medium text-dark">Community Engagement: Charity Event</h5>
                                            <p className="mb-0 fs-13 mb-0 text-muted">Proud to give back to the community! Our team organized a charity event to support [Charity Name]. Together, we can make a difference.</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-light text-default">
                                                December 12, 2022
                                            </span>
                                        </div>
                                    </div>
                                </div>
                             </li>
                             <li>
                                <div className="notification-time">
                                   <span className="date">today</span>
                                   <span className="time">02:52</span>
                                </div>
                                <div className="notification-icon">
                                   <Link scroll={false} href="#!"></Link>
                                </div>
                                <div className="notification-body">
                                    <div className="d-flex align-items-start gap-3 flex-wrap">
                                        <div>
                                            <span className="avatar avatar-lg online">
                                                <img src="../../assets/images/faces/11.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill w-50">
                                            <h5 className="mb-1 fs-15 fw-medium text-dark">Industry Conference: Blue Ribbon Conference</h5>
                                            <p className="mb-0 fs-13 mb-0 text-muted">Our team attended Blue Ribbon Conference, gaining valuable insights and networking with industry leaders. Exciting times ahead!</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-light text-default">
                                                March 5-8, 2022
                                            </span>
                                        </div>
                                    </div>
                                </div>
                             </li>
                         </ul>
                         <div className="text-center mb-4">
                            <button className="btn btn-info-light btn-loader mx-auto">
                                <span className="me-2">Loading</span>
                                <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                            </button>
                         </div>
                    </Col>
                </Row>
                {/* End:: row-3 */}
</Fragment>
);
};

export default Timeline;