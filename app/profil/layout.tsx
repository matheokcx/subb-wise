import Link from "next/link";
import NavBar from "../composants/NavBar";

export default function ProfilLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <NavBar />
            <main className='w-full h-5/6 flex flex-col md:flex-row justify-center items-center'>
                <nav className='w-10/12 md:w-1/12 h-1/6 md:h-3/4 flex md:flex-col items-center justify-around p-10 border-2 border-gray-800 '>
                    <Link href='/profil' className='w-10/12 flex flex-col items-center gap-2'>
                        <img src='/infos.svg' alt='Profil' className='w-1/6 md:w-auto' />
                        Informations
                    </Link>
                    <Link href='/profil/parametres' className='w-10/12 flex flex-col items-center gap-2'>
                        <img src='/settings.svg' alt='Parametres' className='w-1/6 md:w-auto' />
                        Parametres
                    </Link>
                </nav>
                <section className='w-10/12 md:w-4/6 h-4/6 md:h-3/4 flex flex-col gap-10 p-10 border-2 border-t-0 md:border-t-2 md:border-l-0 border-gray-800 '>
                    {children}
                </section>
            </main>
        </>
    );
}