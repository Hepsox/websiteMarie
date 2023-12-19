import Accordeon from "./Accordeon";
import Button from "./Button";
import Mockup from "./Mockup";
import MockupWithButton from "./MockupWithButton";
import TemplateAccordeon from "./TemplateAccordeon";
import projets from "../../data";

function Home() {
  const questions = [
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
  return (
    <div>
      <div className="hero-container">
        <div className="container hero-inner-container">
          <div className="hero-content">
            <h1> Marie Delaire</h1>
            <div className="encart">
              <h2> Développeur Full-Stack</h2>
            </div>
            <p>
              Je suis à la recherche d'une alternance en JavaScript à partir de
              février 2024 à Bordeaux. Mon objectif est d'appliquer concrètement
              mes compétences en entreprise, dans le cadre d'un rythme
              d'alternance de 3 semaines en entreprise et 1 semaine à l'école.
            </p>
          </div>
          <div className="hero-img">
            <img
              className="img-fluid"
              src="./src/assets/marie-delaire-portfolio.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
      <section className="presentation">
        <div className="container">
          <div className="left">
            <h3>Créative et technique !</h3>

            <p>
              Depuis 2018, en tant que freelance, j&apos;ai développé une solide
              expertise dans la création de sites web avec WordPress. En 2023,
              j&apos;ai renforcé mes compétences en suivant une formation de
              Développeur Web JavaScript à la Wild Code School . Cette double
              compétence me permet de combiner créativité et maîtrise technique
              pour concevoir des solutions web innovantes. Efficace et impactant
              sont les maîtres mots ! Je suis là pour te créer un site internet
              performant, à ton image et évolutif pour atteindre tes objectifs.
            </p>
            <Button title={"Télécharger mon CV"} />
          </div>
          <div className="right">
            {/* <img
              className="img-fluid"
              src="./src/assets/back-vague.png"
              alt=""
            /> */}
            <div className="img-profile-container">
              <img
                className="img-fluid"
                src="./src/assets/marie-delaire.jpeg"
                alt=""
              />
            </div>
          </div>
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
          questions={questions}
        />
      </section>

      <section className="portfolio">
        <div className="container">
          <h3> Les projets durant la formation </h3>
          <div className="mockups">
            {projets.map((projet, index) => (
              <MockupWithButton
                key={index}
                title={projet.title}
                imgPortfolio={projet.imgProjet[0]}
                link={`/projet/${projet.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio wordpress">
        <div className="container">
          <h3> Quelques réalisations WordPress </h3>
          <div className="mockups">
            <Mockup imgPortfolio={"src/assets/isabelle-rollo.jpg"} />
            <Mockup imgPortfolio={"src/assets/ad-russo-marie-delaire.jpeg"} />
            <Mockup imgPortfolio={"src/assets/crizalid-marie-delaire.jpeg"} />
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <h3>Vous souhaitez me contacter ?</h3>
          <p>
            N'hésitez surtout pas à me contacter par e-mail ou téléphone. Je
            suis toujours partante pour échanger et découvrir de nouvelles
            opportunités !
          </p>
          <div className="container-btn-contact">
            <Button
              title={"Envoyez un email"}
              classNameBtn={"btn-secondaire"}
            />
            <Button
              title={"Téléphonez-moi !"}
              classNameBtn={"btn-secondaire"}
            />
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
}
export default Home;
