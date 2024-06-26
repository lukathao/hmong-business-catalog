import { NextRequest } from "next/server";
import { z } from "zod";
import sqlstring from "sqlstring";

export async function getBody(req: NextRequest) {
    if (!req.body) {
        console.log("There is nothing in the body.");
        return null;
    }
    const decorder = new TextDecoder();
    const reader = req.body.getReader();
    let body = '';
    while(true) {
        const {done, value} = await reader.read();
        if (done) {
            try {
               return JSON.parse(body); 
            } catch(e) {
                console.error(e);
            }
        }
        body = body + decorder.decode(value);
    }
}

export const add_business_schema = z.object({
    business_name: z.string().max(100).min(1),
    business_owner: z.string().max(100).min(1),
    is_active: z.boolean(),
    business_id: z.string().max(100).min(1),
});

export const add_business_address_schema = z.object({
    business_name: z.string().max(100).min(1),
    business_owner: z.string().max(100).min(1),
    is_active: z.boolean(),
    business_id: z.string().max(100).min(1),
});

export async function buildGetBusinessSql() {
    const sql = sqlstring.format(`
        select * from businesses  
      `, []);
      
}
