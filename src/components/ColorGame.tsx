import React, { useState } from "react";
import ColorOptions from "./ColorOptions";
import { generateRandomColor } from "../utils/generateRandomColor";
import { shuffleColors } from "../utils/shuffleColors";

enum FeedbackMessage {
  SUCCESS = "Well done! 🎉",
  SUCCESSSTREAK = "You're on fire! 🔥",
  FAILURE = "That's not quite right...",
}

type Props = {
  onSelect: (success: boolean) => void;
  streak: number;
};

const ColorGame = (props: Props) => {
  //draw color and 2 additional colors for the choices
  const [generatedColor, setGeneratedColor] =
    useState<string>(generateRandomColor);
  const [additionalColors, setAdditionalColors] = useState<[string, string]>([
    generateRandomColor(),
    generateRandomColor(),
  ]);

  const [feedbackMessage, setFeedbackMessage] =
    useState<FeedbackMessage | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    const selectedOption = (e.target as HTMLDivElement).innerHTML;

    const isSuccess = generatedColor === selectedOption;

    const feedback = isSuccess
      ? props.streak >= 5
        ? FeedbackMessage.SUCCESSSTREAK
        : FeedbackMessage.SUCCESS
      : FeedbackMessage.FAILURE;
    setFeedbackMessage(feedback);
    if (isSuccess) {
      props.onSelect(true);
    } else {
      props.onSelect(false);
    }
  };

  //shuffle the generated color and the additional colors to create the options to choose from
  const colorOptions = shuffleColors(generatedColor, additionalColors);

  return (
    <>
      <div
        className="color-container"
        style={{ backgroundColor: generatedColor }}
      >
        {generatedColor}
      </div>
      <ColorOptions options={colorOptions} onClick={handleClick} />
      {feedbackMessage ? (
        <div className="feedback">{feedbackMessage}</div>
      ) : (
        <div className="placeholder-div">&nbsp;</div>
      )}
    </>
  );
};

export default ColorGame;
