import Link from 'next/link'
import { getBusinesses } from '../services/businesses_service';


const businesses = async () => {

  const businesses = await getBusinesses();
  
  return (
    <>
      <div className="pt-5 pl-5 grid grid-flow-row grid-flow-col gap-4 place-items-start text-neutral-300 m-5">
        {
          businesses.map((business) =>(
            <>
              <Link href={`/businesses/${business.id}`} className="border-2 rounded-md p-2">
                <p>{business.business_name}</p>
              </Link>
            </>
          ))
        }
      </div>
      <div className="flex justify-center items-center h-screen">
        <Link className="flex-1 text-center bg-yellow-300 text-slate-50 p-2 rounded-md m-5" href="/">Home</Link>
        <Link className="flex-1 text-center bg-yellow-300 text-slate-50 p-2 rounded-md m-5" href="/businesses/add">Add</Link>
      </div>
    </>
  )
}

export default businesses
