import React, { useEffect } from 'react'

function Message() {

  useEffect(() => {
    console.log('message mounted!')
  
    return () => {
      console.log('message unmounted!')
    }
  }, [])
  

  return (
    <h4 className='mt-2'>User already exists</h4>
  )
}

export default Message