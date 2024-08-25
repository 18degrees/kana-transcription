import { spacesRegExp } from '../common/consts.js'
import { convertKana } from "../convertKana.js"
import type { systemsEN, toKanaCommonOptions } from "../common/types.js"

interface extraProps extends toKanaCommonOptions {
    system?: systemsEN
}

export function toKanaEN(text: string, options?: extraProps): string {
    const {toKana = 'hiragana', system = 'hepburn', guess = false} = options ? options : {}

    const splitRegExp = (
        guess ? /[kszgtfdnhbpmrwjvl]?y?[aiueo]|ts?y?[aiueo]?|ch[aiueo]?|sh[aiueo]?|n'|./g :
        /[kszgtfdnhbpmrwjvl]?w?y?[aiueo]|ts?y?[aiueo]?|ch[aiueo]?|sh[aiueo]?|n'|./g 
    )

    const splitedSentence = text.toLowerCase().split(spacesRegExp)

    const isThereOnlyOneWord = splitedSentence.length === 1

    const hiraganaWords: string[] = []

    for (const word of splitedSentence) {
        const splitedWord = word.match(splitRegExp)

        if (!splitedWord) continue

        const isItTheOnlySyllable = splitedWord.length === 1

        let hiraganaWord = ''
    
        splitedWord.forEach(((syllable, index) => {
            const prevSyllable: string | undefined = splitedWord[index - 1]

            let kana = syllable

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
                    kana = (system !== 'nihon-shiki' && isItTheOnlySyllable && !isThereOnlyOneWord) ? 'へ' : 'え'        //также может быть 絵
                    break;
                case 'o':
                    kana = (system !== 'nihon-shiki' && isItTheOnlySyllable && !isThereOnlyOneWord) ? 'を' : 'お'        //если длина слова 1, и единственный звук в нём - [о] - видимо, речь идёт об を
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
                case 'shi':
                    if (system === 'hepburn') kana = 'し'
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
                case 'ji':
                    if (system === 'hepburn') kana = prevSyllable && prevSyllable === 'chi' ? 'ぢ' : 'じ'
                    break;
                case 'zu':
                    kana = prevSyllable && ( (system === 'hepburn' && prevSyllable ==='tsu') || (system !== 'hepburn' && prevSyllable === 'tu') ) ? 'づ' : 'ず'
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
                case 'chi':
                    if (system === 'hepburn') kana = 'ち'
                    break;
                case 'tsu':
                    if (system === 'hepburn') kana = 'つ'
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
                case 'fu':
                    if (system === 'hepburn') kana = 'ふ'
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
                    kana = (system !== 'nihon-shiki' && isItTheOnlySyllable && !isThereOnlyOneWord) ? 'は' : 'わ'
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

                case 'sha':
                    if (system === 'hepburn') kana = 'しゃ'
                    break;
                case 'shu':
                    if (system === 'hepburn') kana = 'しゅ'
                    break;
                case 'sho':
                    if (system === 'hepburn') kana = 'しょ'
                    break;
                
                case 'cha':
                    if (system === 'hepburn') kana = 'ちゃ'
                    break;
                case 'chu':
                    if (system === 'hepburn') kana = 'ちゅ'
                    break;
                case 'cho':
                    if (system === 'hepburn') kana = 'ちょ'
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
                
                case 'ja':
                    if (system === 'hepburn') kana = 'じゃ'
                    break;
                case 'ju':
                    if (system === 'hepburn') kana = 'じゅ'
                    break;
                case 'jo':
                    if (system === 'hepburn') kana = 'じょ'
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

                //расширенная кана и системы не по Хёпберну

                case 'yi':
                    kana = 'いぃ'
                    break
                case 'ye':
                    kana = 'いぇ'
                    break

                case 'wi':
                    kana = 'うぃ'
                    break
                case 'wu':
                    kana = 'うぅ'
                    break
                case 'we':
                    kana = 'うぇ'
                    break

                case 'wya':
                    kana = 'うゃ'
                    break
                case 'wyu':
                    kana = 'うゅ'
                    break
                case 'wye':
                    kana = 'うぃぇ'
                    break
                case 'wyo':
                    kana = 'うょ'
                    break

                case 'va':
                    kana = 'ゔぁ'
                    break
                case 'vi':
                    kana = 'ゔぃ'
                    break
                case 'vu':
                    kana = 'ゔ'
                    break
                case 've':
                    kana = 'ゔぇ'
                    break
                case 'vo':
                    kana = 'ゔぉ'
                    break

                case 'vya':
                    kana = 'ゔゃ'
                    break
                case 'vyu':
                    kana = 'ゔゅ'
                    break
                case 'vye':
                    kana = 'ゔぃぇ'
                    break
                case 'vyo':
                    kana = 'ゔょ'
                    break

                case 'kye':
                    kana = 'きぇ'
                    break
                case 'gye':
                    kana = 'ぎぇ'
                    break

                case 'kwa':
                    kana = 'くぁ'
                    break
                case 'kwi':
                    kana = 'くぃ'
                    break
                case 'kwe':
                    kana = 'くぇ'
                    break
                case 'kwo':
                    kana = 'くぉ'
                    break

                case 'gwa':
                    kana = 'ぐぁ'
                    break
                case 'gwi':
                    kana = 'ぐぃ'
                    break
                case 'gwe':
                    kana = 'ぐぇ'
                    break
                case 'gwo':
                    kana = 'ぐぉ'
                    break

                case 'sya':
                    if (system !== 'hepburn') kana = 'しゃ'
                    break
                case 'syu':
                    if (system !== 'hepburn') kana = 'しゅ'
                    break
                case 'syo':
                    if (system !== 'hepburn') kana = 'しょ'
                    break

                case 'she':
                    if (system === 'hepburn') kana = 'しぇ'
                    break
                case 'je':
                    if (system === 'hepburn') kana = 'じぇ'
                    break
                    
                case 'si':
                    kana = system === 'hepburn' ? 'すぃ' : 'し'
                    break

                case 'che':
                    if (system === 'hepburn') kana = 'ちぇ'
                    break

                case 'tya':
                    if (system !== 'hepburn') kana = 'ちゃ'
                    break
                case 'tyu':
                    if (system !== 'hepburn') kana = 'ちゅ'
                    break
                case 'tyo':
                    if (system !== 'hepburn') kana = 'ちょ'
                    break

                case 'tsa':
                    if (system === 'hepburn') kana = 'つぁ'
                    break
                case 'tsi':
                    if (system === 'hepburn') kana = 'つぃ'
                    break
                case 'tse':
                    if (system === 'hepburn') kana = 'つぇ'
                    break
                case 'tso':
                    if (system === 'hepburn') kana = 'つぉ'
                    break

                case 'tsya':
                    if (system === 'hepburn') kana = 'つゃ'
                    break
                case 'tsyu':
                    if (system === 'hepburn') kana = 'つゅ'
                    break
                case 'tsye':
                    if (system === 'hepburn') kana = 'つぃぇ'
                    break
                case 'tsyo':
                    if (system === 'hepburn') kana = 'つョ'
                    break

                case 'zi':
                    if (system === 'hepburn') {
                        kana = 'づぃ'
                    } else {
                        kana = prevSyllable && prevSyllable === 'ti' ? 'ぢ' : 'じ'
                    }
                    break;

                case 'zya':
                    kana = system === 'hepburn' ? 'づゃ' : 'じゃ'
                    break
                case 'zyu':
                    kana = system === 'hepburn' ? 'づゅ' : 'じゅ'
                    break
                case 'zye':
                    kana = 'づぃぇ'
                    break
                case 'zyo':
                    kana = system === 'hepburn' ? 'づョ' : 'じョ'
                    break

                case 'ti':
                    kana = system === 'hepburn' ? 'てぃ' : 'ち'
                    break
                case 'tu':
                    kana = system === 'hepburn' ? 'とぅ' : 'つ'
                    break;
                case 'twi':
                    kana = 'とぃ'
                    break
                case 'tyu':
                    kana = system === 'hepburn' ? kana = 'てゅ' : 'ちゅ'
                    break

                case 'di':
                    kana = 'でぃ'
                    break
                case 'du':
                    kana = 'どぅ'
                    break

                case 'dwi':
                    kana = 'どぃ'
                    break
                case 'dyu':
                    kana = 'でゅ'
                    break

                case 'nwi':
                    kana = 'ぬぃ'
                    break
                case 'nye':
                    kana = 'にぇ'
                    break

                case 'hyu':
                    kana = 'ひぇ'
                    break

                case 'bwi':
                    kana = 'ぶぃ'
                    break
                case 'bye':
                    kana = 'びぇ'
                    break

                case 'pwi':
                    kana = 'ぷぃ'
                    break
                case 'pye':
                    kana = 'ぴぇ'
                    break

                case 'fa':
                    if (system === 'hepburn') kana = 'ふぁ'
                    break
                case 'fi':
                    if (system === 'hepburn') kana = 'ふぃ'
                    break
                case 'fe':
                    if (system === 'hepburn') kana = 'ふぇ'
                    break
                case 'fo':
                    if (system === 'hepburn') kana = 'ふぉ'
                    break

                case 'fya':
                    if (system === 'hepburn') kana = 'ふゃ'
                    break
                case 'fyu':
                    if (system === 'hepburn') kana = 'ふゅ'
                    break
                case 'fye':
                    if (system === 'hepburn') kana = 'ふぃぇ'
                    break
                case 'fyo':
                    if (system === 'hepburn') kana = 'ふょ'
                    break

                case 'hu':
                    kana = system === 'hepburn' ? 'ほぅ' : 'ふ'
                    break

                case 'mwi':
                    kana = 'むぃ'
                    break
                case 'mye':
                    kana = 'みぇ'
                    break

                case 'rwi':
                    kana = 'るぃ'
                    break
                case 'rye':
                    kana = 'りぇ'
                    break
            
                case 'la':
                    kana = 'ら゚'
                    break
                case 'li':
                    kana = 'り゚'
                    break
                case 'lu':
                    kana = 'る゚'
                    break
                case 'le':
                    kana = 'れ゚'
                    break
                case 'lo':
                    kana = 'ろ゚'
                    break

                case 'lya':
                    kana = 'り゚ゃ'
                    break
                case 'lyu':
                    kana = 'り゚ゅ'
                    break
                case 'lye':
                    kana = 'り゚ぇ'
                    break
                case 'lyo':
                    kana = 'り゚ょ'
                    break
                default:
                    break;
            }

            const nextSyllable: string | undefined = splitedWord[index + 1]

            const followingLetter: string | undefined = nextSyllable ? nextSyllable[0] : undefined
                        
            const currentSyllableLettersAmount = syllable.length
            
            if (isItLongConsonant()) kana = 'っ'

            if (guess && isItDevoicedVowel()) {
                let correctedSyllable = syllable

                if (isItDevoicedI()) {
                    correctedSyllable+= 'i'
                } else {
                    correctedSyllable += 'u'                    //так как в английском нет мягкого знака, отличить неслышную "u" от "i" не получается
                }

                const correctedKana = toKanaEN(correctedSyllable, options)
                
                kana = correctedKana ? correctedKana : ''
            }
            hiraganaWord += kana

            function isItLongConsonant(): boolean {
                if (!nextSyllable || !followingLetter) return false
                
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
            function isItDevoicedI() {
                if (syllable === 'sh' || syllable === 'ch' || syllable === 'j') return true                            //эти звуки не употребляются с /u/
                
                return false
            }
        }))
        hiraganaWords.push(hiraganaWord)
    }
    const hiraganaText = hiraganaWords.join(' ')

    const kanaText = toKana === 'hiragana' ? hiraganaText : convertKana(hiraganaText, "katakana")

    return kanaText
}


function isItVoicelessConsonants(letters: string) {
    const voicelessConsonantRegExp = /ch|sh|ts|[fkpst]/

    return letters.match(voicelessConsonantRegExp)
}

function hasOnlyConsonants(str: string) {
    const nonConsonantRegExp = /[^ksztcgfdnhbpmrwjvl]/

    return !str.match(nonConsonantRegExp)
}
function getConsonants(str: string) {
    const consonantRegExp = /[ksztcgfdnhbpmrwjvl]/g

    const consonants = str.match(consonantRegExp)?.join('')

    return consonants
}