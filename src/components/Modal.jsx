import "./Modal.css";

// eslint-disable-next-line react/prop-types
export function Modal({children}){
    return (
        <div className="modalOverlay">
            <div className="modalContainer">
                {children}
            </div>
        </div>
    )
}