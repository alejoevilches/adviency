import { IconGift, IconTrash } from "@tabler/icons-react";
import "./App.css";
import { useGifts } from "./hooks/useGifts";
import { useModals } from "./hooks/useModals";
import { Modal } from "./components/Modal";

export function App(){
    const {gifts, addToGifts, deleteGift, deleteAllGifts}=useGifts();
    const {modals, setModals, toggle}=useModals();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.target);
        if (data.get("name")==""){
            return setModals({type:"emptyGift"})
        }
        const gift={
            name:data.get("name"),
            qty:parseInt(data.get("qty"))
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
                                <button className="deleteButton" onClick={()=>deleteGift(el)}><IconTrash/></button>
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
            {modals.type=="emptyGift" &&
                <Modal onClick>
                    <p>Debes ingresar un regalo. Sino Papa Noel no sabrá que regalarte!</p>
                    <button className="button" onClick={toggle}>
                        <span className="button-content">Aceptar</span>
                    </button>
                </Modal>
            }
        </main>
    )
}