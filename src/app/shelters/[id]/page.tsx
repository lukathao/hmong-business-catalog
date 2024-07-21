import { getSingleShelter } from '@/app/services/shelter_service'
import { getShelterAddressFromVercelDb } from '@/repository/VercelDbRepo';
import Link from 'next/link';
import React from 'react'

const SingleShelter = async ({params,} : { params : {id: string}}) => {
  
  const shelter = await getSingleShelter(params.id);
  const shelterAddress = await getShelterAddressFromVercelDb(params.id);

  return (
    <>
      <div>
        <p>{shelter.shelter_lead}</p>
        <p>{shelter.shelter_lead_contact}</p>
        <p>{shelter.address}</p>
        <p>{shelter.address_city},</p>
        <p>{shelter.address_state}, {shelter.country}</p>
        <p>{shelter.coordinates}</p>
        <>
          {
            shelter.occupants.map((occupant) =>(
              <>
                  <p>{occupant.occupant_name}</p>
              </>
            ))
          }
        </>
      </div>
      <div className="flex justify-center items-center h-screen">
        <Link className="flex-1 text-center bg-yellow-300 text-slate-50 p-2 rounded-md m-5" href="/businesses">Businesses</Link>
        <Link className="flex-1 text-center bg-yellow-300 text-slate-50 p-2 rounded-md m-5" href="/">Home</Link>
      </div>
    </>
  )
}

export default SingleShelter