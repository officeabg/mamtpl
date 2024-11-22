"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Badge, Button, Card, Col, Dropdown, Pagination, Row, Table } from "react-bootstrap";

const Products = () => {
return ( 
    <Fragment>
            {/* Page Header */}
                <Seo title={"Products"} />
                <Pageheader Heading="Products" Pages={[{title:"Apps", active:true},{title:"Ecommerce", active:true}, {title:"Admin", active:true}, {title:"Products", active:false},]} />
            {/* Page Header Close */}
                
                {/* Start::row-1 */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    PRODUCTS LIST
                                </Card.Title>
                                <div className="d-flex gap-3 align-items-center flex-wrap">
                                    <div className="btn-group">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="" className="btn btn-outline-light border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="ti ti-sort-descending-2 me-1"></i> Sort By
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <li><Dropdown.Item href="#!">Created Date</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Status</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Category</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Product Name</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Newest</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Oldest</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="custom-form-group flex-grow-1">
                                        <input type="text" className="form-control" placeholder="Search Products.." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <Link scroll={false} href="#!" className="text-muted custom-form-btn"><i className="ti ti-search"></i></Link>
                                    </div> 
                                    <Link scroll={false} href="/apps/ecommerce/admin/addproduct/" className="btn btn-primary btn-wave waves-effect waves-light">
                                        <i className="bi bi-plus-circle"></i>  Add Product
                                    </Link> 
                                </div>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <Table className="table table-hover text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="row" className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob1" value="" aria-label="..." /></th>
                                                <th scope="col">Product</th>
                                                <th scope="col">Seller</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Stock Qty</th>
                                                <th scope="col">Total Sales</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob2" value="" aria-label="..." /></td>
                                                <td>
                                                    <div className="d-flex">
                                                        <span className="avatar avatar-md avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/jpg/2.jpg" className="" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="/ecommerce/customer/productdetails/"> SoundSync Headphones</Link></p>
                                                            <p className="fs-12 text-muted mb-0">Accusam Brand</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center fw-semibold">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../../assets/images/faces/4.jpg" alt="" />
                                                        </span>
                                                        <Link scroll={false} href="/apps/ecommerce/admin/vendordetails/">Mayor Kelly</Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    Electronics
                                                </td>
                                                <td><Badge bg="success-transparent" className="badge">Published</Badge></td>
                                                <td>
                                                   60
                                                </td>
                                                <td>
                                                   10
                                                </td>
                                                <td className="fw-semibold">$15,000</td>
                                                <td>
                                                    <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="/apps/ecommerce/admin/addproduct/" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-edit-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob3" value="" aria-label="..." defaultChecked /></td>
                                                <td>
                                                    <div className="d-flex">
                                                        <span className="avatar avatar-md avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/png/10.png" className="" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="/ecommerce/customer/productdetails/"> Western Ladies Bag</Link></p>
                                                            <p className="fs-12 text-muted mb-0">Vellintn Brand</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center fw-semibold">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../../assets/images/faces/15.jpg" alt="" />
                                                        </span>
                                                        <Link scroll={false} href="/apps/ecommerce/admin/vendordetails/">Andrew Garfield </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    Women's Fashion
                                                </td>
                                                <td>
                                                    <Badge bg="danger-transparent" className="badge">Unpublished</Badge>
                                                </td>
                                                <td>
                                                    120
                                                </td>
                                                <td>
                                                    20
                                                </td>
                                                <td className="fw-semibold">$25,000</td>
                                                <td>
                                                    <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="/apps/ecommerce/admin/addproduct/" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-edit-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob4" value="" aria-label="..." defaultChecked /></td>
                                                <td>
                                                    <div className="d-flex">
                                                        <span className="avatar avatar-md avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/jpg/3.jpg" className="" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="/ecommerce/customer/productdetails/">Digital Camera(100M Zoom)</Link></p>
                                                            <p className="fs-12 text-muted mb-0">Top Brand</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center fw-semibold">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../../assets/images/faces/11.jpg" alt="" />
                                                        </span>
                                                        <Link scroll={false} href="/apps/ecommerce/admin/vendordetails/">Simon Cowel </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                   Electronics
                                                </td>
                                                <td>
                                                    <Badge bg="success-transparent" className="badge">Published</Badge>
                                                </td>
                                                <td>
                                                    279
                                                </td>
                                                <td>
                                                    27
                                                </td>
                                                <td className="fw-semibold">$43,000</td>
                                                <td>
                                                    <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="/apps/ecommerce/admin/addproduct/" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-edit-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob55" value="" aria-label="..." /></td>
                                                <td>
                                                    <div className="d-flex">
                                                        <span className="avatar avatar-md avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/jpg/9.jpg" className="" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="/ecommerce/customer/productdetails/">High Heel Sandals</Link></p>
                                                            <p className="fs-12 text-muted mb-0">Erat Brand</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center fw-semibold">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../../assets/images/faces/8.jpg" alt="" />
                                                        </span>
                                                        <Link scroll={false} href="/apps/ecommerce/admin/vendordetails/">Mirinda Hers</Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    Men's Fashion
                                                </td>
                                                <td>
                                                    <Badge bg="danger-transparent" className="badge">Unpublished</Badge>
                                                </td>
                                                <td>
                                                    270
                                                </td>
                                                <td>
                                                    34
                                                </td>
                                                <td className="fw-semibold">$10,000</td>
                                                <td>
                                                    <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="/apps/ecommerce/admin/addproduct/" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-edit-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob44" value="" aria-label="..." defaultChecked /></td>
                                                <td>
                                                    <div className="d-flex">
                                                        <span className="avatar avatar-md avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/jpg/10.jpg" className="" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="/ecommerce/customer/productdetails/"> Men's Hoodie</Link></p>
                                                            <p className="fs-12 text-muted mb-0">Top Brand</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center fw-semibold">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../../assets/images/faces/1.jpg" alt="" />
                                                        </span>
                                                        <Link scroll={false} href="/apps/ecommerce/admin/vendordetails/">Simon Cowel</Link>
                                                    </div>
                                                </td>
                                                <td>
                                                   Men's Clothing
                                                </td>
                                                <td>
                                                    <Badge bg="success-transparent" className="badge">Published</Badge>
                                                </td>
                                                <td>
                                                    279
                                                </td>
                                                <td>
                                                    27
                                                </td>
                                                <td className="fw-semibold">$43,000</td>
                                                <td>
                                                    <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="/apps/ecommerce/admin/addproduct/" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-edit-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob5" value="" aria-label="..." /></td>
                                                <td>
                                                    <div className="d-flex">
                                                        <span className="avatar avatar-md avatar-square bg-gray-300"><img src="../../../../assets/images/ecommerce/png/12.png" className="" alt="..." /></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link scroll={false} href="/ecommerce/customer/productdetails/">Women's Sweater</Link></p>
                                                            <p className="fs-12 text-muted mb-0">Erat Brand</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center fw-semibold">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src="../../../../assets/images/faces/2.jpg" alt="" />
                                                        </span>
                                                        <Link scroll={false} href="/apps/ecommerce/admin/vendordetails/">Mirinda Hers</Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    Men's Fashion
                                                </td>
                                                <td>
                                                    <Badge bg="danger-transparent">Unpublished</Badge>
                                                </td>
                                                <td>
                                                    270
                                                </td>
                                                <td>
                                                    34
                                                </td>
                                                <td className="fw-semibold">$10,000</td>
                                                <td>
                                                    <Link scroll={false} href="/ecommerce/customer/productdetails/" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Link>
                                                    <Link scroll={false} href="/apps/ecommerce/admin/addproduct/" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-edit-line"></i>
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
                                        Showing <b>1</b> to <b>6</b> of <b>10</b> entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
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

export default Products;