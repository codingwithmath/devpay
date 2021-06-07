import { uuid } from "uuidv4";
import { IUsersDAO } from "../../dao/user/IUsersDAO";
import { User } from "../../models/User";
import { IGithubProvider } from "../../providers/IGithubProvider";
import { ICreateUserRequestDTO } from "./UserDTO";

export class CreateUser {
  constructor(
    private usersDAO: IUsersDAO,
    private githubProvider: IGithubProvider
  ) {}

  async execute(data: ICreateUserRequestDTO): Promise<void> {
    const user = new User();

    user.username = data.username

    let githubUserInfo
    
    try {
      githubUserInfo = await this.githubProvider.getUser(user)
    }
    catch(err) {
      throw new Error("github-user-not-found")
    }

    const userAlreadyExists = await this.usersDAO.doUserExist(user)

    if (userAlreadyExists) {
      throw new Error("user-already-exists")
    }

    const techs =  data.techs.split(',').map(tech => tech.trim())

    user.id = uuid()
    user.name = githubUserInfo.name,
    user.bio = githubUserInfo.bio,
    user.techs = techs,
    user.avatarUrl = githubUserInfo.avatarUrl,
    user.password = data.password,
    user.admin = data.admin
  
    await this.usersDAO.save(user)
  }
}