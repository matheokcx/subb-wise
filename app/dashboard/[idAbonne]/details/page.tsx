import { cancelAbonnement, deleteAbonnement } from "@/app/actions";
import BackButton from "@/app/composants/BackButton";
import { createClient } from "@/utils/supabase/server";
import React from "react";

export default async function page({ params, }: { params: Promise<{ idAbonne: string }> }) {

    const client = await createClient();
    const { data: abonnements } = await client.from('abonnements').select().eq('id', (await params).idAbonne);
    const abonnement = abonnements != null ? abonnements[0] : null;

    return (
        <>
            <BackButton />
            <div className="w-full h-full flex flex-col items-center gap-10 pt-24">
                <img src={"/" + abonnement.image} alt="Illustration de l'abonnement" className='w-3/4 md:w-3/12 h-1/3 rounded-xl' />
                <h2 className='text-3xl font-extrabold'>{abonnement.nom}</h2>
                <h3 className='text-xl font-semibold'>{abonnement.categorie}</h3>
                <p>{abonnement.mensualite}€/mois</p>
                <form action={deleteAbonnement} className='w-1/2 flex justify-center'>
                    <input type='hidden' value={abonnement.id} name='idAbonnement' />
                    <button type='submit' className='bg-red-500/60 w-3/4 md:w-1/4 h-12 rounded-xl text-white font-bold transition-all hover:bg-red-500'>Enlever</button>
                </form>
                <form action={cancelAbonnement} className='w-1/2 flex justify-center'>
                    <input type='hidden' value={abonnement.id} name='idAbonnement' />
                    <button type='submit' className='bg-red-700/60 w-3/4 md:w-1/4 h-12 rounded-xl text-white font-bold transition-all hover:bg-red-700'>Se desabonner</button>
                </form>
            </div>
        </>
    );
}