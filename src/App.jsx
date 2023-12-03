import { useState } from "react";
import "./App.css";

export function App(){
    const [gifts, setGifts]=useState(["Campera de River", "Camiseta de River", "Pantalón de River"]);
    return (
        <main>
            <div className="giftsContainer">
                <h1>Regalos</h1>
                <ul>
                    {gifts.map(el=>{
                        return(
                            <li key={el}>{el}</li>
                        )
                    })}
                    <form action="">
                        <input type="text" placeholder="Ingresá un regalo" />
                        <button className="button">
                            <span className="button-content">Agregar</span>
                        </button>
                    </form>
                </ul>
            </div>
        </main>
    )
}