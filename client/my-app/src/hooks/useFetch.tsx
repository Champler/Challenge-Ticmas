import { useState, useEffect } from "react";

const useFetch = (pageNumber: number, search: string) => {
  const url = `http://localhost:3001/movie/getMovies?page=${pageNumber}&search=${search}`;

  const [data, setData] = useState({
    slug: "",
    results: ['hey'],
  });

  useEffect(() => {
   if (data.slug !== "") {
      const timeoutId = setTimeout(() => {
        const fetchApi = async () => {
          const response = await fetch(url)
          const responseJSON = await response.json();
            setData(responseJSON);
          };
          fetchApi();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [data.slug]);

  return { data, setData };
};

export default useFetch;
