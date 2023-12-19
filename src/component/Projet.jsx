import TemplateAccordeon from "./TemplateAccordeon";
import Mockup from "./Mockup";
import projets from "../../data";
import { useParams } from "react-router-dom";

function Projet() {
  const { slug } = useParams();

  const projet = projets.find((item) => item.slug === slug);

  return (
    <>
      <section className="projet-hero">
        <div className="container">
          <h1>{projet.title}</h1>
          <p>{projet.subtitle}</p>
        </div>
      </section>

      <section className="projet-objectifs">
        <div className="container">
          <h3>Les objectifs du projet</h3>
          <p>{projet.objectifs}</p>
        </div>
      </section>

      <section className="container infos-projet">
        <div className="section-info">
          <h3> Durée</h3>
          <p>{projet.duration}</p>
        </div>
        <div className="section-info">
          <h3> Languages</h3>
          <p>{projet.technologies.join(", ")}</p>
        </div>
        <div className="section-info">
          <h3> Les outils</h3>
          <p>{projet.tools.join(", ")}</p>
        </div>
      </section>
      <section>
        <TemplateAccordeon
          title={projet.accordeonTitle}
          subtitle={projet.accordeonSubtitle}
          description={projet.accordeonDescription}
          questions={projet.accordeonQuestions}
        />
      </section>
      <section className="portfolio">
        <div className="container">
          <h3> Le projet en images ! </h3>
          <div className="mockups">
            {projet.imgProjet.map((item, index) => (
              <Mockup imgPortfolio={item} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projet;
