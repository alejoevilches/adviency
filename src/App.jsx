import { useState, useEffect } from "react";
import "./App.css";
import { IconMusic, IconMusicOff } from "@tabler/icons-react";
import { useGiftsStore } from "./store/useGiftsStore";
import { Chip } from "./components/Chip";
import { Form } from "./components/Form";
import { PreviewModal } from "./components/PreviewModal";
import Snowflakes from "magic-snowflakes";

export function App(){
    const [isMusic, setIsMusic]=useState(false);
    const snowflakes=new Snowflakes({
        color:"#ffffff",
        count:25
    });
    const [addModal, setAddModal]=useState(false);
    const [previewMode, setPreviewMode]=useState(false);
    const handleClosePreview=()=>{
        setPreviewMode(false);
    }
    const {gifts, deleteAllGifts}=useGiftsStore();
    const handleMusic=()=>{
        setIsMusic(!isMusic)
        const audio=document.getElementById(audio);
        isMusic
            ? audio.play()
            : audio.pause()
    }
    useEffect(()=>{
        localStorage.setItem("gifts", JSON.stringify(gifts))
    }, [gifts]);
    snowflakes.start();
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
                    <source src="/public/music/song.mp3" type="audio/mp3" />
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