import { Link } from "react-router-dom";

function Mockup({ imgPortfolio, link, title, target }) {
  return (
    <div className="container-img-portfolio with-link">
      <a href={link} target={target ?? "_self"}>
        {" "}
        {/* Wrapper avec le lien */}
        <img className="img-fluid" src={imgPortfolio} alt="" />
        <button className="btn-link btn-principal">{title}</button>
      </a>
    </div>
  );
}

export default Mockup;
