# The Pomodoro

A simple Pomodoro timer web app built with React and Vite.

## Features

- Animated landing screen
- Customizable focus and break durations
- Lap counter for completed Pomodoro cycles
- Responsive design for desktop and mobile

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/the-pomodoro.git
   cd the-pomodoro
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App

Start the development server:
```sh
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

To build the app for production:
```sh
npm run build
```

## Project Structure

```
src/
  App.jsx         # Main app component
  App.css         # Global styles and animations
  main.jsx        # Entry point
  components/
    Landing.jsx   # Landing animation component
    Landing.css   # Landing styles
    Clock.jsx     # Pomodoro timer logic and UI
    Clock.css     # Timer styles
```

## Live Website
- [the-pomodor.netlify.app](https://the-pomodor.netlify.app/)

## License

MIT