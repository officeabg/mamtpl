"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Ribbons = () => {
return (
<Fragment>
                {/* Page Header */}
                    <Seo title={"Ribbons"} />
                    <Pageheader Heading="Ribbons" Pages={[{title:"Advanced Ui", active:true},{title:"Ribbons", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    RIBBON STYLE 1
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="row gy-3">
                                    <Col xl={6}>
                                        <Card className="custom-card shadow-none mb-0 ribbon-card">
                                            <Card.Body className="p-4">
                                                <div className="ribbon ribbon-primary ribbon-top-left"><span>ribbon</span></div>
                                                <div className="card-subtitle fw-semibold mb-2 text-end">Top Left Ribbon</div>
                                                <span className="d-block">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card shadow-none mb-0 ribbon-card">
                                            <Card.Body className="p-4">
                                                <div className="ribbon ribbon-secondary ribbon-top-right"><span>ribbon</span></div>
                                                <div className="card-subtitle fw-semibold mb-2 text-start">Top Right Ribbon</div>
                                                <span className="d-block">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card shadow-none mb-0 ribbon-card">
                                            <Card.Body className="p-4">
                                                <div className="ribbon ribbon-success ribbon-bottom-left"><span>ribbon</span></div>
                                                <span className="d-block">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span>
                                                <div className="card-subtitle fw-semibold mt-2 text-end">Bottom Left Ribbon</div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card shadow-none mb-0 ribbon-card">
                                            <Card.Body className="p-4">
                                                <div className="ribbon ribbon-orange ribbon-bottom-right"><span>ribbon</span></div>
                                                <span className="d-block">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span>
                                                <div className="card-subtitle fw-semibold mt-2 text-start">Bottom Right Ribbon</div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
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
                                    RIBBON STYLE 2
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="p-4">
                                <div className="row gy-3">
                                    <Col xl={6}>
                                        <Card className="custom-card shadow-none mb-0">
                                            <Card.Body className="p-4">
                                                <div className="ribbon-2 ribbon-primary ribbon-left">Congratulations</div>
                                                <span className="d-block pt-4">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span>
                                                <div className="card-subtitle fw-semibold mt-2 text-end">Left Ribbon</div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card shadow-none mb-0">
                                            <Card.Body className="p-4">
                                                <div className="ribbon-2 ribbon-success ribbon-right">Congratulations</div>
                                                <span className="d-block pt-4">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span>
                                                <div className="card-subtitle fw-semibold mt-2 text-start">Right Ribbon</div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </div>
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
                                    RIBBON STYLE 3
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="p-4">
                                <div className="row gy-3">
                                    <Col xl={3}>
                                        <Card className="custom-card mb-0">
                                            <Card.Body className="p-4">
                                                <span className="ribbon-3 top-left ribbon-success">
                                                    <span><i className="fe fe-zap"></i></span>
                                                </span>
                                                <div className="card-subtitle fw-semibold mb-2 text-end">Top Left Ribbon</div>
                                                <span className="d-block">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span> 
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={3}>
                                        <Card className="custom-card mb-0">
                                            <Card.Body className="p-4">
                                                <span className="ribbon-3 top-right ribbon-secondary">
                                                    <span><i className="fe fe-zap"></i></span>
                                                </span>
                                                <div className="card-subtitle fw-semibold mb-2 text-start">Top Right Ribbon</div>
                                                <span className="d-block">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span> 
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={3}>
                                        <Card className="custom-card mb-0">
                                            <Card.Body className="p-4">
                                                <span className="ribbon-3 top-left ribbon-info">
                                                    <span><i className="fe fe-zap"></i></span>
                                                </span>
                                                <div className="card-subtitle fw-semibold mb-2 text-end">Top Left Ribbon</div>
                                                <span className="d-block">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span> 
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={3}>
                                        <Card className="custom-card mb-0">
                                            <Card.Body className="p-4">
                                                <span className="ribbon-3 top-right ribbon-warning">
                                                    <span><i className="fe fe-zap"></i></span>
                                                </span>
                                                <div className="card-subtitle fw-semibold mb-2 text-start">Top Right Ribbon</div>
                                                <span className="d-block">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span> 
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-3 */}

                {/* Start:: row-4 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>RIBBON STYLE 4</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="row gy-3">
                                    <Col xl={6}>
                                        <Card className="custom-card mb-0">
                                            <Card.Body className="p-4">
                                                <span className="ribbon-4 ribbon-primary top-left">
                                                    <span>May</span>
                                                </span>
                                                <div className="card-subtitle fw-semibold mb-2 text-end">Top Left  Ribbon</div>
                                                <span className="d-block">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span> 
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card mb-0">
                                            <Card.Body className="p-4">
                                                <span className="ribbon-4 ribbon-secondary top-right">
                                                    <span>Jun</span>
                                                </span>
                                                <div className="card-subtitle fw-semibold mb-2 text-start">Top Right  Ribbon</div>
                                                <span className="d-block">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span> 
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-4 */}

                {/* Start:: row-5 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    RIBBON STYLE 5
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="row gy-3">
                                    <Col xl={3}>
                                        <Card className="custom-card mb-0 overflow-hidden">
                                            <Card.Body className="p-4">
                                                <div className="ribbon-5 ribbon-primary top-left">OFFER</div>
                                                <div className="card-subtitle fw-semibold mb-2 text-end">Top Left Ribbon</div>
                                                <span className="d-block">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span> 
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={3}>
                                        <Card className="custom-card mb-0 overflow-hidden">
                                            <Card.Body className="p-4">
                                                <div className="ribbon-5 ribbon-secondary top-right">OPEN</div>
                                                <div className="card-subtitle fw-semibold mb-2 text-start">Top Right Ribbon</div>
                                                <span className="d-block">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span> 
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={3}>
                                        <Card className="custom-card mb-0 overflow-hidden">
                                            <Card.Body className="p-4">
                                                <div className="ribbon-5 ribbon-success bottom-left">CLOSE</div>
                                                <span className="d-block mb-2">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span> 
                                                <div className="card-subtitle fw-semibold text-end">Bottom Left Ribbon</div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={3}>
                                        <Card className="custom-card mb-0 overflow-hidden">
                                            <Card.Body className="p-4">
                                                <div className="ribbon-5 ribbon-orange bottom-right">SALE</div>
                                                <span className="d-block mb-2">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span> 
                                                <div className="card-subtitle fw-semibold text-start">Bottom Right Ribbon</div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-5 */}

                {/* Start:: row-6 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>RIBBON STYLE 6</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="row gy-3">
                                    <Col xl={6}>
                                        <Card className="custom-card mb-0">
                                            <Card.Body className="p-4">
                                                <div className="ribbon-6 ribbon-left ribbon-primary">Service</div>
                                                <div className="card-subtitle fw-semibold mb-2 text-end">Top Left  Ribbon</div>
                                                <span className="d-block">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span> 
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card mb-0">
                                            <Card.Body className="p-4">
                                                <div className="ribbon-6 ribbon-right ribbon-secondary">Offer</div>
                                                <div className="card-subtitle fw-semibold mb-2 text-start">Top Right  Ribbon</div>
                                                <span className="d-block">Join us in congratulating [Employee Name] for their outstanding contributions and dedication. Their hard work and commitment have truly set a standard for excellence. Let's celebrate their achievements together!</span> 
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-6 */}
</Fragment>
);
};

export default Ribbons;