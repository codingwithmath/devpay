import { User } from "../models/User";

export interface IUsersDAO {
    findByUsername(username: string): Promise<Boolean>;
    save(user: User): Promise<void>;
}