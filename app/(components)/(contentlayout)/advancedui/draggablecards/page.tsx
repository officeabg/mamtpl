"use client"
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment} from "react";
import dynamic from "next/dynamic";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Draguladata = dynamic(() => import("@/shared/data/advancedui/draggablecardsdata"), { ssr: false });

const Draggablecards = () => {
   
return (
    <Fragment>
                {/* Page Header */}
                    <Seo title={"Draggable Cards"} />
                    <Pageheader Heading="Draggable Cards" Pages={[{title:"Advanced Ui", active:true},{title:"Draggable Cards", active:false}]} />
                {/* Page Header Close */}
                <Draguladata/>
              
    </Fragment>
    );
};

export default Draggablecards;