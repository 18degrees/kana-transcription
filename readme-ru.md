<h1 align='center'>Kana transformer</h1>

<p align='center'><img src="https://raw.githubusercontent.com/18degrees/kana-transformer/main/assets/logo.png" alt='logo'/></p>

<div align='center'>

![NPM Version](https://img.shields.io/npm/v/kana-transformer) [![test](https://github.com/18degrees/kana-transformer/actions/workflows/tests.yml/badge.svg?event=push)](https://github.com/18degrees/kana-transformer/actions/workflows/tests.yml) ![NPM License](https://img.shields.io/npm/l/kana-transformer)

</div>

_Переключить язык на: [английский](readme.md)_

_Опробуйте функционал на [вебсайте](https://18degrees.github.io/kana-transformer-web/)_

С помощью библиотеки вы сможете:

- Трансфомировать русские или английские слоги в кану
- Привести кану к русскому или английскому алфавиту
- Конвертировать одну кану в другую

Для выполнения каждого пункта есть своя функция.

Перед использованием посмотрите в [обзоре функций](docs/ru/functions.md) ограничения и рекомендации. Учёт рекомендаций повысит точность, а учёт ограничений подготовит к недостаткам алгоритма.

## Документация

- [Обзор функций](docs/ru/functions.md)
- [Причины появления рекомендаций и ограничений](docs/ru/explanation.md)
- [Поддерживаемые системы транскрипции/транслитерации](docs/ru/systems.md)

## Установка

```bash
npm install kana-transformer
```

## Поведение по умолчанию

- `toKana()` понимает английский язык, по системе Хепбёрна; приводит к хирагане
- `fromKana()` приводит к английскому языку, по системе Хепбёрна
- `convertKana()` конвертирует в хирагану

Подробнее о возможностях настройки написано в [обзоре функций](docs/ru/functions.md).

## Примеры использования

```javascript
import { fromKana, toKana, convertKana } from 'kana-transformer'
//Рекомендация: в первых двух функциях разделяйте слова пробелом

fromKana('わたし は じぶん に おちゃ を たてました')
// => 'watashi wa jibun ni ocha o tatemashita'

toKana('watashi wa jibun ni ocha o tatemashita')
// => 'わたし は じぶん に おちゃ を たてました'

convertKana('ワタシハジブンニオチャヲタテマシタ')
// => 'わたしはじぶんにおちゃをたてました'
```

## Содействие

Если хотите поучаствовать в работе над проектом, смело используйте [issues](https://github.com/18degrees/kana-transformer/issues) и [pull requests](https://github.com/18degrees/kana-transformer/pulls).

## Лицензия

[Apache-2.0](LICENSE)
