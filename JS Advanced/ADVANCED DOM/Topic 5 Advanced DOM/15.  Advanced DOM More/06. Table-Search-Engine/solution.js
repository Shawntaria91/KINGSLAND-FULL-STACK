// 1. Table – Search Engine
// Write a function that searches in a table by given input.
// When the " Search " button is clicked , go through all cells in the table except for the first row (Student name, Student
// email and Student course) and check if the given input has a match (check for both full words and single letters ).
// If any of the rows contain the submitted string, add a select class to that row. Note that more than one row may contain the given string.
// Оtherwise, if there is no match, nothing should happen.
// Note: After every search (" Search " button is clicked), clear the input field and remove all already selected classes (if any)
// from the previous search, in order for the new search to contain only the new result .
// For instance, if we try to find eva:
// The result should be:
// we try to find all students who have email addresses in Kingsland University domain, the expected result should be:
// What to submit?
// Zip file containing the following:
// ● solution.js
// ● template.css
// ● template.html
// File Name: TABLE-SEARCH-ENGINE.zip
function solve() {
   let input = document.querySelector('#searchField');
   let body = document.querySelectorAll('tbody tr');
   if (input === null || body === null) {
      throw new Error('Missing HTML elements!');
   }
   document.querySelector('#searchBtn').addEventListener('click', main);

   function main() {
      for (let tr of body) {
         tr.classList.remove('select');
      }
      if (input.value == '') {
         return '';
      }
      for (let tr of body) {
         if (tr.textContent.includes(input.value)) {
            tr.classList.add('select');
         }
      }
      input.value = '';
   }
}
