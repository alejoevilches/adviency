import "./Modal.css";
import "../button.css"

export function Modal({children}){
    return (
        <>
            <section className="modalOverlay">
                <div className="modalContainer">
                    {children}
                </div>
            </section>
        </>
    )
}