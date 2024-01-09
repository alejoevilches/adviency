import { IconCopy, IconEdit } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { useGiftsStore } from "../store/useGiftsStore";
import { useState } from "react";
import { Form } from "./Form";
import "./Chip.css";

/* eslint-disable react/prop-types */
export function Chip({el}){
    const {deleteGift}=useGiftsStore();
    const [modalType, setModalType]=useState(null)
    const handleCloseModal=()=>{
        setModalType(null);
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
                <IconTrash className="iconEdit" onClick={()=>deleteGift(el)} />
                <IconEdit className="iconEdit" onClick={()=>setModalType("edit")} />
                <IconCopy className="iconEdit" onClick={()=>setModalType("copy")}/>
            </section>
        {modalType=="edit" &&
            <Form id={el.id} closeModal={handleCloseModal} />
        }
        {modalType=="copy" &&
            <Form el={el} closeModal={handleCloseModal} />
        }
        </li>
    )
}