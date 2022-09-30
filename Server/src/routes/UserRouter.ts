import express from "express"
import { UserController } from "../Controllers/UserController";
import { AuthMiddleware } from "../Middlewares/AuthMiddleware";


export const userRoutes = express.Router();


userRoutes.get("/",AuthMiddleware.Authenticate, UserController.findAll)

userRoutes.get("/:id",AuthMiddleware.Authenticate, UserController.find)

userRoutes.post("/", UserController.store)

userRoutes.put("/:id",AuthMiddleware.Authenticate, async (req, res) => {

    return res.status(201).json({teste:"update user"});
})

userRoutes.delete("/:id",AuthMiddleware.Authenticate, async (req, res) => {

    return res.status(201).json({teste:"delete user"});
})