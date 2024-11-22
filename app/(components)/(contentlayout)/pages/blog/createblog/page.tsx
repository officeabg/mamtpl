"use client"
import React, { Fragment, useState } from "react";
const Select = dynamic(() => import("react-select"), { ssr: false });
const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
  });
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
import DatePicker from "react-datepicker";
import { option, option1, option2 } from "@/shared/data/pages/blog/createblogdata";
import dynamic from "next/dynamic";
import { Button, Card, Col, Form } from "react-bootstrap";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";

const Createblog = () => {
        //Filepond 
        const [files, setFiles] = useState<any>([]);
        const [startDate, setStartDate] = useState(new Date()); //React date picker
return(
    <Fragment>
                {/* Page Header */}
                    <Seo title={"Blog Create"} />
                    <Pageheader Heading="Blog Create" Pages={[{title:"Pages", active:true},{title:"Blog", active:true},{title:"Blog Create", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <div className="row">
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} className="">
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>New Blog</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="row gy-3">
                                    <Col xl={12}>
                                        <Form.Label htmlFor="blog-title" className="">Blog Title</Form.Label>
                                        <Form.Control type="text" className="form-control" id="blog-title" placeholder="Blog Title"/>
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Label htmlFor="blog-category" className="">Blog Category</Form.Label>
                                        <Select id="blog-category" name="blog-category" options={option2} className="block w-full text-[0.875rem] !rounded-md"
                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Category"
                                        />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="blog-author" className="">Blog Author</Form.Label>
                                        <Select id="blog-category" name="blog-category" options={option2} className="block w-full text-[0.875rem] !rounded-md"
                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Category"
                                        />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="blog-author-email" className="">Email</Form.Label>
                                        <Form.Control type="text" className="form-control" id="blog-author-email" placeholder="Enter Email"/>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="publish-date" className="">Publish Date</Form.Label>
                                        <DatePicker className="form-control rounded-sm" selected={startDate} onChange={(date) => setStartDate(date as Date)} />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="publish-time" className="">Publish Time</Form.Label>
                                        <DatePicker className="form-control rounded-sm" selected={startDate} onChange={(date) => setStartDate(date as Date)} showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="product-status-add" className="">Published Status</Form.Label>
                                          <Select name="product-status-add" id="product-status-add" options={option1} className="block w-full text-[0.875rem] !rounded-md"
                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Category"
                                        />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="blog-tags" className="">Blog Tags</Form.Label>
                                         <Select id="blog-tags" isMulti name="blog-tags" options={option} className="block w-full text-[0.875rem] !rounded-md"
                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Category" defaultValue={[option[3], option[0]]}
                                        />
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Label className="">Blog Content</Form.Label>
                                        <div id="blog-content">
                                             <SunEditor/>
                                        </div>
                                    </Col>
                                    <Col xl={12} className="blog-images-container">
                                        <Form.Label htmlFor="blog-author-email" className="">Blog Images</Form.Label>
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
                                    <Col xl={12}>
                                        <Form.Label className="">Blog Type</Form.Label>
                                        <div className="d-flex align-items-center">
                                            <div className="form-check me-3">
                                                <input className="form-check-input" type="radio" name="blog-type" id="blog-free1" defaultChecked/>
                                                <label className="form-check-label" htmlFor="blog-free1">
                                                    Free
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="blog-type" id="blog-paid1"/>
                                                <label className="form-check-label" htmlFor="blog-paid1">
                                                    Paid
                                                </label>
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="btn-list text-end">
                                    <Button variant="" type="button" className="btn btn-sm btn-light">Save As Draft</Button>
                                    <Button variant="" type="button" className="btn btn-sm btn-primary">Post Blog</Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                </div>
                {/*End::row-1 */}

    </Fragment>
    );
};

export default Createblog;