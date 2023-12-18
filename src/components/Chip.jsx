/* eslint-disable react/prop-types */
import { IconTrash } from "@tabler/icons-react"
import "./Chip.css"
import { useGiftsStore } from "../store/useGiftsStore"


export function Chip({el}){
    const deleteGift=useGiftsStore(state=>state.deleteGift);
    console.log(el.link);
    return (
        <li>
            <div className="leftSideChip">
                <img src={el.img} alt={el.name} />
                <div className="chipInfo">
                    <p>{el.name}</p>
                    <p>Cantidad: {el.qty}</p>
                </div>
            </div>
            <>
                <button className="deleteButton" onClick={()=>deleteGift(el)}>
                    <IconTrash />
                </button>
            </>
        </li>
    )
}