"use client"
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import * as Bubbledata from "@/shared/data/charts/apexcharts/bubblechartdata";
import dynamic from 'next/dynamic';
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });;
const Bubblecharts = () => {
return (
    <Fragment>
                {/* Page Header */}
                    <Seo title={"Apex Bubble Charts"} />
                    <Pageheader Heading="Apex Bubble Charts" Pages={[{title:"Charts", active:true}, {title:"Apex Charts", active:true},{title:"Apex Bubble Charts", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Simple Bubble Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="bubble-simple">
                                    <ReactApexChart options={Bubbledata.Simplebubble.options} series={Bubbledata.Simplebubble.series} type="bubble" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>3D Bubble Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="bubble-3d">
                                    <ReactApexChart options={Bubbledata.Bubble3D.options} series={Bubbledata.Bubble3D.series} type="bubble" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    );
};

export default Bubblecharts;