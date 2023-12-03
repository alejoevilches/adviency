import { useState } from "react"
import "./App.css";

export function App(){
    const [gifts, setGifts]=useState(["Remera de River", "Campera de River", "Gorra de River"]);
    return(
        <main>
            <div className="giftsContainer">
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
            </div>
        </main>
    )
}