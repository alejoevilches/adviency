import "./App.css";
import { useGiftsStore } from "./store/useGiftsStore";
import { Chip } from "./components/Chip";
import { useEffect, useState } from "react";
import { Form } from "./components/Form";


export function App(){   
    const {gifts, deleteAllGifts}=useGiftsStore();
    const [addModal, setAddModal]=useState(false);
    const handleAddModal=()=>{
        setAddModal(false);
    }

    useEffect(()=>{
        localStorage.setItem("gifts",JSON.stringify(gifts))
    },[gifts]);

    return (
        <main>
            <section className="giftsContainer">
                <h1>Regalos</h1>
                <button tabIndex={0} className="button" onClick={()=>setAddModal(true)}>
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
                <button className="deleteAllButton button" onClick={deleteAllGifts}>
                    <span className="button-content" tabIndex={2}>Eliminar todos</span>
                </button>
            }
            </section>
            {addModal &&
                <Form closeModal={handleAddModal}/>
            }
        </main> 
    )
}