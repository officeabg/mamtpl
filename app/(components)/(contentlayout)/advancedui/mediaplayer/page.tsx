"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import ReactAudioPlayer from 'react-audio-player';
const Mediaplayer = () => {
return (
    <Fragment>
                {/* Page Header */}
                    <Seo title={"Media Player"} />
                    <Pageheader Heading="Media Player" Pages={[{title:"Advanced Ui", active:true},{title:"Media Player", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    VIDEO PLAYER
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <video id="player" 
                                // playsinline 
                                controls 
                                data-poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
                                >
                                    <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" type="video/mp4" />
                                    <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4" type="video/mp4" />
                                    <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4" type="video/mp4" />
                                </video>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={12}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header>
                                <Card.Title>YOUTUBE VIDEO</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="plyr__video-embed" id="player1">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/-lDlbQ7DiCI?si=EerYCepJFDTb5xOl" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    AUDIO PLAYER
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <ReactAudioPlayer id="player2"
                                    className="w-100"
                                    src="../../assets/audio/perfect-beauty.mp3"
                                    autoPlay
                                    controls
                                    />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    );
};

export default Mediaplayer;