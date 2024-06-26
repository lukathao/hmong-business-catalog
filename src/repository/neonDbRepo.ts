import { Pool } from '@neondatabase/serverless';
import { waitUntil } from '@vercel/functions';
import sqlstring from "sqlstring";

export const getAllBusinessesFromNeonDb = async () => {
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
    });
    const sql = sqlstring.format(`
      select business_owner, business_name, id from businesses  
    `, []);
    const {rows} = await pool.query(sql);
    return rows;
}

export const getSingleBusinessFromNeonDb = async (id: string) => {
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
    });
    const sql = sqlstring.format(`
      select business_owner, business_name, id from businesses
      where id= ?
    `, [id]);
    const {rows} = await pool.query(sql);
    return rows[0];
}

export const getBusinessAddressFromNeonDb = async (id: string) => {
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
    });
    const sql = sqlstring.format(`
      select address, address_city, address_state, address_code, country, coordinates from business_address
      where business_id= ?
    `, [id]);
    const {rows} = await pool.query(sql);
    return rows[0];
}

export const addNewBusinessToNeonDb = async (business_owner: string, business_name: string, is_active: boolean, business_id: string) => {
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
    });

    const sql = sqlstring.format(`
      insert into businesses (id, business_name, business_owner, is_active, business_id, created_at)
      values (GEN_RANDOM_UUID(), ?, ?, ?, ?, NOW());
    `, [business_name, business_owner, is_active, business_id]);
    try {
        await pool.query(sql);
    } catch(e) {
        throw e;
    } finally {
        waitUntil(pool.end());
    }
}