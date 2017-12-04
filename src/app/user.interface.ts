export interface IUser {
    active: boolean;
    currentMatch: string;
    email: string;
    firstName: string;
    lastName: string;
    location: number;
    matchConfirmed: boolean;
    matches: {};
    id?: string;
}