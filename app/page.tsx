import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div className="text-center" >
          <h1 className="text-[24px] font-bold">Find Your Dream Job</h1>
          <p>Discover thousands of job opportunities with top comapnies</p>
          <button className="bg-blue-600 px-2 py-1 rounded-md text-white ">Browse Jobs</button>
        </div>
      </main>
    </div>
  );
}
