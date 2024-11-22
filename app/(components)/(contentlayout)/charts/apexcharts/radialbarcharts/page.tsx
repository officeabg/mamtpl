"use client"
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import * as  Radialdata from '@/shared/data/charts/apexcharts/radialchartdata'

import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const Radialbarcharts = () => {
return (
    <Fragment>
                {/*} Page Header */}
                    <Seo title={"Apex Radialbar Charts"} />
                    <Pageheader Heading="Apex Radialbar Charts" Pages={[{title:"Charts", active:true}, {title:"Apex Charts", active:true},{title:"Apex Radialbar Charts", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Pie Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="radialbar-basic">
                                    <ReactApexChart options={Radialdata.Basicradialbar.options} series={Radialdata.Basicradialbar.series} type="radialBar" width={"100%"} height={300} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Multiple Radialbar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="radialbar-multiple">
                                    <ReactApexChart options={Radialdata.Multipleradial.options} series={Radialdata.Multipleradial.series} type="radialBar" width={"100%"} height={300} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Circle Chart - Custom Angle</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="circle-custom">
                                    <ReactApexChart options={Radialdata.Circlechart.options} series={Radialdata.Circlechart.series} type="radialBar"  width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Gradient Circle Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="gradient-circle">
                                    <ReactApexChart options={Radialdata.Gradientcircle.options} series={Radialdata.Gradientcircle.series} type="radialBar" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Stroked Circular Gauge</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="circular-stroked">
                                    <ReactApexChart options={Radialdata.Circlegauge.options} series={Radialdata.Circlegauge.series} type="radialBar" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Circle Chart With Image</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="circle-image">
                                    <ReactApexChart options={Radialdata.Circlewithimage.options} series={Radialdata.Circlewithimage.series} type="radialBar" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Semi Circular Gauge</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="circular-semi">
                                     <ReactApexChart options={Radialdata.Semicirclegauge.options} series={Radialdata.Semicirclegauge.series} type="radialBar" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    );
};

export default Radialbarcharts;