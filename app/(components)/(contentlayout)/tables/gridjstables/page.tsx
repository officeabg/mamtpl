"use client"
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Grid } from "gridjs-react";
import { Columns, Data, Data1, Data2, Data3 } from '@/shared/data/tables/gridjsdata';
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";

const Gridjstables = () => {
return (
<Fragment>
             {/* Page Header */}
                <Seo title={"Grid Js"} />
                <Pageheader Heading="Grid Js" Pages={[{title:"Tables", active:true},{title:"Grid Js", active:false}]} />
            {/* Page Header Close */}

                {/*Start::row-1 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Basic Table
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="grid-example1">
                                <Grid
                                    data={Data}
                                    columns={['Date', 'Name', 'EMail', 'Id', 'Price', 'Quantity', 'Total']} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}

                {/*Start:: row-2 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Table With Pagination
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="grid-pagination">
                                    <Grid
                                        data={Data}
                                        columns={['Date', 'Name', 'EMail', 'Id', 'Price', 'Quantity', 'Total']} pagination={{
                                            limit: 5,
                                        }} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-2 */}
                
                {/*Start:: row-3 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Table With Search
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="grid-search">
                                <Grid
                                    data={Data}
                                    search={true}
                                    columns={['Date', 'Name', 'EMail', 'Id', 'Price', 'Quantity', 'Total']} pagination={{
                                        limit: 5,
                                    }} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End:: row-3 */}

                {/*Start:: row-4 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Table Sorting
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="grid-sorting">
                                <Grid
                                    data={Data}
                                    sort={true}
                                    search={true}
                                    columns={['Date', 'Name', 'EMail', 'Id', 'Price', 'Quantity', 'Total']}
                                    //  pagination={{
                                    //     limit: 5,
                                    // }}
                                     />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End:: row-4 */}

                {/*Start:: row-5 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Table Loading
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="grid-loading">
                                    <Grid
                                        data={Data1}
                                        sort={true}
                                        search={true}
                                        columns={['Date', 'Name', 'EMail', 'Id', 'Price', 'Quantity', 'Total']} pagination={{
                                            limit: 5,
                                        }}
                                        loading={true} 
                                        />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End:: row-5 */}

                {/*Start:: row-6 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Wide Table 
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="grid-wide">
                                    <Grid
                                        data={Data2}
                                        sort={true}
                                        columns={['Date', 'Name', 'EMail', 'Order Id', 'Product', 'Category', 'Price', 'Quantity', 'Total']} pagination={{
                                            limit: 5,
                                        }}
                                        wide={true}
                                        resizable={true}
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End:: row-6 */}

                {/*Start:: row-7 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Fixed Header
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="grid-header-fixed">
                                    <Grid
                                    data={Data3}
                                    sort={true}
                                    search={true}
                                    fixedHeader={true}
                                    height='350px'
                                    columns={['Date', 'Name', 'EMail', 'Id', 'Price', 'Quantity', 'Total']}
                                    //  pagination={{
                                    //     limit: 4,
                                    // }}
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End:: row-7 */}

                {/*    Start:: row-8 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Hidden Columns
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="grid-hidden-column">
                                    <Grid
                                        data={Data}
                                        sort={true}
                                        search={true}
                                        columns={Columns}
                                        //  pagination={{
                                        //     limit: 5,
                                        // }} 
                                        />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-8 */}
</Fragment>
);
};

export default Gridjstables;