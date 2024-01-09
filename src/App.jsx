import { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { useGiftsStore } from "./store/useGiftsStore";
import { Chip } from "./components/Chip";
import { PreviewModal } from "./components/PreviewModal";

export function App(){
    const [addModal, setAddModal]=useState(false);
    const [previewMode, setPreviewMode]=useState();
    const {gifts, deleteAllGifts}=useGiftsStore();
    const handleClosePreview=()=>{
        setPreviewMode(false);
    }
    useEffect(()=>{
        localStorage.setItem("gifts", JSON.stringify(gifts))
    }, [gifts])
    return (
        <main>
            <section className="giftsContainer">
                <h1>Regalos</h1>
                <button className="button" onClick={()=>setAddModal(true)}>
                    <span className="button-content">Agregar regalo</span>
                </button>
                <ul>
                    {gifts.map(el=>{
                        return (
                            <Chip key={el.id} el={el} />
                        )
                    })}
                </ul>
            {gifts.length==0 &&
                <p className="message">No seas Grinch y agregate un regalo! 🎄</p>
            }
            {gifts.length > 0 &&
                <section className="isGiftsInfo">
                    <div className="total">
                        <p>Total: ${gifts.reduce((acc,el)=>acc+el.price,0)}</p>
                    </div>
                    <section className="buttonContainer">
                        <button className="deleteAllButton button" onClick={()=>deleteAllGifts()}>
                            <span className="button-content">Eliminar todos</span>
                        </button>
                        <button className="button" onClick={()=>setPreviewMode(true)}>
                            <span className="button-content">Previsualizar lista</span>
                        </button>
                    </section>
                </section>
            }
            </section>
            {addModal &&
                <Form closeModal={()=>setAddModal(false)}/>
            }
            {previewMode &&
                <PreviewModal closeModal={handleClosePreview} />
            }
        </main>
    )
}