import { useState } from "react";
import ColorGame from "./components/ColorGame";
import StreakCounter from "./components/StreakCounter";

function App() {
  const [gameVersion, setGameVersion] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);

  const handleSelect = (success: boolean) => {
    if (success) {
      setStreak((prev) => prev + 1);
      setTimeout(() => {
        setGameVersion((prev) => prev + 1);
      }, 500);
    } else {
      setStreak(0);
    }
  };

  return (
    <div className="container">
      <StreakCounter streak={streak} />
      <ColorGame onSelect={handleSelect} key={gameVersion} streak={streak} />
    </div>
  );
}

export default App;
