import { Request, Response } from "express";
import { ReturnAPI } from "../resources/ReturnAPI";
import { AssignUserInTicketService } from "../Services/Tickets/AssignUserInTicketService";
import { CloseTicketService } from "../Services/Tickets/CloseTicketService";
import { ReOpenTicketService } from "../Services/Tickets/ReOpenTicketService";

export class UserInTicketController {
    public static async assignUserInTicket(req: Request, res: Response) {
        const newUserInTicket = req.body;
        newUserInTicket.user_id = req.AuthUser?.id;
        const assignUserResponse = await AssignUserInTicketService.execute(newUserInTicket);
        return ReturnAPI.messageReturn(res, { error: false, message: "teste", developerMessage: "teste", data: assignUserResponse, statusHTTP: 200 });
    }

    public static async closeTicket(req: Request, res: Response) {
        const newUserInTicket = req.body;
        newUserInTicket.user_id = req.AuthUser?.id;
        const assignUserResponse = await CloseTicketService.execute(newUserInTicket);
        return ReturnAPI.messageReturn(res, assignUserResponse);
    }

    public static async reOpenTicket(req: Request, res: Response) {
        const newUserInTicket = req.body;
        newUserInTicket.user_id = req.AuthUser?.id;
        const assignUserResponse = await ReOpenTicketService.execute(newUserInTicket);
        return ReturnAPI.messageReturn(res, assignUserResponse);
    }
}