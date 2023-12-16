import { useGiftsStore } from "../store/useGiftsStore"

export function Form(){
    const addToGifts=useGiftsStore(state=>state.addToGifts);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.target);
        const gift={
            name:data.get("name"),
            img:data.get("link"),
            qty:data.get("qty")
        }
        addToGifts(gift);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" id="name" name="name" placeholder="Ingresá tu regalo" />
            <input type="text" id="link" name="link" placeholder="Link de la imagen" />
            <input type="number" name="qty" id="qty" defaultValue={1}/>
            <button className="button">
                <span className="button-content">Agregar</span>
            </button>
        </form>
    )
}