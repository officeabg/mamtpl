"use client"
import { Accountoptions, Countryoptions, Languageoptions, MaxLimitoptions, Maximumoptions } from "@/shared/data/pages/mail/mailsettingsdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Dropdown, Form, ListGroup, Nav, Tab } from "react-bootstrap";
const Select = dynamic(() => import("react-select"), { ssr: false });
const Mailsettings = () => {
    //email
    const [danger1, setdanger1] = useState("on");
    const [success1, setsuccess1] = useState("off");
    const [success2, setsuccess2] = useState("off");
    const [success3, setsuccess3] = useState("off");
    const [success4, setsuccess4] = useState("off");
    const [success5, setsuccess5] = useState("off");
    const [success6, setsuccess6] = useState("off");

    //account settings
    const [primary1, setprimary1] = useState("on");
    const [primary2, setprimary2] = useState("on");
    const [primary3, setprimary3] = useState("on");
    const [primary4, setprimary4] = useState("on");

    //Notifications
    const [successnotification1, setsuccessnotification1] = useState("on");
    const [successnotification2, setsuccessnotification2] = useState("off");
    const [successnotification3, setsuccessnotification3] = useState("on");
    const [successnotification4, setsuccessnotification4] = useState("on");
    const [successnotification5, setsuccessnotification5] = useState("on");
    const [successnotification6, setsuccessnotification6] = useState("on");
    const [successnotification7, setsuccessnotification7] = useState("on");
    const [successnotification8, setsuccessnotification8] = useState("off");
//security
const [securitysuccess1, setsecuritysuccess1] = useState("on");
const [securitysuccess2, setsecuritysuccess2] = useState("on");
const [securitysuccess3, setsecuritysuccess3] = useState("off");


//image upload
const [images, setImages] = useState<any>([]);
const [selectedImage, setSelectedImage] = useState(null);

const handleFileChange = (e:any) => {
    const file = e.target.files[0];
    if (file) {
        const reader:any = new FileReader();
        reader.onloadend = () => {
            setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
    }
};
return (
<Fragment>
                {/* Page Header */}
                    <Seo title={"Mail Settings"} />
                    <Pageheader Heading="Mail Settings" Pages={[{title:"Pages", active:true},{title:"Email", active:true},{title:"Mail Settings", active:false}]} />
                {/* Page Header Close */}

                {/* Start::row-1 */}
                <div className="row mb-5">
                    <Tab.Container defaultActiveKey="first">
                        <Col xl={3}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <Nav className="nav-tabs flex-column nav-tabs-header mb-0" role="tablist">
                                        <Nav.Item  className="m-1">
                                            <Nav.Link eventKey="first" className="" data-bs-toggle="tab" role="tab" aria-current="page"
                                            href="#personal-info" aria-selected="true">Personal Information</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item  className="m-1">
                                            <Nav.Link eventKey="second" className="" data-bs-toggle="tab" role="tab" aria-current="page"
                                            href="#account-settings" aria-selected="true">Account Settings</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item  className="m-1">
                                            <Nav.Link eventKey="third" className="" data-bs-toggle="tab" role="tab" aria-current="page"
                                            href="#email-settings" aria-selected="true">Email</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item  className="m-1">
                                            <Nav.Link eventKey="fourth" className="" data-bs-toggle="tab" role="tab" aria-current="page"
                                            href="#labels" aria-selected="true">Labels</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item  className="m-1">
                                            <Nav.Link eventKey="fifth" className="" data-bs-toggle="tab" role="tab" aria-current="page"
                                            href="#notification-settings" aria-selected="true">Notifications</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item  className="m-1">
                                            <Nav.Link eventKey="sixth" className="" data-bs-toggle="tab" role="tab" aria-current="page"
                                            href="#security" aria-selected="true">Security</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={9}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <Tab.Content className="">
                                        <Tab.Pane eventKey="first" className="show" id="personal-info"
                                            role="tabpanel">
                                            <div className="p-sm-3 p-0">
                                                <h6 className="fw-medium mb-3">
                                                    Photo :
                                                </h6>
                                                <div className="mb-4 d-sm-flex align-items-center">
                                                    <div className="mb-0 me-5">
                                                        <span className="avatar avatar-xxl avatar-rounded">
                                                            <img src={selectedImage || '../../../assets/images/faces/9.jpg'} alt="" id="profile-img"/>
                                                            <span className="badge rounded-pill bg-primary avatar-badge">
                                                                <input type="file" name="photo" className="position-absolute w-100 h-100 op-0" 
                                                                id="profile-change"
                                                                onChange={(e:any) => {
                                                                    handleFileChange(e);
                                                                    setImages([...images, e.target.files[0]]);
                                                                }} />
                                                                <i className="fe fe-camera"></i>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="btn-group">
                                                        <Button variant="" className="btn btn-primary">Change</Button>
                                                        <Button variant="" className="btn btn-light">Remove</Button>
                                                    </div>
                                                </div>
                                                <h6 className="fw-medium mb-3">
                                                    Profile :
                                                </h6>
                                                <div className="row gy-4 mb-4">
                                                    <Col xl={6}>
                                                        <label htmlFor="first-name" className="form-label">First Name</label>
                                                        <Form.Control type="text" className="" id="first-name" placeholder="First Name"/>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <label htmlFor="last-name" className="form-label">Last Name</label>
                                                        <Form.Control type="text" className="" id="last-name" placeholder="Last Name"/>
                                                    </Col>
                                                    <Col xl={12}>
                                                        <label className="form-label">User Name</label>
                                                        <div className="input-group mb-3">
                                                            <span className="input-group-text" id="basic-addon3">user2413@gmail.com</span>
                                                            <Form.Control type="text" className="" id="basic-url" aria-describedby="basic-addon3"/>
                                                        </div>
                                                    </Col>  
                                                </div>
                                                <h6 className="fw-medium mb-3">
                                                    Personal information :
                                                </h6>
                                                <div className="row gy-4 mb-4">
                                                    <Col xl={6}>
                                                        <label htmlFor="email-address" className="form-label">Email Address :</label>
                                                        <Form.Control type="text" className="" id="email-address" placeholder="xyz@gmail.com"/>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <label htmlFor="Contact-Details" className="form-label">Contact Details :</label>
                                                        <Form.Control type="text" className="" id="Contact-Details" placeholder="contact details"/>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <label htmlFor="language" className="form-label">Language :</label>
                                                            <Select isMulti name="colors" options={Languageoptions} className=""
                                                            menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Languageoptions[0]]}
                                                           />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <label className="form-label">Country :</label>
                                                        <Select name="colors" options={Countryoptions} className="w-full !rounded-md"
                                                            menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Countryoptions[0]]}
                                                          />
                                                    </Col>
                                                    <Col xl={12}>
                                                        <label htmlFor="bio" className="form-label">Bio :</label>
                                                        <Form.Control as="textarea" className="" id="bio" rows={5} defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!"></Form.Control>
                                                    </Col>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second" className="" id="account-settings"
                                            role="tabpanel">
                                            <div className="row gy-3">
                                                <Col xxl={7}>
                                                    <Card className="custom-card shadow-none mb-0 border">
                                                        <Card.Body>
                                                            <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                                                                <div className="w-75">
                                                                    <p className="fs-14 mb-1 fw-medium">Two Step Verification</p>
                                                                    <p className="fs-12 text-muted mb-0">Two step verificatoin is very secured and restricts in happening faulty practices.</p>
                                                                </div>
                                                                <div className={`toggle  ${primary1}`} onClick={() => { primary1 == "on" ? setprimary1("off") : setprimary1("on"); }}>
                                                                    <span></span>
                                                                </div>
                                                            </div>
                                                            <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                                                                <div className="mb-sm-0 mb-2 w-75">
                                                                    <p className="fs-14 mb-2 fw-medium">Authentication</p>
                                                                    <div className="mb-0 authentication-btn-group">
                                                                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" defaultChecked/>
                                                                            <label className="btn btn-outline-light" htmlFor="btnradio1"><i className="ri-lock-unlock-line me-1 align-middle d-inline-block"></i>Pin</label>
                                                                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2"/>
                                                                            <label className="btn btn-outline-light" htmlFor="btnradio2"><i className="ri-lock-password-line me-1 align-middle d-inline-block"></i>Password</label>
                                                                            <input type="radio" className="btn-check" name="btnradio" id="btnradio3"/>
                                                                            <label className="btn btn-outline-light" htmlFor="btnradio3"><i className="ri-fingerprint-line me-1 align-middle d-inline-block"></i>Finger Print</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className={`toggle  ${primary2}`} onClick={() => { primary2 == "on" ? setprimary2("off") : setprimary2("on"); }}>
                                                                    <span></span>
                                                                </div>
                                                            </div>
                                                            <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                                                                <div className="w-75">
                                                                    <p className="fs-14 mb-1 fw-medium">Recovery Mail</p>
                                                                    <p className="fs-12 text-muted mb-0">Incase of forgetting password mails are sent to  heifo@gmail.com</p>
                                                                </div>
                                                                <div className={`toggle  ${primary3}`} onClick={() => { primary3 == "on" ? setprimary3("off") : setprimary3("on"); }}>
                                                                    <span></span>
                                                                </div>
                                                            </div>
                                                            <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                                                                <div>
                                                                    <p className="fs-14 mb-1 fw-medium">SMS Recovery</p>
                                                                    <p className="fs-12 text-muted mb-0">SMS are sent to 9102312xx in case of recovery</p>
                                                                </div>
                                                                <div className={`toggle  ${primary4}`} onClick={() => { primary4 == "on" ? setprimary4("off") : setprimary4("on"); }}>
                                                                    <span></span>
                                                                </div>

                                                            </div>
                                                            <div className="d-flex align-items-top justify-content-between">
                                                                <div>
                                                                    <p className="fs-14 mb-1 fw-medium">Reset Password</p>
                                                                    <p className="fs-12 text-muted">Password should be min of <b className="text-success">8 digits<sup>*</sup></b>,atleast <b className="text-success">One Capital letter<sup>*</sup></b> and <b className="text-success">One Special Character<sup>*</sup></b> included.</p>
                                                                    <div className="mb-2">
                                                                        <Form.Label htmlFor="current-password" className="form-label">Current Password</Form.Label>
                                                                        <Form.Control type="text" className="" id="current-password" placeholder="Current Password" />
                                                                    </div>
                                                                    <div className="mb-2">
                                                                        <Form.Label htmlFor="new-password" className="form-label">New Password</Form.Label>
                                                                        <Form.Control type="text" className="" id="new-password" placeholder="New Password" /> 
                                                                    </div>
                                                                    <div className="mb-0">
                                                                        <Form.Label htmlFor="confirm-password" className="form-label">Confirm Password</Form.Label>
                                                                        <Form.Control type="text" className="" id="confirm-password" placeholder="Confirm Password" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col xxl={5}>
                                                    <div className="card custom-card shadow-none mb-0 border">
                                                        <div className="card-header justify-content-between d-sm-flex d-block">
                                                            <div className="card-title">Registered Devices</div>
                                                            <div className="mt-sm-0 mt-2">
                                                                <Button variant="" className="btn btn-sm btn-primary">Signout from all devices</Button>
                                                            </div>
                                                        </div>
                                                        <Card.Body>
                                                            <ListGroup as="ul">
                                                                <ListGroup.Item as="li">
                                                                    <div className="d-sm-flex d-block align-items-top">
                                                                        <div className="lh-1 mb-sm-0 mb-2"><i className="bi bi-phone me-2 fs-16 align-middle text-muted"></i></div>
                                                                        <div className="lh-1 flex-fill">
                                                                            <p className="mb-1">
                                                                                <span className="fw-medium">Mobile-LG-1023</span>
                                                                            </p>
                                                                            <p className="mb-0">
                                                                                <span className="text-muted fs-11">Manchester, UK-Nov 30, 04:45PM</span>
                                                                            </p>
                                                                        </div>
                                                                        <Dropdown className="mt-sm-0 mt-2">
                                                                            <Dropdown.Toggle variant="" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                <i className="fe fe-more-vertical"></i>
                                                                            </Dropdown.Toggle>
                                                                            <Dropdown.Menu as="ul">
                                                                                <li><Dropdown.Item href="#!">Action</Dropdown.Item></li>
                                                                                <li><Dropdown.Item href="#!">Another action</Dropdown.Item></li>
                                                                                <li><Dropdown.Item href="#!">Something else here</Dropdown.Item></li>
                                                                            </Dropdown.Menu>
                                                                        </Dropdown>
                                                                    </div>
                                                                </ListGroup.Item>
                                                                <ListGroup.Item as="li">
                                                                    <div className="d-sm-flex d-block align-items-top">
                                                                        <div className="lh-1 mb-sm-0 mb-2"><i className="bi bi-laptop me-2 fs-16 align-middle text-muted"></i></div>
                                                                        <div className="lh-1 flex-fill">
                                                                            <p className="mb-1">
                                                                                <span className="fw-medium">Lenovo-1291203</span>
                                                                            </p>
                                                                            <p className="mb-0">
                                                                                <span className="text-muted fs-11">England, UK-Aug 12, 12:25PM</span>
                                                                            </p>
                                                                        </div>
                                                                        <Dropdown className="mt-sm-0 mt-2">
                                                                            <Dropdown.Toggle variant="" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                <i className="fe fe-more-vertical"></i>
                                                                            </Dropdown.Toggle>
                                                                            <Dropdown.Menu as="ul">
                                                                                <li><Dropdown.Item href="#!">Action</Dropdown.Item></li>
                                                                                <li><Dropdown.Item href="#!">Another action</Dropdown.Item></li>
                                                                                <li><Dropdown.Item href="#!">Something else here</Dropdown.Item></li>
                                                                            </Dropdown.Menu>
                                                                        </Dropdown>
                                                                    </div>
                                                                </ListGroup.Item>
                                                                <ListGroup.Item as="li">
                                                                    <div className="d-sm-flex d-block align-items-top">
                                                                        <div className="lh-1 mb-sm-0 mb-2"><i className="bi bi-laptop me-2 fs-16 align-middle text-muted"></i></div>
                                                                        <div className="lh-1 flex-fill">
                                                                            <p className="mb-1">
                                                                                <span className="fw-medium">Macbook-Suzika</span>
                                                                            </p>
                                                                            <p className="mb-0">
                                                                                <span className="text-muted fs-11">Brightoon, UK-Jul 18, 8:34AM</span>
                                                                            </p>
                                                                        </div>
                                                                        <Dropdown className="mt-sm-0 mt-2">
                                                                            <Dropdown.Toggle variant="" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                <i className="fe fe-more-vertical"></i>
                                                                            </Dropdown.Toggle>
                                                                            <Dropdown.Menu as="ul">
                                                                                <li><Dropdown.Item href="#!">Action</Dropdown.Item></li>
                                                                                <li><Dropdown.Item href="#!">Another action</Dropdown.Item></li>
                                                                                <li><Dropdown.Item href="#!">Something else here</Dropdown.Item></li>
                                                                            </Dropdown.Menu>
                                                                        </Dropdown>
                                                                    </div>
                                                                </ListGroup.Item>
                                                                <ListGroup.Item as="li">
                                                                    <div className="d-sm-flex d-block align-items-top">
                                                                        <div className="lh-1 mb-sm-0 mb-2"><i className="bi bi-pc-display-horizontal me-2 fs-16 align-middle text-muted"></i></div>
                                                                        <div className="lh-1 flex-fill">
                                                                            <p className="mb-1">
                                                                                <span className="fw-medium">Apple-Desktop</span>
                                                                            </p>
                                                                            <p className="mb-0">
                                                                                <span className="text-muted fs-11">Darlington, UK-Jan 14, 11:14AM</span>
                                                                            </p>
                                                                        </div>
                                                                        <Dropdown className="mt-sm-0 mt-2">
                                                                            <Dropdown.Toggle variant="" href="#!" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                <i className="fe fe-more-vertical"></i>
                                                                            </Dropdown.Toggle>
                                                                            <Dropdown.Menu as="ul">
                                                                                <li><Dropdown.Item href="#!">Action</Dropdown.Item></li>
                                                                                <li><Dropdown.Item href="#!">Another action</Dropdown.Item></li>
                                                                                <li><Dropdown.Item href="#!">Something else here</Dropdown.Item></li>
                                                                            </Dropdown.Menu>
                                                                        </Dropdown>
                                                                    </div>
                                                                </ListGroup.Item>
                                                            </ListGroup>
                                                        </Card.Body>
                                                    </div>
                                                </Col>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third" className=" p-0" id="email-settings"
                                            role="tabpanel">
                                            <ListGroup as="ul" className="list-group list-group-flush rounded">
                                                <ListGroup.Item as="li">
                                                    <div className="row gy-2 d-sm-flex align-items-center justify-content-between">
                                                        <Col xl={3} lg={3} md={3} sm={12} className="">
                                                            <span className="fs-14 fw-medium mb-0">Menu View :</span>
                                                        </Col>
                                                        <Col xl={4}>
                                                            <div className="form-check">
                                                                <Form.Check className="" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                    Default View
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <Form.Check className="" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked/>
                                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                    Advanced View
                                                                </label>
                                                            </div>
                                                        </Col>
                                                        <Col xl={5}>
                                                            <div className={`toggle  mb-0 float-sm-end  toggle-danger ${danger1}`} onClick={() => { danger1 == "on" ? setdanger1("off") : setdanger1("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li">
                                                    <div className="row gy-3 d-sm-flex align-items-center justify-content-between">
                                                        <Col xl={3}>
                                                            <span className="fs-14 fw-medium mb-0">Language :</span>
                                                        </Col>
                                                        <Col xl={4}>
                                                        <Select isMulti name="colors" options={Languageoptions} className="basic-multi-select"
                                                            menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Languageoptions[0], Languageoptions[1]]}
                                                        />
                                                        </Col>
                                                        <Col xl={5}>
                                                            <div className={`toggle mb-0 float-sm-end  toggle-success ${success1}`} onClick={() => { success1 == "on" ? setsuccess1("off") : setsuccess1("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li">
                                                    <div className="row gy-2 d-sm-flex align-items-center justify-content-between">
                                                        <Col xl={3}>
                                                            <span className="fs-14 fw-medium mb-0">Images :</span>
                                                        </Col>
                                                        <Col xl={4}>
                                                            <div className="form-check">
                                                                <Form.Check className="" type="radio" name="images-open" id="images-open1"/>
                                                                <label className="form-check-label" htmlFor="images-open1">
                                                                    Always Open Images
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <Form.Check className="" type="radio" name="images-open" id="images-hide2" defaultChecked/>
                                                                <label className="form-check-label" htmlFor="images-hide2">
                                                                    Ask For Permission
                                                                </label>
                                                            </div>
                                                        </Col>
                                                        <Col xl={5}>
                                                            <div className={`toggle mb-0 float-sm-end  toggle-success ${success2}`} onClick={() => { success2 == "on" ? setsuccess2("off") : setsuccess2("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li">
                                                    <div className="row gy-2 d-sm-flex align-items-center justify-content-between">
                                                        <Col xl={3}>
                                                            <span className="fs-14 fw-medium mb-0">Keyboard Shortcuts :</span>
                                                        </Col>
                                                        <Col xl={4}>
                                                            <div className="form-check">
                                                                <Form.Check className="" type="radio" name="keyboard-enable" id="keyboard-enable1"/>
                                                                <label className="form-check-label" htmlFor="keyboard-enable1">
                                                                    Keyboard Shortcuts Enable
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <Form.Check className="" type="radio" name="keyboard-enable" id="keyboard-disable2" defaultChecked/>
                                                                <label className="form-check-label" htmlFor="keyboard-disable2">
                                                                    Keyboard Shortcuts Disable
                                                                </label>
                                                            </div>
                                                        </Col>
                                                        <Col xl={5}>
                                                            <div className={`toggle mb-0 float-sm-end  toggle-success ${success3}`} onClick={() => { success3 == "on" ? setsuccess3("off") : setsuccess3("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li">
                                                    <div className="row gy-2 d-sm-flex align-items-center justify-content-between">
                                                        <Col xl={3}>
                                                            <span className="fs-14 fw-medium mb-0">Notifications :</span>
                                                        </Col>
                                                        <Col xl={4}>
                                                            <div className="form-check">
                                                                <Form.Check className="" type="checkbox"  id="desktop-notifications" defaultChecked/>
                                                                <label className="form-check-label" htmlFor="desktop-notifications">
                                                                    Desktop Notifications
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <Form.Check className="" type="checkbox"  id="mobile-notifications"/>
                                                                <label className="form-check-label" htmlFor="mobile-notifications">
                                                                    Mobile Notifications
                                                                </label>
                                                            </div>
                                                        </Col>
                                                        <Col xl={5}>
                                                            <div className="float-sm-end">
                                                                <a href="#!" className="btn btn-success-ghost btn-sm">Learn-more</a>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li">
                                                    <div className="row gy-3 d-sm-flex align-items-center justify-content-between">
                                                        <Col xl={3}>
                                                            <span className="fs-14 fw-medium mb-0">Maximum Mails Per Page :</span>
                                                        </Col>
                                                        <Col xl={4}>
                                                        <Select  name="colors" options={Maximumoptions} className="basic-multi-select"
															menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Maximumoptions[0]]}
														/>
                                                        </Col>
                                                        <Col xl={5}>
                                                            <div className={`toggle mb-0 float-sm-end  toggle-success ${success4}`} onClick={() => { success4 == "on" ? setsuccess4("off") : setsuccess4("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li">
                                                    <div className="row gy-2 d-sm-flex align-items-center justify-content-between">
                                                        <Col xl={3}>
                                                            <span className="fs-14 fw-medium mb-0">Mail Composer :</span>
                                                        </Col>
                                                        <Col xl={4}>
                                                            <div className="form-check">
                                                                <Form.Check className="" type="radio" name="mail-composer" id="mail-composeron1"/>
                                                                <label className="form-check-label" htmlFor="mail-composeron1">
                                                                    Mail Composer On
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <Form.Check className="" type="radio" name="mail-composer" id="mail-composeroff2" defaultChecked/>
                                                                <label className="form-check-label" htmlFor="mail-composeroff2">
                                                                    Mail Composer Off
                                                                </label>
                                                            </div>
                                                        </Col>
                                                        <Col xl={5}>
                                                             <div className={`toggle mb-0 float-sm-end  toggle-success ${success5}`} onClick={() => { success5 == "on" ? setsuccess5("off") : setsuccess5("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li">
                                                    <div className="row gy-2 d-sm-flex align-items-center justify-content-between">
                                                        <Col xl={3}>
                                                            <span className="fs-14 fw-medium mb-0">Auto Correct :</span>
                                                        </Col>
                                                        <Col xl={4}>
                                                            <div className="form-check">
                                                                <Form.Check className="" type="radio" name="auto-correct" id="auto-correcton1"/>
                                                                <label className="form-check-label" htmlFor="auto-correcton1">
                                                                    Auto Correct On
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <Form.Check className="" type="radio" name="auto-correct" id="auto-correctoff2" defaultChecked/>
                                                                <label className="form-check-label" htmlFor="auto-correctoff2">
                                                                    Auto Correct Off
                                                                </label>
                                                            </div>
                                                        </Col>
                                                        <Col xl={5}>
                                                             <div className={`toggle mb-0 float-sm-end  toggle-success ${success6}`} onClick={() => { success6 == "on" ? setsuccess6("off") : setsuccess6("on"); }} >
                                                                <span></span>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li">
                                                    <div className="row gy-2 d-sm-flex align-items-center justify-content-between">
                                                        <Col xl={3}>
                                                            <span className="fs-14 fw-medium mb-0">Mail Send Action :</span>
                                                        </Col>
                                                        <Col xl={4}>
                                                            <div className="form-check">
                                                                <Form.Check className="" type="checkbox"  id="on-keyboard" defaultChecked/>
                                                                <label className="form-check-label" htmlFor="on-keyboard">
                                                                    On Keyboard Action
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <Form.Check className="" type="checkbox"  id="on-buttonclick"/>
                                                                <label className="form-check-label" htmlFor="on-buttonclick">
                                                                    On Button Click
                                                                </label>
                                                            </div>
                                                        </Col>
                                                        <Col xl={5}>
                                                            <div className="float-sm-end">
                                                                <a href="#!" className="btn btn-success-ghost btn-sm">Learn-more</a>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourth" className="" id="labels"
                                            role="tabpanel">
                                            <p className="fs-14 fw-medium mb-3">Mail Labels :</p>
                                            <div className="row gy-2">
                                                <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                    <div className="card custom-card shadow-none">
                                                        <div className="card-body">
                                                            <div className="form-check form-check-md form-switch mb-0">
                                                                <Form.Check className="" type="checkbox" role="switch"
                                                                    id="label-all-mails" defaultChecked/>
                                                                <label className="form-check-label ms-2" htmlFor="label-all-mails">All Mails</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                    <div className="card custom-card shadow-none">
                                                        <div className="card-body">
                                                            <div className="form-check form-check-md form-switch mb-0">
                                                                <Form.Check className="" type="checkbox" role="switch"
                                                                    id="label-sent" defaultChecked/>
                                                                <label className="form-check-label ms-2" htmlFor="label-sent">Inbox</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                    <div className="card custom-card shadow-none">
                                                        <div className="card-body">
                                                            <div className="form-check form-check-md form-switch mb-0">
                                                                <Form.Check className="" type="checkbox" role="switch"
                                                                    id="label-sent2" defaultChecked/>
                                                                <label className="form-check-label ms-2" htmlFor="label-sent2">Sent</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                    <div className="card custom-card shadow-none">
                                                        <div className="card-body">
                                                            <div className="form-check form-check-md form-switch mb-0">
                                                                <Form.Check className="" type="checkbox" role="switch"
                                                                    id="label-drafts" defaultChecked/>
                                                                <label className="form-check-label ms-2" htmlFor="label-drafts">Drafts</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                    <div className="card custom-card shadow-none">
                                                        <div className="card-body">
                                                            <div className="form-check form-check-md form-switch mb-0">
                                                                <Form.Check className="" type="checkbox" role="switch"
                                                                    id="label-spam" defaultChecked/>
                                                                <label className="form-check-label ms-2" htmlFor="label-spam">Spam</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                    <div className="card custom-card shadow-none">
                                                        <div className="card-body">
                                                            <div className="form-check form-check-md form-switch mb-0">
                                                                <Form.Check className="" type="checkbox" role="switch"
                                                                    id="label-important" defaultChecked/>
                                                                <label className="form-check-label ms-2" htmlFor="label-important">Important</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                    <div className="card custom-card shadow-none">
                                                        <div className="card-body">
                                                            <div className="form-check form-check-md form-switch mb-0">
                                                                <Form.Check className="" type="checkbox" role="switch"
                                                                    id="label-trash" defaultChecked/>
                                                                <label className="form-check-label ms-2" htmlFor="label-trash">Trash</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                    <div className="card custom-card shadow-none">
                                                        <div className="card-body">
                                                            <div className="form-check form-check-md form-switch mb-0">
                                                                <Form.Check className="" type="checkbox" role="switch"
                                                                    id="label-archive" defaultChecked/>
                                                                <label className="form-check-label ms-2" htmlFor="label-archive">Archive</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                    <div className="card custom-card shadow-none">
                                                        <div className="card-body">
                                                            <div className="form-check form-check-md form-switch mb-0">
                                                                <Form.Check className="" type="checkbox" role="switch"
                                                                    id="label-starred" defaultChecked/>
                                                                <label className="form-check-label ms-2" htmlFor="label-starred">Starred</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </div>
                                            <p className="fs-14 fw-medium mb-3">Settings :</p>
                                            <div className="row gy-2">
                                                <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                    <div className="card custom-card shadow-none">
                                                        <div className="card-body">
                                                            <div className="form-check form-check-md form-switch mb-0">
                                                                <Form.Check className="" type="checkbox" role="switch"
                                                                    id="label-settings" defaultChecked/>
                                                                <label className="form-check-label ms-2" htmlFor="label-settings">Settings</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </div>    
                                            <p className="fs-14 fw-medium mb-3">Custom Labels :</p>
                                            <div className="row gy-2">
                                                <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                    <div className="card custom-card shadow-none">
                                                        <div className="card-body">
                                                            <div className="form-check form-check-md form-switch mb-0">
                                                                <Form.Check className="" type="checkbox" role="switch"
                                                                    id="label-mail" defaultChecked/>
                                                                <label className="form-check-label ms-2" htmlFor="label-mail">Mail</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                    <div className="card custom-card shadow-none">
                                                        <div className="card-body">
                                                            <div className="form-check form-check-md form-switch mb-0">
                                                                <Form.Check className="" type="checkbox" role="switch"
                                                                    id="label-home" defaultChecked/>
                                                                <label className="form-check-label ms-2" htmlFor="label-home">Home</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                    <div className="card custom-card shadow-none">
                                                        <div className="card-body">
                                                            <div className="form-check form-check-md form-switch mb-0">
                                                                <Form.Check className="" type="checkbox" role="switch"
                                                                    id="label-work" defaultChecked/>
                                                                <label className="form-check-label ms-2" htmlFor="label-work">Work</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={6} lg={4} md={4} sm={6} className="col-12">
                                                    <div className="card custom-card shadow-none">
                                                        <div className="card-body">
                                                            <div className="form-check form-check-md form-switch mb-0">
                                                                <Form.Check className="" type="checkbox" role="switch"
                                                                    id="label-friends" defaultChecked/>
                                                                <label className="form-check-label ms-2" htmlFor="label-friends">Friends</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </div>    
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fifth" className=" p-0" id="notification-settings"
                                            role="tabpanel">
                                            <ul className="list-group list-group-flush list-unstyled rounded">
                                                <ListGroup.Item as="li">
                                                    <div className="row gx-5 gy-3">
                                                        <Col xl={5}>
                                                            <p className="fs-16 mb-1 fw-medium">Email Notifications</p>
                                                            <p className="fs-12 mb-0 text-muted">Email notifications are the notifications you will receeive when you are offline, you can customize them by enabling or disabling them.</p>
                                                        </Col>
                                                        <Col xl={7}>
                                                            <div className="d-flex align-items-top justify-content-between mt-sm-0 mt-3">
                                                                <div className="mail-notification-settings">
                                                                    <p className="fs-14 mb-1 fw-medium">Updates & Features</p>
                                                                    <p className="fs-12 mb-0 text-muted">Notifications about new updates and their features.</p>
                                                                </div>
                                                                <div className={`toggle mb-3  toggle-success ${successnotification1}`} onClick={() => { successnotification1 == "on" ? setsuccessnotification1("off") : setsuccessnotification1("on"); }} >
                                                                    <span></span>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-top justify-content-between mt-3">
                                                                <div className="mail-notification-settings">
                                                                    <p className="fs-14 mb-1 fw-medium">Early Access</p>
                                                                    <p className="fs-12 mb-0 text-muted">Users are selected for beta testing of new update,notifications relating or participate in any of paid product promotion.</p>
                                                                </div>
                                                                <div className={`toggle mb-3  toggle-success ${successnotification2}`} onClick={() => { successnotification2 == "on" ? setsuccessnotification2("off") : setsuccessnotification2("on"); }} >
                                                                    <span></span>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-top justify-content-between mt-3">
                                                                <div className="mail-notification-settings">
                                                                    <p className="fs-14 mb-1 fw-medium">Email Shortcuts</p>
                                                                    <p className="fs-12 mb-0 text-muted">Shortcut notifications for email.</p>
                                                                </div>
                                                                <div className={`toggle mb-3  toggle-success ${successnotification3}`} onClick={() => { successnotification3 == "on" ? setsuccessnotification3("off") : setsuccessnotification3("on"); }} >
                                                                    <span></span>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-top justify-content-between mt-3">
                                                                <div className="mail-notification-settings">
                                                                    <p className="fs-14 mb-1 fw-medium">New Mails</p>
                                                                    <p className="fs-12 mb-0 text-muted">Notifications related to new mails received.</p>
                                                                </div>
                                                                 <div className={`toggle mb-3  toggle-success ${successnotification4}`} onClick={() => { successnotification4 == "on" ? setsuccessnotification4("off") : setsuccessnotification4("on"); }} >
                                                                    <span></span>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-top justify-content-between mt-3">
                                                                <div className="mail-notification-settings">
                                                                    <p className="fs-14 mb-1 fw-medium">Mail Chat Messages</p>
                                                                    <p className="fs-12 mb-0 text-muted">Any of new messages are received will be updated through notifications.</p>
                                                                </div>
                                                                <div className={`toggle mb-3  toggle-success ${successnotification5}`} onClick={() => { successnotification5 == "on" ? setsuccessnotification5("off") : setsuccessnotification5("on"); }} >
                                                                    <span></span>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li">
                                                    <div className="row gx-5 gy-3">
                                                        <Col xl={5}>
                                                            <p className="fs-16 mb-1 fw-medium">Push Notifications</p>
                                                            <p className="fs-12 mb-0 text-muted">Push notifications are recieved when you are online, you can customize them by enabling or disabling them.</p>
                                                        </Col>
                                                        <Col xl={7}>
                                                            <div className="d-flex align-items-top justify-content-between mt-sm-0 mt-3">
                                                                <div className="mail-notification-settings">
                                                                    <p className="fs-14 mb-1 fw-medium">New Mails</p>
                                                                    <p className="fs-12 mb-0 text-muted">Notifications related to new mails received.</p>
                                                                </div>
                                                                <div className={`toggle mb-3  toggle-success ${successnotification6}`} onClick={() => { successnotification6 == "on" ? setsuccessnotification6("off") : setsuccessnotification6("on"); }} >
                                                                    <span></span>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-top justify-content-between mt-3">
                                                                <div className="mail-notification-settings">
                                                                    <p className="fs-14 mb-1 fw-medium">Mail Chat Messages</p>
                                                                    <p className="fs-12 mb-0 text-muted">Any of new messages are received will be updated through notifications.</p>
                                                                </div>
                                                                <div className={`toggle mb-3  toggle-success ${successnotification7}`} onClick={() => { successnotification7 == "on" ? setsuccessnotification7("off") : setsuccessnotification7("on"); }} >
                                                                    <span></span>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-top justify-content-between mt-3">
                                                                <div className="mail-notification-settings">
                                                                    <p className="fs-14 mb-1 fw-medium">Mail Extensions</p>
                                                                    <p className="fs-12 mb-0 text-muted">Notifications related to the extensions received by new emails and thier propertied also been displayed.</p>
                                                                </div>
                                                                <div className={`toggle mb-3  toggle-success ${successnotification8}`} onClick={() => { successnotification8 == "on" ? setsuccessnotification8("off") : setsuccessnotification8("on"); }} >
                                                                    <span></span>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </ListGroup.Item>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="sixth" className=" p-0" id="security"
                                            role="tabpanel">
                                            <ListGroup className="list-group list-group-flush list-unstyled rounded">
                                                <ListGroup.Item as="li">
                                                    <div className="row gx-5 gy-3">
                                                        <Col xl={4}>
                                                            <p className="fs-16 mb-1 fw-medium">Logging In</p>
                                                            <p className="fs-12 mb-0 text-muted">Security settings related to logging into our email account and taking down account if any mischevious action happended.</p>
                                                        </Col>
                                                        <Col xl={8}>
                                                            <div className="d-sm-flex d-block align-items-top justify-content-between mt-sm-0 mt-3">
                                                                <div className="mail-security-settings">
                                                                    <p className="fs-14 mb-1 fw-medium">Max Limit for login attempts</p>
                                                                    <p className="fs-12 mb-0 text-muted mb-sm-0 mb-2">Account will freeze for 24hrs while attempt to login with wrong credentials for selected number of times</p>
                                                                </div>
                                                                <div>
                                                                <Select name="colors" options={MaxLimitoptions} className="basic-multi-select"
																		menuPlacement='auto' classNamePrefix="Select2" defaultValue={[MaxLimitoptions[0]]}
																	/>
                                                                </div>
                                                            </div>
                                                            <div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                                                <div>
                                                                    <p className="fs-14 mb-1 fw-medium">Account Freeze time management</p>
                                                                    <p className="fs-12 mb-0 text-muted mb-sm-0 mb-2">You can change the time for the account freeze when attempts for </p>
                                                                </div>
                                                                <div>
                                                                <Select name="colors" options={Accountoptions} className="basic-multi-select"
																		menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Accountoptions[0]]}
																	/>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li">
                                                    <div className="row gx-5 gy-3">
                                                        <Col xl={4}>
                                                            <p className="fs-16 mb-1 fw-medium">Password Requirements</p>
                                                            <p className="fs-12 mb-0 text-muted">Security settings related to password strength.</p>
                                                        </Col>
                                                        <Col xl={8}>
                                                            <div className="d-sm-flex d-block align-items-top justify-content-between mt-sm-0 mt-3 gap-3">
                                                                <div className="mail-security-settings">
                                                                    <p className="fs-14 mb-1 fw-medium">Minimum number of characters in the password</p>
                                                                    <p className="fs-12 mb-0 text-muted">There should be a minimum number of characters for a password to be validated that shouls be set here.</p>
                                                                </div>
                                                                <div>
                                                                    <Form.Control type="text" className="" defaultValue="8"/>
                                                                </div>
                                                            </div>
                                                            <div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                                                <div>
                                                                    <p className="fs-14 mb-1 fw-medium">Contain A Number</p>
                                                                    <p className="fs-12 mb-0 text-muted">Password should contain a number.</p>
                                                                </div>
                                                                <div className={`toggle mb-3  toggle-success ${securitysuccess1}`} onClick={() => { securitysuccess1 == "on" ? setsecuritysuccess1("off") : setsecuritysuccess1("on"); }} >
                                                                    <span></span>
                                                                </div>
                                                            </div>
                                                            <div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                                                <div>
                                                                    <p className="fs-14 mb-1 fw-medium">Contain A Special Character</p>
                                                                    <p className="fs-12 mb-0 text-muted">Password should contain a special Character.</p>
                                                                </div>
                                                                   <div className={`toggle mb-3  toggle-success ${securitysuccess2}`} onClick={() => { securitysuccess2 == "on" ? setsecuritysuccess2("off") : setsecuritysuccess2("on"); }} >
                                                                    <span></span>
                                                                </div>
                                                            </div>
                                                            <div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                                                <div>
                                                                    <p className="fs-14 mb-1 fw-medium">Atleast One Capital Letter</p>
                                                                    <p className="fs-12 mb-0 text-muted">Password should contain atleast one capital letter.</p>
                                                                </div>
                                                                 <div className={`toggle mb-3  toggle-success ${securitysuccess3}`} onClick={() => { securitysuccess3 == "on" ? setsecuritysuccess3("off") : setsecuritysuccess3("on"); }} >
                                                                    <span></span>
                                                                </div>
                                                            </div>
                                                            <div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                                                <div>
                                                                    <p className="fs-14 mb-1 fw-medium">Maximum Password Length</p>
                                                                    <p className="fs-12 mb-0 text-muted">Maximum password lenth should be selected here.</p>
                                                                </div>
                                                                <div>
                                                                    <Form.Control type="text" className="" defaultValue="16"/>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li">
                                                    <div className="row gx-5 gy-3">
                                                        <Col xl={4}>
                                                            <p className="fs-16 mb-1 fw-medium">Unknown Chats</p>
                                                            <p className="fs-12 mb-0 text-muted">Security settings related to unknown chats.</p>
                                                        </Col>
                                                        <Col xl={8}>
                                                            <div className="btn-group float-sm-end" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="btnunknownchats" id="unknown-chats-show" defaultChecked/>
                                                                <label className="btn btn-outline-light" htmlFor="unknown-chats-show">Show</label>
                                                                <input type="radio" className="btn-check" name="btnunknownchats" id="unknown-chats-hide"/>
                                                                <label className="btn btn-outline-light" htmlFor="unknown-chats-hide">Hide</label>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </ListGroup.Item>
                                            </ListGroup>    
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="float-end">
                                        <Button variant="" className="btn btn-light m-1">
                                            Restore Defaults
                                        </Button>
                                        <Button variant="" className="btn btn-primary m-1">
                                            Save Changes
                                        </Button>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Tab.Container>
                </div>
                {/*End::row-1 */}
</Fragment>
    );
};

export default Mailsettings;