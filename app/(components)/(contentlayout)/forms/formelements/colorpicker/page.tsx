"use client"
import { colorpicker1 } from "@/shared/data/prism/forms-prism";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { ColorPicker, useColor } from "react-color-palette";
import { ChromePicker } from 'react-color'
import ShowCode from "@/shared/layout-components/showcode/showcode";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Colorpickers = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
    //color picker
    const [color, setColor] = useColor("#561ecb");

    		//color picker
	const [color2, setColor2] = useState<any>("#6c5ffc");
	const [showColorPicker, setShowColorPicker] = useState(false);
	const handleChangeComplete = (color:any) => {
		console.log(color);
	};
return (
<Fragment>

                {/* Page Header */}
                    <Seo title={"Color Pickers"} />
                    <Pageheader Heading="Color Pickers" Pages={[{title:"Forms", active:true},{title:"Form Elements", active:true},{title:"Color Pickers", active:false}]} />
                 {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={12}>
                        <ShowCode title="Bootstrap Color Picker" customCardClass="custom-card" customCardBodyClass="" code={colorpicker1}>
                            <input type="color" className="form-control form-control-color border-0"
                                            id="exampleColorInput" defaultValue="#136ad0" title="Choose your color"/>
                        </ShowCode>
                    </Col>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Classic
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className=" d-sm-flex justify-content-between">
                                <Col md={3} className="mt-2">
                                    <Button variant="primary" onClick={toggleVisibility} className='btn !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium'>
                                        <i className="ri-palette-line"></i>
                                            </Button>
                                            {isVisible && (
                                                <ColorPicker color={color} onChange={setColor} hideInput={["hex", "hsv"]} />
                                            )}
                                </Col>
                                <Col xl={6} className="mt-2">
                                    <Button variant="primary"  className='pcr-button btn-md mb-3' onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>{showColorPicker ? "Close Picker" : "Pick Color"}</Button>
                                        {showColorPicker && (<ChromePicker disableAlpha={true} color={color2} onChange={(updatedColor: { hex: any; }) => setColor2(updatedColor.hex)} onChangeComplete={handleChangeComplete} />
                                        )}
                                </Col>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
</Fragment>
);
};

export default Colorpickers;