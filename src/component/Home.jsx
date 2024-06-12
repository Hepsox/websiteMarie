import Button from "./Button";
import MockupWithButton from "./MockupWithButton";
import TemplateAccordeon from "./TemplateAccordeon";
import ButtonCV from "./ButtonCV";
import { useLoaderData } from "react-router-dom";

function Home() {
  const projets = useLoaderData();

  const questions = [
    {
      skill: "React et Angular",
      detail:
        "J'ai appris à dynamiser le contenu d’une application avec React en créant des expériences interactives. Cela a impliqué la conception de composants, l'intégration de fonctionnalités avancées, et l'utilisation d'API pour enrichir les données. Cette mission a renforcé ma capacité à concevoir des interfaces utilisateur modernes et intuitives.",
    },
    {
      skill: "Express et Spring",
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
    {
      skill: "Java et JavaScript",
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
              Depuis 2018, en tant que freelance, j'ai développé une solide
              expertise dans la création de sites web avec WordPress. En 2024,
              j'ai obtenu mon titre de{" "}
              <strong>Développeur Web et Web Mobile JavaScript</strong> à la
              Wild Code School. J'ai renforcé mes compétences en intégrant une
              POEC <strong>Java/Angular</strong>.
            </p>
          </div>
          <div className="hero-img">
            <img
              className="img-fluid"
              src="/marie-delaire-portfolio.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <section className="presentation">
        <div className="container">
          <div className="left">
            <h3>En route vers l&apos;alternance !</h3>
            <h4>3 semaines en entreprise / 1 semaine à l’école</h4>
            <p>
              Dans le cadre de mon alternance, je veux mettre en pratique mes
              compétences et en acquérir de nouvelles, notamment en JavaScript
              (React ou Angular) et en Java (Spring). En intégrant une
              entreprise, je vise à valider mon{" "}
              <strong>
                titre de Concepteur Développeur d'Applications (Bac+3/4)
              </strong>{" "}
              tout en contribuant à des projets concrets. Je crois que le succès
              repose sur l'investissement humain et la collaboration. J'adore
              apprendre des autres, partager des idées (même les plus folles) et
              relever des défis ensemble. Avec un peu d'humour et beaucoup de
              café, je suis sûr qu'on peut accomplir de grandes choses !
            </p>
            <ButtonCV className="btn-cv" />
          </div>
          <div className="right">
            <div className="img-profile-container">
              <img
                className="img-fluid"
                src="marie-delaire.jpeg"
                alt="photo Marie Delaire"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <TemplateAccordeon
          title={"Un profil multifacettes"}
          subtitle={"Mes compétences techniques"}
          description={`En tant que développeuse passionnée, je suis constamment en quête d'apprentissage et de perfectionnement. La communication est au cœur de ma façon de travailler ; je suis attentive aux idées de mes collègues et ouverte à la collaboration, ce qui favorise une efficacité d'équipe. Je suis convaincue de l'importance de rester curieuse et de s'adapter aux évolutions technologiques et méthodologiques. C'est cette mentalité qui me pousse à relever de nouveaux défis et à proposer des solutions adaptées et efficaces. Chaque obstacle est pour moi une occasion d'apprendre et de progresser, et je m'engage à continuer à développer mes compétences pour répondre aux défis futurs avec confiance et créativité.`}
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
              imgPortfolio={"/dsn-conseil.jpg"}
              title="DSN Conseil"
              link="https://delphinenouvian.com/"
              target="_blank"
            />
            <MockupWithButton
              imgPortfolio={"/novitoit.jpg"}
              title="Novitoit"
              link="https://novitoit.fr/"
              target="_blank"
            />
            <MockupWithButton
              imgPortfolio={"/proximum-formations.jpg"}
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
