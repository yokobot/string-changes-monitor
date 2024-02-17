'use strict'

const fs = require('fs')
const core = require('@actions/core')
const inputFile = core.getInput('file', { required: true })
const inputLine = core.getInput('line', { required: true })
const inputString = core.getInput('string', { required: true, trimWhitespace: false })

const main = async () => {
  try {
    // Reads a specific line from a specified file.
    const data = fs.readFileSync(inputFile, 'utf8')
    const line = data.split('\n')[inputLine - 1]
    core.info(`Read line: ${line}`)
    core.info(`Input string: ${inputString}`)

    // Compares a input string with a specific line.
    if (line === inputString) {
      core.info('String is matched')
    } else {
      core.setFailed('String is not matched!!!')
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

main()
