"use client"
import { Ecommercecontext } from "@/shared/contextapi";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useContext, useEffect, } from "react";
import { Button, Card, Col, Form, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import Swal from 'sweetalert2';
const Cart = () => {
	const Updatedvalue :any= useContext(Ecommercecontext);


	


	const handleClick = (id: string) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(id);
				console.log("delete")
            } 
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your file is safe :)', 'error');
            }
        });
    };

	const handleDelete = (id: string) => {
		if (Updatedvalue.productdata && Updatedvalue.productdata.cartdata) {
			const updatedData = Updatedvalue.productdata.cartdata.filter((idx: any) => idx.id !== id);
			Updatedvalue.setproductdata({
				...Updatedvalue.productdata,
				cartdata: updatedData
			});
	
			Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
		} 
		else {
			console.error('Updatedvalue.productdata or Updatedvalue.productdata.cartdata is undefined');
		}
	};

	//
	const incrementQuantity = (id: string) => {
        const updatedCart =  Updatedvalue.productdata.cartdata.map((item:{ id: string, quantity: number }) => {
            if (item.id === id) {

                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
		Updatedvalue.setproductdata({
			...Updatedvalue.productdata,
			cartdata: updatedCart
		});
    };

    const decrementQuantity = (id: string) => {
        const updatedCart = Updatedvalue.productdata.cartdata.map((item :{ id: string, quantity: number })=> {
            if (item.id === id && innerWidth && item.quantity > 0) {

                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
		Updatedvalue.setproductdata({
			...Updatedvalue.productdata,
			cartdata: updatedCart
		});
    };
	const isCartEmpty = Updatedvalue.productdata.cartdata.length === 0;
return ( 
    <Fragment>
          {/* Start:: Breadcrumb*/}
            <div className="border-bottom py-3">
                <div className="container">
                     {/* Page Header */}
					 	<Seo title={"Cart"} />
                        <Pageheader Heading="" Pagetitle={true} Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true},{title:"Customer", active:true}, {title:"Cart", active:false}]} />
                     {/* Page Header Close */}
                </div>
            </div>
            {/* End:: Breadcrumb*/}

            {/* Start:: Section-1 */}
            <section className="section py-4">
                <div className="container"> 
                    <Row>
                        <Col xl={9}>
						{!isCartEmpty && (
							<Card className="custom-card overflow-hidden" id="cart-container-delete">
								<Card.Header>
									<Card.Title>
										Cart Items
									</Card.Title>
								</Card.Header>
								<Card.Body className="p-0">
									<div className="table-responsive">
										<table className="table text-nowrap">
											<thead>
												<tr>
													<th>
														Product Name
													</th>
													<th>
														Price
													</th>
													<th>
														Quantity
													</th>
													<th>
														Total
													</th>
													<th>
														Action
													</th>
												</tr>
											</thead>
											<tbody>
											{Updatedvalue.productdata && Updatedvalue.productdata.cartdata.map((idx:any, index:any)=>(
												<tr key={index}>
													<td>
														<div className="d-flex align-items-center">
															<div className="me-3">
																<span className="avatar avatar-xxl bg-light">
																	<img src={idx.preview} alt="" /> 
																</span>
															</div>
															<div>
																<div className="mb-1 fs-14 fw-semibold">
																	<Link scroll={false} href="#!">{idx.title}</Link>
																</div>
																<div className="mb-1">
																	<span className="me-1">Size:</span><span className="fw-semibold text-muted">Large</span>
																</div>
																<div className="mb-1">
																	<span className="me-1">Color:</span><span className="fw-semibold text-muted">Grey<span className="badge bg-success-transparent ms-3">In Offer</span></span>
																</div>
															</div>
														</div>
													</td>
													<td>
														<div className="fw-semibold fs-14">
															{idx.oldpr}
														</div>
													</td>
													<td className="product-quantity-container">
														<div className="input-group border rounded flex-nowrap">
															<Button variant="" onClick={() => decrementQuantity(idx.id)} className="btn btn-icon btn-light input-group-text flex-fill border-0 product-quantity-minus" ><i className="ri-subtract-line"></i></Button>
															<Form.Control type="text" defaultValue={idx.quantity}  key={idx.quantity}   className="form-control form-control-sm border-0 text-center w-100" aria-label="quantity" id="product-quantity" />
															<Button variant="" onClick={() => incrementQuantity(idx.id)} className="btn btn-icon btn-light input-group-text flex-fill border-0 product-quantity-plus" ><i className="ri-add-line"></i></Button>
														</div>
													</td>
													<td>
														<div className="fs-14 fw-semibold">
															$918
														</div>
													</td>
													<td>
													<OverlayTrigger placement="top" overlay={<Tooltip>Add To Wishlist</Tooltip>}>
														<Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-icon btn-success me-1"><i className="ri-heart-line"></i></Link>
													</OverlayTrigger>
													<OverlayTrigger placement="top" overlay={<Tooltip>Remove From cart</Tooltip>}>
														<Link scroll={false} href="#!" className="btn btn-icon btn-danger btn-delete" 
														 onClick={() => handleClick(idx.id)}>
																<i className="ri-delete-bin-line"></i>
														</Link>
													</OverlayTrigger>
													</td>
												</tr>
											))}
											</tbody>
										</table>
									</div>
								</Card.Body>
							</Card>
						)}
						 {isCartEmpty && (
							<Card className="custom-card" id="cart-empty-cart">
								<Card.Header>
									<Card.Title>
										Empty Cart
									</Card.Title>
								</Card.Header>
								<Card.Body>
									<div className="cart-empty text-center">
										<span className="svg-muted">
											<svg xmlns="http://www.w3.org/2000/svg" className="" width="24" height="24" viewBox="0 0 24 24"><path d="M18.6 16.5H8.9c-.9 0-1.6-.6-1.9-1.4L4.8 6.7c0-.1 0-.3.1-.4.1-.1.2-.1.4-.1h17.1c.1 0 .3.1.4.2.1.1.1.3.1.4L20.5 15c-.2.8-1 1.5-1.9 1.5zM5.9 7.1 8 14.8c.1.4.5.8 1 .8h9.7c.5 0 .9-.3 1-.8l2.1-7.7H5.9z"/><path d="M6 10.9 3.7 2.5H1.3v-.9H4c.2 0 .4.1.4.3l2.4 8.7-.8.3zM8.1 18.8 6 11l.9-.3L9 18.5z"/><path d="M20.8 20.4h-.9V20c0-.7-.6-1.3-1.3-1.3H8.9c-.7 0-1.3.6-1.3 1.3v.5h-.9V20c0-1.2 1-2.2 2.2-2.2h9.7c1.2 0 2.2 1 2.2 2.2v.4z"/><path d="M8.9 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2zm0-3.5c-.7 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.8 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3zM18.6 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-.9 2.2-2.2 2.2zm0-3.5c-.8 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.7 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3z"/></svg>
										</span>
										<h3 className="fw-bold mb-1">Your Cart is Empty</h3>
										<h5 className="mb-3">Add some items to make me happy :)</h5>
										<Link scroll={false} href="/ecommerce/customer/shop/" className="btn btn-primary btn-wave m-3" data-abc="true">continue shopping <i className="bi bi-arrow-right ms-1"></i></Link>
									</div>
								</Card.Body>
							</Card>
						 )}
						</Col>
                        <Col xl={3}>	
							<Card className="custom-card">
								<div className="p-3 border-bottom d-block">
									<div className="alert alert-primary text-center" role="alert">
										<span className="text-default">Sale Ends in</span> <span className="fw-semibold fs-14 text-primary ms-1">18 Hours : 32 Minutes</span>
									</div>
								</div>
								<Card.Body className="p-0">
									<div className="p-3 border-bottom border-block-end-dashed">
										<p className="mb-2 fw-semibold">Delivery:</p>
										<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
											<input type="radio" className="btn-check" name="btnradio" id="btnradio1"/>
											<label className="btn btn-outline-light text-default" htmlFor="btnradio1">Free Delivery</label>
											<input type="radio" className="btn-check" name="btnradio" id="btnradio2" defaultChecked/>
											<label className="btn btn-outline-light text-default" htmlFor="btnradio2">Express Delivery</label>
										</div>
										<p className="mb-0 mt-2 fs-12 text-muted">Delivered by 24,Nov 2022</p>
									</div>
									<div className="p-3 border-bottom border-block-end-dashed">
										<div className="input-group">
											<input type="text" className="form-control form-control-sm" placeholder="Coupon Code" aria-label="coupon-code" aria-describedby="coupons"/>
											<Button variant="" className="btn btn-primary input-group-text" id="coupons">Apply</Button>
										</div>
										<Link scroll={false} href="#!" className="fs-12 text-success">10% off on first purchase</Link>
									</div>
									<div className="p-3 border-bottom border-block-end-dashed">
										<div className="d-flex align-items-center justify-content-between mb-3">
											<div className="text-muted op-7">Sub Total</div>
											<div className="fw-semibold fs-14">$1,299</div>
										</div>
										<div className="d-flex align-items-center justify-content-between mb-3">
											<div className="text-muted op-7">Discount</div>
											<div className="fw-semibold fs-14 text-success">10% - $129</div>
										</div>
										<div className="d-flex align-items-center justify-content-between mb-3">
											<div className="text-muted op-7">Delivery Charges</div>
											<div className="fw-semibold fs-14 text-danger">- $49</div>
										</div>
										<div className="d-flex align-items-center justify-content-between mb-3">
											<div className="text-muted op-7">Service Tax (18%)</div>
											<div className="fw-semibold fs-14">- $169</div>
										</div>
										<div className="d-flex align-items-center justify-content-between">
											<div className="text-muted op-7">Total :</div>
											<div className="fw-semibold fs-14 text-primary"> $1,387</div>
										</div>
									</div>
									<div className="p-3 d-grid">
										<Link scroll={false} href="/ecommerce/customer/checkout/" className="btn btn-primary btn-wave mb-2">Proceed To Checkout</Link>
										<Link scroll={false} href="/ecommerce/customer/shop/" className="btn btn-light btn-wave">Continue Shopping</Link>
									</div>
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
                    <div className="col-lg-6 text-center">
                        <div className="mb-4">
                            <h3 className="fw-semibold mb-2 text-fixed-white">&#128073; Download our free mobile apps today</h3>
                        </div>
                        <h6 className="mb-4 op-9 text-fixed-white">Labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore..</h6>
                        <div className="btn-list">
                            <Link scroll={false} href="#!" className="btn btn-dark app-store">
                                <img src="../../../assets/images/media/apps/play-store.png" alt=""/>
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
    </Fragment>
    )
};

export default Cart;