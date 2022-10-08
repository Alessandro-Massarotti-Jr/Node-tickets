export interface UserInTicketInterface {
    id: string;
    user_id: string;
    ticket_id: string;
    total_time_spend?: string;
    lastOpenAt: string;
    lastCloseAT?: string;
    isOpen?: boolean;
}