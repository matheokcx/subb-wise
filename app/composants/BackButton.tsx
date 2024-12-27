import Link from "next/link";

export default function BackButton() {
    return (
        <>
            <Link href='/dashboard' className='w-[80px] absolute top-8 left-8'><img src='/back.svg' alt='Bouton de retour' className='w-full' /></Link >
        </>
    )
}