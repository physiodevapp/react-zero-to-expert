
import PropTypes from 'prop-types';

export const FirstApp = ( {title, subtitle} ) => {



  return (
    <>
      {/* <code> {JSON.stringify( newMessage)} </code> */}
      {/* <h1>{getMessage(newMessage)}</h1> */}
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  title: 'ups!',
  subtitle: 123,
  name: 'Physiodevapp'
}
