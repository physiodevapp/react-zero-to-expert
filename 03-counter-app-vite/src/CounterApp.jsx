import PropTypes from 'prop-types'

function CounterApp({value}) {
  // console.log(value)
  return (
    <>
      <h1>CounterApps</h1>
      <h2>{value}</h2>
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