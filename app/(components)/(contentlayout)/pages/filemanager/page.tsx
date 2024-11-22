"use client"
import { Folderdata, Recentdata } from "@/shared/data/pages/filemanagerdata";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Dropdown, Modal, Offcanvas, Pagination, ProgressBar, Row } from "react-bootstrap";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Filemanagerdata from '@/shared/data/pages/filemanagerdata';
import SimpleBar from "simplebar-react";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";

const Filemanager = () => {

    //create Folder Modal
    const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

    //create File Modal

    const [show1, setShow1] = useState(false);

	const handleClose1 = () => setShow1(false);
	const handleShow1 = () => setShow1(true);

    //Offcanvas
    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
  
return (
<Fragment>
                {/* Page Header */}
                     <Seo title={"File Manager"} />
                    <Pageheader Heading="File Manager" Pages={[{title:"Pages", active:true},{title:"File Manager", active:false},]} />
                {/* Page Header Close */}

                    {/* Start:: row-1 */}
                    <Row>
                        <Col xxl={3} xl={4}>
                            <Row>
                                <Col xl={12}>
                                    <Card className="custom-card">
                                        <Card.Body>
                                            <SimpleBar className="files-main-nav" id="files-main-nav">
                                            <ul className="list-unstyled files-main-nav " >
                                                <li className="active files-type">
                                                    <Link href="#!" scroll={false}>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <i className="ri-folder-2-line fs-16"></i>
                                                            </div>
                                                            <span className="flex-fill text-nowrap">
                                                                My Files
                                                            </span>
                                                            <span className="badge bg-primary">322</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className="files-type">
                                                    <Link href="#!" scroll={false}>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <i className="ri-star-s-line fs-16"></i>
                                                            </div>
                                                            <span className="flex-fill text-nowrap">
                                                                favourites
                                                            </span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className="files-type">
                                                    <Link href="#!" scroll={false}>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <i className="ri-share-forward-line fs-16"></i>
                                                            </div>
                                                            <span className="flex-fill text-nowrap">
                                                                Shared Files
                                                            </span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className="files-type">
                                                    <Link href="#!" scroll={false}>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <i className="ri-delete-bin-line fs-16"></i>
                                                            </div>
                                                            <span className="flex-fill text-nowrap">
                                                                Recycle Bin
                                                            </span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className="files-type">
                                                    <Link href="#!" scroll={false}>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <i className="ri-history-fill fs-16"></i>
                                                            </div>
                                                            <span className="flex-fill text-nowrap">
                                                                Recent Files
                                                            </span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#!" scroll={false}>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <i className="ri-settings-3-line fs-16"></i>
                                                            </div>
                                                            <span className="flex-fill text-nowrap">
                                                                Settings
                                                            </span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#!" scroll={false}>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <i className="ri-questionnaire-line fs-16"></i>
                                                            </div>
                                                            <span className="flex-fill text-nowrap">
                                                                Help Center
                                                            </span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#!" scroll={false}>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <i className="ri-folder-line fs-16"></i>
                                                            </div>
                                                            <span className="flex-fill text-nowrap">
                                                                Version
                                                            </span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#!" scroll={false}>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <i className="ri-logout-box-line fs-16"></i>
                                                            </div>
                                                            <span className="flex-fill text-nowrap">
                                                                Log out
                                                            </span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li> 
                                                    <div className="d-flex align-items-start gap-3">
                                                        <div>
                                                            <span className="avatar avatar-md bg-info-transparent svg-info">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><ellipse cx="128" cy="80" rx="88" ry="48" opacity="0.2"/><ellipse cx="128" cy="80" rx="88" ry="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M40,80v48c0,26.51,39.4,48,88,48s88-21.49,88-48V80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M40,128v48c0,26.51,39.4,48,88,48s88-21.49,88-48V128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <div className=" mb-2"> 
                                                                <p className="mb-0"><span className="fw-bold fs-14">69.42GB</span> Used</p>
                                                                <p className="fs-12 text-muted mb-0">58% Used - 51.04Gb free</p>
                                                            </div>
                                                            <ProgressBar variant="info" striped animated className="progress-xs  bg-info" now={58}  />
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            </SimpleBar>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={12}>
                                    <Card className="custom-card overflow-hidden">
                                        <Card.Body>
                                            <div id="file-manager-storage">
                                                <ReactApexChart options={Filemanagerdata.Filemanagermedia.options} series={Filemanagerdata.Filemanagermedia.series} type="donut" width={"100%"} height={250} />
                                            </div>
                                        </Card.Body>
                                        <Card.Footer className="p-0">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="main-card-icon primary">
                                                            <div className="avatar avatar-lg bg-primary-transparent border border-primary border-opacity-10">
                                                                <div className="avatar avatar-sm svg-white">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M97.66,114.34,147.31,164h0L173,138.34a8,8,0,0,1,11.31,0L224,178.06V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V168.69l54.34-54.35A8,8,0,0,1,97.66,114.34Z" opacity="0.2"/><rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="156" cy="100" r="12"/><path d="M147.31,164,173,138.34a8,8,0,0,1,11.31,0L224,178.06" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0L191.31,208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span className="fw-medium">Media</span>
                                                            <span className="text-muted fs-12 d-block">2,872 files</span>
                                                        </div>
                                                        <div>
                                                            <span className="fw-medium text-primary mb-0 fs-14">35GB</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="main-card-icon secondary">
                                                            <div className="avatar avatar-lg bg-secondary-transparent border border-secondary border-opacity-10">
                                                                <div className="avatar avatar-sm svg-white">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="24" y="128" width="208" height="80" rx="8" opacity="0.2"/><path d="M184,128h40a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H72" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="24" x2="128" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><polyline points="80 80 128 128 176 80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="188" cy="168" r="12"/></svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span className="fw-medium">Downloads</span>
                                                            <span className="text-muted fs-12 d-block">644 files</span>
                                                        </div>
                                                        <div>
                                                            <span className="fw-medium text-secondary mb-0 fs-14">34GB</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="main-card-icon success">
                                                            <div className="avatar avatar-lg bg-success-transparent border border-success border-opacity-10">
                                                                <div className="avatar avatar-sm svg-white">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="48" y="48" width="64" height="64" rx="8" opacity="0.2"/><rect x="144" y="48" width="64" height="64" rx="8" opacity="0.2"/><rect x="48" y="144" width="64" height="64" rx="8" opacity="0.2"/><rect x="144" y="144" width="64" height="64" rx="8" opacity="0.2"/><rect x="144" y="144" width="64" height="64" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><rect x="48" y="48" width="64" height="64" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><rect x="144" y="48" width="64" height="64" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><rect x="48" y="144" width="64" height="64" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span className="fw-medium">Apps</span>
                                                            <span className="text-muted fs-12 d-block">64 files</span>
                                                        </div>
                                                        <div>
                                                            <span className="fw-medium text-success mb-0 fs-14">26GB</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div className="main-card-icon orange">
                                                            <div className="avatar avatar-lg bg-orange-transparent border border-orange border-opacity-10">
                                                                <div className="avatar avatar-sm svg-white">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="152 32 152 88 208 88 152 32" opacity="0.2"/><path d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span className="fw-medium">Documents</span>
                                                            <span className="text-muted fs-12 d-block">3,271 files</span>
                                                        </div>
                                                        <div>
                                                            <span className="fw-medium text-orange mb-0 fs-14">29GB </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                                <Col xl={12}>
                                    <Card className="custom-card border-0 shadow-none bg-primary-transparent">
                                        <Card.Body>
                                            <div className="filemanager-upgrade-storage w-100 text-center"> 
                                                <span className="d-block mb-3"> <img src="../../assets/images/media/file-manager/2.png" alt="" /> </span>
                                                <span className="fs-15 fw-semibold text-default">Upgrade To PRO</span>
                                                <span className="fs-12 fw-medium d-block text-muted mt-2">Upgrade to Pro for lightning-fast transfers, enhanced security, unlimited storage</span> 
                                                <div className="mt-3 d-grid"> <button className="btn btn-lg btn-primary-gradient btn-wave">Upgrade Now</button> 
                                                </div> 
                                            </div> 
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col xxl={9} xl={8} className="">
                            <Card className="custom-card overflow-hidden">
                                <Card.Body className="p-0">
                                    <div className="file-manager-folders">
                                        <div className="d-flex p-3 flex-wrap gap-2 align-items-center justify-content-between border-bottom">
                                            <div className="flex-fill">
                                                <h6 className="fw-medium mb-0">Folders</h6>
                                            </div>
                                            <div className="d-flex gap-2 flex-wrap justify-content-sm-end w-75">
                                                <input className="form-control form-control-sm w-50" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                                <Button variant="" className="btn btn-sm btn-primary btn-w-md d-flex align-items-center justify-content-center btn-wave waves-light" onClick={handleShow}
                                                    data-bs-toggle="modal" data-bs-target="#create-folder">
                                                    <i className="ri-add-circle-line align-middle me-1"></i>Create Folder
                                                </Button>
                                                <Modal centered show={show} onHide={handleClose} className="modal fade" id="create-folder" tabIndex={-1}
                                                                aria-labelledby="create-folder" data-bs-keyboard="false"
                                                                aria-hidden="true">
                                                            <Modal.Header closeButton>
                                                                <h6 className="modal-title" id="staticBackdropLabel">Create Folder
                                                                </h6>
                                                            </Modal.Header>
                                                            <Modal.Body>
                                                                <label htmlFor="create-folder1" className="form-label">Folder Name</label>
                                                                <input type="text" className="form-control" id="create-folder1" placeholder="Folder Name"/>
                                                            </Modal.Body>
                                                            <Modal.Footer>
                                                                <Button variant=""  onClick={handleClose}  type="button" className="btn btn-sm btn-icon btn-light"
                                                                    data-bs-dismiss="modal"><i className="ri-close-fill"></i></Button>
                                                                <Button variant="" type="button" className="btn btn-sm btn-success">Create</Button>
                                                            </Modal.Footer>
                                                </Modal>
                                                <Button variant="" className="btn btn-sm btn-outline-secondary btn-w-md d-flex align-items-center justify-content-center btn-wave waves-light" onClick={handleShow1}
                                                    data-bs-toggle="modal" data-bs-target="#create-file">
                                                    <i className="ri-add-circle-line align-middle me-1"></i>Create File
                                                </Button>
                                                <Modal centered show={show1} onHide={handleClose1} className="modal fade" id="create-file" tabIndex={-1}
                                                                aria-labelledby="create-file" data-bs-keyboard="false"
                                                                aria-hidden="true">
                                                            <Modal.Header className="modal-header" closeButton>
                                                                <h6 className="modal-title" id="staticBackdropLabel1">Create File
                                                                </h6>
                                                            </Modal.Header>
                                                            <Modal.Body>
                                                                <label htmlFor="create-file1" className="form-label">File Name</label>
                                                                <input type="text" className="form-control" id="create-file1" placeholder="File Name"/>
                                                            </Modal.Body>
                                                            <Modal.Footer>
                                                                <Button variant="" type="button" className="btn btn-sm btn-icon btn-light"  onClick={handleClose1}
                                                                    data-bs-dismiss="modal"><i className="ri-close-fill"></i></Button>
                                                                <Button variant="" type="button" className="btn btn-sm btn-success">Create</Button>
                                                            </Modal.Footer>
                                                </Modal>
                                            </div>
                                        </div>
                                        <div className="p-3 file-folders-container">
                                            <div className="d-flex mb-3 align-items-center justify-content-between">
                                                <p className="mb-0 fw-medium fs-14">Quick Access</p>
                                                <Link href="#!" scroll={false} className="fs-12 text-muted fw-medium"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                                                    <div className="card custom-card shadow-none">
                                                        <Card.Body>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="main-card-icon primary">
                                                                    <div className="avatar avatar-lg bg-primary-transparent border border-primary border-opacity-10">
                                                                        <div className="avatar avatar-sm svg-white">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="156" cy="100" r="12"/><path d="M147.31,164,173,138.34a8,8,0,0,1,11.31,0L224,178.06" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0L191.31,208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-fill">
                                                                    <Link href="#!" scroll={false} className="d-block fw-medium">Images</Link>
                                                                    <span className="fs-12 text-muted">26% Used</span>
                                                                </div>
                                                                <div className="text-end">
                                                                    <span className="d-block fs-12 fw-medium">36.65GB</span>
                                                                    <span className="fs-12 text-muted">357 files</span>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                                                    <div className="card custom-card shadow-none">
                                                        <Card.Body>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="main-card-icon secondary">
                                                                    <div className="avatar avatar-lg bg-secondary-transparent border border-secondary border-opacity-10">
                                                                        <div className="avatar avatar-sm svg-white">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="160 112 112 80 112 144 160 112" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><rect x="32" y="48" width="192" height="128" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="32" y1="208" x2="224" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-fill">
                                                                    <Link href="#!" scroll={false} className="d-block fw-medium">Videos</Link>
                                                                    <span className="fs-12 text-muted">18% Used</span>
                                                                </div>
                                                                <div className="text-end">
                                                                    <span className="d-block fs-12 fw-medium">18.12GB</span>
                                                                    <span className="fs-12 text-muted">224 files</span>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                                                    <div className="card custom-card shadow-none">
                                                        <Card.Body>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="main-card-icon success">
                                                                    <div className="avatar avatar-lg bg-success-transparent border border-success border-opacity-10">
                                                                        <div className="avatar avatar-sm svg-white">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M224,136H192a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V136a96,96,0,1,0-192,0v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V152a16,16,0,0,0-16-16H32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-fill">
                                                                    <Link href="#!" scroll={false} className="d-block fw-medium">Audio</Link>
                                                                    <span className="fs-12 text-muted">33% Used</span>
                                                                </div>
                                                                <div className="text-end">
                                                                    <span className="d-block fs-12 fw-medium">38.55GB</span>
                                                                    <span className="fs-12 text-muted">455 files</span>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                                                    <div className="card custom-card shadow-none">
                                                        <Card.Body>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="main-card-icon orange">
                                                                    <div className="avatar avatar-lg bg-orange-transparent border border-orange border-opacity-10">
                                                                        <div className="avatar avatar-sm svg-white">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="48" y="48" width="64" height="64" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><rect x="144" y="48" width="64" height="64" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><rect x="48" y="144" width="64" height="64" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><rect x="144" y="144" width="64" height="64" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-fill">
                                                                    <Link href="#!" scroll={false} className="d-block fw-medium">Apps</Link>
                                                                    <span className="fs-12 text-muted">51% Used</span>
                                                                </div>
                                                                <div className="text-end">
                                                                    <span className="d-block fs-12 fw-medium">65.23GB</span>
                                                                    <span className="fs-12 text-muted">16 files</span>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                                                    <div className="card custom-card shadow-none">
                                                        <Card.Body>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="main-card-icon info">
                                                                    <div className="avatar avatar-lg bg-info-transparent border border-info border-opacity-10">
                                                                        <div className="avatar avatar-sm svg-white">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M36,152v56H52a28,28,0,0,0,0-56Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M216,200.87A22.12,22.12,0,0,1,200,208c-13.26,0-24-12.54-24-28s10.74-28,24-28a22.12,22.12,0,0,1,16,7.13" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M48,112V40a8,8,0,0,1,8-8h96l56,56v24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><ellipse cx="128" cy="180" rx="24" ry="28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-fill">
                                                                    <Link href="#!" scroll={false} className="d-block fw-medium">Docs</Link>
                                                                    <span className="fs-12 text-muted">11% Used</span>
                                                                </div>
                                                                <div className="text-end">
                                                                    <span className="d-block fs-12 fw-medium">6.63GB</span>
                                                                    <span className="fs-12 text-muted">45 files</span>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                                                    <div className="card custom-card shadow-none">
                                                        <Card.Body>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="main-card-icon warning">
                                                                    <div className="avatar avatar-lg bg-warning-transparent border border-warning border-opacity-10">
                                                                        <div className="avatar avatar-sm svg-white">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M184,128h40a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H72" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="24" x2="128" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><polyline points="80 80 128 128 176 80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="188" cy="168" r="12"/></svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-fill">
                                                                    <Link href="#!" scroll={false} className="d-block fw-medium">Downloads</Link>
                                                                    <span className="fs-12 text-muted">4% Used</span>
                                                                </div>
                                                                <div className="text-end">
                                                                    <span className="d-block fs-12 fw-medium">2.24GB</span>
                                                                    <span className="fs-12 text-muted">8 files</span>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex mb-3 align-items-center justify-content-between">
                                                <p className="mb-0 fw-medium fs-14">Folders</p>
                                                <Link href="#!" scroll={false} className="fs-12 text-muted fw-medium"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                            </div>
                                            <div className="row mb-3">
                                                {Folderdata.map((idx)=>(
                                                    <Col xxl={3} xl={6} lg={6} md={6} key={Math.random()}>
                                                        <div className="card custom-card shadow-none">
                                                            <Card.Body>
                                                                <div className="mb-4 folder-svg-container d-flex flex-wrap justify-content-between align-items-top">
                                                                    <div className="svg-warning text-warning">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M69.77,112H208V88a8,8,0,0,0-8-8H130.67a8,8,0,0,1-4.8-1.6L98.13,57.6a8,8,0,0,0-4.8-1.6H40a8,8,0,0,0-8,8V208l30.18-90.53A8,8,0,0,1,69.77,112Z" opacity="0.2"/><path d="M32,208V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M32,208l30.18-90.53A8,8,0,0,1,69.77,112H232a8,8,0,0,1,7.59,10.53L211.09,208Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                                    </div>
                                                                    <div>
                                                                        <Dropdown className="custom-dropdown">
                                                                            <Dropdown.Toggle variant="" href="#!" className="no-caret p-0" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                <i className="ri-more-2-fill fw-semibold text-muted"></i>
                                                                            </Dropdown.Toggle>
                                                                            <Dropdown.Menu>
                                                                                <li><Dropdown.Item href="#!">Delete</Dropdown.Item></li>
                                                                                <li><Dropdown.Item href="#!">Rename</Dropdown.Item></li>
                                                                                <li><Dropdown.Item href="#!">Hide Folder</Dropdown.Item></li>
                                                                            </Dropdown.Menu>
                                                                        </Dropdown>
                                                                    </div>
                                                                </div>
                                                                <p className="fs-14 fw-medium mb-1 lh-1">
                                                                    <Link href="#!" scroll={false}>{idx.text1}</Link>
                                                                </p>
                                                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                                    <div>
                                                                        <span className="text-muted fs-12">
                                                                            {idx.text2}
                                                                        </span>
                                                                    </div>
                                                                    <div>
                                                                        <span className="text-default fw-medium">
                                                                            {idx.text3}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </div>
                                                    </Col>
                                                ))}
                                            </div>
                                            <div className="d-flex mb-3 align-items-center justify-content-between">
                                                <p className="mb-0 fw-medium fs-14">Recent Files</p>
                                                <Link href="#!" scroll={false} className="fs-12 text-muted fw-medium"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                            </div>
                                            <Row>
                                                <Col xl={12}>
                                                    <div className="table-responsive border border-bottom-0">
                                                        <table className="table text-nowrap table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">File Name</th>
                                                                    <th scope="col">Category</th>
                                                                    <th scope="col">Size</th>
                                                                    <th scope="col">Date Modified</th>
                                                                    <th scope="col">Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="files-list">
                                                                {Recentdata.map((idx)=>(
                                                                    <tr key={Math.random()} className={idx.class}  onClick={handleShow2}>
                                                                        <th scope="row">
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="me-0">
                                                                                    <span className={`avatar avatar-md svg-${idx.color} text-${idx.color}`}>
                                                                                        {idx.svg}
                                                                                    </span>
                                                                                </div>
                                                                                <div>
                                                                                    <Link scroll={false} href="#!" data-bs-toggle="offcanvas"
                                                                                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                                                                        {idx.text1}</Link>
                                                                                </div>
                                                                            </div>
                                                                        </th>
                                                                        <td>{idx.text2}</td>
                                                                        <td>{idx.text3}</td>
                                                                        <td>{idx.text4}</td>
                                                                        <td>
                                                                            <div className="hstack gap-2 fs-15">
                                                                                <Button variant="info-light" href="#!" className="btn btn-icon btn-sm"><i className="ri-eye-line"></i></Button>
                                                                                <Button variant="danger-light" href="#!" className="btn btn-icon btn-sm"><i className="ri-delete-bin-line"></i></Button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                            <tfoot>
                                                                <tr>
                                                                    <td colSpan={5}>
                                                                        <nav aria-label="Page navigation">
                                                                            <Pagination className="pagination justify-content-end mb-0">
                                                                                <Pagination.Item disabled href="#!">Previous</Pagination.Item>
                                                                                <Pagination.Item href="#!">1</Pagination.Item>
                                                                                <Pagination.Item href="#!">2</Pagination.Item>
                                                                                <Pagination.Item href="#!" className="pagination-next">Next</Pagination.Item>
                                                                            </Pagination>
                                                                        </nav>
                                                                    </td>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {/* End:: row-1 */}


            {/* <!-- Start::mail information offcanvas --> */}
                <Offcanvas show={show2} onHide={handleClose2} placement="end" className="offcanvas-end" tabIndex={-1} id="offcanvasRight">
                   <Offcanvas.Header closeButton className="border-bottom">
                           <div>
                                <div>
                                    <h6>File Details</h6>
                                </div>
                            </div>
                            <Dropdown className="dropdown me-1 ms-auto">
                                        <Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-primary-light btn-wave waves-light waves-effect waves-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ri-more-2-fill"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <li><Dropdown.Item href="#!">Share</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Copy</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Move</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Delete</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Raname</Dropdown.Item></li>
                                        </Dropdown.Menu>
                                    </Dropdown>
                     </Offcanvas.Header>
                    <Offcanvas.Body className="p-0">
                        <div className="selected-file-details">
                                <div className="filemanager-file-details" id="filemanager-file-details">
                                    <div className="p-3 text-center border-bottom border-block-end-dashed">
                                        <div className="file-details mb-3">
                                            <img src="../../assets/images/media/blog/9.jpg" alt=""/>
                                        </div>
                                        <div>
                                            <p className="mb-0 fw-medium fs-16">IMG-09123878-SPK734.jpeg</p>
                                            <p className="mb-0 text-muted fs-10">422KB | 23,Nov 2024</p>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom border-block-end-dashed">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <div>
                                                    <span className="fw-medium">File Format : </span><span className="fs-12 text-muted">jpeg</span>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div>
                                                    <p className="fw-medium mb-0">File Description : </p>
                                                    <span className="fs-12 text-muted">This file contains 3 folder MAMIX.main & MAMIX.premium & MAMIX.featured and 42 images and layout styles are added in this update.</span>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <p className="fw-medium mb-0">File Location : </p>
                                                <span className="fs-12 text-muted">Device/Storage/Archives/IMG-09123878-SPK734.jpeg</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="p-3 border-bottom border-block-end-dashed">
                                        <p className="mb-1 fw-medium fs-14">Downloaded from :</p>
                                        <a className="text-primary fw-medium text-break" href="https://themeforest.net/user/spruko/portfolio" target="_blank">
                                            <u>https://themeforest.net/user/spruko/portfolio</u>
                                        </a>
                                    </div>
                                    <div className="p-3">
                                        <p className="mb-2 fw-medium fs-14">Shared With :</p>
                                        <Link href="#!" scroll={false}>
                                                <div className="d-flex align-items-center p-2 mb-1">
                                                <span className="avatar avatar-sm me-2 avatar-rounded">
                                                    <img src="../../assets/images/faces/1.jpg" alt="" />
                                                </span>
                                                <span className="fw-medium flex-fill">Akira Susan</span>
                                                <span className="badge bg-success-transparent fw-normal">28,Nov 2024</span>
                                            </div>
                                        </Link>
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-center p-2 mb-1">
                                                <span className="avatar avatar-sm me-2 avatar-rounded">
                                                    <img src="../../assets/images/faces/15.jpg" alt="" />
                                                </span>
                                                <span className="fw-medium flex-fill">Khalid Ahmad</span>
                                                <span className="badge bg-success-transparent fw-normal">16,Oct 2024</span>
                                            </div>
                                        </Link>
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-center p-2 mb-1">
                                                <span className="avatar avatar-sm me-2 avatar-rounded">
                                                    <img src="../../assets/images/faces/8.jpg" alt="" />
                                                </span>
                                                <span className="fw-medium flex-fill">Jeremiah Jackson</span>
                                                <span className="badge bg-success-transparent fw-normal">05,Dec 2024</span>
                                            </div>
                                        </Link>    
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-center p-2">
                                                <span className="avatar avatar-sm me-2 avatar-rounded">
                                                    <img src="../../assets/images/faces/13.jpg" alt="" />
                                                </span>
                                                <span className="fw-medium flex-fill">Brigo Jhonson</span>
                                                <span className="badge bg-success-transparent fw-normal">13,Nov 2024</span>
                                            </div>
                                        </Link>    
                                    </div>
                                </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            {/* <!-- End::mail information offcanvas --> */}
</Fragment>
);
};

export default Filemanager;