// BASICS
console.log('hellow World')

// nodejs is a backend server it will not run within a browser
// it is purely for the database design
// console.log(global)


const os = require('os');
const path = require('path')
const math = require('./math') // our own 

console.log(math.add(2, 3))

/*
console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))
*/