import TemplateAccordeon from "./TemplateAccordeon";
import Mockup from "./Mockup";
// import projets from "../../data";
import { useLoaderData } from "react-router-dom";

function Projet() {
  const projet = useLoaderData();

  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  // const projet = projets.find((item) => item.slug === slug);

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
          <p>{projet.goals}</p>
        </div>
      </section>

      <section className="container infos-projet">
        <div className="section-info">
          <h3> Durée</h3>
          <p>{projet.duration}</p>
        </div>
        <div className="section-info">
          <h3> Languages</h3>
          <p>{projet.languages}</p>
        </div>
        <div className="section-info">
          <h3> Les outils</h3>
          <p>{projet.tools}</p>
        </div>
      </section>
      <section>
        <TemplateAccordeon
          title="Le projet en détail"
          subtitle="Les fonctionnalités de l'application"
          description={projet.text_faq}
          questions={projet.faq}
        />
      </section>
      <section className="portfolio">
        <div className="container">
          <h3> Le projet en images ! </h3>
          <div className="mockups">
            {projet.photos.map((item, index) => (
              <Mockup imgPortfolio={item} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projet;
