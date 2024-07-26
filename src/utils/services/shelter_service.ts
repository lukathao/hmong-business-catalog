"use server";

import { getAllSheltersFromVercelDb, getShelterAddressFromVercelDb, getSingleShelterFromVercelDb } from "@/repository/VercelDbRepo";

export async function getShelters() {
    return await getAllSheltersFromVercelDb();
}

export async function getSingleShelter(id: string) {
    const shelter =  await getSingleShelterFromVercelDb(id);
    const shelterAddress = await getShelterAddressFromVercelDb(id);
    shelter.shelterAddress = shelterAddress;
    return shelter;
}
