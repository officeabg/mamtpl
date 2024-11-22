"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Form, Modal, Nav, Row, Tab } from "react-bootstrap";
const Select = dynamic(() => import("react-select"), { ssr: false });
const Checkout = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	//Citydata select
	 const Citydata=[
		{value:'Georgetown', label:'Georgetown'},
		{value:'Alexandria', label:'Alexandria'},
		{value:'Rockville', label:'Rockville'},
		{value:'Frederick', label:'Frederick'},
	]
	//Statedata select
	const Statedata=[
		{value:'Washington,D.C', label:'Washington,D.C'},
		{value:'California', label:'California'},
		{value:'Texas', label:'Texas'},
		{value:'Alaska', label:'Alaska'},
	]

	const [key, setKey] = useState('first');

	const handleTabSelect = (selectedKey:any) => {
        setKey(selectedKey);
    };
    const handleNext = () => {
        switch (key) {
            case 'first':
                setKey('second');
                break;
            case 'second':
                setKey('third');
                break;
            case 'third':
                setKey('fourth');
                break;
            default:
                break;
        }
    };

    const handlePrevious = () => {
        switch (key) {
            case 'second':
                setKey('first');
                break;
            case 'third':
                setKey('second');
                break;
            case 'fourth':
                setKey('third');
                break;
            default:
                break;
        }
    };

return ( 
    <Fragment>
                     {/* Start:: Breadcrumb*/}
            <div className="border-bottom py-3">
                <div className="container">
					 {/* Page Header */}
						<Seo title={"Checkout"} />
                        <Pageheader Heading="" Pagetitle={true}  Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true},{title:"Customer", active:true}, {title:"Checkout", active:false}]} />
                     {/* Page Header Close */}
                </div>
            </div>
            {/* End:: Breadcrumb*/}

            {/* Start:: Section-1 */}
            <section className="section py-4">
                <div className="container"> 
                    <Row>
                        <Col xxl={3}>
							<Card className="custom-card">
								<Card.Header>
									<div className="card-title me-1">Order Summary</div><span className="badge bg-primary-transparent rounded-pill">02</span>
								</Card.Header>
								<Card.Body className="p-0">
									<ul className="list-group mb-0 border-0 rounded-0">
										<li className="list-group-item border-top-0">
											<div className="d-flex align-items-center flex-wrap">
												<div className="me-2">
													<span className="avatar avatar-lg bg-light">
														<img src="../../../assets/images/ecommerce/png/1.png" alt="" />
													</span>
												</div>
												<div className="flex-fill">
													<p className="mb-0 fw-semibold">Spectrum Striders</p>
													<p className="mb-0 text-muted fs-12">Quantity : 2  <span className="badge bg-success-transparent ms-3">30% Off</span></p>
												</div>
												<div>
													<p className="mb-0 text-end">
														<Link scroll={false} href="#!">
															<i className="ri-close-line fs-16 text-muted"></i>
														</Link>
													</p>
													<p className="mb-0 fs-14 fw-semibold">$189<span className="ms-1 text-muted fs-11 d-inline-block"><s>$329</s></span></p>
												</div>
											</div>
										</li>
										<li className="list-group-item  border-bottom border-block-end-dashed">
											<div className="d-flex align-items-center flex-wrap">
												<div className="me-2">
													<span className="avatar avatar-lg bg-light">
														<img src="../../../assets/images/ecommerce/png/7.png" alt="" />
													</span>
												</div>
												<div className="flex-fill">
													<p className="mb-0 fw-semibold">Leather Hand Bag</p>
													<p className="mb-0 text-muted fs-12">Quantity : 1  <span className="badge bg-success-transparent ms-3">10% Off</span></p>
												</div>
												<div>
													<p className="mb-0 text-end">
														<Link scroll={false} href="#!">
															<i className="ri-close-line fs-16 text-muted"></i>
														</Link>
													</p>
													<p className="mb-0 fs-14 fw-semibold">$129<span className="ms-1 text-muted fs-11 d-inline-block"><s>$139</s></span></p>
												</div>
											</div>
										</li>
									</ul>
									<div className="p-3 border-bottom border-block-end-dashed">
										<div className="d-flex align-items-center justify-content-between flex-wrap">
											<div className="fs-12 fw-semibold bg-primary-transparent badge badge-md rounded">SPRUKO25</div>
											<div className="text-success">COUPON APPLIED</div>
										</div>
									</div>
									<div className="p-3 border-bottom border-block-end-dashed">
										<div className="d-flex align-items-center justify-content-between mb-3">
											<div className="text-muted op-7">Sub Total</div>
											<div className="fw-semibold fs-14">$318</div>
										</div>
										<div className="d-flex align-items-center justify-content-between mb-3">
											<div className="text-muted op-7">Discount</div>
											<div className="fw-semibold fs-14 text-success">10% - $31.8</div>
										</div>
										<div className="d-flex align-items-center justify-content-between mb-3">
											<div className="text-muted op-7">Delivery Charges</div>
											<div className="fw-semibold fs-14 text-danger">- $29</div>
										</div>
										<div className="d-flex align-items-center justify-content-between">
											<div className="text-muted op-7">Service Tax (18%)</div>
											<div className="fw-semibold fs-14">- $45.29</div>
										</div>
									</div>
									<div className="p-3">
										<div className="d-flex align-items-center justify-content-between">
											<div className="fs-15">Total :</div>
											<div className="fw-semibold fs-16 text-dark"> $1,387</div>
										</div>
									</div>
								</Card.Body>
							</Card>
                        </Col>
                        <Col xxl={9}>
							<Card className="custom-card">
								<Card.Body className="p-0 product-checkout">
								<Tab.Container defaultActiveKey="first" activeKey={key} onSelect={handleTabSelect}>
									<Nav className="nav-tabs tab-style-8 scaleX d-sm-flex d-block border-bottom border-block-end-dashed" id="myTab1" role="tablist">
										<Nav.Item role="presentation">
											<Nav.Link eventKey="first" className="" id="order-tab" data-bs-toggle="tab"
												data-bs-target="#order-tab-pane" type="button" role="tab"
												aria-controls="order-tab" aria-selected="true"><i
													className="ri-truck-line me-2 align-middle"></i>Shipping</Nav.Link>
										</Nav.Item>
										<Nav.Item role="presentation">
											<Nav.Link eventKey="second" className="" id="confirmed-tab" data-bs-toggle="tab"
												data-bs-target="#confirm-tab-pane" type="button" role="tab"
												aria-controls="confirmed-tab" aria-selected="false"><i
													className="ri-user-3-line me-2 align-middle"></i>Personal Details</Nav.Link>
										</Nav.Item>
										<Nav.Item role="presentation">
											<Nav.Link eventKey="third" className="" id="shipped-tab" data-bs-toggle="tab"
												data-bs-target="#shipped-tab-pane" type="button" role="tab"
												aria-controls="shipped-tab" aria-selected="false"><i
													className="ri-bank-card-line me-2 align-middle"></i>Payment</Nav.Link>
										</Nav.Item>
										<Nav.Item role="presentation">
											<Nav.Link eventKey="fourth" className="" id="delivered-tab" data-bs-toggle="tab"
												data-bs-target="#delivery-tab-pane" type="button" role="tab"
												aria-controls="delivered-tab" aria-selected="false"><i
													className="ri-checkbox-circle-line me-2 align-middle"></i>Confirmation</Nav.Link>
										</Nav.Item>
									</Nav>
									<Tab.Content className="" id="myTabContent">
										<Tab.Pane eventKey="first" className="fade show border-0 p-0" id="order-tab-pane" role="tabpanel"
											aria-labelledby="order-tab-pane" tabIndex={0}>
											<div className="p-4">
												<p className="mb-1 fw-semibold text-muted op-5 fs-20">01</p>
												<div className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
													<div>Shipping Address :</div>
													<div className="mt-sm-0 mt-2">
														<Button onClick={handleShow} variant="" className="btn btn-primary btn-sm"  data-bs-toggle="modal" data-bs-target="#modal-new-address"><i className="ri-add-line me-1 align-middle fs-14 fw-semibold"></i>Add New Address</Button>
														<Modal centered size="lg" show={show} onHide={handleClose} className="modal fade"  id="modal-new-address" tabIndex={-1} aria-labelledby="modal-new-address" aria-hidden="true">											
															<Modal.Header closeButton className="">
																<h6 className="modal-title" id="staticBackdropLabel">New Address
																</h6>
															</Modal.Header>
															<Modal.Body className="">
																<div className="row gy-3">
																	<Col xl={6}>
																		<Form.Label htmlFor="fullname-new">Full Name</Form.Label>
																		<Form.Control type="text" className="form-control" id="fullname-new" placeholder="Full Name" />
																	</Col>
																	<Col xl={6}>
																		<Form.Label htmlFor="email-new">Email</Form.Label>
																		<Form.Control type="email" className="form-control" id="email-new" placeholder="email" />
																	</Col>
																	<Col xl={6}>
																		<Form.Label htmlFor="phonenumber-new">Phone Number</Form.Label>
																		<Form.Control type="number" className="form-control" id="phonenumber-new" placeholder="Phone" />
																	</Col>
																	<Col xl={6}>
																		<Form.Label htmlFor="address-new">Address</Form.Label>
																		<Form.Control type="text" className="form-control" id="address-new" placeholder="Address" />
																	</Col>
																	<Col xl={12}>
																		<Row>
																			<Col xl={3}>
																				<Form.Label htmlFor="pincode-new">Pincode</Form.Label>
																				<Form.Control type="number" className="form-control" id="pincode-new" placeholder="Pincode" />
																			</Col>
																			<Col xl={3}>
																				<Form.Label htmlFor="city-new">City</Form.Label>
																				<Form.Control type="text" className="form-control" id="city-new" placeholder="City" />
																			</Col>
																			<Col xl={3}>
																				<Form.Label htmlFor="state-new">State</Form.Label>
																				<Form.Control type="text" className="form-control" id="state-new" placeholder="State" />
																			</Col>
																			<Col xl={3}>
																				<Form.Label htmlFor="country-new">Country</Form.Label>
																				<Form.Control type="text" className="form-control" id="country-new" placeholder="Country" />
																			</Col>
																		</Row>
																	</Col>
																</div>
															</Modal.Body>
															<Modal.Footer className="">
																<Button variant="" type="button" className="btn btn-light" data-bs-dismiss="modal" onClick={handleClose}>Close</Button>
																<Button variant="" type="button" className="btn btn-success">Save
																	Address</Button>
															</Modal.Footer>
														</Modal>
													</div>
												</div>
												<div className="row gy-4 mb-4">
													<Col xl={6}>
														<div className="form-floating">
															<Form.Control type="text" className="form-control" id="fullname-add" defaultValue="Jack Miller" placeholder="Name" />
															<label htmlFor="fullname-add">Full Name</label>
														</div>
													</Col>
													<Col xl={6}>
														<div className="form-floating">
															<Form.Control type="email" className="form-control" id="email-add" defaultValue="jackmiller2413@gmail.com" placeholder="name@example.com" />
															<label htmlFor="email-add">Email</label>
														</div>
													</Col>
													<Col xl={6}>
														<div className="form-floating">
															<Form.Control type="email" className="form-control is-valid" id="phoneno-add" defaultValue="(555) 555-1234" placeholder="1234-XX-XXXX" />
															<label htmlFor="phoneno-add">Phone No</label>
														</div>
													</Col>
													<Col xl={6}>
														<div className="form-floating">
															<Form.Control as="textarea" className="form-control" placeholder="Address Here" id="address-add" defaultValue="MIG-1-11,Monroe Street,Washington D.C,USA"></Form.Control>
															<label htmlFor="address-add">Address</label>
														</div>
														<div className="form-check mt-1">
														<input className="form-check-input form-checked-outline form-checked-success" type="checkbox" value="" id="invalidCheck" required defaultChecked />
															<label className="form-check-label text-success" htmlFor="invalidCheck">
																Same as Billing Address ?
															</label>
														</div>
													</Col>
													<Col xl={12}>
														<div className="row gy-2">
															<Col xl={3}>
																<div className="form-floating">
																	<Form.Control type="text" className="form-control is-valid" id="pincode-add" defaultValue="20071" placeholder="Name"/>
																	<label htmlFor="pincode-add">Pin Code</label>
																</div>
															</Col>
															<Col xl={3}>
																<div className="form-floating">
																	<Form.Control type="text" className="form-control" id="city-add" defaultValue="Georgetown" placeholder="Name"/>
																	<label htmlFor="city-add">City</label>
																</div>
															</Col>
															<Col xl={3}>
																<div className="form-floating">
																	<Form.Control type="text" className="form-control" id="state-add" defaultValue="Washington, D.C" placeholder="Name"/>
																	<label htmlFor="state-add">State</label>
																</div>
															</Col>
															<Col xl={3}>
																<div className="form-floating">
																	<Form.Control type="text" className="form-control" id="country-add" defaultValue="USA" placeholder="Name"/>
																	<label htmlFor="country-add">Country</label>
																</div>
															</Col>
														</div>
													</Col>
												</div>
												<div className="row gy-3">
													<p className="fs-15 fw-semibold mb-1">Shipping Methods :</p>
													<Col xl={6}>
														<div className="form-check shipping-method-container mb-0">
															<input id="shipping-method1" name="shipping-methods" type="radio" className="form-check-input" defaultChecked/>
															<div className="form-check-label">
															   <div className="d-sm-flex align-items-center justify-content-between">
																   <div className="me-2">
																	   <span className="avatar avatar-md">
																		   <img src="../../../assets/images/ecommerce/png/21.png" alt="" />
																	   </span>
																   </div>
																   <div className="shipping-partner-details me-sm-5 me-0">
																	   <p className="mb-0 fw-semibold">UPS</p>
																	   <p className="text-muted fs-11 mb-0">Delivered By 24,Nov 2022</p>
																   </div>
																   <div className="fw-semibold me-sm-5 me-0">
																	   $9.99
																   </div>
															   </div>
															</div>
														</div>
													</Col>
													<Col xl={6}>
														<div className="form-check shipping-method-container mb-0">
															<input id="shipping-method2" name="shipping-methods" type="radio" className="form-check-input" />
															<div className="form-check-label">
															   <div className="d-sm-flex align-items-center justify-content-between">
																   <div className="me-2">
																	   <span className="avatar avatar-md">
																		   <img src="../../../assets/images/ecommerce/png/22.png" alt="" />
																	   </span>
																   </div>
																   <div className="shipping-partner-details me-sm-5 me-0">
																	   <p className="mb-0 fw-semibold">USPS</p>
																	   <p className="text-muted fs-11 mb-0">Delivered By 22,Nov 2022</p>
																   </div>
																   <div className="fw-semibold me-sm-5 me-0">
																	   $10.49
																   </div>
															   </div>
															</div>
														</div>
													</Col>
													<Col xl={6}>
														<div className="form-check shipping-method-container mb-0">
															<input id="shipping-method3" name="shipping-methods" type="radio" className="form-check-input" />
															<div className="form-check-label">
															   <div className="d-sm-flex align-items-center justify-content-between">
																   <div className="me-2">
																	   <span className="avatar avatar-md">
																		   <img src="../../../assets/images/ecommerce/png/25.png" alt="" />
																	   </span>
																   </div>
																   <div className="shipping-partner-details me-sm-5 me-0">
																	   <p className="mb-0 fw-semibold">FedEx</p>
																	   <p className="text-muted fs-11 mb-0">Delivered Tomorrow</p>
																   </div>
																   <div className="fw-semibold me-sm-5 me-0">
																	   $12.29
																   </div>
															   </div>
															</div>
														</div>
													</Col>
													<Col xl={6}>
														<div className="form-check shipping-method-container mb-0">
															<input id="shipping-method4" name="shipping-methods" type="radio" className="form-check-input" />
															<div className="form-check-label">
															   <div className="d-sm-flex align-items-center justify-content-between">
																   <div className="me-2">
																	   <span className="avatar avatar-md">
																		   <img src="../../../assets/images/ecommerce/png/28.png" alt="" />
																	   </span>
																   </div>
																   <div className="shipping-partner-details me-sm-5 me-0">
																	   <p className="mb-0 fw-semibold">DHL</p>
																	   <p className="text-muted fs-11 mb-0">Delivered Today</p>
																   </div>
																   <div className="fw-semibold me-sm-5 me-0">
																	   $18.99
																   </div>
															   </div>
															</div>
														</div>
													</Col>
												</div>
											</div>
											<div className="px-4 py-3 border-top border-block-start-dashed d-sm-flex justify-content-end" onClick={handleNext}>
												<Button variant="" className="btn btn-success-light" id="personal-details-trigger">Personal Details<i className="ri-user-3-line ms-2 align-middle d-inline-block"></i></Button>
											</div>
										</Tab.Pane>
										<Tab.Pane eventKey="second" className="fade border-0 p-0" id="confirm-tab-pane"
											role="tabpanel" aria-labelledby="confirm-tab-pane" tabIndex={0}>
											<div className="p-4">
												<p className="mb-1 fw-semibold text-muted op-5 fs-20">02</p>
												<div className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
													<div>Personal Details :</div>
												</div>
												<div className="row gy-4">
													<Col xl={6}>
														<Form.Label htmlFor="firstname-personal">First Name</Form.Label>
														<Form.Control type="text" className="form-control" id="firstname-personal" placeholder="First Name" defaultValue="Json" />
													</Col>
													<Col xl={6}>
														<Form.Label htmlFor="lastname-personal">Last Name</Form.Label>
														<Form.Control type="text" className="form-control" id="lastname-personal" placeholder="Last Name" defaultValue="Taylor" />
													</Col>
													<Col xl={6}>
														<Form.Label htmlFor="email-personal">Email</Form.Label>
														<Form.Control type="email" className="form-control" id="email-personal" placeholder="xyz@example.com" />
													</Col>
													<Col xl={6}>
														<Form.Label htmlFor="phoneno-personal">Phone no</Form.Label>
														<Form.Control type="text" className="form-control" id="phoneno-personal" placeholder="(555)-555-1234" />
													</Col>
													<Col xl={12}>
														<Form.Label htmlFor="text-area">Address</Form.Label>
														<textarea className="form-control" id="text-area" rows={4}></textarea>
														<div className="form-check mt-1">
															<input className="form-check-input form-checked-outline form-checked-success" type="checkbox" id="invalidCheck1" required defaultChecked />
															<label className="form-check-label text-success fs-12" htmlFor="invalidCheck1">
																Same as Shipping Address Address ?
															</label>
														</div>
													</Col>
													<Col xl={3}>
														<Form.Label htmlFor="pincode-personal">Pincode</Form.Label>
														<input type="text" className="form-control" id="pincode-personal" placeholder="200017" />
													</Col>
													<Col xl={3}>
														<Form.Label htmlFor="choices-single-default">City</Form.Label>
														<Select name="colors" options={Citydata} className="basic-multi-select"
															menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Citydata[0]]}
														/>
													</Col>
													<Col xl={3}>
														<Form.Label htmlFor="choices-single-default1">State</Form.Label>
														<Select name="colors" options={Statedata} className="basic-multi-select"
															menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Statedata[0]]}
														/>
													</Col>
													<Col xl={3}>
														<Form.Label htmlFor="country-personal" className="form-label">Country</Form.Label>
														<input type="text" className="form-control" id="country-personal" placeholder="Country" defaultValue="USA" />
													</Col>
												</div>
											</div>
											<div className="px-4 py-3 border-top border-block-start-dashed d-sm-flex justify-content-between">
												<Button variant="" className="btn btn-danger-light" id="back-shipping-trigger" onClick={handlePrevious}><i className="ri-truck-line me-2 align-middle d-inline-block"></i>Back To Shipping</Button>
												<Button variant="" className="btn btn-success-light mt-sm-0 mt-2" id="payment-trigger" onClick={handleNext}>Continue To Payment<i className="bi bi-credit-card-2-front align-middle ms-2 d-inline-block"></i></Button>
											</div>
										</Tab.Pane>
										<Tab.Pane eventKey="third" className="fade border-0 p-0" id="shipped-tab-pane" role="tabpanel"
											aria-labelledby="shipped-tab-pane" tabIndex={0}>
											<div className="p-4">
												<p className="mb-1 fw-semibold text-muted op-5 fs-20">03</p>
												<div className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
													<div>Payment Details :</div>
												</div>
												<Row>
													<Col xl={12}>
														<div className="mb-3">
															<label className="form-label">Delivery Address</label>
															<div className="input-group">
																<input type="text" className="form-control" placeholder="Address" aria-label="address" aria-describedby="payment-address" defaultValue="MIG-1-11,Monroe Street,Washington D.C,USA" />
																<Button variant="" className="btn btn-info-light input-group-text" id="payment-address">Change</Button>
															</div>
														</div>
														<Card className="card custom-card border shadow-none mb-3">
															<Card.Header>
																<div className="card-title">
																	Payment Methods
																</div>
															</Card.Header>
															<div className="card-body">
																<div className="btn-group mb-3 d-sm-flex d-block" role="group" aria-label="Basic radio toggle button group">
																	<input type="radio" className="btn-check" name="btnradio" id="btnradio1"/>
																	<label className="btn btn-outline-light text-default" htmlFor="btnradio1">C.O.D(Cash on delivery)</label>
																	<input type="radio" className="btn-check" name="btnradio" id="btnradio2"/>
																	<label className="btn btn-outline-light text-default mt-sm-0 mt-1" htmlFor="btnradio2">UPI</label>
																	<input type="radio" className="btn-check" name="btnradio" id="btnradio3" defaultChecked/>
																	<label className="btn btn-outline-light text-default mt-sm-0 mt-1" htmlFor="btnradio3">Credit/Debit Card</label>
																</div>
																<div className="row gy-3">
																	<Col xl={12}>
																		<Form.Label htmlFor="payment-card-number" className="form-label">Card Number</Form.Label>
																		<Form.Control type="text" className="form-control" id="payment-card-number" placeholder="Card Number" defaultValue="1245 - 5447 - 8934 - XXXX" />
																	</Col>
																	<Col xl={12}>
																		<Form.Label htmlFor="payment-card-name" className="form-label">Name On Card</Form.Label>
																		<Form.Control type="text" className="form-control" id="payment-card-name" placeholder="Name On Card" defaultValue="JSON TAYLOR" />
																	</Col>
																	<Col xl={4}>
																		<Form.Label htmlFor="payment-cardexpiry-date" className="form-label">Expiration Date</Form.Label>
																		<Form.Control type="text" className="form-control" id="payment-cardexpiry-date" placeholder="MM/YY" defaultValue="08/2024" />
																	</Col>
																	<Col xl={4}>
																		<Form.Label htmlFor="payment-cvv" className="form-label">CVV</Form.Label>
																		<Form.Control type="text" className="form-control" id="payment-cvv" placeholder="XXX" defaultValue="341" />
																	</Col>
																	<Col xl={4}>
																		<Form.Label htmlFor="payment-security" className="form-label">O.T.P</Form.Label>
																		<Form.Control type="text" className="form-control" id="payment-security" placeholder="XXXXXX" defaultValue="183467" />
																		<Form.Label htmlFor="payment-security" className="form-label mt-1 text-danger fs-11"><sup><i className="ri-star-s-fill"></i></sup>Do not share O.T.P with anyone</Form.Label>
																	</Col>
																	<Col xl={12}>
																		<div className="form-check">
																			<input className="form-check-input form-checked-success" type="checkbox" id="payment-card-save" defaultChecked />
																			<label className="form-check-label" htmlFor="payment-card-save">
																				Save this card
																			</label>
																		</div>
																	</Col>
																</div>
															</div>
															<Card.Footer>
																<div className="row gy-3">
																	<p className="fs-15 fw-semibold mb-1">Saved Cards :</p>
																	<Col xl={6}>
																		<div className="form-check payment-card-container mb-0">
																			<input id="payment-card1" name="payment-cards" type="radio" className="form-check-input" defaultChecked/>
																			<div className="form-check-label">
																			   <div className="d-sm-flex d-block align-items-center justify-content-between">
																				   <div className="me-2 lh-1">
																					   <span className="avatar avatar-md">
																						   <img src="../../../assets/images/ecommerce/png/26.png" alt="" />
																					   </span>
																				   </div>
																				   <div className="saved-card-details">
																					   <p className="mb-0 fw-semibold">XXXX - XXXX - XXXX - 7646</p>
																				   </div>
																			   </div>
																			</div>
																		</div>
																	</Col>
																	<Col xl={6}>
																		<div className="form-check payment-card-container mb-0">
																			<input id="payment-card2" name="payment-cards" type="radio" className="form-check-input"/>
																			<div className="form-check-label">
																			   <div className="d-sm-flex d-block align-items-center justify-content-between">
																				   <div className="me-2 lh-1">
																					   <span className="avatar avatar-md">
																						   <img src="../../../assets/images/ecommerce/png/27.png" alt="" />
																					   </span>
																				   </div>
																				   <div className="saved-card-details">
																					   <p className="mb-0 fw-semibold">XXXX - XXXX - XXXX - 9556</p>
																				   </div>
																			   </div>
																			</div>
																		</div>
																	</Col>
																</div>
															</Card.Footer>
														</Card>
													</Col>
												</Row>
											</div>
											<div className="px-4 py-3 border-top border-block-start-dashed d-sm-flex justify-content-between">
												<Button variant="" className="btn btn-danger-light" id="back-personal-trigger"><i className="ri-user-3-line me-2 align-middle d-inline-block" onClick={handlePrevious}></i>Back To Personal Info</Button>
												<Button variant="" className="btn btn-success-light mt-sm-0 mt-2" id="continue-payment-trigger" onClick={handleNext}>Continue Payment<i className="bi bi-credit-card-2-front align-middle ms-2 d-inline-block"></i></Button>
											</div>
										</Tab.Pane>
										<Tab.Pane eventKey="fourth" className="fade border-0 p-0" id="delivery-tab-pane" role="tabpanel"
											aria-labelledby="delivery-tab-pane" tabIndex={0}>
											<div className="p-5 checkout-payment-success my-3">
												<div className="mb-5">
													<h5 className="text-success fw-semibold">Payment Successful...&#129309;</h5>
												</div>
												<div className="mb-5">
													<img src="../../../assets/images/ecommerce/png/24.png" alt="" />
												</div>
												<div className="mb-4">
													<p className="mb-1 fs-14">You can track your order with Order Id <b>SPK#1FR</b> from <Link scroll={false} className="link-success" href="#!"><u>Track Order</u></Link></p>
													<p className="text-muted">Thankyou for shopping with us.</p>
												</div>
												<Link scroll={false} href="/ecommerce/customer/shop/" className="btn btn-success">Continue Shopping<i className="bi bi-cart ms-2"></i></Link>
											</div>
										</Tab.Pane>
									</Tab.Content>
								</Tab.Container>
								</Card.Body>
							</Card>
                        </Col>
                    </Row>
                </div>
            </section> 
            {/* End:: Section-1 */}

            {/* Start:: Section-2 */}
			<section className="section bg-banner px-lg-0 px-4">
                <div className="row justify-content-center">
                    <Col lg={6} className="text-center">
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
                                <img src="../../../assets/images/media/apps/apple-store.png" alt="" className="invert-1" />
                                App Store
                            </Link>
                        </div>
                    </Col>
                </div>
            </section>
            {/* End:: Section-2 */}
    </Fragment>
    )
};

export default Checkout;