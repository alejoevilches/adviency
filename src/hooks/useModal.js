import { useState } from "react"

export const useModal=()=>{
    const [modals, setModals]=useState({type:null})

    return {modals, setModals}
}