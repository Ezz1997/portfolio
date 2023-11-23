import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from '../components/Header';

test('renders social media icons with correct links', () => {
    const { getByTestId } = render(<Header />);

    // Querying social media icons by their data-testid
    const emailLink = getByTestId('social-link-0');
    const githubLink = getByTestId('social-link-1');
    const linkedinLink = getByTestId('social-link-2');
    const mediumLink = getByTestId('social-link-3');
    const stackoverflowLink = getByTestId('social-link-4');

    // Test if links have correct href attributes
    expect(emailLink).toHaveAttribute('href', 'mailto: hello@example.com');
    expect(githubLink).toHaveAttribute('href', 'https://github.com');
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com');
    expect(mediumLink).toHaveAttribute('href', 'https://medium.com');
    expect(linkedinLink).toHaveAttribute('href', 'https://stackoverflow.com');

  });


