"use client"
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import  * as Areadata from '@/shared/data/charts/apexcharts/areachartdata'
import dynamic from "next/dynamic";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const Areacharts = () => {
return (
    <Fragment>
            {/* Page Header */}
                <Seo title={"Apex Area Charts"} />
                <Pageheader Heading="Apex Area Charts" Pages={[{title:"Charts", active:true}, {title:"Apex Charts", active:true},{title:"Apex Area Charts", active:false}]} />
            {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Area Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="area-basic">
                                    <ReactApexChart options={Areadata.Basicarea.options} series={Areadata.Basicarea.series} type="area" width={"100%"} height={300} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Spline Area Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="area-spline">
                                     <ReactApexChart options={Areadata.Spiline.options} series={Areadata.Spiline.series} type="area" width={"100%"} height={300} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Area Chart With Negative Values</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="area-negative">
                                    <ReactApexChart options={Areadata.Negative.options} series={Areadata.Negative.series} type="area" width={"100%"} height={300} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Selection-Github Style Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="chart-months"></div>
                                <div id="">
                                     <Areadata.Githubdata />
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
                                <div id="area-stacked">
                                    <ReactApexChart options={Areadata.Stacked.options} series={Areadata.Stacked.series} type="area" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Area Chart With Null Values</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="area-null">
                                    <ReactApexChart options={Areadata.Nullarea.options} series={Areadata.Nullarea.series} type="area" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                                 <Areadata.Datetimexaxis />
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    );
};

export default Areacharts;