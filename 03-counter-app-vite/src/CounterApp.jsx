import { useState } from 'react';
import PropTypes from 'prop-types';

function CounterApp({ value }) {

  // console.log('render');

  const [count, setCount] = useState(value)

  const handleCounter = (key) => {
    // setCount(count + 1)
    switch (key) {
      case 1:
        setCount((prevCount) => prevCount + 1);
        break;
      case -1:
        setCount((prevCount) => prevCount - 1);
      break;
      default:
        setCount(value);
        break;
    }
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => handleCounter(1)}>
        +1
      </button>
      <button onClick={() => handleCounter(-1)}>
        -1
      </button>
      <button onClick={() => handleCounter()}>
        Reset
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