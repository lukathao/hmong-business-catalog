"use server";

import { getAllBusinessesFromNeonDb } from "@/repository/NeonDbRepo";


export async function getBusinesses() {
    return await getAllBusinessesFromNeonDb();
}

