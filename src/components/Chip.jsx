/* eslint-disable react/prop-types */
import { useGiftsStore } from "../store/useGiftsStore"
import "./Chip.css"
import { IconEdit, IconTrash } from "@tabler/icons-react"
import { Form } from "./Form";
import { useState } from "react";

export function Chip({el}){
    const {deleteGift}=useGiftsStore();
    const [editMode, setEditMode]=useState(false);
    const closeEditModal=()=>{
        setEditMode(false);
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
                <>
                    <button className="deleteButton" onClick={()=>deleteGift(el)}><IconTrash /></button>
                    <IconEdit className="iconEdit" onClick={()=>setEditMode(true)} />
                </>
            </div>
            {editMode && 
                <Form closeModal={closeEditModal} editMode={editMode}/>
            }
        </li>
    )
}