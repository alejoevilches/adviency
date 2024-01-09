/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Form.css";
import { useGiftsStore } from "../store/useGiftsStore";
import { useFetch } from "../hooks/useFetch";
import { Modal } from "./Modal";

export function Form({el, id, closeModal}){
    const [emptyModal, setEmptyModal]=useState(false);
    const {addToGifts, editGift}=useGiftsStore();
    const {data:giftsIdeas}=useFetch("./src/mocks/giftsSuggest.json")
    const getRandomGift=()=>{
        const nameInput=document.getElementById("name");
        nameInput.value=giftsIdeas[Math.floor(Math.random() * (111 - 0 + 1)) + 0]
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.target);
        if (data.get("name")==""){
            return setEmptyModal(true)
        }
        const img=data.get("img")
            ? data.get("img")
            : "public/defaultgiftpic.jpeg";
        const gift={
            name:data.get("name"),
            img:img,
            destination:data.get("destination"),
            qty:parseInt(data.get("qty")),
            price:parseInt(data.get("price")*data.get("qty"))
        }
        if (id){
            editGift(gift, id);
            return closeModal();
        }
        addToGifts(gift)
        closeModal();
    }
    return (
        <Modal>
            <form onSubmit={handleSubmit}>
                <>
                    <input type="text" name="name" id="name" placeholder="Ingresá el regalo" defaultValue={el ? el.name : ""} />
                    <button className="button" type="button" onClick={getRandomGift}>
                        <span className="button-content">Regalo aleatorio</span>
                    </button>
                </>
                <input type="text" name="img" id="img" placeholder="Imagen del regalo" defaultValue={el && el.img!="public/defaultgiftpic.jpeg" ? el.img : ""} />
                <input type="number" name="qty" id="qty" placeholder="Cant" defaultValue={el ? el.qty : 1} />
                <input type="number" name="price" id="price" placeholder="Precio del regalo" defaultValue={el ? el.price : ""} />
                <input type="text" name="destination" id="destination" placeholder="¿Para quien es el regalo?" defaultValue={el ? el.destination : ""} />
                <button className="button" type="submit">
                    <span className="button-content">Agregar regalo</span>
                </button>
            </form>
            {emptyModal &&
                <Modal>
                    <p>No podés agregar un regalo vacio! Papa Noel no sabrá que regalarte!</p>
                    <button className="button">
                        <span className="button-content" onClick={()=>setEmptyModal(false)}>Aceptar</span>
                    </button>
                </Modal>
            }
        </Modal>
    )
}