"use client"
import { Data, Data1, Data2, Leadsdata } from "@/shared/data/apps/crm/leadsdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Dropdown, Form, Modal, Pagination, Row } from "react-bootstrap";
const Select = dynamic(() => import("react-select"), { ssr: false });
const Leads = () => {
    const [leadsloopData, setLeadsloopData] = useState(Leadsdata); // Initialize with your data

const handleDelete = (id: number) => {
    const updatedData = leadsloopData.filter((idx) => idx.id !== id);
    setLeadsloopData(updatedData);

};

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
                    <Seo title={"Leads"} />
                    <Pageheader Heading="Leads" Pages={[{title:"Apps", active:true}, {title:"CRM", active:true}, {title:"Leads", active:false},]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                <Card.Title>
                                    Leads<span className="badge bg-light text-default rounded ms-1 fs-12 align-middle">30</span>
                                </Card.Title>
                                <div className="d-flex flex-wrap gap-2">
                                    <Button variant="" onClick={handleShowmodal} className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#create-contact"><i className="ri-add-line me-1 fw-medium align-middle"></i>Create Lead</Button>
                                    <Button variant="" className="btn btn-success-light btn-sm">Export As CSV</Button>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="" href="#!" className="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                                                </th>
                                                <th scope="col">Contact Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Phone</th>
                                                <th scope="col">Lead Status</th>
                                                <th scope="col">Company</th>
                                                <th scope="col">Lead Source</th>
                                                <th scope="col">Tags</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {leadsloopData.map((idx)=>(
                                            <tr className="crm-contact" key={Math.random()}>
                                                <td>
                                                    <input className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." />
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
                                                    <div>
                                                        <span className="d-block mb-1"><i className="ri-mail-line me-2 align-middle fs-14 text-muted d-inline-block"></i>{idx.mail}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <span className="d-block"><i className="ri-phone-line me-2 align-middle fs-14 text-muted"></i>{idx.cell}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-light text-default">{idx.badge}</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                                <img src={idx.src2} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>{idx.text1}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.text2}
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center flex-wrap gap-1">
                                                        <span className={`badge bg-${idx.color1}`}>{idx.text3}</span>
                                                        <span className={`badge bg-${idx.color2}`}>{idx.text4}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <a className="btn btn-sm btn-warning-light btn-icon"><i className="ri-eye-line"></i></a>
                                                        <Button variant="" className="btn btn-sm btn-info-light btn-icon"><i className="ri-pencil-line"></i></Button>
                                                        <Button variant="" className="btn btn-sm btn-danger-light btn-icon contact-delete" onClick={() => handleDelete(idx.id)}><i className="ri-delete-bin-line"></i></Button>
                                                    </div>
                                                </td>
                                            </tr>
                                            ))}
                                        </tbody>
                                    </table>
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
                                                <Pagination.Item disabled>Prev</Pagination.Item>
                                                <Pagination.Item active>1</Pagination.Item>
                                                <Pagination.Item>2</Pagination.Item>
                                                <Pagination.Item className="pagination-next">
                                                        next
                                                </Pagination.Item>
                                            </Pagination>
                                        </nav>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}

                {/* Start:: Create Contact */}
                <Modal   show={showmodal} onHide={handleClosemodal}className="fade" id="create-contact" tabIndex={-1} aria-hidden="true">
                    <Modal.Header className="" closeButton>
                        <h6 className="modal-title">Create Lead</h6>
                    </Modal.Header>
                    <Modal.Body className="px-4">
                        <div className="row gy-3">
                            <Col xl={12}>
                                <div className="mb-0 text-center">
                                    <span className="avatar avatar-xxl avatar-rounded">
                                        <img src={selectedImage1 || "../../../assets/images/faces/9.jpg"} alt="" id="profile-img"/>
                                        <span className="badge rounded-pill bg-primary avatar-badge">
                                            <Form.Control   onChange={(e:any) => {
                                                    handleFileChange1(e);
                                                    setImages1([...images1, e.target.files[0]]);
                                                }} type="file" name="photo" className="position-absolute w-100 h-100 op-0" id="profile-change" />
                                            <i className="fe fe-camera"></i>
                                        </span>
                                    </span>
                                </div>
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="contact-name" className="form-label">Contact Name</Form.Label>
                                <Form.Control type="text" className="form-control" id="contact-name" placeholder="Contact Name" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="contact-mail" className="form-label">Email</Form.Label>
                                <Form.Control type="email" className="form-control" id="contact-mail" placeholder="Enter Email" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="contact-phone" className="form-label">Phone No</Form.Label>
                                <Form.Control type="tel" className="form-control" id="contact-phone" placeholder="Enter Phone Number" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="company-name" className="form-label">Company Name</Form.Label>
                                <Form.Control type="text" className="form-control" id="company-name" placeholder="Company Name" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label className="form-label">Lead Status</Form.Label>
                                <Select name="colors" options={Data2} className="" placeholder="Select Status"
                                            menuPlacement='auto' classNamePrefix="Select2"
                                        />
                            </Col>
                            <Col xl={12}>
                                <Form.Label className="form-label">Lead Source</Form.Label>
                                <Select name="colors" options={Data1} className=""
                                            menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Data1[0]]}
                                        />
                            </Col>
                            <Col xl={12}>
                                <Form.Label className="form-label">Tags</Form.Label>
                                <Select isMulti name="colors" options={Data} className=""
                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Tag"
                                        />
                            </Col>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="">
                        <Button variant="" type="button" className="btn btn-light"
                            data-bs-dismiss="modal">Cancel</Button>
                        <Button variant="" type="button" className="btn btn-primary">Create Contact</Button>
                    </Modal.Footer>
                </Modal>
                {/* End:: Create Contact */}
    </Fragment>
    )
};

export default Leads;