import { PrismaClient } from "@prisma/client"

import { Request, Response } from "express"
import { ReturnAPI } from "../resources/ReturnAPI";
import { UserRepository } from "../Repositories/UserRepository";
import { UserInterface } from "../Models/UserModel";

const prisma = new PrismaClient();

export class UserController {
    public static async find(req: Request, res: Response) {

        const userId = req.params.id;

        const user = await UserRepository.find(userId);

        return ReturnAPI.messageReturn(res, { error: false, message: 'Usuário encontrado', developerMessage: 'user find', data: user, statusHTTP: 200 });

    }
    public static async store(req: Request, res: Response) {

        const user: Omit<UserInterface, 'id'> = req.body;

        const newUser = await UserRepository.store(user);

        return ReturnAPI.messageReturn(res, { error: false, message: 'Usuário cadastrado com sucesso', developerMessage: 'user created', data: newUser, statusHTTP: 201 });

    }
    public static async findAll(req: Request, res: Response) {

        const users = await UserRepository.findAll();

        return ReturnAPI.messageReturn(res, { error: false, message: 'Usuários encontrados', developerMessage: 'users find', data: users, statusHTTP: 200 });
    }
    public static update() {

    }
    public static delete() {

    }
}

