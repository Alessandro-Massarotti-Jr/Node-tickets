import express from "express"
import { UserController } from "../Controllers/UserController";


export const userRoutes = express.Router();


userRoutes.get("/", UserController.findAll)

userRoutes.get("/:id", UserController.find)

userRoutes.post("/", UserController.store)

userRoutes.put("/:id", async (req, res) => {

    return res.status(201).json({teste:"update user"});
})

userRoutes.delete("/:id", async (req, res) => {

    return res.status(201).json({teste:"delete user"});
})