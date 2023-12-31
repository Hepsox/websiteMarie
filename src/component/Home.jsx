import Button from "./Button";
import Mockup from "./Mockup";
import MockupWithButton from "./MockupWithButton";
import TemplateAccordeon from "./TemplateAccordeon";
import ButtonCV from "./ButtonCV";
import { useLoaderData } from "react-router-dom";

function Home() {
  const projets = useLoaderData();

  const questions = [
    {
      skill: "React",
      detail:
        "J'ai appris à dynamiser le contenu d’une application avec React en créant des expériences interactives. Cela a impliqué la conception de composants, l'intégration de fonctionnalités avancées, et l'utilisation d'API pour enrichir les données. Cette mission a renforcé ma capacité à concevoir des interfaces utilisateur modernes et intuitives.",
    },
    {
      skill: "Express",
      detail:
        "J'ai développé des applications back-end en utilisant le framework Express.js. L’objectif étant de rendre les API robustes et efficaces. J’ai appris la gestion des routes, la manipulation des données, et l'optimisation des performances pour assurer des applications réactives et évolutives.",
    },
    {
      skill: "SQL",
      detail:
        "Conception et modélisation avancées de bases de données relationnelles. Maîtrise du langage SQL pour la rédaction de requêtes SELECT, INSERT, UPDATE et DELETE. ",
    },
    {
      skill: "Git/GitHub",
      detail:
        "Versioning et collaboration avec Git et GitHub. Création de branches, pull requests, et résolution de conflits.",
    },
    {
      skill: "WordPress et Elementor",
      detail:
        " Création de sites web vitrine et e-commerce WordPress avec le constructeur Elementor. Élaboration d’arborescences de navigation, maillage interne. Wireframes détaillés pour organiser la structure des pages. Création de webdesign sur mesure. Intégration des meilleures pratiques SEO : Structure des pages et titres, sitemap. Déploiement sur le serveur.",
    },
    {
      skill: "Figma et Adobe",
      detail:
        " Création d'intefaces graphiques sur mesure avec Figma. Création de chartes graphiques et de logos avec la suite Adobe. ",
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
              En tant que <strong>freelance depuis 2018</strong>, j&apos;ai
              développé une solide expertise dans la{" "}
              <strong>création de sites web</strong> avec WordPress. En 2023,
              j&apos;ai renforcé mes compétences en suivant une{" "}
              <strong>formation de Développeur Web JavaScript</strong> à la Wild
              Code School. Je suis à la recherche d&apos;une{" "}
              <strong>alternance en JavaScript à partir de février 2024</strong>{" "}
              à Bordeaux.
            </p>
          </div>
          <div className="hero-img">
            <img
              className="img-fluid"
              src="/marie-delaire-portfolio.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
      <section className="presentation">
        <div className="container">
          <div className="left">
            <h3>En route vers l&apos;alternance !</h3>
            <p>
              Avec cette alternance, mon objectif est{" "}
              <strong>
                d&apos;appliquer concrètement mes compétences en entreprise
              </strong>
              . Ma double compétence en WordPress et JavaScript me permet de
              combiner créativité et maîtrise technique pour concevoir des
              solutions web innovantes. Désormais, je souhaite continuer à
              développer mes compétences en JavaScript et React en intégrant une
              entreprise dans le cadre de mon <strong>alternance</strong> (3
              semaines en entreprise / 1 semaine à l’école) pour valider mon{" "}
              <strong>
                titre de Concepteur Développeur d&apos;Applications (Bac+3/4)
              </strong>
              .
            </p>
            <ButtonCV className="btn-cv" />
          </div>
          <div className="right">
            <div className="img-profile-container">
              <img className="img-fluid" src="marie-delaire.jpeg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <TemplateAccordeon
          title={"Un profil multifacettes"}
          subtitle={"Mes compétences techniques"}
          description={`Mon expertise s'étend de la conception de chartes graphiques, du maquettage et de l'intégration HTML/CSS, à la dynamisation du contenu avec React. J'ai une expérience significative dans la mise en place de routers, la création de pages et de composants interactifs, ainsi que l'utilisation et la création d'API. Ma méthodologie intègre efficacement le versioning et la collaboration sur GitHub pour assurer un développement fluide.`}
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
                imgPortfolio={projet.photos[0]}
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
            <MockupWithButton
              imgPortfolio={"/isabelle-rollo.jpg"}
              title="DSN Conseil"
              link="https://delphinenouvian.com/"
              target="_blank"
            />
            <MockupWithButton
              imgPortfolio={"/ad-russo-marie-delaire.jpeg"}
              title="Novitoit"
              link="https://novitoit.fr/"
              target="_blank"
            />
            <MockupWithButton
              imgPortfolio={"crizalid-marie-delaire.jpeg"}
              title="Proximum"
              link="https://proximum.org/"
              target="_blank"
            />
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
              onClick={() =>
                (window.location.href = "mailto:marie.delaire@outlook.com")
              }
            />
            <Button
              title={"Téléphonez-moi !"}
              classNameBtn={"btn-secondaire"}
              onClick={() => (window.location.href = "tel:+33622170231")}
            />
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
}
export default Home;
