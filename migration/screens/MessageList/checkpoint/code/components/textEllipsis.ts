/** OutSystemsUI TextEllipsis: the first NumberOfChars characters and "..." when the text is longer, else the text. */
export function textEllipsis(text: string, numberOfChars: number): string {
  return text.length > numberOfChars ? `${text.substring(0, numberOfChars)}...` : text;
}
