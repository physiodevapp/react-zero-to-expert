import React from 'react'
import { useCalendarStore, useUiStore } from '../../hooks'
import { addHours } from 'date-fns';

export const FabAddNew = () => {

  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore()

  const handleClickNew = () => {
    setActiveEvent({
      title: "",
      notes: "",
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: "#fafafa",
      user: {
        _id: "123",
        name: "physiodevapp",
      },
    })
    openDateModal()
  }

  return (
    <button 
      onClick={handleClickNew} 
      className='btn btn-primary fab'
    >
      <i className='fa fa-plus'></i>
    </button>
  )
}
