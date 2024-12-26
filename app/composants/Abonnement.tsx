import { createClient } from "@/utils/supabase/server"
import Link from "next/link";

export default async function Abonnement({ idAbonnement }: { idAbonnement: any }) {
    const client = await createClient();
    const { data: abonnements } = await client.from('abonnements').select().eq('id', idAbonnement);
    const abonnement = abonnements != null ? abonnements[0] : null;

    return (
        <div className="w-1/6 px-8 py-4 flex flex-col gap-4 justify-center shadow-lg rounded-xl transition-all hover:-translate-y-2">
            <img src={"/" + abonnement.image} alt="Illustration de l'abonnement" className='h-[230px] rounded-xl' />
            <h2 className='text-xl font-bold'>{abonnement.nom}</h2>
            <p>${abonnement.mensualite} | {abonnement.categorie}</p>
            <button className='w-1/2 h-12 bg-[#b0e0e6] rounded-xl text-white font-bold transition-all hover:scale-105'><Link href={'/dashboard/' + abonnement.id + '/details'}>Voir plus</Link></button>
        </div>
    )
}