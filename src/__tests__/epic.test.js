import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Epic from '../components/landing/Epic';
import useFetchEpicImages from '../hooks/useFetchEpicImages';

jest.mock('../hooks/useFetchEpicImages');

describe('Epic component', () => {
    it('renders the component', () => {
      useFetchEpicImages.mockReturnValue([]);
      render(<Epic />);
      expect(screen.getByText('Earth Polychromatic Imaging Camera')).toBeInTheDocument();
    });
  
    it('displays images fetched by the useFetchEpicImages hook', async () => {
        const mockImages = [
          'https://epic.gsfc.nasa.gov/archive/natural/2017/08/21/png/epic_1b_20170821074844.png',
          'https://epic.gsfc.nasa.gov/archive/natural/2017/08/21/png/epic_1b_20170821082344.png',
        ];
        useFetchEpicImages.mockReturnValue(mockImages);
      
        render(<Epic />);
      
        await waitFor(() => {
          const images = screen.getAllByAltText('Epic image');
          expect(images.length).toBe(mockImages.length);
        });
    });

    it('displays no images when useFetchEpicImages returns an empty array', async () => {
        useFetchEpicImages.mockReturnValue([]);

        render(<Epic />);

        await waitFor(() => {
            const images = screen.queryAllByAltText('Epic image');
            expect(images.length).toBe(0);
        });
    });

    it('displays only the first N images when useFetchEpicImages returns more than N images', async () => {
        const mockImages = new Array(10).fill('https://epic.gsfc.nasa.gov/archive/natural/2017/08/21/png/epic_1b_20170821074844.png');
        useFetchEpicImages.mockReturnValue(mockImages);

        render(<Epic />);

        await waitFor(() => {
            const images = screen.getAllByAltText('Epic image');
            expect(images.length).toBe(10); 
        }); 
    });

});