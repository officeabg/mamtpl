"use client"
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import  * as Treedata from '@/shared/data/charts/apexcharts/treemapdata'
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const Treemapcharts = () => {
return (
    <Fragment>
                 {/* Page Header */}
                    <Seo title={"Apex Treemap Charts"} />
                    <Pageheader Heading="Apex Treemap Charts" Pages={[{title:"Charts", active:true}, {title:"Apex Charts", active:true},{title:"Apex Treemap Charts", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Treemap Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="treemap-basic">
                                    <ReactApexChart options={Treedata.Basictreemap.options} series={Treedata.Basictreemap.series} type="treemap" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Multi Dimensional Treemap Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="treemap-multi">
                                     <ReactApexChart options={Treedata.Multidimensional.options} series={Treedata.Multidimensional.series} type="treemap" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Distributed Treemap Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="treemap-distributed">
                                    <ReactApexChart options={Treedata.Distributedtree.options} series={Treedata.Distributedtree.series} type="treemap" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Treemap with color ranges</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="treemap-colorranges">
                                     <ReactApexChart options={Treedata.Colorrangetree.options} series={Treedata.Colorrangetree.series} type="treemap" width={"100%"} height={350} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    );
};

export default Treemapcharts;