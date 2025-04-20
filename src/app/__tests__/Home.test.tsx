import React from 'react';
import { describe, it, vi, beforeEach, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from '../page';
import jokesService from '@/services/jokes.services';
import { Joke } from '@/services/jokes.services';

// Mock Joke
const mockJoke: Joke = {
  id: 'D0d1Nc6zQhu8Efb2q4s6_g',
  value: 'Chuck Norris can divide by zero.',
  url: 'https://api.chucknorris.io/jokes/D0d1Nc6zQhu8Efb2q4s6_g',
  icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
  created_at: '2020-01-05 13:42:23.484083',
  updated_at: '2020-01-05 13:42:23.484083',
};

// Mock joke service
vi.mock('@/services/jokes.services', () => ({
  default: {
    getRandom: vi.fn(() => Promise.resolve(mockJoke)),
  },
}));
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
  usePathname: () => '/',
}));

describe('Home', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('renders joke after fetching on mount', async () => {
    render(<Home />);
    expect(await screen.findByText(mockJoke.value)).toBeInTheDocument();
  });

  it('adds and removes joke from favorites', async () => {
    render(<Home />);
    const favoriteButton = await screen.findByLabelText('favorite');

    fireEvent.click(favoriteButton); // Add to favorites
    expect(JSON.parse(localStorage.getItem('favorites')!)).toHaveLength(1);

    fireEvent.click(favoriteButton); // Remove from favorites
    expect(JSON.parse(localStorage.getItem('favorites')!)).toHaveLength(0);
  });

  it('calls jokesService.getRandom when clicking "Another Joke"', async () => {
    render(<Home />);
    const button = await screen.findByRole('button', { name: /another joke/i });

    fireEvent.click(button);

    await waitFor(() => {
      expect(jokesService.getRandom).toHaveBeenCalledTimes(2); // 1 on mount, 1 on click
    });
  });
});
