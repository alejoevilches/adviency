import "./App.css";

export function App(){
    const {gifts}=useGiftsStore();
    return (
        <main>
            <section className="giftsContainer">
                <h1>Regalos</h1>
                <button className="button">
                    <span className="button-content">Agregar regalo</span>
                </button>
                <ul>
                    {}
                </ul>
            </section>
        </main>
    )
}