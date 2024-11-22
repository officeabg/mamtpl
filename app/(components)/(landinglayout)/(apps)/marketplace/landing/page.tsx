"use client"
import Link from "next/link";
import React, { Fragment } from "react";
import { Accordion, Card, Col, Nav, OverlayTrigger, Row, Tab, Tooltip } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, } from "swiper/modules"; 
import Seo from "@/shared/layout-components/seo/seo";
const Landing = () => {
return ( 
    <Fragment>
        <Seo title={"Marketplace-Landing"} />
            {/* Start:: Landing Banner */}
            <div className="landing-banner">
                <section className="section marketplace-banner">
                    <div className="container main-banner-container">
                        <div className="row justify-content-center">
                            <div className="col-xl-7">
                                <div className="text-fixed-white">
                                    <div className="text-center">
                                        <p className="landing-banner-heading mb-3 text-fixed-white">Best Digital Marketplace</p>
                                        <p className="fs-15 mb-5">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    </div>
                                    <div className="mb-3 custom-form-group">
                                        <input type="text" className="form-control form-control-lg shadow-sm border-0 lh-lg" placeholder="Search Here.." 
                                            aria-label="Recipient's username"/>
                                        <div className="custom-form-btn">                                            
                                            <button className="btn btn-primary border-0" type="button"><i className="bi bi-search me-2"></i> Search</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
            </div>
            {/* End:: Landing Banner */}

            {/* Start:: Section-1 */}
            <section className="section">
                <div className="container">
                    <Row>
                        <div className="d-flex justify-content-between align-items-baseline mb-4 flex-wrap gap-2">
                            <div className="heading-section text-start">
                                <div className="heading-title">Top Categories</div>
                                <div className="heading-description">Browse Through The Top Categories</div>
                            </div>
                            <div className="min-w-fit-content">
                                <Link scroll={false} href="/marketplace/search/" className="btn btn-wave btn-primary">
                                    View All Categories <i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <Col sm={6} md={6} lg={3} xxl={2} className="">
                            <div className="link-tag link-tag-primary rounded-pill">
                                <Link scroll={false} href="/marketplace/search/" className="stretched-link"></Link>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="min-w-fit-content">
                                        <span className="avatar avatar-md rounded-circle link-tag-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="vuejs-alt"><path fill="var(--primary03)" opacity="0.3" d="M12.018 19.151 4.315 6h2.823l4.886 8.407L16.871 6h2.809z"></path><path fill="var(--primary-color)" d="m14.38 4.001-2.374 3.956-2.384-3.956H.825L12.02 23.115 23.161 4H14.38zm-2.362 15.15L4.315 6h2.823l4.886 8.407L16.871 6h2.809l-7.662 13.151z"></path></svg>
                                        </span>
                                    </div>
                                    <div className="flex-grow-1 link-tag-body">
                                        <p className="mb-0 text-truncate w-75">Vuejs Script</p>
                                        <span className="fs-11 fw-normal">93 items</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={3} xxl={2} className="">
                            <div className="link-tag link-tag-secondary rounded-pill">
                                <Link scroll={false} href="/marketplace/search/" className="stretched-link"></Link>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="min-w-fit-content">
                                        <span className="avatar avatar-md rounded-circle link-tag-icon"> 
                                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="html5"><path fill="rgb(var(--secondary-rgb))" d="M3.18249,2,4.78741,20.00071,11.98921,22l7.22171-2.00206L20.81751,2ZM17.32508,7.88728H8.87682L9.07861,10.148h8.04556l-.6059,6.778L12,18.17825v.0004l-.01015.00276L7.46747,16.92607l-.30926-3.46645h2.2162l.15718,1.76075,2.45873.66389.002-.00053v-.00015l2.46231-.6646.25632-2.86324H7.05953L6.46408,5.67957H17.52272Z"></path><path fill="rgba(var(--pink-rgb), 0.2)"  opacity="0.2" d="M17.32508,7.88728H8.87682L9.07861,10.148h8.04556l-.6059,6.778L12,18.17825v.0004l-.01015.00276L7.46747,16.92607l-.30926-3.46645h2.2162l.15718,1.76075,2.45873.66389.002-.00053v-.00015l2.46231-.6646.25632-2.86324H7.05953L6.46408,5.67957H17.52272Z"></path></svg>
                                        </span>
                                    </div>
                                    <div className="flex-grow-1 link-tag-body">
                                        <p className="mb-0 text-truncate w-75">HTML</p>
                                        <span className="fs-11 fw-normal">93 items</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={3} xxl={2} className="">
                            <div className="link-tag link-tag-success rounded-pill">
                                <Link scroll={false} href="/marketplace/search/" className="stretched-link"></Link>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="min-w-fit-content">
                                        <span className="avatar avatar-md rounded-circle link-tag-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="react"><path fill="rgb(var(--success-rgb))" d="M19.108 12.376q-.176-.201-.371-.403.136-.144.264-.287c1.605-1.804 2.283-3.614 1.655-4.701-.602-1.043-2.393-1.354-4.636-.918q-.331.065-.659.146-.063-.216-.133-.43C14.467 3.49 13.238 1.999 11.982 2c-1.204 0-2.368 1.397-3.111 3.558q-.11.32-.203.644-.219-.054-.44-.1c-2.366-.485-4.271-.165-4.898.924-.601 1.043.027 2.75 1.528 4.472q.224.255.46.5c-.186.19-.361.381-.525.571-1.465 1.698-2.057 3.376-1.457 4.415.62 1.074 2.498 1.425 4.785.975q.278-.055.553-.124.1.351.221.697C9.635 20.649 10.792 22 11.992 22c1.24 0 2.482-1.453 3.235-3.659.06-.174.115-.355.169-.541q.355.088.715.156c2.203.417 3.952.09 4.551-.95.619-1.075-.02-2.877-1.554-4.63ZM4.07 7.452c.386-.67 1.943-.932 3.986-.512q.196.04.399.09a20.464 20.464 0 0 0-.422 2.678A20.887 20.887 0 0 0 5.93 11.4q-.219-.227-.427-.465C4.216 9.461 3.708 8.081 4.07 7.452Zm3.887 5.728c-.51-.387-.985-.783-1.416-1.181.43-.396.905-.79 1.415-1.176q-.028.589-.027 1.179 0 .59.028 1.178Zm0 3.94a7.237 7.237 0 0 1-2.64.094 1.766 1.766 0 0 1-1.241-.657c-.365-.63.111-1.978 1.364-3.43q.236-.273.488-.532a20.49 20.49 0 0 0 2.107 1.7 20.802 20.802 0 0 0 .426 2.712q-.25.063-.505.114Zm7.1-8.039q-.503-.317-1.018-.613-.508-.292-1.027-.563c.593-.249 1.176-.462 1.739-.635a18.218 18.218 0 0 1 .306 1.811ZM9.68 5.835c.636-1.85 1.578-2.98 2.304-2.98.773-.001 1.777 1.218 2.434 3.197q.064.194.12.39a20.478 20.478 0 0 0-2.526.97 20.061 20.061 0 0 0-2.52-.981q.087-.3.188-.596Zm-.4 1.424a18.307 18.307 0 0 1 1.73.642q-1.052.542-2.048 1.181c.08-.638.187-1.249.318-1.823Zm-.317 7.66q.497.319 1.009.613.522.3 1.057.576a18.196 18.196 0 0 1-1.744.665 19.144 19.144 0 0 1-.322-1.853Zm5.456 3.146a7.236 7.236 0 0 1-1.238 2.333 1.766 1.766 0 0 1-1.188.748c-.729 0-1.658-1.085-2.29-2.896q-.112-.321-.206-.648a20.109 20.109 0 0 0 2.53-1.01 20.8 20.8 0 0 0 2.547.979q-.072.249-.155.494Zm.362-1.324c-.569-.176-1.16-.393-1.762-.646q.509-.267 1.025-.565.53-.306 1.032-.627a18.152 18.152 0 0 1-.295 1.838Zm.447-4.743q0 .911-.057 1.82c-.493.334-1.013.66-1.554.972-.54.311-1.073.597-1.597.856q-.827-.396-1.622-.854-.79-.455-1.544-.969-.07-.91-.07-1.822 0-.911.068-1.821a24.168 24.168 0 0 1 3.158-1.823q.816.397 1.603.851.79.454 1.55.959.065.914.065 1.831Zm.956-5.093c1.922-.373 3.37-.122 3.733.507.387.67-.167 2.148-1.554 3.706q-.115.129-.238.259a20.061 20.061 0 0 0-2.144-1.688 20.04 20.04 0 0 0-.405-2.649q.31-.076.608-.135Zm-.13 3.885a18.164 18.164 0 0 1 1.462 1.188 18.12 18.12 0 0 1-1.457 1.208q.023-.594.023-1.188 0-.604-.028-1.208Zm3.869 5.789c-.364.631-1.768.894-3.653.538q-.324-.061-.664-.146a20.069 20.069 0 0 0 .387-2.682 19.94 19.94 0 0 0 2.137-1.715q.177.183.336.364a7.234 7.234 0 0 1 1.403 2.238 1.766 1.766 0 0 1 .054 1.403Zm-8.819-6.141a1.786 1.786 0 1 0 2.44.654 1.786 1.786 0 0 0-2.44-.654Z"></path></svg>
                                        </span>
                                    </div>
                                    <div className="flex-grow-1 link-tag-body">
                                        <p className="mb-0 text-truncate w-75">React</p>
                                        <span className="fs-11 fw-normal">93 items</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={3} xxl={2} className="">
                            <div className="link-tag link-tag-orange rounded-pill">
                                <Link scroll={false} href="/marketplace/search/" className="stretched-link"></Link>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="min-w-fit-content">
                                        <span className="avatar avatar-md rounded-circle link-tag-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="wordpress-simple"><circle cx="12" cy="12" r="10" fill="rgba(var(--orange-rgb), 0.2)"  opacity="0.2"></circle><path fill="rgb(var(--orange-rgb))" d="M12,1.99991a10.00009,10.00009,0,1,0,10,9.99975A10.01117,10.01117,0,0,0,12,1.99991ZM3.00928,11.99966a8.95545,8.95545,0,0,1,.77844-3.659L8.07654,20.09122A8.99125,8.99125,0,0,1,3.00928,11.99966ZM12,20.99112a8.98762,8.98762,0,0,1-2.54-.36633l2.69788-7.83869,2.7633,7.57135a.84324.84324,0,0,0,.06446.1239A8.97139,8.97139,0,0,1,12,20.99112ZM13.239,7.78427c.54126-.02844,1.02906-.08539,1.02906-.08539a.37165.37165,0,0,0-.05738-.741s-1.4563.11432-2.39648.11432c-.8833,0-2.3678-.11432-2.3678-.11432a.37165.37165,0,0,0-.057.741s.4585.05695.943.08539l1.40075,3.838-1.968,5.90088L6.49133,7.78427c.54163-.02844,1.02893-.08539,1.02893-.08539a.37166.37166,0,0,0-.05749-.741s-1.45593.11432-2.39612.11432c-.1687,0-.36768-.00416-.57861-.01093A8.98815,8.98815,0,0,1,18.07117,5.36948c-.0387-.00238-.07654-.00721-.11634-.00721A1.5567,1.5567,0,0,0,16.445,6.95792a4.21016,4.21016,0,0,0,.88317,2.1087,4.73577,4.73577,0,0,1,.74122,2.47955,10.88314,10.88314,0,0,1-.68409,2.9065l-.897,2.99634ZM16.52,19.7709l2.74609-7.93969a8.489,8.489,0,0,0,.68372-3.22028,6.9105,6.9105,0,0,0-.06043-.92456A8.99223,8.99223,0,0,1,16.52,19.7709Z"></path></svg>
                                        </span>
                                    </div>
                                    <div className="flex-grow-1 link-tag-body">
                                        <p className="mb-0 text-truncate w-75">Wordpress Plugin</p>
                                        <span className="fs-11 fw-normal">93 items</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={3} xxl={2} className="">
                            <div className="link-tag link-tag-info rounded-pill">
                                <Link scroll={false} href="/marketplace/search/" className="stretched-link"></Link>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="min-w-fit-content">
                                        <span className="avatar avatar-md rounded-circle link-tag-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="wordpress-simple2"><circle cx="12" cy="12" r="10" fill="rgba(var(--info-rgb), 0.2)"  opacity="0.2"></circle><path fill="rgb(var(--info-rgb))" d="M12,1.99991a10.00009,10.00009,0,1,0,10,9.99975A10.01117,10.01117,0,0,0,12,1.99991ZM3.00928,11.99966a8.95545,8.95545,0,0,1,.77844-3.659L8.07654,20.09122A8.99125,8.99125,0,0,1,3.00928,11.99966ZM12,20.99112a8.98762,8.98762,0,0,1-2.54-.36633l2.69788-7.83869,2.7633,7.57135a.84324.84324,0,0,0,.06446.1239A8.97139,8.97139,0,0,1,12,20.99112ZM13.239,7.78427c.54126-.02844,1.02906-.08539,1.02906-.08539a.37165.37165,0,0,0-.05738-.741s-1.4563.11432-2.39648.11432c-.8833,0-2.3678-.11432-2.3678-.11432a.37165.37165,0,0,0-.057.741s.4585.05695.943.08539l1.40075,3.838-1.968,5.90088L6.49133,7.78427c.54163-.02844,1.02893-.08539,1.02893-.08539a.37166.37166,0,0,0-.05749-.741s-1.45593.11432-2.39612.11432c-.1687,0-.36768-.00416-.57861-.01093A8.98815,8.98815,0,0,1,18.07117,5.36948c-.0387-.00238-.07654-.00721-.11634-.00721A1.5567,1.5567,0,0,0,16.445,6.95792a4.21016,4.21016,0,0,0,.88317,2.1087,4.73577,4.73577,0,0,1,.74122,2.47955,10.88314,10.88314,0,0,1-.68409,2.9065l-.897,2.99634ZM16.52,19.7709l2.74609-7.93969a8.489,8.489,0,0,0,.68372-3.22028,6.9105,6.9105,0,0,0-.06043-.92456A8.99223,8.99223,0,0,1,16.52,19.7709Z"></path></svg>
                                        </span>
                                    </div>
                                    <div className="flex-grow-1 link-tag-body">
                                        <p className="mb-0 text-truncate w-75">Wordpress Theme</p>
                                        <span className="fs-11 fw-normal">93 items</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={3} xxl={2} className="">
                            <div className="link-tag link-tag-warning rounded-pill">
                                <Link scroll={false} href="/marketplace/search/" className="stretched-link"></Link>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="min-w-fit-content">
                                        <span className="avatar avatar-md rounded-circle link-tag-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="java-script"><path fill="rgb(var(--warning-rgb))" d="M11.181 2.213a1.677 1.677 0 0 1 1.637 0l7.479 4.225a1.54 1.54 0 0 1 .778 1.325v8.475a1.556 1.556 0 0 1-.836 1.354l-7.452 4.204a1.63 1.63 0 0 1-1.655-.046l-2.236-1.292a1.316 1.316 0 0 1-.432-.311c.095-.128.265-.144.403-.2a5.22 5.22 0 0 0 .883-.412.206.206 0 0 1 .23.014c.636.365 1.267.741 1.907 1.103.136.079.274-.026.39-.09q3.658-2.068 7.317-4.13a.242.242 0 0 0 .133-.238q.003-4.193.001-8.387a.262.262 0 0 0-.156-.261q-3.714-2.092-7.426-4.186a.258.258 0 0 0-.292 0Q8.141 5.452 4.43 7.547a.259.259 0 0 0-.157.26v8.387a.237.237 0 0 0 .135.235q.99.562 1.983 1.12a1.532 1.532 0 0 0 1.24.166.94.94 0 0 0 .609-.883c.003-2.78-.002-5.56.002-8.338a.21.21 0 0 1 .228-.214c.318-.002.635-.004.953.001a.22.22 0 0 1 .207.254c-.001 2.797.003 5.594-.002 8.39a2.127 2.127 0 0 1-.995 1.922 3.064 3.064 0 0 1-2.738-.075c-.727-.363-1.42-.79-2.133-1.18a1.553 1.553 0 0 1-.835-1.354V7.763a1.542 1.542 0 0 1 .804-1.342q3.726-2.103 7.451-4.208Z"></path><path fill="rgb(var(--warning-rgb))" d="M13.348 8.083a5.88 5.88 0 0 1 3.218.493 2.434 2.434 0 0 1 1.187 2.106.228.228 0 0 1-.247.168c-.315 0-.629.004-.943-.002a.243.243 0 0 1-.228-.236 1.436 1.436 0 0 0-.687-.992 4.071 4.071 0 0 0-1.884-.27 2.558 2.558 0 0 0-1.349.336.855.855 0 0 0-.284.955c.101.24.378.317.605.388 1.306.342 2.69.308 3.97.757a1.87 1.87 0 0 1 1.23 1.095 2.338 2.338 0 0 1-.396 2.23 3.126 3.126 0 0 1-1.678.905 8.063 8.063 0 0 1-2.533.108 3.992 3.992 0 0 1-2.228-.839 2.338 2.338 0 0 1-.753-1.844.211.211 0 0 1 .231-.186c.317-.003.633-.004.95 0a.222.222 0 0 1 .226.22 1.439 1.439 0 0 0 .536 1.01 4.06 4.06 0 0 0 2.187.398 2.97 2.97 0 0 0 1.794-.439.99.99 0 0 0 .27-.946c-.078-.28-.37-.41-.621-.495-1.29-.408-2.688-.26-3.965-.72a1.93 1.93 0 0 1-1.218-1.063 2.175 2.175 0 0 1 .434-2.262 3.506 3.506 0 0 1 2.176-.875Z"></path></svg>
                                        </span>
                                    </div>
                                    <div className="flex-grow-1 link-tag-body">
                                        <p className="mb-0 text-truncate w-75">Javascript</p>
                                        <span className="fs-11 fw-normal">93 items</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            {/* End:: Section-1 */}

            {/* Start:: Section-2 */}
            <section className="section bg-white">
                <div className="container">
                    <Row>
                        <Col xl={12} className="mb-4">
                            <div className="d-flex justify-content-between align-items-baseline">
                                <div className="heading-section text-start">
                                    <div className="heading-title">Today Deals</div>
                                    <div className="heading-description">Grab the today offers</div>
                                </div>
                                <div className="min-w-fit-content">
                                    <Link scroll={false} href="/marketplace/search/" className="text-primary fw-semibold fs-14">
                                        <u>More Deals</u><i className="fe fe-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={12} lg={4}>
                            <Card className="card-style-4 card-style-4-primary">
                                <Card.Body>
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="flex-grow-1">
                                            <span className="badge bg-danger mb-2">20% Off</span>
                                            <h5 className="">Save <span className="fw-semibold"> $100</span></h5>
                                        </div>
                                        <div className="min-w-fit-content">
                                            <Link scroll={false} href="/marketplace/search/" className="btn btn-sm btn-primary">Explore <i className="ti ti-arrow-right ms-1"></i></Link>
                                        </div>
                                    </div>
                                    <div className="deals-bundle">
                                        <span className="icon">
                                            <img src="../../assets/images/marketplace/logos/1.png" alt="" className="img-fluid"/>
                                        </span>
                                        <h4 className="fw-semibold mb-4 text-fixed-white">Wordpress Themes</h4>  
                                        <div className="row text-center gy-2">
                                            <div className="col-md-6">
                                                <div className="bg-white-transparent backdrop-blur p-2 rounded shadow-sm">
                                                    <h5 className="mb-1 fw-semibold text-fixed-white">45+</h5>
                                                    <h6 className="mb-0 text-fixed-white">Products</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="bg-white-transparent backdrop-blur p-2 rounded shadow-sm">
                                                    <h5 className="mb-1 fw-semibold text-fixed-white">175+</h5>
                                                    <h6 className="mb-0 text-fixed-white">Widgets</h6>
                                                </div>
                                            </div>
                                        </div>                                      
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={12} lg={4}>
                            <Card className="card-style-4 card-style-4-secondary">
                                <Card.Body>
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="flex-grow-1">
                                            <span className="badge bg-danger mb-2">40% Off</span>
                                            <h5 className="">Save <span className="fw-semibold"> $300</span></h5>
                                        </div>
                                        <div className="min-w-fit-content">
                                            <Link scroll={false} href="/marketplace/search/" className="btn btn-sm btn-secondary">Explore <i className="ti ti-arrow-right ms-1"></i></Link>
                                        </div>
                                    </div>
                                    <div className="deals-bundle">
                                        <span className="icon">
                                            <img src="../../assets/images/marketplace/logos/2.png" alt="" className="img-fluid"/>
                                        </span>
                                        <h4 className="fw-semibold mb-4 text-fixed-white">React Templates</h4>  
                                        <div className="row text-center gy-2">
                                            <div className="col-md-6">
                                                <div className="bg-white-transparent backdrop-blur p-2 rounded shadow-sm">
                                                    <h5 className="mb-1 fw-semibold text-fixed-white">25+</h5>
                                                    <h6 className="mb-0 text-fixed-white">Products</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="bg-white-transparent backdrop-blur p-2 rounded shadow-sm">
                                                    <h5 className="mb-1 fw-semibold text-fixed-white">215+</h5>
                                                    <h6 className="mb-0 text-fixed-white">Widgets</h6>
                                                </div>
                                            </div>
                                        </div>                                      
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={12} lg={4}>
                            <Card className="card-style-4 card-style-4-success">
                                <Card.Body>
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="flex-grow-1">
                                            <span className="badge bg-danger mb-2">30% Off</span>
                                            <h5 className="">Save <span className="fw-semibold"> $200</span></h5>
                                        </div>
                                        <div className="min-w-fit-content">
                                            <Link scroll={false} href="/marketplace/search/" className="btn btn-sm btn-success">Explore <i className="ti ti-arrow-right ms-1"></i></Link>
                                        </div>
                                    </div>
                                    <div className="deals-bundle">
                                        <span className="icon">
                                            <img src="../../assets/images/marketplace/logos/3.png" alt="" className="img-fluid"/>
                                        </span>
                                        <h4 className="fw-semibold mb-4 text-fixed-white">HTML Templates</h4>  
                                        <div className="row text-center gy-2">
                                            <div className="col-md-6">
                                                <div className="bg-white-transparent backdrop-blur p-2 rounded-1 shadow-sm">
                                                    <h5 className="mb-1 fw-semibold text-fixed-white">234+</h5>
                                                    <h6 className="mb-0 text-fixed-white">Products</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="bg-white-transparent backdrop-blur p-2 rounded-1 shadow-sm">
                                                    <h5 className="mb-1 fw-semibold text-fixed-white">342+</h5>
                                                    <h6 className="mb-0 text-fixed-white">Widgets</h6>
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
            {/* End:: Section-2 */}

            {/* Start:: Section-3 */}
            <section className="section">
                <div className="container">
                    <div className="heading-section mb-4">
                        <p className="fs-12 fw-semibold mb-1"><span className="landing-section-heading text-gradient">Templates</span></p>
                        <div className="heading-title">Popular Templates</div>
                        <div className="heading-description">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</div>
                    </div>
                    <Row>
                        <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="col-12">
                            <Card className="custom-card overflow-hidden card-style-2">
                                <Link scroll={false} href="/marketplace/details/">
                                    <div className="featured-img">
                                        <img src="../../assets/images/marketplace/templates/1.png" className="" alt="..." />
                                    </div>
                                </Link>
                                <Card.Body className="p-3 position-relative">
                                    <div className="d-flex align-items-start justify-content-between">
                                        <div className="flex-grow-1">
                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                            <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">PHP Script Template</Link></h5>
                                            <div className="d-flex align-items-baseline fs-11 flex-wrap flex-wrap gap-2">
                                                <div className="min-w-fit-content">
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                </div>
                                                <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                    <span>(142)</span>
                                                    <span>Ratings</span>
                                                </p>
                                                <span className="text-danger">( 150 Sales )</span>
                                            </div>
                                        </div>
                                        <div className="min-w-fit-content">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                            <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                        </OverlayTrigger>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-baseline mt-4 flex-wrap flex-wrap gap-2">
                                        <div className="d-flex align-items-center flex-fill">
                                            <h4 className="fw-semibold text-primary mb-0">$120</h4>
                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$399</span>
                                        </div>
                                        <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="col-12">
                            <Card className="custom-card overflow-hidden card-style-2">
                                <span className="badge bg-danger tag-badge">20% Off</span>
                                <Link scroll={false} href="/marketplace/details/">
                                    <div className="featured-img">
                                        <img src="../../assets/images/marketplace/templates/2.png" className="" alt="..." />
                                    </div>
                                </Link>
                                <Card.Body className="p-3 position-relative">
                                    <div className="d-flex align-items-start justify-content-between">
                                        <div className="flex-grow-1">
                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                            <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">HTML Template</Link></h5>
                                            <div className="d-flex align-items-baseline fs-11 flex-wrap flex-wrap gap-2">
                                                <div className="min-w-fit-content">
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                </div>
                                                <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                    <span>(132)</span>
                                                    <span>Ratings</span>
                                                </p>
                                                <span className="text-danger">( 120 Sales )</span>
                                            </div>
                                        </div>
                                        <div className="min-w-fit-content">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                            <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                        </OverlayTrigger>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-baseline mt-4 flex-wrap flex-wrap gap-2">
                                        <div className="d-flex align-items-center flex-fill">
                                            <h4 className="fw-semibold text-primary mb-0">$170</h4>
                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$379</span>
                                        </div>
                                        <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="col-12">
                            <Card className="custom-card overflow-hidden card-style-2">
                                <div className="badge top-right-badge bg-warning text-fixed-white">
                                    <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                    <div className="badge-text">Trending</div>
                                </div>
                                <Link scroll={false} href="/marketplace/details/">
                                    <div className="featured-img">
                                        <img src="../../assets/images/marketplace/templates/3.png" className="" alt="..." />
                                    </div>
                                </Link>
                                <Card.Body className="p-3 position-relative">
                                    <div className="d-flex align-items-start justify-content-between">
                                        <div className="flex-grow-1">
                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                            <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">React Template</Link></h5>
                                            <div className="d-flex align-items-baseline fs-11 flex-wrap flex-wrap gap-2">
                                                <div className="min-w-fit-content">
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                </div>
                                                <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                    <span>(232)</span>
                                                    <span>Ratings</span>
                                                </p>
                                                <span className="text-danger">( 240 Sales )</span>
                                            </div>
                                        </div>
                                        <div className="min-w-fit-content">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                            <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                        </OverlayTrigger>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-baseline mt-4 flex-wrap flex-wrap gap-2">
                                        <div className="d-flex align-items-center flex-fill">
                                            <h4 className="fw-semibold text-primary mb-0">$240</h4>
                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$499</span>
                                        </div>
                                        <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="col-12">
                            <Card className="custom-card overflow-hidden card-style-2">
                                <span className="badge bg-danger tag-badge">40% Off</span>
                                <Link scroll={false} href="/marketplace/details/">
                                    <div className="featured-img">
                                        <img src="../../assets/images/marketplace/templates/4.png" className="" alt="..." /> 
                                    </div>
                                </Link>
                                <Card.Body className="p-3 position-relative">
                                    <div className="d-flex align-items-start justify-content-between">
                                        <div className="flex-grow-1">
                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                            <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Wordpress Template</Link></h5>
                                            <div className="d-flex align-items-baseline fs-11 flex-wrap flex-wrap gap-2">
                                                <div className="min-w-fit-content">
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                </div>
                                                <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                    <span>(152)</span>
                                                    <span>Ratings</span>
                                                </p>
                                                <span className="text-danger">( 310 Sales )</span>
                                            </div>
                                        </div>
                                        <div className="min-w-fit-content">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                            <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                        </OverlayTrigger>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-baseline mt-4 flex-wrap flex-wrap gap-2">
                                        <div className="d-flex align-items-center flex-fill">
                                            <h4 className="fw-semibold text-primary mb-0">$320</h4>
                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$439</span>
                                        </div>
                                        <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="col-12">
                            <Card className="custom-card overflow-hidden card-style-2">
                                <span className="badge bg-danger tag-badge">20% Off</span>
                                <div className="badge top-right-badge bg-warning text-fixed-white">
                                    <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                    <div className="badge-text">Trending</div>
                                </div>
                                <Link scroll={false} href="/marketplace/details/">
                                    <div className="featured-img">
                                        <img src="../../assets/images/marketplace/templates/5.png" className="" alt="..." /> 
                                    </div>
                                </Link>
                                <Card.Body className="p-3 position-relative">
                                    <div className="d-flex align-items-start justify-content-between">
                                        <div className="flex-grow-1">
                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                            <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Laravel Template</Link></h5>
                                            <div className="d-flex align-items-baseline fs-11 flex-wrap flex-wrap gap-2">
                                                <div className="min-w-fit-content">
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                </div>
                                                <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                    <span>(142)</span>
                                                    <span>Ratings</span>
                                                </p>
                                                <span className="text-danger">( 120 Sales )</span>
                                            </div>
                                        </div>
                                        <div className="min-w-fit-content">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                            <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                        </OverlayTrigger>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-baseline mt-4 flex-wrap flex-wrap gap-2">
                                        <div className="d-flex align-items-center flex-fill">
                                            <h4 className="fw-semibold text-primary mb-0">$120</h4>
                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$399</span>
                                        </div>
                                        <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="col-12">
                            <Card className="custom-card overflow-hidden card-style-2">
                                <Link scroll={false} href="/marketplace/details/">
                                    <div className="featured-img">
                                        <img src="../../assets/images/marketplace/templates/6.png" className="" alt="..." /> 
                                    </div>
                                </Link>
                                <Card.Body className="p-3 position-relative">
                                    <div className="d-flex align-items-start justify-content-between">
                                        <div className="flex-grow-1">
                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                            <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Django Template</Link></h5>
                                            <div className="d-flex align-items-baseline fs-11 flex-wrap flex-wrap gap-2">
                                                <div className="min-w-fit-content">
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                </div>
                                                <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                    <span>(242)</span>
                                                    <span>Ratings</span>
                                                </p>
                                                <span className="text-danger">( 220 Sales )</span>
                                            </div>
                                        </div>
                                        <div className="min-w-fit-content">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                            <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                        </OverlayTrigger>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-baseline mt-4 flex-wrap flex-wrap gap-2">
                                        <div className="d-flex align-items-center flex-fill">
                                            <h4 className="fw-semibold text-primary mb-0">$220</h4>
                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$499</span>
                                        </div>
                                        <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="col-12">
                            <Card className="custom-card overflow-hidden card-style-2">
                                <span className="badge bg-danger tag-badge">20% Off</span>
                                <Link scroll={false} href="/marketplace/details/">
                                    <div className="featured-img">
                                        <img src="../../assets/images/marketplace/templates/7.png" className="" alt="..." /> 
                                    </div>
                                </Link>
                                <Card.Body className="p-3 position-relative">
                                    <div className="d-flex align-items-start justify-content-between">
                                        <div className="flex-grow-1">
                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                            <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Vuejs Template</Link></h5>
                                            <div className="d-flex align-items-baseline fs-11 flex-wrap flex-wrap gap-2">
                                                <div className="min-w-fit-content">
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                </div>
                                                <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                    <span>(342)</span>
                                                    <span>Ratings</span>
                                                </p>
                                                <span className="text-danger">( 320 Sales )</span>
                                            </div>
                                        </div>
                                        <div className="min-w-fit-content">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                            <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                        </OverlayTrigger>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-baseline mt-4 flex-wrap flex-wrap gap-2">
                                        <div className="d-flex align-items-center flex-fill">
                                            <h4 className="fw-semibold text-primary mb-0">$220</h4>
                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$499</span>
                                        </div>
                                        <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={3} lg={3} md={6} sm={6} className="col-12">
                            <Card className="custom-card overflow-hidden card-style-2">
                                <Link scroll={false} href="/marketplace/details/">
                                    <div className="featured-img">
                                        <img src="../../assets/images/marketplace/templates/8.png" className="" alt="..." /> 
                                    </div>
                                </Link>
                                <Card.Body className="p-3 position-relative">
                                    <div className="d-flex align-items-start justify-content-between">
                                        <div className="flex-grow-1">
                                            <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                            <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Codeigniter Template</Link></h5>
                                            <div className="d-flex align-items-baseline fs-11 flex-wrap flex-wrap gap-2">
                                                <div className="min-w-fit-content">
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                </div>
                                                <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                    <span>(142)</span>
                                                    <span>Ratings</span>
                                                </p>
                                                <span className="text-danger">( 120 Sales )</span>
                                            </div>
                                        </div>
                                        <div className="min-w-fit-content">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                            <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                        </OverlayTrigger>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-baseline mt-4 flex-wrap flex-wrap gap-2">
                                        <div className="d-flex align-items-center flex-fill">
                                            <h4 className="fw-semibold text-primary mb-0">$120</h4>
                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$399</span>
                                        </div>
                                        <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>
            {/* End:: Section-3 */}

            {/* Start:: Section-4 */}
            <section className="section bg-banner-2 text-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <Col lg={10} className="text-center">
                            <div className="mb-4">
                                <h2 className="fw-medium mb-2 text-fixed-white">&#128073; Get 20% Off Discount Coupon</h2>
                                <h6 className="text-fixed-white">By Subscribe our Newsletter</h6>
                            </div>
                        </Col>
                        <Col lg={4} className="text-center">
                            <div className="custom-form-group">
                                <input type="text" className="form-control form-control-lg rounded-pill" placeholder="Enter Your Email.." aria-label="Recipient's username" />
                                <button className="btn btn-danger border-0 custom-form-btn rounded-pill" type="button">Subscribe</button>
                            </div>
                        </Col>
                    </div>
                </div>
            </section>
            {/* End:: Section-4 */}

            {/* Start:: Section-5 */}
            <section className="section">
                <div className="container">
                    <Row>
                        <Col xl={12} className="mb-4">
                            <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2">
                                <div className="heading-section text-start">
                                    <div className="heading-title">Newest Arrivals</div>
                                    <div className="heading-description">View the Newest products</div>
                                </div>
                                <div className="min-w-fit-content">
                                    <Link scroll={false} href="#!" className="text-primary fw-semibold fs-14">
                                        <u>View All</u><i className="fe fe-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={4} xl={4} lg={6} md={6} className="col-12">
                            <Card className="custom-card card-style-5">
                                <Card.Body className="p-3">
                                    <Row>
                                        <div className="col-4">
                                            <div className="img-box-1 bg-gray-300">
                                                <Link scroll={false} href="#!">
                                                    <img src="../../assets/images/marketplace/new-arrivals/1.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <div className="d-flex align-items-start justify-content-between mb-3">
                                                <div className="flex-grow-1">
                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Aliquyam</Link>
                                                    <h6 className="fw-semibold mb-1"><Link scroll={false} href="#!">HTML Template</Link></h6>
                                                    <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                        <div className="min-w-fit-content">
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                        </div>
                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                            <span>(4)</span>
                                                            <span>Ratings</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="min-w-fit-content">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                        <i className="bi bi-heart outline"></i>
                                                        <i className="bi bi-heart-fill filled"></i>
                                                    </Link>
                                                </OverlayTrigger>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h5 className="fw-semibold text-primary mb-0">$120</h5>
                                                <div className="min-w-fit-content">
                                                    <Link scroll={false} href="#!" className="btn btn-primary border-0"><i className="ti ti-shopping-cart-plus me-1 d-inline-block"></i>Add</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4} xl={4} lg={6} md={6} className="col-12">
                            <Card className="custom-card card-style-5">
                                <Card.Body className="p-3">
                                    <Row>
                                        <div className="col-4">
                                            <div className="img-box-1 bg-gray-300">
                                                <Link scroll={false} href="#!">
                                                    <img src="../../assets/images/marketplace/new-arrivals/2.png" alt="img" className="img-fluid w-100 rounded-1 "/>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <div className="d-flex align-items-start justify-content-between mb-3">
                                                <div className="flex-grow-1">
                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Takimata</Link>
                                                    <h6 className="fw-semibold mb-1"><Link scroll={false} href="#!">UX/UI Templates</Link></h6>
                                                    <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                        <div className="min-w-fit-content">
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                        </div>
                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                            <span>(161)</span>
                                                            <span>Ratings</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="min-w-fit-content">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                        <i className="bi bi-heart outline"></i>
                                                        <i className="bi bi-heart-fill filled"></i>
                                                    </Link>
                                                </OverlayTrigger>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h5 className="fw-semibold text-primary mb-0">$59</h5>
                                                <div className="min-w-fit-content">
                                                    <Link scroll={false} href="#!" className="btn btn-primary border-0"><i className="ti ti-shopping-cart-plus me-1 d-inline-block"></i>Add</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4} xl={4} lg={6} md={6} className="col-12">
                            <Card className="custom-card card-style-5">
                                <Card.Body className="p-3">
                                    <Row>
                                        <div className="col-4">
                                            <div className="img-box-1 bg-gray-300">
                                                <Link scroll={false} href="#!">
                                                    <img src="../../assets/images/marketplace/new-arrivals/3.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <div className="d-flex align-items-start justify-content-between mb-3">
                                                <div className="flex-grow-1">
                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Accusam</Link>
                                                    <h6 className="fw-semibold mb-1"><Link scroll={false} href="#!">React Template</Link></h6>
                                                    <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                        <div className="min-w-fit-content">
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                        </div>
                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                            <span>(45)</span>
                                                            <span>Ratings</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="min-w-fit-content">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                        <i className="bi bi-heart outline"></i>
                                                        <i className="bi bi-heart-fill filled"></i>
                                                    </Link>
                                                </OverlayTrigger>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h5 className="fw-semibold text-primary mb-0">$99</h5>
                                                <div className="min-w-fit-content">
                                                    <Link scroll={false} href="#!" className="btn btn-primary border-0"><i className="ti ti-shopping-cart-plus me-1 d-inline-block"></i>Add</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4} xl={4} lg={6} md={6} className="col-12">
                            <Card className="custom-card card-style-5">
                                <Card.Body className="p-3">
                                    <Row>
                                        <div className="col-4">
                                            <div className="img-box-1 bg-gray-300">
                                                <Link scroll={false} href="#!">
                                                    <img src="../../assets/images/marketplace/new-arrivals/4.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <div className="d-flex align-items-start justify-content-between mb-3">
                                                <div className="flex-grow-1">
                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Erat</Link>
                                                    <h6 className="fw-semibold mb-1"><Link scroll={false} href="#!">Vuejs Template</Link></h6>
                                                    <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                        <div className="min-w-fit-content">
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                        </div>
                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                            <span>(57)</span>
                                                            <span>Ratings</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="min-w-fit-content">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                        <i className="bi bi-heart outline"></i>
                                                        <i className="bi bi-heart-fill filled"></i>
                                                    </Link>
                                                </OverlayTrigger>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h5 className="fw-semibold text-primary mb-0">$35</h5>
                                                <div className="min-w-fit-content">
                                                    <Link scroll={false} href="#!" className="btn btn-primary border-0"><i className="ti ti-shopping-cart-plus me-1 d-inline-block"></i>Add</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4} xl={4} lg={6} md={6} className="col-12">
                            <Card className="custom-card card-style-5">
                                <Card.Body className="p-3">
                                    <Row>
                                        <div className="col-4">
                                            <div className="img-box-1 bg-gray-300">
                                                <Link scroll={false} href="#!">
                                                    <img src="../../assets/images/marketplace/new-arrivals/1.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <div className="d-flex align-items-start justify-content-between mb-3">
                                                <div className="flex-grow-1">
                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Dolore</Link>
                                                    <h6 className="fw-semibold mb-1"><Link scroll={false} href="#!">Angular Template</Link></h6>
                                                    <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                        <div className="min-w-fit-content">
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                        </div>
                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                            <span>(773)</span>
                                                            <span>Ratings</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="min-w-fit-content">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle active" data-bs-toggle="tooltip" title="wishlist">
                                                        <i className="bi bi-heart outline"></i>
                                                        <i className="bi bi-heart-fill filled"></i>
                                                    </Link>
                                                </OverlayTrigger>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h5 className="fw-semibold text-primary mb-0">$459</h5>
                                                <div className="min-w-fit-content">
                                                    <Link scroll={false} href="#!" className="btn btn-primary border-0"><i className="ti ti-shopping-cart-plus me-1 d-inline-block"></i>Add</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4} xl={4} lg={6} md={6} className="col-12">
                            <Card className="custom-card card-style-5">
                                <Card.Body className="p-3">
                                    <Row>
                                        <div className="col-4">
                                            <div className="img-box-1 bg-gray-300">
                                                <Link scroll={false} href="#!">
                                                    <img src="../../assets/images/marketplace/new-arrivals/2.png" alt="img" className="img-fluid w-100 rounded-1"/>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <div className="d-flex align-items-start justify-content-between mb-3">
                                                <div className="flex-grow-1">
                                                    <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">Nonumy</Link>
                                                    <h6 className="fw-semibold mb-1"><Link scroll={false} href="#!">Laravel Template</Link></h6>
                                                    <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                        <div className="min-w-fit-content">
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                        </div>
                                                        <p className="mb-0 ms-1 min-w-fit-content text-muted">
                                                            <span>(37)</span>
                                                            <span>Ratings</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="min-w-fit-content">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>wishlist</Tooltip>}>
                                                    <Link scroll={false} href="#!" className="btn btn-wishlist btn-icon rounded-circle" data-bs-toggle="tooltip" title="wishlist">
                                                        <i className="bi bi-heart outline"></i>
                                                        <i className="bi bi-heart-fill filled"></i>
                                                    </Link>
                                                </OverlayTrigger>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h5 className="fw-semibold text-primary mb-0">$29</h5>
                                                <div className="min-w-fit-content">
                                                    <Link scroll={false} href="#!" className="btn btn-primary border-0"><i className="ti ti-shopping-cart-plus me-1 d-inline-block"></i>Add</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>
            {/* End:: Section-5 */}

            {/* Start:: Section-6 */}
            <section className="bg-banner-2 text-white">
                <div className="container">
                    <div className="row align-items-center">
                        <Col xxl={4} xl={4} lg={5} className="d-lg-block d-none text-center mt-4">
                            <img src="../../assets/images/ecommerce/png/17.png" width="350" alt="" />
                        </Col>
                        <Col xxl={8} xl={8} lg={7} className="col-12">
                            <div className="my-4">
                                <h2 className="fw-semibold mb-3 text-fixed-white">Download 5 Free templates by creating an account.</h2>
                                <h6 className="mb-4 text-fixed-white">Lorem ipsum dolor sit amet consectetur adipisicing elit aspernatur illum vel sunt libero voluptatum repudiandae veniam maxime tenetur. </h6>
                                <Link scroll={false} href="#!" className="btn btn-light btn-lg">Signup</Link> 
                            </div>
                        </Col> 
                    </div>
                </div>
            </section>
            {/* End:: Section-6 */}

            {/* Start:: Section-7 */}
            <section className="section">
                <div className="container">
                    <Row>
                        <Tab.Container defaultActiveKey="first">
                            <Col xl={12} className="mb-4">
                                <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2">
                                    <div className="heading-section text-start">
                                        <div className="heading-title">All Products</div>
                                        <div className="heading-description">View the Newest products</div>
                                    </div>
                                    <div className="min-w-fit-content">
                                        {/* Nav tabs */}
                                        <Nav className="nav-tabs tab-style-8 scaleX custom-nav-tabs" id="myTab" role="tablist">
                                            <Nav.Item role="presentation">
                                                <Nav.Link eventKey="first" href="#all-tab" className="nav-link" data-bs-toggle="tab">All</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item role="presentation">
                                                <Nav.Link eventKey="second" href="#topselling-tab" className="nav-link" data-bs-toggle="tab">Top Selling</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item role="presentation">
                                                <Nav.Link eventKey="third" href="#trending-tab" className="nav-link" data-bs-toggle="tab">Trending</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item role="presentation">
                                                <Nav.Link eventKey="fourth" href="#recentlyadded-tab" className="nav-link" data-bs-toggle="tab">Recently Added</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={12}>
                                {/* Tab panes */}
                                <Tab.Content className="all-products">
                                    <Tab.Pane eventKey="first" className="" id="all-tab">
                                        <Row>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/1.png" className="" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">PHP Script Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(142)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 150 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$120</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$399</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block align-middle"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <span className="badge bg-danger tag-badge">40% Off</span>
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/4.png" className="" alt="..." /> 
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Wordpress Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(152)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 310 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$320</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$439</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/2.png" className="" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">HTML Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(132)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 120 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$170</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$379</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <div className="badge top-right-badge bg-warning text-fixed-white">
                                                        <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                        <div className="badge-text">Trending</div>
                                                    </div>
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/3.png" className="" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">React Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(232)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 240 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$240</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$499</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <span className="badge bg-danger tag-badge">20% Off</span>
                                                    <div className="badge top-right-badge bg-warning text-fixed-white">
                                                        <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                        <div className="badge-text">Trending</div>
                                                    </div>
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/5.png" className="" alt="..." /> 
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Laravel Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(142)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 120 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$120</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$399</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <span className="badge bg-danger tag-badge">20% Off</span>
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/7.png" className="" alt="..." /> 
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Vuejs Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(342)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 320 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$220</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$499</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/6.png" className="" alt="..." /> 
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Django Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(242)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 220 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$220</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$499</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/8.png" className="" alt="..." /> 
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Codeigniter Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(142)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 120 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$120</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$399</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second" className="" id="topselling-tab">
                                        <Row>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/1.png" className="" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">PHP Script Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(142)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 150 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$120</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$399</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <span className="badge bg-danger tag-badge">20% Off</span>
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/2.png" className="" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">HTML Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(132)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 120 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$170</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$379</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <div className="badge top-right-badge bg-warning text-fixed-white">
                                                        <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                        <div className="badge-text">Trending</div>
                                                    </div>
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/3.png" className="" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">React Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(232)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 240 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$240</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$499</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <span className="badge bg-danger tag-badge">40% Off</span>
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/4.png" className="" alt="..." /> 
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Wordpress Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(152)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 310 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$320</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$439</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <span className="badge bg-danger tag-badge">20% Off</span>
                                                    <div className="badge top-right-badge bg-warning text-fixed-white">
                                                        <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                        <div className="badge-text">Trending</div>
                                                    </div>
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/5.png" className="" alt="..." /> 
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Laravel Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(142)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 120 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$120</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$399</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/6.png" className="" alt="..." /> 
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Django Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(242)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 220 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$220</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$499</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <span className="badge bg-danger tag-badge">20% Off</span>
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/7.png" className="" alt="..." /> 
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Vuejs Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(342)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 320 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$220</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$499</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/8.png" className="" alt="..." /> 
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Codeigniter Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(142)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 120 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$120</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$399</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third" className="" id="trending-tab">
                                        <Row>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <div className="badge top-right-badge bg-warning text-fixed-white">
                                                        <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                        <div className="badge-text">Trending</div>
                                                    </div>
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/1.png" className="" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">PHP Script Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(142)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 150 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$120</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$399</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <div className="badge top-right-badge bg-warning text-fixed-white">
                                                        <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                        <div className="badge-text">Trending</div>
                                                    </div>
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/3.png" className="" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">React Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(232)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 240 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$240</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$499</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <div className="badge top-right-badge bg-warning text-fixed-white">
                                                        <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                        <div className="badge-text">Trending</div>
                                                    </div>
                                                    <span className="badge bg-danger tag-badge">20% Off</span>
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/2.png" className="" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">HTML Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(132)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 120 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$170</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$379</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <div className="badge top-right-badge bg-warning text-fixed-white">
                                                        <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                        <div className="badge-text">Trending</div>
                                                    </div>
                                                    <span className="badge bg-danger tag-badge">40% Off</span>
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/4.png" className="" alt="..." /> 
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Wordpress Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(152)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 310 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$320</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$439</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <div className="badge top-right-badge bg-warning text-fixed-white">
                                                        <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                        <div className="badge-text">Trending</div>
                                                    </div>
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/6.png" className="" alt="..." /> 
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Django Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(242)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 220 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$220</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$499</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <span className="badge bg-danger tag-badge">20% Off</span>
                                                    <div className="badge top-right-badge bg-warning text-fixed-white">
                                                        <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                        <div className="badge-text">Trending</div>
                                                    </div>
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/5.png" className="" alt="..." /> 
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Laravel Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(142)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 120 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$120</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$399</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <div className="badge top-right-badge bg-warning text-fixed-white">
                                                        <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                        <div className="badge-text">Trending</div>
                                                    </div>
                                                    <span className="badge bg-danger tag-badge">20% Off</span>
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/7.png" className="" alt="..." /> 
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Vuejs Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(342)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 320 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$220</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$499</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <div className="badge top-right-badge bg-warning text-fixed-white">
                                                        <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                        <div className="badge-text">Trending</div>
                                                    </div>
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/8.png" className="" alt="..." /> 
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Codeigniter Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(142)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 120 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$120</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$399</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth" className="" id="recentlyadded-tab">
                                        <Row>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/1.png" className="" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">PHP Script Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(142)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 150 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$120</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$399</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <span className="badge bg-danger tag-badge">20% Off</span>
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/2.png" className="" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">HTML Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(132)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 120 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$170</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$379</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <div className="badge top-right-badge bg-warning text-fixed-white">
                                                        <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                        <div className="badge-text">Trending</div>
                                                    </div>
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/3.png" className="" alt="..." />
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">React Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(232)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 240 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$240</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$499</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <span className="badge bg-danger tag-badge">40% Off</span>
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/4.png" className="" alt="..." /> 
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Wordpress Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(152)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 310 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$320</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$439</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <span className="badge bg-danger tag-badge">20% Off</span>
                                                    <div className="badge top-right-badge bg-warning text-fixed-white">
                                                        <div className="badge-icon"><i className="ti ti-bolt fs-14"></i></div>
                                                        <div className="badge-text">Trending</div>
                                                    </div>
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/5.png" className="" alt="..." /> 
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Laravel Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(142)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 120 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$120</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$399</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/6.png" className="" alt="..." /> 
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Django Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(242)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 220 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$220</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$499</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <span className="badge bg-danger tag-badge">20% Off</span>
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/7.png" className="" alt="..." /> 
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Vuejs Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(342)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 320 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$220</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$499</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={3}>
                                                <Card className="custom-card overflow-hidden card-style-2">
                                                    <Link scroll={false} href="/marketplace/details/">
                                                        <div className="featured-img">
                                                            <img src="../../assets/images/marketplace/templates/8.png" className="" alt="..." /> 
                                                        </div>
                                                    </Link>
                                                    <Card.Body className="p-3 position-relative">
                                                        <div className="d-flex align-items-start justify-content-between">
                                                            <div className="flex-grow-1">
                                                                <Link scroll={false} href="#!" className="mb-2 d-inline-block text-primary fs-13 fw-semibold">By Obligation Pvt.Ltd</Link>
                                                                <h5 className="mb-1 fw-semibold"><Link scroll={false} href="/marketplace/details/">Codeigniter Template</Link></h5>
                                                                <div className="d-flex align-items-baseline fs-11 flex-wrap">
                                                                    <div className="min-w-fit-content">
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                                    </div>
                                                                    <p className="mb-0 mx-1 min-w-fit-content text-muted">
                                                                        <span>(142)</span>
                                                                        <span>Ratings</span>
                                                                    </p>
                                                                    <span className="text-danger">( 120 Sales )</span>
                                                                </div>
                                                            </div>
                                                            <div className="min-w-fit-content">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-outline-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><i className="ri-heart-fill op-3"></i></Link>
                                                            </OverlayTrigger>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-baseline mt-4 flex-wrap">
                                                            <h4 className="fw-semibold text-primary mb-0">$120</h4>
                                                            <span className="fs-16 ms-2 text-muted text-decoration-line-through flex-grow-1">$399</span>
                                                            <Link scroll={false} href="/marketplace/details/" className="btn btn-primary"><i className="ti ti-eye me-1 d-inline-block"></i>Preview</Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Tab.Container>
                    </Row>
                </div>
            </section>
            {/* End:: Section-7 */}

            {/* Start:: Section-8 */}
            <section className="py-5 bg-banner">
                <div className="container">
                    <div className="row justify-content-center">
                        <Col lg={10}>
                            <Row className="text-center gy-3">
                                <Col md={3}>
                                    <div>
                                        <h3 className="mb-1 fw-semibold text-fixed-white">45K+</h3>
                                        <h6 className="mb-0 text-fixed-white">All Products</h6>
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <div>
                                        <h3 className="mb-1 fw-semibold text-fixed-white">175K+</h3>
                                        <h6 className="mb-0 text-fixed-white">Locations</h6>
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <div>
                                        <h3 className="mb-1 fw-semibold text-fixed-white">300K+</h3>
                                        <h6 className="mb-0 text-fixed-white">Registered Users</h6>
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <div>
                                        <h3 className="mb-1 fw-semibold text-fixed-white">450M+</h3>
                                        <h6 className="mb-0 text-fixed-white">Premium Products</h6>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </div>
            </section>
            {/* End:: Section-8 */}

            {/* Start:: Section-9 */}
            <section className="section">
                <div className="container">
                    <div className="row mb-4 justify-content-center text-center">
                        <p className="fs-12 fw-semibold mb-1"><span className="landing-section-heading text-gradient">Our Blog</span></p>
                        <div className="heading-title">Latest News Updates & Blogs</div>
                        <div className="col-xl-9">
                            <p className="">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                    <Row>
                        <Col lg={4} className="col-12">
                            <Card className="custom-card">
                                <Link scroll={false} href="#!">
                                    <img src="../../assets/images/media/blog/20.jpg" className="card-img-top" alt="..." />
                                </Link>
                                <Card.Body>
                                    <span className="badge bg-secondary blog-badge">Interview</span>
                                    <h5 className="fw-semibold mb-1">How to prepare an interview?</h5>
                                    <p className="card-text">The holographic principle, theorized to be a property of quantum gravity, postulates that the description.</p>
                                    <Link scroll={false} className="text-primary fw-semibold" href="#!">Read this post<i className="ri-arrow-right-s-line align-middle rtl-rotate"></i></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} className="col-12">
                            <Card className="custom-card">
                                <Link scroll={false} href="#!">
                                    <img src="../../assets/images/media/blog/21.jpg" className="card-img-top" alt="..." />
                                </Link>
                                <Card.Body>
                                    <span className="badge bg-danger blog-badge">Freelancer</span>
                                    <h5 className="fw-semibold mb-1">Freelancer vs Employement</h5>
                                    <p className="card-text">The holographic principle, theorized to be a property of quantum gravity, postulates that the description.</p>
                                    <Link scroll={false} className="text-primary fw-semibold" href="#!">Read this post<i className="ri-arrow-right-s-line align-middle rtl-rotate"></i></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} className="col-12">
                            <Card className="custom-card">
                                <Link scroll={false} href="#!">
                                    <img src="../../assets/images/media/blog/22.jpg" className="card-img-top" alt="..." />
                                </Link>
                                <Card.Body>
                                    <span className="badge bg-warning blog-badge">Jobmaster</span>
                                    <h5 className="fw-semibold mb-1">Job opportunity in jobmaster</h5>
                                    <p className="card-text">The holographic principle, theorized to be a property of quantum gravity, postulates that the description.</p>
                                    <Link scroll={false} className="text-primary fw-semibold" href="#!">Read this post<i className="ri-arrow-right-s-line align-middle rtl-rotate"></i></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>
            {/* End:: Section-9 */}

            {/* Start:: Section-10 */}
            <section className="section bg-banner">
                <div className="container">
                    <div className="row gy-2">
                        <Col lg={9}>
                            <h2 className="fw-semibold text-fixed-white">Create your free account today!</h2>
                            <p className="mb-0 op-9">Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore..</p>
                        </Col>
                        <div className="col-lg-3 text-lg-end my-lg-auto">
                            <Link scroll={false} href="#!" className="btn btn-lg btn-danger">Signup Now</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* End:: Section-10 */}

            {/* Start:: Section-11 */}
            <section className="section bg-white">
                <div className="container">
                    <div className="heading-section mb-4">
                        <p className="fs-12 fw-semibold mb-1"><span className="landing-section-heading text-gradient">FAQ'S</span></p>
                        <div className="heading-title">Frequently Asked Questions?</div>
                        <div className="heading-description">Browse Through The Most Frequently Asked Questions</div>
                    </div>
                    <Row>
                        <Col xl={6} className="mt-2">
                            <Accordion defaultActiveKey="first" className="accordion-solid-primary accordion-customicon1 accordions-items-seperate" id="accordionFAQ1">
                                <Accordion.Item eventKey="first">
                                    <Accordion.Header id="headingcustomicon2One">
                                            Where can I subscribe to your newsletter?
                                    </Accordion.Header>
                                        <Accordion.Body>
                                            <strong>This is the first item's accordion body.</strong> It is shown by
                                            default, until the collapse plugin adds the appropriate classes that we
                                            use to style each element
                                            <code>.accordion-body</code>, though the transition does limit overflow.
                                        </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="second">
                                    <Accordion.Header id="headingcustomicon2Two">
                                            Where can in edit my address?
                                    </Accordion.Header>
                                        <Accordion.Body>
                                            <strong>This is the first item's accordion body.</strong> It is shown by
                                            default, until the collapse plugin adds the appropriate classes that we
                                            use to style each element
                                            <code>.accordion-body</code>, though the transition does limit overflow.
                                        </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="third">
                                    <Accordion.Header id="headingcustomicon2Three">
                                            What are your opening hours?
                                    </Accordion.Header>
                                        <Accordion.Body>
                                            <strong>This is the first item's accordion body.</strong> It is shown by
                                            default, until the collapse plugin adds the appropriate classes that we
                                            use to style each element
                                            <code>.accordion-body</code>, though the transition does limit overflow.
                                        </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="fourth">
                                    <Accordion.Header id="headingcustomicon2Four">
                                            Do I have the right to return an item?
                                    </Accordion.Header>
                                        <Accordion.Body>
                                            <strong>This is the first item's accordion body.</strong> It is shown by
                                            default, until the collapse plugin adds the appropriate classes that we
                                            use to style each element
                                            <code>.accordion-body</code>, though the transition does limit overflow.
                                        </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col> 
                        <Col xl={6} className="mt-2">
                            <Accordion defaultActiveKey="first" className="accordion-solid-primary accordion-customicon1 accordions-items-seperate" id="accordionFAQ">
                                <Accordion.Item eventKey="first">
                                    <Accordion.Header id="headingcustomicon1One">
                                            When can we get started?
                                    </Accordion.Header>
                                        <Accordion.Body>
                                            <strong>This is the first item's accordion body.</strong> It is shown by
                                            default, until the collapse plugin adds the appropriate classes that we
                                            use to style each element
                                            <code>.accordion-body</code>, though the transition does limit overflow.
                                        </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="second">
                                    <Accordion.Header id="headingcustomicon1Two">
                                            What services are provided by you?
                                    </Accordion.Header>
                                        <Accordion.Body>
                                            <strong>This is the first item's accordion body.</strong> It is shown by
                                            default, until the collapse plugin adds the appropriate classes that we
                                            use to style each element
                                            <code>.accordion-body</code>, though the transition does limit overflow.
                                        </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="third">
                                    <Accordion.Header id="headingcustomicon1Three">
                                            What types of companies use your services?
                                    </Accordion.Header>
                                        <Accordion.Body>
                                            <strong>This is the first item's accordion body.</strong> It is shown by
                                            default, until the collapse plugin adds the appropriate classes that we
                                            use to style each element
                                            <code>.accordion-body</code>, though the transition does limit overflow.
                                        </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="fourth">
                                    <Accordion.Header id="headingcustomicon1Four">
                                            Do you provide 24/7 social media support?
                                    </Accordion.Header>
                                        <Accordion.Body>
                                            <strong>This is the first item's accordion body.</strong> It is shown by
                                            default, until the collapse plugin adds the appropriate classes that we
                                            use to style each element
                                            <code>.accordion-body</code>, though the transition does limit overflow.
                                        </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col> 
                    </Row>
                </div>
            </section>
            {/* End:: Section-11 */}

            {/* Start:: Section-12 */}
            <section className="section landing-testimonials">
                <div className="container text-center">
                    <p className="fs-12 fw-semibold mb-1"><span className="landing-section-heading text-gradient">Testimonials</span></p>
                    <div className="heading-title">We never failed to reach expectations</div>
                    <div className="row justify-content-center">
                        <Col xl={6}>
                            <p className="text-muted fs-15 mb-5 fw-normal">Some of the reviews our clients gave which brings motivation to work.</p>
                        </Col>
                    </div>
                    <Swiper autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ dynamicBullets: true, clickable: true, }} modules={[Pagination, Autoplay]} className="pagination-dynamic text-start">
                            <SwiperSlide>
                                <Row>
                                    <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                                        <Card className="custom-card featured-card-1">
                                            <Card.Body className="p-4">
                                                <span className="review-quote">
                                                    <i className="bi bi-quote"></i>
                                                </span>
                                                <span className="review-quote">
                                                    <i className="bi bi-quote"></i>
                                                </span>
                                                <div className="d-flex mb-2 align-items-center">
                                                    <span className="avatar avatar-lg avatar-rounded me-2">
                                                        <img src="../../assets/images/faces/21.jpg" alt="" />
                                                    </span>
                                                    <div>
                                                        <p className="mb-0 fw-semibold fs-16 text-primary">Jack Miller</p>
                                                        <p className="fs-10 mb-0 fw-semibold text-muted">CEO OF NORJA</p>
                                                    </div>
                                                </div>
                                                <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor</span>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                                        <Card className="custom-card featured-card-1">
                                            <Card.Body className="p-4">
                                                <span className="review-quote">
                                                    <i className="bi bi-quote"></i>
                                                </span>
                                                <span className="review-quote">
                                                    <i className="bi bi-quote"></i>
                                                </span>
                                                <div className="d-flex mb-2 align-items-center">
                                                    <span className="avatar avatar-lg avatar-rounded me-2">
                                                        <img src="../../assets/images/faces/21.jpg" alt="" />
                                                    </span>
                                                    <div>
                                                        <p className="mb-0 fw-semibold fs-16 text-primary">Melissa Blue</p>
                                                        <p className="fs-10 mb-0 fw-semibold text-muted">MANAGER CHO</p>
                                                    </div>
                                                </div>
                                                <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor</span>
                                            
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                                        <Card className="custom-card featured-card-1">
                                            <Card.Body className="p-4">
                                                <span className="review-quote">
                                                    <i className="bi bi-quote"></i>
                                                </span>
                                                <div className="d-flex mb-2 align-items-center">
                                                    <span className="avatar avatar-lg avatar-rounded me-2">
                                                        <img src="../../assets/images/faces/21.jpg" alt="" />
                                                    </span>
                                                    <div>
                                                        <p className="mb-0 fw-semibold fs-16 text-primary">Kiara Advain</p>
                                                        <p className="fs-10 mb-0 fw-semibold text-muted">CEO OF EMPIRO</p>
                                                    </div>
                                                </div>
                                                <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor</span>
                                                
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Row>
                                    <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                                        <Card className="custom-card featured-card-1">
                                            <Card.Body className="p-4">
                                                <span className="review-quote">
                                                    <i className="bi bi-quote"></i>
                                                </span>
                                                <div className="d-flex mb-2 align-items-center">
                                                    <span className="avatar avatar-lg avatar-rounded me-2">
                                                        <img src="../../assets/images/faces/21.jpg" alt="" />
                                                    </span>
                                                    <div>
                                                        <p className="mb-0 fw-semibold fs-16 text-primary">Jhonson Smith</p>
                                                        <p className="fs-10 mb-0 fw-semibold text-muted">CHIEF SECRETARY MBIO</p>
                                                    </div>
                                                </div>
                                                <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor</span>
                                                
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                                        <Card className="custom-card featured-card-1">
                                            <Card.Body className="p-4">
                                                <span className="review-quote">
                                                    <i className="bi bi-quote"></i>
                                                </span>
                                                <div className="d-flex mb-2 align-items-center">
                                                    <span className="avatar avatar-lg avatar-rounded me-2">
                                                        <img src="../../assets/images/faces/21.jpg" alt="" />
                                                    </span>
                                                    <div>
                                                        <p className="mb-0 fw-semibold fs-16 text-primary">Dwayne Stort</p>
                                                        <p className="fs-10 mb-0 fw-semibold text-muted">CEO ARMEDILLO</p>
                                                    </div>
                                                </div>
                                                <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor</span>
                                                
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                                        <Card className="custom-card featured-card-1">
                                            <Card.Body className="p-4">
                                                <span className="review-quote">
                                                    <i className="bi bi-quote"></i>
                                                </span>
                                                <div className="d-flex mb-2 align-items-center">
                                                    <span className="avatar avatar-lg avatar-rounded me-2">
                                                        <img src="../../assets/images/faces/21.jpg" alt="" />
                                                    </span>
                                                    <div>
                                                        <p className="mb-0 fw-semibold fs-16 text-primary">Jasmine Kova</p>
                                                        <p className="fs-10 mb-0 fw-semibold text-muted">AGGENT AMIO</p>
                                                    </div>
                                                </div>
                                                <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor</span>
                                                
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Row>
                                    <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                                        <Card className="custom-card featured-card-1">
                                            <Card.Body className="p-4">
                                                <span className="review-quote">
                                                    <i className="bi bi-quote"></i>
                                                </span>
                                                <div className="d-flex mb-2 align-items-center">
                                                    <span className="avatar avatar-lg avatar-rounded me-2">
                                                        <img src="../../assets/images/faces/21.jpg" alt="" />
                                                    </span>
                                                    <div>
                                                        <p className="mb-0 fw-semibold fs-16 text-primary">Dolph MR</p>
                                                        <p className="fs-10 mb-0 fw-semibold text-muted">CEO MR BRAND</p>
                                                    </div>
                                                </div>
                                                <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor</span>
                                                
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                                        <Card className="custom-card featured-card-1">
                                            <Card.Body className="p-4">
                                                <span className="review-quote">
                                                    <i className="bi bi-quote"></i>
                                                </span>
                                                <div className="d-flex mb-2 align-items-center">
                                                    <span className="avatar avatar-lg avatar-rounded me-2">
                                                        <img src="../../assets/images/faces/21.jpg" alt="" />
                                                    </span>
                                                    <div>
                                                        <p className="mb-0 fw-semibold fs-16 text-primary">Brenda Simpson</p>
                                                        <p className="fs-10 mb-0 fw-semibold text-muted">CEO AIBMO</p>
                                                    </div>
                                                </div>
                                                <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor</span>
                                                
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                                        <Card className="custom-card featured-card-1">
                                            <Card.Body className="p-4">
                                                <span className="review-quote">
                                                    <i className="bi bi-quote"></i>
                                                </span>
                                                <div className="d-flex mb-2 align-items-center">
                                                    <span className="avatar avatar-lg avatar-rounded me-2">
                                                        <img src="../../assets/images/faces/21.jpg" alt="" />
                                                    </span>
                                                    <div>
                                                        <p className="mb-0 fw-semibold fs-16 text-primary">Melissa Blue</p>
                                                        <p className="fs-10 mb-0 fw-semibold text-muted">MANAGER CHO</p>
                                                    </div>
                                                </div>
                                                <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labor</span>
                                                
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </SwiperSlide>
                    </Swiper>
                </div>    
            </section>
            {/* End:: Section-12 */}

            {/* Start:: Section-13 */}
            <section className="section bg-banner px-lg-0 px-4">
                <div className="row justify-content-center">
                    <div className="col-lg-7 text-center">
                        <div className="mb-4">
                            <h3 className="fw-semibold mb-2 text-fixed-white">&#128073; Browse the top template to build the awesome applications</h3>
                        </div>
                        <h6 className="mb-4 op-9 text-fixed-white">Labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore..</h6>
                        <div className="btn-list">
                            <Link scroll={false} href="/marketplace/search/" className="btn btn-lg btn-light"><i className="bi bi-search me-1"></i> Search Products</Link>
                            <Link scroll={false} href="#!" className="btn btn-lg btn-danger"><i className="bi bi-send me-1"></i> Signup Now</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* End:: Section-13 */}
    </Fragment>
    )
};

export default Landing;