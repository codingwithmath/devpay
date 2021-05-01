import { IUsersDAO } from "../dao/IUsersDAO";
import { User } from "../models/User";
import { ICreateUserRequestDTO } from "./UserDTO";

export class CreateUser {
    private usersDAO: IUsersDAO

    constructor(
        usersDAO: IUsersDAO
    ) {
        this.usersDAO = usersDAO
    }

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersDAO.findByUsername(data.username)

        if (userAlreadyExists) {
            throw new Error("user already exists.")
        }
        
        const user = new User(data);

        await this.usersDAO.save(user)
    }
}