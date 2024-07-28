import { getNeonDBPool } from '@/utils/services/NeonDbService';
import sqlstring from "sqlstring";

export const getAllBusinessesFromNeonDb = async () => {
    const pool = await getNeonDBPool();
    const sql = sqlstring.format(`
      select business_owner, business_name, id from businesses  
    `, []);
    const {rows} = await pool.query(sql);
    return rows;
}
