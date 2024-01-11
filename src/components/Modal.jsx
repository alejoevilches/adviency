// eslint-disable-next-line react/prop-types
import "./Modal.css"

export function Modal({children}){
    return (
        <div className="modalOverlay">
            <div className="modalContainer">
                {children}
            </div>
        </div>
    )
}