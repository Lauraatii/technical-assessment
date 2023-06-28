import '../src/styles.css';

const numbersDiv = document.getElementById('numbers');
const combinationsDiv = document.getElementById('combinations');
let numbers = [];

document.getElementById('newArray').addEventListener('click', function() {
  numbers = Array.from({length: 9}, () => Math.floor(Math.random() * 21));
  numbersDiv.textContent = numbers.join(', ');
  combinationsDiv.innerHTML = '';
});

document.getElementById('findCombinations').addEventListener('click', function() {
  const combinations = [];
  
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === 21) {
        combinations.push([i+1, j+1]); // Adding 1 to each index for 1-based indexing
      }
    }
  }

  let combinationsList = '<ul class="combinations-list">';
  combinations.forEach(c => {
    combinationsList += `<li>${c.join(' & ')}</li>`;
  });
  combinationsList += '</ul>';

  combinationsDiv.innerHTML = combinations.length > 0 ? `<p class="combinations-title">Combinations:</p>${combinationsList}` : '';
});
