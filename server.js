const db = require("./models");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const session = require("express-session");

const PORT = process.env.PORT || 3001;

const app = express();

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
};

app.use(session(sess));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/chargebuddy_db",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
