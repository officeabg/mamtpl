"use client"
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import {
	Autoplay, Pagination, 
} from "swiper/modules";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";

const Reviews = () => {
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
            slidesPerView: 3,
            spaceBetween: 40,
        },
    };
return (
<Fragment>
                {/* Page Header */}
                    <Seo title={"Reviews"} />
                    <Pageheader Heading="Reviews" Pages={[{title:"Pages", active:true},{title:"Reviews", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    REVIEWS STYLE 1
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="p-4">
                                <Swiper  className="swiper testimonialSwiper swiper-initialized swiper-horizontal swiper-backface-hidden" breakpoints={breakpoints} modules={[Pagination,
                                 Autoplay
                                ]} slidesPerView={3}
                                loop={true}
                                centeredSlides={true}
                                 autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                 >
                                        <SwiperSlide>
                                            <Card className="mb-0 border-0 shadow-none border-0 shadow-none overflow-hidden">
                                                <Card.Body className="p-4">
                                                    <p>
                                                        "Efficiently innovate customized growth strategies whereas error free
                                                        para digms. Monotonectally enhance stand-alone data with prospective
                                                        innovation."
                                                    </p>
                                                    <div className="d-flex justify-content-between flex-wrap gap-3">
                                                        <div className="d-flex">
                                                            <img src="../../assets/images/faces/1.jpg" alt="img"
                                                                className="avatar avatar-md avatar-rounded"/>
                                                            <div className="ms-2 my-auto mb-0">
                                                                <h6 className="mb-0 lh-1">Riley Anderson</h6>
                                                                <p className="fs-14 mb-0">Client</p>
                                                            </div>
                                                        </div>
                                                        <div className="mb-0 text-warning fs-12 my-auto">
                                                            <i className="ri-star-fill me-1"></i>
                                                            <i className="ri-star-fill me-1"></i>
                                                            <i className="ri-star-fill me-1"></i>
                                                            <i className="ri-star-fill me-1"></i>
                                                            <i className="ri-star-half-line"></i>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card mb-0 border-0 shadow-none overflow-hidden">
                                                <div className="card-body p-4">
                                                    <p>
                                                        "The fact that we were able choose them as experts for our valuable
                                                        product launch and support inspires us with pleasure they lead us at
                                                        every step of the way."
                                                    </p>
                                                    <div className="d-flex justify-content-between flex-wrap gap-3">
                                                        <div className="d-flex">
                                                            <img src="../../assets/images/faces/6.jpg" alt="img"
                                                                className="avatar avatar-md avatar-rounded"/>
                                                            <div className="ms-2 my-auto mb-0">
                                                                <h6 className="mb-0 lh-1">Lily Brown</h6>
                                                                <p className="fs-14 text-muted mb-0">Designer</p>
                                                            </div>
                                                        </div>
                                                        <div className="mb-0 text-warning fs-12 my-auto">
                                                            <i className="ri-star-fill me-1"></i>
                                                            <i className="ri-star-fill me-1"></i>
                                                            <i className="ri-star-fill me-1"></i>
                                                            <i className="ri-star-fill me-1"></i>
                                                            <i className="ri-star-half-line"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card mb-0 border-0 shadow-none overflow-hidden">
                                                <div className="card-body p-4">
                                                    <p>
                                                        "Efficiently innovate customized growth strategies whereas error free
                                                        para digms. Monotonectally enhance stand-alone data with prospective
                                                        innovation."
                                                    </p>
                                                    <div className="d-flex justify-content-between flex-wrap gap-3">
                                                        <div className="d-flex">
                                                            <img src="../../assets/images/faces/3.jpg" alt="img"
                                                                className="avatar avatar-md avatar-rounded"/>
                                                            <div className="ms-2 my-auto mb-0">
                                                                <h6 className="mb-0 lh-1">Zachary Carter</h6>
                                                                <p className="fs-14 text-muted mb-0">Client</p>
                                                            </div>
                                                        </div>
                                                        <div className="mb-0 text-warning fs-12 my-auto">
                                                            <i className="ri-star-fill me-1"></i>
                                                            <i className="ri-star-fill me-1"></i>
                                                            <i className="ri-star-fill me-1"></i>
                                                            <i className="ri-star-fill me-1"></i>
                                                            <i className="ri-star-half-line"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card mb-0 border-0 shadow-none overflow-hidden">
                                                <div className="card-body p-4">
                                                    <p>
                                                        "The fact that we were able choose them as experts for our valuable
                                                        product launch and support inspires us with pleasure they lead us at
                                                        every step of the way."
                                                    </p>
                                                    <div className="d-flex justify-content-between flex-wrap gap-3">
                                                        <div className="d-flex">
                                                            <img src="../../assets/images/faces/10.jpg" alt="img"
                                                                className="avatar avatar-md avatar-rounded"/>
                                                            <div className="ms-2 my-auto mb-0">
                                                                <h6 className="mb-0 lh-1">Ava Taylor</h6>
                                                                <p className="fs-14 text-muted mb-0">Client</p>
                                                            </div>
                                                        </div>
                                                        <div className="mb-0 text-warning fs-12 my-auto">
                                                            <i className="ri-star-fill me-1"></i>
                                                            <i className="ri-star-fill me-1"></i>
                                                            <i className="ri-star-fill me-1"></i>
                                                            <i className="ri-star-fill me-1"></i>
                                                            <i className="ri-star-half-line"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card mb-0 border-0 shadow-none overflow-hidden">
                                                <div className="card-body p-4">
                                                    <p>
                                                        "Efficiently innovate customized growth strategies whereas error free
                                                        para digms. Monotonectally enhance stand-alone data with prospective
                                                        innovation."
                                                    </p>
                                                    <div className="d-flex justify-content-between flex-wrap gap-3">
                                                        <div className="d-flex">
                                                            <img src="../../assets/images/faces/5.jpg" alt="img"
                                                                className="avatar avatar-md avatar-rounded"/>
                                                            <div className="ms-2 my-auto mb-0">
                                                                <h6 className="mb-0 lh-1">Amelia Turner</h6>
                                                                <p className="fs-14 text-muted mb-0">Designer</p>
                                                            </div>
                                                        </div>
                                                        <div className="mb-0 text-warning fs-12 my-auto">
                                                            <i className="ri-star-fill me-1"></i>
                                                            <i className="ri-star-fill me-1"></i>
                                                            <i className="ri-star-fill me-1"></i>
                                                            <i className="ri-star-fill me-1"></i>
                                                            <i className="ri-star-half-line"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card mb-0 border-0 shadow-none overflow-hidden">
                                                <div className="card-body p-4">
                                                    <p>
                                                        "The fact that we were able choose them as experts for our valuable
                                                        product launch and support inspires us with pleasure they lead us at
                                                        every step of the way."
                                                    </p>
                                                    <div className="d-flex justify-content-between flex-wrap gap-3">
                                                        <div className="d-flex">
                                                            <img src="../../assets/images/faces/6.jpg" alt="img"
                                                                className="avatar avatar-md avatar-rounded"/>
                                                            <div className="ms-2 my-auto mb-0">
                                                                <h6 className="mb-0 lh-1">Leo Phillips</h6>
                                                                <p className="fs-14 text-muted mb-0">Client</p>
                                                            </div>
                                                        </div>
                                                        <div className="mb-0 text-warning fs-12 my-auto">
                                                            <i className="ri-star-fill me-1"></i>
                                                            <i className="ri-star-fill me-1"></i>
                                                            <i className="ri-star-fill me-1"></i>
                                                            <i className="ri-star-fill me-1"></i>
                                                            <i className="ri-star-half-line"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                </Swiper>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}

                {/* Start::row-2 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    REVIEWS STYLE 2
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="">
                                <Swiper slidesPerView={1} className="swiper testimonialSwiper1 swiper-initialized swiper-horizontal swiper-backface-hidden" modules={[ Autoplay ]} 
                                autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                >
                                    <div className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="card mb-0 bg-primary-gradient text-fixed-white position-relative">
                                                <i className="bx bxs-quote-alt-left review-quote review-quote1"></i>
                                                <i className="bx bxs-quote-alt-right review-quote review-quote2"></i>
                                                <div className="card-body p-5 text-fixed-white">
                                                    <div className="d-sm-flex align-items-start gap-3">
                                                        <div>
                                                            <img src="../../assets/images/faces/1.jpg" alt="img" className="text-center avatar avatar-xl rounded-circle border-5 border border-white-1 mb-2 mb-sm-0" />
                                                        </div>
                                                        <div className="me-4">
                                                            <h5 className="mb-0 text-fixed-white">Allie Grater</h5>
                                                            <div className="mb-2 text-warning fs-15">
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-half-line"></i>
                                                            </div>
                                                            <p className="mb-0 op-9 fs-16">
                                                                "In today's rapidly evolving business landscape, it is essential to efficiently innovate customized growth strategies that propel organizations toward success. By analyzing market trends, consumer behavior, and competitive landscapes, businesses can identify unique opportunities for growth."
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card mb-0 bg-primary-gradient text-fixed-white position-relative">
                                                <i className="bx bxs-quote-alt-left review-quote review-quote1"></i>
                                                <i className="bx bxs-quote-alt-right review-quote review-quote2"></i>
                                                <div className="card-body p-5 text-fixed-white">
                                                    <div className="d-sm-flex align-items-start gap-3">
                                                        <div>
                                                            <img src="../../assets/images/faces/2.jpg" alt="img" className="text-center avatar avatar-xl rounded-circle border-5 border border-white-1 mb-2 mb-sm-0" />
                                                        </div>
                                                        <div className="me-4">
                                                            <h5 className="mb-0 text-fixed-white">Percy Kewsh</h5>
                                                            <div className="mb-2 text-warning fs-15">
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-half-line"></i>
                                                            </div>
                                                            <p className="mb-0 op-9 fs-16">
                                                                "In today's rapidly evolving business landscape, it is essential to efficiently innovate customized growth strategies that propel organizations toward success. By analyzing market trends, consumer behavior, and competitive landscapes, businesses can identify unique opportunities for growth."
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card mb-0 bg-primary-gradient text-fixed-white position-relative">
                                                <i className="bx bxs-quote-alt-left review-quote review-quote1"></i>
                                                <i className="bx bxs-quote-alt-right review-quote review-quote2"></i>
                                                <div className="card-body p-5 text-fixed-white">
                                                    <div className="d-sm-flex align-items-start gap-3">
                                                        <div>
                                                            <img src="../../assets/images/faces/3.jpg" alt="img" className="text-center avatar avatar-xl rounded-circle border-5 border border-white-1 mb-2 mb-sm-0"/>
                                                        </div>
                                                        <div className="me-4">
                                                            <h5 className="mb-0 text-fixed-white">Laura Norda</h5>
                                                            <div className="mb-2 text-warning fs-15">
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-half-line"></i>
                                                            </div>
                                                            <p className="mb-0 op-9 fs-16">
                                                                "The ability to tailor strategies to meet specific objectives and adapt to changing market dynamics is paramount. Embracing innovation as a core value allows companies to stay ahead of the curve, consistently delivering value to their customers while maintaining a competitive edge."
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card mb-0 bg-primary-gradient text-fixed-white position-relative">
                                                <i className="bx bxs-quote-alt-left review-quote review-quote1"></i>
                                                <i className="bx bxs-quote-alt-right review-quote review-quote2"></i>
                                                <div className="card-body p-5 text-fixed-white">
                                                    <div className="d-sm-flex align-items-start gap-3">
                                                        <div>
                                                            <img src="../../assets/images/faces/4.jpg" alt="img" className="text-center avatar avatar-xl rounded-circle border-5 border border-white-1 mb-2 mb-sm-0"/>
                                                        </div>
                                                        <div className="me-4">
                                                            <h5 className="mb-0 text-fixed-white">Penny Black</h5>
                                                            <div className="mb-2 text-warning fs-15">
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-half-line"></i>
                                                            </div>
                                                            <p className="mb-0 op-9 fs-16">
                                                                "To achieve error-free paradigms, organizations must foster a culture of continuous improvement and quality assurance. By implementing robust processes, conducting thorough testing, and leveraging automation tools, businesses can minimize errors and ensure."
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card mb-0 bg-primary-gradient text-fixed-white position-relative">
                                                <i className="bx bxs-quote-alt-left review-quote review-quote1"></i>
                                                <i className="bx bxs-quote-alt-right review-quote review-quote2"></i>
                                                <div className="card-body p-5 text-fixed-white">
                                                    <div className="d-sm-flex align-items-start gap-3">
                                                        <div>
                                                            <img src="../../assets/images/faces/5.jpg" alt="img" className="text-center avatar avatar-xl rounded-circle border-5 border border-white-1 mb-2 mb-sm-0"/>
                                                        </div>
                                                        <div className="me-4">
                                                            <h5 className="mb-0 text-fixed-white">Colin Silk</h5>
                                                            <div className="mb-2 text-warning fs-15">
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-half-line"></i>
                                                            </div>
                                                            <p className="mb-0 op-9 fs-16">
                                                                "In today's rapidly evolving business landscape, it is essential to efficiently innovate customized growth strategies that propel organizations toward success. By analyzing market trends, consumer behavior, and competitive landscapes, businesses can identify unique opportunities for growth."
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card mb-0 bg-primary-gradient text-fixed-white position-relative">
                                                <i className="bx bxs-quote-alt-left review-quote review-quote1"></i>
                                                <i className="bx bxs-quote-alt-right review-quote review-quote2"></i>
                                                <div className="card-body p-5 text-fixed-white">
                                                    <div className="d-sm-flex align-items-start gap-3">
                                                        <div>
                                                            <img src="../../assets/images/faces/6.jpg" alt="img" className="text-center avatar avatar-xl rounded-circle border-5 border border-white-1 mb-2 mb-sm-0"/>
                                                        </div>
                                                        <div className="me-4">
                                                            <h5 className="mb-0 text-fixed-white">Audie Yose</h5>
                                                            <div className="mb-2 text-warning fs-15">
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-half-line"></i>
                                                            </div>
                                                            <p className="mb-0 op-9 fs-16">
                                                                "The QuantumGlide Smart Hoverboard has exceeded my expectations! Not only does it look futuristic with its sleek design, but the ride is incredibly smooth. The app connectivity is a standout feature - I can customize the LED lights to match my mood and track my rides for fitness. This hoverboard is not just a mode of transportation. "
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                </Swiper>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End::row-2 */}

                {/* Start::row-3 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    REVIEWS STYLE 3
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Swiper breakpoints={breakpoints}   className="swiper testimonialSwiper2" spaceBetween={30} slidesPerView={3}>
                                    <div className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="card shadow-none mb-0 border-0 bg-primary">
                                                <div className="card-body text-center p-4">
                                                    <img src="../../assets/images/faces/1.jpg" alt="img" className="mx-auto text-center avatar avatar-xl rounded-circle mb-4"/>
                                                    <div className="mb-2 text-warning fs-15">
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-half-line"></i>
                                                    </div>
                                                    <p className="text-fixed-white op-8 fs-14">
                                                        This product has made a difference in my daily routine. Simple, effective, and worth every penny
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-start">
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-1 text-fixed-white">Allie Grater</h6>
                                                            <span className="fs-14 fw-normal text-fixed-white op-7">Client</span>
                                                        </div>
                                                        <i className="bx bxs-quote-alt-left review-quote gradient"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card shadow-none mb-0 border-0 bg-primary">
                                                <div className="card-body text-center p-4">
                                                    <img src="../../assets/images/faces/6.jpg" alt="img" className=" mx-auto text-center avatar avatar-xl rounded-circle mb-4"/>
                                                    <div className="mb-2 text-warning fs-15">
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-half-line"></i>
                                                    </div>
                                                    <p className="text-fixed-white op-8 fs-14">
                                                        I love the modern design, and it delivers top-notch performance. A great addition to my setup!
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-start">
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-1 text-fixed-white">Emma Grate</h6>
                                                            <span className="fs-14 fw-normal text-fixed-white op-7">Designer</span>
                                                        </div>
                                                        <i className="bx bxs-quote-alt-left review-quote gradient"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card shadow-none mb-0 border-0 bg-primary">
                                                <div className="card-body text-center p-4">
                                                    <img src="../../assets/images/faces/3.jpg" alt="img" className=" mx-auto text-center avatar avatar-xl rounded-circle mb-4"/>
                                                    <div className="mb-2 text-warning fs-15">
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-half-line"></i>
                                                    </div>
                                                    <p className="text-fixed-white op-8 fs-14">
                                                        Initially skeptical, but this product exceeded my expectations. – highly recommended.
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-start">
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-1 text-fixed-white">John Quil</h6>
                                                            <span className="fs-14 fw-normal text-fixed-white op-7">Client</span>
                                                        </div>
                                                        <i className="bx bxs-quote-alt-left review-quote gradient"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card shadow-none mb-0 border-0 bg-primary">
                                                <div className="card-body text-center p-4">
                                                    <img src="../../assets/images/faces/10.jpg" alt="img" className=" mx-auto text-center avatar avatar-xl rounded-circle mb-4"/>
                                                    <div className="mb-2 text-warning fs-15">
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-half-line"></i>
                                                    </div>
                                                    <p className="text-fixed-white op-8 fs-14">
                                                        Does exactly what it promises. Easy to use, durable, and fantastic. I'm a happy customer!
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-start">
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-1 text-fixed-white">Stanley Kade</h6>
                                                            <span className="fs-14 fw-normal text-fixed-white op-7">Client</span>
                                                        </div>
                                                        <i className="bx bxs-quote-alt-left review-quote gradient"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card shadow-none mb-0 border-0 bg-primary">
                                                <div className="card-body text-center p-4">
                                                    <img src="../../assets/images/faces/5.jpg" alt="img" className=" mx-auto text-center avatar avatar-xl rounded-circle mb-4"/>
                                                    <div className="mb-2 text-warning fs-15">
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-half-line"></i>
                                                    </div>
                                                    <p className="text-fixed-white op-8 fs-14">
                                                        Affordable and high-quality. This product outshines competitors. Thrilled with the value I got!
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-start">
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-1 text-fixed-white">Laura Norda</h6>
                                                            <span className="fs-14 fw-normal text-fixed-white op-7">Designer</span>
                                                        </div>
                                                        <i className="bx bxs-quote-alt-left review-quote gradient"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card shadow-none mb-0 border-0 bg-primary">
                                                <div className="card-body text-center p-4">
                                                    <img src="../../assets/images/faces/6.jpg" alt="img" className=" mx-auto text-center avatar avatar-xl rounded-circle mb-4"/>
                                                    <div className="mb-2 text-warning fs-15">
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-half-line"></i>
                                                    </div>
                                                    <p className="text-fixed-white op-8 fs-14">
                                                        Exceptional product. Quick responses and a genuine commitment to customer satisfaction.
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-start">
                                                        <div className="flex-grow-1">
                                                            <h6 className="mb-1 text-fixed-white">Dhaval Patel</h6>
                                                            <span className="fs-14 fw-normal text-fixed-white op-7">Client</span>
                                                        </div>
                                                        <i className="bx bxs-quote-alt-left review-quote gradient"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                </Swiper>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End::row-3 */}

                {/* Start::row-4 */}
                <Row>
                    <Col xl={12}>
                        <h6 className="mb-3">REVIEWS STYLE 4</h6>
                        <Swiper breakpoints={breakpoints}   modules={[Pagination, Autoplay]} slidesPerView={3} spaceBetween={30} className="swiper testimonialSwiperService1" autoplay={{ delay: 2500, disableOnInteraction: false, }}>
                            <div className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="card custom-card text-fixed-white">
                                        <div className="card-body p-4">
                                            <span className="op-8"><sup><i className="ri-double-quotes-l fs-5 me-1 text-primary"></i></sup>This product simplifies a daily task and has become indispensable for me. I can't imagine going back to the old way   -- <a href="#!" className="fw-semibold fs-11" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-primary" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</a></span>
                                        </div>
                                        <div className="card-footer">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar rounded-circle">
                                                        <img src="../../assets/images/faces/1.jpg" alt="" className="img-fluid rounded-circle"/>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="mb-0 fw-semibold fs-14">Abigail Scott</p>
                                                    <p className="mb-0 fs-11 fw-normal op-8">UX Guru</p>
                                                </div>
                                                <div className="text-end">
                                                    <span className="op-8 d-block">Rating : </span>
                                                    <span className="text-warning d-block ms-1">
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-half-line"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card custom-card text-fixed-white">
                                        <div className="card-body p-4">
                                            <span className="op-8"><sup><i className="ri-double-quotes-l fs-5 me-1 text-primary"></i></sup>The sleek design caught my eye, and the functionality sealed the deal. It's not just eye candy; it performs exceptionally well. -- <a href="#!" className="fw-semibold fs-11" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-primary" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</a></span>
                                        </div>
                                        <div className="card-footer">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar rounded-circle">
                                                        <img src="../../assets/images/faces/13.jpg" alt="" className="img-fluid rounded-circle"/>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="mb-0 fw-semibold fs-14">Leo Phillips</p>
                                                    <p className="mb-0 fs-11 fw-normal op-8">Visual Wizard</p>
                                                </div>
                                                <div className="text-end">
                                                    <span className="op-8 d-block">Rating : </span>
                                                    <span className="text-warning d-block ms-1">
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-half-line"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card custom-card text-fixed-white">
                                        <div className="card-body p-4">
                                            <span className="op-8"><sup><i className="ri-double-quotes-l fs-5 me-1 text-primary"></i></sup>I'm not tech-savvy, but this product is so easy to use. It's like it read my mind. If you want simplicity without sacrificing quality, this is it! -- <a href="#!" className="fw-semibold fs-11" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-primary" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</a></span>
                                        </div>
                                        <div className="card-footer">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar rounded-circle">
                                                        <img src="../../assets/images/faces/3.jpg" alt="" className="img-fluid rounded-circle"/>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="mb-0 fw-semibold fs-14">Amelia Turner</p>
                                                    <p className="mb-0 fs-11 fw-normal op-8">Innovation Ninja</p>
                                                </div>
                                                <div className="text-end">
                                                    <span className="op-8 d-block">Rating : </span>
                                                    <span className="text-warning d-block ms-1">
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-half-line"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card custom-card text-fixed-white">
                                        <div className="card-body p-4">
                                            <span className="op-8"><sup><i className="ri-double-quotes-l fs-5 me-1 text-primary"></i></sup>Small in size, big on impact. This compact product packs a punch. Perfect for those tight on space but not willing to compromise on performance. -- <a href="#!" className="fw-semibold fs-11" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-primary" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</a></span>
                                        </div>
                                        <div className="card-footer">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar rounded-circle">
                                                        <img src="../../assets/images/faces/9.jpg" alt="" className="img-fluid rounded-circle"/>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="mb-0 fw-semibold fs-14">Zachary Carter</p>
                                                    <p className="mb-0 fs-11 fw-normal op-8">Design Maven</p>
                                                </div>
                                                <div className="text-end">
                                                    <span className="op-8 d-block">Rating : </span>
                                                    <span className="text-warning d-block ms-1">
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-half-line"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card custom-card text-fixed-white">
                                        <div className="card-body p-4">
                                            <span className="op-8"><sup><i className="ri-double-quotes-l fs-5 me-1 text-primary"></i></sup>Exceptional product, excellent customer service. Quick responses and a genuine commitment to customer satisfaction. -- <a href="#!" className="fw-semibold fs-11" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-primary" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</a></span>
                                        </div>
                                        <div className="card-footer">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar rounded-circle">
                                                        <img src="../../assets/images/faces/5.jpg" alt="" className="img-fluid rounded-circle"/>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="mb-0 fw-semibold fs-14">Aria Robinson</p>
                                                    <p className="mb-0 fs-11 fw-normal op-8">UI Trailblazer</p>
                                                </div>
                                                <div className="text-end">
                                                    <span className="op-8 d-block">Rating : </span>
                                                    <span className="text-warning d-block ms-1">
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-half-line"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card custom-card text-fixed-white">
                                        <div className="card-body p-4">
                                            <span className="op-8"><sup><i className="ri-double-quotes-l fs-5 me-1 text-primary"></i></sup>Initially skeptical, but this product exceeded my expectations. Innovative and practical – highly recommended. -- <a href="#!" className="fw-semibold fs-11" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-primary" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</a></span>
                                        </div>
                                        <div className="card-footer">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar rounded-circle">
                                                        <img src="../../assets/images/faces/15.jpg" alt="" className="img-fluid rounded-circle"/>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="mb-0 fw-semibold fs-14">Wyatt Thompson</p>
                                                    <p className="mb-0 fs-11 fw-normal op-8">Aesthetics Pro</p>
                                                </div>
                                                <div className="text-end">
                                                    <span className="op-8 d-block">Rating : </span>
                                                    <span className="text-warning d-block ms-1">
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-half-line"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                    </Col>
                </Row>
                {/* End::row-4 */}

                {/* Start::row-5 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card card-bg-primary reviews-container">
                            <Card.Header>
                                <div className="card-title">
                                    REVIEWS STYLE 5
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Swiper  breakpoints={breakpoints}  className="pagination-dynamic testimonialSwiperService" spaceBetween={30}  slidesPerView={3}  pagination={{ dynamicBullets: true, clickable: true, }}  modules={[Pagination, Autoplay]}  autoplay={{ delay: 2500, disableOnInteraction: false, }}>
                                        <SwiperSlide>
                                            <Card className="custom-card text-fixed-white border-0">
                                                <Card.Body>
                                                    <div className="d-flex align-items-center mb-3">
                                                        <span className="avatar rounded-circle me-2">
                                                            <img src="../../assets/images/faces/3.jpg" alt="" className="img-fluid rounded-circle"/>
                                                        </span>
                                                        <div>
                                                            <p className="mb-0 fw-semibold fs-14">Brenda Hans</p>
                                                            <p className="mb-0 fs-11 fw-normal op-8">brendahans@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <span className="op-8">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  -- <a href="#!" className="fw-semibold fs-11 text-fixed-white" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</a></span>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <div className="d-flex align-items-center">
                                                            <span className="op-8">Rating : </span>
                                                            <span className="text-warning d-block ms-1">
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-half-line"></i>
                                                            </span>
                                                        </div>
                                                        <div className="float-end fs-12 fw-semibold op-8 text-end">
                                                            <span>12 days ago</span>
                                                            <span className="d-block fs-12 text-success"><i>Brenda Hans</i></span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Card className="custom-card text-fixed-white border-0">
                                                <Card.Body>
                                                    <div className="d-flex align-items-center mb-3">
                                                        <span className="avatar rounded-circle me-2">
                                                            <img src="../../assets/images/faces/9.jpg" alt="" className="img-fluid rounded-circle"/>
                                                        </span>
                                                        <div>
                                                            <p className="mb-0 fw-semibold fs-14">Jack Miller</p>
                                                            <p className="mb-0 fs-11 fw-normal op-8">jackmiller@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <span className="op-8">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  -- <a href="#!" className="fw-semibold fs-11 text-fixed-white" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</a></span>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <div className="d-flex align-items-center">
                                                            <span className="op-8">Rating : </span>
                                                            <span className="text-warning d-block ms-1">
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-half-fill"></i>
                                                            </span>
                                                        </div>
                                                        <div className="float-end fs-12 fw-semibold op-8 text-end">
                                                            <span>9 days ago</span>
                                                            <span className="d-block fs-12 text-success"><i>Jack Miller</i></span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Card className="custom-card text-fixed-white border-0">
                                                <Card.Body>
                                                    <div className="d-flex align-items-center mb-3">
                                                        <span className="avatar rounded-circle me-2">
                                                            <img src="../../assets/images/faces/8.jpg" alt="" className="img-fluid rounded-circle"/>
                                                        </span>
                                                        <div>
                                                            <p className="mb-0 fw-semibold fs-14">Amanda Nanes</p>
                                                            <p className="mb-0 fs-11 fw-normal op-8">amandananes212@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <span className="op-8">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  -- <a href="#!" className="fw-semibold fs-11 text-fixed-white" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</a></span>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <div className="d-flex align-items-center">
                                                            <span className="op-8">Rating : </span>
                                                            <span className="text-warning d-block ms-1">
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-half-line"></i>
                                                            </span>
                                                        </div>
                                                        <div className="float-end fs-12 fw-semibold op-8 text-end">
                                                            <span>6 days ago</span>
                                                            <span className="d-block fs-12 text-success"><i>Amanda Nanes</i></span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Card className="custom-card text-fixed-white border-0">
                                                <Card.Body>
                                                    <div className="d-flex align-items-center mb-3">
                                                        <span className="avatar rounded-circle me-2">
                                                            <img src="../../assets/images/faces/10.jpg" alt="" className="img-fluid rounded-circle"/>
                                                        </span>
                                                        <div>
                                                            <p className="mb-0 fw-semibold fs-14">Lucas Tope</p>
                                                            <p className="mb-0 fs-11 fw-normal op-8">lucastope1999@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <span className="op-8">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  -- <a href="#!" className="fw-semibold fs-11 text-fixed-white" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</a></span>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <div className="d-flex align-items-center">
                                                            <span className="op-8">Rating : </span>
                                                            <span className="text-warning d-block ms-1">
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-half-line"></i>
                                                            </span>
                                                        </div>
                                                        <div className="float-end fs-12 fw-semibold op-8 text-end">
                                                            <span>10 days ago</span>
                                                            <span className="d-block fs-12 text-success"><i>Lucas Tope</i></span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Card className="custom-card text-fixed-white border-0">
                                                <Card.Body>
                                                    <div className="d-flex align-items-center mb-3">
                                                        <span className="avatar rounded-circle me-2">
                                                            <img src="../../assets/images/faces/1.jpg" alt="" className="img-fluid rounded-circle"/>
                                                        </span>
                                                        <div>
                                                            <p className="mb-0 fw-semibold fs-14">Jenny kingston</p>
                                                            <p className="mb-0 fs-11 fw-normal op-8">jennykingston345@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <span className="op-8">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  -- <a href="#!" className="fw-semibold fs-11 text-fixed-white" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</a></span>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <div className="d-flex align-items-center">
                                                            <span className="op-8">Rating : </span>
                                                            <span className="text-warning d-block ms-1">
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-half-line"></i>
                                                            </span>
                                                        </div>
                                                        <div className="float-end fs-12 fw-semibold op-8 text-end">
                                                            <span>16 days ago</span>
                                                            <span className="d-block fs-12 text-success"><i>Jenny Kingston</i></span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Card className="custom-card text-fixed-white border-0">
                                                <Card.Body>
                                                    <div className="d-flex align-items-center mb-3">
                                                        <span className="avatar rounded-circle me-2">
                                                            <img src="../../assets/images/faces/5.jpg" alt="" className="img-fluid rounded-circle"/>
                                                        </span>
                                                        <div>
                                                            <p className="mb-0 fw-semibold fs-14">Alex Carey</p>
                                                            <p className="mb-0 fs-11 fw-normal op-8">alexcarey21@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <span className="op-8">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  -- <a href="#!" className="fw-semibold fs-11 text-fixed-white" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</a></span>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <div className="d-flex align-items-center">
                                                            <span className="op-8">Rating : </span>
                                                            <span className="text-warning d-block ms-1">
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-fill me-1"></i>
                                                                <i className="ri-star-half-line"></i>
                                                            </span>
                                                        </div>
                                                        <div className="float-end fs-12 fw-semibold op-8 text-end">
                                                            <span>1 month ago</span>
                                                            <span className="d-block fs-12 text-success"><i>Alex Carey</i></span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </SwiperSlide>
                                    <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
                                </Swiper>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End::row-5 */}
</Fragment>
);
};

export default Reviews;