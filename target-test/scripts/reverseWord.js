export default function reverseWord() {
  const result = document.getElementById('resultReverse');
  const wordInput = document.getElementById('wordInput');
  const word = wordInput.value;

  let reversedWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  result.textContent = reversedWord;
}
const button = document.getElementById('reverseButton');
button.addEventListener('click', reverseWord);
