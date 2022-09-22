import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"
import { UserInterface } from "../Models/UserModel";

const prisma = new PrismaClient();

export class UserRepository {

    public static async find(user_id: string) {
        const user = await prisma.user.findUnique({
            where: {
                id: user_id
            },
            select: {
                id: true,
                email: true,
                name: true,
            }
        });

        async () => { await prisma.$disconnect(); };

        return user;
    }

    public search() {

    }

    public static async store(user: Omit<UserInterface, 'id'>) {

        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(user.password, salt);

        const newUser = await prisma.user.create({
            data: {
                email: user.email,
                password: passwordHash,
                name: user.name
            },
            select: {
                id: true,
                email: true,
                name: true,
            }
        });

        async () => { await prisma.$disconnect(); };

        return newUser;

    }

    public update() {

    }

    public static async delete(user_id : string) {
        const deletedUser = await prisma.user.delete({
          where:{
            id:user_id
          },
          select: {
            id: true,
            email: true,
            name: true,
        }
        });

        async () => { await prisma.$disconnect(); };

        return deletedUser;
    }

    public static async findAll() {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                name: true,
            }
        });

        async () => { await prisma.$disconnect(); };

        return users;
    }

}