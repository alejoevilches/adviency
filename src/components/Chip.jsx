/* eslint-disable react/prop-types */
import { IconEdit, IconTrash } from "@tabler/icons-react"
import "./Chip.css"
import { useGiftsStore } from "../store/useGiftsStore"
import { useState } from "react";
import { Form } from "./Form";

export function Chip({el}){
    const {deleteGift}=useGiftsStore();
    const [editModal, setEditModal]=useState(false);
    const handleEdit=()=>{
        setEditModal(true)
    }
    const closeEditModal=()=>{
        setEditModal(false);
    }
    return (
        <li>
            <section className="leftSideChip">
                <img src={el.img} alt={el.name} />
                <div className="chipInfo">
                    <p>{el.name}</p>
                    <p>Cantidad: {el.qty} - Precio: ${el.price}</p>
                    <p>Destinatario: {el.destination}</p>
                </div>
            </section>
            <section className="buttonContainer">
                <IconTrash tabIndex={2} className="iconEdit" onClick={()=>deleteGift(el)} />
                <IconEdit tabIndex={2} className="iconEdit" onClick={handleEdit} />
            </section>
        {editModal &&
            <Form id={el.id} closeModal={closeEditModal} />
        }
        </li>
    )
}