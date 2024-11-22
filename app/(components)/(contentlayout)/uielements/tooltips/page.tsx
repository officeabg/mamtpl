"use client"
import { tooltip1, tooltip2, tooltip3, tooltip4, tooltip5, tooltip6 } from "@/shared/data/prism/uielementsprism";
import { SVGtooltip, Tooltipdirtooltip } from "@/shared/data/uielements/tooltipsdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import ShowCode from "@/shared/layout-components/showcode/showcode";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";

const Tooltips = () => {
return (
    <Fragment>
                    {/* Page Header */}
                         <Seo title={"Tooltips"} />
                         <Pageheader Heading="Tooltips" Pages={[{title:"Ui Elements", active:true},{title:"Tooltips", active:false}]} />
                    {/* Page Header Close */}

                    {/* Start:: row-1 */}
                    <Row>
                        <Col xl={12}>
                            <ShowCode title="Tooltip Directions" customCardClass="custom-card" customCardBodyClass="" code={tooltip1}>
                                <div className="btn-list">
                                    {Tooltipdirtooltip.map((idx: any) => (
                                        <OverlayTrigger placement={idx.text} overlay={<Tooltip>Tooltip on {idx.text} </Tooltip>} key={Math.random()}>
                                            <Button type="button" className="btn btn-primary btn-wave">
                                                Tooltip on {idx.text}
                                            </Button>
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
                            <ShowCode title="Colored Tooltips" customCardClass="custom-card" customCardBodyClass="" code={tooltip2}>
                                <div className="btn-list">
                                    <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary'>Primary Tooltip </Tooltip>}>
                                        <Button type="button" variant='primary' className="btn  btn-wave">
                                            Primary Tooltip
                                        </Button>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement="right" overlay={<Tooltip className='tooltip-secondary'>Secondary Tooltip </Tooltip>}>
                                        <Button type="button" variant='secondary' className="btn  btn-wave">
                                            Secondary Tooltip
                                        </Button>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement="bottom" overlay={<Tooltip className='tooltip-warning'>Warning Tooltip </Tooltip>}>
                                        <Button type="button" variant='warning' className="btn  btn-wave">
                                            Warning Tooltip
                                        </Button>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="bottom" overlay={<Tooltip className='tooltip-info'>Info Tooltip </Tooltip>}>
                                        <Button type="button" variant='info' className="btn  btn-wave">
                                            Info Tooltip
                                        </Button>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-success'>Success Tooltip </Tooltip>}>
                                        <Button type="button" variant='success' className="btn  btn-wave">
                                            Success Tooltip
                                        </Button>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-danger'>Danger Tooltip </Tooltip>}>
                                        <Button type="button" variant='danger' className="btn  btn-wave">
                                            Danger Tooltip
                                        </Button>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-light'>Light Tooltip </Tooltip>}>
                                        <Button type="button" variant='light' className="btn  btn-wave">
                                            Light Tooltip
                                        </Button>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-dark'>Dark Tooltip </Tooltip>}>
                                        <Button type="button" variant='dark' className="btn  btn-wave">
                                            Dark Tooltip
                                        </Button>
                                    </OverlayTrigger>
                                </div>
                            </ShowCode>
                        </Col>
                    </Row>
                    {/* End:: row-2 */}

                    {/* Start:: row-3 */}
                    <Row>
                        <Col xl={6}>
                            <ShowCode title="Tooltips on links" customCardClass="custom-card" customCardBodyClass="" code={tooltip3}>
                                <p className="text-muted mb-0">
                                    Hover on the link to view the
                                    <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary'>Link Tooltip </Tooltip>}>
                                        <Link scroll={false} href="#!" className="text-primary ms-1 d-inline-flex">Tooltip</Link>
                                    </OverlayTrigger>
                                </p>
                            </ShowCode>
                        </Col>
                        <Col xl={6}>
                            <ShowCode title="With an SVG's" customCardClass="custom-card" customCardBodyClass="" code={tooltip4}>
                                {SVGtooltip.map((idx) => (
                                    <OverlayTrigger key={Math.random()} placement="top" overlay={<Tooltip className={`tooltip-${idx.color}`}>{idx.text} </Tooltip>}>
                                        <a href="#!" className={`me-3 svg-${idx.color}`} >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                <path d="M0 0h24v24H0V0z" fill="none" /><path
                                                    d={idx.class} /></svg>
                                        </a>
                                    </OverlayTrigger>
                                ))}
                            </ShowCode>
                        </Col>
                        <Col xl={6}>
                            <ShowCode title="Disabled elements" customCardClass="custom-card" customCardBodyClass="" code={tooltip5}>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Disabled tooltip</Tooltip>}>
                                    <span className="d-inline-block">
                                        <Button disabled style={{ pointerEvents: "none" }}>
                                            Disabled button
                                        </Button>
                                    </span>
                                </OverlayTrigger>
                            </ShowCode>
                        </Col>
                        <Col xl={6}>
                            <ShowCode title="Tooltip For Images" customCardClass="custom-card" customCardBodyClass="" code={tooltip6}>
                                <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Alex Carey</Tooltip>}>
                                    <Link scroll={false} href="#!"
                                        className="avatar avatar-md me-2 online avatar-rounded">
                                        <img src="../../assets/images/faces/12.jpg" alt="img" />
                                    </Link>
                                </OverlayTrigger>

                                <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Marina Kai</Tooltip>}>
                                    <Link scroll={false} href="#!"
                                        className="avatar avatar-lg me-2 online avatar-rounded">
                                        <img src="../../assets/images/faces/3.jpg" alt="img" />
                                    </Link>
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Tim Cook</Tooltip>}>
                                    <Link scroll={false} href="#!"
                                        className="avatar avatar-xl me-2 online avatar-rounded">
                                        <img src="../../assets/images/faces/15.jpg" alt="img" />
                                    </Link>
                                </OverlayTrigger>
                            </ShowCode>
                        </Col>
                    </Row>
                    {/* End:: row-3 */}
    </Fragment>
    );
};

export default Tooltips;