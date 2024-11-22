"use client"
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Form } from "react-bootstrap";

const CreateCover = () => {
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [passwordshow2, setpasswordshow2] = useState(false);
return (
<Fragment>
    <Seo title={"CreateCover"} />
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
        <Col xxl={7} xl={7}>
            <div className="row justify-content-center align-items-center h-100">
                <Col xxl={6} xl={9} lg={6} md={6} sm={8} className="col-12">
                    <Card className="custom-card shadow-none my-auto border-0">
                        <Card.Body className="p-5">
                            <p className="h4 fw-semibold mb-2">Create Password</p>
                            <p className="mb-4 text-muted fw-normal">Hello Jack !</p>
                            <div className="row gy-3">
                                <Col xl={12}>
                                    <label htmlFor="create-password" className="form-label text-default">Password</label>
                                    <div className="position-relative">
                                        <Form.Control type={(passwordshow1) ? 'text' : "password"}  className="form-control form-control-lg" id="create-password" placeholder="password"/>
                                        <Link onClick={()=>setpasswordshow1(!passwordshow1)} scroll={false} href="#!" className="show-password-button text-muted">
                                        <i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Link>
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <label htmlFor="create-confirmpassword" className="form-label text-default">Confirm Password</label>
                                    <div className="position-relative">
                                        <Form.Control type={(passwordshow2) ? 'text' : "password"}  className="form-control form-control-lg" id="create-confirmpassword" placeholder="password"/>
                                        <Link onClick={()=>setpasswordshow2(!passwordshow2)} scroll={false} href="#!" className="show-password-button text-muted">
                                        <i className={`${passwordshow2 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Link>
                                    </div>
                                    <div className="mt-2">
                                        <div className="form-check mb-0">
                                            <Form.Check className="" type="checkbox" defaultValue="" id="defaultCheck1"/>
                                            <label className="form-check-label text-muted fw-normal fs-12" htmlFor="defaultCheck1">
                                                Remember password ?
                                            </label>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                            <div className="text-center my-3 authentication-barrier">
                                <span className="op-4 fs-11">Or SignIn With</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between gap-3 mb-3 flex-wrap">
                                <Button variant="" className="btn btn-light btn-lg btn-w-lg border d-flex align-items-center justify-content-center flex-fill">
                                    <span className="avatar avatar-xs">
                                        <img src="../../../assets/images/media/apps/google.png" alt=""/>
                                    </span>
                                    <span className="lh-1 ms-2 fs-13 text-default fw-medium">Google</span>
                                </Button>
                                <Button variant="" className="btn btn-light btn-lg btn-w-lg border d-flex align-items-center justify-content-center flex-fill">
                                    <span className="avatar avatar-xs">
                                        <img src="../../../assets/images/media/apps/facebook.png" alt=""/>
                                    </span>
                                    <span className="lh-1 ms-2 fs-13 text-default fw-medium">Facebook</span>
                                </Button>
                            </div>
                            <div className="d-grid mt-4">
                                <Link scroll={false} href="/dashboards/sales/" className="btn btn-lg btn-primary">Save Password</Link>
                            </div>
                            <div className="text-center">
                                <p className="text-muted mt-3 mb-0">Back to home ? <Link scroll={false} href="/dashboards/sales/" className="text-primary">Click Here</Link></p>
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

export default CreateCover;