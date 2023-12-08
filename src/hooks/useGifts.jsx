import { useState } from "react"

export const useGifts=()=>{
    const [gifts, setGifts]=useState(["Hola"]);
    
    return {gifts}
}