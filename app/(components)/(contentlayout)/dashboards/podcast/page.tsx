"use client"
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, Pagination, ProgressBar, Row, Table } from "react-bootstrap";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Podcastdata from '@/shared/data/dashboards/podcastdata'
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Podcast = () => {
return (
<Fragment>
                {/*  Start::page-header */}
                    <Seo title={"Podcast"} />
                    <Pageheader Heading="Podcast" Pages={[{title:"Dashboards", active:true}, {title:"Podcast", active:false},]} />
                {/*  End::page-header */}

                {/*  Start:: row-1 */}
                <Row>
                    <Col xl={7}>
                        <Card className="custom-card podcast-banner-card">
                            <Card.Body className="p-5">
                                <Row>
                                    <Col xl={9}>
                                        <span className="badge bg-white-transparent">Featured This Month</span>
                                        <h3 className="fw-medium text-fixed-white mt-1">
                                            Echoes Of Insight
                                        </h3>
                                        <span className="d-block text-fixed-white fw-meidum fs-18 mb-3">with Serene Harmony</span>
                                        <div className="d-flex flex-wrap align-items-center gap-4 mb-5">
                                            <Link scroll={false} href="#!" className="fs-12 op-8 fw-medium d-flex align-items-center gap-2 text-fixed-white"><i className="ri-play-circle-fill text-primary fs-5 align-middle lh-1"></i>18,000 Plays</Link>
                                            <Link scroll={false} href="#!" className="fs-12 op-8 fw-medium d-flex align-items-center gap-2 text-fixed-white"><i className="ri-customer-service-fill text-primary fs-5 align-middle lh-1"></i>265 Currently Listening</Link>
                                        </div>
                                        <div className="btn-list">
                                            <Button variant="" className="btn btn-primary btn-wave">Listen Now</Button>
                                            <Button variant="" className="btn btn-wave text-fixed-white bg-white-transparent border-white border-opacity-25">Add To Playlist</Button>
                                        </div>
                                    </Col>
                                    <Col xl={6}></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={5}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    POPULAR PODCASTERS
                                </Card.Title>
                                <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-md avatar-rounded bg-primary-transparent">
                                                            <img src="../../assets/images/faces/png/1.png" alt=""/>
                                                        </span>
                                                        <div>
                                                            <Link scroll={false} href="#!" className="fw-medium d-block">Harmony Maestro</Link>
                                                            <span className="fs-12 text-muted">Music & Arts</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="fs-11 text-muted d-block">Episodes</span>
                                                    <span>50</span>
                                                </td>
                                                <td>
                                                    <Button variant="" className="btn btn-primary-light btn-sm btn-wave">Follow</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-md avatar-rounded bg-warning-transparent">
                                                            <img src="../../assets/images/faces/png/7.png" alt=""/>
                                                        </span>
                                                        <div>
                                                            <Link scroll={false} href="#!" className="fw-medium d-block">Aria Whisper </Link>
                                                            <span className="fs-12 text-muted">Storytelling</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="fs-11 text-muted d-block">Episodes</span>
                                                    <span>80</span>
                                                </td>
                                                <td>
                                                    <Button variant="" className="btn btn-primary-light btn-sm btn-wave">Follow</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    3
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-md avatar-rounded bg-secondary-transparent">
                                                            <img src="../../assets/images/faces/png/9.png" alt=""/>
                                                        </span>
                                                        <div>
                                                            <Link scroll={false} href="#!" className="fw-medium d-block">Luna Explorer</Link>
                                                            <span className="fs-12 text-muted">Science</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="fs-11 text-muted d-block">Episodes</span>
                                                    <span>30</span>
                                                </td>
                                                <td>
                                                    <Button variant="" className="btn btn-primary btn-sm btn-wave">Following</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    4
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-md avatar-rounded bg-success-transparent">
                                                            <img src="../../assets/images/faces/png/5.png" alt=""/>
                                                        </span>
                                                        <div>
                                                            <Link scroll={false} href="#!" className="fw-medium d-block">Celestial Mind</Link>
                                                            <span className="fs-12 text-muted">Self-Improvement</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="fs-11 text-muted d-block">Episodes</span>
                                                    <span>60</span>
                                                </td>
                                                <td>
                                                    <Button variant="" className="btn btn-primary-light btn-sm btn-wave">Follow</Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*  End:: row-1 */}

                {/*  Start: row-2 */}
                <Row>
                    <Col xxl={9} xl={12}>
                        <Row>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Header className="justify-content-between">
                                        <Card.Title>
                                            CATEGORIES
                                        </Card.Title>
                                        <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                    </Card.Header>
                                    <Card.Body className="px-5 py-4">
                                        <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap"> 
                                            <div className="text-center"> 
                                                <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-primary-light btn-wave border-0 p-4 lh-1 rounded"> 
                                                    <i className="ti ti-mood-happy fs-4"></i> 
                                                </Link> 
                                                <Link scroll={false} href="#!" className="d-block pt-2 fw-medium fs-12">Comedy</Link> 
                                            </div> 
                                            <div className="text-center"> 
                                                <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-secondary-light btn-wave border-0 p-4 lh-1 rounded"> 
                                                    <i className="ti ti-news  fs-4"></i> 
                                                </Link> 
                                                <Link scroll={false} href="#!" className="d-block pt-2 fw-medium fs-12">News</Link> 
                                            </div> 
                                            <div className="text-center"> 
                                                <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-success-light btn-wave border-0 p-4 lh-1 rounded"> 
                                                    <i className="ti ti-slice fs-4"></i> 
                                                </Link> 
                                                <Link scroll={false} href="#!" className="d-block pt-2 fw-medium fs-12">True Crime</Link> 
                                            </div> 
                                            <div className="text-center"> 
                                                <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-orange-light btn-wave border-0 p-4 lh-1 rounded"> 
                                                    <i className="ti ti-bulb fs-4"></i> 
                                                </Link> 
                                                <Link scroll={false} href="#!" className="d-block pt-2 fw-medium fs-12">Technology</Link> 
                                            </div> 
                                            <div className="text-center">
                                                <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-info-light btn-wave border-0 p-4 lh-1 rounded"> 
                                                    <i className="ti ti-test-pipe fs-4"></i> 
                                                </Link> 
                                                <Link scroll={false} href="#!" className="d-block pt-2 fw-medium fs-12">Science</Link> 
                                            </div> 
                                            <div className="text-center"> 
                                                <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-warning-light btn-wave border-0 p-4 lh-1 rounded"> 
                                                    <i className="ti ti-book fs-4"></i> 
                                                </Link> 
                                                <Link scroll={false} href="#!" className="d-block pt-2 fw-medium fs-12">Education</Link> 
                                            </div> 
                                            <div className="text-center"> 
                                                <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-danger-light btn-wave border-0 p-4 lh-1 rounded"> 
                                                    <i className="ti ti-ball-american-football fs-4"></i> 
                                                </Link> 
                                                <Link scroll={false} href="#!" className="d-block pt-2 fw-medium fs-12">Sports</Link> 
                                            </div> 
                                            <div className="text-center"> 
                                                <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-teal-light btn-wave border-0 p-4 lh-1 rounded"> 
                                                    <i className="ti ti-music fs-4"></i> 
                                                </Link> 
                                                <Link scroll={false} href="#!" className="d-block pt-2 fw-medium fs-12">Music</Link> 
                                            </div> 
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <div className="mb-4 d-flex align-items-center justify-content-between"> 
                                    <h6 className="fw-medium mb-0">RECOMMENDATIONS :</h6> 
                                    <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                </div>
                                <Row>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} className="col-12">
                                        <Card className="custom-card">
                                            <div className="row g-0">
                                                <Col md={3}>
                                                    <img src="../../assets/images/media/media-85.jpg" className="img-fluid rounded-start h-100 w-100" alt="..."/>
                                                </Col>
                                                <Col md={9}>
                                                    <div className="card-body p-4">
                                                        <div className="d-flex align-items-start justify-content-between mb-4">
                                                            <div>
                                                                <Link scroll={false} href="#!"><h6 className="fw-medium mb-0">Random Ramblings</h6></Link>
                                                                <span className="text-muted fs-12">By Alice Mumbleton</span>
                                                            </div>
                                                            <Dropdown className="custom-dropdown"> 
                                                                <Dropdown.Toggle variant="" className="no-caret pe-0" aria-label="anchor" href="#!" data-bs-toggle="dropdown"> 
                                                                    <i className="ri-more-2-fill fs-5 text-muted"></i>
                                                                </Dropdown.Toggle> 
                                                                <Dropdown.Menu role="menu"> 
                                                                    <li><Dropdown.Item href="#!">Week</Dropdown.Item></li> 
                                                                    <li><Dropdown.Item href="#!">Day</Dropdown.Item></li> 
                                                                    <li><Dropdown.Item href="#!">Year</Dropdown.Item></li> 
                                                                </Dropdown.Menu> 
                                                            </Dropdown>
                                                        </div>
                                                        <div className="d-flex align-items-end justify-content-between">
                                                            <div className="d-flex align-items-center gap-3 lh-1">
                                                                <span className="d-block d-flex align-items-center gap-2 text-muted fs-12 lh-1"><i className="ri-time-line lh-1 align-middle fs-14"></i>2h 32m</span>
                                                                <span className="d-block d-flex align-items-center gap-2 fs-14 fw-medium lh-1"><i className="ri-volume-up-line lh-1 align-middle fs-14"></i>67,862</span>
                                                            </div>
                                                            <div>
                                                                <Button variant="" className="btn btn-secondary-light btn-icon btn-sm btn-wave">
                                                                    <i className="ri-play-fill"></i>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} className="col-12">
                                        <Card className="custom-card">
                                            <div className="row g-0">
                                                <Col md={3}>
                                                    <img src="../../assets/images/media/media-79.jpg" className="img-fluid rounded-start h-100 w-100" alt="..."/>
                                                </Col>
                                                <Col md={9}>
                                                    <div className="card-body p-4">
                                                        <div className="d-flex align-items-start justify-content-between mb-4">
                                                            <div>
                                                                <Link scroll={false} href="#!"><h6 className="fw-medium mb-0">Mindless Musings</h6></Link>
                                                                <span className="text-muted fs-12">By Bob Jibberish</span>
                                                            </div>
                                                            <Dropdown className="custom-dropdown"> 
                                                                <Dropdown.Toggle variant="" className="no-caret pe-0" aria-label="anchor" href="#!" data-bs-toggle="dropdown"> 
                                                                    <i className="ri-more-2-fill fs-5 text-muted"></i>
                                                                </Dropdown.Toggle> 
                                                                <Dropdown.Menu role="menu"> 
                                                                    <li><Dropdown.Item href="#!">Week</Dropdown.Item></li> 
                                                                    <li><Dropdown.Item href="#!">Day</Dropdown.Item></li> 
                                                                    <li><Dropdown.Item href="#!">Year</Dropdown.Item></li> 
                                                                </Dropdown.Menu> 
                                                            </Dropdown>
                                                        </div>
                                                        <div className="d-flex align-items-end justify-content-between">
                                                            <div className="d-flex align-items-center gap-3 lh-1">
                                                                <span className="d-block d-flex align-items-center gap-2 text-muted fs-12 lh-1"><i className="ri-time-line lh-1 align-middle fs-14"></i>3h 25m</span>
                                                                <span className="d-block d-flex align-items-center gap-2 fs-14 fw-medium lh-1"><i className="ri-volume-up-line lh-1 align-middle fs-14"></i>15,352</span>
                                                            </div>
                                                            <div>
                                                                <Button variant="" className="btn btn-secondary-light btn-icon btn-sm btn-wave">
                                                                    <i className="ri-play-fill"></i>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} className="col-12">
                                        <Card className="custom-card">
                                            <div className="row g-0">
                                                <Col md={3}>
                                                    <img src="../../assets/images/media/media-73.jpg" className="img-fluid rounded-start h-100 w-100" alt="..."/>
                                                </Col>
                                                <Col md={9}>
                                                    <Card.Body className="p-4">
                                                        <div className="d-flex align-items-start justify-content-between mb-4">
                                                            <div>
                                                                <Link scroll={false} href="#!"><h6 className="fw-medium mb-0">Chatterbox Chronicles</h6></Link>
                                                                <span className="text-muted fs-12">By Charlie Babbleworth</span>
                                                            </div>
                                                            <Dropdown className="custom-dropdown"> 
                                                                <Dropdown.Toggle variant=""  className="no-caret pe-0" aria-label="anchor" href="#!" data-bs-toggle="dropdown"> 
                                                                    <i className="ri-more-2-fill fs-5 text-muted"></i>
                                                                </Dropdown.Toggle> 
                                                                <Dropdown.Menu role="menu"> 
                                                                    <li><Dropdown.Item href="#!">Week</Dropdown.Item></li> 
                                                                    <li><Dropdown.Item href="#!">Day</Dropdown.Item></li> 
                                                                    <li><Dropdown.Item href="#!">Year</Dropdown.Item></li> 
                                                                </Dropdown.Menu> 
                                                            </Dropdown>
                                                        </div>
                                                        <div className="d-flex align-items-end justify-content-between">
                                                            <div className="d-flex align-items-center gap-3 lh-1">
                                                                <span className="d-block d-flex align-items-center gap-2 text-muted fs-12 lh-1"><i className="ri-time-line lh-1 align-middle fs-14"></i>6h 45m</span>
                                                                <span className="d-block d-flex align-items-center gap-2 fs-14 fw-medium lh-1"><i className="ri-volume-up-line lh-1 align-middle fs-14"></i>22,453</span>
                                                            </div>
                                                            <div>
                                                                <Button variant="" className="btn btn-secondary-light btn-icon btn-sm btn-wave">
                                                                    <i className="ri-play-fill"></i>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Col>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} className="col-12">
                                        <Card className="custom-card">
                                            <Row className="row g-0">
                                                <Col md={3}>
                                                    <img src="../../assets/images/media/media-71.jpg" className="img-fluid rounded-start h-100 w-100" alt="..."/>
                                                </Col>
                                                <Col md={9}>
                                                    <div className="card-body p-4">
                                                        <div className="d-flex align-items-start justify-content-between mb-4">
                                                            <div>
                                                                <Link scroll={false} href="#!"><h6 className="fw-medium mb-0">Whimsical Whispers</h6></Link>
                                                                <span className="text-muted fs-12">By Fiona Jargonova</span>
                                                            </div>
                                                            <Dropdown className="custom-dropdown"> 
                                                                <Dropdown.Toggle variant="" className="no-caret pe-0" aria-label="anchor" href="#!" data-bs-toggle="dropdown"> 
                                                                    <i className="ri-more-2-fill fs-5 text-muted"></i>
                                                                </Dropdown.Toggle> 
                                                                <Dropdown.Menu role="menu"> 
                                                                    <li><Dropdown.Item href="#!">Week</Dropdown.Item></li> 
                                                                    <li><Dropdown.Item href="#!">Day</Dropdown.Item></li> 
                                                                    <li><Dropdown.Item href="#!">Year</Dropdown.Item></li> 
                                                                </Dropdown.Menu> 
                                                            </Dropdown>
                                                        </div>
                                                        <div className="d-flex align-items-end justify-content-between">
                                                            <div className="d-flex align-items-center gap-3 lh-1">
                                                                <span className="d-block d-flex align-items-center gap-2 text-muted fs-12 lh-1"><i className="ri-time-line lh-1 align-middle fs-14"></i>1h 15m</span>
                                                                <span className="d-block d-flex align-items-center gap-2 fs-14 fw-medium lh-1"><i className="ri-volume-up-line lh-1 align-middle fs-14"></i>6,352</span>
                                                            </div>
                                                            <div>
                                                                <Button variant="" className="btn btn-secondary-light btn-icon btn-sm btn-wave">
                                                                    <i className="ri-play-fill"></i>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Header className="justify-content-between">
                                        <Card.Title>
                                            POPULAR PODCASTS
                                        </Card.Title>
                                        <div className="d-flex flex-wrap gap-2"> 
                                            <div> 
                                                <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example"/> 
                                            </div> 
                                            <Dropdown className="custom-dropdown"> 
                                                <Dropdown.Toggle variant=""  href="#!" className="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false"> Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> 
                                                </Dropdown.Toggle> 
                                                <Dropdown.Menu role="menu"> 
                                                    <li><Dropdown.Item href="#!">New</Dropdown.Item></li> 
                                                    <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li> 
                                                    <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li> 
                                                </Dropdown.Menu> 
                                            </Dropdown> 
                                        </div>
                                    </Card.Header>
                                    <Card.Body className="p-0">
                                        <div className="table-responsive">
                                            <Table className="table text-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Podcast Name</th>
                                                        <th scope="col">Frequency</th>
                                                        <th scope="col">Category</th>
                                                        <th scope="col">Latest Episode</th>
                                                        <th scope="col">Average Duration</th>
                                                        <th scope="col">Ratings</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <span className="avatar avatar-md"><img src="../../assets/images/media/media-85.jpg" className="" alt="..."/></span>
                                                                <div>
                                                                    <Link scroll={false} href="#!" className="fw-medium mb-0 d-flex align-items-center">Random Ramblings</Link>
                                                                    <span className="fs-12 d-block text-muted">Alice Mumbleton</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            Weekly
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-secondary-transparent">Comedy</span>
                                                        </td>
                                                        <td>
                                                            #156: Silly Stories
                                                        </td>
                                                        <td>
                                                            45 mins
                                                        </td>
                                                        <td>
                                                            4.5<i className="ri-star-fill ms-1 text-warning"></i>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <span className="avatar avatar-md"><img src="../../assets/images/media/media-79.jpg" className="" alt="..."/></span>
                                                                <div>
                                                                    <Link scroll={false} href="#!" className="fw-medium mb-0 d-flex align-items-center">Mindless Musings</Link>
                                                                    <span className="fs-12 d-block text-muted">Bob Jibberish</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            Bi-weekly
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-success-transparent">Culture</span>
                                                        </td>
                                                        <td>
                                                            #82: Deep Nonsense
                                                        </td>
                                                        <td>
                                                            30 mins
                                                        </td>
                                                        <td>
                                                            4.2<i className="ri-star-fill ms-1 text-warning"></i>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <span className="avatar avatar-md"><img src="../../assets/images/media/media-73.jpg" className="" alt="..."/></span>
                                                                <div>
                                                                    <Link scroll={false} href="#!" className="fw-medium mb-0 d-flex align-items-center">Chatterbox Chronicles</Link>
                                                                    <span className="fs-12 d-block text-muted">Charlie Babbleworth</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            Monthly
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-info-transparent">Personal Journal</span>
                                                        </td>
                                                        <td>
                                                            #30: Life's Random
                                                        </td>
                                                        <td>
                                                            60 mins
                                                        </td>
                                                        <td>
                                                            4.7<i className="ri-star-fill ms-1 text-warning"></i>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <span className="avatar avatar-md"><img src="../../assets/images/media/media-71.jpg" className="" alt="..."/></span>
                                                                <div>
                                                                    <Link scroll={false} href="#!" className="fw-medium mb-0 d-flex align-items-center">Ramble Roundup</Link>
                                                                    <span className="fs-12 d-block text-muted">Gary Gibberish</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            Daily
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-warning-transparent">News and Politics</span>
                                                        </td>
                                                        <td>
                                                            #300: Current Affairs
                                                        </td>
                                                        <td>
                                                            20 mins
                                                        </td>
                                                        <td>
                                                            4.9<i className="ri-star-fill ms-1 text-warning"></i>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <span className="avatar avatar-md"><img src="../../assets/images/media/media-60.jpg" className="" alt="..."/></span>
                                                                <div>
                                                                    <Link scroll={false} href="#!" className="fw-medium mb-0 d-flex align-items-center">Babble Bites</Link>
                                                                    <span className="fs-12 d-block text-muted">Eddie Gibberoni</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            Weekly
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-primary-transparent">Food and Drink</span>
                                                        </td>
                                                        <td>
                                                            #45: Culinary Capers
                                                        </td>
                                                        <td>
                                                            50 mins
                                                        </td>
                                                        <td>
                                                            4.8<i className="ri-star-fill ms-1 text-warning"></i>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer className="border-top-0"> 
                                        <div className="d-flex align-items-center"> 
                                            <div> Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
                                            <div className="ms-auto"> 
                                            <nav aria-label="Page navigation" className="pagination-style-4"> 
                                                <Pagination className="pagination mb-0"> 
                                                    <Pagination.Item disabled>Prev</Pagination.Item>
                                                        <Pagination.Item active>1</Pagination.Item> 
                                                        <Pagination.Item>2</Pagination.Item> 
                                                        <Pagination.Item className="pagination-next">next</Pagination.Item> 
                                                    </Pagination> 
                                                </nav> 
                                            </div> 
                                        </div> 
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xxl={3} xl={12}>
                        <Row>
                            <Col xxl={12} xl={6} lg={6} md={6} sm={6} className="col-12">
                                <Card className="custom-card bg-primary-gradient border-0 shadow-none">
                                    <Card.Body className="p-4">
                                        <div className="d-flex align-items-start gap-3 mb-4">
                                            <div className="flex-fill">
                                                <span className="fw-medium d-block text-fixed-white">PLAYING NOW</span>
                                            </div>
                                            <div>
                                                <Link scroll={false} href="#!">
                                                    <i className="ri-heart-fill text-fixed-white fs-4 op-5 lh-1"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="text-center mb-4">
                                            <span className="avatar avatar-rounded mb-3 podcast-playing-now-avatar shadow">
                                                <img src="../../assets/images/media/media-85.jpg" alt=""/>
                                            </span>
                                            <Link scroll={false} href="#!"><h6 className="fw-medium mb-1 text-fixed-white">Random Ramblings</h6></Link>
                                            <span className="text-fixed-white op-8 fs-12">By Alice Mumbleton</span>
                                        </div>
                                        <div className="row justify-content-center">
                                            <Col xl={9}>
                                                <div className="d-flex gap-3 align-items-center mb-4">
                                                    <div className="fs-12 text-fixed-white">12.25</div>
                                                    <ProgressBar variant="success" now={50} className="progress progress-xs progress-custom progress-animate podcast-playing-progress" />
                                                    <div className="fs-12 text-fixed-white">23.45</div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 lh-1">
                                                    <Link scroll={false} href="#!">
                                                        <i className="ri-repeat-2-fill fs-5 text-fixed-white"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!">
                                                        <i className="ri-skip-back-fill fs-5 text-fixed-white"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!">
                                                        <i className="ri-play-fill fs-2 text-fixed-white"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!">
                                                        <i className="ri-skip-forward-fill fs-5 text-fixed-white"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!">
                                                        <i className="ri-shuffle-fill fs-5 text-fixed-white"></i>
                                                    </Link>
                                                </div>
                                            </Col>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={12} xl={6} lg={6} md={6} sm={6} className="col-12">
                                <Card className="custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                             RECENTLY PLAYED
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <ul className="list-unstyled podcast-recently-played-list">
                                            <li>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md">
                                                            <img src="../../assets/images/media/media-61.jpg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <Link scroll={false} href="#!" className="fw-medium">Tech Talk</Link>
                                                        <span className="d-block fs-12 text-muted">John Smith</span>
                                                    </div>
                                                    <div className="text-end">
                                                        <Link scroll={false} href="#!" className="fw-medium text-gray-3"><i className="ri-heart-fill fs-18 lh-1"></i></Link>
                                                        <span className="d-block fs-12 text-muted">45 Mins</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md">
                                                            <img src="../../assets/images/media/media-59.jpg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <Link scroll={false} href="#!" className="fw-medium">Science Explorers</Link>
                                                        <span className="d-block fs-12 text-muted">Emily Johnson</span>
                                                    </div>
                                                    <div className="text-end">
                                                        <Link scroll={false} href="#!" className="fw-medium text-danger"><i className="ri-heart-fill fs-18 lh-1"></i></Link>
                                                        <span className="d-block fs-12 text-muted">30 Mins</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md">
                                                            <img src="../../assets/images/media/media-62.jpg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <Link scroll={false} href="#!" className="fw-medium">Business Insights</Link>
                                                        <span className="d-block fs-12 text-muted">David Williams</span>
                                                    </div>
                                                    <div className="text-end">
                                                        <Link scroll={false} href="#!" className="fw-medium text-gray-3"><i className="ri-heart-fill fs-18 lh-1"></i></Link>
                                                        <span className="d-block fs-12 text-muted">60 Mins</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md">
                                                            <img src="../../assets/images/media/media-71.jpg" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <Link scroll={false} href="#!" className="fw-medium">Health and Wellness</Link>
                                                        <span className="d-block fs-12 text-muted">Michael Brown</span>
                                                    </div>
                                                    <div className="text-end">
                                                        <Link scroll={false} href="#!" className="fw-medium text-gray-3"><i className="ri-heart-fill fs-18 lh-1"></i></Link>
                                                        <span className="d-block fs-12 text-muted">50 Mins</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xxl={12} className="col-12">
                                <Card className="custom-card overflow-hidden">
                                    <Card.Header className="justify-content-between">
                                        <Card.Title>PODCAST ACTIVITY</Card.Title>
                                        <Dropdown className="custom-dropdown"> 
                                            <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="true"> Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </Dropdown.Toggle> 
                                            <Dropdown.Menu role="menu"> 
                                                <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                                 <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li> 
                                                 <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li> 
                                            </Dropdown.Menu> 
                                        </Dropdown>
                                    </Card.Header>
                                    <Card.Body className="pb-0">
                                        <div className="ps-3"> 
                                            <div className="text-muted fs-12 mb-1">Total Watch Time<span className="ms-2 d-inline-block text-success"><i className="fe fe-arrow-up-right"></i>0.25%</span> 
                                            </div> 
                                            <h5 className="fw-medium mb-0">365 Hours</h5> 
                                        </div>
                                        <div id="podcast-activity">
                                            <ReactApexChart options={Podcastdata.Podcastactivity.options} series={Podcastdata.Podcastactivity.series} type="bar" width={"100%"} height={206} />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/*  End: row-2 */}
</Fragment>
);
};

export default Podcast;