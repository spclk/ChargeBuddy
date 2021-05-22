const router = require("express").Router();
const carRoutes = require("./car");
const userRoutes = require("./user");

// Car routes
router.use("/car", carRoutes);


// User routes
router.use("/user", userRoutes);



module.exports = router;
