import { useState } from "react"

export const useGiftList=()=>{
    const [giftList, setGiftList]=useState([]);
    const addToGiftList=(el)=>{
        const newGiftList=[...giftList, el];
        setGiftList(newGiftList);
    }
    const removeFromGiftList=(el)=>{
        const newGiftList=[...giftList];
        const i=newGiftList.indexOf(el);
        newGiftList.splice(i,1);
        setGiftList(newGiftList);
    }
    return {giftList, addToGiftList, removeFromGiftList}
}