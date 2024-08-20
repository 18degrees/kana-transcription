# kana-transformer

![NPM Version](https://img.shields.io/npm/v/kana-transformer) [![test](https://github.com/18degrees/kana-transformer/actions/workflows/tests.yml/badge.svg?event=push)](https://github.com/18degrees/kana-transformer/actions/workflows/tests.yml) ![NPM License](https://img.shields.io/npm/l/kana-transformer)

_Switch the language to: [Russian](readme-ru.md)_

_Find out if the library is right for you by trying it out on the [website](https://18degrees.github.io/kana-transformer-web/)_

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
npm install kana-transformer
```

## Usage examples

### From kana

```javascript
import { fromKana } from 'kana-transformer'

const kanaText = 'わたし は じぶん に おちゃ を たてました'

//Understood in the Hepburn system - by default
const hepburnText = fromKana(kanaText)
//hepburnText = 'watashi wa jibun ni ocha o tatemashita'

//Understood in Kunrei-shiki
const kunreiShikiText = fromKana(kanaText, 'kunrei-shiki')
//kunreiShikiText = 'watasi wa zibun ni otya o tatemasita'


//Understood in the Polivanov system; for Russian - by default
const polivanovText = fromKana(kanaText, 'ru')
//polivanovText = 'ватаси ва дзибун ни отя о татэмасита'

//Understood in a nonstandard-ru system
const nonstandardRuText = fromKana(kanaText, 'nonstandard-ru')
//nonstandardRuText = 'ватащи ва джибун ни очя о татэмащита'
```

### To kana

```javascript
import { toKana } from 'kana-transformer'

const hepburnText = 'watashi wa kinoo haha ni daijina tegami o yonda'

//Understood in the Hepburn system - by default
const transformedFromEN = toKana(hepburnText)
//transformedFromEN = 'わたし は きのお はは に だいじな てがみ を よんだ'


const polivanovText = 'ватаси ва киноо хаха ни даидзина тэгами о ёнда'

//Understood in the Polivanov system; for Russian - by default
const transformedFromRU = toKana(polivanovText, 'ru')
//transformedFromRU = 'わたし は きのお はは に だいじな てがみ を よんだ'
```

## Contributing

If you want to participate in the work on the project, feel free to use [issues](https://github.com/18degrees/kana-transformer/issues) and [pull requests](https://github.com/18degrees/kana-transformer/pulls).

## License

[Apache-2.0](LICENSE)
