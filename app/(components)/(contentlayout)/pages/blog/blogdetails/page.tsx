"use client"
import { LightboxGallery } from "@/shared/data/pages/blog/blogdetailsdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Form, ListGroup, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import SimpleBar from "simplebar-react";

const Blogdetails = () => {
return (
    <Fragment>
                {/* Page Header */}
                    <Seo title={"Blog Details"} />
                    <Pageheader Heading="Blog Details" Pages={[{title:"Pages", active:true},{title:"Blog", active:true},{title:"Blog Details", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={8}>
                        <Row>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Body>
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <p className="h5 fw-semibold mb-0">Exploring the Dimensionality of Creativity with 3D Images</p>
                                            <span className="badge bg-secondary">3D Images</span>
                                        </div>
                                        <div className="d-sm-flex align-items-cneter">
                                            <div className="d-flex align-items-center flex-fill">
                                                <span className="avatar avatar-sm avatar-rounded me-3">
                                                    <img src="../../../assets/images/faces/12.jpg" alt="" />
                                                </span>
                                                <div>
                                                    <p className="mb-0 fw-medium">Christopher - <span className="fs-12 text-muted fw-normal">Tue,25 Dec 2024 - 11:45</span></p>
                                                    <p className="mb-0 text-muted"></p>
                                                </div>
                                            </div>
                                            <div className="btn-list mt-sm-0 mt-2">
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Like</Tooltip>}>
                                                <Button variant="" className="btn btn-icon btn-sm btn-primary-light btn-wave" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Like"><i className="ri-thumb-up-line"></i></Button>
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Share</Tooltip>}>
                                                <Button variant="" className="btn btn-icon btn-sm btn-secondary-light btn-wave" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Share"><i className="ri-share-line"></i></Button>
                                            </OverlayTrigger>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Link scroll={false} href="#!">
                                        <img src="../../../assets/images/media/blog/19.jpg" className="card-img rounded-0 blog-details-img" alt="..." />
                                    </Link>
                                    <div className="card-body p-4">
                                        <h6 className="fw-semibold">
                                            Unveiling Depth and Realism
                                        </h6>
                                        <p className="mb-4">
                                            Unlike traditional 2D images, 3D images add an extra dimension to the viewing experience, providing depth and realism that make objects seemingly tangible. This immersive quality allows audiences to engage with content on a whole new level, creating a sense of presence and connection.
                                        </p>
                                        <p className="mb-4">
                                            <span className="h6 fw-medium">Versatility in Expression -</span> From architectural renderings to artistic creations, 3D images offer unparalleled versatility in visual expression. Designers, artists, and creators can breathe life into their ideas, showcasing intricate details and subtle nuances that may have been lost in the flat confines of traditional imagery
                                        </p>
                                        <p className="mb-2">
                                            <span className="h6 fw-medium">The Future Unveiled -</span> As technology continues to evolve, the possibilities for 3D images are boundless. Augmented and virtual reality are pushing the boundaries even further, promising a future where immersive 3D experiences become an integral part of our daily lives.
                                        </p>
                                        <p className="mb-4">Join us on a journey through the fascinating world of 3D images, where creativity knows no bounds, and the visual landscape is redefined with each pixel. Explore, interact, and be inspired as we delve into the limitless dimensions of this transformative visual medium.</p>
                                        <blockquote className="blockquote custom-blockquote success mb-4 text-center">
                                            <h6 className="lh-base">Unlocking a world beyond dimensions, where pixels dance into reality and imagination takes shape in the ethereal realm of 3D enchantment..</h6>
                                            <footer className="blockquote-footer mt-3 fs-14 text-muted mb-0">Someone famous as <cite title="Source Title">- Maxwell Quasar</cite></footer>
                                            <span className="quote-icon"><i className="ri-information-line"></i></span>
                                        </blockquote>
                                        <p className="mb-0">
                                            From enchanting nature's beauty quotes that evoke visions of lush meadows full of brilliantly-colored flowers or dense forests with sky-high trees to famous quotes about nature's ever-present—and absolutely fundamental—role in our lives, these 101 quotes about nature will have you itching to get off your couch and get outside. For famous <b>quotes about nature</b>, we have them here!
                                        </p>
                                    </div>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className="custom-card overflow-hidden">
                                    <Card.Header>
                                        <Card.Title>
                                            COMMENTS
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body className="p-0">
                                        <ListGroup className="list-group list-group-flush">
                                        <SimpleBar id="blog-details-comment-list">
                                            <ListGroup.Item className="list-group-item border-0 border-bottom">
                                                <div className="d-flex align-items-start gap-3 flex-wrap">
                                                    <div>
                                                        <span className="avatar avatar-lg avatar-rounded">
                                                            <img src="../../../assets/images/faces/3.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill w-50">
                                                        <span className="fw-medium d-block mb-1">TechEnthusiast21</span>
                                                        <span className="d-block mb-3">Wow, these 3D images are mind-blowing! The depth and realism are incredible. It's like stepping into another dimension. Great job on showcasing the power of 3D technology!</span>
                                                        <div className="btn-list">
                                                            <Button variant="" className="btn btn-sm btn-primary-light btn-wave">Reply<i className="ri-reply-line ms-1"></i></Button>
                                                            <Button variant="" className="btn btn-sm btn-secondary-light btn-wave">Report<i className="ri-error-warning-line ms-1"></i></Button>
                                                        </div>
                                                    </div>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-icon btn-sm btn-success-light btn-wave"><i className="ri-thumb-up-line"></i></Button>
                                                        <Button variant="" className="btn btn-icon btn-sm btn-danger-light btn-wave"><i className="ri-thumb-down-line"></i></Button>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item className="list-group-item border-0 border-bottom">
                                                <div className="d-flex align-items-start gap-3 flex-wrap">
                                                    <div>
                                                        <span className="avatar avatar-lg avatar-rounded">
                                                            <img src="../../../assets/images/faces/13.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill w-50">
                                                        <span className="fw-medium d-block mb-1">ArtsyExplorer</span>
                                                        <span className="d-block mb-3">The 3D images on your blog are a visual feast! I love how they bring a new level of engagement and interactivity. It's like art coming to life. Can't wait to see more creative uses of 3D in the future!</span>
                                                        <div className="btn-list">
                                                            <Button variant="" className="btn btn-sm btn-primary-light btn-wave">Reply<i className="ri-reply-line ms-1"></i></Button>
                                                            <Button variant="" className="btn btn-sm btn-secondary-light btn-wave">Report<i className="ri-error-warning-line ms-1"></i></Button>
                                                        </div>
                                                    </div>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-icon btn-sm btn-success-light btn-wave"><i className="ri-thumb-up-line"></i></Button>
                                                        <Button variant="" className="btn btn-icon btn-sm btn-danger-light btn-wave"><i className="ri-thumb-down-line"></i></Button>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item className="list-group-item border-0">
                                                <div className="d-flex align-items-start gap-3 flex-wrap">
                                                    <div>
                                                        <span className="avatar avatar-lg avatar-rounded">
                                                            <img src="../../../assets/images/faces/6.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill w-50">
                                                        <span className="fw-medium d-block mb-1">FutureTechGeek</span>
                                                        <span className="d-block mb-3">These 3D images are the future! The level of detail and immersion is unmatched. It's exciting to see how technology is evolving, and your blog does a fantastic job of capturing the essence of 3D innovation.</span>
                                                        <div className="btn-list">
                                                            <Button variant="" className="btn btn-sm btn-primary-light btn-wave">Reply<i className="ri-reply-line ms-1"></i></Button>
                                                            <Button variant="" className="btn btn-sm btn-secondary-light btn-wave">Report<i className="ri-error-warning-line ms-1"></i></Button>
                                                        </div>
                                                    </div>
                                                    <div className="btn-list">
                                                        <Button variant="" className="btn btn-icon btn-sm btn-success-light btn-wave"><i className="ri-thumb-up-line"></i></Button>
                                                        <Button variant="" className="btn btn-icon btn-sm btn-danger-light btn-wave"><i className="ri-thumb-down-line"></i></Button>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        </SimpleBar>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                            LEAVE A COMMENT
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="row gy-3">
                                            <Col xl={6}>
                                                <Form.Label htmlFor="blog-first-name">First Name</Form.Label>
                                                <Form.Control type="text"  id="blog-first-name" placeholder="Enter Name"/>
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label htmlFor="blog-last-name">Last Name</Form.Label>
                                                <Form.Control type="text"  id="blog-last-name" placeholder="Enter Name"/>
                                            </Col>
                                            <Col xl={12}> 
                                                <Form.Label htmlFor="blog-email">Email ID</Form.Label>
                                                <Form.Control type="text"  id="blog-email" placeholder="Enter Email"/>
                                            </Col>
                                            <Col xl={12}>
                                                <Form.Label htmlFor="blog-comment">Write Comment</Form.Label>
                                                <Form.Control as="textarea"  id="blog-comment" rows={5}></Form.Control>
                                            </Col>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="text-end">
                                            <Button variant="" className="btn btn-primary-light">Post Comment</Button>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <div className="col-xl-4">
                        <Row>
                            <Col xl={12}>
                                <div className="card custom-card overflow-hidden">
                                    <div className="card-header justify-content-between">
                                        <Card.Title>
                                            RECENT POSTS
                                        </Card.Title>
                                        <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                    </div>
                                    <div className="card-body p-0">
                                        <ul className="list-group list-group-flush">
                                            <ListGroup.Item>
                                                <div className="d-flex gap-3 flex-wrap align-items-center">
                                                    <span className="avatar avatar-xl">
                                                        <img src="../../../assets/images/media/blog/14.jpg" className="img-fluid" alt="..." />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <Link scroll={false} href="#!" className="fs-14 mb-0 text-primary">Technology</Link>
                                                        <p className="mb-1 popular-blog-content text-truncate fw-medium">
                                                            Introduction to AI in Web Development
                                                        </p>
                                                        <span className="text-muted fs-12">2024-02-19 10:30 AM</span>
                                                    </div>
                                                    <div>
                                                        <Button variant="" className="btn btn-icon btn-light btn-sm rtl-rotate"><i className="ri-arrow-right-s-line"></i></Button>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex gap-3 flex-wrap align-items-center">
                                                    <span className="avatar avatar-xl">
                                                        <img src="../../../assets/images/media/blog/15.jpg" className="img-fluid" alt="..." />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <Link scroll={false} href="#!" className="fs-14 mb-0 text-secondary">Travel</Link>
                                                        <p className="mb-1 popular-blog-content text-truncate fw-medium">
                                                            Exploring Beautiful Landscapes in New Zealand
                                                        </p>
                                                        <span className="text-muted fs-12">2024-02-18 03:45 PM</span>
                                                    </div>
                                                    <div>
                                                        <Button variant="" className="btn btn-icon btn-light btn-sm rtl-rotate"><i className="ri-arrow-right-s-line"></i></Button>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex gap-3 flex-wrap align-items-center">
                                                    <span className="avatar avatar-xl">
                                                        <img src="../../../assets/images/media/blog/16.jpg" className="img-fluid" alt="..." />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <Link scroll={false} href="#!" className="fs-14 mb-0 text-success">Health & Wellness</Link>
                                                        <p className="mb-1 popular-blog-content text-truncate fw-medium">
                                                            10 Tips for a Healthy Lifestyle
                                                        </p>
                                                        <span className="text-muted fs-12">2024-02-17 08:15 AM</span>
                                                    </div>
                                                    <div>
                                                        <Button variant="" className="btn btn-icon btn-light btn-sm rtl-rotate"><i className="ri-arrow-right-s-line"></i></Button>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex gap-3 flex-wrap align-items-center">
                                                    <span className="avatar avatar-xl">
                                                        <img src="../../../assets/images/media/blog/17.jpg" className="img-fluid" alt="..." />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <Link scroll={false} href="#!" className="fs-14 mb-0 text-orange">Food & Cooking</Link>
                                                        <p className="mb-1 popular-blog-content text-truncate fw-medium">
                                                            Delicious Recipes for a Summer BBQ
                                                        </p>
                                                        <span className="text-muted fs-12">2024-02-16 01:00 PM</span>
                                                    </div>
                                                    <div>
                                                        <Button variant="" className="btn btn-icon btn-light btn-sm rtl-rotate"><i className="ri-arrow-right-s-line"></i></Button>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={12}>
                                <div className="card custom-card bg-primary-transparent border-0 shadow-none">
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control border-0 shadow-none" placeholder="Email Here" aria-label="blog-email" aria-describedby="blog-subscribe" />
                                                <Button variant="" className="btn btn-primary btn-wave" type="button" id="blog-subscribe">Subscribe</Button>
                                            </div>
                                            <label className="form-check-label">
                                                Subscribe to get updates about latest News & Posts
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                            EXPLORE TOPICS
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <ListGroup as="ul">
                                            <ListGroup.Item>
                                                <Link scroll={false} href="#!">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <span className="avatar avatar-xs bg-light text-default border avatar-rounded">
                                                                    1
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span className="fw-medium ms-2">Nature</span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="badge bg-primary rounded-pill">21</span>
                                                        </div>
                                                    </div>    
                                                </Link>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Link scroll={false} href="#!">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <span className="avatar avatar-xs bg-light text-default border avatar-rounded">
                                                                    2
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span className="fw-medium ms-2">Sports</span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="badge bg-secondary rounded-pill">16</span>
                                                        </div>
                                                    </div>    
                                                </Link>                                           
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Link scroll={false} href="#!">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <span className="avatar avatar-xs bg-light text-default border avatar-rounded">
                                                                    3
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span className="fw-medium ms-2">Food</span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="badge bg-success rounded-pill">06</span>
                                                        </div>
                                                    </div>    
                                                </Link>       
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Link scroll={false} href="#!">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <span className="avatar avatar-xs bg-light text-default border avatar-rounded">
                                                                   4
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span className="fw-medium ms-2">Travel</span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="badge bg-orange rounded-pill">18</span>
                                                        </div>
                                                    </div>    
                                                </Link>      
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Link scroll={false} href="#!">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <span className="avatar avatar-xs bg-light text-default border avatar-rounded">
                                                                   5
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span className="fw-medium ms-2">Fashion</span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="badge bg-info rounded-pill">09</span>
                                                        </div>
                                                    </div>    
                                                </Link>      
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Link scroll={false} href="#!">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <span className="avatar avatar-xs bg-light text-default border avatar-rounded">
                                                                   6
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span className="fw-medium ms-2">Beauty</span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="badge bg-warning rounded-pill">11</span>
                                                        </div>
                                                    </div>    
                                                </Link>      
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                            POPULAR TAGS
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="blog-popular-tags">
                                            <Link scroll={false} href="#!">
                                                <span className="badge bg-light text-muted">#blogger</span>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <span className="badge bg-light text-muted">#styleblogger</span>
                                            </Link>    
                                            <Link scroll={false} href="#!">
                                                <span className="badge bg-light text-muted">#livecolorfully</span>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <span className="badge bg-light text-muted">#amwriting</span>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <span className="badge bg-light text-muted">#analytics</span>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <span className="badge bg-light text-muted">#designblogger</span>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <span className="badge bg-light text-muted">#picoftheday</span>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <span className="badge bg-light text-muted">#adventure</span>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <span className="badge bg-light text-muted">#landscape</span>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <span className="badge bg-light text-muted">#fitnessgoals</span>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <span className="badge bg-light text-muted">#foodblogger</span>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <span className="badge bg-light text-muted">#vegan</span>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <span className="badge bg-light text-muted">#portrait</span>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <span className="badge bg-light text-muted">#canonphotography</span>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <span className="badge bg-light text-muted">#fineart</span>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <span className="badge bg-light text-muted">#trending</span>
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <span className="badge bg-light text-muted">#lifestyle</span>
                                            </Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                            GALLERY
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <LightboxGallery/>
                                      
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    );
};

export default Blogdetails;