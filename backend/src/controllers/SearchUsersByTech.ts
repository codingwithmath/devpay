import { IUsersDAO } from "../dao/IUsersDAO";
import { User } from "../models/User";

export class SearchUsersByTech {
  private userDAO: IUsersDAO

  constructor(userDAO: IUsersDAO) {
    this.userDAO = userDAO
  }

  async execute(tech: string): Promise<Array<User>> {
    const users = this.userDAO.searchUsersByTech(tech)
    
    return users
  }
}