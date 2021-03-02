/* Homework 6
Exercise 6 JavaScript code
*/
console.log("Wu's Output from hw6 Exercise 6");

const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
  }, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
  }, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
  }];
  console.log(words[0].term);

  
  const buildNewNodeDt = (word) => {
    const dtNewNode = document.createElement("dt");
    dtNewNode.textContent = word;
    return dtNewNode;
  };

  const buildNewNodeDd = (word) => {
    const dtNewNode = document.createElement("dd");
    dtNewNode.textContent = word;
    return dtNewNode;
  };


console.log(words.map(word => buildNewNodeDt(word.term)));
console.log(words.map(word => buildNewNodeDd(word.definition)));
    
