"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Coupons = () => {
return ( 
    <Fragment>
          {/* Start:: Breadcrumb*/}
            <div className="border-bottom py-3">
                <div className="container">
					{/* Page Header */}
						<Seo title={"Coupons"} />
                        <Pageheader Heading="" Pagetitle={true}  Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true},{title:"Customer", active:true}, {title:"Coupons", active:false}]} />
                    {/* Page Header Close */}
                </div>
            </div>
            {/* End:: Breadcrumb*/}

            {/* Start:: Section-1 */}
            <section className="section py-4">
                <div className="container"> 
                    <Row>
						<Col md={6}>
							<Card className="custom-card border-0 card-style-7 rounded-0">
								<Card.Body className="p-0">
									<div className="p-3 card-content-1">
										<div className="row align-items-center">
											<div className="col-md-3">
												<div className="bg-gray-300 rounded-1">
													<img src="../../../assets/images/ecommerce/png/31.png" alt="img" className="w-100 img-fluid"/>
												</div>
											</div>
											<div className="col-md-9">
												<Link scroll={false} href="#!" className="d-inline-block mb-1 fs-13 text-primary">Wellingtn</Link>
												<h6 className="mb-0 fs-17 fw-semibold">Western Women's Bag Wellingtn</h6>
												<div className="d-flex align-items-baseline mt-3">
													<h6 className="fs-20 text-success fw-semibold mb-0">$120</h6>
													<span className="fs-13 ms-2 text-muted text-decoration-line-through">$399</span>
													<span className="text-primary ms-auto fst-italic">65% Off</span>
												</div>
											</div>
										</div>
									</div>
									<div className="p-3 card-content-2 text-center d-flex align-items-center justify-content-between">
										<span className="tx-style-1">BIGBAKET-1116</span>
										<p className="mb-0 mt-1 fs-13 text-">Expires On 30-11-24</p>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col md={6}>
							<Card className="custom-card border-0 card-style-7 rounded-0">
								<Card.Body className="p-0">
									<div className="p-3 card-content-1">
										<div className="row align-items-center">
											<div className="col-md-3">
												<div className="bg-gray-300 rounded-1">
													<img src="../../../assets/images/ecommerce/png/30.png" alt="img" className="w-100 img-fluid"/>
												</div>
											</div>
											<div className="col-md-9">
												<Link scroll={false} href="#!" className="d-inline-block mb-1 fs-13 text-primary">Kullcandy</Link>
												<h6 className="mb-0 fs-17 fw-semibold">SoundSync Headphones 5.2</h6>
												<div className="d-flex align-items-baseline mt-3">
													<h6 className="fs-20 text-success fw-semibold mb-0">$150</h6>
													<span className="fs-13 ms-2 text-muted text-decoration-line-through">$200</span>
													<span className="text-primary ms-auto fst-italic">25% Off</span>
												</div>
											</div>
										</div>
									</div>
									<div className="p-3 card-content-2 text-center d-flex align-items-center justify-content-between">
										<span className="tx-style-1">ELECTRIC</span>
										<p className="mb-0 mt-1 fs-13 text-">Expires On 05-12-24</p>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col md={6}>
							<Card className="custom-card border-0 card-style-7 filter-bw rounded-0">
								<Card.Body className="p-0">
									<div className="p-3 card-content-1">
										<div className="row align-items-center">
											<div className="col-md-3">
												<div className="bg-gray-300 rounded-1">
													<img src="../../../assets/images/ecommerce/png/32.png" alt="img" className="w-100 img-fluid"/>
												</div>
											</div>
											<div className="col-md-9">
												<Link scroll={false} href="#!" className="d-inline-block mb-1 fs-13 text-primary">Fossi1</Link>
												<h6 className="mb-0 fs-17 fw-semibold">Digital Alarm Clock Blue Color</h6>
												<div className="d-flex align-items-baseline mt-3">
													<h6 className="fs-20 text-success fw-semibold mb-0">$99</h6>
													<span className="fs-13 ms-2 text-muted text-decoration-line-through">$599</span>
													<span className="text-primary ms-auto fst-italic">80% Off</span>
												</div>
											</div>
										</div>
									</div>
									<div className="p-3 card-content-2 text-center d-flex align-items-center justify-content-between">
										<span className="tx-style-1">DIGITAL</span>
										<p className="mb-0 mt-1 fs-13 text-">Expired</p>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col md={6}>
							<Card className="custom-card border-0 card-style-7 rounded-0">
								<Card.Body className="p-0">
									<div className="p-3 card-content-1">
										<div className="row align-items-center">
											<div className="col-md-3">
												<div className="bg-gray-300 rounded-1">
													<img src="../../../assets/images/ecommerce/png/15.png" alt="img" className="w-100 img-fluid"/>
												</div>
											</div>
											<div className="col-md-9">
												<Link scroll={false} href="#!" className="d-inline-block mb-1 fs-13 text-primary">Adibas</Link>
												<h6 className="mb-0 fs-17 fw-semibold">Men's Sports Shoes</h6>
												<div className="d-flex align-items-baseline mt-3">
													<h6 className="fs-20 text-success fw-semibold mb-0">$299</h6>
													<span className="fs-13 ms-2 text-muted text-decoration-line-through">$799</span>
													<span className="text-primary ms-auto fst-italic">70% Off</span>
												</div>
											</div>
										</div>
									</div>
									<div className="p-3 card-content-2 text-center d-flex align-items-center justify-content-between">
										<span className="tx-style-1">SHOES-1773</span>
										<p className="mb-0 mt-1 fs-13 text-">Expires On 25-12-24</p>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col md={6}>
							<Card className="custom-card border-0 card-style-7 shadow-none rounded-0">
								<Card.Body className="p-0">
									<div className="row g-0">
										<div className="col-4">
											<div className="p-3 card-content-3 h-100 d-flex flex-column align-items-center justify-content-center text-center">
												<span className="avatar avatar-lg rounded-circle text-bg-primary mb-2" title="brand-logo"><i className="ti ti-category-2 fs-24"></i></span>
												<Link scroll={false} href="#!" className="d-inline-block fs-13 text-primary mb-1">Woodband</Link>
												<h6 className="mb-0 fs-17 fw-semibold">Shoes</h6>
											</div>
										</div>
										<div className="col-8">
											<div className="p-3 card-content-4">
												<div className="d-flex align-items-center justify-content-between mb-3">
													<div className="min-w-fit-content">
														<span className="fs-24 text-primary">20%</span>
														<span className="fs-13 text-muted ms-1 d-inline-flex">off</span>
													</div>
													<div className="flex-grow-1 text-end">
														<span className="fs-13 text-muted">Max $120</span>
													</div>
												</div>
												<p className="mb-2 fs-13 text-muted fw-normal me-2">Use Code</p>
												<div className="d-flex align-items-center flex-wrap justify-content-between gap-2">
													<span className="tx-style-1">DIGITAL</span>
													<span className="fs-13 text-danger">2 Days Left</span>
												</div>
											</div>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col md={6}>
							<Card className="custom-card border-0 card-style-7 shadow-none filter-bw rounded-0">
								<Card.Body className="p-0">
									<div className="row g-0">
										<div className="col-4">
											<div className="p-3 card-content-3 h-100 d-flex flex-column align-items-center justify-content-center text-center">
												<span className="avatar avatar-lg rounded-circle bg-orange mb-2"><i className="ti ti-shoe fs-24"></i></span>
												<Link scroll={false} href="#!" className="d-inline-block fs-13 text-primary mb-1">Oven Story</Link>
												<h6 className="mb-0 fs-17 fw-semibold">Pizzas</h6>
											</div>
										</div>
										<div className="col-8">
											<div className="p-3 card-content-4">
												<div className="d-flex align-items-center justify-content-between mb-3">
													<div className="min-w-fit-content">
														<span className="fs-24 text-primary">50%</span>
														<span className="fs-13 text-muted ms-1 d-inline-flex">off</span>
													</div>
													<div className="flex-grow-1 text-end">
														<span className="fs-13 text-muted">Min Order $250</span>
													</div>
												</div>
												<p className="mb-2 fs-13 text-muted fw-normal me-2">Use Code</p>
												<div className="d-flex align-items-center flex-wrap justify-content-between gap-2">
													<span className="tx-style-1">PIZZZAS</span>
													<span className="fs-13 text-muted">Expired</span>
												</div>
											</div>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col md={6}>
							<Card className="custom-card border-0 card-style-7 shadow-none rounded-0">
								<Card.Body className="p-0">
									<div className="row g-0">
										<div className="col-4">
											<div className="p-3 card-content-3 h-100 d-flex flex-column align-items-center justify-content-center text-center">
												<span className="avatar avatar-lg rounded-circle text-bg-secondary mb-2" title="brand-logo"><i className="ti ti-circle-triangle fs-24"></i></span>
												<Link scroll={false} href="#!" className="d-inline-block fs-13 text-primary mb-1">Behrouz</Link>
												<h6 className="mb-0 fs-17 fw-semibold">Food</h6>
											</div>
										</div>
										<div className="col-8">
											<div className="p-3 card-content-4">
												<div className="d-flex align-items-center justify-content-between mb-3">
													<div className="min-w-fit-content">
														<span className="fs-24 text-primary">30%</span>
														<span className="fs-13 text-muted ms-1 d-inline-flex">off</span>
													</div>
													<div className="flex-grow-1 text-end">
														<span className="fs-13 text-muted">Max $150</span>
													</div>
												</div>
												<p className="mb-2 fs-13 text-muted fw-normal me-2">Use Code</p>
												<div className="d-flex align-items-center flex-wrap justify-content-between gap-2">
													<span className="tx-style-1">BEHROUZ</span>
													<span className="fs-13 text-muted">Expires On 16-12-24</span>
												</div>
											</div>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col md={6}>
							<Card className="custom-card border-0 card-style-7 shadow-none rounded-0">
								<Card.Body className="p-0">
									<div className="row g-0">
										<div className="col-4">
											<div className="p-3 card-content-3 h-100 d-flex flex-column align-items-center justify-content-center text-center">
												<span className="avatar avatar-lg rounded-circle text-bg-info mb-2" title="brand-logo"><i className="ti ti-circle-half fs-24"></i></span>
												<Link scroll={false} href="#!" className="d-inline-block fs-13 text-primary mb-1">Roadsterr</Link>
												<h6 className="mb-0 fs-17 fw-semibold">T-Shirts</h6>
											</div>
										</div>
										<div className="col-8">
											<div className="p-3 card-content-4">
												<div className="d-flex align-items-center justify-content-between mb-3">
													<div className="min-w-fit-content">
														<span className="fs-24 text-primary">10%</span>
														<span className="fs-13 text-muted ms-1 d-inline-flex">off</span>
													</div>
													<div className="flex-grow-1 text-end">
														<span className="fs-13 text-muted">Min Order $150</span>
													</div>
												</div>
												<p className="mb-2 fs-13 text-muted fw-normal me-2">Use Code</p>
												<div className="d-flex align-items-center flex-wrap justify-content-between gap-2">
													<span className="tx-style-1">ROADSTERR</span>
													<span className="fs-13 text-danger">Expires Today</span>
												</div>
											</div>
										</div>
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

export default Coupons;