import { useState } from "react";
import "./App.css";

export function App(){
    const [gifts, setGifts]=useState(["Campera de River", "Camiseta de River", "Pantalón de River"]);
    return (
        <main>
            <h1>Regalos</h1>
            <ul>
                {gifts.map(el=>{
                    return(
                        <li key={el}>{el}</li>
                    )
                })}
            </ul>
        </main>
    )
}