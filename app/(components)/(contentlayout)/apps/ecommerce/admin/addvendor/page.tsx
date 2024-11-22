"use client"
import { Productdata } from "@/shared/data/apps/ecommerce/admin/addproductdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import {  Card, Col, Form, Row } from "react-bootstrap";
const Select = dynamic(() => import("react-select"), { ssr: false });
const Addvendor = () => {
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
return( 
    <Fragment>
                {/* Page Header */}
                    <Seo title={"Add Vendor"} />
                    <Pageheader Heading="Add Vendor" Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true}, {title:"Admin", active:true}, {title:"Add Vendor", active:false},]} />
                {/* Page Header Close */}
                {/* Start::row-1 */}
                <Row>
                    <Col xxl={9} xl={8} lg={8} md={7} className="col-12">
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    Add New Vendor
                                </Card.Title>                                
                                <Link scroll={false} href="/apps/ecommerce/admin/vendordetails/" className="btn btn-light btn-wave border">
                                    <i className="bi bi-arrow-right me-1"></i> Go Back
                                </Link> 
                            </Card.Header>
                            <Card.Body>
                                <Row className="gy-4">
                                    <Col xl={6}>
                                        <Form.Label htmlFor="vendor-name" className="form-label">Vendor Name</Form.Label>
                                        <Form.Control type="text" id="vendor-name" placeholder="vendor Name" defaultValue="Jack Miller" />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="Vendor-username" className="form-label">Vendor Username</Form.Label> 
                                        <Form.Control type="text" id="Vendor-username" placeholder="Vendor username" defaultValue="andrewretail" />
                                    </Col> 
                                    <Col xl={6}>
                                        <Form.Label htmlFor="Store-name" className="form-label">Store Name</Form.Label>
                                        <Form.Control type="text" id="Store-name" placeholder="Store Name" defaultValue="Andrew Retail PVT LTD" />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="Store-website" className="form-label">Store Website</Form.Label> 
                                        <Form.Control type="text" id="Store-website" placeholder="Store Website" defaultValue="https://spruko.com" />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="email-address" className="form-label">Email Address :</Form.Label>
                                        <Form.Control type="text" id="email-address" placeholder="xyz@gmail.com" defaultValue="json@gmail.com" />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label className="form-label">Category :</Form.Label>
                                        <Select  name="state" options={Productdata} defaultValue={[Productdata[0]]} className="js-example-placeholder-multiple w-full js-states"
                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                        />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="phone-number" className="form-label">Mobile Number :</Form.Label>
                                        <Form.Control type="text" id="phone-number" placeholder="*** *** ****" defaultValue="65432 76765" />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="Establishment-Year" className="form-label">Establishment Year :</Form.Label>
                                        <Form.Control type="text" id="Establishment-Year" placeholder="Establishment Year" defaultValue="2019" />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="Address" className="form-label">Store Address :</Form.Label>
                                        <Form.Control type="text" id="Address" placeholder="Address" defaultValue="USA" />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="Zip-Code" className="form-label">Zip Code :</Form.Label>
                                        <Form.Control type="text" id="Zip-Code" placeholder="Zip Code" defaultValue="1234" />
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Label htmlFor="bio" className="form-label">About Store :</Form.Label>
                                        <Form.Control as="textarea" id="bio" rows={7}  defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!"></Form.Control>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer className="text-end">
                                <Link scroll={false} href="#!" className="btn btn-primary btn-wave waves-effect waves-light">
                                    <i className="bi bi-plus-circle me-1 d-inline-flex"></i> Add Vendor
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={4} lg={4} md={5}  className="col-12">
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Vendor Profile</Card.Title>
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
                                        <Form.Control type="file" id="formFile"  onChange={(e:any) => {
                                                handleFileChange(e);
                                                setImages([...images, e.target.files[0]]);
                                            }}  />
                                    </div>
                                </Col>                               
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Social Links</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row className="gy-3">
                                    <Col xl={12}>
                                        <Form.Label htmlFor="facebook" className="form-label">Facebook :</Form.Label>
                                        <Form.Control type="text" id="facebook" placeholder="https://" defaultValue="https://www.facebook.com" />
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Label htmlFor="Twitter" className="form-label">Twitter :</Form.Label>
                                        <Form.Control type="text" id="Twitter" placeholder="https://" defaultValue="https://twitter.com"/> 
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Label htmlFor="Pinterest" className="form-label">Pinterest:</Form.Label>
                                        <Form.Control type="text" id="Pinterest" placeholder="https://" defaultValue="https://in.pinterest.com" />
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Label htmlFor="Linkedin" className="form-label">Linkedin :</Form.Label>
                                        <Form.Control type="text" id="Linkedin" placeholder="https://" defaultValue="https://www.linkedin.com" />
                                    </Col> 
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    )
};

export default Addvendor;