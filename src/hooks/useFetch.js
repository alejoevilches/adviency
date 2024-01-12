import { useState } from "react"

export function useFetch(url) {
  const [data, setData] = useState();
  (url.includes('.json') ? import(url).then(m => m.default) : fetch(url)).then(setData)
  return {data}
}