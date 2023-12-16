import { IconGift, IconTrash } from "@tabler/icons-react";
import "./App.css";
import { useGifts } from "./hooks/useGifts";
import { useModal } from "./hooks/useModal";
import { Modal } from "./components/Modal";
import { Chip } from "./components/Chip";

export function App(){
    const {gifts, addToGifts, deleteGift, deleteAllGifts}=useGifts();
    const {modals, setModals}=useModal();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.target);
        if (data.get("name")==""){
            return setModals({type:"emptyGift"})
        }
        const img=data.get("link") 
            ? data.get("link")
            : "https://blog.homedepot.com.mx/wp-content/uploads/2021/12/ideasderegalo1.jpg"
        addToGifts({
            name:data.get("name"),
            link:img,
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
                            <Chip el={el} key={el.name} />
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