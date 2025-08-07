import {randomMessages} from './random-messages.js'

export const getRandomMessage = () => {
    const randomIndex = getRandomNumber(randomMessages.length)
    return randomMessages[randomIndex]
}

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max)
}