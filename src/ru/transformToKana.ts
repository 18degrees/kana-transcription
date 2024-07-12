import { reverseKana } from "../common/reverseKana.js"
import type { kana } from "../type-common/index.js"

export function transformToKanaRU(text: string, toKana: kana = 'hiragana'): string | null {
    const splitRegExp = /[цкнгшщзхфвпрлджчсмтб]?[аеёийоуэюя]|дз[аеёийоуэюя]|нъ|[цкнгшщзхфвпрлджчсмтб]ь?/g

    const splitedSentence = text.toLowerCase().split(' ')

    const isThereOnlyOneWord = splitedSentence.length === 1

    const hiraganaWords: string[] = []

    for (const word of splitedSentence) {
        const splitedWord = word.match(splitRegExp)

        if (!splitedWord) continue

        const isItTheOnlySyllable = splitedWord.length === 1

        let hiraganaWord = ''
    
        splitedWord.forEach(((syllable, index) => {
            const prevSyllable: string | undefined = splitedWord[index - 1]

            let kana = ''

            switch (syllable) {
                case 'а':
                    kana = 'あ'
                    break;
                case 'и':
                case 'й':
                    kana = 'い'
                    break;
                case 'у':
                    kana = 'う'
                    break;
                case 'э':
                case 'е':
                    kana = (isItTheOnlySyllable && !isThereOnlyOneWord) ? 'へ' : 'え'        //также может быть 絵
                    break;
                case 'о':
                    kana = (isItTheOnlySyllable && !isThereOnlyOneWord) ? 'を' : 'お'        //если длина слова 1, и единственный звук в нём - [о] - видимо, речь идёт об を
                    break;
                case 'ка':
                    kana = 'か'
                    break;
                case 'ки':
                    kana = 'き'
                    break;
                case 'ку':
                    kana = 'く'
                    break;
                case 'кэ':
                case 'ке':
                    kana = 'け'
                    break;
                case 'ко':
                    kana = 'こ'
                    break;
        
                case 'га':
                    kana = 'が'
                    break;
                case 'ги':
                    kana = 'ぎ'
                    break;
                case 'гу':
                    kana = 'ぐ'
                    break;
                case 'гэ':
                case 'ге':
                    kana = 'げ'
                    break;
                case 'го':
                    kana = 'ご'
                    break;
        
                case 'са':
                    kana = 'さ'
                    break;
                case 'си':
                case 'щи':
                    kana = 'し'
                    break;
                case 'су':
                    kana = 'す'
                    break;
                case 'сэ':
                case 'се':
                    kana = 'せ'
                    break;
                case 'со':
                    kana = 'そ'
                    break;
        
                case 'дза':
                case 'за':
                    kana = 'ざ'
                    break;
                case 'дзи':
                case 'зи':
                    kana = prevSyllable && (prevSyllable === 'ти' || prevSyllable === 'чи') ? 'ぢ' : 'じ'
                    break;
                case 'дзу':
                case 'зу':
                    kana = prevSyllable && prevSyllable === 'цу' ? 'づ' : 'ず'
                    break;
                case 'дзэ':
                case 'зэ':
                case 'дзе':
                case 'зе':
                    kana = 'ぜ'
                    break;
                case 'дзо':
                case 'зо':
                    kana = 'ぞ'
                    break;
        
                case 'та':
                    kana = 'た'
                    break;
                case 'ти':
                case 'чи':
                    kana = 'ち'
                    break;
                case 'цу':
                    kana = 'つ'
                    break;
                case 'тэ':
                case 'те':
                    kana = 'て'
                    break;
                case 'то':
                    kana = 'と'
                    break;
        
                case 'да':
                    kana = 'だ'
                    break;
                case 'дэ':
                case 'де':
                    kana = 'で'
                    break;
                case 'до':
                    kana = 'ど'
                    break;
        
                case 'на':
                    kana = 'な'
                    break;
                case 'ни':
                    kana = 'に'
                    break;
                case 'ну':
                    kana = 'ぬ'
                    break;
                case 'нэ':
                case 'не':
                    kana = 'ね'
                    break;
                case 'но':
                    kana = 'の'
                    break;
        
                case 'ха':
                    kana = 'は'
                    break;
                case 'хи':
                    kana = 'ひ'
                    break;
                case 'фу':
                    kana = 'ふ'
                    break;
                case 'хэ':
                case 'хе':
                    kana = 'へ'
                    break;
                case 'хо':
                    kana = 'ほ'
                    break;
        
                case 'ба':
                    kana = 'ば'
                    break;
                case 'би':
                    kana = 'び'
                    break;
                case 'бу':
                    kana = 'ぶ'
                    break;
                case 'бэ':
                case 'бе':
                    kana = 'べ'
                    break;
                case 'бо':
                    kana = 'ぼ'
                    break;
        
                case 'па':
                    kana = 'ぱ'
                    break;
                case 'пи':
                    kana = 'ぴ'
                    break;
                case 'пу':
                    kana = 'ぷ'
                    break;
                case 'пэ':
                case 'пе':
                    kana = 'ぺ'
                    break;
                case 'по':
                    kana = 'ぽ'
                    break;
        
                case 'ма':
                    kana = 'ま'
                    break;
                case 'ми':
                    kana = 'み'
                    break;
                case 'му':
                    kana = 'む'
                    break;
                case 'мэ':
                case 'ме':
                    kana = 'め'
                    break;
                case 'мо':
                    kana = 'も'
                    break;
        
                case 'я':
                    kana = 'や'
                    break;
                case 'ю':
                    kana = 'ゆ'
                    break;
                case 'ё':
                    kana = 'よ'
                    break;
        
                case 'ра':
                    kana = 'ら'
                    break;
                case 'ри':
                    kana = 'り'
                    break;
                case 'ру':
                    kana = 'る'
                    break;
                case 'рэ':
                case 'ре':
                    kana = 'れ'
                    break;
                case 'ро':
                    kana = 'ろ'
                    break;
                
                case 'ва':
                    kana = (isItTheOnlySyllable && !isThereOnlyOneWord) ? 'は' : 'わ'
                    break;
                case 'во':
                    kana = 'を'
                    break;
                case 'н':
                case 'нъ':                                                                  //перед гласными такая запись обязательна - иначе не отличить от ряда "на"
                case 'м':
                    kana = 'ん'
                    break;
        
                case 'кя':
                    kana = 'きゃ'
                    break;
                case 'кю':
                    kana = 'きゅ'
                    break;
                case 'кё':
                    kana = 'きょ'
                    break;
        
                case 'ся':
                case 'щя':
                    kana = 'しゃ'
                    break;
                case 'сю':
                case 'щю':
                    kana = 'しゅ'
                    break;
                case 'сё':
                case 'щё':
                    kana = 'しょ'
                    break;
                
                case 'тя':
                case 'чя':
                case 'ча':
                    kana = 'ちゃ'
                    break;
                case 'тю':
                case 'чю':
                case 'чу':
                    kana = 'ちゅ'
                    break;
                case 'тё':
                case 'чё':
                    kana = 'ちょ'
                    break;
        
                case 'ня':
                    kana = 'にゃ'
                    break;
                case 'ню':
                    kana = 'にゅ'
                    break;
                case 'нё':
                    kana = 'にょ'
                    break;
        
                case 'хя':
                    kana = 'ひゃ'
                    break;
                case 'хю':
                    kana = 'ひゅ'
                    break;
                case 'хё':
                    kana = 'ひょ'
                    break;
        
                case 'мя':
                    kana = 'みゃ'
                    break;
                case 'мю':
                    kana = 'みゅ'
                    break;
                case 'мё':
                    kana = 'みょ'
                    break;
        
                case 'ря':
                    kana = 'りゃ'
                    break;
                case 'рю':
                    kana = 'りゅ'
                    break;
                case 'рё':
                    kana = 'りょ'
                    break;
        
                case 'гя':
                    kana = 'ぎゃ'
                    break;
                case 'гю':
                    kana = 'ぎゅ'
                    break;
                case 'гё':
                    kana = 'ぎょ'
                    break;
                
                case 'дзя':
                case 'зя':
                    kana = 'じゃ'
                    break;
                case 'дзю':
                case 'зю':
                    kana = 'じゅ'
                    break;
                case 'дзё':
                case 'зё':
                    kana = 'じょ'
                    break;
        
                case 'бя':
                    kana = 'びゃ'
                    break;
                case 'бю':
                    kana = 'びゅ'
                    break;
                case 'бё':
                    kana = 'びょ'
                    break;
        
                case 'пя':
                    kana = 'ぴゃ'
                    break;
                case 'пю':
                    kana = 'ぴゅ'
                    break;
                case 'пё':
                    kana = 'ぴょ'
                    break;
        
                default:
                    break;
            }

            const nextSyllable: string | undefined = splitedWord[index + 1]

            const followingLetter: string | undefined = nextSyllable ? nextSyllable[0] : undefined
            
            const isThereSoftSign = syllable[1] === 'ь'
            
            const currentSyllableLettersAmount = syllable.length
            
            if (isItLongConsonant()) kana = 'っ'

            if (isItDevoicedVowel()) {
                let correctedSyllable = syllable

                if (isThereSoftSign || isItAlwaysSoftConsonant(correctedSyllable)) {

                    correctedSyllable += 'и'
                } else {
                    correctedSyllable += 'у'
                }
                
                const correctedKana = transformToKanaRU(correctedSyllable)
                
                kana = correctedKana ? correctedKana : ''
            }
            hiraganaWord += kana

            function isItLongConsonant(): boolean {
                
                if (!prevSyllable || !nextSyllable || !followingLetter) return false
                
                if (currentSyllableLettersAmount !== 1) return false
                
                const consideringLetter = syllable
                
                if (!hasOnlyConsonants(consideringLetter)) return false

                if (consideringLetter === 'н' || consideringLetter === 'м') return false                        //Долгота согласных со слогами рядов な и ま выражается ん
                
                if (!hasOnlyConsonants(followingLetter)) return false
                
                if (consideringLetter === 'т' && followingLetter === 'ц') return true                           //っつ по системе Поливанова пишется как тцу
                
                if (consideringLetter !== followingLetter) return false
                
                return true
            }
            function isItDevoicedVowel(): boolean {
                if (currentSyllableLettersAmount !== 1 && !isThereSoftSign) return false

                const consideringLetter = syllable[0]

                if (!isItVoicelessConsonant(consideringLetter)) return false

                if (followingLetter && !isItVoicelessConsonant(followingLetter)) return false

                if (consideringLetter === followingLetter) return false                                         //Вынужденная мера, иначе каждый случай идущих двух подряд согласных будет интерпретироваться и как неслышный гласный, и как двойной согласный одовременно
                
                return true
            }
        }))
        hiraganaWords.push(hiraganaWord)
    }
    const hiraganaText = hiraganaWords.join(' ')

    const kanaText = toKana === 'hiragana' ? hiraganaText : reverseKana(hiraganaText, "katakana")

    return kanaText ? kanaText : null
}

function isItAlwaysSoftConsonant(letter: string) {
    const alwSoftConRegExp = /[чщ]/

    return letter.match(alwSoftConRegExp)
}

function isItVoicelessConsonant(letter: string) {
    const voicelessConsonantRegExp = /[пфктсшхцшщ]/

    return letter.match(voicelessConsonantRegExp)
}
function hasOnlyConsonants(str: string) {
    const consonantRegExp = /[^цкнгшщзхфвпрлджчсмтб]/

    return !str.match(consonantRegExp)
}