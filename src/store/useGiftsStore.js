import { create } from "zustand";

export const useGiftsStore = create((set) => {
  const getGiftsFromLocalStorage = () => {
    const gifts = localStorage.getItem('giftlist');
    return gifts ? JSON.parse(gifts) : [];
  };

  const gifts = getGiftsFromLocalStorage();

  const addToGifts = (el) => {
    set((state) => ({
      gifts: [...state.gifts, el],
    }));
  };

  const deleteGift = (el) => {
    set((state) => ({
      gifts: state.gifts.filter((gift) => gift.name !== el.name),
    }));
  };

  const deleteAllGifts = () => {
    set({
      gifts: [],
    });
  };

  return {
    gifts,
    addToGifts,
    deleteGift,
    deleteAllGifts,
  };
});