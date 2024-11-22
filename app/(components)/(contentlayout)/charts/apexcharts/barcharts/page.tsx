"use client"
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Bardata from '@/shared/data/charts/apexcharts/barchartsdata'
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Barcharts = () => {
return (
    <Fragment>
                {/* Page Header */}
                    <Seo title={"Apex Bar Charts"} />
                    <Pageheader Heading="Apex Bar Charts" Pages={[{title:"Charts", active:true}, {title:"Apex Charts", active:true},{title:"Apex Bar Charts", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Bar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="bar-basic">
                                    <ReactApexChart options={Bardata.Basicbar.options} series={Bardata.Basicbar.series} type="bar" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Grouped Bar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="bar-group">
                                     <ReactApexChart options={Bardata.Grouped.options} series={Bardata.Grouped.series} type="bar" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Stacked Bar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="bar-stacked">
                                    <ReactApexChart options={Bardata.Stackedbar.options} series={Bardata.Stackedbar.series} type="bar" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>100% Stacked Bar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="bar-full">
                                  <ReactApexChart options={Bardata.Stacked100bar.options} series={Bardata.Stacked100bar.series} type="bar" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Bar Chart With Negative Values</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="bar-negative">
                                    <ReactApexChart options={Bardata.Negativebar.options} series={Bardata.Negativebar.series} type="bar" width={"100%"} height={350} /> 
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Bar Chart With Markers</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="bar-markers">
                                  <ReactApexChart options={Bardata.Markerbar.options} series={Bardata.Markerbar.series} type="bar" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Reversed Bar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="bar-reversed">
                                    <ReactApexChart options={Bardata.Reversedbar.options} series={Bardata.Reversedbar.series} type="bar" width={"100%"} height={350} /> 
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Bar With Categogry DataLabels</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="bar-categories">
                                    <ReactApexChart options={Bardata.Categorybar.options} series={Bardata.Categorybar.series} type="bar" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Patterned Bar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="bar-pattern">
                                     <ReactApexChart options={Bardata.Patternbar.options} series={Bardata.Patternbar.series} type="bar" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Bar With Image Fill</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="bar-image">
                                    <ReactApexChart options={Bardata.Imagebar.options} series={Bardata.Imagebar.series} type="bar" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    );
};

export default Barcharts;