import { IconTrash } from "@tabler/icons-react";
import "./App.css";
import { useGifts } from "./hooks/useGifts";
import { Modal } from "./components/Modal";
import { useModal } from "./hooks/useModal";

export function App(){
    const {gifts, addGift, deleteGift, deleteAllGifts}=useGifts();
    const {isModalOpen, setIsModalOpen}=useModal();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const gift=e.target[0].value;
        if (gifts.some(el=>el==gift)){
            setIsModalOpen({
              repeatedGift:true  
            });
        } else if(gift==""){
            return setIsModalOpen({
                emptyGift:true
            })
        }
        addGift(gift);
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
                                <button className="deleteButton" onClick={()=>deleteGift(el)}><IconTrash /></button>
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
                {gifts.length == 0 && <p className="message">No seas Grinch y agregate un regalo! 🎄</p>}
                {gifts.length > 0 && 
                    <button className="button deleteAllButton" onClick={deleteAllGifts}>
                        <span className="button-content">Eliminar todos</span>
                    </button>
                }
            </section>
            {isModalOpen.repeatedGift &&
                <Modal>
                    <h1>No podes agregar regalos repetidos! Intentá nuevamente</h1>
                    <button className="button" onClick={()=>{setIsModalOpen(!setIsModalOpen)}}>
                        <span className="button-content">Aceptar</span>
                    </button>
                </Modal>
            }
            {isModalOpen.emptyGift &&
                <Modal>
                    <h1>Parece que no agregaste ningun regalo! Probá escribiendo algo para que Papa Noel te lo traiga</h1>
                    <button className="button" onClick={()=>{setIsModalOpen(!setIsModalOpen)}}>
                        <span className="button-content">Aceptar</span>
                    </button>
                </Modal>
            }
        </main>
    )
}