"use client"
import { LightboxGallery } from "@/shared/data/pages/searchdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Dropdown, ListGroup, Nav, OverlayTrigger, Pagination, Row, Tab, Tooltip } from "react-bootstrap";

const Search = () => {
return (
<Fragment>
                {/* Page Header */}
                    <Seo title={"Search"} />
                    <Pageheader Heading="Search" Pages={[{title:"Pages", active:true},{title:"Search", active:false}]} />
                {/* Page Header Close */}
                <Tab.Container defaultActiveKey="first">
                    {/* Start::row-1 */}
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Body className="p-0">
                                    <div className="input-group p-3">
                                        <input type="text" className="form-control form-control-lg" placeholder="Search Here ..."
                                            aria-label="Search Here ..." aria-describedby="button-addon1"/>
                                        <button className="btn btn-primary btn-wave" type="button"
                                            id="button-addon1">Search</button>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 p-2">
                                        <Nav className="nav-tabs tab-style-8 scaleX" role="tablist">
                                            <Nav.Item role="presentation">
                                                <Nav.Link eventKey="first" className=" fw-medium text-muted" data-bs-toggle="tab" role="tab" aria-current="page" href="#!" aria-selected="true"><i className="ri-search-line me-2 text-primary"></i>All</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item role="presentation">
                                                <Nav.Link eventKey="second" className="fw-medium text-muted" data-bs-toggle="tab" role="tab" aria-current="page" href="#!" aria-selected="false" tabIndex={-1}><i className="ri-image-line me-2 text-secondary"></i>Images</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item role="presentation">
                                                <Nav.Link eventKey="third" className="fw-medium text-muted" data-bs-toggle="tab" role="tab" aria-current="page" href="#!" aria-selected="false" tabIndex={-1}><i className="ri-book-line me-2 text-success"></i>Books</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item role="presentation">
                                                <Nav.Link eventKey="fourth" className="fw-medium text-muted" data-bs-toggle="tab" role="tab" aria-current="page" href="#!" aria-selected="false" tabIndex={-1}><i className="ri-newspaper-line me-2 text-orange"></i>News</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item role="presentation">
                                                <Nav.Link eventKey="fifth" className="fw-medium text-muted" data-bs-toggle="tab" role="tab" aria-current="page" href="#!" aria-selected="false" tabIndex={-1}><i className="ri-live-line me-2 text-warning"></i>Videos</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <div className="text-muted me-2 p-2">About 12,546,90000 results (0.56 Seconds)</div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {/*End::row-1 */}

                    {/* Start:: row-2 */}
                    <Row>
                        <Col xl={12}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" className="p-0 border-0 show " id="search-all" role="tabpanel">
                                    <Card className="custom-card overflow-hidden">
                                        <Card.Body className="p-0">
                                            <ListGroup as="ul" className="list-group list-group-flush">
                                                <ListGroup.Item as="li">
                                                    <div className="d-flex align-items-start justify-content-between">
                                                        <div>
                                                            <div className="mb-2">
                                                                <span className="d-block fw-medium"><Link scroll={false} href="#!">Best Tech Gadgets</Link></span>
                                                                <Link scroll={false} href="#!" className="link-success"> http://www.besttechgadgets.com</Link>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="fw-semibold mb-1"><Link scroll={false} href="#!" className="searched-item-main-link">Explore the Latest and Greatest Tech Gadgets</Link></h6>
                                                                <span className="d-block text-muted">Discover cutting-edge technology and must-have gadgets. Stay ahead in the tech world with our carefully curated list of innovative devices.</span>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-3 flex-wrap">
                                                                <Link scroll={false} href="#!" className="link-primary link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover text-decoration-underline">Shop Now</Link>
                                                                <Link scroll={false} href="#!" className="link-primary link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover text-decoration-underline">Top 10 Picks</Link>
                                                            </div>
                                                        </div>
                                                        <Dropdown className="custom-dropdown"> 
                                                            <Dropdown.Toggle variant="" className="no-caret" aria-label="anchor" href="#!" data-bs-toggle="dropdown"> 
                                                                <i className="ri-more-2-fill fs-5 text-muted"></i>
                                                            </Dropdown.Toggle> 
                                                            <Dropdown.Menu as="ul" role="menu"> 
                                                                <li><Dropdown.Item href="#!">Week</Dropdown.Item></li> 
                                                                <li><Dropdown.Item href="#!">Day</Dropdown.Item></li> 
                                                                <li><Dropdown.Item href="#!">Year</Dropdown.Item></li> 
                                                            </Dropdown.Menu> 
                                                        </Dropdown>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li">
                                                    <div className="d-flex align-items-start justify-content-between">
                                                        <div>
                                                            <div className="mb-2">
                                                                <span className="d-block fw-medium"><Link scroll={false} href="#!">Healthy Recipes Hub</Link></span>
                                                                <Link scroll={false} href="#!" className="link-success">http://www.healthyrecipeshub.com</Link>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="fw-semibold mb-1"><Link scroll={false} href="#!" className="searched-item-main-link">Wholesome and Delicious Recipes for a Healthy Lifestyle</Link></h6>
                                                                <span className="d-block text-muted">Find a variety of nutritious recipes to support your well-being. From breakfast to dinner, we have a collection of tasty meals that prioritize your health.</span>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-3 flex-wrap">
                                                                <Link scroll={false} href="#!" className="link-primary link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover text-decoration-underline">Browse Recipes</Link>
                                                                <Link scroll={false} href="#!" className="link-primary link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover text-decoration-underline">Nutrition Tips</Link>
                                                            </div>
                                                        </div>
                                                        <Dropdown className="custom-dropdown"> 
                                                            <Dropdown.Toggle variant="" className="no-caret" aria-label="anchor" href="#!" data-bs-toggle="dropdown"> 
                                                                <i className="ri-more-2-fill fs-5 text-muted"></i>
                                                            </Dropdown.Toggle> 
                                                            <Dropdown.Menu as="ul" role="menu"> 
                                                                <li><Dropdown.Item href="#!">Week</Dropdown.Item></li> 
                                                                <li><Dropdown.Item href="#!">Day</Dropdown.Item></li> 
                                                                <li><Dropdown.Item href="#!">Year</Dropdown.Item></li> 
                                                            </Dropdown.Menu> 
                                                        </Dropdown>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li">
                                                    <div className="d-flex align-items-start justify-content-between">
                                                        <div>
                                                            <div className="mb-2">
                                                                <span className="d-block fw-medium"><Link scroll={false} href="#!">Travel Explorer</Link></span>
                                                                <Link scroll={false} href="#!" className="link-success">http://www.travelexplorer.com</Link>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="fw-semibold mb-1"><Link scroll={false} href="#!" className="searched-item-main-link">Embark on Unforgettable Journeys Around the Globe</Link></h6>
                                                                <span className="d-block text-muted">Plan your next adventure with Travel Explorer. Discover hidden gems, travel tips, and amazing destinations to create memories that last a lifetime.</span>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-3 flex-wrap">
                                                                <Link scroll={false} href="#!" className="link-primary link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover text-decoration-underline">Explore Destinations</Link>
                                                                <Link scroll={false} href="#!" className="link-primary link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover text-decoration-underline">Travel Guides</Link>
                                                            </div>
                                                        </div>
                                                        <Dropdown className="custom-dropdown"> 
                                                            <Dropdown.Toggle variant="" className="no-caret" aria-label="anchor" href="#!" data-bs-toggle="dropdown"> 
                                                                <i className="ri-more-2-fill fs-5 text-muted"></i>
                                                            </Dropdown.Toggle> 
                                                            <Dropdown.Menu as="ul" role="menu"> 
                                                                <li><Dropdown.Item href="#!">Week</Dropdown.Item></li> 
                                                                <li><Dropdown.Item href="#!">Day</Dropdown.Item></li> 
                                                                <li><Dropdown.Item href="#!">Year</Dropdown.Item></li> 
                                                            </Dropdown.Menu> 
                                                        </Dropdown>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li">
                                                    <div className="d-flex align-items-start justify-content-between">
                                                        <div>
                                                            <div className="mb-2">
                                                                <span className="d-block fw-medium"><Link scroll={false} href="#!">Nature Photography Bliss</Link></span>
                                                                <Link scroll={false} href="#!" className="link-success">http://www.natureblissphotos.com</Link>
                                                            </div>
                                                            <div className="mb-2">
                                                                <span className="mb-2 d-block"><Link scroll={false} href="#!" className="fw-medium">Search Related Images :</Link></span>
                                                                <div className="d-flex align-items-start gap-3 flex-wrap">
                                                                    <div>
                                                                        <figure className="figure">
                                                                            <Link scroll={false} className="avatar avatar-search" href="#!">
                                                                                <img className="img-fluid rounded card-img" src="../../assets/images/media/media-59.jpg" alt="..." />
                                                                            </Link>
                                                                            <Link scroll={false} href="#!" className="d-block">
                                                                                Natural Serenity
                                                                            </Link>
                                                                        </figure>
                                                                    </div>
                                                                    <div>
                                                                        <figure className="figure">
                                                                            <Link scroll={false} className="avatar avatar-search" href="#!">
                                                                                <img className="img-fluid rounded card-img" src="../../assets/images/media/media-60.jpg" alt="..." />
                                                                            </Link>
                                                                            <Link scroll={false} href="#!" className="d-block">
                                                                                Active Living
                                                                            </Link>
                                                                        </figure>
                                                                    </div>
                                                                    <div>
                                                                        <figure className="figure">
                                                                            <Link scroll={false} className="avatar avatar-search" href="#!">
                                                                                <img className="img-fluid rounded card-img" src="../../assets/images/media/media-61.jpg" alt="..." />
                                                                            </Link>
                                                                            <Link scroll={false} href="#!" className="d-block">
                                                                                Creative Elegance
                                                                            </Link>
                                                                        </figure>
                                                                    </div>
                                                                    <div>
                                                                        <figure className="figure">
                                                                            <Link scroll={false} href="#!" className="avatar px-4 avatar-search fw-medium bg-primary-transparent">
                                                                                View All <i className="ti ti-arrow-narrow-right ms-2"></i>
                                                                            </Link>
                                                                        </figure>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Dropdown className="custom-dropdown"> 
                                                            <Dropdown.Toggle variant="" className="no-caret" aria-label="anchor" href="#!" data-bs-toggle="dropdown"> 
                                                                <i className="ri-more-2-fill fs-5 text-muted"></i>
                                                            </Dropdown.Toggle> 
                                                            <Dropdown.Menu as="ul" role="menu"> 
                                                                <li><Dropdown.Item href="#!">Week</Dropdown.Item></li> 
                                                                <li><Dropdown.Item href="#!">Day</Dropdown.Item></li> 
                                                                <li><Dropdown.Item href="#!">Year</Dropdown.Item></li> 
                                                            </Dropdown.Menu> 
                                                        </Dropdown>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li">
                                                    <div className="d-flex align-items-start justify-content-between">
                                                        <div>
                                                            <div className="mb-2">
                                                                <span className="d-block fw-medium"><Link scroll={false} href="#!">Fashion Finds</Link></span>
                                                                <Link scroll={false} href="#!" className="link-success">http://www.fashionfinds.com</Link>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="fw-semibold mb-1"><Link scroll={false} href="#!" className="searched-item-main-link">Elevate Your Style with the Latest Fashion Trends</Link></h6>
                                                                <span className="d-block text-muted">Stay in vogue with Fashion Finds. Explore a curated selection of clothing, accessories, and style tips to express your unique fashion sense.</span>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-3 flex-wrap">
                                                                <Link scroll={false} href="#!" className="link-primary link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover text-decoration-underline">Shop Now</Link>
                                                                <Link scroll={false} href="#!" className="link-primary link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover text-decoration-underline">Trend Alerts</Link>
                                                            </div>
                                                        </div>
                                                        <Dropdown className="custom-dropdown"> 
                                                            <Dropdown.Toggle variant="" className="no-caret" aria-label="anchor" href="#!" data-bs-toggle="dropdown"> 
                                                                <i className="ri-more-2-fill fs-5 text-muted"></i>
                                                            </Dropdown.Toggle> 
                                                            <Dropdown.Menu as="ul" role="menu"> 
                                                                <li><Dropdown.Item href="#!">Week</Dropdown.Item></li> 
                                                                <li><Dropdown.Item href="#!">Day</Dropdown.Item></li> 
                                                                <li><Dropdown.Item href="#!">Year</Dropdown.Item></li> 
                                                            </Dropdown.Menu> 
                                                        </Dropdown>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li">
                                                    <div className="d-flex align-items-start justify-content-between">
                                                        <div>
                                                            <div className="mb-2">
                                                                <span className="d-block fw-medium"><Link scroll={false} href="#!">Science Fiction Book Haven</Link></span>
                                                                <Link scroll={false} href="#!" className="link-success">http://www.sci-fibooks.com</Link>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="fw-semibold mb-1"><Link scroll={false} href="#!" className="searched-item-main-link">Journey to Other Worlds with the Best Science Fiction Books</Link></h6>
                                                                <span className="d-block text-muted">Dive into the realms of imagination with our collection of mind-bending science fiction novels. Embark on epic adventures beyond the stars.</span>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-3 flex-wrap">
                                                                <Link scroll={false} href="#!" className="link-primary link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover text-decoration-underline">Explore Books</Link>
                                                                <Link scroll={false} href="#!" className="link-primary link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover text-decoration-underline">Author Interviews</Link>
                                                            </div>
                                                        </div>
                                                        <Dropdown className="custom-dropdown"> 
                                                            <Dropdown.Toggle variant="" className="no-caret" aria-label="anchor" href="#!" data-bs-toggle="dropdown"> 
                                                                <i className="ri-more-2-fill fs-5 text-muted"></i>
                                                            </Dropdown.Toggle> 
                                                            <Dropdown.Menu as="ul" role="menu"> 
                                                                <li><Dropdown.Item href="#!">Week</Dropdown.Item></li> 
                                                                <li><Dropdown.Item href="#!">Day</Dropdown.Item></li> 
                                                                <li><Dropdown.Item href="#!">Year</Dropdown.Item></li> 
                                                            </Dropdown.Menu> 
                                                        </Dropdown>
                                                    </div>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Card.Body>
                                    </Card>
                                    <Pagination className="pagination justify-content-end">
                                        <Pagination.Item  disabled>Previous </Pagination.Item>
                                        <Pagination.Item>1</Pagination.Item>
                                        <Pagination.Item>2</Pagination.Item>
                                        <Pagination.Item>3</Pagination.Item>
                                        <Pagination.Item href="#!" className="pagination-next">Next</Pagination.Item>
                                    </Pagination>
                                </Tab.Pane>   
                                <Tab.Pane eventKey="second" className="border-0 p-0" id="search-images" role="tabpanel">
                                    <Card className="custom-card">
                                        <Card.Body className="pb-0">
                                            <LightboxGallery/>
                                        </Card.Body>
                                    </Card>
                                </Tab.Pane> 
                                <Tab.Pane eventKey="third" className="border-0 p-0" id="search-books" role="tabpanel">
                                    <Card className="custom-card">
                                        <Card.Body>
                                            <Row>
                                                <Col xl={6}>
                                                    <Card className="custom-card shadow-none">
                                                        <Card.Body>
                                                            <div className="d-flex align-items-start flex-wrap gap-3 justify-content-between">
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <span className="avatar avatar-lg avatar-rounded bg-primary bg-opacity-10 border">
                                                                            <img src="../../assets/images/media/books/6.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="ms-2">
                                                                        <h6 className="fw-medium mb-0 d-flex align-items-center"><Link scroll={false} href="#!">The Great Gatsby</Link></h6>
                                                                        <Link scroll={false} href="#!">F. Scott Fitzgerald</Link>
                                                                    </div>
                                                                </div> 
                                                                <div className="btn-list">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to favourite</Tooltip>}>
                                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-light" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to favourite" data-bs-original-title="Add to favourite"><span><i className="ri-heart-3-fill align-middle text-muted"></i></span></Link>
                                                                </OverlayTrigger>
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Featured Book</Tooltip>}>
                                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-warning-light" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Featured Book" data-bs-original-title="Featured Book"><span><i className="ri-star-fill"></i></span></Link>
                                                                </OverlayTrigger>
                                                                </div>
                                                            </div>
                                                            <div className="popular-tags my-3">
                                                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-2">Classic</Link>
                                                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-2">Fiction</Link>
                                                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-2">Jazz Age</Link>
                                                            </div>
                                                            <div className="d-flex justify-content-between flex-wrap gap-2">
                                                                <div><span className="text-muted">Published On</span> - <span className="fw-medium mb-0">May 10, 1925</span></div>
                                                                <Link scroll={false} href="#!" className="text-primary fw-semibold fs-14">
                                                                    Preview <i className="fe fe-arrow-right"></i>
                                                                </Link>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col xl={6}>
                                                    <Card className="custom-card shadow-none">
                                                        <Card.Body>
                                                            <div className="d-flex align-items-start flex-wrap gap-3 justify-content-between">
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <span className="avatar avatar-lg avatar-rounded bg-primary bg-opacity-10 border">
                                                                            <img src="../../assets/images/media/books/1.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="ms-2">
                                                                        <h6 className="fw-medium mb-0 d-flex align-items-center"><Link scroll={false} href="#!">To Kill a Mockingbird</Link></h6>
                                                                        <Link scroll={false} href="#!">Harper Lee</Link>
                                                                    </div>
                                                                </div> 
                                                                <div className="btn-list">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to favourite</Tooltip>}>
                                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-light" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to favourite" data-bs-original-title="Add to favourite"><span><i className="ri-heart-3-fill align-middle text-muted"></i></span></Link>
                                                                </OverlayTrigger>
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Featured Book</Tooltip>}>
                                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-warning-light" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Featured Book" data-bs-original-title="Featured Book"><span><i className="ri-star-fill"></i></span></Link>
                                                                </OverlayTrigger>
                                                                   
                                                                </div>
                                                            </div>
                                                            <div className="popular-tags my-3">
                                                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-2">Fiction</Link>
                                                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-2">Legal</Link>
                                                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-2">Southern Gothic</Link>
                                                            </div>
                                                            <div className="d-flex justify-content-between flex-wrap gap-2">
                                                                <div><span className="text-muted">Published On</span> - <span className="fw-medium mb-0">July 11, 1960</span></div>
                                                                <Link scroll={false} href="#!" className="text-primary fw-semibold fs-14">
                                                                    Preview <i className="fe fe-arrow-right"></i>
                                                                </Link>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col xl={6}>
                                                    <Card className="custom-card shadow-none">
                                                        <Card.Body>
                                                            <div className="d-flex align-items-start flex-wrap gap-3 justify-content-between">
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <span className="avatar avatar-lg avatar-rounded bg-primary bg-opacity-10 border">
                                                                            <img src="../../assets/images/media/books/2.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="ms-2">
                                                                        <h6 className="fw-medium mb-0 d-flex align-items-center"><Link scroll={false} href="#!">Nineteen Eighty-Four</Link></h6>
                                                                        <Link scroll={false} href="#!">George Orwell</Link>
                                                                    </div>
                                                                </div> 
                                                                <div className="btn-list">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to favourite</Tooltip>}>
                                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-light" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to favourite" data-bs-original-title="Add to favourite"><span><i className="ri-heart-3-fill align-middle text-muted"></i></span></Link>
                                                                </OverlayTrigger>
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Featured Book</Tooltip>}>
                                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-warning-light" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Featured Book" data-bs-original-title="Featured Book"><span><i className="ri-star-fill"></i></span></Link>
                                                                </OverlayTrigger>
                                                                   
                                                                </div>
                                                            </div>
                                                            <div className="popular-tags my-3">
                                                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-2">Dystopian</Link>
                                                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-2">Political</Link>
                                                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-2">Science Fiction</Link>
                                                            </div>
                                                            <div className="d-flex justify-content-between flex-wrap gap-2">
                                                                <div><span className="text-muted">Published On</span> - <span className="fw-medium mb-0">June 8, 1949</span></div>
                                                                <Link scroll={false} href="#!" className="text-primary fw-semibold fs-14">
                                                                    Preview <i className="fe fe-arrow-right"></i>
                                                                </Link>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col xl={6}>
                                                    <Card className="custom-card shadow-none">
                                                        <Card.Body>
                                                            <div className="d-flex align-items-start flex-wrap gap-3 justify-content-between">
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <span className="avatar avatar-lg avatar-rounded bg-primary bg-opacity-10 border">
                                                                            <img src="../../assets/images/media/books/3.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="ms-2">
                                                                        <h6 className="fw-medium mb-0 d-flex align-items-center"><Link scroll={false} href="#!">The Hobbit</Link></h6>
                                                                        <Link scroll={false} href="#!">J.R.R. Tolkien</Link>
                                                                    </div>
                                                                </div> 
                                                                <div className="btn-list">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to favourite</Tooltip>}>
                                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-light" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to favourite" data-bs-original-title="Add to favourite"><span><i className="ri-heart-3-fill align-middle text-muted"></i></span></Link>
                                                                </OverlayTrigger>
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Featured Book</Tooltip>}>
                                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-warning-light" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Featured Book" data-bs-original-title="Featured Book"><span><i className="ri-star-fill"></i></span></Link>
                                                                </OverlayTrigger>
                                                                    
                                                                </div>
                                                            </div>
                                                            <div className="popular-tags my-3">
                                                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-2">Fantasy</Link>
                                                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-2">Adventure</Link>
                                                            </div>
                                                            <div className="d-flex justify-content-between flex-wrap gap-2">
                                                                <div><span className="text-muted">Published On</span> - <span className="fw-medium mb-0">September 21, 1937</span></div>
                                                                <Link scroll={false} href="#!" className="text-primary fw-semibold fs-14">
                                                                    Preview <i className="fe fe-arrow-right"></i>
                                                                </Link>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col xl={6}>
                                                    <Card className="custom-card shadow-none">
                                                        <Card.Body>
                                                            <div className="d-flex align-items-start flex-wrap gap-3 justify-content-between">
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <span className="avatar avatar-lg avatar-rounded bg-primary bg-opacity-10 border">
                                                                            <img src="../../assets/images/media/books/4.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="ms-2">
                                                                        <h6 className="fw-medium mb-0 d-flex align-items-center"><Link scroll={false} href="#!">The Da Vinci Code</Link></h6>
                                                                        <Link scroll={false} href="#!">Dan Brown</Link>
                                                                    </div>
                                                                </div> 
                                                                <div className="btn-list">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to favourite</Tooltip>}>
                                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-light" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to favourite" data-bs-original-title="Add to favourite"><span><i className="ri-heart-3-fill align-middle text-muted"></i></span></Link>
                                                                </OverlayTrigger>
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Featured Book</Tooltip>}>
                                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-warning-light" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Featured Book" data-bs-original-title="Featured Book"><span><i className="ri-star-fill"></i></span></Link>
                                                                </OverlayTrigger>
                                                                 
                                                                </div>
                                                            </div>
                                                            <div className="popular-tags my-3">
                                                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-2">Mystery</Link>
                                                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-2">Thriller</Link>
                                                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-2">Conspiracy</Link>
                                                            </div>
                                                            <div className="d-flex justify-content-between flex-wrap gap-2">
                                                                <div><span className="text-muted">Published On</span> - <span className="fw-medium mb-0">March 18, 2003</span></div>
                                                                <Link scroll={false} href="#!" className="text-primary fw-semibold fs-14">
                                                                    Preview <i className="fe fe-arrow-right"></i>
                                                                </Link>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col xl={6}>
                                                    <Card className="custom-card shadow-none">
                                                        <Card.Body>
                                                            <div className="d-flex align-items-start flex-wrap gap-3 justify-content-between">
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <span className="avatar avatar-lg avatar-rounded bg-primary bg-opacity-10 border">
                                                                            <img src="../../assets/images/media/books/5.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="ms-2">
                                                                        <h6 className="fw-medium mb-0 d-flex align-items-center"><Link scroll={false} href="#!">Pride and Prejudice</Link></h6>
                                                                        <Link scroll={false} href="#!">Jane Austen</Link>
                                                                    </div>
                                                                </div> 
                                                                <div className="btn-list">
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add to favourite</Tooltip>}>
                                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-light" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to favourite" data-bs-original-title="Add to favourite"><span><i className="ri-heart-3-fill align-middle text-muted"></i></span></Link>
                                                                </OverlayTrigger>
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Featured Book</Tooltip>}>
                                                                    <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-warning-light" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Featured Book" data-bs-original-title="Featured Book"><span><i className="ri-star-fill"></i></span></Link>
                                                                </OverlayTrigger>
                                                                    
                                                                </div>
                                                            </div>
                                                            <div className="popular-tags my-3">
                                                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-2">Classic</Link>
                                                                <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-2">Romance</Link>
                                                            </div>
                                                            <div className="d-flex justify-content-between flex-wrap gap-2">
                                                                <div><span className="text-muted">Published On</span> - <span className="fw-medium mb-0">January 28, 1813</span></div>
                                                                <Link scroll={false} href="#!" className="text-primary fw-semibold fs-14">
                                                                    Preview <i className="fe fe-arrow-right"></i>
                                                                </Link>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col xl={12}>
                                                    <button className="btn btn-info-light btn-loader mx-auto">
                                                        <span className="me-2">Loading</span>
                                                        <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                                                    </button>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth" className="border-0 p-0" id="search-news" role="tabpanel">
                                    <Card className="custom-card">
                                        <Card.Body className="p-0">
                                            <ul className="list-group list-group-flush">
                                                <ListGroup.Item as="li">
                                                    <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                    <div className="mb-1">
                                                        <span className="h6 fw-semibold text-primary">Scientists Discover New Species of Glowing Fish in Unexplored Ocean Depths</span>
                                                    </div>
                                                    <span className="text-muted">
                                                        In a groundbreaking expedition, marine biologists have uncovered a previously unknown species of bioluminescent fish in the darkest corners of the ocean. The discovery sheds light on the mysteries of deep-sea life.
                                                    </span>
                                                    <span className="d-block mt-2">25,Jan 2024 - 12:45AM</span>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li">
                                                    <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                    <div className="mb-1">
                                                        <span className="h6 fw-semibold text-primary">Tech Giants Collaborate on Revolutionary AI Project for Environmental Conservation</span>
                                                    </div>
                                                    <span className="text-muted">
                                                        Google, Microsoft, and Amazon have joined forces to develop an artificial intelligence system aimed at tackling climate change. The project, named "EcoAI," aims to leverage advanced machine learning algorithms to find innovative solutions for environmental challenges.
                                                    </span>
                                                    <span className="d-block mt-2">14,Feb 2024 - 05:15PM</span>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li">
                                                    <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                    <div className="mb-1">
                                                        <span className="h6 fw-semibold text-primary">Historic Space Mission: Astronauts Successfully Land on Mars</span>
                                                    </div>
                                                    <span className="text-muted">
                                                        In a historic achievement, a multinational crew of astronauts has successfully landed on Mars, marking a new chapter in space exploration. The mission, named "Red Horizon," paves the way for future human colonization of the Red Planet.
                                                    </span>
                                                    <span className="d-block mt-2">25,Mar 2024 - 10:25AM</span>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li">
                                                    <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                    <div className="mb-1">
                                                        <span className="h6 fw-semibold text-primary">Global Summit Addresses Cybersecurity Threats in an Interconnected World</span>
                                                    </div>
                                                    <span className="text-muted">
                                                        World leaders gathered at the Cybersecurity Summit to address the growing threats in the digital realm. Discussions focused on collaborative efforts to strengthen cybersecurity measures and protect against cyberattacks in an increasingly interconnected global landscape.
                                                    </span>
                                                    <span className="d-block mt-2">30,Mar 2024 - 09:54AM</span>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li">
                                                    <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                    <div className="mb-1">
                                                        <span className="h6 fw-semibold text-primary">Cultural Phenomenon: Virtual Reality Concerts Take the Music Industry by Storm</span>
                                                    </div>
                                                    <span className="text-muted">
                                                        Virtual reality concerts have become the latest sensation in the music industry, allowing fans to experience live performances from the comfort of their homes. Major artists are now embracing this futuristic trend, changing the way we consume and enjoy music.
                                                    </span>
                                                    <span className="d-block mt-2">18,Mar 2024 - 10:15AM</span>
                                                </ListGroup.Item>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                    <Pagination className="pagination justify-content-end">
                                        <Pagination.Item disabled>Previous
                                        </Pagination.Item>
                                        <Pagination.Item>1</Pagination.Item>
                                        <Pagination.Item>2</Pagination.Item>
                                        <Pagination.Item>3</Pagination.Item> 
                                        <Pagination.Item className="pagination-next">Next </Pagination.Item>
                                    </Pagination>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth" className="border-0 p-0" id="search-videos" role="tabpanel">
                                    <Card className="custom-card">
                                        <Card.Body className="pb-0">
                                            <div className="row gy-4">
                                                <Col lg={3} md={3} sm={6} className="col-12">
                                                    <div className="ratio ratio-16x9">
                                                        <iframe src="https://www.youtube.com/embed/JP_os1DC1MQ?si=qyUJRBl7ZJBhR_P5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                    </div>    
                                                    <div className="p-2">
                                                        <div className="d-flex align-items-center gap-1">
                                                            <div className="figure-caption fs-13 fw-medium text-default text-truncate">YNEX - HTML Installation & Usage process</div>
                                                        </div>
                                                        <Link scroll={false} href="https://spruko.com/demo/ynex/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://spruko.com/demo/ynex/</Link>
                                                    </div>
                                                </Col>
                                                <Col lg={3} md={3} sm={6} className="col-12">
                                                    <div className="ratio ratio-16x9">
                                                        <iframe src="https://www.youtube.com/embed/-lDlbQ7DiCI?si=-GRS_5Dco6Qc5ius" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                    </div>    
                                                    <div className="p-2">
                                                        <div className="d-flex align-items-center gap-1">
                                                            <div className="figure-caption fs-13 fw-medium text-default text-truncate">Sash - Admin and Dashboard Multipurpose HTML Advanced Template</div>
                                                        </div>
                                                        <Link scroll={false} href="https://spruko.com/demo/sash/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://spruko.com/demo/sash/</Link>
                                                    </div>
                                                </Col>
                                                <Col lg={3} md={3} sm={6} className="col-12">
                                                    <div className="ratio ratio-16x9">
                                                        <iframe src="https://www.youtube.com/embed/HWvHA2FY8Ok?si=Bf-6pyMAcBG-_dR0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                    </div>    
                                                    <div className="p-2">
                                                        <div className="d-flex align-items-center gap-1">
                                                            <div className="figure-caption fs-13 fw-medium text-default text-truncate">Valex - Bootstrap 5 Admin & Dashboard HTML Template</div>
                                                        </div>
                                                        <Link scroll={false} href="https://www.spruko.com/demo/valex/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://www.spruko.com/demo/valex/</Link>
                                                    </div>
                                                </Col>
                                                <Col lg={3} md={3} sm={6} className="col-12">
                                                    <div className="ratio ratio-16x9">
                                                        <iframe src="https://www.youtube.com/embed/Zx1HjMhcQdE?si=Nhbu6XA2PoyAlYhy" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                    </div>    
                                                    <div className="p-2">
                                                        <div className="d-flex align-items-center gap-1">
                                                            <div className="figure-caption fs-13 fw-medium text-default text-truncate">Azea - Admin & Dashboard Bootstrap 5 HTML5 Template</div>
                                                        </div>
                                                        <Link scroll={false} href="https://spruko.com/demo/ynex/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://spruko.com/demo/azea/</Link>
                                                    </div>
                                                </Col>
                                                <Col lg={3} md={3} sm={6} className="col-12">
                                                    <div className="ratio ratio-16x9">
                                                        <iframe src="https://www.youtube.com/embed/prSkLfxlFDY?si=IKoJ0AUUYA9-UToN" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                    </div>    
                                                    <div className="p-2">
                                                        <div className="d-flex align-items-center gap-1">
                                                            <div className="figure-caption fs-13 fw-medium text-default text-truncate">Uhelp - Installation Process - Helpdesk Technical Assistance Laravel Support Ticketing System</div>
                                                        </div>
                                                        <Link scroll={false} href="https://spruko.com/demo/ynex/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://spruko.com/demo/ynex/</Link>
                                                    </div>
                                                </Col>
                                                <Col lg={3} md={3} sm={6} className="col-12">
                                                    <div className="ratio ratio-16x9">
                                                        <iframe src="https://www.youtube.com/embed/bVRW4Li8inE?si=pOpS9ep2Hn3cGL3y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                    </div>    
                                                    <div className="p-2">
                                                        <div className="d-flex align-items-center gap-1">
                                                            <div className="figure-caption fs-13 fw-medium text-default text-truncate">Zanex - Bootstrap 5 Admin & Dashboard HTML5 Template</div>
                                                        </div>
                                                        <Link scroll={false} href="https://spruko.com/demo/zanex/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://spruko.com/demo/zanex/</Link>
                                                    </div>
                                                </Col>
                                                <Col lg={3} md={3} sm={6} className="col-12">
                                                    <div className="ratio ratio-16x9">
                                                        <iframe src="https://www.youtube.com/embed/HyFRnNIovUA?si=F--5ve0s5zfLuZK5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                    </div>    
                                                    <div className="p-2">
                                                        <div className="d-flex align-items-center gap-1">
                                                            <div className="figure-caption fs-13 fw-medium text-default text-truncate">Dayone - Bootstrap 5 HRM, Employee & Project Admin Dashboard HTML Template</div>
                                                        </div>
                                                        <Link scroll={false} href="https://spruko.com/demo/dayone/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://spruko.com/demo/dayone/</Link>
                                                    </div>
                                                </Col>
                                                <Col lg={3} md={3} sm={6} className="col-12">
                                                    <div className="ratio ratio-16x9">
                                                        <iframe src="https://www.youtube.com/embed/Yk6xPgb3cfk?si=JmFGOtV5jjFvDCbS" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                    </div>    
                                                    <div className="p-2">
                                                        <div className="d-flex align-items-center gap-1">
                                                            <div className="figure-caption fs-13 fw-medium text-default text-truncate">Nowa - Admin and Dashboard Multipurpose HTML Advanced Template</div>
                                                        </div>
                                                        <Link scroll={false} href="https://spruko.com/demo/nowa/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://spruko.com/demo/nowa/</Link>
                                                    </div>
                                                </Col>
                                                <div className="col-xl-12 my-4">
                                                    <button className="btn btn-info-light btn-loader mx-auto">
                                                        <span className="me-2">Loading</span>
                                                        <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                    {/* End:: row-2 */}
                </Tab.Container>
</Fragment>
);
};

export default Search;