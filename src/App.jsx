import "./App.css";
import { useGiftList } from "./hooks/useGiftList";

export function App(){
    const {giftList, addToGiftList, removeFromGiftlist}=useGiftList();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const gift=e.target[0].value;
        addToGiftList(gift);
    }
    return (
        <main>
            <section className="giftsContainer">
                <h1>Regalos</h1>
                <ul>
                    
                </ul>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Ingresá tu regalo" />
                    <button className="button">
                        <span className="button-content">Agregar</span>
                    </button>
                </form>
            </section>
        </main>
    )
}