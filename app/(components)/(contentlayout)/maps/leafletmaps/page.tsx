"use client"
import Pageheader from '@/shared/layout-components/page-header/pageheader';
import Seo from '@/shared/layout-components/seo/seo';
import dynamic from 'next/dynamic';
const Leafletmapss = dynamic(() => import('@/shared/data/maps/leafletdata'), { ssr: false });
import React, { Fragment } from "react";

const Leafletmaps = () => {
return (
    <Fragment>
                 {/* Page Header */}
                    <Seo title={"Leaflet Maps"} />
                    <Pageheader Heading="Leaflet Maps" Pages={[{title:"Maps", active:true},{title:"Leaflet Maps", active:false}]} />
                 {/* Page Header Close */}

                {/* Start::row-1 */}
                     <Leafletmapss/>
                {/*End::row-1 */}
    </Fragment>
    );
};

export default Leafletmaps;