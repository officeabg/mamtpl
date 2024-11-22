"use client"
import dynamic from "next/dynamic";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import EditorComponent from "../../../../../shared/data/forms/editor/editor1";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});
const Formeditor = () => {
return (
<Fragment>
                {/* Page Header */}
                    <Seo title={"Sun Editor"} />
                    <Pageheader Heading="Sun Editor" Pages={[{title:"Forms", active:true},{title:"Sun Editor", active:false}]} />
                {/* Page Header Close */}

                {/* Start:: row-1 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                Sun Editor
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <SunEditor />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-1 */}

                {/* Start:: row-2 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                Sun Editor With Value
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                            <EditorComponent/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-2 */}
</Fragment>
);
};

export default Formeditor;