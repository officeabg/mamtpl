"use client"
import { Designationdata, Testimonialsloopdata } from "@/shared/data/apps/ecommerce/admin/testimonialsdata";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Form, Modal, OverlayTrigger, Pagination, Row, Tooltip } from "react-bootstrap";
const Select = dynamic(() => import("react-select"), { ssr: false });
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarsIcon from "@mui/icons-material/Stars";
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Testimonials = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //rating
    const [value, setValue] = useState<number | null>(2); // Default value is 2 stars
    const [hover, setHover] = useState<number>(-1);
    
    const labels = ["1", "2", "3", "4", "5"];
    const getLabelText = (value: number) => {
        return `${value} Star`;
    };

    //Filepond
    const [files, setFiles] = useState<any>([]);
return( 
    <Fragment>
            {/* Page Header */}
                <Seo title={"Testimonials"} />
                <Pageheader Heading="Testimonials" Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true}, {title:"Admin", active:true}, {title:"Testimonials", active:false},]} />
            {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                    <h6 className="fw-semibold mb-0">
                                        Testimonials
                                    </h6>
                                    <div className="d-flex gap-3 align-items-center flex-wrap">
                                        <div className="custom-form-group flex-grow-1">
                                             <input type="text" className="form-control" placeholder="Search Testimonials.." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                            <Link scroll={false} href="#!" className="text-muted custom-form-btn"><i className="ti ti-search"></i></Link>
                                        </div> 
                                        <Link scroll={false}  onClick={handleShow} href="#!" className="btn btn-primary btn-wave waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addnewtestimonial">
                                            <i className="bi bi-plus-circle"></i>  Add New Testimonial
                                        </Link> 
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                        {Testimonialsloopdata.map((idx)=>(
                            <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="" key={Math.random()}>
                                <Card className="custom-card">
                                    <Card.Body>
                                        <div className="btn-list float-end">
                                            <Button variant="" onClick={handleShow} className="btn btn-sm btn-icon btn-wave btn-info-light waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addnewtestimonial"><i className="ri-edit-line"></i></Button>
                                            <Button variant="" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0 waves-effect waves-light"><i className="ri-delete-bin-line"></i></Button>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <span className="avatar avatar-md avatar-rounded me-3">
                                                <img src={idx.src} alt="" />
                                            </span>
                                            <div>
                                                <p className="mb-0 fw-semibold fs-15">{idx.name}</p>
                                                <p className="mb-0 fs-10 fw-semibold text-muted">{idx.text1}</p>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  -- 
                                            <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio</Tooltip>}>
                                                <Link scroll={false} href="#!" className="fw-semibold fs-11 text-primary ms-1" data-bs-custom-class="tooltip-primary" data-bs-placement="top" data-bs-title="">
                                                        Read More
                                                </Link>
                                            </OverlayTrigger>
                                        </span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <span className="text-muted">Rating : </span>
                                                <span className="text-warning d-block ms-1">
                                                    <i className="ri-star-fill me-1"></i>
                                                    <i className="ri-star-fill me-1"></i>
                                                    <i className="ri-star-fill me-1"></i>
                                                    <i className="ri-star-fill me-1"></i>
                                                    <i className={`ri-star-${idx.rating}`}></i>
                                                </span>
                                            </div>
                                            <div className="float-end fs-12 fw-semibold text-muted text-end">
                                                <span>{idx.text2}</span>
                                                <span className="d-block fw-normal fs-12 text-success"><i>{idx.name}</i></span>
                                            </div>
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
                        <Pagination.Item className="pagination-next">next</Pagination.Item>
                    </Pagination>
                </Row>
                {/*End::row-1 */}

        {/* <!-- Add Testimonial Modal --> */}
        <Modal show={show} onHide={handleClose} className="fade" id="addnewtestimonial" tabIndex={-1} aria-labelledby="addnewtestimonial" aria-hidden="true">
            <Modal.Header closeButton>
                <h6 className="modal-title" id="exampleModalLabel">Add New Testimonial</h6>
            </Modal.Header>
            <Modal.Body className="">
                <div className="row gy-4 mb-4">
                    <Col lg={12}>
                        <label htmlFor="Testimonial-By" className="form-label">Testimonial By : </label>
                        <input type="text" className="form-control" id="Testimonial-By" placeholder="Testimonial By" defaultValue="Jack Miller"/>
                    </Col>
                    <Col xl={12}>
                        <Form.Label>Designation</Form.Label>
                        <Select  name="state" options={Designationdata} defaultValue={[Designationdata[0]]} className="js-example-placeholder-multiple w-full js-states"
                            menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                        />
                    </Col>
                    <Col xl={12}>
                        <p className="fs-14">Please give your valuable rating</p>
                        <div className="d-flex align-items-center">
                            <div id="stars-hover" data-rating="3"></div>
                            <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
                                <Rating
                                    name="hover-feedback"
                                    value={value}
                                    precision={1}
                                    getLabelText={getLabelText}
                                    onChange={(_event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    onChangeActive={(_event, newHover) => {
                                        setHover(newHover);
                                    }}
                                    emptyIcon={<StarsIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                />
                                {value !== null && (
                                    <Box className="rating-stars my-rating-9 rating-9" sx={{ ml: 2 }}>
                                        <span className="live-rating badge bg-success-transparent ms-3">
                                            {hover !== -1 ? labels[hover] : labels[value - 1]}
                                        </span>
                                    </Box>
                                )}
                            </Box>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <Form.Label>Comment</Form.Label> 
                        <div className="form-floating z-0">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" 
                            style={{ height: "150px" }}
                            ></textarea>
                            <label htmlFor="floatingTextarea2">Comments</label>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <Form.Label>Upload Image : </Form.Label>
                        <FilePond className="multiple-filepond"
                            files={files}
                            onupdatefiles={setFiles}
                            allowMultiple={true}
                            maxFiles={3}
                            server="/api"
                            name="files" /* sets the file input name, it's filepond by default */
                            labelIdle='Drag & Drop your file here or click '
                        />
                    </Col>
                </div>                        
            </Modal.Body>
            <Modal.Footer className="">
                <Button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Cancel</Button>
                <Button type="button" className="btn btn-primary">Add Testimonial</Button>
            </Modal.Footer>
        </Modal>
        {/* <!-- Add Testimonial Modal --> */}
    </Fragment>
    )
};

export default Testimonials;