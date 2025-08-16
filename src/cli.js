#!/usr/bin/env node

import chadsay from './index.js'
import {helpText} from './help-text.js'

const version = '1.0.0'
const input = process.argv[2]
let result

if (!input) {
    result = chadsay()
}
else if (['-v', '--version'].includes(input)) {
    result = version
}
else if (['-h', '--help'].includes(input)) {
    result = helpText
}
else {
    result = chadsay(input.split('\\n'))
}

console.log(result)