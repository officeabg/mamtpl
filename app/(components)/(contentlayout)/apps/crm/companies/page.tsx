"use client"
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Dropdown, Form, Modal, Offcanvas, Pagination, Row, Table } from "react-bootstrap";
import dynamic from 'next/dynamic'
import { Companydata, Selectdata1, Selectdata2 } from "@/shared/data/apps/crm/companiesdata";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Select = dynamic(() => import("react-select"), { ssr: false });
const Companies = () => {
const [companyloopData, setCompanyloopData] = useState(Companydata); // Initialize with your data

const handleDelete = (id: number) => {
    const updatedData = companyloopData.filter((idx) => idx.id !== id);
    setCompanyloopData(updatedData);

};


// Offcanvas
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
//Modal

  const [showmodal, setShowmodal] = useState(false);

  const handleClosemodal = () => setShowmodal(false);
  const handleShowmodal = () => setShowmodal(true);


  //image upload
const [images1, setImages1] = useState<any>([]);
const [selectedImage1, setSelectedImage1] = useState(null);

const handleFileChange1 = (e:any) => {
    const file = e.target.files[0];
    if (file) {
        const reader:any = new FileReader();
        reader.onloadend = () => {
            setSelectedImage1(reader.result);
        };
        reader.readAsDataURL(file);
    }
};
return ( 
    <Fragment>
                {/* Page Header */}
                    <Seo title={"Companies"} />
                    <Pageheader Heading="Companies" Pages={[{title:"Apps", active:true}, {title:"CRM", active:true}, {title:"Companies", active:false},]} />
                {/* Page Header Close */}
                {/* Start::row-1 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    Companies <span className="badge bg-light text-default rounded ms-1 fs-12 align-middle">14</span>
                                </Card.Title>
                                <div className="d-flex flex-wrap gap-2">
                                    <Button variant="" onClick={handleShowmodal}  className="btn btn-primary btn-sm btn-wave" data-bs-toggle="modal" data-bs-target="#create-contact"><i className="ri-add-line me-1 fw-medium align-middle"></i>Add Company</Button>
                                    <Button variant="" className="btn btn-success-light btn-sm btn-wave">Export As CSV</Button>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="" href="#!" className="btn btn-light btn-sm btn-wave no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                            Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu role="menu">
                                            <li><Dropdown.Item href="#!">Newest</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Date Added</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">A - Z</Dropdown.Item></li>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <Table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/>
                                                </th>
                                                <th scope="col">Company Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Phone</th>
                                                <th scope="col">Company Size</th>
                                                <th scope="col">Industry</th>
                                                <th scope="col">Key Contact</th>
                                                <th scope="col">Total Deals</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {companyloopData.map((idx)=>(
                                                <tr className="crm-contact" key={Math.random()}>
                                                    <td>
                                                        <input className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..."/>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-2">
                                                            <div className="lh-1">
                                                                <span className="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                                    <img src={idx.src2} alt="" />
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <Link  scroll={false} data-bs-toggle="offcanvas" href="#offcanvasExample" onClick={handleShow}
                                                                role="button" aria-controls="offcanvasExample">{idx.text1}</Link>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <span className="d-block mb-1"><i className="ri-mail-line me-2 align-middle fs-14 text-muted d-inline-block"></i>{idx.mail}</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <span className="d-block"><i className="ri-phone-line me-2 align-middle fs-14 text-muted d-inline-block"></i>{idx.cell}</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center flex-wrap gap-1">
                                                            <span className={`badge bg-${idx.color} text-${idx.class}`}>{idx.badge}</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {idx.text2}
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center gap-2">
                                                            <div className="lh-1">
                                                                <span className="avatar avatar-rounded avatar-sm">
                                                                    <img src={idx.src1} alt="" />
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span className="d-block fw-medium">{idx.name}</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {idx.score}
                                                    </td>
                                                    <td>
                                                        <div className="btn-list">
                                                            <Link scroll={false} data-bs-toggle="offcanvas" href="#offcanvasExample" onClick={handleShow}
                                                            role="button" aria-controls="offcanvasExample" className="btn btn-sm btn-warning-light btn-icon"><i className="ri-eye-line"></i></Link>
                                                            <Button variant="" className="btn btn-sm btn-info-light btn-icon"><i className="ri-pencil-line"></i></Button>
                                                            <Button variant="" className="btn btn-sm btn-danger-light btn-icon contact-delete" onClick={() => handleDelete(idx.id)}><i className="ri-delete-bin-line"></i></Button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </Card.Body>
                            <Card.Footer className="border-top-0">
                                <div className="d-flex align-items-center">
                                    <div>
                                        Showing 10 Entries <i className="bi bi-arrow-right ms-2 fw-medium"></i>
                                    </div>
                                    <div className="ms-auto">
                                        <nav aria-label="Page navigation" className="pagination-style-4">
                                            <Pagination className="pagination mb-0">
                                                <Pagination.Item  disabled>Prev </Pagination.Item>
                                                <Pagination.Item active>1</Pagination.Item>
                                                <Pagination.Item>2</Pagination.Item>
                                                <Pagination.Item className="pagination-next">next</Pagination.Item>
                                            </Pagination>
                                        </nav>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}

                {/* Start:: Company Details Offcanvas */}
                <Offcanvas placement="end" className="offcanvas-end" tabIndex={-1} id="offcanvasExample" show={show} onHide={handleClose}
                aria-labelledby="offcanvasExample">
                    <Offcanvas.Body className="p-0">
                        <div className="d-sm-flex align-items-top p-4 border-bottom border-block-end-dashed main-profile-cover">
                            <div>
                                <span className="avatar avatar-xxl avatar-rounded me-3 bg-light p-2">
                                    <img src="../../../assets/images/company-logos/1.png" alt="" />
                                </span>
                            </div>
                            <div className="flex-fill main-profile-info">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h6 className="fw-medium mb-1">Spruko Technologies</h6>
                                    <Button variant="" type="button" onClick={handleClose}  className="btn-close invert-1" data-bs-dismiss="offcanvas" aria-label="Close"></Button>
                                </div>
                                <p className="mb-1 text-muted op-7">Telecommunications</p>
                                <p className="fs-12 mb-4 op-5">  
                                    <span className="me-3"><i className="ri-building-line me-1 align-middle"></i>Georgia</span> 
                                    <span><i className="ri-map-pin-line me-1 align-middle"></i>Washington D.C</span> 
                                </p>
                                <div className="d-flex mb-0">
                                    <div className="me-4">
                                        <p className="fw-medium fs-20 text-shadow mb-0">113</p>
                                        <p className="mb-0 fs-11 op-5">Deals</p>
                                    </div>
                                    <div className="me-4">
                                        <p className="fw-medium fs-20 text-shadow mb-0">$12.2k</p>
                                        <p className="mb-0 fs-11 op-5">Contributions</p>
                                    </div>
                                    <div className="me-4">
                                        <p className="fw-medium fs-20 text-shadow mb-0">$10.67k</p>
                                        <p className="mb-0 fs-11 op-5">Comitted</p>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        <div className="p-4 border-bottom border-block-end-dashed">
                            <div className="mb-0">
                                <p className="fs-15 mb-2 fw-medium">Professional Bio :</p>
                                <p className="text-muted op-8 mb-0">
                                    <b className="text-default">Spruko</b> Technologies is a leading technology company specializing in innovative software solutions for businesses worldwide. With a strong focus on cutting-edge technologies and a team of skilled professionals.
                                </p>
                            </div>   
                        </div>  
                        <div className="p-4 border-bottom border-block-end-dashed">
                            <p className="fs-14 mb-2 me-4 fw-medium">Contact Information :</p>
                            <div className="">
                                <div className="d-flex align-items-center mb-2">
                                    <div className="me-2">
                                        <span className="avatar avatar-sm avatar-rounded bg-light text-muted">
                                            <i className="ri-mail-line align-middle fs-14"></i>
                                        </span>
                                    </div>
                                    <div>
                                        spruko2981@gmail.com
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <div className="me-2">
                                        <span className="avatar avatar-sm avatar-rounded bg-light text-muted">
                                            <i className="ri-phone-line align-middle fs-14"></i>
                                        </span>
                                    </div>
                                    <div>
                                        1678-28993-223
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-0">
                                    <div className="me-2">
                                        <span className="avatar avatar-sm avatar-rounded bg-light text-muted">
                                            <i className="ri-map-pin-line align-middle fs-14"></i>
                                        </span>
                                    </div>
                                    <div>
                                        MIG-1-11, Monroe Street, Georgetown, Washington D.C, USA,20071
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                            <p className="fs-14 mb-0 fw-medium">Social Networks :</p>
                            <div className="btn-list mb-0">
                                <Button variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light mb-0">
                                    <i className="ri-facebook-line fw-medium"></i>
                                </Button>
                                <Button variant="" className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light mb-0">
                                    <i className="ri-twitter-x-line fw-medium"></i>
                                </Button>
                                <Button variant="" className="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light mb-0">
                                    <i className="ri-instagram-line fw-medium"></i>
                                </Button>
                                <Button variant="" className="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light mb-0">
                                    <i className="ri-github-line fw-medium"></i>
                                </Button>
                                <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light mb-0">
                                    <i className="ri-youtube-line fw-medium"></i>
                                </Button>
                            </div>
                        </div>
                        <div className="p-4 border-bottom border-block-end-dashed d-flex align-items-center gap-3">
                            <div className="fs-14 fw-medium">Company Size:</div>
                            <div>
                                <span className="badge bg-primary-transparent m-1">Corporate</span> - 1001+ Employees
                            </div>
                        </div>
                        <div className="p-4 d-flex align-items-center gap-3">
                            <div className="fs-14 fw-medium">
                                Key Contact :
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <div className="lh-1">
                                    <span className="avatar avatar-rounded avatar-sm">
                                        <img src="../../../assets/images/faces/2.jpg" alt="img"/>
                                    </span>
                                </div>    
                                <div className="fw-medium">Lisa Convay</div>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
                {/* End:: Company Details Offcanvas */}

                {/* Start:: Add Company */}
                <Modal centered show={showmodal} onHide={handleClosemodal} className="fade modal-dialog-centered" id="create-contact" tabIndex={-1} aria-hidden="true">
                        <Modal.Header closeButton className="">
                            <h6 className="modal-title">Add Company</h6>
                        </Modal.Header>
                        <Modal.Body className="px-4">
                            <div className="row gy-3">
                                <Col xl={12}>
                                    <div className="mb-0 text-center">
                                        <span className="avatar avatar-xxl avatar-rounded p-2 bg-light">
                                            <img src={selectedImage1 || "../../../assets/images/company-logos/11.png"} alt="" id="profile-img"/>
                                            <span className="badge rounded-pill bg-primary avatar-badge">
                                                <Form.Control type="file" name="photo"   onChange={(e:any) => {
                                                    handleFileChange1(e);
                                                    setImages1([...images1, e.target.files[0]]);
                                                }} className="position-absolute w-100 h-100 op-0" id="profile-change"/>
                                                <i className="fe fe-camera"></i>
                                            </span>
                                        </span>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <Form.Label  htmlFor="company-name" className="form-label">Company Name</Form.Label>
                                    <Form.Control type="text" className="form-control" id="company-name" placeholder="Contact Name" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label  htmlFor="company-lead-score" className="form-label">Total Deals</Form.Label>
                                    <Form.Control type="number" className="form-control" id="company-lead-score" placeholder="Total Deals" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label  htmlFor="company-mail" className="form-label">Email</Form.Label>
                                    <Form.Control type="email" className="form-control" id="company-mail" placeholder="Enter Email" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label  htmlFor="company-phone" className="form-label">Phone No</Form.Label>
                                    <Form.Control type="tel" className="form-control" id="company-phone" placeholder="Enter Phone Number" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label  htmlFor="key-contact" className="form-label">Key Contact</Form.Label>
                                    <Form.Control type="text" className="form-control" id="key-contact" placeholder="Contact Name" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label className="form-label">Industry</Form.Label>
                                    <Select name="colors" options={Selectdata2} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata2[0]]}
                                    />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label className="form-label">Company Size</Form.Label>
                                    <Select name="colors" options={Selectdata1} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata1[0]]}
                                    />
                                </Col>
                            </div>
                        </Modal.Body>
                        <Modal.Footer className="">
                            <Button variant="" type="button" className="btn btn-light" onClick={handleClosemodal}
                                data-bs-dismiss="modal">Cancel</Button>
                            <Button variant="" type="button" className="btn btn-primary">Create Contact</Button>
                        </Modal.Footer>
                </Modal>
                {/* End:: Add Company */}
    </Fragment>
    )
};

export default Companies;