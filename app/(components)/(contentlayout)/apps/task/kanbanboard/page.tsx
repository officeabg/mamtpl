"use client"
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Button, Card, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
const Select = dynamic(() => import("react-select"), {ssr : false});
import DatePicker from "react-datepicker";
import SimpleBar from 'simplebar-react';
//filepond
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
const Kanbanboard = () => {
    
    const leftContainerRef = useRef(null);
    const rightContainerRef = useRef(null);
    const topContainerRef = useRef(null);
    const bottomContainerRef = useRef(null);
    const lastContainerRef = useRef(null);
    useEffect(() => {
        if (typeof window !== "undefined") {
          const dragula = require("dragula");
          const windowElement = window;
    
          if (leftContainerRef.current && rightContainerRef.current) {
            const containers = [
              leftContainerRef.current,
              rightContainerRef.current,
              topContainerRef.current,
              bottomContainerRef.current,
              lastContainerRef.current
            ];
            const drake = dragula(containers);
    
            // Your other dragula-related logic here...
    
            if (document.querySelector(".firstdrag")?.classList.contains("task-Null")) {
              document.querySelector(".view-more-button")?.classList.add("d-none");
            }
          }
    
          OnDivChange();
        }
      }, []);

    const elementsToModify = [
        leftContainerRef,
        rightContainerRef,
        topContainerRef,
        bottomContainerRef,
        lastContainerRef
      ];

      const OnDivChange = ()=>{
          elementsToModify.forEach((elementId) => {
            const element:any  = elementId.current;
            if(element?.children.length <= 0) {
              element?.classList.add("task-Null");
              element?.parentNode.parentElement.parentElement.querySelector(".view-more-button")?.classList.add("d-none");
            }else{
                element?.classList.remove("task-Null");
              element?.parentNode.parentElement.parentElement.querySelector(".view-more-button")?.classList.remove("d-none");
            }
          });
      };

      const Option1 = [
        { value: 'Sort By', label: 'Sort By' },
        { value: 'Newest', label: 'Newest' },
        { value: 'Date Added', label: 'Date Added' },
        { value: 'Type', label: 'Type' },
        { value: 'A - Z', label: 'A - Z' },
    ];
    const Option2 = [
        { value: 'Angelina May', label: 'Angelina May' },
        { value: 'Kiara advain', label: 'Kiara advain' },
        { value: 'Hercules Jhon', label: 'Hercules Jhon' },
        { value: 'Mayor Kim', label: 'Mayor Kim' }
    ];
    const Option3 = [
        { value: 'Select Tag', label: 'Select Tag' },
        { value: 'UI/UX', label: 'UI/UX' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Finance', label: 'Finance' },
        { value: 'Designing', label: 'Designing' },
        { value: 'Admin', label: 'Admin' },
        { value: 'Authentication', label: 'Authentication' },
        { value: 'Product', label: 'Product' },
        { value: 'Development', label: 'Development' }
    ];

//Modals
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    //filepond
    const [files, setFiles] = useState<any>([]);

    //Date
    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date:any) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
return( 
    <Fragment>
            {/* Page Header */}
                <Seo title={"Kanban Board"} />
                <Pageheader Heading="Kanban Board" Pages={[{title:"Apps", active:true},{title:"Task", active:true},{title:"Kanban Board", active:false}]} />
            {/* Page Header Close */}

                {/* Start:: row-1 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Body className="p-3">
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                    <div className="row kanban-board">
                                        <Col xl={5}>
                                            <Button variant="" onClick={handleShow} className="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#add-board"><i className="ri-add-line me-1 fw-medium align-middle"></i>New Board</Button>
                                        </Col>
                                        <div className="col-xl-7 mt-2 my-xxl-0">
                                        <Select  name="colors" options={Option1} className="w-full !rounded-md"
                                                menuPlacement='auto' classNamePrefix="Select2"
                                            />
                                        </div>
                                    </div>
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
                                        <span className="avatar avatar-rounded">
                                            <img src="../../../assets/images/faces/4.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-rounded">
                                            <img src="../../../assets/images/faces/13.jpg" alt="img" />
                                        </span>
                                        <Link scroll={false} className="avatar bg-primary avatar-rounded text-fixed-white" href="#!">
                                            +8
                                        </Link>
                                    </div>
                                    <div className="d-flex" role="search">
                                        <Form.Control className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                        <Button variant="" className="btn btn-light" type="submit">Search</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-1 */}

                {/* Start::row-2 */}
                <div className="MAMIX-kanban-board">
                    <div className="kanban-tasks-type new">
                        <div className="pe-3 mb-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="d-block fw-medium fs-15">NEW - 04</span>
                                <div>
                                    <Link scroll={false} onClick={handleShow1} aria-label="anchor" href="#!" className="btn btn-sm bg-white text-default border btn-wave" data-bs-toggle="modal" data-bs-target="#add-task">
                                        <i className="ri-add-line align-middle me-1 fw-medium"></i>Add Task
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* <SimpleBar> */}
                        <SimpleBar className="kanban-tasks" id="new-tasks">
                            <div  ref={leftContainerRef} onMouseEnter={OnDivChange} id="new-tasks-draggable" data-view-btn="new-tasks">
                                <Card className="custom-card">
                                    <Card.Body className="p-0">
                                        <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-medium">
                                                <div><i className="ri-time-line me-1 align-middle d-inline-block"></i>Created - 28 May</div>
                                                <div>2 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="task-badges"><span className="badge bg-white text-default border">#SPK - 11</span><span className="ms-1 badge bg-outline-primary">UI/UX</span></div>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fe fe-more-vertical"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu-end">
                                                        <li><Dropdown.Item href="#!"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item></li>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="kanban-content mt-2">
                                                <h6 className="fw-medium mb-1 fs-15">New Dashboard design.</h6>
                                                <div className="kanban-task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit, Nulla soluta consectetur sit amet elit dolor sit amet.</div>
                                            </div>
                                        </div>
                                        <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <Link scroll={false} href="#!" className="me-2 text-primary">
                                                        <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-medium fs-12">12</span>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="text-muted">
                                                        <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-medium fs-12">02</span>
                                                    </Link>
                                                </div>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/11.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/12.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/7.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card">
                                    <Card.Body className="p-0">
                                        <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-medium">
                                                <div><i className="ri-time-line me-1 align-middle d-inline-block"></i>Created - 30 May</div>
                                                <div>2 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="task-badges"><span className="badge bg-white text-default border">#SPK - 05</span><span className="ms-1 badge bg-outline-secondary">Marketing</span><span className="ms-1 badge bg-outline-warning">Finance</span></div>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fe fe-more-vertical"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu-end">
                                                        <li><Dropdown.Item href="#!"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item></li>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="kanban-content mt-2">
                                                <h6 className="fw-medium mb-1 fs-15">Marketing next projects.</h6>
                                                <div className="kanban-task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta </div>
                                            </div>
                                        </div>
                                        <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <Link scroll={false} href="#!" className="me-2 text-primary">
                                                        <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-medium fs-12">40</span>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="text-muted">
                                                        <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-medium fs-12">08</span>
                                                    </Link>
                                                </div>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/13.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/6.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card">
                                    <Card.Body className="p-0">
                                        <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-medium">
                                                <div><i className="ri-time-line me-1 align-middle d-inline-block"></i>Created - 02 Jun</div>
                                                <div>1 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="task-badges"><span className="badge bg-white text-default border">#SPK - 08</span><span className="ms-1 badge bg-outline-success">Designing</span></div>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fe fe-more-vertical"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu-end">
                                                        <li><Dropdown.Item href="#!"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item></li>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="kanban-content mt-2">
                                                <div className="task-image mt-2">
                                                    <img src="../../../assets/images/media/media-36.jpg" className="img-fluid rounded kanban-image" alt=""/>
                                                </div>
                                                <h6 className="fw-medium mb-0 mt-2">Design multi usage landing.</h6>
                                            </div>
                                        </div>
                                        <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <Link scroll={false} href="#!" className="me-2 text-primary">
                                                        <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-medium fs-12">16</span>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="text-muted">
                                                        <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-medium fs-12">28</span>
                                                    </Link>
                                                </div>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </SimpleBar>
                        {/* </SimpleBar> */}
                        <div className="d-grid view-more-button mt-3">
                            <Button variant="" className="btn btn-primary-light btn-wave">View More</Button>
                        </div>
                    </div>
                    <div className="kanban-tasks-type todo">
                        <div className="pe-3 mb-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="d-block fw-medium fs-15">TODO - 36</span>
                                <div>
                                    <Link scroll={false} onClick={handleShow1} aria-label="anchor" href="#!" className="btn btn-sm bg-white text-default border btn-wave" data-bs-toggle="modal" data-bs-target="#add-task">
                                        <i className="ri-add-line align-middle me-1 fw-medium"></i>Add Task
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <SimpleBar className="kanban-tasks" id="todo-tasks">
                            <div id="todo-tasks-draggable" data-view-btn="todo-tasks" ref={rightContainerRef}  onMouseEnter={OnDivChange}>
                                <Card className="custom-card">
                                    <Card.Body className="p-0">
                                        <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-medium">
                                                <div><i className="ri-time-line me-1 align-middle d-inline-block"></i>Created - 01 Jun</div>
                                                <div>10 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="task-badges"><span className="badge bg-white text-default border">#SPK - 07</span><span className="ms-1 badge bg-outline-danger">Admin</span><span className="ms-1 badge bg-white border text-default">Authentication</span></div>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fe fe-more-vertical"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu-end">
                                                        <li><Dropdown.Item href="#!"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item></li>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="kanban-content mt-2">
                                                <h6 className="fw-medium mb-1 fs-15">Adding Authentication Pages.</h6>
                                                <div className="kanban-task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta </div>
                                            </div>
                                        </div>
                                        <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <Link scroll={false} href="#!" className="me-2 text-primary">
                                                        <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-medium fs-12">06</span>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="text-muted">
                                                        <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-medium fs-12">02</span>
                                                    </Link>
                                                </div>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/9.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/14.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card">
                                    <Card.Body className="p-0">
                                        <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-medium">
                                                <div><i className="ri-time-line me-1 align-middle d-inline-block"></i>Created - 05 Jun</div>
                                                <div>14 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="task-badges"><span className="badge bg-white text-default border">#SPK - 15</span><span className="ms-1 badge bg-outline-success">Planning</span></div>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fe fe-more-vertical"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu-end">
                                                        <li><Dropdown.Item href="#!"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item></li>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="kanban-content mt-2">
                                                <div className="task-image mt-2">
                                                    <img src="../../../assets/images/media/media-41.jpg" className="img-fluid rounded kanban-image" alt=""/>
                                                </div>
                                                <h6 className="fw-medium mb-0 mt-2">New Project Discussion.</h6>
                                            </div>
                                        </div>
                                        <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <Link scroll={false} href="#!" className="me-2 text-primary">
                                                        <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-medium fs-12">17</span>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="text-muted">
                                                        <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-medium fs-12">06</span>
                                                    </Link>
                                                </div>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </SimpleBar>
                        <div className="d-grid view-more-button mt-3">
                            <Button variant="" className="btn btn-primary-light btn-wave">View More</Button>
                        </div>
                    </div>
                    <div className="kanban-tasks-type in-progress">
                        <div className="pe-3 mb-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="d-block fw-medium fs-15">ON GOING - 25</span>
                                <div>
                                    <Link scroll={false} aria-label="anchor"  onClick={handleShow1} href="#!" className="btn btn-sm bg-white text-default border btn-wave" data-bs-toggle="modal" data-bs-target="#add-task">
                                        <i className="ri-add-line align-middle me-1 fw-medium"></i>Add Task
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <SimpleBar className="kanban-tasks" id="inprogress-tasks">
                            <div ref={topContainerRef} onMouseEnter={OnDivChange} id="inprogress-tasks-draggable" data-view-btn="inprogress-tasks">
                                <Card className="custom-card">
                                    <Card.Body className="p-0">
                                        <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-medium">
                                                <div><i className="ri-time-line me-1 align-middle d-inline-block"></i>Created - 02 Jun</div>
                                                <div>5 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="task-badges"><span className="badge bg-white text-default border">#SPK - 13</span><span className="ms-1 badge bg-outline-primary">UI Design</span><span className="ms-1 badge bg-outline-danger">Development</span></div>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fe fe-more-vertical"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu-end">
                                                        <li><Dropdown.Item href="#!"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item></li>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="kanban-content mt-2">
                                                <h6 className="fw-medium mb-1 fs-15">Create Calendar & Mail pages.</h6>
                                                <div className="kanban-task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta </div>
                                            </div>
                                        </div>
                                        <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <Link scroll={false} href="#!" className="me-2 text-primary">
                                                        <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-medium fs-12">05</span>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="text-muted">
                                                        <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-medium fs-12">13</span>
                                                    </Link>
                                                </div>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/13.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/6.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card">
                                    <Card.Body className="p-0">
                                        <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-medium">
                                                <div><i className="ri-time-line me-1 align-middle d-inline-block"></i>Created - 03 Jun</div>
                                                <div>12 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="task-badges"><span className="badge bg-light text-default ms-1">#SPK - 09</span><span className="ms-1 badge bg-outline-info">Product</span></div>
                                                <Dropdown> 
                                                    <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fe fe-more-vertical"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu-end">
                                                        <li><Dropdown.Item href="#!"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item></li>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="kanban-content mt-2">
                                                <h6 className="fw-medium mb-1 fs-15">Project design Figma,Sketch.</h6>
                                                <div className="kanban-task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta </div>
                                            </div>
                                        </div>
                                        <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <Link scroll={false} href="#!" className="me-2 text-primary">
                                                        <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-medium fs-12">02</span>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="text-muted">
                                                        <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-medium fs-12">0</span>
                                                    </Link>
                                                </div>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/12.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </SimpleBar>
                        <div className="d-grid view-more-button mt-3">
                            <Button variant="" className="btn btn-primary-light btn-wave">View More</Button>
                        </div>
                    </div>
                    <div className="kanban-tasks-type inreview">
                        <div className="pe-3 mb-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="d-block fw-medium fs-15">IN REVIEW - 02</span>
                                <div>
                                    <Link scroll={false} aria-label="anchor" onClick={handleShow1} href="#!" className="btn btn-sm bg-white text-default border btn-wave" data-bs-toggle="modal" data-bs-target="#add-task">
                                        <i className="ri-add-line align-middle me-1 fw-medium"></i>Add Task
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <SimpleBar className="kanban-tasks" id="inreview-tasks">
                            <div id="inreview-tasks-draggable" data-view-btn="inreview-tasks" ref={bottomContainerRef} onMouseEnter={OnDivChange}>
                                <Card className="custom-card">
                                    <Card.Body className="p-0">
                                        <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-medium">
                                                <div><i className="ri-time-line me-1 align-middle d-inline-block"></i>Created - 05 Jun</div>
                                                <div>14 days left</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="task-badges"><span className="badge bg-white text-default border">#SPK - 15</span><span className="ms-1 badge bg-purple-transparent">Review</span></div>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fe fe-more-vertical"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu-end">
                                                        <li><Dropdown.Item href="#!"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item></li>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="kanban-content mt-2">
                                                <div className="task-image mt-2">
                                                    <img src="../../../assets/images/media/media-43.jpg" className="img-fluid rounded kanban-image" alt=""/>
                                                </div>
                                                <h6 className="fw-medium mb-0 mt-2">Design Architecture strategy.</h6>
                                            </div>
                                        </div>
                                        <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <Link scroll={false} href="#!" className="me-2 text-primary">
                                                        <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-medium fs-12">09</span>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="text-muted">
                                                        <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-medium fs-12">35</span>
                                                    </Link>
                                                </div>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/3.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/7.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </SimpleBar>
                        <div className="d-grid view-more-button mt-3">
                            <Button variant="" className="btn btn-primary-light btn-wave">View More</Button>
                        </div>
                    </div>
                    <div className="kanban-tasks-type completed">
                        <div className="pe-3 mb-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="d-block fw-medium fs-15">COMPLETED - 36</span>
                                <div>
                                    <Link scroll={false} aria-label="anchor" href="#!" onClick={handleShow1} className="btn btn-sm bg-white text-default border btn-wave" data-bs-toggle="modal" data-bs-target="#add-task">
                                        <i className="ri-add-line align-middle me-1 fw-medium"></i>Add Task
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <SimpleBar className="kanban-tasks" id="completed-tasks">
                            <div id="completed-tasks-draggable" ref={lastContainerRef} onMouseEnter={OnDivChange} data-view-btn="completed-tasks">
                                <Card className="custom-card">
                                    <Card.Body className="p-0">
                                        <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-medium">
                                                <div><i className="ri-time-line me-1 align-middle d-inline-block"></i>Created - 12 Jun</div>
                                                <div className="text-success"><i className="ri-check-fill me-1 align-middle d-inline-block"></i>Done</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="task-badges"><span className="badge bg-white text-default border">#SPK - 04</span><span className="ms-1 badge bg-outline-success">UI/UX</span></div>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fe fe-more-vertical"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu-end">
                                                        <li><Dropdown.Item href="#!"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item></li>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="kanban-content mt-2">
                                                <h6 className="fw-medium mb-1 fs-15">Sash project update.</h6>
                                                <div className="kanban-task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta </div>
                                            </div>
                                        </div>
                                        <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <Link scroll={false} href="#!" className="me-2 text-primary">
                                                        <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-medium fs-12">18</span>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="text-muted">
                                                        <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-medium fs-12">03</span>
                                                    </Link>
                                                </div>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/6.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/13.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card">
                                    <Card.Body className="p-0">
                                        <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-medium">
                                                <div><i className="ri-time-line me-1 align-middle d-inline-block"></i>Created - 10 Jun</div>
                                                <div className="text-success"><i className="ri-check-fill me-1 align-middle d-inline-block"></i>Done</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="task-badges"><span className="badge bg-white text-default border">#SPK - 10</span><span className="ms-1 badge bg-outline-info">Development</span></div>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fe fe-more-vertical"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu-end">
                                                        <li><Dropdown.Item href="#!"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item></li>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="kanban-content mt-2">
                                                <h6 className="fw-medium mb-1 fs-15">React JS new version update.</h6>
                                                <div className="kanban-task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta </div>
                                            </div>
                                        </div>
                                        <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <Link scroll={false} href="#!" className="me-2 text-primary">
                                                        <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-medium fs-12">22</span>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="text-muted">
                                                        <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-medium fs-12">12</span>
                                                    </Link>
                                                </div>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/11.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/1.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card">
                                    <Card.Body className="p-0">
                                        <div className="p-3 kanban-board-head">
                                            <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-medium">
                                                <div><i className="ri-time-line me-1 align-middle d-inline-block"></i>Created - 07 Jun</div>
                                                <div className="text-success"><i className="ri-check-fill me-1 align-middle d-inline-block"></i>Done</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="task-badges"><span className="badge bg-white text-default border">#SPK - 16</span><span className="ms-1 badge bg-outline-primary">Discussion</span></div>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fe fe-more-vertical"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu-end">
                                                        <li><Dropdown.Item href="#!"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                                        <li><Dropdown.Item href="#!"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item></li>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="kanban-content mt-2">
                                                <div className="task-image mt-2">
                                                    <img src="../../../assets/images/media/media-69.jpg" className="img-fluid rounded kanban-image bg-light" alt=""/>
                                                </div>
                                                <h6 className="fw-medium mb-0 mt-2">Project discussion with client.</h6>
                                            </div>
                                        </div>
                                        <div className="p-3 border-top border-block-start-dashed">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <Link scroll={false} href="#!" className="me-2 text-primary">
                                                        <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-medium fs-12">11</span>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="text-muted">
                                                        <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-medium fs-12">05</span>
                                                    </Link>
                                                </div>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/4.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </SimpleBar>
                        <div className="d-grid view-more-button mt-3">
                            <Button variant="" className="btn btn-primary-light btn-wave">View More</Button>
                        </div>
                    </div>
                </div>
                {/*End::row-2 */}

                {/* Start::add board modal */}
                <Modal  centered show={show} onHide={handleClose} className="fade" id="add-board" tabIndex={-1} aria-hidden="true">
                    <Modal.Header closeButton className="">
                        <h6 className="modal-title">Add Board</h6>
                    </Modal.Header>
                    <Modal.Body className="px-4">
                        <Row>
                            <Col xl={12}>
                                <Form.Label htmlFor="board-title" className="form-label">Task Board Title</Form.Label>
                                <Form.Control type="text" className="form-control" id="board-title" placeholder="Board Title"/>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer className="">
                        <Button variant="" type="button" className="btn btn-light" onClick={handleClose}
                            data-bs-dismiss="modal">Cancel</Button>
                        <Button variant="" type="button" className="btn btn-primary">Add Board</Button>
                    </Modal.Footer>
                </Modal>
                {/* End::add board modal */}

                {/* Start::add task modal */}
                <Modal show={show1} onHide={handleClose1} className="fade" id="add-task" tabIndex={-1} aria-hidden="true">
                    <Modal.Header closeButton className="">
                        <h6 className="modal-title">Add Task</h6>
                    </Modal.Header>
                    <Modal.Body className="px-4">
                        <div className="row gy-2">
                            <Col xl={6}>
                                <Form.Label htmlFor="task-name" className="form-label">Task Name</Form.Label>
                                <Form.Control type="text" className="form-control" id="task-name" placeholder="Task Name"/>
                            </Col>
                            <Col xl={6}>
                                <Form.Label htmlFor="task-id" className="form-label">Task ID</Form.Label>
                                <Form.Control type="text" className="form-control" id="task-id" placeholder="Task ID"/>
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="text-area" className="form-label">Task Description</Form.Label>
                                <Form.Control  as="textarea" className="form-control" id="text-area" rows={2} placeholder="Write Description"></Form.Control>
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="text-area" className="form-label">Task Images</Form.Label>
                                <FilePond
                                files={files}
                                onupdatefiles={setFiles}
                                allowMultiple={true}
                                maxFiles={3}
                                server="/api"
                                name="files" /* sets the file input name, it's filepond by default */
                                labelIdle='Drag & Drop your file here or click '
                            />
                            </Col>
                            <Col xl={12}>
                                <Form.Label>Assigned To</Form.Label>
                                <Select isMulti name="colors" options={Option2} className=""
                                menuPlacement='auto' classNamePrefix="Select2"
                            />
                            </Col>
                            <Col xl={6}>
                                <Form.Label>Target Date</Form.Label>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                        <DatePicker
                                        selected={startDate} 
                                        onChange={handleDateChange}
                                        timeInputLabel="Time:"
                                        dateFormat="MM/dd/yyyy h:mm aa"
                                        showTimeInput
                                        placeholderText='Choose date and time'
                                    />
                                    </div>
                                </div>
                            </Col>
                            <Col xl={6}>
                                <Form.Label>Tags</Form.Label>
                                <Select isMulti name="colors" options={Option3} className="w-full !rounded-md"
                                menuPlacement='top' classNamePrefix="Select2"
                            />
                            </Col>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="">
                        <Button variant="" type="button" className="btn btn-light" onClick={handleClose1}
                            data-bs-dismiss="modal">Cancel</Button>
                        <Button variant="" type="button" className="btn btn-primary">Add Task</Button>
                    </Modal.Footer>
                </Modal>
                {/* End::add task modal */}
    </Fragment>
    )
};

export default Kanbanboard;