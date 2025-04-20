import '../styles/global.css';
import { Inter } from 'next/font/google';
import MuiThemeProvider from '@/theme/MuiThemeProvider';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Chuck Norris Dashboard',
    description: 'Random Chuck Norris jokes with favorites',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <MuiThemeProvider>{children}</MuiThemeProvider>
            </body>
        </html>
    );
}
