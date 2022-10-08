import { UserInTicketInterface } from "../../Models/UserInTicketModel";
import { UserInTicketRepository } from "../../Repositories/UserInTicketRepository";
import moment from 'moment';

export class ReOpenTicketService {
    public static async execute(userInTicket: UserInTicketInterface) {
        const updatedUserInTicket = await UserInTicketRepository.find(userInTicket.id); 

        if(updatedUserInTicket){
            updatedUserInTicket.lastOpenAt =  moment().locale('pt-br').utc().format();
            updatedUserInTicket.isOpen = true;
            const newUserInTicket = await UserInTicketRepository.update(updatedUserInTicket as UserInTicketInterface);
            return { error: false, message: "Ticket aberto novamente", developerMessage: "ticket re-open", data: newUserInTicket, statusHTTP: 200 } ;
        }else{
            return { error: true, message: "Não foi possivel abrir o ticket", developerMessage: "Ticket not found", data: null, statusHTTP: 404 } ;
        }
    }
}