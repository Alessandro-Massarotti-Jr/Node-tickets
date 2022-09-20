import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"

const prisma = new PrismaClient();

export interface UserInterface {
    id:string;
    name:string;
    email:string;
    password:string;
}

export class UserRepository{

    public find(){

    }

    public search(){

    }
    
    public async store(user: Omit<UserInterface,'id'>){

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

    public update(){

    }

    public delete(){

    }

    public findAll(){

    }

}