const router = require("express").Router();
const userController = require("../../controllers/userControllers");
const withAuth = require ('../../utils/auth')

// Matches with "/api/user"
router
    .route("/", withAuth).get(userController.findCurrent)
    .post(userController.create);

router
    .route("/login").post(userController.findByEmail)
// .post(userController.create);

// Matches with "/api/user/:id"
router
    .route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove);


module.exports = router;
