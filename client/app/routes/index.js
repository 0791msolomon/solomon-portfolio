const router = require("express").Router();

const todoRoutes = require("./todo.routes");
const userRoutes = require("./user.routes");

module.exports = router;

router.use("/todos", todoRoutes);
router.use("/users", userRoutes);
