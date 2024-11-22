"use client"
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import * as Rangedata from "@/shared/data/charts/apexcharts/rangechartdata";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });;
import dynamic from 'next/dynamic';
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Rangeareacharts = () => {
return (
    <Fragment>
                {/*} Page Header */}
                    <Seo title={"Apex Range Area Charts"} />
                    <Pageheader Heading="Apex Range Area Charts" Pages={[{title:"Charts", active:true}, {title:"Apex Charts", active:true},{title:"Apex Range Area Charts", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Basic Range Area Chart
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="rangearea-basic">
                                     <ReactApexChart options={Rangedata.Basicrangearea.options} series={Rangedata.Basicrangearea.series} type="rangeArea" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Combo Range Area Chart
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="rangearea-combo">
                                    <ReactApexChart options={Rangedata.Comborangearea.options} series={Rangedata.Comborangearea.series} type="rangeArea" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    );
};

export default Rangeareacharts;