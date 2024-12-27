import { deleteAbonnement } from "@/app/actions";
import BackButton from "@/app/composants/BackButton";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import React from "react";

export default async function page({ params, }: { params: Promise<{ idAbonne: string }> }) {

    const client = await createClient();
    const { data: abonnements } = await client.from('abonnements').select().eq('id', (await params).idAbonne);
    const abonnement = abonnements != null ? abonnements[0] : null;

    return (
        <>
            <BackButton />
            <div className="w-full h-full px-8 py-4 flex flex-col gap-16 justify-center items-center">
                <img src={"/" + abonnement.image} alt="Illustration de l'abonnement" className='rounded-xl' />
                <h2 className='text-2xl font-extrabold'>{abonnement.nom}</h2>
                <p>{abonnement.mensualite}€ | {abonnement.categorie}</p>
                <form action={deleteAbonnement} className='w-1/2'>
                    <input type='hidden' value={abonnement.id} name='idAbonnement' />
                    <button type='submit' className='bg-red-400 w-full h-12 rounded-xl text-white font-bold'>Enlever</button>
                </form>
            </div>
        </>
    );
}