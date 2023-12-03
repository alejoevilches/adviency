import { useState } from "react"

export function App(){
    const [gifts, setGifts]=useState(["Remera de River", "Campera de River", "Gorra de River"]);
    return(
        <main>
            <h1>Regalos</h1>
            <ul>
                {gifts.map(el=>{
                    return(
                        <li key={el}>
                            <p>{el}</p>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}