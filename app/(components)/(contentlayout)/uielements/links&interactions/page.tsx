"use client"
import { interactions1, interactions2, interactions3, interactions4, interactions5, interactions6, interactions7, interactions8, interactions9, toast1 } from "@/shared/data/prism/uielementsprism";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import ShowCode from "@/shared/layout-components/showcode/showcode";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Linksinteractions = () => {
return (
    <Fragment>
                {/* Page Header */}
                        <Seo title={"Links & Interactions"} />
                    <Pageheader Heading="Links & Interactions" Pages={[{title:"Ui Elements", active:true},{title:"Links & Interactions", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={6}>
                        <Row>
                            <Col xl={12}>
                                <ShowCode title="TEXT SELECTION" customCardClass="custom-card" customCardBodyClass="" code={interactions1}>
                                    <p className="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>
                                    <p className="user-select-auto">This paragraph has default select behavior.</p>
                                    <p className="user-select-none mb-0">This paragraph will not be selectable when clicked by the user.</p>
                                </ShowCode>
                            </Col>
                            <Col xl={12}>
                                <ShowCode title="POINTER EVENTS" customCardClass="custom-card" customCardBodyClass="" code={interactions2}>
                                    <p><a href="#!" className="pe-none text-primary fw-medium text-decoration-underline" tabIndex={-1}>This link</a> can not be clicked.</p>
                                    <p><a href="#!" className="pe-auto text-primary fw-medium text-decoration-underline">This link</a> can be clicked (this is default behavior).</p>
                                    <p className="pe-none mb-0"><a href="#!" tabIndex={-1} className="text-primary fw-medium text-decoration-underline">This link</a> can not be clicked because the <code>pointer-events</code> property is inherited from its parent. However, <a href="#!" className="pe-auto">this link</a> has a <code>pe-auto</code> class and can be clicked.</p>
                                </ShowCode>
                            </Col>
                            <Col xl={12}>
                                <ShowCode title="LINK OPACITY" customCardClass="custom-card" customCardBodyClass="" code={interactions3}>
                                    <p><a className="link-opacity-10" href="#!">Link opacity 10</a></p>
                                    <p><a className="link-opacity-25" href="#!">Link opacity 25</a></p>
                                    <p><a className="link-opacity-50" href="#!">Link opacity 50</a></p>
                                    <p><a className="link-opacity-75" href="#!">Link opacity 75</a></p>
                                    <p className="mb-0"><a className="link-opacity-100" href="#!">Link opacity 100</a></p>
                                </ShowCode>
                            </Col>
                            <Col xl={12}>
                                <ShowCode title="LINK HOVER VARIANT" customCardClass="custom-card" customCardBodyClass="" code={interactions4}>
                                    <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-decoration-underline" href="#!">
                                        Underline opacity 0
                                    </a>
                                </ShowCode>
                            </Col>
                            <Col xl={12}>
                                <ShowCode title="LINK UNDERLINE COLORS" customCardClass="custom-card" customCardBodyClass="" code={interactions5}>
                                    <p><a href="#!" className="link-underline-primary text-decoration-underline">Primary underline</a></p>
                                    <p><a href="#!" className="link-underline-secondary text-decoration-underline">Secondary underline</a></p>
                                    <p><a href="#!" className="link-underline-success text-decoration-underline">Success underline</a></p>
                                    <p><a href="#!" className="link-underline-danger text-decoration-underline">Danger underline</a></p>
                                    <p><a href="#!" className="link-underline-warning text-decoration-underline">Warning underline</a></p>
                                    <p><a href="#!" className="link-underline-info text-decoration-underline">Info underline</a></p>
                                    <p><a href="#!" className="link-underline-light text-decoration-underline">Light underline</a></p>
                                    <p className="mb-0"><a href="#!" className="link-underline-dark text-decoration-underline">Dark underline</a></p>
                                </ShowCode>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={6}>
                        <Row>
                            <Col xl={12}>
                                <ShowCode title="LINK UNDERLINE OFFSET" customCardClass="custom-card" customCardBodyClass="" code={interactions6}>
                                    <p><a href="#!" className="text-decoration-underline">Default link</a></p>
                                    <p><a className="link-offset-1 text-decoration-underline" href="#!">Offset 1 link</a></p>
                                    <p><a className="link-offset-2 text-decoration-underline" href="#!">Offset 2 link</a></p>
                                    <p className="mb-0"><a className="link-offset-3 text-decoration-underline" href="#!">Offset 3 link</a></p>
                                </ShowCode>
                            </Col>
                            <Col xl={12}>
                                <ShowCode title="LINK UNDERLINE OPACITY" customCardClass="custom-card" customCardBodyClass="" code={interactions7}>
                                    <p><a className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-0" href="#!">Underline opacity 0</a></p>
                                    <p><a className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-10" href="#!">Underline opacity 10</a></p>
                                    <p><a className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-25" href="#!">Underline opacity 25</a></p>
                                    <p><a className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-50" href="#!">Underline opacity 50</a></p>
                                    <p><a className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-75" href="#!">Underline opacity 75</a></p>
                                    <p><a className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-100" href="#!">Underline opacity 100</a></p>
                                </ShowCode>
                            </Col>
                            <Col xl={12}>
                                <ShowCode title="LINK HOVER OPACITY" customCardClass="custom-card" customCardBodyClass="" code={interactions8}>
                                    <p><a className="link-opacity-10-hover" href="#!">Link hover opacity 10</a></p>
                                    <p><a className="link-opacity-25-hover" href="#!">Link hover opacity 25</a></p>
                                    <p><a className="link-opacity-50-hover" href="#!">Link hover opacity 50</a></p>
                                    <p><a className="link-opacity-75-hover" href="#!">Link hover opacity 75</a></p>
                                    <p className="mb-0"><a className="link-opacity-100-hover" href="#!">Link hover opacity 100</a></p>
                                </ShowCode>
                            </Col>
                            <Col xl={12}>
                                <ShowCode title="COLORED LINKS" customCardClass="custom-card" customCardBodyClass="" code={interactions9}>
                                    <p><a href="#!" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Primary link</a></p>
                                    <p><a href="#!" className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Secondary link</a></p>
                                    <p><a href="#!" className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Success link</a></p>
                                    <p><a href="#!" className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Danger link</a></p>
                                    <p><a href="#!" className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Warning link</a></p>
                                    <p><a href="#!" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Info link</a></p>
                                    <p><a href="#!" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Light link</a></p>
                                    <p><a href="#!" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Dark link</a></p>
                                    <p><a href="#!" className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover text-decoration-underline">Emphasis link</a></p>
                                </ShowCode>
                            </Col>
                        </Row>
                    </Col> 
                </Row>
                {/*End::row-1 */}
    </Fragment>
    );
};

export default Linksinteractions;