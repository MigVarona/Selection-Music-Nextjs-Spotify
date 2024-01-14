// pages/index.js

"use client";
import { useEffect, useState } from 'react';
import unsplash from '../services/unsplash';

export default function LivePics() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await unsplash.get('/photos', {
          params: {
            query: 'nature', // Puedes ajustar la consulta según tus necesidades
          },
        });
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching photos from Unsplash:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div>
      <h1>Photos from Unsplash</h1>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.urls.small} alt={photo.description} />
          </li>
        ))}
      </ul>
    </div>
  );
}
