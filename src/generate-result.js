import {chadArt} from './chad-art.js'

export const generateResult = (messages) => {
    // Padding on the side of the content inside the message box
    const padding = 2

    // The longest message line
    const longestMessage = messages.reduce((longest, current) => (current.length > longest.length ? current : longest))

    // Width of the message box
    const boxWidth = 1 + padding + longestMessage.length + padding + 1

    // Height of the message box
    const boxHeight = 1 + messages.length + 1

    // The line number of the bottom of the message box
    let boxBottom = chadArt.boxBottom

    // The line number of the top of the message box
    let boxTop = boxBottom - boxHeight + 1

    // Add Chad art to the result
    let result = chadArt.art.split('\n')

    // Add empty lines to the top of the result, if the top of the message box is out of it
    if (boxTop < 0) {
        // Required new lines comes from the distance of the top of the box from zero
        const requiredNewLines = Math.abs(boxTop)

        // Generate required new empty lines
        const newLines = Array(requiredNewLines).fill(' '.repeat(chadArt.boxLeft))

        // Add new empty lines to the top of the result
        result.unshift(...newLines)

        // Add the number of new lines to the position of the box borders
        boxBottom += requiredNewLines
        boxTop += requiredNewLines
    }

    // Add message box top border
    result[boxTop] += '.' + ('`'.repeat(boxWidth - 2)) + '.'

    // Add message lines to the message box
    for (const [i, message] of messages.entries()) {
        let line = ':'

        // Add padding
        line += (' '.repeat(padding))

        // Add message
        line += message

        // Add padding to the end of the lines
        line += (' '.repeat(boxWidth - (1 + padding + message.length + 1)))
        line += ':'

        // Position of the line, where it is inserted
        const linePos = boxBottom - messages.length + i
        result[linePos] += line
    }

    // Add message box bottom border
    result[boxBottom] += '`' + ('.'.repeat(boxWidth - 2)) + `'`

    return result.join('\n')
}
