import {Request, Response} from 'express'
import { CreateProfession } from './CreateProfession'
import { SearchProfessionByName } from './SearchProfessionByName';
import { SearchProfessions } from './SearchProfessions';
import { UpdateProfession } from './UpdateProfession';

export class ProfessionController {
  constructor(
    private createProfession: CreateProfession,
    private searchProfessions: SearchProfessions,
    private searchProfessionByName: SearchProfessionByName,
    private updateProfession: UpdateProfession
  ) {
    
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, salary, description } = request.body

    try {
      await this.createProfession.execute({name, salary, description})
      
      return response.status(201).json({
        message: "Profession created successfully"
      });
    } catch(e) {
      return response.status(400).json({
        message: e.message || 'Unexpected error.'
      })
    }
  }

  async search(request: Request, response: Response): Promise<Response> {
    try {
      const professions = await this.searchProfessions.execute()

      return response.status(200).json({
        data: professions
      })
    } catch (e) {
      return response.status(400).json({
        message: e.message || 'Unexpected error.'
      })
    }
  }
  
  async searchByName(request: Request, response: Response): Promise<Response> {
    try {
      const name: string = request.query.name as string

      const profession = await this.searchProfessionByName.execute(name)

      return response.status(200).json({
        data: profession
      })
    } catch (error) {
      if (error.message = 'not-founded') {
        console.log('profession not founded')
        console.log(error.stack)
        return response.status(204).send()
      }

      console.log(error)

      return response.status(500).json({
        message: error.message || 'Unexpected error.'
      })

    }
  }

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      
      const { name, salary, description } = request.body

      if (!id) {
        return response.status(400).json({
          message: 'id no specified'
        })
      }

      if (!name) {
        return response.status(400).json({
          message: 'name no specified'
        })
      }

      if (!salary) {
        return response.status(400).json({
          message: 'salary no specified'
        })
      }

      if (!description) {
        return response.status(400).json({
          message: 'description no specified'
        })
      }

      await this.updateProfession.execute({id, name, salary, description})

      return response.status(200).send()
    } catch(error) {
      console.log(error)

      return response.status(500).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}