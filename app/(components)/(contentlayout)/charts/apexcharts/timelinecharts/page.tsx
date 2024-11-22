"use client"
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import  * as Timelinedata from '@/shared/data/charts/apexcharts/timelinechartsdata'
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const Timelinecharts = () => {
return (
    <Fragment>
                 {/* Page Header */}
                    <Seo title={"Timeline Charts"} />
                    <Pageheader Heading="Timeline Charts" Pages={[{title:"Charts", active:true}, {title:"Apex Charts", active:true},{title:"Timeline Charts", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic TImeline Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="timeline-basic">
                                <ReactApexChart options={Timelinedata.Basictimeline.options} series={Timelinedata.Basictimeline.series} type="rangeBar" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Multiple Colored TImeline Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="timeline-colors">
                                <ReactApexChart options={Timelinedata.Multiplecolored.options} series={Timelinedata.Multiplecolored.series} type="rangeBar" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Multi Series Timeline Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="timeline-multi">
                                <ReactApexChart options={Timelinedata.Timelinemulti.options} series={Timelinedata.Timelinemulti.series} type="rangeBar" height={320} width={"100%"} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Advanced Timeline Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="timeline-advanced">
                                <ReactApexChart options={Timelinedata.Advancedmultirange1.options} series={Timelinedata.Advancedmultirange1.series} type="rangeBar" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Timeline-Grouped Rows</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="timeline-grouped">
                                <ReactApexChart options={Timelinedata.Timelinegrouped1.options} series={Timelinedata.Timelinegrouped1.series} type="rangeBar" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Dumbbell Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="dumbbell-chart">
                                    <ReactApexChart options={Timelinedata.Dumbbell.options} series={Timelinedata.Dumbbell.series} type="rangeBar" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}

    </Fragment>
    );
};

export default Timelinecharts;