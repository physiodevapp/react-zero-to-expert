import PropTypes from "prop-types";

export const FirstApp = ({ title, subtitle }) => {
  return (
    <>
      <h1 data-testid='test-title'>{title}</h1>
      <p>{subtitle}</p>
      <p>{subtitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired,
};

FirstApp.defaultProps = {
  // title: "ups!",
  subtitle: 123,
  name: "Physiodevapp",
};
