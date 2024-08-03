# Writing difficulties

_Switch the language to: [Russian](../ru/explanation.md)_

_I am not an expert in this subject, and my only connection with the Japanese language is my desire to learn it._

Some peculiarities of Japanese pronunciation and writing are described here. These peculiarities are the reasons for the difficulties I encountered in writing the kana-transcription mini-library.

>_transformToKana()_
>
>1. [Dependence of syllable reading on position](#dependence-of-syllable-reading-on-position)
>2. [Different notation of vowel longness](#different-notation-of-vowel-longness)
>3. [Separation of row _na_ and syllabic _n_](#separation-of-row-na-and-syllabic-n)
>4. [Defenition of a devoiced vowel and a long consonant](#definition-of-a-devoiced-vowel-and-a-long-consonant)
>5. [Devoiced vowel: _i_ or _u_?](#devoiced-vowel-i-or-u)
>6. [Extended kana. Two consonants](#extended-kana-two-consonants)
>
>_transcriptKana()_
>
>7. [Particle recognition](#particle-recognition)
>8. [Understanding the syllable _n_](#understanding-the-syllable-n)
>9. [Recognizing long vowels](#recognizing-long-vowels)
>
>_reverseKana()_
>
>10. [Recognizing long vowels in hiragana](#recognizing-long-vowels-in-hiragana)


## Introduction

### Alphabet

In addition to hieroglyphs, Japanese writing uses two syllabic alphabets (kana): hiragana and katakana. Each alphabet has 46 characters, each of which stands for a syllable (except for ん/ン, which stands for the consonant _n_). As a result, each syllable has two characters to represent it in writing, one from hiragana and one from katakana.

|| w|r|y|m|h|n|t|s|k| |согл/глас|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
||わ/ワ|ら/ラ|や/ヤ|ま/マ|は/ハ|な/ナ|た/タ|さ/サ|か/カ|あ/ア|a|
|||り/リ||み/ミ|ひ/ヒ|に/ニ|ち/チ (chi)|し/シ (shi)|き/キ|い/イ|i|
|||る/ル|ゆ/ユ|む/ム|ふ/フ|ぬ/ヌ|つ/ツ (tsu)|す/ス|く/ク|う/ウ|u|
|||れ/レ||め/メ|へ/ヘ|ね/ネ|て/テ|せ/セ|け/ケ|え/エ|e|
||を|ろ/ロ|よ/ヨ|も/モ|ほ/ホ|の/ノ|と/ト|そ/ソ|こ/コ|お/オ|o|
|ん/ン (n)|

Japanese has more than 46 syllables. Some of the missing ones are indicated in writing by adding special characters to the basic symbols: _nigori ゛_ or _hannigori ゜_.

Extended kana are used to convey sounds that have no counterparts in Japanese. These kana, for example, can convey syllables with two consonants in a row.

#### Hiragana

Often completes a word that is written in hieroglyphics by being parts of it (suffixes). Sometimes hieroglyphs are not used, and the word is written with hiragana only.

It is also used to write some auxiliary parts of speech like particles, conjunctions and adverbs.

#### Katakana

Generally used for two reasons: either when writing foreign words or names; or to make a particular concept stand out (katakana is characterized by its sharper features).

### Speech and Writing Features

#### Word Separation

Spaces and other symbols are not used to separate words, as is typical of hieroglyphic writing. Usually, to separate one word from another, at least one of them must be known.

#### Particles

Some kanas can act as particles. In this case, their pronunciation changes:

- は is pronounced [wa].
- へ is pronounced [e].
- を is pronounced [o].

#### Long vowel

##### Hiragana

It is common to denote the longness of a vowel in different ways depending on the word:

- Doubling is a method common to all vowels
- [i] after [e] _often_ means long [e].
- [u] after [o] _often_ means long [o].

##### Katakana

It's simpler here: for this the _character ー_ is always used.

#### Devoiced vowel

The vowels [i] and [u], which are between or after deaf consonants, are often pronounced more softly, even to the point of being inaudible. Syllables with [i] more often convey soft consonants (ました - [mashta]), and with [u] - hard consonants (です - [des]).

#### Double, or long consonant

It is not uncommon to find words in which the consonant is pronounced longer or with a slight delay. When writing, such a syllable is emphasized by the reduced kana っ (in hiragana) or ッ (in katakana). 

#### Syllable _n_

ん / ン is the only kana that does not end in a vowel sound. It is pronounced differently before different sounds.

#### Characters with the same pronunciation

In the rows _sa_ and _ta_, adding nigori makes two characters each pronounced the same:

|Reading/row|sa|ta|
|----------|:-:|:--:|
|ji|じ/ジ|ぢ/ヂ|
|zu|ず/ズ|づ/ヅ|

The _sa_ row characters are almost always used, but in some cases, such as when the same letter comes before the char, the _ta_ row characters are used. 



## Rationale for difficulties

Above I have tried to give the information needed to understand the problems presented next. I write about things that either have not been solved, or have been partially solved.

_By solution is more often meant not a way out of the situation, but some compromise accepted because I could not find a better way._

### Transform to kana

The motivation for creating the library was to allow people to search for characters using not only kana, but also their own alphabets (now available for Russian and English). Say, if the Japanese alphabet is not installed. This is the responsibility of `transformToKana()`. So ideally the function should pass the exact spelling from the user given transcription.



#### Dependence of syllable reading on position

Relevant when several words or sentence rather than a single word are transforming to kana: particles, syllabic _n_, devoiced vowel - all of these can be handled correctly (or _almost_ correctly) if the position of the symbol in the word is understood.

##### Solution

There is only one condition for understanding the position of a character in a word - if there is something separating the words. Classically, a space is used for this purpose.

From here it is also possible to trace the symbols standing before or after a given syllable (otherwise it would be impossible to tell if a symbol is not the first or the last in the word). This knowledge is used, among other things, to distinguish syllables in the sa - ta rows.



#### Different notation of vowel longness

The long [o] can be equally correctly rendered to kana as おお and as おう. The differences in spelling from word to word are suggested to be memorized, but as for the algorithm spelling is a dead end. Same situation with ええ - えい.

##### Solution (hiragana)

We have to choose the lesser of evils and use the first option. At the expense of this, some words will be written incorrectly, but at least the reading will remain unambiguous.

##### Katakana

The above applies to hiragana, with katakana the situation is more complicated. The lengthening of a vowel is written with the _character ー_. But you can't distinguish whether the vowel is a continuation of the previous vowel, or whether it should be read as a separate element.

##### Solution (katakana)

_The symbol ー_ is **not used** as a result. As with hiragana - some (and even many) words will be written incorrectly, but the correct reading _will not be ruled out_ as an option.



#### Separation of row _na_ and syllabic _n_

The syllabic _n_ can be confused with the _na_ row, since the former can also be followed by vowels. The result is an incorrect entry.

##### Solution

To distinguish syllabic _n_, it is accepted to put a special sign after it:

- _(in English)_ - apostrophe _'_
- _(in Russian)_ - hard sign _ъ_



#### Definition of a devoiced vowel and a long consonant

Since the vowel is inaudible, when two consonants are introduced in a word in a row (and the first consonant is not a syllabic _n_), they are interpreted as either an devoiced vowel or a long consonant. To form a double consonant, the letter must match the next letter, but this is an unreliable method of verification: a devoiced vowel may be followed by a syllable of the same row, causing the consonants to match.

##### Solution

There is no answer per se; I chose the strategy that gives the correct spelling _more often_: if the consonant matches the next consonant, it is a long consonant, otherwise it is an devoiced vowel.



#### Devoiced vowel: _i_ or _u_?

Depending on the languages, the accuracy will vary.

##### Solution (_English_)

There are some consonants that aren't used with _u_ vowel: 'sh', 'ch', 'j'. So, devoiced vowel is considered as _i_ if only written earlier consonants are used. If not - vowel is understood as _u_.

##### Solution (_Russian_)

For Russian, everything is simpler: since the _usually_ devoiced _i_ is used with soft consonants, it remains to distinguish soft from hard consonants. To do this, a soft sign _ь_ must be placed after such a consonant (or the consonant must always be soft, like [щ], [ч]).




#### Extended kana. Two consonants

In extended kana there are a number of symbols that are interpreted as syllables with two consonants in a row. Since the function implies the insertion of vowels between two consonants (understood as two different syllables, the first of which has an devoiced vowel), it is impossible to process such syllables correctly.

##### Solution

Starting from version 2.0.0 with extended kana support, the function does not work by default in the mode of recognizing devoiced vowels. To activate it, you need to set the `guess: true` option. The choice is either to guess devoiced vowels or to support more extended kana.


### Transcription of kana

There are fewer problems here, and they are essentially described earlier. The function is `transcriptKana()`.



#### Particle recognition

Without understanding the position, it is unknown how some kanas are read:

- は - [ha] or [wa] ?
- へ - [he] or [e] ?
- を - [wo] or [o] ?

##### Solution

Separate the words using a space.

However, using the function by passing _copy-paste_ will not be very convenient.



#### Understanding the syllable _n_</h4>

Since its pronunciation changes depending on its position, its transcription should be different.

##### Solution (_English_)

By the revised Hepburn's system we get:
- _n'_ - before vowels
- _n_ - in other cases

##### Solution (_Russian_)

Using Polivanov's system, we deduce:
- _м_ - before the sounds [b], [p], [m]
- _нъ_ - before vowels
- _н_ - in other cases



#### Recognizing long vowels

It can be difficult to distinguish where a construction of two vowels is pronounced as a long first vowel, and where it means two different sounds:
おう can mean both [ou] and [oo]; the same with えい.

##### Solution

To give a person who knows the problems of the algorithm _at least a chance_ to read the word close to the original, I decided to do a letter-by-letter translation. So, from おう we will get _ou_.




### Converting one kana to the other

This function - `reverseKana()` - has only one problem, but it's a serious one.



#### Recognizing long vowels in hiragana

In hiragana, two identical, consecutive vowels can be read in two ways: both as a long vowel and as two separate vowels. Katakana, on the other hand, marks the long vowel with the _special symbol ー_. So, in the course of deriving katakana from hiragana, the function must distinguish between a long vowel and two separate vowels.

Same problem with the ambiguity of the readings おう and えい.

##### Solution

In order not to exclude the correct reading, ***the character ー is not used***. This, unfortunately, often leads to incorrect spelling.
