"use client"
import { Categorydata, Faqslistdata } from "@/shared/data/apps/ecommerce/admin/faqsdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Form, Offcanvas, Pagination, Row } from "react-bootstrap";
const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
  });
  const Select = dynamic(() => import("react-select"), { ssr: false });
const Faqs = () => {
    //Offcanvas
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
return ( 
    <Fragment>
                {/* Page Header */}
                    <Seo title={"Faq's"} />
                    <Pageheader Heading="Faq's" Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true}, {title:"Admin", active:true}, {title:"Faq's", active:false},]} />
                {/* Page Header Close */}
                
                {/* Start:: row-1 */}
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                    <h6 className="fw-semibold mb-0">
                                        FAQ'S
                                    </h6>
                                    <div className="d-flex gap-3 align-items-center flex-wrap">
                                        <div className="custom-form-group flex-grow-1">
                                            <input type="text" className="form-control" placeholder="Search FAQ'S.." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                            <Link scroll={false} href="#!" className="text-muted custom-form-btn"><i className="ti ti-search"></i></Link>
                                        </div> 
                                        <Link scroll={false} href="#!" className="btn btn-primary btn-wave" data-bs-toggle="offcanvas" data-bs-target="#addnewfaq" onClick={handleShow}>
                                            <i className="bi bi-plus-circle"></i>  Add New FAQ
                                        </Link> 
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                       {Faqslistdata.map((idx)=>(
                        <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="" key={Math.random()}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="btn-list float-end">
                                        <Button variant="" onClick={handleShow} className="btn btn-sm btn-icon btn-wave btn-info-light" data-bs-toggle="offcanvas" data-bs-target="#addnewfaq"><i className="ri-edit-line"></i></Button>
                                        <Button variant="" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                    </div>
                                    <div className="d-flex align-items-start mb-3 gap-2 flex-wrap">
                                        <div>
                                            <span className="avatar avatar-md avatar-rounded bg-primary-transparent">
                                                <i className="bi bi-question-lg fs-20"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <p className="mb-0 fw-semibold fs-15">{idx.title}</p>
                                            <span className="badge bg-light border text-default">{idx.text}</span>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <span className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio....</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="fw-semibold">Status : </span>
                                        <span className="badge bg-success-transparent ms-1">Active</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        ))}
                    <Pagination className="mb-5 justify-content-end">
                        <Pagination.Item disabled>Prev</Pagination.Item>
                        <Pagination.Item active>1</Pagination.Item>
                        <Pagination.Item>2</Pagination.Item>
                        <Pagination.Item>3</Pagination.Item>
                        <Pagination.Item className="pagination-next" href="#!">next</Pagination.Item>
                    </Pagination>
                </Row>
                {/* End:: row-1 */}

        {/* <!-- Start::add faq --> */}
        <Offcanvas show={show} onHide={handleClose} placement="end" className="offcanvas-end custom-offcanvas" tabIndex={-1} id="addnewfaq">
            <Offcanvas.Header closeButton className="border-bottom">
                <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Add New Faq's</h5>
            </Offcanvas.Header>
            <Offcanvas.Body className="">   
                <div className="row gy-4">
                    <Col lg={12}>
                        <Form.Label htmlFor="FAQ-Title" className="form-label">FAQ Title : </Form.Label>
                        <Form.Control type="text" className="form-control" id="FAQ-Title" placeholder="FAQ Title" defaultValue="Jack Miller"/>
                    </Col>
                    <Col xl={12}>
                        <Form.Label className="form-label">Category</Form.Label>
                        <Select  name="state" options={Categorydata}  defaultValue={[Categorydata[0]]} className="js-example-placeholder-multiple w-full js-states"
                                menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                            />
                    </Col>  
                    <Col lg={12}>
                        <Form.Label className="form-label">FAQ Description</Form.Label> 
                        <div id="faq-description-editor">
                        <SunEditor 
                            height="200px" 
                            setOptions={{
                            buttonList: [
                                ["undo", "redo"],
                                ["font", "fontSize"],
                                [
                                "bold",
                                "underline",
                                "italic",
                                "strike",
                                "subscript",
                                "superscript"
                                ],
                                ["fontColor", "hiliteColor"],
                                ["align", "list", "lineHeight"],
                                ["outdent", "indent"],
                                ["table", "link", "image", "video"],
                                ["preview", "print"],
                                ["removeFormat"]
                            ], 
                            defaultTag: "div",
                            minHeight: "300px",
                            showPathLabel: false,
                            defaultStyle: 'font-family: Arial; font-size: 16px;',
                            }}
                            
                        />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="form-check form-check-md form-switch">
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Active</label>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked/>
                        </div>
                    </Col>
                </div>
            </Offcanvas.Body>
            <div className="text-end canvas-footer p-3 border-top shadow-sm">
                <div className="btn-list">
                    <div className="btn btn-w-md btn-info">Draft</div>
                    <div className="btn btn-w-md btn-primary">Publish</div>
                </div>
            </div>
        </Offcanvas>
        {/* <!-- Start::add faq --> */}
    </Fragment>
    )
};

export default Faqs;