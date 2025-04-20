import React from 'react';
import { describe, it, vi, beforeEach, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import JokeCard from '../JokeCard';
import { Joke } from '@/services/jokes.services';

export const mockJoke: Joke = {
  id: 'D0d1Nc6zQhu8Efb2q4s6_g',
  value: 'Chuck Norris can divide by zero.',
  url: 'https://api.chucknorris.io/jokes/D0d1Nc6zQhu8Efb2q4s6_g',
  icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
  created_at: '2020-01-05 13:42:23.484083',
  updated_at: '2020-01-05 13:42:23.484083',
};

describe('JokeCard', () => {
  const mockToggleFavorite = vi.fn();

  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('renders the joke text', () => {
    render(<JokeCard joke={mockJoke} isFavorite={false} onToggleFavorite={mockToggleFavorite} />);
    expect(screen.getByText(/Chuck Norris can divide by zero/i)).toBeInTheDocument();
  });

  it('shows the favorite border icon when not favorited', () => {
    render(<JokeCard joke={mockJoke} isFavorite={false} onToggleFavorite={mockToggleFavorite} />);
    expect(screen.getByLabelText('favorite')).toBeInTheDocument();
  });

  it('shows the filled favorite icon when favorited', () => {
    render(<JokeCard joke={mockJoke} isFavorite={true} onToggleFavorite={mockToggleFavorite} />);
    expect(screen.getByTestId('FavoriteIcon')).toBeInTheDocument();
  });

  it('calls onToggleFavorite when the icon is clicked', () => {
    render(<JokeCard joke={mockJoke} isFavorite={false} onToggleFavorite={mockToggleFavorite} />);
    fireEvent.click(screen.getByLabelText('favorite'));
    expect(mockToggleFavorite).toHaveBeenCalled();
  });

  it('loads initial rating from localStorage and updates it', () => {
    localStorage.setItem(`joke-rating-${mockJoke.id}`, '3');

    render(<JokeCard joke={mockJoke} isFavorite={false} onToggleFavorite={mockToggleFavorite} />);

    const ratingInputs = screen.getAllByRole('radio');
    expect(ratingInputs.length).toBeGreaterThan(0);

    fireEvent.click(ratingInputs[3]); // 4 stars
    expect(localStorage.getItem(`joke-rating-${mockJoke.id}`)).toBe('4');
  });
});
