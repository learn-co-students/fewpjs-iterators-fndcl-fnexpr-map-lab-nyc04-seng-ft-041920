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

const titleCased = () => {
  return tutorials.map(title => {
    // split each title into an array of words
    let splitTitle = title.split(" ")
    // map over the array, slice off the first letter, capitalize, add to the rest of the word
    // this returns array of words in the title
    //join it to gether and return
    return splitTitle.map(word => word.slice(0,1).toUpperCase() + word.slice(1)).join(" ")
  })
}
