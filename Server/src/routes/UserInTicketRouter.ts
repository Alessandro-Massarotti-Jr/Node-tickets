import express from "express"
import { UserInTicketController } from "../Controllers/UserInTicketController";


export const userInTicketRoutes = express.Router();

userInTicketRoutes.post("/assign",UserInTicketController.assignUserInTicket);

