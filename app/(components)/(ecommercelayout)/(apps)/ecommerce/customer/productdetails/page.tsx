"use client"
import Link from "next/link";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { Button, Card, Col, OverlayTrigger, ProgressBar, Row, Tooltip } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Lightbox } from "yet-another-react-lightbox";
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { Autoplay } from "swiper/modules";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import { Ecommercecontext } from "@/shared/contextapi";
import { useSearchParams } from "next/navigation";
const Productdetails = () => {
    const [open, setOpen] = useState(false);
    const Updatedvalue :any= useContext(Ecommercecontext);
    const searchParams:any = useSearchParams()
    const id  = searchParams.get('id') > Updatedvalue.productdata.shopdata.length || searchParams.get('id') == null ? 2:searchParams.get('id')
    const [product, setproduct] = useState<any>()
    
    useEffect(() => {
        setproduct(Updatedvalue.productdata.shopdata.filter((ele:any)=>ele.id == id)[0])
      }, []);
      
return ( 
    <Fragment>
     <div className="main-content landing-main ecommerce-main">

                {/* Start:: Breadcrumb*/}
                <div className="border-bottom py-3">
                    <div className="container">
                        {/* Page Header */}
                            <Seo title={"Product Details"} />
                            <Pageheader Heading="" Pagetitle={true} Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true},{title:"Customer", active:true}, {title:"Product Details", active:false}]} />
                        {/* Page Header Close */}
                    </div>
                </div>
                {/* End:: Breadcrumb*/}

                {/* Start:: Section-1 */}
                <section className="section py-4">
                    <div className="container">
                        <Row>
                            <Col xl={6}>
                                <Card className="custom-card">
                                    <Card.Body className="p-2">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                            <Link scroll={false} href="#!" className="btn btn-light btn-icon rounded-circle top-wishlist-icon" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill"></i></Link>
                                        </OverlayTrigger>
                                        <Link scroll={false} onClick={() => setOpen(true)} href="#!" className="glightbox card border-0 mb-0" data-gallery="gallery1" data-title="Radiant Rainbow Runners (1/5)" data-type="image" data-draggable="true"> 
                                            <div className="ecommerce-gallery">
                                                <span className="badge bg-warning tag-badge">Featured</span>
                                                <span className="btn btn-primary-light classifyimage-btn rounded-pill" ><i className="ri-image-line me-2 bg-primary text-fixed-white feature-icons border-0"></i>5 Images</span>
                                                <img className=""
                                                 src={product?.preview} 
                                                 alt="image"/>
                                            </div>
                                        </Link>                                 
                                        {/* Start::row-1 */}
                                        <div className="row ad-gallery">
                                            <Lightbox
                                            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                                                open={open}
                                                close={() => setOpen(false)}
                                                slides={product?.images}
                                            />
                                        </div>
                                        {/*End::row-1 */}
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={6}>
                                <Card className="custom-card">
                                    <Card.Body>
                                        <div>
                                            <p className="fs-18 fw-semibold mb-0">Revolutionary Radiance: Introducing Radiant Rainbow Runners</p>
                                            <p className="fs-18 mb-4">
                                                <i className="ri-star-s-fill text-warning align-middle"></i>
                                                <i className="ri-star-s-fill text-warning align-middle"></i>
                                                <i className="ri-star-s-fill text-warning align-middle"></i>
                                                <i className="ri-star-s-fill text-warning align-middle"></i>
                                                <i className="ri-star-half-s-fill text-warning align-middle"></i> 
                                                <span className="fw-semibold ms-1">4.3<Link scroll={false} className="text-info ms-2" href="#!">(2.4k Reviews)</Link></span>
                                            </p>
                                            <div className="row mb-4">
                                                <div className="col-xxl-5 col-xl-12">
                                                    <p className="mb-1 lh-1 fs-11 text-success fw-semibold">Special Offer</p>
                                                    <p className="mb-1"><span className="h3 fw-semibold"><sup className="fs-14">$</sup>1,299<sup className="fs-14">.00</sup></span><span className="ms-3 badge bg-danger-transparent">50% Off</span></p>
                                                    <p className="mb-0 text-muted fs-12">M.R.P-<s>$2,599.00</s></p>
                                                </div>
                                                <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-6 col-sm-12 mt-xxl-0 mt-3">
                                                    <p className="mb-2 fs-15 fw-semibold">Shoe Material</p>
                                                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                        <input type="radio" className="btn-check" name="shoe-material" id="shoe1" defaultChecked/>
                                                        <label className="btn btn-outline-light text-default" htmlFor="shoe1">Leather</label>
                                                        <input type="radio" className="btn-check" name="shoe-material" id="shoe2"/>
                                                        <label className="btn btn-outline-light text-default" htmlFor="shoe2">Mesh Fabric</label>
                                                        <input type="radio" className="btn-check" name="shoe-material" id="shoe3"/>
                                                        <label className="btn btn-outline-light text-default" htmlFor="shoe3">Synthetic</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <p className="fs-15 fw-semibold mb-1">Description :</p>
                                                <p className="text-muted mb-0 fs-13">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusamus,<Link scroll={false} href="#!" className="text-decoration-underline text-muted">Read More ?</Link>
                                                </p>
                                            </div>
                                            <div className="mb-4">
                                                <Row>
                                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                        <p className="fs-15 fw-semibold mb-2">Colors :</p>
                                                        <p className="mb-0 d-flex">
                                                            <Link scroll={false} className="color-1 product-colors selected" href="#!">
                                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                                            </Link>
                                                            <Link scroll={false} className="color-2 product-colors" href="#!">
                                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                                            </Link>
                                                            <Link scroll={false} className="color-3 product-colors" href="#!">
                                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                                            </Link>
                                                            <Link scroll={false} className="color-4 product-colors" href="#!">
                                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                                            </Link>
                                                            <Link scroll={false} className="color-5 product-colors" href="#!">
                                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                                            </Link>
                                                        </p>
                                                    </div>
                                                    <div className="col-xl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-md-0 mt-3">
                                                        <p className="fs-15 fw-semibold mb-2">Available Size(UK) :</p>
                                                        <p className="mb-0 d-flex">
                                                            <Link scroll={false} className="color-1 product-sizes selected" href="#!">
                                                                6
                                                            </Link>
                                                            <Link scroll={false} className="color-2 product-sizes" href="#!">
                                                                7
                                                            </Link>
                                                            <Link scroll={false} className="color-3 product-sizes" href="#!">
                                                                8
                                                            </Link>
                                                            <Link scroll={false} className="color-3 product-sizes" href="#!">
                                                                9
                                                            </Link>
                                                            <Link scroll={false} className="color-3 product-sizes" href="#!">
                                                                10
                                                            </Link>
                                                            <Link scroll={false} className="color-3 product-sizes" href="#!">
                                                                11
                                                            </Link>
                                                            <Link scroll={false} className="color-3 product-sizes" href="#!">
                                                                12
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </Row>
                                            </div>
                                            <div className="d-flex align-items-stretch gap-2 mb-0">
                                                <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-lg btn-primary-light" data-bs-toggle="tooltip" aria-label="Add to cart"><i className="ti ti-shopping-cart-plus"></i></Link>
                                                <Link scroll={false} href="/ecommerce/customer/checkout/" className="btn btn-lg btn-primary">Buy Now</Link>
                                                <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-lg btn-primary-light" data-bs-toggle="tooltip" aria-label="Compare"><i className="ti ti-circle-half-2"></i></Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={8}>
                                <Card className="custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                            Product Details
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body className="p-0">
                                        <div className="table-responsive">
                                            <table className="table text-nowrap">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" className="fw-semibold">
                                                            Brand
                                                        </th>
                                                        <td>VelocityStride</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="fw-semibold">
                                                            Model Name
                                                        </th>
                                                        <td>
                                                            QuantumFlex 5000
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="fw-semibold">
                                                            Color
                                                        </th>
                                                        <td>
                                                            Galactic Blue Nebula
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="fw-semibold">
                                                            Style
                                                        </th>
                                                        <td>
                                                            Running Shoes
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="fw-semibold">
                                                            Special Features
                                                        </th>
                                                        <td>
                                                            GravityGrip,AeroVent Breathability,FlexiFit Customization,LunarLite Sole e.t.c
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card">
                                    <Card.Header>
                                        <Card.Title>Description</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        
                                    <p className="mb-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusamus, quaerat nam quo optio reiciendis harum reprehenderit omnis tempora adipisci in iste aperiam unde, repellendus possimus explicabo veritatis? Dignissimos, id.
                                    </p>
                                    <p className="mb-3">
                                        Obcaecati accusamus, quaerat nam quo optio reiciendis harum reprehenderit omnis tempora adipisci in iste aperiam unde, repellendus possimus explicabo veritatis? Dignissimos, id.
                                    </p>
                                    <p className="mb-0">Labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore..</p>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                            Reviews & Ratings
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <div className="col-xxl-4 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                <div className="d-flex align-items-top mb-3">
                                                    <div className="me-2 lh-1">
                                                        <i className="ri-star-fill fs-25 text-warning"></i>
                                                    </div>
                                                    <div className="lh-1">
                                                        <p className="mb-1 fw-semibold">4.2 out of 5</p>
                                                        <p className="mb-0 text-muted fs-11">Based on (23,435) ratings</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="fs-12 me-2 fw-semibold">5 <i className="ri-star-fill fs-10"></i></div>
                                                    <ProgressBar className="progress progress-xs flex-fill" variant="success" now={55}  />
                                                    <div className="text-muted ms-2 fs-12">(10,893)</div>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="fs-12 me-2 fw-semibold">4 <i className="ri-star-fill fs-10"></i></div>
                                                    <ProgressBar className="progress progress-xs flex-fill" variant="success" now={22}  />
                                                    <div className="text-muted ms-2 fs-12">(6,534)</div>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="fs-12 me-2 fw-semibold">3 <i className="ri-star-fill fs-10"></i></div>
                                                    <ProgressBar className="progress progress-xs flex-fill" variant="success" now={8}  />
                                                    <div className="text-muted ms-2 fs-12">(4,342)</div>
                                                </div>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="fs-12 me-2 fw-semibold">2 <i className="ri-star-fill fs-10"></i></div>
                                                    <ProgressBar className="progress progress-xs flex-fill" variant="warning" now={9}  />
                                                    <div className="text-muted ms-2 fs-12">(1,432)</div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="fs-12 me-2 fw-semibold">1 <i className="ri-star-fill fs-10"></i></div>
                                                    <ProgressBar className="progress progress-xs flex-fill" variant="danger" now={6}  />
                                                    <div className="text-muted ms-2 fs-12">(1,453)</div>
                                                </div>
                                            </div>
                                            <Col xxl={8} xl={12}  lg={12} md={12} sm={12}  className="mt-xxl-0 mt-3">
                                                <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                                    modules={[Autoplay]} className="swiper-reviews">
                                                        <SwiperSlide>
                                                            <Card className="custom-card mb-0">
                                                                <Card.Body>
                                                                    <div className="d-sm-flex d-block align-items-top mb-3">
                                                                        <div className="d-flex flex-fill">
                                                                            <div className="me-2">
                                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                                    <img src="../../../assets/images/faces/15.jpg" alt="" />
                                                                                </span>
                                                                            </div>
                                                                            <div className="lh-1 me-2">
                                                                                <p className="mb-1 fw-semibold fs-14">Alex Carey</p>
                                                                                <div className="mb-1">
                                                                                    <i className="ri-star-s-fill text-warning align-middle fs-12"></i>
                                                                                    <i className="ri-star-s-fill text-warning align-middle fs-12"></i>
                                                                                    <i className="ri-star-s-fill text-warning align-middle fs-12"></i>
                                                                                    <i className="ri-star-s-fill text-warning align-middle fs-12"></i>
                                                                                    <i className="ri-star-s-line text-warning align-middle fs-12"></i>
                                                                                </div>
                                                                                <div className="fs-11 text-muted">
                                                                                    Reviewed on 24 nov,2024
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ps-sm-0 mt-sm-0 mt-3 ps-sm-0 ps-2">
                                                                            <span className="badge bg-success">Verified Purchase</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <p className="fw-semibold mb-1 ps-2">Absolute Game-Changer! &#128077;</p>
                                                                        <p className="mb-0 fs-12 text-muted ps-2">VelocityStride's QuantumFlex 5000 is a revelation! The GravityGrip Technology delivers unmatched stability, and the AeroVent Breathability kept my feet cool even during intense workouts. A must-have for anyone serious about comfort. </p>
                                                                    </div>
                                                                    <div className="product-images">
                                                                        <Row>
                                                                            <Col xl={6}>
                                                                                <div className="products-review-images d-flex">
                                                                                    <Link scroll={false} href="#!">
                                                                                        <img src="../../../assets/images/ecommerce/png/2.png" alt="" />
                                                                                    </Link>
                                                                                    <Link scroll={false} href="#!">
                                                                                        <img src="../../../assets/images/ecommerce/png/4.png" alt="" />
                                                                                    </Link>
                                                                                </div>
                                                                            </Col>
                                                                            <div className="col-xl-6 d-flex align-items-end justify-content-sm-end mt-sm-0 mt-2">
                                                                                <Button variant="" className="btn btn-sm btn-light me-2">Report abuse</Button>
                                                                                <Button variant="" className="btn btn-sm btn-icon btn-primary-light me-2">
                                                                                    <i className="ri-thumb-up-line"></i>
                                                                                </Button>
                                                                                <Button variant="" className="btn btn-sm btn-icon btn-primary-light">
                                                                                    <i className="ri-thumb-down-line"></i>
                                                                                </Button>
                                                                            </div>
                                                                        </Row>
                                                                    </div>
                                                                </Card.Body>
                                                            </Card>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <Card className="custom-card mb-0">
                                                                <Card.Body>
                                                                    <div className="d-sm-flex d-block align-items-top mb-3">
                                                                        <div className="d-flex flex-fill">
                                                                            <div className="me-2">
                                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                                    <img src="../../../assets/images/faces/1.jpg" alt="" />
                                                                                </span>
                                                                            </div>
                                                                            <div className="lh-1 me-2">
                                                                                <p className="mb-1 fw-semibold fs-14">Jack Miller</p>
                                                                                <div className="mb-1">
                                                                                    <i className="ri-star-s-fill text-warning align-middle fs-12"></i>
                                                                                    <i className="ri-star-s-fill text-warning align-middle fs-12"></i>
                                                                                    <i className="ri-star-s-fill text-warning align-middle fs-12"></i>
                                                                                    <i className="ri-star-s-fill text-warning align-middle fs-12"></i>
                                                                                    <i className="ri-star-s-line text-warning align-middle fs-12"></i>
                                                                                </div>
                                                                                <div className="fs-11 text-muted">
                                                                                    Reviewed on 31 Nov,2024
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ps-sm-0 mt-sm-0 mt-3 ps-sm-0 ps-2">
                                                                            <span className="badge bg-success">Verified Purchase</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <p className="fw-semibold mb-1 ps-2">Out of this World Comfort &#128095;</p>
                                                                        <p className="mb-0 fs-12 text-muted ps-2">I've never experienced such cushioning! The ShockShield technology is a game-changer for my daily runs. The FlexiFit Customization is a nice touch, ensuring a snug fit. Plus, the Galactic Blue Nebula color is an attention-grabber. </p>
                                                                    </div>
                                                                    <div className="product-images">
                                                                        <Row>
                                                                            <Col xl={6}>
                                                                                <div className="products-review-images d-flex">
                                                                                    <Link scroll={false} href="#!">
                                                                                        <img src="../../../assets/images/ecommerce/png/4.png" alt="" />
                                                                                    </Link>
                                                                                    <Link scroll={false} href="#!">
                                                                                        <img src="../../../assets/images/ecommerce/png/1.png" alt="" />
                                                                                    </Link>
                                                                                </div>
                                                                            </Col>
                                                                            <div className="col-xl-6 d-flex align-items-end justify-content-sm-end mt-sm-0 mt-2">
                                                                                <Button variant="" className="btn btn-sm btn-light me-2">Report abuse</Button>
                                                                                <Button variant="" className="btn btn-sm btn-icon btn-primary-light me-2">
                                                                                    <i className="ri-thumb-up-line"></i>
                                                                                </Button>
                                                                                <Button variant="" className="btn btn-sm btn-icon btn-primary-light">
                                                                                    <i className="ri-thumb-down-line"></i>
                                                                                </Button>
                                                                            </div>
                                                                        </Row>
                                                                    </div>
                                                                </Card.Body>
                                                            </Card>
                                                        </SwiperSlide>
                                                </Swiper>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className="custom-card">
                                    <Card.Body>									
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <p className="fs-15 mb-0 me-4 fw-semibold">Share :</p>
                                            <div className="btn-list mb-0">
                                                <Button variant="" className="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light mb-md-0">
                                                    <i className="ri-whatsapp-line"></i>
                                                </Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light mb-md-0">
                                                    <i className="ri-instagram-line"></i>
                                                </Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light mb-md-0">
                                                    <i className="ri-twitter-x-line"></i>
                                                </Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light mb-md-0">
                                                    <i className="ri-youtube-line"></i>
                                                </Button>
                                                <Button variant="" className="btn btn-sm btn-icon btn-info-light btn-wave waves-effect waves-light mb-md-0">
                                                    <i className="ri-facebook-line"></i>
                                                </Button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card overflow-hidden">
                                    <Card.Header>
                                        <Card.Title>
                                            Similar Products 
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body className="p-0">
                                        <div className="table-responsive">
                                            <table className="table text-nowrap">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <Link scroll={false} href="#!">
                                                                <div className="d-flex align-items-top">
                                                                    <div className="similar-products-image me-2">
                                                                        <img src="../../../assets/images/ecommerce/png/29.png" alt="" />
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <p className="mb-1 fs-14 fw-semibold similar-product-name text-truncate">CapturePro Camera </p>
                                                                        <p className="mb-0">
                                                                            <span className="badge bg-success">4.4<i className="ri-star-s-fill ms-1"></i></span>
                                                                            <span className="text-muted ms-1">(13,256)</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="text-center">
                                                                        <p className="mb-0 fs-16 fw-semibold">
                                                                            $1,099
                                                                        </p>
                                                                        <p className="mb-0 text-muted">
                                                                            <s>$1,759</s>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Link scroll={false} href="#!">
                                                                <div className="d-flex align-items-top">
                                                                    <div className="similar-products-image me-2">
                                                                        <img src="../../../assets/images/ecommerce/png/30.png" alt="" />
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <p className="mb-1 fs-14 fw-semibold similar-product-name text-truncate">SoundSync Headphones</p>
                                                                        <p className="mb-0">
                                                                            <span className="badge bg-success">3.8<i className="ri-star-s-fill ms-1"></i></span>
                                                                            <span className="text-muted ms-1">(5,289)</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="text-center">
                                                                        <p className="mb-0 fs-16 fw-semibold">
                                                                            $7,99
                                                                        </p>
                                                                        <p className="mb-0 text-muted">
                                                                            <s>$1,299</s>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Link scroll={false} href="#!">
                                                                <div className="d-flex align-items-top">
                                                                    <div className="similar-products-image me-2">
                                                                        <img src="../../../assets/images/ecommerce/png/31.png" alt="" />
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <p className="mb-1 fw-semibold similar-product-name text-truncate">Western Ladies Bag</p>
                                                                        <p className="mb-0">
                                                                            <span className="badge bg-success">4.1<i className="ri-star-s-fill ms-1"></i></span>
                                                                            <span className="text-muted ms-1">(2,476)</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="text-center">
                                                                        <p className="mb-0 fs-16 fw-semibold">
                                                                            $1,499
                                                                        </p>
                                                                        <p className="mb-0 text-muted">
                                                                            <s>$2,599</s>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Link scroll={false} href="#!">
                                                                <div className="d-flex align-items-top">
                                                                    <div className="similar-products-image me-2">
                                                                        <img src="../../../assets/images/ecommerce/png/32.png" alt="" />
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <p className="mb-1 fw-semibold similar-product-name text-truncate">Elitr Alarm Clock</p>
                                                                        <p className="mb-0">
                                                                            <span className="badge bg-success">3.8<i className="ri-star-s-fill ms-1"></i></span>
                                                                            <span className="text-muted ms-1">(1,893)</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="text-center">
                                                                        <p className="mb-0 fs-16 fw-semibold">
                                                                            $2,299
                                                                        </p>
                                                                        <p className="mb-0 text-muted">
                                                                            <s>$3,299</s>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Link scroll={false} href="#!">
                                                                <div className="d-flex align-items-top">
                                                                    <div className="similar-products-image me-2">
                                                                        <img src="../../../assets/images/ecommerce/png/33.png" alt="" />
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <p className="mb-1 fw-semibold similar-product-name text-truncate">Sports Shoes</p>
                                                                        <p className="mb-0">
                                                                            <span className="badge bg-success">4.5<i className="ri-star-s-fill ms-1"></i></span>
                                                                            <span className="text-muted ms-1">(12,923)</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="text-center">
                                                                        <p className="mb-0 fs-16 fw-semibold">
                                                                            $8,99
                                                                        </p>
                                                                        <p className="mb-0 text-muted">
                                                                            <s>$1,299</s>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Link scroll={false} href="#!">
                                                                <div className="d-flex align-items-top">
                                                                    <div className="similar-products-image me-2">
                                                                        <img src="../../../assets/images/ecommerce/png/6.png" alt="" />
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <p className="mb-1 fw-semibold similar-product-name text-truncate">Wooden Chair</p>
                                                                        <p className="mb-0">
                                                                            <span className="badge bg-success">4.1<i className="ri-star-s-fill ms-1"></i></span>
                                                                            <span className="text-muted ms-1">(453)</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="text-center">
                                                                        <p className="mb-0 fs-16 fw-semibold">
                                                                            $1,799
                                                                        </p>
                                                                        <p className="mb-0 text-muted">
                                                                            <s>$2,499</s>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Link scroll={false} href="#!">
                                                                <div className="d-flex align-items-top">
                                                                    <div className="similar-products-image me-2">
                                                                        <img src="../../../assets/images/ecommerce/png/20.png" alt="" />
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <p className="mb-1 fw-semibold similar-product-name text-truncate">Adibas Men's Shoes</p>
                                                                        <p className="mb-0">
                                                                            <span className="badge bg-success">4.3<i className="ri-star-s-fill ms-1"></i></span>
                                                                            <span className="text-muted ms-1">(1,874)</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="text-center">
                                                                        <p className="mb-0 fs-16 fw-semibold">
                                                                            $2,299
                                                                        </p>
                                                                        <p className="mb-0 text-muted">
                                                                            <s>$2,999</s>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="d-grid border-bottom-0">
                                                            <Button variant="" className="btn btn-primary-light">View All Products</Button>
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
                <section className="section-sm">
                    <div className="container">					
                        <h5 className="heading-title">Related Products</h5>
                        <p className="">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                                   modules={[Autoplay]}
                                                    className="swiper swiper-related-products">
                                <SwiperSlide>
                                    <Row>
                                        <Col lg={3} md={6} sm={6} className="">
                                            <Card className="custom-card card-style-2">
                                                <Card.Body className="p-0">
                                                    <span className="badge bg-pink-transparent text-pink top-left-badge">25% Off</span>
                                                    <div className="card-img-top border-bottom border-block-end-dashed">
                                                        <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                        <div className="btns-container-1 align-items-center gap-1">
                                                            <Link scroll={false} href="#!" className="btn btn-icon rounded-circle btn-primary"><i className="ti ti-eye fs-16"></i></Link>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                        <div className="img-box-2 p-2">
                                                            <img src="../../../assets/images/ecommerce/png/30.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                        </div>
                                                    </div>
                                                    <div className="p-3">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Top Brand</Link>
                                                                <h6 className="mb-1 fw-semibold fs-16"><Link scroll={false} href="/ecommerce/customer/productdetails/">SoundSync Headphones</Link></h6>
                                                                <div className="d-flex align-items-baseline fs-11">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
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
                                                                    <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                                        <i className="bi bi-heart outline"></i>
                                                                        <i className="bi bi-heart-fill filled"></i>
                                                                    </Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4">
                                                            <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                            <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                        </div>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col lg={3} md={6} sm={6} className="">
                                            <Card className="custom-card card-style-2">
                                                <Card.Body className="p-0">
                                                    <div className="badge top-right-badge bg-danger text-fixed-white">
                                                        <div className="badge-icon"><i className="ti ti-flame fs-14"></i></div>
                                                        <div className="badge-text">Hot</div>
                                                    </div>
                                                    <div className="card-img-top border-bottom border-block-end-dashed">
                                                        <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                        <div className="btns-container-1 align-items-center gap-1">
                                                            <Link scroll={false} href="#!" className="btn btn-icon rounded-circle btn-primary"><i className="ti ti-eye fs-16"></i></Link>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                        <div className="img-box-2 p-2">
                                                            <img src="../../../assets/images/ecommerce/png/31.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                        </div>
                                                    </div>
                                                    <div className="p-3">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                        <div className="flex-grow-1">
                                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Vellintn</Link>
                                                            <h6 className="mb-1 fw-semibold fs-16"><Link scroll={false} href="/ecommerce/customer/productdetails/">Western Ladies Bag</Link></h6>
                                                            <div className="d-flex align-items-baseline fs-11">
                                                                <div className="min-w-fit-content">
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
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
                                                                <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                                    <i className="bi bi-heart outline"></i>
                                                                    <i className="bi bi-heart-fill filled"></i>
                                                                </Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-baseline mt-4">
                                                        <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                        <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                    </div>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col lg={3} md={6} sm={6} className="">
                                            <Card className="custom-card card-style-2">
                                                <Card.Body className="p-0">
                                                    <span className="badge bg-info-transparent text-info top-left-badge">60% Off</span>
                                                    <div className="card-img-top border-bottom border-block-end-dashed">
                                                        <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                        <div className="btns-container-1 align-items-center gap-1">
                                                            <Link scroll={false} href="#!" className="btn btn-icon rounded-circle btn-primary"><i className="ti ti-eye fs-16"></i></Link>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                        <div className="img-box-2 p-2">
                                                            <img src="../../../assets/images/ecommerce/png/32.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                        </div>
                                                    </div>
                                                    <div className="p-3">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                        <div className="flex-grow-1">
                                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Top brand</Link>
                                                            <h6 className="mb-1 fw-semibold fs-16"><Link scroll={false} href="/ecommerce/customer/productdetails/">Twin Bell Alarm Clock</Link></h6>
                                                            <div className="d-flex align-items-baseline fs-11">
                                                                <div className="min-w-fit-content">
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
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
                                                            <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                                <i className="bi bi-heart outline"></i>
                                                                <i className="bi bi-heart-fill filled"></i>
                                                            </Link>
                                                        </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-baseline mt-4">
                                                        <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                        <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                    </div>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col lg={3} md={6} sm={6} className="">
                                            <Card className="custom-card card-style-2">
                                                <Card.Body className="p-0">
                                                    <span className="badge bg-secondary-transparent text-secondary top-left-badge">60% Off</span>
                                                    <div className="badge top-right-badge bg-success text-fixed-white">
                                                        <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                        <div className="badge-text">Trending</div>
                                                    </div>
                                                    <div className="card-img-top border-bottom border-block-end-dashed">
                                                        <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                        <div className="btns-container-1 align-items-center gap-1">
                                                            <Link scroll={false} href="#!" className="btn btn-icon rounded-circle btn-primary"><i className="ti ti-eye fs-16"></i></Link>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                        <div className="img-box-2 p-2">
                                                            <img src="../../../assets/images/ecommerce/png/33.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                        </div>
                                                    </div>
                                                    <div className="p-3">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                        <div className="flex-grow-1">
                                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Adibas</Link>
                                                            <h6 className="mb-1 fw-semibold fs-16"><Link scroll={false} href="/ecommerce/customer/productdetails/">Adibas Men's Shoes</Link></h6>
                                                            <div className="d-flex align-items-baseline fs-11">
                                                                <div className="min-w-fit-content">
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
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
                                                            <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                                <i className="bi bi-heart outline"></i>
                                                                <i className="bi bi-heart-fill filled"></i>
                                                            </Link>
                                                        </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-baseline mt-4">
                                                        <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                        <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                    </div>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Row>
                                        <Col lg={3} md={6} sm={6} className="">
                                            <Card className="custom-card card-style-2">
                                                <Card.Body className="p-0">
                                                    <span className="badge bg-secondary-transparent text-secondary top-left-badge">60% Off</span>
                                                    <div className="badge top-right-badge bg-success text-fixed-white">
                                                        <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                        <div className="badge-text">Trending</div>
                                                    </div>
                                                    <div className="card-img-top border-bottom border-block-end-dashed">
                                                        <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                        <div className="btns-container-1 align-items-center gap-1">
                                                            <Link scroll={false} href="#!" className="btn btn-icon rounded-circle btn-primary"><i className="ti ti-eye fs-16"></i></Link>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                        <div className="img-box-2 p-2">
                                                            <img src="../../../assets/images/ecommerce/png/11.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                        </div>
                                                    </div>
                                                    <div className="p-3">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                        <div className="flex-grow-1">
                                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Top Brand</Link>
                                                            <h6 className="mb-1 fw-semibold fs-16"><Link scroll={false} href="/ecommerce/customer/productdetails/">Vintage pure leather Jacket</Link></h6>
                                                            <div className="d-flex align-items-baseline fs-11">
                                                                <div className="min-w-fit-content">
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
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
                                                                <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                                    <i className="bi bi-heart outline"></i>
                                                                    <i className="bi bi-heart-fill filled"></i>
                                                                </Link>
                                                        </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-baseline mt-4">
                                                        <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                        <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                    </div>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col lg={3} md={6} sm={6} className="">
                                            <Card className="custom-card card-style-2">
                                                <Card.Body className="p-0">
                                                    <span className="badge bg-info-transparent text-info top-left-badge">60% Off</span>
                                                    <div className="card-img-top border-bottom border-block-end-dashed">
                                                        <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                        <div className="btns-container-1 align-items-center gap-1">
                                                            <Link scroll={false} href="#!" className="btn btn-icon rounded-circle btn-primary"><i className="ti ti-eye fs-16"></i></Link>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                            <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                            <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                        </OverlayTrigger>
                                                        </div>
                                                        <div className="img-box-2 p-2">
                                                            <img src="../../../assets/images/ecommerce/png/15.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                        </div>
                                                    </div>
                                                    <div className="p-3">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                        <div className="flex-grow-1">
                                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Adibas</Link>
                                                            <h6 className="mb-1 fw-semibold fs-16"><Link scroll={false} href="/ecommerce/customer/productdetails/">Adibas Men's Shoes</Link></h6>
                                                            <div className="d-flex align-items-baseline fs-11">
                                                                <div className="min-w-fit-content">
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
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
                                                                <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                                    <i className="bi bi-heart outline"></i>
                                                                    <i className="bi bi-heart-fill filled"></i>
                                                                </Link>
                                                        </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-baseline mt-4">
                                                        <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                        <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                    </div>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col lg={3} md={6} sm={6} className="">
                                            <Card className="custom-card card-style-2">
                                                <Card.Body className="p-0">
                                                    <div className="badge top-right-badge bg-orange text-fixed-white">
                                                        <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                        <div className="badge-text">Trending</div>
                                                    </div>
                                                    <div className="card-img-top border-bottom border-block-end-dashed">
                                                        <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                        <div className="btns-container-1 align-items-center gap-1">
                                                            <Link scroll={false} href="#!" className="btn btn-icon rounded-circle btn-primary"><i className="ti ti-eye fs-16"></i></Link>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                        <div className="img-box-2 p-2">
                                                            <img src="../../../assets/images/ecommerce/png/12.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                        </div>
                                                    </div>
                                                    <div className="p-3">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                        <div className="flex-grow-1">
                                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Blueberry & Co</Link>
                                                            <h6 className="mb-1 fw-semibold fs-16"><Link scroll={false} href="/ecommerce/customer/productdetails/">Light colored sweater</Link></h6>
                                                            <div className="d-flex align-items-baseline fs-11">
                                                                <div className="min-w-fit-content">
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
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
                                                                <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                                    <i className="bi bi-heart outline"></i>
                                                                    <i className="bi bi-heart-fill filled"></i>
                                                                </Link>
                                                        </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-baseline mt-4">
                                                        <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                        <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                    </div>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col lg={3} md={6} sm={6} className="">
                                            <Card className="custom-card card-style-2">
                                                <Card.Body className="p-0">
                                                    <span className="badge bg-pink-transparent text-pink top-left-badge">25% Off</span>
                                                    <div className="card-img-top border-bottom border-block-end-dashed">
                                                        <Link scroll={false} href="/ecommerce/customer/productdetails/" className="stretched-link"></Link>
                                                        <div className="btns-container-1 align-items-center gap-1">
                                                            <Link scroll={false} href="#!" className="btn btn-icon rounded-circle btn-primary"><i className="ti ti-eye fs-16"></i></Link>
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Compare</Tooltip>}>
                                                                <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="btn btn-icon btn-primary rounded-circle"><i className="ti ti-circle-half-2 fs-16"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to cart</Tooltip>}>
                                                                <Link scroll={false} href="/ecommerce/customer/cart/" className="btn btn-icon btn-primary rounded-circle" data-bs-toggle="tooltip" title="Add to cart"><i className="ti ti-shopping-cart-plus fs-16"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                        <div className="img-box-2 p-2">
                                                            <img src="../../../assets/images/ecommerce/png/23.png" alt="img" className="scale-img img-fluid w-100 bg-light rounded"/>
                                                        </div>
                                                    </div>
                                                    <div className="p-3">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                        <div className="flex-grow-1">
                                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Top Brand</Link>
                                                            <h6 className="mb-1 fw-semibold fs-16"><Link scroll={false} href="/ecommerce/customer/productdetails/">Orange Watch Series</Link></h6>
                                                            <div className="d-flex align-items-baseline fs-11">
                                                                <div className="min-w-fit-content">
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
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
                                                                <Link scroll={false} href="/ecommerce/customer/wishlist/" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                                    <i className="bi bi-heart outline"></i>
                                                                    <i className="bi bi-heart-fill filled"></i>
                                                                </Link>
                                                        </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-baseline mt-4">
                                                        <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                        <span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
                                                    </div>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="btn btn-primary-transparent btn-lg border-0 btn-style-1"><i className="ti ti-shopping-cart-plus me-1"></i>Add</Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                {/* End:: Section-2 */}

                {/* Start:: Section-3 */}
                <section className="section-sm">
                    <div className="container">
                        <Row>
                            <Col xl={4}>
                                <Card className="card-style-3 custom-card">
                                    <Card.Body>
                                        <div className="d-flex align-items-start gap-3">
                                            <div className="min-w-fit-content">
                                                <span className="avatar bg-info text-fixed-white"><i className="ti ti-truck-delivery fs-20"></i></span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <p className="mb-0 fw-semibold fs-16 text-info">Free Delivery</p>
                                                <p className="mb-0 fs-13 text-muted">Consetetur eirmod dolor stet justo gubergren ea et lorem sadipscing.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={4}>
                                <Card className="card-style-3 custom-card">
                                    <Card.Body>
                                        <div className="d-flex align-items-start gap-3">
                                            <div className="min-w-fit-content">
                                                <span className="avatar bg-warning text-fixed-white"><i className="ti ti-tags fs-20"></i></span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <p className="mb-0 fw-semibold fs-16 text-warning">Great Deals & Offers</p>
                                                <p className="mb-0 fs-13 text-muted">Consetetur eirmod dolor stet justo gubergren ea et lorem sadipscing.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={4}>
                                <div className="card card-style-3 custom-card ">
                                    <Card.Body>
                                        <div className="d-flex align-items-start gap-3">
                                            <div className="min-w-fit-content">
                                                <span className="avatar bg-danger text-fixed-white"><i className="ti ti-arrow-back-up fs-20"></i></span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <p className="mb-0 fw-semibold fs-16 text-danger">Easy Returns</p>
                                                <p className="mb-0 fs-13 text-muted">Consetetur eirmod dolor stet justo gubergren ea et lorem sadipscing.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
                {/* End:: Section-3 */}

                {/* Start:: Section-4 */}
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
                {/* End:: Section-4 */}

     </div>
    </Fragment>
    )
};

export default Productdetails;