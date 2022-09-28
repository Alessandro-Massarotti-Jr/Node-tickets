import { PrismaClient } from "@prisma/client";
import { TicketInterface } from "../Models/TicketModel";


const prisma = new PrismaClient();

export class TicketRepository {

    public static async find(ticket_id: string) {
        const ticket = await prisma.ticket.findUnique({
            where: {
                id: ticket_id,
            },
            select: {
                id: true,
                title: true,
                description: true,
                actual_responsable: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    }
                },
                project:{
                    select:{
                        id:true,
                        title:true,
                        description:true,
                    }
                },
                author: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    }
                },
            }
        });

        async () => { await prisma.$disconnect(); };

        return ticket;
    }

    public search() {

    }

    public static async store(ticket: Omit<TicketInterface, 'id'>) {
        const newTicket = await prisma.ticket.create({
            data: {
                title: ticket.title,
                description: ticket.description,
                author_id: ticket.author_id,
                project_id: ticket.project_id,
            },
            select: {
                id: true,
                title: true,
                description: true,
                actual_responsable: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    }
                },
                project:{
                    select:{
                        id:true,
                        title:true,
                        description:true,
                    }
                },
                author: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    }
                },
            }
        });

        async () => { await prisma.$disconnect(); };

        return newTicket
    }

    public static async update() {

    }

    public static async delete(ticket_id: string) {
        const ticket = await prisma.ticket.update({
            where: {
                id: ticket_id,
            },
            data: {
                deleted: true
            },
            select: {
                id: true,
                title: true,
                description: true,
                actual_responsable: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    }
                },
                project:{
                    select:{
                        id:true,
                        title:true,
                        description:true,
                    }
                },
                author: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    }
                },
            }
        });

        async () => { await prisma.$disconnect(); };

        return ticket;
    }

    public static async findAll() {
        const tickets = await prisma.ticket.findMany({
            where: {
                deleted: false
            },
            select: {
                id: true,
                title: true,
                description: true,
                actual_responsable: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    }
                },
                project:{
                    select:{
                        id:true,
                        title:true,
                        description:true,
                    }
                },
                author: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    }
                },
            }
        });

        async () => { await prisma.$disconnect(); };

        return tickets;
    }


}