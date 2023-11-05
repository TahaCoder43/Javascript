// This is incomplete and buggy come fix this when your able to

"use client"

interface ResponseJson {
    data: {
        [key:string]:{
            code:string,
            value:number
        }
    },
    meta:{
        last_updated_at:string
    }
}

// interface formDict {
//     from:string,
//     to:string,
//     amount:number
// }

import React, { Dispatch, FormEvent, SetStateAction, useState, ChangeEvent} from "react"

const CurrencyAPI = require("@everapi/currencyapi-js")

function submitForm(event: FormEvent, setResult: Dispatch<SetStateAction<string>>): void {
    event.preventDefault()
    const client = new CurrencyAPI.default("");
    client.latest({
        base_currency: ,
        currencies: inputs.to
    }).then(function (webResponse: ResponseJson) {
        const result = webResponse["data"]["EUR"]["value"]
        setResult((result*inputs.amount).toString())
    })
}

// function changeState(event: ChangeEvent, inputs: formDict, setInputs:Dispatch<SetStateAction<formDict>>) {
//     if (event.target instanceof HTMLInputElement) {
//         const tempInputs: formDict = inputs;
//         // @ts-ignore
//         tempInputs[event.target.name] = event.target.value;
//         console.log("tempInputs", tempInputs);
//         setInputs(tempInputs);
//     }
// }

export default function Currency() {
    const [result, setResult] = useState("0")
    // const [inputs, setInputs]: [formDict, Dispatch<SetStateAction<formDict>>] = useState({
    //     from:"",
    //     to:"",
    //     amount:0
    // })
    return (
    <div>
        <form onSubmit={function(event) {submitForm(event, setResult)}}>
            <label>From:</label>
            <input type="text" name="from"/>
            <label>To:</label>
            <input type="text" name="to"/>
            <label>Amount:</label>
            <input type="number" name="amount"/>
            <input type="submit"/>
        </form>
        <div id="result">{result}</div>
    </div>
    )
}