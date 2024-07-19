import { transcriptKanaEN } from "./en/transcriptKana.js"
import type { kana } from './common/types.js'

export function reverseKana(text: string, toKana: kana = 'hiragana'): string | null {
    const allKanaRegExp = /\p{Script=Kana}{1}|\p{Script=Hira}{1}|ー/ug

    const syllabaryToChangeRegExp = toKana === 'hiragana' ? /\p{Script=Kana}{1}|ー/ug : /\p{Script=Hira}{1}/ug

    const splitedWords = text.toLowerCase().split(' ')

    let kanaTransformed: string = ''

    for (const word of splitedWords) {
        const textSplited = word.match(allKanaRegExp)

        if (!textSplited) return null

        const transformedkanaSplited = textSplited.map((kana, index) => {
            const isTransformNeeded = kana.match(syllabaryToChangeRegExp)

            if (!isTransformNeeded) return kana

            switch (kana) {
                case 'あ':
                case 'ア':
                    return toKana === 'hiragana' ? 'あ' : 'ア'
                
                case 'い':
                case 'イ':
                    return toKana === 'hiragana' ? 'い' : 'イ'

                case 'う':
                case 'ウ':
                    return toKana === 'hiragana' ? 'う' : 'ウ'

                case 'え':
                case 'エ':
                    return toKana === 'hiragana' ? 'え' : 'エ'

                case 'お':
                case 'オ':
                    return toKana === 'hiragana' ? 'お' : 'オ'

                case 'か':
                case 'カ':
                    return toKana === 'hiragana' ? 'か' : 'カ'
                    
                case 'き':
                case 'キ':
                    return toKana === 'hiragana' ? 'き' : 'キ'
                
                case 'く':
                case 'ク':
                    return toKana === 'hiragana' ? 'く' : 'ク'
                
                case 'け':
                case 'ケ':
                    return toKana === 'hiragana' ? 'け' : 'ケ'

                case 'こ':
                case 'コ':
                    return toKana === 'hiragana' ? 'こ' : 'コ'
                
                case 'が':
                case 'ガ':
                    return toKana === 'hiragana' ? 'が' : 'ガ'

                case 'ぎ':
                case 'ギ':
                    return toKana === 'hiragana' ? 'ぎ' : 'ギ'

                case 'ぐ':
                case 'グ':
                    return toKana === 'hiragana' ? 'ぐ' : 'グ'

                case 'げ':
                case 'ゲ':
                    return toKana === 'hiragana' ? 'げ' : 'ゲ'

                case 'ご':
                case 'ゴ':
                    return toKana === 'hiragana' ? 'ご' : 'ゴ'

                case 'さ':
                case 'サ':
                    return toKana === 'hiragana' ? 'さ' : 'サ'

                case 'し':
                case 'シ':
                    return toKana === 'hiragana' ? 'し' : 'シ'

                case 'す':
                case 'ス':
                    return toKana === 'hiragana' ? 'す' : 'ス'

                case 'せ':
                case 'セ':
                    return toKana === 'hiragana' ? 'せ' : 'セ'

                case 'そ':
                case 'ソ':
                    return toKana === 'hiragana' ? 'そ' : 'ソ'
                
                case 'ざ':
                case 'ザ':
                    return toKana === 'hiragana' ? 'ざ' : 'ザ'

                case 'じ':
                case 'ジ':
                    return toKana === 'hiragana' ? 'じ' : 'ジ'

                case 'ず':
                case 'ズ':
                    return toKana === 'hiragana' ? 'ず' : 'ズ'

                case 'ぜ':
                case 'ゼ':
                    return toKana === 'hiragana' ? 'ぜ' : 'ゼ'

                case 'ぞ':
                case 'ゾ':
                    return toKana === 'hiragana' ? 'ぞ' : 'ゾ'

                case 'た':
                case 'タ':
                    return toKana === 'hiragana' ? 'た' : 'タ'

                case 'ち':
                case 'チ':
                    return toKana === 'hiragana' ? 'ち' : 'チ'

                case 'つ':
                case 'ツ':
                    return toKana === 'hiragana' ? 'つ' : 'ツ'

                case 'て':
                case 'テ':
                    return toKana === 'hiragana' ? 'て' : 'テ'

                case 'と':
                case 'ト':
                    return toKana === 'hiragana' ? 'と' : 'ト'

                case 'だ':
                case 'ダ':
                    return toKana === 'hiragana' ? 'だ' : 'ダ'

                case 'ぢ':
                case 'ヂ':
                    return toKana === 'hiragana' ? 'ぢ' : 'ヂ'

                case 'ぢ':
                case 'ヂ':
                    return toKana === 'hiragana' ? 'ぢ' : 'ヂ'
                
                case 'づ':
                case 'ヅ':
                    return toKana === 'hiragana' ? 'づ' : 'ヅ'
                
                case 'で':
                case 'デ':
                    return toKana === 'hiragana' ? 'で' : 'デ'

                case 'ど':
                case 'ド':
                    return toKana === 'hiragana' ? 'ど' : 'ド'

                case 'な':
                case 'ナ':
                    return toKana === 'hiragana' ? 'な' : 'ナ'

                case 'に':
                case 'ニ':
                    return toKana === 'hiragana' ? 'に' : 'ニ'

                case 'ぬ':
                case 'ヌ':
                    return toKana === 'hiragana' ? 'ぬ' : 'ヌ'
                
                case 'ね':
                case 'ネ':
                    return toKana === 'hiragana' ? 'ね' : 'ネ'

                case 'の':
                case 'ノ':
                    return toKana === 'hiragana' ? 'の' : 'ノ'

                case 'は':
                case 'ハ':
                    return toKana === 'hiragana' ? 'は' : 'ハ'

                case 'ひ':
                case 'ヒ':
                    return toKana === 'hiragana' ? 'ひ' : 'ヒ'

                case 'ふ':
                case 'フ':
                    return toKana === 'hiragana' ? 'ふ' : 'フ'

                case 'へ':
                case 'ヘ':
                    return toKana === 'hiragana' ? 'へ' : 'ヘ'

                case 'ほ':
                case 'ホ':
                    return toKana === 'hiragana' ? 'ほ' : 'ホ'

                case 'ば':
                case 'バ':
                    return toKana === 'hiragana' ? 'ば' : 'バ'

                case 'び':
                case 'ビ':
                    return toKana === 'hiragana' ? 'び' : 'ビ'

                case 'ぶ':
                case 'ブ':
                    return toKana === 'hiragana' ? 'ぶ' : 'ブ'

                case 'べ':
                case 'ベ':
                    return toKana === 'hiragana' ? 'べ' : 'ベ'

                case 'ぼ':
                case 'ボ':
                    return toKana === 'hiragana' ? 'ぼ' : 'ボ'

                case 'ぱ':
                case 'パ':
                    return toKana === 'hiragana' ? 'ぱ' : 'パ'

                case 'ぴ':
                case 'ピ':
                    return toKana === 'hiragana' ? 'ぴ' : 'ピ'

                case 'ぷ':
                case 'プ':
                    return toKana === 'hiragana' ? 'ぷ' : 'プ'

                case 'ぺ':
                case 'ペ':
                    return toKana === 'hiragana' ? 'ぺ' : 'ペ'

                case 'ぽ':
                case 'ポ':
                    return toKana === 'hiragana' ? 'ぽ' : 'ポ'

                case 'ま':
                case 'マ':
                    return toKana === 'hiragana' ? 'ま' : 'マ'

                case 'み':
                case 'ミ':
                    return toKana === 'hiragana' ? 'み' : 'ミ'

                case 'む':
                case 'ム':
                    return toKana === 'hiragana' ? 'む' : 'ム'

                case 'め':
                case 'メ':
                    return toKana === 'hiragana' ? 'め' : 'メ'

                case 'も':
                case 'モ':
                    return toKana === 'hiragana' ? 'も' : 'モ'

                case 'や':
                case 'ヤ':
                    return toKana === 'hiragana' ? 'や' : 'ヤ'

                case 'ゆ':
                case 'ユ':
                    return toKana === 'hiragana' ? 'ゆ' : 'ユ'

                case 'よ':
                case 'ヨ':
                    return toKana === 'hiragana' ? 'よ' : 'ヨ'

                case 'ら':
                case 'ラ':
                    return toKana === 'hiragana' ? 'ら' : 'ラ'

                case 'り':
                case 'リ':
                    return toKana === 'hiragana' ? 'り' : 'リ'

                case 'る':
                case 'ル':
                    return toKana === 'hiragana' ? 'る' : 'ル'

                case 'れ':
                case 'レ':
                    return toKana === 'hiragana' ? 'れ' : 'レ'

                case 'ろ':
                case 'ロ':
                    return toKana === 'hiragana' ? 'ろ' : 'ロ'

                case 'わ':
                case 'ワ':
                    return toKana === 'hiragana' ? 'わ' : 'ワ'

                case 'を':
                case 'ヲ':
                    return toKana === 'hiragana' ? 'を' : 'ヲ'

                case 'ん':
                case 'ン':
                    return toKana === 'hiragana' ? 'ん' : 'ン'

                case 'ゃ':
                case 'ャ':
                    return toKana === 'hiragana' ? 'ゃ' : 'ャ'

                case 'ゅ':
                case 'ュ':
                    return toKana === 'hiragana' ? 'ゅ' : 'ュ'
                
                case 'ょ':
                case 'ョ':
                    return toKana === 'hiragana' ? 'ょ' : 'ョ'

                case 'っ':
                case 'ッ':
                    return toKana === 'hiragana' ? 'っ' : 'ッ'
            
                case 'ー':
                    if (toKana === 'katakana') return ''

                    const prevKana = textSplited[index - 1]

                    const prevSyllableTranscription = transcriptKanaEN(prevKana)

                    if (!prevSyllableTranscription) return ''

                    const prevLetter = prevSyllableTranscription.slice(-1)

                    const prevKanaLetter = getKanaVowel(prevLetter)

                    return prevKanaLetter
                default:
                    return kana
            }
        })

        kanaTransformed += transformedkanaSplited.join('')
    }
    return kanaTransformed
}

function getKanaVowel(syllable: string) {
    switch (syllable) {
        case 'a':
            return 'あ'
        case 'i':
            return 'い'
        case 'u':
            return 'う'
        case 'e':
            return 'え'
        case 'o':
            return 'お'
        default:
            return ''
    }
}