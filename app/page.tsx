import Link from "next/link";
import React from "react";

export default async function Home() {
  return (
    <div className='w-full h-full flex justify-center items-center gap-8'>
      <button className='w-1/12 h-12 bg-black text-white font-bold rounded-lg transition-all hover:scale-105'><Link href='/sign-in'>Se connecter</Link></button>
      <button className='w-1/12 h-12 bg-black text-white font-bold rounded-lg transition-all hover:scale-105'><Link href='/sign-in'>S'inscrire'</Link></button>
    </div>
  );
}
