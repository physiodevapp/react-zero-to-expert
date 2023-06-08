import React, {memo} from 'react'

export const Small = memo(({value}) => {
  console.log('I was rendered!')

  return (
    <small>{value}</small>
  )
})
