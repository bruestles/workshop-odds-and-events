// State
const userNumberBank = [];
const oddNumberBank = [];
const evenNumberBank = [];

// add user number to bank
//          and the updated bank is displayed
function addNumber(number) {
  userNumberBank.push(number);
  render();
}

// sort1 - the first number in the user number bank is removed and placed into either the odd or even category.
//          and the numbers in the modified bank are sorted
//          and the updated bank is displayed
function sort1() {
  if (userNumberBank.length === 0) return;

  const firstNumber = userNumberBank.shift();
  if (firstNumber % 2 === 0) {
    evenNumberBank.push(firstNumber);
    evenNumberBank.sort();
  } else {
    oddNumberBankNumberBank.push(firstNumber);
    oddNumberBankNumberBank.sort();
  }
  render();
}

// sort all - all numbers in the user number bank are moved into either the odd or even category.
//            using sort1 for each number in the user bank
//          and the updated bank is displayed
function sortAll() {
  userNumberBank.forEach(sort1);
}

// Component
// Form allowing user to input numbers
function InputForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
  <label>
  Add a number to the bank: <input name="userNumber" type="number" min="0" />
  </label>
  <button type="submit" name="action" value="addNumber">Add a number</button>
  <button type="submit" name="action" value="sort1">Sort 1</button>
  <button type="submit" name="action" value="sortAll">Sort All</button>
  `;
  $form.addEventListener("submit", (event) => {
    event.preventDefault;

    const data = Number(new FormData($form));
  });
}
// Displays the 'bank' (list) of the numbers they've entered
// Provides a button to add the number they enter
//          a button to 'sort1' - move the first number listed to either the odds or evens
//          a button to 'sortAll' - move all the numbers they've listed to the odds and evens
// Displays the odds as they're moved there
// Displays the evens as they're moved there

// Render
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
  <h1>Odds and Events</h1>
  `;
}
