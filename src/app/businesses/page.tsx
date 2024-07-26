import Link from 'next/link'
import { getBusinesses } from '../../utils/services/businesses_service';


const businesses = async () => {

  const businesses = await getBusinesses();
  
  return (
    <>
      <div className="pt-5 pl-5 grid grid-flow-row grid-flow-col gap-4 place-items-start text-neutral-300 m-5">
        {
          businesses.map((business) =>(
            <>
              <Link href={`/businesses/${business.id}`} className="border-2 rounded-md p-2">
                <div key={business.id}>{business.business_name}</div>
              </Link>
            </>
          ))
        }
      </div>
    </>
  )
}

export default businesses
