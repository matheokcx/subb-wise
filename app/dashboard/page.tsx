import { createClient } from "@/utils/supabase/server";
import Abonnement from "../composants/Abonnement";
import Link from "next/link";
import NavBar from "../composants/NavBar";

export default async function page() {
    const client = await createClient();
    const currentUser = (await client.auth.getUser()).data.user;
    const { data: abonnements } = await client.from('abonnes').select('idabonnement').eq('iduser', currentUser?.id);

    return (
        <>
            <NavBar />
            <div className='w-full h-5/6 pt-16 px-8'>
                <div className='flex flex-wrap justify-center gap-16'>
                    {abonnements?.map((e: any) => <Abonnement key={e.idabonnement} idAbonnement={e.idabonnement} />)}
                </div>
            </div>
        </>
    );
}