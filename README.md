# 🥋 Chuck Norris Jokes App

A simple Next.js app that fetches random Chuck Norris jokes from [api.chucknorris.io](https://api.chucknorris.io). Users can favorite, rate, and manage their own collection of jokes – all stored locally.

---

## 📸 Features

- 🤣 Fetch a random Chuck Norris joke
- ⭐ Favorite jokes and view your collection
- 🔥 Rate jokes from 1 to 5 stars
- 🧹 Remove/unfavorite jokes
- 📊 Sort your favorites by rating
- 💾 Data persisted using LocalStorage
- 🎨 Styled with [Tailwind CSS](https://tailwindcss.com/) or [Material UI](https://mui.com/) (depending on implementation)

---

## 🚀 Tech Stack

- [Next.js](https://nextjs.org/) (with TypeScript)
- [Tailwind CSS](https://tailwindcss.com/) **or** [Material UI](https://mui.com/)
- [Chuck Norris API](https://api.chucknorris.io/)
- LocalStorage for client-side persistence

---

### 1. Clone the repository
```bash
git clone https://github.com/your-username/chucknorris-io.git  
cd chucknorris-io
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

Then open: http://localhost:3000

### 4. Build for production
```bash
npm run build
```

### 5. Start the production server
```bash
npm start
```

---

## 🧪 Running Tests

Run unit tests:
```bash
npm run test
```
Watch mode:
```bash
npm run test:watch
```

---

## 💡 Implementation Notes

    •	Jokes are fetched from https://api.chucknorris.io/jokes/random.
    •	User favorites are stored in LocalStorage under a key like favorites.
    •	Ratings are also saved locally and associated with joke IDs.
    •	Sorting is client-side only.
    •	The app is fully static – no backend or external DB.

## Folder Structure:

/src
  ├── app               # App directory for routing (Next.js 13+)
  │   ├── page.tsx      # Home page
  │   └── favorites      # Favorites page
  ├── components        # Reusable UI components (e.g., JokeCard, BottomNav)
  ├── services          # Joke API service
  ├── styles            # Global CSS (if used)
  ├── utils             # Helpers (e.g., rating, localStorage)
    __tests__             # Unit tests
