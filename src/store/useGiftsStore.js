import { create } from "zustand";
import { v4 as uuid } from "uuid";

export const useGiftsStore=create((set)=>{
    const getGiftsFromLocalStorage=()=>{
        const storedGifts=localStorage.getItem("gifts");
        return storedGifts
            ? JSON.parse(storedGifts)
            : []
    };

    const gifts=getGiftsFromLocalStorage();

    const addToGifts=(el)=>{
        set((state)=>{
            const {gifts}=state;
            const i=gifts.findIndex(gift=>gift.name==el.name);
            if (i!=-1 && gifts[i].destination==el.destination){
                const newGiftList=structuredClone(gifts);
                newGiftList[i].qty+=el.qty;
                return {gifts: newGiftList};
            }
            const newGiftList=[...gifts, {
                ...el,
                id:uuid(),
            }];
            return {gifts: newGiftList}
        });
    }

    const deleteGift=(el)=>{
        set((state)=>{
            const {gifts}=state;
            console.log(el.id);
            const i=gifts.findIndex(gift=>gift.id==el.id);
            const newGiftList=structuredClone(gifts);
            newGiftList.splice(i,1);
            return {gifts: newGiftList};
        })
    }

    const deleteAllGifts=()=>{
        set({gifts:[]})
    }

    const editGift=(el, id)=>{
        set((state)=>{
            const {gifts}=state;
            const i=gifts.findIndex(gift=>gift.id==id);
            const newGiftList=structuredClone(gifts);
            const giftId=id;
            console.log(giftId);
            const img=el.img!=""
                ? el.img
                : "public/defaultgiftpic.jpeg"
            newGiftList[i]={
                id:giftId,
                name:el.name,
                qty:parseInt(el.qty),
                img: img,
                destination:el.destination
            }
            return {gifts:newGiftList}
        })
    }

    return {gifts, addToGifts, deleteAllGifts, deleteGift, editGift}
})