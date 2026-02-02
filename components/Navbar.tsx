import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div>
        <div className="flex justify-between px-32 border-slate-200 border-b-1 bg-slate-100 items-center">
          <div>
            <Link href={"/"}>
              <Image
                src="/logo.png"
                alt="Job Board Logo"
                width={40}
                height={40}
              />
            </Link>
          </div>
          <div>
            <ul className="flex justify-between gap-10">
              <li><Link href={"/"}>Browse Jobs</Link></li>
              <li><Link href={"/"}>Post a Job</Link></li>
              <li><Link href={"/"}>Dashboard</Link></li>
              <li><Link href={"/"}>Sign Out</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
