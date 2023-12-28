/* eslint-disable react/prop-types */
import { IconTrash, IconEdit } from "@tabler/icons-react"
import { useGiftsStore } from "../store/useGiftsStore"
import { useState } from "react";
import { Form } from "./Form";
import "./Chip.css";

export function Chip({el}){
    const {deleteGift, editGift}=useGiftsStore();
    const [editMode, setEditMode]=useState(false);
    const closeEditModal=()=>{
        setEditMode(false);
    }
    const handleEditMode=(el)=>{
        setEditMode(true);
        editGift(el)
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
                <div className="buttonContainer">
                    <button 
                        className="deleteButton" 
                        onClick={()=>deleteGift(el)}
                        tabIndex={1}>
                        <IconTrash/>
                    </button>
                    <IconEdit 
                        className="iconEdit" 
                        onClick={()=>handleEditMode(el)}
                        tabIndex={1} />
                </div>
            {editMode && 
                <Form closeModal={closeEditModal} editMode={editMode} />
            }
        </li>
    )
}