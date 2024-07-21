# Functions

_Switch the language to: [Russian](../ru/functions.md)_

In the document the following is written about each function:

- What it does
- Its parameters
- Recommendations
- Limitations

Functions can operate with varying accuracy. To get the best results, follow the recommendations.

The limitations show what inaccuracies you should expect (even when following the recommendations).

_Fast navigation:_

1. [transcriptKana()](#transcriptKanatext-toLang)
2. [transformToKana()](#transformToKanatext-fromLang-toKana)
3. [reverseKana()](#reverseKanatext-toKana)

## transcriptKana(text, toLang)

#### What it does
Transcribes kana to Russian (using Polivanov's system) or English (using Hepburn's revised system) syllables.

_Note that the above systems are not fully utilized. For example, long vowels are marked only by their repetition._

#### Parameters

- text - kana to transcribe
- toLang - _unnecessary_ - language to transcribe to
  - en (default)
  - ru

#### Recommendations

- Separate words with a space

#### Limitations

- The vowel pairs えい, おう are translated letter-by-letter. The resulting output is [ei] and [ou], respectively.


## transformToKana(text, fromLang, toKana)

#### What it does
  
Transforms text written in Russian or English syllables to one of the Japanese syllabaries.
  
#### Parameters
  
- text - string to transform
- fromLang - _unnecessary_ - language to transform from
  - en (default)
  - ru
- toKana - _unnecessary_ - syllabary to transform to
  - hiragana (default)
  - katakana

#### Recommendations
  
- Separate words with a space
- If there is a vowel after a syllabic _n_ (_н_) in a word, accompany the _n_: 
  - _(in English)_ - _'_ - with an apostrophe
  - _(in Russian)_ - _ъ_ - with a hard sign 
- _(in Russian)_ If you encounter an devoiced vowel and the consonant of that syllable is soft, use the soft sign _ь_

#### Limitations
  
- The longness of vowels is shown only by their repetition
- Devoiced い 
  - _(from English)_ is derived only from 'sh', 'ch', 'j' consonants
  - _(from Russian)_ is derived when a soft sign is used or always soft consonants are used
- Two identical consonants in a row in the same word **always** are understood as a double consonant
- ***The sign ー is not used***


## reverseKana(text, toKana)

#### What it does

Reverse one kana into the other.

#### Parameters

- text - kana to reverse
- toKana - _unnecessary_ - kana to reverse to
  - hiragana (default)
  - katakana

#### Limitations

- ***The sign ー is not used***