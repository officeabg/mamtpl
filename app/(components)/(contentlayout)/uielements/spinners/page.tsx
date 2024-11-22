"use client"
import { spinner1, spinner10, spinner2, spinner3, spinner4, spinner5, spinner6, spinner7, spinner8, spinner9 } from "@/shared/data/prism/uielementsprism";
import { Buttonspinner, Colorspinner } from "@/shared/data/uielements/spinnersdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import ShowCode from "@/shared/layout-components/showcode/showcode";
import React, { Fragment } from "react";
import { Button, Col, Row } from "react-bootstrap";

const Spinners = () => {
return (
    <Fragment>
                    {/* Page Header */}
                        <Seo title={"Spinners"} />
                        <Pageheader Heading="Spinners" Pages={[{title:"Ui Elements", active:true},{title:"Spinners", active:false}]} />
                    {/* Page Header Close */}

                    {/* Start:: row-1 */}
                    <Row>
                        <Col xl={6}>
                            <ShowCode title="Border spinner" customCardClass="custom-card" customCardBodyClass="" code={spinner1}>
                            <div className="spinner-border  text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            </ShowCode>
                        </Col>
                        <Col xl={6}>
                            <ShowCode title="Growing spinner" customCardClass="custom-card" customCardBodyClass="" code={spinner2}>
                                <div className="spinner-grow text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </ShowCode>
                        </Col>
                    </Row>
                    {/* End:: row-1 */}

                    {/* Start:: row-2 */}
                    <Row>
                        <Col xl={12}>
                            <ShowCode title="Growing spinner" customCardClass="custom-card" customCardBodyClass="" code={spinner3}>
                                {Colorspinner.map((idx) => (
                                    <div className={`spinner-grow me-1 text-${idx.color}`} role="status" key={Math.random()}>
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                ))}
					      </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="Growing spinner" customCardClass="custom-card" customCardBodyClass="" code={spinner4}>
                                {Colorspinner.map((idx) => (
                                    <div className={`spinner-grow me-1 text-${idx.color}`} role="status" key={Math.random()}>
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                ))}
                            </ShowCode>
                        </Col>
                    </Row>
                    {/* End:: row-2 */}

                    {/* Start:: row-3 */}
                    <Row>
                        <Col xl={12}>
                            <ShowCode title="Alignment Flex" customCardClass="custom-card" customCardBodyClass="" code={spinner5}>
                                <div className="d-flex justify-content-center mb-4">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <strong>Loading...</strong>
                                    <div className="spinner-border text-primary ms-auto" role="status" aria-hidden="true"></div>
                                </div>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode title="Alignment Float" customCardClass="custom-card" customCardBodyClass="" code={spinner6}>
                                <div className="clearfix mb-4">
                                    <div className="spinner-border text-primary float-end" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                                <div className="clearfix">
                                    <div className="spinner-border text-primary float-start" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </ShowCode>
                        </Col>
                    </Row>
                    {/* End:: row-3 */}

                    {/* Start:: row-4 */}
                    <Row>
                        <Col xl={6}>
                            <ShowCode title="Alignment Text center" customCardClass="custom-card" customCardBodyClass="" code={spinner7}>
                                <div className="text-center">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </ShowCode>
                            <ShowCode title="Spinner Sizes" customCardClass="custom-card" customCardBodyClass="d-flex align-items-center" code={spinner8}>
                                <div className="spinner-border text-primary spinner-border-sm me-4" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-grow text-primary spinner-grow-sm me-4" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-border text-primary me-4" style={{ width: "3rem", height: "3rem" }}
                                    role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="spinner-grow text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </ShowCode>
                        </Col>
                        <Col xl={6}>
                            <ShowCode title="Alignment Margin" customCardClass="custom-card" customCardBodyClass="d-flex align-items-center" code={spinner9}>
                                <div className="spinner-border text-primary m-5" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </ShowCode>
                        </Col>
                    </Row>
                    {/* End:: row-4 */}

                    {/* Start:: row-5 */}
                    <Row>
                        <Col xl={12}>
                            <ShowCode title="Buttons" customCardClass="custom-card" customCardBodyClass="" code={spinner10}>
                                <div className="btn-list">
                                    <Button variant='primary-light' className="btn" type="button" disabled>
                                        <span className="spinner-border spinner-border-sm align-middle" role="status"
                                            aria-hidden="true"></span>
                                        <span className="visually-hidden"> Loading...</span>
                                    </Button>
                                    <Button variant='primary-light' className="btn" type="button" disabled>
                                        <span className="spinner-border spinner-border-sm align-middle" role="status"
                                            aria-hidden="true"></span>
                                        Loading...
                                    </Button>
                                    <Button variant='primary-light' className="btn" type="button" disabled>
                                        <span className="spinner-grow spinner-grow-sm align-middle" role="status"
                                            aria-hidden="true"></span>
                                        <span className="visually-hidden"> Loading...</span>
                                    </Button>
                                    {Buttonspinner.map((idx) => (
                                        <Button variant={idx.color} className="" type="button" disabled key={Math.random()}>
                                            <span className="spinner-grow spinner-grow-sm align-middle" role="status"
                                                aria-hidden="true"></span>
                                            Loading...
                                        </Button>
                                    ))}
                                </div>
                            </ShowCode>
                        </Col>
                    </Row>
                    {/* End:: row-5 */}
    </Fragment>
    );
};

export default Spinners;