import "./App.css";
import { useGiftList } from "./hooks/useGiftList";
import { IconTrash } from "@tabler/icons-react";

export function App(){
    const {giftList, addToGiftList, removeFromGiftList, deleteGiftList}=useGiftList();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const gift=e.target[0].value;
        addToGiftList(gift);
        e.target[0].value="";
    }
    return (
        <main>
            <section className="giftsContainer">
                <h1>Regalos</h1>
                <ul>
                    {giftList.map(el=>{
                        return (
                            <article key={el}>
                                <li>
                                    <p>{el}</p>
                                </li>
                                <button className="deleteButton" onClick={()=>removeFromGiftList(el)}><IconTrash/></button>
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
                {giftList.length>0 && 
                <button className="button deleteAllButton" onClick={()=>deleteGiftList()}>
                    <span className="button-content">Eliminar todo</span>
                </button>}
            </section>
        </main>
    )
}