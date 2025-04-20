// src/components/__tests__/BottomNav.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BottomNav from '../BottomNav';
import { describe, it, expect, vi } from 'vitest';

vi.mock('next/navigation', () => {
  return {
    useRouter: () => ({
      push: vi.fn(),
    }),
    usePathname: () => '/',
  };
});

describe('BottomNav', () => {
  it('renders both navigation buttons', () => {
    render(<BottomNav />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Favorites/i)).toBeInTheDocument();
  });

  it('navigates when clicking on Favorites', async () => {
    const user = userEvent.setup();
    render(<BottomNav />);
    await user.click(screen.getByText(/Favorites/i));
  });
});
