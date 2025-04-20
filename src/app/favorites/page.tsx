"use client";

import { useEffect, useState } from "react";
import { Joke } from "@/services/jokes.services";
import JokeCard from "@/components/JokeCard";
import BottomNav from "@/components/BottomNav";
import { IconButton, Tooltip } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function Favorites() {
  const [favorites, setFavorites] = useState<Joke[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  const removeFavorite = (id: string) => {
    const updated = favorites.filter((j) => j.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const getRating = (joke: Joke): number => {
    const stored = localStorage.getItem(`joke-rating-${joke.id}`);
    return stored ? Number(stored) : 0;
  };

  const sortedFavorites = [...favorites].sort((a, b) => {
    const ratingA = getRating(a);
    const ratingB = getRating(b);
    return sortOrder === "asc" ? ratingA - ratingB : ratingB - ratingA;
  });

  return (
    <div className="min-h-screen pb-20 px-4 pt-[72px] bg-white">
      <BottomNav />

      <div className="flex justify-between items-center mb-4 px-2">
        <h2 className="text-xl font-semibold">Your Favorites</h2>
        <Tooltip title={`Sort by ${sortOrder === "asc" ? "higher" : "lower"} rating`}>
          <IconButton
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            color="primary"
          >
            {sortOrder === "asc" ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
          </IconButton>
        </Tooltip>
      </div>

      <div className="space-y-4 px-2 pb-24">
        {sortedFavorites.map((joke) => (
          <JokeCard
            key={joke.id}
            joke={joke}
            isFavorite={true}
            onToggleFavorite={() => removeFavorite(joke.id)}
          />
        ))}
        {favorites.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No favorites yet</p>
        )}
      </div>
    </div>
  );
}
