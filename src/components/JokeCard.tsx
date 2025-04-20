'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { Joke } from '@/services/jokes.services';
import { Card, CardContent, IconButton, Typography, Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface Props {
  joke: Joke;
  isFavorite: boolean | null;
  onToggleFavorite: () => void;
}

export default function JokeCard({ joke, isFavorite, onToggleFavorite }: Props) {
  const [rating, setRating] = useState<number | null>(0);
  const storageKey = `joke-rating-${joke.id}`;

  useEffect(() => {
    if (!joke?.id) return;
    const stored = localStorage.getItem(`joke-rating-${joke.id}`);
    setRating(stored ? Number(stored) : 0);
  }, [joke.id]);

  const handleRatingChange = (_event: unknown, newValue: number | null) => {
    setRating(newValue);
    if (newValue !== null) {
      localStorage.setItem(storageKey, newValue.toString());
    }
  };

  return (
    <Card
      elevation={8}
      sx={{
        m: 4,
        borderRadius: 3,
        boxShadow: 3,
        bgcolor: 'white',
        transition: 'box-shadow 0.2s ease-in-out',
        '&:hover': {
          boxShadow: 6,
        },
      }}
    >
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-4">
          <Typography variant="h6" className="text-gray-800 font-semibold">
            Chuck Norris Joke
          </Typography>
          <IconButton onClick={onToggleFavorite} color="primary" aria-label="favorite">
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>

        <Typography
          variant="body1"
          className="text-gray-700 mb-4 leading-relaxed"
          data-testid="joke-text"
        >
          {joke.value}
        </Typography>

        <div className="flex items-center gap-2">
          <Typography variant="body2" className="text-sm text-gray-600">
            Rate this joke:
          </Typography>
          <Rating name={`joke-rating-${joke.id}`} value={rating} onChange={handleRatingChange} />
        </div>
      </CardContent>
    </Card>
  );
}
