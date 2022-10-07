import { UserInTicketInterface } from "../../Models/UserInTicketModel";
import { UserInTicketRepository } from "../../Repositories/UserInTicketRepository";
import moment from 'moment';

export class ReOpenTicketService {
    public static async execute(userInTicket: UserInTicketInterface) {

        const updatedUserInTicket = await UserInTicketRepository.find(userInTicket.id); 

        if(updatedUserInTicket){
            const openAt = moment(updatedUserInTicket.openAt);
            const closeAt = moment();
            updatedUserInTicket.closeAT = closeAt.locale('pt-br').utc().format();
            updatedUserInTicket.total_time_spend = String(closeAt.diff(openAt,'minutes'));
            const newUserInTicket = await UserInTicketRepository.update(updatedUserInTicket as UserInTicketInterface);
            return { error: false, message: "Ticket fechado", developerMessage: "ticket closed", data: newUserInTicket, statusHTTP: 200 } ;
        }else{
            return { error: true, message: "Não foi possivel fechar o ticket", developerMessage: "Ticket not found", data: null, statusHTTP: 404 } ;
        }
    }
}