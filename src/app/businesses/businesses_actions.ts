"use server";

import { getAllBusinessesFromNeonDb, getBusinessAddressFromNeonDb, getSingleBusinessFromNeonDb } from "@/repository/neonDbRepo";

export async function getBusinessesAction() {
    return await getAllBusinessesFromNeonDb();
}

export async function getSingleBusinessAction(id: string) {
    return await getSingleBusinessFromNeonDb(id);
}

export async function getBusinessAddress(id: string) {
    return await getBusinessAddressFromNeonDb(id);
}