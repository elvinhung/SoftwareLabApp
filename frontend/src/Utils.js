export function title(str) {
  let words = str.toLowerCase().split(' ');
  words.forEach((word, index) => {
    words[index] = word.charAt(0).toUpperCase() + word.slice(1);
  });
  return words.join(' ');
};
