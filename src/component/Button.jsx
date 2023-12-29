import PropTypes from "prop-types";
function Button({ title, classNameBtn, type, onClick }) {
  if (!classNameBtn) {
    classNameBtn = "btn-principal";
  }

  classNameBtn = `btn ${classNameBtn}`;

  return (
    <button className={classNameBtn} type={type ?? "button"} onClick={onClick}>
      {title}
    </button>
  );
}
Button.propTypes = {
  title: PropTypes.string.isRequired,
  classNameBtn: PropTypes.string,
};
export default Button;
