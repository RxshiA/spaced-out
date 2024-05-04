import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Highlights from '../components/landing/Highlights';

describe('Highlights component', () => {
  it('renders the component', () => {
    render(<Highlights />);
    expect(screen.getByText('Highlights')).toBeInTheDocument();
  });

  it('renders all highlight items', () => {
    render(<Highlights />);
    const items = screen.getAllByTestId('highlight-item');
    expect(items.length).toBe(6);
  });

  it('renders the correct title for each item', () => {
    render(<Highlights />);
    expect(screen.getByText('Dynamic Data')).toBeInTheDocument();
    expect(screen.getByText('Built for Space Enthusiasts')).toBeInTheDocument();
    expect(screen.getByText('User-Friendly Interface')).toBeInTheDocument();
    expect(screen.getByText('Innovative Features')).toBeInTheDocument();
    expect(screen.getByText('Reliable Data')).toBeInTheDocument();
    expect(screen.getByText('Detailed Astronomical Data')).toBeInTheDocument();
  });

  it('renders the correct description for each item', () => {
    render(<Highlights />);
    expect(screen.getByText('Our application dynamically fetches data from NASA APIs, providing you with the most up-to-date space information.')).toBeInTheDocument();
    expect(screen.getByText('Designed with space enthusiasts in mind, our application provides detailed astronomical data in a user-friendly format.')).toBeInTheDocument();
    expect(screen.getByText('Navigate through vast amounts of space data with our intuitive and easy-to-use interface.')).toBeInTheDocument();
    expect(screen.getByText('Stay ahead with features that set new standards, such as viewing images from the EPIC camera on board the DSCOVR spacecraft.')).toBeInTheDocument();
    expect(screen.getByText('Count on our application to provide reliable and accurate data, sourced directly from NASA.')).toBeInTheDocument();
    expect(screen.getByText('Enjoy meticulously crafted views of Near-Earth Objects (NEOs) and other astronomical events.')).toBeInTheDocument();
  });
}); 