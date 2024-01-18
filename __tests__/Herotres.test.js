


import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Herotres from '@/app/components/Herotres';

describe('Herotres component', () => {
    test('renders gallery heading', () => {
      render(<Herotres />);
      const headingElement = screen.getByText(/Gallery/i);
      expect(headingElement).toBeInTheDocument();
    });
  
    test('renders gallery description', () => {
      render(<Herotres />);
      const descriptionElement = screen.getByText(/Explora una colección seleccionada/i);
      expect(descriptionElement).toBeInTheDocument();
    });
  
    test('renders live link with correct image and label', () => {
      render(<Herotres />);
      const liveLink = screen.getByRole('link', { name: /live/i });
      const liveImages = screen.getAllByAltText('Photo by Minh Pham');
      const liveLabel = screen.getByText(/LIVE/i);
  
      expect(liveLink).toBeInTheDocument();
      expect(liveImages.length).toBeGreaterThanOrEqual(1);
  
      liveImages.forEach((image) => {
        expect(image).toBeInTheDocument();
      });
  
      expect(liveLabel).toBeInTheDocument();
    });
  
    test('renders covers link with correct image and label', () => {
      render(<Herotres />);
      const coversLink = screen.getByRole('link', { name: /covers/i });
      const coversImages = screen.getAllByAltText('Photo by Lorenzo Herrera');
      const coversLabel = screen.getByText(/COVERS/i);
  
      expect(coversLink).toBeInTheDocument();
      expect(coversImages.length).toBeGreaterThanOrEqual(1);
  
      coversImages.forEach((image) => {
        expect(image).toBeInTheDocument();
      });
  
      expect(coversLabel).toBeInTheDocument();
    });
  
    
  
    test('renders instruments link with correct image and label', () => {
      render(<Herotres />);
      const instrumentsLink = screen.getByRole('link', { name: /synth/i });
      const instrumentsImages = screen.getAllByAltText('Photo by Magicle');
      const instrumentsLabel = screen.getByText(/SYNTH/i);
  
      expect(instrumentsLink).toBeInTheDocument();
      expect(instrumentsImages.length).toBeGreaterThanOrEqual(1);
  
      instrumentsImages.forEach((image) => {
        expect(image).toBeInTheDocument();
      });
  
      expect(instrumentsLabel).toBeInTheDocument();
    });
  });