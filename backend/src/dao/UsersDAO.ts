import { QueryResult } from "pg";
import { User } from "../models/User";
import { pool } from "../utils/database";
import { IUsersDAO } from "./IUsersDAO";

export class UsersDAO implements IUsersDAO {

  async findByUsername(username: string): Promise<Boolean> {
    const query = 'SELECT * FROM users WHERE username = ($1)'
    const values = [`${username}`]

    try {
      const response: QueryResult = await pool.query(query, values)
  
      const user = response.rows[0]
  
      if (user) {
        return true
      }
  
      return false
    } catch(error) {
      console.log(error)
      throw new Error(error.message)
    }
  }

  async save(user: User): Promise<void> {
    const query = `INSERT INTO users (id, name, username, bio, techs, avatarUrl, password, admin)
      VALUES (($1), ($2), ($3), ($4), ($5), ($6), ($7), ($8))`

    const values = [`
      ${user.id}`,
      `${user.name}`,
      `${user.username}`,
      `${user.bio}`,
      user.techs,
      `${user.avatarUrl}`,
      `${user.password}`,
      `${user.admin}`
    ]

    try {
      await pool.query(query, values)
    } catch(error) {
      console.log(error)
      throw new Error(error.message)
    }
  }

  async searchUsers(): Promise<Array<User>> {
    const query = 'SELECT * FROM users'

    try {
      const response: QueryResult = await pool.query(query)

      const users = response.rows.map(user => {
        return new User(user)
      })

      return users
    } catch(error) {
      throw new Error(error.message)
    }
  }

  async searchUsersByTech(tech: string): Promise<Array<User>> {
    const query = 'SELECT * FROM users WHERE ($1)=ANY(techs)'
    const values = [tech]

    try {
      const response: QueryResult = await pool.query(query, values)

      const users = response.rows.map(user => {
        return new User(user)
      })

      return users
    } catch(error) {
      throw new Error(error.message)
    }
  }

  async deleteUser(username: string): Promise<void> {
    const query = 'DELETE FROM users WHERE username=($1)'
    const values = [username]

    try {
      await pool.query(query, values)
    } catch(error) {
      throw new Error(error.message)
    }
  }

}