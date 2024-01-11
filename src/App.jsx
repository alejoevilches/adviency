import { useEffect, useState } from "react";
import "./App.css";
import { useGiftsStore } from "./store/useGiftsStore";
import { Form } from "./components/Form";
import { Chip } from "./components/Chip";
import { PreviewModal } from "./components/PreviewModal";
import { IconMusic, IconMusicOff } from "@tabler/icons-react";

export function App(){
    const [addModal, setAddModal]=useState(false);
    const [isMusic, setIsMusic]=useState(false);
    const [previewMode, setPreviewMode]=useState(false);
    const handleClosePreview=()=>{
        setPreviewMode(false);
    }
    const {gifts, deleteAllGifts}=useGiftsStore();
    useEffect(()=>{
        localStorage.setItem("gifts", JSON.stringify(gifts))
    },[gifts]);
    useEffect(()=>{
        const audio=document.getElementById("audio");
        isMusic
            ? audio.play()
            : audio.pause();
    },[isMusic])
    const handleMusic=()=>{
        setIsMusic(!isMusic);
    }
    return (
        <main>
            <section className="giftsContainer">
                <header>
                    <h1>Regalos</h1>
                    {isMusic 
                        ? <IconMusic onClick={handleMusic} /> 
                        : <IconMusicOff onClick={handleMusic}/> 
                    }
                </header>
                <audio autoPlay id="audio">
                    <source src="./public/music/song.mp3" type="audio/mp3" />
                </audio>
                <div className="content">
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
                    {gifts.length>0 &&
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
                </div>
            </section>
            {addModal &&
                <Form closeModal={()=>setAddModal(false)} />
            }
            {previewMode &&
                <PreviewModal closeModal={handleClosePreview} />
            }
        </main>
    )
}