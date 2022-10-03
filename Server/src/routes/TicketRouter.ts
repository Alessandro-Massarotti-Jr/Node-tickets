import express from "express"
import { TicketController } from "../Controllers/TicketController";
import { UserInTicketController } from "../Controllers/UserInTicketController";


export const ticketRoutes = express.Router();

ticketRoutes.post("/teste",UserInTicketController.assignUserInTicket);

ticketRoutes.get("/", TicketController.findAll);

ticketRoutes.get("/:id", TicketController.find);

ticketRoutes.post("/", TicketController.store);

ticketRoutes.put("/", (req, res) => { console.log('teste') });

ticketRoutes.delete("/", (req, res) => { console.log('teste') });
