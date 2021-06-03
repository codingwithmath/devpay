import { IUsersDAO } from "../../dao/user/IUsersDAO";
import { User } from "../../models/User";

export class DeleteUser {

  constructor(
    private userDAO: IUsersDAO
  ) {}

  async execute(username: string): Promise<void> {
    const user = new User()

    user.username = username

    const doUserExist = await this.userDAO.doUserExist(user)

    if (!doUserExist) {
      throw new Error('user-not-founded')
    }

    await this.userDAO.deleteUser(user)
  }
}