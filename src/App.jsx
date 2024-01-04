import "./App.css";
import { useGiftsStore } from "./store/useGiftsStore";
import { Chip } from "./components/Chip";
import { useEffect, useState } from "react";
import { Form } from "./components/Form";

export function App(){
    const {gifts}=useGiftsStore();
    const [addModal, setAddModal]=useState(false);
    const handleCloseModal=()=>{
        setAddModal(false);
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
                            <Chip el={el} key={el.id} />
                        )
                    })}
                </ul>
            {gifts.length==0 &&
                <p className="message">No seas Grinch y agregate un regalo! 🎄</p> 
            }
            {gifts.length>0 &&
                <div className="isGiftsInfo">
                    <div className="total">
                        <p>Total: ${gifts.reduce((acc, gift) => acc + gift.price, 0)}</p>
                    </div>
                    <button className="deleteAllButton button">
                        <span className="button-content">Eliminar todos</span>
                    </button>
                </div>
            }
            </section>
            {addModal &&
                <Form closeModal={handleCloseModal} />
            }
        </main>
    )
}