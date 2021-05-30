import { IUsersDAO } from "../../dao/user/IUsersDAO";
import { User } from "../../models/User";

export class SearchUsers {
  private usersDAO: IUsersDAO

  constructor( usersDAO: IUsersDAO) {
    this.usersDAO = usersDAO
  }

  async execute(): Promise<Array<User>> {
    const users = this.usersDAO.searchUsers()

    return users
  }
}