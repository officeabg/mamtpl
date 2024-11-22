"use client"
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import * as Polardata from '@/shared/data/charts/apexcharts/polarareachartdata'
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });;
import dynamic from 'next/dynamic';
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Polarareacharts = () => {
return (
<Fragment>
                {/*} Page Header */}
                    <Seo title={"Apex Polar Area Charts"} />
                    <Pageheader Heading="Apex Polar Area Charts" Pages={[{title:"Charts", active:true}, {title:"Apex Charts", active:true},{title:"Apex Polar Area Charts", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Polar Area Chart</Card.Title>
                            </Card.Header>
                            <Card.Body className="mx-auto">
                                <div id="polararea-basic">
                                    <ReactApexChart options={Polardata.Basicpolararea.options} series={Polardata.Basicpolararea.series} type="polarArea" width={"100%"} height={300} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Polar Area Monochrome Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="polararea-monochrome">
                                    <ReactApexChart options={Polardata.Monochromepolar.options} series={Polardata.Monochromepolar.series} type="polarArea" width={"100%"} height={300} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
</Fragment>
);
};

export default Polarareacharts;