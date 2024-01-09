import { useEffect, useState } from "react";
import "./App.css";
import { useGiftsStore } from "./store/useGiftsStore";
import { Chip } from "./components/Chip";
import { Form } from "./components/Form";
import { PreviewModal } from "./components/PreviewModal";

export function App(){
    const [addForm, setAddForm]=useState(false);
    const [previewMode, setPreviewMode]=useState(false);
    const {gifts, deleteAllGifts}=useGiftsStore();
    const handleClosePreview=()=>{
        setPreviewMode(false);
    }
    useEffect(()=>{
        localStorage.setItem("gifts",JSON.stringify(gifts))
    },[gifts]);
    return (
        <main>
            <section className="giftsContainer">
                <h1>Regalos</h1>
                <button className="button" onClick={()=>setAddForm(true)}>
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
                {gifts.length>0 &&
                    <section className="isGiftsInfo">
                        <div className="total">
                            <p>Total: ${gifts.reduce((acc, gift)=>gift.price+acc,0)}</p>
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
            {addForm && 
                <Form closeModal={()=>setAddForm(false)} />
            }
            {previewMode &&
                <PreviewModal closeModal={handleClosePreview} />
            }
        </main>
    )
}