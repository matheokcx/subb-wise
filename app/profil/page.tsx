import { createClient } from "@/utils/supabase/server";
import React, { Suspense } from "react";
import { signOutAction } from "../actions";

export default async function page() {
    const client = await createClient();
    const utilisateur = (await client.auth.getUser()).data.user;

    return (
        <>
            <Suspense fallback={<p>Chargement...</p>}>
                <i className='text-black/50 text-sm'>Derniere connexion: {utilisateur?.last_sign_in_at}</i>
                <p><u className='text-lg font-bold'>Adresse mail:</u> {utilisateur?.email}</p>
                <p><u className='text-lg font-bold'>ID:</u> {utilisateur?.id}</p>
                <p><u className='text-lg font-bold'>Compte créé le:</u> {utilisateur?.created_at}</p>
                <form action={signOutAction}>
                    <button type='submit' className='bg-black text-white font-bold rounded-lg w-1/2 md:w-1/6 h-14'>Se deconnecter</button>
                </form>
            </Suspense>
        </>
    );
}