"use client"
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Button, Dropdown, Nav, Tab } from "react-bootstrap";
import SimpleBar from 'simplebar-react';
const Chat = () => {

    const changeTheInfo = ({name, img, status}:any) => {
        // Simulating the event target, you might want to update this based on your actual structure
        const element:any = { closest: () => {} };
        const closestListItem :any= element.closest("li");
    
        if (closestListItem) {
          closestListItem.classList.add("active");
        }
    
        document.querySelectorAll(".chatnameperson").forEach((ele:any) => {
          ele.innerText = name;
        });
    
        let image = `../../assets/images/faces/${img}.jpg`;
        document.querySelectorAll(".chatimageperson").forEach((ele:any) => {
          ele.src = image;
        });
    
        document.querySelectorAll(".chatstatusperson").forEach((ele) => {
          ele.classList.remove("online");
          ele.classList.remove("offline");
          ele.classList.add(status);
        });
    
        const chatPersonStatus:any = document.querySelector(".chatpersonstatus");
        if (chatPersonStatus) {
          chatPersonStatus.innerText = status;
        }
    
        const mainChartWrapper = document.querySelector(".main-chart-wrapper");
        if (mainChartWrapper) {
          mainChartWrapper.classList.add("responsive-chat-open");
        }
        
      };

      const handledelete =()=>{
        const mainChartWrapper = document.querySelector(".main-chart-wrapper");
        if (mainChartWrapper?.classList.contains("responsive-chat-open")) {
            mainChartWrapper.classList.remove("responsive-chat-open");
          }
       }

return (
<Fragment>
                {/* Page Header */}
                    <Seo title={"Chat"} />
                    <Pageheader Heading="Chat" Pages={[{title:"Pages", active:true},{title:"Chat", active:false}]} />
                {/* Page Header Close */}
                
                <div className="main-chart-wrapper gap-lg-2 gap-0 mb-2 d-lg-flex">
                    <div className="chat-info border">
                       <Tab.Container defaultActiveKey="first">
                            <Nav className="nav-tabs tab-style-8 scaleX nav-justified mb-0 border-bottom d-flex"
                                id="myTab1" role="tablist">
                                <Nav.Item  className="nav-item me-0" role="presentation">
                                    <Nav.Link eventKey="first" className="p-4" id="users-tab" data-bs-toggle="tab"
                                        data-bs-target="#users-tab-pane" type="button" role="tab"
                                        aria-controls="users-tab-pane" aria-selected="true">FRIENDS</Nav.Link>
                                </Nav.Item>
                                <Nav.Item  className="nav-item me-0" role="presentation">
                                    <Nav.Link eventKey="second" className="p-4" id="groups-tab" data-bs-toggle="tab"
                                        data-bs-target="#groups-tab-pane" type="button" role="tab"
                                        aria-controls="groups-tab-pane" aria-selected="false">GROUPS</Nav.Link>
                                </Nav.Item>
                                <Nav.Item  className="nav-item" role="presentation">
                                    <Nav.Link eventKey="third" className="p-4" id="contacts-tab" data-bs-toggle="tab"
                                        data-bs-target="#contacts-tab-pane" type="button" role="tab"
                                        aria-controls="contacts-tab-pane" aria-selected="false">CONTACTS</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content className="" id="myTabContent">
                                <Tab.Pane eventKey="first" className="show border-0 chat-users-tab" id="users-tab-pane"
                                    role="tabpanel" aria-labelledby="users-tab" tabIndex={0}>
                                <SimpleBar >
                                        <ul className="list-unstyled mb-0 mt-2 chat-users-tab" id="chat-msg-scroll">
                                            <li className="pb-0">
                                                <p className="text-muted fs-11 fw-medium mb-2 op-7">ACTIVE CHATS</p>
                                            </li>
                                            <li className="checkforactive">
                                                <Link scroll={false} href="#!" 
                                                onClick={(_e) => changeTheInfo({name:'Emma Johnson', img:'5',status: 'online'})}
                                                >
                                                    <div className="d-flex align-items-top">
                                                        <div className="me-1 lh-1">
                                                            <span className="avatar avatar-md online me-2 avatar-rounded">
                                                                <img  src="../../assets/images/faces/5.jpg" alt="img" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-medium">
                                                                Emma Johnson <span
                                                                    className="float-end text-muted fw-normal fs-11">1:32PM</span>
                                                            </p>
                                                            <p className="fs-12 mb-0">
                                                                <span className="chat-msg text-truncate">Hey there! How's your day going? &#128522;</span>
                                                                <span className="chat-read-icon float-end align-middle"><i
                                                                        className="ri-check-double-fill"></i></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="chat-msg-unread checkforactive">
                                                <Link scroll={false} href="#!" 
                                                onClick={(_e) => changeTheInfo({name:'Amelia Turner', img:'2', status: 'online'})}
                                                >
                                                    <div className="d-flex align-items-top">
                                                        <div className="me-1 lh-1">
                                                            <span className="avatar avatar-md online me-2 avatar-rounded">
                                                                <img  src="../../assets/images/faces/2.jpg" alt="img" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-medium">
                                                                Amelia Turner <span
                                                                    className="float-end text-muted fw-normal fs-11">12:24PM</span>
                                                            </p>
                                                            <p className="fs-12 mb-0 chat-msg-typing ">
                                                                <span className="chat-msg text-truncate">Typing...</span>
                                                                <span className="chat-read-icon float-end align-middle"><i
                                                                        className="ri-check-double-fill"></i></span>
                                                                <span
                                                                    className="badge bg-danger rounded-pill float-end">2</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="checkforactive" >
                                                <Link scroll={false} href="#!" 
                                                onClick={(_e) => changeTheInfo({name:'Samuel Harris', img:'10', status:'online'})}
                                                >
                                                    <div className="d-flex align-items-top">
                                                        <div className="me-1 lh-1">
                                                            <span className="avatar avatar-md online me-2 avatar-rounded">
                                                                <img  src="../../assets/images/faces/10.jpg" alt="img" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-medium">
                                                                Samuel Harris <span
                                                                    className="float-end text-muted fw-normal fs-11">1:16PM</span>
                                                            </p>
                                                            <p className="fs-12 mb-0">
                                                                <span className="chat-msg text-truncate">Just had the best coffee ever! &#9749;</span>
                                                                <span className="chat-read-icon float-end align-middle"><i
                                                                        className="ri-check-double-fill"></i></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="checkforactive active">
                                                <Link scroll={false} href="#!" 
                                                onClick={(_e) => changeTheInfo({name: 'Aria Robinson',img: '8', status:'online'})}
                                                >
                                                    <div className="d-flex align-items-top">
                                                        <div className="me-1 lh-1">
                                                            <span className="avatar avatar-md online me-2 avatar-rounded">
                                                                <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-medium">
                                                                Aria Robinson <span
                                                                    className="float-end text-muted fw-normal fs-11">12:45PM</span>
                                                            </p>
                                                            <p className="fs-12 mb-0">
                                                                <span className="chat-msg text-truncate">Guess what? I aced that test!</span>
                                                                <span className="chat-read-icon float-end align-middle"><i
                                                                        className="ri-check-double-fill"></i></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="pb-0">
                                                <p className="text-muted fs-11 fw-medium mb-2 op-7">ALL CHATS</p>
                                            </li>
                                            <li className="chat-inactive checkforactive" >
                                                <Link scroll={false} href="#!" 
                                                onClick={(_e) => changeTheInfo({name:'Logan Brooks', img:'11', status:'offline'})}
                                                >
                                                    <div className="d-flex align-items-top">
                                                        <div className="me-1 lh-1">
                                                            <span className="avatar avatar-md offline me-2 avatar-rounded" >
                                                                <img  src="../../assets/images/faces/11.jpg" alt="img" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-medium">
                                                                Logan Brooks <span
                                                                    className="float-end text-muted fw-normal fs-11">11:54AM</span>
                                                            </p>
                                                            <p className="fs-12 mb-0">
                                                                <span className="chat-msg text-truncate">Movie night tonight? &#127916;</span>
                                                                <span className="chat-read-icon float-end align-middle"><i
                                                                        className="ri-check-double-fill"></i></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="chat-inactive checkforactive" >
                                                <Link scroll={false} href="#!"
                                                onClick={(_e) => changeTheInfo({name:'Evelyn Adams', img:'3', status:'offline'})}
                                                >
                                                    <div className="d-flex align-items-top">
                                                        <div className="me-1 lh-1">
                                                            <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                                <img  src="../../assets/images/faces/3.jpg" alt="img" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-medium">
                                                                Evelyn Adams <span
                                                                    className="float-end text-muted fw-normal fs-11">9:45AM</span>
                                                            </p>
                                                            <p className="fs-12 mb-0">
                                                                <span className="chat-msg text-truncate">Work is dragging...</span>
                                                                <span className="chat-read-icon float-end align-middle"><i
                                                                        className="ri-check-double-fill"></i></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="chat-inactive checkforactive" >
                                                <Link scroll={false} href="#!"
                                                onClick={(_e) => changeTheInfo({name:'Lily Brown', img:'6', status:'offline'})}
                                                >
                                                    <div className="d-flex align-items-top">
                                                        <div className="me-1 lh-1">
                                                            <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                                <img  src="../../assets/images/faces/6.jpg" alt="img" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-medium">
                                                                Lily Brown <span
                                                                    className="float-end text-muted fw-normal fs-11">8:31AM</span>
                                                            </p>
                                                            <p className="fs-12 mb-0">
                                                                <span className="chat-msg text-truncate">Meet for lunch tomorrow?</span>
                                                                <span className="chat-read-icon float-end align-middle"><i
                                                                        className="ri-check-double-fill"></i></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="chat-inactive checkforactive" >
                                                <Link scroll={false} href="#!"
                                                onClick={(_e) => changeTheInfo({name: 'Chloe Lewis',img: '4', status:'offline'})}
                                                >
                                                    <div className="d-flex align-items-top">
                                                        <div className="me-1 lh-1">
                                                            <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                                <img src="../../assets/images/faces/4.jpg" alt="img" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-medium">
                                                                Chloe Lewis <span
                                                                    className="float-end text-muted fw-normal fs-11">7:23AM</span>
                                                            </p>
                                                            <p className="fs-12 mb-0">
                                                                <span className="chat-msg text-truncate">Weekend plans?</span>
                                                                <span className="chat-read-icon float-end align-middle"><i
                                                                        className="ri-check-double-fill"></i></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="chat-inactive checkforactive" >
                                                <Link scroll={false} href="#!"
                                                onClick={(_e) => changeTheInfo({name:'Leo Phillips', img:'13', status:'offline'})}
                                                >
                                                    <div className="d-flex align-items-top">
                                                        <div className="me-1 lh-1">
                                                            <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                                <img src="../../assets/images/faces/13.jpg" alt="img" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-medium">
                                                                Leo Phillips <span
                                                                    className="float-end text-muted fw-normal fs-11">10:22AM</span>
                                                            </p>
                                                            <p className="fs-12 mb-0">
                                                                <span className="chat-msg text-truncate">Craving pizza right now! &#127829;</span>
                                                                <span className="chat-read-icon float-end align-middle"><i
                                                                        className="ri-check-double-fill"></i></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="chat-inactive checkforactive" >
                                                <Link scroll={false} href="#!" 
                                                onClick={(_e) => changeTheInfo({name: 'Lucas Hayes', img:'15', status:'offline'})}
                                                >
                                                    <div className="d-flex align-items-top">
                                                        <div className="me-1 lh-1">
                                                            <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                                <img src="../../assets/images/faces/15.jpg" alt="img" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-medium">
                                                                Lucas Hayes <span
                                                                    className="float-end text-muted fw-normal fs-11">9:10AM</span>
                                                            </p>
                                                            <p className="fs-12 mb-0">
                                                                <span className="chat-msg text-truncate">Got any Netflix recommendations? </span>
                                                                <span className="chat-read-icon float-end align-middle"><i
                                                                        className="ri-check-double-fill"></i></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                </SimpleBar>
                                </Tab.Pane>
                               
                                <Tab.Pane eventKey="second" className="border-0 chat-groups-tab overflow-y-scroll" id="groups-tab-pane"
                                    role="tabpanel" aria-labelledby="groups-tab" tabIndex={0}>
                                    <SimpleBar>
                                    <ul className="list-unstyled mb-0 mt-2 ">
                                        <li className="pb-0">
                                            <p className="text-muted fs-11 fw-medium mb-1 op-7">MY CHAT GROUPS</p>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <p className="mb-0">1) ChatMingle Collective</p>
                                                    <p className="mb-0"><span className="badge bg-success-transparent">4
                                                            Online</span></p>
                                                </div>
                                                <div className="avatar-list-stacked my-auto">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/10.jpg" alt="img" />
                                                    </span>
                                                    <Link scroll={false} className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                        href="#!">
                                                        +19
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <p className="mb-0">2) ConnectHub Crew </p>
                                                    <p className="mb-0"><span className="badge bg-secondary-transparent">32
                                                            Online</span></p>
                                                </div>
                                                <div className="avatar-list-stacked my-auto">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/1.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/7.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/3.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/9.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/12.jpg" alt="img" />
                                                    </span>
                                                    <Link scroll={false} className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                        href="#!">
                                                        +123
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <p className="mb-0">3) TalkTide Tribe</p>
                                                    <p className="mb-0"><span className="badge bg-warning-transparent">3
                                                            Online</span></p>
                                                </div>
                                                <div className="avatar-list-stacked my-auto">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/4.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/8.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/13.jpg" alt="img" />
                                                    </span>
                                                    <Link scroll={false} className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                        href="#!">
                                                        +15
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <p className="mb-0">4) DialogDynasty</p>
                                                    <p className="mb-0"><span className="badge bg-danger-transparent">5
                                                            Online</span></p>
                                                </div>
                                                <div className="avatar-list-stacked my-auto">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/1.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/7.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/14.jpg" alt="img" />
                                                    </span>
                                                    <Link scroll={false} className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                        href="#!">
                                                        +28
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <p className="mb-0">5) NexusChat Nexus</p>
                                                    <p className="mb-0"><span className="badge bg-light text-dark">0 Online</span>
                                                    </p>
                                                </div>
                                                <div className="avatar-list-stacked my-auto">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/5.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/6.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/12.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../assets/images/faces/3.jpg" alt="img" />
                                                    </span>
                                                    <Link scroll={false} className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                        href="#!">
                                                        +53
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    </SimpleBar>
                                    <ul className="list-unstyled mb-0 mt-2 ">
                                        <li className="pb-0">
                                            <p className="text-muted fs-11 fw-medium mb-1 op-7">GROUP CHATS</p>
                                        </li>
                                        <li className="checkforactive">
                                            <Link scroll={false} href="#!"
                                            onClick={(_e) => changeTheInfo({name:'ChatMingle Collective', img:'17',status: 'online'})}
                                            >
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md online me-2 avatar-rounded">
                                                            <img src="../../assets/images/faces/17.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fw-medium" >
                                                            ChatMingle Collective &#128525; <span
                                                                className="float-end text-muted fw-normal fs-11">12:24PM</span>
                                                        </p>
                                                        <p className="fs-12 mb-0 chat-msg-typing ">
                                                            <span className="chat-msg text-truncate">Hira Typing...</span>
                                                            <span className="chat-read-icon float-end align-middle"><i
                                                                    className="ri-check-double-fill"></i></span>
                                                            <span
                                                                className="badge bg-success-transparent rounded-circle float-end">2</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="chat-msg-unread checkforactive" >
                                            <Link scroll={false} href="#!"
                                            onClick={(_e) => changeTheInfo({name:'ConnectHub Crew', img:'18',status: 'online'})}
                                            >
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md online me-2 avatar-rounded">
                                                            <img src="../../assets/images/faces/18.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fw-medium" >
                                                            ConnectHub Crew <span
                                                                className="float-end text-muted fw-normal fs-11">1:16PM</span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span className="chat-msg text-truncate"><span
                                                                    className="group-indivudial">Rams:</span>Happy to be part of
                                                                this group</span>
                                                            <span className="chat-read-icon float-end align-middle"><i
                                                                    className="ri-check-double-fill"></i></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="chat-inactive checkforactive" >
                                            <Link scroll={false} href="#!" 
                                              onClick={(_e) => changeTheInfo({name:'TalkTide Tribe', img:'19',status: 'offline'})}
                                            >
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                            <img src="../../assets/images/faces/19.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fw-medium">
                                                            TalkTide Tribe &#128526; <span
                                                                className="float-end text-muted fw-normal fs-11">3 days
                                                                ago</span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span
                                                                className="chat-msg text-truncate">Simon,Melissa,Amanda,Patrick,Siddique</span>
                                                            <span className="chat-read-icon float-end align-middle"><i
                                                                    className="ri-check-double-fill"></i></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="chat-inactive checkforactive" >
                                            <Link scroll={false} href="#!" 
                                            onClick={(_e) => changeTheInfo({name:'DialogDynasty', img:'20',status: 'offline'})}
                                            >
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                            <img  src="../../assets/images/faces/20.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fw-medium">
                                                            DialogDynasty <span
                                                                className="float-end text-muted fw-normal fs-11">5 days
                                                                ago</span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span
                                                                className="chat-msg text-truncate">Kamalan,Subha,Ambrose,Kiara,Jackson</span>
                                                            <span className="chat-read-icon float-end align-middle"><i
                                                                    className="ri-check-double-fill"></i></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="chat-inactive checkforactive" >
                                            <Link scroll={false} href="#!" 
                                            onClick={(_e) => changeTheInfo({name:'NexusChat Nexus', img:'21',status: 'offline'})}
                                            >
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                            <img src="../../assets/images/faces/21.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fw-medium">
                                                            NexusChat Nexus <span
                                                                className="float-end text-muted fw-normal fs-11">12 days
                                                                ago</span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span
                                                                className="chat-msg text-truncate">Subman,Rajen,Kairo,Dibasha,Alexa</span>
                                                            <span className="chat-read-icon float-end align-middle"><i
                                                                    className="ri-check-double-fill"></i></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </Tab.Pane>
                               
                                <Tab.Pane eventKey="third" className="border-0 chat-contacts-tab" id="contacts-tab-pane" role="tabpanel"
                                    aria-labelledby="contacts-tab" tabIndex={0}>
                                    <SimpleBar>
                                        <ul className="list-unstyled mb-0 chat-contacts-tab">
                                            <li>
                                                <span className="text-default fw-semibold">A</span>
                                            </li>   
                                            <li>    
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded avatar-sm">
                                                            <img src="../../assets/images/faces/5.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="d-block fw-semibold">
                                                            Ava Taylor
                                                        </span>
                                                    </div>
                                                    <Dropdown className="">
                                                        <Dropdown.Toggle variant="" aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="btn btn-icon btn-sm btn-outline-light no-caret"> 
                                                            <i className="ri-more-2-fill"></i>
                                                        </Dropdown.Toggle> 
                                                        <Dropdown.Menu  role="menu"> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-message-2-line me-2"></i>Chat</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-phone-line me-2"></i>Audio Call</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-live-line me-2"></i>Video Call</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-edit-line me-2"></i>Edit</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-spam-2-line me-2"></i>Block</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-2"></i>Delete</Dropdown.Item></li> 
                                                        </Dropdown.Menu> 
                                                    </Dropdown>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="text-default fw-semibold">B</span>
                                            </li>   
                                            <li>    
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded avatar-sm">
                                                            <img src="../../assets/images/faces/12.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="d-block fw-semibold">
                                                            Benjamin Turner
                                                        </span>
                                                    </div>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="btn btn-icon btn-sm btn-outline-light no-caret"> 
                                                            <i className="ri-more-2-fill"></i>
                                                        </Dropdown.Toggle> 
                                                        <Dropdown.Menu role="menu"> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-message-2-line me-2"></i>Chat</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-phone-line me-2"></i>Audio Call</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-live-line me-2"></i>Video Call</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-edit-line me-2"></i>Edit</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-spam-2-line me-2"></i>Block</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-2"></i>Delete</Dropdown.Item></li> 
                                                        </Dropdown.Menu> 
                                                    </Dropdown>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="text-default fw-semibold">C</span>
                                            </li>   
                                            <li>    
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded avatar-sm">
                                                            <img src="../../assets/images/faces/14.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="d-block fw-semibold">
                                                            Caleb Rodriguez
                                                        </span>
                                                    </div>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="btn btn-icon btn-sm btn-outline-light no-caret"> 
                                                            <i className="ri-more-2-fill"></i>
                                                        </Dropdown.Toggle> 
                                                        <Dropdown.Menu role="menu"> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-message-2-line me-2"></i>Chat</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-phone-line me-2"></i>Audio Call</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-live-line me-2"></i>Video Call</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-edit-line me-2"></i>Edit</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-spam-2-line me-2"></i>Block</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-2"></i>Delete</Dropdown.Item></li> 
                                                        </Dropdown.Menu> 
                                                    </Dropdown>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="text-default fw-semibold">D</span>
                                            </li>   
                                            <li>    
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded avatar-sm bg-primary">
                                                            DS
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="d-block fw-semibold">
                                                            Daniel Sullivan
                                                        </span>
                                                    </div>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="btn btn-icon btn-sm btn-outline-light no-caret"> 
                                                            <i className="ri-more-2-fill"></i>
                                                        </Dropdown.Toggle> 
                                                        <Dropdown.Menu role="menu"> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-message-2-line me-2"></i>Chat</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-phone-line me-2"></i>Audio Call</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-live-line me-2"></i>Video Call</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-edit-line me-2"></i>Edit</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-spam-2-line me-2"></i>Block</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-2"></i>Delete</Dropdown.Item></li> 
                                                        </Dropdown.Menu> 
                                                    </Dropdown>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="text-default fw-semibold">E</span>
                                            </li>   
                                            <li>    
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded avatar-sm">
                                                            <img src="../../assets/images/faces/7.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="d-block fw-semibold">
                                                            Emma Johnson
                                                        </span>
                                                    </div>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="btn btn-icon btn-sm btn-outline-light no-caret"> 
                                                            <i className="ri-more-2-fill"></i>
                                                        </Dropdown.Toggle> 
                                                        <Dropdown.Menu role="menu"> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-message-2-line me-2"></i>Chat</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-phone-line me-2"></i>Audio Call</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-live-line me-2"></i>Video Call</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-edit-line me-2"></i>Edit</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-spam-2-line me-2"></i>Block</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-2"></i>Delete</Dropdown.Item></li> 
                                                        </Dropdown.Menu> 
                                                    </Dropdown>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="text-default fw-semibold">J</span>
                                            </li>   
                                            <li>    
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded avatar-sm">
                                                            <img src="../../assets/images/faces/15.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="d-block fw-semibold">
                                                            Jackson Rivera
                                                        </span>
                                                    </div>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="btn btn-icon btn-sm btn-outline-light no-caret"> 
                                                            <i className="ri-more-2-fill"></i>
                                                        </Dropdown.Toggle> 
                                                        <Dropdown.Menu role="menu"> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-message-2-line me-2"></i>Chat</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-phone-line me-2"></i>Audio Call</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-live-line me-2"></i>Video Call</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-edit-line me-2"></i>Edit</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-spam-2-line me-2"></i>Block</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-2"></i>Delete</Dropdown.Item></li> 
                                                        </Dropdown.Menu> 
                                                    </Dropdown>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="text-default fw-semibold">L</span>
                                            </li>   
                                            <li>    
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded avatar-sm bg-primary">
                                                            LP
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="d-block fw-semibold">
                                                            Leo Phillips
                                                        </span>
                                                    </div>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="" aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="btn btn-icon btn-sm btn-outline-light no-caret"> 
                                                            <i className="ri-more-2-fill"></i>
                                                        </Dropdown.Toggle> 
                                                        <Dropdown.Menu role="menu"> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-message-2-line me-2"></i>Chat</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-phone-line me-2"></i>Audio Call</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-live-line me-2"></i>Video Call</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-edit-line me-2"></i>Edit</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-spam-2-line me-2"></i>Block</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-2"></i>Delete</Dropdown.Item></li> 
                                                        </Dropdown.Menu> 
                                                    </Dropdown>
                                                </div>
                                            </li>
                                            <li>    
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded avatar-sm">
                                                            <img src="../../assets/images/faces/2.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="d-block fw-semibold">
                                                            Lily Brown
                                                        </span>
                                                    </div>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="btn btn-icon btn-sm btn-outline-light no-caret"> 
                                                            <i className="ri-more-2-fill"></i>
                                                        </Dropdown.Toggle> 
                                                        <Dropdown.Menu role="menu"> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-message-2-line me-2"></i>Chat</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-phone-line me-2"></i>Audio Call</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-live-line me-2"></i>Video Call</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-edit-line me-2"></i>Edit</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-spam-2-line me-2"></i>Block</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-2"></i>Delete</Dropdown.Item></li> 
                                                        </Dropdown.Menu> 
                                                    </Dropdown>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="text-default fw-semibold">N</span>
                                            </li>   
                                            <li>    
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded avatar-sm">
                                                            <img src="../../assets/images/faces/10.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="d-block fw-semibold">
                                                            Noah Russell
                                                        </span>
                                                    </div>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="btn btn-icon btn-sm btn-outline-light no-caret"> 
                                                            <i className="ri-more-2-fill"></i>
                                                        </Dropdown.Toggle> 
                                                        <Dropdown.Menu role="menu"> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-message-2-line me-2"></i>Chat</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-phone-line me-2"></i>Audio Call</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-live-line me-2"></i>Video Call</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-edit-line me-2"></i>Edit</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-spam-2-line me-2"></i>Block</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-2"></i>Delete</Dropdown.Item></li> 
                                                        </Dropdown.Menu> 
                                                    </Dropdown>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="text-default fw-semibold">W</span>
                                            </li>   
                                            <li>    
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded avatar-sm">
                                                            <img src="../../assets/images/faces/16.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="d-block fw-semibold">
                                                            Wyatt Thompson
                                                        </span>
                                                    </div>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant=""  aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="btn btn-icon btn-sm btn-outline-light no-caret"> 
                                                            <i className="ri-more-2-fill"></i>
                                                        </Dropdown.Toggle> 
                                                        <Dropdown.Menu role="menu"> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-message-2-line me-2"></i>Chat</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-phone-line me-2"></i>Audio Call</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-live-line me-2"></i>Video Call</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-edit-line me-2"></i>Edit</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-spam-2-line me-2"></i>Block</Dropdown.Item></li> 
                                                            <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-2"></i>Delete</Dropdown.Item></li> 
                                                        </Dropdown.Menu> 
                                                    </Dropdown>
                                                </div>
                                            </li>
                                        </ul>
                                    </SimpleBar>
                                </Tab.Pane>
                            </Tab.Content>
                       </Tab.Container>
                    </div>
                    <div className="main-chat-area border">
                        <div className="d-flex align-items-center border-bottom main-chat-head flex-wrap">
                            <div className="me-2 lh-1">
                                <span className="avatar avatar-md online avatar-rounded chatstatusperson">
                                    <img className="chatimageperson" src="../../assets/images/faces/8.jpg" alt="img" />
                                </span>
                            </div>
                            <div className="flex-fill">
                                <p className="mb-0 fw-medium fs-14 lh-1">
                                    <Link scroll={false} href="#!" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" className="chatnameperson responsive-userinfo-open">Aria Robinson</Link>
                                </p>
                                <p className="text-muted mb-0 chatpersonstatus">online</p>
                            </div>
                            <div className="d-flex flex-wrap rightIcons">
                                <button aria-label="button" type="button" className="btn btn-icon btn-primary-light my-1 ms-2 btn-sm">
                                    <i className="ti ti-phone"></i>
                                </button>
                                <button aria-label="button" type="button" className="btn btn-icon btn-secondary-light my-1 ms-2 btn-sm">
                                    <i className="ti ti-video"></i>
                                </button>
                                <button aria-label="button" type="button" className="btn btn-icon btn-outline-light my-1 ms-2 responsive-userinfo-open btn-sm">
                                    <i className="ti ti-user-circle" id="responsive-chat-close"></i>
                                </button>
                                <Dropdown className="dropdown ms-2">
                                    <Dropdown.Toggle variant="" aria-label="button" className="btn btn-icon btn-success-light my-1 btn-wave waves-light btn-sm no-caret" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ti ti-dots-vertical"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <li><Dropdown.Item href="#!"><i className="ri-user-3-line me-1"></i>Profile</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!"><i className="ri-format-clear me-1"></i>Clear Chat</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!"><i className="ri-user-unfollow-line me-1"></i>Delete User</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!"><i className="ri-user-forbid-line me-1"></i>Block User</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!"><i className="ri-error-warning-line me-1"></i>Report</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant="" onClick={()=>{handledelete()}} aria-label="button" type="button" className="btn btn-icon btn-outline-light my-1 ms-2 responsive-chat-close btn-sm">
                                    <i className="ri-close-line"></i>
                                </Button>
                            </div>
                        </div>
                         <SimpleBar>
                            <div className="chat-content" id="main-chat-content">
                                <ul className="list-unstyled">
                                    <li className="chat-day-label">
                                        <span>Today</span>
                                    </li>
                                    <li className="chat-item-start">
                                        <div className="chat-list-inner">
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md online avatar-rounded chatstatusperson">
                                                    <img className="chatimageperson" src="../../assets/images/faces/8.jpg" alt="img" />
                                                </span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="chatting-user-info">
                                                    <span className="chatnameperson">Aria Robinson</span> <span className="msg-sent-time">11:48PM</span>
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div>
                                                        <p className="mb-0">Hey there! &#128522; How's it going?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-item-end">
                                        <div className="chat-list-inner">
                                            <div className="me-3">
                                                <span className="chatting-user-info">
                                                    <span className="msg-sent-time"><span className="chat-read-mark align-middle d-inline-flex"><i
                                                                className="ri-check-double-line"></i></span>11:50PM</span> You
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div>
                                                        <p className="mb-0">Hey! I'm good, thanks. Just finished some work. How about you?</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md online avatar-rounded">
                                                    <img src="../../assets/images/faces/15.jpg" alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-item-start">
                                        <div className="chat-list-inner">
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md online avatar-rounded chatstatusperson">
                                                    <img className="chatimageperson" src="../../assets/images/faces/8.jpg" alt="img" />
                                                </span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="chatting-user-info">
                                                    <span className="chatnameperson">Aria Robinson</span> <span className="msg-sent-time">11:51PM</span>
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div>
                                                        <p className="mb-0">Not too bad, just chilling. Have any exciting plans for the weekend?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-item-end">
                                        <div className="chat-list-inner">
                                            <div className="me-3">
                                                <span className="chatting-user-info">
                                                    <span className="msg-sent-time"><span className="chat-read-mark align-middle d-inline-flex"><i
                                                                className="ri-check-double-line"></i></span>11:52PM</span> You
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div>
                                                        <p className="mb-0">Not really, just relaxing. Maybe catch up on some movies. You?</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md online avatar-rounded">
                                                    <img src="../../assets/images/faces/15.jpg" alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-item-start">
                                        <div className="chat-list-inner">
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md online avatar-rounded chatstatusperson">
                                                    <img className="chatimageperson" src="../../assets/images/faces/8.jpg" alt="img" />
                                                </span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="chatting-user-info">
                                                    <span className="chatnameperson">Aria Robinson</span> <span className="msg-sent-time">11:55PM</span>
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div>
                                                        <p className="mb-0">Same here. Thinking of trying out that new cafe downtown. Heard they have amazing coffee.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-item-end">
                                        <div className="chat-list-inner">
                                            <div className="me-3">
                                                <span className="chatting-user-info">
                                                    <span className="msg-sent-time"><span className="chat-read-mark align-middle d-inline-flex"><i
                                                                className="ri-check-double-line"></i></span>11:52PM</span> You
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div className="">
                                                        <p className="mb-0">Oh, nice! Let me know how it is. I might check it out too.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md online avatar-rounded">
                                                    <img src="../../assets/images/faces/15.jpg" alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-item-start">
                                        <div className="chat-list-inner">
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md online avatar-rounded">
                                                    <img className="chatimageperson" src="../../assets/images/faces/8.jpg" alt="img" />
                                                </span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="chatting-user-info chatnameperson">
                                                    Aria Robinson <span className="msg-sent-time">11:45PM</span>
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div>
                                                        <p className="mb-0">No spoilers, promise! Enjoy the binge-watching session. &#128516;</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </SimpleBar>
                        <div className="chat-footer">
                            <Link scroll={false} aria-label="anchor" className="btn btn-icon me-2 btn-success emoji-picker" href="#!">
                                <i className="ri-emotion-line"></i>
                            </Link>
                            <input className="form-control chat-message-space" placeholder="Type your message here..." type="text"/>
                            <Link scroll={false} aria-label="anchor" className="btn btn-primary ms-2 btn-icon btn-send" href="#!">
                                <i className="ri-send-plane-2-line"></i>
                            </Link>
                        </div>
                    </div>
                    
                </div>
</Fragment>
);
};

export default Chat;