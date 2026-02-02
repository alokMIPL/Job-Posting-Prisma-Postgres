import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div>
        <div className="">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
