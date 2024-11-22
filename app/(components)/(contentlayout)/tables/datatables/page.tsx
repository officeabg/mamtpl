"use client"
import { BasicTable, ResponsiveDataTable, Savetable } from "@/shared/data/tables/datatablesdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Datatables = () => {
return(
<Fragment>         
            {/* Page Header */}
                <Seo title={"Data Tables"} />
                <Pageheader Heading="Data Tables" Pages={[{title:"Tables", active:true},{title:"Data Tables", active:false}]} />
            {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Basic Datatable
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="table-responsive">
                                    <BasicTable/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}

                {/* Start:: row-2 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Responsive Datatable
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="responsive-datatable">
                                <ResponsiveDataTable/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-2 */}

                {/* Start:: row-3 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                Delete Row Datatable
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Savetable/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-3 */}
               
</Fragment>
);
};

export default Datatables;