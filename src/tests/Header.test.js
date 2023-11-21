import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from '../components/Header';

test('renders social media icons with correct links', () => {
    const { getByTestId } = render(<Header />);

    // Querying social media icons by their data-testid
    const emailLink = getByTestId('social-link-0');
    const githubLink = getByTestId('social-link-1');
    const linkedinLink = getByTestId('social-link-2');

    // Test if links have correct href attributes
    expect(emailLink).toHaveAttribute('href', 'mailto:ezmarie97@gmail.com');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Ezz1997');
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/ezz-maree-9177b926b/');
  });


