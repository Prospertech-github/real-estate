"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "@/public/logo.png";
import Button from "./Button";
import { IoMenu, IoClose } from "react-icons/io5";


export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  return (
    <nav className="flex justify-between py-5 bg-white items-center p-4 lg:px-0 lg:py-10">
      <div>
        <Image src={logo} alt="Villar Logo" width={200} height={250} />
      </div>

      <div>
        {
            mobile ? (
                <IoClose className="text-[45px] lg:hidden" onClick={()=>setMobile(!mobile)}/>
            ): (
                <IoMenu className="text-[45px] lg:hidden" onClick={()=>setMobile(!mobile)}/>
            )
        }
      </div>

      <ul className={`items-center fixed h-screen top-[100px] right-0  flex-col gap-12 w-screen bg-[#ff6500] text-white py-24 ${mobile ? 'flex' : 'hidden'}`}>
        <li><a>Home</a></li>
        <li><a>Properties</a></li>
        <li><a>Contact</a></li>

        <Button />
      </ul>
    </nav>
  );
}
