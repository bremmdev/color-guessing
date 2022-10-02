import { useEffect, useState } from "react";
import ColorGame from "./components/ColorGame";
import StreakCounter from "./components/StreakCounter";
import HighScore from './components/HighScore'

let isInitial = true;

function App() {
  const [gameVersion, setGameVersion] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);

  const handleSelect = (success: boolean) => {
    if (success) {
      const nextStreakVal = streak + 1;

      if (nextStreakVal > highScore) {
        setHighScore(nextStreakVal);
      }
      setStreak((prev) => prev + 1);

      setTimeout(() => {
        setGameVersion((prev) => prev + 1);
      }, 500);
    } else {
      setStreak(0);
    }
  };

  useEffect(() => {
    if (isInitial) {
      const storedHighScore = localStorage.getItem("highscore");
      if (storedHighScore) {
        setHighScore(+storedHighScore);
      }
    }
    isInitial = false;
  }, []);

  useEffect(() => {
    if (!isInitial) {
      localStorage.setItem("highscore", String(highScore));
    }
  }, [highScore]);

  return (
    <div className="container">
      <StreakCounter streak={streak} />
      <ColorGame onSelect={handleSelect} key={gameVersion} streak={streak} />
      <HighScore highscore={highScore} />
    </div>
  );
}

export default App;
