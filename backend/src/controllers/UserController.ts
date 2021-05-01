import { Request, Response } from 'express'
import { CreateUser } from './CreateUser'
import { GithubProvider } from '../providers/GithubProvider'

export class UserController {

  constructor(
    private createUser: CreateUser,
    private githubProvider: GithubProvider
  ) {
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { username, password, admin } = request.body;

    const { bio, name, avatarUrl } = await this.githubProvider.getUser(username)

    try {
      await this.createUser.execute({
        username,
        name,
        bio,
        avatarUrl,
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
}