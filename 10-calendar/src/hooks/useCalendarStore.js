import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvents,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store/calendar/calendarSlice";
import calendarApi from "../api/calendarApi";
import { convertEventsToDateEvents } from "../helpers";
import Swal from "sweetalert2";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events: calendarEvents, activeEvent } = useSelector(
    (state) => state.calendar
  );
  const { user } = useSelector(state => state.auth)

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {

    // TODO: Update event
    if (calendarEvent.id) {
      
      try {
        await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent)
  
        dispatch(onUpdateEvent({
          ...calendarEvent,
          user
        }))
        
      } catch (error) {
        console.log(error)
        Swal.fire('Error while trying to save', error.response.data.msg, 'error')
      }

    } else {
      const { data } = await calendarApi.post('/events', calendarEvent, user)

      dispatch(
        onAddNewEvent({
          ...calendarEvent,
          id: data.event.id,
        })
      );
    }
  };

  const startDeletingEvent = async() => {

    try {
      await calendarApi.delete(`/events/${activeEvent.id}`)
      dispatch(onDeleteEvent())
    } catch (error) {
      console.log(error)
      Swal.fire('An error occurred while trying to delete event', error.response.data.msg, 'error')
    }

  }

  const startLoadingEvents = async () => {

    try {
      
      const { data } = await calendarApi.get('/events')
      const events = convertEventsToDateEvents(data.events)
      dispatch(onLoadEvents(events))

    } catch (error) {
      console.log('An error occurred while trying to update event')
      console.log(error)
      Swal.fire('An error occurred while trying to update event', error.response.data.msg, 'error')
    }

  }

  return {
    // Properties
    calendarEvents,
    activeEvent,
    isEventSelected: !!activeEvent,

    // Methods
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
    startLoadingEvents,
  };
};
