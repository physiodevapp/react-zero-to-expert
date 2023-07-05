import React, { useEffect, useState } from "react";
import {
  Navbar,
  CalendarEvent,
  CalendarModal,
  FabAddNew,
  FabDelete,
} from "../";

import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { localizer } from "../../helpers";
import { useAuthStore, useCalendarStore, useUiStore } from "../../hooks";

export const CalendarPage = () => {
  const { user } = useAuthStore();
  const { openDateModal } = useUiStore();
  const { calendarEvents, setActiveEvent, startLoadingEvents } =
    useCalendarStore();

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );

  const eventStyleGetter = (event, start, end, isSelected) => {
    // console.log({event, start, end, isSelected})

    const isMyEvent = user.uid === event.user._id || user.uid === event.user.uid;

    const style = {
      backgroundColor: isMyEvent ? "#347CF7" : "#465660",
      borderRadius: "0px",
      opacity: "0.8",
      color: "white",
    };

    return {
      style,
    };
  };

  const onDoubleClick = (event) => {
    // console.log({doubleClick: event})
    openDateModal();
  };

  const onSelect = (event) => {
    console.log({ click: event });
    setActiveEvent(event);
  };

  const onViewChange = (event) => {
    console.log({ viewChanged: event });
    localStorage.setItem("lastView", event);
  };

  useEffect(() => {
    startLoadingEvents();
  }, []);

  return (
    <>
      <Navbar />

      <Calendar
        localizer={localizer}
        events={calendarEvents}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
      />

      <CalendarModal />

      <FabAddNew />
      <FabDelete />
    </>
  );
};
