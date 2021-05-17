import { IUsersDAO } from "../dao/IUsersDAO";
import { User } from "../models/User";

export class DeleteUser {
  private userDAO: IUsersDAO

  constructor(userDAO: IUsersDAO) {
    this.userDAO = userDAO
  }

  async execute(username: string): Promise<void> {
    const users = this.userDAO.deleteUser(username)
  }
}