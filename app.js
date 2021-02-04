const inputText = document.querySelector('#input-text');
const searchBtn = document.querySelector('.search-btn');
const searchedWord = 'HI';

class HighlightWords {}

searchBtn.addEventListener('click', () => {
  const text = [...inputText.value.trim().toUpperCase().split(' ')];
  const matching = [];

  for (let i = 0; i < text.length; i++) {
    if (
      text[i].includes(searchedWord.toUpperCase()) ||
      text[i] === searchedWord.toUpperCase()
    ) {
      matching.push(text[i]);
    }
  }
  for (let i = 0; i < matching.length; i++) {
    console.log(5);
    for (let k = 0; k < matching[i]; k++) {
      let str = '';
      for (let j = 0; j < searchedWord.length; j++) {
        console.log(`${matchingWord[i]} | ${searchedWord[j]}`);
      }
    }
  }
});
