
"use client"
import { Provider } from "react-redux";
import "./globals.scss";
import store from "@/shared/redux/store";


const RootLayout = ({children}:any) =>{
    return(
      <>
      <Provider store={store}>
          {children}
      </Provider>
      </>
    )
  }
  export default RootLayout
