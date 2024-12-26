import { createClient } from "@/utils/supabase/server"
import { deleteAbonnement } from "../actions";
import Link from "next/link";

export default async function Abonnement({ idAbonnement }: { idAbonnement: any }) {

    const client = await createClient();
    const { data: abonnements } = await client.from('abonnements').select().eq('id', idAbonnement);
    const abonnement = abonnements != null ? abonnements[0] : null;

    return (
        <div className="w-1/6 px-8 py-4 flex flex-col gap-4 justify-center border-2 border-gray-400 rounded-xl">
            <img src={"/" + abonnement.image} alt="Illustration de l'abonnement" className='rounded-xl' />
            <h2 className='text-xl font-bold'>{abonnement.nom}</h2>
            <p>${abonnement.mensualite} | {abonnement.categorie}</p>
            <Link href={'/dashboard/' + abonnement.id + '/details'}>Voir plus</Link>
            <form action={deleteAbonnement} className='w-1/2'>
                <input type='hidden' value={abonnement.id} name='idAbonnement' />
                <button type='submit' className='bg-red-400 w-full h-12 rounded-xl text-white font-bold'>Supprimer</button>
            </form>
        </div>
    )
}