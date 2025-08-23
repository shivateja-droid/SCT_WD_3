# Quiz Game Application
Welcome to the Interactive Quiz Game, developed as part of my third task for the Web Development Internship at SkillCraft Technology! 🚀  
This project is a feature-rich quiz platform built with **React + Vite**, styled using **Tailwind CSS** and leveraging **React Bits** components and **hash-based routing** for seamless navigation.

## 🌟 Features

- **Multiple Question Types:**  
  Supports Single-Select, Multi-Select, and Fill-in-the-Blank (extendable) question formats.
- **Interactive UI:**  
  Responsive design using Tailwind CSS, with a modern look and feel.
- **Hash Routing:**  
  Enables easy navigation between different screens (Home, Instructions, Quiz, Score, etc.) using `react-router-dom` with hash-based URLs.
- **Score Tracking:**  
  Tracks and displays your score at the end of each quiz session.
- **Persistent State:**  
  Uses `localStorage` to save progress so you can resume or retry quizzes.
- **Reusable Components:**  
  Modular structure for easy maintenance and extensibility.
- **Leaderboard & Categories:**  
  Placeholder navigation for future category expansion and leaderboard integration.

## 🚀 Live Demo

Check out the live site: [https://shivateja-droid.github.io/SCT_WD_3/](https://shivateja-droid.github.io/SCT_WD_3/)

## 📁 Project Structure

```
SCT_WD_3/
├── src/
│   ├── components/
│   │   ├── Homescreen.jsx         # Home page with start button
│   │   ├── Instructions.jsx       # Quiz instructions and navigation
│   │   ├── Quizscreen.jsx         # Single-select quiz logic & UI
│   │   ├── Multipleques.jsx       # Multi-select quiz logic & UI
│   │   ├── Scorescreen.jsx        # Score summary screen
│   │   ├── Navbar.jsx             # Top navigation bar
│   │   └── Footer.jsx             # Page footer
│   ├── data/
│   │   ├── quiz.js                # Single-select questions
│   │   └── mulques.js             # Multi-select questions
│   ├── App.jsx                    # Main app routing
│   └── main.jsx                   # Entry point
├── public/
├── index.html                     # App root HTML
├── vite.config.js                 # Vite config (Tailwind, base path)
└── README.md
```

## 🖥️ Usage Instructions

1. **Home Screen:**  
   Click "Start Quiz" to begin.
2. **Instructions:**  
   Read through the steps. Choose between "Single correct answer" or "Multiple correct answers" quiz types.
3. **Quiz Screens:**  
   - For single-select: Choose one option per question.
   - For multi-select: Choose all correct options.
   - Click "Next Question" to proceed or "Submit quiz" to finish.
   - You must select an option before proceeding.
4. **Score Screen:**  
   View your score. Retry or return to home.

## ⚙️ Setup & Local Development

```bash
# Clone the repository
git clone https://github.com/shivateja-droid/SCT_WD_3.git
cd SCT_WD_3

# Install dependencies
npm install

# Start the development server
npm run dev

# For production build
npm run build
```

## 🛠️ Tech Stack

- **React** - UI Library
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router (HashRouter)** - Routing
- **React Bits** - Modular components

## 📌 Key Files & Logic

- **Quizscreen.jsx**: Handles single-select questions, option selection, score updates, and state persistence.
- **Multipleques.jsx**: Manages multi-select quizzes, correct answer logic, and feedback.
- **Instructions.jsx**: Explains quiz rules and lets users choose quiz types.
- **Scorescreen.jsx**: Displays final score and retry options.
- **Navbar.jsx**: Provides navigation across the app.

## 📝 Customization

- Add more question types by extending data files and corresponding components.
- Update styling via Tailwind utility classes in each component.
- Integrate backend or expand leaderboard and categories as needed.

## 🙏 Credits

Developed by [shivateja-droid](https://github.com/shivateja-droid)  
Intern at SkillCraft Technology

---

Enjoy testing your knowledge and have fun!  
Feel free to fork, contribute, or use this as a template for your own quiz projects.
