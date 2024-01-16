import { render, screen } from '@testing-library/react';
import Hero from '@/app/components/Hero';  // Ajusta la ruta según tu estructura de archivos
import '@testing-library/jest-dom'

describe('Hero Component', () => {
    it('renders with the correct text content', () => {
      render(<Hero />);
      
      expect(screen.getByText('NEXT PLAY')).toBeInTheDocument();
      expect(screen.getByText('All the music you like in one place')).toBeInTheDocument();
    });
  
    it('renders with the correct structure and CSS classes', () => {
      render(<Hero />);
      
      const heroContainer = screen.getByTestId('hero-container'); // Asegúrate de agregar el atributo data-testid="hero-container" al contenedor principal en el componente Hero
      expect(heroContainer).toBeInTheDocument();
  
      // Verifica la presencia de elementos internos o clases específicas
      // Por ejemplo:
      expect(heroContainer.querySelector('.absolute')).toBeInTheDocument();
      expect(heroContainer.querySelector('.bg-opacity-50')).toBeInTheDocument();
    });
  
    it('renders text with the correct styles', () => {
      render(<Hero />);
      
      const nextPlayText = screen.getByText('NEXT PLAY');
      expect(nextPlayText).toHaveClass('text-4xl', 'font-bold', 'text-white', 'sm:text-5xl', 'md:text-6xl');
    });
  });