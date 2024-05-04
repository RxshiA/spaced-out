import { useState, useEffect } from 'react';

const useFetchEpicImages = (year, month, day) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(`https://epic.gsfc.nasa.gov/api/natural/date/${year}-${month}-${day}`);
      const data = await response.json();

      const images = data.slice(0, 6).map(item => `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${item.image}.png`);
      setImages(images);
    };

    fetchImages();
  }, [year, month, day]);

  return images;
};

export default useFetchEpicImages;