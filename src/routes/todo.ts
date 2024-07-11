import express from "express";
import {
  createTodo,
  deleteTodoById,
  getAllTodos,
  getTodoById,
  updateTodo,
  updateTodoIsCompletedStatus,
} from "../controllers/todo";
import { authenticate } from "../middlewares/auth";
import { authorize } from "../middlewares/authorize";

// todo - router
const router = express();

// router methods on todos

// get all the todos of - a user
router.get("/all/", authenticate, authorize("todos.fetch"), getAllTodos);

// get a particular todo of - a user
router.get("/:id", authenticate, authorize("todos.fetch"), getTodoById);

// create a todo
router.post("/", authenticate, authorize("todos.create"), createTodo);

// delete a todo
router.delete("/:id", authenticate, authorize("todos.delete"), deleteTodoById);

// update a todo
router.put("/:id", authenticate, authorize("todos.update"), updateTodo);

// update todo's is-completed status
router.patch(
  "/:id",
  authenticate,
  authorize("todos.update"),
  updateTodoIsCompletedStatus
);

export default router;
