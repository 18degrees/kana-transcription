# Functions overview

_Switch the language to: [Russian](../ru/functions.md)_

In the document the following is written about each function:

- What it does
- Its parameters
- Recommendations
- Limitations

Functions can operate with varying accuracy. To get the best results, follow the recommendations.

The limitations show what inaccuracies you should expect (even when following the recommendations).

_Fast navigation:_

1. [fromKana()](#fromKana)
2. [toKana()](#toKana)
3. [convertKana()](#convertKana)

> [!NOTE]
> More details on the differences of the systems mentioned below are written in the [separate document](./systems.md)

## fromKana()

#### What it does
Transcribes kana to Russian or English syllables.

#### Parameters

```ts
fromKana(kanaText: string, toLang?: string)
fromKana(kanaText: string, system?: string)
fromKana(kanaText: string, options?: object)
```

- kanaText - a text where the kana is used
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


## convertKana()

#### What it does

Converts one kana into the other.

#### Parameters

```ts
convertKana(kanaText: string, toKana?: string)
```

- text - A text where the kana is used
- toKana - a kana to convert to
  - hiragana (by default)
  - katakana

#### Limitations

- ***The sign ー is not used***
