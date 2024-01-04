/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal } from "./Modal"
import "./Form.css"
import { useGiftsStore } from "../store/useGiftsStore";
import { useFetch } from "../hooks/useFetch";

export function Form({closeModal, id}){
    const {editGift, addToGifts}=useGiftsStore();
    const [emptyGiftModal, setEmptyGiftModal]=useState(false);
    const {data:giftsIdeas}=useFetch("./src/mocks/giftsSuggest.json")
    const getRandomGift=()=>{
        const nameInput=document.getElementById("name");
        nameInput.value=giftsIdeas[Math.floor(Math.random() * (111 - 0 + 1)) + 0];
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.target);
        const img=data.get("img")
            ? data.get("img")
            : "public/defaultgiftpic.jpeg";
        if (data.get("name")==""){
            setEmptyGiftModal(true);
        }
        const gift={
            name:data.get("name"),
            qty:parseInt(data.get("qty")),
            img:img,
            price:parseInt(data.get("qty")*data.get("price")),
            destination:data.get("destination")
        }
        if (id){
            editGift(gift, id);
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
                    <button className="button" type="button" onClick={getRandomGift}>
                        <span className="button-content">Regalo aleatorio</span>
                    </button>
                </>
                <input type="text" id="img" name="img" placeholder="Foto del regalo"/>
                <input type="number" name="qty" id="qty" min={1} defaultValue={1} />
                <input type="number" name="price" id="price" placeholder="Ingresá el valor"/>
                <input type="text" name="destination" id="destination" placeholder="¿Para quien es?" />
                <button type="submit" className="button">
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