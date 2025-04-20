import React from 'react';
import { describe, it, vi, beforeEach, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Favorites from '../favorites/page';
import { Joke } from '@/services/jokes.services';

vi.mock('next/navigation', () => ({
    useRouter: () => ({ push: vi.fn() }),
    usePathname: () => '/favorites',
}));

// 🔁 Sample data
const joke1: Joke = {
    id: 'j1',
    value: 'Chuck Norris counted to infinity.',
    url: '',
    icon_url: '',
    created_at: '',
    updated_at: '',
};

const joke2: Joke = {
    id: 'j2',
    value: 'Chuck Norris doesn’t read books. He stares them down until he gets the information he wants.',
    url: '',
    icon_url: '',
    created_at: '',
    updated_at: '',
};

describe('Favorites', () => {
    beforeEach(() => {
        localStorage.clear();
        vi.clearAllMocks();
    });

    it('renders favorites from localStorage', () => {
        localStorage.setItem('favorites', JSON.stringify([joke1]));
        render(<Favorites />);
        expect(screen.getByText(joke1.value)).toBeInTheDocument();
    });

    it('shows "No favorites yet" if list is empty', () => {
        localStorage.setItem('favorites', JSON.stringify([]));
        render(<Favorites />);
        expect(screen.getByText(/no favorites yet/i)).toBeInTheDocument();
    });

    it('removes a favorite when toggled', () => {
        localStorage.setItem('favorites', JSON.stringify([joke1]));
        render(<Favorites />);
        const favoriteBtn = screen.getByLabelText('favorite');
        fireEvent.click(favoriteBtn);
        expect(screen.queryByText(joke1.value)).not.toBeInTheDocument();
    });

    it('sorts favorites based on rating', () => {
        localStorage.setItem('favorites', JSON.stringify([joke1, joke2]));
        localStorage.setItem(`joke-rating-${joke1.id}`, '2');
        localStorage.setItem(`joke-rating-${joke2.id}`, '5');

        render(<Favorites />);

        const jokeTextsDesc = screen.getAllByTestId('joke-text');
        expect(jokeTextsDesc[0]).toHaveTextContent(joke2.value);
        expect(jokeTextsDesc[1]).toHaveTextContent(joke1.value);

        const toggleSortBtn = screen.getByRole('button', { name: /sort by lower rating/i });
        fireEvent.click(toggleSortBtn);

        const jokeTextsAsc = screen.getAllByTestId('joke-text');
        expect(jokeTextsAsc[0]).toHaveTextContent(joke1.value);
        expect(jokeTextsAsc[1]).toHaveTextContent(joke2.value);
    });
});
