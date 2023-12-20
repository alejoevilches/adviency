import { create } from "zustand";

export const useGiftsStore=create((set)=>{
    const getGiftsFromLocalStorage=()=>{
        const storedGifts=localStorage.getItem("gifts");
        return storedGifts
            ? JSON.parse(storedGifts)
            : [];
    }

    const gifts=getGiftsFromLocalStorage();
    console.log(gifts);

    const addToGifts=(el)=>{
        set((state)=>{
            const {gifts}=state;
            const i=gifts.findIndex(gift=>gift.name==el.name)
            if (i!=-1){
                const newGiftList=structuredClone(gifts);
                newGiftList[i].qty+=el.qty;
                return {gifts:newGiftList};
            }
            return {gifts:[...gifts, el]}
        })
    }

    const deleteGift=(el)=>{
        set((state)=>{
            const {gifts}=state;
            const i=gifts.findIndex(gift=>gift.name==el.name);
            const newGiftList=structuredClone(gifts);
            console.log(i);
            newGiftList.splice(i,1);
            return{gifts:newGiftList}
        })
    }

    const deleteAllGifts=()=>{
        set({
            gifts:[]
        })
    }

    return {gifts, addToGifts, deleteAllGifts, deleteGift};
})