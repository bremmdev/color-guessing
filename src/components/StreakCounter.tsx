import React from "react";
import { AiFillFire } from "react-icons/ai";

type Props = {
  streak: number;
};

const StreakCounter = (props: Props) => {
  const classNames =
    props.streak >= 5 ? "streak-icon full-opacity" : "streak-icon";

  return (
    <div className="streak-counter">
      <AiFillFire className={classNames} />
      {props.streak}
    </div>
  );
};

export default StreakCounter;
