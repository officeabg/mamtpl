"use client"
import { Gallerdata } from "@/shared/data/apps/gallerydata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";

const Gallery = () => {
return ( 
    <Fragment>
            {/* Page Header */}
                <Seo title={"Gallery"} />
                <Pageheader Heading="Gallery" Pages={[{title:"Apps", active:true},{title:"Gallery", active:false}]} />
            {/* Page Header Close */}
            
                {/* Start::row-1 */}
                  <Gallerdata/>
                {/*End::row-1 */}
    </Fragment>
    )
};

export default Gallery;