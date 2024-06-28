import { getBody } from "@/utils/routeHelper";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { NextRequest, NextResponse } from "next/server";
import { useMutation } from "react-query";


export default async function Home() {
  return (
    <main>
      <h1>Listings of Hmong Businesses</h1>
      <h2>Will soon be available in Hmong, Laos, and English!</h2>

      <Link href="/businesses">Businesses</Link>

      
    </main>
  );
}
