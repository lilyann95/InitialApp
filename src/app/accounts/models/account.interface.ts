
export interface Account {
    id?: string;
    firstName?: string;
    lastName?: string;
    PhoneContact?: string;
    email?: string;
    password?: string;
    terms?: boolean;
    agreements?: boolean;
    status: 'pending' | 'active';
}