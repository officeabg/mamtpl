"use client"
import { breadcrumb1, breadcrumb2, breadcrumb3, breadcrumb4, breadcrumb5, breadcrumb6 } from "@/shared/data/prism/uielementsprism";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import ShowCode from "@/shared/layout-components/showcode/showcode";
import React, { Fragment } from "react";
import { Breadcrumb,  Col, Row } from "react-bootstrap";

const Breadcrumbs = () => {
return (
<Fragment>
            {/* Page Header */}
                <Seo title={"Breadcrumb"} />
                <Pageheader Heading="Breadcrumb" Pages={[{title:"Ui Elements", active:true},{title:"Breadcrumb", active:false}]} />
            {/* Page Header Close */}

                {/*ROW-START*/}
                <Row>
                    <Col xl={12}>
                                <ShowCode customCardBodyClass="pb-2" title="Example" customCardClass="custom-card" code={breadcrumb1}>
                                        <Breadcrumb>
                                            <Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
                                        </Breadcrumb>

                                        <nav aria-label="breadcrumb">
                                            <Breadcrumb>
                                                <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
                                                <Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
                                            </Breadcrumb>
                                        </nav>

                                        <nav aria-label="breadcrumb">
                                            <Breadcrumb className="mb-0">
                                                <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
                                                <Breadcrumb.Item href="#!">Library</Breadcrumb.Item>
                                                <Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
                                            </Breadcrumb>
                                        </nav>
                                </ShowCode>
                    </Col>
                    <Col xl={12}>
                        <ShowCode customCardBodyClass="pb-2" title="Example1" customCardClass="custom-card" code={breadcrumb2}>
                                <nav aria-label="breadcrumb">
                                    <Breadcrumb className="breadcrumb-example1">
                                        <Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
                                    </Breadcrumb>
                                </nav>

                                <nav aria-label="breadcrumb">
                                    <Breadcrumb className="breadcrumb-example1">
                                        <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
                                        <Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
                                    </Breadcrumb>
                                </nav>

                                <nav aria-label="breadcrumb">
                                    <Breadcrumb className="breadcrumb-example1 mb-0">
                                        <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
                                        <Breadcrumb.Item href="#!">Library</Breadcrumb.Item>
                                        <Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
                                    </Breadcrumb>
                                </nav>
                        </ShowCode>
                    </Col>
                    <Col xl={12}>
                            <ShowCode customCardBodyClass="pb-2" title="Dividers" customCardClass="custom-card" code={breadcrumb3}>
                                    <nav
                                        aria-label="breadcrumb" className='divider-breadcrumb'>
                                        <Breadcrumb className="mb-0">
                                            <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
                                            <Breadcrumb.Item active className="active" aria-current="page">Library</Breadcrumb.Item>
                                        </Breadcrumb>
                                    </nav>
							</ShowCode>
                    </Col>
                    <Col xl={12}>
                            <ShowCode customCardBodyClass="pb-2" title="Embedded SVG icon" customCardClass="custom-card" code={breadcrumb4}>
                                    <nav
                                        aria-label="breadcrumb" className='svg-breadcrumb'>
                                        <Breadcrumb className=" mb-0">
                                            <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
                                            <Breadcrumb.Item active className="active embedded-breadcrumb" aria-current="page">Library</Breadcrumb.Item>
                                        </Breadcrumb>
                                    </nav>
							</ShowCode>
                    </Col>
                    <Col xl={12}>
                            <ShowCode customCardBodyClass="pb-2" title="Breadcrumb Style-1" customCardClass="custom-card" code={breadcrumb5}>
                                    <nav aria-label="breadcrumb">
                                        <Breadcrumb className="breadcrumb breadcrumb-style1 mb-0">
                                            <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
                                            <Breadcrumb.Item href="#!">Library</Breadcrumb.Item>
                                            <Breadcrumb.Item active className="active" aria-current="page">Data</Breadcrumb.Item>
                                        </Breadcrumb>
                                    </nav>
							</ShowCode>
                    </Col>
                    <Col xl={12}>
                            <ShowCode customCardBodyClass="pb-2" title="Breadcrumb Style-2" customCardClass="custom-card" code={breadcrumb6}>
                                    <nav aria-label="breadcrumb">
                                        <Breadcrumb className="breadcrumb breadcrumb-style2 mb-0">
                                            <Breadcrumb.Item href="#!"><i className="ti ti-home-2 me-1 fs-15 d-inline-block"></i>Home</Breadcrumb.Item>
                                            <Breadcrumb.Item href="#!"><i className="ti ti-apps me-1 fs-15 d-inline-block"></i>About</Breadcrumb.Item>
                                            <Breadcrumb.Item active className="active" aria-current="page">Services</Breadcrumb.Item>
                                        </Breadcrumb>
                                    </nav>
							</ShowCode>
                    </Col>
                </Row>
                {/*ROW-END*/}
</Fragment>
);
};

export default Breadcrumbs;