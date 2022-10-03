import { PrismaClient } from "@prisma/client";
import { UserInTicketInterface } from "../Models/UserInTicketModel";

const prisma = new PrismaClient();

export class UserInTicketRepository {
    public static async find(userInTicket_id: string) {

    }
    public static async findAll() {

    }

    public static async findByUserAndTicket(user_id: string, ticket_id: string) {
        const userinTicket = await prisma.userInTicket.findFirst({
            where: {
                ticket_id:{
                    equals:ticket_id
                } ,
                user_id:{
                    equals:user_id,
                }
            },
            select: {
                id: true,
                total_time_spend: true,
                openAt: true,
                closeAT: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    }
                },
                ticket: {
                    select: {
                        id: true,
                        title: true,
                        description: true,
                        project: {
                            select: {
                                id: true,
                                title: true,
                                description: true,
                            }
                        },
                        author: {
                            select: {
                                id: true,
                                name: true,
                                email: true,
                            }
                        }
                    }
                }

            }
        });
        async () => { await prisma.$disconnect(); };

        return userinTicket;
    }

    public static async store(userInTicket: Omit<UserInTicketInterface, 'id'>) {

        const newUserInTicket = await prisma.userInTicket.create({
            data: {
                user_id: userInTicket.user_id,
                ticket_id: userInTicket.ticket_id,
                openAt: userInTicket.openAt

            },
            select: {
                id: true,
                total_time_spend: true,
                openAt: true,
                closeAT: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    }
                },
                ticket: {
                    select: {
                        id: true,
                        title: true,
                        description: true,
                        project: {
                            select: {
                                id: true,
                                title: true,
                                description: true,
                            }
                        },
                        author: {
                            select: {
                                id: true,
                                name: true,
                                email: true,
                            }
                        }
                    }
                }

            }
        });

        async () => { await prisma.$disconnect(); };

        return newUserInTicket;
    }
    public static async update(userInTicket_id:string) {

    }
    public static async delete() {

    }
}