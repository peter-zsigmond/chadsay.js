export const helpText = `Usage:
    chadsay [text]

Description:
    Less cows, more chads.

Behavior:
    - If called without arguments, says a random message
    - If passed a string argument, says that string

Options:
    -h, --help       Show this help message and exit
    -v, --version    Show the version and exit

Examples:
    $ chadsay
    <random message>

    $ chadsay "Custom message"
    Custom message

    $ chadsay "Custom\\nmulti-line\\nmessage"
    Custom
    multi-line
    message
    
Author:
    Peter Zsigmond (github.com/peter-zsigmond)`