import { IconTrash } from "@tabler/icons-react";

export function Chip({el}){
    return (
            <li key={el.name}>
                <div className="leftSideChip">
                    <img src={el.link} alt={el.name} />
                    <div className="chipInfo">
                        <p>{el.name}</p>
                        <p>Cantidad: {el.qty}</p>
                    </div>
                </div>
                <>
                    <button className="deleteButton"><IconTrash /></button>
                </>
            </li>
    )
}