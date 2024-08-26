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
                case 'ｱ':
                    transcriptedSyllable = 'а'
                    break
                case 'い':
                case 'イ':
                case '㋑':
                case 'ｲ': {
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
                case '㋒':
                case 'ｳ': {
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
                case 'ｴ':
                    transcriptedSyllable = 'э'
                    break
                case 'お':
                case 'オ':
                case '㋔':
                case 'ｵ':
                    transcriptedSyllable = 'о'
                    break

                case 'か':
                case 'カ':
                case '㋕':
                case 'ｶ':
                    transcriptedSyllable = 'ка'
                    break
                case 'き':
                case 'キ':
                case '㋖':
                case 'ｷ':
                    transcriptedSyllable = 'ки'
                    break
                case 'く':
                case 'ク':
                case '㋗':
                case 'ｸ': {
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
                case 'ｹ':
                    transcriptedSyllable = 'кэ'
                    break
                case 'こ':
                case 'コ':
                case '㋙':
                case 'ｺ':
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
                case 'ｻ':
                    transcriptedSyllable = 'са'
                    break
                case 'し':
                case 'シ':
                case '㋛':
                case 'ｼ':
                    transcriptedSyllable = system === 'nonstandard-ru' ? 'щи' : 'си'
                    break
                case 'す':
                case 'ス':
                case '㋜':
                case 'ｽ':
                    transcriptedSyllable = 'су'
                    break
                case 'せ':
                case 'セ':
                case '㋝':
                case 'ｾ':
                    transcriptedSyllable = 'сэ'
                    break
                case 'そ':
                case 'ソ':
                case '㋞':
                case 'ｿ':
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
                case 'ﾀ':
                    transcriptedSyllable = 'та'
                    break
                case 'ち':
                case 'チ':
                case '㋠':
                case 'ﾁ':
                    transcriptedSyllable = system === 'nonstandard-ru' ? 'чи' : 'ти'
                    break
                case 'つ':
                case 'ツ':
                case '㋡':
                case 'ﾂ':
                    transcriptedSyllable = 'цу'
                    break
                case 'て':
                case 'テ':
                case '㋢':
                case 'ﾃ':
                    transcriptedSyllable = 'тэ'
                    break
                case 'と':
                case 'ト': 
                case '㋣':
                case 'ﾄ': {
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
                case 'ﾅ':
                    transcriptedSyllable = 'на'
                    break
                case 'に':
                case 'ニ':
                case '㋥':
                case 'ﾆ':
                    transcriptedSyllable = 'ни'
                    break
                case 'ぬ':
                case 'ヌ':
                case '㋦':
                case 'ﾇ': {
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
                case 'ﾈ':
                    transcriptedSyllable = 'нэ'
                    break
                case 'の':
                case 'ノ':
                case '㋨':
                case 'ﾉ':
                    transcriptedSyllable = 'но'
                    break
                case 'は':
                case 'ハ':
                case '㋩':
                case 'ﾊ': {
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
                case 'ﾋ':
                    transcriptedSyllable = 'хи'
                    break
                case 'ふ':
                case 'フ':
                case '㋫':
                case 'ﾌ':
                    transcriptedSyllable = 'фу'
                    break
                case 'へ':
                case 'ヘ':
                case '㋬':
                case 'ﾍ': {
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
                case 'ﾎ':
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
                case 'ﾏ':
                    transcriptedSyllable = 'ма'
                    break
                case 'み':
                case 'ミ':
                case '㋯':
                case 'ﾐ':
                    transcriptedSyllable = 'ми'
                    break
                case 'む':
                case 'ム':
                case '㋰':
                case 'ﾑ': {
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
                case 'ﾒ':
                    transcriptedSyllable = 'мэ'
                    break
                case 'も':
                case 'モ':
                case '㋲':
                case 'ﾓ':
                    transcriptedSyllable = 'мо'
                    break

                case 'や':
                case 'ヤ':
                case '㋳':
                case 'ﾔ':
                    transcriptedSyllable = 'я'
                    break
                case 'ゆ':
                case 'ユ':
                case '㋴':
                case 'ﾕ':
                    transcriptedSyllable = 'ю'
                    break
                case 'よ':
                case 'ヨ':
                case '㋵':
                case 'ﾖ':
                    transcriptedSyllable = 'ё'
                    break

                case 'ら':
                case 'ラ':
                case '㋶':
                case 'ﾗ':
                    transcriptedSyllable = 'ра'
                    break
                case 'り':
                case 'リ':
                case '㋷':
                case 'ﾘ':
                    transcriptedSyllable = 'ри'
                    break
                case 'る':
                case 'ル':
                case '㋸':
                case 'ﾙ': {
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
                case 'ﾚ':
                    transcriptedSyllable = 'рэ'
                    break
                case 'ろ':
                case 'ロ':
                case '㋺':
                case 'ﾛ':
                    transcriptedSyllable = 'ро'
                    break

                case 'わ':
                case 'ワ':
                case '㋻':
                    transcriptedSyllable = 'ва'
                    break
                case 'を': 
                case 'ヲ': 
                case '㋾':
                case 'ｦ': {
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
                case 'ャ':
                case 'ｬ': {
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
                case 'ュ':
                case 'ｭ': {
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
                case 'ョ':
                case 'ｮ': {
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
                case 'ッ':
                case 'ｯ': {
                    transcriptedSyllable = 'цу'

                    const nextKana: string | undefined = splitedWord[index + 1]
                    const nextSyllableTranscription: string | null = fromKanaRU(nextKana)

                    if (!nextKana || !nextSyllableTranscription) break

                    const nextLetter = nextSyllableTranscription[0]

                    if (!hasOnlyConsonants(nextLetter)) break

                    transcriptedSyllable = (nextKana === 'つ' || nextKana === 'ツ') ? 'т' : nextLetter                                     //По Поливанову っつ пишется как тцу
                    break
                }
                case 'ー':
                case 'ｰ': {
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
                case 'ァ':
                case 'ｧ': {
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
                case 'ィ':
                case 'ｨ': {
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
                case 'ゥ':
                case 'ｩ': {
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
                case 'ェ':
                case 'ｪ': {
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

                    if (
                        system !== 'nonstandard-ru' && (
                            prevKana === 'し' || prevKana === 'シ' ||
                            prevKana === 'ち' || prevKana === 'チ' ||
                            prevKana === 'じ' || prevKana === 'ジ' ||
                            prevKana === 'ぢ' || prevKana === 'ヂ' 
                        )
                    ) transcriptedSyllable = 'йэ'
                    break
                }
                case 'ぉ':
                case 'ォ':
                case 'ｫ': {
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

                //squared kana

                case '㌀':
                    transcriptedSyllable = 'апаато'
                    break
                case '㌁':
                    transcriptedSyllable = 'аруфа'
                    break
                case '㌂':
                    transcriptedSyllable = 'анпэа'
                    break
                case '㌃':
                    transcriptedSyllable = 'аару'
                    break
                case '㌄':
                    transcriptedSyllable = 'инингу'
                    break
                case '㌅':
                    transcriptedSyllable = system === 'nonstandard-ru' ? 'инчи' : 'инти'
                    break
                case '㌆':
                    transcriptedSyllable = 'уон'
                    break
                case '㌇':
                    transcriptedSyllable = 'эсукуудо'
                    break
                case '㌈':
                    transcriptedSyllable = 'ээкаа'
                    break
                case '㌉':
                    transcriptedSyllable = 'онсу'
                    break
                case '㌊':
                    transcriptedSyllable = 'оому'
                    break
                case '㌋':
                    transcriptedSyllable = 'каири'
                    break
                case '㌌':
                    transcriptedSyllable = 'каратто'
                    break
                case '㌍':
                    transcriptedSyllable = 'карории'
                    break
                case '㌎':
                    transcriptedSyllable = 'гарон'
                    break
                case '㌏':
                    transcriptedSyllable = 'ганма'
                    break
                case '㌐':
                    transcriptedSyllable = 'гига'
                    break
                case '㌑':
                    transcriptedSyllable = 'гинии'
                    break
                case '㌒':
                    transcriptedSyllable = 'кюрии'
                    break
                case '㌓':
                    transcriptedSyllable = 'гирудаа'
                    break
                case '㌔':
                    transcriptedSyllable = 'киро'
                    break
                case '㌕':
                    transcriptedSyllable = 'кирогураму'
                    break
                case '㌖':
                    transcriptedSyllable = 'киромээтору'
                    break
                case '㌗':
                    transcriptedSyllable = 'кироватто'
                    break
                case '㌘':
                    transcriptedSyllable = 'гураму'
                    break
                case '㌙':
                    transcriptedSyllable = 'гурамутон'
                    break
                case '㌚':
                    transcriptedSyllable = 'курудзэиро'
                    break
                case '㌛':
                    transcriptedSyllable = 'куроонэ'
                    break
                case '㌜':
                    transcriptedSyllable = 'кээсу'
                    break
                case '㌝':
                    transcriptedSyllable = 'коруна'
                    break
                case '㌞':
                    transcriptedSyllable = 'коопу'
                    break
                case '㌟':
                    transcriptedSyllable = 'саикуру'
                    break
                case '㌠':
                    transcriptedSyllable = system === 'nonstandard-ru' ? 'санчииму' : 'сантииму'
                    break
                case '㌡':
                    transcriptedSyllable = 'сирингу'
                    break
                case '㌢':
                    transcriptedSyllable = system === 'nonstandard-ru' ? 'сэнчи' : 'сэнти'
                    break
                case '㌣':
                    transcriptedSyllable = 'сэнто'
                    break
                case '㌤':
                    transcriptedSyllable = 'даасу'
                    break
                case '㌥':
                    transcriptedSyllable = system === 'nonstandard-ru' ? 'дэщи' : 'дэси'
                    break
                case '㌦':
                    transcriptedSyllable = 'дору'
                    break
                case '㌧':
                    transcriptedSyllable = 'тон'
                    break
                case '㌨':
                    transcriptedSyllable = 'нано'
                    break
                case '㌩':
                    transcriptedSyllable = 'нотто'
                    break
                case '㌪':
                    transcriptedSyllable = 'хаицу'
                    break
                case '㌫':
                    transcriptedSyllable = 'паасэнто'
                    break
                case '㌬':
                    transcriptedSyllable = 'паацу'
                    break
                case '㌭':
                    transcriptedSyllable = 'баарэру'
                    break
                case '㌮':
                    transcriptedSyllable = 'пиасутору'
                    break
                case '㌯':
                    transcriptedSyllable = 'пикуру'
                    break
                case '㌰':
                    transcriptedSyllable = 'пико'
                    break
                case '㌱':
                    transcriptedSyllable = 'биру'
                    break
                case '㌲':
                    transcriptedSyllable = 'фараддо'
                    break
                case '㌳':
                    transcriptedSyllable = 'фиито'
                    break
                case '㌴':
                    transcriptedSyllable = system === 'nonstandard-ru' ? 'бущщэру' : 'буссйэру'
                    break
                case '㌵':
                    transcriptedSyllable = 'фуран'
                    break
                case '㌶':
                    transcriptedSyllable = 'хэкутаару'
                    break
                case '㌷':
                    transcriptedSyllable = 'пэсо'
                    break
                case '㌸':
                    transcriptedSyllable = 'пэнихи'
                    break
                case '㌹':
                    transcriptedSyllable = 'хэруцу'
                    break
                case '㌺':
                    transcriptedSyllable = 'пэнсу'
                    break
                case '㌻':
                    transcriptedSyllable = system === 'nonstandard-ru' ? 'пээджи' : 'пээдзи'
                    break
                case '㌼':
                    transcriptedSyllable = 'бээта'
                    break
                case '㌽':
                    transcriptedSyllable = 'поинто'
                    break
                case '㌾':
                    transcriptedSyllable = 'боруто'
                    break
                case '㌿':
                    transcriptedSyllable = 'хон'
                    break
                case '㍀':
                    transcriptedSyllable = 'пондо'
                    break
                case '㍁':
                    transcriptedSyllable = 'хоору'
                    break
                case '㍂':
                    transcriptedSyllable = 'хоон'
                    break
                case '㍃':
                    transcriptedSyllable = 'маикуро'
                    break
                case '㍄':
                    transcriptedSyllable = 'маиру'
                    break
                case '㍅':
                    transcriptedSyllable = 'махха'
                    break
                case '㍆':
                    transcriptedSyllable = 'маруку'
                    break
                case '㍇':
                    transcriptedSyllable = system === 'nonstandard-ru' ? 'мэнщён' : 'мэнсён'
                    break
                case '㍈':
                    transcriptedSyllable = 'микурон'
                    break
                case '㍉':
                    transcriptedSyllable = 'мири'
                    break
                case '㍊':
                    transcriptedSyllable = 'мирибаару'
                    break
                case '㍋':
                    transcriptedSyllable = 'мэга'
                    break
                case '㍌':
                    transcriptedSyllable = 'мэгатон'
                    break
                case '㍍':
                    transcriptedSyllable = 'мээтору'
                    break
                case '㍎':
                    transcriptedSyllable = 'яадо'
                    break
                case '㍏':
                    transcriptedSyllable = 'яару'
                    break
                case '㍐':
                    transcriptedSyllable = 'юан'
                    break
                case '㍑':
                    transcriptedSyllable = 'риттору'
                    break
                case '㍒':
                    transcriptedSyllable = 'рира'
                    break
                case '㍓':
                    transcriptedSyllable = 'рупии'
                    break
                case '㍔':
                    transcriptedSyllable = 'руубуру'
                    break
                case '㍕':
                    transcriptedSyllable = 'рэму'
                    break
                case '㍖':
                    transcriptedSyllable = 'рэнтогэн'
                    break
                case '㍗':
                    transcriptedSyllable = 'ватто'
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