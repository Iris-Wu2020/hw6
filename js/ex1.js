/* Homework 6
Exercise 1 JavaScript code
*/
console.log("Wu's Output from hw6 Exercise 1");

//Complete the following functions
//Displays all nodes
const bodyNodes = () => {
    document.body.childNodes.forEach(node => {
        console.log(node);
    })
};

bodyNodes();
