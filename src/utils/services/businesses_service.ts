"use server";

import { addNewBusinessToNeonDb, getAllBusinessesFromNeonDb, getBusinessAddressFromNeonDb, getSingleBusinessFromNeonDb } from "@/repository/NeonDbRepo";

export async function getBusinesses() {
    return await getAllBusinessesFromNeonDb();
}

export async function getSingleBusiness(id: string) {
    return await getSingleBusinessFromNeonDb(id);
}

export async function getBusinessAddress(id: string) {
    return await getBusinessAddressFromNeonDb(id);
}

export async function addNewBusiness(business_owner: string, business_name: string, is_active: boolean, business_id: string) {
  await addNewBusinessToNeonDb(business_owner, business_name, is_active, business_id);
}
