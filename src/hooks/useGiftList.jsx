import { useState } from "react"

export const useGiftList=()=>{
    const [giftList, setGiftList]=useState([]);
    const addToGiftList=(el)=>{
        const newGiftList=[...giftList, el];
        console.log(newGiftList);
        setGiftList(newGiftList);
    }
    const remoteFromGiftList=(el)=>{
        const i=giftList.indexOf(el);
        const newGiftList=giftList.splice(i,1);
        setGiftList(newGiftList);
    }
    return {giftList, addToGiftList, remoteFromGiftList}
}