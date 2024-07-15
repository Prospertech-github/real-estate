"use client";

import { data } from "@/public/data";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "../page-wrapper";

const properties = data.map((house) => (
  <Link href={`/properties/${house.name}`}>
    <div key={house.id} className="h-[400px] w-[400px] bg-[#ff6500]">
      <h1>{house.name}</h1>
      <p>{house.price}</p>
      <h3>{house.category}</h3>
      <Image
        src={house.image}
        alt={`${house.name} image`}
        width={300}
        height={300}
      />
    </div>
  </Link>
));

export default function Page() {
  return (
    <section>
      <h1> Prooperties</h1>
      <div className="grid grid-cols-2 gap-x-8 gap-y-8">{properties}</div>
    </section>
  );
}
