"use client"
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import * as Boxplotdata from '@/shared/data/charts/apexcharts/boxplotdata'
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Boxplotcharts = () => {
return (
    <Fragment>

                {/* Page Header */}
                    <Seo title={"Apex Boxplot Charts"} />
                    <Pageheader Heading="Apex Boxplot Charts" Pages={[{title:"Charts", active:true}, {title:"Apex Charts", active:true},{title:"Apex Boxplot Charts", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Boxplot Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="boxplot-basic">
                                    <ReactApexChart options={Boxplotdata.Basicboxplot.options} series={Boxplotdata.Basicboxplot.series} type="boxPlot" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Boxplot With Scatter Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="boxplot-scatter">
                                     <ReactApexChart options={Boxplotdata.Boxplotscatter.options} series={Boxplotdata.Boxplotscatter.series} type="boxPlot" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Horizontal Boxplot Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="boxplot-horizontal">
                                     <ReactApexChart options={Boxplotdata.Boxplothorizontal.options} series={Boxplotdata.Boxplothorizontal.series} type="boxPlot" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}

    </Fragment>
    );
};

export default Boxplotcharts;