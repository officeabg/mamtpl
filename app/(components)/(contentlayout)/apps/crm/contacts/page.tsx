"use client"
import { Data, Data1, Loopingdata } from "@/shared/data/apps/crm/contactsdata";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Dropdown, Form, Modal, Offcanvas, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import dynamic from 'next/dynamic'
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Select = dynamic(() => import("react-select"), { ssr: false });
const Contacts = () => {
    
const [tableData, setTableData] = useState(Loopingdata); // Initialize with your data

const handleDelete = (id: number) => {
    const updatedData = tableData.filter((idx) => idx.id !== id);
    setTableData(updatedData);

};
//Datepicker
  const [startDate, setStartDate] = useState(new Date());

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
                    <Seo title={"Contacts"} />
                    <Pageheader Heading="Contacts" Pages={[{title:"Apps", active:true}, {title:"CRM", active:true}, {title:"Contacts", active:false},]} />
                {/* Page Header Close */}
                {/* Start::row-1 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                <Card.Title>
                                    Contacts<span className="badge bg-light text-default rounded ms-1 fs-12 align-middle">28</span>
                                </Card.Title>
                                <div className="d-flex flex-wrap gap-2">
                                    <Button variant="" onClick={handleShowmodal} className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#create-contact"><i className="ri-add-line me-1 fw-medium align-middle"></i>Create Contact</Button>
                                    <Button variant="" className="btn btn-success-light btn-sm">Export As CSV</Button>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="" href="#!" className="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                            Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu  role="menu">
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
                                                    <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/>
                                                </th>
                                                <th scope="col">Contact Name</th>
                                                <th scope="col">Lead Score</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Company</th>
                                                <th scope="col">Phone</th>
                                                <th scope="col">Lead Source</th>
                                                <th scope="col">Tags</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tableData.map((idx)=>(
                                            <tr className="crm-contact" key={Math.random()}>
                                                <td>
                                                    <input className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..."/>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-rounded avatar-sm">
                                                                <img src={idx.src1}alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <Link scroll={false} data-bs-toggle="offcanvas" href="#offcanvasExample" onClick={handleShow}
                                                            role="button" aria-controls="offcanvasExample"><span className="d-block fw-medium">{idx.name}</span></Link>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Last Contacted</Tooltip>}>
                                                                <span className="d-block text-muted fs-11" data-bs-custom-class="tooltip-primary" title="Last Contacted">
                                                                <i className="ri-account-circle-line me-1 fs-13 align-middle"></i>Jul,24 2024 - 4:45PM</span>
                                                            </OverlayTrigger>
                                                           
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                   {idx.score}
                                                </td>
                                                <td>
                                                    <div>
                                                        <span className="d-block mb-1"><i className="ri-mail-line me-2 align-middle fs-14 text-muted"></i>{idx.mail}</span>
                                                    </div>
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
                                                    <div>
                                                        <span className="d-block"><i className="ri-phone-line me-2 align-middle fs-14 text-muted"></i>1678-28993-223</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.text2}
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center flex-wrap gap-1">
                                                        <span className={`badge bg-${idx.color1} text-${idx.class1}`}>{idx.text3}</span>
                                                        <span className={`badge bg-${idx.color2} text-${idx.class2}`}>{idx.text4}</span>
                                                    </div>
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
                                            <ul className="pagination mb-0">
                                                <li className="page-item disabled">
                                                    <Link scroll={false} className="page-link" href="#!">
                                                        Prev
                                                    </Link>
                                                </li>
                                                <li className="page-item active"><Link scroll={false} className="page-link" href="#!">1</Link></li>
                                                <li className="page-item"><Link scroll={false} className="page-link" href="#!">2</Link></li>
                                                <li className="page-item">
                                                    <Link scroll={false} className="page-link text-primary" href="#!">
                                                        next
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}

                {/* Start:: Contact Details Offcanvas */}
                <Offcanvas placement="end" className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasExample"  show={show} onHide={handleClose}
                aria-labelledby="offcanvasExample">
                    <Offcanvas.Body className="p-0">
                        <div className="d-sm-flex align-items-top p-4 border-bottom border-block-end-dashed main-profile-cover">
                            <div>
                                <span className="avatar avatar-xxl avatar-rounded online me-3">
                                    <img src="../../../assets/images/faces/4.jpg" alt=""/>
                                </span>
                            </div>
                            <div className="flex-fill main-profile-info">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h6 className="fw-medium mb-1">Lisa Convay</h6>
                                    <Button variant="" type="button" onClick={handleClose} className="btn-close crm-contact-close-btn p-4" data-bs-dismiss="offcanvas" aria-label="Close"></Button>
                                </div>
                                <p className="mb-1 text-muted op-7">Chief Executive Officer (C.E.O)</p>
                                <p className="fs-12 mb-4 op-5">  
                                    <span className="me-3"><i className="ri-building-line me-1 align-middle"></i>Georgia</span> 
                                    <span><i className="ri-map-pin-line me-1 align-middle"></i>Washington D.C</span> 
                                </p>
                                <div className="d-flex mb-0">
                                    <div className="me-4">
                                        <p className="fw-bold fs-20 text-shadow mb-0">113</p>
                                        <p className="mb-0 fs-11 op-5">Deals</p>
                                    </div>
                                    <div className="me-4">
                                        <p className="fw-bold fs-20 text-shadow mb-0">$12.2k</p>
                                        <p className="mb-0 fs-11 op-5">Contributions</p>
                                    </div>
                                    <div className="me-4">
                                        <p className="fw-bold fs-20 text-shadow mb-0">$10.67k</p>
                                        <p className="mb-0 fs-11 op-5">Comitted</p>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        <div className="p-4 border-bottom border-block-end-dashed">
                            <div className="mb-0">
                                <p className="fs-15 mb-2 fw-medium">Professional Bio :</p>
                                <p className="text-muted op-8 mb-0">
                                    I am <b className="text-default">Lisa Convay,</b> here by conclude that,i am the founder and managing director of the prestigeous company name laugh at all and acts as the cheif executieve officer of the company.
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
                                        sonyataylor2531@gmail.com
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <div className="me-2">
                                        <span className="avatar avatar-sm avatar-rounded bg-light text-muted">
                                            <i className="ri-phone-line align-middle fs-14"></i>
                                        </span>
                                    </div>
                                    <div>
                                        +(555) 555-1234
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
                        <div className="p-4 border-bottom border-block-end-dashed">
                            <p className="fs-14 mb-2 me-4 fw-medium">Tags :</p>
                            <div>
                                <span className="badge bg-light text-muted m-1">New Lead</span>
                                <span className="badge bg-light text-muted m-1">Others</span>
                            </div>
                        </div>
                        <div className="p-4">
                            <p className="fs-14 mb-2 fw-medium">Relationship Manager :
                                <Link scroll={false} className="fs-14 text-primary mb-0 float-end" href="#!"><i className="ri-add-line me-1 align-middle"></i>Add Manager</Link>
                            </p>
                            <div className="avatar-list-stacked">
                                <span className="avatar avatar-rounded">
                                    <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-rounded">
                                    <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-rounded">
                                    <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-rounded">
                                    <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                </span>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
                {/* End:: Contact Details Offcanvas */}

                {/* Start:: Create Contact */}
                <Modal show={showmodal} onHide={handleClosemodal}  className="fade" id="create-contact" tabIndex={-1} aria-hidden="true">
                    <Modal.Header closeButton>
                        <h6 className="modal-title">Create Contact</h6>
                    </Modal.Header>
                    <Modal.Body className="px-4">
                        <div className="row gy-3">
                            <Col xl={12}>
                                <div className="mb-0 text-center">
                                    <span className="avatar avatar-xxl avatar-rounded">
                                        <img src={selectedImage1 || "../../../assets/images/faces/9.jpg"} alt="" id="profile-img"/>
                                        <span className="badge rounded-pill bg-primary avatar-badge">
                                            <Form.Control onChange={(e:any) => {
                                                    handleFileChange1(e);
                                                    setImages1([...images1, e.target.files[0]]);
                                                }} type="file" name="photo" className="position-absolute w-100 h-100 op-0" id="profile-change"/>
                                            <i className="fe fe-camera"></i>
                                        </span>
                                    </span>
                                </div>
                            </Col>
                            <Col xl={6}>
                                <Form.Label htmlFor="deal-title" className="form-label">Deal Title</Form.Label>
                                <Form.Control type="text" className="form-control" id="deal-title" placeholder="Deal Title"/>
                            </Col>
                            <Col xl={6}>
                                <Form.Label htmlFor="contact-lead-score" className="form-label">Lead Score</Form.Label>
                                <Form.Control type="number" className="form-control" id="contact-lead-score" placeholder="Lead Score"/>
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="contact-mail" className="form-label">Email</Form.Label>
                                <Form.Control type="email" className="form-control" id="contact-mail" placeholder="Enter Email"/>
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="contact-phone" className="form-label">Phone No</Form.Label>
                                <Form.Control type="tel" className="form-control" id="contact-phone" placeholder="Enter Phone Number"/>
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="company-name" className="form-label">Company Name</Form.Label>
                                <Form.Control type="text" className="form-control" id="company-name" placeholder="Company Name"/>
                            </Col>
                            <Col xl={12}>
                                <Form.Label className="form-label">Lead Source</Form.Label>
                                <Select name="colors" options={Data1} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Data1[0]]}
                                    />
                            </Col>
                            <Col xl={6}>
                                <label className="form-label">Last Contacted</label>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                        <DatePicker  className="form-control" id="exampleInput" aria-describedby="inputHelp" placeholderText="Enter text" showIcon selected={startDate} onChange={(date) => setStartDate(date as Date)} />
                                    </div>
                                </div>
                            </Col>
                            <Col xl={6}>
                                <label className="form-label">Tags</label>
                                 <Select isMulti name="colors" options={Data} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Tag"
                                    />
                            </Col>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="" type="button" className="btn btn-light" onClick={handleClosemodal}
                            data-bs-dismiss="modal">Cancel</Button>
                        <Button variant="" type="button" className="btn btn-primary">Create Contact</Button>
                    </Modal.Footer>
                </Modal>
                {/* End:: Create Contact */}
    </Fragment>
    )
};

export default Contacts;