export function generateRandomColor() {
  const colorArr: Array<string> = [];

  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.floor(Math.random() * 256);
    const hexVal = randomNumber.toString(16).toUpperCase().padStart(2, "0");
    colorArr.push(hexVal);
  }

  return `#${colorArr.join("")}`;
}
