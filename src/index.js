import '../src/styles.css';

// Getting elements from the DOM.
const numbersDiv = document.getElementById('numbers');
const combinationsDiv = document.getElementById('combinations');
// This variable will store the randomly generated numbers.
let numbers = [];

// Event listener for creating a new array of random numbers.
document.getElementById('newArray').addEventListener('click', function() {
  // Generating 9 random numbers from 1 to 20 inclusive and storing them in "numbers" array.
  // I used Array.from to create an array of the desired length (9), and a mapping function to fill the array with random numbers.
  numbers = Array.from({length: 9}, () => Math.floor(Math.random() * 20) + 1);
  // Display the generated numbers on the webpage.
  numbersDiv.textContent = numbers.join(', ');
  // Clear previous combinations if there is.
  combinationsDiv.innerHTML = '';
});

// Event listener for finding combinations of numbers that sum to 21.
document.getElementById('findCombinations').addEventListener('click', function() {
  // This array will hold the pairs of indices that add up to 21.
  const combinations = [];
  
  // For each number in the array, I compared it with every number that comes after it.
  // Don't need to compare with numbers before it because they have already been compared with the current number in previous iterations.
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      // If a pair adds up to 21, it pushes their indices (adjusted for 1-indexing) to the combinations array.
      if (numbers[i] + numbers[j] === 21) {
        combinations.push([i+1, j+1]); 
      }
    }
  }

  // Created an HTML string with the found combinations.
  let combinationsList = '<ul class="combinations-list">';
  combinations.forEach(c => {
    combinationsList += `<li>${c.join(' & ')}</li>`;
  });
  combinationsList += '</ul>';

  // If any combinations were found, they are displayed. If not, we display nothing.
  combinationsDiv.innerHTML = combinations.length > 0 ? `<p class="combinations-title">Combinations:</p>${combinationsList}` : '';
});
