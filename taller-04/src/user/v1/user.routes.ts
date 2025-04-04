import { Router, Request, Response } from "express";
import { readUsers,getUserCountByHobby, userExists, getFreeTimeUsers, addHobbyToUser, registerUser } from "./user.controller";
// INIT ROUTES
const userRoutes = Router();

// DECLARE ENDPOINTS
userRoutes.get("/", readUsers); // Get all users
userRoutes.post("/hobby", getUserCountByHobby); 
userRoutes.post("/exists", userExists)
userRoutes.post("/hobby/count",getUserCountByHobby)
userRoutes.get("/is-free", getFreeTimeUsers); // Get users by hobby
userRoutes.post("/suggest",addHobbyToUser)
userRoutes.post("/", registerUser)
// EXPORT ROUTES
export default userRoutes;
