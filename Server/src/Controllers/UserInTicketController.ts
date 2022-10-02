import { Request, Response } from "express";
import { ReturnAPI } from "../resources/ReturnAPI";
import { AssignUserInTicketService } from "../Services/Tickets/AssignUserInTicketService";

export class UserInTicketController{
    public static async assignUserInTicket(req:Request,res:Response){

            const assignUserResponse = await AssignUserInTicketService.execute();

            return ReturnAPI.messageReturn(res,{error:false,message:"teste",developerMessage:"teste",data:{teste:assignUserResponse},statusHTTP:200});
    }
}