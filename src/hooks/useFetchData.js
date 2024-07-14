import { useCallback, useEffect, useState } from "react";

export default function useFetchData(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [Error, setError] = useState(null);
  console.log(Error)
  const fetchTrips = useCallback(async () => {
    try {
      const res= await fetch(url)
      if(!res.ok){
       throw new Error(res.statusText)
      }
      const tripsData =await res.json()


      setData(tripsData);
      setIsLoading(false);
      setError(null)
    } catch (error) {

      setError("Could not fetch the Data");
      console.log(error.message)
      setIsLoading(true)
    }
  }, [url]);

  useEffect(() => {
    fetchTrips();
  }, [fetchTrips]);

  return { isLoading, data, Error };
}
