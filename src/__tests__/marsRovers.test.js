import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MarsRovers from '../components/landing/MarsRovers';
import { BrowserRouter as Router } from 'react-router-dom';

describe('MarsRovers component', () => {
    it('renders the component', () => {
        render(<Router><MarsRovers /></Router>);
        expect(screen.getByText('Mars Rovers')).toBeInTheDocument();
    });
    
    it('renders all rovers', () => {
        render(<Router><MarsRovers /></Router>);
        const rovers = screen.getAllByRole('heading', { level: 3 });
        expect(rovers.length).toBe(3);
    });

    it('renders the correct name for each rover', () => {
        render(<Router><MarsRovers /></Router>);
        expect(screen.getByText('Spirit')).toBeInTheDocument();
        expect(screen.getByText('Opportunity')).toBeInTheDocument();
        expect(screen.getByText('Curiosity')).toBeInTheDocument();
    }); 

    it('renders the correct description for each rover', () => {
        render(<Router><MarsRovers /></Router>);
        const descriptions = screen.getAllByText('Landed on Mars in 2004');
        expect(descriptions.length).toBeGreaterThan(0);
        descriptions.forEach(description => {
            expect(description).toBeInTheDocument();
        });
        expect(screen.getByText('Mission duration: 6 years')).toBeInTheDocument();
        expect(screen.getByText('Travelled over 7.7 km')).toBeInTheDocument();
        expect(screen.getByText('Mission duration: 15 years')).toBeInTheDocument();
        expect(screen.getByText('Travelled over 45 km')).toBeInTheDocument();
        expect(screen.getByText('Still operational')).toBeInTheDocument();
        expect(screen.getByText('Travelled over 23 km')).toBeInTheDocument(); 
    });
 
}); 