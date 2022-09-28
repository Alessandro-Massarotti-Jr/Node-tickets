export interface TicketInterface {
    id: string;
    title: string;
    description: string;
    project_id: string;
    author_id: string;
    actual_responsable_id?: string | null;
}