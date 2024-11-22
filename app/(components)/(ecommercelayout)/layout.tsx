"use client"
import { Ecommercecontext } from '@/shared/contextapi'
import { Ecommerceproducts } from '@/shared/data/apps/ecommerce/customer/reduxdata'
import Backtotop from '@/shared/layout-components/backtotop/backtotop'
import Ecommercefooter from '@/shared/layout-components/ecommercefooter/ecommercefooter'
import Ecommerceheader from '@/shared/layout-components/ecommerceheader/ecommerceheader'
import Ecommercesidebar from '@/shared/layout-components/ecommercesidebar/ecommercesidebar'
import Landingswitcher from '@/shared/layout-components/switcher/landingswitcher'
import { ThemeChanger } from '@/shared/redux/action'
import store from '@/shared/redux/store'
import React, { Fragment, memo, useEffect, useState } from 'react'
import { connect } from 'react-redux'

const Layout = ({children, ThemeChanger}:any) => {

  useEffect(() => {
   
    const theme = store.getState();
    ThemeChanger({
      
      ...theme,
      "dataNavStyle": "menu-hover",
      "dataNavLayout": "horizontal",
    //   "class": "h-full",
      "dataHeaderStyles":"",
      "dataVerticalStyle": "",
      "body":"landing-body ecommerce-landing"
    });
    
    return () => {
      ThemeChanger({
        ...theme,
        "dataNavStyle": "",
        "dataVerticalStyle": "",
        "dataHeaderStyles":"",
        "dataNavLayout": `${localStorage.mamixlayout == "horizontal" ? "horizontal" : "vertical"}`,
        "body":""
      });
    };
  }, []);
  const [lateLoad, setlateLoad] = useState(false);
  useEffect(() => {
    setlateLoad(true);
  });

  const [productdata , setproductdata] = useState(Ecommerceproducts)
   useEffect(() => {
    productdata
   
   }, [productdata])
   
  return (
    <Fragment>
      <Ecommercecontext.Provider value={{ productdata , setproductdata }}>
       <div style={{display: `${lateLoad ? "block" : "none"}`}}>
            <Landingswitcher/>
            <div className='landing-page-wrapper'>
              <Ecommerceheader/>
              <Ecommercesidebar/>
                <div className='main-content landing-main ecommerce-main'>
                    {children}
                </div>
              <Ecommercefooter/>
            </div>
            <Backtotop/>
       </div>
       </Ecommercecontext.Provider>
    </Fragment>
  )
}

const mapStateToProps = (state: any) => ({
  local_varaiable: state
});
export default memo(connect(mapStateToProps, {ThemeChanger})(Layout));