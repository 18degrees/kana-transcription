//supported extended kana - https://wikipedia.org/wiki/Katakana#Extended_katakana

import { spacesRegExp } from '../common/consts.js'
import { isItSmallKana, isThereKanaAround } from '../common/funcs.js'

export function transcriptKanaRU(kanaText: string): string | null {
    const splitedSentence = kanaText.toLowerCase().split(spacesRegExp)

    const isThereOnlyOneWord = splitedSentence.length === 1

    const transcriptedWords: string[] = []

    for (const word of splitedSentence) {
        const splitedWord = word.split('')

        if (!splitedWord) continue
        
        const isItTheOnlySyllable = splitedWord.length === 1
        
        const transcriptedSplitedWord: string[] = []
        
        splitedWord.forEach((kana, index) => {
            let transcriptedSyllable = kana

            switch (kana) {
                case 'あ':
                case 'ア': 
                    transcriptedSyllable = 'а'
                    break
                case 'い':
                    transcriptedSyllable = 'и'
                    break
                case 'イ': {
                    //для учёта расширенной катаканы
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && isItSmallKana(nextSyllable)) {
                        transcriptedSyllable = 'й'
                    } else {
                        transcriptedSyllable = 'и'
                    }
                    break
                }
                case 'う':
                    transcriptedSyllable = 'у'
                    break
                case 'ウ': {
                    //для учёта расширенной катаканы
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && isItSmallKana(nextSyllable)) {
                        transcriptedSyllable = 'в'
                    } else {
                        transcriptedSyllable = 'у'
                    }
                    break
                }
                case 'え':
                case 'エ':
                    transcriptedSyllable = 'э'
                    break
                case 'お':
                case 'オ':
                    transcriptedSyllable = 'о'
                    break
                case 'か':
                case 'カ':
                    transcriptedSyllable = 'ка'
                    break
                case 'き':
                case 'キ':
                    transcriptedSyllable = 'ки'
                    break
                case 'く':
                    transcriptedSyllable = 'ку'
                    break
                case 'ク': {
                    //для учёта расширенной катаканы
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && nextSyllable === 'ヮ') {
                        transcriptedSyllable = 'к'
                    } else if (nextSyllable && isItSmallKana(nextSyllable)) {
                        transcriptedSyllable = 'кв'
                    } else {
                        transcriptedSyllable = 'ку'
                    }
                    break
                }
                case 'け':
                case 'ケ':
                    transcriptedSyllable = 'кэ'
                    break
                case 'こ':
                case 'コ':
                    transcriptedSyllable = 'ко'
                    break
                case 'が':
                case 'ガ':
                    transcriptedSyllable = 'га'
                    break
                case 'ぎ':
                case 'ギ':
                    transcriptedSyllable = 'ги'
                    break
                case 'ぐ':
                    transcriptedSyllable = 'гу'
                    break
                case 'グ': {
                    //для учёта расширенной катаканы
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && nextSyllable === 'ヮ') {
                        transcriptedSyllable = 'г'
                    } else if (nextSyllable && isItSmallKana(nextSyllable)) {
                        transcriptedSyllable = 'гв'
                    } else {
                        transcriptedSyllable = 'гу'
                    }
                    break
                }
                case 'げ':
                case 'ゲ':
                    transcriptedSyllable = 'гэ'
                    break
                case 'ご':
                case 'ゴ':
                    transcriptedSyllable = 'го'
                    break
                case 'さ':
                case 'サ':
                    transcriptedSyllable = 'са'
                    break
                case 'し':
                case 'シ':
                    transcriptedSyllable = 'си'
                    break
                case 'す':
                case 'ス':
                    transcriptedSyllable = 'су'
                    break
                case 'せ':
                case 'セ':
                    transcriptedSyllable = 'сэ'
                    break
                case 'そ':
                case 'ソ':
                    transcriptedSyllable = 'со'
                    break
                case 'ざ':
                case 'ザ':
                    transcriptedSyllable = 'дза'
                    break
                case 'じ':
                case 'ジ':
                    transcriptedSyllable = 'дзи'
                    break
                case 'ず':
                case 'ズ':
                    transcriptedSyllable = 'дзу'
                    break
                case 'ぜ':
                case 'ゼ':
                    transcriptedSyllable = 'дзэ'
                    break
                case 'ぞ':
                case 'ゾ':
                    transcriptedSyllable = 'дзо'
                    break
                case 'た':
                case 'タ':
                    transcriptedSyllable = 'та'
                    break
                case 'ち':
                case 'チ':
                    transcriptedSyllable = 'ти'
                    break
                case 'つ':
                case 'ツ':
                    transcriptedSyllable = 'цу'
                    break
                case 'て':
                case 'テ':
                    transcriptedSyllable = 'тэ'
                    break
                case 'と':
                    transcriptedSyllable = 'то'
                    break
                case 'ト': {
                    //для учёта расширенной катаканы
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && isItSmallKana(nextSyllable)) {
                        transcriptedSyllable = 'тв'
                    } else {
                        transcriptedSyllable = 'то'
                    }
                    break
                }

                case 'だ':
                case 'ダ':
                    transcriptedSyllable = 'да'
                    break
                case 'ぢ':
                case 'ヂ':
                    transcriptedSyllable = 'дзи'
                    break
                case 'づ':
                case 'ヅ':
                    transcriptedSyllable = 'дзу'
                    break
                case 'で':
                case 'デ':
                    transcriptedSyllable = 'дэ'
                    break
                case 'ど':
                    transcriptedSyllable = 'до'
                    break
                case 'ド': {
                    //для учёта расширенной катаканы
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && isItSmallKana(nextSyllable)) {
                        transcriptedSyllable = 'дв'
                    } else {
                        transcriptedSyllable = 'до'
                    }
                    break
                }
                case 'な':
                case 'ナ':
                    transcriptedSyllable = 'на'
                    break
                case 'に':
                case 'ニ':
                    transcriptedSyllable = 'ни'
                    break
                case 'ぬ':
                    transcriptedSyllable = 'ну'
                    break
                case 'ヌ': {
                    //для учёта расширенной катаканы
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && isItSmallKana(nextSyllable)) {
                        transcriptedSyllable = 'нв'
                    } else {
                        transcriptedSyllable = 'ну'
                    }
                    break
                }
                case 'ね':
                case 'ネ':
                    transcriptedSyllable = 'нэ'
                    break
                case 'の':
                case 'ノ':
                    transcriptedSyllable = 'но'
                    break
                case 'は': {
                    if (!isThereOnlyOneWord) {
                        if (isItTheOnlySyllable) {
                            transcriptedSyllable = 'ва'
                            break
                        } else {
                            const nextSyllable: string | undefined = splitedWord[index + 1]
                            const prevSyllable: string | undefined = splitedWord[index - 1]

                            if (!isThereKanaAround(prevSyllable, nextSyllable)) {
                                transcriptedSyllable = 'ва'
                                break
                            }
                        }
                    }
                    transcriptedSyllable = 'ха'
                    break
                }
                case 'ハ':
                    transcriptedSyllable = 'ха'
                    break
                case 'ひ':
                case 'ヒ':
                    transcriptedSyllable = 'хи'
                    break
                case 'ふ':
                case 'フ':
                    transcriptedSyllable = 'фу'
                    break
                case 'へ': {
                    if (!isThereOnlyOneWord) {
                        if (isItTheOnlySyllable) {
                            transcriptedSyllable = 'э'
                            break
                        } else {
                            const nextSyllable: string | undefined = splitedWord[index + 1]
                            const prevSyllable: string | undefined = splitedWord[index - 1]

                            if (!isThereKanaAround(prevSyllable, nextSyllable)) {
                                transcriptedSyllable = 'э'
                                break
                            }
                        }
                    }
                    transcriptedSyllable = 'хэ'
                    break
                }
                case 'ヘ':
                    transcriptedSyllable = 'хэ'
                    break
                case 'ほ':
                case 'ホ':
                    transcriptedSyllable = 'хо'
                    break
                case 'ば':
                case 'バ':
                    transcriptedSyllable = 'ба'
                    break
                case 'び':
                case 'ビ':
                    transcriptedSyllable = 'би'
                    break
                case 'ぶ':
                    transcriptedSyllable = 'бу'
                    break
                case 'ブ': {
                    //для учёта расширенной катаканы
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && isItSmallKana(nextSyllable)) {
                        transcriptedSyllable = 'бв'
                    } else {
                        transcriptedSyllable = 'бу'
                    }
                    break
                }
                case 'べ':
                case 'ベ':
                    transcriptedSyllable = 'бэ'
                    break
                case 'ぼ':
                case 'ボ':
                    transcriptedSyllable = 'бо'
                    break
                case 'ぱ':
                case 'パ':
                    transcriptedSyllable = 'па'
                    break
                case 'ぴ':
                case 'ピ':
                    transcriptedSyllable = 'пи'
                    break
                case 'ぷ':
                    transcriptedSyllable = 'пу'
                    break
                case 'プ': {
                    //для учёта расширенной катаканы
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && isItSmallKana(nextSyllable)) {
                        transcriptedSyllable = 'пв'
                    } else {
                        transcriptedSyllable = 'пу'
                    }
                    break
                }
                case 'ぺ':
                case 'ペ':
                    transcriptedSyllable = 'пэ'
                    break
                case 'ぽ':
                case 'ポ':
                    transcriptedSyllable = 'по'
                    break
                case 'ま':
                case 'マ':
                    transcriptedSyllable = 'ма'
                    break
                case 'み':
                case 'ミ':
                    transcriptedSyllable = 'ми'
                    break
                case 'む':
                    transcriptedSyllable = 'му'
                    break
                case 'ム': {
                    //для учёта расширенной катаканы
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && isItSmallKana(nextSyllable)) {
                        transcriptedSyllable = 'мв'
                    } else {
                        transcriptedSyllable = 'му'
                    }
                    break
                }
                case 'め':
                case 'メ':
                    transcriptedSyllable = 'мэ'
                    break
                case 'も':
                case 'モ':
                    transcriptedSyllable = 'мо'
                    break
                case 'や':
                case 'ヤ':
                    transcriptedSyllable = 'я'
                    break
                case 'ゆ':
                case 'ユ':
                    transcriptedSyllable = 'ю'
                    break
                case 'よ':
                case 'ヨ':
                    transcriptedSyllable = 'ё'
                    break
                case 'ら':
                case 'ラ':
                    transcriptedSyllable = 'ра'
                    break
                case 'り':
                case 'リ':
                    transcriptedSyllable = 'ри'
                    break
                case 'る':
                    transcriptedSyllable = 'ру'
                    break
                case 'ル': {
                    //для учёта расширенной катаканы
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && isItSmallKana(nextSyllable)) {
                        transcriptedSyllable = 'рв'
                    } else {
                        transcriptedSyllable = 'ру'
                    }
                    break
                }
                case 'れ':
                case 'レ':
                    transcriptedSyllable = 'рэ'
                    break
                case 'ろ':
                case 'ロ':
                    transcriptedSyllable = 'ро'
                    break
                case 'わ':
                case 'ワ':
                    transcriptedSyllable = 'ва'
                    break
                case 'を': {
                    if (!isThereOnlyOneWord) {
                        if (isItTheOnlySyllable) {
                            transcriptedSyllable = 'о'
                            break
                        } else {
                            const nextSyllable: string | undefined = splitedWord[index + 1]
                            const prevSyllable: string | undefined = splitedWord[index - 1]

                            if (!isThereKanaAround(prevSyllable, nextSyllable)) {
                                transcriptedSyllable = 'о'
                                break
                            }
                        }
                    }
                    transcriptedSyllable = 'во'
                    break
                }
                case 'ヲ':
                    transcriptedSyllable = 'во'
                    break
                case 'ん': {
                    const nextKana: string | undefined = splitedWord[index + 1]
                    const nextSyllableTranscription: string | null | undefined = nextKana ? transcriptKanaRU(nextKana): undefined

                    const nextLetter = nextSyllableTranscription ? nextSyllableTranscription[0] : undefined

                    if (nextLetter && hasOnlyVowel(nextLetter)) {
                        transcriptedSyllable = 'нъ'
                        break
                    }
                    if (nextLetter === 'б' || nextLetter === 'п' || nextLetter === 'м') {
                        transcriptedSyllable = 'м'
                        break
                    }

                    transcriptedSyllable = 'н'
                    break
                }
                case 'ン':
                    transcriptedSyllable = 'н'
                    break
                case 'ゃ':
                case 'ャ': {
                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription || !prevKana || prevKana === 'ん') break

                    const prevSyllableConsonants = getConsonants(prevSyllableTranscription)

                    if (prevSyllableConsonants) {
                        transcriptedSplitedWord[index - 1] = prevSyllableConsonants
                    }
                    
                    transcriptedSyllable = 'я'
                    break
                }
                case 'ゅ':
                case 'ュ': {
                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription || !prevKana || prevKana === 'ん') break

                    const prevSyllableConsonants = getConsonants(prevSyllableTranscription)

                    if (prevSyllableConsonants) {
                        transcriptedSplitedWord[index - 1] = prevSyllableConsonants
                    }
                    
                    transcriptedSyllable = 'ю'
                    break
                }
                case 'ょ':
                case 'ョ': {
                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription || !prevKana || prevKana === 'ん') break

                    const prevSyllableConsonants = getConsonants(prevSyllableTranscription)

                    if (prevSyllableConsonants) {
                        transcriptedSplitedWord[index - 1] = prevSyllableConsonants
                    }
                    
                    transcriptedSyllable = 'ё'
                    break
                }
                case 'っ':
                case 'ッ': {
                    const nextKana: string | undefined = splitedWord[index + 1]
                    const nextSyllableTranscription: string | null = transcriptKanaRU(nextKana)

                    if (!nextKana || !nextSyllableTranscription) break

                    const nextLetter = nextSyllableTranscription[0]

                    if (!hasOnlyConsonants(nextLetter)) break

                    transcriptedSyllable = (nextKana === 'つ' || nextKana === 'ツ') ? 'т' : nextLetter                                     //По Поливанову っつ пишется как тцу
                    break
                }
                case 'ー': {
                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]
                    
                    if (!prevKana || !prevSyllableTranscription) break

                    const prevLetter = prevSyllableTranscription.slice(-1)

                    if (!hasOnlyVowel(prevLetter)) break

                    const vowelForExtending = (
                        prevLetter === 'я' ? 'а' :
                        prevLetter === 'ю' ? 'у' :
                        prevLetter === 'ё' ? 'о' : prevLetter
                    ) 

                    transcriptedSyllable = vowelForExtending
                    break
                }

                //расширенная кана (преимущественно катакана)

                case 'カ゚':
                    transcriptedSyllable = 'нга'
                    break
                case 'キ゚':
                    transcriptedSyllable = 'нги'
                    break
                case 'ク゚':
                    transcriptedSyllable = 'нгу'
                    break
                case 'ケ゚':
                    transcriptedSyllable = 'нгэ'
                    break
                case 'コ゚':
                    transcriptedSyllable = 'нго'
                    break

                case 'ラ゚':
                    transcriptedSyllable = 'ла'
                    break
                case 'リ゚':
                    transcriptedSyllable = 'ли'
                    break
                case 'ル゚':
                    transcriptedSyllable = 'лу'
                    break
                case 'レ゚':
                    transcriptedSyllable = 'лэ'
                    break
                case 'ロ゚':
                    transcriptedSyllable = 'ло'
                    break

                case 'ァ': {
                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription || !prevKana || prevKana === 'ん') break

                    const prevSyllableConsonants = getConsonants(prevSyllableTranscription)

                    if (prevSyllableConsonants) {
                        transcriptedSplitedWord[index - 1] = prevSyllableConsonants
                    }
                    
                    transcriptedSyllable = 'а'
                    break
                }
                case 'ィ': {
                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription || !prevKana || prevKana === 'ん') break

                    const prevSyllableConsonants = getConsonants(prevSyllableTranscription)

                    if (prevSyllableConsonants) {
                        transcriptedSplitedWord[index - 1] = prevSyllableConsonants
                    }
                    
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && isItSmallKana(nextSyllable)) {
                        transcriptedSyllable = 'й'
                    } else {
                        transcriptedSyllable = 'и'
                    }
                    break
                }
                case 'ゥ': {
                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription || !prevKana || prevKana === 'ん') break

                    const prevSyllableConsonants = getConsonants(prevSyllableTranscription)

                    if (prevSyllableConsonants) {
                        transcriptedSplitedWord[index - 1] = prevSyllableConsonants
                    }
                    
                    transcriptedSyllable = 'у'
                    break
                }
                case 'ェ': {
                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription || !prevKana || prevKana === 'ん') break

                    const prevSyllableConsonants = getConsonants(prevSyllableTranscription)

                    if (prevSyllableConsonants) {
                        transcriptedSplitedWord[index - 1] = prevSyllableConsonants
                    }
                    
                    transcriptedSyllable = (
                        (
                            prevKana === 'ニ' || prevKana === 'ヒ' || prevKana === 'ピ' || prevKana === 'ピ' || 
                            prevKana === 'ミ' || prevKana === 'リ' || prevKana === 'リ゚'
                        ) ? 'йэ' : 'э'
                    )
                    break
                }
                case 'ォ': {
                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription || !prevKana || prevKana === 'ん') break

                    const prevSyllableConsonants = getConsonants(prevSyllableTranscription)

                    if (prevSyllableConsonants) {
                        transcriptedSplitedWord[index - 1] = prevSyllableConsonants
                    }
                    
                    transcriptedSyllable = 'о'
                    break
                }

                case 'ヮ': {
                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription || !prevKana || prevKana === 'ん') break

                    const prevSyllableConsonants = getConsonants(prevSyllableTranscription)

                    if (!prevSyllableConsonants || prevSyllableConsonants.length > 2) break

                    transcriptedSplitedWord[index - 1] = prevSyllableConsonants
                    
                    transcriptedSyllable = 'ва'
                    break
                }

                case 'ヴ': 
                case 'ゔ': 
                    transcriptedSyllable = 'ву'
                    break

                case 'ウ゚': 
                    transcriptedSyllable = 'н'
                    break

                case 'ヰ':
                case 'ゐ':
                    transcriptedSyllable = 'ви'
                    break
                case 'ヱ':
                case 'ゑ':
                    transcriptedSyllable = 'вэ'
                    break

                case 'ヷ':
                    transcriptedSyllable = 'ва'
                    break
                case 'ヸ':
                    transcriptedSyllable = 'ви'
                    break
                case 'ヹ':
                    transcriptedSyllable = 'вэ'
                    break
                case 'ヺ':
                    transcriptedSyllable = 'во'
                    break
                default:
                    break
            }
            transcriptedSplitedWord.push(transcriptedSyllable)
        })
        const transcriptedWord = transcriptedSplitedWord.join('')

        transcriptedWords.push(transcriptedWord)
    }
    const transcriptedText = transcriptedWords.join(' ')

    return transcriptedText
}

function hasOnlyVowel(str: string) {
    const vowelRegExp = /[^аеёийоуэюя]/

    return !str.match(vowelRegExp)
}
function hasOnlyConsonants(str: string) {
    const consonantRegExp = /[^цкнгшщзхфвпрлджчсмтб]/

    return !str.match(consonantRegExp)
}
function getConsonants(str: string) {
    const consonantRegExp = /[цкнгшщзхфвпрлджчсмтб]/g

    const consonants = str.match(consonantRegExp)?.join('')

    return consonants
}