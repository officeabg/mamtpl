"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import {  Card, Col, Form, Row } from "react-bootstrap";
const Addcustomer = () => {
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
return ( 
    <Fragment>
        {/* Page Header */}
            <Seo title={"Add Customer"} />
            <Pageheader Heading="Add Customer" Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true}, {title:"Admin", active:true}, {title:"Add Customer", active:false},]} />
        {/* Page Header Close */}

        {/* Start::row-1 */}
        <Row>
            <Col xxl={9} xl={8} lg={8} md={7} className="col-12">
                <Card className="custom-card">
                    <Card.Header className="justify-content-between">
                        <Card.Title>
                            Add New Customer
                        </Card.Title>                                
                        <Link scroll={false} href="/apps/ecommerce/admin/customerlist/" className="btn btn-light border btn-sm btn-wave waves-effect waves-light">
                            <i className="bi bi-arrow-right me-1"></i> Go Back
                        </Link> 
                    </Card.Header>
                    <Card.Body>
                        <Row className="gy-4">
                            <Col xl={6}>
                                <Form.Label htmlFor="Customer-name">Customer Name</Form.Label>
                                <Form.Control type="text"  id="Customer-name" placeholder="Customer Name" defaultValue="Jack Miller" />
                            </Col>
                            <Col xl={6}>
                                <Form.Label htmlFor="Customer-username">Customer Username</Form.Label> 
                                <Form.Control type="text"  id="Customer-username" placeholder="Customer username" defaultValue="andrewretail" />
                            </Col> 
                            <Col xl={6}>
                                <Form.Label htmlFor="email-address">Email Address :</Form.Label>
                                <Form.Control type="text"  id="email-address" placeholder="xyz@gmail.com" defaultValue="json@gmail.com" />
                            </Col>
                            <Col xl={6}>
                                <Form.Label htmlFor="phone-number">Mobile Number :</Form.Label>
                                <Form.Control type="text"  id="phone-number" placeholder="*** *** ****" defaultValue="65432 76765" />
                            </Col>
                            <Col xl={6}>
                                <Form.Label htmlFor="Address">Address :</Form.Label>
                                <Form.Control type="text"  id="Address" placeholder="Address" defaultValue="USA" />
                            </Col>
                            <Col xl={6}>
                                <Form.Label htmlFor="Zip-Code">Zip Code :</Form.Label>
                                <Form.Control type="text"  id="Zip-Code" placeholder="Zip Code" defaultValue="1234" />
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="bio">About Customer :</Form.Label>
                                <Form.Control as="textarea"  id="bio" rows={7} defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!"></Form.Control>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer className="text-end">
                        <Link scroll={false} href="#!" className="btn btn-primary btn-wave">
                            <i className="bi bi-plus-circle"></i> Add Customer
                        </Link>
                    </Card.Footer>
                </Card>
            </Col>
            <Col xxl={3} xl={4} lg={4} md={5} className="col-12">
                <Card className="custom-card">
                    <Card.Header>
                        <Card.Title>Customer Profile</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Col xl={12}>                                            
                            <div className="mb-3">
                                <span className="avatar avatar-lg avatar-rounded">
                                    <img src={selectedImage || '../../../../assets/images/faces/9.jpg'} alt="" className="w-100 h-100"/>
                                    <Link scroll={false} href="#!" className="badge rounded-pill bg-danger avatar-badge"><i className="fe fe-x"></i></Link>
                                </span>
                            </div>
                            <div className="btn-list">
                                <Form.Control className="form-control" type="file" id="formFile" 
                                    onChange={(e:any) => {
                                        handleFileChange(e);
                                        setImages([...images, e.target.files[0]]);
                                    }} />
                            </div>
                        </Col>                               
                    </Card.Body>
                </Card>
                <Card className="custom-card">
                    <Card.Header className="justify-content-between">
                        <Card.Title>
                            Change Password
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row className="gy-3"> 
                            <Col xl={12}>
                                <Form.Label htmlFor="Current-Password">Current Password :</Form.Label>
                                <Form.Control type="password"  id="Current-Password" placeholder="Enter Password..." />
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="New-Password">New Password :</Form.Label>
                                <Form.Control type="password"  id="New-Password" placeholder="Enter Password..."/> 
                            </Col>
                            <Col xl={12}>
                                <Form.Label htmlFor="Confirm-Password">Confirm Password :</Form.Label>
                                <Form.Control type="password"  id="Confirm-Password" placeholder="Enter Password..." />
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer className="text-end">
                        <Link scroll={false} href="#!" className="btn btn-primary btn-wave">
                            Update
                        </Link>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
        {/*End::row-1 */}
    </Fragment>
    )
};

export default Addcustomer;