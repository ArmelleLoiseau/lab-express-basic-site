// require express + router
const router = require("express").Router();
const Films = require("../models/movie.model");
const mongoose = require("mongoose");
const fileUploader = require("./../config/cloudinary.config");

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
  res.render("work-create.hbs");
});

// feed the db with the new movie
router.post(
  "/create",
  fileUploader.single("imageURL"),
  async (req, res, next) => {
    try {
      console.log("am in creating ?");
      const {
        title,
        employer,
        duration,
        description,
        genre,
        year,
        link,
        country,
      } = req.body;
      const { role } = req.body.role.split(",");
      console.log(req.file);
      const newFilm = await Films.create({
        title,
        employer,
        duration,
        description,
        genre,
        year,
        link,
        country,
        role,
        imageURL: req.file.path,
      });
      console.log(newFilm);
      res.redirect("/work");
    } catch (err) {
      console.error(err);
      next(err);
    }
  }
);

//     const newFilm = await Films.create(filmToAd);
//     res.redirect("/work");
//   } catch (e) {
//     console.log(e);
//     next();
//   }
// });

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
