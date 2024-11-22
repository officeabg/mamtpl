"use client"
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useCallback, useRef } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

const TwostepCover = () => {
    const inputRefs:any = {
		one: useRef(null),
		two: useRef(null),
		three: useRef(null),
		four: useRef(null),
	};

	const handleInputChange = useCallback((currentId:any, nextId:any) => {
		const currentInput = inputRefs[currentId].current;

		if (currentInput && currentInput.value.length === 1) {
			const nextInput = inputRefs[nextId] ? inputRefs[nextId].current : null;

			if (nextInput) {
				nextInput.focus();
			}
		}
	}, [inputRefs]);
return (
<Fragment>
    <Seo title={"TwostepCover"} />
    <div className="row authentication two-step-verification authentication-cover-main mx-0">
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
                                <p className="h4 mb-2 fw-semibold">Verify Your Account</p>
                                <p className="mb-4 text-muted fw-normal">Enter the 4 digit code sent to the registered email Id.</p>
                                <Row className="gy-3">
                                    <Col xl={12} className="mb-2">
                                        <Row>
                                            <div className="col-3">
                                                <Form.Control type="text" className="form-control form-control-lg text-center" id="one" maxLength={1} 
                                                    onChange={() => handleInputChange("one", "two")}
                                                    ref={inputRefs.one}
                                                />
                                            </div>
                                            <div className="col-3">
                                                <Form.Control type="text" className="form-control form-control-lg text-center" id="two" maxLength={1} 
                                                    onChange={() => handleInputChange("two", "three")}
                                                    ref={inputRefs.two}
                                                />
                                            </div>
                                            <div className="col-3">
                                                <Form.Control type="text" className="form-control form-control-lg text-center" id="three" maxLength={1} 
                                                    onChange={() => handleInputChange("three", "four")}
                                                    ref={inputRefs.three}
                                                />
                                            </div>
                                            <div className="col-3">
                                                <Form.Control type="text" className="form-control form-control-lg text-center" id="four" 
                                                    onChange={() => handleInputChange("four", "nextInputId")}
                                                    ref={inputRefs.four} maxLength={1} />
                                            </div>
                                        </Row>
                                        <div className="form-check mt-2">
                                            <Form.Check className="" type="checkbox"  id="defaultCheck1"/>
                                            <Form.Label className="form-check-label text-muted fw-normal fs-12" htmlFor="defaultCheck1">
                                                Did not recieve a code ?<Link scroll={false} href="/pages/email/mailapp/" className="text-primary ms-2 d-inline-block fw-medium">Resend</Link>
                                            </Form.Label>
                                        </div>
                                    </Col>
                                    <Col xl={12} className="d-grid mt-3">
                                        <Link scroll={false} href="/dashboards/sales/" className="btn btn-lg btn-primary">Verify</Link>
                                    </Col>
                                </Row>
                                <div className="text-center">
                                    <p className="fs-12 text-danger mt-3 mb-0"><sup><i className="ri-asterisk"></i></sup>Don't share the verification code with anyone !</p>
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

export default TwostepCover;