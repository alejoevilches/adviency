import "./App.css";
import { useState } from "react";
import { IconTrash } from "@tabler/icons-react";

export function App(){
    const [gifts, setGifts]=useState([]);
    const handleDelete=(el)=>{
        const newGiftList=[...gifts];
        const i=newGiftList.indexOf(el);
        newGiftList.splice(i,1)
        setGifts(newGiftList);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const gift=e.target[0].value;
        const newGiftList=[...gifts, gift];
        setGifts(newGiftList);
        e.target[0].value="";
    }    
    return (
        <main>
            <section className="giftsContainer">
                <h1>Regalos</h1>
                <ul>
                    {gifts.map(el=>{
                        return (
                            <article key={el}>
                                <li key={el}>
                                    <p>{el}</p>
                                </li>
                                <button className="deleteButton" onClick={()=>handleDelete(el)}><IconTrash /></button>
                            </article>
                        )
                    })}
                </ul>
                <form action="post" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Ingresá tu regalo" />
                    <button type="submit" className="button">
                        <span className="button-content">Agregar</span>
                    </button>
                </form>
            </section>
        </main>
    )
}