/* eslint-disable @typescript-eslint/no-explicit-any */
// custom hook
import { useEffect, useState } from "react";

// #18 แยก Logic ออกจาก UI ด้วย Custom Hooks
export const useProduct = () => {
    const [product, setProduct] = useState<any[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
  
    useEffect(() => {
      fetchProduct();
    }, [])
  
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://api.codingthailand.com/api/course");
        const data = await response.json();
        setProduct(data.data);
      } catch (error) {
        setError(error as Error)
      } finally {
        setIsLoading(false);
      }
    }

    return { product, isLoading, error, refetch: fetchProduct }
}