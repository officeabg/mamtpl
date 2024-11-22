"use client"
import { popover1, popover2, popover3, popover4, popover5, popover6, popover7 } from "@/shared/data/prism/uielementsprism";
import { Colorheaderpopovers, Colredpopovers, Defaultpopovers, Dismissiblepopovers } from "@/shared/data/uielements/popoversdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import ShowCode from "@/shared/layout-components/showcode/showcode";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button,  Col, OverlayTrigger, Popover, Row } from "react-bootstrap";

const Popovers = () => {
return(
    <Fragment>
                {/* Page Header */}
                    <Seo title={"Popovers"} />
                    <Pageheader Heading="Popovers" Pages={[{title:"Ui Elements", active:true},{title:"Popovers", active:false}]} />
                {/* Page Header Close */}

                {/* Start:: row-1 */}
                <Row>
                    <Col xl={12}>
                            <ShowCode title="Default Popovers" customCardClass="custom-card" customCardBodyClass="" code={popover1}>
                                <div className="btn-list">
                                    {Defaultpopovers.map((idx:any) => (
                                        <OverlayTrigger trigger="click" placement={idx.class} key={Math.random()}
                                            overlay={<Popover>
                                                <Popover.Header as="h3"> Popover {idx.text}</Popover.Header>
                                                <Popover.Body>
                                                    And here's some amazing content. It's very engaging. Right?
                                                </Popover.Body>
                                            </Popover>}>
                                            <Button variant='' href="#!" className="btn btn-outline-primary btn-wave">Popover {idx.text}</Button>
                                        </OverlayTrigger>
                                    ))}
                                </div>
                                </ShowCode>
                    </Col>
                    <Col xl={12}>
                            <ShowCode title="Colored Headers" customCardClass="custom-card" customCardBodyClass="" code={popover2}>
                                    <div className="btn-list">
                                        {Colorheaderpopovers.map((idx:any) => (
                                            <OverlayTrigger trigger="click" placement={idx.class} key={Math.random()}
                                                // autoclose='true' 
                                                overlay={<Popover className={`header-${idx.color1} ${idx.color2}`}>
                                                    <Popover.Header as="h3" data-bs-custom-class={`header-${idx.color1}`}> Color Header</Popover.Header>
                                                    <Popover.Body>
                                                    Popover with primary header.
                                                    </Popover.Body>
                                                </Popover>}>
                                                <Button variant={idx.color} href="#!" className="btn btn-wave">Header {idx.text}</Button>
                                            </OverlayTrigger>
                                        ))}
                                    </div>
                                </ShowCode>
                    </Col>
                </Row>
                {/* End:: row-1 */}

                {/* Start:: row-2 */}
                <Row>
                    <Col xl={12}>
                            <ShowCode title="Colored Popovers" customCardClass="custom-card" customCardBodyClass="" code={popover3}>
                                    <div className="btn-list">
                                        {Colredpopovers.map((idx:any) => (
                                            <OverlayTrigger key={Math.random()} placement={idx.class} trigger="click" overlay={<Popover className={`popover-${idx.color1}`}>
                                                <Popover.Header as="h3">Color Background</Popover.Header>
                                                <Popover.Body>Popover with {idx.text} background.</Popover.Body>
                                            </Popover>}>
                                                <Button variant={idx.color1}>{idx.text} </Button>
                                            </OverlayTrigger>
                                        ))}
                                    </div>
							</ShowCode>
                    </Col>
                </Row>
                {/* End:: row-2 */}

                {/* Start:: row-3 */}
                <Row>
                    <Col xl={12}>
                            <ShowCode title="Light Popovers" customCardClass="custom-card" customCardBodyClass="" code={popover4}>
                                    <div className="btn-list">
                                        {Colredpopovers.map((idx:any) => (
                                            <OverlayTrigger key={Math.random()} placement={idx.class} trigger="click" overlay={<Popover className={`popover-${idx.color1}-light`} id="tooltip-disabled">
                                                <Popover.Header as="h3">Light Background</Popover.Header>
                                                <Popover.Body>Popover with light {idx.text} background.</Popover.Body>
                                            </Popover>}>
                                                <Button variant='' className={`btn btn-${idx.color1}-light btn-wave`}>{idx.text} </Button>
                                            </OverlayTrigger>
                                        ))}
                                    </div>
                            </ShowCode>
                    </Col>
                </Row>
                {/* End:: row-3 */}

                {/* Start:: row-4 */}
                <Row>
                    <Col xl={12}>
                        <ShowCode title="Dismissible Popovers" customCardClass="custom-card" customCardBodyClass=" d-flex flex-wrap justify-content-between" code={popover5}>
                            {Dismissiblepopovers.map((idx:any) => (
                                <OverlayTrigger rootClose={true} trigger="click" placement={idx.class} key={Math.random()}
                                    overlay={<Popover>
                                        <Popover.Header as="h3"> Dismissible Popover</Popover.Header>
                                        <Popover.Body>
                                            And here's some amazing content. It's very engaging. Right?
                                        </Popover.Body>
                                    </Popover>}>
                                    <Button variant={idx.color} className="btn  btn-wave m-1">Popover Dismiss</Button>
                                </OverlayTrigger>
                            ))}
                            </ShowCode>
                    </Col>
                    <Col xl={6}>
                        <ShowCode title="Disabled Popover" customCardClass="custom-card" customCardBodyClass="" code={popover6}>
                            <OverlayTrigger placement='right' overlay={<Popover id="tooltip-disabled">
                                <Popover.Body>Disabled Popover!</Popover.Body>
                            </Popover>}>
                                <span className="d-inline-block mb-3 mb-sm-1 me-2">
                                    <Button variant="primary" disabled>
                                        Disabled button
                                    </Button>
                                </span>
                            </OverlayTrigger>
                        </ShowCode>
                    </Col>
                    <Col xl={6}>
                    	<ShowCode title="Icon Popovers" customCardClass="custom-card" customCardBodyClass="" code={popover7}>
                            <OverlayTrigger placement='top' trigger="click" overlay={<Popover className='popover-primary only-body' id="tooltip-disabled">
                                <Popover.Body>This popover is used to provide details about this icon.</Popover.Body>
                            </Popover>}>
                                <Link scroll={false} className="me-4 svg-primary" href="#!">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                        <path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" /></svg>
                                </Link>
                            </OverlayTrigger>
                            <OverlayTrigger placement='left' trigger="click" overlay={<Popover className='popover-secondary only-body' id="tooltip-disabled">
                                <Popover.Body>This popover is used to provide details about this icon.</Popover.Body>
                            </Popover>}>
                                <Link scroll={false} className="me-4 svg-secondary" href="#!"  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                                </Link>
                            </OverlayTrigger>
                          
                        </ShowCode>
                    </Col>
                </Row>
                {/* End:: row-4 */}
    </Fragment>
    );
};

export default Popovers;