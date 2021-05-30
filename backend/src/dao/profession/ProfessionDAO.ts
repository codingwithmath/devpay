import { QueryResult } from "pg";
import { Profession } from "../../models/Profession";
import { pool } from "../../utils/database";
import { IProfessionDAO } from "./IProfessionDAO";

export class ProfessionDAO implements IProfessionDAO {
  async professionExists(profession: Profession): Promise<boolean> {
    const query = 'SELECT * FROM professions WHERE name = ($1)'
    const values = [`${profession.name}`]

    try {
      const response: QueryResult = await pool.query(query, values)
  
      const profession = response.rows[0]
  
      if (profession) {
        return true
      }
  
      return false
    } catch(error) {
      console.log(error)
      throw new Error(error.message)
    }
  }

  async save(profession: Profession): Promise<void> {
    const query = `INSERT INTO professions (id, name, salary, description)
    VALUES (($1), ($2), ($3), ($4))`

    const values = [profession.id, profession.name, profession.salary, profession.description]

    try {
      await pool.query(query, values)
    } catch(error) {
      console.log(error)
      throw new Error(error.message)
    }
  }

  async searchProfessions(): Promise<Array<Profession>> {
    const query = 'SELECT * FROM professions'

    try {
      const response: QueryResult = await pool.query(query)

      const professions = response.rows.map(profession => {
        const professionInstance = new Profession()

        professionInstance.name = profession.name
        professionInstance.id = profession.id
        professionInstance.description = profession.description
        professionInstance.salary = profession.salary
        
        return professionInstance
      })

      return professions
    } catch(error) {
      throw new Error(error.message)
    }
  }

  async searchProfessionByName(profession: Profession): Promise<Profession> {
    const query = 'SELECT * FROM professions WHERE name = ($1)'
    const values = [profession.name]

    try {
      const response: QueryResult = await pool.query(query, values)
  
      const professionInDatabase = response.rows[0]

      if (!professionInDatabase) {
        throw new Error('not-founded')
      }

      console.log("response", professionInDatabase)
      
      const profession = new Profession()

      profession.name = professionInDatabase.name
      profession.id = professionInDatabase.id
      profession.salary = professionInDatabase.salary
      profession.description = professionInDatabase.description

      return profession
    } catch(error) {
      console.log(error)
      throw new Error(error.message)
    }
  }

  async updateProfession(profession: Profession): Promise<void> {
    const query = 'UPDATE professions SET name = ($1), salary = ($2), description = ($3) WHERE id = ($4)'

    const values = [profession.name, profession.salary, profession.description, profession.id]
  
    try {
      await pool.query(query, values)
    } catch(error) {
      console.log(error)
      throw new Error(error.message)
    }
  }
}