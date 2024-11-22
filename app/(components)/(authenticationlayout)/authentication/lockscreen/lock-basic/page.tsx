"use client"
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

const LockBasic = () => {
    const [passwordshow1, setpasswordshow1] = useState(false);
return (
<Fragment>
    <Seo title={"LockBasic"} />
    <div className="authentication-background">
        <div className="container-lg">
                <div className="row justify-content-center authentication authentication-basic align-items-center h-100">
                    <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
                        <div className="my-5 d-flex justify-content-center"> 
                            <Link scroll={false} href="/dashboards/sales/"> 
                                <img src="../../../assets/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark"/> 
                            </Link> 
                        </div>
                        <Card className="custom-card">
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
                                <Row className="gy-3">
                                    <Col xl={12} className="mb-2">
                                        <label htmlFor="lockscreen-password" className="form-label text-default">Password</label>
                                        <div className="position-relative">
                                            <Form.Control  type={(passwordshow1) ? 'text' : "password"} className="form-control" id="lockscreen-password" placeholder="password"/>
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
                                        <Link scroll={false} href="/dashboards/sales/" className="btn btn-primary">Unlock</Link>
                                    </Col>
                                </Row>
                                <div className="text-center">
                                    <p className="fs-12 text-muted mt-3 mb-0">Try unlock with <Link scroll={false} className="text-success" href="#!"><u>Finger print</u></Link> / <Link scroll={false} className="text-success" href="#!"><u>Face Id</u></Link></p>
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

export default LockBasic;