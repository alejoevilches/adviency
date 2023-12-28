/* eslint-disable react/prop-types */
import { useState } from "react";
import { useGiftsStore } from "../store/useGiftsStore";
import "./Form.css";
import { Modal } from "./Modal";

export function Form({closeModal, editMode}){
    const {addToGifts, editGift}=useGiftsStore();
    const [emptyGiftModal, setEmptyGiftModal]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.target);
        const img=data.get("img")
            ? data.get("img")
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
            : addToGifts(gift)
        closeModal();
    }
    return (
        <Modal>
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