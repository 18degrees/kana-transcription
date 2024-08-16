# kana-transcription

![NPM Version](https://img.shields.io/npm/v/kana-transcription) [![test](https://github.com/18degrees/kana-transcription/actions/workflows/tests.yml/badge.svg?event=push)](https://github.com/18degrees/kana-transcription/actions/workflows/tests.yml) ![NPM License](https://img.shields.io/npm/l/kana-transcription)

_Switch the language to: [Russian](readme-ru.md)_

A mini-library that you can use to:
- Translate hiragana/katakana to the Russian or English alphabet
- Transform syllables of Russian or English alphabet to hiragana/katakana
- Convert one kana to the other

There is a function to perform each item. Before using them, see the [functions overview](docs/en/functions.md) for limitations and recommendations. Keeping the recommendations in mind will improve accuracy, and keeping the limitations in mind will prepare you for the shortcomings of the algorithm.

## Documentation

- [Functions overview](docs/en/functions.md)
- [Reasons for recommendations and limitations](docs/en/explanation.md)
- [Supported transcription/transliteration systems](docs/en/systems.md)

## Installation

```bash
npm install kana-transcription
```

## Usage examples

### From kana

```javascript
import { transcriptKana } from 'kana-transcription'

const kanaText = 'わたし は じぶん に おちゃ を たてました'

//Understood in the Hepburn system - by default
const hepburnText = transcriptKana(kanaText)
//hepburnText = 'watashi wa jibun ni ocha o tatemashita'

//Understood in Kunrei-shiki
const kunreiShikiText = transcriptKana(kanaText, 'kunrei-shiki')
//kunreiShikiText = 'watasi wa zibun ni otya o tatemasita'


//Understood in the Polivanov system; for Russian - by default
const polivanovText = transcriptKana(kanaText, 'ru')
//polivanovText = 'ватаси ва дзибун ни отя о татэмасита'

//Understood in a nonstandard-ru system
const nonstandardRuText = transcriptKana(kanaText, 'nonstandard-ru')
//nonstandardRuText = 'ватащи ва джибун ни очя о татэмащита'
```

### To kana

```javascript
import { transformToKana } from 'kana-transcription'

const hepburnText = 'watashi wa kinoo haha ni daijina tegami o yonda'

//Understood in the Hepburn system - by default
const transformedFromEN = transformToKana(hepburnText)
//transformedFromEN = 'わたし は きのお はは に だいじな てがみ を よんだ'


const polivanovText = 'ватаси ва киноо хаха ни даидзина тэгами о ёнда'

//Understood in the Polivanov system; for Russian - by default
const transformedFromRU = transformToKana(polivanovText, 'ru')
//transformedFromRU = 'わたし は きのお はは に だいじな てがみ を よんだ'
```

## Contributing

If you want to participate in the work on the project, feel free to use [issues](https://github.com/18degrees/kana-transcription/issues) and [pull requests](https://github.com/18degrees/kana-transcription/pulls).

## License

[Apache-2.0](LICENSE)
