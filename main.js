'use strict'

const fs = require('fs')
const core = require('@actions/core')
const inputFile = core.getInput('file', { required: true })
const inputLine = core.getInput('line', { required: true })
const inputString = core.getInput('string', { required: true }, { trimWhitespace: false })

const main = async () => {
  // 指定されたファイルから特定行を読み込む
  const data = fs.readFileSync(inputFile, 'utf8')
  const line = data.split('\n')[inputLine - 1]
  console.log(`Read line: ${line}`)
  console.log(`Input string: ${inputString}`)

  // 文字列を比較して、一致したらメッセージ、一致しなかったらエラーメッセージを出力
  if (line === inputString) {
    console.log('Matched')
  } else {
    throw new Error('Not matched')
  }
}

main()
