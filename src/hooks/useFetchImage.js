import { useState, useCallback } from 'react';

const useFetchImage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchImage = useCallback(async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`https://images-api.nasa.gov/search?q=${query}`);
      const jsonres = await response.json();
      const data = jsonres.collection.items[0].links[0].href;
      setData(data);
      return data; 
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return [fetchImage, data, loading];
};

export default useFetchImage;