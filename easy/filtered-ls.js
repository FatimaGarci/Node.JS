const fs = require('fs')
const path = require('path')

let directory = process.argv[2]
let ext = '.' + process.argv[3]

fs.readdir(directory, (error, files) => {
  if (error) return console.error(error)
  files.forEach( (file) => {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})