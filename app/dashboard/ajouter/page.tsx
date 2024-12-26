'use client'

import { useEffect, useState } from 'react';
import { getCategories } from './actions';

export default function AddSubscriptionPage() {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        async function fetchCategories() {
            const fetchedCategories = await getCategories();
            setCategories(fetchedCategories || []);
        }

        fetchCategories();
    }, []);

    return (
        <form action="/add-abonnement" method="POST">
            <select id="categorie" name="categorie">
                {categories.map((category, index) => <option key={index} value={category} >{category}</option>)}
            </select>
            <button type="submit">Ajouter</button>
        </form>
    );
}
