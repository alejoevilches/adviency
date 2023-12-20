import "./App.css";
import { useGiftsStore } from "./store/useGiftsStore";
import { Chip } from "./components/Chip";
import { useEffect, useState } from "react";
import { Form } from "./components/Form";

export function App(){
   const {gifts, deleteAllGifts}=useGiftsStore() 
   const [addGiftModal, setAddGiftModal]=useState(false);
   const closeModal=()=>{
    setAddGiftModal(false);
   }

   useEffect(()=>{
    localStorage.setItem("gifts", JSON.stringify(gifts))
   }, [gifts])

   return (
    <main>
        <section className="giftsContainer">
            <h1>Regalos</h1>
            <button className="button" onClick={()=>setAddGiftModal(true)}>
                <span className="button-content">Agregar regalos</span>
            </button>
            <ul>
                {gifts.map(el=>{
                    return (
                        <Chip key={el.name} el={el} />
                    )
                })}
            </ul>
        {gifts.length>0 &&
            <button className="deleteAllButton button" onClick={deleteAllGifts}>
                <span className="button-content">Eliminar todo</span>
            </button>
        }
        {gifts.length==0 &&
            <p className="message">No seas Grinch y agregate un regalo! 🎄</p>
        }
        </section>
        {addGiftModal && 
            <Form closeModal={closeModal} />
        }
    </main>
   )
}