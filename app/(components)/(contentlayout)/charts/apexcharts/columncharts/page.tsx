"use client"
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import * as Columndata from '@/shared/data/charts/apexcharts/columnchartsdata'
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const Columncharts = () => {
return (
    <Fragment>
               {/* Page Header */}
                     <Seo title={"Apex Column Charts"} />
                    <Pageheader Heading="Apex Column Charts" Pages={[{title:"Charts", active:true}, {title:"Apex Charts", active:true},{title:"Apex Column Charts", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Column Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="column-basic">
                                    <ReactApexChart options={Columndata.Basicolumn.options} series={Columndata.Basicolumn.series} type="bar" width={"100%"} height={300} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Column Chart With Datalabels</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="column-datalabels">
                                    <ReactApexChart options={Columndata.Columnwithlabels.options} series={Columndata.Columnwithlabels.series} type="bar" width={"100%"} height={300} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Column Chart With Markers</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="column-markers">
                                     <ReactApexChart options={Columndata.Markers.options} series={Columndata.Markers.series} type="bar" width={"100%"} height={300} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Column Chart With Rotated Labels</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="column-rotated-labels">
                                    <ReactApexChart options={Columndata.Rotated.options} series={Columndata.Rotated.series} type="bar" width={"100%"} height={300} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Column Chart With Negative Values</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="column-negative">
                                     <ReactApexChart options={Columndata.Negativecolumn.options} series={Columndata.Negativecolumn.series} type="bar" width={"100%"} height={300} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Range Column Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="column-range">
                                     <ReactApexChart options={Columndata.Rangecolumn.options} series={Columndata.Rangecolumn.series} type="bar" width={"100%"} height={300} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Dynamic Loaded Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                {/* <div id="chart-year"></div>
                                <div id="chart-quarter"></div> */}
                                <Columndata.Loaded />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Distributed Columns Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="columns-distributed">
                                    <ReactApexChart options={Columndata.Distributed.options} series={Columndata.Distributed.series} type="bar" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    );
};

export default Columncharts;