import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let responseData;

        if (url.includes('.json')) {
          const module = await import(url).catch((error) => {
            throw new Error(`Error al importar el archivo JSON: ${error.message}`);
          });

          responseData = module.default;
        } else {
          const response = await fetch(url).catch((error) => {
            throw new Error(`Error al hacer fetch de la URL: ${error.message}`);
          });

          responseData = await response.json().catch((error) => {
            throw new Error(`Error al parsear la respuesta JSON: ${error.message}`);
          });
        }

        setData(responseData);
      } catch (error) {
        console.error("Error al cargar los datos:", error.message);
      }
    };

    fetchData();
  }, [url]);

  return { data };
}
