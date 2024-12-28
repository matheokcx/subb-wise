import Link from "next/link";

export default function BackButton() {
    return (
        <>
            <Link href='/dashboard' className='w-[50px] absolute top-8 left-8 transition-all active:-translate-x-4'>
                <img src='/back.svg' alt='Bouton de retour' className='w-full' />
            </Link>
        </>
    )
}