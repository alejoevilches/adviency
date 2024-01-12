/* eslint-disable react/prop-types */
import "./Form.css"
import { useGiftsStore } from "../store/useGiftsStore";
import { Modal } from "./Modal"
import { useState } from "react";

export function Form({el, id, closeModal}){
    const {editGift, addToGifts}=useGiftsStore();
    const [emptyModal, setEmptyModal]=useState(false);
    const getRandomGift=()=>{
        const giftsIdeas=["Peluche de osito", "Chocolates artesanales", "Sesión de spa", "Libro de cocina internacional", "Tarjeta regalo de una tienda de ropa", "Caja de bombones variados", "Pijama suave y cómoda", "Kit de herramientas para bricolaje", "Suscripción a plataforma de streaming", "Mochila resistente y elegante", "Set de tazas de café", "Kit de manualidades", "Auriculares inalámbricos", "Sesión de masajes relajantes", "Juego de sábanas de alta calidad", "Caja de té variado", "Vale para una experiencia gastronómica", "Puzzle desafiante", "Juego de copas de vino", "Estación meteorológica doméstica", "Caja de herramientas", "Suscripción a revista", "Vale para escape room", "Plantas de interior", "Curso de cocina profesional", "Vale para concierto", "Bolsa de deporte", "Reloj elegante", "Set de cuchillos de cocina", "Botella de vino premium", "Tabla de cortar de madera", "Curso de fotografía", "Manta suave y acogedora", "Vale para parapente", "Juego de cubiertos de plata", "Taza personalizada", "Kit de coctelería", "Kit de jardinería", "Suscripción a clases de yoga", "Vale para masaje facial", "Caja de herramientas eléctricas", "Cesta de productos gourmet", "Silla ergonómica de oficina", "Kit de maquillaje", "Vale para tour en bicicleta", "Set de pinceles artísticos", "Vale para sesión de fotos profesional", "Altavoz bluetooth portátil", "Kit de barbacoa", "Vale para parque de atracciones", "Espejo de maquillaje con luz", "Juego de cama de lujo", "Curso de idiomas", "Set de herramientas de jardinería", "Vale para cata de vinos", "Vale para restaurante exclusivo", "Taburete decorativo", "Set de velas aromáticas", "Juego de destornilladores", "Kit de modelado en arcilla", "Manta eléctrica", "Vale para crucero", "Set de sushi", "Kit de escritura de lujo", "Vale para paintball", "Silla de masaje", "Juego de toallas de baño", "Curso de guitarra", "Vale para taller de cocina", "Estación de carga inalámbrica", "Cofre de té premium", "Juego de dados de póker", "Kit de caricaturas personalizadas", "Vale para escape room virtual", "Caja de accesorios para vino", "Cámara de seguridad para hogar", "Set de herramientas de carpintería", "Sesión de entrenamiento personal", "Juego de platos elegantes", "Vale para bungee jumping", "Funda de almohada de seda", "Kit de construcción de modelos", "Vale para cena en crucero", "Set de acuarelas profesionales", "Máquina de hacer helados", "Curso de baile", "Vale para parque temático", "Vale para viaje en globo aerostático", "Set de miniaturas coleccionables", "Vale para excursión en kayak", "Caja de herramientas de mecánica", "Vale para concierto VIP", "Tablero de ajedrez de mármol", "Curso de escritura creativa", "Vale para esquí acuático", "Set de papelería de diseño", "Kit de acuario", "Vale para tour en helicóptero", "Set de herramientas de electricista", "Vale para escape room al aire libre", "Set de pinturas al óleo", "Vale para safari fotográfico", "Caja de herramientas de albañilería", "Vale para viaje en tren panorámico", "Set de instrumentos musicales para niños", "Vale para snorkel en arrecife", "Kit de grabación de podcasts", "Vale para rafting en aguas bravas", "Set de modelado de arcilla", "Vale para tour de avistamiento de aves", "Kit de experimentos científicos"]
        const nameInput=document.getElementById("name");
        nameInput.value=giftsIdeas[Math.floor(Math.random() * (111 - 0 + 1)) + 0];
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.target);
        if (data.get("name")==""){
            return setEmptyModal(true)
        }
        const img=data.get("img")
            ? data.get("img")
            : "./defaultgiftpic.jpeg";
        const gift={
            name:data.get("name"),
            img:img,
            qty:parseInt(data.get("qty")),
            price:parseInt(data.get("price")),
            destination:data.get("destination")
        }
        if (id){
            editGift(gift, id);
            return closeModal();
        }
        addToGifts(gift);
        closeModal();
    }
    return (
        <Modal>
            <form onSubmit={handleSubmit}>
                <>
                    <input type="text" name="name" id="name" placeholder="Ingresá el regalo" defaultValue={el ? el.name : ""} />
                    <button className="button" type="button" onClick={getRandomGift}>
                        <span className="button-content">Regalo aleatorio</span>
                    </button>
                </>
                <input type="text" name="img" id="img" placeholder="Imagen del regalo" defaultValue={el && el.img!="public/defaultgiftpic.jpeg" ? el.img : ""} />
                <input type="number" name="qty" id="qty" placeholder="Cant" defaultValue={el ? el.qty : 1} />
                <input type="number" name="price" id="price" placeholder="Precio del regalo" defaultValue={el ? el.price : ""} />
                <input type="text" name="destination" id="destination" placeholder="¿Para quien es el regalo?" defaultValue={el ? el.destination : ""} />
                <button className="button" type="submit">
                    <span className="button-content">Agregar regalo</span>
                </button>
            </form>
            {emptyModal &&
                <Modal>
                    <p>No podés agregar un regalo vacio! Papa Noel no sabrá que regalarte!</p>
                    <button className="button">
                        <span className="button-content" onClick={()=>setEmptyModal(false)}>Aceptar</span>
                    </button>
                </Modal>
            }
        </Modal>
    )
}