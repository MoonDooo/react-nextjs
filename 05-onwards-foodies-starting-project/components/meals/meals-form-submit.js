'use client';

import { useFormStatus } from "react-dom";

export default function MealsFormSubmit(){
    const { pending } = useFormStatus();

    return(
        <button disabled={pending}>
            {pending? '눈치...':'등록하기'}
        </button>

    )
}