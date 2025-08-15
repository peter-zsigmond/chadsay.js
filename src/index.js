import {generateResult} from './generate-result.js'
import {getRandomMessage} from './get-random-message.js'

/**
 * Generates a chad art and returns it as a string.
 * If the `input` is falsy, it uses a random message.
 * If the `input` is a string or an array of strings, it uses that as a message.
 * 
 * @param {string|string[]|undefined} input (optional) A string or an array of strings.
 * @returns {string} Returns a string.
 */
const chadsay = (input) => generateResult(
    input && (typeof input === 'string' ? [input] : input) || getRandomMessage()
)

export default chadsay