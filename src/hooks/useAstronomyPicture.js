import { useState, useEffect } from 'react';
import api from '../api/api';

export default function useAstronomyPicture() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await api.get(
          `planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}` 
        );
        setData(result.data);
      };
  
      fetchData();
    }, []);
  
    return data;
  }