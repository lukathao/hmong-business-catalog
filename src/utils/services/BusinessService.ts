"use server";

import { getAllBusinessesFromVercelDb } from "@/repository/VercelDbRepo";


export async function getBusinesses() {
    return await getAllBusinessesFromVercelDb();
}

