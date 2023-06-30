import React, { useState } from "react";
import { Navbar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from "../";

import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { localizer } from "../../helpers";
import { useCalendarStore, useUiStore } from "../../hooks";

export const CalendarPage = () => {

  const { openDateModal } = useUiStore()
  const { calendarEvents, setActiveEvent } = useCalendarStore()

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

  const eventStyleGetter = (event, start, end, isSelected) => {
    // console.log({event, start, end, isSelected})

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: '0.8',
      color: 'white'
    }

    return {
      style
    }
  }

  const onDoubleClick = (event) => {
    // console.log({doubleClick: event})
    openDateModal()
  }

  const onSelect = (event) => {
    console.log({click: event})
    setActiveEvent(event)
  }

  const onViewChange = (event) => {
    console.log({viewChanged: event})
    localStorage.setItem('lastView', event)
  }

  return (
    <>
      <Navbar />

      <Calendar
        localizer={localizer}
        events={calendarEvents}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
      />

      <CalendarModal/>

      <FabAddNew/>
      <FabDelete/>
    </>
  );
};
