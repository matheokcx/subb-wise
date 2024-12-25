import { createClient } from "@/utils/supabase/server";
import React, { useEffect, useState } from "react";
import Abonnement from "../composants/Abonnement";

export default async function page() {
    const client = await createClient();


    const { data: abonnements } = await client.from('abonnements').select();

    return (
        <>
            <div>{abonnements?.map((e: any) => <Abonnement e={e} />)}</div>
        </>
    );
}