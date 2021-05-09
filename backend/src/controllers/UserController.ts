import { Request, Response } from 'express'
import { CreateUser } from './CreateUser'

export class UserController {

  constructor(
    private createUser: CreateUser,
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
}