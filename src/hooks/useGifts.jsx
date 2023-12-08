import { useState } from "react"

export const useGifts=()=>{
    const [gifts, setGifts]=useState(["Hola"]);

    const addGift=(el)=>{
        const newGiftList=[...gifts, el];
        setGifts(newGiftList);
    }

    const deleteGift=(el)=>{
        const newGiftList=structuredClone(gifts);
        const i=newGiftList.indexOf(el);
        newGiftList.splice(i,1);
        setGifts(newGiftList);
    }

    const deleteAllGifts=()=>{
        setGifts([]);
    }
    
    return {gifts, addGift, deleteGift, deleteAllGifts}
}