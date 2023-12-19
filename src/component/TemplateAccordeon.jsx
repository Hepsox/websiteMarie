import Accordeon from "./Accordeon";
import PropTypes from "prop-types";

function TemplateAccordeon({ title, subtitle, description }) {
  return (
    <div>
      <section className="parcours">
        <div className="container">
          <div className="parcours-left">
            <h4 className="subtitle"> {title}</h4>
            <h3>{subtitle}</h3>
            <p>{description}</p>
          </div>

          <div className="parcours-right">
            <Accordeon />
          </div>
        </div>
      </section>
    </div>
  );
}

export default TemplateAccordeon;
