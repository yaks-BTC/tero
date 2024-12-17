const alienCharMap: { [key: string]: string } = {
  'A': 'Ꙗ', 'B': 'Ᵽ', 'C': 'Ꚍ', 'D': 'Ꚋ', 'E': 'Ꙓ',
  'F': 'Ꙥ', 'G': 'Ꙁ', 'H': 'Ꚅ', 'I': 'Ꙇ', 'J': 'Ꙉ',
  'K': 'Ꙕ', 'L': 'Ꙑ', 'M': 'Ꙧ', 'N': 'Ꙋ', 'O': 'Ꙩ',
  'P': 'Ꙃ', 'Q': 'Ꚃ', 'R': 'Ꙅ', 'S': 'Ꙍ', 'T': 'Ꚇ',
  'U': 'Ꙏ', 'V': 'Ꙫ', 'W': 'Ꙭ', 'X': 'Ꚉ', 'Y': 'Ꙙ',
  'Z': 'Ꚁ', ' ': '◊', ':': '∆', '-': '⧫', '[': '《', ']': '》'
};

export function useAlienLanguage() {
  const translateToAlien = (text: string) => {
    return text
      .toUpperCase()
      .split('')
      .map(char => alienCharMap[char] || char)
      .join('');
  };

  return { translateToAlien };
}