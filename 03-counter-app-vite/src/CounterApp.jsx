import PropTypes from 'prop-types'

function CounterApp({ value }) {
  // console.log(value)
  const handleClick = () => {
    console.log('btn clicked');
    value = 1000;
  }

  return (
    <>
      <h1>CounterApps</h1>
      <h2> { value } </h2>
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