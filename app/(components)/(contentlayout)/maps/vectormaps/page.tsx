"use client"
import React, { Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Europemap,   USState, USState1, WorldMap } from '@/shared/data/maps/vectordata';
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Vectormaps = () => {
    const [content, setContent] = useState("");
return (
    <Fragment>
                {/* Page Header */}
                    <Seo title={"Vector Maps"} />
                    <Pageheader Heading="Vector Maps" Pages={[{title:"Maps", active:true},{title:"Vector Maps", active:false}]} />
                 {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Vector Map</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="vector-map">
                                    <WorldMap setTooltipContent={setContent} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Map With Markers</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="marker-map">
                                    <USState1/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Map With Image Markers</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="marker-image-map">
                                 <Europemap/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Map With Lines</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="lines-map">
                                    <USState/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    );
};

export default Vectormaps;