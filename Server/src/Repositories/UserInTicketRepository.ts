import { PrismaClient } from "@prisma/client";
import { UserInTicketInterface } from "../Models/UserInTicketModel";

const prisma = new PrismaClient();

export class UserInTicketRepository {
    public static async find(userInTicket_id: string) {
        const userinTicket = await prisma.userInTicket.findUnique({
            where: {
                id:userInTicket_id
                 
            },
            select: {
                id: true,
                total_time_spend: true,
                lastOpenAt: true,
                lastCloseAT: true,
                isOpen:true,
                user_id:true,
                ticket_id:true,
                createdAt:true,
                updatedAt:true,
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
                lastOpenAt: true,
                lastCloseAT: true,
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
                lastOpenAt: userInTicket.lastOpenAt

            },
            select: {
                id: true,
                total_time_spend: true,
                lastOpenAt: true,
                lastCloseAT: true,
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
    public static async update(userInTicket: UserInTicketInterface) {

        const newUserInTicket = await prisma.userInTicket.update({
            where:{
                id:userInTicket.id
            },
            data: {
                user_id: userInTicket.user_id,
                ticket_id: userInTicket.ticket_id,
                lastOpenAt: userInTicket.lastOpenAt,
                lastCloseAT:userInTicket.lastCloseAT,
                total_time_spend:userInTicket.total_time_spend,
                isOpen:userInTicket.isOpen

            },
            select: {
                id: true,
                total_time_spend: true,
                lastOpenAt: true,
                lastCloseAT: true,
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
    public static async delete() {

    }
}