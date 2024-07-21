"use server";

import { getAllSheltersFromVercelDb, getSingleShelterFromVercelDb } from "@/repository/VercelDbRepo";

export async function getShelters() {
    return await getAllSheltersFromVercelDb();
}

export async function getSingleShelter(id: string) {
    return await getSingleShelterFromVercelDb(id);
}

