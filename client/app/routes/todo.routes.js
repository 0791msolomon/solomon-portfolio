const router = require("express").Router();
const todoController = require("../controllers/todo.controller");
module.exports = router;

router.get("/search", todoController.getAll);
router.get("/:id", todoController.findById);
router.post("/", todoController.createTodo);
router.put("/:id", todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);
