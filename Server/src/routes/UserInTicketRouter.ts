import express from "express"
import { UserInTicketController } from "../Controllers/UserInTicketController";


export const userInTicketRoutes = express.Router();

userInTicketRoutes.post("/assign",UserInTicketController.assignUserInTicket);

userInTicketRoutes.put("/close",UserInTicketController.closeTicket);

userInTicketRoutes.put("/re-open",UserInTicketController.reOpenTicket);