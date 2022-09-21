import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
import jwt, { Secret } from "jsonwebtoken";

import { Request, Response } from "express"
import { ReturnAPI } from "../resources/ReturnAPI";
import { UserRepository } from "../Repositories/UserRepository";
import { UserInterface } from "../Models/UserModel";

const prisma = new PrismaClient();

export class UserController {
    public static find() {

    }
    public static async store(req: Request, res: Response) {

        const user: Omit<UserInterface, 'id'> = req.body;

        const newUser = await UserRepository.store(user);

        return ReturnAPI.messageReturn(res,{error:false,message:'Usuário cadastrado com sucesso',developerMessage:'user created',data:newUser,statusHTTP:201});

    }
    public static findAll() {

    }
    public static update() {

    }
    public static delete() {

    }
}

