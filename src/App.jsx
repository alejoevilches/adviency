import { IconTrash } from "@tabler/icons-react";
import "./App.css";
import { useGifts } from "./hooks/useGifts";
import { useModals } from "./hooks/useModals";
import { Modal } from "./components/Modal";


export function App(){
    const {gifts, addToGifts, deleteGift, deleteAllGifts}=useGifts();
    const {modals, setModals}=useModals();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const gift=e.target[0].value;
        if (gift==""){
            return setModals({type:"emptyGift"})
        }
        addToGifts(gift);
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
                            <li>
                                <p>{el}</p>
                            </li>
                            <button className="deleteButton" onClick={(el)=>deleteGift(el)}><IconTrash /></button>
                        </article>
                        )
                    })}
                </ul>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Ingresá tu regalo" />
                    <input type="number" name="qty" id="qty" />
                    <button className="button">
                        <span className="button-content">Agregar</span>
                    </button>
                </form>
                {gifts.length==0 &&
                    <p className="message">No seas Grinch y agregate un regalo! 🎄</p>
                }
                {gifts.length>0 &&
                    <button className="deleteAllButton button" onClick={deleteAllGifts}>
                        <span className="button-content">Eliminar todos</span>
                    </button>
                }
            </section>
            {modals.type=="emptyGift" && 
                <Modal>
                    <h1>No podes agregar regalos vacios en la lista. Papa Noel no va a entender que traerte!</h1>
                    <button className="button" onClick={()=>setModals({type:null})}>
                        <span className="button-content">Aceptar</span>
                    </button>
                </Modal>
            }
        </main>
    )
}