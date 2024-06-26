import { Pool } from "@neondatabase/serverless";
import { NextRequest } from "next/server";
import { waitUntil } from "@vercel/functions";
import sqlstring from "sqlstring";
import { add_business_schema, getBody } from "@/utils/routeHelper";

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
    const { business_owner, business_name, is_active, business_id } = add_business_schema.parse(body);
    const sql = sqlstring.format(`
      insert into business_address (id, business_name, business_owner, is_active, business_id, created_at)
      values (GEN_RANDOM_UUID(), ?, ?, ?, ?, NOW());
    `, [business_name, business_owner, is_active, business_id]);
    await pool.query(sql);
    console.log("sql: "+sql)
    waitUntil(pool.end());
    return new Response(
        JSON.stringify({business: business_name}),
        {status: 200}
    );
}

