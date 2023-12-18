import "./App.css";
import { Chip } from "./components/Chip";
import { useGiftsStore } from "./store/useGiftsStore";
import { Form } from "./components/Form";
import { useEffect, useState } from "react";
import { Modal } from "./components/Modal";

export function App(){
    const {gifts, deleteAllGifts}=useGiftsStore(state=>({
        gifts:state.gifts,
        deleteAllGifts:state.deleteAllGifts
    }))

    const [giftModal, setGiftModal]=useState(false);
    const toggleModal=()=>{
        setGiftModal(!giftModal);
    }

    useEffect(() => {
    localStorage.setItem('giftlist', JSON.stringify(gifts));
    }, [gifts]);

    return (
        <main>
            <section className="giftsContainer">
                <h1>Regalos</h1>
                <button className="button" onClick={toggleModal}>
                    <span className="button-content">Agregar regalo</span>
                </button>
                <ul>
                    {gifts.map(el=>{
                        return(
                            <Chip el={el} key={el.name} />
                        )
                    })}
                </ul>
            {gifts.length==0 && 
                <p className="message">No seas Grinch y agregate un regalo! 🎄</p>
            }
            {gifts.length>0 &&
                <button 
                    className="deleteAllButton button" 
                    onClick={deleteAllGifts}>
                    <span className="button-content">Eliminar todos</span>
                </button>
            }
            {giftModal &&
                <Form toggleModal={toggleModal} />
            }
            </section>
        </main>
    )
}