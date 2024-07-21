"use server";

import { getAllBusinessesFromNeonDb, getBusinessAddressFromNeonDb, getSingleBusinessFromNeonDb } from "@/repository/NeonDbRepo";

export async function getBusinesses() {
    return await getAllBusinessesFromNeonDb();
}

export async function getSingleBusiness(id: string) {
    return await getSingleBusinessFromNeonDb(id);
}

export async function getBusinessAddress(id: string) {
    return await getBusinessAddressFromNeonDb(id);
}