export interface ICreateUserRequestDTO {
    username: string;
    techs: Array<string>;
    password: string;
    admin: boolean;
}