"use client"
import { tabledata1, tabledata10, tabledata11, tabledata12, tabledata13, tabledata14, tabledata15, tabledata16, tabledata17, tabledata18, tabledata19, tabledata2, tabledata20, tabledata21, tabledata22, tabledata23, tabledata24, tabledata25, tabledata26, tabledata27, tabledata28, tabledata29, tabledata3, tabledata30, tabledata31, tabledata32, tabledata4, tabledata5, tabledata6, tabledata7, tabledata8, tabledata9 } from "@/shared/data/prism/tables-prism";
import { Table10data, Table11data, Table12data, Table13data, Table1data, Table2data, Table3data, Table4data, Table5data, Table6data, Table7data, Table8data, Table9data } from "@/shared/data/tables/tabledata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import ShowCode from "@/shared/layout-components/showcode/showcode";
import React, { Fragment } from "react";
import { Badge, Button,  Col, Form, ProgressBar, Row, Table } from "react-bootstrap";

const Tables = () => {
return (
<Fragment>
            {/* Page Header */}
                 <Seo title={"Tables"} />
                <Pageheader Heading="Tables" Pages={[{title:"Tables", active:true},{title:"Tables", active:false}]} />
            {/* Page Header Close */}

                {/* Start:: row-1 */}
                <Row>
                    <Col xl={6}>
                        <ShowCode title="Basic Tables" customCardClass="custom-card" customCardBodyClass="" code={tabledata1}>
                                <div className="table-responsive">
                                        <Table className="table text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Created On</th>
                                                    <th scope="col">Number</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Mark</th>
                                                    <td>21,Dec 2021</td>
                                                    <td>+1234-12340</td>
                                                    <td><Badge bg="outline-primary" className="badge">Completed</Badge></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Monika</th>
                                                    <td>29,April 2024</td>
                                                    <td>+1523-12459</td>
                                                    <td><Badge bg="outline-warning" className="badge">Failed</Badge></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Madina</th>
                                                    <td>30,Nov 2024</td>
                                                    <td>+1982-16234</td>
                                                    <td><Badge bg="outline-success" className="badge">Successful</Badge></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Bhamako</th>
                                                    <td>18,Mar 2024</td>
                                                    <td>+1526-10729</td>
                                                    <td><Badge bg="outline-secondary" className="badge">Pending</Badge></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                </div>
                        </ShowCode>
                    </Col>
                    <Col xl={6}>
                        <ShowCode title="Bordered Tables" code={tabledata2} customCardClass="custom-card">
                                <div className="table-responsive">
                                    <Table className="table text-nowrap table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">User</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {Table1data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                            <img src={idx.src} alt="img" />
                                                        </span>{idx.name}
                                                    </div>
                                                </th>
                                                <td><Badge bg={idx.color} className={`badge ${idx.class}`}>{idx.text}</Badge></td>
                                                <td>{idx.mail}</td>
                                                <td>
                                                    <div className="hstack gap-2 flex-wrap">
                                                        <a href="#!" className="text-info fs-14 lh-1"><i
                                                                className="ri-edit-line"></i></a>
                                                        <a href="#!" className="text-danger fs-14 lh-1"><i
                                                                className="ri-delete-bin-5-line"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </Table>
                                </div>
                        </ShowCode>
                    </Col>
                </Row>
                {/* End:: row-1 */}

                {/* Start:: row-2 */}
                <Row>
                    <Col xl={4}>
                        <ShowCode title="Bordered Primary" code={tabledata3} customCardClass="custom-card">
                            <div className="table-responsive">
                                <Table className="table text-nowrap table-bordered border-primary">
                                    <thead>
                                        <tr>
                                            <th scope="col">Order</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {Table4data.map((idx) => (
                                        <tr key={Math.random()}>
                                            <th scope="row">
                                                {idx.order}
                                            </th>
                                            <td>
                                                <span className="badge bg-light text-dark">{idx.date}</span>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src={idx.src} alt="img" />
                                                    </span>{idx.name}
                                                </div>
                                            </td>
                                            <td><span className="badge bg-primary-transparent">Booked</span></td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table>
                            </div>
                        </ShowCode>
                    </Col>
                    <Col xl={4}>
                        <ShowCode title="Bordered Success" customCardClass="custom-card" customCardBodyClass="" code={tabledata4}>
                            <div className="table-responsive">
                                <Table className="table text-nowrap table-bordered border-success">
                                    <thead>
                                        <tr>
                                            <th scope="col">Order</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table5data.map((idx) => (
                                                <tr key={Math.random()}>
                                                    <th scope="row">
                                                        {idx.order}
                                                    </th>
                                                    <td>
                                                        <span className="badge bg-light text-dark">{idx.date}</span>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                                <img src={idx.src} alt="img" />
                                                            </span>{idx.name}
                                                        </div>
                                                    </td>
                                                    <td><span className="badge bg-success-transparent">Delivered</span></td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </Table>
                            </div>
                        </ShowCode>
                    </Col>
                    <Col xl={4}>
                        <ShowCode title="Bordered warning" customCardClass="custom-card" customCardBodyClass="" code={tabledata5}>
                            <div className="table-responsive">
                                <Table className="table text-nowrap table-bordered border-warning">
                                    <thead>
                                        <tr>
                                            <th scope="col">Order</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table6data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">
                                                    {idx.order}
                                                </th>
                                                <td>
                                                    <span className="badge bg-light text-dark">{idx.date}</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                            <img src={idx.src} alt="img" />
                                                        </span>{idx.name}
                                                    </div>
                                                </td>
                                                <td><span className="badge bg-warning-transparent">Accepted</span></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </ShowCode>
                    </Col>
                </Row>
                {/* End:: row-2 */}

                {/* Start:: row-3 */}
                <Row>
                    <Col xl={6}>
                        <ShowCode title="Table Without Borders" customCardClass="custom-card" customCardBodyClass="p-0" code={tabledata6}>
                            <div className="table-responsive">
                                <Table className="table text-nowrap table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">User Name</th>
                                            <th scope="col">Transaction Id</th>
                                            <th scope="col">Created</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Harshrath</th>
                                            <td>#5182-3467</td>
                                            <td>24 May 2024</td>
                                            <td><span className="badge bg-primary">Fixed</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Zozo Hadid</th>
                                            <td>#5182-3412</td>
                                            <td>02 July 2024</td>
                                            <td><span className="badge bg-warning">In Progress</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Martiana</th>
                                            <td>#5182-3423</td>
                                            <td>15 April 2024</td>
                                            <td><span className="badge bg-success">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Alex Carey</th>
                                            <td>#5182-3456</td>
                                            <td>17 March 2024</td>
                                            <td><span className="badge bg-danger">Pending</span></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </ShowCode>
                    </Col>
                    <Col xl={6}>
                        <ShowCode title="Table Group Divideres" customCardClass="custom-card" customCardBodyClass="" code={tabledata7}>
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Seller</th>
                                            <th scope="col">Sale Percentage</th>
                                            <th scope="col">Quantity Sold</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-group-divider">
                                        <tr>
                                            <th scope="row">Smart Watch</th>
                                            <td>Slowtrack.inc</td>
                                            <td><a href="#!" className="text-success">24.23%<i
                                                        className="ri-arrow-up-fill ms-1"></i></a></td>
                                            <td>250/1786</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">White Sneakers</th>
                                            <td>American & Co.inc</td>
                                            <td><a href="#!" className="text-danger">12.45%<i
                                                        className="ri-arrow-down-fill ms-1"></i></a></td>
                                            <td>123/985</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Baseball Bat</th>
                                            <td>Sports Company</td>
                                            <td><a href="#!" className="text-success">06.64%<i
                                                        className="ri-arrow-up-fill ms-1"></i></a></td>
                                            <td>124/232</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Black Hoodie</th>
                                            <td>Renonds Fabrics</td>
                                            <td><a href="#!" className="text-success">14.42%<i
                                                        className="ri-arrow-up-fill ms-1"></i></a></td>
                                            <td>192/2456</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </ShowCode>
                    </Col>
                </Row>
                {/* End:: row-3 */}

                {/* Start:: row-4 */}
                <Row>
                    <Col xl={6}>
                        <ShowCode title="Striped rows" customCardClass="custom-card" customCardBodyClass="" code={tabledata8}>
                            <div className="table-responsive">
                                <Table className="table text-nowrap table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {Table13data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">{idx.text1}</th>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src={idx.src} alt="img" />
                                                        </div>
                                                        <div>
                                                            <div className="lh-1">
                                                                <span>{idx.name}</span>
                                                            </div>
                                                            <div className="lh-1">
                                                                <span
                                                                    className="fs-11 text-muted">{idx.mail}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><Badge bg={idx.color} className={`badge ${idx.class}`}><i
                                                    className={`ri-${idx.icon} align-middle me-1`}></i>{idx.text2}</Badge></td>
                                                <td>{idx.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </ShowCode>
                    </Col>
                    <Col xl={6}>
                        <ShowCode title="Striped columns" customCardClass="custom-card" customCardBodyClass="" code={tabledata9}>
                            <div className="table-responsive">
                                <Table className="table text-nowrap table-striped-columns">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table2data.map((idx) => (
                                                <tr key={Math.random()}>
                                                    <th scope="row">{idx.order}</th>
                                                    <td>{idx.date}</td>
                                                    <td>{idx.name}</td>
                                                    <td>
                                                        <div className="hstack gap-2 fs-15">
                                                            <a href="#!" className="btn btn-icon btn-sm btn-info-light rounded-pill"><i className="ri-edit-line"></i></a>
                                                            <a href="#!" className="btn btn-icon btn-sm btn-danger-light rounded-pill"><i className="ri-delete-bin-line"></i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </Table>
                            </div>
                        </ShowCode>
                    </Col>
                </Row>
                {/* End:: row-4 */}

                {/* Start:: row-5 */}
                <Row>
                    <Col xl={4}>
                        <ShowCode title="Primary Table" customCardClass="custom-card" customCardBodyClass="" code={tabledata10}>
                            <div className="table-responsive">
                                <Table className="table text-nowrap table-primary">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table3data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">1</th>
                                                <td>{idx.text1}</td>
                                                <td>{idx.text2}</td>
                                                <td>{idx.text3}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </ShowCode>
                    </Col>
                    <Col xl={4}>
                        <ShowCode title="Secondary Table" customCardClass="custom-card" customCardBodyClass="" code={tabledata11}>
                            <div className="table-responsive">
                                <Table className="table text-nowrap table-secondary">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table3data.map((idx) => (
                                        <tr key={Math.random()}>
                                            <th scope="row">1</th>
                                            <td>{idx.text1}</td>
                                            <td>{idx.text2}</td>
                                            <td>{idx.text3}</td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </ShowCode>
                    </Col>
                    <Col xl={4}>
                        <ShowCode title="Warning Table" customCardClass="custom-card" customCardBodyClass="" code={tabledata12}>
                            <div className="table-responsive">
                                <Table className="table text-nowrap table-warning">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table3data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">1</th>
                                                <td>{idx.text1}</td>
                                                <td>{idx.text2}</td>
                                                <td>{idx.text3}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </ShowCode>
                    </Col>
                    <Col xl={4}>
                        <ShowCode title="Danger Table" customCardClass="custom-card" customCardBodyClass="" code={tabledata13}>
                            <div className="table-responsive">
                                <Table className="table text-nowrap table-danger">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table3data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">1</th>
                                                <td>{idx.text1}</td>
                                                <td>{idx.text2}</td>
                                                <td>{idx.text3}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </ShowCode>
                    </Col>
                    <Col xl={4}>
                        <ShowCode title="Dark Table" customCardClass="custom-card" customCardBodyClass="" code={tabledata14}>
                            <div className="table-responsive">
                                <Table className="table text-nowrap table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table3data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">1</th>
                                                <td>{idx.text1}</td>
                                                <td>{idx.text2}</td>
                                                <td>{idx.text3}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </ShowCode>
                    </Col>
                    <Col xl={4}>
                        <ShowCode title="Success Table With Striped Rows" customCardClass="custom-card" customCardBodyClass="" code={tabledata15}>
                            <div className="table-responsive">
                                <Table className="table text-nowrap table-success table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table3data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">1</th>
                                                <td>{idx.text1}</td>
                                                <td>{idx.text2}</td>
                                                <td>{idx.text3}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </ShowCode>
                    </Col>
                </Row>
                {/* End:: row-5 */}

                {/* Start:: row-6 */}
                <Row>
                    <Col xl={6}>
                        <ShowCode title="Hoverable Rows" customCardClass="custom-card" customCardBodyClass="" code={tabledata16}>
                            <div className="table-responsive">
                                <Table className="table text-nowrap table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product Manager</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Team</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-sm me-2 avatar-rounded">
                                                        <img src="../../assets/images/faces/10.jpg" alt="img" />
                                                    </div>
                                                    <div>
                                                        <div className="lh-1">
                                                            <span>Joanna Smith</span>
                                                        </div>
                                                        <div className="lh-1">
                                                            <span
                                                                className="fs-11 text-muted">joannasmith14@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-primary-transparent">Fashion</span></td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <a className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                        href="#!">
                                                        +5
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar variant='primary' className='progress-xs' now={52} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-sm me-2 avatar-rounded">
                                                        <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                    </div>
                                                    <div>
                                                        <div className="lh-1">
                                                            <span>Kara Kova</span>
                                                        </div>
                                                        <div className="lh-1">
                                                            <span
                                                                className="fs-11 text-muted">milesakara@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-warning-transparent">Clothing</span></td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/4.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/6.jpg" alt="img" />
                                                    </span>
                                                    <a className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                        href="#!">
                                                        +6
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar variant='primary' className="progress-xs" now={40} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-sm me-2 avatar-rounded">
                                                        <img src="../../assets/images/faces/16.jpg" alt="img" />
                                                    </div>
                                                    <div>
                                                        <div className="lh-1">
                                                            <span>Donald Trimb</span>
                                                        </div>
                                                        <div className="lh-1">
                                                            <span
                                                                className="fs-11 text-muted">donaldo21@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-dark-transparent">Electronics</span></td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/1.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/11.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/15.jpg" alt="img" />
                                                    </span>
                                                    <a className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                        href="#!">
                                                        +2
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar variant='primary' className="progress-xs" now={17} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-sm me-2 avatar-rounded">
                                                        <img src="../../assets/images/faces/13.jpg" alt="img" />
                                                    </div>
                                                    <div>
                                                        <div className="lh-1">
                                                            <span>Justin Gaethje</span>
                                                        </div>
                                                        <div className="lh-1">
                                                            <span
                                                                className="fs-11 text-muted">justingae@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-danger-transparent">Sports</span></td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/4.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/6.jpg" alt="img" />
                                                    </span>
                                                    <a className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                        href="#!">
                                                        +5
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar variant='primary' className="progress-xs" now={72} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </ShowCode>
                    </Col>
                    <Col xl={6}>
                        <ShowCode title="Hoverable rows With striped rows" customCardClass="custom-card" customCardBodyClass="" code={tabledata17}>
                            <div className="table-responsive">
                                <Table className="table text-nowrap table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Invoice</th>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table13data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">{idx.text1}</th>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src={idx.src} alt="img" />
                                                        </div>
                                                        <div>
                                                            <div className="lh-1">
                                                                <span>{idx.name}</span>
                                                            </div>
                                                            <div className="lh-1">
                                                                <span
                                                                    className="fs-11 text-muted">{idx.mail}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><Badge bg={idx.color} className={`badge ${idx.class}`}><i
                                                    className={`ri-${idx.icon} align-middle me-1`}></i>{idx.text2}</Badge></td>
                                                <td>{idx.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </ShowCode>
                    </Col>
                </Row>
                {/* End:: row-6 */}

                {/* Start:: row-7 */}
                <Row>
                    <Col xl={6}>
                        <ShowCode title="Table Head Primary" customCardClass="custom-card" customCardBodyClass="" code={tabledata18}>
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <thead className="table-primary">
                                        <tr>
                                            <th scope="col">User Name</th>
                                            <th scope="col">Transaction Id</th>
                                            <th scope="col">Created</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table7data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">{idx.name}</th>
                                                <td>{idx.text}</td>
                                                <td>{idx.date}</td>
                                                <td>
                                                    <div className="hstack gap-2 fs-15">
                                                        <a href="#!"
                                                            className="btn btn-icon btn-sm btn-success-light rounded-pill"><i
                                                                className="ri-download-2-line"></i></a>
                                                        <a href="#!"
                                                            className="btn btn-icon btn-sm btn-info-light rounded-pill"><i
                                                                className="ri-edit-line"></i></a>
                                                        <a href="#!"
                                                            className="btn btn-icon btn-sm btn-danger-light rounded-pill"><i
                                                                className="ri-delete-bin-line"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </ShowCode>
                    </Col>
                    <Col xl={6}>
                        <ShowCode title="Table Head warning" customCardClass="custom-card" customCardBodyClass="" code={tabledata19}>
                            <div className="table-responsive">
                                            <table className="table text-nowrap">
                                                <thead className="table-warning">
                                                    <tr>
                                                        <th scope="col">User Name</th>
                                                        <th scope="col">Transaction Id</th>
                                                        <th scope="col">Created</th>
                                                        <th scope="col">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {Table8data.map((idx) => (
                                                        <tr key={Math.random()}>
                                                            <th scope="row">{idx.name}</th>
                                                            <td>{idx.text}</td>
                                                            <td>{idx.color}</td>
                                                            <td>
                                                                <Button variant={idx.color} className="btn-sm">{idx.btn}</Button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                            </div>
                        </ShowCode>
                    </Col>
                    <Col xl={6}>
                        <ShowCode title="Table Head Success" customCardClass="custom-card" customCardBodyClass="" code={tabledata20}>
                            <div className="table-responsive">
                                    <Table className="table text-nowrap">
                                        <thead className="table-success">
                                            <tr>
                                                <th scope="col">User Name</th>
                                                <th scope="col">Transaction Id</th>
                                                <th scope="col">Created</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Table8data.map((idx) => (
                                                <tr key={Math.random()}>
                                                    <th scope="row">{idx.name}</th>
                                                    <td>{idx.text}</td>
                                                    <td>{idx.date}</td>
                                                    <td>
                                                        <Button variant={idx.color} className="btn btn-sm">{idx.btn}</Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                            </div>
                        </ShowCode>
                    </Col>
                    <Col xl={6}>
                        <ShowCode title="Table Head Info" customCardClass="custom-card" customCardBodyClass="" code={tabledata21}>
                            <div className="table-responsive">
                                        <Table className="table text-nowrap">
                                            <thead className="table-info">
                                                <tr>
                                                    <th scope="col">User Name</th>
                                                    <th scope="col">Transaction Id</th>
                                                    <th scope="col">Created</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Table8data.map((idx) => (
                                                    <tr key={Math.random()}>
                                                        <th scope="row">{idx.name}</th>
                                                        <td>{idx.text}</td>
                                                        <td>{idx.date}</td>
                                                        <td>
                                                            <Button variant={idx.color} className="btn btn-sm">{idx.btn}</Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                        </ShowCode>
                    </Col>
                    <Col xl={6}>
                        <ShowCode title="Table Head Secondary" customCardClass="custom-card" customCardBodyClass="" code={tabledata22}>
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <thead className="table-secondary">
                                        <tr>
                                            <th scope="col">User Name</th>
                                            <th scope="col">Transaction Id</th>
                                            <th scope="col">Created</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table8data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">{idx.name}</th>
                                                <td>{idx.text}</td>
                                                <td>{idx.date}</td>
                                                <td>
                                                    <Button variant={idx.color} className="btn btn-sm">{idx.btn}</Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                </div>
                        </ShowCode>
                    </Col>
                    <Col xl={6}>
                        <ShowCode title="Table Head Danger" customCardClass="custom-card" customCardBodyClass="" code={tabledata23}>
                            <div className="table-responsive">
                                        <Table className="table text-nowrap">
                                            <thead className="table-danger">
                                                <tr>
                                                    <th scope="col">User Name</th>
                                                    <th scope="col">Transaction Id</th>
                                                    <th scope="col">Created</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Table8data.map((idx) => (
                                                    <tr key={Math.random()}>
                                                        <th scope="row">{idx.name}</th>
                                                        <td>{idx.text}</td>
                                                        <td>{idx.date}</td>
                                                        <td>
                                                            <Button variant={idx.color} className="btn btn-sm">{idx.btn}</Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                </div>
                        </ShowCode>
                    </Col>
                </Row>
                {/* End:: row-7 */}

                {/* Start:: row-8 */}
                <Row>
                    <Col xl={4}>
                        <ShowCode title="Table Foot" customCardClass="custom-card" customCardBodyClass="" code={tabledata24}>
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <thead className="table-primary">
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Team</th>
                                            <th scope="col">Matches Won</th>
                                            <th scope="col">Win Ratio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table10data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">
                                                    {idx.text1}
                                                </th>
                                                <td>
                                                    {idx.text2}
                                                </td>
                                                <td>
                                                    {idx.text3}
                                                </td>
                                                <td>
                                                    <span className="badge bg-primary">{idx.text3}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot className="table-primary">
                                        <tr>
                                            <th scope="row">
                                                Total
                                            </th>
                                            <td>
                                                United States
                                            </td>
                                            <td>
                                                558
                                            </td>
                                            <td><span className="badge bg-primary">56%</span></td>
                                        </tr>
                                    </tfoot>
                                </Table>
                            </div>
                        </ShowCode>
                    </Col>
                    <Col xl={4}>
                        <ShowCode title="Table With Caption" customCardClass="custom-card" customCardBodyClass="" code={tabledata25}>
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <caption>Top 3 Countries</caption>
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Country</th>
                                            <th scope="col">Medals Won</th>
                                            <th scope="col">No Of Athletes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">01</th>
                                            <td>United States</td>
                                            <td>2012<i className="ri-medal-line mx-2"></i></td>
                                            <td>1823</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">02</th>
                                            <td>United Kingdom</td>
                                            <td>1012<i className="ri-medal-line mx-2"></i></td>
                                            <td>992</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">03</th>
                                            <td>Germany</td>
                                            <td>914<i className="ri-medal-line mx-2"></i></td>
                                            <td>875</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </ShowCode>
                    </Col>
                    <Col xl={4}>
                        <ShowCode title="Table With Top Caption" customCardClass="custom-card" customCardBodyClass="" code={tabledata26}>
                            <div className="table-responsive">
                                <Table className="table text-nowrap caption-top">
                                    <caption>Top IT Companies</caption>
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Revenue</th>
                                            <th scope="col">Country</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Microsoft</td>
                                            <td>$170 billion</td>
                                            <td>United States</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>HP</td>
                                            <td>$72 billion</td>
                                            <td>United States</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>IBM</td>
                                            <td>$60 billion</td>
                                            <td>United States</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </ShowCode>
                    </Col>
                </Row>
                {/* End:: row-8 */}

                {/* Start:: row-9 */}
                <Row>
                    <Col xl={6}>
                        <ShowCode title="Active Tables" customCardClass="custom-card" customCardBodyClass="" code={tabledata27}>
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Created On</th>
                                            <th scope="col">Number</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="table-active">
                                            <th scope="row">Mark</th>
                                            <td>21,Dec 2021</td>
                                            <td>+1234-12340</td>
                                            <td><span className="badge bg-primary">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Monika</th>
                                            <td>29,April 2024</td>
                                            <td>+1523-12459</td>
                                            <td><span className="badge bg-warning">Failed</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Madina</th>
                                            <td>30,Nov 2024</td>
                                            <td className="table-active">+1982-16234</td>
                                            <td><span className="badge bg-success">Successful</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Bhamako</th>
                                            <td>18,Mar 2024</td>
                                            <td>+1526-10729</td>
                                            <td><span className="badge bg-secondary">Pending</span></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </ShowCode>
                    </Col>
                    <Col xl={6}>
                        <ShowCode title=" Small Tables" customCardClass="custom-card" customCardBodyClass="" code={tabledata28}>
                            <div className="table-responsive">
                                <Table className="table text-nowrap table-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col">Invoice</th>
                                            <th scope="col">Created Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table9data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">
                                                    <div className="form-check">
                                                        <Form.Check id={idx.id} className="" type="checkbox" value="" defaultChecked={idx.checked === 'defaultChecked'} />
                                                        <Form.Label className="" htmlFor="checkebox-sm">
                                                            {idx.name}
                                                        </Form.Label>
                                                    </div>
                                                </th>
                                                <td>{idx.date}</td>
                                                <td><Badge bg={idx.class} className="badge bg-success-transparent">{idx.text}</Badge></td>
                                                <td>
                                                    <div className="hstack gap-2 fs-15">
                                                        <a href="#!" className="btn btn-icon btn-sm btn-light"><i className="ri-download-2-line"></i></a>
                                                        <a href="#!" className="btn btn-icon btn-sm btn-light"><i className="ri-edit-line"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </ShowCode>
                    </Col>
                </Row>
                {/* End:: row-9 */}

                {/* Start:: row-10 */}
                <Row>
                    <Col xl={6}>
                        <ShowCode title="Color variants tables" customCardClass="custom-card" customCardBodyClass="" code={tabledata29}>
                                <div className="table-responsive">
                                    <Table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col">Color</th>
                                                <th scope="col">Client</th>
                                                <th scope="col">State</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Total Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Table11data.map((idx) => (
                                                <tr key={Math.random()} className={idx.bgcolor}>
                                                    <th scope="row">{idx.text}</th>
                                                    <td>{idx.name}</td>
                                                    <td><Badge bg={idx.color} className={`badge ${idx.class2}`}>Processed</Badge></td>
                                                    <td>{idx.quantity}</td>
                                                    <td>{idx.price}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                        </ShowCode>
                    </Col>
                    <Col xl={6}>
                        <ShowCode title="Nesting" customCardClass="custom-card" customCardBodyClass="" code={tabledata30}>
                            <div className="table-responsive">
                                <Table className="table text-nowrap table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={4}>
                                                <table className="table text-nowrap mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Alphabets</th>
                                                            <th scope="col">Users</th>
                                                            <th scope="col">Email</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">A</th>
                                                            <td>Dino King</td>
                                                            <td>dinoking231@gmail.com</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">B</th>
                                                            <td>Poppins sams</td>
                                                            <td>pops@gmail.com</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">C</th>
                                                            <td>Brian Shaw</td>
                                                            <td>swanbrian@gmail.com</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Jimmy</td>
                                            <td>the Ostrich</td>
                                            <td>Dummy Text</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Cobra Kai</td>
                                            <td>the Snake</td>
                                            <td>Another Name</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </ShowCode>
                    </Col>
                </Row>
                {/* End:: row-10 */}

                {/* Start:: row-11 */}
                <Row>
                    <Col xl={12}>
                        <ShowCode title="Always responsive" customCardClass="custom-card" customCardBodyClass="" code={tabledata31}>
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col"><input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/></th>
                                            <th scope="col">Team Head</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Role</th>
                                            <th scope="col">Gmail</th>
                                            <th scope="col">Team</th>
                                            <th scope="col">Work Progress</th>
                                            <th scope="col">Revenue</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..."/></th>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src="../../assets/images/faces/3.jpg" alt="img" />
                                                    </span>Mayor Kelly
                                                </div>
                                            </td>
                                            <td>Manufacturer</td>
                                            <td><span className="badge bg-primary-transparent">Team Lead</span></td>
                                            <td>mayorkrlly@gmail.com</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <a className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" href="#!">
                                                        +4
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar className="progress progress-xs" variant='primary' now={52} />
                                            </td>
                                            <td>$10,984.29</td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <a href="#!" className="btn btn-icon btn-sm btn-success"><i className="ri-download-2-line"></i></a>
                                                    <a href="#!" className="btn btn-icon btn-sm btn-info"><i className="ri-edit-line"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel2" value="" aria-label="..."/></th>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src="../../assets/images/faces/12.jpg" alt="img" />
                                                    </span>Andrew Garfield
                                                </div>
                                            </td>
                                            <td>Managing Director</td>
                                            <td><span className="badge bg-warning-transparent">Director</span></td>
                                            <td>andrewgarfield@gmail.com</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/1.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/5.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/11.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/15.jpg" alt="img" />
                                                    </span>
                                                    <a className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" href="#!">
                                                        +4
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar className="progress progress-xs" variant='primary' now={91} />
                                            </td>
                                            <td>$1.4billion</td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <a href="#!" className="btn btn-icon btn-sm btn-success"><i className="ri-download-2-line"></i></a>
                                                    <a href="#!" className="btn btn-icon btn-sm btn-info"><i className="ri-edit-line"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel3" value="" aria-label="..."/></th>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src="../../assets/images/faces/14.jpg" alt="img" />
                                                    </span>Simon Cowel
                                                </div>
                                            </td>
                                            <td>Service Manager</td>
                                            <td><span className="badge bg-success-transparent">Manager</span></td>
                                            <td>simoncowel234@gmail.com</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/6.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/16.jpg" alt="img" />
                                                    </span>
                                                    <a className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" href="#!">
                                                        +10
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar className="progress progress-xs" variant='primary' now={45} />
                                            </td>
                                            <td>$7,123.21</td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <a href="#!" className="btn btn-icon btn-sm btn-success"><i className="ri-download-2-line"></i></a>
                                                    <a href="#!" className="btn btn-icon btn-sm btn-info"><i className="ri-edit-line"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><input className="form-check-input" type="checkbox" id="checkboxNoLabel13" value="" aria-label="..."/></th>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src="../../assets/images/faces/5.jpg" alt="img" />
                                                    </span>Mirinda Hers
                                                </div>
                                            </td>
                                            <td>Recruiter</td>
                                            <td><span className="badge bg-danger-transparent">Employee</span></td>
                                            <td>mirindahers@gmail.com</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/3.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/10.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/14.jpg" alt="img" />
                                                    </span>
                                                    <a className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" href="#!">
                                                        +6
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar className="progress progress-xs" variant='primary' now={21} />   
                                            </td>
                                            <td>$2,325.45</td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <a href="#!" className="btn btn-icon btn-sm btn-success"><i className="ri-download-2-line"></i></a>
                                                    <a href="#!" className="btn btn-icon btn-sm btn-info"><i className="ri-edit-line"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </ShowCode>
                    </Col>
                </Row>
                {/* End:: row-11 */}

                {/* Start:: row-12 */}
                <Row>
                    <Col xl={12}>
                        <ShowCode title="Vertical alignment" customCardClass="custom-card" customCardBodyClass="" code={tabledata32}>
                             <div className="table-responsive">
                                    <Table className="table align-middle">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="w-25">Heading 1</th>
                                                <th scope="col" className="w-25">Heading 2</th>
                                                <th scope="col" className="w-25">Heading 3</th>
                                                <th scope="col" className="w-25">Heading 4</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Table12data.map((idx) => (
                                                <tr key={Math.random()} className={idx.class1}>
                                                    <td>{idx.text1} <code>{idx.code1}</code> {idx.text2}</td>
                                                    <td>{idx.text1} <code>{idx.code1}</code> {idx.text2}</td>
                                                    <td className={idx.class2}>{idx.text3} <code>{idx.code2}</code> {idx.text4}</td>
                                                    <td>This here is some placeholder text, intended to take up
                                                        quite a
                                                        bit of vertical space, to demonstrate how the vertical
                                                        alignment
                                                        works in the preceding cells.</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                            </div>
                        </ShowCode>
                    </Col>
                </Row>
                {/* End:: row-12 */}
</Fragment>
);
};

export default Tables;