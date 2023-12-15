import { IconGift, IconTrash } from "@tabler/icons-react";
import "./App.css";
import { useGifts } from "./hooks/useGifts";
import { useModal } from "./hooks/useModal";
import { Modal } from "./components/Modal";

export function App(){
    const {gifts, addToGifts, deleteGift, deleteAllGifts}=useGifts();
    const {modals, setModals}=useModal();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.target);
        if (data.get("name")==""){
            return setModals({type:"emptyGift"})
        }
        addToGifts({
            name:data.get("name"),
            link:data.get("link"),
            qty:parseInt(data.get("qty"))
        })
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
                                    <div className="infoContainer">
                                        <img src={el.link} alt={el.name} />
                                    </div>
                                    <p>{el.name}</p>
                                    <p>Cantidad: {el.qty}</p>
                                </li>
                                <button className="deleteButton" onClick={()=>deleteGift(el)}><IconTrash /></button>
                            </article>
                        )
                    })}
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" id="name" placeholder="Ingresá tu regalo acá"/>
                        <input type="text" name="link" id="link" placeholder="Link de una foto"/>
                        <input type="number" name="qty" id="qty" defaultValue={1}/>
                        <button className="button">
                            <span className="button-content">Agregar</span>
                        </button>
                    </form>
                </ul>
                {gifts.length>0 &&
                    <button className="deleteAllButton button" onClick={deleteAllGifts}>
                        <span className="button-content">Eliminar todo</span>
                    </button>
                }
                {gifts.length==0 &&
                    <p className="message">No seas Grinch y agregate un regalo! 🎄</p>
                }
            </section>
            {modals.type=="emptyGift" &&
                <Modal>
                    <h2>No podes agregar un regalo vacio. Asi Papa Noel no va a saber que regalarte!</h2>
                    <button className="button" onClick={()=>setModals({type:null})}>
                        <span className="button-content">Aceptar</span>
                    </button>
                </Modal>
            }
        </main>
    )
}