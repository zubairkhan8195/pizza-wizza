import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className="text-white-100 sticky top-0 z-50 bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 body-font">
        <div className="container mx-auto flex flex-wrap  p-3 flex-col md:flex-row items-center">
          <Link
            href={"/"}
            className="flex title-font font-extrabold items-center  uppercase text-gray-100"
          >
            <Image
              alt="Navbar Logo"
              src={"/Pizza.svg"}
              width={60}
              height={60}
            />
            <p className="leading-5 text-xl mx-2">Pizza Wizza</p>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
