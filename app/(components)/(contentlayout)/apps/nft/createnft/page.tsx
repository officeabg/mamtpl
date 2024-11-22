"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
const Select = dynamic(() => import("react-select"), { ssr: false });
const Createnft = () => {
    const Data1 = [
        { value: 'Choose Royalities', label: 'Choose Royalities' },
        { value: 'Flat Royalty', label: 'Flat Royalty' },
        { value: 'Graduated Royalty', label: 'Graduated Royalty' },
        { value: 'Tiered Royalty', label: 'Tiered Royalty' },
        { value: 'Time-Limited Royalty', label: 'Time-Limited Royalty' },
        { value: 'Customized Royalty', label: 'Customized Royalty' },
    ];
return( 
    <Fragment>
            {/* Page Header */}
                <Seo title={"Create NFT"} />
                <Pageheader Heading="Create NFT" Pages={[{title:"Apps", active:true},{title:"NFT", active:true},{title:"Create NFT", active:false}]} />
            {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xxl={9} xl={8} className="">
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Create NFT</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="row gy-3 justify-content-between">
                                    <Col xxl={3} xl={12}>
                                        <div className="create-nft-item">
                                            <label className="form-label">Upload NFT</label>
                                            <FilePond className="filepond circular-filepond" labelIdle='Png, Gif, MP4 (or) MP3, WEBP, 3D Model  <span className="filepond--label-action">Browse</span>'
                                            stylePanelLayout='compact circle' styleLoadIndicatorPosition='center bottom'
                                            styleButtonRemoveItemPosition='center bottom' />
                                        </div>
                                    </Col>
                                    <Col xxl={7} xl={12}>
                                        <div className="row gy-3">
                                            <Col xl={12}>
                                                <Form.Label htmlFor="input-placeholder" className="form-label">NFT Title</Form.Label>
                                                <Form.Control type="text" id="input-placeholder" placeholder="eg:Neo-Nebulae"/>
                                            </Col>
                                            <Col xl={12}>
                                                <Form.Label htmlFor="nft-description" className="form-label">NFT Description</Form.Label>
                                                <Form.Control as="textarea" id="nft-description" rows={3} placeholder="Enter Description"></Form.Control>
                                            </Col>
                                            <Col xl={12}>
                                                <Form.Label htmlFor="nft-link" className="form-label">External Link</Form.Label>
                                                <Form.Control type="text" id="nft-link" placeholder="External Link Here"/>
                                            </Col>
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <div className="row gy-3">
                                            <Col xl={6}>
                                                <Form.Label htmlFor="nft-creator-name" className="form-label">Creator Name</Form.Label>
                                                <Form.Control type="text" id="nft-creator-name" placeholder="Enter Name"/>
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label htmlFor="nft-price" className="form-label">NFT Price</Form.Label>
                                                <Form.Control type="text" id="nft-price" placeholder="Enter Price"/>
                                            </Col>
                                            <Col xl={4}>
                                                <Form.Label htmlFor="nft-size" className="form-label">NFT Size</Form.Label>
                                                <Form.Control type="text" id="nft-size" placeholder="Enter Size"/>
                                            </Col>
                                            <Col xl={4}>
                                                <label htmlFor="nft-royality" className="form-label">Royality</label>
                                                <Select options={Data1} classNamePrefix='Select2' menuPlacement='auto' className=""
                                                placeholder="Choose Royalities" />
                                            </Col>
                                            <Col xl={4}>
                                                <label htmlFor="nft-property" className="form-label">Property</label>
                                                <Form.Control type="text" className="form-control" id="nft-property" placeholder="Enter Property"/>
                                            </Col>
                                            <Col xl={12}>
                                                <label className="form-label d-block">Method</label>
                                                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                    <input type="radio" className="btn-check" name="strap-material" id="strap1" defaultChecked />
                                                    <label className="btn btn-sm btn-outline-primary text-default z-0" htmlFor="strap1"><i className="ti ti-tag me-1 align-middle fs-15 d-inline-block"></i>Fixed Price</label>
                                                    <input type="radio" className="btn-check" name="strap-material" id="strap2" />
                                                    <label className="btn btn-sm btn-outline-primary text-default z-0" htmlFor="strap2"><i className="ti ti-users fs-15 me-1 align-middle d-inline-block"></i>Open For Bids</label>
                                                    <input type="radio" className="btn-check" name="strap-material" id="strap3" />
                                                    <label className="btn btn-sm btn-outline-primary text-default z-0" htmlFor="strap3"><i className="ti ti-hourglass-low fs-15 me-1 align-middle d-inline-block"></i>Timed Auction</label>
                                                </div>
                                            </Col>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                            <Card.Footer className="text-end">
                                <Link scroll={false} href="#!" className="btn btn-primary btn-wave waves-effect waves-light">Create NFT</Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={4} className="">
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    NFT Preview Here
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Link scroll={false} href="#!" className="stretched-link"></Link>
                                    <div className="position-relative">
                                        <img src="../../../assets/images/nft-images/2.jpg" className="card-img mb-3" alt="..."/>
                                        <p className="mb-0 text-fixed-white nft-auction-time"> 04hrs : 24m : 38s </p>
                                    </div>
                                    <p className="fs-14 fw-semibold mb-2">CryptoCanvas</p>
                                    <div className="d-flex mb-3 align-items-center flex-wrap gap-2 justify-content-between">
                                        <div> 
                                            <span className="fs-12 text-muted d-block mb-1">Created By</span>
                                            <span className="fw-medium d-block lh-1">PixelCraftPro</span>
                                        </div>
                                        <div className="text-end">
                                            <span className="fs-12 text-muted d-block mb-1">Top Bid</span>
                                            <div className="d-flex align-items-center">
                                                <span className="avatar avatar-xs">
                                                    <img src="../../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt=""/>
                                                </span>
                                                <span className="ms-1 fw-medium">2.78</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-grid">
                                        <Button variant="" className="btn btn-light btn-wave waves-effect waves-light">
                                            Place BId
                                        </Button>
                                    </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    )
};

export default Createnft;