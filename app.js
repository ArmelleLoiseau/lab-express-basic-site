// set-up
const express = require("express");
const app = express();
const PORT = 4000;
const hbs = require("hbs");

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// routes
// Home Page
app.get("/", (req, res) => {
  const scripts = ["/js/canvas.js"];
  res.render("home", {
    scripts,
  });
});

// about page
app.get("/about", (req, res) => {
  res.render("about");
});

// work page
app.get("/work", (req, res) => {
  const films = [
    {
      name: "MSF - Les Ehpad face au Coronavirus, France, 2020",
      picture: "/images/ehpad.jpg",
      link: "https://www.youtube.com/watch?v=sRPXC_ARV6o&t=2s",
    },
    {
      name: "MSF - Le cancer du col de l'uterus, Malawi, 2020",
      picture: "/images/womenofblantyre.png",
      link: "https://www.youtube.com/playlist?list=PL-IzpJ34hUCcayE3e3xzHF25sYy2LaFSL",
    },
    {
      name: "HRW - Des contrôles de police abusifs et racistes, France, 2020",
      picture: "/images/hrw-police.png",
      link: "https://www.hrw.org/fr/news/2020/06/18/france-des-enfants-subissent-des-controles-de-police-abusifs-et-racistes",
    },
    {
      name: "HRW - Des enfants migrants privés de protection, France, 2010",
      picture: "/images/reportage.jpg",
      link: "https://www.hrw.org/fr/news/2019/09/05/france-des-enfants-migrants-prives-de-protection",
    },
    {
      name: "MSF - Santé mentale et épilespie, Liberia, 2019",
      picture: "/images/Liberia.jpg",
      link: "https://www.youtube.com/watch?v=Not20Cy2sqc&t=1700s",
    },
    {
      name: "MSF - Un hôpital à deux heures du front, Yemen, 2019",
      picture: "/images/yemen.png",
      link: "https://www.youtube.com/playlist?list=PL-IzpJ34hUCdrtJxfDIOutN7xtKIBksQd",
    },
    {
      name: "MSF - Corps en guerre, Jordanie, 2018",
      picture: "/images/corpsenguerre.jpg",
      link: "https://corpsenguerre.msf.fr/",
    },
    {
      name: "MSF - Réfugiés sur les îles, Grèce, 2016",
      picture: "/images/samos.png",
      link: "https://www.youtube.com/watch?v=EXj_L-UnIqQ&t=3s",
    },
    {
      name: "MSF - Intervenir en zone de guerre, RCA, 2014",
      picture: "/images/car.png",
      link: "https://www.youtube.com/watch?v=WuQ6GJd6Dgk&t=779s",
    },
  ];
  res.render("work", {
    films,
  });
});

app.listen(PORT, console.log(`listening on port ${PORT}`));
