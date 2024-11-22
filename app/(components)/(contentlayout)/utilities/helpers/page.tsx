"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Helpers = () => {
return (
    <Fragment>
                 {/* Page Header */}
                    <Seo title={"Helpers"} />
                    <Pageheader Heading="Helpers" Pages={[{title:"Utilities", active:true},{title:"Helpers", active:false}]} />
                 {/* Page Header Close */}

                    {/* Start:: row-1 */}
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Colors With backgrounds
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="text-bg-primary p-3">Primary with contrasting color</div>
                                    <div className="text-bg-secondary p-3">Secondary with contrasting color</div>
                                    <div className="text-bg-success p-3">Success with contrasting color</div>
                                    <div className="text-bg-danger p-3">Danger with contrasting color</div>
                                    <div className="text-bg-warning p-3">Warning with contrasting color</div>
                                    <div className="text-bg-info p-3">Info with contrasting color</div>
                                    <div className="text-bg-light p-3 text-default">Light with contrasting color</div>
                                    <div className="text-bg-dark p-3 text-white">Dark with contrasting color</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={9} xl={9} lg={6} md={6} sm={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>With Other Components</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <h6 className="fw-medium mb-3">Badges:</h6>
                                    <span className="badge text-bg-primary me-1">Primary</span>
                                    <span className="badge text-bg-info mb-4">Info</span>
                                    <h6 className="fw-medium mb-3">cards:</h6>
                                    <div className="card text-bg-success mb-3 text-fixed-white" style={{maxWidth: "18rem"}}>
                                        <div className="card-header border-bottom-0">
                                            <div className="card-title text-fixed-white">
                                                Header
                                            </div>
                                        </div>
                                        <div className="card-body pt-0">
                                            <p className="card-text text-fixed-white">Some quick example text to build on the card title
                                                and
                                                make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                    <div className="card text-bg-danger mb-3 text-fixed-white" style={{maxWidth: "18rem"}}>
                                        <div className="card-header border-bottom-0">
                                            <div className="card-title text-fixed-white">
                                                Header
                                            </div>
                                        </div>
                                        <div className="card-body pt-0">
                                            <p className="card-text text-fixed-white">Some quick example text to build on the card title
                                                and
                                                make up the bulk of the card's content.</p> 
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={3} lg={6} md={6} sm={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Card With Stretched Links
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <img className="bd-placeholder-img card-img-top card-img" src="../../assets/images/media/media-4.jpg" alt="..."/>
                                    <div className="card-body pb-0">
                                        <h5 className="card-title">Card with stretched links</h5>
                                        <p className="card-text">
                                            <Link scroll={false} href="#!" className="stretched-link text-danger"
                                                style={{ "position": "relative" }}
                                                >Stretched link will not work
                                                here,
                                                because <code>position: relative</code> is added to the
                                                link</Link>
                                        </p>
                                        <p className="card-text bg-light mb-0 p-1 rounded" 
                                        style={{ "transform": "rotate(0)" }}
                                        >
                                            This <Link scroll={false} href="#!" className="text-warning stretched-link">stretched
                                                link</Link>
                                            will only be spread over the <code>p</code>-tag, because a
                                            transform is
                                            applied to it.
                                        </p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {/* End:: row-1 */}

                    {/* Start:: row-2 */}
                    <Row>
                        <Col xxl={12} xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Clearfix
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="bg-light clearfix">
                                        <button type="button" className="btn btn-primary float-start m-1">Example Button
                                            floated left</button>
                                        <button type="button" className="btn btn-primary float-end m-1">Example Button
                                            floated
                                            right</button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={12} xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Colored links
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="d-flex justify-content-evenly flex-wrap">
                                        <Link scroll={false} href="#!" className="link-primary fw-medium fs-15 p-1">Primary</Link>
                                        <Link scroll={false} href="#!" className="link-secondary fw-medium fs-15 p-1">Secondary</Link>
                                        <Link scroll={false} href="#!" className="link-success fw-medium fs-15 p-1">Success</Link>
                                        <Link scroll={false} href="#!" className="link-danger fw-medium fs-15 p-1">Danger</Link>
                                        <Link scroll={false} href="#!" className="link-warning fw-medium fs-15 p-1">Warning</Link>
                                        <Link scroll={false} href="#!" className="link-info fw-medium fs-15 p-1">Info</Link>
                                        <Link scroll={false} href="#!" className="link-light fw-medium fs-15 p-1">Light</Link>
                                        <Link scroll={false} href="#!" className="link-dark fw-medium fs-15 p-1">Dark</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {/* End:: row-2 */}

                    {/* Start:: row-3 */}
                    <Row>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Ratio
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="ratio ratio-16x9">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/-lDlbQ7DiCI"
                                            title="YouTube video player" 
                                            style={{ "border":"0px" }}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Row>
                                <Col xl={12}>
                                    <Card className="custom-card">
                                        <Card.Header>
                                            <Card.Title>
                                                Aspect ratios
                                            </Card.Title>
                                        </Card.Header>
                                        <div className="card-body bd-example-ratios">
                                            <div className="me-1 ratio ratio-1x1">
                                                <div className="d-flex align-items-center justify-content-center">1x1</div>
                                            </div>
                                            <div className="me-1 ratio ratio-4x3">
                                                <div className="d-flex align-items-center justify-content-center">4x3</div>
                                            </div>
                                            <div className="me-1 ratio ratio-16x9">
                                                <div className="d-flex align-items-center justify-content-center">16x9</div>
                                            </div>
                                            <div className="me-1 ratio ratio-21x9">
                                                <div className="d-flex align-items-center justify-content-center">21x9</div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                                <Col xl={12}>
                                    <Card className="custom-card">
                                        <Card.Header>
                                            <Card.Title>
                                                Custom ratios
                                            </Card.Title>
                                        </Card.Header>
                                        <div className="card-body bd-example-ratios bd-example-ratios-breakpoint">
                                            <div className="ratio me-1" 
                                            style={{
                                                // @ts-ignore
                                                "--bs-aspect-ratio": "50%" 
                                              } as React.CSSProperties}
                                            >
                                                <div className="d-flex align-items-center justify-content-center">2x1</div>
                                            </div>
                                            <div className="ratio ratio-4x3">
                                                <div className="d-flex align-items-center justify-content-center">4x3, then 2x1</div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    {/* End:: row-3 */}

                    {/* Start:: row-4 */}
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Vertical Stacking
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="vstack gap-3">
                                        <div className="bg-light border p-1 px-2 rounded">First item</div>
                                        <div className="bg-light border p-1 px-2 rounded">Second item</div>
                                        <div className="bg-light border p-1 px-2 rounded">Third item</div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Horizontal Stacking
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="hstack gap-3 mb-3">
                                        <div className="bg-light border p-1 px-2 rounded">First item</div>
                                        <div className="bg-light border p-1 px-2 rounded">Second item</div>
                                        <div className="bg-light border p-1 px-2 rounded">Third item</div>
                                    </div>
                                    <div className="hstack gap-3 mb-3">
                                        <div className="bg-light border p-1 px-2 rounded">First item</div>
                                        <div className="bg-light border ms-auto p-1 px-2 rounded">Second item</div>
                                        <div className="bg-light border p-1 px-2 rounded">Third item</div>
                                    </div>
                                    <div className="hstack gap-3">
                                        <div className="bg-light border p-1 px-2 rounded">First item</div>
                                        <div className="bg-light border ms-auto p-1 px-2 rounded">Second item</div>
                                        <div className="vr"></div>
                                        <div className="bg-light border p-1 px-2 rounded">Third item</div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {/* End:: row-4 */}

                    {/* Start:: row-5 */}
                    <Row>
                        <Col xl={4}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Vstack For Buttons
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="vstack gap-2 col-md-5 mx-auto">
                                        <button type="button" className="btn btn-primary">Save
                                            changes</button>
                                        <button type="button" className="btn btn-outline-primary">Cancel</button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Inline Form With Hstack
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="hstack gap-3">
                                        <input className="form-control me-auto" type="text"
                                            placeholder="Add your item here..."
                                            aria-label="Add your item here..."/>
                                        <button type="button" className="btn btn-primary">Submit</button>
                                        <div className="vr"></div>
                                        <button type="button" className="btn btn-outline-danger">Reset</button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Text Truncation
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <div className="col-2 text-truncate">
                                            This text is quite long, and will be truncated once displayed.
                                        </div>
                                    </Row>
                                    {/* Inline level */}
                                    <span className="d-inline-block text-truncate" style={{ maxWidth: "150px" }}>
                                        This text is quite long, and will be truncated once displayed.
                                    </span>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {/* End:: row-5 */}

                    {/* Start:: row-6 */}
                    <Row>
                        <Col xl={4}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        CUSTOM FOCUS RING
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link scroll={false} href="#!" className="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
                                        Custom focus ring
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        CSS VARIABLE FOCUS RING
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Link scroll={false} href="#!" className="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" 
                                    style={{
                                        // @ts-ignore
                                        "--bs-focus-ring-color": "rgba(var(--success-rgb), .25)"
                                      } as React.CSSProperties}
                                    >
                                        Green focus ring
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        BLURRY OFFSET FOCUS RING
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className="p-4">
                                    <Link scroll={false} href="#!" className="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" 
                                      style={{
                                        // @ts-ignore
                                     "--bs-focus-ring-x: 10px; --bs-focus-ring-y": "10px; --bs-focus-ring-blur: 4px"
                                      } as React.CSSProperties}
                                    >
                                        Blurry offset focus ring
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        FOCUS RING UTILITIES
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <p><Link scroll={false} href="#!" className="d-inline-flex focus-ring focus-ring-primary py-1 px-2 text-decoration-none border rounded-2">Primary focus</Link></p>
                                    <p><Link scroll={false} href="#!" className="d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2">Secondary focus</Link></p>
                                    <p><Link scroll={false} href="#!" className="d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none border rounded-2">Success focus</Link></p>
                                    <p><Link scroll={false} href="#!" className="d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2">Danger focus</Link></p>
                                    <p><Link scroll={false} href="#!" className="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2">Warning focus</Link></p>
                                    <p><Link scroll={false} href="#!" className="d-inline-flex focus-ring focus-ring-info py-1 px-2 text-decoration-none border rounded-2">Info focus</Link></p>
                                    <p><Link scroll={false} href="#!" className="d-inline-flex focus-ring focus-ring-light py-1 px-2 text-decoration-none border rounded-2">Light focus</Link></p>
                                    <p><Link scroll={false} href="#!" className="d-inline-flex focus-ring focus-ring-dark py-1 px-2 text-decoration-none border rounded-2">Dark focus</Link></p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {/* End:: row-6 */}
    </Fragment>
    );
};

export default Helpers;