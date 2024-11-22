"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";

const Compareproducts = () => {
return ( 
    <Fragment>
          {/* Start:: Breadcrumb*/}
            <div className="border-bottom py-3">
                <div className="container">
                    {/* Page Header */}
						<Seo title={"Compare Products"} />
                        <Pageheader Heading="" Pagetitle={true} Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true},{title:"Customer", active:true}, {title:"Compare Products", active:false}]} />
                     {/* Page Header Close */}
                </div>
            </div>
            {/* End:: Breadcrumb*/}

             {/* Start:: Section-1 */}
             <section className="section py-4">
                <div className="container"> 
                    <Row>
						<Col md={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Compare Products
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="table-responsive">
                                        <table className="table table-bordered text-nowrap mb-0">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <span className="fw-semibold">Products</span>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-start gap-3">
                                                            <div>
                                                                <span className="avatar avatar-xxl bg-light border">
                                                                    <img src="../../../assets/images/ecommerce/png/29.png" alt="img"/>
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <h6 className="fs-16 mb-1 fw-medium">CapturePro Camera For Men</h6>
                                                                <div className="d-flex align-items-end justify-content-between">
                                                                    <div>
                                                                        <p className="mb-0 text-muted">SKU 159346820</p>
                                                                        <h5 className="mb-0 mt-3 fw-medium">$250.00</h5>
                                                                    </div>
                                                                    <div className="btn-list">
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Replace</Tooltip>}>
                                                                        <Link scroll={false} href="#!" className="btn btn-primary-light btn-icon" data-bs-toggle="tooltip" title="Replace"><i className="ti ti-repeat fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Remove</Tooltip>}>
                                                                        <Link scroll={false} href="#!" className="btn btn-secondary-light btn-icon me-0" data-bs-toggle="tooltip" title="Remove"><i className="ti ti-trash fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-start gap-3">
                                                            <div>
                                                                <span className="avatar avatar-xxl bg-light border">
                                                                    <img src="../../../assets/images/ecommerce/png/30.png" alt="img"/>
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <h6 className="fs-16 mb-1 fw-medium">JLB Wireless Headphones 5.2.1</h6>
                                                                <div className="d-flex align-items-end justify-content-between">
                                                                    <div>
                                                                        <p className="mb-0 text-muted">SKU 7452361895</p>
                                                                        <h5 className="mb-0 mt-3 fw-medium">$399.00</h5>
                                                                    </div>
                                                                    <div className="btn-list">
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Replace</Tooltip>}>
                                                                        <Link scroll={false} href="#!" className="btn btn-primary-light btn-icon" data-bs-toggle="tooltip" title="Replace"><i className="ti ti-repeat fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Remove</Tooltip>}>
                                                                        <Link scroll={false} href="#!" className="btn btn-secondary-light btn-icon me-0" data-bs-toggle="tooltip" title="Remove"><i className="ti ti-trash fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-start gap-3">
                                                            <div>
                                                                <span className="avatar avatar-xxl bg-light border">
                                                                    <img src="../../../assets/images/ecommerce/png/15.png" alt="img"/>
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <h6 className="fs-17 mb-1 fw-medium">Abidas Sports Shoes</h6>
                                                                <div className="d-flex align-items-end justify-content-between">
                                                                    <div>
                                                                        <p className="mb-0 text-muted">SKU 8628427531</p>
                                                                        <h5 className="mb-0 mt-3 fw-medium">$1,110.00</h5>
                                                                    </div>
                                                                    <div className="btn-list">
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Replace</Tooltip>}>
                                                                        <Link scroll={false} href="#!" className="btn btn-primary-light btn-icon" data-bs-toggle="tooltip" title="Replace"><i className="ti ti-repeat fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Remove</Tooltip>}>
                                                                        <Link scroll={false} href="#!" className="btn btn-secondary-light btn-icon me-0" data-bs-toggle="tooltip" title="Remove"><i className="ti ti-trash fs-16"></i></Link>
                                                                    </OverlayTrigger>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="fw-semibold">Rating</span>
                                                    </td>
                                                    <td>
                                                        <span><i className="fe fe-star text-warning me-1"></i> (4.0)</span>
                                                        <span className="vr mx-1"></span>
                                                        <span>128 Ratings</span>
                                                    </td>
                                                    <td>
                                                        <span><i className="fe fe-star text-warning me-1"></i> (3.5)</span>
                                                        <span className="vr mx-1"></span>
                                                        <span>350 Ratings</span>
                                                    </td>
                                                    <td>
                                                        <span><i className="fe fe-star text-warning me-1"></i> (4.5)</span>
                                                        <span className="vr mx-1"></span>
                                                        <span>227 Ratings</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="fw-semibold">Brand</span>
                                                    </td>
                                                    <td>
                                                        <span>Lenscart</span>
                                                    </td>
                                                    <td>
                                                        <span>JLB</span>
                                                    </td>
                                                    <td>
                                                        <span>Adibas</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="fw-semibold">Model</span>
                                                    </td>
                                                    <td>
                                                        <span>EGFFM00772</span>
                                                    </td>
                                                    <td>
                                                        <span>JWHV655773</span>
                                                    </td>
                                                    <td>
                                                        <span>ASAFM89453</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="fw-semibold">Date</span>
                                                    </td>
                                                    <td>
                                                        <span>02-08-2021</span>
                                                    </td>
                                                    <td>
                                                        <span>16-04-2022</span>
                                                    </td>
                                                    <td>
                                                        <span>11-11-2022</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="fw-semibold">Weight</span>
                                                    </td>
                                                    <td>
                                                        <span>10.5g</span>
                                                    </td>
                                                    <td>
                                                        <span>32.3g</span>
                                                    </td>
                                                    <td>
                                                        <span>180.5g</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="fw-semibold">Color</span>
                                                    </td>
                                                    <td>
                                                        <span>Yellow</span>
                                                    </td>
                                                    <td>
                                                        <span>Blue</span>
                                                    </td>
                                                    <td>
                                                        <span>Lime Green</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        
                                                    </td>
                                                    <td>
                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-w-lg btn-primary"><i className="ti ti-shopping-cart-plus fs-16 me-1"></i> Add To Cart</Link>
                                                    </td>
                                                    <td>
                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-w-lg btn-primary"><i className="ti ti-shopping-cart-plus fs-16 me-1"></i> Add To Cart</Link>
                                                    </td>
                                                    <td>
                                                        <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-w-lg btn-primary"><i className="ti ti-shopping-cart-plus fs-16 me-1"></i> Add To Cart</Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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
    </Fragment>
    )
};

export default Compareproducts;