"use client";

import { useEffect, useState } from "react";
import { Joke } from "@/services/jokes.service";
import JokeCard from "@/components/JokeCard";
import BottomNav from "@/components/BottomNav";

export default function Favorites() {
  const [favorites, setFavorites] = useState<Joke[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  const removeFavorite = (id: string) => {
    const updated = favorites.filter((j) => j.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen pb-20 px-4 pt-6 bg-white">
      <h2 className="text-xl font-semibold text-center mb-4">Your Favorites</h2>
      <div className="space-y-4">
        {favorites.map((joke) => (
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
      <BottomNav />
    </div>
  );
}
