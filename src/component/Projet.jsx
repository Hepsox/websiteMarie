import TemplateAccordeon from "./TemplateAccordeon";
import Mockup from "./Mockup";
// import projets from "../../data";
import { Link, useLoaderData } from "react-router-dom";

function Projet() {
  const projet = useLoaderData();
  console.log(projet);

  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${projet.background})`, // Ajout d'un dégradé avec une opacité noire
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "130px 0", // Ajustez le padding selon vos besoins
    color: "#fff", // Assurez-vous que le texte soit lisible
    textAlign: "center",
  };

  return (
    <>
      <section className="projet-hero" style={heroStyle}>
        <div className="container">
          <h1>{projet.title}</h1>
          <p>{projet.subtitle}</p>
          <Link
            to={projet.website}
            className="btn btn-principal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visiter le site
          </Link>
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
