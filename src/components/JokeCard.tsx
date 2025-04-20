"use client";

import { Joke } from "@/services/jokes.services";
import { Card, CardContent, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface Props {
  joke: Joke;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export default function JokeCard({ joke, isFavorite, onToggleFavorite }: Props) {
  return (
    <Card className="w-full max-w-md mx-auto shadow-md">
      <CardContent>
        <div className="flex justify-between items-center mb-2">
          <Typography variant="h6">Chuck Norris Joke</Typography>
          <IconButton onClick={onToggleFavorite} color="primary">
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
        <Typography variant="body1">{joke.value}</Typography>
      </CardContent>
    </Card>
  );
}
