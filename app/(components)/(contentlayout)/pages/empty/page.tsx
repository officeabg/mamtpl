"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";

const Empty = () => {
return(
<Fragment>
                {/* Page Header */}
                    <Seo title={"Empty"} />
                    <Pageheader Heading="Empty" Pages={[{title:"Pages", active:true},{title:"Empty", active:false},]} />
                {/* Page Header Close */}
</Fragment>
);
};

export default Empty;