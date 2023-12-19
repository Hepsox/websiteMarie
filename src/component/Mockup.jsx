import PropTypes from "prop-types";
function Mockup({ imgPortfolio }) {
  return (
    <div className="container-img-portfolio">
      <img className="img-fluid" src={imgPortfolio} alt="" />
    </div>
  );
}
export default Mockup;
