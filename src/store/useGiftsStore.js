import { create } from "zustand";
import { v4 as uuid } from "uuid";

export const useGiftsStore=create((set)=>{
    const getGiftsFromLocalStorage=()=>{
        const storedGifts=localStorage.getItem("gifts");
        return storedGifts
            ? JSON.parse(storedGifts)
            : []
    }

    const gifts=getGiftsFromLocalStorage();

    const addToGifts=(el)=>{
        set((state)=>{
            const {gifts}=state;
            const i=gifts.findIndex(gift=>gift.id==el.id);
            if (i!=-1 && gifts[i].destination==el.destination){
                const newGiftList=structuredClone(gifts);
                newGiftList[i].qty+=el.qty;
                return {gifts:newGiftList};
            }
            const newGiftList=[...gifts, {
                id:uuid(),
                ...el
            }]
            return {gifts:newGiftList};
        })
    }

    const deleteGift=(el)=>{
        set((state)=>{
            const {gifts}=state;
            const i=gifts.findIndex(gift=>gift.id==el.id);
            const newGiftList=structuredClone(gifts);
            newGiftList.splice(i,1);
            return {gifts: newGiftList}
            
        })
    }

    const editGift=(el, id)=>{
        set((state)=>{
            const {gifts}=state;
            const i=gifts.findIndex(gift=>gift.id==id);
            const img=el.img
                ? el.img
                : "public/defaultgiftpic.jpeg";
            const newGiftList=structuredClone(gifts);
            newGiftList[i]={
                name:el.name,
                img:img,
                qty:parseInt(el.qty),
                destination:el.destination,
                price:parseInt(el.price*el.qty)
            };
            return {gifts:newGiftList}
        })
    }

    const deleteAllGifts=()=>{
        set({gifts:[]})
    }

    return {gifts, addToGifts, editGift, deleteGift, deleteAllGifts}
})