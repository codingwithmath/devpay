import { UsersDAO } from "../dao/UsersDAO";
import { GithubProvider } from "../providers/GithubProvider";
import { CreateUser } from "./CreateUser";
import { DeleteUser } from "./DeleteUser";
import { SearchUsers } from "./SearchUsers";
import { SearchUsersByTech } from "./SearchUsersByTech";
import { UserController } from "./UserController";

const usersDAO = new UsersDAO()

const githubProvider = new GithubProvider()

const createUser = new CreateUser(usersDAO, githubProvider)

const searchUsers = new SearchUsers(usersDAO)

const searchUsersByTech = new SearchUsersByTech(usersDAO)

const deleteUser = new DeleteUser(usersDAO)

const userController = new UserController(createUser, searchUsers, searchUsersByTech, deleteUser)

export { userController }