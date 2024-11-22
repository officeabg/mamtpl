"use client"
import nextConfig from '@/next.config.mjs'
import { ThemeChanger } from '@/shared/redux/action'
import store from '@/shared/redux/store'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import { Dropdown, ListGroup, Offcanvas } from 'react-bootstrap'
import { connect } from 'react-redux'

const Ecommerceheader = ({ThemeChanger}:any) => {
    let {basePath} = nextConfig;
    //oFFcanvas
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    //oFFcanvas2
    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    //Togglesidebar
    function toggleNavigation() {
        if (window.innerWidth <= 992) {
            const theme = store.getState();
            ThemeChanger({ ...theme, "toggled": "open", "dataNavLayout": "horizontal" });
            
        }
    }

     //Switcher
     const Switchericon = () => {
        document.querySelector(".offcanvas-end")?.classList.toggle("show");
        if (document.querySelector(".switcher-backdrop")?.classList.contains("d-none")) {
            document.querySelector(".switcher-backdrop")?.classList.add("d-block");
            document.querySelector(".switcher-backdrop")?.classList.remove("d-none");
        }
    };

    const Topup = () => {
        if (typeof window !== 'undefined') {
        if (window.scrollY > 30 && document.querySelector(".ecommerce-brand-header")) {
        const Scolls = document.querySelectorAll(".ecommerce-brand-header");
        Scolls.forEach((e) => {
        e.classList.add("sticky-pin");
        });
        } else {
        const Scolls = document.querySelectorAll(".ecommerce-brand-header");
        Scolls.forEach((e) => {
        e.classList.remove("sticky-pin");
        });
        }
        }
        };
        if (typeof window !== 'undefined') {
        window.addEventListener("scroll", Topup);
        }
  return (
    <Fragment>
        {/* <!-- Start::about-header --> */}
        <div className="top-header">
            <div className="container top-header-container">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="flex-grow-1">
                        <ul className="nav list-unstyled align-items-center">
                            <li><Link scroll={false} href="#!" className="nav-link ps-0">About Us</Link></li>
                            <li><Link scroll={false} href="#!" className="nav-link">Contact Us</Link></li>
                            <li><Link scroll={false} href="#!" className="nav-link">FAQ</Link></li>
                        </ul>
                    </div>
                    <div className="min-w-fit-content">
                        <ul className="nav list-unstyled align-items-center">
                            <Dropdown as="li" className="dropdown">
                                <Dropdown.Toggle variant='' href="#!" className="nav-link no-caret" data-bs-toggle="dropdown">USD <i className="ti ti-chevron-down"></i></Dropdown.Toggle>
                                <Dropdown.Menu as="ul">
                                    <li><Dropdown.Item href="#!">INR</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">MBP</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">EU</Dropdown.Item></li>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown as="li">
                                <Dropdown.Toggle  variant='' href="#!" className="nav-link no-caret" data-bs-toggle="dropdown">English <i className="ti ti-chevron-down"></i></Dropdown.Toggle>
                                <Dropdown.Menu as="ul">
                                    <li><Dropdown.Item href="#!">French</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Spanish</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Arabic</Dropdown.Item></li>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown as="li">
                                <Dropdown.Toggle  variant='' href="#!" className="nav-link no-caret main-menu__item-link pe-0" data-bs-toggle="dropdown"><i className="ti ti-map-pin me-1 fs-16 d-inline-block"></i>California, USA <i className="ti ti-chevron-down"></i></Dropdown.Toggle>
                                <Dropdown.Menu as="ul" className="dropdown-menu max-w-15rem">
                                    <li><Dropdown.Item href="#!" className="text-truncate" title="Venizula, 212, MS">Venizula, 212, MS</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!" className="text-truncate" title="Vicecity, GTX">Vicecity, GTX</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!" className="text-truncate" title="Paradox, 12, LN">Paradox, 12, LN</Dropdown.Item></li>
                                </Dropdown.Menu>
                            </Dropdown>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End::about-header --> */}

        {/* <!-- Start::ecommerce-brand-header --> */}
        <div className="ecommerce-brand-header sticky" id="header">
            <div className="container brand-header-container gap-lg-5 gap-3 flex-wrap py-lg-0 py-3">

                <div className="flex-grow-1 d-flex align-items-center gap-lg-4 gap-2 flex-wrap">
                    {/* <!-- End::header-element --> */}
                    <div className="landing-logo-container"> 
                        <div className="horizontal-logo">
                            <Link scroll={false} href="/dashboards/sales/" className="header-logo">
                                <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/desktop-logo.png`} alt="logo" className="desktop-logo"/>
                                <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/desktop-dark.png`} alt="logo" className="desktop-dark"/>
                            </Link>
                        </div>
                    </div>
                    {/* <!-- Start::header-element --> */}
                    <div className="header-element mx-lg-0 mx-2 d-lg-none d-block">
                        <Link scroll={false} onClick={() => toggleNavigation()} aria-label="Hide Sidebar" className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle" data-bs-toggle="sidebar" href="#!"><span></span></Link>
                    </div>
                    {/* <!-- End::header-element --> */}
                    <div className="allcategory-input-group flex-grow-1">
                        <Dropdown className="dropdown allcategory-addon start-0">
                            <Dropdown.Toggle variant='' href="#!" className="no-caret p-0 text-dark" data-bs-toggle="dropdown">All Categories <i className="ti ti-chevron-down ms-1"></i></Dropdown.Toggle>
                            <Dropdown.Menu>
                                <li><Link scroll={false} className="dropdown-item"  href="#!">Vegetables & Fruits</Link></li>
                                <li><Link scroll={false} className="dropdown-item"  href="#!">Egg & Meat</Link></li>
                                <li><Link scroll={false} className="dropdown-item"  href="#!">Snacks</Link></li>
                                <li><Link scroll={false} className="dropdown-item"  href="#!">Beverages</Link></li>
                                <li><Link scroll={false} className="dropdown-item"  href="#!">Household</Link></li>
                                <li><Link scroll={false} className="dropdown-item"  href="#!">Baby Care</Link></li>
                            </Dropdown.Menu>
                        </Dropdown>
                        <input type="text" className="form-control form-control-lg addon-end-input addon-start-input pe-5" placeholder="Search..."/>
                        <Link scroll={false} href="#!" className="text-muted allcategory-addon end-0"><i className="ti ti-search"></i></Link>
                    </div>
                </div>

                <div className="min-w-fit-content">
                    <ul className="nav list-unstyled align-items-center gap-3 mb-0">
                        <li>
                            <Link scroll={false} href="/ecommerce/customer/shop/" className="categories-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M54,40H202a8,8,0,0,1,7.69,5.8L224,96H32L46.34,45.8A8,8,0,0,1,54,40Z" opacity="0.2"/><path d="M96,96v16a32,32,0,0,1-64,0V96Z" opacity="0.2"/><path d="M224,96v16a32,32,0,0,1-64,0V96Z" opacity="0.2"/><polyline points="48 139.59 48 216 208 216 208 139.59" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M54,40H202a8,8,0,0,1,7.69,5.8L224,96H32L46.34,45.8A8,8,0,0,1,54,40Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M96,96v16a32,32,0,0,1-64,0V96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M160,96v16a32,32,0,0,1-64,0V96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M224,96v16a32,32,0,0,1-64,0V96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                            </Link>
                        </li>
                        <li>
                            <Link scroll={false} href="/ecommerce/customer/compareproducts/" className="categories-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="56" cy="64" r="24" opacity="0.2"/><circle cx="200" cy="192" r="24" opacity="0.2"/><path d="M200,168V110.63a16,16,0,0,0-4.69-11.32L144,48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><polyline points="144 96 144 48 192 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M56,88v57.37a16,16,0,0,0,4.69,11.32L112,208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><polyline points="112 160 112 208 64 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="56" cy="64" r="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="200" cy="192" r="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                            </Link>
                        </li>
                        <li>
                            <Link scroll={false} href="#viewOffCanvas3" className="categories-icon" data-bs-toggle="offcanvas" onClick={handleShow1}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104Z" opacity="0.2"/><path d="M96,192a32,32,0,0,0,64,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                            </Link>
                        </li>
                        <li>
                            <Dropdown className="main-header-dropdown d-flex">
                                <Dropdown.Toggle variant='' href="#!" className="categories-icon  p-0 no-caret" data-bs-toggle="dropdown">
                                    <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/faces/11.jpg`} alt="img" className="min-w-fit-content rounded-circle p-0"/></Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-width-1">
                                    <li><Dropdown.Item href="/ecommerce/customer/customer/"><i className="ti ti-user fs-16 me-2 d-inline-block"></i>My Account</Dropdown.Item></li>
                                    <li><Dropdown.Item href="/ecommerce/customer/customer/"><i className="ti ti-box fs-16 me-2 d-inline-block"></i>My Orders</Dropdown.Item></li>
                                    <li><Dropdown.Item href="/ecommerce/customer/wishlist/"><i className="ti ti-heart fs-16 me-2 d-inline-block"></i>Wishlist</Dropdown.Item></li>
                                    <li><Dropdown.Item href="/ecommerce/customer/ordertracking/"><i className="ti ti-route fs-16 me-2 d-inline-block"></i>Order Tracking</Dropdown.Item></li>
                                    <li><Dropdown.Item href="/ecommerce/customer/coupons/"><i className="ti ti-discount fs-16 me-2 d-inline-block"></i>Coupons</Dropdown.Item></li>
                                    <li><Dropdown.Item href="/ecommerce/customer/settings/"><i className="ti ti-settings fs-16 me-2 d-inline-block"></i>Settings</Dropdown.Item></li>
                                    <li><Dropdown.Item href="/authentication/signin/signin-cover/"><i className="ti ti-logout fs-16 me-2 d-inline-block"></i>Sign Out</Dropdown.Item></li>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Link scroll={false} href="#viewOffCanvas2" className="categories-icon" data-bs-toggle="offcanvas" onClick={handleShow2}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M70.55,144H196.1a16,16,0,0,0,15.74-13.14L224,64H56Z" opacity="0.2"/><path d="M188,184H91.17a16,16,0,0,1-15.74-13.14L48.73,24H24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="92" cy="204" r="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="188" cy="204" r="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M70.55,144H196.1a16,16,0,0,0,15.74-13.14L224,64H56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                            </Link>
                        </li>
                        <li>
                                <Link scroll={false} onClick={() => Switchericon()} href="#!" className="categories-icon switcher-icon" data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M207.86,123.18l16.78-21a99.14,99.14,0,0,0-10.07-24.29l-26.7-3a81,81,0,0,0-6.81-6.81l-3-26.71a99.43,99.43,0,0,0-24.3-10l-21,16.77a81.59,81.59,0,0,0-9.64,0l-21-16.78A99.14,99.14,0,0,0,77.91,41.43l-3,26.7a81,81,0,0,0-6.81,6.81l-26.71,3a99.43,99.43,0,0,0-10,24.3l16.77,21a81.59,81.59,0,0,0,0,9.64l-16.78,21a99.14,99.14,0,0,0,10.07,24.29l26.7,3a81,81,0,0,0,6.81,6.81l3,26.71a99.43,99.43,0,0,0,24.3,10l21-16.77a81.59,81.59,0,0,0,9.64,0l21,16.78a99.14,99.14,0,0,0,24.29-10.07l3-26.7a81,81,0,0,0,6.81-6.81l26.71-3a99.43,99.43,0,0,0,10-24.3l-16.77-21A81.59,81.59,0,0,0,207.86,123.18ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2"/><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M41.43,178.09A99.14,99.14,0,0,1,31.36,153.8l16.78-21a81.59,81.59,0,0,1,0-9.64l-16.77-21a99.43,99.43,0,0,1,10.05-24.3l26.71-3a81,81,0,0,1,6.81-6.81l3-26.7A99.14,99.14,0,0,1,102.2,31.36l21,16.78a81.59,81.59,0,0,1,9.64,0l21-16.77a99.43,99.43,0,0,1,24.3,10.05l3,26.71a81,81,0,0,1,6.81,6.81l26.7,3a99.14,99.14,0,0,1,10.07,24.29l-16.78,21a81.59,81.59,0,0,1,0,9.64l16.77,21a99.43,99.43,0,0,1-10,24.3l-26.71,3a81,81,0,0,1-6.81,6.81l-3,26.7a99.14,99.14,0,0,1-24.29,10.07l-21-16.78a81.59,81.59,0,0,1-9.64,0l-21,16.77a99.43,99.43,0,0,1-24.3-10l-3-26.71a81,81,0,0,1-6.81-6.81Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                                </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
        {/* <!-- End::ecommerce-brand-header --> */}


        {/* <!-- Start::Notifications-offcanvas --> */}
        <Offcanvas placement="end" show={show1} onHide={handleClose1} className="offcanvas-end" tabIndex={-1} id="viewOffCanvas3">
            <Offcanvas.Body className="offcanvas-custom-body p-0">
                <div className="p-3 border-bottom d-flex align-items-center justify-content-between">
                    <h5 className="mb-0 fw-semibold">Notifications</h5>
                    <button className="btn btn-close" data-bs-dismiss="offcanvas" onClick={handleClose1}></button>
                </div>
                <ListGroup className="list-group-flush mb-0 scroll-items-container">
                    <ListGroup.Item>
                        <div className="d-flex align-items-start gap-2">
                            <div className="min-w-fit-content">
                                <span className="notify-icon rounded-indicator bg-success-transparent"><i className="ti ti-truck-delivery"></i></span>
                            </div>
                            <div className="flex-grow-1">
                                <div className="d-flex align-items-start justify-content-between mb-1">
                                    <p className="mb-0 fw-medium">Your order has been shipped</p>
                                    <span className="fs-12">5 min</span>
                                </div>
                                <p className="mb-0 text-muted">Your order <Link scroll={false} href="/ecommerce/customer/customer/" className="text-primary fw-medium">#1289456</Link> has been shipped.</p>
                            </div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="d-flex align-items-start gap-2">
                            <div className="min-w-fit-content">
                                <span className="notify-icon bg-warning-transparent rounded-indicator"><i className="ti ti-phone-off"></i></span>
                            </div>
                            <div className="flex-grow-1">
                                <div className="d-flex align-items-start justify-content-between mb-1">
                                    <p className="mb-0 fw-medium">Delivery partner tried to reach you</p>
                                    <span className="fs-12">1 hr</span>
                                </div>
                                <p className="mb-0 text-muted">Your order <Link scroll={false} href="/ecommerce/customer/customer/" className="text-primary fw-medium">#1289456</Link> has been delivered and delivery partner waiting at your doorstep.</p>
                            </div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="d-flex align-items-start gap-2">
                            <div className="min-w-fit-content">
                                <span className="notify-icon rounded-indicator bg-danger-transparent"><i className="ti ti-package-off"></i></span>
                            </div>
                            <div className="flex-grow-1">
                                <div className="d-flex align-items-start justify-content-between mb-1">
                                    <p className="mb-0 fw-medium">Your order has been cancelled</p>
                                    <span className="fs-12">3 hr</span>
                                </div>
                                <p className="mb-0 text-muted">Your order <Link scroll={false} href="/ecommerce/customer/customer/" className="text-primary fw-medium">#1289456</Link> has been cancelled successfully.</p>
                            </div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="d-flex align-items-start gap-2">
                            <div className="min-w-fit-content">
                                <span className="notify-icon bg-secondary-transparent rounded-indicator"><i className="ti ti-discount-2"></i></span>
                            </div>
                            <div className="flex-grow-1">
                                <div className="d-flex align-items-start justify-content-between mb-1">
                                    <p className="mb-0 fw-medium">Discount on selected produts!</p>
                                    <span className="fs-12">1 d</span>
                                </div>
                                <p className="mb-0 text-muted">Shop now and get min 50% Off on selected products. <Link scroll={false} href="#!" className="text-primary fw-medium">Click Here</Link>.</p>
                            </div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="d-flex align-items-start gap-2">
                            <div className="min-w-fit-content">
                                <span className="notify-icon bg-info-transparent"><i className="ti ti-package"></i></span>
                            </div>
                            <div className="flex-grow-1">
                                <div className="d-flex align-items-start justify-content-between mb-1">
                                    <p className="mb-0 fw-medium">New products added</p>
                                    <span className="fs-12 text-muted">1 d</span>
                                </div>
                                <p className="mb-0 text-muted">Shopping list has been updated by new products. <Link scroll={false} href="#!" className="text-primary fw-medium">Click Here</Link> to see now.</p>
                            </div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="d-flex align-items-start gap-2">
                            <div className="min-w-fit-content">
                                <span className="notify-icon bg-success-transparent"><i className="ti ti-check"></i></span>
                            </div>
                            <div className="flex-grow-1">
                                <div className="d-flex align-items-start justify-content-between mb-1">
                                    <p className="mb-0 fw-medium">Order Placed successfully!</p>
                                    <span className="fs-12 text-muted">2 d</span>
                                </div>
                                <p className="mb-0 text-muted">Order <Link scroll={false} href="/ecommerce/customer/customer/" className="text-primary fw-medium">#12567845</Link> has been placed succefully.</p>
                            </div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="d-flex align-items-start gap-2">
                            <div className="min-w-fit-content">
                                <span className="notify-icon bg-pink-transparent"><i className="ti ti-ticket"></i></span>
                            </div>
                            <div className="flex-grow-1">
                                <div className="d-flex align-items-start justify-content-between mb-1">
                                    <p className="mb-0 fw-medium">Coupons added!</p>
                                    <span className="fs-12 text-muted">5 d</span>
                                </div>
                                <p className="mb-0 text-muted">You have won 2 new coupons. <Link scroll={false} href="/ecommerce/customer/customer/" className="text-primary fw-medium">Check Now</Link>.</p>
                            </div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="d-flex align-items-start gap-2">
                            <div className="min-w-fit-content">
                                <span className="notify-icon bg-secondary-transparent"><i className="ti ti-discount-2"></i></span>
                            </div>
                            <div className="flex-grow-1">
                                <div className="d-flex align-items-start justify-content-between mb-1">
                                    <p className="mb-0 fw-medium">Discount on selected products!</p>
                                    <span className="fs-12 text-muted">1 W</span>
                                </div>
                                <p className="mb-0 text-muted">Shop now and get min 50% Off on selected products. <Link scroll={false} href="#!" className="text-primary fw-medium">Click Here</Link>.</p>
                            </div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="d-flex align-items-start gap-2">
                            <div className="min-w-fit-content">
                                <span className="notify-icon bg-warning-transparent"><i className="ti ti-phone-off"></i></span>
                            </div>
                            <div className="flex-grow-1">
                                <div className="d-flex align-items-start justify-content-between mb-1">
                                    <p className="mb-0 fw-medium">Delivery partner tried to reach you</p>
                                    <span className="fs-12 text-muted">1 W</span>
                                </div>
                                <p className="mb-0 text-muted">Your order <Link scroll={false} href="/ecommerce/customer/customer/" className="text-primary fw-medium">#1289456</Link> has been delivered and delivery partner waiting at your doorstep.</p>
                            </div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="d-flex align-items-start gap-2">
                            <div className="min-w-fit-content">
                                <span className="notify-icon bg-success-transparent"><i className="ti ti-truck-delivery"></i></span>
                            </div>
                            <div className="flex-grow-1">
                                <div className="d-flex align-items-start justify-content-between mb-1">
                                    <p className="mb-0 fw-medium">Your order has been shipped</p>
                                    <span className="fs-12 text-muted">1 W</span>
                                </div>
                                <p className="mb-0 text-muted">Your order <Link scroll={false} href="/ecommerce/customer/customer/" className="text-primary fw-medium">#1289456</Link> has been shipped.</p>
                            </div>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
                <div className="p-3 d-flex align-items-center gap-2">
                    <Link scroll={false} href="#!" className="flex-grow-1 btn btn-outline-light"><i className="ti ti-x me-1"></i> Clear all</Link>
                    <Link scroll={false} href="#!" className="flex-grow-1 btn btn-primary"><i className="ti ti-checks me-1"></i> Mark all as read</Link>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
        {/* <!-- End::Notifications-offcanvas --> */}

        {/* <!-- Start::Cart-offcanvs --> */}
        <Offcanvas placement="end" show={show2} onHide={handleClose2} className="offcanvas-2 offcanvas-end" tabIndex={-1} id="viewOffCanvas2">
            <Offcanvas.Body className="offcanvas-custom-body p-0">
                <div className="p-3 border-bottom d-flex align-items-center justify-content-between">
                    <h5 className="mb-0 fw-semibold">Cart</h5>
                    <button className="btn btn-close" data-bs-dismiss="offcanvas" onClick={handleClose2}></button>
                </div>
                <div className="p-3 border-bottom d-flex align-items-center justify-content-between fw-medium">
                    <div className="flex-grow-1 d-flex align-items-center gap-2 overflow-hidden">
                        <span className="min-w-fit-content text-muted">Deliver to :</span>
                        <div className="d-flex align-items-center gap-2 flex-grow-1 overflow-hidden">
                            <div className="lh-1">
                                <span className="avatar avatar-xs avatar-rounded"><img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/faces/1.jpg`} alt="img"/></span>
                            </div>
                            <div>
                                <span className="flex-grow-1 text-truncate" title="Rubt Disousa">Ruby D</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-end ms-3">
                        <Dropdown>
                            <Link scroll={false} href="#!" data-bs-toggle="dropdown" className="w-50 text-truncate"><i className="ti ti-map-pin me-1 fs-16 d-inline-block"></i>California, USA <i className="ti ti-chevron-down"></i></Link>
                            <Dropdown.Menu as="ul" className="dropdown-menu max-w-12rem">
                                <li><Dropdown.Item href="#!" className="dropdown-item text-truncate" title="Venizula, 212, MS">Venizula, 212, MS</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!" className="dropdown-item text-truncate" title="Vicecity, GTX">Vicecity, GTX</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!" className="dropdown-item text-truncate" title="Paradox, 12, LN">Paradox, 12, LN</Dropdown.Item></li>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="scroll-items-container">
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                            <div className="d-flex align-items-start gap-2">
                                <div className="rounded">
                                    <Link scroll={false} href="/ecommerce/customer/productdetails/" className="avatar avatar-xxl"><img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/ecommerce/jpg/1.jpg`} alt="img" className="w-100 img-fluid"/></Link>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="d-flex align-items-start mb-2">
                                        <p className="fs-14 fw-semibold mb-0 flex-grow-1 text-truncate"><Link scroll={false} href="/ecommerce/customer/productdetails/">Flower Pot</Link></p>
                                        <div className="min-w-fit-content">
                                            <Link scroll={false} href="#!" className="op-7"><i className="ti ti-x fs-16"></i></Link>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 text-muted ">
                                        <p className="mb-0">Color: </p>
                                        <Dropdown>
                                            <Dropdown.Toggle variant='' href="#!" data-bs-toggle="dropdown" className="text-primary no-caret">Yellow<i className="ti ti-chevron-down"></i></Dropdown.Toggle>
                                            <Dropdown.Menu as="ul">
                                                <li><Dropdown.Item href="#!">Yellow</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Black</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Blue</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="flex-grow-1 w-75 d-flex align-items-end gap-1 overflow-hidden">
                                            <div className=" text-muted"><span className="me-1">1</span>&times;</div>
                                            <div className="flex-grow-1 h6 fs-14 mb-0 overflow-hidden text-truncate">$12.00</div>
                                        </div>
                                        <div className="counter-group-1 justify-content-end" role="group">
                                            <button type="button" className="counter-btn btn-decrement min-w-fit-content"><i className="ti ti-minus"></i></button>
                                            <input type="text" className="counter-input" value="1" readOnly />
                                            <button type="button" className="counter-btn btn-increment min-w-fit-content"><i className="ti ti-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-flex align-items-start gap-2">
                                <div className="rounded">
                                    <Link scroll={false} href="/ecommerce/customer/productdetails/" className="avatar avatar-xxl"><img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/ecommerce/jpg/4.jpg`} alt="img" className="w-100 img-fluid"/></Link>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="d-flex align-items-start mb-2">
                                        <p className="fs-14 fw-semibold mb-0 flex-grow-1 text-truncate"><Link scroll={false} href="/ecommerce/customer/productdetails/">Kiwi Fruit</Link></p>
                                        <div className="min-w-fit-content ms-3">
                                            <Link scroll={false} href="#!" className="op-7"><i className="ti ti-x fs-16"></i></Link>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 text-muted ">
                                        <p className="mb-0">Color: </p>
                                        <Dropdown>
                                            <Dropdown.Toggle variant='' href="#!" data-bs-toggle="dropdown" className="text-primary no-caret">Pink<i className="ti ti-chevron-down"></i></Dropdown.Toggle>
                                            <Dropdown.Menu as="ul">
                                                <li><Dropdown.Item href="#!">Yellow</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Black</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Blue</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="flex-grow-1 w-75 d-flex align-items-end gap-1 overflow-hidden">
                                            <div className=" text-muted"><span className="me-1">2</span>&times;</div>
                                            <div className="flex-grow-1 h6 fs-14 mb-0 overflow-hidden text-truncate">$25.05</div>
                                        </div>
                                        <div className="counter-group-1 justify-content-end" role="group">
                                            <button type="button" className="counter-btn btn-decrement min-w-fit-content"><i className="ti ti-minus"></i></button>
                                            <input type="text" className="counter-input" value="2" readOnly />
                                            <button type="button" className="counter-btn btn-increment min-w-fit-content"><i className="ti ti-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-flex align-items-start gap-2">
                                <div className="rounded">
                                    <Link scroll={false} href="/ecommerce/customer/productdetails/" className="avatar avatar-xxl"><img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/ecommerce/jpg/3.jpg`} alt="img" className="w-100 img-fluid"/></Link>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="d-flex align-items-start mb-2">
                                        <p className="fs-14 fw-semibold mb-0 flex-grow-1 text-truncate"><Link scroll={false} href="/ecommerce/customer/productdetails/">Camera</Link></p>
                                        <div className="min-w-fit-content ms-3">
                                            <Link scroll={false} href="#!" className="op-7"><i className="ti ti-x fs-16"></i></Link>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 text-muted ">
                                        <p className="mb-0">Color: </p>
                                        <Dropdown>
                                            <Dropdown.Toggle variant='' href="#!" data-bs-toggle="dropdown" className="text-primary no-caret">Blue<i className="ti ti-chevron-down"></i></Dropdown.Toggle>
                                            <Dropdown.Menu as="ul">
                                                <li><Dropdown.Item href="#!">Yellow</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Black</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Blue</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="flex-grow-1 w-75 d-flex align-items-end gap-1 overflow-hidden">
                                            <div className=" text-muted"><span className="me-1">1</span>&times;</div>
                                            <div className="flex-grow-1 h6 fs-14 mb-0 overflow-hidden text-truncate">$49.00</div>
                                        </div>
                                        <div className="counter-group-1 justify-content-end" role="group">
                                            <button type="button" className="counter-btn btn-decrement min-w-fit-content"><i className="ti ti-minus"></i></button>
                                            <input type="text" className="counter-input" value="1" readOnly />
                                            <button type="button" className="counter-btn btn-increment min-w-fit-content"><i className="ti ti-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-flex align-items-start gap-2">
                                <div className="rounded">
                                    <Link scroll={false} href="/ecommerce/customer/productdetails/" className="avatar avatar-xxl"><img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/ecommerce/jpg/5.jpg`} alt="img" className="w-100 img-fluid"/></Link>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="d-flex align-items-start mb-2">
                                        <p className="fs-14 fw-semibold mb-0 flex-grow-1 text-truncate"><Link scroll={false} href="/ecommerce/customer/productdetails/">Donut</Link></p>
                                        <div className="min-w-fit-content ms-3">
                                            <Link scroll={false} href="#!" className="op-7"><i className="ti ti-x fs-16"></i></Link>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 text-muted ">
                                        <p className="mb-0">Size: </p>
                                        <Dropdown>
                                            <Dropdown.Toggle variant='' href="#!" data-bs-toggle="dropdown" className="text-primary no-caret">10<i className="ti ti-chevron-down"></i></Dropdown.Toggle>
                                            <Dropdown.Menu as="ul">
                                                <li><Dropdown.Item href="#!">11</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">10</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 text-muted ">
                                        <p className="mb-0">Color: </p>
                                        <Dropdown>
                                            <Dropdown.Toggle variant='' href="#!" data-bs-toggle="dropdown" className="text-primary no-caret">Blue<i className="ti ti-chevron-down"></i></Dropdown.Toggle>
                                            <Dropdown.Menu as="ul">
                                                <li><Dropdown.Item href="#!">Yellow</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Black</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Blue</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="flex-grow-1 w-75 d-flex align-items-end gap-1 overflow-hidden">
                                            <div className=" text-muted"><span className="me-1">1</span>&times;</div>
                                            <div className="flex-grow-1 h6 fs-14 mb-0 overflow-hidden text-truncate">$42.00</div>
                                        </div>
                                        <div className="counter-group-1 justify-content-end" role="group">
                                            <button type="button" className="counter-btn btn-decrement min-w-fit-content"><i className="ti ti-minus"></i></button>
                                            <input type="text" className="counter-input" value="1" readOnly />
                                            <button type="button" className="counter-btn btn-increment min-w-fit-content"><i className="ti ti-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-flex align-items-start gap-2">
                                <div className="rounded">
                                    <Link scroll={false} href="/ecommerce/customer/productdetails/" className="avatar avatar-xxl"><img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/ecommerce/jpg/2.jpg`} alt="img" className="w-100 img-fluid"/></Link>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="d-flex align-items-start mb-2">
                                        <p className="fs-14 fw-semibold mb-0 flex-grow-1 text-truncate"><Link scroll={false} href="/ecommerce/customer/productdetails/">Head Phones</Link></p>
                                        <div className="min-w-fit-content ms-3">
                                            <Link scroll={false} href="#!" className="op-7"><i className="ti ti-x fs-16"></i></Link>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 text-muted ">
                                        <p className="mb-0">Color: </p>
                                        <Dropdown>
                                            <Dropdown.Toggle variant='' href="#!" data-bs-toggle="dropdown" className="text-primary no-caret">Pink<i className="ti ti-chevron-down"></i></Dropdown.Toggle>
                                            <Dropdown.Menu as="ul">
                                                <li><Dropdown.Item href="#!">Yellow</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Black</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Blue</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="flex-grow-1 w-75 d-flex align-items-end gap-1 overflow-hidden">
                                            <div className=" text-muted"><span className="me-1">2</span>&times;</div>
                                            <div className="flex-grow-1 h6 fs-14 mb-0 overflow-hidden text-truncate">$39.00</div>
                                        </div>
                                        <div className="counter-group-1 justify-content-end" role="group">
                                            <button type="button" className="counter-btn btn-decrement min-w-fit-content"><i className="ti ti-minus"></i></button>
                                            <input type="text" className="counter-input" value="2" readOnly />
                                            <button type="button" className="counter-btn btn-increment min-w-fit-content"><i className="ti ti-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-flex align-items-start gap-2">
                                <div className="rounded">
                                    <Link scroll={false} href="/ecommerce/customer/productdetails/" className="avatar avatar-xxl"><img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/ecommerce/jpg/6.jpg`} alt="img" className="w-100 img-fluid"/></Link>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="d-flex align-items-start mb-2">
                                        <p className="fs-14 fw-semibold mb-0 flex-grow-1 text-truncate"><Link scroll={false} href="/ecommerce/customer/productdetails/">Cactus Plant</Link></p>
                                        <div className="min-w-fit-content ms-3">
                                            <Link scroll={false} href="#!" className="op-7"><i className="ti ti-x fs-16"></i></Link>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 text-muted ">
                                        <p className="mb-0">Color: </p>
                                        <Dropdown>
                                            <Dropdown.Toggle variant='' href="#!" data-bs-toggle="dropdown" className="text-primary no-caret">Yellow<i className="ti ti-chevron-down"></i></Dropdown.Toggle>
                                            <Dropdown.Menu as="ul">
                                                <li><Dropdown.Item href="#!">Yellow</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Black</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Blue</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="flex-grow-1 w-75 d-flex align-items-end gap-1 overflow-hidden">
                                            <div className=" text-muted"><span className="me-1">3</span>&times;</div>
                                            <div className="flex-grow-1 h6 fs-14 mb-0 overflow-hidden text-truncate">$25.00</div>
                                        </div>
                                        <div className="counter-group-1 justify-content-end" role="group">
                                            <button type="button" className="counter-btn btn-decrement min-w-fit-content"><i className="ti ti-minus"></i></button>
                                            <input type="text" className="counter-input" value="3" readOnly />
                                            <button type="button" className="counter-btn btn-increment min-w-fit-content"><i className="ti ti-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-flex align-items-start gap-2">
                                <div className="rounded">
                                    <Link scroll={false} href="/ecommerce/customer/productdetails/" className="avatar avatar-xxl"><img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/ecommerce/jpg/7.jpg`} alt="img" className="w-100 img-fluid"/></Link>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="d-flex align-items-start mb-2">
                                        <p className="fs-14 fw-semibold mb-0 flex-grow-1 text-truncate"><Link scroll={false} href="/ecommerce/customer/productdetails/">Wooden Chair</Link></p>
                                        <div className="min-w-fit-content ms-3">
                                            <Link scroll={false} href="#!" className="op-7"><i className="ti ti-x fs-16"></i></Link>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 text-muted ">
                                        <p className="mb-0">Color: </p>
                                        <Dropdown>
                                            <Dropdown.Toggle variant='' href="#!" data-bs-toggle="dropdown" className="text-primary no-caret">Blue<i className="ti ti-chevron-down"></i></Dropdown.Toggle>
                                            <Dropdown.Menu as="ul">
                                                <li><Dropdown.Item href="#!">Yellow</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Black</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Blue</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="flex-grow-1 w-75 d-flex align-items-end gap-1 overflow-hidden">
                                            <div className=" text-muted"><span className="me-1">5</span>&times;</div>
                                            <div className="flex-grow-1 h6 fs-14 mb-0 overflow-hidden text-truncate">$19.00</div>
                                        </div>
                                        <div className="counter-group-1 justify-content-end" role="group">
                                            <button type="button" className="counter-btn btn-decrement min-w-fit-content"><i className="ti ti-minus"></i></button>
                                            <input type="text" className="counter-input" value="5" readOnly />
                                            <button type="button" className="counter-btn btn-increment min-w-fit-content"><i className="ti ti-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-flex align-items-start gap-2">
                                <div className="rounded">
                                    <Link scroll={false} href="/ecommerce/customer/productdetails/" className="avatar avatar-xxl"><img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/ecommerce/jpg/8.jpg`} alt="img" className="w-100 img-fluid"/></Link>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="d-flex align-items-start mb-2">
                                        <p className="fs-14 fw-semibold mb-0 flex-grow-1 text-truncate"><Link scroll={false} href="/ecommerce/customer/productdetails/">Showcase Pot</Link></p>
                                        <div className="min-w-fit-content ms-3">
                                            <Link scroll={false} href="#!" className="op-7"><i className="ti ti-x fs-16"></i></Link>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 text-muted ">
                                        <p className="mb-0">Color: </p>
                                        <Dropdown>
                                            <Dropdown.Toggle variant='' href="#!" data-bs-toggle="dropdown" className="text-primary no-caret">Blue<i className="ti ti-chevron-down"></i></Dropdown.Toggle>
                                            <Dropdown.Menu as="ul">
                                                <li><Dropdown.Item href="#!">Yellow</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Black</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Blue</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="flex-grow-1 w-75 d-flex align-items-end gap-1 overflow-hidden">
                                            <div className=" text-muted"><span className="me-1">4</span>&times;</div>
                                            <div className="flex-grow-1 h6 fs-14 mb-0 overflow-hidden text-truncate">$55.00</div>
                                        </div>
                                        <div className="counter-group-1 justify-content-end" role="group">
                                            <button type="button" className="counter-btn btn-decrement min-w-fit-content"><i className="ti ti-minus"></i></button>
                                            <input type="text" className="counter-input" value="4" readOnly/>
                                            <button type="button" className="counter-btn btn-increment min-w-fit-content"><i className="ti ti-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                <div className="p-3 border-bottom  d-flex align-items-center justify-content-between fw-medium">
                    <div className="min-w-fit-content">
                        <span className="text-muted">Total Items:</span>
                        <span className="ms-2">8</span>
                    </div>
                    <div className="min-w-fit-content">
                        <Link scroll={false} href="#!" className="text-primary">Shop More <i className="ti ti-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="p-3 border-bottom border-bottom-dashed">
                    <p className="mb-2 text-muted">Have a coupon code? Enter below</p>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Coupon code" />
                        <Link scroll={false} href="#!" className="btn btn-primary btn-wave">Check</Link>
                    </div>
                    <div className="d-flex align-items-center justify-content-between fw-semibold mb-2">
                        <span>Sub total</span>
                        <span>$624</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2  text-muted">
                        <span>Delivery Charges:</span>
                        <span>+$5.03</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between  text-muted">
                        <span>Discount:</span>
                        <span>-$10.08</span>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between text-primary px-3 py-2 fw-semibold fs-18">
                    <span>Total:</span>
                    <span>$773.00</span>
                </div>
                <div className="p-3 border-top">
                    <div className="d-flex align-items-center gap-2">
                        <Link scroll={false} href="/ecommerce/customer/cart/" className="flex-grow-1 btn btn-light">View Cart <i className="ti ti-shopping-cart ms-1"></i></Link>
                        <Link scroll={false} href="/ecommerce/customer/checkout/" className="flex-grow-1 btn btn-primary">Checkout <i className="ti ti-arrow-right ms-1"></i></Link>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
        {/* <!-- End::Cart-offcanvs --> */}
    </Fragment>
  )
}
const mapStateToProps = (state: any) => ({
    local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Ecommerceheader);

// export default Ecommerceheader