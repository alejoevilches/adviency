import { useState } from "react"
import "./App.css"

export function App(){
    const [gifts, setGifts]=useState(["Camiseta de River", "Camperón de River", "Piluso de River"])
    return (
        <main>
            <h1>Regalos</h1>
            <ul>
                {gifts.map((el)=>{
                    return (
                        <li key={el}>
                            {el}
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}