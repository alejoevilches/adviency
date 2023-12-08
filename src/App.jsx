import { IconTrash } from "@tabler/icons-react";
import "./App.css";
import { useGifts } from "./hooks/useGifts";

function DeleteAllButton(){
    return (
        <button className="button deleteAllButton">
            <span>Eliminar todos</span>
        </button>
    )
}

export function App(){
    const {gifts, addGift}=useGifts();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const gift=e.target[0].value;
        addGift(gift);
        e.target[0].value=""
    }
    return (
        <main>
            <section className="giftsContainer">
                <h1>Regalos</h1>
                <ul>
                    {gifts.map(el=>{
                        return (
                            <article key={el}>
                                <li>
                                    <p>{el}</p>
                                </li>
                                <button className="deleteButton"><IconTrash /></button>
                            </article>
                        )
                    })}
                </ul>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Ingresá tu regalo" />
                    <button className="button">
                        <span className="button-content">Agregar</span>
                    </button>
                </form>
                {gifts.length > 0 && <DeleteAllButton />}
            </section>
        </main>
    )
}