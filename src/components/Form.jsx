/* eslint-disable react/prop-types */
import { Modal } from "./Modal"
import "./Form.css";
import { useGiftsStore } from "../store/useGiftsStore";
import { useState } from "react";

export function Form({closeModal, children, editMode}){
    const [emptyGiftModal, setEmptyGiftModal]=useState(false);
    const {addToGifts, editGift}=useGiftsStore();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.target);
        const img=data.get("link")
            ? data.get("link")
            : "public/defaultgiftpic.jpeg"
        if (data.get("name")==""){
            return setEmptyGiftModal(true);
        }
        const gift={
            name:data.get("name"),
            img:img,
            qty:parseInt(data.get("qty")),
            destination:data.get("destination")
        }
        editMode
            ? editGift(gift)
            : addToGifts(gift);
        closeModal();
    }
        
    return (
        <Modal>
            {children}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="name" placeholder="Ingresá tu regalo" />
                <input type="text" name="link" id="link" placeholder="Foto del regalo" />
                <input type="number" name="qty" id="qty" min={1} defaultValue={1} />
                <input type="text" name="destination" id="destination" placeholder="Para quien es este regalo?" />
                <button className="button">
                    <span className="button-content">Agregar regalo</span>
                </button>
            </form>
            {emptyGiftModal &&
                <Modal>
                    <p>No podés agregar un regalo vacio! Papa Noel no sabrá que regalarte!</p>
                    <button className="button">
                        <span className="button-content" onClick={()=>setEmptyGiftModal(false)}>Aceptar</span>
                    </button>
                </Modal>
            }
        </Modal>
    )
}