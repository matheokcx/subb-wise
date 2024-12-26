import React from "react";
import { addAbonne, getCategories } from "./actions";
import { getCallSite } from "node:util";

export default function page() {

    getCategories();

    return (
        <>
            <form action={addAbonne} method='POST'>

            </form>
        </>
    );
}