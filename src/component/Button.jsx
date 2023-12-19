import PropTypes from "prop-types";
function Button({ title, classNameBtn }) {
  if (!classNameBtn) {
    classNameBtn = "btn-principal";
  }

  classNameBtn = `btn ${classNameBtn}`;

  return (
    <div>
      <button className={classNameBtn} type="submit">
        {title}
      </button>
    </div>
  );
}
Button.propTypes = {
  title: PropTypes.string.isRequired,
  classNameBtn: PropTypes.string,
};
export default Button;
