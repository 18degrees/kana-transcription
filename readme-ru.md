# kana-transformer

![NPM Version](https://img.shields.io/npm/v/kana-transformer) [![test](https://github.com/18degrees/kana-transformer/actions/workflows/tests.yml/badge.svg?event=push)](https://github.com/18degrees/kana-transformer/actions/workflows/tests.yml) ![NPM License](https://img.shields.io/npm/l/kana-transformer)

_Переключить язык на: [английский](readme.md)_

_Выясните, подходит ли вам библиотека, опробовав её на [вебсайте](https://18degrees.github.io/kana-transformer-web/)_

Мини-библиотека, с помощью который вы сможете:
- Привести хирагану/катакану к русскому или английскому алфавиту
- Преобразовать слоги русского или английского алфавита к хирагане/катакане
- Перевести одну кану в другую

Для выполнения каждого пункта есть своя функция. Перед использованием посмотрите в [обзоре функций](docs/ru/functions.md) ограничения и рекомендации. Учёт рекомендаций повысит точность, а учёт ограничений подготовит к недостаткам алгоритма.

## Документация

- [Обзор функций](docs/ru/functions.md)
- [Причины появления рекомендаций и ограничений](docs/ru/explanation.md)
- [Поддерживаемые системы транскрипции/транслитерации](docs/ru/systems.md)

## Установка

```bash
npm install kana-transformer
```

## Примеры использования

### Из каны

```javascript
import { fromKana } from 'kana-transformer'

const kanaText = 'わたし は じぶん に おちゃ を たてました'

//Понимать по системе Хепбёрна - по умолчанию
const hepburnText = fromKana(kanaText)
//hepburnText = 'watashi wa jibun ni ocha o tatemashita'

//Понимать по Кунрэй-сики
const kunreiShikiText = fromKana(kanaText, 'kunrei-shiki')
//kunreiShikiText = 'watasi wa zibun ni otya o tatemasita'


//Понимать по системе Поливанова; для русского - по умолчанию
const polivanovText = fromKana(kanaText, 'ru')
//polivanovText = 'ватаси ва дзибун ни отя о татэмасита'

//Понимать по нестандартной системе
const nonstandardRuText = fromKana(kanaText, 'nonstandard-ru')
//nonstandardRuText = 'ватащи ва джибун ни очя о татэмащита'
```

### К кане

```javascript
import { toKana } from 'kana-transformer'

const hepburnText = 'watashi wa kinoo haha ni daijina tegami o yonda'

//Понимать по системе Хепбёрна - по умолчанию
const transformedFromEN = toKana(hepburnText)
//transformedFromEN = 'わたし は きのお はは に だいじな てがみ を よんだ'


const polivanovText = 'ватаси ва киноо хаха ни даидзина тэгами о ёнда'

//Понимать по системе Поливанова; для русского - по умолчанию
const transformedFromRU = toKana(polivanovText, 'ru')
//transformedFromRU = 'わたし は きのお はは に だいじな てがみ を よんだ'
```

## Содействие

Если хотите поучаствовать в работе над проектом, смело используйте [issues](https://github.com/18degrees/kana-transformer/issues) и [pull requests](https://github.com/18degrees/kana-transformer/pulls).

## Лицензия

[Apache-2.0](LICENSE)
