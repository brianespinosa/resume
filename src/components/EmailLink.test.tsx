import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { EmailLink } from './EmailLink';

describe('EmailLink', () => {
  const props = { name: 'hello', domain: 'example', tld: 'com' };

  it('renders a mailto link with the assembled address', () => {
    render(<EmailLink {...props} />);
    const link = screen.getByRole('link', { name: 'hello@example.com' });
    expect(link).toHaveAttribute('href', 'mailto:hello@example.com');
  });

  it('displays the assembled email address as link text', () => {
    render(<EmailLink {...props} />);
    expect(screen.getByText('hello@example.com')).toBeInTheDocument();
  });
});
