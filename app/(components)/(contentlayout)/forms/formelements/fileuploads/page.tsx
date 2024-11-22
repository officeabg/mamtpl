"use client"
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
import { fileupload1 } from "@/shared/data/prism/forms-prism";
import ShowCode from "@/shared/layout-components/showcode/showcode";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";

const Fileuploads = () => {

    const [files, setFiles] = useState<any>([]);
	const [files1, setFiles1] = useState<any>([]);
	const [files2, setFiles2] = useState<any>([]);
return (
<Fragment>
                 {/* Page Header */}
                    <Seo title={"File Uploads"} />
                    <Pageheader Heading="File Uploads" Pages={[{title:"Forms", active:true},{title:"Form Elements", active:true},{title:"File Uploads", active:false}]} />
                 {/* Page Header Close */}

                {/* Start:: row-1 */}
                <Row>
                    <Col xl={12}>
                            <ShowCode title="Bootstrap File Input" customCardClass="custom-card" customCardBodyClass="" code={fileupload1}>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>Default file input example</Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group>
                                    <Form.Group controlId="formFileMultiple" className="mb-3">
                                        <Form.Label>Multiple files input example</Form.Label>
                                        <Form.Control type="file" multiple />
                                    </Form.Group>
                                    <Form.Group controlId="formFileDisabled" className="mb-3">
                                        <Form.Label>Disabled file input example</Form.Label>
                                        <Form.Control type="file" disabled />
                                    </Form.Group>
                                    <Form.Group controlId="formFileSm" className="mb-3">
                                        <Form.Label>Small file input example</Form.Label>
                                        <Form.Control type="file" size="sm" />
                                    </Form.Group>
                                    <Form.Group controlId="formFileLg" className="mb-3">
                                        <Form.Label>Large file input example</Form.Label>
                                        <Form.Control type="file" size="lg" />
                                    </Form.Group>
                        </ShowCode>
                    </Col>
                    <Col xl={12}>
                        <h6 className="mb-3">Filepond:</h6>
                        <Row>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                            Multiple Upload
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <FilePond className="multiple-filepond"
										files={files}
										onupdatefiles={setFiles}
										allowMultiple={true}
										maxFiles={3}
										server="/api"
										name="files" /* sets the file input name, it's filepond by default */
										labelIdle='Drag & Drop your file here or click '
									/>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                            Single Upload
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <FilePond className="multiple-filepond single-fileupload"
										files={files1}
										onupdatefiles={setFiles1}
										allowMultiple={false}
										maxFiles={1}
										server="/api"
										name="files" /* sets the file input name, it's filepond by default */
										labelIdle='Drag & Drop your file here or click '
									/>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/* End:: row-1 */}

                {/* Start:: row-2 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Dropzone
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <FilePond className="multiple-filepond"
								files={files2}
                                    onupdatefiles={setFiles2}
                                    allowMultiple={true}
                                    maxFiles={3}
                                    server="/api"
                                    name="files" /* sets the file input name, it's filepond by default */
                                    labelIdle='Drag & Drop your file here or click '
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-2 */}
</Fragment>
);
};

export default Fileuploads;