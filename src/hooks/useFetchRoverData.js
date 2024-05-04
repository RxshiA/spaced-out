import { useState, useEffect, useRef } from 'react';
import api from '../api/api';

export function useFetchRoverData(selectedDate) {
  const [data, setData] = useState(null);
  const timeoutId = useRef(null);

  useEffect(() => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(async () => {
      try {
        if (selectedDate) { 
          const date = new Date(selectedDate);
          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          const day = date.getDate();

          const formattedDate = `${year}-${month}-${day}`;

          try {
            const response = await api.get(
              `mars-photos/api/v1/rovers/curiosity/photos?earth_date=${formattedDate}&api_key=${process.env.REACT_APP_NASA_API_KEY}`
            );
            setData(response.data.photos[0]);
          } catch (error) {
            if (error.response && error.response.status === 504) {
              console.error('Request timed out. Please try again later.');
            } else {
              console.error('Failed to fetch data:', error);
            }
          }
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    }, 1000); 
  }, [selectedDate]); 

  return data;
}