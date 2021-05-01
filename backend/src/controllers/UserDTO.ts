export interface ICreateUserRequestDTO {
    username: string;
    name: string;
    bio: string;
    avatarUrl: string;
    password: string;
    admin: boolean;
}