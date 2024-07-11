import { NotFoundError } from "../error/not_found_error";
import { UnauthorizedError } from "../error/unauthorized_error";
import { User } from "../interfaces/user";

export const users: User[] = [
  {
    id: "0",
    name: "Admin",
    email: "admin@gmail.com",
    password: "$2b$10$g8Wa7sNOjX6XKOOZ0MqUYuaPnZpT0E33bVdrRW.BSRdxLYQjIuyVq",
    permissions: [
      "users.create",
      "users.update",
      "users.delete",
      "users.fetch",
      "todos.create",
      "todos.update",
      "todos.delete",
      "todos.fetch",
    ],
  },
  {
    id: "1",
    name: "test 1",
    email: "test1@gmail.com",
    password: "$2b$10$g8Wa7sNOjX6XKOOZ0MqUYuaPnZpT0E33bVdrRW.BSRdxLYQjIuyVq",
    permissions: [
      "todos.create",
      "todos.update",
      "todos.delete",
      "todos.fetch",
    ],
  },
];

// push new user to users-list
export const createUser = (user: User) => {
  users.push(user);
};

// fetch user by id
export const getUserById = (id: string) => {
  return users.find((user) => user.id === id);
};

// fetch user by email
export const getUserByEmail = (email: string) => {
  return users.find((user) => user.email === email);
};

// update user by id
export const updateUserById = (
  id: string,
  theUser: Omit<User, "id" | "permissions">
) => {
  const user = users.find((user) => user.id === id);

  if (user) {
    user.email = theUser.email;
    user.name = theUser.name;
    user.password = theUser.password;
    return user;
  } else {
    throw new NotFoundError("No such user found.");
  }
};

// delete user by id
export const deleteUserById = (id: string) => {
  const index = users.findIndex((user) => user.id === id);
  if (index === 0) {
    throw new UnauthorizedError("Task forbidden.");
  }
  if (index >= 0) {
    users.splice(index, 1);
  } else {
    throw new NotFoundError("No such user found.");
  }
};
