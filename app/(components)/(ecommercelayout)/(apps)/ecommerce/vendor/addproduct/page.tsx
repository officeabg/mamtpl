"use client"
import { Branddata, Paymentdata, Productdata, Propertydata, Shippingdata, Stockdata, Taxesdata } from "@/shared/data/apps/ecommerce/admin/addproductdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, KeyboardEventHandler } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
const Select = dynamic(() => import("react-select"), { ssr: false });
import CreatableSelect from 'react-select/creatable';
const Addproduct = () => {
    //create
const components = {
    DropdownIndicator: null,
  };
  
  interface Option {
    readonly label: string;
    readonly value: string;
  }
  
  const createOption = (label: string) => ({
    label,
    value: label,
  });

  const [inputValue, setInputValue] = React.useState('');
  const [value, setValue] = React.useState<readonly Option[]>([]);

  const handleKeyDown: KeyboardEventHandler = (event:any) => {
    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        setValue((prev) => [...prev, createOption(inputValue)]);
        setInputValue('');
        event.preventDefault();
    }
  };
return ( 
    <Fragment>
            <div className="main-content landing-main ecommerce-main">
                {/* Start:: Breadcrumb*/}
                <div className="border-bottom py-3">
                    <div className="container">
                        {/* Page Header */}
                            <Seo title={"Add Product"} />
                            <Pageheader Heading="" Pagetitle={true} Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true},{title:"Vendor", active:true}, {title:"Add Product", active:false}]} />
                        {/* Page Header Close */}
                    </div>
                </div>
                {/* End:: Breadcrumb*/}

                {/* Start:: Section-1 */}
                <section className="section py-4">
                    <div className="container"> 
                        <Row>
                            <Col xl={12}>
                                <Row>
                                    <Col lg={12}>
                                        <Card className="custom-card">
                                            <Card.Header>
                                                <Card.Title className="flex-grow-1">
                                                    Add Product
                                                </Card.Title>
                                                <Link scroll={false} href="/ecommerce/vendor/vendor/" className="btn btn-outline-light btn-wave waves-effect waves-light">
                                                    <i className="bi bi-arrow-right me-1"></i> Go Back
                                                </Link>
                                            </Card.Header>
                                            <Card.Body>
                                                <div className="row gy-4"> 
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="Product-name" className="form-label">Product Name</Form.Label>
                                                        <Form.Control type="text" className="" id="Product-name" placeholder="Product Name" defaultValue="SoundSync Headphones"/>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label>Product Category</Form.Label> 
                                                        <Select  name="state" options={Productdata} defaultValue={[Productdata[0]]} className="js-example-placeholder-multiple w-full js-states"
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                                        />
                                                    </Col> 
                                                    <Col xl={6}>
                                                        <Form.Label>Brand</Form.Label> 
                                                        <Select  name="state" options={Branddata} defaultValue={[Branddata[0]]} className="js-example-placeholder-multiple w-full js-states"
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                                        />
                                                    </Col> 
                                                    <Col xl={6}>
                                                        <Form.Label>Property Address</Form.Label> 
                                                        <Select  name="state" options={Propertydata}  defaultValue={[Propertydata[0]]} className="js-example-placeholder-multiple w-full js-states"
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                                        />
                                                    </Col> 
                                                    <Col xl={6}>
                                                        <Form.Label>Stock QTY</Form.Label> 
                                                        <Select  name="state" options={Stockdata} defaultValue={[Stockdata[0]]}  className="js-example-placeholder-multiple w-full js-states"
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                                        />
                                                    </Col> 
                                                    <Col xl={6}>
                                                        <Form.Label>Taxes</Form.Label> 
                                                        <Select  name="state" options={Taxesdata} defaultValue={[Taxesdata[0]]} className="js-example-placeholder-multiple w-full js-states"
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                                        />
                                                    </Col> 
                                                    <Col xl={6}>
                                                        <Form.Label>Shipping Days</Form.Label> 
                                                        <Select  name="state" options={Shippingdata} defaultValue={[Shippingdata[6]]} className="js-example-placeholder-multiple w-full js-states"
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                                        />
                                                    </Col> 
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="discount" className="">Discount (%)</Form.Label>
                                                        <Form.Control type="text" className="" id="discount" placeholder="Discount" />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="SKU" className="">SKU</Form.Label>
                                                        <Form.Control type="text" className="" id="SKU" placeholder="SKU" defaultValue="#SPK147" />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="tags-name" className="">Tags</Form.Label>
                                                        <CreatableSelect
                                                        classNamePrefix='react-select'
                                                        components={components}
                                                        inputValue={inputValue}
                                                        isClearable
                                                        isMulti
                                                        menuIsOpen={false}
                                                        onChange={(newValue) => setValue(newValue)}
                                                        onInputChange={(newValue) => setInputValue(newValue)}
                                                        onKeyDown={handleKeyDown}
                                                        placeholder="Type something and press enter..."
                                                        value={value}
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label>Payment Options</Form.Label> 
                                                        <Select isMulti  name="state" options={Paymentdata} className="js-example-placeholder-multiple w-full js-states"
                                                            menuPlacement='auto' classNamePrefix="Select2"
                                                        />
                                                    </Col> 
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="Price" className="">Price</Form.Label>
                                                        <Form.Control type="text" className="" id="Price" placeholder="Price" defaultValue="$3654"/>
                                                    </Col>
                                                    <Col xl={12}>
                                                        <Form.Label>Product Description :</Form.Label>
                                                        <Form.Control as="textarea" className="" id="Ad-description" rows={7} defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!"></Form.Control>
                                                    </Col>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={12}>
                                        <Card className="custom-card">
                                            <Card.Header>
                                                <Card.Title>Vendor Profile</Card.Title>
                                            </Card.Header>
                                            <Card.Body>
                                                <Col xl={12}>                                            
                                                    <div className="mb-3">
                                                        <span className="avatar avatar-lg avatar-rounded">
                                                            <img src="../../../assets/images/faces/9.jpg" alt="" className="w-100 h-100"/>
                                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-danger avatar-badge"><i className="fe fe-x"></i></Link>
                                                        </span>
                                                    </div>
                                                    <div className="btn-list">
                                                        <input className="form-control" type="file" id="formFile1" />
                                                    </div>
                                                </Col>                               
                                            </Card.Body>
                                        </Card>
                                        <Card className="custom-card">
                                            <Card.Header>
                                                <Card.Title>Product Images </Card.Title>
                                            </Card.Header>
                                            <Card.Body>
                                                <div className="row gy-3">
                                                    <Col xl={12}>                                          
                                                        <div className="mb-3">
                                                            <span className="avatar avatar-xl bg-gray-300 me-2 avatar-square">
                                                                <img src="../../../assets/images/ecommerce/png/13.png" alt="" className="w-100 h-100" />
                                                                <Link scroll={false} href="#!" className="badge rounded-pill bg-danger avatar-badge"><i className="fe fe-x"></i></Link>
                                                            </span>
                                                            <span className="avatar avatar-xl bg-gray-300 me-2 avatar-square">
                                                                <img src="../../../assets/images/ecommerce/png/14.png" alt="" className="w-100 h-100" />
                                                                <Link scroll={false} href="#!" className="badge rounded-pill bg-danger avatar-badge"><i className="fe fe-x"></i></Link>
                                                            </span>
                                                            <span className="avatar avatar-xl bg-gray-300 me-2 avatar-square">
                                                                <img src="../../../assets/images/ecommerce/png/15.png" alt="" className="w-100 h-100" />
                                                                <Link scroll={false} href="#!" className="badge rounded-pill bg-danger avatar-badge"><i className="fe fe-x"></i></Link>
                                                            </span>
                                                            <span className="avatar avatar-xl bg-gray-300 me-2 avatar-square">
                                                                <img src="../../../assets/images/ecommerce/png/16.png" alt="" className="w-100 h-100" />
                                                                <Link scroll={false} href="#!" className="badge rounded-pill bg-danger avatar-badge"><i className="fe fe-x"></i></Link>
                                                            </span>
                                                        </div>
                                                        <label htmlFor="formFile" className="form-label">Upload Image</label> 
                                                        <input className="form-control mb-2" type="file" id="formFile"/>
                                                        <p className="mb-0 fs-12 text-muted">Minimum 0f 6 images are need to be uploaded,make sure the image size match the proper background size and all images should be uniformly maintained with width and height.</p>
                                                    </Col>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={12} className="text-end">
                                        <Button variant="" className="btn btn-lg btn-primary">
                                            Add Product
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </section> 
                {/* End:: Section-1 */}

                {/* Start:: Section-2 */}
                <section className="section bg-banner px-lg-0 px-4">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <div className="mb-4">
                                <h3 className="fw-semibold mb-2 text-fixed-white">&#128073; Download our free mobile apps today</h3>
                            </div>
                            <h6 className="mb-4 op-9 text-fixed-white">Labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore..</h6>
                            <div className="btn-list">
                                <Link scroll={false} href="#!" className="btn btn-dark app-store">
                                    <img src="../../../assets/images/media/apps/play-store.png" alt="" />
                                    Google Play
                                </Link>
                                <Link scroll={false} href="#!" className="btn btn-dark app-store">
                                    <img src="../../../assets/images/media/apps/apple-store.png" alt="" className="invert-1"/>
                                    App Store
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End:: Section-2 */}
            </div>
    </Fragment>
    )
};

export default Addproduct;