import './styles.css';

const numbersDiv = document.getElementById('numbers');
const combinationsDiv = document.getElementById('combinations');
let numbers = [];

document.getElementById('newArray').addEventListener('click', function() {
  numbers = Array.from({length: 9}, () => Math.floor(Math.random() * 21));
  numbersDiv.textContent = numbers.join(', ');
  combinationsDiv.textContent = '';
});

document.getElementById('findCombinations').addEventListener('click', function() {
  const seenNumbers = {};
  const combinations = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const difference = 21 - number;
    
    if (seenNumbers[difference]) {
      combinations.push([numbers.indexOf(number), numbers.indexOf(difference)]);
    }

    seenNumbers[number] = true;
  }

  combinationsDiv.textContent = combinations.map(c => c.join(' & ')).join('\n');
});
