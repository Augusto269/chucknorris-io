import "../styles/global.css";
import { Inter } from "next/font/google";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chuck Norris Dashboard",
  description: "Random Chuck Norris jokes with favorites",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
