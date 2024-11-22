"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const Invoicedetails = () => {
    const print = () => {
		window.print();
	};
return( 
    <Fragment>
<div className="main-content landing-main ecommerce-main">

        {/* Start:: Breadcrumb*/}
        <div className="border-bottom py-3">
        <div className="container">
            {/* Page Header */}
                <Seo title={"Invoice Details"} />
                <Pageheader Heading="" Pagetitle={true} Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true},{title:"Vendor", active:true}, {title:"Invoice Details", active:false}]} />
            {/* Page Header Close */}
        </div>
        </div>
        {/* End:: Breadcrumb*/}

        {/* Start:: Section-1 */}
        <section className="section py-4">
        <div className="container"> 
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="d-md-flex d-block">
                            <div className="h5 mb-0 d-sm-flex d-bllock align-items-center">
                                <div>
                                    <img src="../../../assets/images/brand-logos/toggle-logo.png" alt="" />
                                </div> 
                                <div className="ms-sm-2 ms-0 mt-sm-0 mt-2">
                                    <div className="h6 fw-semibold mb-0">INVOICE : <span className="text-primary">#8140-2099</span></div>
                                </div>
                            </div>
                            <div className="ms-auto mt-md-0 mt-2">
                                <Link scroll={false} href="/ecommerce/vendor/invoices/" className="btn btn-outline-light me-1" >Go Back <i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </Card.Header>
                        <div className="card-body">
                            <div className="row gy-3">
                                <Col xl={12}>
                                    <Row>
                                        <Col xl={4} lg={4} md={6} sm={6} className="">
                                            <p className="text-muted mb-2">
                                                Billing From :
                                            </p>
                                            <p className="fw-bold mb-1">
                                                SPRUKO TECHNOLOGIES
                                            </p>
                                            <p className="mb-1 text-muted">
                                                Mig-1-11,Manroe street
                                            </p>
                                            <p className="mb-1 text-muted">
                                                Georgetown,Washington D.C,USA,200071    
                                            </p>
                                            <p className="mb-1 text-muted">
                                                sprukotrust.xia@gmail.com   
                                            </p>
                                            <p className="mb-1 text-muted">
                                                (555) 555-1234
                                            </p>
                                            <p className="text-muted">For more information check for <Link scroll={false} href="#!" className="text-primary fw-semibold"><u>GSTIN</u></Link> Details.</p>
                                        </Col>
                                        <Col xl={4} lg={4} md={6} sm={6} className="ms-auto mt-sm-0 mt-3">
                                            <p className="text-muted mb-2">
                                                Billing To :
                                            </p>
                                            <p className="fw-bold mb-1">
                                                Jack Miller
                                            </p>
                                            <p className="text-muted mb-1">
                                                Lig-22-1,20 Covington Place
                                            </p>
                                            <p className="text-muted mb-1">
                                                New Castle,de, United States,19320  
                                            </p>
                                            <p className="text-muted mb-1">
                                                jackmiller2134@gmail.com   
                                            </p>
                                            <p className="text-muted">
                                                +1 202-918-2132
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={3}> 
                                    <p className="fw-semibold text-muted mb-1">Invoice ID :</p>
                                    <p className="fs-15 mb-1">#SPK120219890</p>
                                </Col>
                                <Col xl={3}>
                                    <p className="fw-semibold text-muted mb-1">Date Issued :</p>
                                    <p className="fs-15 mb-1">29,Nov 2022 - <span className="text-muted fs-12">12:42PM</span></p>
                                    </Col>
                                <Col xl={3}>
                                    <p className="fw-semibold text-muted mb-1">Due Date :</p>
                                    <p className="fs-15 mb-1">29,Dec 2022</p>
                                </Col>
                                <Col xl={3}> 
                                    <p className="fw-semibold text-muted mb-1">Due Amount :</p>
                                    <p className="fs-16 mb-1 fw-semibold">$2,570.42</p>
                                </Col>
                                <Col xl={12}>
                                    <div className="table-responsive"> 
                                        <table className="table nowrap text-nowrap border mt-4"> 
                                            <thead>
                                                <tr>
                                                    <th>BRAND NAME</th>
                                                    <th>DESCRIPTION</th>
                                                    <th>QUANTITY</th>
                                                    <th>PRICE PER UNIT</th> 
                                                    <th>TOTAL</th>
                                                </tr> 
                                            </thead> 
                                            <tbody>
                                                <tr> 
                                                    <td>
                                                        <div className="fw-semibold">
                                                            Dapzem & Co (Sweatshirt)
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="text-muted">
                                                            Branded hoodie style
                                                        </div>
                                                    </td>
                                                    <td className="product-quantity-container">
                                                        2
                                                    </td>
                                                    <td>
                                                        $60
                                                    </td>
                                                    <td>
                                                        $120
                                                    </td>
                                                </tr> 
                                                <tr> 
                                                    <td>
                                                        <div className="fw-semibold">
                                                            Denim Winjo (Jacket)
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="text-muted">
                                                            Vintage leather Jacket
                                                        </div>
                                                    </td>
                                                    <td className="product-quantity-container">
                                                        1
                                                    </td>
                                                    <td>
                                                        $249
                                                    </td>
                                                    <td>
                                                        $249
                                                    </td>
                                                </tr> 
                                                <tr> 
                                                    <td>
                                                        <div className="fw-semibold">
                                                            Jimmy Lolfiger (Winter Coat)
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="text-muted">
                                                            Unisex jacket for men
                                                        </div>
                                                    </td>
                                                    <td className="product-quantity-container">
                                                        1
                                                    </td>
                                                    <td>
                                                        $499
                                                    </td>
                                                    <td>
                                                        $499
                                                    </td>
                                                </tr> 
                                                <tr> 
                                                    <td>
                                                        <div className="fw-semibold">
                                                            Blueberry & Co
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="text-muted">
                                                            Light sweater blueberry
                                                        </div>
                                                    </td>
                                                    <td className="product-quantity-container">
                                                        3
                                                    </td>
                                                    <td>
                                                        $299
                                                    </td>
                                                    <td>
                                                        $897
                                                    </td>
                                                </tr> 
                                                <tr> 
                                                    <td>
                                                        <div className="fw-semibold">
                                                            Denim Corporation
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="text-muted">
                                                            Flap pockets jackets
                                                        </div>
                                                    </td>
                                                    <td className="product-quantity-container">
                                                        1
                                                    </td>
                                                    <td>
                                                        $599
                                                    </td>
                                                    <td>
                                                        $599
                                                    </td>
                                                </tr> 
                                                <tr>
                                                    <td colSpan={3}></td>
                                                    <td colSpan={2}>
                                                        <table className="table table-sm text-nowrap mb-0 table-borderless">
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <p className="mb-0">Sub Total :</p>
                                                                    </th>
                                                                    <td>
                                                                        <p className="mb-0 fw-semibold fs-15">$2,364</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <p className="mb-0">Avail Discount :</p>
                                                                    </th>
                                                                    <td>
                                                                        <p className="mb-0 fw-semibold fs-15">$29.98</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <p className="mb-0">Coupon Discount <span className="text-success">(10%)</span> :</p>
                                                                    </th>
                                                                    <td>
                                                                        <p className="mb-0 fw-semibold fs-15">$236.40</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <p className="mb-0">Vat <span className="text-danger">(20%)</span> :</p>
                                                                    </th>
                                                                    <td>
                                                                        <p className="mb-0 fw-semibold fs-15">$472.80</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <p className="mb-0">Due Till Date :</p>
                                                                    </th>
                                                                    <td>
                                                                        <p className="mb-0 fw-semibold fs-15">$0</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <p className="mb-0 fs-14">Total :</p>
                                                                    </th>
                                                                    <td>
                                                                        <p className="mb-0 fw-semibold fs-16 text-success">$2,570.42</p>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody> 
                                        </table> 
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <div>
                                        <label htmlFor="invoice-note" className="form-label">Note:</label>
                                        <textarea className="form-control form-control-light" id="invoice-note" rows={3}>Once the invoice has been verified by the accounts payable team and recorded, the only task left is to send it for approval before releasing the payment</textarea>
                                    </div>    
                                </Col>
                            </div>
                        </div>
                        <Card.Footer className="text-end">
                            <div className="btn-list">
                                <Button variant="" className="btn btn-secondary" 
                                    onClick={() => print()}
                                >Print<i className="ri-printer-line ms-1 align-middle"></i></Button>
                                <Button variant="" className="btn btn-danger">Save As PDF<i className="ri-file-pdf-line ms-1 align-middle"></i></Button>
                                <Button variant="" className="btn btn-success">Download <i className="ri-download-2-line ms-1 align-middle"></i></Button>
                            </div>
                        </Card.Footer>
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

</div>
    </Fragment>
    )
};

export default Invoicedetails;