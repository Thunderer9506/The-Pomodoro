import Landing from "./components/Landing"
import './App.css'
import Clock from "./components/Clock"
import { useState, useEffect } from "react"

function App() {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLanding && (
        <div className="landing">
          <Landing />
        </div>
      )}
      <div className="clock" style={{ display: showLanding ? "none" : "block" }}>
        <Clock />
      </div>
    </>
  )
}

export default App
