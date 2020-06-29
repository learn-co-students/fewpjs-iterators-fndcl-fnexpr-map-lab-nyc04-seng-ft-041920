const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// Commits to splitwords function and then flattens the incoming array
const titleCased = () => {
  return tutorials.map(title => splitWords(title)).flat();
}

// Splits words in Array, maps upcase words to array then Joins them together
function splitWords(title){
  return title.split(" ").map(upCaseWords).join(" ");
}

// Up Cases Individual letters then joins to the beginning of the array
function upCaseWords(word){
  return word.charAt(0).toUpperCase() + word.slice(1);
}

/*
Sources:

https://flaviocopes.com/how-to-uppercase-first-letter-javascript/
https://stackoverflow.com/questions/16037049/why-does-javascript-map-function-return-undefined
https://www.robinwieruch.de/javascript-map-array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
*/