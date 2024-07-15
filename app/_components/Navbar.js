"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "@/public/logo.png";
import Button from "./Button";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  return (
    <nav className="flex justify-between py-5 bg-white items-center p-4 lg:px-0 lg:py-5 lg:justify-between lg:items-center">
      <div>
        <Link href='/'>
          <Image src={logo} alt="Villar Logo" width={200} height={250} />
        </Link>
      </div>

      <div>
        {mobile ? (
          <IoClose
            className="text-[45px] lg:hidden"
            onClick={() => setMobile(!mobile)}
          />
        ) : (
          <IoMenu
            className="text-[45px] lg:hidden"
            onClick={() => setMobile(!mobile)}
          />
        )}
      </div>

      <ul
        className={`items-center fixed h-screen top-[100px] right-0  flex-col gap-12 w-screen bg-[#ff6500] text-white py-24 ${
          mobile ? "flex" : "hidden"
        } lg:flex lg:flex-row lg:gap-4 lg:relative lg:py-0 lg:text-black lg:bg-inherit lg:h-full lg:top-0 lg:w-fit`}
      >
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/properties'>Properties</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>

        <Button />
      </ul>
    </nav>
  );
}
