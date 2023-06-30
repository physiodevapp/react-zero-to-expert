import React from 'react'
import { useCalendarStore } from '../../hooks/useCalendarStore'

export const FabDelete = () => {

  const { isEventSelected, startDeletingEvent } = useCalendarStore()

  const handleClickDelete = () => {
    startDeletingEvent()
  }

  return (
    <button 
      onClick={handleClickDelete}
      className='btn btn-danger fab fab-danger'
      style={{
        display: isEventSelected ? '' : 'none'
      }}
    >
      <i className='fa fa-trash'></i>
    </button>
  )
}

