"use client"
import { Teamloopdata } from "@/shared/data/pages/teamdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const Team = () => {
return (
<Fragment>
            {/* Page Header */}
                <Seo title={"Team"} />
                <Pageheader Heading="Team" Pages={[{title:"Pages", active:true},{title:"Team", active:false}]} />
            {/* Page Header Close */}

                {/* Start:: row-1 */}
                <Row className="gy-5 mb-4">
                    {Teamloopdata.map((idx)=>(
                        <Col xl={3} lg={6} md={6} sm={6}  className="col-12 mb-lg-0 mb-4" key={Math.random()}>
                            <Card className="custom-card team-member">
                                <div className={`team-bg-shape ${idx.color} `}></div>
                                <Card.Body className="text-center p-5">
                                    <div className="mb-4 lh-1">
                                        <span className={`avatar avatar-xxl avatar-rounded bg-${idx.color}`}>
                                            <img src={idx.src} className="card-img" alt="..." />
                                        </span>
                                    </div>
                                    <div className="text-center">
                                        <h6 className="mb-0 fw-semibold">{idx.name}</h6>
                                        <p className="mb-0 text-muted">{idx.position}</p>
                                        <div className="d-flex justify-content-center mt-3">
                                            <Button variant="primary" aria-label="anchor" href="#!" className="btn btn-icon rounded-circle btn-wave"><i className="ri-twitter-x-fill"></i></Button>
                                            <Button variant="secondary" aria-label="anchor" href="#!" className="btn btn-icon  rounded-circle btn-wave ms-2"><i className="ri-facebook-fill"></i></Button>
                                            <Button variant="success" aria-label="anchor" href="#!" className="btn btn-icon  rounded-circle btn-wave ms-2"><i className="ri-instagram-line"></i></Button>
                                            <Button variant="orange" aria-label="anchor" href="#!" className="btn btn-icon  rounded-circle btn-wave ms-2"><i className="ri-linkedin-fill"></i></Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                {/* End:: row-1 */}

</Fragment>
);
};

export default Team;