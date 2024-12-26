'use server'

import { createClient } from "@/utils/supabase/server";

export async function addAbonne(formData: FormData) {
    const nom = formData.get('nom');
    const dateInscription = formData.get('date_inscription');
    const client = await createClient();
    const { data: abonnements } = await client.from('abonnements').select().eq('nom', nom);
    if (!abonnements || abonnements.length === 0) {
        throw new Error(`Aucun abonnement trouvé avec le nom "${nom}".`);
    }
    const idAbonnement = abonnements[0].id;
    const id = (await client.auth.getUser()).data.user?.id;
    const { data, error } = await client.from('abonnes').insert([{
        iduser: id,
        idabonnement: idAbonnement,
        date_inscription: dateInscription
    }]);
}

export async function getCategories() {
    const client = await createClient();
    const { data, error } = await client.from('abonnements').select('categorie');

    if (error) return [];

    const uniqueCategories = Array.from(new Set(data?.map((item) => item.categorie)));
    return uniqueCategories;
}

export async function getAbonnements(cat: string) {
    const client = await createClient();
    const { data, error } = await client.from('abonnements').select().eq('categorie', cat);

    if (error) return [];

    return data;
}