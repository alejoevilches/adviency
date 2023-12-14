import { IconGift, IconTrash } from "@tabler/icons-react";
import "./App.css";
import { useGifts } from "./hooks/useGifts";

export function App(){
    const {gifts, addToGifts, deleteGift, deleteAllGifts}=useGifts();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.target);
        const gift={
            name:data.get("name"),
            qty:data.get("qty")
        }
        addToGifts(gift);
        e.target.reset();
    }
    return (
        <main>
            <section className="giftsContainer">
                <h1>Regalos</h1>
                <ul>
                    {gifts.map(el=>{
                        return (
                            <article key={el.name}>
                                <li>
                                    <p>{el.name}</p>
                                    <p>Cantidad: {el.qty}</p>
                                </li>
                                <button className="deleteButton" onClick={(el)=>deleteGift(el)}><IconTrash/></button>
                            </article>
                        )
                    })}
                </ul>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" id="name" placeholder="Ingresá tu regalo"/>
                    <input type="number" name="qty" id="qty" defaultValue={1}/>
                    <button className="button">
                        <span className="button-content">Agregar</span>
                    </button>
                </form>
                {gifts.length==0 && <p className="message">No seas Grinch y agregate un regalo! 🎄</p>}
                {gifts.length>0 &&
                    <button className="deleteAllButton button" onClick={deleteAllGifts}>
                        <span className="button-content">Eliminar todo</span>
                    </button>
                }
            </section>
        </main>
    )
}