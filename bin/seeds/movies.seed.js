require("../../db/db-config");

const Movie = require("../../models/movie.model");

const movies = [
  {
    title: "EHPAD, seuls face au Coronavirus",
    employer: "Médecins sans Frontières / MSF",
    duration: "00:10",
    image: "",
    description:
      "Reportage dans des établissements pour personnes âgées dépendantes pendant l'épidémie de Covid-19.",
    genre: "reportage",
    year: 2020,
    link: "https://www.youtube.com/watch?v=sRPXC_ARV6o&t=2s",
    country: "France",
    role: ["réalisation", "prise de vue"],
  },
  {
    title: "Les femmes de Blantyre",
    employer: "Médecins sans Frontières / MSF",
    duration: "00:27",
    image: "",
    description:
      "Série documentaire sur les femmes atteintes du cancer du col de l'utérus au Malawi.",
    genre: "série documentaire",
    year: 2020,
    link: "https://www.youtube.com/playlist?list=PL-IzpJ34hUCcayE3e3xzHF25sYy2LaFSL",
    country: "Malawi",
    role: ["écriture", "réalisation", "prise de vue", "montage"],
  },
  {
    title: "Des enfants subissent des contrôles de police abusifs et racistes.",
    employer: "Human Rigthts Watch / HRW",
    duration: "00:04",
    image: "",
    description:
      "Vidéo accompagnant le rapport de HRW sur les contrôles de police au faciès.",
    genre: "reportage",
    year: 2020,
    link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/d2YnJEeBkTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    country: "France",
    role: ["prise de vue"],
  },
  {
    title: "Des enfants migrants privés de protection.",
    employer: "Human Rigthts Watch / HRW",
    duration: "00:04",
    image: "",
    description:
      "Vidéo accompagnant le rapport de HRW sur l'arrivée en France des mineurs non accompagnés.",
    genre: "reportage",
    year: 2019,
    link: "https://www.hrw.org/fr/news/2019/09/05/france-des-enfants-migrants-prives-de-protection",
    country: "France",
    role: ["prise de vue"],
  },
  {
    title:
      "Welcome back - vivre avec des troubles mentaux ou épileptiques au Liberia",
    employer: "Médecins sans Frontières / MSF",
    duration: "00:35",
    image: "",
    description:
      "Documentaire sur le quotidien des personnes atteintes de troubles mentaux ou épileptiques au Liberia.",
    genre: "documentaire",
    year: 2019,
    link: "https://www.youtube.com/watch?v=Not20Cy2sqc&t=1700s",
    country: "Liberia",
    role: ["écriture", "réalisation", "prise de vue", "montage"],
  },
  {
    title: "Yémen - A deux heures du front",
    employer: "Médecins sans Frontières / MSF",
    duration: "00:24",
    image: "",
    description:
      "5 jours dans le quotidien des équipes MSF dans l'hôpital de Mocha, alors que le conflit yéménite fait rage à Hodeida, à deux heures de route.",
    genre: "série documentaire",
    year: 2019,
    link: "https://www.youtube.com/watch?v=Not20Cy2sqc&t=1700s",
    country: "Yemen",
    role: ["écriture", "réalisation", "prise de vue"],
  },
  {
    title: "Corps en guerre",
    employer: "Médecins sans Frontières / MSF",
    duration: "00:00",
    image: "",
    description:
      "Corps en Guerre est une expérience mobile qui raconte les histoires de quatre personnes et de leurs familles, marquées par les guerres qui secouent le Moyen-Orient depuis des années.",
    genre: "documentaire multimedia",
    year: 2019,
    link: "https://corpsenguerre.msf.fr/",
    country: "Jordanie",
    role: ["écriture", "réalisation", "prise de vue"],
  },
  {
    title: "Les invisibles de Samos",
    employer: "Médecins sans Frontières / MSF",
    duration: "00:05",
    image: "",
    description:
      "Récits de demandeurs d'asile coincés pendant des mois sur les îles grecques, dans l'attente de pouvoir reprendre leur voyage.",
    genre: "documentaire",
    year: 2017,
    link: "https://www.youtube.com/watch?v=EXj_L-UnIqQ&t=3s",
    country: "Grèce",
    role: ["écriture", "réalisation", "prise de vue"],
  },
  {
    title: "République centrafricaine - La valise ou le cercueil",
    employer: "Médecins sans Frontières / MSF",
    duration: "00:32",
    image: "",
    description:
      "Témoignage des équipes MSF présentes en République centrafricaine quand le conflit éclate",
    genre: "documentaire",
    year: 2014,
    link: "https://www.youtube.com/watch?v=WuQ6GJd6Dgk&t=779s",
    country: "République centrafricaine",
    role: ["écriture", "réalisation", "prise de vue"],
  },
];

(async function () {
  try {
    await Movie.deleteMany();
    const createMovie = await Movie.create(movies);
    console.log(`the db is seeded with ${movies.length} movies`);
    process.exit();
  } catch (e) {
    console.error(e);
    process.exit();
  }
})();
