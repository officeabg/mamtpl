"use client"
import { jobpost, jobpost1, jobpost10, jobpost11, jobpost2, jobpost3, jobpost4, jobpost5, jobpost6, jobpost7, jobpost8, jobpost9 } from "@/shared/data/apps/jobs/jobpostdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import {  Card, Col, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
const Select = dynamic(() => import("react-select"), { ssr: false });
const Jobpost = () => {
    const [startDate, setStartDate] = useState(new Date());

//Datepicker function
const handleDateChange = (date:any) => {
    // Ensure date is defined before setting it
    if (date) {
        setStartDate(date);
    }
};
return ( 
    <Fragment>
            {/* Page Header */}
                <Seo title={"Post Job"} />
                <Pageheader Heading="Post Job" Pages={[{title:"Apps", active:true},{title:"Jobs", active:true},{title:"Post Job", active:false}]} />
            {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xxl={9} xl={8} className="">
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    Post New Job
                                </Card.Title>                       
                            </Card.Header>
                            <Card.Body>
                                <div className="row gy-4 mb-4"> 
                                    <Col xl={6}>
                                        <Form.Label htmlFor="job-title" className="form-label">Job Title</Form.Label>
                                        <Form.Control type="text" className="form-control" id="job-title" placeholder="Job Title" value="Web Developer"/>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label>Job Category</Form.Label> 
                                        <Select name="colors" options={jobpost1} className="ti-form-select !p-0 !rounded-s-none" defaultValue={[jobpost1[0]]}
                                        menuPlacement='auto' classNamePrefix="Select2" /> 
                                    </Col> 
                                    <Col xl={6}>
                                        <Form.Label>Working Experience</Form.Label> 
                                        <Select name="colors" options={jobpost2} className="ti-form-select !p-0 !rounded-s-none" placeholder="0-1 Year"
                                        menuPlacement='auto' classNamePrefix="Select2" />
                                    </Col> 
                                    <Col xl={6}>
                                        <Form.Label>Job Type</Form.Label> 
                                        <Select options={jobpost} classNamePrefix='Select2' menuPlacement='auto' className=""
                                        placeholder="" defaultValue={[jobpost[0]]} />
                                    </Col> 
                                    <Col xl={6}>
                                        <Form.Label>Priority</Form.Label> 
                                        <Select options={jobpost3} classNamePrefix='Select2' menuPlacement='auto' className=""
                                       defaultValue={[jobpost3[0]]} />
                                    </Col>  
                                    <Col xl={6}> 
                                        <Form.Label>Vacancies</Form.Label> 
                                        <Select  name="colors" options={jobpost4} className="ti-form-select !p-0 !rounded-s-none" placeholder="10"
                                        menuPlacement='auto' classNamePrefix="Select2" />
                                    </Col> 
                                    <Col xl={6}> 
                                        <Form.Label>Salary</Form.Label> 
                                        <Select options={jobpost5} classNamePrefix='Select2' menuPlacement='auto' className="" placeholder="" defaultValue={[jobpost5[0]]} />
                                    </Col> 
                                    <Col xl={6}>
                                        <Form.Label htmlFor="skills" className="form-label">Skills :</Form.Label>
                                        <Select isMulti name="colors" options={jobpost6} className="" classNamePrefix="Select2"
                                        defaultValue={[jobpost6[0], jobpost6[1], jobpost6[2]]} />
                                    </Col>      
                                    <Col xl={6}>
                                        <Form.Label htmlFor="job-deadline" className="form-label">Job Deadline</Form.Label>
                                        <DatePicker selected={startDate} onChange={handleDateChange} placeholderText="Job Deadline" />
                                    </Col>  
                                    <Col xl={6}> 
                                        <Form.Label>Gender Requirement</Form.Label> 
                                        <Select name="colors" options={jobpost7} className="" classNamePrefix="Select2"
                                        defaultValue={[jobpost7[0]]} />
                                    </Col>                                      
                                    <Col xl={6}>
                                        <Form.Label htmlFor="language" className="form-label">Languages :</Form.Label>
                                        <Select isMulti name="colors" options={jobpost8} className="" classNamePrefix="Select2"
                                        defaultValue={[jobpost8[0], jobpost8[3]]} />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="qualification" className="form-label">Qualification :</Form.Label>
                                        <Select isMulti name="colors" options={jobpost9} className="" classNamePrefix="Select2"
                                        defaultValue={[jobpost9[0], jobpost9[2], jobpost9[3]]} />
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Label htmlFor="job-description" className="form-label">Job Description :</Form.Label>
                                        <Form.Control as="textarea" className="form-control" id="job-description" rows={4} defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!"></Form.Control>
                                    </Col>
                                </div>
                            </Card.Body>
                            <Card.Footer className="text-end">
                                <Link scroll={false} href="#!" className="btn btn-primary btn-wave waves-effect waves-light">
                                    <i className="bi bi-plus-circle"></i> Post Job
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={4}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Assign To Employer</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Col xl={12}>
                                    <Form.Label>Employer Name</Form.Label> 
                                    <Select name="colors" options={jobpost10} className="ti-form-select !p-0 !rounded-s-none" placeholder="Obiligation Pvt.Ltd" defaultValue={[jobpost10[0]]}
                                    menuPlacement='auto' classNamePrefix="Select2" />
                                </Col>                                 
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Company Details</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="row gy-3">
                                    <Col xl={12}>
                                        <Form.Label htmlFor="Company-Name" className="form-label">Company Name</Form.Label> 
                                        <Form.Control type="text" className="form-control" id="Company-Name" placeholder="Company Name" defaultValue="Obligation Pvt.Ltd"/>
                                    </Col>                                 
                                    <Col xl={12}>
                                        <Form.Label htmlFor="Company-Website" className="form-label">Company Website</Form.Label> 
                                        <Form.Control type="text" className="form-control" id="Company-Website" placeholder="Company Website" defaultValue="http//www.obligationpvtltd.com" />
                                    </Col>  
                                    <Col xl={12}> 
                                        <Form.Label>Country</Form.Label> 
                                        <Select name="colors" options={jobpost11} className="" classNamePrefix="Select2" defaultValue={[jobpost11[0]]}
                                    />
                                    </Col> 
                                    <Col xl={12}>
                                        <Form.Label htmlFor="Company-Address" className="form-label">Address</Form.Label> 
                                        <Form.Control type="text" className="form-control" id="Company-Address" placeholder="Company Address" defaultValue="USA"/>
                                    </Col>   
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    )
};

export default Jobpost;