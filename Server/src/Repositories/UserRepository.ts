import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"

const prisma = new PrismaClient();

export interface UserInterface {
    id: string;
    name: string;
    email: string;
    password: string;
}

export class UserRepository {

    public async find(user_id: string) {
        const user = await prisma.user.findUnique({
            where: {
                id: user_id
            },
            select: {
                email: true,
                name: true,
                id: true
            }
        });

        async () => { await prisma.$disconnect(); };

        return user;
    }

    public search() {

    }

    public async store(user: Omit<UserInterface, 'id'>) {

        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(user.password, salt);

        const newUser = await prisma.user.create({
            data: {
                email: user.email,
                password: passwordHash,
                name: user.name
            },
            select: {
                email: true,
                name: true,
                id: true
            }
        });

        async () => { await prisma.$disconnect(); };

        return newUser;

    }

    public update() {

    }

    public async delete(user_id : string) {
        const deletedUser = await prisma.user.delete({
          where:{
            id:user_id
          },
          select: {
            email: true,
            name: true,
            id: true
        }
        });

        async () => { await prisma.$disconnect(); };

        return deletedUser;
    }

    public async findAll() {
        const users = await prisma.user.findMany({
            select: {
                email: true,
                name: true,
                id: true
            }
        });

        async () => { await prisma.$disconnect(); };

        return users;
    }

}