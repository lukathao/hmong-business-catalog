import { Pool } from '@neondatabase/serverless';
import sqlstring from "sqlstring";

export const getAllBusinessesFromNeonDb = async () => {
    const pool = await new Pool({
      connectionString: process.env.NEON_DATABASE_URL,
    });
    const sql = sqlstring.format(`
      select business_owner, business_name, id from businesses  
    `, []);
    const {rows} = await pool.query(sql);
    return rows;
}
