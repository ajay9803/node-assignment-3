import express from "express";
import {
  createNewUser,
  deleteUserById,
  getUserById,
  updateUserById,
} from "../controllers/user";
import { authenticate } from "../middlewares/auth";
import { authorize } from "../middlewares/authorize";

const router = express();

// create-user route to create new user
router.post("/", authenticate, authorize("users.create"), createNewUser);

// get-user router to fetch user by id
// make use of authenticate middleware to authenticate user for accessing further contents
router.get("/:id", authenticate, authorize("users.fetch"), getUserById);

// update-user-router to  update user data
router.put("/:id", authenticate, authorize("users.update"), updateUserById);

// delete-user-router to delete user data
router.delete("/:id", authenticate, authorize("users.delete"), deleteUserById);

export default router;
