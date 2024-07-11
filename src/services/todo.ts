import * as TodoModel from "../models/todo";
import { Todo } from "../interfaces/todo";
import { NotFoundError } from "../error/not_found_error";

// create todo - return success / failure result
export const createTodo = (todo: Omit<Todo, "id">) => {
  TodoModel.createTodo(todo);
  return {
    statusCode: 201,
    message: "Todo created successfully.",
  };
};

// delete todo - return success result
export const deleteTodo = (todoId: string, userId: string) => {
  TodoModel.deleteTodo(todoId, userId);
  return {
    statusCode: 204,
    message: "Todo deleted successfully.",
  };
};

// fetch all todos - return success / failure result
export const getAllTodos = (userId: string) => {
  const todos = TodoModel.getAllTodos(userId);

  if (todos.length === 0) {
    throw new NotFoundError("No todos found.");
  } else {
    return {
      statusCode: 200,
      message: todos,
    };
  }
};

// fetch tody by id - return success / failure result
export const getTodoById = (todoId: string, userId: string) => {
  const todo = TodoModel.getTodoById(todoId, userId);

  if (!todo) {
    throw new NotFoundError(`No todo found with id: ${todoId}`);
  } else {
    return {
      statusCode: 200,
      message: todo,
    };
  }
};

// update todo by id - return success / failure result
export const updateTodo = (
  id: string,
  title: string,
  description: string,
  userId: string
) => {
  TodoModel.udpateTodo(id, title, description, userId);

  return {
    statusCode: 200,
    message: "Todo updated successfully",
  };
};

// update todo's is-complete status
export const updateTodoIsCompleteStatus = (
  id: string,
  userId: string
) => {
  TodoModel.updateTodoCompletedStatus(id, userId);

  return {
    statusCode: 200,
    message: "Todo updated successfully",
  };
};
