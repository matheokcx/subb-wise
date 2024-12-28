'use client'

import { getCurrentUser } from "@/app/actions";
import React, { Suspense, useEffect, useState } from "react";

export default function page() {
    const [utilisateur, setUtilisateur] = useState<any>({});

    useEffect(() => {
        async function fetchUser() {
            const user = await getCurrentUser();
            setUtilisateur(user || { email: "" });
        }
        fetchUser();
    }, []);

    return (
        <>
            <Suspense fallback={<p>Chargement...</p>}>
                <form action={() => alert('Pas possible pour le moment.')} className='flex flex-col gap-10'>
                    <span>
                        <label htmlFor='mail'>Mail: </label>
                        <input type='text' name='mail' defaultValue={utilisateur?.email || ""} className='md:w-1/3 h-10 rounded-lg border-2 border-[#7a59bb] px-4' />
                    </span>
                    <span>
                        <label htmlFor='tel'>Tel: </label>
                        <input type='phone' name='tel' defaultValue={utilisateur?.phone || ''} className='md:w-1/3 h-10 rounded-lg border-2 border-[#7a59bb] px-4' />
                    </span>
                    <button type='submit' className='w-1/2 md:w-1/6 h-12 bg-black text-white font-bold rounded-lg'>Enregistrer</button>
                </form>
            </Suspense>
        </>
    );
}