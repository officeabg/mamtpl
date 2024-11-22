"use client"
import { Multipleselectdata, Multipleselectdata1, Optionwithnosearch, SingleGroup } from "@/shared/data/forms/formelements/formselectdata";
import { formselect1, formselect2, formselect3, formselect4, formselect5, formselect6 } from "@/shared/data/prism/forms-prism";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import ShowCode from "@/shared/layout-components/showcode/showcode";
import dynamic from "next/dynamic";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
const Select = dynamic(() => import("react-select"), { ssr: false });
const CreatableSelect = dynamic(() => import("react-select/creatable"), { ssr: false });

const Formselect = () => {

    const components = {
		DropdownIndicator: null,
	};

	const createOption = (label: any) => ({
		label,
		value: label,
	});

	const [inputValue, setInputValue] = useState<any>("");
	const [value, setValue] = useState([
		createOption("one"),
		createOption("two"),
		createOption("three")
	]);
	const [inputValue1, setInputValue1] = useState<any>("");
	const [value1, setValue1] = useState([
		createOption("child-1"),
		createOption("child-2")
	]);

	const handleKeyDown1 = (event: any) => {
		if (!inputValue1) return;
		switch (event.key) {
			case "Enter":
			case "Tab":
				setValue1((prev) => [...prev, createOption(inputValue1)]);
				setInputValue1("");
				event.preventDefault();
		}
	};
	const handleKeyDown = (event: any) => {
		if (!inputValue) return;
		switch (event.key) {
			case "Enter":
			case "Tab":
				setValue((prev) => [...prev, createOption(inputValue)]);
				setInputValue("");
				event.preventDefault();
		}
	};
	const [isSearchable] = useState(true);


	//
	const [inputValue2, setInputValue2] = useState<any>("");
	const [value2, setValue2] = useState([
		createOption("abc@hotmail.com"),
	]);

	const handleKeyDown2 = (event: any) => {
		if (!inputValue2) return;
		switch (event.key) {
			case "Enter":
			case "Tab":
				setValue2((prev) => [...prev, createOption(inputValue2)]);
				setInputValue2("");
				event.preventDefault();
		}
	};
return (
<Fragment>
                 {/* Page Header */}
                    <Seo title={"Form Select"} />
                    <Pageheader Heading="Form Select" Pages={[{title:"Forms", active:true},{title:"Form Elements", active:true},{title:"Form Select", active:false}]} />
                 {/* Page Header Close */}

                {/* Start:: row-4 */}
                <Row>
                    <Col xl={12}>
                        <Row>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <div className="card-header d-flex align-items-center justify-content-between">
                                        <h6 className="card-title">Multiple Select</h6>
                                    </div>
                                    <Card.Body>
                                        <p className="fw-medium mb-2">Default</p>
                                            <div className="choices mb-4">
                                                <Select isMulti name="colors" options={Multipleselectdata} className="default basic-multi-select custom-multi " id="choices-multiple-default"
                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Multipleselectdata[0]]}
                                                />
                                            </div>
                                        <p className="fw-medium mb-2">With Remove Button</p>
                                            <div className="choices mb-4">
                                                <Select isMulti name="colors" options={Multipleselectdata1} className="basic-multi-select custom-multi" id="choices-multiple-default"
                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Multipleselectdata1[0]]}
                                                />
                                            </div>
                                        <p className="fw-medium mb-2">Option groups</p>
                                            <div className="choices">
                                                <SingleGroup/>
                                            </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className="card custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                            Passing Through Options
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body className="passing-option">
                                        <CreatableSelect
										components={components}
										classNamePrefix='react-select'
										inputValue={inputValue}
										isClearable
										isMulti
										menuIsOpen={false}
										onChange={(newValue) => {
											// Ensure newValue is an array (or empty array) of objects
											if (Array.isArray(newValue)) {
												setValue(newValue);
											} else {
												// Handle the case when newValue is not an array
												setValue([]);
											}
										}}
										onInputChange={(newValue) => setInputValue(newValue)}
										onKeyDown={handleKeyDown}
										placeholder="Type something and press enter..."
										value={value}
									/>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                            Options added via config with no search
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Select isClearable name="choices-single-no-search" options={Optionwithnosearch} className="default basic-multi-select" id="choices-single-no-search"
                                            menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Optionwithnosearch[5]]}
                                        />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={12}>
                        <Row>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <div className="card-header d-flex align-items-center justify-content-between">
                                        <h6 className="card-title">Single Select</h6>
                                    </div>
                                    <Card.Body>
                                        <p className="fw-medium mb-2">Default</p>
                                            <Select isSearchable={isSearchable} name="colors" options={Multipleselectdata} className="mb-4 default basic-multi-select" id="choices-multiple-default"
                                                menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Multipleselectdata[0]]}
                                            />
                                        <p className="fw-medium mb-2">Option groups</p>
                                        <SingleGroup />
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                            Email Address Only
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <CreatableSelect
										components={components}
										classNamePrefix='react-select'
										inputValue={inputValue2}
										isClearable
										isMulti
										menuIsOpen={false}
										onChange={(newValue) => {
											// Ensure newValue is an array (or empty array) of objects
											if (Array.isArray(newValue)) {
												setValue1(newValue);
											} else {
												// Handle the case when newValue is not an array
												setValue1([]);
											}
										}}
										onInputChange={(newValue) => setInputValue2(newValue)}
										onKeyDown={handleKeyDown2}
										placeholder="Type something and press enter..."
										value={value2}
									/>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                            Passing Unique Values
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                            <CreatableSelect
                                            components={components}
                                            classNamePrefix='react-select'
                                            inputValue={inputValue1}
                                            isClearable
                                            isMulti
                                            menuIsOpen={false}
                                            onChange={(newValue) => {
                                                // Ensure newValue is an array (or empty array) of objects
                                                if (Array.isArray(newValue)) {
                                                    setValue1(newValue);
                                                } else {
                                                    // Handle the case when newValue is not an array
                                                    setValue1([]);
                                                }
                                            }}
                                            onInputChange={(newValue) => setInputValue1(newValue)}
                                            onKeyDown={handleKeyDown1}
                                            placeholder="Type something and press enter..."
                                            value={value1}
                                        />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/* End:: row-4 */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={4}>
                        <ShowCode title="Default Select" customCardClass="custom-card" customCardBodyClass="" code={formselect1}>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </ShowCode>
                    </Col>
                    <Col xl={4}>
                        <ShowCode title="Disabled Select" customCardClass="custom-card" customCardBodyClass="" code={formselect2}>
                            <Form.Select aria-label="Default select example" disabled={true}>
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </ShowCode>
                    </Col>
                    <Col xl={4}>
                        <ShowCode title="Rounded Select" customCardClass="custom-card" customCardBodyClass="" code={formselect3}>
                            <Form.Select className="form-select rounded-pill" aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </ShowCode>
                    </Col>
                </Row>
                {/*End::row-1 */}

                {/* Start:: row-2 */}
                <Row>
                    <Col xl={6}>
                        <ShowCode title="Multiple Attribute Select" customCardClass="custom-card" customCardBodyClass="" code={formselect4}>
                            <Form.Select multiple className="form-select" aria-label="multiple select example">
                                <option className='selected'>Open this select menu</option>
                                <option defaultValue="1">One</option>
                                <option defaultValue="2">Two</option>
                                <option defaultValue="3">Three</option>
                            </Form.Select>
                        </ShowCode>
                    </Col>
                    <Col xl={6}>
                        <ShowCode title="Using Size Attribute" customCardClass="custom-card" customCardBodyClass="" code={formselect5}>
                            <Form.Select className="form-select" htmlSize={4} aria-label="size 3 select example">
                                <option className='selected'>Open this select menu</option>
                                <option defaultValue="1">One</option>
                                <option defaultValue="2">Two</option>
                                <option defaultValue="3">Three</option>
                                <option defaultValue="4">Four</option>
                                <option defaultValue="5">Five</option>
                            </Form.Select>
                        </ShowCode>
                    </Col>
                </Row>
                {/* End:: row-2 */}

                {/* Start:: row-3 */}
                <Row>
                    <Col xl={12}>
                            <ShowCode title="Select Sizes" customCardClass="custom-card" customCardBodyClass="" code={formselect6}>
                                <Form.Select size="sm" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                                    <option>Open this select menu</option>
                                    <option defaultValue="1">One</option>
                                    <option defaultValue="2">Two</option>
                                    <option defaultValue="3">Three</option>
                                </Form.Select>
                                <Form.Select className="form-select mb-3" aria-label="Default select">
                                    <option>Open this select menu
                                    </option>
                                    <option defaultValue="1">One</option>
                                    <option defaultValue="2">Two</option>
                                    <option defaultValue="3">Three</option>
                                </Form.Select>
                                <Form.Select size="lg" className="form-select form-select-lg"
                                    aria-label=".form-select-lg example">
                                    <option>Open this select menu</option>
                                    <option defaultValue="1">One</option>
                                    <option defaultValue="2">Two</option>
                                    <option defaultValue="3">Three</option>
                                </Form.Select>
                            </ShowCode>
                    </Col>
                </Row>
                {/* End:: row-3 */}
</Fragment>
);
};

export default Formselect;