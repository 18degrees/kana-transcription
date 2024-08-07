# Функции

_Переключить язык на: [английский](../en/functions.md)_

В документе о каждой функции написано:

- Что она делает
- Её параметры
- Рекомендации при использовании
- Ограничения

Функции могут работать с разной точностью. Чтобы получить лучший результат, следуйте рекомендациям.

Ограничения показывают, каких неточностей стоит ожидать (даже при выполнении рекомендаций).

_Быстрая навигация:_

1. [transcriptKana()](#transcriptKana)
2. [transformToKana()](#transformToKana)
3. [reverseKana()](#reverseKana)

> [!NOTE]
> Подробнее о различиях упомянутых ниже систем написано в [отдельном документе](./systems.md)

## transcriptKana()

#### Что делает

Преобразует кану к русским или английским слогам.

#### Параметры

```ts
transcriptKana(kanaText: string, toLang?: string)
transcriptKana(kanaText: string, system?: string)
transcriptKana(kanaText: string, options?: object)
```

- kanaText - кана к преобразованию
- toLang - язык, к которому привести
  - en (по умолчанию)
  - ru
- system - система, с помощью которой преобразовывать

  *для английского*
  
    - hepburn (по умолчанию)
    - kunrei-shiki
    - nihon-shiki

  *для русского*
  
    - polivanov (по умолчанию)
    - nonstandard-ru
    - static-ru
    
 - options - объект, в который можно включить оба необязательных свойства _(хотя для полного контроля достаточно указать систему)_
  
#### Рекомендации

- Разделяйте слова пробелом

#### Ограничения

- Пары гласных えい, おう переводятся побуквенно. Выходит [эи] и [оу] соответственно


## transformToKana()

#### Что делает
  
Приводит текст, написанный русскими или английскими слогами, к одной из японских азбук.
  
#### Параметры
  
```ts
transformToKana(text: string, fromLang?: string)
transformToKana(text: string, system?: string)
transformToKana(text: string, toKana?: string)
transformToKana(text: string, guess?: boolean)
transformToKana(text: string, options?: object)
```

- text - строка слогов, приводимая к одной из японских азбук
- fromLang - язык, с которого преобразовывать
  - en (по умолчанию)
  - ru
- system - система, с помощью которой преобразовывать

  *для английского*
  
  - hepburn (по умолчанию)
  - kunrei-shiki
  - nihon-shiki

  *для русского*
  
  - polivanov (по умолчанию)
  - nonstandard-ru
  - static-ru
    
- toKana - к какой кане привести
  - hiragana (по умолчанию)
  - katakana
- guess - включить опцию угадывания неслышных гласных
  - false (по умолчанию)
  - true
- options - объект, позволяющий настроить все вышеприведённые дополнительные свойства
 
> [!IMPORTANT]
> guess позволяет обрабатывать текст с неслышными гласными, но этим режимом вызваны некоторые из описанных ниже рекомендаций и ограничений

#### Рекомендации
  
- Разделяйте слова пробелом
- Если после слоговой _н_ (_n_) в слове идёт гласная, сопровождайте _н_: 
  -  _(на русском)_ - _ъ_ - твёрдым знаком 
  -  _(на английском)_ - _'_ - апострофом
- _(на русском; `guess: true`)_ Если в вашем тексте содержатся слоги с пропущенной неслышной гласной, сопровождайте мягкие согласные таких слогов мягким знаком _ь_.

#### Ограничения
  
- Долгота гласных отображается только их повторением
- Неслышная _и_
  - _(с русского; `guess: true`)_ выводится при употреблении мягкого знака или всегда мягких согласных
  - _(с английского; `guess: true`)_ выводится только от согласных 'sh', 'ch', 'j'
- Две одинаковые согласные подряд в одном слове **всегда** понимаются как двойной согласный. Значит, если вы включили угадывание неслышных гласных с помощью `guess: true`, будьте готовы, что неслышная гласная между одинаковыми согласными не считывается
- Если `guess: true`, не считываются слоги расширенной каны, которые содержат два согласных подряд, как "тви", "квэ" и т. п
- ***Не используется знак ー***


## reverseKana()

#### Что делает

Оборачивает одну кану в другую

#### Параметры

```ts
reverseKana(kanaText: string, toKana?: string)
```

- text - кана для оборота
- toKana - кана, к которой привести
  - hiragana (по умолчанию)
  - katakana

#### Ограничения

- ***Не используется знак ー***
