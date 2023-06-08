import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
  
  console.log('I was executed!')

  return (
    <button 
        onClick={() => increment(2)}
        className="btn btn-primary"
      >
        +1
      </button>
  )
})
