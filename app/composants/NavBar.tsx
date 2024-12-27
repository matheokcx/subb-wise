import Link from "next/link";

export default function NavBar() {
    return (
        <header className='w-full h-1/6 flex justify-between items-center px-8 border-b-2 border-gray-500'>
            <Link href='/dashboard'><img src='/logo.png' alt='Logo du site' className='w-[100px] h-[100px]' /></Link>
            <button className='w-1/4 md:w-1/12 h-14 rounded-2xl bg-[#7a59bb] text-white font-bold'><Link href='/dashboard/ajouter'>Ajouter</Link></button>
            <Link href='/dashboard/analyse' className='w-1/4 md:w-1/12'><img src='/analyse.svg' className='w-1/2' /></Link>
            <Link href='/profil' className='w-1/4 md:w-1/12'><img src='/profile.svg' className='w-1/2' /></Link>
        </header>
    );
}