"use client"
import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import * as Radardata from '@/shared/data/charts/apexcharts/radarchartadat'
import dynamic from "next/dynamic";
import Seo from '@/shared/layout-components/seo/seo';
import Pageheader from '@/shared/layout-components/page-header/pageheader';
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Radarcharts = () => {
  return (
    <Fragment>
                {/*} Page Header */}
                    <Seo title={"Apex Radar Charts"} />
                    <Pageheader Heading="Apex Radar Charts" Pages={[{title:"Charts", active:true}, {title:"Apex Charts", active:true},{title:"Apex Radar Charts", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Radar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="radar-basic">
                                    <ReactApexChart options={Radardata.Basicradar.options} series={Radardata.Basicradar.series} type="radar" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Radar Chart-Multiple Series</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="radar-multiple">
                                     <ReactApexChart options={Radardata.Multipleradar.options} series={Radardata.Multipleradar.series} type="radar" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Radar Chart Polygon Fill</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="radar-polygon">
                                    <ReactApexChart options={Radardata.Polygonradar.options} series={Radardata.Polygonradar.series} type="radar" width={"100%"} height={320} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    );
}

export default Radarcharts