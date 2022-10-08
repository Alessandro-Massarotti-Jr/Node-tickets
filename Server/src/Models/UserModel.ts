export interface UserInterface {
    id: string;
    name: string;
    email: string;
    password: string;
}

export const UserVisibleData = {
    id: true,
    email: true,
    name: true,
    deleted:true,
    createdAt:true,
    updatedAt:true,   
}