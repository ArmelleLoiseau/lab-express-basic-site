// DB config
const mongoose = require("mongoose");

// const DB_URI = "mongodb://127.0.0.1/portfolio";
const DB_URI = "mongodb://localhost/portfolio";

mongoose
  .connect(DB_URI)
  .then((db) => {
    console.log(`connected to ${db.connections.name}`);
  })
  .catch((err) => console.error(err));
