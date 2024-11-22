"use client"
import { Ecommercecontext } from "@/shared/contextapi";
import LabeledTwoThumbs1 from "@/shared/data/apps/jobs/searchjobsdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useContext, useState } from "react";
import {  Card, Col, Collapse, Dropdown, Form, OverlayTrigger, Pagination, Row, Tooltip } from "react-bootstrap";
import { connect } from "react-redux";

const Shop = ({ local_varaiable }:any) => {
    
    //collapse
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    // end collapse

    const Updatedvalue :any= useContext(Ecommercecontext)

    const handleAddToCart = (id:any) => {
        let updatedData :any= Updatedvalue.productdata.shopdata.filter((ele:any)=> ele.id === id)
        Updatedvalue.setproductdata({...Updatedvalue.productdata,cartdata:[...Updatedvalue.productdata.cartdata, ...updatedData]})
    };
    

   const handleWishlist:any =(id:any)=>{
        let updatedData :any= Updatedvalue.productdata.shopdata.filter((ele:any)=> ele.id === id)
        Updatedvalue.setproductdata({...Updatedvalue.productdata,wishlistdata:[...Updatedvalue.productdata.wishlistdata, ...updatedData]})
    }

return ( 
    <Fragment>
            <div className="main-content landing-main ecommerce-main">
                    {/* Start:: Breadcrumb*/}
                    <div className="border-bottom py-3">
                        <div className="container">
                            {/* Page Header */}
                                <Seo title={"Products"} />
                                <Pageheader Heading="" Pagetitle={true} Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true},{title:"Customer", active:true}, {title:"Products", active:false}]} />
                            {/* Page Header Close */}
                        </div>
                    </div>
                    {/* End:: Breadcrumb*/}

                    {/* Start:: Section-1 */}
                    <section className="section pt-4">
                        <div className="container">
                            <Row>
                                <Col xl={12}>
                                    <Card className="custom-card">
                                        <Card.Body className="p-3">
                                            <div className="row align-items-center gy-2">
                                                <Col sm={8}>
                                                    <div className="d-flex">
                                                        <h5 className="fw-semibold mb-0"><span className="fw-normal">Showing</span> 3456 Items</h5>
                                                    </div>
                                                </Col>
                                                <Col sm={4} className="text-sm-end text-start">
                                                    <div className="btn-group">
                                                        <Dropdown>
                                                            <Dropdown.Toggle variant="" className="btn btn-outline-light border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="ti ti-sort-descending-2 me-1"></i> Sort By
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <li><Dropdown.Item href="#!">Date Published</Dropdown.Item></li>
                                                                <li><Dropdown.Item href="#!">Most Relevant</Dropdown.Item></li>
                                                                <li><Dropdown.Item href="#!">Price Low to High</Dropdown.Item></li>
                                                                <li><Dropdown.Item href="#!">Price High to Low</Dropdown.Item></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </Col>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4}>
                                    <Card className="custom-card products-navigation-card">
                                        <Card.Body className="p-0">
                                            <div className="p-4 border-bottom">
                                                <h6 className="fw-semibold mb-0">Categories</h6>
                                                <div className="px-2 py-3 pb-0">
                                                    <div className="form-check mb-2">
                                                        <Form.Check className="me-2" type="checkbox" value="" id="c-1" defaultChecked />
                                                        <label className="form-check-label" htmlFor="c-1">
                                                            Egg, Fish & Meat
                                                        </label>
                                                        <span className="badge bg-light border text-default fw-500 float-end">2,712</span>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                        <Form.Check className="me-2" type="checkbox" value="" id="c-2" />
                                                        <label className="form-check-label" htmlFor="c-2">
                                                            Vegetables & Fruits 
                                                        </label>
                                                        <span className="badge bg-light border text-default fw-500 float-end">536</span>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                        <Form.Check className="me-2" type="checkbox" value="" id="c-3" defaultChecked />
                                                        <label className="form-check-label" htmlFor="c-3">
                                                            Fashion & Lifestyle
                                                        </label>
                                                        <span className="badge bg-light border text-default fw-500 float-end">18,289</span>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                        <Form.Check className="me-2" type="checkbox" value="" id="c-4" defaultChecked />
                                                        <label className="form-check-label" htmlFor="c-4">
                                                            Electronics
                                                        </label>
                                                        <span className="badge bg-light border text-default fw-500 float-end">3,453</span>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                        <Form.Check className="me-2" type="checkbox" value="" id="c-5" />
                                                        <label className="form-check-label" htmlFor="c-5">
                                                            Household
                                                        </label>
                                                        <span className="badge bg-light border text-default fw-500 float-end">7,165</span>
                                                    </div>
                                                    <Collapse in={open}>
                                                    <div>
                                                        <div className="form-check mb-2">
                                                            <Form.Check className="me-2" type="checkbox" value="" id="c-6" />
                                                            <label className="form-check-label" htmlFor="c-6">
                                                                Mobiles
                                                            </label>
                                                            <span className="badge bg-light border text-default fw-500 float-end">5,964</span>
                                                        </div>
                                                        <div className="form-check mb-2">
                                                            <Form.Check className="me-2" type="checkbox" value="" id="c-7" />
                                                            <label className="form-check-label" htmlFor="c-7">
                                                                Home Appliances
                                                            </label>
                                                            <span className="badge bg-light border text-default fw-500 float-end">2,123</span>
                                                        </div>
                                                    </div>
                                                    </Collapse>
                                                    <Link scroll={false} className="ecommerce-more-link" data-bs-toggle="collapse" href="#category-more" role="button" onClick={() => setOpen(!open)}
                                                                aria-controls="example-collapse-text" aria-expanded={open}>MORE</Link>
                                                </div>
                                            </div>
                                            <div className="p-4 border-bottom">
                                                <h6 className="fw-semibold mb-0">Brand</h6>
                                                <div className="px-2 py-3 pb-0">
                                                    <div className="form-check mb-2">
                                                        <Form.Check className="me-2" type="checkbox" value="" id="j-1" defaultChecked />
                                                        <label className="form-check-label" htmlFor="j-1">
                                                            Ruby
                                                        </label>
                                                        <span className="badge bg-light border text-default fw-500 float-end">512</span>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                        <Form.Check className="me-2" type="checkbox" value="" id="j-2" defaultChecked />
                                                        <label className="form-check-label" htmlFor="j-2">
                                                            Hadlirams
                                                        </label>
                                                        <span className="badge bg-light border text-default fw-500 float-end">2,186</span>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                        <Form.Check className="me-2" type="checkbox" value="" id="j-3" defaultChecked />
                                                        <label className="form-check-label" htmlFor="j-3">
                                                            Xioami
                                                        </label>
                                                        <span className="badge bg-light border text-default fw-500 float-end">734</span>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                        <Form.Check className="me-2" type="checkbox" value="" id="j-4" />
                                                        <label className="form-check-label" htmlFor="j-4">
                                                            Samsnug
                                                        </label>
                                                        <span className="badge bg-light border text-default fw-500 float-end">16</span>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                        <Form.Check className="me-2" type="checkbox" value="" id="j-5" />
                                                        <label className="form-check-label" htmlFor="j-5">
                                                            Tommy & Hilfigure
                                                        </label>
                                                        <span className="badge bg-light border text-default fw-500 float-end">1,432</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4 border-bottom">
                                                <h6 className="fw-semibold mb-2">Price Range</h6>
                                                <div className="px-2 py-3 pb-0">
                                                    <div id="nonlinear">
                                                    <LabeledTwoThumbs1  rtl={local_varaiable.dir == 'rtl'} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4 border-bottom">
                                                <h6 className="fw-semibold mb-0">Discount</h6>
                                                <div className="px-2 py-3 pb-0">
                                                    <div className="form-check mb-2">
                                                        <Form.Check className="me-2" type="checkbox" value="" id="q-1"/>
                                                        <label className="form-check-label" htmlFor="q-1">
                                                            0% - 20%
                                                        </label>
                                                        <span className="badge bg-light border text-default fw-500 float-end">16,563</span>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                        <Form.Check className="me-2" type="checkbox" value="" id="q-2" defaultChecked/>
                                                        <label className="form-check-label" htmlFor="q-2">
                                                            20% - 40%
                                                        </label>
                                                        <span className="badge bg-light border text-default fw-500 float-end">15,234</span>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                        <Form.Check className="me-2" type="checkbox" value="" id="q-3"/>
                                                        <label className="form-check-label" htmlFor="q-3">
                                                            40% - 60%
                                                        </label>
                                                        <span className="badge bg-light border text-default fw-500 float-end">6,278</span>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                        <Form.Check className="me-2" type="checkbox" value="" id="q-4" defaultChecked/>
                                                        <label className="form-check-label" htmlFor="q-4">
                                                            60% - 80%
                                                        </label>
                                                        <span className="badge bg-light border text-default fw-500 float-end">4,531</span>
                                                    </div>
                                                    <div className="form-check">
                                                        <Form.Check className="me-2" type="checkbox" value="" id="q-5"/>
                                                        <label className="form-check-label" htmlFor="q-5">
                                                            80% - 90%
                                                        </label>
                                                        <span className="badge bg-light border text-default fw-500 float-end">2,405</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <h6 className="fw-semibold mb-0">Sizes</h6>
                                                <div className="px-2 py-3 pb-0">
                                                    <div className="form-check mb-2">
                                                        <Form.Check className="me-2" type="checkbox" value="" id="e-1" defaultChecked/>
                                                        <label className="form-check-label" htmlFor="e-1">
                                                            Extra Small (XS)
                                                        </label>
                                                        <span className="badge bg-light border text-default fw-500 float-end">23,156</span>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                        <Form.Check className="me-2" type="checkbox" value="" id="e-2"/>
                                                        <label className="form-check-label" htmlFor="e-2">
                                                            Small (SM)
                                                        </label>
                                                        <span className="badge bg-light border text-default fw-500 float-end">15,632</span>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                        <Form.Check className="me-2" type="checkbox" value="" id="e-3" defaultChecked/>
                                                        <label className="form-check-label" htmlFor="e-3">
                                                            Medium (MD)
                                                        </label>
                                                        <span className="badge bg-light border text-default fw-500 float-end">15,032</span>
                                                    </div>
                                                    <div className="form-check mb-2">
                                                        <Form.Check className="me-2" type="checkbox" value="" id="e-4" defaultChecked/>
                                                        <label className="form-check-label" htmlFor="e-4">
                                                            Large (L)
                                                        </label>
                                                        <span className="badge bg-light border text-default fw-500 float-end">7,154</span>
                                                    </div>
                                                    <Collapse in={open1}>
                                                        <div>
                                                            <div className="form-check mb-2">
                                                                <Form.Check className="me-2" type="checkbox" value="" id="s-5"/>
                                                                <label className="form-check-label" htmlFor="s-5">
                                                                    Extra Large (XL)
                                                                </label>
                                                                <span className="badge bg-light border text-default fw-500 float-end">5,946</span>
                                                            </div>
                                                            <div className="form-check mb-2">
                                                                <Form.Check className="me-2" type="checkbox" value="" id="s-6"/>
                                                                <label className="form-check-label" htmlFor="s-6">
                                                                    XXL
                                                                </label>
                                                                <span className="badge bg-light border text-default fw-500 float-end">3,267</span>
                                                            </div>
                                                            <div className="form-check mb-2">
                                                                <Form.Check className="me-2" type="checkbox" value="" id="s-7"/>
                                                                <label className="form-check-label" htmlFor="s-7">
                                                                    XXXL
                                                                </label>
                                                                <span className="badge bg-light border text-default fw-500 float-end">578</span>
                                                            </div>
                                                        </div>
                                                    </Collapse>
                                                    <Link scroll={false} className="ecommerce-more-link" data-bs-toggle="collapse" onClick={() => setOpen1(!open1)}
                                                                aria-controls="example-collapse-text" aria-expanded={open1} href="#sizes-more" role="button">MORE</Link>
                                                </div>  
                                            </div>
                                        </Card.Body>
                                    </Card> 
                                </Col>
                                <Col lg={8}>                             
                                    <Row>
                                        {Updatedvalue.productdata.shopdata.map((idx:any, index:any)=>(
                                        <Col lg={4} md={4} sm={6} className="" key={index}>
                                            <Card className="custom-card card-style-2">
                                                <Card.Body className="p-0">
                                                    <span className={`badge bg-${idx.badgecolor}-transparent text-${idx.badgecolor} top-left-badge`}>{idx.badgetxt}</span>
                                                    <div className={`badge top-right-badge bg-${idx.rightbadgecolor} text-fixed-white`}>
                                                        <div className="badge-icon"><i className={idx.rightbadgeicon}></i></div>
                                                        <div className="badge-text">{idx.rightbadgetxt}</div>
                                                    </div>
                                                    <div className="card-img-top border-bottom border-block-end-dashed">
                                                        <Link scroll={false} href={`/ecommerce/customer/productdetails?id=${idx.id}`} className="stretched-link"></Link>
                                                        <div className="btns-container-1 align-items-center gap-1">
                                                            <Link scroll={false} href={`/ecommerce/customer/productdetails?id=${idx.id}`} className="btn btn-icon rounded-circle btn-primary"><i className="ti ti-eye fs-16"></i></Link>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                <Link scroll={false} href="/ecommerce/customer/cart"  
                                                                 onClick={()=> {handleAddToCart(idx.id)}}
                                                                className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                        <div className="img-box-2 p-2">
                                                            <img src={idx.preview} alt="img" className="scale-img img-fluid w-100 bg-light rounded" />  
                                                        </div>
                                                    </div>
                                                    <div className="p-3">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">{idx.brand}</Link>
                                                                <h6 className="mb-1 fw-semibold fs-16"><Link scroll={false} href={`/ecommerce/customer/productdetails?id=${idx.id}`}>{idx.title}</Link></h6>
                                                                <div className="d-flex align-items-baseline fs-11">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                        <span>(142)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                                <Link scroll={false} onClick={()=>{ handleWishlist(idx.id)}} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                                    <i className="bi bi-heart outline"></i>
                                                                    <i className="bi bi-heart-fill filled"></i>
                                                                </Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4">
                                                            <h5 className="fw-semibold text-primary mb-0">{idx.newpr}</h5>
                                                            <span className="fs-13 ms-2 text-muted text-decoration-line-through">{idx.oldpr}</span>
                                                        </div>
                                                    </div>
                                                    <Link scroll={false} href="/ecommerce/customer/cart" 
                                                       onClick={()=> {handleAddToCart(idx.id)}}
                                                     className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        ))}
                                        <Col md={12}>
                                            {/* Start::pagination */}
                                            <nav aria-label="..." className="">
                                                <Pagination className="pagination justify-content-end mb-0">
                                                    <Pagination.Item disabled>Previous</Pagination.Item>
                                                    <Pagination.Item>1</Pagination.Item>
                                                    <Pagination.Item active>2</Pagination.Item>
                                                    <Pagination.Item>3</Pagination.Item>
                                                    <Pagination.Item className="pagination-next">Next</Pagination.Item>
                                                </Pagination>
                                            </nav>
                                            {/* End::pagination */}
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
                                        <img src="../../../assets/images/media/apps/apple-store.png" alt="" className="invert-1" />
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
const mapStateToProps = (state: any) => ({
    local_varaiable: state
});
export default connect(mapStateToProps,)(Shop);