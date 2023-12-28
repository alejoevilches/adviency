/* eslint-disable react/prop-types */
import "./Modal.css";

export function Modal({children}){
    return (
        <div className="modalOverlay">
            <section className="modalContainer">
                {children}
            </section>
        </div>
    )
}