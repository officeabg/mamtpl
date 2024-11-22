"use client"
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, Col, Collapse, Modal, Row } from 'react-bootstrap';
import Dragula from "react-dragula";


const Draguladata = () => {
    const leftContainerRef = useRef<HTMLDivElement | null>(null);
	const rightContainerRef = useRef<HTMLDivElement | null>(null);
	const windowElement :any = typeof window !== "undefined" ? window : null;

	useEffect(() => {
		if (leftContainerRef.current && rightContainerRef.current && windowElement) {
			Dragula([leftContainerRef.current, rightContainerRef.current]);
		}
	}, []);

	// Card With Collapse Button
	const [BasicExpanded, setBasicExpanded] = useState(true);

	const BasicHandleExpandClick = () => {
		setBasicExpanded(!BasicExpanded);
	};
	//Card With Close Button
	const [Basicshow, setBasicshow] = useState(true);

	//fullscreen
	const [fullScreen, setFullscreen] = useState("true");
	const [fullscreenshow, setfullscreenShow] = useState(false);

	const fullscreenmodalClose = () => setfullscreenShow(false);

	function handleShow(breakpoint:any) {
		setFullscreen(breakpoint);
		setfullscreenShow(true);
	}
  return (
    <>
  {/* Start::row-1 */}
  <Row>
                    <Col xl={6} id="draggable-left"  ref={leftContainerRef}>
                        <Card className="custom-card card-bg-primary">
                            <Link scroll={false} href="#!" className="card-anchor"></Link>
                            <Card.Body>
                              <blockquote className="blockquote mb-0 text-center">
                                <h6 className="text-fixed-white">The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart..</h6>
                                <footer className="blockquote-footer mt-3 fs-14 text-fixed-white op-7">Someone famous as <cite title="Source Title">-Helen Keller</cite></footer>
                              </blockquote>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    Card With Fullscreen Button
                                </Card.Title>
                                <Link scroll={false} href="#!" data-bs-toggle="card-fullscreen"  onClick={() => handleShow(true)}>
                                    <i className="ri-fullscreen-line"></i>
                                </Link>
                                <Modal show={fullscreenshow} fullscreen={fullScreen} onHide={() => setfullscreenShow(false)}>
								<Modal.Header>
									<Modal.Title>Fullscreen Button</Modal.Title>
									<span className="d-flex ms-auto" onClick={fullscreenmodalClose}><i className='fe fe-x ms-auto' ></i></span>
								</Modal.Header>
								<Modal.Body>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Modal.Body>
								<Modal.Footer>
									<Button variant="secondary" onClick={fullscreenmodalClose}>
										Close
									</Button>
									<Button variant="primary">
										Save Changes
									</Button>
								</Modal.Footer>
							</Modal>
                            </Card.Header>
                            <Card.Body>
                                <h6 className="card-text fw-medium">FullScreen Card</h6>
                                <p className="card-text mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                            </Card.Body>
                            <Card.Footer>
                                <button className="btn btn-primary">Read More</button>
                            </Card.Footer>
                        </Card>
                        <Card className="custom-card">
                                <Card.Header className="border-bottom-0 justify-content-between">
                                    <Card.Title>
                                        Card With Collapse Button
                                    </Card.Title>
                                    <Link scroll={false} href="#!" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={BasicHandleExpandClick}>
                                    <i className={`fe ${BasicExpanded ? "fe-chevron-down" : "fe-chevron-up"}`}></i>
                                </Link>
                            </Card.Header>
                            <Collapse className="border-top" in={BasicExpanded} timeout={3000}>
                                <div>
                                    <Card.Body>
                                        <h6 className="card-text fw-semibold">Collapsible Card</h6>
                                        <p className="card-text mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Button variant='' className="btn btn-primary">Read More</Button>
                                    </Card.Footer>
                                </div>
                            </Collapse>
                        </Card>
                        {Basicshow ?
						<Card className="custom-card">
							<Card.Header className="justify-content-between">
								<Card.Title>
									Card With Close Button
								</Card.Title>
								<Link scroll={false} href="#!" data-bs-toggle="card-remove" onClick={() => setBasicshow(false)}>
									<i className="ri-close-line fs-18"></i>
								</Link>
							</Card.Header>
							<Card.Body>
								<h6 className="card-text fw-semibold">Closed Card</h6>
								<p className="card-text mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
							</Card.Body>
							<Card.Footer>
								<Button variant="primary" className="btn btn-primary">Read More</Button>
							</Card.Footer>
						</Card>
						: null}
                        <Card className="custom-card border border-info">
                            <Link scroll={false} href="#!" className="card-anchor"></Link>
                            <Card.Body>
                                <div className="d-flex align-items-center">
                                    <div className="me-3">
                                        <span className="avatar avatar-xl">
                                            <img src="../../assets/images/faces/8.jpg" alt="img" />
                                        </span>
                                    </div>
                                    <div>
                                        <p className="card-text text-info mb-1 fs-14 fw-medium">Alicia Keys.</p>
                                        <div className="card-title fs-12 mb-1">Department Of Commerce</div>
                                        <div className="card-title text-muted fs-11 mb-0">24 Years, Female</div>
                                    </div>    
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                            <Link scroll={false} href="#!" className="card-anchor"></Link>
                            <Card.Body>
                                <div className="d-flex align-items-center">
                                    <div className="me-3">
                                        <span className="avatar avatar-md">
                                            <img src="../../assets/images/faces/15.jpg" alt="img" />
                                        </span>
                                    </div>
                                    <div>
                                        <p className="card-text mb-0 fs-14 fw-medium">Atharva Simon.</p>
                                        <div className="card-title text-muted fs-12 mb-0">Correspondent Professor</div>
                                    </div>    
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6} id="draggable-right" ref={rightContainerRef}>
                        <Card className="custom-card overlay-card">
                            <img src="../../assets/images/media/media-36.jpg" className="card-img" alt="..." />
                            <div className="card-img-overlay d-flex flex-column p-0 over-content-bottom top-0">
                                <div className="card-body overflow-auto text-fixed-white">
                                    <div className="card-text">
                                        Image Overlays Are Awesome!
                                    </div>
                                    <div className="card-text mb-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</div>
                                </div>
                                <div className="card-footer text-fixed-white">Last updated 3 mins ago</div>
                            </div>
                        </Card>
                        <Card className="custom-card card-bg-success">
                            <Card.Body>
                                <div className="d-flex align-items-center w-100">
                                    <div className="me-2">
                                        <span className="avatar avatar-rounded">
                                            <img src="../../assets/images/faces/5.jpg" alt="img" />
                                        </span>
                                    </div>
                                    <div className="">
                                        <div className="fs-15 fw-medium">Samantha sid</div>
                                        <p className="mb-0 text-fixed-white op-7 fs-12">In leave for 1 month</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card overlay-card text-fixed-white">
                            <img src="../../assets/images/media/media-35.jpg" className="card-img" alt="..." />
                            <div className="card-img-overlay d-flex flex-column p-0">
                                <Card.Header className="card-header text-fixed-white">
                                    <div className='card-title'>
                                        Image Overlays Are Awesome!
                                    </div>
                                </Card.Header>
                                <Card.Body className="overflow-auto text-fixed-white">
                                    <div className="card-text mb-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</div>
                                    <div className="card-text">Last updated 3 mins ago</div>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </>
  )
}

export default Draguladata