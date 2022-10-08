import { UserInTicketInterface } from "../../Models/UserInTicketModel";
import { UserInTicketRepository } from "../../Repositories/UserInTicketRepository";
import moment from 'moment';

export class AssignUserInTicketService {
    public static async execute(userInTicket: UserInTicketInterface) {

        userInTicket.lastOpenAt = moment().locale('pt-br').utc().format();
        const newUserInTicket = await UserInTicketRepository.store(userInTicket);
        return newUserInTicket;

    }
}