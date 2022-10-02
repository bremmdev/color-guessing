import React from "react";

type Props = {
  options: Array<string>;
  onClick: (e: React.MouseEvent) => void;
};

const ColorOptions = (props: Props) => {
  const { options, onClick } = props;

  return (
    <div className="options">
      {options.map((option) => (
        <div className="btn" key={option} onClick={onClick}>
          {option}
        </div>
      ))}
    </div>
  );
};

export default ColorOptions;
