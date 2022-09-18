import express from "express"
import { userRoutes } from "./routes/UserRouter";


export const routes = express.Router();


routes.get("/", async (req, res) => {

    return res.status(201).json({teste:"Node Tickets"});
})


routes.use("/users",userRoutes)