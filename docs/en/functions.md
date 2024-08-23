# Functions overview

_Switch the language to: [Russian](../ru/functions.md)_

In the document the following is written about each function:

- What it does
- Its parameters
- Recommendations
- Limitations
- Usage examples

Functions can operate with varying accuracy. To get the best results, follow the recommendations.

The limitations show what inaccuracies you should expect (even when following the recommendations).

_Related documents:_

- [Reasons for recommendations and limitations](explanation.md)
- [Supported transcription/transliteration systems](systems.md)

_Fast navigation:_

1. [fromKana()](#fromKana)
2. [toKana()](#toKana)
3. [convertKana()](#convertKana)

## fromKana()

#### What it does

Transcribes kana to Russian or English syllables.

#### Parameters

```ts
fromKana(text: string, toLang?: string)
fromKana(text: string, system?: string)
fromKana(text: string, options?: object)
```

- text - a text where a kana is used
- toLang - a language to transcribe to
  - en (by default)
  - ru
- system - a system by which to transcribe

  *for English*
  
    - hepburn (by default)
    - kunrei-shiki
    - nihon-shiki

  *for Russian*
  
    - polivanov (by default)
    - nonstandard-ru
    - static-ru
    
 - options - an object where both optional properties can be included _(although specifying a system is sufficient for full control)_

#### Recommendations

- Separate words with a space

#### Limitations

- The vowel pairs えい, おう are translated letter-by-letter. The resulting output is [ei] and [ou], respectively.

#### Usage examples

```javascript
const kanaText = 'わたし は じぶん に おちゃ を たてました'
// Here the space allows to distinguish whether 'は' and 'を' are in particle position

// Without additional settings - by the Hepburn system
// Same as fromKana(kanaText, 'hepburn') or fromKana(kanaText, 'en')
fromKana(kanaText)
// => 'watashi wa jibun ni ocha o tatemashita'

// By kunrei-shiki
fromKana(kanaText, 'kunrei-shiki')
// => 'watasi wa zibun ni otya o tatemasita'

// Into Russian; the default system is 'polivanov'
// Same as fromKana(kanaText, 'polivanov')
fromKana(kanaText, 'ru')
// => 'ватаси ва дзибун ни отя о татэмасита'

// By nonstandard-ru
fromKana(kanaText, 'nonstandard-ru')
// => 'ватащи ва джибун ни очя о татэмащита'
```

## toKana()

#### What it does
  
Transforms a text written in Russian or English syllables to one of the Japanese syllabary.
  
#### Parameters

```ts
toKana(text: string, fromLang?: string)
toKana(text: string, system?: string)
toKana(text: string, toKana?: string)
toKana(text: string, guess?: boolean)
toKana(text: string, options?: object)
```
  
- text - a text with Russian or English syllables
- fromLang - a language to transform from
  - en (by default)
  - ru
- system - a system by which to transform

  *for English*
  
  - hepburn (by default)
  - kunrei-shiki
  - nihon-shiki

  *for Russian*
  
  - polivanov (by default)
  - nonstandard-ru
  - static-ru

- toKana - a kana to transform to
  - hiragana (by default)
  - katakana
- guess - enable the option to guess devoiced vowels
  - false (by default)
  - true
- options - object that allows you to customize all the above additional properties

> [!IMPORTANT]
> guess allows processing text with inaudible vowels, but this mode causes some of the following recommendations and limitations

#### Recommendations
  
- Separate words with a space
- If there is a vowel after a syllabic _n_ (_н_) in a word, accompany the _n_: 
  - _(in English)_ - _'_ - with an apostrophe
  - _(in Russian)_ - _ъ_ - with a hard sign 
- _(in Russian; `guess: true`)_ If your text contains syllables with a missing devoiced vowel, accompany the soft consonants of such syllables with the soft sign _ь_.

#### Limitations
  
- The longness of vowels is shown only by their repetition
- Devoiced _i_ 
  - _(from English; `guess: true`)_ is derived only from 'sh', 'ch', 'j' consonants
  - _(from Russian; `guess: true`)_ is derived when a soft sign is used or always soft consonants are used
- Two identical consonants in a row in the same word **always** count as a double consonant. So, if you enable devoiced vowel guessing with `guess: true', be prepared that a devoiced vowel between identical consonants will not be recognized
- If `guess: true`, extended kana syllables that contain two consonants in a row like "twi", "kwe", etc. are not recognized
- ***The sign ー is not used***

#### Usage examples

##### Parameters _fromLang_ and _system_

```javascript
// No additional settings; text is understood by the Hepburn system
// Same as toKana([text], 'hepburn') or toKana([text], 'en')
toKana('watashi wa jibun ni ocha o tatemashita')
// => 'わたし は じぶん に おちゃ を たてました'

// By kunrei-shiki
toKana('watasi wa zibun ni otya o tatemasita', 'kunrei-shiki')
// => 'わたし は じぶん に おちゃ を たてました'

// From Russian; by the Polivanov system by default 
// Same as toKana([text], 'polivanov')
toKana('ватаси ва дзибун ни отя о татэмасита', 'ru')
// => 'わたし は じぶん に おちゃ を たてました'

// By nonstandard-ru
toKana('ватащи ва джибун ни очя о татэмащита', 'nonstandard-ru')
// => 'わたし は じぶん に おちゃ を たてました'
```

##### Parameter _toKana_

```javascript
//Since no system is specified, it is assumed that the text is by Hepburn
toKana('watashi wa jibun ni ocha o tatemashita', 'katakana')
// => 'ワタシ ハ ジブン ニ オチャ ヲ タテマシタ'
```

##### Parameter guess

```javascript
//Since no system is specified, it is assumed that the text is by Hepburn
toKana('des, mashta', true)
// => `です, ました'
```

##### Parameter _options_

Suppose my kunrei-shiki text has a missing devoiced vowel, and I need to convert this text to katakana.

```javascript
const text = 'hisasi buri des ne'
const options = {
	system: 'kunrei-shiki',
    toKana: 'katakana',
    guess: true
}
toKana(text, options)
// => 'ヒサシ ブリ デス ネ'
```

## convertKana()

#### What it does

Converts one kana into the other.

#### Parameters

```ts
convertKana(text: string, toKana?: string)
```

- text - a text where a kana is used
- toKana - a kana to convert to
  - hiragana (by default)
  - katakana

#### Limitations

- ***The sign ー is not used***

#### Usage examples

```javascript
convertkana('タクシー')
// => 'たくしい'

//BUT
convertkana('たくしい', 'katakana')
// => 'タクシイ'
```