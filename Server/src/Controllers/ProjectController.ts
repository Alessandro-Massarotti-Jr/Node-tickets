import { Request, Response } from "express";
import { ProjectInterface } from "../Models/ProjectModel";
import { ProjectRepository } from "../Repositories/ProjectRepository";
import { ReturnAPI } from "../resources/ReturnAPI";

export class ProjectController {
    public static async find(req: Request, res: Response) {

        const projectId = req.params.id;

        const project = await ProjectRepository.find(projectId);

        return ReturnAPI.messageReturn(res, { error: false, message: 'Projeto encontrado', developerMessage: 'project find', data: project, statusHTTP: 200 });

    }
    public static async store(req: Request, res: Response) {

        const project: Omit<ProjectInterface, 'id'> = req.body;

        const newProject = await ProjectRepository.store(project);

        return ReturnAPI.messageReturn(res, { error: false, message: 'Projeto cadastrado com sucesso', developerMessage: 'project created', data: newProject, statusHTTP: 201 });

    }
    public static async findAll(req: Request, res: Response) {

        const projects = await ProjectRepository.findAll();

        return ReturnAPI.messageReturn(res, { error: false, message: 'Projetos encontrados', developerMessage: 'projects find', data: projects, statusHTTP: 200 });
    }
    public static update() {

    }
    public static delete() {

    }
}