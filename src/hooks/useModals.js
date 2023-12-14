import { useState } from "react"

const useModals=()=>{
    const [modals, setModals]=useState({type:null})

    return {modals}
}