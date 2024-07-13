
import { reverseKana } from "../common/reverseKana.js"
import type { kana } from "../type-common/index.js"

export function transformToKanaEN(text: string, toKana: kana = 'hiragana'): string | null {
    const splitRegExp = /[ksztfdnhbpmrwj]?y?[aiueo]|ts[aiueo]?|ch[aiueo]?|sh[aiueo]?|n'|[ksztfdnhbpmrwj]/g

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
                case 'a':
                    kana = 'あ'
                    break;
                case 'i':
                    kana = 'い'
                    break;
                case 'u':
                    kana = 'う'
                    break;
                case 'e':
                    kana = (isItTheOnlySyllable && !isThereOnlyOneWord) ? 'へ' : 'え'        //также может быть 絵
                    break;
                case 'o':
                    kana = (isItTheOnlySyllable && !isThereOnlyOneWord) ? 'を' : 'お'        //если длина слова 1, и единственный звук в нём - [о] - видимо, речь идёт об を
                    break;
                case 'ka':
                    kana = 'か'
                    break;
                case 'ki':
                    kana = 'き'
                    break;
                case 'ku':
                    kana = 'く'
                    break;
                case 'ke':
                    kana = 'け'
                    break;
                case 'ko':
                    kana = 'こ'
                    break;
        
                case 'ga':
                    kana = 'が'
                    break;
                case 'gi':
                    kana = 'ぎ'
                    break;
                case 'gu':
                    kana = 'ぐ'
                    break;
                case 'ge':
                    kana = 'げ'
                    break;
                case 'go':
                    kana = 'ご'
                    break;
        
                case 'sa':
                    kana = 'さ'
                    break;
                case 'si':
                case 'shi':
                    kana = 'し'
                    break;
                case 'su':
                    kana = 'す'
                    break;
                case 'se':
                    kana = 'せ'
                    break;
                case 'so':
                    kana = 'そ'
                    break;
        
                case 'za':
                    kana = 'ざ'
                    break;
                case 'zi':
                case 'ji':
                    kana = prevSyllable && (prevSyllable === 'ti' || prevSyllable === 'chi') ? 'ぢ' : 'じ'
                    break;
                case 'zu':
                    kana = prevSyllable && (prevSyllable === 'tsu' || prevSyllable === 'tu') ? 'づ' : 'ず'
                    break;
                case 'ze':
                    kana = 'ぜ'
                    break;
                case 'zo':
                    kana = 'ぞ'
                    break;
        
                case 'ta':
                    kana = 'た'
                    break;
                case 'ti':
                case 'chi':
                    kana = 'ち'
                    break;
                case 'tu':
                case 'tsu':
                    kana = 'つ'
                    break;
                case 'te':
                    kana = 'て'
                    break;
                case 'to':
                    kana = 'と'
                    break;
        
                case 'da':
                    kana = 'だ'
                    break;
                case 'de':
                    kana = 'で'
                    break;
                case 'do':
                    kana = 'ど'
                    break;
        
                case 'na':
                    kana = 'な'
                    break;
                case 'ni':
                    kana = 'に'
                    break;
                case 'nu':
                    kana = 'ぬ'
                    break;
                case 'ne':
                    kana = 'ね'
                    break;
                case 'no':
                    kana = 'の'
                    break;
        
                case 'ha':
                    kana = 'は'
                    break;
                case 'hi':
                    kana = 'ひ'
                    break;
                case 'hu':
                case 'fu':
                    kana = 'ふ'
                    break;
                case 'he':
                    kana = 'へ'
                    break;
                case 'ho':
                    kana = 'ほ'
                    break;
        
                case 'ba':
                    kana = 'ば'
                    break;
                case 'bi':
                    kana = 'び'
                    break;
                case 'bu':
                    kana = 'ぶ'
                    break;
                case 'be':
                    kana = 'べ'
                    break;
                case 'bo':
                    kana = 'ぼ'
                    break;
        
                case 'pa':
                    kana = 'ぱ'
                    break;
                case 'pi':
                    kana = 'ぴ'
                    break;
                case 'pu':
                    kana = 'ぷ'
                    break;
                case 'pe':
                    kana = 'ぺ'
                    break;
                case 'po':
                    kana = 'ぽ'
                    break;
        
                case 'ma':
                    kana = 'ま'
                    break;
                case 'mi':
                    kana = 'み'
                    break;
                case 'mu':
                    kana = 'む'
                    break;
                case 'me':
                    kana = 'め'
                    break;
                case 'mo':
                    kana = 'も'
                    break;
        
                case 'ya':
                    kana = 'や'
                    break;
                case 'yu':
                    kana = 'ゆ'
                    break;
                case 'yo':
                    kana = 'よ'
                    break;
        
                case 'ra':
                    kana = 'ら'
                    break;
                case 'ri':
                    kana = 'り'
                    break;
                case 'ru':
                    kana = 'る'
                    break;
                case 're':
                    kana = 'れ'
                    break;
                case 'ro':
                    kana = 'ろ'
                    break;
                
                case 'wa':
                    kana = (isItTheOnlySyllable && !isThereOnlyOneWord) ? 'は' : 'わ'
                    break;
                case 'wo':
                    kana = 'を'
                    break;
                case 'n':
                case "n'":                                                                  //перед гласными такая запись обязательна - иначе не отличить от ряда "на"
                case 'm':
                    kana = 'ん'
                    break;
        
                case 'kya':
                    kana = 'きゃ'
                    break;
                case 'кyu':
                    kana = 'きゅ'
                    break;
                case 'kyo':
                    kana = 'きょ'
                    break;

                case 'sya':
                case 'sha':
                    kana = 'しゃ'
                    break;
                case 'syu':
                case 'shu':
                    kana = 'しゅ'
                    break;
                case 'syo':
                case 'sho':
                    kana = 'しょ'
                    break;
                
                case 'tya':
                case 'cha':
                    kana = 'ちゃ'
                    break;
                case 'tyu':
                case 'chu':
                    kana = 'ちゅ'
                    break;
                case 'tyo':
                case 'cho':
                    kana = 'ちょ'
                    break;
        
                case 'nya':
                    kana = 'にゃ'
                    break;
                case 'nyu':
                    kana = 'にゅ'
                    break;
                case 'nyo':
                    kana = 'にょ'
                    break;
        
                case 'hya':
                    kana = 'ひゃ'
                    break;
                case 'hyu':
                    kana = 'ひゅ'
                    break;
                case 'hyo':
                    kana = 'ひょ'
                    break;
        
                case 'mya':
                    kana = 'みゃ'
                    break;
                case 'myu':
                    kana = 'みゅ'
                    break;
                case 'myo':
                    kana = 'みょ'
                    break;
        
                case 'rya':
                    kana = 'りゃ'
                    break;
                case 'ryu':
                    kana = 'りゅ'
                    break;
                case 'ryo':
                    kana = 'りょ'
                    break;
        
                case 'gya':
                    kana = 'ぎゃ'
                    break;
                case 'gyu':
                    kana = 'ぎゅ'
                    break;
                case 'gyo':
                    kana = 'ぎょ'
                    break;
                
                case 'zya':
                case 'ja':
                    kana = 'じゃ'
                    break;
                case 'zyu':
                case 'ju':
                    kana = 'じゅ'
                    break;
                case 'zyo':
                case 'jo':
                    kana = 'じょ'
                    break;
        
                case 'bya':
                    kana = 'びゃ'
                    break;
                case 'byu':
                    kana = 'びゅ'
                    break;
                case 'byo':
                    kana = 'びょ'
                    break;
        
                case 'pya':
                    kana = 'ぴゃ'
                    break;
                case 'pyu':
                    kana = 'ぴゅ'
                    break;
                case 'pyo':
                    kana = 'ぴょ'
                    break;
        
                default:
                    break;
            }

            const nextSyllable: string | undefined = splitedWord[index + 1]

            const followingLetter: string | undefined = nextSyllable ? nextSyllable[0] : undefined
                        
            const currentSyllableLettersAmount = syllable.length
            
            if (isItLongConsonant()) kana = 'っ'

            if (isItDevoicedVowel()) {
                let correctedSyllable = syllable

                correctedSyllable += 'u'                    //так как в английском нет мягкого знака, отличить неслышную "u" от "i" не получается
                
                const correctedKana = transformToKanaEN(correctedSyllable)
                
                kana = correctedKana ? correctedKana : ''
            }
            hiraganaWord += kana

            function isItLongConsonant(): boolean {
                if (!prevSyllable || !nextSyllable || !followingLetter) return false
                
                if (currentSyllableLettersAmount !== 1) return false
                
                const consideringLetter = syllable
                
                if (!hasOnlyConsonants(consideringLetter)) return false

                if (consideringLetter === 'n' || consideringLetter === 'm') return false
                
                if (!hasOnlyConsonants(followingLetter)) return false
                
                if (consideringLetter === 't' && nextSyllable.slice(0, 2) === 'ch') return true                 //っち по системе Хепбёрна пишется как tchi
                
                if (consideringLetter !== followingLetter) return false
                
                return true
            }
            function isItDevoicedVowel(): boolean {
                if (!hasOnlyConsonants(syllable)) return false
                
                const consonants = getConsonants(syllable)

                if (!consonants) return false

                if (consonants.length > 2) return false

                if (consonants.length === 2 && !(consonants === 'ts' || consonants === 'sh' || consonants === 'ch')) return false

                if (!isItVoicelessConsonants(consonants)) return false

                const nextSyllableConsonants = nextSyllable ? getConsonants(nextSyllable) : undefined

                if (nextSyllableConsonants && !isItVoicelessConsonants(nextSyllableConsonants)) return false

                if (consonants.length === 1 && consonants === followingLetter) return false                 //Вынужденная мера, иначе каждый случай идущих двух подряд согласных будет интерпретироваться и как неслышный гласный, и как двойной согласный одовременно

                if (consonants === 't' && nextSyllableConsonants === 'ch') return false

                return true
                
            }
        }))
        hiraganaWords.push(hiraganaWord)
    }
    const hiraganaText = hiraganaWords.join(' ')

    const kanaText = toKana === 'hiragana' ? hiraganaText : reverseKana(hiraganaText, "katakana")

    return kanaText ? kanaText : null
}


function isItVoicelessConsonants(letters: string) {
    const voicelessConsonantRegExp = /ch|sh|ts|[fkpst]/

    return letters.match(voicelessConsonantRegExp)
}

function hasOnlyConsonants(str: string) {
    const nonConsonantRegExp = /[^ksztfdnhbpmrwj]/

    return !str.match(nonConsonantRegExp)
}
function getConsonants(str: string) {
    const consonantRegExp = /[ksztfdnhbpmrwj]/g

    const consonants = str.match(consonantRegExp)?.join('')

    return consonants
}