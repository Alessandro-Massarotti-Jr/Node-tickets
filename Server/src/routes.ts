import express from "express"
import { AuthMiddleware } from "./Middlewares/AuthMiddleware";
import { authRoutes } from "./routes/AuthRouter";
import { projectRoutes } from "./routes/ProjectRouter";
import { ticketRoutes } from "./routes/TicketRouter";
import { userRoutes } from "./routes/UserRouter";


export const routes = express.Router();


routes.get("/", async (req, res) => {
    return res.status(200).json({Running:"Node_Tickets"});
});


routes.use("/users",userRoutes);
routes.use("/projects",AuthMiddleware.Authenticate,projectRoutes)
routes.use("/tickets",AuthMiddleware.Authenticate,ticketRoutes)
routes.use("/auth",authRoutes)