'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import jokesService, { Joke } from '@/services/jokes.services';
import JokeCard from '@/components/JokeCard';
import BottomNav from '@/components/BottomNav';
import { Button } from '@mui/material';


export default function Home() {
    const [joke, setJoke] = useState<Joke | null>(null);
    const [favorites, setFavorites] = useState<Joke[]>([]);

    useEffect(() => {
        fetchJoke();
        const saved = localStorage.getItem('favorites');
        if (saved) setFavorites(JSON.parse(saved));
    }, []);

    const fetchJoke = async () => {
        const j = await jokesService.getRandom();
        setJoke(j);
    };

    const toggleFavorite = () => {
        if (!joke) return;
        const isFav = favorites.some((favoriteJoke) => favoriteJoke.id === joke.id);
        const updated = isFav ? favorites.filter((favoriteJoke) => favoriteJoke.id !== joke.id) : [...favorites, joke];

        setFavorites(updated);
        localStorage.setItem('favorites', JSON.stringify(updated));
    };

    const isFavorite = joke && favorites.some((j) => j.id === joke.id);

    return (
        <div className="min-h-screen pb-20 px-4 pt-6 bg-white">
            <BottomNav />
            {joke && <JokeCard joke={joke} isFavorite={isFavorite} onToggleFavorite={toggleFavorite} />}
            <Button variant="contained" fullWidth className="mt-6" onClick={fetchJoke}>
                Another Joke
            </Button>
        </div>
    );
}
