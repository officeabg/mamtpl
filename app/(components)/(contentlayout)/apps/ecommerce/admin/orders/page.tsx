"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import {  Card, Col, Dropdown, Pagination, Row, Table } from "react-bootstrap";

const Orders = () => {
return ( 
    <Fragment>
            {/* Page Header */}
                <Seo title={"Orders"} />
                <Pageheader Heading="Orders" Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true}, {title:"Admin", active:true}, {title:"Orders", active:false},]} />
            {/* Page Header Close */}
                
                {/* Start::row-1 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    All Orders List
                                </Card.Title>
                                <div className="d-flex gap-3 align-items-center">
                                    <div className="btn-group">
                                        <Dropdown>
                                            <Dropdown.Toggle  variant="" className="btn btn-outline-light border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="ti ti-sort-descending-2 me-1"></i> Sort By
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <li><Dropdown.Item href="#!">Created Date</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Status</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Orders</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Product Name</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Newest</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Oldest</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="custom-form-group flex-grow-1">
                                        <input type="text" className="form-control" placeholder="Search Orders.." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                        <Link scroll={false} href="#!" className="text-muted custom-form-btn"><i className="ti ti-search"></i></Link>
                                    </div> 
                                </div>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <Table className="table-hover text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col">Order Id</th>
                                                <th scope="col">Product</th>
                                                <th scope="col">Customer</th>
                                                <th scope="col">Mobile Number</th>
                                                <th scope="col">Ordered Date</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Payment Mode</th>
                                                <th scope="col">Cost</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>#19876</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/jpg/1.jpg" className="w-100 h-100" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="/apps/ecommerce/admin/orderdetails/">Flower Pot</Link></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../../assets/images/faces/4.jpg" alt="" />
                                                        </span>Mayor Kelly
                                                    </div>
                                                </td>
                                                <td>(555) 123-4567</td>
                                                <td>
                                                    09 Jan 2024
                                                </td>
                                                <td><span className="badge bg-success-transparent">Shippped</span></td>
                                                <td>Cash On Delivery</td>
                                                <td className="fw-semibold">$76.00</td> 
                                                <td>
                                                    <Link scroll={false} href="/apps/ecommerce/admin/orderdetails/" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-download-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#19376</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/jpg/2.jpg" className="w-100 h-100" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="/apps/ecommerce/admin/orderdetails/">Head Phones</Link></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../../assets/images/faces/15.jpg" alt="" />
                                                        </span>Andrew Garfield 
                                                    </div>
                                                </td>
                                                <td>(555) 234-5678</td>
                                                <td>
                                                    12 Feb 2024
                                                </td>
                                                <td><span className="badge bg-warning-transparent">Pending</span></td>
                                                <td>Online Payment</td>
                                                <td className="fw-semibold">$13.00</td>
                                                <td>
                                                    <Link scroll={false} href="/apps/ecommerce/admin/orderdetails/" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-download-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#19878</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/jpg/3.jpg" className="w-100 h-100" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="/apps/ecommerce/admin/orderdetails/">Camera</Link></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../../assets/images/faces/8.jpg" alt="" />
                                                        </span>Mirinda Hers
                                                    </div>
                                                </td>
                                                <td>(555) 345-6789</td>
                                                <td>
                                                    23 Mar 2024
                                                </td>
                                                <td><span className="badge bg-success-transparent">Shipped</span></td>
                                                <td>Cash On Delivery</td>
                                                <td className="fw-semibold">$54.00</td>
                                                <td>
                                                    <Link scroll={false} href="/apps/ecommerce/admin/orderdetails/" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-download-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#19879</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/jpg/4.jpg" className="w-100 h-100" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="/apps/ecommerce/admin/orderdetails/">Kiwi Fruit</Link></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../../assets/images/faces/11.jpg" alt="" />
                                                        </span>Simon Cowel
                                                    </div>
                                                </td>
                                                <td>(555) 456-7890</td>
                                                <td>
                                                    17 Aug 2024
                                                </td>
                                                <td><span className="badge bg-danger-transparent">Cancelled</span></td>
                                                <td>Online Payment</td>
                                                <td className="fw-semibold">$87.00</td> 
                                                <td>
                                                    <Link scroll={false} href="/apps/ecommerce/admin/orderdetails/" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-download-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#19880</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/jpg/5.jpg" className="w-100 h-100" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="/apps/ecommerce/admin/orderdetails/">Donut</Link></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../../assets/images/faces/1.jpg" alt="" />
                                                        </span>Jack Miller
                                                    </div>
                                                </td>
                                                <td>(555) 567-8901</td>
                                                <td>
                                                    21 Oct 2024
                                                </td>
                                                <td><span className="badge bg-success-transparent">Shipped</span></td>
                                                <td>Cash On Delivery</td>
                                                <td className="fw-semibold">$78.00</td> 
                                                <td>
                                                    <Link scroll={false} href="/apps/ecommerce/admin/orderdetails/" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-download-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#19878</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/jpg/6.jpg" className="w-100 h-100" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="/apps/ecommerce/admin/orderdetails/">Cactus Plant</Link></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../../assets/images/faces/8.jpg" alt="" />
                                                        </span>Mirinda Hers
                                                    </div>
                                                </td>
                                                <td>(555) 678-9012</td>
                                                <td>
                                                    23 Mar 2024
                                                </td>
                                                <td><span className="badge bg-success-transparent">Shipped</span></td>
                                                <td>Cash On Delivery</td>
                                                <td className="fw-semibold">$54.00</td>
                                                <td>
                                                    <Link scroll={false} href="/apps/ecommerce/admin/orderdetails/" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-download-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#19879</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/jpg/7.jpg" className="w-100 h-100" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="/apps/ecommerce/admin/orderdetails/">Wooden Chair</Link></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../../assets/images/faces/11.jpg" alt="" />
                                                        </span>Simon Cowel
                                                    </div>
                                                </td>
                                                <td>(555) 789-0123</td>
                                                <td>
                                                    17 Aug 2024
                                                </td>
                                                <td><span className="badge bg-danger-transparent">Cancelled</span></td>
                                                <td>Online Payment</td>
                                                <td className="fw-semibold">$87.00</td> 
                                                <td>
                                                    <Link scroll={false} href="/apps/ecommerce/admin/orderdetails/" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-download-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#19880</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/jpg/8.jpg" className="w-100 h-100" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="/apps/ecommerce/admin/orderdetails/">Flower Vase</Link></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../../assets/images/faces/1.jpg" alt="" />
                                                        </span>Jack Miller
                                                    </div>
                                                </td>
                                                <td>(555) 890-1234</td>
                                                <td>
                                                    21 Oct 2024
                                                </td>
                                                <td><span className="badge bg-success-transparent">Shipped</span></td>
                                                <td>Cash On Delivery</td>
                                                <td className="fw-semibold">$78.00</td> 
                                                <td>
                                                    <Link scroll={false} href="/apps/ecommerce/admin/orderdetails/" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-download-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Card.Body>
                            <Card.Footer className="border-top-0">
                                <div className="d-flex align-items-center flex-wrap overflow-auto">
                                    <div className="mb-2 mb-sm-0">
                                        Showing <b>1</b> to <b>10</b> of <b>10</b> entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                    </div>
                                    <div className="ms-auto">
                                        <Pagination className="pagination mb-0 overflow-auto">
                                            <Pagination.Item disabled>Previous</Pagination.Item>
                                            <Pagination.Item active>1</Pagination.Item>
                                            <Pagination.Item>2</Pagination.Item>
                                            <Pagination.Item>3</Pagination.Item>
                                            <Pagination.Item>4</Pagination.Item>
                                            <Pagination.Item>5</Pagination.Item>
                                            <Pagination.Item className="pagination-next">Next</Pagination.Item>
                                        </Pagination>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    )
};

export default Orders;