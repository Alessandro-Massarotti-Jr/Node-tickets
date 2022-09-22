import express from "express"
import { authRoutes } from "./routes/AuthRouter";
import { projectRoutes } from "./routes/ProjectRouter";
import { ticketRoutes } from "./routes/TicketRouter";
import { userRoutes } from "./routes/UserRouter";


export const routes = express.Router();


routes.get("/", async (req, res) => {
    return res.status(200).json({Running:"Node_Tickets"});
});


routes.use("/users",userRoutes);
routes.use("/projects",projectRoutes)
routes.use("/tickets",ticketRoutes)
routes.use("/auth",authRoutes)