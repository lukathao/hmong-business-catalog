import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function getBody(req: NextRequest | NextResponse) {
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

