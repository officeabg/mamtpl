"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Breakpoints = () => {
return(
    <Fragment>
                {/* Page Header */}
                    <Seo title={"Breakpoints"} />
                    <Pageheader Heading="Breakpoints" Pages={[{title:"Utilities", active:true},{title:"Breakpoints", active:false}]} />
                {/* Page Header Close */}

                {/* Start:: row-1 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Containers
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="table-responsive">
                                    <table className="table table-bordered table-hover table-nowrap mb-0">
                                        <thead>
                                            <tr>
                                                <th>Content</th>
                                                <th>Extra small<div className="fw-normal">&lt;576px</div>
                                                </th>
                                                <th>Small<div className="fw-normal">≥576px</div>
                                                </th>
                                                <th>Medium<div className="fw-normal">≥768px</div>
                                                </th>
                                                <th>Large<div className="fw-normal">≥992px</div>
                                                </th>
                                                <th>X-Large<div className="fw-normal">≥1200px</div>
                                                </th>
                                                <th>XX-Large<div className="fw-normal">≥1400px</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><code>.container</code></td>
                                                <td><span className="text-muted">100%</span></td>
                                                <td>540px</td>
                                                <td>720px</td>
                                                <td>960px</td>
                                                <td>1140px</td>
                                                <td>1320px</td>
                                            </tr>
                                            <tr>
                                                <td><code>.container-sm</code></td>
                                                <td><span className="text-muted">100%</span></td>
                                                <td>540px</td>
                                                <td>720px</td>
                                                <td>960px</td>
                                                <td>1140px</td>
                                                <td>1320px</td>
                                            </tr>
                                            <tr>
                                                <td><code>.container-md</code></td>
                                                <td><span className="text-muted">100%</span></td>
                                                <td><span className="text-muted">100%</span></td>
                                                <td>720px</td>
                                                <td>960px</td>
                                                <td>1140px</td>
                                                <td>1320px</td>
                                            </tr>
                                            <tr>
                                                <td><code>.container-lg</code></td>
                                                <td><span className="text-muted">100%</span></td>
                                                <td><span className="text-muted">100%</span></td>
                                                <td><span className="text-muted">100%</span></td>
                                                <td>960px</td>
                                                <td>1140px</td>
                                                <td>1320px</td>
                                            </tr>
                                            <tr>
                                                <td><code>.container-xl</code></td>
                                                <td><span className="text-muted">100%</span></td>
                                                <td><span className="text-muted">100%</span></td>
                                                <td><span className="text-muted">100%</span></td>
                                                <td><span className="text-muted">100%</span></td>
                                                <td>1140px</td>
                                                <td>1320px</td>
                                            </tr>
                                            <tr>
                                                <td><code>.container-xxl</code></td>
                                                <td><span className="text-muted">100%</span></td>
                                                <td><span className="text-muted">100%</span></td>
                                                <td><span className="text-muted">100%</span></td>
                                                <td><span className="text-muted">100%</span></td>
                                                <td><span className="text-muted">100%</span></td>
                                                <td>1320px</td>
                                            </tr>
                                            <tr>
                                                <td><code>.container-fluid</code></td>
                                                <td><span className="text-muted">100%</span></td>
                                                <td><span className="text-muted">100%</span></td>
                                                <td><span className="text-muted">100%</span></td>
                                                <td><span className="text-muted">100%</span></td>
                                                <td><span className="text-muted">100%</span></td>
                                                <td><span className="text-muted">100%</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Available breakpoints
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="table-responsive">
                                    <table className="table table-bordered table-hover table-nowrap mb-0">
                                        <thead>
                                            <tr>
                                                <th>Breakpoint</th>
                                                <th>class infix</th>
                                                <th>Dimensions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Extra small</td>
                                                <td>None</td>
                                                <td>576px</td>
                                            </tr>
                                            <tr>
                                                <td>Small</td>
                                                <td><code>sm</code></td>
                                                <td>≥576px</td>
                                            </tr>
                                            <tr>
                                                <td>Medium</td>
                                                <td><code>md</code></td>
                                                <td>≥768px</td>
                                            </tr>
                                            <tr>
                                                <td>Large</td>
                                                <td><code>lg</code></td>
                                                <td>≥992px</td>
                                            </tr>
                                            <tr>
                                                <td>Extra large</td>
                                                <td><code>xl</code></td>
                                                <td>≥1200px</td>
                                            </tr>
                                            <tr>
                                                <td>Extra extra large</td>
                                                <td><code>xxl</code></td>
                                                <td>≥1400px</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-1 */}
    </Fragment>
    );
};

export default Breakpoints;