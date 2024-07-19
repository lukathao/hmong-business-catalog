import { Pool } from "@neondatabase/serverless";
import { NextRequest } from "next/server";
import { add_business_schema, getBody } from "@/utils/routeHelper";
import { addNewBusinessToNeonDb, getAllBusinessesFromNeonDb } from "@/repository/neonDbRepo";

export async function GET() {
    
    const businesses = await getAllBusinessesFromNeonDb();
    return new Response(
        JSON.stringify(
            {businesses}
        ), 
        {status: 200}
    );
}


export async function POST(req: NextRequest) {
    const body = await getBody(req);
    const { business_owner, business_name, is_active, business_id } = add_business_schema.parse(body);
    
    try {
        addNewBusinessToNeonDb(business_owner, business_name, is_active, business_id);
    } catch(e) {
        console.error(e);
        return new Response(
            JSON.stringify({Error: "Unable to add new business"}),
            {status: 404}
        ); 
    } 
    return new Response(
        JSON.stringify({business: business_name}),
        {status: 200}
    );
}

