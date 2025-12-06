# ⭐ AnimeVerse — React + Redux Toolkit Project

A modern, responsive anime-themed product showcase built with React, Redux Toolkit, React Router, and Tailwind CSS.

This project fetches safe anime data from the Jikan API, REact slick, supports infinite scrolling, favorites, and includes a polished UI with routing, and global state management.

---

## 🚀 Features

- ### 🎉 Dynamic Hero Section  
  - Fetches a random anime image from Jikan API  
  - Displays a clean, 3D styled hero card

- ### 🛍️ Product Grid with Infinite Scroll  
  - Loads anime cards from API  
  - Auto-loads more items as user scrolls down  
  - Smooth transitions, responsive grid layout

- ### ⭐ Favorites System  
  - Click the heart icon ❤️ to add/remove items from favorites  
  - Favorites stored in Redux and persisted via localStorage  
  - Unique IDs for robust heart toggle (no favorites bugs!)

- ### 🕹️ Global State Management  
  - Built with Redux Toolkit (`productsSlice`, etc.)  
  - Async thunks for API calls  
  - Loading states, error handling, and more

- ### 📱 Responsive UI  
  - Fully responsive via Tailwind CSS  
  - Grid/flex layouts, custom backgrounds  
  - Mobile-first design, works on all devices

- ### 🧭 Routing  
  - Powered by React Router  
  - `/` Home  
  - `/about` About section  
  - `/contact` Contact page
  - `/favourites` Favourites page

---


## ⚙️ Tech Stack

- **Frontend:**  
  - React (Vite)  
  - Tailwind CSS  
  - React Router  
  - Redux Toolkit

---


## 🔗 Live Demo

Check out the live project here:  
[View on Vercel](https://practice-revesit.vercel.app/)

---

## 💻 Installation & Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

---

## 📂 Folder Structure

```
├── public/
│   └── Images
├── src/
│   ├── components/
│   ├── redux/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

- `features/` - Redux slices and async logic  
- `components/` - UI components (AnimeCard, Hero, etc.)  
- `pages/` - Route pages (Home, Favorites, About, Contact)

---

## ⚡ API

Data is fetched via the [Jikan API](https://docs.api.jikan.moe/):

- `GET /v4/anime` — fetches paginated anime data  
---

## 🏆 Credits

- [Jikan API](https://jikan.moe/)
- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 🤝 Contributing

Pull requests & stars are welcome!  
Feel free to fork, submit PRs, and open issues to help improve AnimeVerse.

---

> Designed & built with ❤️ using React, Redux Toolkit & Tailwind CSS.
