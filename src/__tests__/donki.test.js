import '@testing-library/jest-dom';
import { render, fireEvent, waitFor, screen, act } from '@testing-library/react';
import Donki from '../components/landing/Donki';
import useFetchImage from '../hooks/useFetchImage';

jest.mock('../hooks/useFetchImage');

describe('Donki component', () => {
  beforeEach(() => {
    useFetchImage.mockReturnValue([
      () => Promise.resolve('https://example.com/image.jpg'),
      'https://example.com/image.jpg',
      false,
    ]);
  });

  it('renders without crashing', async () => {
    await act(async () => {
      render(<Donki />);
    });
    expect(screen.getByText('DONKI')).toBeInTheDocument();
  });

  it('displays the correct initial item', async () => {
    await act(async () => {
      render(<Donki />);
    });
    expect(screen.getAllByText('Coronal Mass Ejection')).toHaveLength(3);
    expect(screen.getAllByText('A large explosion of plasma and magnetic field from the Sun\'s corona into the heliosphere.')).toHaveLength(2);
  });
  
  it('changes the displayed item when a different chip is clicked', async () => {
    render(<Donki />);
    const solarFlareElements = screen.getAllByText('Solar Flare');
    const solarFlareChip = solarFlareElements.find(element => element.tagName.toLowerCase() === 'span');
    fireEvent.click(solarFlareChip);
    await waitFor(() => expect(screen.getAllByText('A relatively intense, localized emission of electromagnetic radiation in the Sun\'s atmosphere.')).toHaveLength(2));
  });

  it('does not change the displayed item when the same chip is clicked', async () => {
    render(<Donki />);
    const cmeElements = screen.getAllByText('Coronal Mass Ejection');
    const cmeChip = cmeElements.find(element => element.tagName.toLowerCase() === 'span');
    fireEvent.click(cmeChip);
    await waitFor(() => expect(screen.getAllByText('A large explosion of plasma and magnetic field from the Sun\'s corona into the heliosphere.')).toHaveLength(2));
  });

  it('does not display the image when the fetch is still loading', async () => {
    useFetchImage.mockReturnValue([
      () => Promise.resolve('https://example.com/image.jpg'),
      null,
      true,
    ]);

    render(<Donki />);
    expect(screen.queryByAltText('DONKI Image')).not.toBeInTheDocument();
  });

});