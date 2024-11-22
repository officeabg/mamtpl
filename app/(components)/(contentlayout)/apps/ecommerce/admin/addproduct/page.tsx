"use client"
import { Branddata, Paymentdata, Productdata, Propertydata, Shippingdata, Stockdata, Taxesdata } from "@/shared/data/apps/ecommerce/admin/addproductdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, KeyboardEventHandler, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import CreatableSelect from 'react-select/creatable';
const Select = dynamic(() => import("react-select"), { ssr: false });
const Addproduct = () => {
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
                {/* Page Header */}
                    <Seo title={"Add Product"} />
                    <Pageheader Heading="Add Product" Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true}, {title:"Admin", active:true}, {title:"Add Product", active:false},]} />
                {/* Page Header Close */}
                 {/* Start::row-1 */}
                 <Row>
                    <Col xxl={9} xl={8} lg={8} md={7} className="col-12">
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title className="flex-grow-1">
                                    Add Product
                                </Card.Title>
                                <Link scroll={false} href="/apps/ecommerce/admin/products/" className="btn btn-outline-light btn-wave waves-effect waves-light">
                                    <i className="bi bi-arrow-right"></i> Go Back
                                </Link>
                            </Card.Header>
                            <Card.Body>
                                <div className="row gy-4"> 
                                    <Col xl={6}>
                                        <Form.Label htmlFor="Product-name" className="form-label">Product Name</Form.Label>
                                        <Form.Control type="text" className="form-control" id="Product-name" placeholder="Product Name" defaultValue="SoundSync Headphones"/>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label className="form-label">Product Category</Form.Label> 
                                        <Select  name="state" options={Productdata} defaultValue={[Productdata[0]]} className="js-example-placeholder-multiple w-full js-states"
                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                        />
                                    </Col> 
                                    <Col xl={6}>
                                        <Form.Label className="form-label">Brand</Form.Label> 
                                        <Select  name="state" options={Branddata} defaultValue={[Branddata[0]]} className="js-example-placeholder-multiple w-full js-states"
                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                        />
                                    </Col> 
                                    <Col xl={6}>
                                        <Form.Label className="form-label">Property Address</Form.Label> 
                                        <Select  name="state" options={Propertydata}  defaultValue={[Propertydata[0]]} className="js-example-placeholder-multiple w-full js-states"
                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                        />
                                    </Col> 
                                    <Col xl={6}>
                                        <Form.Label className="form-label">Stock QTY</Form.Label> 
                                        <Select  name="state" options={Stockdata} defaultValue={[Stockdata[0]]}  className="js-example-placeholder-multiple w-full js-states"
                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                        />
                                    </Col> 
                                    <Col xl={6}>
                                        <Form.Label className="form-label">Taxes</Form.Label> 
                                        <Select  name="state" options={Taxesdata} defaultValue={[Taxesdata[0]]} className="js-example-placeholder-multiple w-full js-states"
                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                        />
                                    </Col> 
                                    <Col xl={6}>
                                        <Form.Label className="form-label">Shipping Days</Form.Label> 
                                        <Select  name="state" options={Shippingdata} defaultValue={[Shippingdata[6]]} className="js-example-placeholder-multiple w-full js-states"
                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                        />
                                    </Col> 
                                    <Col xl={6}>
                                        <Form.Label htmlFor="discount" className="form-label">Discount (%)</Form.Label>
                                        <Form.Control type="text" className="form-control" id="discount" placeholder="Discount"/>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="SKU" className="form-label">SKU</Form.Label>
                                        <Form.Control type="text" className="form-control" id="SKU" placeholder="SKU" defaultValue="#SPK147"/>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="tags-name" className="form-label">Tags</Form.Label>
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
                                    <Col xl={8}>
                                        <Form.Label className="form-label">Payment Options</Form.Label> 
                                        <Select  name="state" options={Paymentdata} className="js-example-placeholder-multiple w-full js-states"
                                            menuPlacement='auto' classNamePrefix="Select2"
                                        />
                                    </Col> 
                                    <Col xl={4}>
                                        <Form.Label htmlFor="Price" className="form-label">Price</Form.Label>
                                        <Form.Control type="text" className="form-control" id="Price" placeholder="Price" defaultValue="$3654"/>
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Label htmlFor="Ad-description" className="form-label">Product Description :</Form.Label>
                                        <Form.Control as="textarea" className="form-control" id="Ad-description" rows={7} defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!"></Form.Control>
                                    </Col>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="float-end">
                                    <Button variant="" className="btn btn-primary">
                                        Add Product
                                    </Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={4} lg={4} md={5} className="col-12">
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Vendor Profile</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Col xl={12}>                                            
                                    <div className="mb-3">
                                        <span className="avatar avatar-lg avatar-rounded">
                                            <img src={selectedImage || '../../../../assets/images/faces/9.jpg'} alt="" className="w-100 h-100" />
                                            <Link scroll={false} href="#!" className="badge rounded-pill bg-danger avatar-badge"><i className="fe fe-x"></i></Link>
                                        </span>
                                    </div>
                                    <div className="btn-list">
                                        <Form.Control  type="file" id="formFile1"  onChange={(e:any) => {
                                                handleFileChange(e);
                                                setImages([...images, e.target.files[0]]);
                                            }} />
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
                                            <span className="avatar avatar-lg avatar-rounded me-2 bg-light">
                                                <img src="../../../../assets/images/ecommerce/png/13.png" alt="" className="w-100 h-100" />
                                                <Link scroll={false} href="#!" className="badge rounded-pill bg-danger avatar-badge"><i className="fe fe-x"></i></Link>
                                            </span>
                                            <span className="avatar avatar-lg avatar-rounded me-2 bg-light">
                                                <img src="../../../../assets/images/ecommerce/png/14.png" alt="" className="w-100 h-100" />
                                                <Link scroll={false} href="#!" className="badge rounded-pill bg-danger avatar-badge"><i className="fe fe-x"></i></Link>
                                            </span>
                                            <span className="avatar avatar-lg avatar-rounded me-2 bg-light">
                                                <img src="../../../../assets/images/ecommerce/png/15.png" alt="" className="w-100 h-100" />
                                                <Link scroll={false} href="#!" className="badge rounded-pill bg-danger avatar-badge"><i className="fe fe-x"></i></Link>
                                            </span>
                                            <span className="avatar avatar-lg avatar-rounded me-2 bg-light">
                                                <img src="../../../../assets/images/ecommerce/png/16.png" alt="" className="w-100 h-100" />
                                                <Link scroll={false} href="#!" className="badge rounded-pill bg-danger avatar-badge"><i className="fe fe-x"></i></Link>
                                            </span>
                                        </div>
                                        <Form.Label htmlFor="formFile" className="form-label">Upload Image</Form.Label> 
                                        <Form.Control className="form-control mb-2" type="file" id="formFile"/>
                                        <p className="mb-0 fs-12 text-muted">Minimum of 6 images are need to be uploaded,make sure the image size match the proper background size and all images should be uniformly maintained with width and height.</p>
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

export default Addproduct;