const projets = [
  {
    id: 1,
    slug: "rasta-rockett",
    title: "Rasta Rockett",
    subtitle: "Application pour découvrir les bars près de chez vous",
    objectifs:
      "Ce site internet a été créer afin de mettre en avant les bars dans le quartier Bacalan de Bordeaux. Nous avons réalisé ce site statique au cours de notre premier mois de formation. L'objectif etait d'apprendre à utiliser les bases de HTML et CSS et la dynamisation de contenu avec Javascript.",
    duration: "2 semaines",
    technologies: ["Javascript", "HTML", "CSS"],
    tools: ["Trello", "Figma", "Github"],
    accordeonTitle: "Le projet en détail",
    accordeonSubtitle: "Les fonctionnalités de l'application",
    accordeonDescription:
      "L'utilisateur doit pouvoir trouver un bar en filtrant ses recherches. Chaque bar doit disposer d'une page similaire avec toutes les informations nécessaires pour le contacter.",
    accordeonQuestions: [
      {
        skill: "HTML/CSS",
        detail:
          " Le site internet à été conçu en mobile first avec une structure s'adaptant rapidement à la version desktop",
      },
      {
        skill: "JavaScript",
        detail:
          "Afin de dynamiser notre site et proposer un système de filtrage par type de bar, nous avons mis en place plusieurs fonctionnalités en JavaScript",
      },
      {
        skill: "Git/GitHub",
        detail:
          " Nous avons travaillé en équipe sur un repository GitHub. Nous avons utilisé les branches pour travailler sur les différentes fonctionnalités du site.",
      },
      {
        skill: "Figma",
        detail:
          " J'ai créé la charte graphique de notre site et j'ai réalisé les maquettes de notre site sur Figma. L'objectif était de créer un site responsive avec une charte graphique pouvant s'adapter facilement à l'univers de chacun des bars que nous allions référencer dans notre site.",
      },
    ],
    imgProjet: [
      "/src/assets/rasta-1.jpg",
      "/src/assets/rasta-2.jpg",
      "/src/assets/rasta-3.jpg",
    ],
  },
  {
    id: 2,
    slug: "mood-station",
    title: "Mood Station",
    subtitle: "Trouver une playlist en fonction de son humeur",
    objectifs:
      "L'objecif de ce projet était de consommer une API afin de récupérer des données et de les afficher sur notre site. Nous avons utilisé l'API de Spotify afin de récupérer des playlists en fonction de l'humeur de l'utilisateur.",
    duration: "4 semaines",
    technologies: ["HTML/CSS, JavaScript, React.js,"],
    tools: ["Trello", "Figma", "Github"],
    accordeonTitle: "Le projet en détail",
    accordeonSubtitle: "Les fonctionnalités de l'application",
    accordeonDescription:
      "L'utilisateur doit pouvoir accéder à une suggestion de playlist en fonction de son humeur. Nous avons du analyser la structure de l'API Spotify afin de récupérer les données qui nous intéressaient et les présenter à notre utilisateur.",
    accordeonQuestions: [
      {
        skill: "API Spotify",
        detail:
          "Nous avons gérer l'accès à l'Api Spotify en utilisant le package Axios. Nous avons récupéré les données de l'API et nous les avons affiché sur notre site. Nous avons gérer le token d'accès à l'API en utilisant le package dotenv afin de sécuriser notre site.",
      },
      {
        skill: "React.js",
        detail:
          "Pour dynamiser notre site, nous avons utilisé React.js. Nous avons utilisé les hooks useState et useEffect afin de gérer l'état de notre application et de récupérer les données de l'API Spotify. Nous avons installé un router afin de gérer les différentes pages de notre site.",
      },
      {
        skill: "Git/GitHub",
        detail:
          " Nous avons travaillé en équipe sur un repository GitHub. Nous avons utilisé les branches pour travailler sur les différentes fonctionnalités du site.",
      },
      {
        skill: "Figma",
        detail:
          " J'ai créé la charte graphique de notre site et j'ai réalisé les maquettes de notre site sur Figma. L'objectif était de créer un site responsive avec une charte graphique pouvant s'adapter facilement à l'univers de chacun des bars que nous allions référencer dans notre site.",
      },
    ],
    imgProjet: [
      "/src/assets/moodstation-1.jpg",
      "/src/assets/moodstation-2.jpg",
      "/src/assets/moodstation-3.jpg",
    ],
  },
  {
    id: 3,
    slug: "externatic",
    title: "Externatic APP",
    subtitle: "Les offres d'emploi qui matchent avec votre profil",
    objectifs:
      "Créer un site internet pour les candidats d'Externatic. L'objectif était de créer un site dynamique avec une interface administrateur afin de gérer les offres d'emploi. Réalisation d'un site en React.js avec une API en Express.js et une base de données en SQL.",
    duration: "8 semaines, projet pour valider le titre de développeur web",
    technologies: ["Htmel/CSS", "Node.js", "React.js, Express.js", "SQL"],
    tools: ["Trello", "Figma", "Github", "Postman", "Dbveaver"],
    accordeonTitle: "Le projet en détail",
    accordeonSubtitle: "Les fonctionnalités de l'application",
    accordeonDescription:
      "Le candidat doit pouvoir créer son profil sur l'application, créer son CV et postuler aux offres d'emploi. L'administrateur doit pouvoir gérer les offres d'emploi et les candidatures.",
    accordeonQuestions: [
      {
        skill: "React.js",
        detail:
          "Nous  gérer l'accès à l'Api Spotify en utilisant le package Axios. Nous avons récupéré les données de l'API et nous les avons affiché sur notre site. Nous avons gérer le token d'accès à l'API en utilisant le package dotenv afin de sécuriser notre site.",
      },
      {
        skill: "Express.js",
        detail:
          "Pour dynamiser notre site, nous avons utilisé React.js. Nous avons utilisé les hooks useState et useEffect afin de gérer l'état de notre application et de récupérer les données de l'API Spotify. Nous avons installé un router afin de gérer les différentes pages de notre site.",
      },
      {
        skill: "MySQL",
        detail:
          " Nous avons travaillé en équipe sur un repository GitHub. Nous avons utilisé les branches pour travailler sur les différentes fonctionnalités du site.",
      },
      {
        skill: "Git/GitHub",
        detail:
          " J'ai créé la charte graphique de notre site et j'ai réalisé les maquettes de notre site sur Figma. L'objectif était de créer un site responsive avec une charte graphique pouvant s'adapter facilement à l'univers de chacun des bars que nous allions référencer dans notre site.",
      },
    ],
    imgProjet: ["/src/assets/externatic-1.jpg"],
  },
];

export default projets;
