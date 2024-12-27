import { createClient } from "@/utils/supabase/server";
import React from "react";
import NavBar from "../composants/NavBar";
import { signOutAction } from "../actions";

export default async function page() {
    const client = await createClient();
    const utilisateur = (await client.auth.getUser()).data.user;

    return (
        <>
            <NavBar />
            <section className='w-full h-5/6 flex justify-center items-center'>
                <div className='w-3/4 h-3/4 py-8 px-4 border-4 border-gray-500 rounded-xl flex flex-col gap-8'>
                    <i className='text-black/50 text-sm'>Derniere connexion: {utilisateur?.last_sign_in_at}</i>
                    <p><u>Adresse mail:</u> {utilisateur?.email}</p>
                    <p><u>ID:</u> {utilisateur?.id}</p>
                    <p><u>Compte créé le:</u> {utilisateur?.created_at}</p>
                    <form action={signOutAction}><button type='submit' className='bg-black text-white font-bold rounded-lg w-1/2 md:w-1/6 h-12'>Se deconnecter</button></form>
                </div>
            </section>
        </>
    );
}