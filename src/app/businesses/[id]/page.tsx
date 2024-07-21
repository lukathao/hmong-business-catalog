import React from 'react'
import { getBusinessAddress, getSingleBusiness } from '../../services/businesses_service'
import Link from 'next/link';



const individualBusinessPage = async ({params,} : { params : {id: string}}) => {
  
  const business = await getSingleBusiness(params.id);
  const businessAddress = await getBusinessAddress(params.id);

  return (
    <>
      <div>
        <p>{business.business_name}</p>
        <p>{business.business_owner}</p>
        <p>{businessAddress.address}</p>
        <p>{businessAddress.address_city},</p>
        <p>{businessAddress.address_state}, {businessAddress.country}</p>
        <p>{businessAddress.coordinates}</p>
      </div>
      <div className="flex justify-center items-center h-screen">
        <Link className="flex-1 text-center bg-yellow-300 text-slate-50 p-2 rounded-md m-5" href="/businesses">Businesses</Link>
        <Link className="flex-1 text-center bg-yellow-300 text-slate-50 p-2 rounded-md m-5" href="/">Home</Link>
      </div>
    </>
  )
}

export default individualBusinessPage