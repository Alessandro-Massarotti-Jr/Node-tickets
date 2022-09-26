import { PrismaClient } from "@prisma/client";
import { ProjectInterface } from "../Models/ProjectModel";


const prisma = new PrismaClient();

export class ProjectRepository {

    public static async find(project_id: string) {
        const project = await prisma.project.findUnique({
            where: {
                id: project_id,
            },
            select: {
                id: true,
                title: true,
                description: true,
            }
        });

        async () => { await prisma.$disconnect(); };

        return project;
    }

    public search() {

    }

    public static async store(project: Omit<ProjectInterface, 'id'>) {
        const newProject = await prisma.project.create({
            data: {
                title: project.title,
                description: project.description,
            },
            select: {
                id: true,
                title: true,
                description: true,
            }
        });

        async () => { await prisma.$disconnect(); };

        return newProject;

    }

    public static async update() {

    }

    public static async delete(project_id: string) {
        const project = await prisma.project.update({
            where: {
                id: project_id,
            },
            data:{
                deleted:true
            },
            select: {
                id: true,
                title: true,
                description: true,
            }
        });

        async () => { await prisma.$disconnect(); };

        return project;
    }

    public static async findAll() {
        const projects = await prisma.project.findMany({
            where: {
                deleted: false
            },
            select: {
                id: true,
                title: true,
                description: true,
            }
        });

        async () => { await prisma.$disconnect(); };

        return projects;
    }

}