import React, { useEffect, useState } from "react";

type Props = {
  highscore: number;
};

const HighScore = (props: Props) => {
  const [isHighlighted, setIsHighlighted] = useState<boolean>(false);

  useEffect(() => {
    setIsHighlighted(true);
    let timer = setTimeout(() => {
      setIsHighlighted(false);
    }, 350);

    return () => clearTimeout(timer);
  }, [props.highscore]);

  const classNames = isHighlighted ? "highscore highlighted" : "highscore";

  return (
    <div className="highscore-container">
      Highscore: <span className={classNames}>{props.highscore}</span>
    </div>
  );
};

export default HighScore;
