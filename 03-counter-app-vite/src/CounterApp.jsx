import { useState } from 'react';
import PropTypes from 'prop-types';

function CounterApp({ value }) {

  const [count, setCount] = useState(value)

  const handleClick = () => {
    // setCount(count + 1)
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <>
      <h1>CounterApps</h1>
      <h2> {count} </h2>
      <button onClick={handleClick}>
        +1
      </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
  value: 0
}

export default CounterApp