import PropTypes from "prop-types";
import TemplateAccordeon from "./TemplateAccordeon";
import Mockup from "./Mockup";

function Projet({ title, subtitle, objectifs, time, technologies, outils }) {
  return (
    <>
      <section className="projet-hero">
        <div className="container">
          <h1>{title} Application Le Rasta Rockett </h1>
          <p>{subtitle} Site internet pour découvrir les bars </p>
        </div>
      </section>

      <section className="projet-objectifs">
        <div className="container">
          <h3>Les objectifs du projet</h3>
          <p>
            {objectifs} Ce site static affiche les bars près chez l’utilisateur,
            en lui donnant la possibilité de les filtrer par spécialité ou par
            prix. Ce projet a comme rôle de maitriser les technologies suivantes
            :
          </p>
        </div>
      </section>

      <section className="container infos-projet">
        <div className="section-info">
          <h3> Durée</h3>
          <p>{time} 2 semaines </p>
        </div>
        <div className="section-info">
          <h3> Technologies</h3>
          <p>
            {technologies} JavaScript ES6, HTML5 / CSS3, Git/ Github, Figma, et
            Trello.
          </p>
        </div>
        <div className="section-info">
          <h3> Outils</h3>
          <p>{outils} Trello, Figma, Git/GitHub </p>
        </div>
      </section>
      <section>
        <TemplateAccordeon
          title={"Un profil multifacettes"}
          subtitle={"Mes compétences techniques"}
          description={`Mon expertise s'étend de la conception de chartes graphiques, du
          maquettage et de l'intégration HTML/CSS, à la dynamisation du
          contenu avec React.js. J'ai une expérience significative dans la
          mise en place de routers, la création de composants et de pages
          interactifs, ainsi que l'utilisation d'API. Ma méthodologie
          intègre efficacement le versioning et la collaboration sur GitHub
          pour assurer un développement fluide.`}
        />
      </section>
      <section className="portfolio">
        <div className="container">
          <h3> Le projet en image ! </h3>
          <div className="mockups">
            <Mockup imgPortfolio={"src/assets/isabelle-rollo.jpg"} />
            <Mockup imgPortfolio={"src/assets/ad-russo-marie-delaire.jpeg"} />
            <Mockup imgPortfolio={"src/assets/crizalid-marie-delaire.jpeg"} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Projet;
