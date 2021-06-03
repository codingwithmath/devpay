import { User } from "../../models/User";

export interface IUsersDAO {
    doUserExist(user: User): Promise<Boolean>;
    save(user: User): Promise<void>;
    searchUsers(): Promise<Array<User>>;
    searchUsersByTech(tech: string): Promise<Array<User>>;
    deleteUser(user: User): Promise<void>;
}