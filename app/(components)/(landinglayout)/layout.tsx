"use client";
import Backtotop from "@/shared/layout-components/backtotop/backtotop";
import Landingfooter from "@/shared/layout-components/landingfooter.tsx/landingfooter";
import Landingheader from "@/shared/layout-components/landingheader/landingheader";
import Landingsidebar from "@/shared/layout-components/landingsidebar/landingsidebar";
import Landingswitcher from "@/shared/layout-components/switcher/landingswitcher";
import { ThemeChanger } from "@/shared/redux/action";
import store from "@/shared/redux/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { connect } from "react-redux";

const Layout = ({ children, ThemeChanger }: any) => {
  useEffect(() => {
    const theme = store.getState();
    ThemeChanger({
      ...theme,
      dataNavStyle: "menu-hover",
      dataNavLayout: "horizontal",
      dataHeaderStyles:"",
      dataVerticalStyle: "",
      body: "landing-body",
    });

    return () => {
      ThemeChanger({
        ...theme,
        dataNavStyle: "",
        dataVerticalStyle: "",
        dataHeaderStyles:"",
        dataNavLayout: `${
          localStorage.mamixlayout == "horizontal" ? "horizontal" : "vertical"
        }`,
        body: "",
      });
    };
  }, []);

  const Currentpath = usePathname();
  const [lateLoad, setlateLoad] = useState(false);
  useEffect(() => {
    setlateLoad(true);
  });
  //Alert
  const [show, setShow] = useState(true);
	const toggleShow = () => setShow(!show);
  return (
    <Fragment>
      <div style={{display: `${lateLoad ? "block" : "none"}`}}>
        <Landingswitcher />
          <div className="landing-page-wrapper">
              {Currentpath.includes("/landing") ||
                Currentpath.includes("/domaindetails") ? (
                  <Alert variant='warning' className="alert-warning alert-dismissible text-default fade show mb-0 text-center d-lg-block d-none" role="alert" show={show} onClick={toggleShow}>
                    <div className="container">
                      Get the 20% discount by using the coupon code{" "}
                      <strong className="text-warning">3452 *** ***</strong>.{" "}
                      <u>Signup to your account</u>
                      <Link scroll={false} href="#!" className="btn btn-danger btn-w-md ms-3">
                        Grab it now
                      </Link>
                      <Button variant="" type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                        <i className="bi bi-x"></i>
                      </Button>
                    </div>
                    <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert"
                        aria-label="Close"><i className="bi bi-x"></i></Button>
                </Alert>
                ) : (
                  ""
                )}
              <Landingheader />
              <Landingsidebar />
              <div className="main-content landing-main px-0">
                {children}
              </div>
              <Landingfooter />
          </div>
          <Backtotop/>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  local_varaiable: state,
});

export default connect(mapStateToProps, { ThemeChanger })(Layout);
