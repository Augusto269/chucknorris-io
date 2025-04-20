"use client";

import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState(pathname);

  useEffect(() => {
    setValue(pathname);
  }, [pathname]);

  return (
    <Paper className="fixed bottom-0 left-0 right-0" elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
          router.push(newValue);
        }}
      >
        <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favorites" value="/favorites" icon={<FavoriteIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
