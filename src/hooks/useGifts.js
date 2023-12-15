import { useState } from "react"

export const useGifts=()=>{
    const [gifts, setGifts]=useState([]);

    const addToGifts=(el)=>{
        if (gifts.some(gift=>gift.name==el.name)){
            const i=gifts.findIndex(gift=>gift.name==el.name);
            const newGiftList=structuredClone(gifts);
            newGiftList[i].qty+=el.qty;
            return setGifts(newGiftList);
        }
        const newGiftList=[...gifts, el]
        setGifts(newGiftList);
    }

    const deleteGift=(el)=>{
        const i=gifts.findIndex(gift=>gift.name==el.name);
        const newGiftList=structuredClone(gifts);
        newGiftList.splice(i,1);
        setGifts(newGiftList);
    }

    const deleteAllGifts=()=>{
        setGifts([]);
    }

    return {gifts, addToGifts, deleteGift, deleteAllGifts}
}