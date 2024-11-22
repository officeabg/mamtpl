"use client"
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Dropdown, Modal, OverlayTrigger, Pagination, Row, Tooltip } from "react-bootstrap";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Invoicedata from '@/shared/data/pages/invoice/invoicelistdata';
const Select = dynamic(() => import("react-select"), { ssr: false });
import DatePicker from "react-datepicker";
import CountUp from "react-countup";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Listview = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //
const Listviewassigneddata=[
    {value:'Angelina May', label:'Angelina May'},
    {value:'Kiara advain', label:'Kiara advain'},
    {value:'Hercules Jhon', label:'Hercules Jhon'},
    {value:'Mayor Kim', label:'Mayor Kim'},
]
const Prioritydata=[
    {value:'High', label:'High'},
    {value:'Medium', label:'Medium'},
    {value:'Low', label:'Low'}
]
const Statusdata=[
   {value:'New', label:'New'},
   {value:'Completed', label:'Completed'},
   {value:'Inprogress', label:'Inprogress'},
   {value:'Pending', label:'Pending'}
]
//datepicker

const [startDate, setStartDate] = useState(new Date()); //React date picker
const [startDate1, setStartDate1] = useState(new Date());
return ( 
    <Fragment>
            {/* Page Header */}
                <Seo title={"Task List View"} />
                <Pageheader Heading="Task List View" Pages={[{title:"Apps", active:true},{title:"Task", active:true},{title:"Task List View", active:false}]} />
            {/* Page Header Close */}

                {/* Start::row-2 */}
                <Row>
                    <Col xl={12}>
                        <Row>
                            <Col xl={6}>
                                <Row>
                                    <Col xl={6}>
                                        <Card className="custom-card">
                                            <Card.Body className="p-4">
                                                <div className="d-flex align-items-start gap-3">
                                                    <div className="svg-icon-background bg-primary-transparent mb-3 svg-primary mx-auto"> 
                                                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"/></svg>
                                                    </div> 
                                                    <div className="flex-fill">
                                                        <h6 className="mb-2 fs-12">New Tasks</h6> 
                                                        <div className="pb-0 mt-0"> 
                                                            <div> 
                                                                <div className="d-flex align-items-center gap-2 mb-2">
                                                                    <h4 className="fw-medium mb-0"><CountUp className="count-up" end={42} /> </h4> 
                                                                    <span className="badge bg-primary">12,345</span>
                                                                </div>
                                                                <p className="text-muted fs-11 mb-0 lh-1">
                                                                    <span className="text-success me-1 fw-medium">
                                                                        <i className="ri-arrow-up-s-line me-1 align-middle"></i>3.25%
                                                                    </span>
                                                                    <span className="ms-1 d-inline-flex">this month</span>
                                                                </p>
                                                            </div> 
                                                        </div> 
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card">
                                            <Card.Body className="p-4">
                                                <div className="d-flex align-items-start gap-3">
                                                    <div className="svg-icon-background bg-secondary-transparent mb-3 svg-secondary mx-auto"> 
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z"/></svg>
                                                    </div> 
                                                    <div className="flex-fill">
                                                        <h6 className="mb-2 fs-12">Completed Tasks</h6> 
                                                        <div> 
                                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                                <h4 className="fw-medium mb-0"><CountUp className="count-up" end={320} /></h4> 
                                                                <span className="badge bg-secondary">4,176</span>
                                                            </div>    
                                                            <p className="text-muted fs-11 mb-0 lh-1">
                                                                <span className="text-danger me-1 fw-medium">
                                                                    <i className="ri-arrow-down-s-line me-1 align-middle"></i>1.16%
                                                                </span>
                                                                <span className="ms-1 d-inline-flex">this month</span>
                                                            </p>
                                                        </div> 
                                                    </div>
                                                </div>    
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card">
                                            <Card.Body className="p-4">
                                                <div className="d-flex align-items-start gap-3">
                                                    <div className="svg-icon-background bg-success-transparent mb-3 svg-success mx-auto"> 
                                                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z"/></svg>
                                                    </div> 
                                                    <div className="flex-fill">
                                                        <h6 className="mb-2 fs-12">Pending Tasks</h6> 
                                                        <div> 
                                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                                <h4 className="fw-medium mb-0"><CountUp className="count-up" end={81} /></h4> 
                                                                <span className="badge bg-success">7,064</span>
                                                            </div>    
                                                            <p className="text-muted fs-11 mb-0 lh-1">
                                                                <span className="text-success me-1 fw-medium">
                                                                    <i className="ri-arrow-up-s-line me-1 align-middle"></i>0.25%
                                                                </span>
                                                                <span className="ms-1 d-inline-flex">this month</span>
                                                            </p>
                                                        </div> 
                                                    </div>
                                                </div>    
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={6}>
                                        <Card className="custom-card">
                                            <Card.Body className="p-4">
                                                <div className="d-flex align-items-start gap-3">
                                                    <div className="svg-icon-background bg-orange-transparent mb-3 svg-orange mx-auto"> 
                                                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z"/></svg>
                                                    </div> 
                                                    <div className="flex-fill">
                                                        <h6 className="mb-2 fs-12">Inprogress Tasks</h6> 
                                                        <div> 
                                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                                <h4 className="fw-medium mb-0"><CountUp className="count-up" end={33} />k</h4> 
                                                                <span className="badge bg-orange border">1,105</span>
                                                            </div>    
                                                            <p className="text-muted fs-11 mb-0 lh-1">
                                                                <span className="text-success me-1 fw-semibFold">
                                                                    <i className="ri-arrow-down-s-line me-1 align-middle"></i>0.46%
                                                                </span>
                                                                <span className="ms-1 d-inline-flex">this month</span>
                                                            </p>
                                                        </div> 
                                                    </div>
                                                </div>    
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={6}>
                                <Card className="custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                            Tasks Statistics
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body className="px-0 pb-0">
                                        <div id="task-list-stats">
                                            <ReactApexChart options={Invoicedata.Invoicestatistics.options} series={Invoicedata.Invoicestatistics.series} type="bar" width={"100%"} height={180} />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xxl={12} xl={12} className="">
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    Total Tasks
                                </Card.Title>
                                <div className="d-flex">
                                    <Button variant="" className="btn btn-sm btn-primary btn-wave waves-light" data-bs-toggle="modal" data-bs-target="#create-task" onClick={handleShow}><i className="ri-add-line fw-medium align-middle me-1"></i> Create Task</Button>
                                    {/* Start::add task modal */}
                                    <Modal className="modal fade" id="create-task" tabIndex={-1} aria-hidden="true" show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <h6 className="modal-title">Add Task</h6>
                                            </Modal.Header>
                                            <Modal.Body className="px-4">
                                                <div className="row gy-2">
                                                    <Col xl={6}>
                                                        <label htmlFor="task-name" className="form-label">Task Name</label>
                                                        <input type="text" className="form-control" id="task-name" placeholder="Task Name"/>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <label htmlFor="task-id" className="form-label">Task ID</label>
                                                        <input type="text" className="form-control" id="task-id" placeholder="Task ID"/>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <label className="form-label">Assigned Date</label>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                                                <DatePicker className="" selected={startDate} onChange={(date) => setStartDate(date as Date)} />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <label className="form-label">Due Date</label>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                                                <DatePicker className="" selected={startDate1} onChange={(date) => setStartDate1(date as Date)} />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <label className="form-label">Status</label>
                                                      
                                                        <Select  name="state" options={Statusdata} className="js-example-placeholder-multiple w-full js-states"
                                                            menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Statusdata[0]]}
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <label className="form-label">Priority</label>
                                                     
                                                        <Select  name="state" options={Prioritydata} className="js-example-placeholder-multiple w-full js-states"
                                                            menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Prioritydata[0]]}
                                                        />
                                                    </Col>
                                                    <Col xl={12}>
                                                        <label className="form-label">Assigned To</label>
                                                        <Select isMulti  name="state" options={Listviewassigneddata} className="js-example-placeholder-multiple w-full js-states"
                                                            menuPlacement='auto' classNamePrefix="Select2" 
                                                        />
                                                    </Col>
                                                </div>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="" type="button" className="btn btn-light" onClick={handleClose}
                                                    data-bs-dismiss="modal">Cancel</Button>
                                                <Button variant="" type="button" className="btn btn-primary">Add Task</Button>
                                            </Modal.Footer>
                                    </Modal>
                                    {/* End::add task modal */}
                                    <Dropdown className="ms-2">
                                        <Dropdown.Toggle variant="" className="btn btn-icon btn-secondary-light btn-sm btn-wave waves-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ti ti-dots-vertical"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <li><Dropdown.Item href="#!">New Tasks</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Pending Tasks</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Completed Tasks</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Inprogress Tasks</Dropdown.Item></li>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <input className="form-check-input check-all" type="checkbox" id="all-tasks" value="" aria-label="..."/>
                                                </th>
                                                <th scope="col">Task</th>
                                                <th scope="col">Task ID</th>
                                                <th scope="col">Assigned Date</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Due Date</th>
                                                <th scope="col">Priority</th>
                                                <th scope="col">Assigned To</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="task-list">
                                                <td className="task-checkbox"><input className="form-check-input" type="checkbox" value="" aria-label="..."/></td>
                                                <td>
                                                    <span className="fw-medium">Design New Landing Page</span>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">SPK - 01</span>
                                                </td>
                                                <td>
                                                    02-06-2024
                                                </td>
                                                <td>
                                                    <span className="fw-medium text-primary">New</span>
                                                </td>
                                                <td>
                                                    10-06-2024
                                                </td>
                                                <td>
                                                    <span className="badge bg-secondary-transparent">Medium</span>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                        </span>
                                                        <Link scroll={false} className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                                            +2
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                    <Button variant="" className="btn btn-primary-light btn-icon btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit"><i className="ri-edit-line"></i></Button>
                                                </OverlayTrigger>
                                                    <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><i className="ri-delete-bin-5-line"></i></Button>
                                                </td>
                                            </tr>
                                            <tr className="task-list">
                                                <td className="task-checkbox"><input className="form-check-input" type="checkbox" value="" aria-label="..." defaultChecked/></td>
                                                <td>
                                                    <span className="fw-medium">New Project Buleprint</span>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">SPK - 04</span>
                                                </td>
                                                <td>
                                                    05-06-2024
                                                </td>
                                                <td>
                                                    <span className="fw-medium text-secondary">Inprogress</span>
                                                </td>
                                                <td>
                                                    15-06-2024
                                                </td>
                                                <td>
                                                    <span className="badge bg-danger-transparent">High</span>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/12.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/11.jpg" alt="img" />
                                                        </span>
                                                        <Link scroll={false} className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                                            +4
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                    <Button variant="" className="btn btn-primary-light btn-icon btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit"><i className="ri-edit-line"></i></Button>
                                                </OverlayTrigger>
                                                    <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><i className="ri-delete-bin-5-line"></i></Button>
                                                </td>
                                            </tr>
                                            <tr className="task-list">
                                                <td className="task-checkbox"><input className="form-check-input" type="checkbox" value="" aria-label="..."/></td>
                                                <td>
                                                    <span className="fw-medium">Server Side Validation</span>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">SPK - 11</span>
                                                </td>
                                                <td>
                                                    12-06-2024
                                                </td>
                                                <td>
                                                    <span className="fw-medium text-warning">Pending</span>
                                                </td>
                                                <td>
                                                    16-06-2024
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Low</span>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/9.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/13.jpg" alt="img" />
                                                        </span>
                                                        <Link scroll={false} className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                                            +5
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                   <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                    <Button variant="" className="btn btn-primary-light btn-icon btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit"><i className="ri-edit-line"></i></Button>
                                                </OverlayTrigger>
                                                    <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><i className="ri-delete-bin-5-line"></i></Button>
                                                </td>
                                            </tr>
                                            <tr className="task-list">
                                                <td className="task-checkbox"><input className="form-check-input" type="checkbox" value="" aria-label="..."/></td>
                                                <td>
                                                    <span className="fw-medium">New Plugin Development</span>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">SPK - 24</span>
                                                </td>
                                                <td>
                                                    08-06-2024
                                                </td>
                                                <td>
                                                    <span className="fw-medium text-success">Completed</span>
                                                </td>
                                                <td>
                                                    17-06-2024
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Low</span>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                        </span>
                                                        <Link scroll={false} className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                                            +2
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                   <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                    <Button variant="" className="btn btn-primary-light btn-icon btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit"><i className="ri-edit-line"></i></Button>
                                                </OverlayTrigger>
                                                    <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><i className="ri-delete-bin-5-line"></i></Button>
                                                </td>
                                            </tr>
                                            <tr className="task-list">
                                                <td className="task-checkbox"><input className="form-check-input" type="checkbox" value="" aria-label="..." defaultChecked/></td>
                                                <td>
                                                    <span className="fw-medium">Designing New Authentication Page</span>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">SPK - 16</span>
                                                </td>
                                                <td>
                                                    03-06-2024
                                                </td>
                                                <td>
                                                    <span className="fw-medium text-secondary">Inprogress</span>
                                                </td>
                                                <td>
                                                    08-06-2024
                                                </td>
                                                <td>
                                                    <span className="badge bg-secondary-transparent">Medium</span>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/15.jpg" alt="img" />
                                                        </span>
                                                        <Link scroll={false} className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                                            +3
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                   <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                    <Button variant="" className="btn btn-primary-light btn-icon btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit"><i className="ri-edit-line"></i></Button>
                                                </OverlayTrigger>
                                                    <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><i className="ri-delete-bin-5-line"></i></Button>
                                                </td>
                                            </tr>
                                            <tr className="task-list">
                                                <td className="task-checkbox"><input className="form-check-input" type="checkbox" value="" aria-label="..." defaultChecked/></td>
                                                <td>
                                                    <span className="fw-medium">Documentation For New Template</span>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">SPK - 07</span>
                                                </td>
                                                <td>
                                                    12-06-2024
                                                </td>
                                                <td>
                                                    <span className="fw-medium text-primary">New</span>
                                                </td>
                                                <td>
                                                    25-06-2024
                                                </td>
                                                <td>
                                                    <span className="badge bg-danger-transparent">High</span>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/12.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                   <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                    <Button variant="" className="btn btn-primary-light btn-icon btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit"><i className="ri-edit-line"></i></Button>
                                                </OverlayTrigger>
                                                    <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><i className="ri-delete-bin-5-line"></i></Button>
                                                </td>
                                            </tr>
                                            <tr className="task-list">
                                                <td className="task-checkbox"><input className="form-check-input" type="checkbox" value="" aria-label="..."/></td>
                                                <td>
                                                    <span className="fw-medium">Updating Old UI</span>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">SPK - 13</span>
                                                </td>
                                                <td>
                                                    06-06-2024
                                                </td>
                                                <td>
                                                    <span className="fw-medium text-success">Completed</span>
                                                </td>
                                                <td>
                                                    12-06-2024
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Low</span>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/11.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/1.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                                        </span>
                                                        <Link scroll={false} className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                                            +1
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                   <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                    <Button variant="" className="btn btn-primary-light btn-icon btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit"><i className="ri-edit-line"></i></Button>
                                                </OverlayTrigger>
                                                    <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><i className="ri-delete-bin-5-line"></i></Button>
                                                </td>
                                            </tr>
                                            <tr className="task-list">
                                                <td className="task-checkbox"><input className="form-check-input" type="checkbox" value="" aria-label="..." defaultChecked/></td>
                                                <td>
                                                    <span className="fw-medium">Developing New Events In Plugins</span>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">SPK - 20</span>
                                                </td>
                                                <td>
                                                    14-06-2024
                                                </td>
                                                <td>
                                                    <span className="fw-medium text-warning">Pending</span>
                                                </td>
                                                <td>
                                                    19-06-2024
                                                </td>
                                                <td>
                                                    <span className="badge bg-danger-transparent">High</span>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/3.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/9.jpg" alt="img" />
                                                        </span>
                                                        <Link scroll={false} className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                                            +2
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                   <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                    <Button variant="" className="btn btn-primary-light btn-icon btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit"><i className="ri-edit-line"></i></Button>
                                                </OverlayTrigger>
                                                    <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><i className="ri-delete-bin-5-line"></i></Button>
                                                </td>
                                            </tr>
                                            <tr className="task-list">
                                                <td className="task-checkbox"><input className="form-check-input" type="checkbox" value="" aria-label="..."/></td>
                                                <td>
                                                    <span className="fw-medium">Fixing Minor Ui Issues</span>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">SPK - 26</span>
                                                </td>
                                                <td>
                                                    11-06-2024
                                                </td>
                                                <td>
                                                    <span className="fw-medium text-success">Completed</span>
                                                </td>
                                                <td>
                                                    18-06-2024
                                                </td>
                                                <td>
                                                    <span className="badge bg-secondary-transparent">Medium</span>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/14.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/12.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/3.jpg" alt="img" />
                                                        </span>
                                                        <Link scroll={false} className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                                            +1
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                   <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                    <Button variant="" className="btn btn-primary-light btn-icon btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit"><i className="ri-edit-line"></i></Button>
                                                </OverlayTrigger>
                                                    <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><i className="ri-delete-bin-5-line"></i></Button>
                                                </td>
                                            </tr>
                                            <tr className="task-list">
                                                <td className="task-checkbox"><input className="form-check-input" type="checkbox" value="" aria-label="..."/></td>
                                                <td>
                                                    <span className="fw-medium">Designing Of New Ecommerce Website</span>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">SPK - 32</span>
                                                </td>
                                                <td>
                                                    03-06-2024
                                                </td>
                                                <td>
                                                    <span className="fw-medium text-secondary">Inprogress</span>
                                                </td>
                                                <td>
                                                    09-06-2024
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">Low</span>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/12.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/6.jpg" alt="img" />
                                                        </span>
                                                        <Link scroll={false} className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" href="#!">
                                                            +4
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                   <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                    <Button variant="" className="btn btn-primary-light btn-icon btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit"><i className="ri-edit-line"></i></Button>
                                                </OverlayTrigger>
                                                    <Button variant="" className="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"><i className="ri-delete-bin-5-line"></i></Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                            <Card.Footer className="border-top-0">
                                <nav aria-label="Page navigation">
                                    <Pagination className="mb-0 float-end">
                                        <Pagination.Item disabled>Previous</Pagination.Item>
                                        <Pagination.Item>1</Pagination.Item>
                                        <Pagination.Item active>2</Pagination.Item>
                                        <Pagination.Item>3</Pagination.Item>
                                        <Pagination.Item className="pagination-next">Next</Pagination.Item>
                                    </Pagination>
                                </nav>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-2 */}
    </Fragment>
    )
};

export default Listview;