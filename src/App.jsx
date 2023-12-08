import { IconTrash } from "@tabler/icons-react";
import "./App.css";
import { useGifts } from "./hooks/useGifts";

export function App(){
    const {gifts}=useGifts();
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
                <form>
                    <input type="text" placeholder="Ingresá tu regalo" />
                    <button className="button">
                        <span className="button-content">Agregar</span>
                    </button>
                </form>
            </section>
        </main>
    )
}