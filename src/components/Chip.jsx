import { IconTrash } from "@tabler/icons-react";
import "./Chip.css";
import { useGiftsStore } from "../store/useGiftsStore";

/* eslint-disable react/prop-types */
export function Chip({el}){
    const {deleteGift}=useGiftsStore();
    return (
            <li>
                <div className="leftSideChip">
                    <img src={el.link} alt={el.name} />
                    <div className="chipInfo">
                        <p>{el.name}</p>
                        <p>Cantidad: {el.qty}</p>
                        <p>Destinatario: {el.destination}</p>
                    </div>
                </div>
                <>
                    <button className="deleteButton" onClick={()=>deleteGift(el)}><IconTrash /></button>
                </>
            </li>
    )
}