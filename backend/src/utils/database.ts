import { Pool } from 'pg'

const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    password: 'postgres',
    database: 'postgres',
    port: 5432
})

export { pool }