"use client"
import { Dualbox, Tagifyselectdata } from "@/shared/data/forms/formadvanceddata";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { TagsInput } from "react-tag-input-component";
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css'; 
const Select = dynamic(() => import("react-select"), { ssr: false });
import PhoneInput from 'react-phone-number-input'
import { CountrySelect,  } from "react-country-state-city";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import dynamic from "next/dynamic";
const Formadvanced = () => {
    const [selected1, setSelected1] = useState([
		"tag1",
		"tag2",
	]);
    const [selected2, setSelected2] = useState([
		"css",
		"html",
		"Javascript",
	]);
    const [selected3, setSelected3] = useState([
		"tag1",
		"tag2",
		"tag3",
		"tag4",
		"tag5",
		"tag6",
	]);

    const [selected, setSelected] = useState<any>([]);
    const options = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
        { value: 'three', label: 'Three' },
    ];
    const [value, setValue] = useState<any>()
    const [value1, setValue1] = useState<any>()
    const [countryid, setCountryid] = useState(0);
return (
    <Fragment>
                 {/* Page Header */}
                    <Seo title={"Form Advanced"} />
                    <Pageheader Heading="Form Advanced" Pages={[{title:"Forms", active:true},{title:"Form Advanced", active:false}]} />
                 {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>AUTO COMPLETE</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="row gy-3">
                                    <Col xl={4}>
                                        <label htmlFor="autoComplete" className="form-label">Search Results Of Food & Drinks Combo</label>
                                        <input type="search" className="form-control" id="autoComplete" placeholder="Placeholder"
                                        autoComplete="off" autoCapitalize="off"/>
                                    </Col>
                                    <Col xl={4}>
                                        <label htmlFor="autoComplete-color" className="form-label">Advanced Search Results For Colors</label>
                                        <input type="search" className="form-control" id="autoComplete-color"
                                        autoComplete="off" autoCapitalize="off"/>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}

                {/* Start:: row-2 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    TELEPHONE INPUT
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="row gy-4">
                                    <Col xl={3}>
                                        <Form.Label htmlFor="phone" className="form-label d-block">Basic Telephone Input</Form.Label>
                                        <PhoneInput
                                            placeholder="Enter phone number"
                                            value={value}
                                            onChange={setValue}/>
                                    </Col>
                                    <Col xl={4}>
                                        <Form.Label htmlFor="phone-only-countries" className="form-label d-block">Telephone Input With  Default Country</Form.Label>
                                        <PhoneInput
                                            placeholder="Enter phone number"
                                            defaultCountry="US"
                                            value={value1}
                                            onChange={setValue1}/>
                                    </Col>
                                    
                                    <Col xl={4}>
                                        <Form.Label htmlFor="phone-existing-number" className="form-label d-block">Input With Only Countries</Form.Label>
                                        <CountrySelect onChange={(e: any) => { setCountryid(e.id); }} placeHolder="Select Country" className="border-0" />
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-2 */}

                {/* Start:: row-3 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    TAGIFY JS
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="row gy-3">
                                    <Col xl={6}>
                                        <Form.Label className="form-label d-block">Basic Tagify</Form.Label>
                                        <TagsInput
                                            value={selected1}
                                            onChange={setSelected1}
                                            name="tags"
                                        />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label className="form-label d-block">Tagify With Custom Suggestions</Form.Label>
                                            <TagsInput
                                                value={selected2}
                                                onChange={setSelected2}
                                                name="tags"
                                            />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label className="form-label d-block">Disabled User Input</Form.Label>
                                        <Form.Control name='tags-disabled-user-input' placeholder='Select tags from the list' className="form-control" disabled />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label className="form-label d-block">Drag & Sort</Form.Label>
                                        <TagsInput
                                                value={selected3}
                                                onChange={setSelected3}
                                                name="tags"
                                            />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label className="form-label d-block">Tagify With Users List</Form.Label>
                                        <input name='users-list-tags' defaultValue='abatisse2@nih.gov, Justinian Hattersley' className="form-control" />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label className="form-label d-block">Tagify Single-Value Select</Form.Label>
                                        <Select  name="colors" options={Tagifyselectdata} className="default basic-multi-select" id="choices-multiple-default"
                                                    menuPlacement='auto' classNamePrefix="Select2" 
                                                />
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Label className="form-label d-block">Tagify With Mix Text & Tags</Form.Label>
                                        <Form.Control as="textarea" name='mix'  defaultValue="because he's a relic.">
                                             </Form.Control>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-3 */}

                {/* Start:: row-4 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>DUAL LIST BOX</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="row gy-4">
                                    <Col xl={6}>
                                        <h6>Select by class :</h6>
                                        <Dualbox/>
                                    </Col>
                                    <Col xl={6}>
                                        <h6>Add options and add eventListeners :</h6>
                                         <DualListBox
                                            options={options}
                                            selected={selected}
                                            onChange={(newValue) => setSelected(newValue)}
                                            />
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-4 */}
    </Fragment>
    );
};

export default Formadvanced;