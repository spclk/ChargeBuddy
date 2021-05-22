const router = require("express").Router();
const carController = require("../../controllers/carController");

// Matches with "/api/car"
router  
    .route("/").get(carController.findAll)
    .post(carController.create);

// Matches with "/api/car/:id"
router
    .route("/:id")
    .get(carController.findById)
    .put(carController.update)
    .delete(carController.remove);

module.exports = router;
