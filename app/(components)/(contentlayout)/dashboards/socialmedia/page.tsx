"use client"
import React, { Fragment, useState } from "react";
import { Card, Col, Dropdown, ListGroup, Pagination, Row } from "react-bootstrap";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Socialmediadata from '@/shared/data/dashboards/socialmediadata'
import { WorldMap } from "@/shared/data/maps/vectordata";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Select = dynamic(() => import("react-select"), { ssr: false });
const Socialmedia = () => {
    const Analysisdata=[
        {value:'Youtube', label:'Youtube'},
        {value:'Twitter', label:'Twitter'},
        {value:'Facebook', label:'Facebook'},
        {value:'Instagram', label:'Instagram'}
    ]
    const [content, setContent] = useState("");
return (
<Fragment>
                {/*  Start::page-header */}
                    <Seo title={"Social Media"} />
                    <Pageheader Heading="Social Media" Pages={[{title:"Dashboards", active:true}, {title:"Social Media", active:false},]} />
                {/*  End::page-header */}
                {/*  Start:: row-1 */}
                <Row>
                    <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-start gap-3">
                                    <div className="main-card-icon primary">
                                        <div className="avatar avatar-lg bg-primary-transparent border border-primary border-opacity-10">
                                            <div className="avatar avatar-sm svg-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M226.59,71.53a16,16,0,0,0-9.63-11C183.48,47.65,128,48,128,48s-55.48-.35-89,12.58a16,16,0,0,0-9.63,11C27.07,80.54,24,98.09,24,128s3.07,47.46,5.41,56.47A16,16,0,0,0,39,195.42C72.52,208.35,128,208,128,208s55.48.35,89-12.58a16,16,0,0,0,9.63-10.95c2.34-9,5.41-26.56,5.41-56.47S228.93,80.54,226.59,71.53ZM112,160V96l48,32Z" opacity="0.2"/><polygon points="160 128 112 96 112 160 160 128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M24,128c0,29.91,3.07,47.45,5.41,56.47A16,16,0,0,0,39,195.42C72.52,208.35,128,208,128,208s55.48.35,89-12.58a16,16,0,0,0,9.63-10.95c2.34-9,5.41-26.56,5.41-56.47s-3.07-47.45-5.41-56.47a16,16,0,0,0-9.63-11C183.48,47.65,128,48,128,48s-55.48-.35-89,12.58a16,16,0,0,0-9.63,11C27.07,80.54,24,98.09,24,128Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-fill">
                                        <h5 className="fs-4 mb-1">512,345</h5>
                                        <span className="text-muted fs-12">Subscribers<span className="text-success ms-2 d-inline-block">0.45%<i className="ti ti-arrow-narrow-up"></i></span></span>
                                        <div id="youtube-subscribers" className="mt-3">
                                            <ReactApexChart options={Socialmediadata.Youtubesubscribers.options} series={Socialmediadata.Youtubesubscribers.series} type="area" width={100} height={30} />
                                        </div>
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
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-start gap-3">
                                    <div className="main-card-icon secondary">
                                        <div className="avatar avatar-lg bg-secondary-transparent border border-secondary border-opacity-10">
                                            <div className="avatar avatar-sm svg-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="48 40 96 40 208 216 160 216 48 40" opacity="0.2"/><polygon points="48 40 96 40 208 216 160 216 48 40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="113.88" y1="143.53" x2="48" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="208" y1="40" x2="142.12" y2="112.47" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-fill">
                                        <h5 className="fs-4 mb-1">154,678</h5>
                                        <span className="text-muted fs-12">Followers<span className="text-success ms-2 d-inline-block">0.45%<i className="ti ti-arrow-narrow-up"></i></span></span>
                                        <div id="twitter-followers" className="mt-3 invert-1">
                                            <ReactApexChart options={Socialmediadata.Twitterfollowers.options} series={Socialmediadata.Twitterfollowers.series} type="area" width={100} height={30} />
                                        </div>
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
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-start gap-3">
                                    <div className="main-card-icon success">
                                        <div className="avatar avatar-lg bg-success-transparent border border-success border-opacity-10">
                                            <div className="avatar avatar-sm svg-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z" opacity="0.2"/><polyline points="80 144 112 112 144 144 176 112" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-fill">
                                        <h5 className="fs-4 mb-1">307,892</h5>
                                        <span className="text-muted fs-12">Followers<span className="text-success ms-2 d-inline-block">0.45%<i className="ti ti-arrow-narrow-up"></i></span></span>
                                        <div id="facebook-followers" className="mt-3">
                                             <ReactApexChart options={Socialmediadata.Facebookfollowers.options} series={Socialmediadata.Facebookfollowers.series} type="area" width={100} height={30} />
                                        </div>
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
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-start gap-3">
                                    <div className="main-card-icon orange">
                                        <div className="avatar avatar-lg bg-orange-transparent border border-orange border-opacity-10">
                                            <div className="avatar avatar-sm svg-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M176,32H80A48,48,0,0,0,32,80v96a48,48,0,0,0,48,48h96a48,48,0,0,0,48-48V80A48,48,0,0,0,176,32ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2"/><rect x="32" y="32" width="192" height="192" rx="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="16"/><circle cx="180" cy="76" r="12"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-fill">
                                        <h5 className="fs-4 mb-1">198,765</h5>
                                        <span className="text-muted fs-12">Followers<span className="text-success ms-2 d-inline-block">0.45%<i className="ti ti-arrow-narrow-up"></i></span></span>
                                        <div id="instagram-followers" className="mt-3">
                                                <ReactApexChart options={Socialmediadata.Instagramfollowers.options} series={Socialmediadata.Instagramfollowers.series} type="area" width={100} height={30} />
                                        </div>
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
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*  End:: row-1 */}

                {/*  Start:: row-2 */}
                <Row>
                    <Col xl={9}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    PROFILE ANALYSIS
                                </Card.Title>
                                <div className="d-flex gap-2 align-items-center">
                                    <div>
                                        <Select  name="colors" options={Analysisdata} className="default basic-multi-select custom-multi " id="choices-multiple-default"
                                             menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Analysisdata[0]]}
                                            />
                                    </div>
                                    <Dropdown className="custom-dropdown"> 
                                        <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 text-muted no-caret  border-0" data-bs-toggle="dropdown" aria-expanded="true"> Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </Dropdown.Toggle> 
                                        <Dropdown.Menu role="menu" data-popper-placement="bottom-end"> 
                                            <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                             <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li> 
                                             <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li> 
                                        </Dropdown.Menu> 
                                    </Dropdown>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div id="profile-analysis">
                                    <ReactApexChart options={Socialmediadata.Profileanalysis.options} series={Socialmediadata.Profileanalysis.series} type="area" width={"100%"} height={332} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    AUDIENCE AGE METRICS
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="py-0">
                                <div id="audience-age-metrics">
                                    <ReactApexChart options={Socialmediadata.Audienceage.options} series={Socialmediadata.Audienceage.series} type="bar" width={"100%"} height={375} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*  End:: row-2 */}

                {/*  Start:: row-3 */}
                <Row>
                    <Col xl={3}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    AUDIENCE REACHED
                                </Card.Title>
                                <Dropdown className="custom-dropdown"> 
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 text-muted no-caret border-0 d-inline" data-bs-toggle="dropdown" aria-expanded="true"> Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </Dropdown.Toggle> 
                                    <Dropdown.Menu role="menu" 
                                    // style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 28px);" 
                                    data-popper-placement="bottom-end"> 
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                         <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li> 
                                         <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li> 
                                    </Dropdown.Menu> 
                                </Dropdown>
                            </Card.Header>
                            <Card.Body>
                                <div id="audience-reached">
                                    <ReactApexChart options={Socialmediadata.Audience.options} series={Socialmediadata.Audience.series} type="donut" width={"100%"} height={220} />
                                </div>
                            </Card.Body>
                            <Card.Footer className="p-0">
                                <ListGroup as="ul" className="list-group list-group-flush audience-reached-list">
                                    <ListGroup.Item as="li">
                                        <div className="d-flex align-items-start justify-content-between">
                                            <div className="lh-1">
                                                <div className="fw-medium mb-1">Men</div>
                                            </div>
                                            <div className="lh-1 text-end">
                                                <span className="d-block fw-semibold mb-0">60.64%</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        <div className="d-flex align-items-start justify-content-between">
                                            <div className="lh-1">
                                                <div className="fw-medium mb-1">Women</div>
                                            </div>
                                            <div className="lh-1 text-end">
                                                <span className="d-block fw-semibold mb-0">59.36%</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    AUDIENCE TOP COUNTRIES
                                </Card.Title>  
                            </Card.Header>
                            <Card.Body className="overflow-hidden">
                                <Row>
                                    <Col xl={4} className="my-auto">
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-3">
                                                <span className="fs-12"><i className="ri-checkbox-blank-circle-fill align-middle me-2 d-inline-block text-primary"></i>Usa</span><span className="fw-medium float-end">3,201</span>
                                            </li>
                                            <li className="mb-3">
                                                <span className="fs-12"><i className="ri-checkbox-blank-circle-fill align-middle me-2 d-inline-block text-secondary"></i>India</span><span className="fw-medium float-end">2,345</span>
                                            </li>
                                            <li className="mb-3">
                                                <span className="fs-12"><i className="ri-checkbox-blank-circle-fill align-middle me-2 d-inline-block text-danger"></i>Vatican City</span><span className="fw-medium float-end">106</span>
                                            </li>
                                            <li className="mb-3">
                                                <span className="fs-12"><i className="ri-checkbox-blank-circle-fill align-middle me-2 d-inline-block text-info"></i>Canada</span><span className="fw-medium float-end">2,857</span>
                                            </li>
                                            <li className="mb-3">
                                                <span className="fs-12"><i className="ri-checkbox-blank-circle-fill align-middle me-2 d-inline-block text-orange"></i>Mauritius</span><span className="fw-medium float-end">169</span>
                                            </li>
                                            <li className="mb-3">
                                                <span className="fs-12"><i className="ri-checkbox-blank-circle-fill align-middle me-2 d-inline-block text-warning"></i>Singapore</span><span className="fw-medium float-end">1,950</span>
                                            </li>
                                            <li className="mb-3">
                                                <span className="fs-12"><i className="ri-checkbox-blank-circle-fill align-middle me-2 d-inline-block text-success"></i>Palau</span><span className="fw-medium float-end">224</span>
                                            </li>
                                            <li className="mb-0">
                                                <span className="fs-12"><i className="ri-checkbox-blank-circle-fill align-middle me-2 d-inline-block text-pink"></i>Maldives</span><span className="fw-medium float-end">147</span>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col xl={8}>
                                        <div id="visitors-countries" className="text-center">
                                        <WorldMap setTooltipContent={setContent} />
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    REVENUE EARNED
                                </Card.Title>
                                <Dropdown> 
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 text-muted no-caret border-0 d-inline" data-bs-toggle="dropdown" aria-expanded="true"> Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </Dropdown.Toggle> 
                                    <Dropdown.Menu role="menu" 
                                    // style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 28px);"
                                     data-popper-placement="bottom-end"> 
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                         <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li> 
                                         <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li> 
                                    </Dropdown.Menu> 
                                </Dropdown>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div id="revenue-earned">
                                     <ReactApexChart options={Socialmediadata.Revenueearned.options} series={Socialmediadata.Revenueearned.series} type="radialBar" width={"100%"} height={180} />
                                 </div>     
                                <div className="border-top">
                                    <ListGroup as="ul" className="list-group list-group-flush revenue-earned-list">
                                        <ListGroup.Item as="li"> 
                                            <div className="d-flex align-items-start justify-content-between">
                                                <div className="lh-1">
                                                    <div className="fw-medium mb-1">Youtube</div>
                                                </div>
                                                <div className="lh-1 text-end">
                                                    <span className="d-block fw-semibold mb-0">$76,562</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li"> 
                                            <div className="d-flex align-items-start justify-content-between">
                                                <div className="lh-1">
                                                    <div className="fw-medium mb-1">Twitter</div>
                                                </div>
                                                <div className="lh-1 text-end">
                                                    <span className="d-block fw-semibold mb-0">$67,454</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li"> 
                                            <div className="d-flex align-items-start justify-content-between">
                                                <div className="lh-1">
                                                    <div className="fw-medium mb-1">Facebook</div>
                                                </div>
                                                <div className="lh-1 text-end">
                                                    <span className="d-block fw-semibold mb-0">$61,225</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li"> 
                                            <div className="d-flex align-items-start justify-content-between">
                                                <div className="lh-1">
                                                    <div className="fw-medium mb-1">Instagram</div>
                                                </div>
                                                <div className="lh-1 text-end">
                                                    <span className="d-block fw-semibold mb-0">$90,568</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </div>                           
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*  End:: row-3 */}

                {/*  Start:: row-4 */}
                <Row>
                    <Col xl={9}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    SOCIAL MEDIA PERFORMANCE
                                </Card.Title>
                                <div className="d-flex flex-wrap gap-2"> 
                                    <div> 
                                        <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" /> 
                                    </div> 
                                    <Dropdown> 
                                        <Dropdown.Toggle variant="" href="#!" className="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false"> Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> 
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
                                    <table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col">Date</th>
                                                <th scope="col">Platform</th>
                                                <th scope="col">Likes</th>
                                                <th scope="col">Comments</th>
                                                <th scope="col">Shares</th>
                                                <th scope="col">Impressions</th>
                                                <th scope="col">Engagemen(%)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    2024-02-15
                                                </td>
                                                <td>
                                                   <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-sm bg-danger-transparent">
                                                            <i className="ri-youtube-fill fs-16"></i>
                                                        </span>
                                                        <span className="fw-medium">Youtube</span>
                                                   </div>
                                                </td>
                                                <td>
                                                    150
                                                </td>
                                                <td>
                                                    25
                                                </td>
                                                <td>
                                                    50
                                                </td>
                                                <td>
                                                    <span className="badge bg-primary-transparent">10,000</span>
                                                </td>
                                                <td>
                                                    3.5%
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2024-02-14
                                                </td>
                                                <td>
                                                   <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-sm bg-dark-transparent">
                                                            <i className="ri-twitter-x-fill fs-16"></i>
                                                        </span>
                                                        <span className="fw-medium">Twitter</span>
                                                   </div>
                                                </td>
                                                <td>
                                                    200
                                                </td>
                                                <td>
                                                    30
                                                </td>
                                                <td>
                                                    70
                                                </td>
                                                <td>
                                                    <span className="badge bg-secondary-transparent">15,000</span>
                                                </td>
                                                <td>
                                                    4.2%
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2024-02-13
                                                </td>
                                                <td>
                                                   <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-sm bg-info-transparent">
                                                            <i className="ri-messenger-fill fs-16"></i>
                                                        </span>
                                                        <span className="fw-medium">Facebook</span>
                                                   </div>
                                                </td>
                                                <td>
                                                    300
                                                </td>
                                                <td>
                                                    40
                                                </td>
                                                <td>
                                                    90
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">20,000</span>
                                                </td>
                                                <td>
                                                    5.0%
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2024-02-12
                                                </td>
                                                <td>
                                                   <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-sm bg-secondary-transparent">
                                                            <i className="ri-instagram-fill fs-16"></i>
                                                        </span>
                                                        <span className="fw-medium">Instagram</span>
                                                   </div>
                                                </td>
                                                <td>
                                                    100
                                                </td>
                                                <td>
                                                    20
                                                </td>
                                                <td>
                                                    30
                                                </td>
                                                <td>
                                                    <span className="badge bg-orange-transparent">8,000</span>
                                                </td>
                                                <td>
                                                    2.1%
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2024-02-11
                                                </td>
                                                <td>
                                                   <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-sm bg-dark-transparent">
                                                            <i className="ri-twitter-x-fill fs-16"></i>
                                                        </span>
                                                        <span className="fw-medium">Twitter</span>
                                                   </div>
                                                </td>
                                                <td>
                                                    120
                                                </td>
                                                <td>
                                                    15
                                                </td>
                                                <td>
                                                    40
                                                </td>
                                                <td>
                                                    <span className="badge bg-info-transparent">12,000</span>
                                                </td>
                                                <td>
                                                    3.0%
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                            <Card.Footer className="border-top-0"> 
                                <div className="d-flex align-items-center"> 
                                    <div> Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
                                    <div className="ms-auto"> 
                                    <nav aria-label="Page navigation" className="pagination-style-4"> 
                                        <Pagination className="mb-0"> 
                                            <Pagination.Item disabled> Prev </Pagination.Item>
                                                <Pagination.Item active >1</Pagination.Item> 
                                                <Pagination.Item>2</Pagination.Item> 
                                                <Pagination.Item className="pagination-next">next</Pagination.Item> 
                                            </Pagination> 
                                        </nav> 
                                    </div> 
                                </div> 
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    SESSIONS BY DEVICE
                                </Card.Title>
                                <Dropdown> 
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 text-muted no-caret border-0 d-inline" data-bs-toggle="dropdown" aria-expanded="true"> Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </Dropdown.Toggle> 
                                    <Dropdown.Menu role="menu" 
                                    // style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 28px);"
                                     data-popper-placement="bottom-end"> 
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                         <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li> 
                                         <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li> 
                                    </Dropdown.Menu> 
                                </Dropdown>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div id="sessions-device">
                                    <ReactApexChart options={Socialmediadata.Device.options} series={Socialmediadata.Device.series} type="bubble" width={"100%"} height={355} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*  End:: row-4 */}
</Fragment>
);
};

export default Socialmedia;