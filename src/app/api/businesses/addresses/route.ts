import { Pool } from "@neondatabase/serverless";
import { NextRequest } from "next/server";
import { waitUntil } from "@vercel/functions";
import sqlstring from "sqlstring";
import { add_business_address_schema, getBody } from "@/utils/routeHelper";

export async function GET(req: NextRequest) {
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
    });
    const sql = sqlstring.format(`
      select * from business_address 
    `, []);
    const {rows} = await pool.query(sql);
    const data = rows[0];
    waitUntil(pool.end());
    return new Response(
        JSON.stringify(
            {data}
        ), 
        {status: 200}
    );
}


export async function POST(req: NextRequest) {
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
    });
    const body = await getBody(req);
    const { business_id, address, address_city, address_state, address_code, coordinates, country} = add_business_address_schema.parse(body);
    const sql = sqlstring.format(`
      insert into business_address (business_id, address, address_city, address_state, address_code, coordinates, country, id, created_at)
      values (?, ?, ?, ?, ?, ?, ?, GEN_RANDOM_UUID(), NOW());
    `, [business_id, address, address_city, address_state, address_code, coordinates, country]);
    try {
        await pool.query(sql);
    } catch(e) {
        console.error(e);
        return new Response(
            JSON.stringify({Error: "Unable to add new business"}),
            {status: 404}
        ); 
    } finally {
        waitUntil(pool.end());
    }
    return new Response(
        JSON.stringify({business: business_id}),
        {status: 200}
    );
}

