/* eslint-disable react/prop-types */
import { IconTrash, IconEdit } from "@tabler/icons-react"
import { useGiftsStore } from "../store/useGiftsStore";
import { useState } from "react";
import { Form } from "./Form";
import "./Chip.css";

export function Chip({el}){
    const {deleteGift}=useGiftsStore();
    const [editModal, setEditModal]=useState(false);
    const handleEdit=()=>{
        setEditModal(true);
    }
    const handleCloseModal=()=>{
        setEditModal(false);
    }
    return (
        <li>
            <section className="leftSideChip">
                <img src={el.img} alt={el.name} />
                <div className="chipInfo">
                    <p>{el.name}</p>
                    <p>Cantidad: {el.qty} - Valor: ${el.value}</p>
                    <p>Destinatario: {el.destination}</p>
                </div>
            </section>
            <section className="buttonContainer">
                <IconTrash tabIndex={2} className="iconEdit" onClick={()=>deleteGift(el)} />
                <IconEdit tabIndex={2} className="iconEdit" onClick={handleEdit} />
            </section>
            {editModal &&
                <Form closeModal={handleCloseModal} id={el.id} />
            }
        </li>
    )
}