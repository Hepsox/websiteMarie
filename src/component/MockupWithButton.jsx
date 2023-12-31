import { Link } from "react-router-dom";

function Mockup({ imgPortfolio, link, title, target }) {
  return (
    <div className="container-img-portfolio with-link">
      <img className="img-fluid" src={imgPortfolio} alt="" />
      <Link
        className="btn-link btn-principal"
        to={link}
        target={target ?? "_self"}
      >
        {title}
      </Link>
    </div>
  );
}

export default Mockup;
