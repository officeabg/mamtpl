"use client"
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, ListGroup, Pagination, Row } from "react-bootstrap";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import  * as Stocksdata from '@/shared/data/dashboards/stocksdata';
import { Swiper, SwiperSlide } from "swiper/react";
import {
	Autoplay
} from "swiper/modules";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Stocks = () => {
    const breakpoints = {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        1440: {
            slidesPerView:4,
            spaceBetween: 40,
        },
    };
return (
<Fragment> 
                {/*  Start::page-header */}
                    <Seo title={"Stocks"} />
                    <Pageheader Heading="Stocks" Pages={[{title:"Dashboards", active:true}, {title:"Stocks", active:false},]} />
                {/*  End::page-header */}

                {/*  Start:: row-1 */}
                <Row>
                    <Col xl={12}>
                        <Swiper breakpoints={breakpoints} slidesPerView={4} className="swiper swiper-basic" spaceBetween={30}  autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                    modules={[Autoplay]}>
                            <div className="swiper-wrapper">
                                <SwiperSlide>
                                    <Card className="custom-card">
                                        <Card.Body className="p-2">
                                            <div className="d-flex gap-2 flex-wrap align-items-center justify-content-between bg-primary-transparent p-3 rounded">
                                                <div className="d-flex flex-fill align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-md">
                                                            <img src="../../assets/images/media/apps/apple.png" alt="" className="invert-1"/>
                                                        </span>
                                                    </div>
                                                    <div className="lh-1">
                                                        <span className="d-block mb-2 text-default fw-medium">Apple</span>
                                                        <span className="d-block fs-12">$150.20</span>
                                                    </div>
                                                </div>
                                                <div className="text-success fs-12 text-end">
                                                    <span className="d-block">+1.50<i className="ti ti-arrow-bear-right"></i></span>
                                                    <span className="d-block">$157.71</span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="custom-card">
                                        <Card.Body className="p-2"> 
                                            <div className="d-flex gap-2 flex-wrap align-items-center justify-content-between bg-secondary-transparent p-3 rounded">
                                                <div className="d-flex flex-fill align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md">
                                                            <img src="../../assets/images/media/apps/google.png" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="lh-1">
                                                        <span className="d-block mb-2 text-default fw-medium">Google</span>
                                                        <span className="d-block fs-12">$2,500.50</span>
                                                    </div>
                                                </div>
                                                <div className="text-danger fs-12 text-end">
                                                    <span className="d-block">-5.25<i className="ti ti-arrow-bear-right"></i></span>
                                                    <span className="d-block">$2,625.53</span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="custom-card">
                                        <Card.Body className="p-2">
                                            <div className="d-flex gap-2 flex-wrap align-items-center justify-content-between bg-success-transparent p-3 rounded">
                                                <div className="d-flex flex-fill align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md">
                                                            <img src="../../assets/images/media/apps/microsoft.png" alt=""/>
                                                        </span>
                                                    </div>
                                                    <div className="lh-1">
                                                        <span className="d-block mb-2 text-default fw-medium">Microsoft</span>
                                                        <span className="d-block fs-12">$300.75</span>
                                                    </div>
                                                </div>
                                                <div className="text-success fs-12 text-end">
                                                    <span className="d-block">+2.30%<i className="ti ti-arrow-bear-right"></i></span>
                                                    <span className="d-block">$315.79</span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="custom-card">
                                        <Card.Body className="p-2">
                                            <div className="d-flex gap-2 flex-wrap align-items-center justify-content-between bg-orange-transparent p-3 rounded">
                                                <div className="d-flex flex-fill align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md">
                                                            <img src="../../assets/images/media/apps/amazon.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="lh-1">
                                                        <span className="d-block mb-2 text-default fw-medium">Amazon</span>
                                                        <span className="d-block fs-12">$3,000.00</span>
                                                    </div>
                                                </div>
                                                <div className="text-danger fs-12 text-end">
                                                    <span className="d-block">-10.50%<i className="ti ti-arrow-bear-right"></i></span>
                                                    <span className="d-block">$3,150.00</span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="custom-card">
                                        <Card.Body className="p-2">
                                            <div className="d-flex flex-wrap align-items-center justify-content-between bg-info-transparent p-3 rounded">
                                                <div className="d-flex flex-fill align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md">
                                                            <img src="../../assets/images/media/apps/tesla.png" alt="" className="invert-1"/>
                                                        </span>
                                                    </div>
                                                    <div className="lh-1">
                                                        <span className="d-block mb-2 text-default fw-medium">Tesla</span>
                                                        <span className="d-block fs-12">$700.80</span>
                                                    </div>
                                                </div>
                                                <div className="text-success fs-12 text-end">
                                                    <span className="d-block">+8.00%<i className="ti ti-arrow-bear-right"></i></span>
                                                    <span className="d-block">$735.84</span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="custom-card">
                                        <Card.Body className="p-2">
                                            <div className="d-flex flex-wrap align-items-center justify-content-between bg-warning-transparent p-3 rounded">
                                                <div className="d-flex flex-fill align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md">
                                                            <img src="../../assets/images/media/apps/facebook.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="lh-1">
                                                        <span className="d-block mb-2 text-default fw-medium">Facebook</span>
                                                        <span className="d-block fs-12">$350.40</span>
                                                    </div>
                                                </div>
                                                <div className="text-danger fs-12 text-end">
                                                    <span className="d-block">-3.20%<i className="ti ti-arrow-bear-right"></i></span>
                                                    <span className="d-block">$367.92</span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="custom-card">
                                        <Card.Body className="p-2">
                                            <div className="d-flex gap-2 flex-wrap align-items-center justify-content-between bg-green-transparent p-3 rounded">
                                                <div className="d-flex flex-fill align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md">
                                                            <img src="../../assets/images/media/apps/nvidia.png" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="lh-1">
                                                        <span className="d-block mb-2 text-default fw-medium">Nvidia</span>
                                                        <span className="d-block fs-12">$800.60</span>
                                                    </div>
                                                </div>
                                                <div className="text-success fs-12 text-end">
                                                    <span className="d-block">+5.75%<i className="ti ti-arrow-bear-right"></i></span>
                                                    <span className="d-block">$840.63</span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                    </Col>
                </Row>
                {/*  End:: row-1 */}

                {/*  Start:: row-2 */}
                <Row>
                    <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="col-12">
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-start gap-2 mb-4 flex-wrap">
                                    <div className="lh-1">
                                        <span className="avatar avatar-md">
                                            <img src="../../assets/images/media/apps/apple.png" alt="" className="invert-1"/>
                                        </span>
                                    </div>
                                    <div className="flex-fill lh-1">
                                        <span className="d-block mb-2">Apple</span>
                                        <span className="d-block fs-12">Apple Inc</span>
                                    </div>
                                    <div id="apple-stock-chart">
                                        <ReactApexChart options={Stocksdata.Applechart.options} series={Stocksdata.Applechart.series} type="line" width={100} height={20} />
                                    </div>
                                </div>
                                <div className="mb-0 d-flex align-items-center justify-content-between flex-wrap">
                                    <h4 className="fw-medium lh-1 mb-0">$191.56<span className="text-success ms-2 align-middle fs-12 d-inline-block">+1.55%</span></h4>
                                    <span className="fs-12">180 Stocks
                                        <a className="svg-secondary" href="#!" data-bs-toggle="popover"
                                        data-bs-placement="left" data-bs-custom-class="popover-light only-body" data-bs-content="Share value fluctucates timely.">
                                            <i className="ri-information-2-line ms-1 ms-1"></i>
                                        </a>
                                    </span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="col-12">
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-start gap-2 mb-4 flex-wrap">
                                    <div className="lh-1">
                                        <span className="avatar avatar-md">
                                            <img src="../../assets/images/media/apps/nvidia.png" alt="" />
                                        </span>
                                    </div>
                                    <div className="flex-fill lh-1">
                                        <span className="d-block mb-2">Nvidia</span>
                                        <span className="d-block fs-12">NVIDIA Corp</span>
                                    </div>
                                    <div id="nvidia-stock-chart">
                                         <ReactApexChart options={Stocksdata.Nvidiachart.options} series={Stocksdata.Nvidiachart.series} type="line" width={100} height={20} />
                                    </div>
                                </div>
                                <div className="mb-0 d-flex align-items-center justify-content-between flex-wrap">
                                    <h4 className="fw-medium lh-1 mb-0">$594.91<span className="text-danger fs-12 ms-2 align-middle d-inline-block">-4.17%</span></h4>
                                    <span className="fs-12">63 Stocks
                                        <a className="svg-secondary" href="#!" data-bs-toggle="popover"
                                        data-bs-placement="left" data-bs-custom-class="popover-light only-body" data-bs-content="Share value fluctucates timely.">
                                            <i className="ri-information-2-line ms-1"></i>
                                        </a>
                                    </span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="col-12">
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-start gap-2 mb-4 flex-wrap">
                                    <div className="lh-1">
                                        <span className="avatar avatar-md">
                                            <img src="../../assets/images/media/apps/amazon.png" alt="" />
                                        </span>
                                    </div>
                                    <div className="flex-fill lh-1">
                                        <span className="d-block mb-2">Amazon</span>
                                        <span className="d-block fs-12">Amazon.com, Inc.</span>
                                    </div>
                                    <div id="amazon-stock-chart">
                                          <ReactApexChart options={Stocksdata.Amazonchart.options} series={Stocksdata.Amazonchart.series} type="line" width={100} height={20} />
                                    </div>
                                </div>
                                <div className="mb-0 d-flex align-items-center justify-content-between flex-wrap">
                                    <h4 className="fw-medium lh-1 mb-0">$155.34<span className="text-success fs-12 ms-2 align-middle d-inline-block">1.84%</span></h4>
                                    <span className="fs-12">79 Stocks
                                        <a className="svg-secondary" href="#!" data-bs-toggle="popover"
                                        data-bs-placement="left" data-bs-custom-class="popover-light only-body" data-bs-content="Share value fluctucates timely.">
                                            <i className="ri-information-2-line ms-1"></i>
                                        </a>
                                    </span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="col-12">
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-start gap-2 mb-4 flex-wrap">
                                    <div className="lh-1">
                                        <span className="avatar avatar-md">
                                            <img src="../../assets/images/media/apps/microsoft.png" alt="" />
                                        </span>
                                    </div>
                                    <div className="flex-fill lh-1">
                                        <span className="d-block mb-2">Microsoft</span>
                                        <span className="d-block fs-12">Alphabet Inc</span>
                                    </div>
                                    <div id="microsoft-stock-chart">
                                        <ReactApexChart options={Stocksdata.Microsoftchart.options} series={Stocksdata.Microsoftchart.series} type="line" width={100} height={20} />
                                    </div>
                                </div>
                                <div className="mb-0 d-flex align-items-center justify-content-between flex-wrap">
                                    <h4 className="fw-medium lh-1 mb-0">$420.55<span className="text-success fs-12 ms-2 align-middle d-inline-block">+1.56%</span></h4>
                                    <span className="fs-12">45 Stocks
                                        <a className="svg-secondary" href="#!" data-bs-toggle="popover"
                                        data-bs-placement="left" data-bs-custom-class="popover-light only-body" data-bs-content="Share value fluctucates timely.">
                                            <i className="ri-information-2-line ms-1"></i>
                                        </a>
                                    </span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*  End:: row-2 */}

                {/*  Start:: row-3 */}
                <Row>
                    <Col xl={9}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    TOTAL INVESTMENTS
                                </Card.Title>
                                <Dropdown> 
                                    <Dropdown.Toggle variant="" href="#!" className="p-2 fs-12 text-muted no-caret  border-0 d-inline" data-bs-toggle="dropdown" aria-expanded="true"> Sort By <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i> </Dropdown.Toggle> 
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
                                <div className="d-flex alilgn-items-center justify-content-between gap-3 p-3 bg-light flex-wrap rounded"> 
                                    <div className="d-flex flex-wrap flex-fill gap-3"> 
                                        <div> 
                                            <span className="d-block text-muted mb-1">Invested Value</span> 
                                            <span className="d-block fw-medium">$1,290.94<span className="text-success ms-1 fs-12"><i className="ti ti-chevron-up"></i>1.22%</span></span> 
                                            <div className="d-block text-muted fs-11 mt-3">Jun 17, 2024 11:25 AM UTC +5:30</div> 
                                        </div> 
                                        <div> 
                                            <span className="d-block text-muted mb-1">Total Returns</span> 
                                            <span className="d-block fw-medium">$25,458.20<span className="text-success ms-1 fs-12"><i className="ti ti-chevron-up"></i>10.14%</span></span> 
                                        </div> 
                                    </div> 
                                    <div className="d-flex flex-wrap gap-3 text-end"> 
                                        <div> 
                                            <span className="d-block text-muted mb-1">Today Change</span> 
                                            <span className="d-block fw-medium">$112.09</span> 
                                        </div> 
                                        <div> 
                                            <span className="d-block text-muted mb-1">Change In %</span> 
                                            <span className="d-block fw-medium">+0.01%<span className="text-success ms-1 fs-12"><i className="ti ti-chevron-up"></i>0.21%</span></span> 
                                        </div> 
                                    </div> 
                                </div>
                                <div id="totalInvestmentsStats">
                                    <ReactApexChart options={Stocksdata.Totalinvestments.options} series={Stocksdata.Totalinvestments.series} type="area" width={"100%"} height={382} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    WATCHLIST
                                </Card.Title>
                                <a href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </a>
                            </Card.Header>
                            <Card.Body className=" p-0">
                                <div className="table-responsive">
                                    <table className="table text-nowrap table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Symbol</th>
                                                <th scope="col">Last Price</th>
                                                <th scope="col">Change</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs">
                                                            <img src="../../assets/images/media/apps/apple.png" alt="" className="invert-1"/>
                                                        </span>
                                                        <a href="#!" className="fw-medium">AAPL</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    $150.20
                                                </td>
                                                <td>
                                                    <span className="text-success">+1.50%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-1">
                                                        <span className="avatar avatar-xs">
                                                            <img src="../../assets/images/media/apps/google.png" alt="" />
                                                        </span>
                                                        <a href="#!" className="fw-medium">GOOG</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    $2,500.5
                                                </td>
                                                <td>
                                                    <span className="text-danger">-5.25%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs">
                                                            <img src="../../assets/images/media/apps/microsoft.png" alt="" />
                                                        </span>
                                                        <a href="#!" className="fw-medium">MSFT</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    $300.75
                                                </td>
                                                <td>
                                                    <span className="text-success">+2.30%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs">
                                                            <img src="../../assets/images/media/apps/amazon.png" alt="" />
                                                        </span>
                                                        <a href="#!" className="fw-medium">AMZN</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    $3,000.00
                                                </td>
                                                <td>
                                                    <span className="text-danger">-10.50%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs">
                                                            <img src="../../assets/images/media/apps/tesla.png" alt="" className="invert-1"/>
                                                        </span>
                                                        <a href="#!" className="fw-medium">TSLA</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    $700.80
                                                </td>
                                                <td>
                                                    <span className="text-success">+8.00%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs">
                                                            <img src="../../assets/images/media/apps/facebook.png" alt="" />
                                                        </span>
                                                        <a href="#!" className="fw-medium">FB</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    $350.40
                                                </td>
                                                <td>
                                                    <span className="text-danger">-3.20%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs">
                                                            <img src="../../assets/images/media/apps/nvidia.png" alt="" />
                                                        </span>
                                                        <a href="#!" className="fw-medium">NVDA</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    $800.60
                                                </td>
                                                <td>
                                                    <span className="text-success">+5.75%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs">
                                                            <img src="../../assets/images/media/apps/visa.png" alt="" />
                                                        </span>
                                                        <a href="#!" className="fw-medium">V</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    $250.90
                                                </td>
                                                <td>
                                                    <span className="text-danger">-1.80%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs">
                                                            <img src="../../assets/images/media/apps/paypal.png" alt="" />
                                                        </span>
                                                        <a href="#!" className="fw-medium">PYPL</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    $230.10
                                                </td>
                                                <td>
                                                    <span className="text-success">+4.60%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs">
                                                            <img src="../../assets/images/media/apps/ibm.png" alt="" />
                                                        </span>
                                                        <a href="#!" className="fw-medium">IBM</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    $120.50
                                                </td>
                                                <td>
                                                    <span className="text-danger">-2.50%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs">
                                                            <img src="../../assets/images/media/apps/intel.png" alt="" />
                                                        </span>
                                                        <a href="#!" className="fw-medium">INTC</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    $55.75
                                                </td>
                                                <td>
                                                    <span className="text-success">+0.90%</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*  End:: row-3 */}

                {/*  Start:: row-4 */}
                <Row>
                    <Col xl={4}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    TRENDING STOCKS
                                </Card.Title>
                                <a href="#!" className="fs-12 text-muted py-1"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </a>
                            </Card.Header>
                            <Card.Body className=" p-0">
                                <ListGroup className="list-group list-group-flush">
                                    <ListGroup.Item>
                                        <div className="d-flex gap-2 flex-wrap align-items-start justify-content-between mb-2">
                                            <div className="d-flex flex-fill align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md">
                                                        <img src="../../assets/images/media/apps/apple.png" alt="" className="invert-1"/>
                                                    </span>
                                                </div>
                                                <div className="lh-1">
                                                    <span className="fw-semibold d-block mb-2 text-default">Apple</span>
                                                    <span className="d-block text-muted fs-12">$12,289.44</span>
                                                </div>
                                            </div>
                                            <div className="text-success fs-12 text-end">
                                                <span className="d-block">0.14%<i className="ti ti-arrow-bear-right"></i></span>
                                                <span className="d-block">+$1,780.80</span>
                                            </div>
                                        </div>
                                        <div className="btn-list text-end">
                                            <Button variant="" type="button" className="btn btn-sm btn-wave btn-danger btn-w-sm me-2">Short</Button>
                                            <Button variant="" type="button" className="btn btn-sm btn-wave btn-success me-0 btn-w-sm">Buy</Button>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex gap-2 flex-wrap align-items-start justify-content-between mb-2">
                                            <div className="d-flex flex-fill align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md">
                                                        <img src="../../assets/images/media/apps/microsoft.png" alt="" />
                                                    </span>
                                                </div>
                                                <div className="lh-1">
                                                    <span className="fw-semibold d-block mb-2 text-default">Microsoft</span>
                                                    <span className="d-block text-muted fs-12">$12,289.44</span>
                                                </div>
                                            </div>
                                            <div className="text-success fs-12 text-end">
                                                <span className="d-block">0.14%<i className="ti ti-arrow-bear-right"></i></span>
                                                <span className="d-block">+$1,780.80</span>
                                            </div>
                                        </div>
                                        <div className="btn-list text-end">
                                            <Button variant="" type="button" className="btn btn-sm btn-wave btn-danger btn-w-sm me-2">Short</Button>
                                            <Button variant="" type="button" className="btn btn-sm btn-wave btn-success me-0 btn-w-sm">Buy</Button>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex gap-2 flex-wrap align-items-start justify-content-between mb-2">
                                            <div className="d-flex flex-fill align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md">
                                                        <img src="../../assets/images/media/apps/nvidia.png" alt="" />
                                                    </span>
                                                </div>
                                                <div className="lh-1">
                                                    <span className="fw-semibold d-block mb-2 text-default">Nvidia</span>
                                                    <span className="d-block text-muted fs-12">$12,289.44</span>
                                                </div>
                                            </div>
                                            <div className="text-success fs-12 text-end">
                                                <span className="d-block">0.14%<i className="ti ti-arrow-bear-right"></i></span>
                                                <span className="d-block">+$1,780.80</span>
                                            </div>
                                        </div>
                                        <div className="btn-list text-end">
                                            <Button variant="" type="button" className="btn btn-sm btn-wave btn-danger btn-w-sm me-2">Short</Button>
                                            <Button variant="" type="button" className="btn btn-sm btn-wave btn-success me-0 btn-w-sm">Buy</Button>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex gap-2 flex-wrap align-items-start justify-content-between mb-2">
                                            <div className="d-flex flex-fill align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md">
                                                        <img src="../../assets/images/media/apps/amazon.png" alt="" />
                                                    </span>
                                                </div>
                                                <div className="lh-1">
                                                    <span className="fw-semibold d-block mb-2 text-default">Amazon</span>
                                                    <span className="d-block text-muted fs-12">$12,289.44</span>
                                                </div>
                                            </div>
                                            <div className="text-success fs-12 text-end">
                                                <span className="d-block">0.14%<i className="ti ti-arrow-bear-right"></i></span>
                                                <span className="d-block">+$1,780.80</span>
                                            </div>
                                        </div>
                                        <div className="btn-list text-end">
                                            <Button variant="" type="button" className="btn btn-sm btn-wave btn-danger btn-w-sm me-2">Short</Button>
                                            <Button variant="" type="button" className="btn btn-sm btn-wave btn-success me-0 btn-w-sm">Buy</Button>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={8}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    MY STOCKS
                                </Card.Title>
                                <div className="d-flex flex-wrap gap-2"> 
                                    <div> 
                                        <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example"/> 
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
                            <Card.Body className=" p-0">
                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col">Stock</th>
                                                <th scope="col">Open</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Close</th>
                                                <th scope="col">Change</th>
                                                <th scope="col">Marketcap</th>
                                                <th scope="col">Volume</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded"><img src="../../assets/images/media/apps/apple.png" className="invert-1" alt="..."/></span>
                                                        </div>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold fs-13 mb-0 d-flex align-items-center"><a href="#!">AAPL</a></p>
                                                            <p className="fs-12 text-muted mb-0">Apple Inc</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    $150.00
                                                </td>
                                                <td>
                                                    $151.25
                                                </td>
                                                <td>
                                                    $152.00
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">+1.75</span>
                                                </td>
                                                <td>
                                                    $2.5T
                                                </td>
                                                <td>10M</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded"><img src="../../assets/images/media/apps/microsoft.png" className="" alt="..."/></span>
                                                        </div>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold fs-13 mb-0 d-flex align-items-center"><a href="#!">MSFT</a></p>
                                                            <p className="fs-12 text-muted mb-0">Microsoft Corp</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    $300.50
                                                </td>
                                                <td>
                                                    $305.00
                                                </td>
                                                <td>
                                                    $303.75
                                                </td>
                                                <td>
                                                    <span className="badge bg-danger-transparent">-1.25</span>
                                                </td>
                                                <td>
                                                    $2.2T
                                                </td>
                                                <td>8M</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded"><img src="../../assets/images/media/apps/amazon.png" className="" alt="..."/></span>
                                                        </div>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold fs-13 mb-0 d-flex align-items-center"><a href="#!">AMZN</a></p>
                                                            <p className="fs-12 text-muted mb-0">Amazon.com Inc</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    $3,200.00
                                                </td>
                                                <td>
                                                    $3,210.50
                                                </td>
                                                <td>
                                                    $3,205.75
                                                </td>
                                                <td>
                                                    <span className="badge bg-danger-transparent">-4.75</span>
                                                </td>
                                                <td>
                                                    $1.6T
                                                </td>
                                                <td>5M</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded"><img src="../../assets/images/media/apps/google.png" className="" alt="..."/></span>
                                                        </div>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold fs-13 mb-0 d-flex align-items-center"><a href="#!">GOOGL</a></p>
                                                            <p className="fs-12 text-muted mb-0">Google Alphabet</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    $2,800.00
                                                </td>
                                                <td>
                                                    $2,810.75
                                                </td>
                                                <td>
                                                    $2,805.50
                                                </td>
                                                <td>
                                                    <span className="badge bg-danger-transparent">-5.25</span>
                                                </td>
                                                <td>
                                                    $2.0T
                                                </td>
                                                <td>7M</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded"><img src="../../assets/images/media/apps/facebook.png" alt="..."/></span>
                                                        </div>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold fs-13 mb-0 d-flex align-items-center"><a href="#!">FB</a></p>
                                                            <p className="fs-12 text-muted mb-0">Facebook Meta</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    $320.00
                                                </td>
                                                <td>
                                                    $325.50
                                                </td>
                                                <td>
                                                    $322.75
                                                </td>
                                                <td>
                                                    <span className="badge bg-success-transparent">+0.25</span>
                                                </td>
                                                <td>
                                                    $450B
                                                </td>
                                                <td>2M</td>
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
                                        <Pagination className="pagination mb-0"> 
                                            <Pagination.Item  disabled> Prev </Pagination.Item>
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
                {/*  End:: row-4 */}


</Fragment>
);
};

export default Stocks;