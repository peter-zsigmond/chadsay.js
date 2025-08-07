import {generateResult} from './generate-result.js'
import {isBrowser} from './is-browser.js'
import {getRandomMessage} from './get-random-message.js'
import {helpText} from './help-text.js'

const version = '1.0.0'

export const chadsay = (messages) => {
    return generateResult(messages)
}

if (!isBrowser()) {
    const input = process.argv[2]
    let result

    if (!input) {
        result = generateResult(getRandomMessage())
    }
    else if (['-v', '--version'].includes(input)) {
        result = version
    }
    else if (['-h', '--help'].includes(input)) {
        result = helpText
    }
    else {
        result = generateResult(input.split('\\n'))
    }
    
    console.log(result)
}