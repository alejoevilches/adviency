import { create } from "zustand";
import { v4 as uuid } from "uuid";

export const useGiftsStore=create((set)=>{
    const getGiftsFromLocalStorage=()=>{
        const storedGifts=localStorage.getItem("gifts");
        console.log(storedGifts);
        return storedGifts
            ? JSON.parse(storedGifts)
            : [];
    }

    const gifts=getGiftsFromLocalStorage();

    const addToGifts=(el)=>{
        set((state)=>{
            const {gifts}=state;
            const i=gifts.findIndex(gift=>gift.id==el.id);
            if (i!=-1 && gifts[i].destination==el.destination){
                const newGiftList=structuredClone(gifts);
                gifts[i].qty+=el.qty
                return {gifts: newGiftList}
            }
            const newGiftList=[...gifts, {
                ...el,
                id:uuid()
            }]
            return {gifts:newGiftList}
        })
    }

    const deleteGift=(el)=>{
        set((state)=>{
            const {gifts}=state;
            const i=gifts.findIndex(gift=>gift.id==el.id);
            const newGiftList=structuredClone(gifts);
            newGiftList.splice(i,1);
            return {gifts:newGiftList};
        })
    }

    const deleteAllGifts=()=>{
        set({gifts:[]})
    }

    const editGifts=(el, id)=>{
        set((state)=>{
            const {gifts}=state;
            const i=gifts.findIndex(gift=>gift.id==id);
            console.log(i);
            const newGiftList=structuredClone(gifts);
            const img=el.img!=""
                ? el.img
                : "public/defaultgiftpic.jpeg";
            newGiftList[i]={
                id:id,
                name:el.name,
                qty:parseInt(el.qty),
                destination:el.destination,
                img:img
            }
            return {gifts:newGiftList}
        })
    }


    return {gifts, addToGifts, deleteGift, deleteAllGifts, editGifts}
})