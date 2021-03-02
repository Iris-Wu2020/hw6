/* Homework 6
Exercise 4 JavaScript code
*/
console.log("Wu's Output from hw6 Exercise 4");

const elementNames = document.getElementsByTagName('tr');
const elementList = Array.from(elementNames).filter(element => Number(element.textContent) % 4 === 0);
Array.from(elementList).map(element => element.classList.add('fourDivi'));
// const elementList = Array.from(elementNames).map(element => Number(element.textContent));
console.log(elementList);
// const titleElement = document.querySelectorAll("td");
// console.log(titleElement);