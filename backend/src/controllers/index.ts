import { UsersDAO } from "../dao/UsersDAO";
import { GithubProvider } from "../providers/GithubProvider";
import { CreateUser } from "./CreateUser";
import { UserController } from "./UserController";

const usersDAO = new UsersDAO()

const githubProvider = new GithubProvider()

const createUser = new CreateUser(usersDAO, githubProvider)

const userController = new UserController(createUser)

export { userController }