import "./Modal.css"

export const Modal=({children})=>{
    return (
        <div className="modalOverlay">
            <section className="modalContainer">
                {children}
            </section>
        </div>
    )
}