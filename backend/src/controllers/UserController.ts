import { Request, Response } from 'express'
import { CreateUser } from './CreateUser'
import { SearchUsersByTech } from './SearchUsersByTech';
import { SearchUsers } from './SearchUsers';
import { DeleteUser } from './DeleteUser';

export class UserController {

  constructor(
    private createUser: CreateUser,
    private searchUsers: SearchUsers,
    private searchUsersByTech: SearchUsersByTech,
    private deleteUser: DeleteUser
  ) {
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { username, techs, password, admin } = request.body;

    try {
      await this.createUser.execute({
        username,
        techs,
        password,
        admin
      })

      return response.status(201).send();
    } catch (err) {
        return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }

  async search(request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.searchUsers.execute()

      return response.status(200).json({
        data: users
      });
    } catch (error) {
      return response.status(500).json({
        message: error.message || 'Unexpected error'
      })
    }
  }

  async searchByTech(request: Request, response: Response): Promise<Response> {
    const tech: string = request.query.tech as string

    if (!tech) {
      return response.status(400).json({
        message: "Invalid request"
      })
    }

    try {
      const users = await this.searchUsersByTech.execute(tech)

      return response.status(200).json({
        data: users
      });
    } catch (error) {
      return response.status(500).json({
        message: error.message || 'Unexpected error'
      })
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { username } = request.params
    try {
      await this.deleteUser.execute(username)

      return response.status(200).json({
        message: 'User deleted'
      });
    } catch (error) {
      return response.status(500).json({
        message: error.message || 'Unexpected error'
      })
    }
  }
}