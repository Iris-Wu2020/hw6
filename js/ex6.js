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

  
  const buildNewNodeDt = (word1, word2) => {
    const dtNewNode1 = document.createElement("dt");
    dtNewNode1.textContent = word1;
    const dtNewNode2 = document.createElement("dd");
    dtNewNode2.textContent = word2;
    return dtNewNode1;
  };

console.log(buildNewNodeDt("dddd", "uuuu"));

//console.log(words.map(word => buildNewNodeDt(word.term, word.definition))[0]);
    
