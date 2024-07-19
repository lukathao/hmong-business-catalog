import { getBody } from "@/utils/routeHelper";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { NextRequest, NextResponse } from "next/server";
import { useMutation } from "react-query";


export default async function Home() {
  return (
    <main>
      <div>
        <h1>Hikari International Transformation Services</h1>
      </div>
      <div>
          <h2>*Will soon be available in Hmong, Laos, and English*</h2>
      </div>
      <br />
      <div>
        <h2>Services</h2>
      </div>
      <div className="pt-5 pl-5 grid grid-flow-row grid-flow-col gap-4 place-items-start text-neutral-300 m-5">
        <p>
          <Link href="/businesses">Businesses</Link>
        </p>
        <p>
          <Link href="/shelters">Shelters</Link>
        </p>
      </div>

      

      
    </main>
  );
}
