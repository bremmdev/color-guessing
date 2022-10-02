export function shuffleColors(generatedColor: string, colors: string[]) {
  const randomInsertPosition = Math.floor(Math.random() * 3);
  const colorOptions: Array<string> = [...colors];
  colorOptions.splice(randomInsertPosition, 0, generatedColor);
  return colorOptions;
}
