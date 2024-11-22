"use client"
import { avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9 } from "@/shared/data/prism/utilities-prism";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import ShowCode from "@/shared/layout-components/showcode/showcode";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Avatars = () => {
return(
    <Fragment>
                {/* Page Header */}
                <Seo title={"Avatars"} />
                <Pageheader Heading="Avatars" Pages={[{title:"Utilities", active:true},{title:"Avatars", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={6} lg={6} md={12} sm={12}>
                        <ShowCode title="Avatars" customCardClass="custom-card" customCardBodyClass="py-4" code={avatar1}>
                                <span className="avatar me-2 avatar-radius-0">
                                    <img src="../../assets/images/faces/1.jpg" alt="img" />
                                </span>
                                <span className="avatar me-2">
                                    <img src="../../assets/images/faces/2.jpg" alt="img" />
                                </span>
                                <span className="avatar me-2 avatar-rounded">
                                    <img src="../../assets/images/faces/3.jpg" alt="img" />
                                </span>
                        </ShowCode>
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12}>
                        <ShowCode title=" Avatar Sizes <p class='subtitle text-muted fs-12 fw-normal'>  Avatars of different sizes </p>" customCardClass="custom-card" customCardBodyClass="" code={avatar2}>
                                <span className="avatar avatar-xs me-2">
                                    <img src="../../assets/images/faces/4.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-sm me-2">
                                    <img src="../../assets/images/faces/5.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-md me-2">
                                    <img src="../../assets/images/faces/6.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-lg me-2">
                                    <img src="../../assets/images/faces/7.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-xl me-2">
                                    <img src="../../assets/images/faces/8.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-xxl me-2">
                                    <img src="../../assets/images/faces/9.jpg" alt="img" />
                                </span>
                        </ShowCode>
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12}>
                        <ShowCode title="Avatar With Icons
                                        <p class='subtitle text-muted fs-12 fw-normal'>
                                            Avatar contains icons to perform respective action.
                                        </p>" customCardClass="custom-card" customCardBodyClass="" code={avatar3}>
                           
                                <span className="avatar avatar-xs me-2 avatar-rounded">
                                    <img src="../../assets/images/faces/2.jpg" alt="img" />
                                    <a href="#!" className="badge bg-success rounded-pill avatar-badge"><i className="fe fe-camera"></i></a>
                                </span>
                                <span className="avatar avatar-sm me-2 avatar-rounded">
                                    <img src="../../assets/images/faces/3.jpg" alt="img" />
                                    <a href="#!" className="badge rounded-pill bg-secondary avatar-badge"><i className="fe fe-edit"></i></a>
                                </span>
                                <span className="avatar avatar-md me-2 avatar-rounded">
                                    <img src="../../assets/images/faces/14.jpg" alt="img" />
                                    <a href="#!" className="badge rounded-pill bg-warning avatar-badge"><i className="fe fe-plus"></i></a>
                                </span>
                                <span className="avatar avatar-lg me-2 avatar-rounded">
                                    <img src="../../assets/images/faces/13.jpg" alt="img" />
                                    <a href="#!" className="badge rounded-pill bg-info avatar-badge"><i className="fe fe-edit"></i></a>
                                </span>
                                <span className="avatar avatar-xl me-2 avatar-rounded">
                                    <img src="../../assets/images/faces/15.jpg" alt="img" />
                                    <a href="#!" className="badge rounded-pill bg-success avatar-badge"><i className="fe fe-camera"></i></a>
                                </span>
                                <span className="avatar avatar-xxl me-2 avatar-rounded">
                                    <img src="../../assets/images/faces/9.jpg" alt="img" />
                                    <a href="#!" className="badge rounded-pill bg-danger avatar-badge"><i className="fe fe-plus"></i></a>
                                </span>
                        </ShowCode>
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12}>
                        <ShowCode title=" Avatar With Online Status Indicators
                                        <p class='subtitle text-muted fs-12 fw-normal'>
                                            avatars having online status indicator.
                                        </p>" customCardClass="custom-card" customCardBodyClass="" code={avatar4}>
                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                        <img src="../../assets/images/faces/8.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm online me-2 avatar-rounded">
                                        <img src="../../assets/images/faces/10.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-md me-2 online avatar-rounded">
                                        <img src="../../assets/images/faces/12.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-lg me-2 online avatar-rounded">
                                        <img src="../../assets/images/faces/13.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-xl me-2 online avatar-rounded">
                                        <img src="../../assets/images/faces/14.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-xxl me-2 online avatar-rounded">
                                        <img src="../../assets/images/faces/15.jpg" alt="img" />
                                    </span>
                            </ShowCode>
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12}>
                        <ShowCode title="  Avatar With Offline Status Indicators
                                        <p class='subtitle text-muted fs-12 fw-normal'>
                                            avatars having a offline status indicator.
                                        </p>" customCardClass="custom-card" customCardBodyClass="" code={avatar5}>
                                 <span className="avatar avatar-xs me-2 offline avatar-rounded">
                                        <img src="../../assets/images/faces/2.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm offline me-2 avatar-rounded">
                                        <img src="../../assets/images/faces/3.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-md me-2 offline avatar-rounded">
                                        <img src="../../assets/images/faces/4.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-lg me-2 offline avatar-rounded">
                                        <img src="../../assets/images/faces/5.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-xl me-2 offline avatar-rounded">
                                        <img src="../../assets/images/faces/6.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-xxl me-2 offline avatar-rounded">
                                        <img src="../../assets/images/faces/7.jpg" alt="img" />
                                    </span>
                        </ShowCode>
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12}>
                        <ShowCode title=" Avatars With Number Badges
                                        <p class='subtitle text-muted fs-12 fw-normal'>
                                            Avatar numbers indicates the no. of unread notififactions/messages.
                                        </p>" customCardClass="custom-card" customCardBodyClass="" code={avatar6}>
                                    <span className="avatar avatar-xs me-2 avatar-rounded">
                                        <img src="../../assets/images/faces/2.jpg" alt="img" />
                                        <span className="badge rounded-pill bg-primary avatar-badge">2</span>
                                    </span>
                                    <span className="avatar avatar-sm me-2 avatar-rounded">
                                        <img src="../../assets/images/faces/3.jpg" alt="img" />
                                        <span className="badge rounded-pill bg-secondary avatar-badge">5</span>
                                    </span>
                                    <span className="avatar avatar-md me-2 avatar-rounded">
                                        <img src="../../assets/images/faces/14.jpg" alt="img" />
                                        <span className="badge rounded-pill bg-warning avatar-badge">1</span>
                                    </span>
                                    <span className="avatar avatar-lg me-2 avatar-rounded">
                                        <img src="../../assets/images/faces/13.jpg" alt="img" />
                                        <span className="badge rounded-pill bg-info avatar-badge">7</span>
                                    </span>
                                    <span className="avatar avatar-xl me-2 avatar-rounded">
                                        <img src="../../assets/images/faces/15.jpg" alt="img" />
                                        <span className="badge rounded-pill bg-success avatar-badge">3</span>
                                    </span>
                                    <span className="avatar avatar-xxl me-2 avatar-rounded">
                                        <img src="../../assets/images/faces/9.jpg" alt="img" />
                                        <span className="badge rounded-pill bg-danger avatar-badge">9</span>
                                    </span>
                        </ShowCode>
                    </Col>
                </Row>
                {/* End::row-1 */}

                {/* Start::row-3 */}
                <Row>
                    <Col xl={12} lg={6} md={12} sm={12}>
                        <ShowCode title=" Avatar With Initials
                                        <p class='subtitle text-muted fs-12 fw-normal'>
                                            Avatar contains intials when user profile doesn't exist.
                                        </p>" customCardClass="custom-card" customCardBodyClass="" code={avatar7}>
                                <span className="avatar avatar-xs m-2 bg-primary">
                                    xs
                                </span>
                                <span className="avatar avatar-sm m-2 bg-secondary">
                                    SM
                                </span>
                                <span className="avatar avatar-md m-2 bg-warning">
                                    MD
                                </span>
                                <span className="avatar avatar-lg m-2 bg-danger">
                                    LG
                                </span>
                                <span className="avatar avatar-xl m-2 bg-success">
                                    XL
                                </span>
                                <span className="avatar avatar-xxl m-2 bg-info">
                                    XXL
                                </span>
                        </ShowCode>
                    </Col>
                    <Col xl={12} lg={6} md={12} sm={12}>
                        <ShowCode title="Stacked Avatars
                                        <p class='subtitle text-muted fs-12 fw-normal'>
                                            Group of avatars stacked together.
                                        </p>" customCardClass="custom-card" customCardBodyClass="" code={avatar8}>
                                            <div className="avatar-list-stacked">
                                                <span className="avatar">
                                                    <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                </span>
                                                <span className="avatar">
                                                    <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                </span>
                                                <span className="avatar">
                                                    <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                </span>
                                                <span className="avatar">
                                                    <img src="../../assets/images/faces/10.jpg" alt="img" />
                                                </span>
                                                <span className="avatar">
                                                    <img src="../../assets/images/faces/4.jpg" alt="img" />
                                                </span>
                                                <span className="avatar">
                                                    <img src="../../assets/images/faces/13.jpg" alt="img" />
                                                </span>
                                                <a className="avatar bg-primary text-fixed-white" href="#!">
                                                    +8
                                                </a>
                                            </div>
                        </ShowCode>
                    </Col>
                    <Col xl={12} lg={6} md={12} sm={12}>
                        <ShowCode title="Rounded Stacked Avatars
                                        <p class='subtitle text-muted fs-12 fw-normal'>
                                            Group of avatars stacked together.
                                        </p>" customCardClass="custom-card" customCardBodyClass="" code={avatar9}>
                            <div className="avatar-list-stacked">
                                <span className="avatar avatar-rounded">
                                    <img src="../../assets/images/faces/2.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-rounded">
                                    <img src="../../assets/images/faces/8.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-rounded">
                                    <img src="../../assets/images/faces/2.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-rounded">
                                    <img src="../../assets/images/faces/10.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-rounded">
                                    <img src="../../assets/images/faces/4.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-rounded">
                                    <img src="../../assets/images/faces/13.jpg" alt="img" />
                                </span>
                                <a className="avatar bg-primary avatar-rounded text-fixed-white" href="#!">
                                    +8
                                </a>
                           </div>
                        </ShowCode>
                    </Col>
                </Row>
                {/* End::row-3 */}
    </Fragment>
    );
};

export default Avatars;