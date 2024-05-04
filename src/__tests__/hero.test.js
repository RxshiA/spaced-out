import '@testing-library/jest-dom';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Hero from '../components/landing/Hero';
import useEmail from '../hooks/useEmail';
import useAstronomyPicture from '../hooks/useAstronomyPicture';

jest.mock('../hooks/useEmail');
jest.mock('../hooks/useAstronomyPicture');

describe('Hero component', () => {
  beforeEach(() => {
    useEmail.mockReturnValue({
      set: jest.fn(),
      submit: jest.fn(),
      get: '',
      submitted: false
    });

    useAstronomyPicture.mockReturnValue(null);
  });

  test('renders without crashing', async () => {
    render(<Hero />);
    const elements = await screen.findAllByText(/explore the/i);
    expect(elements.length).toBeGreaterThan(0);
  });

  test('calls useEmail and useAstronomyPicture hooks', () => {
    render(<Hero />);
    expect(useEmail).toHaveBeenCalled();
    expect(useAstronomyPicture).toHaveBeenCalled();
  });

  test('handles form submission', async () => {
    const { set, submit } = useEmail();
    render(<Hero />);
    fireEvent.change(screen.getByLabelText('Enter your email address', { selector: 'input' }), { target: { value: 'test@example.com' } });
    fireEvent.click(screen.getByText('Start now'));
    await waitFor(() => expect(set).toHaveBeenCalledWith('test@example.com'));
    await waitFor(() => expect(submit).toHaveBeenCalled());
  });

  test('renders form', () => {
    render(<Hero />);
    const formElement = screen.getByTestId('hero-form');
    expect(formElement).toBeInTheDocument();
  });
  
  test('renders email input field', () => {
    render(<Hero />);
    const inputElement = screen.getByPlaceholderText('Your email address');
    expect(inputElement).toBeInTheDocument();
  });
  
  test('renders submit button', () => {
    render(<Hero />);
    const buttonElement = screen.getByRole('button', { name: /start now/i });
    expect(buttonElement).toBeInTheDocument();
  });
  
  test('renders Terms & Conditions link', () => {
    render(<Hero />);
    const linkElement = screen.getByRole('link', { name: /terms & conditions/i });
    expect(linkElement).toBeInTheDocument();
  });
  
});