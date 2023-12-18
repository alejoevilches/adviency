import { useGiftsStore } from "../store/useGiftsStore";
import { useState } from "react";
import {Modal} from "./Modal.jsx"
import "./Form.css"

export function Form({toggleModal}){
    const addToGifts=useGiftsStore(state=>state.addToGifts);
    const [emptyGiftModal, setEmptyGiftModal]=useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.target);
        if (data.get("name")==""){
            return setEmptyGiftModal(true)
        }
        const img=data.get("link") 
            ? data.get("link")
            : "public/defaultgiftpic.jpeg"

        const gift={
            name:data.get("name"),
            img:img,
            qty:data.get("qty")
        }
        addToGifts(gift);
        toggleModal();
        e.target.reset();
    }

    return (
        <Modal>
            <h2 className="giftModalTitle">Agregá tu regalo!</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" id="name" name="name" placeholder="Ingresá tu regalo" />
                <input type="text" id="link" name="link" placeholder="Link de la imagen" />
                <input type="number" name="qty" id="qty" defaultValue={1} min={1}/>
                <button className="button">
                    <span className="button-content">Agregar</span>
                </button>
            {emptyGiftModal &&
            <Modal>
                <h2>No podes agregar un regalo vacío. Papa Noel no sabrá que regalarte</h2>
                <button className="button">
                    <span className="button-content" onClick={()=>setEmptyGiftModal(false)}>Aceptar</span>
                </button>
            </Modal>
            }
        </form>
        </Modal>    
    )
}