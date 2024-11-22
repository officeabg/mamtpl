"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
const Datetimepicker = () => {
    const [startDate, setStartDate] = useState(new Date());
	const handleDateChange = (date : Date | null) => {
		// Ensure date is defined before setting it
		if (date) {
			setStartDate(date);
		}
	};
	const [startDate1, setStartDate1] = useState(new Date());
	const handleDateChange1 = (date : Date | null) => {
		// Ensure date is defined before setting it
		if (date) {
			setStartDate1(date);
		}
	};
	const [startDate2, setStartDate2] = useState(new Date());
	const handleDateChange2 = (date : Date | null) => {
		// Ensure date is defined before setting it
		if (date) {
			setStartDate2(date);
		}
	};
	const [startDate3, setStartDate3] = useState(new Date());
	const handleDateChange3 = (date : Date | null) => {
		// Ensure date is defined before setting it
		if (date) {
			setStartDate3(date);
		}
	};
	const [startDate4, setStartDate4] = useState(new Date());
	const handleDateChange4 = (date : Date | null) => {
		// Ensure date is defined before setting it
		if (date) {
			setStartDate4(date);
		}
	};
	const [startDate5, setStartDate5] = useState<any>(new Date());
	const handleDateChange5 = (date : Date | null) => {
		// Ensure date is defined before setting it
		if (date) {
			setStartDate5(date);
		}
	};
	const [startDatei, setStartDatei] = useState<any>(new Date());
	const [startDate6, setStartDate6] = useState(new Date());
	const handleDateChange6 = (date: Date | null) => {
		// Ensure date is defined before setting it
		if (date) {
			setStartDate6(date);
		}
	};
return (
<Fragment>
                {/* Page Header */}
                    <Seo title={"Date & Time Pickers"} />
                    <Pageheader Heading="Date & Time Pickers" Pages={[{title:"Forms", active:true},{title:"Form Elements", active:true},{title:"Date & Time Pickers", active:false}]} />
                 {/* Page Header Close */}

                {/* Start:: row-1 */}
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Basic Date picker
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form.Group>
                                        <InputGroup className="">
                                            <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i>
                                            </InputGroup.Text>
                                            <DatePicker selected={startDate} onChange={handleDateChange} />
                                        </InputGroup>
                                </Form.Group>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Date picker With Time
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form.Group>
                                    <InputGroup className="">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
                                        <DatePicker
                                            selected={startDate1}
                                            onChange={handleDateChange1}
                                            timeInputLabel="Time:"
                                            dateFormat="yy/MM/dd h:mm aa"
                                            placeholderText='Choose date with time'
                                            showTimeInput
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Human Friendly dates
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form.Group>
                                    <InputGroup className="">
                                        <InputGroup.Text className="input-group-text text-muted"> 
                                            <i className="ri-calendar-line"></i> </InputGroup.Text>
                                        <DatePicker selected={startDate2} onChange={handleDateChange2} />
                                    </InputGroup>
                                </Form.Group>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Date range picker
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form.Group>
                                    <InputGroup className="">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i> 
                                        </InputGroup.Text>
                                        <DatePicker selected={startDate3} onChange={handleDateChange3} />
                                    </InputGroup>
                                </Form.Group>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-1 */}

                {/* Start:: row-2 */}
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Basic Time picker
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form.Group>
                                    <InputGroup className="input-group">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
                                        <DatePicker
                                            selected={startDate4}
                                            onChange={handleDateChange4}
                                            showTimeSelect
                                            showTimeSelectOnly
                                            timeIntervals={15}
                                            timeCaption="Time"
                                            dateFormat="h:mm aa"
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                Locale with time
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form.Group>
                                    <InputGroup className="input-group">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
                                        <DatePicker
                                            selected={startDate5}
                                            onChange={handleDateChange5}
                                            locale="pt-BR"
                                            showTimeSelect
                                            timeFormat="p"
                                            timeIntervals={15}
                                            dateFormat="Pp"
                                        />
                                    </InputGroup>
                                    </Form.Group>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Time Picker with Limits
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form.Group>
                                    <InputGroup className="input-group">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
                                        <DatePicker
                                            selected={startDate6}
                                            onChange={handleDateChange6}
                                            showTimeSelect
                                            showTimeSelectOnly
                                            timeIntervals={15}
                                            timeCaption="Time"
                                            dateFormat="h:mm aa"
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Month Picker
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form.Group>
                                    <InputGroup className="input-group">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={handleDateChange}
                                            dateFormat="MM/yyyy"
                                            showMonthYearPicker
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-2 */}

                {/* Start:: row-3 */}
                <Row>
                    <Col xl={6}>
                        <Row>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Header>
                                        <Card.Title>
                                        Inline Time Picker
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="form-group mb-0">
                                            <div className="input-group">
                                                <DatePicker className="ti-form-input focus:z-10" selected={startDate5} onChange={(date) => 
                                                setStartDate5(date)} inline showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time"
                                                dateFormat="h:mm aa" />
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>   
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Inline Calendar
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="form-group overflow-auto">
                                <DatePicker selected={startDatei} onChange={(date) => setStartDatei(date)} inline/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* End:: row-3 */}
</Fragment>
);
};

export default Datetimepicker;