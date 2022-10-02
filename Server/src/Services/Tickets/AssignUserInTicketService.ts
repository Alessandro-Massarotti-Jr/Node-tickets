import { UserInTicketInterface } from "../../Models/UserInTicketModel";
import { UserInTicketRepository } from "../../Repositories/UserInTicketRepository";
import moment from 'moment';

export class AssignUserInTicketService{
    public static async execute(){

        //  const thisUserInTicket = await UserInTicketRepository.find(userInTicket.id);

        //  if(thisUserInTicket != null){
        //     const newUserInTicket = UserInTicketRepository.store(userInTicket);
        //  }else{
        //     const newUserInTicket = UserInTicketRepository.update(userInTicket);
        //  }

        const teste = moment().locale('pt-br').utc().format();

        return teste;

    }
}