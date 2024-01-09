/* eslint-disable react/prop-types */
import { useGiftsStore } from "../store/useGiftsStore";
import { Modal } from "./Modal";
import "./PreviewModal.css"

export function PreviewModal({closeModal}){
    const {gifts}=useGiftsStore();
    return (
        <Modal>
            <h1 className="previewTitle">Regalos para Navidad</h1>
            <ul>
                {gifts.map(el=>{
                    return (
                        <li className="previewChip" key={el.id}>
                            <div className="imgContainer">
                                <img src={el.img} alt={el.name} />
                            </div>
                            <div className="previewInfo">
                                <p>{el.name} x {el.qty}</p>
                                <p>Para: {el.destination}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <button className="deleteAllButton button" onClick={closeModal}>
                <span className="button-content">Cerrar</span>
            </button>
        </Modal>
    )
}