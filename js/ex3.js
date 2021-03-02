/* Homework 6
Exercise 3 JavaScript code
*/
console.log("Wu's Output from hw6 Exercise 3");

const paragraphColor = () => {
    const paragraphColors = document.getElementsByTagName('p');
    Array.from(paragraphColors).map(element => element.style.backgroundColor = 'yellow');
    Array.from(paragraphColors).map(element => element.style.fontWeight = 900);
    console.log()

};
paragraphColor();