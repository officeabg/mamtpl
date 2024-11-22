"use client"
import { Customerlistdata } from "@/shared/data/apps/ecommerce/admin/customerlistdata";
import { Locationdata, Statusdata } from "@/shared/data/apps/ecommerce/admin/newsletterdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Dropdown, Form, Modal, Pagination, Row, Table } from "react-bootstrap";
const Select = dynamic(() => import("react-select"), { ssr: false });
const Newsletter = () => {

//image upload
const [images, setImages] = useState<any>([]);
const [selectedImage, setSelectedImage] = useState(null);

const handleFileChange = (e:any) => {
    const file = e.target.files[0];
    if (file) {
        const reader:any = new FileReader();
        reader.onloadend = () => {
            setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
    }
};

    //Modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
return ( 
    <Fragment>
            {/* Page Header */}
                <Seo title={"News Letter"} />
                <Pageheader Heading="News Letter" Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true}, {title:"Admin", active:true}, {title:"News Letter", active:false},]} />
            {/* Page Header Close */}
                {/* Start::row-1 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    SUBSCRIBERS LIST
                                </Card.Title>
                                <div className="d-flex gap-3 align-items-center flex-wrap">
                                    <div className="btn-group">
                                        <Dropdown>
                                            <Dropdown.Toggle  variant="" className="btn btn-outline-light border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="ti ti-sort-descending-2 me-1"></i> Sort By
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <li><Dropdown.Item href="#!">Created Date</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Status</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">User Name</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Newest</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Oldest</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="custom-form-group flex-grow-1">
                                         <input type="text" className="form-control form-control-sm" placeholder="Search Here.." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <Link scroll={false} href="#!" className="text-muted custom-form-btn"><i className="ti ti-search"></i></Link>
                                    </div> 
                                    <Link scroll={false} onClick={handleShow}  href="#!" className="btn btn-primary btn-wave waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addnewuser">
                                        <i className="bi bi-plus-circle"></i>  Add User
                                    </Link> 
                                </div>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <Table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col">User Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Created Date</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Customerlistdata.map((idx)=>(
                                                <tr key={Math.random()}>
                                                    <th scope="row">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-md p-1 bg-light avatar-rounded">
                                                                    <img src={idx.src} alt="" />
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <Link scroll={false} href="/apps/ecommerce/admin/vendordetails/" className="fw-semibold mb-0">{idx.name}</Link>
                                                                <p className="fs-12 text-muted mb-0"><i className="bi bi-geo-alt"></i>{idx.location} </p>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>{idx.mail}</td>
                                                    <td>
                                                        {idx.date}
                                                    </td>
                                                    <td><span className={`badge bg-${idx.statuscolor}-transparent`}>{idx.status}</span></td>
                                                    <td>
                                                        <Link scroll={false} href="/apps/ecommerce/admin/vendordetails/" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                            <i className="ri-eye-line"></i>
                                                        </Link>
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1" onClick={handleShow} data-bs-toggle="modal" data-bs-target="#addnewuser">
                                                            <i className="ri-edit-line"></i>
                                                        </Link>
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                            <i className="ri-delete-bin-line"></i>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </Card.Body>
                            <Card.Footer className="border-top-0">
                                <nav aria-label="Page navigation" className="pagination-style-4 float-end">
                                    <Pagination className="mb-0">
                                        <Pagination.Item disabled>Prev</Pagination.Item>
                                        <Pagination.Item active>1</Pagination.Item>
                                        <Pagination.Item>2</Pagination.Item>
                                        <Pagination.Item><i className="bi bi-three-dots"></i></Pagination.Item>
                                        <Pagination.Item>16</Pagination.Item>
                                        <Pagination.Item>17</Pagination.Item>
                                        <Pagination.Item className="pagination-next">next</Pagination.Item>
                                    </Pagination>
                                </nav>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}

    {/* <!-- Start::Add New User modal --> */}
        <Modal show={show} onHide={handleClose} className="fade" id="addnewuser" tabIndex={-1} aria-labelledby="addnewuser" aria-hidden="true">
            <Modal.Header closeButton>
                <h6 className="modal-title" id="exampleModalLabel">Add New User</h6>
            </Modal.Header>
            <Modal.Body>
                <div className="row gy-4 mb-4">
                    <Col lg={12}>
                        <Form.Label htmlFor="User-Name">User Name : </Form.Label>
                        <Form.Control type="text"  id="User-Name" placeholder="User Name" defaultValue="Brenda Simpson"/>
                    </Col>
                    <Col xl={12}>
                        <Form.Label htmlFor="Email-id">Email ID</Form.Label>
                        <Form.Control type="text"  id="Email-id" placeholder="Enter Here" defaultValue="brendasimpson@gmail.com"/>
                    </Col>
                    <Col lg={12}>
                        <Form.Label className="form-label">Location</Form.Label> 
                        <Select  name="state" options={Locationdata} defaultValue={[Locationdata[0]]} className="js-example-placeholder-multiple w-full js-states"
                                menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                            />
                    </Col>
                    <Col lg={12}>
                        <Form.Label>Status</Form.Label> 
                        <Select  name="state" options={Statusdata} defaultValue={[Statusdata[0]]} className="js-example-placeholder-multiple w-full js-states"
                                menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                            />
                    </Col>
                    <Col xl={12}>                                            
                        <div className="mb-3">
                            <span className="avatar avatar-lg avatar-rounded">
                                <img src={selectedImage || '../../../../assets/images/faces/9.jpg'} alt="" className="w-100 h-100"/>
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-danger avatar-badge"><i className="fe fe-x"></i></Link>
                            </span>
                        </div>
                        <div className="btn-list">
                            <Form.Control className="form-control" type="file" onChange={(e:any) => {
                                    handleFileChange(e);
                                    setImages([...images, e.target.files[0]]);
                                }} id="formFile"/>
                        </div>
                    </Col>
                </div>                        
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" type="button" className="btn" data-bs-dismiss="modal" onClick={handleClose}>Cancel</Button>
                <Button variant="primary" type="button" className="btn">Add User</Button>
            </Modal.Footer>
        </Modal>
    {/* <!-- End::Add New User modal --> */}
    </Fragment>
    )
};

export default Newsletter;