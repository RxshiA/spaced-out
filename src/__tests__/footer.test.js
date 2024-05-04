import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../components/landing/Footer';

describe('Footer component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders the logo', () => {
    const logo = screen.getByAltText(/logo of spaced out/i);
    expect(logo).toBeInTheDocument();
  });

  it('renders the resources section', () => {
    const resourcesText = screen.getByText(/Resources/i);
    expect(resourcesText).toBeInTheDocument();
  });

  it('renders the legal section', () => {
    const legalText = screen.getByText(/Legal/i);
    expect(legalText).toBeInTheDocument();
  });

  it('renders the privacy policy link', () => {
    const privacyPolicyLink = screen.getByText(/Privacy Policy/i);
    expect(privacyPolicyLink).toBeInTheDocument();
  });

  it('renders the terms of service link', () => {
    const termsOfServiceLink = screen.getByText(/Terms of Service/i);
    expect(termsOfServiceLink).toBeInTheDocument();
  });

  it('renders the copyright text', () => {
    const copyrightText = screen.getByText(/Copyright ©/i);
    expect(copyrightText).toBeInTheDocument();
  });

  it('renders the social media icons', () => {
    const twitterIcon = screen.getByLabelText(/X/i);
    const linkedInIcon = screen.getByLabelText(/LinkedIn/i);
    expect(twitterIcon).toBeInTheDocument();
    expect(linkedInIcon).toBeInTheDocument();
  });
});