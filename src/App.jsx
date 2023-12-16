import "./App.css";
import { Chip } from "./components/Chip";
import { useGiftsStore } from "./store/useGiftsStore";
import { Form } from "./components/Form";

export function App(){
    const gifts=useGiftsStore(state=>state.gifts);
    console.log()

    return (
        <main>
            <section className="giftsContainer">
                <h1>Regalos</h1>
                <ul>
                    {gifts.map(el=>{
                        return(
                            <Chip el={el} key={el.name} />
                        )
                    })}
                </ul>
            <Form />
            </section>
        </main>
    )
}