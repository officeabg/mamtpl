"use client"
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import * as Heatdata from '@/shared/data/charts/apexcharts/heatmapadata'
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const Heatmapcharts = () => {
return (
    <Fragment>
                {/* Page Header */}
                    <Seo title={"Apex Heatmap Charts"} />
                    <Pageheader Heading="Apex Heatmap Charts" Pages={[{title:"Charts", active:true}, {title:"Apex Charts", active:true},{title:"Apex Heatmap Charts", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Heatmap Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="heatmap-basic">
                                    <ReactApexChart options={Heatdata.Basiheatmap.options} series={Heatdata.Basiheatmap.series} type="heatmap" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Multi Series Heatmap Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="heatmap-multiseries">
                                     <ReactApexChart options={Heatdata.Multiseriesheatmap.options} series={Heatdata.Multiseriesheatmap.series} type="heatmap" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Color Range Heatmap Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="heatmap-colorrange">
                                    <ReactApexChart options={Heatdata.Colorrange.options} series={Heatdata.Colorrange.series} type="heatmap" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Heatmap Range Without Shades</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="heatmap-range">
                                    <ReactApexChart options={Heatdata.Shadesheatmap.options} series={Heatdata.Shadesheatmap.series} type="heatmap" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}

    </Fragment>
    );
};

export default Heatmapcharts;