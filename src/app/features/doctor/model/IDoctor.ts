export interface IDoctor{
    id: string;
    name: string;
    email: string;
    password?: string;
    address : string;
    phone_number: string;
    department: string;
    education : string;
    description ?: string;
}