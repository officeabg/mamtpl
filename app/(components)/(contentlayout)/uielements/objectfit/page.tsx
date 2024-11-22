"use client"
import { object1, object10, object11, object12, object13, object14, object15, object2, object3, object4, object5, object6, object7, object8, object9 } from "@/shared/data/prism/uielementsprism";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import ShowCode from "@/shared/layout-components/showcode/showcode";
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

const Objectfit = () => {
return (
    <Fragment>
                {/* Page Header */}
                    <Seo title={"Object Fit"} />
                    <Pageheader Heading="Object Fit" Pages={[{title:"Ui Elements", active:true},{title:"Object Fit", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                        <ShowCode title="Object Fit Contain"  customCardBodyClass="object-fit-container" code={object1}>
                            <img src="../../assets/images/media/media-28.jpg" className="object-fit-contain border rounded" alt="..." />
                        </ShowCode>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                        <ShowCode title="Object Fit Cover"  customCardBodyClass="object-fit-container" code={object2}>
                                <img src="../../assets/images/media/media-28.jpg" className="object-fit-cover border rounded" alt="..."/>
						</ShowCode>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                        <ShowCode title="Object Fit Fill"  customCardBodyClass="object-fit-container" code={object3}>
                                <img src="../../assets/images/media/media-28.jpg" className="object-fit-fill border rounded" alt="..."/>
                        </ShowCode>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                        <ShowCode title="Object Fit Scale Down"  customCardBodyClass="object-fit-container" code={object4}>
                                <img src="../../assets/images/media/media-28.jpg" className="object-fit-scale border rounded" alt="..."/>
                        </ShowCode>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                            <ShowCode title="Object Fit None"  customCardBodyClass="object-fit-container" code={object5}>
                                    <img src="../../assets/images/media/media-28.jpg" className="object-fit-none border rounded" alt="..."/>
							</ShowCode>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                            <ShowCode title="Object Fit Contain (SM - responsive)"  customCardBodyClass="object-fit-container" code={object6}>
                                 <img src="../../assets/images/media/media-28.jpg" className="object-fit-sm-contain border rounded" alt="..."/>
                            </ShowCode>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                        <ShowCode title="Object Fit Contain (MD - responsive)"  customCardBodyClass="object-fit-container" code={object7}>
                                <img src="../../assets/images/media/media-28.jpg" className="object-fit-md-contain border rounded" alt="..."/>
						</ShowCode>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                            <ShowCode title="Object Fit Contain (LG - responsive)"  customCardBodyClass="object-fit-container" code={object8}>
                                    <img src="../../assets/images/media/media-28.jpg" className="object-fit-lg-contain border rounded" alt="..."/>
							</ShowCode>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                        <ShowCode title="Object Fit Contain (XL - responsive)"  customCardBodyClass="object-fit-container" code={object9}>
                                <img src="../../assets/images/media/media-28.jpg" className="object-fit-xl-contain border rounded" alt="..."/>
						</ShowCode>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                            <ShowCode title="Object Fit Contain (XXL - responsive)"  customCardBodyClass="object-fit-container" code={object10}>
                                    <img src="../../assets/images/media/media-28.jpg" className="object-fit-xxl-contain border rounded" alt="..."/>
							</ShowCode>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                            <ShowCode title="Object Fit Contain Video"  customCardBodyClass="object-fit-container" code={object11}>
                                    <video src="../../assets/video/1.mp4" className="object-fit-contain rounded border" autoPlay loop muted></video>
							</ShowCode>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                            <ShowCode title="Object Fit Cover Video"  customCardBodyClass="object-fit-container" code={object12}>
                                    <video src="../../assets/video/1.mp4" className="object-fit-none rounded border" autoPlay loop muted></video>
							</ShowCode>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                            <ShowCode title="Object Fit Fill Video"  customCardBodyClass="object-fit-container" code={object13}>
                                    <video src="../../assets/video/1.mp4" className="object-fit-none rounded border" autoPlay loop muted></video>
							</ShowCode>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                            <ShowCode title="Object Fit Scale Video"  customCardBodyClass="object-fit-container" code={object14}>
                                    <video src="../../assets/video/1.mp4" className="object-fit-contain rounded border" autoPlay loop muted></video>
							</ShowCode>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                            <ShowCode title="Object Fit None Video"  customCardBodyClass="object-fit-container" code={object15}>
                                    <video src="../../assets/video/1.mp4" className="object-fit-none rounded border" autoPlay loop muted></video>
							</ShowCode>
                    </Col>
                </Row>
                {/* End::row-1 */}
    </Fragment>
    );
};

export default Objectfit;