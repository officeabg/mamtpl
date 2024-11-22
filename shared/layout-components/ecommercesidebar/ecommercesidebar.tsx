"use client"
import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { ThemeChanger } from "../../redux/action";
import Link from "next/link";
import store from "@/shared/redux/store";
import { usePathname, useRouter } from "next/navigation";
import { Ecommercemenuitems } from "./sidebardata";
import Ecommercemenuloop from "./ecommercemenuloop";
import { Button, Offcanvas } from "react-bootstrap";
import nextConfig from "@/next.config.mjs";

const Ecommercesidebar = ({ local_varaiable, ThemeChanger }: any) => {
	const [menuitems, setMenuitems] = useState(Ecommercemenuitems);

	let {basePath} :any= nextConfig;
	
	function closeMenu() {
		const closeMenudata = (items: any) => {
			items?.forEach((item: any) => {
				item.active = false;
				closeMenudata(item.children);
			});
		};
		closeMenudata(Ecommercemenuitems);
		setMenuitems((arr: any) => [...arr]);
	}

	useEffect(() => {

		window.addEventListener('resize', menuResizeFn);
		window.addEventListener('resize', checkHoriMenu);
		const mainContent = document.querySelector(".landing-page-wrapper");
		if (window.innerWidth <= 992) {
			if (mainContent) {
				const theme = store.getState();
				ThemeChanger({ ...theme, toggled: "close" });
			}
			else if (document.documentElement.getAttribute('data-nav-layout') == 'horizontal') {
				closeMenu();
			}
		}
		// mainContent!.addEventListener('click', menuClose);
		return () => {
			window.removeEventListener("resize", menuResizeFn);
			window.removeEventListener('resize', checkHoriMenu);
		};
	}, []);

	const router = useRouter();
	const pathname = usePathname()

	function menuClose() {
		;
		const theme = store.getState();
		if (window.innerWidth <= 992) {
			ThemeChanger({ ...theme, toggled: "close" });
		}
		const overlayElement = document.querySelector("#responsive-overlay") as HTMLElement | null;
		if (overlayElement) {
			overlayElement.classList.remove("active");
		}
		if (theme.dataNavLayout == "horizontal" || theme.dataNavStyle == "menu-click" || theme.dataNavStyle == "icon-click") {
			closeMenu();
		}
	}

	const WindowPreSize = typeof window !== 'undefined' ? [window.innerWidth] : [];

	function menuResizeFn() {

		if (typeof window === 'undefined') {
			// Handle the case where window is not available (server-side rendering)
			return;
		}

		WindowPreSize.push(window.innerWidth);
		if (WindowPreSize.length > 2) { WindowPreSize.shift() }

		const theme = store.getState();
		const currentWidth = WindowPreSize[WindowPreSize.length - 1];
		const prevWidth = WindowPreSize[WindowPreSize.length - 2];


		if (WindowPreSize.length > 1) {
			if (currentWidth < 992 && prevWidth >= 992) {
				// less than 992;
				ThemeChanger({ ...theme, toggled: "close" });
			}

			if (currentWidth >= 992 && prevWidth < 992) {
				// greater than 992
				ThemeChanger({ ...theme, toggled: theme.dataVerticalStyle === "doublemenu" ? "double-menu-open" : "" });

			}
		}
	}

	const checkHoriMenu = () => {
		const menuNav = document.querySelector(".main-menu") as HTMLElement;
		const mainContainer1 = document.querySelector(".main-sidebar") as HTMLElement;

		const marginLeftValue = Math.ceil(
			Number(window.getComputedStyle(menuNav).marginLeft.split("px")[0])
		);
		const marginRightValue = Math.ceil(
			Number(window.getComputedStyle(menuNav).marginRight.split("px")[0])
		);
		const check = menuNav.scrollWidth - mainContainer1.offsetWidth;

		// Show/Hide the arrows
		if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
		} else {
			menuNav.style.marginLeft = "0px";
			menuNav.style.marginRight = "0px";
			menuNav.style.marginInlineStart = "0px";
		}

		if (!(document.querySelector("html")?.getAttribute("dir") === "rtl")) {
			// LTR check the width and adjust the menu in screen
			if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
				if (Math.abs(check) < Math.abs(marginLeftValue)) {
					menuNav.style.marginLeft = -check + "px";
				}
			}

		} else {
			// RTL check the width and adjust the menu in screen
			if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
				if (Math.abs(check) < Math.abs(marginRightValue)) {
					menuNav.style.marginRight = -check + "px";
				}
			}

		}

	};

	const Topup = () => {
		if (typeof window !== 'undefined') {
			if (window.scrollY > 30 && document.querySelector(".app-sidebar")) {
				const Scolls = document.querySelectorAll(".app-sidebar");
				Scolls.forEach((e) => {
					e.classList.add("sticky-pin");
				});
			} else {
				const Scolls = document.querySelectorAll(".app-sidebar");
				Scolls.forEach((e) => {
					e.classList.remove("sticky-pin");
				});
			}
		}
	};
	if (typeof window !== 'undefined') {
		window.addEventListener("scroll", Topup);
	}


	const level = 0;
	let hasParent = false;
	let hasParentLevel = 0;

	function setSubmenu(event: any, targetObject: any, Ecommercemenuitems = menuitems) {
		const theme = store.getState();
		if (!event?.ctrlKey) {
			for (const item of Ecommercemenuitems) {
				if (item === targetObject) {
					item.active = true;
					item.selected = true;
					setMenuAncestorsActive(item);
				} else if (!item.active && !item.selected) {
					item.active = false; // Set active to false for items not matching the target
					item.selected = false; // Set active to false for items not matching the target
				} else {
					removeActiveOtherMenus(item);
				}
				if (item.children && item.children.length > 0) {
					setSubmenu(event, targetObject, item.children);
				}
			}
		}
		setMenuitems((arr: any) => [...arr]);
	}

	function getParentObject(obj: any, childObject: any) {
		for (const key in obj) {
			if (obj.hasOwnProperty(key)) {
				if (typeof obj[key] === 'object' && JSON.stringify(obj[key]) === JSON.stringify(childObject)) {
					return obj; // Return the parent object
				}
				if (typeof obj[key] === 'object') {
					const parentObject: any = getParentObject(obj[key], childObject);
					if (parentObject !== null) {
						return parentObject;
					}
				}
			}
		}
		return null; // Object not found
	}

	function setMenuAncestorsActive(targetObject: any) {
		const parent = getParentObject(menuitems, targetObject);
		const theme = store.getState();
		if (parent) {
			if (hasParentLevel > 2) {
				hasParent = true;
			}
			parent.active = true;
			parent.selected = true;
			hasParentLevel += 1;
			setMenuAncestorsActive(parent);
		}
		else if (!hasParent) {
			if (theme.dataVerticalStyle == 'doublemenu') {
				ThemeChanger({ ...theme, toggled: "double-menu-close" });
			}
		}
	}

	function removeActiveOtherMenus(item: any) {
		if (item) {
			if (Array.isArray(item)) {
				for (const val of item) {
					val.active = false;
					val.selected = false;
				}
			}
			item.active = false;
			item.selected = false;

			if (item.children && item.children.length > 0) {
				removeActiveOtherMenus(item.children);
			}
		}
		else {

		}
	}

	function setMenuUsingUrl(currentPath: any) {
		hasParent = false;
		hasParentLevel = 1;
		// Check current url and trigger the setSidemenu method to active the menu.
		const setSubmenuRecursively = (items: any) => {

			items?.forEach((item: any) => {
				if (item.path == '') { }
				else if (item.path === currentPath) {
					setSubmenu(null, item);
				}
				setSubmenuRecursively(item.children);
			});
		};
		setSubmenuRecursively(Ecommercemenuitems);
	}
	const [previousUrl, setPreviousUrl] = useState("/");

	useEffect(() => {

		// Select the target element
		const targetElement = document.documentElement;

		// Create a MutationObserver instance
		const observer = new MutationObserver(handleAttributeChange);

		// Configure the observer to watch for attribute changes
		const config = { attributes: true };

		// Start observing the target element
		observer.observe(targetElement, config);
		let currentPath = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
		if (currentPath !== previousUrl) {
			setMenuUsingUrl(currentPath);
			setPreviousUrl(currentPath);
		}
	}, [pathname]);

	function toggleSidemenu(event: any, targetObject: any, Ecommercemenuitems = menuitems) {
		const theme = store.getState();
		let element = event.target;
		if ((theme.dataNavStyle != "icon-hover" && theme.dataNavStyle != "menu-hover") || (window.innerWidth < 992) || (theme.dataNavLayout != "horizontal") && (theme.toggled != "icon-hover-closed" && theme.toggled != "menu-hover-closed")) {
			// {
			for (const item of Ecommercemenuitems) {
				if (item === targetObject) {
					if (theme.dataVerticalStyle == 'doublemenu' && item.active) { return; }
					item.active = !item.active;

					if (item.active) {
						closeOtherMenus(Ecommercemenuitems, item);
					} else {
						if (theme.dataVerticalStyle == 'doublemenu') {
							ThemeChanger({ ...theme, toggled: "double-menu-close" });
						}
					}
					setAncestorsActive(Ecommercemenuitems, item);

				}
				else if (!item.active) {
					if (theme.dataVerticalStyle != 'doublemenu') {
						item.active = false; // Set active to false for items not matching the target
					}
				}
				if (item.children && item.children.length > 0) {
					toggleSidemenu(event, targetObject, item.children);
				}
			}
			if (targetObject?.children && targetObject.active) {
				if (theme.dataVerticalStyle == 'doublemenu' && theme.toggled != 'double-menu-open') {
					ThemeChanger({ ...theme, toggled: "double-menu-open" });
				}
			}
			if (element && theme.dataNavLayout == 'horizontal' && (theme.dataNavStyle == 'menu-click' || theme.dataNavStyle == 'icon-click')) {
				const listItem = element.closest("li");
				if (listItem) {
					// Find the first sibling <ul> element
					const siblingUL = listItem.querySelector("ul");
					let outterUlWidth = 0;
					let listItemUL = listItem.closest('ul:not(.main-menu)');
					while (listItemUL) {
						listItemUL = listItemUL.parentElement.closest('ul:not(.main-menu)');
						if (listItemUL) {
							outterUlWidth += listItemUL.clientWidth;
						}
					}
					if (siblingUL) {
						// You've found the sibling <ul> element
						let siblingULRect = listItem.getBoundingClientRect();
						if (theme.dir == 'rtl') {
							if ((siblingULRect.left - siblingULRect.width - outterUlWidth + 150 < 0 && outterUlWidth < window.innerWidth) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
								targetObject.dirchange = true;
							} else {
								targetObject.dirchange = false;
							}
						} else {
							if ((outterUlWidth + siblingULRect.right + siblingULRect.width + 50 > window.innerWidth && siblingULRect.right >= 0) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
								targetObject.dirchange = true;
							} else {
								targetObject.dirchange = false;
							}
						}
					}
				}
			}
		}
		setMenuitems((arr: any) => [...arr]);
	}

	function setAncestorsActive(Ecommercemenuitems: any, targetObject: any) {
		const theme = store.getState();
		const parent = findParent(Ecommercemenuitems, targetObject);
		if (parent) {
			parent.active = true;
			if (parent.active) {
				ThemeChanger({ ...theme, toggled: "double-menu-open" });
			}

			setAncestorsActive(Ecommercemenuitems, parent);
		} else {
			if (theme.dataVerticalStyle == "doublemenu") {
				ThemeChanger({ ...theme, toggled: "double-menu-close" });
			}

		}
	}
	function closeOtherMenus(Ecommercemenuitems: any, targetObject: any) {
		for (const item of Ecommercemenuitems) {
			if (item !== targetObject) {
				item.active = false;
				if (item.children && item.children.length > 0) {
					closeOtherMenus(item.children, targetObject);
				}
			}
		}
	}
	function findParent(Ecommercemenuitems: any, targetObject: any) {
		for (const item of Ecommercemenuitems) {
			if (item.children && item.children.includes(targetObject)) {
				return item;
			}
			if (item.children && item.children.length > 0) {
				const parent: any = findParent(Ecommercemenuitems = item.children, targetObject);
				if (parent) {
					return parent;
				}
			}
		}
		return null;
	}

	function HoverToggleInnerMenuFn(event: any, item: any) {
		const theme = store.getState();
		let element = event.target;
		if (element && theme.dataNavLayout == "horizontal" && (theme.dataNavStyle == "menu-hover" || theme.dataNavStyle == "icon-hover")) {
			const listItem = element.closest("li");
			if (listItem) {
				// Find the first sibling <ul> element
				const siblingUL = listItem.querySelector("ul");
				let outterUlWidth = 0;
				let listItemUL = listItem.closest("ul:not(.main-menu)");
				while (listItemUL) {
					listItemUL = listItemUL.parentElement.closest("ul:not(.main-menu)");
					if (listItemUL) {
						outterUlWidth += listItemUL.clientWidth;
					}
				}
				if (siblingUL) {
					// You've found the sibling <ul> element
					let siblingULRect = listItem.getBoundingClientRect();
					if (theme.dir == "rtl") {
						if ((siblingULRect.left - siblingULRect.width - outterUlWidth + 150 < 0 && outterUlWidth < window.innerWidth) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
							item.dirchange = true;
						} else {
							item.dirchange = false;
						}
					} else {
						if ((outterUlWidth + siblingULRect.right + siblingULRect.width + 50 > window.innerWidth && siblingULRect.right >= 0) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
							item.dirchange = true;
						} else {
							item.dirchange = false;
						}
					}
				}
			}
		}
	}
	function handleAttributeChange(mutationsList: any) {
		for (const mutation of mutationsList) {
			if (mutation.type === 'attributes' && mutation.attributeName === 'data-nav-layout') {
				const newValue = mutation.target.getAttribute('data-nav-layout');
				if (newValue == 'vertical') {
					let currentPath = location.pathname.endsWith('/') ? location.pathname.slice(0, -1).replace(basePath,'') : location.pathname.replace(basePath,'');
					currentPath = !currentPath ? '/dashboard/ecommerce' : currentPath;
					setMenuUsingUrl(currentPath);
				} else {
					closeMenu();
				}
			}
		}
	}

      //oFFcanvas
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
	return (

<Fragment>
    <div id="responsive-overlay" onClick={() => { menuClose(); }}></div>
    <aside className="app-sidebar sticky" id="sidebar">

    <div className="container p-0">
        {/* <!-- Start::main-sidebar --> */}
        <div className="main-sidebar">

            {/* <!-- Start::nav --> */}
            <nav className="main-menu-container nav nav-pills sub-open">
                <div className="categories-menu min-w-fit-content">
                    <Link scroll={false} onClick={handleShow} href="#viewOffCanvas1" className="categories-menu-link" data-bs-toggle="offcanvas">
                        <span className="categories-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="40" y="64" width="176" height="128" opacity="0.2"/><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="40" y1="64" x2="216" y2="64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="40" y1="192" x2="216" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                        </span>
                    </Link>
                </div>
                <div className="slide-left" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path> </svg></div>
                <ul className="main-menu flex-fill">
                    {Ecommercemenuitems.map((levelone: any, index:any) => (
                        <Fragment key={index}>
                                <li className={`${levelone.type === "link" ? "slide" : ""} ${levelone.type === "sub" ? "slide has-sub" : ""} ${levelone?.selected ? "active" : ""} ${levelone.active ? "open" : ""} `}>
                                {levelone.type === "link" ?
                                    <Link href={levelone.path} className={`side-menu__item ${levelone.selected ? 'active' : ''}`}>
                                      <span className="side-menu__label">
                                      {levelone.title} 
                                      </span>
                                    </Link>
                                    : ""}
                                {levelone.type === "sub" ?
                                    <Ecommercemenuloop Ecommercemenuitems={levelone} level={level + 1} toggleSidemenu={toggleSidemenu} HoverToggleInnerMenuFn={HoverToggleInnerMenuFn} />
                                    : ''}
                            </li>
                        </Fragment>
                    ))} 
                </ul>
                <div className="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path> </svg></div>
                <a href="#!" className="btn btn-primary menu-btn">Become A Seller <i className="ti ti-arrow-right ms-1 d-inline-block"></i></a>
            </nav>
            {/* <!-- End::nav --> */}

        </div>
        {/* <!-- End::main-sidebar --> */}
    </div>

</aside>

{/* <!-- Start::categories-offcanvas --> */}
        <Offcanvas show={show} onHide={handleClose} className="offcanvas-start offcanvas-category" tabIndex={-1} id="viewOffCanvas1">
            <Offcanvas.Body className="offcanvas-custom-body p-0">
                <div className="p-3 border-bottom d-flex align-items-center justify-content-between">
                    <h5 className="mb-0 fw-semibold">All Categories</h5>
                    <Button variant="" className="btn btn-close" data-bs-dismiss="offcanvas" onClick={handleClose}></Button>
                </div>
                <div className="p-3">
                    <ul className="list-unstyled column-list mb-0 scroll-items-container border-bottom-0">
                        <li className="list-item">
                            <a href="#!" className="stretched-link"></a>
                            <div className="d-flex align-items-center gap-2">
                                <div className="min-w-fit-content">
                                    <span className="category-icon"><i className="ti ti-eggs"></i></span>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                    <p className="mb-0 fw-semibold text-truncate" title="Egg, Fish & Meat">Egg, Fish & Meat</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-item">
                            <a href="#!" className="stretched-link"></a>
                            <div className="d-flex align-items-center gap-2">
                                <div className="min-w-fit-content">
                                    <span className="category-icon"><i className="ti ti-salad"></i></span>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                    <p className="mb-0 fw-semibold text-truncate" title="Vegetables & Fruits">Vegetables & Fruits</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-item">
                            <a href="#!" className="stretched-link"></a>
                            <div className="d-flex align-items-center gap-2">
                                <div className="min-w-fit-content">
                                    <span className="category-icon"><i className="ti ti-cookie"></i></span>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                    <p className="mb-0 fw-semibold text-truncate" title="Snacks">Snacks</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-item">
                            <a href="#!" className="stretched-link"></a>
                            <div className="d-flex align-items-center gap-2">
                                <div className="min-w-fit-content">
                                    <span className="category-icon"><i className="ti ti-baguette"></i></span>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                    <p className="mb-0 fw-semibold text-truncate" title="Bakery Food">Bakery Food</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-item">
                            <a href="#!" className="stretched-link"></a>
                            <div className="d-flex align-items-center gap-2">
                                <div className="min-w-fit-content">
                                    <span className="category-icon"><i className="ti ti-bottle"></i></span>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                    <p className="mb-0 fw-semibold text-truncate" title="Beverages">Beverages</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-item">
                            <a href="#!" className="stretched-link"></a>
                            <div className="d-flex align-items-center gap-2">
                                <div className="min-w-fit-content">
                                    <span className="category-icon"><i className="ti ti-baby-carriage"></i></span>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                    <p className="mb-0 fw-semibold text-truncate" title="Baby care">Baby care</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-item">
                            <a href="#!" className="stretched-link"></a>
                            <div className="d-flex align-items-center gap-2">
                                <div className="min-w-fit-content">
                                    <span className="category-icon"><i className="ti ti-health-recognition"></i></span>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                    <p className="mb-0 fw-semibold text-truncate" title="Health Care">Health Care</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-item">
                            <a href="#!" className="stretched-link"></a>
                            <div className="d-flex align-items-center gap-2">
                                <div className="min-w-fit-content">
                                    <span className="category-icon"><i className="ti ti-paw"></i></span>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                    <p className="mb-0 fw-semibold text-truncate" title="Pets & Animals">Pets & Animals</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-item">
                            <a href="#!" className="stretched-link"></a>
                            <div className="d-flex align-items-center gap-2">
                                <div className="min-w-fit-content">
                                    <span className="category-icon"><i className="ti ti-home"></i></span>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                    <p className="mb-0 fw-semibold text-truncate" title="Household">Household</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-item">
                            <a href="#!" className="stretched-link"></a>
                            <div className="d-flex align-items-center gap-2">
                                <div className="min-w-fit-content">
                                    <span className="category-icon"><i className="ti ti-hanger-2"></i></span>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                    <p className="mb-0 fw-semibold text-truncate" title="Fashion & Lifestyle">Fashion & Lifestyle</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-item">
                            <a href="#!" className="stretched-link"></a>
                            <div className="d-flex align-items-center gap-2">
                                <div className="min-w-fit-content">
                                    <span className="category-icon"><i className="ti ti-device-mobile"></i></span>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                    <p className="mb-0 fw-semibold text-truncate" title="Mobiles & Electronics">Mobiles & Electronics</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-item">
                            <a href="#!" className="stretched-link"></a>
                            <div className="d-flex align-items-center gap-2">
                                <div className="min-w-fit-content">
                                    <span className="category-icon"><i className="ti ti-device-laptop"></i></span>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                    <p className="mb-0 fw-semibold text-truncate" title="Laptops & Computers">Laptops & Computers</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-item">
                            <a href="#!" className="stretched-link"></a>
                            <div className="d-flex align-items-center gap-2">
                                <div className="min-w-fit-content">
                                    <span className="category-icon"><i className="ti ti-headphones"></i></span>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                    <p className="mb-0 fw-semibold text-truncate" title="Electrical Accessories">Electrical Accessories</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-item">
                            <a href="#!" className="stretched-link"></a>
                            <div className="d-flex align-items-center gap-2">
                                <div className="min-w-fit-content">
                                    <span className="category-icon"><i className="ti ti-book"></i></span>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                    <p className="mb-0 fw-semibold text-truncate" title="Books">Books</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </Offcanvas.Body> 
        </Offcanvas>
        {/* <!-- End::categories-offcanvs --> */}
</Fragment>
	);
};

const mapStateToProps = (state: any) => ({
	local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Ecommercesidebar);
