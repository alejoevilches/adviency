/* eslint-disable react/prop-types */
import { useState } from "react";
import { useGiftsStore } from "../store/useGiftsStore";
import { useFetch } from "../hooks/useFetch";
import { Modal } from "./Modal";
import "./Form.css";

export function Form({closeModal, id}){
    const [emptyGiftModal, setEmptyGiftModal]=useState(false);
    const {data:giftIdeas}=useFetch("./src/mocks/giftsSuggest.json");
    const {addToGifts, editGifts}=useGiftsStore();

    const generateRandomGift=()=>{
        const i=Math.floor(Math.random() * (111 - 0 + 1)) + 0;
        const nameInput=document.getElementById("name");
        return nameInput.value=giftIdeas[i];
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.target);
        const img=data.get("img")
            ? data.get("img")
            : "public/defaultgiftpic.jpeg";
        if (data.get("name")==""){
            return setEmptyGiftModal(true);
        }
        const gift={
            name:data.get("name"),
            qty:parseInt(data.get("qty")),
            destination:data.get("destination"),
            img:img,
            value:parseInt(data.get("value")*data.get("qty"))
        }
        if (id){
            editGifts(gift, id)
            return closeModal();
        }
        addToGifts(gift);
        closeModal();
    }
    return (
        <Modal>
            <form onSubmit={handleSubmit}>
                <>
                    <input type="text" name="name" id="name" placeholder="Ingresá tu regalo" />
                    <button className="button" type="button" onClick={generateRandomGift}>
                        <span className="button-content">Regalo aleatorio</span>
                    </button>
                </>
                <input type="text" name="img" id="img" placeholder="Imagen del regalo"/>
                <input type="number" name="qty" id="qty" min={1} defaultValue={1} />
                <input type="number" name="value" id="value" placeholder="Precio" />
                <input type="text" name="destination" id="destination" placeholder="¿Para quien es el regalo?" />
                <button className="button" type="submit">
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