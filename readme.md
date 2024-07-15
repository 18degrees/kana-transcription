# kana-transcription

[![test](https://github.com/18degrees/kana-transcription/actions/workflows/tests.yml/badge.svg?event=push)](https://github.com/18degrees/kana-transcription/actions/workflows/tests.yml) ![NPM Version](https://img.shields.io/npm/v/kana-transcription) ![NPM License](https://img.shields.io/npm/l/kana-transcription)

Мини-библиотека, с помощью который вы сможете:
- Привести хирагану/катакану к русскому или английскому алфавиту
- Преобразовать слоги русского или английского алфавита к хирагане/катакане
- Перевести одну кану в другую

Для выполнения каждого пункта есть своя функция. Перед использованием посмотрите в [обзоре функций](docs/functions.md) ограничения и рекомендации. Учёт рекомендаций повысит точность, а учёт ограничений подготовит к недостаткам алгоритма.

## Документация

- [Обзор функций](docs/functions.md)
- [Причины появления рекомендаций и ограничений](docs/explanation.md)

## Установка

```bash
npm install kana-transcription
```

## Примеры использования

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

## Лицензия

[Apache-2.0](LICENSE)
