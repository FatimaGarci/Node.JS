const fs = require('fs')
const module = process.argv[2]

fs.readFile(module,  (error, contents) =>{
  if (error) {
    return console.log(error)
  }
  const lines = contents.toString().split('\n').length - 1
  console.log(lines)
})