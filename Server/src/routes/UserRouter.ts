import express from "express"


export const userRoutes = express.Router();


userRoutes.get("/", async (req, res) => {

    return res.status(201).json({teste:"all users"});
})

userRoutes.get("/:id", async (req, res) => {

    return res.status(201).json({teste:"one user"});
})

userRoutes.post("/", async (req, res) => {

    return res.status(201).json({teste:"create user"});
})

userRoutes.put("/:id", async (req, res) => {

    return res.status(201).json({teste:"update user"});
})

userRoutes.delete("/:id", async (req, res) => {

    return res.status(201).json({teste:"delete user"});
})