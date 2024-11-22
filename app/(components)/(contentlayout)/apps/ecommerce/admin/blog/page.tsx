"use client"
import { Productdata } from "@/shared/data/apps/ecommerce/admin/addproductdata";
import { Allblogdata } from "@/shared/data/apps/ecommerce/admin/blogdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Dropdown, Form, Offcanvas, Pagination } from "react-bootstrap";
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
  });
  const Select = dynamic(() => import("react-select"), { ssr: false });
const Blog = () => {
    //offcanvas
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Filepond 
    const [files, setFiles] = useState<any>([]);

    //Switch
    const [primary1, setprimary1] = useState("on");
return ( 
    <Fragment>
                {/* Page Header */}
                    <Seo title={"Ecommerce Blog"} />
                    <Pageheader Heading="Ecommerce Blog" Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true}, {title:"Admin", active:true}, {title:"Ecommerce Blog", active:false},]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <div className="row">
                    <Col xl={12}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    All Blogs
                                </Card.Title>
                                <div className="d-flex gap-3 align-items-center flex-wrap">
                                    <div className="btn-group">
                                       <Dropdown>
                                        <Dropdown.Toggle variant="" className="btn btn-outline-light border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="ti ti-sort-descending-2 me-1"></i> Sort By
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <li><Dropdown.Item href="#!">Published Date</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Status</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Author</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Category</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Newest</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Oldest</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                       </Dropdown>
                                    </div>
                                    <div className="custom-form-group flex-grow-1">
                                        <input type="text" className="form-control" placeholder="Search Blog.." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                        <Link scroll={false} href="#!" className="text-muted custom-form-btn"><i className="ti ti-search"></i></Link>
                                    </div> 
                                    <Link scroll={false}  onClick={handleShow} href="#!" className="btn btn-primary btn-wave" data-bs-toggle="offcanvas" data-bs-target="#addnewblog">
                                        <i className="bi bi-plus-circle me-1"></i>  Add Blog
                                    </Link> 
                                </div>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="w-20">Blog Title</th>
                                                <th scope="col" className="w-25">Description</th>
                                                <th scope="col">Author</th>
                                                <th scope="col">Published Date</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Comments</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Allblogdata.map((idx)=>(
                                            <tr key={Math.random()}>
                                                <th scope="row">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar bg-light avatar-square">
                                                                <img src={idx.src1} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <Link scroll={false} href="#!" className="fw-semibold">{idx.title1}</Link>
                                                            <div className="clearfix"></div>
                                                            <span className={`badge bg-${idx.badgecolor}-transparent`}>{idx.badgetxt}</span>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>{idx.description}</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md p-1 bg-light avatar-rounded">
                                                                <img src={idx.src2} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <Link scroll={false} href="/apps/ecommerce/admin/vendordetails/" className="fw-semibold mb-0">{idx.title2}</Link>
                                                            <p className="fs-12 text-muted mb-0">{idx.text}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{idx.date}</td>
                                                <td><span className={`badge bg-${idx.statuscolor}-transparent`}>{idx.status}</span></td>
                                                <td>{idx.comments}</td>
                                                <td>
                                                    <div className="d-flex gap-2">
                                                        <Link scroll={false} href="#!" onClick={handleShow} className="btn btn-icon btn-sm btn-info-light btn-wave" data-bs-toggle="offcanvas" data-bs-target="#addnewblog">
                                                            <i className="ri-edit-line"></i>
                                                        </Link>
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-danger-light btn-wave">
                                                            <i className="ri-delete-bin-line"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                            <Card.Footer className="border-top-0">
                                <nav aria-label="Page navigation" className="pagination-style-4 float-end">
                                    <Pagination className="pagination mb-0">
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
                </div>

            {/* <!-- Start::Add New Blog --> */}
            <Offcanvas placement="end" className="offcanvas-end custom-offcanvas" tabIndex={-1} id="addnewblog" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton className="border-bottom">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Add New Blog</h5>
                </Offcanvas.Header>
                <Offcanvas.Body className="">   
                    <div className="row gy-4">
                        <Col lg={12}>
                            <Form.Label htmlFor="Blog-Title" className="form-label">Blog Title : </Form.Label>
                            <Form.Control type="text" className="form-control" id="Blog-Title" placeholder="Blog-Title" defaultValue="Touring excites in winter !"/>
                        </Col>
                        <Col xl={12}>
                            <Form.Label className="form-label">Category</Form.Label>
                            <Select  name="state" options={Productdata} defaultValue={[Productdata[1]]} className="js-example-placeholder-multiple w-full js-states"
                                    menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                />
                        </Col>
                        <Col lg={12}>
                            <Form.Label className="form-label">Blog Description</Form.Label> 
                            <div id="editor" className="ecommerce-blog-description">
                                <SunEditor/>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <Form.Label className="form-label">Upload Image</Form.Label> 
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
                        <Col lg={12}>
                            <div className="d-flex align-items-center flex-wrap justify-content-between">
                                <div className="fw-medium h6 mb-0">Status :</div>
                                <div className={`toggle mb-0 float-sm-end  toggle-primary ${primary1}`} onClick={() => { primary1 == "on" ? setprimary1("off") : setprimary1("on"); }} >
                                    <span></span>
                                </div>
                            </div>
                        </Col>
                    </div>
                </Offcanvas.Body>
                <div className="text-end canvas-footer p-3 border-top shadow-sm">
                    <div className="btn-list">
                        <Button variant="info" className="btn btn-w-md ">Draft</Button>
                        <Button variant="primary" className="btn btn-w-md ">Publish</Button>
                    </div>
                </div>
            </Offcanvas>
            {/* <!-- End::Add New Blog --> */}

        {/*End::row-1 */}
    </Fragment>
    )
};

export default Blog;