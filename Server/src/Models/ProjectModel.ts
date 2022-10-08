export interface ProjectInterface {
    id: string;
    title: string;
    description: string;
}

export const ProjectVisibleData = {
    id: true,
    title: true,
    description: true,
    deleted:true,
    createdAt:true,
    updatedAt:true,
}