"use client"
import { Paymentgatewaydata, Statusselectdata } from "@/shared/data/apps/ecommerce/admin/paymentgatewaysdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
const Select = dynamic(() => import("react-select"), { ssr: false });
const Paymentgateways = () => {
    //Filepond 
    const [files, setFiles] = useState<any>([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
return ( 
    <Fragment>
            {/* Page Header */}
                <Seo title={"Payment Gateways"} />
                <Pageheader Heading="Payment Gateways" Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true}, {title:"Admin", active:true}, {title:"Payment Gateways", active:false},]} />
            {/* Page Header Close */}
                
                {/* Start::row-1 */}
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                    <h6 className="fw-semibold mb-0">
                                        Payment Methods
                                    </h6>
                                    <div className="d-flex gap-3 align-items-center flex-wrap">
                                        <div className="custom-form-group flex-grow-1">
                                            <input type="text" className="form-control" placeholder="Search Payment Options.." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                            <Link scroll={false} href="#!" className="text-muted custom-form-btn"><i className="ti ti-search"></i></Link>
                                        </div> 
                                        <Link scroll={false} href="#!" onClick={handleShow} className="btn btn-primary btn-wave" data-bs-toggle="modal" data-bs-target="#addnewpayment">
                                            <i className="bi bi-plus-circle"></i>  Add New Payment
                                        </Link> 
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    {Paymentgatewaydata.map((idx)=>(
                        <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="col-12" key={Math.random()}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <Dropdown className="float-end">
                                        <Dropdown.Toggle  variant="" className="btn btn-icon btn-sm border btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ti ti-dots-vertical"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <li><Dropdown.Item href="#!"><i className="ri-edit-line me-1"></i>Edit</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1"></i>Delete</Dropdown.Item></li>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <div className="d-flex gap-4 align-items-start flex-wrap">
                                        <div className="payment-card">
                                            <img src={idx.src} alt="" />
                                        </div>
                                        <div className="flex-grow-1 w-50">
                                            <h6 className="fw-semibold mb-1">Payment with {idx.title}</h6>
                                            <p className="mb-1 text-muted">{idx.text}</p>
                                            <p className="mb-0"><span className="fw-semibold">Status :</span> <span className="badge bg-success-transparent">Enabled</span> </p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                {/* End::row-1 */}
        {/* <!-- Add Payment Modal --> */}
            <Modal show={show} onHide={handleClose} className="fade" id="addnewpayment" tabindex="-1" aria-labelledby="addnewpayment" aria-hidden="true">
                <Modal.Header>
                    <h6 className="modal-title" id="exampleModalLabel">Add New Payment</h6>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </Modal.Header>
                <Modal.Body>
                    <div className="row gy-4 mb-4">
                        <Col lg={12}>
                            <Form.Label htmlFor="Payment-title" className="form-label">Payment Title : </Form.Label>
                            <Form.Control type="text" className="form-control" id="Payment-title" placeholder="Payment Title"/>
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="Payment-id" className="form-label">Payment ID</Form.Label>
                            <Form.Control type="text" className="form-control" id="Payment-id" placeholder="Enter Here" defaultValue="54327812645fuygfeh"/>
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="Payment-secret" className="form-label">Payment Secret</Form.Label>
                            <Form.Control type="text" className="form-control" id="Payment-secret" placeholder="Enter Here" defaultValue="54327812645fuygfeh"/>
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="Payment-currency" className="form-label">Payment Currency</Form.Label>
                            <Form.Control type="text" className="form-control" id="Payment-currency" placeholder="Enter Here" defaultValue="USD"/>
                        </Col>
                        <Col lg={12}>
                            <Form.Label className="form-label">Status</Form.Label> 
                            <Select  name="state" options={Statusselectdata} defaultValue={[Statusselectdata[1]]}  className="js-example-placeholder-multiple w-full js-states"
                                    menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                />
                        </Col>
                        <Col lg={12}>
                            <label className="form-label">Upload Image : </label>
                            <FilePond
                                files={files}
                                onupdatefiles={setFiles}
                                allowMultiple={true}
                                maxFiles={3}
                                server="/api"
                                name="files"
                                labelIdle='Drag & Drop your file here or click '
                            />
                        </Col>
                    </div>                        
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" type="button" className="btn" data-bs-dismiss="modal"  onClick={handleClose}>Cancel</Button>
                    <Button variant="primary" type="button" className="btn">Add Payment</Button>
                </Modal.Footer>
            </Modal>
        {/* <!-- Add Payment Modal --> */}
    </Fragment>
    )
};

export default Paymentgateways;