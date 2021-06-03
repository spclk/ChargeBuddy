const db = require("../models");


// Defining methods for the userController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // method to pull up a user
  findCurrent: function (req, res){
    db.User
    .findById(req.session.user_id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  findByEmail: function (req, res) {

    db.User.findOne({ email: req.body.email }).then(dbData => {
      req.session.save(() => {
        req.session.user_id = dbData._id;
        req.session.logged_in = true;
        req.session.user_type = "Hi Adam";

        // dbData.session = req.session;
        console.log(dbData);
        const { car, _id, first_name, last_name, zip_code, email, password, userCreated } = dbData
        let newData = {
          car, _id, first_name, last_name, zip_code, email, password, userCreated,
          session: req.session
        }
        console.log(newData)

        res.status(200).json(newData);
        // res.status(200).json(dbData);
      });
      // console.log(dbData)
      // res.json(dbData)
    })
      .catch(err => console.log(err))
    // db.User
    //   .findById("60aedf99af17a014b346b11a")
    //   .then(dbModel => console.log(dbModel))
    //   .catch(err => res.status(422).json(err));

  },

  create: function (req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
