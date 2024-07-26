import Link from "next/link";


export default async function Home() {
  return (
    <main>
      <div className="pt-5 pl-7 grid grid-flow-row grid-flow-col gap-4 place-items-start">
        <div>
          <h1 className="text-5xl font-bold">Businesses</h1>
          <p className="py-6">
            We provide supplemental income to businesses to offset costs and enable free services to community.
          </p>
          <button className="btn btn-primary">
            <Link href="/businesses">Businesses</Link>
          </button>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="pl-7">
        <div>
          <h2 className="text-3xl font-bold">Future Projects</h2>
          <p><Link href="/scholarships" className="link link-hover">Scholarships</Link></p>
          <p><Link href="/shelters" className="link link-hover">Shelters</Link></p>
          <p><Link href="/gardens" className="link link-hover">Community Gardens</Link></p>
          <p><Link href="/recipes" className="link link-hover">Recipes</Link></p>
        </div>
      </div>
    </main>
  );
}
