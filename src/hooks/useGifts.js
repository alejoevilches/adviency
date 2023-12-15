import { useEffect, useState } from "react"

export const useGifts=()=>{
    const loadGiftsFromLocalStorage=()=>{
        const data=localStorage.getItem("giftlist");
        return data 
            ? JSON.parse(data)
            : []
    }

    const [gifts, setGifts]=useState(loadGiftsFromLocalStorage());

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

    useEffect(()=>{
        localStorage.setItem("giftlist", JSON.stringify(gifts))
    },[gifts]);

    return {gifts, addToGifts, deleteGift, deleteAllGifts}
}