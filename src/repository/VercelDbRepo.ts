import { getVercelDBPool } from "@/utils/services/VercelDbService";
import sqlstring from "sqlstring";

export const getAllBusinessesFromVercelDb = async () => {
    const pool = await getVercelDBPool();
    const sql = sqlstring.format(`
      select business_owner, business_name, id from businesses  
    `, []);
    const {rows} = await pool.query(sql);
    return rows;
}
