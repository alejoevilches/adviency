import { useState } from "react";

export const useModal=()=>{
    const [isModalOpen, setIsModalOpen]=useState({
        repeatedGift:false
    });

    return {isModalOpen, setIsModalOpen}
}