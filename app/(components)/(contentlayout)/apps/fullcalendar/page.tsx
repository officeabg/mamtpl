"use client"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";

const Fullcalendar = () => {
  let eventGuid = 0;
	const todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
	const INITIAL_EVENTS = [
		{
			id: createEventId(),
			title: "Meeting",
			start: todayStr,
		},
		{
			id: createEventId(),
			title: "Meeting Time",
			start: todayStr + "T16:00:00",
		},
	];

	function createEventId() {
		return String(eventGuid++);
	}
	const initialstate1 = {
		calendarEvents: [
			{
				title: "Atlanta Monster",
				start: new Date("2019-04-04 00:00"),
				id: "1001",
			},
			{
				title: "My Favorite Murder",
				start: new Date("2019-04-05 00:00"),
				id: "1002",
			},
		],

		events: [
			{
				title: "Calendar Events",
				id: "1",
				bg: "primary",
			},
			{
				title: "Birthday Events",
				id: "2",
				bg: "secondary",
			},
			{
				title: "Holiday Calendar",
				id: "3",
				bg: "success",
			},
			{
				title: "Office Events",
				id: "4", 
        bg: "info",
				border: "border-info-transparent"
			},
			{
				title: "Other Events",
				id: "5",
				bg: "warning",
			},
			{
				title: "Festival Events",
				id: "6",
				bg: "danger",
			},
			{
				title: "Timeline Events",
				id: "7",
				bg: "teal",
			},
		],
	};
	const [state] = useState(initialstate1);

	useEffect(() => {
		const draggableEl:any = document.getElementById("external-events");
		new Draggable(draggableEl, {
			itemSelector: ".fc-event",
			eventData: function (eventEl) {
				const title = eventEl.getAttribute("title");
				const id = eventEl.getAttribute("data");
				const classValue = eventEl.getAttribute("class");
				return {
					title: title,
					id: id,
					className: classValue,
				};
			},
		});
	}, []);

	function renderEventContent(eventInfo:any) {
		return (
			<>
				<b>{eventInfo.timeText}</b>
				<i>{eventInfo.event.title}</i>
			</>
		);
	}
	const handleEventClick = (clickInfo:any) => {
		if (
			window.confirm(
				`Are you sure you want to delete the event '${clickInfo.event.title}'`
			)
		) {
			clickInfo.event.remove();
		}
	};
	const handleEvents = () => { };

	const handleDateSelect = (selectInfo:any) => {
		const title = prompt("Please enter a new title for your event");
		const calendarApi = selectInfo.view.calendar;

		calendarApi.unselect();

		if (title) {
			calendarApi.addEvent({
				id: createEventId(),
				title,
				start: selectInfo.startStr,
				end: selectInfo.endStr,
				allDay: selectInfo.allDay,
			});
		}
	};
return ( 
    <Fragment>
            {/* Page Header */}
                <Seo title={"Full Calendar"} />
                <Pageheader Heading="Full Calendar" Pages={[{title:"Apps", active:true},{title:"Full Calendar", active:false}]} />
            {/* Page Header Close */}

                {/* Start::row-1 */}
                <Row>
                    <Col xl={9}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                              <Card.Title>All Events</Card.Title>
                              <Button variant="" className="btn btn-primary btn-wave"><i className="ri-add-line align-middle me-1 fw-medium d-inline-block"></i>Create New Event</Button>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div id="external-events" className="border-bottom p-3 d-flex align-items-center flex-wrap gap-3">
                                    {state.events.map((event) => (
                                      <div
                                        className={`fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event bg-${event.bg}-transparent border ${event.border}`}
                                        title={event.title}
                                        key={event.id}>
                                        <div className={`fc-event-main text-${event.bg}`}>{event.title}</div>
                                      </div>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                          <Card.Header>
                              <Card.Title>Full Calendar</Card.Title>
                          </Card.Header>
                          <Card.Body>
                              <div id='calendar2'>
                                  <FullCalendar plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                                    headerToolbar={{ left: "prev,next today", center: "title", right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek" }}
                                    initialView="dayGridMonth" editable={true} selectable={true} selectMirror={true} dayMaxEvents={true}
                                    initialEvents={INITIAL_EVENTS} select={handleDateSelect} eventContent={renderEventContent} eventClick={handleEventClick}
                                    eventsSet={handleEvents}
                                  />
                              </div>
                          </Card.Body>
                      </Card>
                    </Col>
                    <Col xl={3}>
                      <Card className="custom-card">
                        <Card.Body className="p-0">
                          <div className="p-3">
                            <div className="d-flex align-items-center justify-content-between">
                              <h6 className="fw-medium">
                                Activity :
                              </h6>
                              <Button variant="" className="btn btn-primary-light btn-sm btn-wave">View All</Button>
                            </div>
                          </div>
                          <div className="border-bottom" >
                            <SimpleBar id="full-calendar-activity" className="p-3">
                            <ul className="list-unstyled mb-0 fullcalendar-events-activity">
                              <li>
                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                  <p className="mb-1 fw-medium">
                                    Monday, Jan 1,2024
                                  </p>
                                  <span className="badge bg-light text-default mb-1">12:00PM - 1:00PM</span>
                                </div>
                                <p className="mb-0 text-muted fs-12">
                                  Meeting with a client about new project requirement.
                                </p>
                              </li>
                              <li>
                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                  <p className="mb-1 fw-medium">
                                    Thursday, Dec 29,2022
                                  </p>
                                  <span className="badge bg-success mb-1">Completed</span>
                                </div>
                                <p className="mb-0 text-muted fs-12">
                                  Birthday party of niha suka
                                </p>
                              </li>
                              <li>
                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                  <p className="mb-1 fw-medium">
                                    Wednesday, Jan 3,2024
                                  </p>
                                  <span className="badge bg-warning-transparent mb-1">Reminder</span>
                                </div>
                                <p className="mb-0 text-muted fs-12">
                                  WOrk taget for new project is completing
                                </p>
                              </li>
                              <li>
                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                  <p className="mb-1 fw-medium">
                                    Friday, Jan 20,2024
                                  </p>
                                  <span className="badge bg-light text-default mb-1">06:00PM - 09:00PM</span>
                                </div>
                                <p className="mb-0 text-muted fs-12">
                                  Watch new movie with family
                                </p>
                              </li>
                              <li>
                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                  <p className="mb-1 fw-medium">
                                    Saturday, Jan 07,2024
                                  </p>
                                  <span className="badge bg-danger-transparent mb-1">Due Date</span>
                                </div>
                                <p className="mb-0 text-muted fs-12">
                                  Last day to pay the electricity bill and water bill.need to check the bank details.
                                </p>
                              </li>
                            </ul>
                              </SimpleBar>
                          </div>
                          <div className="p-4">
                            <img src="../../assets/images/media/media-81.svg" className="full-calendar-image img-fluid" alt=""/>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                </Row>
                {/*End::row-1 */}
    </Fragment>
    )
};

export default Fullcalendar;