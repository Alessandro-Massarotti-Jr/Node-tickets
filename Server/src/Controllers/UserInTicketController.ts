import { Request, Response } from "express";
import { ReturnAPI } from "../resources/ReturnAPI";
import { AssignUserInTicketService } from "../Services/Tickets/AssignUserInTicketService";

export class UserInTicketController {
    public static async assignUserInTicket(req: Request, res: Response) {
        const newUserInTicket = req.body;
        const assignUserResponse = await AssignUserInTicketService.execute(newUserInTicket);
        return ReturnAPI.messageReturn(res, { error: false, message: "teste", developerMessage: "teste", data: assignUserResponse, statusHTTP: 200 });
    }

    public static async closeTicket(req: Request, res: Response) {
        const newUserInTicket = req.body;
        const assignUserResponse = await AssignUserInTicketService.execute(newUserInTicket);
        return ReturnAPI.messageReturn(res, { error: false, message: "teste", developerMessage: "teste", data: assignUserResponse, statusHTTP: 200 });
    }
}