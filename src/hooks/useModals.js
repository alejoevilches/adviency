import { useState } from "react"

export const useModals=()=>{
    const [modals, setModals]=useState({type: null})

    return {modals, setModals}
}