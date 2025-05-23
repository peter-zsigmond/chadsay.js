import {generateResult} from './generate-result.js'
import {isBrowser} from './is-browser.js'

export const chadsay = (messages) => {
    return generateResult(messages)
}

if (!isBrowser()) {
    // Get the message from the command-line
    const messages = process.argv[2].split('\\n')
    
    const result = generateResult(messages)
    console.log(result)
}
