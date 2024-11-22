"use client"
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Form } from "react-bootstrap";

const SignupBasic = () => {
    const [passwordshow1, setpasswordshow1] = useState(false);
return (
<Fragment>
    <Seo title={"SignupBasic"} />
    <div className="authentication-background">
        <div className="container-lg">
                <div className="row justify-content-center align-items-center authentication authentication-basic h-100">
                    <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
                        <div className="my-5 d-flex justify-content-center"> 
                            <Link scroll={false} href="/dashboards/sales/"> 
                                <img src="../../../assets/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark" /> 
                            </Link> 
                        </div>
                        <Card className="custom-card my-4">
                            <Card.Body className="p-5">
                                <p className="h4 mb-2 fw-semibold">Sign Up</p>
                                <p className="mb-4 text-muted">Join us by creating a free account !</p>
                                <div className="row gy-3">
                                    <Col xl={12}>
                                        <label htmlFor="signup-firstname" className="form-label text-default">Email Address</label>
                                        <input type="email" className="form-control" id="signup-firstname" placeholder="Enter Email ID" />
                                    </Col>
                                    <Col xl={12}>
                                        <label htmlFor="signup-password" className="form-label text-default">Password</label>
                                        <div className="position-relative">
                                            <Form.Control type={(passwordshow1) ? 'text' : "password"} className="form-control" id="signup-password" placeholder="Password" />
                                            <Link scroll={false} href="#!" className="show-password-button text-muted" 
                                                onClick={()=>setpasswordshow1(!passwordshow1)} 
                                            id="button-addon2"><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Link>
                                        </div>
                                    </Col>
                                </div>
                                <div className="text-center my-4 authentication-barrier">
                                    <span className="op-4 fs-11">OR SignUp With</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between gap-3 mb-3 flex-wrap">
                                    <Button variant="" className="btn btn-light btn-w-lg border d-flex align-items-center justify-content-center flex-fill">
                                        <span className="avatar avatar-xs">
                                            <img src="../../../assets/images/media/apps/google.png" alt=""/>
                                        </span>
                                        <span className="lh-1 ms-2 fs-13 text-default fw-medium">Google</span>
                                    </Button>
                                    <Button variant="" className="btn btn-light btn-w-lg border d-flex align-items-center justify-content-center flex-fill">
                                        <span className="avatar avatar-xs">
                                            <img src="../../../assets/images/media/apps/facebook.png" alt=""/>
                                        </span>
                                        <span className="lh-1 ms-2 fs-13 text-default fw-medium">Facebook</span>
                                    </Button>
                                </div>
                                <div className="d-grid mt-4">
                                    <Link scroll={false} href="/dashboards/sales/" className="btn btn-primary">Create Account</Link>
                                </div>
                                <div className="text-center">
                                    <p className="text-muted mt-3 mb-0">Already have an account? <Link scroll={false} href="/authentication/signin/signin-basic/" className="text-primary">Sign In</Link></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
        </div>
    </div>
</Fragment>
);
};

export default SignupBasic;