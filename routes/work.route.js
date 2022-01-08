// require express + router
const router = require("express").Router();
const Films = require("../models/movie.model");
const mongoose = require("mongoose");
const fileUploader = require("../config/cloudinary.config");

// this route is prefixed with /work

router.get("/", (req, res) => {
  Films.find()
    .then((dbResponse) => {
      console.log("the db response is", dbResponse);
      res.render("work-all.hbs", {
        films: dbResponse,
      });
    })
    .catch((err) => console.error(err));
});

router.get("/:id", (req, res, next) => {
  Films.findById(req.params.id)
    .then((dbResponse) => {
      console.log(`the db response is ${dbResponse}`);
      res.render("work-one.hbs", {
        film: dbResponse,
      });
    })
    .catch((e) => {
      console.error(e);
      next();
    });
});

router.get("/create", (req, res) => {
  res.render("work-create");
});

router.post("/create", async (req, res, next) => {
  try {
    const newFilm = Films.create(req.body);
    console.log(newFilm);
    res.redirect("/work");
  } catch (e) {
    console.log(e);
    next();
  }
});

// export module
module.exports = router;
