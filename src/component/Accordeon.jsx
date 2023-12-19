import { useState } from "react";
import PropTypes from "prop-types";

const data = [
  { skill: "React.js", detail: " Dynamisation du contenu avec React" },
  { skill: "Node et Express", detail: " 1 ans " },
  {
    skill: "SQL",
    detail:
      " Conception et modélisation avancées de bases de données relationnelles. Maîtrise approfondie du langage SQL pour la rédaction de requêtes SELECT, INSERT, UPDATE et DELETE. ",
  },
  {
    skill: "Outils",
    detail:
      " Git/GitHub : Versioning et collaboration avec GitHub - Trello : Coordonation de Projets ",
  },
  {
    skill: "WordPress",
    detail:
      " Création de sites web vitrine et e-commerce WordPress avec le constructeur Elementor. Élaboration d’arborescences de navigation, maillage interne. Wireframes détaillés pour organiser la structure des pages. Création de webdesign sur mesure. Intégration des meilleures pratiques SEO : Structure des pages et titres, sitemap. Déploiement sur le serveur. Gestion des mails.",
  },
];

function Accordeon() {
  const [accordeon, setAccordeon] = useState(-1);
  function toggleAccordeon(index) {
    if (accordeon === index) return setAccordeon(-1);
    setAccordeon(index);
  }

  return (
    <>
      <div className="accordeon-faq">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => toggleAccordeon(index)}
              className="accordeon"
            >
              <div className="accordeon-heading">
                <h3 className={accordeon === index ? "active" : ""}>
                  {item.skill}
                </h3>
                {accordeon === index ? (
                  <>
                    <span className="vertical">
                      <i class="fa-regular fa-circle-up"></i>
                    </span>
                  </>
                ) : (
                  <>
                    <span className="vertical">
                      <i class="fa-regular fa-circle-down"></i>
                    </span>
                  </>
                )}
              </div>

              <div className={accordeon === index ? "active" : "inactive"}>
                <p>{item.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Accordeon;
