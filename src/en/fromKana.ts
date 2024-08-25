//supported extended kana - https://wikipedia.org/wiki/Katakana#Extended_katakana

import { spacesRegExp } from '../common/consts.js'
import { isItSmallKana, isThereKanaAround } from '../common/funcs.js'
import { systemsEN } from '../common/types.js'

export function fromKanaEN(kanaText: string, system: systemsEN = 'hepburn'): string {
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
                case '㋐':
                    transcriptedSyllable = 'a'
                    break
                case 'い':
                case 'イ': 
                case '㋑': {
                    //для учёта расширенной каны
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && isItSmallKana(nextSyllable)) {
                        transcriptedSyllable = 'y'
                    } else {
                        transcriptedSyllable = 'i'
                    }
                    break
                }
                case 'う':
                case 'ウ': 
                case '㋒': {
                    //для учёта расширенной каны
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
                case '㋓':
                    transcriptedSyllable = 'e'
                    break
                case 'お':
                case 'オ':
                case '㋔':
                    transcriptedSyllable = 'o'
                    break

                case 'か':
                case 'カ':
                case '㋕':
                    transcriptedSyllable = 'ka'
                    break
                case 'き':
                case 'キ':
                case '㋖':
                    transcriptedSyllable = 'ki'
                    break
                case 'く':
                case 'ク':
                case '㋗': {
                    //для учёта расширенной каны
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && (nextSyllable === 'ゎ' || nextSyllable === 'ヮ')) {
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
                case '㋘':
                    transcriptedSyllable = 'ke'
                    break
                case 'こ':
                case 'コ':
                case '㋙':
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
                case 'グ': {
                    //для учёта расширенной каны
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && (nextSyllable === 'ゎ' || nextSyllable === 'ヮ')) {
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
                case '㋚':
                    transcriptedSyllable = 'sa'
                    break
                case 'し':
                case 'シ':
                case '㋛':
                    transcriptedSyllable = system === 'hepburn' ? 'shi' : 'si'
                    break
                case 'す':
                case 'ス':
                case '㋜':
                    transcriptedSyllable = 'su'
                    break
                case 'せ':
                case 'セ':
                case '㋝':
                    transcriptedSyllable = 'se'
                    break
                case 'そ':
                case 'ソ':
                case '㋞':
                    transcriptedSyllable = 'so'
                    break

                case 'ざ':
                case 'ザ':
                    transcriptedSyllable = 'za'
                    break
                case 'じ':
                case 'ジ':
                    transcriptedSyllable = system === 'hepburn' ? 'ji' : 'zi'
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
                case '㋟':
                    transcriptedSyllable = 'ta'
                    break
                case 'ち':
                case 'チ':
                case '㋠':
                    transcriptedSyllable = system === 'hepburn' ? 'chi' : 'ti'
                    break
                case 'つ':
                case 'ツ':
                case '㋡':
                    transcriptedSyllable = system === 'hepburn' ? 'tsu' : 'tu'
                    break
                case 'て':
                case 'テ':
                case '㋢':
                    transcriptedSyllable = 'te'
                    break
                case 'と':
                case 'ト':
                case '㋣': {
                    //для учёта расширенной каны
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
                    transcriptedSyllable = system === 'hepburn' ? 'ji' : 'zi'
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
                case 'ド': {
                    //для учёта расширенной каны
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && isItSmallKana(nextSyllable)) {
                        transcriptedSyllable = 'dw'
                    } else {
                        transcriptedSyllable = 'do'
                    }
                    break
                }

                case 'な':
                case 'ナ':
                case '㋤':
                    transcriptedSyllable = 'na'
                    break
                case 'に':
                case 'ニ':
                case '㋥':
                    transcriptedSyllable = 'ni'
                    break
                case 'ぬ':
                case 'ヌ': 
                case '㋦': {
                    //для учёта расширенной каны
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
                case '㋧':
                    transcriptedSyllable = 'ne'
                    break
                case 'の':
                case 'ノ':
                case '㋨':
                    transcriptedSyllable = 'no'
                    break
                case 'は': 
                case 'ハ':
                case '㋩': {
                    if (!isThereOnlyOneWord && system !== 'nihon-shiki') {
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
                case 'ひ':
                case 'ヒ':
                case '㋪':
                    transcriptedSyllable = 'hi'
                    break
                case 'ふ':
                case 'フ':
                case '㋫':
                    transcriptedSyllable = 'fu'
                    break
                case 'へ': 
                case 'ヘ':
                case '㋬': {
                    if (!isThereOnlyOneWord && system !== 'nihon-shiki') {
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
                case 'ほ':
                case 'ホ':
                case '㋭':
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
                case 'ブ': {
                    //для учёта расширенной каны
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
                case 'プ': {
                    //для учёта расширенной каны
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
                case '㋮':
                    transcriptedSyllable = 'ma'
                    break
                case 'み':
                case 'ミ':
                case '㋯':
                    transcriptedSyllable = 'mi'
                    break
                case 'む':
                case 'ム':
                case '㋰': {
                    //для учёта расширенной каны
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
                case '㋱':
                    transcriptedSyllable = 'me'
                    break
                case 'も':
                case 'モ':
                case '㋲':
                    transcriptedSyllable = 'mo'
                    break

                case 'や':
                case 'ヤ':
                case '㋳':
                    transcriptedSyllable = 'ya'
                    break
                case 'ゆ':
                case 'ユ':
                case '㋴':
                    transcriptedSyllable = 'yu'
                    break
                case '𛀁':
                case 'エ':
                    transcriptedSyllable = 'ye'
                    break
                case 'よ':
                case 'ヨ':
                case '㋵':
                    transcriptedSyllable = 'yo'
                    break

                case 'ら':
                case 'ラ':
                case '㋶':
                    transcriptedSyllable = 'ra'
                    break
                case 'り':
                case 'リ':
                case '㋷':
                    transcriptedSyllable = 'ri'
                    break
                case 'る':
                case 'ル':
                case '㋸': {
                    //для учёта расширенной каны
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
                case '㋹':
                    transcriptedSyllable = 're'
                    break
                case 'ろ':
                case 'ロ':
                case '㋺':
                    transcriptedSyllable = 'ro'
                    break
                case 'わ':
                case 'ワ':
                case '㋻':
                    transcriptedSyllable = 'wa'
                    break
                case 'を': 
                case 'ヲ':
                case '㋾': {
                    if (!isThereOnlyOneWord && system !== 'nihon-shiki') {
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
                case 'ん': 
                case 'ン':{
                    const nextKana: string | undefined = splitedWord[index + 1]
                    const nextSyllableTranscription: string | null | undefined = nextKana ? fromKanaEN(nextKana) : undefined

                    const nextLetter = nextSyllableTranscription ? nextSyllableTranscription[0] : undefined

                    if (nextLetter && hasOnlyVowel(nextLetter)) {
                        transcriptedSyllable = "n'"
                        break
                    }
                    transcriptedSyllable = 'n'
                    break
                }
                case 'ゃ':
                case 'ャ': {
                    transcriptedSyllable = 'ya'

                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription || !prevKana || prevKana === 'ん') break

                    const prevSyllableConsonants = getConsonants(prevSyllableTranscription)

                    if (prevSyllableConsonants) {
                        transcriptedSplitedWord[index - 1] = prevSyllableConsonants
                    }
                    
                    transcriptedSyllable = (
                        (prevSyllableConsonants && prevSyllableConsonants.length !== 2) || 
                        //учёт расширенной каны つゃ/ツャ - tsya
                        (system === 'hepburn' && (prevKana === 'つ' || prevKana === 'ツ')) ? 'ya' : 'a'
                    )
                    break
                }
                case 'ゅ':
                case 'ュ': {
                    transcriptedSyllable = 'yu'

                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription || !prevKana || prevKana === 'ん') break

                    const prevSyllableConsonants = getConsonants(prevSyllableTranscription)

                    if (prevSyllableConsonants) {
                        transcriptedSplitedWord[index - 1] = prevSyllableConsonants
                    }
                    
                    transcriptedSyllable = (
                        (prevSyllableConsonants && prevSyllableConsonants.length !== 2) || 
                        //учёт расширенной каны つゅ/ツュ - tsya
                        (system === 'hepburn' && (prevKana === 'つ' || prevKana === 'ツ')) ? 'yu' : 'u'
                    )
                    break
                }
                case 'ょ':
                case 'ョ': {
                    transcriptedSyllable = 'yo'

                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription || !prevKana || prevKana === 'ん') break

                    const prevSyllableConsonants = getConsonants(prevSyllableTranscription)

                    if (prevSyllableConsonants) {
                        transcriptedSplitedWord[index - 1] = prevSyllableConsonants
                    }
                    
                    transcriptedSyllable = (
                        (prevSyllableConsonants && prevSyllableConsonants.length !== 2) || 
                        //учёт расширенной каны つょ/ツョ - tsya
                        (system === 'hepburn' && (prevKana === 'つ' || prevKana === 'ツ')) ? 'yo' : 'o'
                    )
                    break
                }
                case 'っ':
                case 'ッ': {
                    transcriptedSyllable = system === 'hepburn' ? 'tsu' : 'tu'

                    const nextKana: string | undefined = splitedWord[index + 1]
                    const nextSyllableTranscription: string | null = fromKanaEN(nextKana)

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

                //расширенная кана

                case 'か゚':
                case 'カ゚':
                    transcriptedSyllable = 'nga'
                    break
                case 'き゚':
                case 'キ゚':
                    transcriptedSyllable = 'ngi'
                    break
                case 'く゚':
                case 'ク゚':
                    transcriptedSyllable = 'ngu'
                    break
                case 'け゚':
                case 'ケ゚':
                    transcriptedSyllable = 'nge'
                    break
                case 'こ゚':
                case 'コ゚':
                    transcriptedSyllable = 'ngo'
                    break

                case 'ら゚':
                case 'ラ゚':
                    transcriptedSyllable = 'la'
                    break
                case 'り゚':
                case 'リ゚':
                    transcriptedSyllable = 'li'
                    break
                case 'る゚':
                case 'ル゚':
                    transcriptedSyllable = 'lu'
                    break
                case 'れ゚':
                case 'レ゚':
                    transcriptedSyllable = 'le'
                    break
                case 'ろ゚':
                case 'ロ゚':
                    transcriptedSyllable = 'lo'
                    break

                case 'ぁ':
                case 'ァ': {
                    transcriptedSyllable = 'a'

                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription || !prevKana || prevKana === 'ん') break

                    const prevSyllableConsonants = getConsonants(prevSyllableTranscription)

                    if (prevSyllableConsonants) {
                        transcriptedSplitedWord[index - 1] = prevSyllableConsonants
                    }
                    break
                }
                case 'ぃ':
                case 'ィ': {
                    transcriptedSyllable = 'i'

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
                    }
                    break
                }
                case 'ぅ':
                case 'ゥ': {
                    transcriptedSyllable = 'u'

                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription || !prevKana || prevKana === 'ん') break

                    const prevSyllableConsonants = getConsonants(prevSyllableTranscription)

                    if (prevSyllableConsonants) {
                        transcriptedSplitedWord[index - 1] = prevSyllableConsonants
                    }
                    break
                }
                case 'ぇ':
                case 'ェ': {
                    transcriptedSyllable = 'e'

                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription || !prevKana || prevKana === 'ん') break

                    const prevSyllableConsonants = getConsonants(prevSyllableTranscription)

                    if (prevSyllableConsonants) {
                        transcriptedSplitedWord[index - 1] = prevSyllableConsonants
                    }

                    if (
                        prevKana === 'に' || prevKana === 'ニ' ||
                        prevKana === 'ひ' || prevKana === 'ヒ' ||
                        prevKana === 'び' || prevKana === 'ビ' ||
                        prevKana === 'ぴ' || prevKana === 'ピ' ||
                        prevKana === 'み' || prevKana === 'ミ' ||
                        prevKana === 'り' || prevKana === 'リ' ||
                        prevKana === 'り゚' || prevKana === 'リ゚'
                    ) transcriptedSyllable = 'ye'

                    if (
                        system !== 'hepburn' && (
                            prevKana === 'し' || prevKana === 'シ' ||
                            prevKana === 'ち' || prevKana === 'チ' ||
                            prevKana === 'じ' || prevKana === 'ジ' ||
                            prevKana === 'ぢ' || prevKana === 'ヂ' 
                        )
                    ) transcriptedSyllable = 'ye'
                    break
                }
                case 'ぉ':
                case 'ォ': {
                    transcriptedSyllable = 'o'

                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription || !prevKana || prevKana === 'ん') break

                    const prevSyllableConsonants = getConsonants(prevSyllableTranscription)

                    if (prevSyllableConsonants) {
                        transcriptedSplitedWord[index - 1] = prevSyllableConsonants
                    }
                    break
                }
                case 'ゎ':
                case 'ヮ': {
                    transcriptedSyllable = 'wa'

                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription || !prevKana || prevKana === 'ん') break

                    const prevSyllableConsonants = getConsonants(prevSyllableTranscription)

                    if (!prevSyllableConsonants || prevSyllableConsonants.length > 2) break

                    transcriptedSplitedWord[index - 1] = prevSyllableConsonants
                    
                    break
                }

                case 'ゔ':
                case 'ヴ': 
                    transcriptedSyllable = 'vu'
                    break

                case 'ウ゚': 
                    transcriptedSyllable = 'n'
                    break

                case 'ゐ':
                case 'ヰ':
                case '㋼':
                    transcriptedSyllable = 'wi'
                    break
                case 'ゑ':
                case 'ヱ':
                case '㋽':
                    transcriptedSyllable = 'we'
                    break

                case 'わ゙':
                case 'ヷ':
                    transcriptedSyllable = 'va'
                    break
                case 'ゐ゙':
                case 'ヸ':
                    transcriptedSyllable = 'vi'
                    break
                case 'ゑ゙':
                case 'ヹ':
                    transcriptedSyllable = 've'
                    break
                case 'を゙':
                case 'ヺ':
                    transcriptedSyllable = 'vo'
                    break

                //iteration marks

                case 'ゝ':
                case 'ヽ': {
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription) break

                    if (isVoicedSyllable(prevSyllableTranscription)) {
                        const unvoicedSyllable = getUnvoicedSyllable(prevSyllableTranscription)

                        transcriptedSyllable = unvoicedSyllable
                    } else {
                        transcriptedSyllable = prevSyllableTranscription
                    }
                    break
                }
                case 'ゞ':
                case 'ヾ': {
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription) break

                    if (isUnvoicedSyllable(prevSyllableTranscription)) {
                        const voicedSyllable = getVoicedSyllable(prevSyllableTranscription)

                        transcriptedSyllable = voicedSyllable
                    } else {
                        transcriptedSyllable = prevSyllableTranscription
                    }
                    break
                }
                
                //digraph marks

                case 'ゟ':
                    transcriptedSyllable = 'yori'
                    break

                case 'ヿ':
                    transcriptedSyllable = 'koto'
                    break

                //squared kana

                case '㌀':
                    transcriptedSyllable = 'apaato'
                    break
                case '㌁':
                    transcriptedSyllable = system === 'hepburn' ? 'arufa' : 'aruha'
                    break
                case '㌂':
                    transcriptedSyllable = 'anpea'
                    break
                case '㌃':
                    transcriptedSyllable = 'aaru'
                    break
                case '㌄':
                    transcriptedSyllable = 'iningu'
                    break
                case '㌅':
                    transcriptedSyllable = system === 'hepburn' ? 'inchi' : 'inti'
                    break
                case '㌆':
                    transcriptedSyllable = 'uon'
                    break
                case '㌇':
                    transcriptedSyllable = 'esukuudo'
                    break
                case '㌈':
                    transcriptedSyllable = 'eekaa'
                    break
                case '㌉':
                    transcriptedSyllable = 'onsu'
                    break
                case '㌊':
                    transcriptedSyllable = 'oomu'
                    break
                case '㌋':
                    transcriptedSyllable = 'kairi'
                    break
                case '㌌':
                    transcriptedSyllable = 'karatto'
                    break
                case '㌍':
                    transcriptedSyllable = 'karorii'
                    break
                case '㌎':
                    transcriptedSyllable = 'garon'
                    break
                case '㌏':
                    transcriptedSyllable = 'ganma'
                    break
                case '㌐':
                    transcriptedSyllable = 'giga'
                    break
                case '㌑':
                    transcriptedSyllable = 'ginii'
                    break
                case '㌒':
                    transcriptedSyllable = 'kyurii'
                    break
                case '㌓':
                    transcriptedSyllable = 'girudaa'
                    break
                case '㌔':
                    transcriptedSyllable = 'kiro'
                    break
                case '㌕':
                    transcriptedSyllable = 'kiroguramu'
                    break
                case '㌖':
                    transcriptedSyllable = 'kiromeetoru'
                    break
                case '㌗':
                    transcriptedSyllable = 'kirowatto'
                    break
                case '㌘':
                    transcriptedSyllable = 'guramu'
                    break
                case '㌙':
                    transcriptedSyllable = 'guramuton'
                    break
                case '㌚':
                    transcriptedSyllable = 'kuruzeiro'
                    break
                case '㌛':
                    transcriptedSyllable = 'kuroone'
                    break
                case '㌜':
                    transcriptedSyllable = 'keesu'
                    break
                case '㌝':
                    transcriptedSyllable = 'koruna'
                    break
                case '㌞':
                    transcriptedSyllable = 'koopu'
                    break
                case '㌟':
                    transcriptedSyllable = 'saikuru'
                    break
                case '㌠':
                    transcriptedSyllable = system === 'hepburn' ? 'sanchiimu' : 'santiimu'
                    break
                case '㌡':
                    transcriptedSyllable = 'siringu'
                    break
                case '㌢':
                    transcriptedSyllable = system === 'hepburn' ? 'senchi' : 'senti'
                    break
                case '㌣':
                    transcriptedSyllable = 'sento'
                    break
                case '㌤':
                    transcriptedSyllable = 'daasu'
                    break
                case '㌥':
                    transcriptedSyllable = system === 'hepburn' ? 'deshi' : 'desi'
                    break
                case '㌦':
                    transcriptedSyllable = 'doru'
                    break
                case '㌧':
                    transcriptedSyllable = 'ton'
                    break
                case '㌨':
                    transcriptedSyllable = 'nano'
                    break
                case '㌩':
                    transcriptedSyllable = 'notto'
                    break
                case '㌪':
                    transcriptedSyllable = system === 'hepburn' ? 'haitsu' : 'haitu'
                    break
                case '㌫':
                    transcriptedSyllable = 'paasento'
                    break
                case '㌬':
                    transcriptedSyllable = system === 'hepburn' ? 'paatsu' : 'paatu'
                    break
                case '㌭':
                    transcriptedSyllable = 'baareru'
                    break
                case '㌮':
                    transcriptedSyllable = 'piasutoru'
                    break
                case '㌯':
                    transcriptedSyllable = 'pikuru'
                    break
                case '㌰':
                    transcriptedSyllable = 'piko'
                    break
                case '㌱':
                    transcriptedSyllable = 'biru'
                    break
                case '㌲':
                    transcriptedSyllable = system === 'hepburn' ? 'faraddo' : 'haraddo'
                    break
                case '㌳':
                    transcriptedSyllable = system === 'hepburn' ? 'fiito' : 'hiito'
                    break
                case '㌴':
                    transcriptedSyllable = system === 'hepburn' ? 'bussheru' : 'bussyeru'
                    break
                case '㌵':
                    transcriptedSyllable = system === 'hepburn' ? 'furan' : 'huran'
                    break
                case '㌶':
                    transcriptedSyllable = 'hekutaaru'
                    break
                case '㌷':
                    transcriptedSyllable = 'peso'
                    break
                case '㌸':
                    transcriptedSyllable = 'penihi'
                    break
                case '㌹':
                    transcriptedSyllable = system === 'hepburn' ? 'herutsu' : 'herutu'
                    break
                case '㌺':
                    transcriptedSyllable = 'pensu'
                    break
                case '㌻':
                    transcriptedSyllable = system === 'hepburn' ? 'peeji' : 'peezi'
                    break
                case '㌼':
                    transcriptedSyllable = 'beeta'
                    break
                case '㌽':
                    transcriptedSyllable = 'pointo'
                    break
                case '㌾':
                    transcriptedSyllable = 'boruto'
                    break
                case '㌿':
                    transcriptedSyllable = 'hon'
                    break
                case '㍀':
                    transcriptedSyllable = 'pondo'
                    break
                case '㍁':
                    transcriptedSyllable = 'hooru'
                    break
                case '㍂':
                    transcriptedSyllable = 'hoon'
                    break
                case '㍃':
                    transcriptedSyllable = 'maikuro'
                    break
                case '㍄':
                    transcriptedSyllable = 'mairu'
                    break
                case '㍅':
                    transcriptedSyllable = 'mahha'
                    break
                case '㍆':
                    transcriptedSyllable = 'maruku'
                    break
                case '㍇':
                    transcriptedSyllable = system === 'hepburn' ? 'menshon' : 'mensyon'
                    break
                case '㍈':
                    transcriptedSyllable = 'mikuron'
                    break
                case '㍉':
                    transcriptedSyllable = 'miri'
                    break
                case '㍊':
                    transcriptedSyllable = 'miribaaru'
                    break
                case '㍋':
                    transcriptedSyllable = 'mega'
                    break
                case '㍌':
                    transcriptedSyllable = 'megaton'
                    break
                case '㍍':
                    transcriptedSyllable = 'meetoru'
                    break
                case '㍎':
                    transcriptedSyllable = 'yaado'
                    break
                case '㍏':
                    transcriptedSyllable = 'yaaru'
                    break
                case '㍐':
                    transcriptedSyllable = 'yuan'
                    break
                case '㍑':
                    transcriptedSyllable = 'rittoru'
                    break
                case '㍒':
                    transcriptedSyllable = 'rira'
                    break
                case '㍓':
                    transcriptedSyllable = 'rupii'
                    break
                case '㍔':
                    transcriptedSyllable = 'ruuburu'
                    break
                case '㍕':
                    transcriptedSyllable = 'remu'
                    break
                case '㍖':
                    transcriptedSyllable = 'rentogen'
                    break
                case '㍗':
                    transcriptedSyllable = 'watto'
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
function getVowels(str: string) {
    const vowelRegExp = /[aiueoy]/g

    const vowels = str.match(vowelRegExp)?.join('')

    return vowels
}

function hasOnlyConsonants(str: string) {
    const consonantRegExp = /[^kszgtcfdnhbpmrwjvl]/

    return !str.match(consonantRegExp)
}
function getConsonants(str: string) {
    const consonantRegExp = /[kszgtcfdnhbpmrwjvl]/g

    const consonants = str.match(consonantRegExp)?.join('')

    return consonants
}

function isUnvoicedSyllable(syllable: string): boolean {
    return /[kstcfhp]/.test(syllable[0])
}
function isVoicedSyllable(syllable: string): boolean {
    return /[zgdnbmrwjvl]/.test(syllable[0])
}

function getUnvoicedSyllable(syllable: string): string {
    const consonants = getConsonants(syllable)

    if (!consonants) return syllable

    let unvoicedConsonants = '' 

    switch (consonants) {
        case 'g':
            unvoicedConsonants = 'k'
            break

        case 'z':
            unvoicedConsonants = 's'
            break

        case 'd':
            unvoicedConsonants = 't'
            break

        case 'b':
            unvoicedConsonants = 'h'
            break

        case 'j':
            unvoicedConsonants = 'sh'
            break
        default:
            unvoicedConsonants = consonants
    }
    const vowels = getVowels(syllable)

    return vowels ? unvoicedConsonants + vowels : unvoicedConsonants
}

function getVoicedSyllable(syllable: string): string {
    const consonants = getConsonants(syllable)

    if (!consonants) return syllable

    let voicedConsonants = '' 

    switch (consonants) {
        case 'k':
            voicedConsonants = 'g'
            break

        case 'sh':
        case 'ch':
            voicedConsonants = 'j'
            break

        case 's':
        case 'ts':
            voicedConsonants = 'z'
            break
        case 't':
            voicedConsonants = 'd'
            break

        case 'h':
        case 'p':
            voicedConsonants = 'b'
            break
        default:
            voicedConsonants = consonants
    }
    const vowels = getVowels(syllable)

    return vowels ? voicedConsonants + vowels : voicedConsonants
} 