"use client"
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Bar, Bubble, Doughnut, Line, Pie, PolarArea, Radar, Scatter } from 'react-chartjs-2';
import * as chartjsdata from "../../../../../shared/data/charts/chartjsdata";
import { Chartjsmixed } from '../../../../../shared/data/charts/chartjsdata';
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Chartjscharts = () => {
return (
    <Fragment>
        {/* Page Header */}
            <Seo title={"Chartjs"} />
            <Pageheader Heading="Chartjs" Pages={[{title:"Charts", active:true},{title:"Chartjs", active:false}]} />
        {/* Page Header Close */}

           {/* Start::row-1*/}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Line Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                                 <Line options={chartjsdata.Option1} data={chartjsdata.Data1} height={300} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Bar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                                 <Bar options={chartjsdata.Option2} data={chartjsdata.Data2} height={300} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Pie Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                                 <Pie options={chartjsdata.Option3} data={chartjsdata.Data3} height={300} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Doughnut Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                                <Doughnut options={chartjsdata.Option4} data={chartjsdata.Data4} height={300} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Mixed Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                                 <Chartjsmixed/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Polar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                                <PolarArea options={chartjsdata.Option6} data={chartjsdata.Data6} height={300} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Radial Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                                <Radar options={chartjsdata.Option7} data={chartjsdata.Data7} height={300} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Scatter Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                                <Scatter options={chartjsdata.Option8} data={chartjsdata.Data8} height={300} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Bubble Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                                 <Bubble options={chartjsdata.Option9} data={chartjsdata.Data9} height={300} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
           {/*End::row-1*/}
</Fragment>
    );
};

export default Chartjscharts;