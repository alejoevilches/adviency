import "./App.css";
import { IconTrash } from "@tabler/icons-react";
import { useGifts } from "./hooks/useGifts";

export function App(){
    const {gifts, addGift, deleteGift, deleteAllGifts}=useGifts();
    const handleAddButton=(e)=>{
        e.preventDefault();
        const gift=e.target[0].value;
        addGift(gift);
    }
    return (
        <main>
            <section className="giftsContainer">
                <h1>Regalos</h1>
                <ul>
                    {gifts.map((el)=>{
                        return( 
                        <article key={el}>
                            <li>
                                {el}
                            </li>
                            <button className="deleteButton" onClick={()=>deleteGift(el)}><IconTrash /></button>
                        </article>
                        )
                    })}
                </ul>
                <form onSubmit={handleAddButton}>
                    <input type="text" placeholder="Ingresá tu regalo" />
                    <button className="button">
                        <span className="button-content">Agregar</span>
                    </button>
                </form>
                {gifts.length > 0 && 
                    <button className="button deleteAllButton" onClick={deleteAllGifts}>
                        <span className="button-content">Eliminar todo</span>
                    </button>
                }
            </section>
        </main>
    )
}