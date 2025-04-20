# 🥋 Chuck Norris Jokes App

A simple Next.js app that fetches random Chuck Norris jokes from [api.chucknorris.io](https://api.chucknorris.io). Users can favorite, rate, and manage their own collection of jokes – all stored locally.

---

## 📸 Features

-   🤣 Fetch a random Chuck Norris joke
-   ⭐ Favorite jokes and view your collection
-   🔥 Rate jokes from 1 to 5 stars
-   🧹 Remove/unfavorite jokes
-   📊 Sort your favorites by rating
-   💾 Data persisted using LocalStorage
-   🎨 Styled with [Tailwind CSS](https://tailwindcss.com/) or [Material UI](https://mui.com/) (depending on implementation)

---

## 🚀 Tech Stack

-   [Next.js](https://nextjs.org/) (with TypeScript)
-   [Tailwind CSS](https://tailwindcss.com/) **or** [Material UI](https://mui.com/)
-   [Chuck Norris API](https://api.chucknorris.io/)
-   LocalStorage for client-side persistence

---

## 🛠 Setup Instructions

### 1. Clone the repository

````bash
git clone https://github.com/your-username/chuck-norris-jokes.git
cd chuck-norris-jokes


### 2. Install dependencies

```bash
npm install
````

### 3. Start the development server

```bash
npm run dev
```

### 4. Open your browser

Navigate to `http://localhost:3000` to view the app.

````
### 5. Build for production

```bash
npm run build
````

### 6. Start the production server

```bash
npm start
```

## 💡 Implementation Notes
	•	Jokes are fetched from https://api.chucknorris.io/jokes/random.
	•	User favorites are stored in LocalStorage under a key like favorites.
	•	Ratings are also saved locally and associated with joke IDs.
	•	Sorting is client-side only.
	•	The app is fully static – no backend or external DB.

## Folder Structure:
/src
  /components    # Reusable UI components
  /pages         # Next.js routes (index.tsx, favorites.tsx)
  /styles        # Global or component styles (if Tailwind not used)
  /utils         # LocalStorage handlers, helpers, etc.
