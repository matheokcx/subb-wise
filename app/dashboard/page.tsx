'use client'

import { createClient } from "@/utils/supabase/server";
import React, { useEffect, useState } from "react";

export default function page() {
    const [abonnements, setAbonnements] = useState([]);

    useEffect(() => {
    }, [])

    return (
        <>
            <p>dashboard</p>
        </>
    );
}