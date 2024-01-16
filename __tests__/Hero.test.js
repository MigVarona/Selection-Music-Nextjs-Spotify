import { render, screen } from '@testing-library/react';
import Hero from '@/app/components/Hero';  
import '@testing-library/jest-dom'

describe('Hero Component', () => {
    it('renders with the correct text content', () => {
      render(<Hero />);
      
      expect(screen.getByText('NEXT PLAY')).toBeInTheDocument();
      expect(screen.getByText('All the music you like in one place')).toBeInTheDocument();
    });
  
    it('renders with the correct structure and CSS classes', () => {
      render(<Hero />);
      
      const heroContainer = screen.getByTestId('hero-container'); 
      expect(heroContainer).toBeInTheDocument();
  
      
      expect(heroContainer.querySelector('.absolute')).toBeInTheDocument();
      expect(heroContainer.querySelector('.bg-opacity-50, font-bold, text-xl')).toBeInTheDocument();
    });
  
    it('renders text with the correct styles', () => {
      render(<Hero />);
      
      const nextPlayText = screen.getByText('NEXT PLAY');
      expect(nextPlayText).toHaveClass('text-4xl', 'font-bold', 'text-white', 'sm:text-5xl', 'md:text-6xl');
    });
  });