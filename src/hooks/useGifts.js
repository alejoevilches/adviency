import { useEffect, useState } from "react"

export const useGifts=()=>{
    const getGiftsFromLocalStorage=()=>{
        const storedGifts=localStorage.getItem("giftlist")
        return storedGifts
            ? JSON.parse(storedGifts)
            : []
    }

    const [gifts, setGifts]=useState(getGiftsFromLocalStorage())

    const addToGifts=(el)=>{
        if (gifts.some(gift=>gift.name==el.name)){
            const i=gifts.findIndex(gift=>el.name==gift.name);
            const newGiftList=structuredClone(gifts);
            newGiftList[i].qty+=el.qty;
            return setGifts(newGiftList);
        }
        const newGiftList=[...gifts, el];
        setGifts(newGiftList);
    }

    const deleteGift=(el)=>{
        console.log(el)
        const i=gifts.indexOf(el);
        const newGiftList=structuredClone(gifts);
        newGiftList.splice(i,1);
        setGifts(newGiftList);
    }

    const deleteAllGifts=()=>{
        setGifts([]);
    }

    useEffect(()=>{
        localStorage.setItem("giftlist", JSON.stringify(gifts));
    },[gifts]);

    return {gifts, addToGifts, deleteGift, deleteAllGifts}
}