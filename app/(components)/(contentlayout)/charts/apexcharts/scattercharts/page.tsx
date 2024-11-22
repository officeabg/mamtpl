"use client"
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import  * as Scatterdata from '@/shared/data/charts/apexcharts/scatterchartdata'
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const Scattercharts = () => {
return (
    <Fragment>
                 {/* Page Header */}
                    <Seo title={"Apex Scatter Charts"} />
                    <Pageheader Heading="Apex Scatter Charts" Pages={[{title:"Charts", active:true}, {title:"Apex Charts", active:true},{title:"Apex Scatter Charts", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Scatter Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="scatter-basic">
                                 <ReactApexChart options={Scatterdata.Basicscatter.options} series={Scatterdata.Basicscatter.series} type="scatter" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Datetime Scatter Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="scatter-datetime">
                                     <ReactApexChart options={Scatterdata.Datetimescatter.options} series={Scatterdata.Datetimescatter.series} type="scatter" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Image Fill Scatter Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="scatter-image">
                                     <ReactApexChart options={Scatterdata.Imagefillescatter.options} series={Scatterdata.Imagefillescatter.series} type="scatter" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    );
};

export default Scattercharts;