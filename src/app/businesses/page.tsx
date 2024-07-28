import Link from 'next/link'
import { getBusinesses } from '../../utils/services/businesses_service';


const businesses = async () => {

  const businesses = await getBusinesses();
  
  return (
    <>
      <div className="pt-5 pl-7">
        <div>
          <h1 className="text-5xl font-bold">Hmong Businesses</h1>
        </div>
        <div>
          <h2 className="text-3xl font-italic">Check back soon as we grow the list of businesses we support.</h2>
        </div>
        <div className="grid grid-flow-row grid-flow-col gap-4 place-items-start text-neutral-300 m-5">
          {
            businesses.map((business) =>(
              <>
                <div key={business.id}>{business.business_name}</div>
              </>
            ))
          }
        </div>
      </div>
      
    </>
  )
}

export default businesses
