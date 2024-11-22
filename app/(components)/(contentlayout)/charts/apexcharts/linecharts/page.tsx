"use client"
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import * as Linedata  from '@/shared/data/charts/apexcharts/linechartsdata'
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const Linecharts = () => {
return (
    <Fragment>
                {/*} Page Header */}
                    <Seo title={"Apex Line Charts"} />
                    <Pageheader Heading="Apex Line Charts" Pages={[{title:"Charts", active:true}, {title:"Apex Charts", active:true},{title:"Apex Line Charts", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Line Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="line-chart">
                                    <ReactApexChart options={Linedata.Basicline.options} series={Linedata.Basicline.series} type="line" width={"100%"} height={300} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Line Chart With Data Labels</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="line-chart-datalabels">
                                   <ReactApexChart options={Linedata.Linechartwithlabels.options} series={Linedata.Linechartwithlabels.series} type="line" width={"100%"} height={300} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Zoomable Time Series</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="zoom-chart">
                                    <ReactApexChart options={Linedata.Zoomabletime.options} series={Linedata.Zoomabletime.series} type="area" width={"100%"} height={300} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Line With Annotations</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="annotation-chart"> 
                                    <ReactApexChart options={Linedata.Annotations.options} series={Linedata.Annotations.series} type="area"  width={"100%"} height={300} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Brush Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Linedata.Brushchart/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>StepLine Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="stepline-chart"> 
                                    <ReactApexChart options={Linedata.Stepline.options} series={Linedata.Stepline.series} type="line" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Gradient Line Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="gradient-chart">
                                    <ReactApexChart options={Linedata.Gradientline.options} series={Linedata.Gradientline.series} type="line" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Missing/Null Values Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="null-chart">
                                        <ReactApexChart options={Linedata.Missingnullvalues.options} series={Linedata.Missingnullvalues.series} type="line" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Dashed Line Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="dashed-chart">
                                     <ReactApexChart options={Linedata.Dashed.options} series={Linedata.Dashed.series} type="line" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Syncing Charts</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="chart-line">
                                    <ReactApexChart options={Linedata.Syncing.options} series={Linedata.Syncing.series} type="line" width={"100%"} height={160} />
                                </div>
                                <div id="chart-line2">
                                    <ReactApexChart options={Linedata.Syncing.optionsLine2} series={Linedata.Syncing.seriesLine2} type="line" width={"100%"} height={160} />
                                </div>
                                <div id="chart-area">
                                    <ReactApexChart options={Linedata.Syncing.optionsArea} series={Linedata.Syncing.seriesArea} type="area" width={"100%"} height={160} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    );
};

export default Linecharts;