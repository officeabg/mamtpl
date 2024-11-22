"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment, useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { TourProvider, useTour } from '@reactour/tour'
import { newSteps } from "@/shared/data/advancedui/tourdata";
const Tour = () => {

function TourInstance() {
    const { setIsOpen } = useTour();

    useEffect(() => {
        setIsOpen(true); // Start the tour automatically when the component mounts
    }, [setIsOpen]);
    
    return null; // Render nothing
    }
      
    
return (
<Fragment>
                {/* Page Header */}
                    <Seo title={"Tour"} />
                    <Pageheader Heading="Tour" Pages={[{title:"Advanced Ui", active:true},{title:"Tour", active:false}]} />
                {/* Page Header Close */}
                    <TourProvider className="react-tour"
                        steps={newSteps} 
                        nextButton={({
                            currentStep,
                            stepsLength,
                            setIsOpen,
                            setCurrentStep,
                        }) => {
                            const last = currentStep === stepsLength - 1
                            return (
                                 <Button variant="success" className="btn"
                                onClick={() => {
                                    if (last) {
                                        setIsOpen(false)
                                    } else {
                                        setCurrentStep((s) => (s === newSteps?.length - 1 ? 0 : s + 1))
                                    }
                                }}
                                >
                                {last ? 'Finish' : "Next"}
                                </Button>
                            )
                        }}
                        >
                        <TourInstance />
                    </TourProvider>
                {/* Start:: row-1 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    REACT TOUR
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="p-5 text-center">
                                <Row className="justify-content-center">
                                    <div className="col-xl-7 mb-5">
                                        <span className="avatar avatar-xl">
                                            <img src="../../assets/images/company-logos/7.png" alt="" id="step-1"/>
                                        </span>
                                        <h5 className="fw-medium">Welcome to Tour App</h5>
                                        <span className="text-muted">Embark on a journey of discovery with our exclusive tour experiences. Whether you're a solo adventurer, a couple seeking romance, or a group of friends ready for excitement, we've curated the perfect tours for you. Create memories that last a lifetime.</span>
                                    </div>
                                </Row>
                                <Row className="justify-content-center gap-4">
                                    <Col xl={3}>
                                        <Card className="custom-card shadow-none bg-primary-transparent">
                                            <Card.Body className="p-5 text-center">
                                                <div className="mb-3">
                                                    <span className="avatar avatar-xl avatar-rounded bg-primary-transparent text-primary svg-primary" id="step-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M188.92,40a59.29,59.29,0,0,0-43.08,18.75A65.47,65.47,0,0,0,128,104L232,58.75A59.28,59.28,0,0,0,188.92,40Z" opacity="0.2"/><path d="M176.56,98.18A64.2,64.2,0,0,0,128,104.52L221.81,176a63,63,0,0,0-6.39-48.22A63.73,63.73,0,0,0,176.56,98.18Z" opacity="0.2"/><path d="M110.16,58.75a58.87,58.87,0,0,0-86.16,0L128,104A65.47,65.47,0,0,0,110.16,58.75Z" opacity="0.2"/><path d="M79.44,98.18a63.73,63.73,0,0,0-38.86,29.6A63,63,0,0,0,34.19,176L128,104.52A64.2,64.2,0,0,0,79.44,98.18Z" opacity="0.2"/><path d="M128,104a65.47,65.47,0,0,1,17.84-45.25,58.87,58.87,0,0,1,86.16,0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M128,104.52a64.26,64.26,0,0,1,87.42,23.26A63,63,0,0,1,221.81,176Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M128,104a65.47,65.47,0,0,0-17.84-45.25,58.87,58.87,0,0,0-86.16,0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M128,104.52a64.26,64.26,0,0,0-87.42,23.26A63,63,0,0,0,34.19,176Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="104.52" x2="128" y2="224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                    </span>
                                                </div>
                                                <h6 className="fw-meidum mb-2">Choose a Destination</h6>
                                                <span className="fs-14 text-muted">Explore destinations, reviews, and user favorites for your next adventure.</span>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={3}>
                                        <div className="card custom-card shadow-none bg-secondary-transparent">
                                            <div className="card-body p-5">
                                                <div className="mb-3">
                                                    <span className="avatar avatar-xl avatar-rounded bg-secondary-transparent text-secondary svg-secondary" id="step-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M48,208H16a8,8,0,0,1-8-8V160a8,8,0,0,1,8-8H48Z" opacity="0.2"/><path d="M204,56a28,28,0,0,0-12,2.71h0A28,28,0,1,0,176,85.29h0A28,28,0,1,0,204,56Z" opacity="0.2"/><circle cx="204" cy="84" r="28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M48,208H16a8,8,0,0,1-8-8V160a8,8,0,0,1,8-8H48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M112,160h32l67-15.41a16.61,16.61,0,0,1,21,16h0a16.59,16.59,0,0,1-9.18,14.85L184,192l-64,16H48V152l25-25a24,24,0,0,1,17-7H140a20,20,0,0,1,20,20h0a20,20,0,0,1-20,20Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M176,85.29A28,28,0,1,1,192,58.71" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                    </span>
                                                </div>
                                                <h6 className="fw-meidum mb-2">Set a Budget</h6>
                                                <span className="fs-14 text-muted">Estimate expenses, find exclusive deals, and plan within your budget.</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={3}>
                                        <div className="card custom-card shadow-none bg-success-transparent">
                                            <div className="card-body p-5">
                                                <div className="mb-3">
                                                    <span className="avatar avatar-xl avatar-rounded bg-success-transparent text-success svg-success" id="step-4">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M88,224l24-24V176l24-24,48,72,24-24-32-88,33-31A24,24,0,0,0,175,47L144,80,56,48,32,72l72,48L80,144H56L32,168l40,16Z" opacity="0.2"/><path d="M88,224l24-24V176l24-24,48,72,24-24-32-88,33-31A24,24,0,0,0,175,47L144,80,56,48,32,72l72,48L80,144H56L32,168l40,16Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                    </span>
                                                </div>
                                                <h6 className="fw-meidum mb-2">Book Transportation</h6>
                                                <span className="fs-14 text-muted">Secure travel and stay with diverse options and special discounts.</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={3}>
                                        <div className="card custom-card shadow-none bg-orange-transparent">
                                            <div className="card-body p-5">
                                                <div className="mb-3">
                                                    <span className="avatar avatar-xl avatar-rounded bg-orange-transparent text-orange svg-orange" id="step-5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M60.06,195.91a96,96,0,0,1-.12-135.65h0a95.7,95.7,0,0,1,28,67.76,95.74,95.74,0,0,1-28,67.77Z" opacity="0.2"/><path d="M196.06,195.91a96,96,0,0,1-.12-135.65h0a96,96,0,0,1,0,135.53Z" opacity="0.2"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M60,60.24A95.7,95.7,0,0,1,88,128a95.7,95.7,0,0,1-28,67.76" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M196,60.24a96,96,0,0,0,0,135.52" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="32" y1="128" x2="224" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="32" x2="128" y2="224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                    </span>
                                                </div>
                                                <h6 className="fw-meidum mb-2">Plan Activities</h6>
                                                <span className="fs-14 text-muted">Discover attractions, create itineraries, and explore local highlights.</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={3}>
                                        <div className="card custom-card shadow-none bg-info-transparent">
                                            <div className="card-body p-5">
                                                <div className="mb-3">
                                                    <span className="avatar avatar-xl avatar-rounded bg-info-transparent text-info svg-info" id="step-6">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M60.06,195.91a96,96,0,0,1-.12-135.65h0a95.7,95.7,0,0,1,28,67.76,95.74,95.74,0,0,1-28,67.77Z" opacity="0.2"/><path d="M196.06,195.91a96,96,0,0,1-.12-135.65h0a96,96,0,0,1,0,135.53Z" opacity="0.2"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M60,60.24A95.7,95.7,0,0,1,88,128a95.7,95.7,0,0,1-28,67.76" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M196,60.24a96,96,0,0,0,0,135.52" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="32" y1="128" x2="224" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="32" x2="128" y2="224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                                    </span>
                                                </div>
                                                <h6 className="fw-meidum mb-2">Confirm Bookings</h6>
                                                <span className="fs-14 text-muted">Stay connected, receive real-time updates, and confirm bookings.</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-sm-flex justify-content-end">
                                    <button className="btn btn-primary-light m-1">Cancel Journey</button>
                                    <button className="btn btn-success-light m-1" id="step-7">Start Your Journey</button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-1 */}
</Fragment>
);
};

export default Tour;