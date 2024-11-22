"use client"
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Backgroundechart, Barwithlabels, Basicareaechart, Basicbarechart, Basicechart, Basicradarechart, Basicscatter, Bubblechart, Candlestickechart, Doughnutchart, FunnelChart, GaugeChart, Heatmapechart, Horizontalechart, Horizontalstackechart, Negativeechart, Pieechart, SimpleGraph, Singlebarechart, Smoothedechart, Stackedarea, Stackedline, Steplineechart, TreemapChart, Waterfallechart } from '@/shared/data/charts/echartdata'
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";

const Echartcharts = () => {
return (
    <Fragment>
                {/* Page Header */}
                    <Seo title={"Echart Charts"} />
                    <Pageheader Heading="Echart Charts" Pages={[{title:"Charts", active:true},{title:"Echart Charts", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1*/}
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Line Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="echart-basic-line" className="echart-charts">
                                    <Basicechart />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Smoothed Line Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="echart-smoothed-line" className="echart-charts">
                                    <Smoothedechart />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Area Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="echart-basic-area" className="echart-charts">
                                     <Basicareaechart />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Stacked Line Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="echart-stacked-line" className="echart-charts">
                                     <Stackedline />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Stacked Area Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="echart-stacked-area" className="echart-charts">
                                    <Stackedarea />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Step Line Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="echart-step-line" className="echart-charts">
                                    <Steplineechart/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Bar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="echart-bar-basic" className="echart-charts">
                                    <Basicbarechart />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Bar With Background Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="echart-bar-background" className="echart-charts">
                                    <Backgroundechart />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Style For a Single Bar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="echart-bar-single" className="echart-charts">
                                    <Singlebarechart />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Water Fall Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="echart-waterfall" className="echart-charts">
                                     <Waterfallechart />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Bar With Negative Values Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="echart-negative-values" className="echart-charts">
                                     <Negativeechart />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Bar With Labels Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="echart-bar-labels" className="echart-charts">
                                    <Barwithlabels/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Horizontal Bar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="echart-bar-horizontal" className="echart-charts">
                                 
                                    <Horizontalechart />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Horizontal Stacked Bar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="echart-stacked-horizontal" className="echart-charts">
                                <Horizontalstackechart />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Pie Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="echart-pie" className="echart-charts">
                                        <Pieechart />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Doughnut Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="echart-doughnut" className="echart-charts">
                                    <Doughnutchart />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Scatter Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="echart-scatter" className="echart-charts">
                                    <Basicscatter />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Bubble Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="echart-bubble" className="echart-charts">
                                     <Bubblechart />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Candlestick Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="echart-candlestick" className="echart-charts">
                                        <Candlestickechart />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Radar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="echart-basic-radar" className="echart-charts">
                                    <Basicradarechart />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Heatmap Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="echart-heatmap" className="echart-charts">
                                        <Heatmapechart />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Treemap Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="echart-treemap" className="echart-charts">
                                     <TreemapChart />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Funnel Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="echart-funnel" className="echart-charts">
                                    <FunnelChart />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Gauge Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="echart-gauge-basic" className="echart-charts">
                                        <GaugeChart />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Simple Graph Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="echart-simple-graph" className="echart-charts">
                                        <SimpleGraph />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1*/}
    </Fragment>
    );
};

export default Echartcharts;