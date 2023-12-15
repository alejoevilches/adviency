import { useState } from "react"

export const useModals=()=>{
    const [modals, setModals]=useState({type:null})
    const toggle=()=>{
        setModals({type:null})
    };
    return {modals, setModals, toggle}
}