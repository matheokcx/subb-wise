import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import React from "react";

export default async function page({ params, }: { params: Promise<{ idAbonne: string }> }) {

    const client = await createClient();
    const { data: abonnements } = await client.from('abonnements').select().eq('id', (await params).idAbonne);
    const abonnement = abonnements != null ? abonnements[0] : null;

    return (
        <>
            <Link href='/dashboard'>Retour</Link>
            <div className="w-1/6 px-8 py-4 flex flex-col gap-4 justify-center border-2 border-gray-400 rounded-xl">
                <img src={"/" + abonnement.image} alt="Illustration de l'abonnement" className='rounded-xl' />
                <h2 className='text-xl font-bold'>{abonnement.nom}</h2>
                <p>${abonnement.mensualite} | {abonnement.categorie}</p>
            </div>
        </>
    );
}