/* Homework 6
Exercise 2 JavaScript code
*/
console.log("Wu's Output from hw6 Exercise 2");

//Complete code for the following function
//Display text for 400 level courses
const displayText400 = () => {
    const levelElements = Array.from(document.getElementsByClassName("400level"));
    levelElements.forEach(element => {
        console.log(element.textContent);
    }

    )
};

displayText400();
