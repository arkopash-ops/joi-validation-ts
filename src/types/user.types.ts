export enum UserRole {
    ADMIN = "admin",
    USER = "user",
    VISITOR = "visitor",
}

export interface Address {
    street: string;
    city: string;
    zipCode: string;
}

export interface User {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    age: number;
    role: UserRole;
    phone: string;
    isActive: boolean;
    skills: string[];
    address: Address;
}
