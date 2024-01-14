// pages/Artistas/[id].js

"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import Users from '../../components/Users';

const ArtistaPage = () => {
  const router = useRouter();
  const { id } = router.query || {}; // Usa {} como valor por defecto si router.query es undefined

  return (
    <div>
      <h1>Página de Artista</h1>
      <Users desiredId={id} />
    </div>
  );
};

export default ArtistaPage;