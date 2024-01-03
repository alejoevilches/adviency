import { useEffect, useState } from "react"

export const useFetch=(url)=>{
    const [giftsSuggest, setGiftsSuggest]=useState(null);
    useEffect(()=>{
        fetch(url)
            .then(res=>res.json())
            .then(data=>setGiftsSuggest(data))
    })
    return {giftsSuggest};
}