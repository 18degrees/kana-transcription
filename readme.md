<h1 align='center'>Kana transformer</h1>

<p align='center'><img src="https://raw.githubusercontent.com/18degrees/kana-transformer/main/assets/logo.png" alt='logo' style='max-width: 313px; min-width: 280px; width: 40%'/></p>

<div align='center'>

![NPM Version](https://img.shields.io/npm/v/kana-transformer) [![test](https://github.com/18degrees/kana-transformer/actions/workflows/tests.yml/badge.svg?event=push)](https://github.com/18degrees/kana-transformer/actions/workflows/tests.yml) ![NPM License](https://img.shields.io/npm/l/kana-transformer)

</div>

_Switch the language to: [Russian](readme-ru.md)_

_Try out the functionality on the [website](https://18degrees.github.io/kana-transformer-web/)_

With the library, you will be able to:

- Transform Russian or English syllables into kana
- Turn kana to the Russian or English alphabet
- Convert one kana to another

There is a function to perform each item. 

Before using them, see the [functions overview](docs/en/functions.md) for limitations and recommendations. Keeping the recommendations in mind will improve accuracy, and keeping the limitations in mind will prepare you for the shortcomings of the algorithm.

## Documentation

- [Functions overview](docs/en/functions.md)
- [Reasons for recommendations and limitations](docs/en/explanation.md)
- [Supported transcription/transliteration systems](docs/en/systems.md)

## Installation

```bash
npm install kana-transformer
```

## Working by default

- `toKana()` understands English, by Hepburn system; returns hiragana
- `fromKana()` returns English, by Hepburn system
- `convertKana()` converts to hiragana

More details about the customization options are written in [function overview](docs/en/functions.md).

## Usage examples

```javascript
import { fromKana, toKana, convertKana } from 'kana-transformer'
//Recommendation: in the first two functions, separate words with a space

fromKana('わたし は じぶん に おちゃ を たてました')
// => 'watashi wa jibun ni ocha o tatemashita'

toKana('watashi wa jibun ni ocha o tatemashita')
// => 'わたし は じぶん に おちゃ を たてました'

convertKana('ワタシハジブンニオチャヲタテマシタ')
// => 'わたしはじぶんにおちゃをたてました'
```

## Contributing

If you want to participate in the work on the project, feel free to use [issues](https://github.com/18degrees/kana-transformer/issues) and [pull requests](https://github.com/18degrees/kana-transformer/pulls).

## License

[Apache-2.0](LICENSE)
