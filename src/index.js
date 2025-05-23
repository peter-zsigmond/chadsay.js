import {generateResult} from './generate-result.js'

// Get the message from the command-line
const messages = process.argv[2].split('\\n')

const result = generateResult(messages)
console.log(result)
