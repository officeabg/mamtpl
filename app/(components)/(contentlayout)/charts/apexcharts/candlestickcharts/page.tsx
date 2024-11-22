"use client"
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import  * as Candledata from '@/shared/data/charts/apexcharts/candlestickdata'
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const Candlestickcharts = () => {
return (
    <Fragment>
                {/* Page Header */}
                    <Seo title={"Apex Candlestick Charts"} />
                    <Pageheader Heading="Apex Candlestick Charts" Pages={[{title:"Charts", active:true}, {title:"Apex Charts", active:true},{title:"Apex Candlestick Charts", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Candlestick Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="candlestick-basic">
                                     <ReactApexChart options={Candledata.Basiccandlestick.options} series={Candledata.Basiccandlestick.series} type="candlestick" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Candlestick Synced With Brush Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="chart-candlestick">
                                    <ReactApexChart options={Candledata.Candlebrush.options} series={Candledata.Candlebrush.series} type="candlestick" width={"100%"} height={215} />
                                </div>
                                <div id="chart-bar">
                                    <ReactApexChart options={Candledata.Candlebrush.optionsBar} series={Candledata.Candlebrush.seriesBar} type="bar" width={"100%"} height={120} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Candlestick With Cateory X-axis</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="candlestick-categoryx">
                                    <ReactApexChart options={Candledata.Candlexaxis.options} series={Candledata.Candlexaxis.series} type="candlestick" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Candlestick With Line Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="candlestick-line">
                                    <ReactApexChart options={Candledata.Candleline.options} series={Candledata.Candleline.series} type="candlestick" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */} 
    </Fragment>
    );
};

export default Candlestickcharts;