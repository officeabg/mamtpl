"use client"
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import  * as Funneldata from '@/shared/data/charts/apexcharts/funnelchartdata'
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const Funnelcharts = () => {
return (
    <Fragment>
                 {/* Page Header */}
                    <Seo title={"Apex Funnel Charts"} />
                    <Pageheader Heading="Apex Funnel Charts" Pages={[{title:"Charts", active:true}, {title:"Apex Charts", active:true},{title:"Apex Funnel Charts", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Funnel Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="funnel-chart">
                                    <ReactApexChart options={Funneldata.Funnelchart.options} series={Funneldata.Funnelchart.series} type="bar" width={"100%"} height={330} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Pyramid Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="pyramid-chart">
                                    <ReactApexChart options={Funneldata.Pyramidchart.options} series={Funneldata.Pyramidchart.series} type="bar" width={"100%"} height={330} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    );
};

export default Funnelcharts;