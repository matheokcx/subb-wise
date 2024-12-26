import { createClient } from "@/utils/supabase/server";
import Abonnement from "../composants/Abonnement";
import Link from "next/link";

export default async function page() {
    const client = await createClient();
    const currentUser = (await client.auth.getUser()).data.user;
    const { data: abonnements } = await client.from('abonnes').select('idabonnement').eq('iduser', currentUser?.id);

    return (
        <>
            <header className='w-full h-1/6 flex justify-between items-center px-8 border-b-2 border-gray-500'>
                <img src='/logo.png' alt='Logo du site' className='w-[100px] h-[100px]' />
                <button className='w-1/12 h-14 rounded-2xl bg-[#7a59bb] text-white font-bold'><Link href='/dashboard/ajouter'>Ajouter</Link></button>
            </header>
            <div className='w-full h-5/6 pt-16 px-8'>
                <div className='flex flex-wrap gap-16'>
                    {abonnements?.map((e: any) => <Abonnement key={e.idabonnement} idAbonnement={e.idabonnement} />)}
                </div>
            </div>
        </>
    );
}