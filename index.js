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
  let titles = []
  tutorials.forEach((w) => {
    let wrd = (w.split(" "))
    let tutorials1 = wrd.map(word => (word = word[0].toUpperCase() + word.substring(1)))
    let tutorials2 = tutorials1.join(' ')
    titles.push(tutorials2)
  })
  return titles
} 
