import PropTypes from "prop-types";

function Input({ titleInput, typeInput, name, handleChange, formValues }) {
  return (
    <div className="container input-container">
      <label htmlFor={name}>{titleInput}</label>
      <input
        type={typeInput ?? "text"}
        name={name}
        id={name}
        onChange={handleChange}
        value={formValues[name] ?? ""}
      />
    </div>
  );
}

Input.propTypes = {
  titleInput: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  typeInput: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired,
};
export default Input;
