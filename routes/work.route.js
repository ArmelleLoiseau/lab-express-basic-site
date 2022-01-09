// require express + router
const router = require("express").Router();
const Films = require("../models/movie.model");
const mongoose = require("mongoose");
const fileUploader = require("../config/cloudinary.config");

// this route is prefixed with /work

// *** READ ALL***
router.get("/", (req, res) => {
  Films.find()
    .then((dbResponse) => {
      res.render("work-all.hbs", {
        films: dbResponse,
      });
    })
    .catch((err) => console.error(err));
});

// *** CREATE ***
// display form to create a film
router.get("/create", (req, res, next) => {
  res.render("work-create");
});

// feed the db with the new movie
router.post("/create", async (req, res, next) => {
  try {
    // const role = req.body.role.split("");
    const filmToAd = {
      title: req.body.title,
      employer: req.body.employer,
      duration: req.body.duration,
      image: req.body.image,
      description: req.body.description,
      genre: req.body.genre,
      year: req.body.year,
      link: req.body.link,
      country: req.body.country,
      role: req.body.role.split(","),
    };
    const newFilm = await Films.create(filmToAd);
    res.redirect("/work");
  } catch (e) {
    console.log(e);
    next();
  }
});

// *** READ ONE FILM ***
router.get("/:id", (req, res, next) => {
  Films.findById(req.params.id)
    .then((dbResponse) => {
      res.render("work-one.hbs", {
        film: dbResponse,
      });
    })
    .catch((e) => {
      console.error(e);
      next();
    });
});

// export module
module.exports = router;
