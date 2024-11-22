import nextConfig from '@/next.config.mjs';
import { ThemeChanger } from '@/shared/redux/action';
import store from '@/shared/redux/store';
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux';

const Landingheader = ({ThemeChanger}:any) => {
    let {basePath} = nextConfig;
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
  return (
<Fragment>
    <header className="app-header border-bottom-0" id="header">
        {/* <!-- Start::main-header-container --> */}
        <div className="main-header-container container-fluid">

            {/* <!-- Start::header-content-left --> */}
            <div className="header-content-left">

                {/* <!-- Start::header-element --> */}
                <div className="header-element">
                    <div className="horizontal-logo">
                        <Link scroll={false} href="/dashboards/sales/" className="header-logo">
                            <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/toggle-logo.png`} alt="logo" className="toggle-logo"/>
                            <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/toggle-dark.png`} alt="logo" className="toggle-dark"/>
                        </Link>
                    </div>
                </div>
                {/* <!-- End::header-element --> */}

                {/* <!-- Start::header-element --> */}
                <div className="header-element">
                    {/* <!-- Start::header-link --> */}
                    <Link scroll={false} href="#!" className="sidemenu-toggle header-link" data-bs-toggle="sidebar" onClick={() => toggleNavigation()}>
                        <span className="open-toggle">
                            <i className="ri-menu-3-line fs-20"></i>
                        </span>
                    </Link>
                    {/* <!-- End::header-link --> */}
                </div>
                {/* <!-- End::header-element --> */}

            </div>
            {/* <!-- End::header-content-left --> */}

            {/* <!-- Start::header-content-right --> */}
            <div className="header-content-right">

                {/* <!-- Start::header-element --> */}
                <div className="header-element align-items-center">
                    {/* <!-- Start::header-link|switcher-icon --> */}
                    <div className="btn-list d-lg-none d-block">
                        <Link scroll={false} href="/authentication/signup/signup-basic/" className="btn btn-primary-light">
                            Sign Up
                        </Link>
                        <Button variant='' onClick={() => Switchericon()} className="btn btn-icon btn-success switcher-icon" data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas">
                            <i className="ri-settings-3-line"></i>
                        </Button>
                    </div>
                    {/* <!-- End::header-link|switcher-icon --> */}
                </div>
                {/* <!-- End::header-element --> */}

            </div>
            {/* <!-- End::header-content-right --> */}

        </div>
        {/* <!-- End::main-header-container --> */}
    </header>
</Fragment>
  )
}

const mapStateToProps = (state: any) => ({
    local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Landingheader);
// export default Landingheader