const router = require("express").Router();
const todoController = require("../controllers/todo.controller");
module.exports = router;

router.get("/", todoController.getAll);
router.post("/", todoController.createTodo);
