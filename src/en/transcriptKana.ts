//supported extended kana - https://wikipedia.org/wiki/Katakana#Extended_katakana

import { spacesRegExp } from '../common/consts.js'
import { isItSmallKana, isThereKanaAround } from '../common/funcs.js'

export function transcriptKanaEN(kanaText: string): string | null {
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
                    transcriptedSyllable = 'a'
                    break
                case 'い':
                    transcriptedSyllable = 'i'
                    break
                case 'イ': {
                    //для учёта расширенной катаканы
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && isItSmallKana(nextSyllable)) {
                        transcriptedSyllable = 'y'
                    } else {
                        transcriptedSyllable = 'i'
                    }
                    break
                }
                case 'う':
                    transcriptedSyllable = 'u'
                    break
                case 'ウ': {
                    //для учёта расширенной катаканы
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && isItSmallKana(nextSyllable)) {
                        transcriptedSyllable = 'w'
                    } else {
                        transcriptedSyllable = 'u'
                    }
                    break
                }
                case 'え':
                case 'エ':
                    transcriptedSyllable = 'e'
                    break
                case 'お':
                case 'オ':
                    transcriptedSyllable = 'o'
                    break
                case 'か':
                case 'カ':
                    transcriptedSyllable = 'ka'
                    break
                case 'き':
                case 'キ':
                    transcriptedSyllable = 'ki'
                    break
                case 'く':
                    transcriptedSyllable = 'ku'
                    break
                case 'ク': {
                    //для учёта расширенной катаканы
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && nextSyllable === 'ヮ') {
                        transcriptedSyllable = 'k'
                    } else if (nextSyllable && isItSmallKana(nextSyllable)) {
                        transcriptedSyllable = 'kw'
                    } else {
                        transcriptedSyllable = 'ku'
                    }
                    break
                }
                case 'け':
                case 'ケ':
                    transcriptedSyllable = 'ke'
                    break
                case 'こ':
                case 'コ':
                    transcriptedSyllable = 'ko'
                    break
                case 'が':
                case 'ガ':
                    transcriptedSyllable = 'ga'
                    break
                case 'ぎ':
                case 'ギ':
                    transcriptedSyllable = 'gi'
                    break
                case 'ぐ':
                    transcriptedSyllable = 'gu'
                    break
                case 'グ': {
                    //для учёта расширенной катаканы
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && nextSyllable === 'ヮ') {
                        transcriptedSyllable = 'g'
                    } else if (nextSyllable && isItSmallKana(nextSyllable)) {
                        transcriptedSyllable = 'gw'
                    } else {
                        transcriptedSyllable = 'gu'
                    }
                    break
                }
                case 'げ':
                case 'ゲ':
                    transcriptedSyllable = 'ge'
                    break
                case 'ご':
                case 'ゴ':
                    transcriptedSyllable = 'go'
                    break
                case 'さ':
                case 'サ':
                    transcriptedSyllable = 'sa'
                    break
                case 'し':
                case 'シ':
                    transcriptedSyllable = 'shi'
                    break
                case 'す':
                case 'ス':
                    transcriptedSyllable = 'su'
                    break
                case 'せ':
                case 'セ':
                    transcriptedSyllable = 'se'
                    break
                case 'そ':
                case 'ソ':
                    transcriptedSyllable = 'so'
                    break
                case 'ざ':
                case 'ザ':
                    transcriptedSyllable = 'za'
                    break
                case 'じ':
                case 'ジ':
                    transcriptedSyllable = 'ji'
                    break
                case 'ず':
                case 'ズ':
                    transcriptedSyllable = 'zu'
                    break
                case 'ぜ':
                case 'ゼ':
                    transcriptedSyllable = 'ze'
                    break
                case 'ぞ':
                case 'ゾ':
                    transcriptedSyllable = 'zo'
                    break
                case 'た':
                case 'タ':
                    transcriptedSyllable = 'ta'
                    break
                case 'ち':
                case 'チ':
                    transcriptedSyllable = 'chi'
                    break
                case 'つ':
                case 'ツ':
                    transcriptedSyllable = 'tsu'
                    break
                case 'て':
                case 'テ':
                    transcriptedSyllable = 'te'
                    break
                case 'と':
                    transcriptedSyllable = 'to'
                    break
                case 'ト': {
                    //для учёта расширенной катаканы
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && isItSmallKana(nextSyllable)) {
                        transcriptedSyllable = 'tw'
                    } else {
                        transcriptedSyllable = 'to'
                    }
                    break
                }

                case 'だ':
                case 'ダ':
                    transcriptedSyllable = 'da'
                    break
                case 'ぢ':
                case 'ヂ':
                    transcriptedSyllable = 'ji'
                    break
                case 'づ':
                case 'ヅ':
                    transcriptedSyllable = 'zu'
                    break
                case 'で':
                case 'デ':
                    transcriptedSyllable = 'de'
                    break
                case 'ど':
                    transcriptedSyllable = 'do'
                    break
                case 'ド': {
                    //для учёта расширенной катаканы
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && isItSmallKana(nextSyllable)) {
                        transcriptedSyllable = 'dw'
                    } else {
                        transcriptedSyllable = 'to'
                    }
                    break
                }

                case 'な':
                case 'ナ':
                    transcriptedSyllable = 'na'
                    break
                case 'に':
                case 'ニ':
                    transcriptedSyllable = 'ni'
                    break
                case 'ぬ':
                    transcriptedSyllable = 'nu'
                    break
                case 'ヌ': {
                    //для учёта расширенной катаканы
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && isItSmallKana(nextSyllable)) {
                        transcriptedSyllable = 'nw'
                    } else {
                        transcriptedSyllable = 'nu'
                    }
                    break
                }
                case 'ね':
                case 'ネ':
                    transcriptedSyllable = 'ne'
                    break
                case 'の':
                case 'ノ':
                    transcriptedSyllable = 'no'
                    break
                case 'は': {
                    if (!isThereOnlyOneWord) {
                        if (isItTheOnlySyllable) {
                            transcriptedSyllable = 'wa'
                            break
                        } else {
                            const nextSyllable: string | undefined = splitedWord[index + 1]
                            const prevSyllable: string | undefined = splitedWord[index - 1]

                            if (!isThereKanaAround(prevSyllable, nextSyllable)) {
                                transcriptedSyllable = 'wa'
                                break
                            }
                        }
                    }
                    transcriptedSyllable = 'ha'
                    break
                }
                case 'ハ':
                    transcriptedSyllable = 'ha'
                    break
                case 'ひ':
                case 'ヒ':
                    transcriptedSyllable = 'hi'
                    break
                case 'ふ':
                case 'フ':
                    transcriptedSyllable = 'fu'
                    break
                case 'へ': {
                    if (!isThereOnlyOneWord) {
                        if (isItTheOnlySyllable) {
                            transcriptedSyllable = 'e'
                            break
                        } else {
                            const nextSyllable: string | undefined = splitedWord[index + 1]
                            const prevSyllable: string | undefined = splitedWord[index - 1]

                            if (!isThereKanaAround(prevSyllable, nextSyllable)) {
                                transcriptedSyllable = 'e'
                                break
                            }
                        }
                    }
                    transcriptedSyllable = 'he'
                    break
                }
                case 'ヘ':
                    transcriptedSyllable = 'he'
                    break
                case 'ほ':
                case 'ホ':
                    transcriptedSyllable = 'ho'
                    break
                case 'ば':
                case 'バ':
                    transcriptedSyllable = 'ba'
                    break
                case 'び':
                case 'ビ':
                    transcriptedSyllable = 'bi'
                    break
                case 'ぶ':
                    transcriptedSyllable = 'bu'
                    break
                case 'ブ': {
                    //для учёта расширенной катаканы
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && isItSmallKana(nextSyllable)) {
                        transcriptedSyllable = 'bw'
                    } else {
                        transcriptedSyllable = 'bu'
                    }
                    break
                }
                case 'べ':
                case 'ベ':
                    transcriptedSyllable = 'be'
                    break
                case 'ぼ':
                case 'ボ':
                    transcriptedSyllable = 'bo'
                    break
                case 'ぱ':
                case 'パ':
                    transcriptedSyllable = 'pa'
                    break
                case 'ぴ':
                case 'ピ':
                    transcriptedSyllable = 'pi'
                    break
                case 'ぷ':
                    transcriptedSyllable = 'pu'
                    break
                case 'プ': {
                    //для учёта расширенной катаканы
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && isItSmallKana(nextSyllable)) {
                        transcriptedSyllable = 'pw'
                    } else {
                        transcriptedSyllable = 'pu'
                    }
                    break
                }

                case 'ぺ':
                case 'ペ':
                    transcriptedSyllable = 'pe'
                    break
                case 'ぽ':
                case 'ポ':
                    transcriptedSyllable = 'po'
                    break
                case 'ま':
                case 'マ':
                    transcriptedSyllable = 'ma'
                    break
                case 'み':
                case 'ミ':
                    transcriptedSyllable = 'mi'
                    break
                case 'む':
                    transcriptedSyllable = 'mu'
                    break
                case 'ム': {
                    //для учёта расширенной катаканы
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && isItSmallKana(nextSyllable)) {
                        transcriptedSyllable = 'mw'
                    } else {
                        transcriptedSyllable = 'mu'
                    }
                    break
                }
                case 'め':
                case 'メ':
                    transcriptedSyllable = 'me'
                    break
                case 'も':
                case 'モ':
                    transcriptedSyllable = 'mo'
                    break
                case 'や':
                case 'ヤ':
                    transcriptedSyllable = 'ya'
                    break
                case 'ゆ':
                case 'ユ':
                    transcriptedSyllable = 'yu'
                    break
                case '𛀁':
                case 'エ':
                    transcriptedSyllable = 'ye'
                    break
                case 'よ':
                case 'ヨ':
                    transcriptedSyllable = 'yo'
                    break
                case 'ら':
                case 'ラ':
                    transcriptedSyllable = 'ra'
                    break
                case 'り':
                case 'リ':
                    transcriptedSyllable = 'ri'
                    break
                case 'る':
                    transcriptedSyllable = 'ru'
                    break
                case 'ル': {
                    //для учёта расширенной катаканы
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && isItSmallKana(nextSyllable)) {
                        transcriptedSyllable = 'rw'
                    } else {
                        transcriptedSyllable = 'ru'
                    }
                    break
                }

                case 'れ':
                case 'レ':
                    transcriptedSyllable = 're'
                    break
                case 'ろ':
                case 'ロ':
                    transcriptedSyllable = 'ro'
                    break
                case 'わ':
                case 'ワ':
                    transcriptedSyllable = 'wa'
                    break
                case 'を': {
                    if (!isThereOnlyOneWord) {
                        if (isItTheOnlySyllable) {
                            transcriptedSyllable = 'o'
                            break
                        } else {
                            const nextSyllable: string | undefined = splitedWord[index + 1]
                            const prevSyllable: string | undefined = splitedWord[index - 1]

                            if (!isThereKanaAround(prevSyllable, nextSyllable)) {
                                transcriptedSyllable = 'o'
                                break
                            }
                        }
                    }
                    transcriptedSyllable = 'wo'
                    break
                }
                case 'ヲ':
                    transcriptedSyllable = 'wo'
                    break
                case 'ん': {
                    const nextKana: string | undefined = splitedWord[index + 1]
                    const nextSyllableTranscription: string | null | undefined = nextKana ? transcriptKanaEN(nextKana) : undefined

                    const nextLetter = nextSyllableTranscription ? nextSyllableTranscription[0] : undefined

                    if (nextLetter && hasOnlyVowel(nextLetter)) {
                        transcriptedSyllable = "n'"
                        break
                    }
                    transcriptedSyllable = 'n'
                    break
                }
                case 'ン':
                    transcriptedSyllable = 'n'
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
                    
                    transcriptedSyllable = (
                        (prevSyllableConsonants && prevSyllableConsonants.length !== 2) || prevKana === 'ツ' ? 'ya' : 'a'
                    )
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
                    
                    transcriptedSyllable = (
                        (prevSyllableConsonants && prevSyllableConsonants.length !== 2) || prevKana === 'ツ' ? 'yu' : 'u'
                    )
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
                    
                    transcriptedSyllable = (
                        (prevSyllableConsonants && prevSyllableConsonants.length !== 2) || prevKana === 'ツ' ? 'yo' : 'o'
                    )
                    break
                }
                case 'っ':
                case 'ッ': {
                    const nextKana: string | undefined = splitedWord[index + 1]
                    const nextSyllableTranscription: string | null = transcriptKanaEN(nextKana)

                    if (!nextKana || !nextSyllableTranscription) break

                    const nextLetter = nextSyllableTranscription[0]

                    if (!hasOnlyConsonants(nextLetter)) break

                    transcriptedSyllable = (nextKana === 'ち' || nextKana === 'チ') ? 't' : nextLetter                                     //По Хепбёрну っち пишется как tchi
                    break
                }
                case 'ー': {
                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]
                    
                    if (!prevKana || !prevSyllableTranscription) break

                    const prevLetter = prevSyllableTranscription.slice(-1)

                    if (!hasOnlyVowel(prevLetter)) break

                    const vowelForExtending = prevLetter

                    transcriptedSyllable = vowelForExtending
                    break
                }

                //расширенная кана (преимущественно катакана)

                case 'カ゚':
                    transcriptedSyllable = 'nga'
                    break
                case 'キ゚':
                    transcriptedSyllable = 'ngi'
                    break
                case 'ク゚':
                    transcriptedSyllable = 'ngu'
                    break
                case 'ケ゚':
                    transcriptedSyllable = 'nge'
                    break
                case 'コ゚':
                    transcriptedSyllable = 'ngo'
                    break

                case 'ラ゚':
                    transcriptedSyllable = 'la'
                    break
                case 'リ゚':
                    transcriptedSyllable = 'li'
                    break
                case 'ル゚':
                    transcriptedSyllable = 'lu'
                    break
                case 'レ゚':
                    transcriptedSyllable = 'le'
                    break
                case 'ロ゚':
                    transcriptedSyllable = 'lo'
                    break

                case 'ァ': {
                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription || !prevKana || prevKana === 'ん') break

                    const prevSyllableConsonants = getConsonants(prevSyllableTranscription)

                    if (prevSyllableConsonants) {
                        transcriptedSplitedWord[index - 1] = prevSyllableConsonants
                    }
                    
                    transcriptedSyllable = 'a'
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
                        transcriptedSyllable = 'y'
                    } else {
                        transcriptedSyllable = 'i'
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
                    
                    transcriptedSyllable = 'u'
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
                        ) ? 'ye' : 'e'
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
                    
                    transcriptedSyllable = 'o'
                    break
                }

                case 'ヮ': {
                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription || !prevKana || prevKana === 'ん') break

                    const prevSyllableConsonants = getConsonants(prevSyllableTranscription)

                    if (!prevSyllableConsonants || prevSyllableConsonants.length > 2) break

                    transcriptedSplitedWord[index - 1] = prevSyllableConsonants
                    
                    transcriptedSyllable = 'wa'
                    break
                }

                case 'ヴ': 
                case 'ゔ': 
                    transcriptedSyllable = 'vu'
                    break

                case 'ウ゚': 
                    transcriptedSyllable = 'n'
                    break

                case 'ヰ':
                case 'ゐ':
                    transcriptedSyllable = 'wi'
                    break
                case 'ヱ':
                case 'ゑ':
                    transcriptedSyllable = 'we'
                    break

                case 'ヷ':
                    transcriptedSyllable = 'va'
                    break
                case 'ヸ':
                    transcriptedSyllable = 'vi'
                    break
                case 'ヹ':
                    transcriptedSyllable = 've'
                    break
                case 'ヺ':
                    transcriptedSyllable = 'vo'
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
    const vowelRegExp = /[^aiueoy]/

    return !str.match(vowelRegExp)
}
function hasOnlyConsonants(str: string) {
    const consonantRegExp = /[^ksztfdnhbpmrwj]/

    return !str.match(consonantRegExp)
}
function getConsonants(str: string) {
    const consonantRegExp = /[ksztcfdnhbpmrwj]/g

    const consonants = str.match(consonantRegExp)?.join('')

    return consonants
}