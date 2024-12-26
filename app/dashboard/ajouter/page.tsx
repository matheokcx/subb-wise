'use client'

import { useEffect, useState } from 'react';
import { addAbonne, getAbonnements, getCategories } from './actions';
import Link from 'next/link';

export default function AddSubscriptionPage() {
    const [categories, setCategories] = useState<string[]>([]);
    const [selectCat, setSelectCat] = useState<string>('');

    const [abonnements, setAbonnements] = useState<Array<any>>([]);
    const [selectSub, setSelectSub] = useState<string>('');

    useEffect(() => {
        async function fetchCategories() {
            const fetchedCategories = await getCategories();
            setCategories(fetchedCategories || []);
        }
        fetchCategories();
    }, []);

    useEffect(() => {
        async function fetchSubs() {
            const subs = await getAbonnements(selectCat);
            setAbonnements(subs || []);
        }
        fetchSubs();
    }, [selectCat]);

    return (
        <>
            <button className='w-1/12 h-12 rounded-xl bg-black text-white font-bold mb-10'><Link href='/dashboard'>Retour</Link></button>
            <form action={addAbonne} className='flex flex-col gap-8 items-center pt-4'>
                <h2 className='text-3xl font-bold'>Ajout d'un abonnement dans votre liste</h2>
                <select value={selectCat} onChange={(e: any) => setSelectCat(e.target.value)}>
                    {categories.map((category, index) => <option key={index} value={category} >{category}</option>)}
                </select>

                <select name='nom' value={selectSub} onChange={(e: any) => setSelectSub(e.target.value)}>
                    {abonnements.map((abonnement, index) => <option key={index} value={abonnement.nom}  >{abonnement.nom}</option>)}
                </select>

                <button type="submit">Ajouter</button>
            </form>
        </>
    );
}
