"use client"
import  { Data1, multiselectdata ,Data} from "@/shared/data/apps/projects/createprojectdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
const Select = dynamic(() => import("react-select"), { ssr: false });
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
  });
import CreatableSelect from 'react-select/creatable';

const Createproject = () => {
    const components = {
        DropdownIndicator: null,
    };

    const createOption = (label: string) => ({
        label,
        value: label,
    });

    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState([
        createOption("Marketing"),
        createOption("Sales"),
        createOption("Development"),
        createOption("Design"),
        createOption("Research"),

    ]);
    const handleKeyDown = (event:any) => {
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue((prev) => [...prev, createOption(inputValue)]);
                setInputValue('');
                event.preventDefault();
        }
    };
    //Filepond 
    const [files, setFiles] = useState<any>([]);
    const [startDate, setStartDate] = useState(new Date()); //React date picker

    const [startDate1, setStartDate1] = useState(new Date());
return ( 
    <Fragment>
            {/* Page Header */}
                <Seo title={"Create Project"} />
                <Pageheader Heading="Create Project" Pages={[{title:"Apps", active:true},{title:"Projects", active:true},{title:"Create Project", active:false}]} />
            {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Create Project
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row className="gy-3">
                                    <Col xl={4}>
                                        <Form.Label htmlFor="input-label" className="form-label">Project Name :</Form.Label>
                                        <Form.Control type="text" className="form-control" id="input-label" placeholder="Enter Project Name" />
                                    </Col>
                                    <Col xl={4}>
                                        <Form.Label htmlFor="input-label11" className="form-label">Project Manager :</Form.Label>
                                        <Form.Control type="text" className="form-control" id="input-label11" placeholder="Project Manager Name" />
                                    </Col>
                                    <Col xl={4}>
                                        <Form.Label htmlFor="input-label1" className="form-label">Client / Stakeholder :</Form.Label>
                                        <Form.Control type="text" className="form-control" id="input-label1" placeholder="Enter Client Name" />
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Label className="form-label">Project Description :</Form.Label>
                                        <div id="project-descriptioin-editor">
                                        <SunEditor/>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label className="form-label">Start Date :</Form.Label>
                                        <Form.Group>
                                            <InputGroup>
                                                <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                                <DatePicker className="" selected={startDate} onChange={(date) => setStartDate(date as Date)} />
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label className="form-label">End Date :</Form.Label>
                                        <Form.Group>
                                            <InputGroup>
                                                <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                                <DatePicker className="" selected={startDate1} onChange={(date) => setStartDate1(date as Date)} />
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label className="form-label">Status :</Form.Label>
                                            <Select  name="state" options={Data1} className="js-example-placeholder-multiple w-full js-states"
                                                menuPlacement='auto' classNamePrefix="Select2" placeholder="Inprogress"
                                            />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label className="form-label">Priority :</Form.Label>
                                        <Select  name="state" options={Data} className="js-example-placeholder-multiple w-full js-states"
                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                        />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label className="form-label">Assigned To</Form.Label>
                                        <Select isMulti name="state" options={multiselectdata} className="js-example-placeholder-multiple w-full js-states"
                                            menuPlacement='auto' classNamePrefix="Select2" defaultValue={[multiselectdata[0], multiselectdata[9], multiselectdata[4]]}
                                        />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label className="form-label">Tags</Form.Label>
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
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Label className="form-label">Attachments</Form.Label>
                                            <FilePond
                                            files={files}
                                            onupdatefiles={setFiles}
                                            allowMultiple={true}
                                            maxFiles={3}
                                            server="/api"
                                            name="files"
                                            labelIdle='Drag & Drop your file here or click '
                                        />
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="" className="btn btn-primary-light btn-wave ms-auto float-end">Create Project</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    )
};

export default Createproject;