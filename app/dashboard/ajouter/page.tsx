'use client'

import { useEffect, useState } from 'react';
import { addAbonne, getAbonnements, getCategories } from './actions';
import Link from 'next/link';

export default function AddSubscriptionPage() {
    const [categories, setCategories] = useState<string[]>([]);
    const [selectCat, setSelectCat] = useState<string>('Films');

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
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <button className='w-1/3 md:w-1/12 h-12 rounded-xl bg-black text-white font-bold absolute top-8 left-8 transition-all hover:-translate-x-2'><Link href='/dashboard'>Retour</Link></button>
            <form action={addAbonne} className='w-10/12 md:w-2/5 border-2 border-gray-400 rounded-lg flex flex-col gap-8 items-center py-12'>
                <h2 className='text-xl md:text-3xl text-center md:text-left font-extrabold'>Ajout d'un abonnement dans votre liste</h2>
                <select value={selectCat} onChange={(e: any) => setSelectCat(e.target.value)} className='w-2/3 h-10 rounded-lg border-2 border-[#7a59bb] px-4'>
                    {categories.map((category, index) => <option key={index} value={category} >{category}</option>)}
                </select>
                <select name='nom' value={selectSub} onChange={(e: any) => setSelectSub(e.target.value)} className='w-2/3 h-10 rounded-lg border-2 border-[#7a59bb] px-4'>
                    {abonnements.map((abonnement, index) => <option key={index} value={abonnement.nom}  >{abonnement.nom}</option>)}
                </select>
                <button type="submit" className='w-1/4 h-12 rounded-xl bg-[#b0e0e6]/60 text-white font-bold transition-all hover:bg-[#b0e0e6] hover:-translate-y-2'>Ajouter</button>
            </form>
        </div>
    );
}
