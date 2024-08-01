import { spacesRegExp } from '../common/consts.js'
import { reverseKana } from "../reverseKana.js"
import type { systemsRU, toKanaCommonOptions } from "../common/types.js"

interface extraProps extends toKanaCommonOptions {
    system?: systemsRU
}

export function transformToKanaRU(text: string, options?: extraProps): string | null {
    const {toKana = 'hiragana', system = 'polivanov', guess = false} = options ? options : {}

    const splitRegExp = (
        guess ? /[цкнгшщзхфвпрлджчсмтб]?й?[аеёийоуэюя]|дз[аеёийоуэюя]|дж[аеёийоуэюя]|нъ|[цкнгшщзхфвпрлджчсмтб]ь|./g :
        /[цкнгшщзхфвпрлджчсмтб]?в?й?[аеёийоуэюя]|дз[аеёийоуэюя]|дж[аеёийоуэюя]|нъ|[цкнгшщзхфвпрлджчсмтб]ь|./g
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
                    kana = (system !== 'static-ru' && isItTheOnlySyllable && !isThereOnlyOneWord) ? 'へ' : 'え'        //также может быть 絵
                    break;
                case 'о':
                    kana = (system !== 'static-ru' && isItTheOnlySyllable && !isThereOnlyOneWord) ? 'を' : 'お'        //если длина слова 1, и единственный звук в нём - [о] - видимо, речь идёт об を
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
                    kana = 'げ'
                    break;
                case 'го':
                    kana = 'ご'
                    break;
        
                case 'са':
                    kana = 'さ'
                    break;
                case 'си':
                    kana = system === 'polivanov' ? 'し' : 'すぃ'
                    break;
                case 'су':
                    kana = 'す'
                    break;
                case 'сэ':
                    kana = 'せ'
                    break;
                case 'со':
                    kana = 'そ'
                    break;
        
                case 'дза':
                    kana = 'ざ'
                    break;
                case 'дзи':
                    if (system !== 'nonstandard-ru') {
                        kana = prevSyllable && prevSyllable === 'ти'  ? 'ぢ' : 'じ'
                    } else {
                        kana = 'づぃ'
                    }
                    break;
                case 'дзу':
                    kana = prevSyllable && prevSyllable === 'цу' ? 'づ' : 'ず'
                    break;
                case 'дзэ':
                    kana = 'ぜ'
                    break;
                case 'дзо':
                    kana = 'ぞ'
                    break;
        
                case 'та':
                    kana = 'た'
                    break;
                case 'ти':
                    kana = system !== 'nonstandard-ru' ? 'ち' : 'てぃ'
                    break;
                case 'цу':
                    kana = 'つ'
                    break;
                case 'тэ':
                    kana = 'て'
                    break;
                case 'то':
                    kana = 'と'
                    break;
        
                case 'да':
                    kana = 'だ'
                    break;
                case 'дэ':
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
                    kana = 'れ'
                    break;
                case 'ро':
                    kana = 'ろ'
                    break;
                
                case 'ва':
                    kana = (system !== 'static-ru' && isItTheOnlySyllable && !isThereOnlyOneWord) ? 'は' : 'わ'
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
                    if (system === 'polivanov') kana = 'しゃ'
                    break;
                case 'сю':
                    if (system === 'polivanov') kana = 'しゅ'
                    break;
                case 'сё':
                    if (system === 'polivanov') kana = 'しょ'
                    break;
                
                case 'тя':
                    if (system === 'polivanov') kana = 'ちゃ'
                    break;
                case 'тю':
                    kana = system !== 'nonstandard-ru' ? 'ちゅ' : 'てゅ'
                    break;
                case 'тё':
                    if (system === 'polivanov') kana = 'ちょ'
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
                    kana = system !== 'nonstandard-ru' ? 'じゃ' : 'づゃ'
                    break;
                case 'дзю':
                    kana = system !== 'nonstandard-ru' ? 'じゅ' : 'づゅ'
                    break;
                case 'дзё':
                    kana = system !== 'nonstandard-ru' ? 'じょ' : 'づょ'
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
        
                //расширенная кана и системы не по Поливанову

                case 'щи':
                    if (system === 'nonstandard-ru') kana = 'し'
                    break

                case 'джи':
                    if (system === 'nonstandard-ru') kana = prevSyllable && prevSyllable === 'чи' ? 'ぢ' : 'じ'
                    break

                case 'чи':
                    if (system === 'nonstandard-ru') kana = 'ち'
                    break

                case 'щя':
                    if (system === 'nonstandard-ru') kana = 'しゃ'
                    break;
                case 'щю':
                    if (system === 'nonstandard-ru') kana = 'しゅ'
                    break;
                case 'щё':
                    if (system === 'nonstandard-ru') kana = 'しょ'
                    break;

                case 'чя':
                    if (system === 'nonstandard-ru') kana = 'ちゃ'
                    break;
                case 'чю':
                    if (system === 'nonstandard-ru') kana = 'ちゅ'
                    break;
                case 'чё':
                    if (system === 'nonstandard-ru') kana = 'ちょ'
                    break;

                case 'джя':
                    if (system === 'nonstandard-ru') kana = 'じゃ'
                    break;
                case 'джю':
                    if (system === 'nonstandard-ru') kana = 'じゅ'
                    break;
                case 'джё':
                    if (system === 'nonstandard-ru') kana = 'じょ'
                    break;

                case 'йи':
                    kana = 'いぃ'
                    break
                case 'йэ':
                    kana = 'いぇ'
                    break

                case 'ви':
                    kana = 'ゔぃ'
                    break
                case 'ву':
                    kana = 'ゔ'
                    break
                case 'вэ':
                    kana = 'ゔぇ'
                    break
                case 'во':
                    kana = 'ゔぉ'
                    break

                case 'вя':
                    kana = 'ゔゃ'
                    break
                case 'вю':
                    kana = 'ゔゅ'
                    break
                case 'вйэ':
                    kana = 'ゔぃぇ'
                    break
                case 'вё':
                    kana = 'ゔょ'
                    break

                case 'кйэ':
                    kana = 'きぇ'
                    break
                case 'гйэ':
                    kana = 'ぎぇ'
                    break

                case 'ква':
                    kana = 'くぁ'
                    break
                case 'кви':
                    kana = 'くぃ'
                    break
                case 'квэ':
                    kana = 'くぇ'
                    break
                case 'кво':
                    kana = 'くぉ'
                    break

                case 'гва':
                    kana = 'ぐぁ'
                    break
                case 'гви':
                    kana = 'ぐぃ'
                    break
                case 'гвэ':
                    kana = 'ぐぇ'
                    break
                case 'гво':
                    kana = 'ぐぉ'
                    break

                case 'щэ':
                    if (system !== 'nonstandard-ru') kana = 'しぇ'
                    break
                case 'джэ':
                    if (system !== 'nonstandard-ru') kana = 'じぇ'
                    break

                case 'чэ':
                    if (system !== 'nonstandard-ru') kana = 'ちぇ'
                    break


                case 'ца':
                    if (system === 'nonstandard-ru') kana = 'つぁ'
                    break
                case 'ци':
                    if (system === 'nonstandard-ru') kana = 'つぃ'
                    break
                case 'цэ':
                    if (system === 'nonstandard-ru') kana = 'つぇ'
                    break
                case 'цо':
                    if (system === 'nonstandard-ru') kana = 'つぉ'
                    break

                case 'ця':
                    if (system === 'nonstandard-ru') kana = 'つゃ'
                    break
                case 'цю':
                    if (system === 'nonstandard-ru') kana = 'つゅ'
                    break
                case 'цйэ':
                    if (system === 'nonstandard-ru') kana = 'つぃぇ'
                    break
                case 'цё':
                    if (system === 'nonstandard-ru') kana = 'つョ'
                    break

                case 'дзйэ':
                    kana = 'づぃぇ'
                    break

                case 'ту':
                    kana = 'とぅ'
                    break;
                case 'тви':
                    kana = 'とぃ'
                    break

                case 'ди':
                    kana = 'でぃ'
                    break
                case 'ду':
                    kana = 'どぅ'
                    break

                case 'дви':
                    kana = 'どぃ'
                    break
                case 'дю':
                    kana = 'でゅ'
                    break

                case 'нви':
                    kana = 'ぬぃ'
                    break
                case 'нйэ':
                    kana = 'にぇ'
                    break

                case 'хйэ':
                    kana = 'ひぇ'
                    break

                case 'бви':
                    kana = 'ぶぃ'
                    break
                case 'бйэ':
                    kana = 'びぇ'
                    break

                case 'пви':
                    kana = 'ぷぃ'
                    break
                case 'пйэ':
                    kana = 'ぴぇ'
                    break

                case 'фа':
                    kana = 'ふぁ'
                    break
                case 'фи':
                    kana = 'ふぃ'
                    break
                case 'фэ':
                    kana = 'ふぇ'
                    break
                case 'фо':
                    kana = 'ふぉ'
                    break

                case 'фя':
                    kana = 'ふゃ'
                    break
                case 'фю':
                    kana = 'ふゅ'
                    break
                case 'фйэ':
                    kana = 'ふぃぇ'
                    break
                case 'фё':
                    kana = 'ふょ'
                    break

                case 'ху':
                    kana = 'ほぅ'
                    break

                case 'мви':
                    kana = 'むぃ'
                    break
                case 'мйэ':
                    kana = 'みぇ'
                    break

                case 'рви':
                    kana = 'るぃ'
                    break
                case 'рйэ':
                    kana = 'りぇ'
                    break
            
                case 'ла':
                    kana = 'ら゚'
                    break
                case 'ли':
                    kana = 'り゚'
                    break
                case 'лу':
                    kana = 'る゚'
                    break
                case 'лэ':
                    kana = 'れ゚'
                    break
                case 'ло':
                    kana = 'ろ゚'
                    break

                case 'ля':
                    kana = 'り゚ゃ'
                    break
                case 'лю':
                    kana = 'り゚ゅ'
                    break
                case 'лйэ':
                    kana = 'り゚ぇ'
                    break
                case 'лё':
                    kana = 'り゚ょ'
                    break
                default:
                    break;
            }

            const nextSyllable: string | undefined = splitedWord[index + 1]

            const followingLetter: string | undefined = nextSyllable ? nextSyllable[0] : undefined
            
            const isThereSoftSign = syllable[1] === 'ь'
            
            const currentSyllableLettersAmount = syllable.length
            
            if (isItLongConsonant()) kana = 'っ'

            if (guess && isItDevoicedVowel()) {
                let correctedSyllable = syllable

                if (isThereSoftSign || isItAlwaysSoftConsonant(correctedSyllable)) {

                    correctedSyllable += 'и'
                } else {
                    correctedSyllable += 'у'
                }
                
                const correctedKana = transformToKanaRU(correctedSyllable, options)
                
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