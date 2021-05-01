import { Query, QueryResult } from "pg";
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
      throw new Error(error.message)
    }
  }

  async save(user: User): Promise<void> {
    const query = `INSERT INTO users (id, name, username, bio, avatarUrl, password, admin)
      VALUES (($1), ($2), ($3), ($4), ($5), ($6), ($7))`

    const values = [`
      ${user.id}`,
      `${user.name}`,
      `${user.username}`,
      `${user.bio}`,
      `${user.avatarUrl}`,
      `${user.password}`,
      `${user.admin}`
    ]

    try {
      await pool.query(query, values)
    } catch(error) {
      throw new Error(error.message)
    }
  }
}