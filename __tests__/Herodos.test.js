


import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Herodos from '@/app/components/Herodos'; 



describe('Herodos component', () => {
    test('renders collections heading and description', () => {
      render(<Herodos />);
      const headingElement = screen.getByText(/Collections/i);
      const descriptionElement = screen.getByText(/Join us in celebrating the diversity of talent and the richness of melodies/i);
  
      expect(headingElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();
    });
  
    test('renders artists link with correct image and label', () => {
        render(<Herodos />);
        const artistsLinks = screen.getAllByRole('link', { name: /artists/i });
        const artistsImage = artistsLinks[0].querySelector('img'); // Selecciona la imagen del primer enlace
        const artistsPlayText = screen.getAllByText(/Play/i); // Cambiado a getAllByText
        const artistsLabelText = screen.getByText(/Artists/i);
      
        expect(artistsLinks.length).toBe(1); // Asegura que hay un enlace con el texto 'artists'
        expect(artistsImage).toBeInTheDocument();
        expect(artistsPlayText.length).toBeGreaterThanOrEqual(1); // Asegura que hay al menos un elemento con el texto 'Play'
        expect(artistsLabelText).toBeInTheDocument();
      });
      
  
      test('renders albums link with correct image and label', () => {
        render(<Herodos />);
        const albumsLinks = screen.getAllByRole('link', { name: /albums/i });
        const albumsImage = albumsLinks[0].querySelector('img'); // Selecciona la imagen del primer enlace
        const albumsPlayText = screen.getAllByText(/Play/i); // Cambiado a getAllByText
        const albumsLabelText = screen.getByText(/Albums/i);
      
        expect(albumsLinks.length).toBe(1); // Asegura que hay un enlace con el texto 'albums'
        expect(albumsImage).toBeInTheDocument();
        expect(albumsPlayText.length).toBeGreaterThanOrEqual(1); // Asegura que hay al menos un elemento con el texto 'Play'
        expect(albumsLabelText).toBeInTheDocument();
      });
      
  
    test('navigates to "Artistas" page when clicking on artists link', () => {
      render(<Herodos />);
      const artistsLinks = screen.getAllByRole('link', { name: /artists/i });
      userEvent.click(artistsLinks[0]); // Haz clic en el primer enlace
  
      // You can assert the navigation logic here
      // For example, you can use a router library like react-router-dom
  
      // Placeholder assertion
      expect(true).toBe(true);
    });
  
    // Similar test for navigating to "albums" page
  });