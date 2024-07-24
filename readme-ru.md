# kana-transcription

![NPM Version](https://img.shields.io/npm/v/kana-transcription) [![test](https://github.com/18degrees/kana-transcription/actions/workflows/tests.yml/badge.svg?event=push)](https://github.com/18degrees/kana-transcription/actions/workflows/tests.yml) ![NPM License](https://img.shields.io/npm/l/kana-transcription)

_Переключить язык на: [английский](readme.md)_

Мини-библиотека, с помощью который вы сможете:
- Привести хирагану/катакану к русскому или английскому алфавиту
- Преобразовать слоги русского или английского алфавита к хирагане/катакане
- Перевести одну кану в другую

Для выполнения каждого пункта есть своя функция. Перед использованием посмотрите в [обзоре функций](docs/ru/functions.md) ограничения и рекомендации. Учёт рекомендаций повысит точность, а учёт ограничений подготовит к недостаткам алгоритма.

## Документация

- [Обзор функций](docs/ru/functions.md)
- [Причины появления рекомендаций и ограничений](docs/ru/explanation.md)

## Установка

```bash
npm install kana-transcription
```

## Примеры использования

```javascript
import { transcriptKana } from 'kana-transcription'

const kanaText = 'わたし は うち へ いきます'

const transcriptedEN = transcriptKana(kanaText)
const transcriptedRU = transcriptKana(kanaText, 'ru')

//transcriptedEN = 'watashi wa uchi e ikimasu'  - по системе Хепбёрна
//transcriptedRU = 'ватаси ва ути э икимасу'    - по системе Поливанова


import { transformToKana } from 'kana-transcription'

const textEN = 'watashi wa kinoo haha ni daijina tegami o yonda'
const textRU = 'ватащи ва киноо хаха ни даидзина тэгами о ёнда'

const transformedFromEN = transformToKana(textEN)
const transformedFromRU = transformToKana(textRU, 'ru')

//transformedFromEN = 'わたし は きのお はは に だいじな てがみ を よんだ'
//transformedFromRU = 'わたし は きのお はは に だいじな てがみ を よんだ'
```

## Лицензия

[Apache-2.0](LICENSE)
