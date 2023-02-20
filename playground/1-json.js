const fs = require('fs')

const book = {
    title: 'With Blood',
    author: 'Ryan Wormling'
}

// Object to JSON
const bookJSON = JSON.stringify(book);
// console.log(bookJSON)

// JSON to Object
const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)

// Write down stringfied Object to an JSON file
fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
// fs.readFileSync return binary, need to transform toString
console.log(dataBuffer.toString())

// Now to get from file and transform in object:
// Stringiy buffer
const dataJSON = dataBuffer.toString()
// Parse stringfied JSON
const data = JSON.parse(dataJSON)
// Use the object :)
console.log(data.title)

console.log('------ Challenge ------ ')

const challengeJSON = fs.readFileSync('1-json-challenge.json')
const parsedChallengeJSON = JSON.parse(challengeJSON)

parsedChallengeJSON.name = "Rafael"
parsedChallengeJSON.age = 34

fs.writeFileSync('1-json-challenge.json', JSON.stringify(parsedChallengeJSON))