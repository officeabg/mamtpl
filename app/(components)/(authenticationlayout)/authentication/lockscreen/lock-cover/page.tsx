"use client"
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

const LockCover = () => {
    const [passwordshow1, setpasswordshow1] = useState(false);
return (
<Fragment>  
    <Seo title={"LockCover"} />
    <div className="row authentication authentication-cover-main mx-0">
        <Col xxl={5} xl={5} lg={12} className="d-xl-block d-none px-0">
            <div className="authentication-cover overflow-hidden">
                <div className="authentication-cover-logo"> 
                    <Link scroll={false} href="/dashboards/sales/"> 
                        <img src="../../../assets/images/brand-logos/desktop-dark.png" alt="" className="authentication-brand desktop-dark"/> 
                    </Link> 
                </div>
                <div className="aunthentication-cover-content d-flex align-items-center justify-content-center">
                    <div>
                        <h2 className="fs-1 text-fixed-white lh-base">Keys to the kingdom, once a time</h2>
                        <p className="mb-0 fs-18 lh-base text-fixed-white op-8">This succinct quote playfully emphasizes the significance of each login, framing it as a step toward accessing a digital kingdom of possibilities</p>
                    </div>
                </div>
            </div>
        </Col>
        <Col xxl={7} xl={7} className="">
            <div className="row justify-content-center align-items-center h-100">
                <Col xxl={6} xl={9} lg={6} md={6} sm={8} className="col-12">
                    <Card className="custom-card shadow-none my-auto border-0">
                        <Card.Body className="p-5">
                            <p className="h4 mb-2 fw-semibold">Lock Screen</p>
                            <p className="mb-3 text-muted fw-normal">Hello Jhon !</p>
                            <div className="d-flex gap-2 align-items-center mb-3">
                                <div className="lh-1">
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src="../../../assets/images/faces/15.jpg" alt=""/>
                                    </span>
                                </div>
                                <div>
                                    <p className="mb-0 text-dark fw-medium">millerjack@gmail.com</p>
                                </div>
                            </div>
                            <Row className="row gy-3">
                                <Col xl={12} className="mb-2">
                                    <label htmlFor="lockscreen-password" className="form-label text-default">Password</label>
                                    <div className="position-relative">
                                        <Form.Control  type={(passwordshow1) ? 'text' : "password"}  className="form-control form-control-lg" id="lockscreen-password" placeholder="password"/>
                                        <Link scroll={false} href="#!" className="show-password-button text-muted"
                                            onClick={()=>setpasswordshow1(!passwordshow1)}
                                            id="button-addon2"><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Link>
                                    </div>
                                    <div className="mt-2">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox"  id="defaultCheck1"/>
                                            <label className="form-check-label text-muted fw-normal fs-12" htmlFor="defaultCheck1">
                                                Remember password ?
                                            </label>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={12} className="d-grid mt-2">
                                    <Link scroll={false} href="/dashboards/sales/" className="btn btn-lg btn-primary">Unlock</Link>
                                </Col>
                            </Row>
                            <div className="text-center">
                                <p className="fs-12 text-muted mt-3 mb-0">Try unlock with <Link scroll={false} className="text-success" href="#!"><u>Finger print</u></Link> / <Link scroll={false} className="text-success" href="#!"><u>Face Id</u></Link></p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </Col>
    </div>
</Fragment>
);
};

export default LockCover;