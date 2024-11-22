"use client"
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const SigninCover = () => {
    const [passwordshow1, setpasswordshow1] = useState(false);
return (
<Fragment>
    <Seo title={"SigninCover"} />
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
            <Row className="justify-content-center align-items-center h-100">
                <Col xxl={6} xl={9} lg={6} md={6} sm={8} className="col-12">
                    <Card className="custom-card shadow-none my-auto border-0">
                        <Card.Body className="p-5">
                            <p className="h4 mb-2 fw-semibold">Sign In</p>
                            <p className="mb-4 text-muted fw-normal">Welcome back Jhon !</p>
                            <div className="row gy-3">
                                <Col xl={12}>
                                    <label htmlFor="signin-username" className="form-label text-default">User Name</label>
                                    <Form.Control type="text" className="form-control form-control-lg" id="signin-username" placeholder="user name"/>
                                </Col>
                                <Col xl={12} className="mb-2">
                                    <label htmlFor="signin-password" className="form-label text-default d-block">Password<Link href="/authentication/resetpassword/reset-basic" className="float-end link-danger op-5 fw-medium fs-12">Forget password ?</Link></label>
                                    <div className="position-relative">
                                        <Form.Control type={(passwordshow1) ? 'text' : "password"} className="form-control form-control-lg" id="signin-password" placeholder="password"/>
                                        <Link scroll={false} href="#!" className="show-password-button text-muted" 
                                            onClick={()=>setpasswordshow1(!passwordshow1)}
                                            id="button-addon2"><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Link>
                                    </div>
                                    <div className="mt-2">
                                        <div className="form-check">
                                            <Form.Check className="" type="checkbox"  id="defaultCheck1"/>
                                            <label className="form-check-label text-muted fw-normal fs-12" htmlFor="defaultCheck1">
                                                Remember password ?
                                            </label>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                            <div className="text-center my-3 authentication-barrier">
                                <span className="op-4 fs-11">OR SignIn With</span>
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
                                <Link scroll={false} href="/dashboards/sales/" className="btn btn-lg btn-primary">Sign In</Link>
                            </div>
                            <div className="text-center">
                                <p className="text-muted mt-3 mb-0">Dont have an account? <Link scroll={false} href="/authentication/signup/signup-basic/" className="text-primary">Sign Up</Link></p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Col>
    </div>
</Fragment>
);
};

export default SigninCover;