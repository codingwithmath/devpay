import { User } from "../models/User";

export interface IUsersDAO {
    findByUsername(username: string): Promise<Boolean>;
    save(user: User): Promise<void>;
    searchUsers(): Promise<Array<User>>;
    searchUsersByTech(tech: string): Promise<Array<User>>;
    deleteUser(username: string): Promise<void>;
}