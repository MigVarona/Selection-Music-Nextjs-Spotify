"use client"
// components/Users.js

import React, { useState, useEffect } from 'react';

const Users = ({ desiredId }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/data.json');
        const jsonData = await response.json();
        const filteredData = jsonData.filter(item => item.id === desiredId);
        console.log('Datos filtrados:', filteredData);
        setData(filteredData);
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    };

    fetchData();
  }, [desiredId]);

  return (
    <div>
      <label>
        Seleccione un ID:
        <input
          type="number"
          value={desiredId}
          onChange={() => {}}
          // La función onChange no se utiliza aquí para evitar cambios no controlados
        />
      </label>

      {data !== null ? (
        <div>
          {data.map((item) => (
            <div key={item.id}>
              <h1>{item.name}</h1>
              <p>{item.email}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Users;
