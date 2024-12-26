import { createClient } from "@/utils/supabase/server";
import React, { useEffect, useState } from "react";
import Abonnement from "../composants/Abonnement";
import Link from "next/link";

export default async function page() {
    const client = await createClient();

    const currentUser = (await client.auth.getUser()).data.user;
    const { data: abonnements } = await client.from('abonnes').select('idabonnement').eq('iduser', currentUser?.id);

    return (
        <div>
            <button className='w-1/12 h-12 rounded-xl bg-black text-white font-bold'><Link href='/dashboard/ajouter'>Ajouter</Link></button>
            {abonnements?.map((e: any) => <Abonnement key={e.idabonnement} idAbonnement={e.idabonnement} />)}
        </div>
    );
}