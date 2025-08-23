# Quiz Game Application

An interactive web-based quiz game built with React and Vite, featuring multiple quiz formats and a modern, responsive design.

## 🎯 About

This Quiz Game is a comprehensive web application that offers users an engaging way to test their knowledge across various topics. The application features two distinct quiz formats - single correct answer and multiple correct answers - making it versatile for different types of questions and learning scenarios.

## ✨ Features

### 🎮 Multiple Quiz Types
- **Single Answer Quiz**: Traditional quiz format with one correct answer per question
- **Multiple Answer Quiz**: Advanced quiz format allowing multiple correct selections per question

### 🏠 User-Friendly Interface
- **Welcome Screen**: Clean landing page with project introduction
- **Instructions Page**: Detailed guidance on how to use both quiz types
- **Categories Page**: Interactive carousel showcasing different quiz categories
- **Score Tracking**: Real-time scoring with final results display

### 💾 Smart Progress Management
- **Local Storage**: Automatic saving of quiz progress and selected answers
- **Resume Capability**: Continue quizzes from where you left off
- **Score Persistence**: Track and display quiz performance

### 📱 Responsive Design
- **Mobile-First**: Optimized for all device sizes
- **Modern UI**: Clean, intuitive interface built with TailwindCSS
- **Interactive Elements**: Smooth animations and hover effects

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.0
- **Styling**: TailwindCSS 4.1.11
- **Routing**: React Router DOM 7.8.0
- **Icons**: React Icons 5.5.0
- **Animations**: Motion 12.23.12
- **Code Quality**: ESLint with React-specific rules

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shivateja-droid/SCT_WD_3.git
   cd SCT_WD_3
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks
- `npm run deploy` - Deploy to GitHub Pages

## 📖 Usage Guide

### Starting a Quiz
1. Click "Start Quiz" on the home screen
2. Read the instructions carefully
3. Choose between:
   - **Single Answer Quiz**: Select one correct answer per question
   - **Multiple Answer Quiz**: Select all correct answers per question

### Taking the Quiz
- Read each question carefully
- Select your answer(s) based on the quiz type
- Use "Next Question" to proceed or "Submit Quiz" to finish
- Your progress is automatically saved

### Viewing Results
- Final scores are displayed on the score screen
- Results include your total score and performance metrics

## 🎨 Quiz Content

The application includes sample questions covering:
- Web Development (HTML, CSS, JavaScript)
- Programming Concepts
- Technology Frameworks
- General Knowledge Topics

Questions are stored in `/src/data/` and can be easily customized or expanded.

## 🌐 Deployment

The application is configured for GitHub Pages deployment:

```bash
npm run build
npm run deploy
```

Live demo: [https://shivateja-droid.github.io/SCT_WD_3/](https://shivateja-droid.github.io/SCT_WD_3/)

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Homescreen.jsx  # Landing page
│   ├── Instructions.jsx # Quiz instructions
│   ├── Quizscreen.jsx  # Single answer quiz
│   ├── Multipleques.jsx # Multiple answer quiz
│   ├── Scorescreen.jsx # Results display
│   ├── Categories.jsx  # Quiz categories
│   ├── Navbar.jsx      # Navigation
│   ├── Footer.jsx      # Page footer
│   └── Carousel.jsx    # Interactive carousel
├── data/               # Quiz data
│   ├── quiz.js         # Single answer questions
│   └── mulques.js      # Multiple answer questions
└── assets/             # Static assets
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

Created by [shivateja-droid](https://github.com/shivateja-droid)

---

**Happy Quizzing! 🎉**
