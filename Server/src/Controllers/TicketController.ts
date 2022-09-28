import { Request, Response } from "express";
import { TicketInterface } from "../Models/TicketModel";
import { TicketRepository } from "../Repositories/TicketRepository";
import { ReturnAPI } from "../resources/ReturnAPI";

export class TicketController {
    public static async find(req: Request, res: Response) {

        const ticketId = req.params.id;

        const ticket = await TicketRepository.find(ticketId);

        return ReturnAPI.messageReturn(res,{error:false,message:'Ticket encontrado',developerMessage:'ticket find',data:ticket,statusHTTP:200});
        
    }
    public static async store(req: Request, res: Response) {

        const ticket: Omit<TicketInterface, 'id'> = req.body;

        const newTicket = await TicketRepository.store(ticket);

        return ReturnAPI.messageReturn(res,{error:false,message:'Ticket cadastrado com sucesso',developerMessage:'ticket created',data:newTicket,statusHTTP:201});

    }
    public static async findAll(req: Request, res: Response) {

        const tickets = await TicketRepository.findAll();

        return ReturnAPI.messageReturn(res,{error:false,message:'Tickets encontrados',developerMessage:'tickets find',data:tickets,statusHTTP:200});
    }
    public static update() {

    }
    public static delete() {

    }
}