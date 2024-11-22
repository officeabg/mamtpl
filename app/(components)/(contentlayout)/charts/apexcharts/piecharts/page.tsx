"use client"
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import  * as Piedata from '@/shared/data/charts/apexcharts/piechartdata'
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const Piecharts = () => {
return (
    <Fragment>
                {/*} Page Header */}
                    <Seo title={"Apex Pie Charts"} />
                    <Pageheader Heading="Apex Pie Charts" Pages={[{title:"Charts", active:true}, {title:"Apex Charts", active:true},{title:"Apex Pie Charts", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Pie Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="pie-basic">
                                    <ReactApexChart options={Piedata.Basicpiechart.options} series={Piedata.Basicpiechart.series} type="pie" width={"100%"} height={300} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Simple Donut Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="donut-simple">
                                    <ReactApexChart options={Piedata.Simpledonut.options} series={Piedata.Simpledonut.series} type="donut" width={"100%"} height={300} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Updating Donut Chart</Card.Title>
                            </Card.Header>
                            <Card.Body className="mx-auto">
                                <div id="donut-update">
                                     <Piedata.Updatingdonut/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Monochrome Pie Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="pie-monochrome">
                                     <ReactApexChart options={Piedata.Monochrome.options} series={Piedata.Monochrome.series} type="pie" width={"100%"} height={270} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Gradient Donut Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="donut-gradient">
                                      <ReactApexChart options={Piedata.Gradientpie.options} series={Piedata.Gradientpie.series} type="donut" width={"100%"} height={300} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Donut Chart With Patterns</Card.Title>
                            </Card.Header>
                            <div className="card-body mx-auto">
                                <div id="donut-pattern">
                                    <ReactApexChart options={Piedata.Donutwithpattern.options} series={Piedata.Donutwithpattern.series} type="donut" width={"100%"} height={250} />
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Image Filled Pie Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="pie-image">
                                    <ReactApexChart options={Piedata.Imagefilledpie.options} series={Piedata.Imagefilledpie.series} type="pie" width={"100%"} height={300} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    );
};

export default Piecharts;