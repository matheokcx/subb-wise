import Link from "next/link";

export default function NavBar() {
    return (
        <header className='w-full flex justify-between items-center px-8 border-b-2 rounded-xl border-gray-500'>
            <Link href='/dashboard'><img src='/logo.png' alt='Logo du site' className='w-[70px] md:w-[100px] h-[100px]' /></Link>
            <Link href='/dashboard/ajouter' className='w-1/4 md:w-1/12 font-bold text-lg'>Ajouter</Link>
            <Link href='/dashboard/analyse' className='w-1/4 md:w-1/12 font-bold text-lg'>Analyse</Link>
            <Link href='/profil' className='w-1/4 md:w-1/12 '><img src='/profile.svg' className='w-1/3' /></Link>
        </header>
    );
}