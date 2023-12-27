import { create } from "zustand";

export const useGiftsStore=create((set)=>{
    const getGiftsFromLocalStorage=()=>{
        const storedGifts=localStorage.getItem("gifts");
        return storedGifts 
            ? JSON.parse(storedGifts)
            : [];
    }

    const gifts=getGiftsFromLocalStorage();

    const addToGifts=(el)=>{
        set((state)=>{
            const {gifts}=state;
            const i=gifts.findIndex(gift=>gift.name==el.name);
            if (i!=-1){
                const newGiftList=structuredClone(gifts);
                newGiftList[i].qty+=el.qty;
                return {gifts:newGiftList}
            }
            return {gifts:[...gifts, el]}
        })
    }

    const deleteGift=(el)=>{
        set((state)=>{
            const {gifts}=state;
            const i=gifts.findIndex(gift=>gift.name==el.name);
            const newGiftList=structuredClone(gifts);
            newGiftList.splice(i,1);
            return {gifts:newGiftList};
        })
    }

    const deleteAllGifts=()=>{
        set(()=>{
            return {gifts:[]}
        })
    }

    const editGift=(el)=>{
        set((state)=>{
            const {gifts}=state;
            const i=gifts.findIndex(gift=>gift.id==el.id);
            const newGiftList=structuredClone(gifts);
            const img=el.img!=""
                ? el.img
                : "public/defaultgiftpic.jpeg"
            newGiftList[i]={
                name:el.name,
                qty:parseInt(el.qty),
                img: img,
                destination:el.destination
            }
            return {gifts:newGiftList}
        })
    }

    return {gifts, addToGifts, deleteGift, deleteAllGifts, editGift};
})