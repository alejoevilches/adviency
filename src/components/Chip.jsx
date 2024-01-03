/* eslint-disable react/prop-types */
import { IconTrash } from "@tabler/icons-react";
import { IconEdit } from "@tabler/icons-react";
import { useState } from "react";
import { useGiftsStore } from "../store/useGiftsStore";
import { Form } from "./Form";
import "./Chip.css";

export function Chip({el}){
    const [editMode, setEditMode]=useState(false);
    const {deleteGift}=useGiftsStore();
    const handleCloseModal=()=>{
        setEditMode(false);
    }
    const handleEdit=()=>{
        setEditMode(true);
    }
    return (
        <li>
            <div className="leftSideChip">
                <img src={el.img} alt={el.name} />
                <div className="chipInfo">
                    <p>{el.name}</p>
                    <p>Cantidad: {el.qty}</p>
                    <p>Destinatario: {el.destination}</p>
                </div>
            </div>
            <section className="buttonContainer">
                <button tabIndex={2} className="deleteButton" onClick={()=>deleteGift(el)}><IconTrash /></button>
                <IconEdit tabIndex={2} className="iconEdit" onClick={handleEdit} />
            </section>
            
            {editMode &&
                <Form closeModal={handleCloseModal} id={el.id}/>
            }
        </li>
    )
}