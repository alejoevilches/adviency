/* eslint-disable react/prop-types */
import { useGiftsStore } from "../store/useGiftsStore"
import { useState } from "react";
import "./Form.css"
import { Modal } from "./Modal"

export function Form({closeModal}){
    const {addToGifts}=useGiftsStore();
    const [emptyGiftModal, setEmptyGiftModal]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.target);
        if (data.get("name")==""){
            return setEmptyGiftModal(true);
        }
        const gift={
            name:data.get("name"),
            link:data.get("link"),
            qty:parseInt(data.get("qty")),
            destination:data.get("destination")
        }
        addToGifts(gift);
        closeModal();
    }

    return (
        <Modal>
            <h2 className="giftModalTitle">Agregá tu regalo</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="name" placeholder="Ingresá tu regalo" />
                <input type="text" name="link" id="link" placeholder="Foto del regalo"/>
                <input type="text" name="destination" id="destination" placeholder="Para quién es?" />
                <input type="number" name="qty" id="qty" defaultValue={1} min={1}/>
                <button className="button">
                    <span className="button-content">Agregar</span>
                </button>
            </form>
            {emptyGiftModal &&
                <Modal>
                    <p>No podes agregar un regalo vacio. Papa Noel no sabrá que regalarte</p>
                    <button className="button">
                        <span className="button-content" onClick={()=>setEmptyGiftModal(false)}>Aceptar</span>
                    </button>
                </Modal>
            }
        </Modal>
    )
}