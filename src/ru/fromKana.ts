//supported extended kana - https://wikipedia.org/wiki/Katakana#Extended_katakana

import { spacesRegExp } from '../common/consts.js'
import { isItSmallKana, isThereKanaAround } from '../common/funcs.js'
import { systemsRU } from '../common/types.js'

export function fromKanaRU(kanaText: string, system: systemsRU = 'polivanov'): string {
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
                    transcriptedSyllable = 'а'
                    break
                case 'い':
                case 'イ':
                case '㋑': {
                    //для учёта расширенной каны
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && isItSmallKana(nextSyllable)) {
                        transcriptedSyllable = 'й'
                    } else {
                        transcriptedSyllable = 'и'
                    }
                    break
                }
                case 'う':
                case 'ウ':
                case '㋒': {
                    //для учёта расширенной каны
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
                case '㋓':
                    transcriptedSyllable = 'э'
                    break
                case 'お':
                case 'オ':
                case '㋔':
                    transcriptedSyllable = 'о'
                    break

                case 'か':
                case 'カ':
                case '㋕':
                    transcriptedSyllable = 'ка'
                    break
                case 'き':
                case 'キ':
                case '㋖':
                    transcriptedSyllable = 'ки'
                    break
                case 'く':
                case 'ク':
                case '㋗': {
                    //для учёта расширенной каны
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && (nextSyllable === 'ゎ' || nextSyllable === 'ヮ')) {
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
                case '㋘':
                    transcriptedSyllable = 'кэ'
                    break
                case 'こ':
                case 'コ':
                case '㋙':
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
                case 'グ': {
                    //для учёта расширенной каны
                    const nextSyllable: string | undefined = splitedWord[index + 1]

                    if (nextSyllable && (nextSyllable === 'ゎ' || nextSyllable === 'ヮ')) {
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
                case '㋚':
                    transcriptedSyllable = 'са'
                    break
                case 'し':
                case 'シ':
                case '㋛':
                    transcriptedSyllable = system === 'nonstandard-ru' ? 'щи' : 'си'
                    break
                case 'す':
                case 'ス':
                case '㋜':
                    transcriptedSyllable = 'су'
                    break
                case 'せ':
                case 'セ':
                case '㋝':
                    transcriptedSyllable = 'сэ'
                    break
                case 'そ':
                case 'ソ':
                case '㋞':
                    transcriptedSyllable = 'со'
                    break

                case 'ざ':
                case 'ザ':
                    transcriptedSyllable = 'дза'
                    break
                case 'じ':
                case 'ジ':
                    transcriptedSyllable = system === 'nonstandard-ru' ? 'джи' : 'дзи'
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
                case '㋟':
                    transcriptedSyllable = 'та'
                    break
                case 'ち':
                case 'チ':
                case '㋠':
                    transcriptedSyllable = system === 'nonstandard-ru' ? 'чи' : 'ти'
                    break
                case 'つ':
                case 'ツ':
                case '㋡':
                    transcriptedSyllable = 'цу'
                    break
                case 'て':
                case 'テ':
                case '㋢':
                    transcriptedSyllable = 'тэ'
                    break
                case 'と':
                case 'ト': 
                case '㋣': {
                    //для учёта расширенной каны
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
                    transcriptedSyllable = system === 'nonstandard-ru' ? 'джи' : 'дзи'
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
                case 'ド': {
                    //для учёта расширенной каны
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
                case '㋤':
                    transcriptedSyllable = 'на'
                    break
                case 'に':
                case 'ニ':
                case '㋥':
                    transcriptedSyllable = 'ни'
                    break
                case 'ぬ':
                case 'ヌ':
                case '㋦': {
                    //для учёта расширенной каны
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
                case '㋧':
                    transcriptedSyllable = 'нэ'
                    break
                case 'の':
                case 'ノ':
                case '㋨':
                    transcriptedSyllable = 'но'
                    break
                case 'は':
                case 'ハ':
                case '㋩': {
                    if (!isThereOnlyOneWord && system !== 'static-ru') {
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
                case 'ひ':
                case 'ヒ':
                case '㋪':
                    transcriptedSyllable = 'хи'
                    break
                case 'ふ':
                case 'フ':
                case '㋫':
                    transcriptedSyllable = 'фу'
                    break
                case 'へ':
                case 'ヘ':
                case '㋬': {
                    if (!isThereOnlyOneWord && system !== 'static-ru') {
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
                case 'ほ':
                case 'ホ':
                case '㋭':
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
                case 'ブ': {
                    //для учёта расширенной каны
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
                case 'プ': {
                    //для учёта расширенной каны
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
                case '㋮':
                    transcriptedSyllable = 'ма'
                    break
                case 'み':
                case 'ミ':
                case '㋯':
                    transcriptedSyllable = 'ми'
                    break
                case 'む':
                case 'ム':
                case '㋰': {
                    //для учёта расширенной каны
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
                case '㋱':
                    transcriptedSyllable = 'мэ'
                    break
                case 'も':
                case 'モ':
                case '㋲':
                    transcriptedSyllable = 'мо'
                    break

                case 'や':
                case 'ヤ':
                case '㋳':
                    transcriptedSyllable = 'я'
                    break
                case 'ゆ':
                case 'ユ':
                case '㋴':
                    transcriptedSyllable = 'ю'
                    break
                case 'よ':
                case 'ヨ':
                case '㋵':
                    transcriptedSyllable = 'ё'
                    break

                case 'ら':
                case 'ラ':
                case '㋶':
                    transcriptedSyllable = 'ра'
                    break
                case 'り':
                case 'リ':
                case '㋷':
                    transcriptedSyllable = 'ри'
                    break
                case 'る':
                case 'ル':
                case '㋸': {
                    //для учёта расширенной каны
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
                case '㋹':
                    transcriptedSyllable = 'рэ'
                    break
                case 'ろ':
                case 'ロ':
                case '㋺':
                    transcriptedSyllable = 'ро'
                    break
                case 'わ':
                case 'ワ':
                case '㋻':
                    transcriptedSyllable = 'ва'
                    break
                case 'を': 
                case 'ヲ': 
                case '㋾': {
                    if (!isThereOnlyOneWord && system !== 'static-ru') {
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
                case 'ん': 
                case 'ン': {
                    const nextKana: string | undefined = splitedWord[index + 1]
                    const nextSyllableTranscription: string | null | undefined = nextKana ? fromKanaRU(nextKana): undefined

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

                case 'ゃ':
                case 'ャ': {
                    transcriptedSyllable = 'я'

                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription || !prevKana || prevKana === 'ん') break

                    const prevSyllableConsonants = getConsonants(prevSyllableTranscription)

                    if (prevSyllableConsonants) {
                        transcriptedSplitedWord[index - 1] = prevSyllableConsonants
                    }
                    
                    break
                }
                case 'ゅ':
                case 'ュ': {
                    transcriptedSyllable = 'ю'

                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription || !prevKana || prevKana === 'ん') break

                    const prevSyllableConsonants = getConsonants(prevSyllableTranscription)

                    if (prevSyllableConsonants) {
                        transcriptedSplitedWord[index - 1] = prevSyllableConsonants
                    }
                    
                    break
                }
                case 'ょ':
                case 'ョ': {
                    transcriptedSyllable = 'ё'

                    const prevKana: string | undefined = splitedWord[index - 1]
                    const prevSyllableTranscription: string | undefined = transcriptedSplitedWord[index - 1]

                    if (!prevSyllableTranscription || !prevKana || prevKana === 'ん') break

                    const prevSyllableConsonants = getConsonants(prevSyllableTranscription)

                    if (prevSyllableConsonants) {
                        transcriptedSplitedWord[index - 1] = prevSyllableConsonants
                    }
                    
                    break
                }
                case 'っ':
                case 'ッ': {
                    transcriptedSyllable = 'цу'

                    const nextKana: string | undefined = splitedWord[index + 1]
                    const nextSyllableTranscription: string | null = fromKanaRU(nextKana)

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

                case 'か゚':
                case 'カ゚':
                    transcriptedSyllable = 'нга'
                    break
                case 'き゚':
                case 'キ゚':
                    transcriptedSyllable = 'нги'
                    break
                case 'く゚':
                case 'ク゚':
                    transcriptedSyllable = 'нгу'
                    break
                case 'け゚':
                case 'ケ゚':
                    transcriptedSyllable = 'нгэ'
                    break
                case 'こ゚':
                case 'コ゚':
                    transcriptedSyllable = 'нго'
                    break

                case 'ら゚':
                case 'ラ゚':
                    transcriptedSyllable = 'ла'
                    break
                case 'り゚':
                case 'リ゚':
                    transcriptedSyllable = 'ли'
                    break
                case 'る゚':
                case 'ル゚':
                    transcriptedSyllable = 'лу'
                    break
                case 'れ゚':
                case 'レ゚':
                    transcriptedSyllable = 'лэ'
                    break
                case 'ろ゚':
                case 'ロ゚':
                    transcriptedSyllable = 'ло'
                    break

                case 'ぁ':
                case 'ァ': {
                    transcriptedSyllable = 'а'

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
                    transcriptedSyllable = 'и'

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
                    }
                    break
                }
                case 'ぅ':
                case 'ゥ': {
                    transcriptedSyllable = 'у'

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
                    transcriptedSyllable = 'э'

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
                    ) transcriptedSyllable = 'йэ'
                    break
                }
                case 'ぉ':
                case 'ォ': {
                    transcriptedSyllable = 'о'

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
                    transcriptedSyllable = 'ва'

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
                    transcriptedSyllable = 'ву'
                    break

                case 'ウ゚': 
                    transcriptedSyllable = 'н'
                    break

                case 'ゐ':
                case 'ヰ':
                case '㋼':
                    transcriptedSyllable = 'ви'
                    break
                case 'ゑ':
                case 'ヱ':
                case '㋽':
                    transcriptedSyllable = 'вэ'
                    break

                case 'わ゙':
                case 'ヷ':
                    transcriptedSyllable = 'ва'
                    break
                case 'ゐ゙':
                case 'ヸ':
                    transcriptedSyllable = 'ви'
                    break
                case 'ゑ゙':
                case 'ヹ':
                    transcriptedSyllable = 'вэ'
                    break
                case 'ヺ':
                case 'を゙':
                    transcriptedSyllable = 'во'
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
function getVowels(str: string) {
    const vowelRegExp = /[аеёийоуэюя]/g

    const vowels = str.match(vowelRegExp)?.join('')

    return vowels
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

function isUnvoicedSyllable(syllable: string): boolean {
    return /[цкшщхфпчст]/.test(syllable[0])
}
function isVoicedSyllable(syllable: string): boolean {
    return /[нгзврлджмб]/.test(syllable[0])
}

function getUnvoicedSyllable(syllable: string): string {
    const consonants = getConsonants(syllable)

    if (!consonants) return syllable

    let unvoicedConsonants = '' 

    switch (consonants) {
        case 'г':
            unvoicedConsonants = 'к'
            break

        case 'дз':
        case 'дж':
        case 'щ':
            unvoicedConsonants = 'с'
            break

        case 'д':
            unvoicedConsonants = 'т'
            break

        case 'б':
            unvoicedConsonants = 'х'
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
        case 'к':
            voicedConsonants = 'г'
            break

        case 'с':
        case 'ц':
            voicedConsonants = 'дз'
            break
        case 'щ':
        case 'ч':
            voicedConsonants = 'дж'
            break

        case 'т':
            voicedConsonants = 'д'
            break

        case 'х':
        case 'п':
            voicedConsonants = 'б'
            break
        default:
            voicedConsonants = consonants
    }
    const vowels = getVowels(syllable)

    return vowels ? voicedConsonants + vowels : voicedConsonants
} 