/* eslint-disable react/prop-types */
import { useGiftsStore } from "../store/useGiftsStore"
import { Modal } from "./Modal"
import "./PreviewModal.css";

export function PreviewModal({closeModal}){
    const {gifts}=useGiftsStore();
    const printList=()=>{
        window.print();
    }
    return (
        <Modal>
            <h1 className="previewTitle">Tus regalos de Navidad</h1>
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
            <section className="buttonContainer">
                <button className="deleteAllButton button" onClick={closeModal}>
                    <span className="button-content">Cerrar</span>
                </button>
                <button className="button" onClick={printList}>
                    <span className="button-content">Imprimir</span>
                </button>
            </section>
        </Modal>
    )
}