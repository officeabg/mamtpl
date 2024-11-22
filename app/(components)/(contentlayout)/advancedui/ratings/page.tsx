"use client"
import React, { Fragment, useState } from "react";
import { Button, Card, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import StarsIcon from "@mui/icons-material/Stars";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Ratings = () => {
    const [ratingValue, setRatingValue] = useState<number | null>(null);
    const handleRatingChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
        setRatingValue(newValue); // Update the rating value when the user clicks
    };

    const handleResetRating = () => {
        setRatingValue(null); // Clear the rating when the button is clicked
    };

    const [value, setValue] = useState<number | null>(2); // Default value is 2 stars
    const [hover, setHover] = useState<number>(-1);
    
    const labels = ["1", "2", "3", "4", "5"];

    const getLabelText = (value: number) => {
        return `${value} Star`;
    };
return (
<Fragment>
                {/* Page Header */}
                    <Seo title={"Ratings"} />
                    <Pageheader Heading="Ratings" Pages={[{title:"Advanced Ui", active:true},{title:"Ratings", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xxl={12} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                               <Card.Title>
                                    Basic Rater
                               </Card.Title> 
                            </Card.Header>
                            <Card.Body>
                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                    <p className="fs-14 mb-0 fw-medium">Show Some <span className="text-danger">&#10084;</span> with rating :</p>
                                    <Box sx={{ "& > legend": { mt: 2 } }} >
									    <Rating name="no-value" size="large"  max={5} />
								     </Box>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={12} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    5 star rater with steps
                                </Card.Title> 
                             </Card.Header>
                            <Card.Body>
                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                    <p className="fs-14 mb-0 fw-medium">Dont forget to rate the product :</p>
                                    <Box sx={{ "& > legend": { mt: 2 } }} >
									    <Rating name="no-value" size="large"  max={5} />
								    </Box>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={12} xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Custom messages
                                </Card.Title> 
                             </Card.Header>
                            <Card.Body>
                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                    <p className="fs-14 mb-0 fw-medium">Your rating is much appreciated&#128079; :</p>
                                    <Box sx={{ "& > legend": { mt: 2 } }} >
									    <Rating name="no-value" size="large" value={4} max={5} />
								    </Box>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={12} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Unlimited number of stars readOnly
                                </Card.Title> 
                             </Card.Header>
                            <Card.Body>
                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                    <p className="fs-14 mb-0 fw-medium">Thanks for rating :</p>
                                    <Stack spacing={1} className="rating-stars block my-rating-7">
                                        <Rating id="stars-unlimited" name="half-rating-read" value={6} max={10} size="large" readOnly />
                                    </Stack>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={12} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    5 Star rater with custom isBusyText and simulated backend
                                </Card.Title> 
                             </Card.Header>
                            <Card.Body>
                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                    <p className="fs-14 mb-0 fw-medium">Thanks for rating :</p>
                                    <Box sx={{ "& > legend": { mt: 2 } }} >
									    <Rating name="no-value" size="large"  max={5} />
								   </Box>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={12} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    On hover event
                                </Card.Title> 
                             </Card.Header>
                            <Card.Body className="hoverable_rating">
                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                    <p className="fs-14 mb-0 fw-medium">Please give your valuable rating :</p>
                                    <div className="d-flex flex-wrap align-items-center">
                                    <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
                                        <Rating
                                            name="hover-feedback"
                                            value={value}
                                            precision={1}
                                            getLabelText={getLabelText}
                                            onChange={(_event, newValue) => {
                                                setValue(newValue);
                                            }}
                                            onChangeActive={(_event, newHover) => {
                                                setHover(newHover);
                                            }}
                                            emptyIcon={<StarsIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        {value !== null && (
                                            <Box className="rating-stars my-rating-9 rating-9" sx={{ ml: 2 }}>
                                                <span className="live-rating badge bg-success-transparent ms-3">
                                                    {hover !== -1 ? labels[hover] : labels[value - 1]}
                                                </span>
                                            </Box>
                                        )}
                                    </Box>

                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={12} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Clear/reset rater
                                </Card.Title> 
                             </Card.Header>
                            <Card.Body>
                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                    <p className="fs-14 mb-0 fw-medium">Thank You so much for your support :</p>
                                    <div className="d-flex flex-wrap align-items-center">
                                            <Rating
                                                name="clickable-rating"
                                                value={ratingValue}
                                                onChange={handleRatingChange} // Handle rating change when the user clicks
                                            />
                                             <OverlayTrigger placement="top" overlay={<Tooltip>Reset</Tooltip>}>
                                             <Button
                                                variant='danger-light'
                                                className="btn btn-icon btn-sm ms-3"
                                                id="rater-reset-button"
                                                data-bs-placement="top"
                                                data-bs-title="Reset"
                                                onClick={handleResetRating}
                                            >
                                                <i className="ri-restart-line"></i>
                                            </Button>
                                            </OverlayTrigger>
                                            
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
</Fragment>
);
};

export default Ratings;