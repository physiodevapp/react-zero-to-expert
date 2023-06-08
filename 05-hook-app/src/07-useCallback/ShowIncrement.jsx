import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
  
  console.log('I was executed!')

  return (
    <button 
        onClick={() => increment()}
        className="btn btn-primary"
      >
        +1
      </button>
  )
})
