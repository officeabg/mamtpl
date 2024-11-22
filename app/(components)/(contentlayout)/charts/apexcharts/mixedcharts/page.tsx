"use client"
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import  * as Mixedata from '@/shared/data/charts/apexcharts/mixedchartsdata'
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const Mixedcharts = () => {
return (
    <Fragment>
                {/*} Page Header */}
                    <Seo title={"Apex Mixed Charts"} />
                    <Pageheader Heading="Apex Mixed Charts" Pages={[{title:"Charts", active:true}, {title:"Apex Charts", active:true},{title:"Apex Mixed Charts", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Line & Column Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="mixed-linecolumn">
                                     <ReactApexChart options={Mixedata.Mixedlinecolumn.options} series={Mixedata.Mixedlinecolumn.series} type="line" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Multiple Y-Axis Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="mixed-multiple-y">
                                    <ReactApexChart options={Mixedata.MultipleYaxis.options} series={Mixedata.MultipleYaxis.series} type="line" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Line & Area Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="mixed-linearea">
                                     <ReactApexChart options={Mixedata.Linearea.options} series={Mixedata.Linearea.series} type="line" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Line,Column & Area Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="mixed-all">
                                     <ReactApexChart options={Mixedata.Linecolumnarea.options} series={Mixedata.Linecolumnarea.series} type="line" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    );
};

export default Mixedcharts;