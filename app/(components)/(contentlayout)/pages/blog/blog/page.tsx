"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Carousel, Col, ListGroup, Row } from "react-bootstrap";

const Blog = () => {
return (
<Fragment>
                {/* Page Header */}
                    <Seo title={"Blog"} />
                    <Pageheader Heading="Blog" Pages={[{title:"Pages", active:true},{title:"Blog", active:true},{title:"Blog", active:false}]} />
                {/* Page Header Close */}

                {/* Start:: row-1 */}
                <Row>
                    <Col xl={5}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Body className="p-0">
                                <Carousel fade indicators={false} controls={false} id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                                    <Link scroll={false} href="/pages/blog/blogdetails/" className="stretched-link">
                                    <div className="carousel-inner rounded-0">
                                        <Carousel.Item className="active">
                                            <img src="../../../assets/images/media/blog/2.jpg" className="d-block w-100" alt="..." />
                                        </Carousel.Item>
                                        <Carousel.Item className="">
                                            <img src="../../../assets/images/media/blog/3.jpg" className="d-block w-100" alt="..." />
                                        </Carousel.Item>
                                        <Carousel.Item className="">
                                            <img src="../../../assets/images/media/blog/1.jpg" className="d-block w-100" alt="..." />
                                        </Carousel.Item>
                                    </div>
                                        </Link>
                                </Carousel>
                                <div className="p-4">
                                    <h5 className="fw-semibold mb-3"><Link scroll={false} href="/pages/blog/blogdetails/">The Basics of 3D Imaging</Link></h5>
                                    <p className="mb-4">To kick things off, let's delve into the basics. Unlike traditional 2D images, 3D images add an extra dimension – depth. This depth is achieved by representing objects in three axes: width, height, and depth. It's this added dimension that tricks our brains into perceiving depth and realism. <Link scroll={false} href="#!" className="fw-medium text-muted ms-2 align-middle fs-12 text-Augoration-underline">Read More</Link></p>
                                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-xs avatar-rounded me-2">
                                                <img src="../../../assets/images/faces/11.jpg" alt="" />
                                            </div>
                                            <div>
                                                <p className="mb-0 fw-medium">Alister Chuk</p>
                                            </div>
                                        </div>
                                        <p className="text-muted fs-12 mb-0">18,Aug 2024 - 11:25</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={7}>
                        <Row>
                            <Col xl={8}>
                                <Card className="custom-card shadow-none">
                                    <div className="row g-0">
                                        <div className="col-sm-8">
                                            <Card.Body>
                                                <h6 className="fw-semibold">
                                                    <Link scroll={false} href="#!">Stereoscopic 3D: How It Works</Link>
                                                </h6>
                                                <span className="d-block mb-4">
                                                    Ever wondered how those jaw-dropping 3D movies create an illusion of depth that makes you feel like you're part of the action? <Link scroll={false} href="#!" className="fw-medium text-muted ms-2 align-middle fs-12 text-Augoration-underline">
                                                        Read More
                                                    </Link>
                                                </span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar avatar-xs avatar-rounded me-2">
                                                            <img src="../../../assets/images/faces/10.jpg" alt="" />
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-medium">Justin Kim</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-muted fs-12 mb-0">20,Aug 2024 - 16:32</div>
                                                </div>
                                            </Card.Body>
                                        </div>
                                        <div className="col-sm-4">
                                            <img src="../../../assets/images/media/blog/4.jpg" className="img-fluid rounded-end h-100 w-100" alt="..." />
                                        </div>
                                    </div>
                                </Card>
                                <Card className="custom-card shadow-none">
                                    <div className="row g-0">
                                        <div className="col-sm-8">
                                            <Card.Body>
                                                <h6 className="fw-semibold">
                                                    <Link scroll={false} href="#!">Anaglyph 3D: Old School, Still Cool</Link>
                                                </h6>
                                                <span className="d-block mb-4">
                                                    Remember those red and blue glasses from the past? relies on this classic technique. <Link scroll={false} href="#!" className="fw-medium text-muted ms-2 align-middle fs-12 text-Augoration-underline">
                                                        Read More
                                                    </Link>
                                                </span>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar avatar-xs avatar-rounded mb-1 me-2">
                                                            <img src="../../../assets/images/faces/5.jpg" alt="" />
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-medium">Monika Karen</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-muted fs-12 mb-0">25,Aug 2024 - 11:45</div>
                                                </div>
                                            </Card.Body>
                                        </div>
                                        <div className="col-sm-4">
                                            <img src="../../../assets/images/media/blog/5.jpg" className="img-fluid rounded-end h-100 w-100" alt="..." />
                                        </div>
                                    </div>
                                </Card>
                                <Card className="custom-card shadow-none">
                                    <div className="row g-0">
                                        <div className="col-sm-8">
                                            <Card.Body>
                                                <h6 className="fw-semibold">
                                                    <Link scroll={false} href="#!">The Future of 3D Imaging</Link>
                                                </h6>
                                                <span className="d-block mb-4">
                                                    As technology continues to advance, so does the world of 3D imaging. From holographic displays to glasses-free 3D experiences <Link scroll={false} href="#!" className="fw-medium text-muted ms-2 align-middle fs-12 text-Augoration-underline">
                                                        Read More
                                                    </Link>
                                                </span>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar avatar-xs avatar-rounded me-2">
                                                            <img src="../../../assets/images/faces/8.jpg" alt="" />
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-medium">Samantha Nans</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-muted fs-12 mb-0">25,Aug 2024 - 04:25</div>
                                                </div>
                                            </Card.Body>
                                        </div>
                                        <div className="col-sm-4">
                                            <img src="../../../assets/images/media/blog/6.jpg" className="img-fluid rounded-end h-100 w-100" alt="..." />
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col xl={4}>
                                <Card className="custom-card overflow-hidden">
                                    <Card.Header>
                                        <Card.Title>
                                            CATEGORIES
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body className="p-0">
                                        <ListGroup as="ul" className="list-group list-group-flush list-style">
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span className="fw-medium">Lifestyle</span>
                                                    <span className="badge bg-primary-transparent rounded-pill">24</span>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span className="fw-medium">Travel & Adventure</span>
                                                    <span className="badge bg-primary-transparent rounded-pill">43</span>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span className="fw-medium">Health & Wellness</span>
                                                    <span className="badge bg-primary-transparent rounded-pill">14</span>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span className="fw-medium">Technology</span>
                                                    <span className="badge bg-primary-transparent rounded-pill">132</span>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span className="fw-medium">Fashion & Beauty</span>
                                                    <span className="badge bg-primary-transparent rounded-pill">36</span>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span className="fw-medium">Finance</span>
                                                    <span className="badge bg-primary-transparent rounded-pill">04</span>
                                                </div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                                <Card className="custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                            POPULAR TAGS
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body className="py-4">
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <span className="badge bg-light text-default border">
                                                #Travel
                                            </span>
                                            <span className="badge bg-light text-default border">
                                                #Fitness
                                            </span>
                                            <span className="badge bg-light text-default border">
                                                #Fashion
                                            </span>
                                            <span className="badge bg-light text-default border">
                                                #FoodBlog
                                            </span>
                                            <span className="badge bg-light text-default border">
                                                #Crafting
                                            </span>
                                            <span className="badge bg-light text-default border">
                                                #BookReview
                                            </span>
                                            <span className="badge bg-light text-default border">
                                                #TechTalk
                                            </span>
                                            <span className="badge bg-light text-default border">
                                                #Parenting
                                            </span>
                                            <span className="badge bg-light text-default border">
                                                #Finance
                                            </span>
                                            <span className="badge bg-light text-default border">
                                                #SelfCare
                                            </span>
                                            <span className="badge bg-light text-default border">
                                                #Photography
                                            </span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                        <Card className="custom-card">
                            <Link scroll={false} href="#!">
                                <img src="../../../assets/images/media/blog/10.jpg" className="card-img-top" alt="..." />
                            </Link>
                            <Card.Body>
                                <Link scroll={false} href="/pages/blog/blogdetails/" className="h6 fw-semibold mb-2 d-block lh-base">Transforming Digital into Tangible.</Link>
                                <p className="mb-4">While we've been exploring the virtual aspects of 3D, let's not forget about the tangible wonders of 3D printing.<Link scroll={false} href="#!" className="fw-medium text-muted ms-2 align-middle fs-12 text-Augoration-underline">Read More ?</Link></p>
                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-xs avatar-rounded me-2">
                                            <img src="../../../assets/images/faces/4.jpg" alt="" />
                                        </div>
                                        <div>
                                            <p className="mb-0 fw-medium">Charlotte</p>
                                        </div>
                                    </div>
                                    <span className="text-muted fs-12 mb-0">18,Aug 2024 - 11:25</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                        <Card className="custom-card">
                            <Link scroll={false} href="#!">
                                <img src="../../../assets/images/media/blog/11.jpg" className="card-img-top" alt="..." />
                            </Link>
                            <Card.Body>
                                <Link scroll={false} href="/pages/blog/blogdetails/" className="h6 fw-semibold mb-2 lh-base d-block">Immersive 3D Worlds at Your Fingertips.</Link>
                                <p className="mb-4">Step into the world of Virtual Reality, where 3D images are not just seen but experienced. VR headsets transport<Link scroll={false} href="#!" className="fw-medium text-muted ms-2 align-middle fs-12 text-Augoration-underline">Read More ?</Link></p>
                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-xs avatar-rounded me-2">
                                            <img src="../../../assets/images/faces/12.jpg" alt="" />
                                        </div>
                                        <div>
                                            <p className="mb-0 fw-medium">Benjamin</p>
                                        </div>
                                    </div>
                                    <span className="text-muted fs-12 mb-0">18,Aug 2024 - 11:25</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                        <Card className="custom-card">
                            <Link scroll={false} href="#!">
                                <img src="../../../assets/images/media/blog/12.jpg" className="card-img-top" alt="..." />
                            </Link>
                            <Card.Body>
                                <Link scroll={false} href="/pages/blog/blogdetails/" className="fw-semibold h6 mb-2 d-block lh-base">Medical Imaging: Saving Lives with 3D Visualization</Link>
                                <p className="mb-4">Beyond entertainment, 3D imaging plays a crucial role in the field of medicine. Medical professionals leverage<Link scroll={false} href="#!" className="fw-medium text-muted ms-2 align-middle fs-12 text-Augoration-underline">Read More ?</Link></p>
                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-xs avatar-rounded me-2">
                                            <img src="../../../assets/images/faces/2.jpg" alt="" />
                                        </div>
                                        <div>
                                            <p className="mb-0 fw-medium">Isabella</p>
                                        </div>
                                    </div>
                                    <span className="text-muted fs-12 mb-0">18,Aug 2024 - 11:25</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                        <Card className="custom-card">
                            <Link scroll={false} href="#!">
                                <img src="../../../assets/images/media/blog/13.jpg" className="card-img-top" alt="..." />
                            </Link>
                            <Card.Body>
                                <Link scroll={false} href="/pages/blog/blogdetails/" className="fw-semibold h6 mb-2 d-block lh-base">Bridging the Gap Between Real and Virtual</Link>
                                <p className="mb-4">In the realm of augmented reality, 3D images blend seamlessly with the real world. AR overlays digital information<Link scroll={false} href="#!" className="fw-medium text-muted ms-2 align-middle fs-12 text-Augoration-underline">Read More ?</Link></p>
                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-xs avatar-rounded me-2">
                                            <img src="../../../assets/images/faces/14.jpg" alt="" />
                                        </div>
                                        <div>
                                            <p className="mb-0 fw-medium">William</p>
                                        </div>
                                    </div>
                                    <span className="text-muted fs-12 mb-0">18,Aug 2024 - 11:25</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-1 */}

                 {/* Start::row-2 */}
                 <Row>
                    <Col xl={12}>
                        <Row>
                            <Col xl={6} xxl={8} lg={12} md={12} className="">
                                <Row>
                                    <Col xxl={6} xl={6} lg={6} md={6} className="">
                                        <Card className="custom-card">
                                            <Link scroll={false} href="#!">
                                                <img src="../../../assets/images/media/blog/8.jpg" className="card-img-top" alt="..." />
                                            </Link>
                                            <Card.Body>
                                                <Link scroll={false} href="/pages/blog/blogdetails/" className="h6 fw-semibold mb-2 d-block lh-base">DIY 3D Modeling: Unleashing Your Creativity</Link>
                                                <p className="mb-4">Exploring the world of 3D images doesn't have to be limited to consumption – you can also become a creator! With accessible 3D modeling software, anyone can try their hand at designing 3D models. Whether you're crafting virtual worlds.<Link scroll={false} href="#!" className="fw-medium text-muted ms-2 align-middle fs-12 text-Augoration-underline">Read More ?</Link></p>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar avatar-xs avatar-rounded me-2">
                                                            <img src="../../../assets/images/faces/6.jpg" alt="" />
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-medium">Abigail</p>
                                                        </div>
                                                    </div>
                                                    <span className="text-muted fs-12 mb-0">16,Sep 2024 - 11:25</span>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6}>
                                        <Card className="custom-card">
                                            <Link scroll={false} href="#!">
                                                <img src="../../../assets/images/media/blog/9.jpg" className="card-img-top" alt="..." />
                                            </Link>
                                            <Card.Body>
                                                <Link scroll={false} href="/pages/blog/blogdetails/" className="h6 fw-semibold mb-2 d-block lh-base">3D Modeling Techniques: Crafting Digital Realities</Link>
                                                <p className="mb-4">3D modeling is the art of creating digital representations of objects or scenes. Artists and designers use various techniques  procedural generation, to shape 3D models. <Link scroll={false} href="#!" className="fw-medium text-muted ms-2 align-middle fs-12 text-Augoration-underline">Read More ?</Link></p>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar avatar-xs avatar-rounded me-2">
                                                            <img src="../../../assets/images/faces/16.jpg" alt="" />
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-medium">Anthony</p>
                                                        </div>
                                                    </div>
                                                    <span className="text-muted fs-12 mb-0">25,Sep 2024 - 11:25</span>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={6} xxl={4} lg={12} md={12} className="">
                                <Card className="custom-card overflow-hidden">
                                    <Card.Header className="d-flex align-items-center justify-content-between">
                                        <Card.Title>
                                            FEATURED BLOGS
                                        </Card.Title>
                                        <div>
                                            <span className="badge bg-primary-transparent">32 Blogs</span>
                                        </div>
                                    </Card.Header>
                                    <Card.Body className="p-0">
                                        <ListGroup as="ul" className="list-group list-group-flush">
                                            <ListGroup.Item>
                                                <div className="d-flex flex-wrap align-items-center gap-3">
                                                    <span className="avatar avatar-xl">
                                                        <img src="../../../assets/images/media/blog/14.jpg" className="img-fluid" alt="..." />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <Link scroll={false} href="#!" className="fs-14 fw-medium mb-0">Christopher Jack</Link>
                                                        <p className="mb-1 popular-blog-content text-truncate">
                                                            There are many variations of passages of Lorem Ipsum available
                                                        </p>
                                                        <span className="text-muted fs-11">24,Jul 2024 - 18:27</span>
                                                    </div>
                                                    <div>
                                                        <button className="btn btn-icon btn-light btn-sm rtl-rotate"><i className="ri-arrow-right-s-line"></i></button>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex flex-wrap align-items-center gap-3">
                                                    <span className="avatar avatar-xl">
                                                        <img src="../../../assets/images/media/blog/15.jpg" className="img-fluid" alt="..." />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <Link scroll={false} href="#!" className="fs-14 fw-medium mb-0">Sophia Sam</Link>
                                                        <p className="mb-1 popular-blog-content text-truncate">
                                                            Latin words, combined with a handful of model sentence
                                                        </p>
                                                        <span className="text-muted fs-11">28,Jul 2024 - 10:45</span>
                                                    </div>
                                                    <div>
                                                        <button className="btn btn-icon btn-light btn-sm rtl-rotate"><i className="ri-arrow-right-s-line"></i></button>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex flex-wrap align-items-center gap-3">
                                                    <span className="avatar avatar-xl">
                                                        <img src="../../../assets/images/media/blog/16.jpg" className="img-fluid" alt="..." />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <Link scroll={false} href="#!" className="fs-14 fw-medium mb-0">Anthony Karon</Link>
                                                        <p className="mb-1 popular-blog-content text-truncate">
                                                            Ipsum omnis non fugit ad voluptate consequuntur, sed veritatis nesciunt, asperiores, provident temporibus!
                                                        </p>
                                                        <span className="text-muted fs-11">28,Sep 2024 - 08:32</span>
                                                    </div>
                                                    <div>
                                                        <button className="btn btn-icon btn-light btn-sm rtl-rotate"><i className="ri-arrow-right-s-line"></i></button>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex flex-wrap align-items-center gap-3">
                                                    <span className="avatar avatar-xl">
                                                        <img src="../../../assets/images/media/blog/17.jpg" className="img-fluid" alt="..." />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <Link scroll={false} href="#!" className="fs-14 fw-medium mb-0">Amelia Jackson</Link>
                                                        <p className="mb-1 popular-blog-content text-truncate">
                                                            Contrary to popular belief, Lorem Ipsum is not simply random
                                                        </p>
                                                        <span className="text-muted fs-11">30,Jul 2024 - 08:32</span>
                                                    </div>
                                                    <div>
                                                        <button className="btn btn-icon btn-light btn-sm rtl-rotate"><i className="ri-arrow-right-s-line"></i></button>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <li className="list-group-item border-bottom-0">
                                                <div className="d-flex flex-wrap align-items-center gap-3">
                                                    <span className="avatar avatar-xl">
                                                        <img src="../../../assets/images/media/blog/18.jpg" className="img-fluid" alt="..." />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <Link scroll={false} href="#!" className="fs-14 fw-medium mb-0">Matthew Stuart</Link>
                                                        <p className="mb-1 popular-blog-content text-truncate">
                                                            It was popularised in the 1960s with the release of Letraset sheets containing
                                                        </p>
                                                        <span className="text-muted fs-11">3,Aug 2024 - 11:56</span>
                                                    </div>
                                                    <div>
                                                        <button className="btn btn-icon btn-light btn-sm rtl-rotate"><i className="ri-arrow-right-s-line"></i></button>
                                                    </div>
                                                </div>
                                            </li>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <div className=" mb-3">
                            <button className="btn mx-auto btn-primary-light btn-loader">
                                <span className="me-2">Older Blogs</span>
                                <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                            </button>
                        </div>
                    </Col>
                </Row>
                {/*End::row-2 */}
</Fragment>
);
};

export default Blog;