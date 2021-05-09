import { IUsersDAO } from "../dao/IUsersDAO";
import { User } from "../models/User";
import { IGithubProvider } from "../providers/IGithubProvider";
import { ICreateUserRequestDTO } from "./UserDTO";

export class CreateUser {
  private usersDAO: IUsersDAO
  private githubProvider: IGithubProvider;

  constructor(
    usersDAO: IUsersDAO,
    githubProvider: IGithubProvider
  ) {
    this.usersDAO = usersDAO
    this.githubProvider = githubProvider
  }

  async execute(data: ICreateUserRequestDTO): Promise<void> {
    let githubUserInfo
    
    try {
      githubUserInfo = await this.githubProvider.getUser(data.username)
    }
    catch(err) {
      throw new Error("github user not found")
    }

    const userAlreadyExists = await this.usersDAO.findByUsername(data.username)

    if (userAlreadyExists) {
      throw new Error("user already exists.")
    }

    const newUser = {
      name: githubUserInfo.name,
      username: data.username,
      bio: githubUserInfo.bio,
      techs: data.techs,
      avatarUrl: githubUserInfo.avatarUrl,
      password: data.password,
      admin: data.admin
    }
    
    const user = new User(newUser);

    await this.usersDAO.save(user)
  }
}