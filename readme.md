# kana-transcription

![NPM Version](https://img.shields.io/npm/v/kana-transcription) [![test](https://github.com/18degrees/kana-transcription/actions/workflows/tests.yml/badge.svg?event=push)](https://github.com/18degrees/kana-transcription/actions/workflows/tests.yml) ![NPM License](https://img.shields.io/npm/l/kana-transcription)

_Switch the language to: [Russian](readme-ru.md)_

A mini-library that you can use to:
- Translate hiragana/katakana to the Russian or English alphabet
- Transform syllables of Russian or English alphabet to hiragana/katakana
- Convert one kana to the other

There is a function to perform each item. Before using them, see [function overview](docs/en/functions.md) for limitations and recommendations. Keeping the recommendations in mind will improve accuracy, and keeping the limitations in mind will prepare you for the shortcomings of the algorithm.

## Documentation

- [Function overview](docs/en/functions.md)
- [Reasons for recommendations and limitations](docs/en/explanation.md)

## Installation

```bash
npm install kana-transcription
```

## Usage examples

```javascript
import { transcriptKana } from 'kana-transcription'

const kanaText = "わたし は うち へ いきます"

const transcriptedEN = transcriptKana(kanaText)
const transcriptedRU = transcriptKana(kanaText, 'ru')

//transcriptedEN = "watashi wa uchi e ikimasu"
//transcriptedRU = "ватаси ва ути э икимасу"


import { transformToKana } from 'kana-transcription'

const textEN = "skoshii"
const textRU = "скощии"

const transformedFromEN = transformToKana(textEN)
const transformedFromRU = transformToKana(textRU, 'ru')

//transformedFromEN = "すこしい"
//transformedFromRU = "すこしい"
```

## License

[Apache-2.0](LICENSE)
