import { UsersDAO } from "../dao/UsersDAO";
import { GithubProvider } from "../providers/GithubProvider";
import { CreateUser } from "./CreateUser";
import { UserController } from "./UserController";

const usersDAO = new UsersDAO()

const createUser = new CreateUser( usersDAO )

const githubProvider = new GithubProvider()

const userController = new UserController(createUser, githubProvider)

export { userController }