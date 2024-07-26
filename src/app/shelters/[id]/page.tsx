import { getSingleShelter } from '@/utils/services/shelter_service'
import { getShelterAddressFromVercelDb } from '@/repository/VercelDbRepo';
import Link from 'next/link';
import React from 'react'

const SingleShelter = async ({params,} : { params : {id: string}}) => {
  
  const shelter = await getSingleShelter(params.id);

  return (
    <>
      <div>Shelter</div>
    </>
  )
}

export default SingleShelter
