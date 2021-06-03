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
  ) {}

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
      if (err.message === 'github-user-not-found') {
        return response.status(400).json({
          message: 'Github user not founded'
        })
      }

      if (err.message === 'user-already-exists') {
        return response.status(400).json({
          message: 'User already exists'
        })
      }

      return response.status(500).json({
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
      if (error.message == 'users-not-founded') {
        return response.status(204).send()
      }

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
      if (error.message == 'user-not-founded') {
        return response.status(400).json({
          message: 'User not founded'
        })
      }

      return response.status(500).json({
        message: error.message || 'Unexpected error'
      })
    }
  }
}