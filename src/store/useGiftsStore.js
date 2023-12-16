import { create } from "zustand";

export const useGiftsStore=create((set, get)=>{
    return {
        gifts:[],
        addToGifts:(el)=>{
            const {gifts}=get();
            const newGiftList=[...gifts, el];
            set({
                gifts:newGiftList
            })
        },
        deleteGift:(el)=>{
            const {gifts}=get();
            const i=gifts.findIndex(gift=>gift.name==el.name);
            const newGiftList=structuredClone(gifts);
            newGiftList.splice(i,1);
            set({
                gifts:newGiftList
            })
        }
    }
})