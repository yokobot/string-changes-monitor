'use strict'

const fs = require('fs')
const core = require('@actions/core')
const myInput = core.getInput('strings_array', { required: true })
const myArray = JSON.parse(myInput)

const main = async () => {
  for (let i = 0; i < myArray.length; i++) {
    // 指定されたファイルから特定行を読み込む
    const data = fs.readFileSync(myArray[i].file, 'utf8')
    const line = data.split('\n')[myArray[i].line - 1]

    // 文字列を比較して、一致したらメッセージ、一致しなかったらエラーメッセージを出力
    if (line === myArray[i].strings) {
      console.log('Matched')
    } else {
      throw new Error('Not matched')
    }
  }
}

main()
