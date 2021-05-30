import { IUsersDAO } from "../../dao/user/IUsersDAO";

export class DeleteUser {
  private userDAO: IUsersDAO

  constructor(userDAO: IUsersDAO) {
    this.userDAO = userDAO
  }

  async execute(username: string): Promise<void> {
    this.userDAO.deleteUser(username)
  }
}