"use client"
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Form } from "react-bootstrap";

const CreateBasic = () => {
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [passwordshow2, setpasswordshow2] = useState(false);
return (
<Fragment>
        <Seo title={"CreateBasic"} />
        <div className="authentication-background">
            <div className="container-lg">
                    <div className="authentication-background row justify-content-center authentication authentication-basic align-items-center h-100">
                        <Col xxl={4} xl={5} lg={5} md={6} sm={8}  className="col-12">
                            <div  className="my-5 d-flex justify-content-center"> 
                                <Link scroll={false} href="/dashboards/sales"> 
                                    <img src="../../../assets/images/brand-logos/desktop-dark.png" alt="logo"  className="desktop-dark"/> 
                                </Link> 
                            </div>
                            <Card  className="custom-card my-4">
                                <Card.Body  className="p-5">
                                    <p  className="h4 fw-semibold mb-2">Create Password</p>
                                    <p  className="mb-4 text-muted fw-normal">Hello Jack !</p>
                                    <div  className="row gy-3">
                                        <Col xl={12}>
                                            <label htmlFor="create-password"  className="form-label text-default">Password</label>
                                            <div  className="position-relative">
                                                <Form.Control  type={(passwordshow1) ? 'text' : "password"} className="form-control" id="create-password" placeholder="password"/>
                                                <Link scroll={false} href="#!" onClick={()=>setpasswordshow1(!passwordshow1)}  className="show-password-button text-muted"  
                                                ><i  className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Link>
                                            </div>
                                        </Col>
                                        <Col xl={12}>
                                            <label htmlFor="create-confirmpassword"  className="form-label text-default">Confirm Password</label>
                                            <div  className="position-relative">
                                                <Form.Control type={(passwordshow2) ? 'text' : "password"}    className="form-control" id="create-confirmpassword" placeholder="password"/>
                                                <Link scroll={false} href="#!"  onClick={()=>setpasswordshow2(!passwordshow2)}   className="show-password-button text-muted"
                                                ><i  className={`${passwordshow2 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Link>
                                            </div>
                                            <div  className="mt-2">
                                                <div  className="form-check mb-0">
                                                    <Form.Check  className="" type="checkbox" defaultValue="" id="defaultCheck1"/>
                                                    <label  className="form-check-label text-muted fw-normal fs-12" htmlFor="defaultCheck1">
                                                        Remember password ?
                                                    </label>
                                                </div>
                                            </div>
                                        </Col>
                                    </div>
                                    <div  className="text-center my-3 authentication-barrier">
                                        <span  className="op-4 fs-11">Or SignIn With</span>
                                    </div>
                                    <div  className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                                        <Button variant=""  className="btn btn-light btn-w-lg border d-flex align-items-center justify-content-center flex-fill">
                                            <span  className="avatar avatar-xs">
                                                <img src="../../../assets/images/media/apps/google.png" alt=""/>
                                            </span>
                                            <span  className="lh-1 ms-2 fs-13 text-default fw-medium">Google</span>
                                        </Button>
                                        <Button variant=""  className="btn btn-light btn-w-lg border d-flex align-items-center justify-content-center flex-fill">
                                            <span  className="avatar avatar-xs">
                                                <img src="../../../assets/images/media/apps/facebook.png" alt=""/>
                                            </span>
                                            <span  className="lh-1 ms-2 fs-13 text-default fw-medium">Facebook</span>
                                        </Button>
                                    </div>
                                    <div  className="d-grid mt-4">
                                        <Link scroll={false} href="/dashboards/sales/"  className="btn btn-primary">Save Password</Link>
                                    </div>
                                    <div  className="text-center">
                                        <p  className="text-muted mt-3 mb-0">Back to home ? <Link scroll={false} href="/dashboards/sales/"  className="text-primary">Click Here</Link></p>
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

export default CreateBasic;